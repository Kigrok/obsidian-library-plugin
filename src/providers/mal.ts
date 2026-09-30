import { requestUrl } from 'obsidian'
import type LibraryPlugin from '../main'
import type { ContentProvider, ContentType, NormalizedMetadata, SearchResult } from './types'

interface MalAnime {
	id: number
	title: string
	alternative_titles?: { en?: string; ja?: string; synonyms?: string[] }
	start_date?: string
	end_date?: string
	synopsis?: string
	mean?: number
	num_episodes?: number
	average_episode_duration?: number
	genres?: { name: string }[]
	studios?: { name: string }[]
	main_picture?: { medium?: string; large?: string }
	status?: string
	rating?: string
	start_season?: { year: number; season: string }
	background?: string
}

interface MalSearchResponse {
	data?: { node: MalAnime }[]
}

const SEARCH_FIELDS = 'id,title,alternative_titles,start_date,genres,num_episodes,main_picture'
const DETAIL_FIELDS = 'id,title,alternative_titles,start_date,end_date,synopsis,mean,num_episodes,average_episode_duration,genres,studios,main_picture,status,rating,start_season,background'
const RETRY_DELAYS = [1000, 2500, 5000]

export class MalProvider implements ContentProvider {
	readonly id = 'mal'
	readonly contentTypes: ContentType[] = ['anime']

	private readonly endpoint = 'https://api.myanimelist.net/v2'

	constructor(private readonly plugin: LibraryPlugin) {}

	private async headers(): Promise<Record<string, string> | null> {
		const clientId = this.plugin.settings.malClientId.trim()
		if (!clientId) return null
		const headers: Record<string, string> = {
			'X-MAL-CLIENT-ID': clientId,
			Accept: 'application/json'
		}
		const token = await this.plugin.malToken()
		if (token) headers.Authorization = `Bearer ${token}`
		return headers
	}

	private async request(url: string, headers: Record<string, string>): Promise<{ status: number; json: unknown }> {
		let response = await requestUrl({ url, headers, throw: false })
		for (let attempt = 0; attempt < RETRY_DELAYS.length && (response.status === 429 || response.status >= 500); attempt++) {
			await new Promise(resolve => window.setTimeout(resolve, RETRY_DELAYS[attempt]))
			response = await requestUrl({ url, headers, throw: false })
		}
		if (response.status === 401 || response.status === 403 || response.status === 404) {
			const publicHeaders = { ...headers }
			delete publicHeaders.Authorization
			if (Object.keys(publicHeaders).length !== Object.keys(headers).length) {
				response = await requestUrl({ url, headers: publicHeaders, throw: false })
			}
		}
		return { status: response.status, json: response.json }
	}

	async search(query: string): Promise<SearchResult[]> {
		try {
			const headers = await this.headers()
			if (!headers) return []
			const url = `${this.endpoint}/anime?q=${encodeURIComponent(query)}&limit=20&fields=${SEARCH_FIELDS}`
			const response = await this.request(url, headers)
			if (response.status !== 200) return []
			const data = response.json as MalSearchResponse
			return (data.data ?? []).map(({ node }) => ({
				provider: this.id,
				sourceId: `mal:${String(node.id)}`,
				title: node.alternative_titles?.synonyms?.[0] ?? node.title,
				year: node.start_date ? new Date(node.start_date).getFullYear() : null,
				cover: node.main_picture?.large ?? node.main_picture?.medium ?? null,
				subtitle: node.alternative_titles?.ja ?? node.alternative_titles?.en ?? null,
				raw: node
			}))
		} catch (error) {
			console.error('Library: MAL search error', error)
			return []
		}
	}

	async fetch(sourceId: string, _type: ContentType, raw?: unknown): Promise<NormalizedMetadata | null> {
		const id = sourceId.startsWith('mal:') ? sourceId.slice(4) : ''
		if (!id || !/^\d+$/.test(id)) return null
		try {
			const headers = await this.headers()
			if (!headers) return null
			let anime = raw as MalAnime | undefined
			if (!anime || typeof anime !== 'object' || anime.id !== Number(id)) {
				const url = `${this.endpoint}/anime/${id}?fields=${DETAIL_FIELDS}`
				const response = await this.request(url, headers)
				if (response.status !== 200) return null
				anime = response.json as MalAnime
			}
			const fields: Record<string, unknown> = {
				Name: anime.title,
				Year: anime.start_date ? new Date(anime.start_date).getFullYear() : null,
				Genre: anime.genres?.map((genre) => genre.name) ?? [],
				Creator: anime.studios?.map((studio) => studio.name) ?? [],
				Cover: anime.main_picture?.large ?? anime.main_picture?.medium ?? null,
				URL: `https://myanimelist.net/anime/${anime.id}`
			}
			if (typeof anime.mean === 'number') fields['Rating MAL'] = anime.mean
			if (anime.status) fields.Status = anime.status
			if (anime.rating) fields['Content Rating'] = anime.rating
			if (anime.num_episodes && anime.num_episodes > 0) fields.Episodes = anime.num_episodes
			if (anime.average_episode_duration && anime.average_episode_duration > 0) {
				fields.Runtime = Math.round(anime.average_episode_duration / 60)
			}
			if (anime.end_date) fields['End Date'] = anime.end_date
			if (anime.start_season) fields.Season = `${anime.start_season.season} ${anime.start_season.year}`
			if (anime.synopsis) fields.Synopsis = anime.synopsis
			if (anime.background) fields.Background = anime.background
			return {
				fields,
				progressTotal: anime.num_episodes && anime.num_episodes > 0 ? anime.num_episodes : null,
				imdbId: null
			}
		} catch (error) {
			console.error('Library: MAL fetch error', error)
			return null
		}
	}
}
