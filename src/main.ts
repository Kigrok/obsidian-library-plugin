import {
	Plugin,
	TFile,
	MarkdownView,
	Notice,
	normalizePath
} from 'obsidian'
import { progressPattern, type ICategory, type ILibrarySettings, DEFAULT_SETTINGS } from './constants'
import { tr } from './i18n'
import { LibrarySettingTab } from './settings'
import { ProviderRegistry } from './providers/registry'
import { OmdbProvider } from './providers/omdb'
import { OpenLibraryProvider } from './providers/openlibrary'
import type { NormalizedMetadata, SearchResult } from './providers/types'
import { PickTypeModal } from './ui/pickTypeModal'
import { AddContentModal } from './ui/addContentModal'
import { LibrarySearchModal } from './ui/librarySearchModal'
import { PromptModal } from './ui/promptModal'
import { LibraryView, LIBRARY_VIEW_TYPE } from './view'
import {
	toStr,
	toStrArray,
	sanitizeLink,
	parseProgress,
	parseWatched,
	todayDmy,
	sanitizeFilename,
	isTemplateFile,
	isEmptyValue,
	inferContentType
} from './util'

export default class LibraryPlugin extends Plugin {
	settings!: ILibrarySettings
	private registry = new ProviderRegistry()
	private refreshTimer: number | null = null
	private isRefreshing = false
	private refreshCooldowns = new Map<string, number>()
	private syncingLinks = new Set<string>()
	private linkTimers = new Map<string, number>()

	async onload(): Promise<void> {
		await this.loadSettings()
		this.registry.register(new OmdbProvider(() => this.settings.omdbApiKey))
		this.registry.register(new OpenLibraryProvider())
		this.addSettingTab(new LibrarySettingTab(this.app, this))

		this.registerView(LIBRARY_VIEW_TYPE, (leaf) => new LibraryView(leaf, this))
		this.addRibbonIcon('library', tr('view.title'), () => { void this.activateView() })

		const banner = (): number => window.setTimeout(() => this.refreshBanner(), 50)
		this.registerEvent(this.app.workspace.on('file-open', (file) => {
			banner()
			if (file instanceof TFile) window.setTimeout(() => { void this.syncNote(file) }, 400)
		}))
		this.registerEvent(this.app.workspace.on('layout-change', () => { banner() }))
		this.app.workspace.onLayoutReady(() => { this.refreshBanner() })

		this.registerEvent(
			this.app.workspace.on('active-leaf-change', () => {
				if (this.refreshTimer) window.clearTimeout(this.refreshTimer)
				this.refreshTimer = window.setTimeout(() => { void this.tryRefresh(false) }, 300)
				banner()
			})
		)

		this.registerEvent(
			this.app.metadataCache.on('changed', (file) => {
				if (this.app.workspace.getActiveFile()?.path === file.path) banner()
				if (this.syncingLinks.has(file.path)) return
				if (isTemplateFile(file.path)) return
				const existing = this.linkTimers.get(file.path)
				if (existing) window.clearTimeout(existing)
				this.linkTimers.set(file.path, window.setTimeout(() => {
					this.linkTimers.delete(file.path)
					void this.syncNote(file)
				}, 800))
			})
		)

		this.addCommand({
			id: 'open',
			name: tr('cmd.openLibrary'),
			callback: () => { void this.activateView() }
		})

		this.addCommand({
			id: 'add-content',
			name: tr('cmd.addContent'),
			callback: () => this.openAddContent()
		})

		this.addCommand({
			id: 'refresh-metadata',
			name: tr('cmd.refresh'),
			callback: () => { void this.tryRefresh(true) }
		})

		this.addCommand({
			id: 'search',
			name: tr('cmd.searchLibrary'),
			callback: () => this.openLibrarySearch()
		})

		this.addCommand({
			id: 'rebuild-graph-links',
			name: tr('cmd.rebuildLinks'),
			callback: () => { void this.rebuildGraphLinks() }
		})
	}

