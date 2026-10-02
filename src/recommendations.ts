import { requestUrl } from 'obsidian'
import { MalProvider } from './providers/mal'
import { SteamProvider } from './providers/steam'
import type { ContentType } from './providers/types'
import { claim, entities, itemIds, languages, searchItems, textIn, yearIn } from './providers/wikidata'

// Titles similar to a note's, from whichever source can say so:
// AniList's user recommendations for anime, TMDB's for movies and series (with
// a key; without one, Cinemeta's best titles of the same genres), RAWG's same-series and same-genre games (with a key;
// without one, Wikidata's), Open Library's
// most read works of the book's subject. Comics and music have no such data.

export interface Recommendation {
	title: string
	year: number | null
	cover: string | null
	// The category kind the title would be added to.
	type: ContentType
	// Id for that kind's provider; a function when one more lookup is needed.
	sourceId: string | (() => Promise<string | null>)
}

export interface RecommendationKeys {
	tmdb: string
	rawg: string
}

const LIMIT = 10
const ANILIST = 'https://graphql.anilist.co'
const TMDB = 'https://api.themoviedb.org/3'
const TMDB_IMG = 'https://image.tmdb.org/t/p/w342'
const RAWG = 'https://api.rawg.io/api'
const OPENLIB = 'https://openlibrary.org'

async function getJson<T>(url: string, body?: unknown): Promise<T | null> {
	try {
		const resp = await requestUrl({
			url,
			method: body ? 'POST' : 'GET',
			headers: body ? { 'Content-Type': 'application/json', Accept: 'application/json' } : undefined,
			body: body ? JSON.stringify(body) : undefined,
			throw: false
		})
		return resp.status === 200 ? resp.json as T : null
	} catch (e) {
		console.error('Library: recommendations request error', e)
		return null
	}
}

function yearOf(date: string | null | undefined): number | null {
	const match = (date ?? '').match(/^(\d{4})/)
	return match ? Number(match[1]) : null
}

// `name` and `genres` (the note's genre labels) help where the source needs
// a search or ranks by subject.
// `series` tells a series note from a movie one. Titles whose id is in `known`
// (already in the library) are left out.
export async function recommendationsFor(source: string, sourceId: string, name: string, genres: string[], keys: RecommendationKeys, series = false, known: Set<string> = new Set()): Promise<Recommendation[]> {
	const recs = await pick(source, sourceId, name, genres, keys, series)
	return recs.filter(r => typeof r.sourceId !== 'string' || !known.has(r.sourceId))
}

async function pick(source: string, sourceId: string, name: string, genres: string[], keys: RecommendationKeys, series: boolean): Promise<Recommendation[]> {
	switch (source) {
		case 'anilist': return anilist(sourceId)
		case 'omdb': {
			const fromTmdb = keys.tmdb ? await tmdb(sourceId, keys.tmdb) : []
			return fromTmdb.length > 0 ? fromTmdb : cinemeta(sourceId, genres, series)
		}
		case 'games': case 'rawg': case 'steam': {
			const fromRawg = keys.rawg && !/^Q\d+$/.test(sourceId) ? await rawg(sourceId, name, genres[0] ?? '', keys.rawg) : []
			return fromRawg.length > 0 ? fromRawg : wikidataGames(sourceId, name)
		}
		case 'books': case 'openlibrary': case 'googlebooks': return openLibrary(sourceId, name, genres)
		default: return []
	}
}

// A note added from MyAnimeList ("mal:" id) is found on AniList by that id,
// and gets its suggestions as MyAnimeList titles where they have one.
async function anilist(sourceId: string): Promise<Recommendation[]> {
	const fromMal = sourceId.startsWith(MalProvider.PREFIX)
	const id = Number(fromMal ? sourceId.slice(MalProvider.PREFIX.length) : sourceId)
	if (!Number.isFinite(id)) return []
	type Node = { mediaRecommendation: { id: number; idMal?: number | null; title: { romaji?: string; english?: string }; coverImage?: { large?: string }; seasonYear?: number | null } | null }
	const json = await getJson<{ data?: { Media?: { recommendations?: { nodes?: Node[] } } } }>(ANILIST, {
		query: `query ($id: Int) { Media(${fromMal ? 'idMal' : 'id'}: $id, type: ANIME) { recommendations(sort: RATING_DESC, perPage: 10) {` +
			' nodes { mediaRecommendation { id idMal title { romaji english } coverImage { large } seasonYear } } } } }',
		variables: { id }
	})
	const out: Recommendation[] = []
	for (const node of json?.data?.Media?.recommendations?.nodes ?? []) {
		const m = node.mediaRecommendation
		if (!m) continue
		out.push({
			title: m.title.english || m.title.romaji || String(m.id),
			year: m.seasonYear ?? null,
			cover: m.coverImage?.large ?? null,
			type: 'anime',
			sourceId: fromMal && m.idMal ? MalProvider.PREFIX + String(m.idMal) : String(m.id)
		})
	}
	return out
}

