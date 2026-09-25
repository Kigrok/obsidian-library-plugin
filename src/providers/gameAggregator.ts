import { SteamProvider } from './steam'
import type { ContentProvider, ContentType, NormalizedMetadata, SearchResult } from './types'

interface WrappedRaw {
	__pid: string
	__raw: unknown
}

// Games search merges RAWG (priority) and Steam; fetch routes back to the origin.
export class GameAggregatorProvider implements ContentProvider {
	readonly id = 'games'
	readonly contentTypes: ContentType[] = ['game']

	private rawg: ContentProvider
	private steam: ContentProvider

	constructor(rawg: ContentProvider, steam: ContentProvider) {
		this.rawg = rawg
		this.steam = steam
	}

	async search(query: string): Promise<SearchResult[]> {
		const [fromRawg, fromSteam] = await Promise.all([
			this.rawg.search(query, 'game').catch(() => [] as SearchResult[]),
			this.steam.search(query, 'game').catch(() => [] as SearchResult[])
		])
		const wrap = (results: SearchResult[], pid: string): SearchResult[] =>
			results.map((r) => ({ ...r, raw: { __pid: pid, __raw: r.raw } }))
		return [...wrap(fromRawg, 'rawg'), ...wrap(fromSteam, 'steam')]
	}

	async fetch(sourceId: string, _type: ContentType, raw?: unknown): Promise<NormalizedMetadata | null> {
		const wrapped = raw as WrappedRaw | undefined
		if (wrapped && typeof wrapped === 'object') {
			if (wrapped.__pid === 'rawg') return this.rawg.fetch(sourceId, 'game', wrapped.__raw)
			if (wrapped.__pid === 'steam') return this.steam.fetch(sourceId, 'game', wrapped.__raw)
			return null
		}
		// Refresh path (no raw): only Steam ids are prefixed; bare ids are RAWG.
		return sourceId.startsWith(SteamProvider.PREFIX)
			? this.steam.fetch(sourceId, 'game')
			: this.rawg.fetch(sourceId, 'game')
	}
}
