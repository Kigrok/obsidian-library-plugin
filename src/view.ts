import { ItemView, WorkspaceLeaf, TFile, setIcon } from 'obsidian'
import type LibraryPlugin from './main'
import { RATING_RT_ICON, type ICategory, type IStatsTop } from './constants'
import { tr, trCount } from './i18n'
import { comparisonOfTheDay, comparisonText } from './facts'
import {
	toStr,
	toStrArray,
	parseProgress,
	parseDate,
	isTemplateFile,
	linkLabel,
	coverSrc,
	coverValue,
	runtimeMinutes,
	watchedRuntimeMinutes,
	formatRuntime,
	runtimeParts,
	propertyValues,
	topLabel
} from './util'

export const LIBRARY_VIEW_TYPE = 'library-view'

interface CardData {
	file: TFile
	fm: Record<string, unknown>
	name: string
	year: number
	rating: number
	date: number
}

// One statistics column, in the order the settings list them: a property's
// most frequent values across the library, or a category's best-rated titles.
type StatsColumn =
	| { top: IStatsTop; kind: 'property'; items: [string, number][] }
	| { top: IStatsTop; kind: 'category'; items: CardData[] }

interface TimeSlice {
	name: string
	minutes: number
	color: string
}

// Only the watched-time media types get a slice; the colour comes from the
// theme palette so it stays legible in light and dark themes alike.
const TIME_COLORS: Record<string, string> = {
	movie: 'var(--color-blue)',
	series: 'var(--color-purple)',
	anime: 'var(--color-pink)'
}

type SortKey = 'name' | 'year' | 'rating' | 'date'

const SORT_KEYS: SortKey[] = ['name', 'year', 'rating', 'date']

export class LibraryView extends ItemView {
	private plugin: LibraryPlugin
	private renderTimer: number | null = null
	// Notes on screen after the last render: one that stops being a library
	// note still has to trigger the render that drops it.
	private shown = new Set<string>()

	constructor(leaf: WorkspaceLeaf, plugin: LibraryPlugin) {
		super(leaf)
		this.plugin = plugin
	}

	getViewType(): string {
		return LIBRARY_VIEW_TYPE
	}

	getDisplayText(): string {
		return tr('view.title')
	}

	getIcon(): string {
		return 'library'
	}

	async onOpen(): Promise<void> {
		// Only library notes redraw the page: typing in any other note fires
		// `changed` every few seconds. A new note arrives through `changed` too,
		// once it has been indexed.
		this.registerEvent(this.app.metadataCache.on('changed', (file) => {
			if (this.shown.has(file.path) || this.isLibraryNote(this.app.metadataCache.getFileCache(file)?.frontmatter)) {
				this.scheduleRender()
			}
		}))
		this.registerEvent(this.app.vault.on('delete', (file) => {
			if (this.shown.has(file.path)) this.scheduleRender()
		}))
		this.registerEvent(this.app.vault.on('rename', (_file, oldPath) => {
			if (this.shown.has(oldPath)) this.scheduleRender()
		}))
		this.registerDomEvent(activeDocument, 'click', () => {
			this.contentEl.querySelectorAll('.library-sort-menu.open').forEach(m => m.removeClass('open'))
		})
		this.render()
	}

	private scheduleRender(): void {
		if (this.renderTimer) window.clearTimeout(this.renderTimer)
		this.renderTimer = window.setTimeout(() => this.render(), 300)
	}

	private isLibraryNote(fm: Record<string, unknown> | undefined): boolean {
		const type = fm?.Type
		return typeof type === 'string' && this.plugin.settings.categories.some(c => c.typeValue === type)
	}

	// The dropdown choice is page state: it lives in the settings file, per
	// section, so a re-render or a restart does not throw it away.
	private readSort(section: string): { key: SortKey; asc: boolean } {
		const saved = this.plugin.settings.sortState[section]
		if (!saved || SORT_KEYS.indexOf(saved.key as SortKey) < 0) return { key: 'name', asc: true }
		return { key: saved.key as SortKey, asc: saved.asc !== false }
	}

