import { getLanguage, requestUrl } from 'obsidian'
import type { MetadataEnricher } from './types'

// Wikidata's action API: no key, no daily cap, and titles in the reader's
// language. Used to find movies, series and games by any-language title.

const API = 'https://www.wikidata.org/w/api.php'

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

async function api<T>(params: Record<string, string>): Promise<T | null> {
	try {
		const query = new URLSearchParams({ ...params, format: 'json', origin: '*' })
		const resp = await requestUrl({ url: `${API}?${query.toString()}`, throw: false })
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

// The year a description names: "1997 film by…", "фильм 1997 года".
export function yearIn(text: string | null): number | null {
	const match = text?.match(/\b(1[89]\d\d|20\d\d)\b/)
	return match ? Number(match[1]) : null
}