	onunload(): void {
		if (this.refreshTimer) window.clearTimeout(this.refreshTimer)
		for (const timer of this.linkTimers.values()) window.clearTimeout(timer)
		this.linkTimers.clear()
		this.refreshCooldowns.clear()
	}

	async saveSettings(): Promise<void> {
		await this.saveData(this.settings)
		this.refreshViews()
	}

	private async activateView(): Promise<void> {
		const { workspace } = this.app
		const existing = workspace.getLeavesOfType(LIBRARY_VIEW_TYPE)
		if (existing[0]) {
			void workspace.revealLeaf(existing[0])
			return
		}
		const leaf = workspace.getLeaf('tab')
		await leaf.setViewState({ type: LIBRARY_VIEW_TYPE, active: true })
		void workspace.revealLeaf(leaf)
	}

	private refreshViews(): void {
		for (const leaf of this.app.workspace.getLeavesOfType(LIBRARY_VIEW_TYPE)) {
			if (leaf.view instanceof LibraryView) leaf.view.render()
		}
	}

	openLibrarySearch(): void {
		const types = new Set(this.settings.categories.map(c => c.typeValue))
		const files = this.app.vault.getMarkdownFiles().filter(f => {
			if (isTemplateFile(f.path)) return false
			const type: unknown = this.app.metadataCache.getFileCache(f)?.frontmatter?.Type
			return typeof type === 'string' && types.has(type)
		})
		new LibrarySearchModal(this.app, files, (file) => {
			void this.app.workspace.getLeaf(false).openFile(file)
		}).open()
	}

	openAddContent(): void {
		const categories = this.settings.categories
		if (categories.length === 0) {
			new Notice(tr('modal.noCategories'))
			return
		}
		new PickTypeModal(this.app, categories, (category) => {
			const provider = this.registry.forType(category.contentType)
			if (!provider) {
				new PromptModal(this.app, tr('modal.search.placeholder'), (title) => {
					void this.createManual(category, title)
				}).open()
				return
			}
			new AddContentModal(this.app, provider, category.contentType, (result) => {
				void this.createFromResult(category, result)
			}).open()
		}).open()
	}

	private async createManual(category: ICategory, title: string): Promise<void> {
		const path = await this.uniqueNotePath(title, category.folder)
		const file = await this.app.vault.create(path, '')
		await this.app.fileManager.processFrontMatter(file, (fm: Record<string, unknown>) => {
			fm.Type = category.typeValue
			fm.Name = title
			fm['My Rating'] = null
			fm.Complete = false
			fm.Progress = ''
			fm.Date = todayDmy()
		})
		await this.ensureHub(category)
		await this.writeGraphLinks(file, category.typeValue, [], [])
		await this.app.workspace.getLeaf(false).openFile(file)
		new Notice(tr('notice.created', { name: title }))
	}

	private async createFromResult(category: ICategory, result: SearchResult): Promise<void> {
		const provider = this.registry.forType(category.contentType)
		if (!provider) return
		new Notice(tr('notice.searching'))
		const meta = await provider.fetch(result.sourceId, category.contentType, result.raw)
		if (!meta) {
			new Notice(tr('notice.notFound'))
			return
		}

		const path = await this.uniqueNotePath(result.title, category.folder)
		const file = await this.app.vault.create(path, '')

		await this.app.fileManager.processFrontMatter(file, (fm: Record<string, unknown>) => {
			fm.Type = category.typeValue
			this.applyMetaFields(fm, meta)
			fm.Progress = meta.progressTotal ? `0/${String(meta.progressTotal)}` : ''
			fm['My Rating'] = null
			fm.Complete = false
			fm.Date = todayDmy()
			fm.Source = provider.id
			fm['Source ID'] = result.sourceId
		})

		await this.ensureHub(category)
		await this.writeGraphLinks(
			file,
			category.typeValue,
			toStrArray(meta.fields.Genre),
			toStrArray(meta.fields.Creator)
		)

		await this.app.workspace.getLeaf(false).openFile(file)
		new Notice(tr('notice.created', { name: toStr(meta.fields.Name) || result.title }))
	}