	private writeSort(section: string, key: SortKey, asc: boolean): void {
		this.plugin.settings.sortState[section] = { key, asc }
		void this.plugin.persistSettings()
	}

	private collectCards(category: ICategory): CardData[] {
		const cards: CardData[] = []
		for (const file of this.app.vault.getMarkdownFiles()) {
			if (isTemplateFile(file.path)) continue
			const fm = this.app.metadataCache.getFileCache(file)?.frontmatter
			if (!fm || fm.Type !== category.typeValue) continue
			cards.push({
				file,
				fm,
				name: toStr(fm.Name) || file.basename,
				year: Number(fm.Year) || 0,
				rating: Number(fm['My Rating'] ?? fm.Rating) || 0,
				date: parseDate(fm.Date)
			})
		}
		return cards
	}

	private collectStats(): { columns: StatsColumn[]; time: TimeSlice[]; undated: number } {
		const tops = this.plugin.settings.stats.tops
		const properties = tops.filter(top => top.kind === 'property').map(top => top.key)
		// Per chosen property, its values counted across the whole library;
		// "Sci-Fi", "sci-fi" and "[[Sci-Fi]]" are one value.
		const counts = properties.map(() => new Map<string, { label: string; count: number }>())
		const rated = new Map<ICategory, CardData[]>()
		const timeMinutes = new Map<string, number>()
		let undated = 0

		for (const file of this.app.vault.getMarkdownFiles()) {
			if (isTemplateFile(file.path)) continue
			const fm = this.app.metadataCache.getFileCache(file)?.frontmatter
			if (!fm) continue
			// Statistics describe the library: a genre on some unrelated note
			// must not rank among its top genres.
			const cat = this.plugin.settings.categories.find(c => c.typeValue === fm.Type)
			if (!cat) continue

			properties.forEach((property, i) => {
				const tally = counts[i]
				if (!tally) return
				const seen = new Set<string>()
				for (const value of propertyValues(fm, property)) {
					const key = value.toLowerCase()
					if (!key || seen.has(key)) continue
					seen.add(key)
					const entry = tally.get(key)
					if (entry) entry.count++
					else tally.set(key, { label: value, count: 1 })
				}
			})

			const list = rated.get(cat) || []
			list.push({
				file,
				fm,
				name: toStr(fm.Name) || file.basename,
				year: Number(fm.Year) || 0,
				rating: Number(fm['My Rating'] ?? fm['Rating IMDB'] ?? fm.Rating) || 0,
				date: parseDate(fm.Date)
			})
			rated.set(cat, list)

			if (TIME_COLORS[cat.contentType]) {
				const minutes = watchedRuntimeMinutes(fm)
				if (minutes > 0) {
					timeMinutes.set(cat.name, (timeMinutes.get(cat.name) || 0) + minutes)
				} else if (runtimeMinutes(fm.Runtime) === null) {
					// Counted out loud: a chart that silently drops every note
					// whose source never reported a length would look like a
					// smaller library than it is.
					undated++
				}
			}
		}

		const columns: StatsColumn[] = []
		for (const top of tops) {
			if (top.kind === 'property') {
				const tally = counts[properties.indexOf(top.key)]
				columns.push({
					top,
					kind: 'property',
					items: [...(tally?.values() ?? [])]
						.sort((a, b) => b.count - a.count)
						.slice(0, 3)
						.map((entry): [string, number] => [entry.label, entry.count])
				})
				continue
			}
			const cat = this.plugin.settings.categories.find(c => c.typeValue === top.key)
			if (!cat) continue
			columns.push({
				top,
				kind: 'category',
				items: (rated.get(cat) || []).sort((a, b) => b.rating - a.rating).slice(0, 3)
			})
		}

		const time: TimeSlice[] = []
		for (const cat of this.plugin.settings.categories) {
			const color = TIME_COLORS[cat.contentType]
			if (!color) continue
			const minutes = timeMinutes.get(cat.name) || 0
			if (minutes > 0) time.push({ name: cat.name, minutes, color })
		}

		return { columns, time, undated }
	}

