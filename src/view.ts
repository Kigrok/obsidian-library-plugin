import { ItemView, WorkspaceLeaf, TFile, setIcon } from 'obsidian'
import type LibraryPlugin from './main'
import type { ICategory } from './constants'
import { tr } from './i18n'
import { toStr, parseProgress, parseDate, isTemplateFile } from './util'

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
	private renderTimer: ReturnType<typeof setTimeout> | null = null

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
		this.registerDomEvent(document, 'click', () => {
			this.contentEl.querySelectorAll('.library-sort-menu.open').forEach(m => m.removeClass('open'))
		})
		this.render()
	}

	private scheduleRender(): void {
		if (this.renderTimer) clearTimeout(this.renderTimer)
		this.renderTimer = setTimeout(() => this.render(), 300)
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
				rating: Number(fm['My Rating'] || fm.Rating) || 0,
				date: parseDate(fm.Date)
			})
		}
		return cards
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

		const addBtn = actions.createEl('button', { cls: 'library-icon-btn' })
		setIcon(addBtn, 'plus')
		addBtn.setAttribute('aria-label', tr('cmd.addContent'))
		addBtn.addEventListener('click', () => this.plugin.openAddContent())

		const searchBtn = actions.createEl('button', { cls: 'library-icon-btn' })
		setIcon(searchBtn, 'search')
		searchBtn.setAttribute('aria-label', tr('cmd.searchLibrary'))
		searchBtn.addEventListener('click', () => this.plugin.openLibrarySearch())

		if (sections.length === 0) {
			root.createEl('p', { text: tr('modal.noCategories') })
			return
		}

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
		const collapseBtn = toolbar.createEl('button', { cls: 'library-collapse-btn', text: '▼' })
		toolbar.createDiv({ cls: 'library-toolbar-spacer' })

		const sortDropdown = toolbar.createDiv({ cls: 'library-sort-dropdown' })
		const sortTrigger = sortDropdown.createEl('button', {
			cls: 'library-sort-trigger',
			text: tr('sort.name') + ' ▾'
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
			sortMenu.toggleClass('open', !sortMenu.hasClass('open'))
		})

		collapseBtn.addEventListener('click', () => {
			const collapsed = grid.classList.toggle('collapsed')
			collapseBtn.setText(collapsed ? '▶' : '▼')
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
		const cardEl = grid.createDiv({ cls: 'library-card' })
		cardEl.addEventListener('click', () => {
			void this.app.workspace.getLeaf(false).openFile(file)
		})

		const cover = fm.Cover || fm.Image || fm.Baner
		const imgDiv = cardEl.createDiv({ cls: 'card-image' })
		if (cover) {
			const img = imgDiv.createEl('img')
			const coverStr = toStr(cover)
			img.src = coverStr.startsWith('http')
				? coverStr
				: this.app.vault.adapter.getResourcePath(coverStr)
		} else {
			imgDiv.createSpan({ text: '🎬' })
		}

		const info = cardEl.createDiv({ cls: 'card-info' })
		info.createDiv({ cls: 'card-title', text: card.name })

		const author = fm.Author || fm.Creator || fm.Director || fm.Artist
		if (author) info.createDiv({ cls: 'card-author', text: toStr(author) })
		if (fm.Year) info.createDiv({ cls: 'card-year', text: toStr(fm.Year) })

		const myRating = fm['My Rating'] || fm.Rating
		const imdb = fm['Rating IMDB']
		if (imdb || myRating) {
			const parts: string[] = []
			if (imdb) parts.push('IMDb ' + toStr(imdb))
			if (myRating) parts.push('My ' + toStr(myRating))
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
		if (this.renderTimer) clearTimeout(this.renderTimer)
	}
}
