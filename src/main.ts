import {
	Plugin,
	TFile,
	MarkdownPostProcessorContext,
	Notice,
	requestUrl
} from 'obsidian'
import { progressPattern, dmyDatePattern, type ILibrarySettings, DEFAULT_SETTINGS } from './constants'
import { tr } from './i18n'
import { LibrarySettingTab } from './settings'

interface OMDbResponse {
	imdbRating?: string
	Poster?: string
	Director?: string
	Creator?: string
	Writer?: string
	Year?: string
	Genre?: string
	totalSeasons?: string
	imdbID?: string
	Type?: string
	Response?: string
}

interface OMDbSeasonResponse {
	Episodes?: { Episode: string }[]
	Response?: string
}

interface CardData {
	link: HTMLElement
	targetFile: TFile
	fm: Record<string, unknown>
	name: string
	year: number
	rating: number
	date: number
}

function toStr(val: unknown): string {
	if (val == null) return ''
	if (Array.isArray(val)) return val.join(', ')
	if (typeof val === 'object') return JSON.stringify(val)
	return String(val)
}

function sanitize(val: string): string {
	return val.replace(/[^\x20-\x7E\u00A0-\uFFFF]/g, '').trim()
}

function parseProgress(val: unknown): number {
	if (typeof val === 'number') return val <= 1 ? Math.round(val * 100) : Math.round(val)
	const match = toStr(val).match(progressPattern)
	if (!match) return 0
	const current = Number(match[1])
	const total = Number(match[2])
	if (!Number.isFinite(current) || !Number.isFinite(total) || total <= 0) return 0
	return Math.round((current / total) * 100)
}

function parseDate(val: unknown): number {
	if (!val) return 0
	const raw = toStr(val)
	const dmyMatch = raw.match(dmyDatePattern)
	if (dmyMatch) {
		return new Date(Number(dmyMatch[3]), Number(dmyMatch[2]) - 1, Number(dmyMatch[1])).getTime()
	}
	const timestamp = new Date(raw).getTime()
	return Number.isNaN(timestamp) ? 0 : timestamp
}

function isTemplateFile(path: string): boolean {
	return path.split('/').some(p => p.startsWith('_') || p.toLowerCase().includes('template'))
}

export default class LibraryPlugin extends Plugin {
	settings!: ILibrarySettings
	private updateTimer: ReturnType<typeof setTimeout> | null = null
	private fetchTimer: ReturnType<typeof setTimeout> | null = null
	private isFetching = false
	private fetchCooldowns = new Map<string, number>()

	async onload(): Promise<void> {
		await this.loadSettings()
		this.addSettingTab(new LibrarySettingTab(this.app, this))

		this.registerEvent(this.app.metadataCache.on('changed', (file) => {
			if (file.path === this.settings.libraryFilePath) return
			if (isTemplateFile(file.path)) return
			if (this.updateTimer) clearTimeout(this.updateTimer)
			this.updateTimer = setTimeout(() => { void this.updateLibraryFile() }, 500)
		}))

		this.registerEvent(this.app.workspace.on('layout-change', () => this.applyWideStyle()))

		this.registerMarkdownPostProcessor((element, context) => {
			this.renderCards(element, context)
			this.renderNoteHeader(element, context)
		})

		this.applyWideStyle()

		this.registerEvent(
			this.app.workspace.on('active-leaf-change', () => {
				if (this.fetchTimer) clearTimeout(this.fetchTimer)
				this.fetchTimer = setTimeout(() => { void this.tryFetchIMDbRating() }, 300)
			})
		)

		this.addCommand({
			id: 'fetch-imdb-rating',
			name: tr('cmd.fetchImdb'),
			callback: () => { void this.tryFetchIMDbRating(true) }
		})

		this.app.workspace.onLayoutReady(() => { void this.updateLibraryFile() })
	}

	onunload(): void {
		document.body.classList.remove('is-library-wide')
	}

	async saveSettings(): Promise<void> {
		await this.saveData(this.settings)
		await this.updateLibraryFile()
	}

	private applyWideStyle(): void {
		setTimeout(() => {
			const activeFile = this.app.workspace.getActiveFile()
			if (activeFile?.path === this.settings.libraryFilePath) {
				document.body.classList.add('is-library-wide')
			} else {
				document.body.classList.remove('is-library-wide')
			}
		}, 50)
	}

