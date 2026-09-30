import type { ContentProvider, ContentType, NormalizedMetadata, SearchResult } from './types'

export class AnimeAggregatorProvider implements ContentProvider {
	readonly id = 'anime'
	readonly contentTypes: ContentType[] = ['anime']

	constructor(
		private readonly anilist: ContentProvider,
		private readonly mal: ContentProvider
	) {}

	async search(query: string, type: ContentType): Promise<SearchResult[]> {
		const [anilist, mal] = await Promise.all([
			this.anilist.search(query, type).catch(() => [] as SearchResult[]),
			this.mal.search(query, type).catch(() => [] as SearchResult[])
		])
		return [...anilist, ...mal]
	}

	async fetch(sourceId: string, type: ContentType, raw?: unknown): Promise<NormalizedMetadata | null> {
		if (sourceId.startsWith('mal:')) return this.mal.fetch(sourceId, type, raw)
		return this.anilist.fetch(sourceId, type, raw)
	}
}