	// A square holding a donut: one slice per medium, sized by the time spent,
	// with the total in the hole and the per-medium figures beside it.
	private renderTimeChart(body: HTMLElement, slices: TimeSlice[], undated: number): void {
		const col = body.createDiv({ cls: 'library-stats-col library-time-col' })
		col.createEl('h3', { text: tr('stats.watchTime') })

		const total = slices.reduce((sum, slice) => sum + slice.minutes, 0)
		if (total <= 0) {
			col.createEl('p', { cls: 'library-stats-empty', text: tr('stats.noData') })
			return
		}

		const chart = col.createDiv({ cls: 'library-time-chart' })
		let consumed = 0
		const stops: string[] = []
		for (const slice of slices) {
			const from = (consumed / total) * 100
			consumed += slice.minutes
			stops.push(`${slice.color} ${from}% ${(consumed / total) * 100}%`)
		}
		chart.setCssStyles({ background: `conic-gradient(${stops.join(', ')})` })
		// Hours and minutes stay whole; a long total breaks between them only.
		const totalEl = chart.createDiv({ cls: 'library-time-hole' }).createDiv({ cls: 'library-time-total' })
		runtimeParts(total).forEach((part, i) => {
			if (i > 0) totalEl.appendText(' ')
			totalEl.createSpan({ text: part })
		})

		const legend = col.createDiv({ cls: 'library-time-legend' })
		for (const slice of slices) {
			const row = legend.createDiv({ cls: 'library-time-item' })
			row.createSpan({ cls: 'library-time-dot' }).setCssStyles({ backgroundColor: slice.color })
			row.createSpan({ cls: 'library-time-name', text: slice.name })
			const share = Math.round((slice.minutes / total) * 100)
			row.createSpan({
				cls: 'library-time-value',
				text: formatRuntime(slice.minutes) + ' · ' + String(share) + '%'
			})
		}

		if (undated > 0) {
			col.createEl('p', {
				cls: 'library-stats-empty',
				text: tr('stats.noDuration', { count: String(undated) })
			})
		}

		// The same total in other terms, one comparison a day, laid out like the legend.
		const comparison = comparisonOfTheDay(total)
		if (!comparison) return
		const facts = col.createDiv({ cls: 'library-time-facts' })
		facts.createDiv({ cls: 'library-time-facts-title', text: tr('fact.title') })
		const row = facts.createDiv({ cls: 'library-time-item' })
		setIcon(row.createSpan({ cls: 'library-time-icon' }), comparison.icon)
		row.createSpan({ cls: 'library-time-name', text: comparisonText(comparison) })
	}

