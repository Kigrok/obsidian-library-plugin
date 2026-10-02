import { requestUrl } from 'obsidian'
import type { ContentProvider, ContentType, NormalizedMetadata, SearchResult } from './types'

interface MalAnime {
	id: number
	title: string
	alternative_titles?: { en?: string; ja?: string }
	start_date?: string
	mean?: number
	num_episodes?: number
	average_episode_duration?: number
	genres?: { name: string }[]
	studios?: { name: string }[]
	main_picture?: { medium?: string; large?: string }
}

// `id`, `title` and `main_picture` come with every answer; the rest is asked for.
const SEARCH_FIELDS = 'alternative_titles,start_date'
const DETAIL_FIELDS = 'alternative_titles,start_date,mean,num_episodes,average_episode_duration,genres,studios'

// Anime from the MyAnimeList API, for notes kept on that site. Public data
// needs only the Client ID the MyAnimeList sync already asks for; without it
// the provider stays silent. Its notes carry "mal:" ids, so a refresh comes
// back here and the sync uses the id as is.
export class MalProvider implements ContentProvider {
	readonly id = 'mal'
	readonly contentTypes: ContentType[] = ['anime']

	static readonly PREFIX = 'mal:'
	private static readonly API = 'https://api.myanimelist.net/v2'

	private getClientId: () => string

	constructor(getClientId: () => string) {
		this.getClientId = getClientId
	}

	enabled(): boolean {
		return !!this.getClientId().trim()
	}

	refreshable(): boolean {
		return this.enabled()
	}

	private async get<T>(path: string): Promise<T | null> {
		const clientId = this.getClientId().trim()
		if (!clientId) return null
		const resp = await requestUrl({
			url: MalProvider.API + path,
			headers: { 'X-MAL-CLIENT-ID': clientId, Accept: 'application/json' },
			throw: false
		})
		// A failed request may answer with an HTML page: only a 200 is read as JSON.
		return resp.status === 200 ? resp.json as T : null
	}

	// The English title first, as AniList's notes have it; MyAnimeList's own
	// title is the romaji one.
	private title(anime: MalAnime): string {
		return anime.alternative_titles?.en || anime.title
	}

	async search(query: string): Promise<SearchResult[]> {
		try {
			const json = await this.get<{ data?: { node: MalAnime }[] }>(
				`/anime?q=${encodeURIComponent(query)}&limit=20&fields=${SEARCH_FIELDS}`
			)
			return (json?.data ?? []).map(({ node }) => ({
				provider: this.id,
				sourceId: MalProvider.PREFIX + String(node.id),
				title: this.title(node),
				year: yearOf(node.start_date),
				cover: node.main_picture?.large ?? node.main_picture?.medium ?? null,
				subtitle: node.alternative_titles?.ja || null,
				raw: null
			}))
		} catch (e) {
			console.error('Library: MyAnimeList search error', e)
			return []
		}
	}

	async fetch(sourceId: string): Promise<NormalizedMetadata | null> {
		const id = sourceId.startsWith(MalProvider.PREFIX) ? sourceId.slice(MalProvider.PREFIX.length) : ''
		if (!/^\d+$/.test(id)) return null
		try {
			const anime = await this.get<MalAnime>(`/anime/${id}?fields=${DETAIL_FIELDS}`)
			if (!anime) return null
			const fields: Record<string, unknown> = {
				Name: this.title(anime),
				Year: yearOf(anime.start_date),
				Genre: (anime.genres ?? []).map(genre => genre.name),
				Creator: (anime.studios ?? []).map(studio => studio.name),
				Cover: anime.main_picture?.large ?? anime.main_picture?.medium ?? null,
				URL: `https://myanimelist.net/anime/${id}`
			}
			if (typeof anime.mean === 'number') fields['Rating MAL'] = anime.mean
			// MyAnimeList gives seconds; `Runtime` keeps the minutes of one episode.
			const seconds = anime.average_episode_duration ?? 0
			if (seconds > 0) fields.Runtime = Math.round(seconds / 60)
			const episodes = anime.num_episodes && anime.num_episodes > 0 ? anime.num_episodes : null
			return { fields, progressTotal: episodes, imdbId: null }
		} catch (e) {
			console.error('Library: MyAnimeList fetch error', e)
			return null
		}
	}
}

// "2006-10-04", "2006-10" or "2006", read as written: `new Date` takes it for
// UTC midnight and gives the year before west of Greenwich.
export function yearOf(date: string | undefined): number | null {
	const match = date?.match(/^(\d{4})/)
	return match ? Number(match[1]) : null
}
