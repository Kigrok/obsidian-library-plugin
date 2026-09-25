import { requestUrl } from 'obsidian'
import { isEmptyValue, plausibleRuntime } from '../util'
import type {
	ContentProvider,
	ContentType,
	MetadataEnricher,
	NormalizedMetadata,
	SearchResult
} from './types'

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

interface OmdbRating {
	Source?: string
	Value?: string
}

interface OmdbDetails {
	Title: string
	Year?: string
	Genre?: string
	Director?: string
	Writer?: string
	Actors?: string
	Poster?: string
	imdbRating?: string
	Ratings?: OmdbRating[]
	Runtime?: string
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
	private enrichers: MetadataEnricher[]

	constructor(getKey: () => string, enrichers: MetadataEnricher[] = []) {
		this.getKey = getKey
		this.enrichers = enrichers
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

	// OMDb returns Rotten Tomatoes as a percentage string ("87%") in the Ratings array.
	private rtRating(details: OmdbDetails): number | null {
		const entry = (details.Ratings ?? []).find((r) => r.Source === 'Rotten Tomatoes')
		const match = entry?.Value?.match(/^(\d+)%$/)
		return match ? Number(match[1]) : null
	}

	// OMDb wins for shared keys (e.g. Runtime); enrichers only fill what OMDb
	// lacks, in order — TMDB (richer, keyed) before Cinemeta (keyless).
	private async applyEnrichers(
		fields: Record<string, unknown>,
		imdbId: string,
		type: ContentType
	): Promise<void> {
		for (const enricher of this.enrichers) {
			const extra = await enricher.enrich(imdbId, type)
			for (const [key, value] of Object.entries(extra)) {
				if (isEmptyValue(value)) continue
				if (isEmptyValue(fields[key])) fields[key] = value
			}
		}
	}

	async search(query: string, type: ContentType): Promise<SearchResult[]> {
		try {
			if (!this.getKey()) return []
			const omdbType = type === 'series' ? 'series' : 'movie'
			const resp = await requestUrl({ url: this.url({ s: query, type: omdbType }), throw: false })
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
		} catch (e) {
			console.error('Library: OMDb search error', e)
			return []
		}
	}

	async fetch(sourceId: string, type: ContentType): Promise<NormalizedMetadata | null> {
		try {
			if (!this.getKey()) return null
			const resp = await requestUrl({ url: this.url({ i: sourceId }), throw: false })
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
			// OMDb lists the top-billed actors of a movie or series.
			const actorSource = na(details.Actors)
			const cast = actorSource
				? actorSource.split(',').map((s) => s.trim()).filter(Boolean)
				: []
			const rawYear = na(details.Year)
			const rating = na(details.imdbRating)

			const fields: Record<string, unknown> = {
				Name: details.Title,
				Year: this.year(rawYear),
				Genre: genres,
				Creator: creators,
				Cast: cast,
				Cover: this.cover(details.Poster),
				URL: `https://www.imdb.com/title/${details.imdbID}/`
			}
			if (rating) fields['Rating IMDB'] = parseFloat(rating)
			const rt = this.rtRating(details)
			if (rt !== null) fields['Rating RT'] = rt
			const runtime = plausibleRuntime(details.Runtime)
			if (runtime !== null) fields.Runtime = runtime

			await this.applyEnrichers(fields, details.imdbID, type)

			if (type === 'series') {
				return this.enrichSeries(fields, details, sourceId)
			}
			return { fields, progressTotal: 1, imdbId: details.imdbID }
		} catch (e) {
			console.error('Library: OMDb fetch error', e)
			return null
		}
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
				const resp = await requestUrl({ url: this.url({ i: imdbId, Season: String(season) }), throw: false })
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
