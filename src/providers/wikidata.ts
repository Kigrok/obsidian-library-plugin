import { getLanguage, requestUrl } from 'obsidian'
import type { MetadataEnricher } from './types'

// Wikidata's action API: no key, no daily cap, and titles in the reader's
// language. Used to find movies, series and games by any-language title.

const API = 'https://www.wikidata.org/w/api.php'

// Letters of another script than Latin: Greek and Cyrillic onward, past the
// punctuation block, so a curly apostrophe keeps a query Latin.
export const NON_LATIN = /[\u0370-\u1fff\u2c00-\uffff]/

export interface WikidataClaim {
	mainsnak?: { datavalue?: { value?: unknown } }
	qualifiers?: Record<string, { datavalue?: { value?: unknown } }[]>
}

export interface WikidataEntity {
	labels?: Record<string, { value?: string }>
	descriptions?: Record<string, { value?: string }>
	claims?: Record<string, WikidataClaim[]>
	sitelinks?: Record<string, { title?: string }>
}

// Wikimedia asks API clients to say who they are.
const HEADERS = { 'Api-User-Agent': 'LibraryObsidianPlugin (https://github.com/venvk/obsidian-library-plugin)' }

async function api<T>(params: Record<string, string>): Promise<T | null> {
	try {
		const query = new URLSearchParams({ ...params, format: 'json', origin: '*' })
		const resp = await requestUrl({ url: `${API}?${query.toString()}`, headers: HEADERS, throw: false })
		return resp.status === 200 ? resp.json as T : null
	} catch (e) {
		console.error('Library: Wikidata request error', e)
		return null
	}
}

// The reader's language, then English, then "mul": the label an item keeps
// once for every language when its name does not change between them.
export function languages(): string[] {
	const tag = getLanguage().toLowerCase()
	const all = [tag, tag.split('-')[0] ?? tag, 'en', 'mul']
	return all.filter((lang, i) => lang && all.indexOf(lang) === i)
}

// Item ids for a full-text search narrowed by CirrusSearch keywords, such as
// `haswbstatement:P31=Q7889` (video games only).
export async function searchItems(text: string, filter: string, limit: number): Promise<string[]> {
	const json = await api<{ query?: { search?: { title: string }[] } }>({
		action: 'query',
		list: 'search',
		srsearch: `${text} ${filter}`.trim(),
		srlimit: String(limit)
	})
	return (json?.query?.search ?? []).map(hit => hit.title).filter(id => /^Q\d+$/.test(id))
}

export async function entities(ids: string[], props: string, langs: string[] = languages()): Promise<Record<string, WikidataEntity>> {
	if (ids.length === 0) return {}
	const json = await api<{ entities?: Record<string, WikidataEntity> }>({
		action: 'wbgetentities',
		ids: ids.slice(0, 50).join('|'),
		props,
		languages: langs.join('|')
	})
	return json?.entities ?? {}
}

// One property of one item: a film's full claim list runs to a hundred
// kilobytes, this answer to a few hundred bytes.
export async function claim(id: string, property: string): Promise<unknown> {
	const json = await api<{ claims?: Record<string, WikidataClaim[]> }>({ action: 'wbgetclaims', entity: id, property })
	return json?.claims?.[property]?.[0]?.mainsnak?.datavalue?.value
}

export function claimValues(entity: WikidataEntity | undefined, property: string): unknown[] {
	return (entity?.claims?.[property] ?? []).map(c => c.mainsnak?.datavalue?.value).filter(v => v !== undefined)
}

// The item id a claim points at (a genre, a developer).
export function itemIds(entity: WikidataEntity | undefined, property: string): string[] {
	const ids: string[] = []
	for (const value of claimValues(entity, property)) {
		const id = (value as { id?: unknown } | null)?.id
		if (typeof id === 'string' && /^Q\d+$/.test(id)) ids.push(id)
	}
	return ids
}

export function textIn(map: Record<string, { value?: string }> | undefined, langs: string[] = languages()): string | null {
	for (const lang of langs) {
		const value = map?.[lang]?.value
		if (value) return value
	}
	return null
}

const ROTTEN_TOMATOES = 'Q105584'
const TOMATOMETER = 'Q108403393'

function qualifierValues(claim: WikidataClaim, property: string): unknown[] {
	return (claim.qualifiers?.[property] ?? []).map(q => q.datavalue?.value)
}

