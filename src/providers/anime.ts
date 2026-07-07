import { requestUrl } from 'obsidian'
import type { ContentProvider, ContentType, NormalizedMetadata, SearchResult } from './types'

interface AniListMedia {
	id: number
	title: { romaji?: string; english?: string; native?: string }
	startDate?: { year?: number | null }
	episodes?: number | null
	genres?: string[]
	status?: string
	averageScore?: number | null
	coverImage?: { extraLarge?: string; large?: string }
	studios?: { nodes?: { name: string }[] }
	siteUrl?: string
}

interface AniListSearchResponse {
	data?: { Page?: { media?: AniListMedia[] } }
}

interface AniListMediaResponse {
	data?: { Media?: AniListMedia }
}

const MEDIA_FIELDS =
	'id title { romaji english native } startDate { year } episodes genres status averageScore coverImage { extraLarge large } studios(isMain: true) { nodes { name } } siteUrl'

// Anime via AniList GraphQL (no key). Jikan's search endpoint proxies MyAnimeList and is frequently down (504).
export class AnimeProvider implements ContentProvider {
	readonly id = 'anilist'
	readonly contentTypes: ContentType[] = ['anime']

	private static readonly ENDPOINT = 'https://graphql.anilist.co'

	private async gql<T>(query: string, variables: Record<string, unknown>): Promise<T | null> {
		const resp = await requestUrl({
			url: AnimeProvider.ENDPOINT,
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
			body: JSON.stringify({ query, variables }),
			throw: false
		})
		if (resp.status !== 200) return null
		return resp.json as T
	}

	private title(media: AniListMedia): string {
		return media.title.english ?? media.title.romaji ?? media.title.native ?? ''
	}

	private cover(media: AniListMedia): string | null {
		return media.coverImage?.extraLarge ?? media.coverImage?.large ?? null
	}

	async search(query: string): Promise<SearchResult[]> {
		try {
			const q = `query ($s: String) { Page(perPage: 20) { media(search: $s, type: ANIME, sort: SEARCH_MATCH) { ${MEDIA_FIELDS} } } }`
			const json = await this.gql<AniListSearchResponse>(q, { s: query })
			const media = json?.data?.Page?.media ?? []
			return media.map((m) => ({
				provider: this.id,
				sourceId: String(m.id),
				title: this.title(m),
				year: m.startDate?.year ?? null,
				cover: this.cover(m),
				subtitle: m.title.native ?? null,
				raw: m
			}))
		} catch (e) {
			console.error('Library: AniList search error', e)
			return []
		}
	}

	async fetch(sourceId: string, _type: ContentType, raw?: unknown): Promise<NormalizedMetadata | null> {
		try {
			let media = raw as AniListMedia | undefined
			if (!media || typeof media !== 'object') {
				const q = `query ($id: Int) { Media(id: $id, type: ANIME) { ${MEDIA_FIELDS} } }`
				const json = await this.gql<AniListMediaResponse>(q, { id: Number(sourceId) })
				media = json?.data?.Media ?? undefined
			}
			if (!media) return null

			const fields: Record<string, unknown> = {
				Name: this.title(media),
				Year: media.startDate?.year ?? null,
				Genre: media.genres ?? [],
				Creator: (media.studios?.nodes ?? []).map((s) => s.name),
				Cover: this.cover(media),
				URL: media.siteUrl ?? `https://anilist.co/anime/${media.id}`
			}
			if (typeof media.averageScore === 'number') fields['Rating AniList'] = media.averageScore / 10
			if (media.status) fields['Status'] = media.status

			const episodes = media.episodes && media.episodes > 0 ? media.episodes : null
			return { fields, progressTotal: episodes, imdbId: null }
		} catch (e) {
			console.error('Library: AniList fetch error', e)
			return null
		}
	}
}
