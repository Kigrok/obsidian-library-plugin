import { SteamProvider } from './steam'
import { SEARCH_BUDGET_MS, within } from '../util'
import type { ContentProvider, ContentType, NormalizedMetadata, SearchResult } from './types'
import { NON_LATIN } from './wikidata'

// Games search: RAWG first when there is a key, then Steam's store and
// Wikidata. The id says where a game came from, so a fetch or a refresh
// needs no search result: Steam ids are prefixed, Wikidata's are Q-numbers,
// RAWG's are bare numbers.
export class GameAggregatorProvider implements ContentProvider {
	readonly id = 'games'
	readonly contentTypes: ContentType[] = ['game']

	private rawg: ContentProvider
	private steam: ContentProvider
	private wikidata: ContentProvider

	constructor(rawg: ContentProvider, steam: ContentProvider, wikidata: ContentProvider) {
		this.rawg = rawg
		this.steam = steam
		this.wikidata = wikidata
	}

	async search(query: string): Promise<SearchResult[]> {
		const [fromRawg, fromSteam, fromWikidata] = await Promise.all([
			within(this.rawg.search(query, 'game'), SEARCH_BUDGET_MS, []),
			within(this.steam.search(query, 'game'), SEARCH_BUDGET_MS, []),
			within(this.wikidata.search(query, 'game'), SEARCH_BUDGET_MS, [])
		])
		// Steam's store search reads only Latin names: a title in another
		// script finds its games through Wikidata's labels.
		const open = NON_LATIN.test(query) ? [...fromWikidata, ...fromSteam] : [...fromSteam, ...fromWikidata]
		const seen = new Set<string>()
		return [...fromRawg, ...open].filter(r => !seen.has(r.sourceId) && !!seen.add(r.sourceId))
	}

	refreshable(sourceId: string): boolean {
		if (sourceId.startsWith(SteamProvider.PREFIX) || /^Q\d+$/.test(sourceId)) return true
		return this.rawg.refreshable?.(sourceId) ?? true
	}

	async fetch(sourceId: string, _type: ContentType, raw?: unknown): Promise<NormalizedMetadata | null> {
		if (sourceId.startsWith(SteamProvider.PREFIX)) return this.steam.fetch(sourceId, 'game')
		if (/^Q\d+$/.test(sourceId)) return this.wikidata.fetch(sourceId, 'game')
		return this.rawg.fetch(sourceId, 'game', raw)
	}
}
