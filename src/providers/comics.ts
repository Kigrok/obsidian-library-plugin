import { requestUrl } from 'obsidian'
import type { ContentProvider, ContentType, NormalizedMetadata, SearchResult } from './types'

interface ComicVineVolume {
	id: number
	name: string
	start_year?: string
	image?: { thumb_url?: string; medium_url?: string; screen_url?: string }
	publisher?: { name?: string }
	count_of_issues?: number
	site_detail_url?: string
	description?: string
}

interface ComicVineSearchResponse {
	error?: string
	results?: ComicVineVolume[]
	number_of_total_results?: number
}

export class ComicsProvider implements ContentProvider {
	readonly id = 'comicvine'
	readonly contentTypes: ContentType[] = ['comic']

	private static readonly BASE = 'https://comicvine.gamespot.com/api'

	private getKey: () => string

	constructor(getKey: () => string) {
		this.getKey = getKey
	}

	private year(volume: ComicVineVolume): number | null {
		if (!volume.start_year) return null
		const match = volume.start_year.match(/^(\d{4})/)
		return match ? Number(match[1]) : null
	}

	private cover(volume: ComicVineVolume): string | null {
		return volume.image?.medium_url ?? volume.image?.thumb_url ?? null
	}

	async search(query: string): Promise<SearchResult[]> {
		try {
			const key = this.getKey().trim()
			if (!key) return []
			const params = new URLSearchParams({
				api_key: key,
				format: 'json',
				filter: `name:${query}`,
				limit: '20',
				sort: 'name:asc'
			})
			const resp = await requestUrl({
				url: `${ComicsProvider.BASE}/volumes/?${params.toString()}`,
				throw: false
			})
			if (resp.status !== 200) return []
			const data = resp.json as ComicVineSearchResponse
			if (data.error !== 'OK') return []
			const items = Array.isArray(data.results) ? data.results : []
			return items.map((vol) => ({
				provider: this.id,
				sourceId: String(vol.id),
				title: vol.name,
				year: this.year(vol),
				cover: this.cover(vol),
				subtitle: vol.publisher?.name ?? null,
				raw: vol
			}))
		} catch (e) {
			console.error('Library: Comic Vine search error', e)
			return []
		}
	}

	async fetch(sourceId: string): Promise<NormalizedMetadata | null> {
		try {
			const key = this.getKey().trim()
			if (!key) return null
			const params = new URLSearchParams({
				api_key: key,
				format: 'json'
			})
			const resp = await requestUrl({
				url: `${ComicsProvider.BASE}/volume/4000-${sourceId}/?${params.toString()}`,
				throw: false
			})
			if (resp.status !== 200) return null
			const data = resp.json as { results?: ComicVineVolume; error?: string }
			if (data.error !== 'OK' || !data.results) return null
			const vol = data.results

			const fields: Record<string, unknown> = {
				Name: vol.name,
				Year: this.year(vol),
				Genre: ['Comics'],
				Creator: vol.publisher?.name ? [vol.publisher.name] : [],
				Cover: this.cover(vol),
				URL: vol.site_detail_url || `https://comicvine.gamespot.com/volumes/4000-${sourceId}/`
			}

			const issueCount = vol.count_of_issues && vol.count_of_issues > 0 ? vol.count_of_issues : null
			return { fields, progressTotal: issueCount, imdbId: null }
		} catch (e) {
			console.error('Library: Comic Vine fetch error', e)
			return null
		}
	}
}
