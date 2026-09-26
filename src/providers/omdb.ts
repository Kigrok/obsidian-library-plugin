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

interface CinemetaMeta {
	imdb_id?: string
	id?: string
	name?: string
	releaseInfo?: string
	year?: string
	genre?: string[]
	director?: string[] | null
	writer?: string[] | null
	cast?: string[]
	imdbRating?: string
	runtime?: string
	poster?: string
	videos?: { season?: number }[]
}

// The body of a failed request may not be JSON (an HTML error page).
function jsonOf(resp: { json: unknown }): unknown {
	try {
		return resp.json
	} catch {
		return null
	}
}

function na(value: string | undefined): string | null {
	return value && value !== 'N/A' ? value : null
}

export class OmdbProvider implements ContentProvider {
	readonly id = 'omdb'
	readonly contentTypes: ContentType[] = ['movie', 'series']

	private static readonly BASE = 'https://www.omdbapi.com/'
	private static readonly CINEMETA = 'https://v3-cinemeta.strem.io'
	private static readonly REST = 60 * 60 * 1000

	// A free OMDb key allows 1,000 requests a day. Once OMDb says the limit is
	// reached, or it is down, search and fetch go to Cinemeta (same IMDb ids,
	// no key, no daily cap) for the next hour instead of failing.
	private restingSince = 0

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

	private resting(): boolean {
		return Date.now() - this.restingSince < OmdbProvider.REST
	}

	// True when the answer means "ask Cinemeta instead": the daily limit or an
	// outage. "Movie not found!" or a wrong key is a real answer and stays one.
	private unavailable(status: number, json: unknown): boolean {
		const error = json && typeof json === 'object' ? (json as { Error?: unknown }).Error : null
		if (status >= 500 || (typeof error === 'string' && /limit reached/i.test(error))) {
			this.restingSince = Date.now()
			return true
		}
		return false
	}

	async search(query: string, type: ContentType): Promise<SearchResult[]> {
		try {
			if (!this.getKey()) return []
			const omdbType = type === 'series' ? 'series' : 'movie'
			if (this.resting()) return this.searchCinemeta(query, omdbType)
			const resp = await requestUrl({ url: this.url({ s: query, type: omdbType }), throw: false })
			const data = jsonOf(resp) as OmdbSearchResponse | null
			if (this.unavailable(resp.status, data)) return this.searchCinemeta(query, omdbType)
			if (resp.status !== 200) return []
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

	private async searchCinemeta(query: string, kind: 'movie' | 'series'): Promise<SearchResult[]> {
		try {
			const resp = await requestUrl({
				url: `${OmdbProvider.CINEMETA}/catalog/${kind}/top/search=${encodeURIComponent(query)}.json`,
				throw: false
			})
			if (resp.status !== 200) return []
			const metas = (jsonOf(resp) as { metas?: CinemetaMeta[] } | null)?.metas ?? []
			const out: SearchResult[] = []
			for (const meta of metas) {
				const id = meta.imdb_id ?? meta.id ?? ''
				if (!/^tt\d+$/.test(id)) continue
				out.push({
					provider: this.id,
					sourceId: id,
					title: meta.name ?? id,
					year: this.year(meta.releaseInfo ?? meta.year ?? null),
					cover: meta.poster ?? null,
					subtitle: null,
					raw: meta
				})
			}
			return out
		} catch (e) {
			console.error('Library: Cinemeta search error', e)
			return []
		}
	}

	// The same fields OMDb gives, from Cinemeta's record of the title.
	private async fromCinemeta(imdbId: string, type: ContentType): Promise<{ fields: Record<string, unknown>; years: string | null; seasons: number } | null> {
		try {
			const kind = type === 'series' ? 'series' : 'movie'
			const resp = await requestUrl({ url: `${OmdbProvider.CINEMETA}/meta/${kind}/${encodeURIComponent(imdbId)}.json`, throw: false })
			if (resp.status !== 200) return null
			const meta = (jsonOf(resp) as { meta?: CinemetaMeta } | null)?.meta
			if (!meta?.name) return null
			const years = meta.releaseInfo ?? meta.year ?? null
			const fields: Record<string, unknown> = {
				Name: meta.name,
				Year: this.year(years),
				Genre: meta.genre ?? [],
				Creator: meta.director?.length ? meta.director : meta.writer ?? [],
				Cast: meta.cast ?? [],
				Cover: meta.poster ?? null,
				URL: `https://www.imdb.com/title/${imdbId}/`
			}
			const rating = Number(meta.imdbRating)
			if (rating > 0) fields['Rating IMDB'] = rating
			const runtime = plausibleRuntime(meta.runtime)
			if (runtime !== null) fields.Runtime = runtime
			// Season 0 holds specials.
			const seasons = new Set<number>()
			for (const video of meta.videos ?? []) if (typeof video.season === 'number' && video.season > 0) seasons.add(video.season)
			return { fields, years, seasons: seasons.size }
		} catch (e) {
			console.error('Library: Cinemeta fetch error', e)
			return null
		}
	}

	async fetch(sourceId: string, type: ContentType): Promise<NormalizedMetadata | null> {
		try {
			if (!this.getKey()) return null
			let details: OmdbDetails | null = null
			if (!this.resting()) {
				const resp = await requestUrl({ url: this.url({ i: sourceId }), throw: false })
				const json = jsonOf(resp) as OmdbDetails | null
				if (!this.unavailable(resp.status, json)) {
					if (resp.status !== 200) return null
					if (!json || typeof json !== 'object' || json.Response === 'False') return null
					details = json
				}
			}
			if (!details) {
				const backup = await this.fromCinemeta(sourceId, type)
				if (!backup) return null
				await this.applyEnrichers(backup.fields, sourceId, type)
				if (type === 'series') return this.enrichSeries(backup.fields, backup.years, backup.seasons, sourceId)
				return { fields: backup.fields, progressTotal: 1, imdbId: sourceId }
			}

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
				const seasons = na(details.totalSeasons) ? Number(details.totalSeasons) : 0
				return this.enrichSeries(fields, rawYear, seasons, sourceId)
			}
			return { fields, progressTotal: 1, imdbId: details.imdbID }
		} catch (e) {
			console.error('Library: OMDb fetch error', e)
			return null
		}
	}

	// The episode total comes from the season list the enrichers already
	// fetched. OMDb is asked season by season, a request each, only when that
	// list is missing or short: TMDB lists at most 15 seasons.
	private async enrichSeries(
		fields: Record<string, unknown>,
		years: string | null,
		totalSeasons: number,
		imdbId: string
	): Promise<NormalizedMetadata> {
		const endMatch = years?.match(/[–-](\d{4})/)
		if (endMatch) fields['End Year'] = Number(endMatch[1])

		if (totalSeasons > 0) fields.Season = totalSeasons
		const seasons = Array.isArray(fields.Seasons) ? fields.Seasons as { episodes?: unknown }[] : []
		const listed = seasons.reduce((sum, s) => sum + (Number(s.episodes) || 0), 0)
		const episodes = listed > 0 && seasons.length >= totalSeasons ? listed
			: totalSeasons > 0 && !this.resting() ? await this.countEpisodes(imdbId, totalSeasons) : 0
		return { fields, progressTotal: episodes > 0 ? episodes : null, imdbId }
	}

	private async countEpisodes(imdbId: string, totalSeasons: number): Promise<number> {
		let total = 0
		for (let season = 1; season <= totalSeasons; season++) {
			try {
				const resp = await requestUrl({ url: this.url({ i: imdbId, Season: String(season) }), throw: false })
				if (this.unavailable(resp.status, jsonOf(resp))) return 0
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