	private renderStats(root: HTMLElement): void {
		const stats = this.collectStats()
		// Only columns with something in them are drawn; with none of them (and
		// the chart switched off) the section is left out entirely.
		const columns = stats.columns.filter(column => column.items.length > 0)
		const showTime = this.plugin.settings.stats.watchTime
			&& this.plugin.settings.categories.some(c => TIME_COLORS[c.contentType])
		if (!showTime && columns.length === 0) return

		const section = root.createDiv({ cls: 'library-stats' })
		const header = section.createDiv({ cls: 'library-stats-header' })
		setIcon(header.createSpan({ cls: 'library-stats-icon' }), 'bar-chart-2')
		header.createSpan({ text: tr('stats.title') })

		const collapsed = this.plugin.settings.statsCollapsed
		const collapseBtn = header.createEl('button', {
			cls: 'library-collapse-btn',
			text: collapsed ? '▶' : '▼',
			attr: { 'aria-label': tr('stats.title'), 'aria-expanded': collapsed ? 'false' : 'true' }
		})
		const body = section.createDiv({ cls: 'library-stats-body' })
		if (collapsed) body.classList.add('collapsed')
		// Without a single top column the chart stands alone instead of beside
		// an empty box that would push it to the far side.
		const box = columns.length > 0 ? body.createDiv({ cls: 'library-stats-tops' }) : createDiv()

		if (showTime) this.renderTimeChart(body, stats.time, stats.undated)

		const medals = ['🥇', '🥈', '🥉']

		for (const column of columns) {
			const col = box.createDiv({ cls: 'library-stats-col' })
			col.createEl('h3', { text: topLabel(column.top, this.plugin.settings.categories) })
			if (column.kind === 'property') {
				column.items.forEach(([name, count], i) => {
					const row = col.createDiv({ cls: 'library-stats-medal' })
					row.createSpan({ cls: 'library-stats-medal-icon', text: medals[i] || '' })
					const label = row.createDiv({ cls: 'library-stats-medal-label' })
					label.createSpan({ cls: 'library-stats-medal-name', text: name })
					label.createSpan({ cls: 'library-stats-medal-count', text: `${count} ${trCount('stats.works', count)}` })
				})
				continue
			}
			column.items.forEach((item, i) => {
				const fm = item.fm
				const row = col.createDiv({ cls: 'library-stats-medal' })
				row.createSpan({ cls: 'library-stats-medal-icon', text: medals[i] || '' })
				const src = coverSrc(this.app, coverValue(fm, this.plugin.settings.coverProperty))
				if (src) row.createEl('img', { cls: 'library-stats-medal-cover', attr: { src } })
				const info = row.createDiv({ cls: 'library-stats-medal-label' })
				const nameEl = info.createDiv({ cls: 'library-stats-medal-name', text: item.name })
				nameEl.addEventListener('click', () => {
					void this.app.workspace.getLeaf(false).openFile(item.file)
				})
				const meta: string[] = []
				if (fm.Year) meta.push(toStr(fm.Year))
				if (item.rating) meta.push('★ ' + toStr(item.rating))
				if (meta.length) info.createDiv({ cls: 'library-stats-medal-count', text: meta.join(' · ') })
			})
		}

		collapseBtn.addEventListener('click', () => {
			const nowCollapsed = body.classList.toggle('collapsed')
			collapseBtn.setText(nowCollapsed ? '▶' : '▼')
			collapseBtn.setAttribute('aria-expanded', nowCollapsed ? 'false' : 'true')
			// Lives in the settings file so the section opens the way it was left.
			this.plugin.settings.statsCollapsed = nowCollapsed
			void this.plugin.persistSettings()
		})
	}

	render(): void {
		const root = this.contentEl
		// Re-renders follow metadata changes (a background refresh, an edit in
		// another pane): the reader stays where they were in the grid.
		const scrollTop = root.scrollTop
		root.empty()
		root.addClass('library-view')

		const sections = this.plugin.settings.categories.map(category => ({
			category,
			cards: this.collectCards(category)
		}))
		this.shown.clear()
		for (const { cards } of sections) {
			for (const card of cards) this.shown.add(card.file.path)
		}

		const header = root.createDiv({ cls: 'library-page-header' })
		const toc = header.createDiv({ cls: 'library-toc' })
		const actions = header.createDiv({ cls: 'library-actions' })

		const addBtn = actions.createEl('button', {
			cls: 'library-icon-btn',
			attr: { 'aria-label': tr('cmd.addContent') }
		})
		setIcon(addBtn, 'plus')
		addBtn.addEventListener('click', () => this.plugin.openAddContent())

		const searchBtn = actions.createEl('button', {
			cls: 'library-icon-btn',
			attr: { 'aria-label': tr('cmd.searchLibrary') }
		})
		setIcon(searchBtn, 'search')
		searchBtn.addEventListener('click', () => this.plugin.openLibrarySearch())

		if (sections.length === 0) {
			root.createEl('p', { text: tr('modal.noCategories') })
			return
		}

		this.renderStats(root)

		for (const { category, cards } of sections) {
			const sectionEl = this.renderSection(root, category, cards)
			const chip = toc.createEl('button', {
				cls: 'library-toc-item',
				text: `${category.name}: ${String(cards.length)}`
			})
			chip.addEventListener('click', () =>
				sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
			)
		}
		root.scrollTop = scrollTop
	}

