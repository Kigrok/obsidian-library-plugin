import { requestUrl } from 'obsidian'
import type { ContentProvider, ContentType, NormalizedMetadata, SearchResult } from './types'

interface JikanAnime {
	mal_id: number
	title: string
	title_japanese?: string
	images?: { jpg?: { image_url?: string; large_image_url?: string } }
	score?: number | null
	genres?: { name: string }[]
	studios?: { name: string }[]
	episodes?: number | null
	status?: string
	aired?: { string?: string; prop?: { from?: { year?: number } } }
	synopsis?: string
	url?: string
	type?: string
}

interface JikanSearchResponse {
	data?: JikanAnime[]
}

export class AnimeProvider implements ContentProvider {
	readonly id = 'jikan'
	readonly contentTypes: ContentType[] = ['anime']

	private static readonly BASE = 'https://api.jikan.moe/v4'

	private cover(anime: JikanAnime): string | null {
		return anime.images?.jpg?.large_image_url ?? anime.images?.jpg?.image_url ?? null
	}

	private year(anime: JikanAnime): number | null {
		return anime.aired?.prop?.from?.year ?? null
	}

	async search(query: string): Promise<SearchResult[]> {
		try {
			const params = new URLSearchParams({ q: query, limit: '20', sfw: 'true' })
			const resp = await requestUrl({
				url: `${AnimeProvider.BASE}/anime?${params.toString()}`,
				throw: false
			})
			if (resp.status !== 200) return []
			const data = resp.json as JikanSearchResponse
			const items = Array.isArray(data?.data) ? data.data : []
			return items.map((anime) => ({
				provider: this.id,
				sourceId: String(anime.mal_id),
				title: anime.title,
				year: this.year(anime),
				cover: this.cover(anime),
				subtitle: anime.title_japanese || null,
				raw: anime
			}))
		} catch (e) {
			console.error('Library: Jikan search error', e)
			return []
		}
	}

	async fetch(sourceId: string): Promise<NormalizedMetadata | null> {
		try {
			const resp = await requestUrl({
				url: `${AnimeProvider.BASE}/anime/${sourceId}/full`,
				throw: false
			})
			if (resp.status !== 200) return null
			const data = resp.json as { data?: JikanAnime }
			const anime = data?.data
			if (!anime) return null

			const genres = (anime.genres ?? []).map((g) => g.name)
			const fields: Record<string, unknown> = {
				Name: anime.title,
				Year: this.year(anime),
				Genre: genres,
				Creator: (anime.studios ?? []).map((s) => s.name),
				Cover: this.cover(anime),
				URL: anime.url || `https://myanimelist.net/anime/${anime.mal_id}`
			}

			if (anime.score) fields['Rating MAL'] = anime.score
			if (anime.episodes) fields['Total Episodes'] = anime.episodes
			if (anime.status) fields['Status'] = anime.status

			const episodes = anime.episodes && anime.episodes > 0 ? anime.episodes : null
			return { fields, progressTotal: episodes, imdbId: null }
		} catch (e) {
			console.error('Library: Jikan fetch error', e)
			return null
		}
	}
}
