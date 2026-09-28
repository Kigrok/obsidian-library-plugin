import { requestUrl } from 'obsidian'
import type { ContentProvider, ContentType, NormalizedMetadata, SearchResult } from './types'

interface MangaMedia {
	id: number
	title?: { romaji?: string | null; english?: string | null; native?: string | null }
	startDate?: { year?: number | null }
	format?: string | null
	chapters?: number | null
	volumes?: number | null
	genres?: string[]
	coverImage?: { extraLarge?: string; large?: string }
	staff?: { edges?: { role?: string; node?: { name?: { full?: string } } }[] }
	siteUrl?: string
}

const SEARCH = 'query ($s: String) { Page(perPage: 15) { media(search: $s, type: MANGA, sort: SEARCH_MATCH) {' +
	' id title { romaji english native } startDate { year } format coverImage { large } } } }'
const MEDIA = 'query ($id: Int) { Media(id: $id, type: MANGA) { id title { romaji english native } startDate { year }' +
	' chapters volumes genres coverImage { extraLarge large } staff(perPage: 8) { edges { role node { name { full } } } } siteUrl } }'

// Manga, manhwa and light novels from AniList (no key). The anime source is
// AniList too; these notes carry their own id prefix, so the AniList and
// MyAnimeList progress sync, made for anime, never touches them.
export class MangaProvider implements ContentProvider {
	readonly id = 'manga'
	readonly contentTypes: ContentType[] = ['comic']

	static readonly PREFIX = 'manga:'

	private async gql<T>(query: string, variables: Record<string, unknown>): Promise<T | null> {
		try {
			const resp = await requestUrl({
				url: 'https://graphql.anilist.co',
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({ query, variables }),
				throw: false
			})
			return resp.status === 200 ? resp.json as T : null
		} catch (e) {
			console.error('Library: AniList manga request error', e)
			return null
		}
	}

	private title(media: MangaMedia): string {
		return media.title?.english ?? media.title?.romaji ?? media.title?.native ?? String(media.id)
	}

	async search(query: string): Promise<SearchResult[]> {
		const json = await this.gql<{ data?: { Page?: { media?: MangaMedia[] } } }>(SEARCH, { s: query })
		return (json?.data?.Page?.media ?? []).map((media): SearchResult => ({
			provider: this.id,
			sourceId: MangaProvider.PREFIX + String(media.id),
			title: this.title(media),
			year: media.startDate?.year ?? null,
			cover: media.coverImage?.large ?? null,
			subtitle: [media.title?.native, media.format?.replace(/_/g, ' ').toLowerCase()].filter(Boolean).join(' · ') || null,
			raw: null
		}))
	}

	async fetch(sourceId: string): Promise<NormalizedMetadata | null> {
		const id = Number(sourceId.startsWith(MangaProvider.PREFIX) ? sourceId.slice(MangaProvider.PREFIX.length) : NaN)
		if (!Number.isSafeInteger(id)) return null
		const media = (await this.gql<{ data?: { Media?: MangaMedia } }>(MEDIA, { id }))?.data?.Media
		if (!media) return null
		// The writer and the artist, not the translators and letterers.
		const creators: string[] = []
		for (const edge of media.staff?.edges ?? []) {
			const name = edge.node?.name?.full
			if (name && /story|art/i.test(edge.role ?? '') && creators.indexOf(name) < 0) creators.push(name)
		}
		const fields: Record<string, unknown> = {
			Name: this.title(media),
			Year: media.startDate?.year ?? null,
			Genre: media.genres ?? [],
			Creator: creators,
			Cover: media.coverImage?.extraLarge ?? media.coverImage?.large ?? null,
			URL: media.siteUrl ?? `https://anilist.co/manga/${String(id)}`
		}
		const total = media.chapters ?? media.volumes ?? null
		return { fields, progressTotal: total && total > 0 ? total : null, imdbId: null }
	}
}