// The Tomatometer Wikidata keeps for a film (P444 review score, by Rotten
// Tomatoes, newest first): OMDb has no score for most films from the last
// few years, and none without a key.
export class RottenTomatoesEnricher implements MetadataEnricher {
	async enrich(imdbId: string): Promise<Record<string, unknown>> {
		const [item] = await searchItems('', `haswbstatement:P345=${imdbId}`, 1)
		if (!item) return {}
		const json = await api<{ claims?: Record<string, WikidataClaim[]> }>({ action: 'wbgetclaims', entity: item, property: 'P444' })
		let best: { score: number; when: string } | null = null
		for (const c of json?.claims?.P444 ?? []) {
			const by = qualifierValues(c, 'P447').map(v => (v as { id?: unknown } | undefined)?.id)
			const method = qualifierValues(c, 'P459').map(v => (v as { id?: unknown } | undefined)?.id)
			if (by.indexOf(ROTTEN_TOMATOES) < 0 || method.indexOf(TOMATOMETER) < 0) continue
			const raw = c.mainsnak?.datavalue?.value
			const match = typeof raw === 'string' ? raw.match(/^(\d{1,3})%$/) : null
			if (!match) continue
			const time = (qualifierValues(c, 'P585')[0] as { time?: unknown } | undefined)?.time
			const when = typeof time === 'string' ? time : ''
			if (!best || when > best.when) best = { score: Number(match[1]), when }
		}
		return best ? { 'Rating RT': best.score } : {}
	}
}

// The lead images of English Wikipedia articles, by article title: a game's
// box art, a comic's first cover. Non-free images count, or a cover would
// never qualify. One request for up to 50 titles.
export async function wikipediaImages(titles: string[]): Promise<Record<string, string>> {
	const images: Record<string, string> = {}
	if (titles.length === 0) return images
	try {
		const query = new URLSearchParams({
			action: 'query', prop: 'pageimages', titles: titles.slice(0, 50).join('|'), piprop: 'thumbnail',
			pithumbsize: '600', pilicense: 'any', redirects: '1', format: 'json', origin: '*'
		})
		const resp = await requestUrl({ url: `https://en.wikipedia.org/w/api.php?${query.toString()}`, headers: HEADERS, throw: false })
		if (resp.status !== 200) return images
		type Hop = { from: string; to: string }
		type Page = { title?: string; thumbnail?: { source?: string } }
		const answer = (resp.json as { query?: { normalized?: Hop[]; redirects?: Hop[]; pages?: Record<string, Page> } }).query
		const byTitle: Record<string, string> = {}
		for (const page of Object.values(answer?.pages ?? {})) {
			// Without the tracking query Wikipedia appends to image links.
			if (page.title && page.thumbnail?.source) byTitle[page.title] = page.thumbnail.source.split('?')[0] ?? page.thumbnail.source
		}
		// The answer is keyed by each article's final title: a title asked for
		// is spelled out ("the_witcher" to "The witcher"), then redirected.
		const hops = [...(answer?.normalized ?? []), ...(answer?.redirects ?? [])]
		for (const title of titles) {
			let final = title
			for (const hop of hops) if (hop.from === final) final = hop.to
			const source = byTitle[final]
			if (source) images[title] = source
		}
	} catch (e) {
		console.error('Library: Wikipedia request error', e)
	}
	return images
}

// Labels of the items a list of claims points at, in one request.
export async function labelsOf(ids: string[], langs: string[]): Promise<(list: string[]) => string[]> {
	const named = await entities(ids.filter((id, i) => ids.indexOf(id) === i), 'labels', langs)
	return (list) => list.map(id => textIn(named[id]?.labels, langs)).filter((label): label is string => !!label)
}

// The first year among an item's dates: a game released on several
// platforms keeps one date each, a series its start.
export function firstYear(entity: WikidataEntity | undefined, properties: string[]): number | null {
	const years: number[] = []
	for (const property of properties) {
		for (const value of claimValues(entity, property)) {
			const time = (value as { time?: unknown } | null)?.time
			const year = typeof time === 'string' ? yearIn(time) : null
			if (year !== null) years.push(year)
		}
	}
	return years.length > 0 ? Math.min(...years) : null
}

// The article on English Wikipedia, else the item's own page.
export function pageUrl(id: string, article: string | null): string {
	// Colons and commas read as themselves in an article link.
	return article
		? `https://en.wikipedia.org/wiki/${encodeURIComponent(article.replace(/ /g, '_')).replace(/%3A/g, ':').replace(/%2C/g, ',')}`
		: `https://www.wikidata.org/wiki/${id}`
}

// The year a description names: "1997 film by…", "фильм 1997 года".
export function yearIn(text: string | null): number | null {
	const match = text?.match(/\b(1[89]\d\d|20\d\d)\b/)
	return match ? Number(match[1]) : null
}