	private async ensureHub(category: ICategory): Promise<void> {
		const name = sanitizeLink(category.typeValue)
		if (!name) return
		const dir = category.folder.trim()
		if (dir && !this.app.vault.getAbstractFileByPath(normalizePath(dir))) {
			try {
				await this.app.vault.createFolder(normalizePath(dir))
			} catch (e) {
				console.error('Library: hub folder error', e)
			}
		}
		const path = normalizePath(dir ? `${dir}/${name}.md` : `${name}.md`)
		if (this.app.vault.getAbstractFileByPath(path)) return
		await this.app.vault.create(path, `# ${category.name}\n`)
	}

	private async writeGraphLinks(
		file: TFile,
		typeValue: string,
		genres: string[],
		creators: string[]
	): Promise<void> {
		const targets = [typeValue, ...genres, ...creators].map(sanitizeLink).filter(Boolean)
		if (targets.length === 0) return
		const links = targets.map(t => `[[${t}]]`)
		const marker = '%%library-links%%'

		const cache = this.app.metadataCache.getFileCache(file)?.frontmatter
		const currentLinks = Array.isArray(cache?.Related) ? cache.Related.map(String) : []
		const sameLinks =
			currentLinks.length === links.length && currentLinks.every((v, i) => v === links[i])

		const body = await this.app.vault.read(file)
		const hasLegacy = body.includes(marker)
		if (sameLinks && !hasLegacy) return

		if (this.syncingLinks.has(file.path)) return
		this.syncingLinks.add(file.path)
		try {
			if (hasLegacy) {
				await this.app.vault.process(file, (data) => {
					const i = data.indexOf(marker)
					return i >= 0 ? data.slice(0, i).trimEnd() + '\n' : data
				})
			}
			if (!sameLinks) {
				await this.app.fileManager.processFrontMatter(file, (fm: Record<string, unknown>) => {
					fm.Related = links
				})
			}
		} finally {
			this.syncingLinks.delete(file.path)
		}
	}

	private async syncNote(file: TFile): Promise<void> {
		const fm = this.app.metadataCache.getFileCache(file)?.frontmatter
		if (!fm) return
		const category = this.settings.categories.find(c => c.typeValue === toStr(fm.Type))
		if (!category) return
		await this.syncCompleteProgress(file, fm)
		await this.ensureHub(category)
		await this.writeGraphLinks(file, category.typeValue, toStrArray(fm.Genre), toStrArray(fm.Creator))
	}

	private async syncCompleteProgress(file: TFile, fm: Record<string, unknown>): Promise<void> {
		if (fm.Complete !== true) return
		const match = toStr(fm.Progress).match(progressPattern)
		if (!match) return
		const watched = Number(match[1])
		const total = Number(match[2])
		if (total <= 0 || watched === total) return
		if (this.syncingLinks.has(file.path)) return
		this.syncingLinks.add(file.path)
		try {
			await this.app.fileManager.processFrontMatter(file, (current: Record<string, unknown>) => {
				current.Progress = `${String(total)}/${String(total)}`
			})
		} finally {
			this.syncingLinks.delete(file.path)
		}
	}

	private async rebuildGraphLinks(): Promise<void> {
		for (const category of this.settings.categories) await this.ensureHub(category)
		const types = new Set(this.settings.categories.map(c => c.typeValue))
		const files = this.app.vault.getMarkdownFiles().filter(f => {
			if (isTemplateFile(f.path)) return false
			const type: unknown = this.app.metadataCache.getFileCache(f)?.frontmatter?.Type
			return typeof type === 'string' && types.has(type)
		})
		let count = 0
		for (const file of files) {
			await this.syncNote(file)
			count++
		}
		new Notice(tr('notice.linksRebuilt', { count }))
	}

