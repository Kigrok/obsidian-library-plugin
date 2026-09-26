import {
	Plugin,
	TFile,
	MarkdownView,
	Notice,
	normalizePath,
	setIcon
} from 'obsidian'
import { progressPattern, RATING_RT_ICON, type ICategory, type ILibrarySettings, type IStatsSettings, type IStatsTop, DEFAULT_SETTINGS } from './constants'
import { tr, trCount } from './i18n'
import { LibrarySettingTab } from './settings'
import { ProviderRegistry } from './providers/registry'
import { OmdbProvider } from './providers/omdb'
import { OpenLibraryProvider, findChapters } from './providers/openlibrary'
import { GoogleBooksProvider } from './providers/googlebooks'
import { BookAggregatorProvider } from './providers/bookAggregator'
import { CinemetaEnricher } from './providers/cinemeta'
import { RawgProvider } from './providers/rawg'
import { GameAggregatorProvider } from './providers/gameAggregator'
import { DeezerProvider } from './providers/deezer'
import { AnimeProvider } from './providers/anime'
import { ComicsProvider } from './providers/comics'
import { SteamProvider } from './providers/steam'
import { TmdbEnricher } from './providers/tmdb'
import { isContentType } from './providers/types'
import type { ContentProvider, NormalizedMetadata, SearchResult } from './providers/types'
import { PickTypeModal } from './ui/pickTypeModal'
import { AddContentModal } from './ui/addContentModal'
import { LibrarySearchModal } from './ui/librarySearchModal'
import { PromptModal } from './ui/promptModal'
import { DuplicateRemovalModal, type DuplicateGroup } from './ui/duplicateModal'
import { ShareModal, shareTargetFromFile } from './ui/shareModal'
import { aniListViewer, fetchList, listStatus, pushEntry, type AniListEntry } from './anilistSync'
import { LibraryView, LIBRARY_VIEW_TYPE } from './view'
import { createEmbedPlayer, toEmbed } from './trailer'
import { applyEpisodeChange, followProgress, hasChapters, mergeSeasons, seasonsOf, setChapters, type EpisodeChange, type TrackKind } from './episodes'
import { ChaptersModal } from './ui/chaptersModal'
import { TrailerModal } from './ui/trailerModal'
import { Lightbox } from './ui/lightbox'
import {
	toStr,
	toStrArray,
	parseProgress,
	parseWatched,
	todayDmy,
	sanitizeFilename,
	isTemplateFile,
	isEmptyValue,
	inferContentType,
	runtimeMinutes,
	plausibleRuntime,
	totalRuntimeMinutes,
	watchedRuntimeMinutes,
	formatRuntime,
	coverSrc,
	coverValue,
	sameTitle,
	safeUrl,
	linkLabel,
	toLinks
} from './util'

// Properties stored as links: every genre's, creator's and actor's note lists
// the title among its backlinks, and the graph draws them.
const LINK_FIELDS = ['Genre', 'Creator', 'Cast']

// The background metadata pass waits for the vault to settle, then walks the
// library one note at a time so the sources are never hit in a burst.
const ENRICH_START_DELAY = 10 * 1000
const ENRICH_STEP_DELAY = 700

export default class LibraryPlugin extends Plugin {
	settings!: ILibrarySettings
	private registry = new ProviderRegistry()
	private refreshTimer: number | null = null
	private bannerTimer: number | null = null
	private bannerRetries = 0
	private isRefreshing = false
	private refreshCooldowns = new Map<string, number>()
	private syncingLinks = new Set<string>()
	private linkTimers = new Map<string, number>()
	private enrichTimer: number | null = null
	private enrichSleepTimer: number | null = null
	private enrichWait: (() => void) | null = null
	private enrichRunning = false
	private enrichAgain = false
	private unloaded = false
	private keySignature = ''
	private lightbox: Lightbox | null = null
	// Seasons unfolded into their episodes, per note; screen state only.
	private openSeasons = new Map<string, Set<number>>()
	// Books whose table of contents was looked up this session.
	private chapterLookups = new Set<string>()