	private async updateLibraryFile(): Promise<void> {
		const { libraryFilePath, categories } = this.settings
		const file = this.app.vault.getAbstractFileByPath(libraryFilePath)
		if (!(file instanceof TFile)) return

		const allFiles = this.app.vault.getMarkdownFiles()
		let finalContent = ''

		categories.forEach((cat, index) => {
			if (index > 0) finalContent += '\n'
			finalContent += `## ${cat.name}\n`

			const filteredFiles = allFiles.filter(f => {
				if (f.path === libraryFilePath) return false
				if (isTemplateFile(f.path)) return false
				const cache = this.app.metadataCache.getFileCache(f)
				return cache?.frontmatter?.Type === cat.typeValue
			})

			filteredFiles.sort((a, b) => a.basename.localeCompare(b.basename))

			if (filteredFiles.length > 0) {
				filteredFiles.forEach(f => {
					finalContent += `- [[${f.basename}]]\n`
				})
			} else {
				finalContent += `${tr('library.emptyList')}\n`
			}
		})

		const currentContent = await this.app.vault.read(file)
		if (currentContent !== finalContent) {
			await this.app.vault.modify(file, finalContent)
		}
	}

	private async tryFetchIMDbRating(force = false): Promise<void> {
		if (!this.settings.omdbApiKey) return
		if (this.isFetching) return
		this.isFetching = true
		try {
			await this.fetchAndUpdateMetadata(force)
		} finally {
			this.isFetching = false
		}
	}

	private async fetchAndUpdateMetadata(force: boolean): Promise<void> {
		const file = this.app.workspace.getActiveFile()
		if (!file || !(file instanceof TFile)) return

		if (!force) {
			const lastFetch = this.fetchCooldowns.get(file.path)
			if (lastFetch && Date.now() - lastFetch < 5 * 60 * 1000) return
		}
		this.fetchCooldowns.set(file.path, Date.now())

		const cache = this.app.metadataCache.getFileCache(file)
		const fm: Record<string, unknown> | undefined = cache?.frontmatter
		if (!fm) return

		const urlStr = toStr(fm.URL)
		const imdbIdMatch = urlStr ? urlStr.match(/\/title\/(tt\d+)/) : null
		const imdbID = imdbIdMatch?.[1]

		const hasType = fm.Type === 'Movie' || fm.Type === 'Series'
		if (!hasType && !imdbID) return

		const needType = !hasType && !!imdbID
		const needRating = force || !fm['Rating IMDB']
		const needCover = force || !(fm.Cover || fm.Image || fm.Baner)
		const needCreator = force || !(fm.Creator || fm.Director)
		const needYear = force || !fm.Year
		const needGenre = force || !fm.Genre
		const needURL = force || !fm.URL
		const needSeason = force || (fm.Type === 'Series' && !fm.Season)
		const needProgress = force || fm.Progress == null
		const needSeriesUpdate = fm.Type === 'Series' && fm.Complete !== true && !!imdbID

		if (
			!needType && !needRating && !needCover && !needCreator &&
			!needYear && !needGenre && !needURL && !needSeason &&
			!needProgress && !needSeriesUpdate
		) return

		const title = toStr(fm.Name) || file.basename
		const year = fm.Year ? toStr(fm.Year) : undefined
		const type = fm.Type === 'Series' ? 'series' : fm.Type === 'Movie' ? 'movie' : undefined

		try {
			const data = await this.fetchOMDb(title, year, type, imdbID)
			if (!data) return

			const filled: string[] = []
			let resolvedType: string | undefined = typeof fm.Type === 'string' ? fm.Type : undefined

			if (needType && data.Type) {
				const omdbType = data.Type.toLowerCase()
				if (omdbType === 'movie') resolvedType = 'Movie'
				else if (omdbType === 'series') resolvedType = 'Series'
				if (resolvedType) {
					await this.updateFrontmatterField(file, 'Type', resolvedType)
					filled.push(tr('notice.type', { value: resolvedType }))
				}
			}

			if (needRating && data.imdbRating && data.imdbRating !== 'N/A') {
				const rating = parseFloat(data.imdbRating)
				await this.updateFrontmatterField(file, 'Rating IMDB', rating)
				filled.push('IMDb: ' + String(rating))
			}

			if (needCover && data.Poster && data.Poster !== 'N/A') {
				await this.updateFrontmatterField(file, 'Cover', data.Poster)
				filled.push(tr('notice.poster'))
			}

			if (needCreator) {
				const creatorSource =
					data.Creator && data.Creator !== 'N/A' ? data.Creator
					: data.Writer && data.Writer !== 'N/A' ? data.Writer
					: data.Director && data.Director !== 'N/A' ? data.Director
					: null
				if (creatorSource) {
					const persons = creatorSource.split(',').map(s => sanitize(s)).filter(Boolean)
					await this.updateFrontmatterField(file, 'Creator', persons)
					filled.push(tr('notice.creator'))
				}
			}

			if (needYear && data.Year && data.Year !== 'N/A') {
				const yearMatch = data.Year.match(/^(\d{4})/)
				const yearStr = yearMatch?.[1]
				if (yearStr) {
					await this.updateFrontmatterField(file, 'Year', parseInt(yearStr))
					filled.push(tr('notice.year', { value: yearStr }))
				}
				const endMatch = data.Year.match(/\u2013(\d{4})/)
				const endStr = endMatch?.[1]
				if (endStr) {
					await this.updateFrontmatterField(file, 'End Year', parseInt(endStr))
				}
			}

			if (needGenre && data.Genre && data.Genre !== 'N/A') {
				const genres = data.Genre.split(',').map(s => sanitize(s)).filter(Boolean)
				await this.updateFrontmatterField(file, 'Genre', genres)
				filled.push(tr('notice.genres'))
			}

			if (needURL && data.imdbID) {
				await this.updateFrontmatterField(file, 'URL', 'https://www.imdb.com/title/' + data.imdbID + '/')
				filled.push('URL')
			}

			if (resolvedType === 'Series' && data.totalSeasons && data.totalSeasons !== 'N/A') {
				await this.updateSeriesProgress(file, fm, data, force, filled)
			}

			if (resolvedType === 'Movie' && (force || fm.Progress == null)) {
				await this.updateFrontmatterField(file, 'Progress', '0/1')
			}

			await this.ensureFrontmatterFields(file)

			if (filled.length > 0) {
				new Notice(title + ': ' + filled.join(', '))
			}
		} catch (e) {
			console.error('Library: OMDb fetch error', e)
		}
	}

