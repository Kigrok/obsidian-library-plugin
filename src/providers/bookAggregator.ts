import type { ContentProvider, ContentType, NormalizedMetadata, SearchResult } from './types'
import { findChapters } from './openlibrary'

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

	refreshable(sourceId: string): boolean {
		return !sourceId.startsWith('/')
	}

	async fetch(sourceId: string, type: ContentType, raw?: unknown): Promise<NormalizedMetadata | null> {
		const meta = await this.fetchBook(sourceId, type, raw)
		// Chapters for the reading list, when an edition lists its contents.
		if (meta) {
			const text = (value: unknown): string => (typeof value === 'string' || typeof value === 'number' ? String(value) : '')
			const creator = meta.fields.Creator
			const titles = await findChapters({
				isbn: text(meta.fields.ISBN),
				work: sourceId.startsWith('/works/') ? sourceId : '',
				title: text(meta.fields.Name),
				author: text(Array.isArray(creator) ? creator[0] : creator)
			})
			if (titles.length >= 2) meta.fields.Chapters = titles.map((title) => ({ title }))
		}
		return meta
	}

	private async fetchBook(sourceId: string, _type: ContentType, raw?: unknown): Promise<NormalizedMetadata | null> {
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