	async onload(): Promise<void> {
		await this.loadSettings()
		const googleBooks = new GoogleBooksProvider(() => this.settings.googleBooksApiKey)
		const openLibrary = new OpenLibraryProvider()
		const tmdb = new TmdbEnricher(() => this.settings.tmdbApiKey)
		// Cinemeta is keyless, so trailer/stills/seasons work without any setup;
		// TMDB comes first and wins where both have data (richer season ratings).
		this.registry.register(
			new OmdbProvider(() => this.settings.omdbApiKey, [tmdb, new CinemetaEnricher()])
		)
		this.registry.register(new BookAggregatorProvider(googleBooks, openLibrary))
		this.registry.register(new GameAggregatorProvider(
			new RawgProvider(() => this.settings.rawgApiKey),
			new SteamProvider()
		))
		this.registry.register(new DeezerProvider())
		this.registry.register(new AnimeProvider())
		this.registry.register(new ComicsProvider(() => this.settings.comicVineApiKey))
		this.addSettingTab(new LibrarySettingTab(this.app, this))

		this.registerView(LIBRARY_VIEW_TYPE, (leaf) => new LibraryView(leaf, this))
		this.addRibbonIcon('library', tr('view.title'), () => { void this.activateView() })

		const banner = (): void => {
			this.bannerRetries = 0
			if (this.bannerTimer) window.clearTimeout(this.bannerTimer)
			this.bannerTimer = window.setTimeout(() => this.refreshBanner(), 50)
		}
		this.registerEvent(this.app.workspace.on('file-open', (file) => {
			banner()
			if (file instanceof TFile) {
				const existing = this.linkTimers.get(file.path)
				if (existing) window.clearTimeout(existing)
				this.linkTimers.set(file.path, window.setTimeout(() => {
					this.linkTimers.delete(file.path)
					void this.syncNote(file)
				}, 400))
			}
		}))
		this.registerEvent(this.app.workspace.on('layout-change', () => { banner() }))
		this.app.workspace.onLayoutReady(() => {
			if (this.unloaded) return
			// Registered only now: at startup the cache re-indexes every note
			// changed while the app was closed (or by sync), and none of them
			// needs its links rewritten before the app is usable.
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
			this.refreshBanner()
			this.scheduleEnrich(ENRICH_START_DELAY)
		})
		this.keySignature = this.apiKeySignature()

		this.registerEvent(
			this.app.workspace.on('active-leaf-change', () => {
				if (this.refreshTimer) window.clearTimeout(this.refreshTimer)
				this.refreshTimer = window.setTimeout(() => { void this.tryRefresh(false) }, 300)
				banner()
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
			checkCallback: (checking: boolean) => {
				if (!this.activeLibraryFile()) return false
				if (!checking) void this.tryRefresh(true)
				return true
			}
		})

		this.addCommand({
			id: 'refresh-all-metadata',
			name: tr('cmd.refreshAll'),
			callback: () => { void this.enrichPass(true) }
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

		this.addCommand({
			id: 'share-current',
			name: tr('cmd.share'),
			checkCallback: (checking: boolean) => {
				const file = this.app.workspace.getActiveFile()
				const target = shareTargetFromFile(this.app, file)
				const isLibrary = !!target && this.settings.categories.some(
					c => c.typeValue === toStr(target.fm.Type)
				)
				if (!isLibrary) return false
				if (!checking && target) new ShareModal(this.app, target.fm, target.name, this.coverProperty()).open()
				return true
			}
		})

		this.addCommand({
			id: 'anilist-push',
			name: tr('cmd.anilistPush'),
			checkCallback: (checking: boolean) => {
				const file = this.app.workspace.getActiveFile()
				const fm = file ? this.app.metadataCache.getFileCache(file)?.frontmatter : undefined
				if (!fm || toStr(fm.Source) !== 'anilist' || !toStr(fm['Source ID'])) return false
				if (!checking) void this.anilistPushCurrent()
				return true
			}
		})

		this.addCommand({
			id: 'anilist-pull',
			name: tr('cmd.anilistPull'),
			callback: () => { void this.anilistPull() }
		})
	}

	onunload(): void {
		this.unloaded = true
		if (this.refreshTimer) window.clearTimeout(this.refreshTimer)
		if (this.bannerTimer) window.clearTimeout(this.bannerTimer)
		for (const timer of this.linkTimers.values()) window.clearTimeout(timer)
		this.refreshTimer = null
		this.bannerTimer = null
		this.linkTimers.clear()
		this.refreshCooldowns.clear()
		if (this.enrichTimer) window.clearTimeout(this.enrichTimer)
		if (this.enrichSleepTimer) window.clearTimeout(this.enrichSleepTimer)
		this.enrichTimer = null
		this.enrichSleepTimer = null
		const resume = this.enrichWait
		this.enrichWait = null
		if (resume) resume()
		// The headers and the lightbox live in Obsidian's own DOM; a disabled
		// plugin must not leave them behind in the open notes.
		this.lightbox?.close()
		this.lightbox = null
		for (const leaf of this.app.workspace.getLeavesOfType('markdown')) {
			leaf.view.containerEl.querySelectorAll('.note-header-wrap').forEach(h => h.remove())
		}
	}

	async saveSettings(): Promise<void> {
		// A freshly added key unlocks metadata the earlier pass could not fetch,
		// so the version marks are dropped and the walk starts over — once the
		// typing has stopped, not with every half-entered key.
		const signature = this.apiKeySignature()
		if (signature !== this.keySignature) {
			this.keySignature = signature
			this.settings.enrichMarks = {}
			this.scheduleEnrich(ENRICH_START_DELAY)
		}
		await this.persistSettings()
		this.refreshViews()
	}

	// data.json changed on disk — usually another device through sync. Reload,
	// or the next save here would overwrite what was changed there.
	async onExternalSettingsChange(): Promise<void> {
		try {
			await this.loadSettings()
		} catch (e) {
			console.error('Library: settings reload error', e)
			return
		}
		this.keySignature = this.apiKeySignature()
		this.refreshViews()
	}

	// Writes the settings file without re-rendering the open library views:
	// the view calls this for state it already applied to its own DOM.
	async persistSettings(): Promise<void> {
		await this.saveData(this.settings)
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
			const missing = this.missingKey(category.contentType)
			if (missing) {
				new Notice(tr('notice.keyRequired', { name: missing }))
				return
			}
			new AddContentModal(this.app, provider, category.contentType, (result) => {
				void this.createFromResult(category, result)
			}).open()
		}).open()
	}

	// Movies, series and comics have no keyless source: without the key a
	// search can only come back empty, so name the missing key instead.
	private missingKey(type: ICategory['contentType']): string | null {
		if ((type === 'movie' || type === 'series') && !this.settings.omdbApiKey.trim()) return tr('settings.omdb.name')
		if (type === 'comic' && !this.settings.comicVineApiKey.trim()) return tr('settings.comicvine.name')
		return null
	}

	// The active note, when it belongs to a category that has a source.
	private activeLibraryFile(): TFile | null {
		const file = this.app.workspace.getActiveFile()
		const fm = file ? this.app.metadataCache.getFileCache(file)?.frontmatter : undefined
		const category = fm ? this.settings.categories.find(c => c.typeValue === toStr(fm.Type)) : undefined
		return file && category && this.registry.forType(category.contentType) ? file : null
	}

	private async createManual(category: ICategory, title: string): Promise<void> {
		try {
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
			await this.app.workspace.getLeaf(false).openFile(file)
			new Notice(tr('notice.created', { name: title }))
		} catch (e) {
			console.error('Library: create note error', e)
			new Notice(tr('notice.createFailed'))
		}
	}

	private async createFromResult(category: ICategory, result: SearchResult): Promise<void> {
		const provider = this.registry.forType(category.contentType)
		if (!provider) return
		new Notice(tr('notice.searching'))
		try {
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

			await this.app.workspace.getLeaf(false).openFile(file)
			new Notice(tr('notice.created', { name: toStr(meta.fields.Name) || result.title }))
		} catch (e) {
			console.error('Library: create note error', e)
			new Notice(tr('notice.createFailed'))
		}
	}

	// Genre, Creator and Cast are links in their own properties: plain names —
	// typed by hand or left by an earlier version — become links here, and the
	// Related property earlier versions kept is dropped. One write covers all.
	private async syncLinkFields(file: TFile, fields: Record<string, unknown>): Promise<void> {
		const marker = '%%library-links%%'

		const cache = this.app.metadataCache.getFileCache(file)?.frontmatter
		const same = (current: unknown, links: string[]): boolean =>
			Array.isArray(current) && current.length === links.length && current.every((v, i) => String(v) === links[i])
		const patch: Record<string, string[]> = {}
		for (const key of LINK_FIELDS) {
			const links = toLinks(fields[key])
			if (links.length > 0 && !same(cache?.[key], links)) patch[key] = links
		}
		const dropRelated = cache?.Related !== undefined
		const changed = Object.keys(patch).length > 0 || dropRelated

		const body = await this.app.vault.read(file)
		const hasLegacy = body.includes(marker)
		if (!changed && !hasLegacy) return

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
			if (changed) {
				await this.app.fileManager.processFrontMatter(file, (fm) => {
					const current = fm as Record<string, unknown>
					Object.assign(current, patch)
					delete current.Related
				})
			}
		} finally {
			this.syncingLinks.delete(file.path)
		}
	}

