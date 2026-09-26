export const CONTENT_TYPES = ['movie', 'series', 'book', 'googlebook', 'game', 'music', 'anime', 'anime-mal', 'comic', 'manual'] as const
export type ContentType = (typeof CONTENT_TYPES)[number]

export function isContentType(value: string): value is ContentType {
	return (CONTENT_TYPES as readonly string[]).includes(value)
}

export interface SearchResult {
	provider: string
	sourceId: string
	title: string
	year: number | null
	cover: string | null
	subtitle: string | null
	raw: unknown
}

export interface NormalizedMetadata {
	fields: Record<string, unknown>
	progressTotal: number | null
	imdbId: string | null
}

export interface ContentProvider {
	readonly id: string
	readonly contentTypes: ContentType[]
	search(query: string, type: ContentType): Promise<SearchResult[]>
	fetch(sourceId: string, type: ContentType, raw?: unknown): Promise<NormalizedMetadata | null>
	// false when `fetch` without the search result has nothing to look up
	// (Open Library), so a refresh does not count the note as failed.
	refreshable?(sourceId: string): boolean
}

export interface SeasonEntry {
	name: string
	episodes: number
	rating: number | null
	trailer: string | null
	// Episode titles in order, when the source has them (src/episodes.ts).
	episode_list?: Array<{ title: string }>
}

// Fills the fields a provider cannot serve itself (trailer, stills, seasons).
// Enrichers are not providers: they are keyed by an id another source returned
// and their output is merged into that source's fields.
export interface MetadataEnricher {
	enrich(imdbId: string, type: ContentType): Promise<Record<string, unknown>>
}
