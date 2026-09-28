import { MangaProvider } from './manga'
import type { ContentProvider, ContentType, NormalizedMetadata, SearchResult } from './types'

// Japanese kana and kanji, and Korean hangul: a query in them names a manga
// or a manhwa.
const CJK = /[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/

// Comics search: Comic Vine first when there is a key, then Wikidata for
// western comics and AniList for manga. The id says the source: Wikidata's
// are Q-numbers, AniList's carry "manga:", Comic Vine's are bare numbers.
export class ComicsAggregatorProvider implements ContentProvider {
	readonly id = 'comics'
	readonly contentTypes: ContentType[] = ['comic']

	private comicVine: ContentProvider
	private wikidata: ContentProvider
	private manga: ContentProvider

	constructor(comicVine: ContentProvider, wikidata: ContentProvider, manga: ContentProvider) {
		this.comicVine = comicVine
		this.wikidata = wikidata
		this.manga = manga
	}

	async search(query: string): Promise<SearchResult[]> {
		const none = (): SearchResult[] => []
		const [fromComicVine, fromWikidata, fromManga] = await Promise.all([
			this.comicVine.search(query, 'comic').catch(none),
			this.wikidata.search(query, 'comic').catch(none),
			this.manga.search(query, 'comic').catch(none)
		])
		const open = CJK.test(query) ? [...fromManga, ...fromWikidata] : [...fromWikidata, ...fromManga]
		return [...fromComicVine, ...open]
	}

	refreshable(sourceId: string): boolean {
		if (/^Q\d+$/.test(sourceId) || sourceId.startsWith(MangaProvider.PREFIX)) return true
		return this.comicVine.refreshable?.(sourceId) ?? true
	}

	async fetch(sourceId: string, _type: ContentType, raw?: unknown): Promise<NormalizedMetadata | null> {
		if (/^Q\d+$/.test(sourceId)) return this.wikidata.fetch(sourceId, 'comic')
		if (sourceId.startsWith(MangaProvider.PREFIX)) return this.manga.fetch(sourceId, 'comic')
		return this.comicVine.fetch(sourceId, 'comic', raw)
	}
}