	private async updateSeriesProgress(
		file: TFile,
		fm: Record<string, unknown>,
		data: OMDbResponse,
		force: boolean,
		filled: string[]
	): Promise<void> {
		const totalSeasons = parseInt(data.totalSeasons!)

		if (force || !fm.Season) {
			await this.updateFrontmatterField(file, 'Season', totalSeasons)
			filled.push(tr('notice.seasons', { value: totalSeasons }))
		}

		if (fm.Season && totalSeasons > Number(fm.Season)) {
			await this.updateFrontmatterField(file, 'Season', totalSeasons)
			filled.push(tr('notice.seasons', { value: totalSeasons }))
		}

		if (data.imdbID && fm.Complete !== true) {
			const totalEpisodes = await this.fetchTotalEpisodes(data.imdbID, totalSeasons)
			if (totalEpisodes > 0) {
				const progressStr = fm.Progress != null ? toStr(fm.Progress) : null
				const progressMatch = progressStr?.match(/^(\d+)\s*\/\s*(\d+)$/)
				if (progressMatch?.[1] && progressMatch[2]) {
					const current = parseInt(progressMatch[1])
					const oldTotal = parseInt(progressMatch[2])
					if (totalEpisodes !== oldTotal) {
						await this.updateFrontmatterField(file, 'Progress', current + '/' + String(totalEpisodes))
						filled.push(tr('notice.episodes', { value: totalEpisodes }))
					}
				} else {
					await this.updateFrontmatterField(file, 'Progress', '0/' + String(totalEpisodes))
					filled.push(tr('notice.episodes', { value: totalEpisodes }))
				}
			}
		}
	}

