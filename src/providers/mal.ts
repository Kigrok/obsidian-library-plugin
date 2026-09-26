import { requestUrl } from 'obsidian'
import type { ContentProvider, ContentType, NormalizedMetadata, SearchResult } from './types'
import { MalTokenManager } from '../malTokenManager'
import type LibraryPlugin from '../main'

interface MalAnime {
	id: number
	title: string
	main_picture?: { medium: string; large: string }
	alternative_titles?: { en?: string; ja?: string; synonyms?: string[] }
	start_date?: string
	end_date?: string
	synopsis?: string
	mean?: number
	rank?: number
	popularity?: number
	num_list_users?: number
	num_scoring_users?: number
	nsfw?: boolean
	media_type?: string
	status?: string
	genres?: { id: number; name: string }[]
	my_list_status?: MalListStatus
	num_episodes?: number
	start_season?: { year: number; season: string }
	broadcast?: { day_of_the_week: string; start_time: string }
	source?: string
	average_episode_duration?: number
	rating?: string
	pictures?: { medium: string; large: string }[]
	background?: string
	related_anime?: { node: MalAnime; relation_type: string }[]
	related_manga?: { node: { id: number; title: string }; relation_type: string }[]
	recommendations?: { node: MalAnime; num_recommendations: number }[]
	studios?: { id: number; name: string }[]
	statistics?: { status: { watching: number; completed: number; on_hold: number; dropped: number; plan_to_watch: number } }
}

interface MalListStatus {
	status: 'watching' | 'completed' | 'on_hold' | 'dropped' | 'plan_to_watch'
	score: number
	num_watched_episodes: number
	is_rewatching: boolean
	updated_at: string
}

interface MalSearchResponse {
	data: { node: MalAnime }[]
	paging?: { next: string }
}

const SEARCH_FIELDS = 'id,title,main_picture,alternative_titles,start_date,genres,media_type,status,num_episodes'
const DETAIL_FIELDS = 'id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics'

export class MalProvider implements ContentProvider {
	readonly id = 'mal'
	readonly contentTypes: ContentType[] = ['anime-mal']

	private readonly BASE = 'https://api.myanimelist.net/v2'

	private tokenManager: MalTokenManager

	constructor(plugin: LibraryPlugin) {
		this.tokenManager = new MalTokenManager(plugin)
	}

	private async headers(): Promise<Record<string, string>> {
		const h: Record<string, string> = {
			'X-MAL-CLIENT-ID': this.tokenManager['clientId'],
			Accept: 'application/json'
		}
		const token = await this.tokenManager.getValidAccessToken()
		if (token) h.Authorization = `Bearer ${token}`
		return h
	}

	async search(query: string): Promise<SearchResult[]> {
		try {
			const clientId = this.tokenManager['clientId']
			if (!clientId) return []
			const headers = await this.headers()
			const url = `${this.BASE}/anime?q=${encodeURIComponent(query)}&limit=20&nsfw=true&fields=${SEARCH_FIELDS}`
			const resp = await requestUrl({ url, headers, throw: false })
			if (resp.status !== 200) return []
			const data = resp.json as MalSearchResponse

			return (data.data || []).map((item) => {
				const alt = item.node.alternative_titles;

				const romajiTitle = alt?.synonyms?.[0] ?? item.node.title;

				return {
					provider: this.id,
					sourceId: String(item.node.id),
					title: romajiTitle,
					year: item.node.start_date ? new Date(item.node.start_date).getFullYear() : null,
					cover: item.node.main_picture?.large || item.node.main_picture?.medium || null,
					subtitle: alt?.ja || alt?.en || null,
					raw: item.node
				}
			})
		} catch (e) {
			console.error('Library: MAL search error', e)
			return []
		}
	}

	async fetch(sourceId: string, _type: ContentType, raw?: unknown): Promise<NormalizedMetadata | null> {
		try {
			const clientId = this.tokenManager['clientId']
			if (!clientId) return null

			let media: MalAnime | undefined = raw as MalAnime | undefined
			if (!media || typeof media !== 'object' || media.id !== Number(sourceId)) {
				const headers = await this.headers()
				const url = `${this.BASE}/anime/${sourceId}?fields=${DETAIL_FIELDS}`
				const resp = await requestUrl({ url, headers, throw: false })
				if (resp.status !== 200) return null
				media = resp.json as MalAnime
			}
			if (!media) return null

			const alt = media.alternative_titles
			const romajiTitle = (alt?.synonyms && alt.synonyms.length > 0)
				? alt.synonyms[0]
				: media.title

			const fields: Record<string, unknown> = {
				Name: romajiTitle,
				Year: media.start_date ? new Date(media.start_date).getFullYear() : null,
				Genre: media.genres?.map((g) => g.name) || [],
				Creator: media.studios?.map((s) => s.name) || [],
				Cover: media.main_picture?.large || media.main_picture?.medium || null,
				URL: `https://myanimelist.net/anime/${media.id}`
			}
			if (typeof media.mean === 'number') fields['Rating MAL'] = media.mean
			if (media.status) fields['Status'] = this.mapStatus(media.status)
			if (media.rating) fields['Content Rating'] = media.rating
			if (media.num_episodes && media.num_episodes > 0) fields.Episodes = media.num_episodes
			if (media.background) fields.Background = media.background
			if (media.start_season) fields.Season = `${media.start_season.season} ${media.start_season.year}`
			if (media.end_date) fields['End Date'] = media.end_date

			return {
				fields,
				progressTotal: media.num_episodes && media.num_episodes > 0 ? media.num_episodes : null,
				imdbId: null
			}
		} catch (e) {
			console.error('Library: MAL fetch error', e)
			return null
		}
	}

	private mapStatus(status: string): string {
		const map: Record<string, string> = {
			currently_airing: 'Airing',
			finished_airing: 'Finished Airing',
			not_yet_aired: 'Not Yet Aired'
		}
		return map[status] || status
	}
}