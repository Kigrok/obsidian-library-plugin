import type { ContentProvider, ContentType, NormalizedMetadata, SearchResult } from './types'
import {
	claimValues, entities, firstYear, itemIds, labelsOf, languages, pageUrl, searchItems, textIn,
	wikipediaImages, yearIn
} from './wikidata'

// Comic book series, limited series, graphic novels, comic strips and comic
// albums. Manga series are left to AniList, which knows their chapters.
const COMICS = 'haswbstatement:' + ['Q14406742', 'Q3297186', 'Q725377', 'Q838795', 'Q2831984']
	.map(id => `P31=${id}`).join('|')

// Western comics found on Wikidata by their title in any language, their
// covers from the English Wikipedia article.
export class WikidataComicProvider implements ContentProvider {
	readonly id = 'wikidata'
	readonly contentTypes: ContentType[] = ['comic']

	async search(query: string): Promise<SearchResult[]> {
		try {
			const ids = await searchItems(query, COMICS, 10)
			const langs = languages()
			const found = await entities(ids, 'labels|descriptions|sitelinks', langs)
			const articles = ids.map(id => found[id]?.sitelinks?.enwiki?.title ?? null)
			const covers = await wikipediaImages(articles.filter((title): title is string => !!title))
			return ids.map((id, i): SearchResult => {
				const entity = found[id]
				const english = textIn(entity?.labels, ['en', 'mul'])
				const local = textIn(entity?.labels, langs)
				const description = textIn(entity?.descriptions, langs)
				const article = articles[i]
				return {
					provider: this.id,
					sourceId: id,
					title: english ?? local ?? id,
					year: yearIn(description),
					cover: article ? covers[article] ?? null : null,
					subtitle: [local !== english ? local : null, description].filter(Boolean).join(' · ') || null,
					raw: null
				}
			})
		} catch (e) {
			console.error('Library: Wikidata comics search error', e)
			return []
		}
	}

	async fetch(sourceId: string): Promise<NormalizedMetadata | null> {
		try {
			if (!/^Q\d+$/.test(sourceId)) return null
			const langs = ['en', 'mul']
			const item = (await entities([sourceId], 'labels|claims|sitelinks', langs))[sourceId]
			const name = textIn(item?.labels, langs)
			if (!item || !name) return null
			const genres = itemIds(item, 'P136')
			// The writers and the artists; the publisher when neither is known.
			const creators = [...itemIds(item, 'P50'), ...itemIds(item, 'P110')]
			const publishers = itemIds(item, 'P123')
			const article = item.sitelinks?.enwiki?.title ?? null
			const [labels, covers] = await Promise.all([
				labelsOf([...genres, ...creators, ...publishers], langs),
				wikipediaImages(article ? [article] : [])
			])
			const named = labels(creators).filter((label, i, all) => all.indexOf(label) === i)
			const fields: Record<string, unknown> = {
				Name: name,
				Year: firstYear(item, ['P577', 'P580']),
				Genre: labels(genres),
				Creator: named.length > 0 ? named : labels(publishers),
				Cover: article ? covers[article] ?? null : null,
				URL: pageUrl(sourceId, article)
			}
			// "Number of parts": the issues or volumes, as the reading progress.
			const parts = Number((claimValues(item, 'P2635')[0] as { amount?: unknown } | undefined)?.amount)
			return { fields, progressTotal: Number.isSafeInteger(parts) && parts > 0 ? parts : null, imdbId: null }
		} catch (e) {
			console.error('Library: Wikidata comics fetch error', e)
			return null
		}
	}
}
