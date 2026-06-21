import { App, SuggestModal } from 'obsidian'
import type { ContentProvider, ContentType, SearchResult } from '../providers/types'
import { tr } from '../i18n'

export class AddContentModal extends SuggestModal<SearchResult> {
	private provider: ContentProvider
	private type: ContentType
	private onPick: (result: SearchResult) => void
	private debounceTimer: number | null = null
	private cache = new Map<string, SearchResult[]>()

	constructor(
		app: App,
		provider: ContentProvider,
		type: ContentType,
		onPick: (result: SearchResult) => void
	) {
		super(app)
		this.provider = provider
		this.type = type
		this.onPick = onPick
		this.setPlaceholder(tr('modal.search.placeholder'))
	}

	async getSuggestions(query: string): Promise<SearchResult[]> {
		const trimmed = query.trim()
		if (trimmed.length < 2) return []
		const cached = this.cache.get(trimmed)
		if (cached) return cached

		await new Promise<void>((resolve) => {
			if (this.debounceTimer) window.clearTimeout(this.debounceTimer)
			this.debounceTimer = window.setTimeout(resolve, 300)
		})

		try {
			const results = await this.provider.search(trimmed, this.type)
			this.cache.set(trimmed, results)
			return results
		} catch (e) {
			console.error('Library: search error', e)
			return []
		}
	}

	renderSuggestion(result: SearchResult, el: HTMLElement): void {
		el.addClass('library-suggest')
		if (result.cover) {
			const img = el.createEl('img', { cls: 'library-suggest-cover' })
			img.src = result.cover
		}
		const info = el.createDiv({ cls: 'library-suggest-info' })
		info.createDiv({ cls: 'library-suggest-title', text: result.title })
		const meta = [result.year ? String(result.year) : '', result.subtitle ?? '']
			.filter(Boolean)
			.join(' · ')
		if (meta) info.createDiv({ cls: 'library-suggest-meta', text: meta })
	}

	onChooseSuggestion(result: SearchResult): void {
		this.onPick(result)
	}
}
