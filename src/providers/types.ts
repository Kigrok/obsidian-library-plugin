export const CONTENT_TYPES = ['movie', 'series', 'book', 'game', 'anime', 'manual'] as const
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
}
