import { SteamProvider } from './steam'
import { releasedDmy } from '../util'
import type { ContentProvider, ContentType, NormalizedMetadata, SearchResult } from './types'
import {
	claim, claimValues, entities, firstDate, firstYear, itemIds, labelsOf, languages, pageUrl, searchItems, textIn,
	wikipediaImages, yearIn
} from './wikidata'

const VIDEO_GAME = 'haswbstatement:P31=Q7889'

// Games found on Wikidata by their title in any language. One with a Steam
// app id becomes a Steam result, since the store page has more to give; the
// rest (console games, older titles) are filled from Wikidata itself.
export class WikidataGameProvider implements ContentProvider {
	readonly id = 'wikidata'
	readonly contentTypes: ContentType[] = ['game']

	async search(query: string): Promise<SearchResult[]> {
		try {
			const ids = await searchItems(query, VIDEO_GAME, 8)
			const langs = languages()
			const [found, steamIds] = await Promise.all([
				entities(ids, 'labels|descriptions|sitelinks', langs),
				Promise.all(ids.map(id => claim(id, 'P1733')))
			])
			const appIds = steamIds.map(steam => (typeof steam === 'string' && /^\d+$/.test(steam) ? steam : null))
			// Box art from Wikipedia for the games Steam has no page for.
			const articles = ids.map((id, i) => (appIds[i] ? null : found[id]?.sitelinks?.enwiki?.title ?? null))
			const covers = await wikipediaImages(articles.filter((title): title is string => !!title))
			return ids.map((id, i): SearchResult => {
				const entity = found[id]
				const english = textIn(entity?.labels, ['en', 'mul'])
				const local = textIn(entity?.labels, langs)
				const description = textIn(entity?.descriptions, langs)
				const appId = appIds[i]
				const article = articles[i]
				return {
					provider: this.id,
					sourceId: appId ? SteamProvider.PREFIX + appId : id,
					title: english ?? local ?? id,
					year: yearIn(description),
					cover: appId ? `${SteamProvider.CDN}/${appId}/capsule_sm_120.jpg` : article ? covers[article] ?? null : null,
					subtitle: [local !== english ? local : null, description].filter(Boolean).join(' · ') || null,
					raw: null
				}
			})
		} catch (e) {
			console.error('Library: Wikidata game search error', e)
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
			const developers = itemIds(item, 'P178')
			const publishers = itemIds(item, 'P123')
			const article = item.sitelinks?.enwiki?.title ?? null
			const [labels, covers] = await Promise.all([
				labelsOf([...genres, ...developers, ...publishers], langs),
				wikipediaImages(article ? [article] : [])
			])
			const fields: Record<string, unknown> = {
				Name: name,
				Year: firstYear(item, ['P577']),
				Released: releasedDmy(firstDate(item, ['P577'])) || null,
				Genre: labels(genres),
				Creator: developers.length > 0 ? labels(developers) : labels(publishers),
				Cover: article ? covers[article] ?? null : null,
				URL: pageUrl(sourceId, article)
			}
			const youtube = claimValues(item, 'P1651')[0]
			if (typeof youtube === 'string' && /^[\w-]{11}$/.test(youtube)) fields.Trailer = `https://www.youtube.com/watch?v=${youtube}`
			return { fields, progressTotal: null, imdbId: null }
		} catch (e) {
			console.error('Library: Wikidata game fetch error', e)
			return null
		}
	}
}