	private async fetchOMDb(
		title: string,
		year?: string,
		type?: string,
		imdbID?: string
	): Promise<OMDbResponse | null> {
		const params = new URLSearchParams({ apikey: this.settings.omdbApiKey })

		if (imdbID) {
			params.set('i', imdbID)
		} else {
			params.set('t', title)
			if (year) params.set('y', year)
			if (type) params.set('type', type)
		}

		const resp = await requestUrl({ url: 'https://www.omdbapi.com/?' + params.toString() })
		if (resp.status === 200 && resp.json?.Response !== 'False') {
			const result: OMDbResponse = resp.json
			return result
		}
		return null
	}

	private async fetchTotalEpisodes(imdbID: string, totalSeasons: number): Promise<number> {
		let total = 0
		for (let s = 1; s <= totalSeasons; s++) {
			try {
				const params = new URLSearchParams({
					apikey: this.settings.omdbApiKey,
					i: imdbID,
					Season: String(s)
				})
				const resp = await requestUrl({ url: 'https://www.omdbapi.com/?' + params.toString() })
				const data: OMDbSeasonResponse = resp.json
				if (resp.status === 200 && data.Episodes) {
					total += data.Episodes.length
				}
			} catch (e) {
				console.error('Library: OMDb season ' + String(s) + ' fetch error', e)
			}
		}
		return total
	}

	private async updateFrontmatterField(
		file: TFile,
		field: string,
		value: string | number | string[]
	): Promise<void> {
		await this.app.fileManager.processFrontMatter(file, (fm: Record<string, unknown>) => {
			fm[field] = value
		})
	}

	private async ensureFrontmatterFields(file: TFile): Promise<void> {
		const now = new Date()
		const dd = String(now.getDate()).padStart(2, '0')
		const mm = String(now.getMonth() + 1).padStart(2, '0')
		const todayStr = dd + '.' + mm + '.' + String(now.getFullYear())

		const defaults: Record<string, unknown> = {
			Name: file.basename,
			Progress: '',
			Complete: '',
			'My Rating': '',
			Date: todayStr,
			URL: ''
		}

		await this.app.fileManager.processFrontMatter(file, (fm: Record<string, unknown>) => {
			for (const [field, defaultValue] of Object.entries(defaults)) {
				if (fm[field] === undefined) {
					fm[field] = defaultValue
				}
			}
		})
	}