	private applyMetaFields(fm: Record<string, unknown>, meta: NormalizedMetadata): void {
		for (const [key, value] of Object.entries(meta.fields)) {
			if (isEmptyValue(value)) continue
			fm[key] = value
		}
	}

	private async uniqueNotePath(title: string, categoryFolder: string): Promise<string> {
		const folder = categoryFolder.trim()
		const base = sanitizeFilename(title)
		const dir = folder ? normalizePath(folder) : ''
		if (dir && !this.app.vault.getAbstractFileByPath(dir)) {
			try {
				await this.app.vault.createFolder(dir)
			} catch (e) {
				console.error('Library: folder create error', e)
			}
		}
		const build = (name: string): string => normalizePath(dir ? `${dir}/${name}.md` : `${name}.md`)
		let candidate = build(base)
		let counter = 2
		while (this.app.vault.getAbstractFileByPath(candidate)) {
			candidate = build(`${base} (${String(counter)})`)
			counter++
		}
		return candidate
	}

	private async tryRefresh(force: boolean): Promise<void> {
		if (this.isRefreshing) return
		const file = this.app.workspace.getActiveFile()
		if (!(file instanceof TFile)) return

		const cache = this.app.metadataCache.getFileCache(file)
		const fm: Record<string, unknown> | undefined = cache?.frontmatter
		if (!fm) return

		const category = this.settings.categories.find(c => c.typeValue === toStr(fm.Type))
		if (!category) return
		const provider = this.registry.forType(category.contentType)
		if (!provider) return
		const sourceId = toStr(fm['Source ID'])
		if (!sourceId) return

		if (!force) {
			const last = this.refreshCooldowns.get(file.path)
			if (last && Date.now() - last < 5 * 60 * 1000) return
		}
		this.refreshCooldowns.set(file.path, Date.now())

		this.isRefreshing = true
		try {
			const meta = await provider.fetch(sourceId, category.contentType)
			if (!meta) {
				if (force) new Notice(tr('notice.notFound'))
				return
			}
			const watched = parseWatched(fm.Progress)

			await this.app.fileManager.processFrontMatter(file, (current: Record<string, unknown>) => {
				for (const [key, value] of Object.entries(meta.fields)) {
					if (isEmptyValue(value)) continue
					if (isEmptyValue(current[key])) current[key] = value
				}
				if (typeof meta.fields.Season === 'number' && meta.fields.Season > Number(current.Season || 0)) {
					current.Season = meta.fields.Season
				}
				if (meta.progressTotal) {
					current.Progress = `${String(watched)}/${String(meta.progressTotal)}`
				}
			})

			if (force) new Notice(tr('notice.created', { name: toStr(meta.fields.Name) || file.basename }))
		} catch (e) {
			console.error('Library: refresh error', e)
		} finally {
			this.isRefreshing = false
		}
	}

	private refreshBanner(): void {
		const view = this.app.workspace.getActiveViewOfType(MarkdownView)
		if (!view || !view.file) return
		const sizer = view.containerEl.querySelector('.markdown-preview-sizer')
		if (!(sizer instanceof HTMLElement)) return
		sizer.querySelectorAll('.note-header').forEach(h => h.remove())

		const fm = this.app.metadataCache.getFileCache(view.file)?.frontmatter
		if (!fm) return
		if (!this.settings.categories.some(c => c.typeValue === toStr(fm.Type))) return

		const header = this.buildNoteHeader(view.file, fm)
		const props = sizer.querySelector('.metadata-container')
		if (props) {
			props.insertAdjacentElement('afterend', header)
		} else {
			sizer.insertBefore(header, sizer.firstChild)
		}
	}