async function tmdb(imdbId: string, key: string): Promise<Recommendation[]> {
	const q = `api_key=${encodeURIComponent(key)}`
	const found = await getJson<{ movie_results?: { id: number }[]; tv_results?: { id: number }[] }>(
		`${TMDB}/find/${encodeURIComponent(imdbId)}?external_source=imdb_id&${q}`)
	const movie = found?.movie_results?.[0]
	const show = found?.tv_results?.[0]
	const kind = movie ? 'movie' : show ? 'tv' : null
	const id = movie?.id ?? show?.id
	if (!kind || id === undefined) return []
	type Item = { id: number; title?: string; name?: string; poster_path?: string | null; release_date?: string; first_air_date?: string }
	const json = await getJson<{ results?: Item[] }>(`${TMDB}/${kind}/${String(id)}/recommendations?${q}`)
	return (json?.results ?? []).slice(0, LIMIT).map((item): Recommendation => ({
		title: item.title ?? item.name ?? '',
		year: yearOf(item.release_date ?? item.first_air_date),
		cover: item.poster_path ? TMDB_IMG + item.poster_path : null,
		type: kind === 'movie' ? 'movie' : 'series',
		// Notes are keyed by IMDb id; TMDB gives it on request.
		sourceId: async () => {
			const ids = await getJson<{ imdb_id?: string | null }>(`${TMDB}/${kind}/${String(item.id)}/external_ids?${q}`)
			return ids?.imdb_id ?? null
		}
	}))
}

const CINEMETA = 'https://v3-cinemeta.strem.io'

type CinemetaItem = { imdb_id?: string; id?: string; name?: string; poster?: string; year?: string; releaseInfo?: string; imdbRating?: string; genre?: string[] }

// Without a TMDB key: the most popular and the best rated titles of the note's
// first genre, ranked by how many of its genres they share, then by rating.
async function cinemeta(imdbId: string, genres: string[], series: boolean): Promise<Recommendation[]> {
	const genre = genres[0]
	if (!genre) return []
	const kind = series ? 'series' : 'movie'
	const lists = await Promise.all(['top', 'imdbRating'].map(catalog =>
		getJson<{ metas?: CinemetaItem[] }>(`${CINEMETA}/catalog/${kind}/${catalog}/genre=${encodeURIComponent(genre)}.json`)))
	const wanted = new Set(genres.map(g => g.toLowerCase()))
	const seen = new Set<string>([imdbId])
	const ranked: { item: CinemetaItem; id: string; shared: number; rating: number }[] = []
	const items: CinemetaItem[] = []
	for (const list of lists) items.push(...(list?.metas ?? []))
	for (const item of items) {
		const id = item.imdb_id ?? item.id ?? ''
		if (!/^tt\d+$/.test(id) || seen.has(id)) continue
		seen.add(id)
		const shared = (item.genre ?? []).filter(g => wanted.has(g.toLowerCase())).length
		ranked.push({ item, id, shared, rating: Number(item.imdbRating) || 0 })
	}
	ranked.sort((a, b) => b.shared - a.shared || b.rating - a.rating)
	return ranked.slice(0, LIMIT).map(({ item, id }): Recommendation => ({
		title: item.name ?? id,
		year: yearOf(item.releaseInfo ?? item.year),
		cover: item.poster ?? null,
		type: series ? 'series' : 'movie',
		sourceId: id
	}))
}

type RawgGame = { id: number; name: string; released?: string | null; background_image?: string | null }

async function rawg(sourceId: string, name: string, genre: string, key: string): Promise<Recommendation[]> {
	const q = `key=${encodeURIComponent(key)}`
	let id = sourceId
	// Steam games are known to RAWG under their own id; the name finds it.
	if (id.startsWith('steam:')) {
		const hit = name ? await getJson<{ results?: RawgGame[] }>(`${RAWG}/games?${q}&page_size=1&search=${encodeURIComponent(name)}`) : null
		const found = hit?.results?.[0]
		if (!found) return []
		id = String(found.id)
	}
	const series = await getJson<{ results?: RawgGame[] }>(`${RAWG}/games/${encodeURIComponent(id)}/game-series?${q}&page_size=${String(LIMIT)}`)
	const games = series?.results ?? []
	if (games.length < LIMIT && genre) {
		const slug = genre.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
		const more = slug ? await getJson<{ results?: RawgGame[] }>(`${RAWG}/games?${q}&genres=${slug}&ordering=-rating&page_size=${String(LIMIT)}`) : null
		for (const g of more?.results ?? []) if (String(g.id) !== id && !games.some(x => x.id === g.id)) games.push(g)
	}
	return games.slice(0, LIMIT).map((g): Recommendation => ({
		title: g.name,
		year: yearOf(g.released),
		cover: g.background_image ?? null,
		type: 'game',
		sourceId: String(g.id)
	}))
}