	private async syncNote(file: TFile): Promise<void> {
		const fm = this.app.metadataCache.getFileCache(file)?.frontmatter
		if (!fm) return
		if (!this.settings.categories.some(c => c.typeValue === toStr(fm.Type))) return
		try {
			await this.syncCompleteProgress(file, fm)
			await this.syncLinkFields(file, fm)
		} catch (e) {
			// A note whose YAML does not parse must not stop the ones after it.
			console.error('Library: note sync error', file.path, e)
		}
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
				const kind = this.trackKind(fm)
				if (kind) followProgress(current as Record<string, unknown>, kind)
			})
		} finally {
			this.syncingLinks.delete(file.path)
		}
	}

	private async rebuildGraphLinks(): Promise<void> {
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

	private async anilistPushCurrent(): Promise<void> {
		const token = this.settings.anilistToken.trim()
		if (!token) { new Notice(tr('notice.anilist.noToken')); return }
		const file = this.app.workspace.getActiveFile()
		if (!file) { new Notice(tr('notice.anilist.notAnime')); return }
		const fm = this.app.metadataCache.getFileCache(file)?.frontmatter
		const sourceId = fm ? toStr(fm['Source ID']) : ''
		if (!fm || toStr(fm.Source) !== 'anilist' || !sourceId) {
			new Notice(tr('notice.anilist.notAnime'))
			return
		}
		const mediaId = Number(sourceId)
		if (!Number.isFinite(mediaId)) { new Notice(tr('notice.anilist.notAnime')); return }
		const watched = parseWatched(fm.Progress)
		const status = listStatus(fm.Complete === true, watched)
		const rating = Number(toStr(fm['My Rating']))
		const scoreRaw = Number.isFinite(rating) && rating > 0 ? Math.min(100, Math.round(rating * 10)) : null
		const ok = await pushEntry(token, mediaId, watched, status, scoreRaw)
		new Notice(ok
			? tr('notice.anilist.pushed', { name: toStr(fm.Name) || file.basename })
			: tr('notice.anilist.pushFailed'))
	}

	private async anilistPull(): Promise<void> {
		const token = this.settings.anilistToken.trim()
		if (!token) { new Notice(tr('notice.anilist.noToken')); return }
		const viewer = await aniListViewer(token)
		if (!viewer) { new Notice(tr('notice.anilist.pullFailed')); return }
		new Notice(tr('notice.anilist.pulling'))
		const entries = await fetchList(token, viewer.id)
		if (!entries) {
			new Notice(tr('notice.anilist.pullFailed'))
			return
		}
		const byId = new Map<number, AniListEntry>()
		for (const e of entries) byId.set(e.mediaId, e)

		let updated = 0
		for (const file of this.app.vault.getMarkdownFiles()) {
			if (isTemplateFile(file.path)) continue
			const fm = this.app.metadataCache.getFileCache(file)?.frontmatter
			if (!fm || toStr(fm.Source) !== 'anilist') continue
			const entry = byId.get(Number(toStr(fm['Source ID'])))
			if (!entry) continue
			// Only advance forward — never regress a note that is locally further along or already
			// complete. This makes pull safe to run over hand-edited notes (no silent data loss).
			const localWatched = parseWatched(fm.Progress)
			const localComplete = fm.Complete === true
			const newWatched = Math.max(localWatched, entry.progress)
			const newComplete = localComplete || entry.status === 'COMPLETED'
			if (newWatched === localWatched && newComplete === localComplete) continue
			// Keep the note's episode total so Progress stays in the "watched/total" shape the
			// rest of the plugin parses; never let total fall below watched (a stale note total
			// smaller than AniList progress would otherwise write nonsense like "15/12").
			const match = toStr(fm.Progress).match(progressPattern)
			const noteTotal = match ? Number(match[2]) : 0
			const total = String(Math.max(noteTotal, newWatched, 1))
			try {
				await this.app.fileManager.processFrontMatter(file, (current) => {
					Object.assign(current, {
						Progress: `${String(newWatched)}/${total}`,
						Complete: newComplete
					})
					followProgress(current as Record<string, unknown>)
				})
				updated++
			} catch (e) {
				console.error('Library: AniList pull error', file.path, e)
			}
		}
		new Notice(tr('notice.anilist.pulled', { count: updated }))
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

	coverProperty(): string {
		return this.settings.coverProperty.trim() || 'Cover'
	}

	private fieldTarget(key: string): string {
		return key === 'Cover' ? this.coverProperty() : key
	}

	private applyMetaFields(fm: Record<string, unknown>, meta: NormalizedMetadata): void {
		const fields: Record<string, unknown> = meta.fields
		for (const [key, value] of Object.entries(fields)) {
			if (isEmptyValue(value)) continue
			fm[this.fieldTarget(key)] = LINK_FIELDS.indexOf(key) >= 0 ? toLinks(value) : value
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

	// New fields (trailer, stills, seasons, runtime, the extra ratings) reach
	// notes that already exist only by fetching them again. The walk runs once
	// per plugin version in the background: one note at a time, marks in the
	// settings file, so a release adds its metadata to the whole library on its
	// own and later launches stay quiet.
	private scheduleEnrich(delay: number): void {
		if (this.unloaded) return
		// A walk already under way finishes first and then starts over, so a
		// key entered mid-walk still reaches the notes it has passed.
		if (this.enrichRunning) {
			this.enrichAgain = true
			return
		}
		if (this.enrichTimer) window.clearTimeout(this.enrichTimer)
		this.enrichTimer = window.setTimeout(() => {
			this.enrichTimer = null
			void this.enrichPass(false)
		}, delay)
	}

	private async enrichPass(force: boolean): Promise<void> {
		if (this.enrichRunning) return
		this.enrichRunning = true
		let updated = 0
		let marked = 0
		try {
			if (force) new Notice(tr('notice.searching'))
			const files = this.app.vault.getMarkdownFiles()
			let complete = true
			for (const file of files) {
				if (this.unloaded) return
				if (isTemplateFile(file.path)) continue
				const fm = this.app.metadataCache.getFileCache(file)?.frontmatter
				if (!fm) continue
				const category = this.settings.categories.find(c => c.typeValue === toStr(fm.Type))
				if (!category) continue
				if (!force && this.settings.enrichMarks[file.path] === this.manifest.version) continue
				const provider = this.registry.forType(category.contentType)
				const sourceId = toStr(fm['Source ID'])
				// A hand-made note (no source id), a category without a source and
				// Open Library (nothing to fetch by id) take no request.
				const fetches = !!provider && !!sourceId && provider.refreshable?.(sourceId) !== false
				// Offline every fetch would fail: the rest stays unmarked for the
				// next launch instead of being walked for nothing.
				if (fetches && !navigator.onLine) {
					complete = false
					break
				}
				// Every note the walk reaches is also brought to the current link
				// format (Genre, Creator and Cast as links, no Related) — all an
				// update needs from a hand-made note.
				await this.syncNote(file)
				if (this.unloaded) return

				// Only a note that really got its metadata is marked: a failed
				// request (quota, outage) is retried by the next pass. The mark goes
				// in before the pause, so a key entered during it clears it too.
				let ok = true
				if (fetches && provider) {
					for (let i = 0; i < 10 && this.isRefreshing && !this.unloaded; i++) {
						await this.enrichSleep(500)
					}
					if (this.unloaded) return
					ok = await this.enrichNote(file, category.contentType, provider, sourceId)
				}
				if (ok) {
					if (fetches) updated++
					this.settings.enrichMarks[file.path] = this.manifest.version
					marked++
					if (marked % 10 === 0) await this.persistSettings()
				}
				if (fetches) {
					await this.enrichSleep(ENRICH_STEP_DELAY)
					if (this.unloaded) return
				}
			}
			if (complete && this.pruneEnrichMarks(files)) marked++
			if (marked > 0) await this.persistSettings()
		} catch (e) {
			console.error('Library: metadata pass error', e)
		} finally {
			this.enrichRunning = false
			if (this.enrichAgain && !this.unloaded) {
				this.enrichAgain = false
				this.scheduleEnrich(ENRICH_STEP_DELAY)
			}
		}
		if (force) new Notice(tr('notice.refreshedAll', { count: String(updated) }))
	}

	// Marks are keyed by path, so a renamed or deleted note leaves its mark
	// behind; a finished walk drops those instead of growing data.json forever.
	private pruneEnrichMarks(files: TFile[]): boolean {
		const present = new Set(files.map(file => file.path))
		let pruned = false
		for (const path of Object.keys(this.settings.enrichMarks)) {
			if (present.has(path)) continue
			delete this.settings.enrichMarks[path]
			pruned = true
		}
		return pruned
	}

	private async enrichNote(
		file: TFile,
		contentType: ICategory['contentType'],
		provider: ContentProvider,
		sourceId: string
	): Promise<boolean> {
		try {
			const meta = await provider.fetch(sourceId, contentType)
			if (!meta) return false
			await this.app.fileManager.processFrontMatter(file, (current) => {
				this.applyMetaPatch(current as Record<string, unknown>, meta)
			})
			return true
		} catch (e) {
			// A single unreachable source must not stop the walk.
			console.error('Library: metadata pass error', e)
			return false
		}
	}

	// Its own timer: sharing the scheduling one let a key change cancel this
	// sleep, and the walk then waited forever with `enrichRunning` still set.
	private enrichSleep(ms: number): Promise<void> {
		return new Promise<void>(resolve => {
			this.enrichWait = resolve
			this.enrichSleepTimer = window.setTimeout(() => {
				this.enrichSleepTimer = null
				this.enrichWait = null
				resolve()
			}, ms)
		})
	}

	private apiKeySignature(): string {
		return [
			this.settings.omdbApiKey,
			this.settings.googleBooksApiKey,
			this.settings.rawgApiKey,
			this.settings.comicVineApiKey,
			this.settings.anilistClientId,
			this.settings.anilistToken,
			this.settings.tmdbApiKey
		].join('|')
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

		if (force) {
			const missing = this.missingKey(category.contentType)
			if (missing) {
				new Notice(tr('notice.keyRequired', { name: missing }))
				return
			}
		} else {
			const last = this.refreshCooldowns.get(file.path)
			if (last && Date.now() - last < 5 * 60 * 1000) return
		}
		this.refreshCooldowns.set(file.path, Date.now())

		this.isRefreshing = true
		try {
			if (!sourceId) {
				await this.adoptNote(file, fm, category, provider, force)
				return
			}

			const meta = await provider.fetch(sourceId, category.contentType)
			if (!meta) {
				if (force) new Notice(tr('notice.notFound'))
				return
			}

			await this.app.fileManager.processFrontMatter(file, (current) => {
				this.applyMetaPatch(current as Record<string, unknown>, meta)
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

	// A note written by hand has no Source ID, so there is nothing to look up by
	// id. Search the category's source by the note's own name: a confident match
	// is adopted silently, anything else waits for the explicit command, which
	// opens the picker with the name already in the search field.
	private async adoptNote(
		file: TFile,
		fm: Record<string, unknown>,
		category: ICategory,
		provider: ContentProvider,
		force: boolean
	): Promise<void> {
		const name = toStr(fm.Name) || file.basename
		const year = Number(fm.Year) || 0
		const results = await provider.search(name, category.contentType)
		// Silent adoption needs one unambiguous hit: a remake shares the title
		// ("Dune" 1984 and 2021), and the wrong one would fill the note with
		// another work's metadata.
		const matches = results.filter(result =>
			sameTitle(result.title, name) && (!year || result.year === null || result.year === year)
		)
		const [match] = matches
		if (!match || matches.length > 1) {
			if (force) {
				new AddContentModal(
					this.app,
					provider,
					category.contentType,
					(result) => { void this.attachSource(file, category, provider, result) },
					name
				).open()
			}
			return
		}
		await this.attachSource(file, category, provider, match)
	}

	private async attachSource(
		file: TFile,
		category: ICategory,
		provider: ContentProvider,
		result: SearchResult
	): Promise<void> {
		const meta = await provider.fetch(result.sourceId, category.contentType, result.raw)
		if (!meta) {
			new Notice(tr('notice.notFound'))
			return
		}
		await this.app.fileManager.processFrontMatter(file, (current) => {
			const cur = current as Record<string, unknown>
			cur.Source = provider.id
			cur['Source ID'] = result.sourceId
			this.applyMetaPatch(cur, meta)
		})
		new Notice(tr('notice.refreshed', { name: toStr(meta.fields.Name) || file.basename }))
	}

	// Refresh never overwrites a value that is already in the note: whatever the
	// user typed by hand (or edited after a fetch) wins.
	private applyMetaPatch(current: Record<string, unknown>, meta: NormalizedMetadata): void {
		const fields: Record<string, unknown> = meta.fields
		for (const [key, value] of Object.entries(fields)) {
			if (isEmptyValue(value)) continue
			const target = this.fieldTarget(key)
			// For the cover, any known cover property counts as present so a renamed
			// property does not duplicate the value into a second field.
			const present = key === 'Cover' ? coverValue(current, this.coverProperty()) : current[target]
			if (key === 'Seasons' && !isEmptyValue(present)) current[target] = mergeSeasons(present, value)
			else if (isEmptyValue(present)) current[target] = LINK_FIELDS.indexOf(key) >= 0 ? toLinks(value) : value
			// A junk runtime stored by an earlier pass must not shadow the
			// trustworthy value that arrives behind it.
			else if (key === 'Runtime' && plausibleRuntime(present) === null && plausibleRuntime(value) !== null) current[target] = value
		}
		if (typeof meta.fields.Season === 'number' && meta.fields.Season > Number(current.Season || 0)) {
			current.Season = meta.fields.Season
		}
		if (meta.progressTotal && !hasChapters(current)) {
			const watched = parseWatched(current.Progress)
			current.Progress = `${String(watched)}/${String(meta.progressTotal)}`
		}
	}

	private refreshBanner(): void {
		const view = this.app.workspace.getActiveViewOfType(MarkdownView)
		if (!view || !view.file) return
		const sizer = view.containerEl.querySelector('.markdown-preview-sizer')
		if (!(sizer instanceof HTMLElement)) return
		sizer.querySelectorAll('.note-header-wrap').forEach(h => h.remove())

		const fm = this.app.metadataCache.getFileCache(view.file)?.frontmatter
		if (!fm) return
		if (!this.settings.categories.some(c => c.typeValue === toStr(fm.Type))) return

		// On a freshly opened note the properties panel can appear a beat after
		// the first render; a fallback insert would sit above it, so retry a few
		// times until the header can anchor inside the header section.
		if (!this.insertNoteHeader(view.file, sizer, fm) && this.bannerRetries < 5) {
			this.bannerRetries += 1
			if (this.bannerTimer) window.clearTimeout(this.bannerTimer)
			this.bannerTimer = window.setTimeout(() => this.refreshBanner(), 80)
		}
	}

	// The header hangs off the properties panel (or the inline title when
	// properties are hidden) inside `mod-header` — the one part of the reading
	// view that survives its section re-renders. Returns false when it had to
	// fall back to a direct sizer child (pre-1.13 renderers, or too early).
	private insertNoteHeader(file: TFile, root: HTMLElement, fm: Record<string, unknown>): boolean {
		root.querySelectorAll('.note-header-wrap').forEach(h => h.remove())
		const header = this.buildNoteHeader(file, fm)
		const props = root.querySelector('.metadata-container')
		const title = root.querySelector('.mod-header .inline-title')
		const modHeader = root.querySelector('.mod-header')
		if (props) {
			props.insertAdjacentElement('afterend', header)
		} else if (title) {
			title.insertAdjacentElement('afterend', header)
		} else if (modHeader) {
			modHeader.appendChild(header)
		} else if (root.childElementCount > 0) {
			// Pre-1.13 renderers accept a plain child of the sizer; a sizer that
			// is still empty has not rendered at all, so wait for the retry.
			root.insertBefore(header, root.firstChild)
		} else {
			return false
		}
		return true
	}

	private buildNoteHeader(file: TFile, fm: Record<string, unknown>): HTMLElement {
		const cover = coverValue(fm, this.coverProperty())
		const name = toStr(fm.Name) || file.basename
		const creatorStr = toStrArray(fm.Creator || fm.Director || fm.Author || fm.Artist).map(linkLabel).join(', ')
		const cast = toStrArray(fm.Cast).map(linkLabel)
		const year = fm.Year ? toStr(fm.Year) : ''
		const endYear = fm['End Year'] ? toStr(fm['End Year']) : ''
		const season = fm.Season ? toStr(fm.Season) : ''
		const ratingIMDB = fm['Rating IMDB'] ? toStr(fm['Rating IMDB']) : ''
		const ratingRT = fm['Rating RT'] ? toStr(fm['Rating RT']) + '%' : ''
		const ratingRawg = fm['Rating RAWG'] ? toStr(fm['Rating RAWG']) : ''
		const ratingMc = fm['Rating MC'] ? toStr(fm['Rating MC']) : ''
		const myRating = fm['My Rating'] ? toStr(fm['My Rating']) : ''
		const complete = fm.Complete === true
		const url = safeUrl(fm.URL)

		let progressPercent = 0
		if (fm.Progress != null) {
			progressPercent = parseProgress(fm.Progress)
		}

		const header = createDiv()
		header.classList.add('note-header')

		const imgSide = createDiv()
		imgSide.classList.add('note-header-cover')
		const headerCover = coverSrc(this.app, cover)
		if (headerCover) {
			const img = createEl('img')
			img.src = headerCover
			imgSide.appendChild(img)
		}
		header.appendChild(imgSide)

		const infoSide = createDiv()
		infoSide.classList.add('note-header-info')

		const titleEl = createDiv()
		titleEl.classList.add('note-header-title')
		if (url) {
			const a = createEl('a')
			a.href = url
			a.setAttribute('target', '_blank')
			a.setAttribute('rel', 'noopener noreferrer')
			a.classList.add('external-link')
			a.setText(name)
			titleEl.appendChild(a)
		} else {
			titleEl.setText(name)
		}

		const shareBtn = createEl('button')
		shareBtn.classList.add('note-header-share')
		shareBtn.setAttribute('aria-label', tr('share.title'))
		setIcon(shareBtn, 'share-2')
		shareBtn.addEventListener('click', (e) => {
			e.preventDefault()
			new ShareModal(this.app, fm, name, this.coverProperty()).open()
		})
		titleEl.appendChild(shareBtn)
		infoSide.appendChild(titleEl)

		const addRow = (label: string, value: string, separator = ': '): void => {
			if (!value) return
			const row = createDiv()
			row.classList.add('note-header-row')
			const b = createEl('b')
			b.setText(label + separator)
			row.appendChild(b)
			row.appendText(value)
			infoSide.appendChild(row)
		}

		if (creatorStr) addRow(tr('header.creator'), creatorStr)
		if (cast.length > 0) addRow(tr('header.cast'), cast.join(', '))
		const yearsStr = year + (endYear ? '–' + endYear : '')
		if (yearsStr) addRow(tr('header.years'), yearsStr)
		if (season) addRow(tr('header.seasons'), season)

		const genres = toStrArray(fm.Genre).map(linkLabel)
		if (genres.length > 0) addRow(tr('header.genre'), genres.join(', '))

		const runtime = runtimeMinutes(fm.Runtime)
		if (runtime !== null) addRow(tr('header.runtime'), formatRuntime(totalRuntimeMinutes(fm, runtime)))

		if (ratingIMDB) addRow('IMDb', ratingIMDB)
		if (ratingRT) addRow(RATING_RT_ICON, ratingRT, ' ')
		if (ratingRawg) addRow('RAWG', ratingRawg)
		if (ratingMc) addRow('MC', ratingMc)
		if (myRating) addRow(tr('header.myRating'), myRating)

		if (!complete && progressPercent > 0) {
			const progRow = createDiv()
			progRow.classList.add('note-header-row')
			const b = createEl('b')
			b.setText(tr('header.progress') + ': ')
			progRow.appendChild(b)
			progRow.appendText(String(progressPercent) + '%')
			// How much of that progress is on the clock — the part a viewer
			// actually wants when a season is still half unwatched.
			const watchedMinutes = watchedRuntimeMinutes(fm)
			if (watchedMinutes > 0) progRow.appendText(' · ' + formatRuntime(watchedMinutes))
			const bar = createDiv()
			bar.classList.add('note-header-progress-bar')
			const fill = createDiv()
			fill.classList.add('note-header-progress-fill')
			fill.setCssStyles({ width: String(progressPercent) + '%' })
			bar.appendChild(fill)
			progRow.appendChild(bar)
			infoSide.appendChild(progRow)
		}

		if (complete) {
			const doneRow = createDiv()
			doneRow.classList.add('note-header-row', 'note-header-complete')
			doneRow.setText(tr('header.complete'))
			infoSide.appendChild(doneRow)
		}

		header.appendChild(infoSide)

		const wrap = createDiv()
		wrap.classList.add('note-header-wrap')
		wrap.appendChild(header)
		this.buildMediaBlock(wrap, fm, name)
		this.buildSeasonsBlock(wrap, fm, file)
		return wrap
	}

	private buildMediaBlock(wrap: HTMLElement, fm: Record<string, unknown>, name: string): void {
		const trailer = toStr(fm.Trailer).trim()
		const gallery = toStrArray(fm.Gallery)
			.map(value => safeUrl(value))
			.filter((value): value is string => value !== null)
		if (!trailer && gallery.length === 0) return

		const media = createDiv()
		media.classList.add('note-header-media')

		if (trailer) {
			const embed = toEmbed(trailer)
			const href = safeUrl(trailer)
			if (embed) {
				media.appendChild(createEmbedPlayer(embed.src, tr('header.trailer')))
			} else if (href) {
				const row = createDiv()
				row.classList.add('note-header-row')
				const link = createEl('a')
				link.href = href
				link.setText(tr('header.watchTrailer'))
				link.classList.add('external-link')
				link.setAttribute('target', '_blank')
				link.setAttribute('rel', 'noopener noreferrer')
				row.appendChild(link)
				media.appendChild(row)
			}
		}

		if (gallery.length > 0) {
			const strip = createDiv()
			strip.classList.add('note-header-gallery')
			for (let i = 0; i < gallery.length; i++) {
				const url = gallery[i]
				if (!url) continue
				const link = createEl('a')
				link.href = url
				link.setAttribute('target', '_blank')
				link.setAttribute('rel', 'noopener noreferrer')
				const img = createEl('img')
				img.src = url
				img.alt = ''
				img.setAttribute('loading', 'lazy')
				link.appendChild(img)
				// Plain clicks enlarge the still in place; modifier clicks keep
				// the browser as the escape hatch for saving the full image.
				link.addEventListener('click', (event) => {
					if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
					event.preventDefault()
					this.lightbox?.close()
					this.lightbox = new Lightbox(name, gallery, i)
					this.lightbox.open()
				})
				strip.appendChild(link)
			}
			media.appendChild(strip)
		}

		wrap.appendChild(media)
	}

	// The season list of a series or anime note: each season ticks off and
	// rates as a whole, and unfolds into its episodes to tick and rate one by one.
	// Which list a note tracks: seasons of episodes, or a book's chapters.
	private trackKind(fm: Record<string, unknown>): TrackKind | null {
		const contentType = this.settings.categories.find(c => c.typeValue === toStr(fm.Type))?.contentType
		if (contentType === 'series' || contentType === 'anime' || contentType === 'book') return contentType
		return null
	}

	private buildSeasonsBlock(wrap: HTMLElement, fm: Record<string, unknown>, file: TFile): void {
		// A template is copied into new notes: nothing may be ticked or looked up in it.
		if (isTemplateFile(file.path)) return
		const kind = this.trackKind(fm)
		const trackable = kind !== null
		const book = kind === 'book'
		const seasons = seasonsOf(fm, kind ?? 'series')
		if (book && seasons.length === 0) {
			// Open Library notes are never refetched, so an opened book looks
			// its table of contents up by itself, once per session.
			if (!this.chapterLookups.has(file.path)) {
				this.chapterLookups.add(file.path)
				void this.lookUpChapters(file, fm).then((titles) => {
					if (titles.length > 0) void this.addChapters(file, titles)
				})
			}
			// Found nothing: the chapters are typed in.
			const add = createEl('button')
			add.classList.add('note-header-add-chapters')
			add.setText(tr('header.addChapters'))
			add.addEventListener('click', (e) => {
				e.preventDefault()
				void this.findOrTypeChapters(file, fm)
			})
			wrap.appendChild(add)
			return
		}
		if (seasons.length === 0) return
		const open = this.openSeasons.get(file.path) ?? new Set<number>()
		this.openSeasons.set(file.path, open)
		const change = (c: EpisodeChange): void => { if (kind) void this.changeEpisodes(file, c, kind) }

		const block = createDiv()
		block.classList.add('note-header-seasons')
		seasons.forEach((season, index) => {
			const row = createDiv()
			row.classList.add('note-header-season')
			if (trackable) row.appendChild(this.watchedBox(season.watched, (watched) => change({ season: index, watched })))

			const name = createDiv()
			name.classList.add('note-header-season-name')
			// Providers name untitled seasons "Season N" in English.
			name.setText(book ? tr('header.chapters') : season.name.replace(/^Season (\d+)$/, (_, n: string) => tr('header.season', { number: n })))
			row.appendChild(name)

			if (season.episodes.length > 0) {
				const episodes = createDiv()
				episodes.classList.add('note-header-season-episodes')
				const seen = season.episodes.filter(e => e.watched).length
				const total = book ? String(season.episodes.length) : trCount('header.episodes', season.episodes.length)
				episodes.setText(trackable && seen > 0 && !season.watched ? `${String(seen)} / ${total}` : total)
				row.appendChild(episodes)
			}

			if (season.sourceRating !== null) {
				const rating = createDiv()
				rating.classList.add('note-header-season-rating')
				rating.setText(String(season.sourceRating))
				row.appendChild(rating)
			}

			const trailer = season.trailer
			if (trailer) {
				const button = createEl('button')
				button.classList.add('note-header-season-trailer')
				button.setText(tr('header.trailer'))
				button.addEventListener('click', (e) => {
					e.preventDefault()
					new TrailerModal(this.app, season.name, trailer).open()
				})
				row.appendChild(button)
			}

			if (trackable) {
				// Rated through its episodes, the season shows their average and
				// takes no hand-typed rating. A book's own rating is My Rating.
				if (!book) row.appendChild(this.ratingInput(season.rating, season.ratedByEpisodes, (rating) => change({ season: index, rating })))
				const toggle = createEl('button')
				toggle.classList.add('note-header-season-toggle', 'clickable-icon')
				toggle.setAttribute('aria-label', tr('header.episodeList'))
				toggle.setAttribute('aria-expanded', open.has(index) ? 'true' : 'false')
				setIcon(toggle, open.has(index) ? 'chevron-up' : 'chevron-down')
				toggle.addEventListener('click', (e) => {
					e.preventDefault()
					if (open.has(index)) open.delete(index)
					else open.add(index)
					this.refreshBanner()
				})
				row.appendChild(toggle)
			}
			block.appendChild(row)

			if (!trackable || !open.has(index)) return
			const list = createDiv()
			list.classList.add('note-header-episodes')
			season.episodes.forEach((episode, e) => {
				const item = createDiv()
				item.classList.add('note-header-episode')
				item.appendChild(this.watchedBox(episode.watched, (watched) => change({ season: index, episode: e, watched })))
				const label = createDiv()
				label.classList.add('note-header-episode-name')
				const number = String(e + 1)
				label.setText(episode.title ? `${number}. ${episode.title}` : tr(book ? 'header.chapter' : 'header.episode', { number }))
				item.appendChild(label)
				item.appendChild(this.ratingInput(episode.rating, false, (rating) => change({ season: index, episode: e, rating })))
				list.appendChild(item)
			})
			block.appendChild(list)
		})
		wrap.appendChild(block)
	}

	private watchedBox(checked: boolean, onChange: (watched: boolean) => void): HTMLElement {
		const box = createEl('input')
		box.type = 'checkbox'
		box.checked = checked
		box.classList.add('note-header-watched')
		box.setAttribute('aria-label', tr('header.watched'))
		box.addEventListener('click', (e) => e.stopPropagation())
		box.addEventListener('change', () => onChange(box.checked))
		return box
	}

	// A 1–10 score; blank clears it.
	private ratingInput(value: number | null, computed: boolean, onChange: (rating: number | null) => void): HTMLElement {
		const input = createEl('input')
		input.type = 'number'
		input.min = '1'
		input.max = '10'
		input.step = '0.1'
		input.placeholder = '—'
		input.classList.add('note-header-my-rating')
		input.setAttribute('aria-label', tr('header.myRating'))
		if (value !== null) input.value = String(value)
		input.disabled = computed
		input.addEventListener('change', () => {
			const n = Number(input.value)
			onChange(input.value.trim() === '' || !Number.isFinite(n) ? null : Math.max(1, Math.min(10, n)))
		})
		return input
	}

	private async changeEpisodes(file: TFile, change: EpisodeChange, kind: TrackKind): Promise<void> {
		try {
			await this.app.fileManager.processFrontMatter(file, (fm) => {
				applyEpisodeChange(fm as Record<string, unknown>, change, kind)
			})
		} catch (e) {
			console.error('Library: episode update error', file.path, e)
		}
	}

	// Looks the table of contents up first; the chapters are typed in when
	// no edition lists them.
	private lookUpChapters(file: TFile, fm: Record<string, unknown>): Promise<string[]> {
		const sourceId = toStr(fm['Source ID'])
		return findChapters({
			isbn: toStr(fm.ISBN),
			work: sourceId.startsWith('/works/') ? sourceId : '',
			title: toStr(fm.Name) || file.basename,
			author: toStrArray(fm.Creator || fm.Author).map(linkLabel)[0] ?? ''
		})
	}

	private async findOrTypeChapters(file: TFile, fm: Record<string, unknown>): Promise<void> {
		new Notice(tr('notice.searching'))
		const titles = await this.lookUpChapters(file, fm)
		if (titles.length > 0) {
			await this.addChapters(file, titles)
			return
		}
		new Notice(tr('notice.noChapters'))
		new ChaptersModal(this.app, (chapters) => { void this.addChapters(file, chapters) }).open()
	}

	private async addChapters(file: TFile, chapters: string[] | number): Promise<void> {
		try {
			await this.app.fileManager.processFrontMatter(file, (fm) => {
				setChapters(fm as Record<string, unknown>, chapters)
			})
		} catch (e) {
			console.error('Library: chapters update error', file.path, e)
		}
	}

	private async loadSettings(): Promise<void> {
		const saved: unknown = await this.loadData()
		const data = saved && typeof saved === 'object' ? (saved as Partial<ILibrarySettings>) : null
		// A copy: the defaults' own arrays and maps must never become the
		// live settings that the tab and the walks mutate.
		const defaults = JSON.parse(JSON.stringify(DEFAULT_SETTINGS)) as ILibrarySettings
		this.settings = Object.assign({}, defaults, data)
		if (!Array.isArray(this.settings.categories)) this.settings.categories = []
		this.settings.categories = this.settings.categories.filter(cat => !!cat && typeof cat === 'object')
		if (!this.settings.sortState || typeof this.settings.sortState !== 'object') this.settings.sortState = {}
		if (typeof this.settings.statsCollapsed !== 'boolean') this.settings.statsCollapsed = false
		if (!this.settings.enrichMarks || typeof this.settings.enrichMarks !== 'object') this.settings.enrichMarks = {}
		// Categories an earlier build kept out of the statistics, through the
		// switches that came before the top list: `showTop`, `stats.rating`, `showRated`.
		const unrated = new Set<string>()
		for (const cat of this.settings.categories) {
			if (!cat.contentType) cat.contentType = inferContentType(cat.typeValue)
			// 'googlebook' and 'steam' were separate categories before their sources merged.
			if (cat.contentType === 'googlebook') cat.contentType = 'book'
			if ((cat.contentType as string) === 'steam') cat.contentType = 'game'
			if (!isContentType(cat.contentType)) cat.contentType = inferContentType(cat.typeValue)
			if (cat.folder === undefined) cat.folder = ''
			const legacy = cat as ICategory & { showTop?: unknown; showRated?: unknown; stats?: { rating?: unknown } }
			if (legacy.showTop === false || legacy.showRated === false || legacy.stats?.rating === false) unrated.add(cat.typeValue)
			delete legacy.showTop
			delete legacy.showRated
			delete legacy.stats
			if (cat.collapsed !== true) delete cat.collapsed
		}
		this.settings.stats = this.loadStats(data?.stats, defaults.stats, unrated)
	}

	// Key by key: a settings file from an older version has no `stats` block
	// or an older shape of it, and a hand-edited one may carry anything.
	private loadStats(saved: unknown, defaults: IStatsSettings, unrated: Set<string>): IStatsSettings {
		const raw = (saved && typeof saved === 'object' ? saved : {}) as Record<string, unknown>
		const stats: IStatsSettings = {
			watchTime: typeof raw.watchTime === 'boolean' ? raw.watchTime : defaults.watchTime,
			tops: []
		}
		const add = (kind: IStatsTop['kind'], key: unknown): void => {
			if (typeof key !== 'string' || !key.trim()) return
			const name = key.trim()
			if (stats.tops.some(top => top.kind === kind && top.key.toLowerCase() === name.toLowerCase())) return
			stats.tops.push({ kind, key: name })
		}
		if (Array.isArray(raw.tops)) {
			for (const top of raw.tops) {
				const entry = (top && typeof top === 'object' ? top : {}) as Record<string, unknown>
				if (entry.kind === 'category' || entry.kind === 'property') add(entry.kind, entry.key)
			}
			return stats
		}
		// Builds before the list: the chosen properties, then every category
		// whose best-rated switch was on — the same columns as before.
		const properties: unknown[] = Array.isArray(raw.properties) ? raw.properties : defaults.tops.map(top => top.key)
		for (const property of properties) add('property', property)
		for (const cat of this.settings.categories) {
			if (!unrated.has(cat.typeValue)) add('category', cat.typeValue)
		}
		return stats
	}
}
