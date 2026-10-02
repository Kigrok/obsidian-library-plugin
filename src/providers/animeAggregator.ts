import { MalProvider } from './mal'
import { SEARCH_BUDGET_MS, isEmptyValue, within } from '../util'
import type { ContentProvider, ContentType, NormalizedMetadata, SearchResult } from './types'

// Anime search: MyAnimeList first once its Client ID is set, as every keyed
// source comes first, then AniList, which needs no key. A title both list
// stays once, as MyAnimeList's entry. The id says where a note came from:
// "mal:" for MyAnimeList, a bare number for AniList. Both kinds keep
// `Source: anilist` (this provider's id), so the sync and the
// recommendations still find every anime note.
export class AnimeAggregatorProvider implements ContentProvider {
	readonly id = 'anilist'
	readonly contentTypes: ContentType[] = ['anime']

	private anilist: ContentProvider
	private mal: MalProvider

	constructor(anilist: ContentProvider, mal: MalProvider) {
		this.anilist = anilist
		this.mal = mal
	}

	async search(query: string, type: ContentType): Promise<SearchResult[]> {
		const [fromMal, fromAniList] = await Promise.all([
			within(this.mal.search(query), SEARCH_BUDGET_MS, []),
			within(this.anilist.search(query, type), SEARCH_BUDGET_MS, [])
		])
		// AniList knows each title's MyAnimeList id.
		const listed = new Set(fromMal.map(result => result.sourceId))
		const unlisted = fromAniList.filter((result) => {
			const idMal = (result.raw as { idMal?: number | null } | null)?.idMal
			return !idMal || !listed.has(MalProvider.PREFIX + String(idMal))
		})
		return [...fromMal, ...unlisted]
	}

	refreshable(sourceId: string): boolean {
		return !sourceId.startsWith(MalProvider.PREFIX) || this.mal.refreshable()
	}

	async fetch(sourceId: string, type: ContentType, raw?: unknown): Promise<NormalizedMetadata | null> {
		if (!sourceId.startsWith(MalProvider.PREFIX)) return this.anilist.fetch(sourceId, type, raw)
		// MyAnimeList has no trailers or stills: AniList's entry for the same
		// title fills them, and anything else MyAnimeList left out.
		const [own, extra] = await Promise.all([this.mal.fetch(sourceId), this.anilist.fetch(sourceId, type)])
		if (!own) return null
		for (const [key, value] of Object.entries(extra?.fields ?? {})) {
			if (isEmptyValue(own.fields[key]) && !isEmptyValue(value)) own.fields[key] = value
		}
		return { ...own, progressTotal: own.progressTotal ?? extra?.progressTotal ?? null }
	}
}