	private renderSection(root: HTMLElement, category: ICategory, cards: CardData[]): HTMLElement {
		const section = root.createDiv({ cls: 'library-section' })
		section.createEl('h2', { text: category.name })

		const toolbar = section.createDiv({ cls: 'library-toolbar' })
		const collapseBtn = toolbar.createEl('button', {
			cls: 'library-collapse-btn',
			text: '▼',
			attr: { 'aria-label': category.name, 'aria-expanded': 'true' }
		})
		toolbar.createDiv({ cls: 'library-toolbar-spacer' })

		const sortDropdown = toolbar.createDiv({ cls: 'library-sort-dropdown' })
		const sortTrigger = sortDropdown.createEl('button', {
			cls: 'library-sort-trigger',
			text: tr('sort.name') + ' ▾',
			attr: {
				'aria-label': tr('sort.name'),
				'aria-haspopup': 'true',
				'aria-expanded': 'false'
			}
		})
		const sortMenu = sortDropdown.createDiv({ cls: 'library-sort-menu' })

		const grid = section.createDiv({ cls: 'library-grid' })

		const sortOptions: { label: string; key: SortKey }[] = [
			{ label: tr('sort.name'), key: 'name' },
			{ label: tr('sort.year'), key: 'year' },
			{ label: tr('sort.rating'), key: 'rating' },
			{ label: tr('sort.date'), key: 'date' }
		]

		const savedSort = this.readSort(category.name)
		let currentSort: SortKey = savedSort.key
		let sortAsc = savedSort.asc

		const updateTrigger = (): void => {
			const opt = sortOptions.find(o => o.key === currentSort)
			sortTrigger.setText((opt?.label ?? '') + ' ' + (sortAsc ? '↑' : '↓'))
		}

		const renderGrid = (): void => {
			const sorted = [...cards].sort((a, b) => {
				let cmp = 0
				switch (currentSort) {
					case 'name': cmp = a.name.localeCompare(b.name); break
					case 'year': cmp = a.year - b.year; break
					case 'rating': cmp = a.rating - b.rating; break
					case 'date': cmp = a.date - b.date; break
				}
				return sortAsc ? cmp : -cmp
			})
			grid.empty()
			for (const card of sorted) this.renderCard(grid, card)
		}

		sortOptions.forEach(opt => {
			const item = sortMenu.createEl('button', { cls: 'library-sort-menu-item', text: opt.label })
			if (opt.key === currentSort) item.addClass('active')
			item.addEventListener('click', e => {
				e.stopPropagation()
				if (currentSort === opt.key) {
					sortAsc = !sortAsc
				} else {
					currentSort = opt.key
					sortAsc = opt.key === 'name'
				}
				sortMenu.querySelectorAll('.library-sort-menu-item').forEach(b => b.removeClass('active'))
				item.addClass('active')
				updateTrigger()
				sortMenu.removeClass('open')
				renderGrid()
				this.writeSort(category.name, currentSort, sortAsc)
			})
		})

		sortTrigger.addEventListener('click', e => {
			e.stopPropagation()
			const isOpen = !sortMenu.hasClass('open')
			sortMenu.toggleClass('open', isOpen)
			sortTrigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
		})

		// The first row stays visible through CSS alone, so a fold also holds
		// in a render that happens while the tab is hidden and has no layout.
		const applyCollapsed = (collapsed: boolean): void => {
			grid.toggleClass('collapsed', collapsed)
			collapseBtn.setText(collapsed ? '▶' : '▼')
			collapseBtn.setAttribute('aria-expanded', collapsed ? 'false' : 'true')
		}
		// The fold is kept on the category in the settings file, so a
		// re-render, a second tab or a restart opens the section as it was left.
		collapseBtn.addEventListener('click', () => {
			const collapsed = !grid.hasClass('collapsed')
			if (collapsed) category.collapsed = true
			else delete category.collapsed
			applyCollapsed(collapsed)
			void this.plugin.persistSettings()
		})

		// A restored choice must show up, but an untouched section keeps its
		// original label and caret.
		if (currentSort !== 'name' || !sortAsc) updateTrigger()
		renderGrid()
		if (category.collapsed === true) applyCollapsed(true)
		return section
	}

