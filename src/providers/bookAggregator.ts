import type { ContentProvider, ContentType, NormalizedMetadata, SearchResult } from './types'

interface WrappedRaw {
	__pid: string
	__raw: unknown
}

// Books search merges Google Books (priority) and Open Library; fetch routes back to the origin.
export class BookAggregatorProvider implements ContentProvider {
	readonly id = 'books'
	readonly contentTypes: ContentType[] = ['book']

	private google: ContentProvider
	private openlib: ContentProvider

	constructor(google: ContentProvider, openlib: ContentProvider) {
		this.google = google
		this.openlib = openlib
	}

	async search(query: string): Promise<SearchResult[]> {
		const [fromGoogle, fromOpenlib] = await Promise.all([
			this.google.search(query, 'googlebook').catch(() => [] as SearchResult[]),
			this.openlib.search(query, 'book').catch(() => [] as SearchResult[])
		])
		const wrap = (results: SearchResult[], pid: string): SearchResult[] =>
			results.map((r) => ({ ...r, raw: { __pid: pid, __raw: r.raw } }))
		return [...wrap(fromGoogle, 'googlebooks'), ...wrap(fromOpenlib, 'openlibrary')]
	}

	async fetch(sourceId: string, _type: ContentType, raw?: unknown): Promise<NormalizedMetadata | null> {
		const wrapped = raw as WrappedRaw | undefined
		if (wrapped && typeof wrapped === 'object') {
			if (wrapped.__pid === 'googlebooks') return this.google.fetch(sourceId, 'googlebook', wrapped.__raw)
			if (wrapped.__pid === 'openlibrary') return this.openlib.fetch(sourceId, 'book', wrapped.__raw)
			return null
		}
		// Refresh path (no raw): Open Library keys start with '/', Google ids don't.
		// Google refetches by id; Open Library has no id endpoint wired, so it stays a no-op.
		return sourceId.startsWith('/')
			? this.openlib.fetch(sourceId, 'book')
			: this.google.fetch(sourceId, 'googlebook')
	}
}
