import { requestUrl } from 'obsidian'
import type { ContentProvider, ContentType, NormalizedMetadata, SearchResult } from './types'

interface OpenLibraryDoc {
	key: string
	title: string
	first_publish_year?: number
	author_name?: string[]
	cover_i?: number
	isbn?: string[]
	number_of_pages_median?: number
	subject?: string[]
}

interface OpenLibrarySearchResponse {
	docs?: OpenLibraryDoc[]
}

export class OpenLibraryProvider implements ContentProvider {
	readonly id = 'openlibrary'
	readonly contentTypes: ContentType[] = ['book']

	private static readonly SEARCH = 'https://openlibrary.org/search.json'
	private static readonly COVER = 'https://covers.openlibrary.org/b/id/'
	private static readonly FIELDS =
		'key,title,first_publish_year,author_name,cover_i,isbn,number_of_pages_median,subject'

	private cover(id: number | undefined): string | null {
		return id ? `${OpenLibraryProvider.COVER}${id}-L.jpg` : null
	}

	async search(query: string): Promise<SearchResult[]> {
		const params = new URLSearchParams({ q: query, fields: OpenLibraryProvider.FIELDS, limit: '20' })
		const resp = await requestUrl({ url: `${OpenLibraryProvider.SEARCH}?${params.toString()}` })
		if (resp.status !== 200) return []
		const data = resp.json as OpenLibrarySearchResponse
		return (data.docs ?? []).map((doc) => ({
			provider: this.id,
			sourceId: doc.key,
			title: doc.title,
			year: doc.first_publish_year ?? null,
			cover: this.cover(doc.cover_i),
			subtitle: (doc.author_name ?? []).join(', ') || null,
			raw: doc
		}))
	}

	// Open Library search already carries full doc; refetch без raw не имеет источника, поэтому no-op.
	async fetch(_sourceId: string, _type: ContentType, raw?: unknown): Promise<NormalizedMetadata | null> {
		const doc = raw as OpenLibraryDoc | undefined
		if (!doc) return null
		const fields: Record<string, unknown> = {
			Name: doc.title,
			Year: doc.first_publish_year ?? null,
			Creator: doc.author_name ?? [],
			Genre: (doc.subject ?? []).slice(0, 5),
			Cover: this.cover(doc.cover_i)
		}
		if (doc.isbn?.[0]) fields['ISBN'] = doc.isbn[0]
		return { fields, progressTotal: doc.number_of_pages_median ?? null, imdbId: null }
	}
}