	private renderCard(grid: HTMLElement, card: CardData): void {
		const { file, fm } = card
		const cardEl = grid.createDiv({
			cls: 'library-card',
			attr: {
				'role': 'button',
				'tabindex': '0',
				'aria-label': card.name
			}
		})
		cardEl.addEventListener('click', () => {
			void this.app.workspace.getLeaf(false).openFile(file)
		})
		cardEl.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault()
				void this.app.workspace.getLeaf(false).openFile(file)
			}
		})

		const cover = coverValue(fm, this.plugin.settings.coverProperty)
		const imgDiv = cardEl.createDiv({ cls: 'card-image' })
		const cardCover = coverSrc(this.app, cover)
		if (cardCover) {
			imgDiv.createEl('img', { attr: { src: cardCover, alt: card.name } })
		} else {
			const type = toStr(fm.Type).toLowerCase()
			const emoji = type === 'anime' ? '🎌'
				: type === 'comic' ? '📚'
				: type === 'book' ? '📖'
				: type === 'game' ? '🎮'
				: type === 'music' ? '🎵'
				: type === 'manual' ? '📝'
				: '🎬'
			imgDiv.createSpan({ text: emoji })
		}

		const info = cardEl.createDiv({ cls: 'card-info' })
		info.createDiv({ cls: 'card-title', text: card.name })

		const author = toStrArray(fm.Author || fm.Creator || fm.Director || fm.Artist).map(linkLabel).join(', ')
		if (author) info.createDiv({ cls: 'card-author', text: author })
		if (fm.Year) info.createDiv({ cls: 'card-year', text: toStr(fm.Year) })

		const myRating = fm['My Rating'] ?? fm.Rating
		const imdb = fm['Rating IMDB']
		const rt = fm['Rating RT']
		const rawg = fm['Rating RAWG']
		const mc = fm['Rating MC']
		if (imdb || rt || rawg || mc || myRating) {
			const parts: string[] = []
			if (imdb) parts.push('IMDb ' + toStr(imdb))
			if (rt) parts.push(RATING_RT_ICON + ' ' + toStr(rt) + '%')
			if (rawg) parts.push('RAWG ' + toStr(rawg))
			if (mc) parts.push('MC ' + toStr(mc))
			if (myRating) parts.push(toStr(myRating))
			info.createDiv({ cls: 'card-rating', text: parts.join(' | ') })
		}

		if (fm.Complete !== true && fm.Progress != null) {
			const percent = parseProgress(fm.Progress)
			if (percent > 0) {
				const pc = info.createDiv({ cls: 'card-progress' })
				pc.createDiv({ cls: 'card-progress-label', text: String(percent) + '%' })
				const bar = pc.createDiv({ cls: 'card-progress-bar' })
				bar.createDiv({ cls: 'card-progress-fill' }).setCssStyles({ width: String(percent) + '%' })
			}
		}
	}

	async onClose(): Promise<void> {
		if (this.renderTimer) window.clearTimeout(this.renderTimer)
	}
}