	private buildNoteHeader(file: TFile, fm: Record<string, unknown>): HTMLElement {
		const cover = fm.Cover || fm.Image || fm.Baner
		const name = toStr(fm.Name) || file.basename
		const creator = fm.Creator || fm.Director || fm.Author || fm.Artist
		const creatorStr = creator ? toStr(creator) : ''
		const year = fm.Year ? toStr(fm.Year) : ''
		const endYear = fm['End Year'] ? toStr(fm['End Year']) : ''
		const season = fm.Season ? toStr(fm.Season) : ''
		const ratingIMDB = fm['Rating IMDB'] ? toStr(fm['Rating IMDB']) : ''
		const myRating = fm['My Rating'] ? toStr(fm['My Rating']) : ''
		const complete = fm.Complete === true
		const url = fm.URL ? toStr(fm.URL) : ''

		let progressPercent = 0
		if (fm.Progress != null) {
			progressPercent = parseProgress(fm.Progress)
		}

		const header = activeDocument.createElement('div')
		header.classList.add('note-header')

		const imgSide = activeDocument.createElement('div')
		imgSide.classList.add('note-header-cover')
		if (cover) {
			const img = activeDocument.createElement('img')
			const coverStr = toStr(cover)
			img.src = coverStr.startsWith('http')
				? coverStr
				: this.app.vault.adapter.getResourcePath(coverStr)
			imgSide.appendChild(img)
		}
		header.appendChild(imgSide)

		const infoSide = activeDocument.createElement('div')
		infoSide.classList.add('note-header-info')

		const titleEl = activeDocument.createElement('div')
		titleEl.classList.add('note-header-title')
		if (url) {
			const a = activeDocument.createElement('a')
			a.href = url
			a.setAttribute('target', '_blank')
			a.setAttribute('rel', 'noopener noreferrer')
			a.classList.add('external-link')
			a.setText(name)
			titleEl.appendChild(a)
		} else {
			titleEl.setText(name)
		}
		infoSide.appendChild(titleEl)

		const addRow = (label: string, value: string): void => {
			if (!value) return
			const row = activeDocument.createElement('div')
			row.classList.add('note-header-row')
			const b = activeDocument.createElement('b')
			b.setText(label + ': ')
			row.appendChild(b)
			row.appendText(value)
			infoSide.appendChild(row)
		}

		if (creatorStr) addRow(tr('header.creator'), creatorStr)
		const yearsStr = year + (endYear ? '–' + endYear : '')
		if (yearsStr) addRow(tr('header.years'), yearsStr)
		if (season) addRow(tr('header.seasons'), season)

		const genre = fm.Genre
		if (genre) {
			addRow(tr('header.genre'), toStr(genre))
		}

		if (ratingIMDB) addRow('IMDb', ratingIMDB)
		if (myRating) addRow(tr('header.myRating'), myRating)

		if (!complete && progressPercent > 0) {
			const progRow = activeDocument.createElement('div')
			progRow.classList.add('note-header-row')
			const b = activeDocument.createElement('b')
			b.setText(tr('header.progress') + ': ')
			progRow.appendChild(b)
			progRow.appendText(String(progressPercent) + '%')
			const bar = activeDocument.createElement('div')
			bar.classList.add('note-header-progress-bar')
			const fill = activeDocument.createElement('div')
			fill.classList.add('note-header-progress-fill')
			fill.setCssStyles({ width: String(progressPercent) + '%' })
			bar.appendChild(fill)
			progRow.appendChild(bar)
			infoSide.appendChild(progRow)
		}

		if (complete) {
			const doneRow = activeDocument.createElement('div')
			doneRow.classList.add('note-header-row', 'note-header-complete')
			doneRow.setText(tr('header.complete'))
			infoSide.appendChild(doneRow)
		}

		header.appendChild(infoSide)
		return header
	}

	private async loadSettings(): Promise<void> {
		const saved = (await this.loadData()) as Partial<ILibrarySettings> | null
		this.settings = Object.assign({}, DEFAULT_SETTINGS, saved)
		for (const cat of this.settings.categories) {
			if (!cat.contentType) cat.contentType = inferContentType(cat.typeValue)
			if (cat.folder === undefined) cat.folder = ''
		}
	}
}