	private renderCards(element: HTMLElement, context: MarkdownPostProcessorContext): void {
		if (context.sourcePath !== this.settings.libraryFilePath) return

		const lists = element.querySelectorAll('ul')

		lists.forEach(ul => {
			const cards: CardData[] = []
			const items = ul.querySelectorAll('li')

			items.forEach(li => {
				const linkEl = li.querySelector('a.internal-link')
				if (!(linkEl instanceof HTMLElement)) return
				const fileName = linkEl.getAttribute('data-href') || linkEl.innerText
				const targetFile = this.app.metadataCache.getFirstLinkpathDest(fileName, context.sourcePath)
				if (!(targetFile instanceof TFile)) return

				const cache = this.app.metadataCache.getFileCache(targetFile)
				const fm = cache?.frontmatter ?? {}
				cards.push({
					link: linkEl,
					targetFile,
					fm,
					name: toStr(fm.Name) || targetFile.basename,
					year: Number(fm.Year) || 0,
					rating: Number(fm['My Rating'] || fm.Rating) || 0,
					date: parseDate(fm.Date)
				})
			})

			const wrapper = document.createElement('div')
			wrapper.classList.add('library-section')

			const toolbar = document.createElement('div')
			toolbar.classList.add('library-toolbar')

			const collapseBtn = document.createElement('button')
			collapseBtn.classList.add('library-collapse-btn')
			collapseBtn.setText('\u25bc')
			toolbar.appendChild(collapseBtn)

			const sortOptions = [
				{ label: tr('sort.name'), key: 'name' },
				{ label: tr('sort.year'), key: 'year' },
				{ label: tr('sort.rating'), key: 'rating' },
				{ label: tr('sort.date'), key: 'date' }
			]

			const spacer = document.createElement('div')
			spacer.classList.add('library-toolbar-spacer')
			toolbar.appendChild(spacer)

			const sortDropdown = document.createElement('div')
			sortDropdown.classList.add('library-sort-dropdown')

			const sortTrigger = document.createElement('button')
			sortTrigger.classList.add('library-sort-trigger')
			sortTrigger.setText(tr('sort.name') + ' \u25be')
			sortDropdown.appendChild(sortTrigger)

			const sortMenu = document.createElement('div')
			sortMenu.classList.add('library-sort-menu')
			sortDropdown.appendChild(sortMenu)

			let currentSort = 'name'
			let sortAsc = true

			const updateTriggerLabel = (): void => {
				const opt = sortOptions.find(o => o.key === currentSort)
				const arrow = sortAsc ? '\u2191' : '\u2193'
				sortTrigger.setText((opt?.label ?? '') + ' ' + arrow)
			}

			sortOptions.forEach(opt => {
				const item = document.createElement('button')
				item.classList.add('library-sort-menu-item')
				if (opt.key === 'name') item.classList.add('active')
				item.setText(opt.label)
				item.addEventListener('click', e => {
					e.stopPropagation()
					if (currentSort === opt.key) {
						sortAsc = !sortAsc
					} else {
						currentSort = opt.key
						sortAsc = opt.key === 'name'
					}
					sortMenu.querySelectorAll('.library-sort-menu-item').forEach(b => b.classList.remove('active'))
					item.classList.add('active')
					updateTriggerLabel()
					sortMenu.classList.remove('open')
					renderSorted()
				})
				sortMenu.appendChild(item)
			})

			sortTrigger.addEventListener('click', e => {
				e.stopPropagation()
				sortMenu.classList.toggle('open')
			})

			this.registerDomEvent(document, 'click', () => {
				sortMenu.classList.remove('open')
			})

			toolbar.appendChild(sortDropdown)
			wrapper.appendChild(toolbar)

			const container = document.createElement('div')
			container.classList.add('library-grid')

			collapseBtn.addEventListener('click', () => {
				const isCollapsed = container.classList.toggle('collapsed')
				collapseBtn.setText(isCollapsed ? '\u25b6' : '\u25bc')
				if (isCollapsed) {
					const firstCard = container.querySelector('.library-card')
					if (firstCard instanceof HTMLElement) {
						container.style.setProperty('--row-height', firstCard.offsetHeight + 'px')
					}
				} else {
					container.style.removeProperty('--row-height')
				}
			})

			const renderSorted = (): void => {
				const sorted = [...cards]
				sorted.sort((a, b) => {
					let cmp = 0
					switch (currentSort) {
						case 'name': cmp = a.name.localeCompare(b.name); break
						case 'year': cmp = a.year - b.year; break
						case 'rating': cmp = a.rating - b.rating; break
						case 'date': cmp = a.date - b.date; break
					}
					return sortAsc ? cmp : -cmp
				})

				container.empty()
				sorted.forEach(({ link, targetFile, fm }) => {
					const card = container.createDiv({ cls: 'library-card' })
					card.onClickEvent(() => {
						void this.app.workspace.getLeaf(false).openFile(targetFile)
					})

					const cover = fm.Cover || fm.Image || fm.Baner
					const imgDiv = card.createDiv({ cls: 'card-image' })
					if (cover) {
						const img = document.createElement('img')
						const coverStr = toStr(cover)
						img.src = coverStr.startsWith('http')
							? coverStr
							: this.app.vault.adapter.getResourcePath(coverStr)
						imgDiv.appendChild(img)
					} else {
						imgDiv.createSpan({ text: '\ud83c\udfac' })
					}

					const infoDiv = card.createDiv({ cls: 'card-info' })
					const titleDiv = infoDiv.createDiv({ cls: 'card-title' })
					titleDiv.appendChild(link.cloneNode(true))

					const authorValue = fm.Author || fm.Creator || fm.Director || fm.Artist
					if (authorValue) {
						const authorDiv = infoDiv.createDiv({ cls: 'card-author' })
						authorDiv.setText(toStr(authorValue))
					}

					if (fm.Year) {
						infoDiv.createDiv({ cls: 'card-year' }).setText(toStr(fm.Year))
					}

					const myRating = fm['My Rating'] || fm.Rating
					const imdbRating = fm['Rating IMDB']
					if (imdbRating || myRating) {
						const parts: string[] = []
						if (imdbRating) parts.push('IMDb ' + toStr(imdbRating))
						if (myRating) parts.push('My ' + toStr(myRating))
						infoDiv.createDiv({ cls: 'card-rating' }).setText(parts.join(' | '))
					}

					if (fm.Complete !== true && fm.Progress != null) {
						const percent = parseProgress(fm.Progress)
						if (percent > 0) {
							const progressContainer = infoDiv.createDiv({ cls: 'card-progress' })
							progressContainer.createDiv({ cls: 'card-progress-label' }).setText(String(percent) + '%')
							const progressBar = progressContainer.createDiv({ cls: 'card-progress-bar' })
							const progressFill = progressBar.createDiv({ cls: 'card-progress-fill' })
							progressFill.setCssStyles({ width: String(percent) + '%' })
						}
					}
				})
			}

			renderSorted()
			wrapper.appendChild(container)
			ul.replaceWith(wrapper)
		})
	}

