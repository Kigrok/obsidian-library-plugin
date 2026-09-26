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

interface OpenLibraryEdition {
	table_of_contents?: Array<{ title?: string; level?: number }>
	works?: Array<{ key?: string }>
}

export interface BookLookup {
	isbn?: string
	// An Open Library work key, "/works/OL…W".
	work?: string
	title?: string
	author?: string
}

// Answers already found this session: a note refresh repeats the same lookup.
const contentsCache = new Map<string, string[]>()

async function getJson<T>(url: string): Promise<T | null> {
	try {
		const resp = await requestUrl({ url, throw: false })
		return resp.status === 200 ? (resp.json as T) : null
	} catch (e) {
		console.error('Library: Open Library request error', e)
		return null
	}
}

// Top-level entries only: nested ones are sections inside a chapter.
function chapterTitles(edition: OpenLibraryEdition | null): string[] {
	const titles: string[] = []
	for (const entry of edition?.table_of_contents ?? []) {
		if ((entry.level ?? 0) > 0) continue
		const title = (entry.title ?? '').trim()
		if (title) titles.push(title)
	}
	return titles
}

// The writing system of a text, by its first letter: an edition whose contents
// share the script of the note's title is in the language the user reads.
function scriptOf(text: string): string {
	const letter = text.match(/\p{L}/u)?.[0] ?? ''
	if (/\p{Script=Latin}/u.test(letter)) return 'Latin'
	if (/\p{Script=Cyrillic}/u.test(letter)) return 'Cyrillic'
	if (/\p{Script=Han}|\p{Script=Hiragana}|\p{Script=Katakana}/u.test(letter)) return 'CJK'
	return letter ? 'other' : ''
}

// A book's chapter titles from Open Library: the edition with its ISBN first,
// then the fullest table of contents among the work's other editions, finding
// the work by title and author when neither id is known. [] when no edition
// lists its contents.
export async function findChapters(book: BookLookup): Promise<string[]> {
	const isbn = (book.isbn ?? '').replace(/[^0-9Xx]/g, '')
	const cacheKey = isbn || book.work || `${book.title ?? ''}|${book.author ?? ''}`
	const cached = contentsCache.get(cacheKey)
	if (cached) return cached
	const done = (titles: string[]): string[] => {
		contentsCache.set(cacheKey, titles)
		return titles
	}

	let work = book.work && book.work.startsWith('/works/') ? book.work : ''
	if (isbn.length === 10 || isbn.length === 13) {
		const edition = await getJson<OpenLibraryEdition>(`https://openlibrary.org/isbn/${isbn}.json`)
		const own = chapterTitles(edition)
		if (own.length >= 2) return done(own)
		work = work || edition?.works?.[0]?.key || ''
	}
	// A title alone matches other books of the same name: the author must agree too.
	if (!work && book.title && book.author) {
		const query = new URLSearchParams({ title: book.title, limit: '1', fields: 'key' })
		if (book.author) query.set('author', book.author)
		const found = await getJson<OpenLibrarySearchResponse>(`${OpenLibraryProvider.SEARCH}?${query.toString()}`)
		work = found?.docs?.[0]?.key ?? ''
	}
	if (!work.startsWith('/works/')) return done([])
	const editions = await getJson<{ entries?: OpenLibraryEdition[] }>(`https://openlibrary.org${work}/editions.json?limit=100`)
	// The fullest contents, among the editions in the title's script when any
	// of them has contents — a translation's chapters read wrong in the note.
	const script = scriptOf(book.title ?? '')
	let best: string[] = []
	let bestMatches = false
	for (const edition of editions?.entries ?? []) {
		const titles = chapterTitles(edition)
		if (titles.length < 2) continue
		const matches = script !== '' && scriptOf(titles.join(' ')) === script
		if ((matches && !bestMatches) || (matches === bestMatches && titles.length > best.length)) {
			best = titles
			bestMatches = matches
		}
	}
	return done(best)
}

export class OpenLibraryProvider implements ContentProvider {
	readonly id = 'openlibrary'
	readonly contentTypes: ContentType[] = ['book']

	static readonly SEARCH = 'https://openlibrary.org/search.json'
	private static readonly COVER = 'https://covers.openlibrary.org/b/id/'
	private static readonly FIELDS =
		'key,title,first_publish_year,author_name,cover_i,isbn,number_of_pages_median,subject'

	private cover(id: number | undefined): string | null {
		return id ? `${OpenLibraryProvider.COVER}${id}-L.jpg` : null
	}

	async search(query: string): Promise<SearchResult[]> {
		try {
			const params = new URLSearchParams({ q: query, fields: OpenLibraryProvider.FIELDS, limit: '20' })
			const resp = await requestUrl({ url: `${OpenLibraryProvider.SEARCH}?${params.toString()}`, throw: false })
			if (resp.status !== 200) return []
			const data = resp.json as OpenLibrarySearchResponse
			const docs = Array.isArray(data?.docs) ? data.docs : []
			return docs.map((doc) => ({
				provider: this.id,
				sourceId: doc.key,
				title: doc.title,
				year: doc.first_publish_year ?? null,
				cover: this.cover(doc.cover_i),
				subtitle: (doc.author_name ?? []).join(', ') || null,
				raw: doc
			}))
		} catch (e) {
			console.error('Library: Open Library search error', e)
			return []
		}
	}

	refreshable(): boolean {
		return false
	}

	// Open Library search already carries the full doc; a refresh without raw has
	// no document to refetch from, so it is a no-op.
	async fetch(_sourceId: string, _type: ContentType, raw?: unknown): Promise<NormalizedMetadata | null> {
		if (!raw || typeof raw !== 'object') return null
		const doc = raw as OpenLibraryDoc
		if (!doc.title) return null
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
