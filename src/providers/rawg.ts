import { requestUrl } from 'obsidian'
import type { ContentProvider, ContentType, NormalizedMetadata, SearchResult } from './types'

interface RawgSearchItem {
	id: number
	name: string
	released?: string | null
	background_image?: string | null
	genres?: { name: string }[]
}

interface RawgSearchResponse {
	results?: RawgSearchItem[]
}

interface RawgDetails {
	name: string
	released?: string | null
	background_image?: string | null
	slug?: string
	genres?: { name: string }[]
	developers?: { name: string }[]
	publishers?: { name: string }[]
}

export class RawgProvider implements ContentProvider {
	readonly id = 'rawg'
	readonly contentTypes: ContentType[] = ['game']

	private static readonly BASE = 'https://api.rawg.io/api/games'

	private getKey: () => string

	constructor(getKey: () => string) {
		this.getKey = getKey
	}

	private year(value: string | null | undefined): number | null {
		if (!value) return null
		const match = value.match(/^(\d{4})/)
		return match ? Number(match[1]) : null
	}

	async search(query: string): Promise<SearchResult[]> {
		const key = this.getKey().trim()
		if (!key) return []
		const params = new URLSearchParams({ key, search: query, page_size: '20' })
		const resp = await requestUrl({ url: `${RawgProvider.BASE}?${params.toString()}`, throw: false })
		if (resp.status !== 200) return []
		const data = resp.json as RawgSearchResponse
		return (data.results ?? []).map((item) => ({
			provider: this.id,
			sourceId: String(item.id),
			title: item.name,
			year: this.year(item.released),
			cover: item.background_image ?? null,
			subtitle: (item.genres ?? []).map((g) => g.name).join(', ') || null,
			raw: item
		}))
	}

	async fetch(sourceId: string): Promise<NormalizedMetadata | null> {
		const key = this.getKey().trim()
		if (!key) return null
		const params = new URLSearchParams({ key })
		const resp = await requestUrl({ url: `${RawgProvider.BASE}/${sourceId}?${params.toString()}`, throw: false })
		if (resp.status !== 200) return null
		const details = resp.json as RawgDetails

		const creators = (details.developers ?? details.publishers ?? []).map((d) => d.name)
		const fields: Record<string, unknown> = {
			Name: details.name,
			Year: this.year(details.released),
			Genre: (details.genres ?? []).map((g) => g.name),
			Creator: creators,
			Cover: details.background_image ?? null
		}
		if (details.slug) fields['URL'] = `https://rawg.io/games/${details.slug}`

		return { fields, progressTotal: 1, imdbId: null }
	}
}