const VIDEO_GAME = 'haswbstatement:P31=Q7889'

// Without a RAWG key: the other games of the series, then well-known Steam
// games of the same genre, both from Wikidata. The game's own item is found
// by its Q-number, its Steam app id or, for a RAWG note, its name.
async function wikidataGames(sourceId: string, name: string): Promise<Recommendation[]> {
	const item = /^Q\d+$/.test(sourceId) ? sourceId
		: sourceId.startsWith(SteamProvider.PREFIX)
			? (await searchItems('', `haswbstatement:P1733=${sourceId.slice(SteamProvider.PREFIX.length)}`, 1))[0]
			: name ? (await searchItems(name, VIDEO_GAME, 1))[0] : undefined
	if (!item) return []
	const own = (await entities([item], 'claims', ['en']))[item]
	const series = itemIds(own, 'P179')[0]
	const genre = itemIds(own, 'P136')[0]
	const [inSeries, inGenre] = await Promise.all([
		series ? searchItems('', `haswbstatement:P179=${series} ${VIDEO_GAME}`, LIMIT) : Promise.resolve<string[]>([]),
		genre ? searchItems('', `haswbstatement:P136=${genre} ${VIDEO_GAME} haswbstatement:P1733`, LIMIT) : Promise.resolve<string[]>([])
	])
	const ids = [...inSeries, ...inGenre].filter((id, i, all) => id !== item && all.indexOf(id) === i).slice(0, LIMIT)
	const langs = languages()
	const [found, steamIds] = await Promise.all([
		entities(ids, 'labels|descriptions', langs),
		Promise.all(ids.map(id => claim(id, 'P1733')))
	])
	return ids.map((id, i): Recommendation => {
		const steam = steamIds[i]
		const appId = typeof steam === 'string' && /^\d+$/.test(steam) ? steam : null
		return {
			title: textIn(found[id]?.labels, ['en', 'mul', ...langs]) ?? id,
			year: yearIn(textIn(found[id]?.descriptions, langs)),
			cover: appId ? `${SteamProvider.CDN}/${appId}/header.jpg` : null,
			type: 'game',
			sourceId: appId ? SteamProvider.PREFIX + appId : id
		}
	})
}

// Library bookkeeping Open Library files as subjects, not what a book is about.
const SHELF_SUBJECT = /^(accessible book|protected daisy|in library|large type|lending library|open library|overdrive|reading level)|:/i
const LATIN = /^[\x20-\x7e]+$/

// The most read books sharing the note's first two genres (a single subject
// is too broad), else the work's first two real subjects.
async function openLibrary(sourceId: string, name: string, genres: string[]): Promise<Recommendation[]> {
	let subjects = genres.filter(g => LATIN.test(g)).slice(0, 2)
	if (subjects.length === 0 && sourceId.startsWith('/works/')) {
		const work = await getJson<{ subjects?: string[] }>(`${OPENLIB}${sourceId}.json`)
		subjects = (work?.subjects ?? []).filter(s => !SHELF_SUBJECT.test(s) && LATIN.test(s)).slice(0, 2)
	}
	if (subjects.length === 0) return []
	const q = subjects.map(s => `subject:"${s.replace(/"/g, '')}"`).join(' AND ')
	type Doc = { key: string; title: string; cover_i?: number | null; first_publish_year?: number | null }
	const json = await getJson<{ docs?: Doc[] }>(
		`${OPENLIB}/search.json?q=${encodeURIComponent(q)}&sort=readinglog&limit=${String(LIMIT + 2)}&fields=key,title,cover_i,first_publish_year`)
	const own = name.trim().toLowerCase()
	return (json?.docs ?? [])
		.filter(d => d.key !== sourceId && d.title.trim().toLowerCase() !== own)
		.slice(0, LIMIT)
		.map((d): Recommendation => ({
			title: d.title,
			year: d.first_publish_year ?? null,
			cover: d.cover_i ? `https://covers.openlibrary.org/b/id/${String(d.cover_i)}-M.jpg` : null,
			type: 'book',
			sourceId: d.key
		}))
}
