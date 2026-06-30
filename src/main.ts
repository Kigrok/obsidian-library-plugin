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
import { GoogleBooksProvider } from './providers/googlebooks'
import { BookAggregatorProvider } from './providers/bookAggregator'
import { RawgProvider } from './providers/rawg'
import { DeezerProvider } from './providers/deezer'
import { AnimeProvider } from './providers/anime'
import { ComicsProvider } from './providers/comics'
import type { NormalizedMetadata, SearchResult } from './providers/types'
import { PickTypeModal } from './ui/pickTypeModal'
import { AddContentModal } from './ui/addContentModal'
import { LibrarySearchModal } from './ui/librarySearchModal'
import { PromptModal } from './ui/promptModal'
import { DuplicateRemovalModal, type DuplicateGroup } from './ui/duplicateModal'
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
	inferContentType,
	coverSrc
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
		const googleBooks = new GoogleBooksProvider(() => this.settings.googleBooksApiKey)
		const openLibrary = new OpenLibraryProvider()
		this.registry.register(new OmdbProvider(() => this.settings.omdbApiKey))
		this.registry.register(new BookAggregatorProvider(googleBooks, openLibrary))
		this.registry.register(new RawgProvider(() => this.settings.rawgApiKey))
		this.registry.register(new DeezerProvider())
		this.registry.register(new AnimeProvider())
		this.registry.register(new ComicsProvider(() => this.settings.comicVineApiKey))
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

		this.addCommand({
			id: 'find-duplicates',
			name: tr('cmd.findDuplicates'),
			callback: () => this.openDuplicates()
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
		await this.app.fileManager.processFrontMatter(file, (fm) => {
			Object.assign(fm, {
				Type: category.typeValue,
				Name: title,
				'My Rating': null,
				Complete: false,
				Progress: '',
				Date: todayDmy(),
			})
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

		const url = toStr(meta.fields.URL)
		if (url) {
			const existing = this.findFileByUrl(url)
			if (existing) {
				new Notice(tr('notice.duplicate'))
				void this.app.workspace.getLeaf(false).openFile(existing)
				return
			}
		}

		const path = await this.uniqueNotePath(result.title, category.folder)
		const file = await this.app.vault.create(path, '')

		await this.app.fileManager.processFrontMatter(file, (fm) => {
			Object.assign(fm, {
				Type: category.typeValue,
				Progress: meta.progressTotal ? `0/${String(meta.progressTotal)}` : '',
				'My Rating': null,
				Complete: false,
				Date: todayDmy(),
				Source: provider.id,
				'Source ID': result.sourceId,
			})
			this.applyMetaFields(fm as Record<string, unknown>, meta)
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
					const s = String(data)
					const i = s.indexOf(marker)
					return i >= 0 ? s.slice(0, i).replace(/\s+$/, '') + '\n' : s
				})
			}
			if (!sameLinks) {
				await this.app.fileManager.processFrontMatter(file, (fm) => {
					Object.assign(fm, { Related: links })
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
			await this.app.fileManager.processFrontMatter(file, (current) => {
				Object.assign(current, { Progress: `${String(total)}/${String(total)}` })
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

	private findFileByUrl(url: string): TFile | null {
		const types = new Set(this.settings.categories.map(c => c.typeValue))
		for (const file of this.app.vault.getMarkdownFiles()) {
			if (isTemplateFile(file.path)) continue
			const fm = this.app.metadataCache.getFileCache(file)?.frontmatter
			if (!fm || typeof fm.Type !== 'string' || !types.has(fm.Type)) continue
			if (toStr(fm.URL) === url) return file
		}
		return null
	}

	findDuplicates(): DuplicateGroup[] {
		const types = new Set(this.settings.categories.map(c => c.typeValue))
		const urlMap = new Map<string, TFile[]>()

		for (const file of this.app.vault.getMarkdownFiles()) {
			if (isTemplateFile(file.path)) continue
			const fm = this.app.metadataCache.getFileCache(file)?.frontmatter
			if (!fm || typeof fm.Type !== 'string' || !types.has(fm.Type)) continue
			const url = toStr(fm.URL).trim()
			if (!url) continue
			const list = urlMap.get(url) || []
			list.push(file)
			urlMap.set(url, list)
		}

		const groups: DuplicateGroup[] = []
		for (const [url, files] of urlMap) {
			if (files.length > 1) {
				groups.push({ url, files })
			}
		}
		return groups
	}

	openDuplicates(): void {
		const groups = this.findDuplicates()
		if (groups.length === 0) {
			new Notice(tr('dup.none'))
			return
		}
		new DuplicateRemovalModal(this.app, groups, (removed) => {
			new Notice(tr('dup.removed', { count: removed }))
			this.refreshViews()
		}).open()
	}

	private applyMetaFields(fm: Record<string, unknown>, meta: NormalizedMetadata): void {
		const fields: Record<string, unknown> = meta.fields
		for (const [key, value] of Object.entries(fields)) {
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

			await this.app.fileManager.processFrontMatter(file, (current) => {
				const patch: Record<string, unknown> = {}
				const cur = current as Record<string, unknown>
				const fields: Record<string, unknown> = meta.fields
				for (const [key, value] of Object.entries(fields)) {
					if (isEmptyValue(value)) continue
					if (isEmptyValue(cur[key])) patch[key] = value
				}
				if (typeof meta.fields.Season === 'number' && meta.fields.Season > Number(cur.Season || 0)) {
					patch.Season = meta.fields.Season
				}
				if (meta.progressTotal) {
					patch.Progress = `${String(watched)}/${String(meta.progressTotal)}`
				}
				Object.assign(current, patch)
			})

			if (force) new Notice(tr('notice.refreshed', { name: toStr(meta.fields.Name) || file.basename }))
		} catch (e) {
			console.error('Library: refresh error', e)
			if (force) {
				new Notice(tr('notice.refreshError'))
			}
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
		const headerCover = coverSrc(this.app, cover)
		if (headerCover) {
			const img = activeDocument.createElement('img')
			img.src = headerCover
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
		const saved: unknown = await this.loadData()
		const data = saved && typeof saved === 'object' ? (saved as Partial<ILibrarySettings>) : null
		this.settings = Object.assign({}, DEFAULT_SETTINGS, data)
		if (!Array.isArray(this.settings.categories)) this.settings.categories = []
		for (const cat of this.settings.categories) {
			if (!cat.contentType) cat.contentType = inferContentType(cat.typeValue)
			if (cat.contentType === 'googlebook') cat.contentType = 'book'
			if (cat.folder === undefined) cat.folder = ''
		}
	}
}
