import { ItemView, WorkspaceLeaf, TFile, setIcon } from 'obsidian'
import type LibraryPlugin from './main'
import type { ICategory } from './constants'
import { tr } from './i18n'
import { toStr, toStrArray, parseProgress, parseDate, isTemplateFile, coverSrc } from './util'

export const LIBRARY_VIEW_TYPE = 'library-view'

interface CardData {
	file: TFile
	fm: Record<string, unknown>
	name: string
	year: number
	rating: number
	date: number
}

type SortKey = 'name' | 'year' | 'rating' | 'date'

export class LibraryView extends ItemView {
	private plugin: LibraryPlugin
	private renderTimer: number | null = null

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
		this.registerEvent(this.app.metadataCache.on('changed', () => this.scheduleRender()))
		this.registerEvent(this.app.vault.on('create', () => this.scheduleRender()))
		this.registerEvent(this.app.vault.on('delete', () => this.scheduleRender()))
		this.registerEvent(this.app.vault.on('rename', () => this.scheduleRender()))
		this.registerDomEvent(activeDocument, 'click', () => {
			this.contentEl.querySelectorAll('.library-sort-menu.open').forEach(m => m.removeClass('open'))
		})
		this.render()
	}

	private scheduleRender(): void {
		if (this.renderTimer) window.clearTimeout(this.renderTimer)
		this.renderTimer = window.setTimeout(() => this.render(), 300)
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

	private collectStats(): {
		genres: [string, number][]
		creators: [string, number][]
		categoryTop: { name: string; items: CardData[] }[]
	} {
		const genres = new Map<string, number>()
		const creators = new Map<string, number>()
		const catCards = new Map<string, CardData[]>()
		const mediaTypes = new Set(
			this.plugin.settings.categories
				.filter(c => c.contentType === 'movie' || c.contentType === 'series')
				.map(c => c.typeValue)
		)

		for (const file of this.app.vault.getMarkdownFiles()) {
			if (isTemplateFile(file.path)) continue
			const fm = this.app.metadataCache.getFileCache(file)?.frontmatter
			if (!fm) continue

			for (const g of toStrArray(fm.Genre)) {
				genres.set(g, (genres.get(g) || 0) + 1)
			}
			if (typeof fm.Type === 'string' && mediaTypes.has(fm.Type)) {
				for (const c of toStrArray(fm.Creator)) {
					creators.set(c, (creators.get(c) || 0) + 1)
				}
			}

			const cat = this.plugin.settings.categories.find(c => c.typeValue === fm.Type)
			if (cat) {
				const list = catCards.get(cat.name) || []
				const rating = Number(fm['My Rating'] ?? fm['Rating IMDB'] ?? fm.Rating) || 0
				list.push({
					file,
					fm,
					name: toStr(fm.Name) || file.basename,
					year: Number(fm.Year) || 0,
					rating,
					date: parseDate(fm.Date)
				})
				catCards.set(cat.name, list)
			}
		}

		const sortMap = (m: Map<string, number>): [string, number][] =>
			[...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3)

		const categoryTop = this.plugin.settings.categories
			.map(cat => ({
				name: cat.name,
				items: (catCards.get(cat.name) || [])
					.sort((a, b) => b.rating - a.rating)
					.slice(0, 3)
			}))
			.filter(c => c.items.length > 0)

		return {
			genres: sortMap(genres),
			creators: sortMap(creators),
			categoryTop
		}
	}

	private renderStats(root: HTMLElement): void {
		const { genres, creators, categoryTop } = this.collectStats()
		if (genres.length === 0 && creators.length === 0 && categoryTop.length === 0) return

		const section = root.createDiv({ cls: 'library-stats' })
		const header = section.createDiv({ cls: 'library-stats-header' })
		setIcon(header.createSpan({ cls: 'library-stats-icon' }), 'bar-chart-2')
		header.createSpan({ text: tr('stats.title') })

		const collapseBtn = header.createEl('button', {
			cls: 'library-collapse-btn',
			text: '▼',
			attr: { 'aria-label': tr('stats.title'), 'aria-expanded': 'true' }
		})
		const body = section.createDiv({ cls: 'library-stats-body' })

		const medals = ['🥇', '🥈', '🥉']

		const worksLabel = (n: number): string => {
			const w5 = tr('stats.works5')
			if (w5 !== 'stats.works5') {
				const abs = Math.abs(n) % 100
				const last = abs % 10
				if (abs > 10 && abs < 20) return w5
				if (last > 1 && last < 5) return tr('stats.works2')
				return w5
			}
			return n === 1 ? tr('stats.works1') : tr('stats.works2')
		}

		const renderMedalCol = (title: string, items: [string, number][]): void => {
			const col = body.createDiv({ cls: 'library-stats-col' })
			col.createEl('h3', { text: title })
			if (items.length === 0) {
				col.createEl('p', { cls: 'library-stats-empty', text: tr('stats.noData') })
				return
			}
			for (let i = 0; i < items.length; i++) {
				const item = items[i]
				if (!item) break
				const [name, count] = item
				const row = col.createDiv({ cls: 'library-stats-medal' })
				row.createSpan({ cls: 'library-stats-medal-icon', text: medals[i] || '' })
				const label = row.createDiv({ cls: 'library-stats-medal-label' })
				label.createSpan({ cls: 'library-stats-medal-name', text: name })
				label.createSpan({ cls: 'library-stats-medal-count', text: `${count} ${worksLabel(count)}` })
			}
		}

		renderMedalCol(tr('stats.topGenres'), genres)
		renderMedalCol(tr('stats.topCreators'), creators)

		for (const cat of categoryTop) {
			const col = body.createDiv({ cls: 'library-stats-col' })
			col.createEl('h3', { text: tr('stats.topCategory', { name: cat.name }) })
			for (let i = 0; i < cat.items.length; i++) {
				const item: CardData | undefined = cat.items[i]
				if (!item) continue
				const fm = item.fm
				const row = col.createDiv({ cls: 'library-stats-medal' })
				row.createSpan({ cls: 'library-stats-medal-icon', text: medals[i] || '' })
				const cover = fm.Cover || fm.Image || fm.Baner
				const src = coverSrc(this.app, cover)
				if (src) {
					row.createEl('img', { cls: 'library-stats-medal-cover', attr: { src } })
				}
				const info = row.createDiv({ cls: 'library-stats-medal-label' })
				const nameEl = info.createDiv({ cls: 'library-stats-medal-name', text: item.name })
				nameEl.addEventListener('click', () => {
					void this.app.workspace.getLeaf(false).openFile(item.file)
				})
				const meta: string[] = []
				if (fm.Year) meta.push(toStr(fm.Year))
				if (item.rating) meta.push('★ ' + toStr(item.rating))
				if (meta.length) {
					info.createDiv({ cls: 'library-stats-medal-count', text: meta.join(' · ') })
				}
			}
		}

		collapseBtn.addEventListener('click', () => {
			const collapsed = body.classList.toggle('collapsed')
			collapseBtn.setText(collapsed ? '▶' : '▼')
			collapseBtn.setAttribute('aria-expanded', collapsed ? 'false' : 'true')
		})
	}

	render(): void {
		const root = this.contentEl
		root.empty()
		root.addClass('library-view')

		const sections = this.plugin.settings.categories.map(category => ({
			category,
			cards: this.collectCards(category)
		}))

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

		let currentSort: SortKey = 'name'
		let sortAsc = true

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
			if (opt.key === 'name') item.addClass('active')
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
			})
		})

		sortTrigger.addEventListener('click', e => {
			e.stopPropagation()
			const isOpen = !sortMenu.hasClass('open')
			sortMenu.toggleClass('open', isOpen)
			sortTrigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
		})

		collapseBtn.addEventListener('click', () => {
			const collapsed = grid.classList.toggle('collapsed')
			collapseBtn.setText(collapsed ? '▶' : '▼')
			collapseBtn.setAttribute('aria-expanded', collapsed ? 'false' : 'true')
			if (collapsed) {
				const first = grid.querySelector('.library-card')
				if (first instanceof HTMLElement) {
					grid.style.setProperty('--row-height', first.offsetHeight + 'px')
				}
			} else {
				grid.style.removeProperty('--row-height')
			}
		})

		renderGrid()
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

		const cover = fm.Cover || fm.Image || fm.Baner
		const imgDiv = cardEl.createDiv({ cls: 'card-image' })
		const cardCover = coverSrc(this.app, cover)
		if (cardCover) {
			imgDiv.createEl('img', { attr: { src: cardCover, alt: card.name } })
		} else {
			const type = toStr(fm.Type)
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

		const author = fm.Author || fm.Creator || fm.Director || fm.Artist
		if (author) info.createDiv({ cls: 'card-author', text: toStr(author) })
		if (fm.Year) info.createDiv({ cls: 'card-year', text: toStr(fm.Year) })

		const myRating = fm['My Rating'] ?? fm.Rating
		const imdb = fm['Rating IMDB']
		if (imdb || myRating) {
			const parts: string[] = []
			if (imdb) parts.push('IMDb ' + toStr(imdb))
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