	private renderNoteHeader(element: HTMLElement, context: MarkdownPostProcessorContext): void {
		if (context.sourcePath === this.settings.libraryFilePath) return

		const file = this.app.metadataCache.getFirstLinkpathDest(context.sourcePath, '')
		if (!(file instanceof TFile)) return

		const cache = this.app.metadataCache.getFileCache(file)
		const fm: Record<string, unknown> | undefined = cache?.frontmatter
		if (!fm) return

		const knownTypes = this.settings.categories.map(c => c.typeValue)
		if (!fm.Type || !knownTypes.includes(toStr(fm.Type))) return

		const parent = element.closest('.markdown-preview-sizer, .markdown-rendered')
		if (parent?.querySelector('.note-header')) return

		const firstEl = element.querySelector('h1, h2, h3, p, ul, ol, hr, blockquote, table, pre')
		if (!firstEl) return

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

		const header = document.createElement('div')
		header.classList.add('note-header')

		const imgSide = document.createElement('div')
		imgSide.classList.add('note-header-cover')
		if (cover) {
			const img = document.createElement('img')
			const coverStr = toStr(cover)
			img.src = coverStr.startsWith('http')
				? coverStr
				: this.app.vault.adapter.getResourcePath(coverStr)
			imgSide.appendChild(img)
		}
		header.appendChild(imgSide)

		const infoSide = document.createElement('div')
		infoSide.classList.add('note-header-info')

		const titleEl = document.createElement('div')
		titleEl.classList.add('note-header-title')
		if (url) {
			const a = document.createElement('a')
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
			const row = document.createElement('div')
			row.classList.add('note-header-row')
			const b = document.createElement('b')
			b.setText(label + ': ')
			row.appendChild(b)
			row.appendText(value)
			infoSide.appendChild(row)
		}

		if (creatorStr) addRow(tr('header.creator'), creatorStr)
		const yearsStr = year + (endYear ? '\u2013' + endYear : '')
		if (yearsStr) addRow(tr('header.years'), yearsStr)
		if (season) addRow(tr('header.seasons'), season)

		const genre = fm.Genre
		if (genre) {
			addRow(tr('header.genre'), toStr(genre))
		}

		if (ratingIMDB) addRow('IMDb', ratingIMDB)
		if (myRating) addRow(tr('header.myRating'), myRating)

		if (!complete && progressPercent > 0) {
			const progRow = document.createElement('div')
			progRow.classList.add('note-header-row')
			const b = document.createElement('b')
			b.setText(tr('header.progress') + ': ')
			progRow.appendChild(b)
			progRow.appendText(String(progressPercent) + '%')
			const bar = document.createElement('div')
			bar.classList.add('note-header-progress-bar')
			const fill = document.createElement('div')
			fill.classList.add('note-header-progress-fill')
			fill.setCssStyles({ width: String(progressPercent) + '%' })
			bar.appendChild(fill)
			progRow.appendChild(bar)
			infoSide.appendChild(progRow)
		}

		if (complete) {
			const doneRow = document.createElement('div')
			doneRow.classList.add('note-header-row', 'note-header-complete')
			doneRow.setText(tr('header.complete'))
			infoSide.appendChild(doneRow)
		}

		header.appendChild(infoSide)
		element.insertBefore(header, element.firstChild)
	}

	private async loadSettings(): Promise<void> {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData())
	}
}
