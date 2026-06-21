import { requestUrl } from 'obsidian'
import type { ContentProvider, ContentType, NormalizedMetadata, SearchResult } from './types'

function delay(ms: number): Promise<void> {
	return new Promise((resolve) => window.setTimeout(resolve, ms))
}

interface OmdbSearchItem {
	Title: string
	Year?: string
	imdbID: string
	Poster?: string
}

interface OmdbSearchResponse {
	Search?: OmdbSearchItem[]
	Response?: string
}

interface OmdbDetails {
	Title: string
	Year?: string
	Genre?: string
	Director?: string
	Writer?: string
	Poster?: string
	imdbRating?: string
	totalSeasons?: string
	imdbID: string
	Response?: string
}

interface OmdbSeasonResponse {
	Episodes?: unknown[]
}

function na(value: string | undefined): string | null {
	return value && value !== 'N/A' ? value : null
}

export class OmdbProvider implements ContentProvider {
	readonly id = 'omdb'
	readonly contentTypes: ContentType[] = ['movie', 'series']

	private static readonly BASE = 'https://www.omdbapi.com/'

	private getKey: () => string

	constructor(getKey: () => string) {
		this.getKey = getKey
	}

	private url(params: Record<string, string>): string {
		return `${OmdbProvider.BASE}?${new URLSearchParams({ apikey: this.getKey(), ...params }).toString()}`
	}

	private year(value: string | null): number | null {
		if (!value) return null
		const match = value.match(/^(\d{4})/)
		return match ? Number(match[1]) : null
	}

	private cover(value: string | undefined): string | null {
		return na(value)
	}

	async search(query: string, type: ContentType): Promise<SearchResult[]> {
		if (!this.getKey()) return []
		const omdbType = type === 'series' ? 'series' : 'movie'
		const resp = await requestUrl({ url: this.url({ s: query, type: omdbType }) })
		if (resp.status !== 200) return []
		const data = resp.json as OmdbSearchResponse
		if (!data || typeof data !== 'object' || data.Response === 'False') return []
		const items = Array.isArray(data.Search) ? data.Search : []
		return items.map((item) => ({
			provider: this.id,
			sourceId: item.imdbID,
			title: item.Title,
			year: this.year(na(item.Year)),
			cover: this.cover(item.Poster),
			subtitle: null,
			raw: item
		}))
	}

	async fetch(sourceId: string, type: ContentType): Promise<NormalizedMetadata | null> {
		if (!this.getKey()) return null
		const resp = await requestUrl({ url: this.url({ i: sourceId }) })
		if (resp.status !== 200) return null
		const details = resp.json as OmdbDetails
		if (!details || typeof details !== 'object' || details.Response === 'False') return null

		const creatorSource = na(details.Director) ?? na(details.Writer)
		const creators = creatorSource
			? creatorSource.split(',').map((s) => s.trim()).filter(Boolean)
			: []
		const genreSource = na(details.Genre)
		const genres = genreSource
			? genreSource.split(',').map((s) => s.trim()).filter(Boolean)
			: []
		const rawYear = na(details.Year)
		const rating = na(details.imdbRating)

		const fields: Record<string, unknown> = {
			Name: details.Title,
			Year: this.year(rawYear),
			Genre: genres,
			Creator: creators,
			Cover: this.cover(details.Poster),
			URL: `https://www.imdb.com/title/${details.imdbID}/`
		}
		if (rating) fields['Rating IMDB'] = parseFloat(rating)

		if (type === 'series') {
			return this.enrichSeries(fields, details, sourceId)
		}
		return { fields, progressTotal: 1, imdbId: details.imdbID }
	}

	private async enrichSeries(
		fields: Record<string, unknown>,
		details: OmdbDetails,
		imdbId: string
	): Promise<NormalizedMetadata> {
		const endMatch = na(details.Year)?.match(/[–-](\d{4})/)
		if (endMatch) fields['End Year'] = Number(endMatch[1])

		const totalSeasons = na(details.totalSeasons) ? Number(details.totalSeasons) : 0
		if (totalSeasons > 0) fields.Season = totalSeasons
		const episodes = totalSeasons > 0 ? await this.countEpisodes(imdbId, totalSeasons) : 0
		return { fields, progressTotal: episodes > 0 ? episodes : null, imdbId }
	}

	private async countEpisodes(imdbId: string, totalSeasons: number): Promise<number> {
		let total = 0
		for (let season = 1; season <= totalSeasons; season++) {
			try {
				const resp = await requestUrl({ url: this.url({ i: imdbId, Season: String(season) }) })
				if (resp.status !== 200) continue
				const data = resp.json as OmdbSeasonResponse
				if (Array.isArray(data?.Episodes)) total += data.Episodes.length
			} catch (e) {
				console.error('Library: OMDb season fetch error', e)
			}
			if (season < totalSeasons) await delay(150)
		}
		return total
	}
}
