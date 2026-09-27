import { requestUrl } from 'obsidian'

// A YouTube trailer for a game. RAWG and Steam carry none, so it comes from
// IGDB when the user set Twitch API keys (nearly every game has one there),
// else from Wikidata's "YouTube video ID" (about a quarter of games). The
// caller falls back to Steam's own trailer stream.

export interface TwitchKeys {
	id: string
	secret: string
}

const IGDB = 'https://api.igdb.com/v4'
const TWITCH_TOKEN = 'https://id.twitch.tv/oauth2/token'
const WIKIDATA = 'https://www.wikidata.org/w/api.php'
const YOUTUBE_ID = /^[\w-]{11}$/

export class GameTrailerFinder {
	private getKeys: () => TwitchKeys
	private token: { value: string; keys: string; expiresAt: number } | null = null

	constructor(getKeys: () => TwitchKeys) {
		this.getKeys = getKeys
	}

	async youtube(steamAppId: number | null, name: string): Promise<string | null> {
		const id = await this.fromIgdb(steamAppId, name) ?? (steamAppId ? await fromWikidata(steamAppId) : null)
		return id ? `https://www.youtube.com/watch?v=${id}` : null
	}

	// App access token (client credentials), kept until shortly before it expires.
	private async accessToken(keys: TwitchKeys): Promise<string | null> {
		const signature = `${keys.id}|${keys.secret}`
		if (this.token && this.token.keys === signature && Date.now() < this.token.expiresAt) return this.token.value
		try {
			const resp = await requestUrl({
				url: `${TWITCH_TOKEN}?client_id=${encodeURIComponent(keys.id)}&client_secret=${encodeURIComponent(keys.secret)}&grant_type=client_credentials`,
				method: 'POST',
				throw: false
			})
			const json = resp.json as { access_token?: string; expires_in?: number }
			if (resp.status !== 200 || !json.access_token) {
				console.error('Library: Twitch token request failed', resp.status)
				return null
			}
			this.token = { value: json.access_token, keys: signature, expiresAt: Date.now() + ((json.expires_in ?? 0) - 3600) * 1000 }
			return json.access_token
		} catch (e) {
			console.error('Library: Twitch token error', e)
			return null
		}
	}

	private async igdb<T>(endpoint: string, body: string, keys: TwitchKeys, token: string): Promise<T[]> {
		try {
			const resp = await requestUrl({
				url: `${IGDB}/${endpoint}`,
				method: 'POST',
				headers: { 'Client-ID': keys.id, Authorization: `Bearer ${token}`, 'Content-Type': 'text/plain' },
				body,
				throw: false
			})
			return resp.status === 200 && Array.isArray(resp.json) ? resp.json as T[] : []
		} catch (e) {
			console.error('Library: IGDB request error', e)
			return []
		}
	}

	private async fromIgdb(steamAppId: number | null, name: string): Promise<string | null> {
		const raw = this.getKeys()
		const keys = { id: raw.id.trim(), secret: raw.secret.trim() }
		if (!keys.id || !keys.secret) return null
		const token = await this.accessToken(keys)
		if (!token) return null
		let game: number | undefined
		if (steamAppId) {
			// Source 1 is Steam; `category` is the older name of the same field.
			const links = await this.igdb<{ game?: number; external_game_source?: number; category?: number }>(
				'external_games', `fields game,external_game_source,category; where uid = "${String(steamAppId)}"; limit 10;`, keys, token)
			game = links.find(l => l.external_game_source === 1 || l.category === 1)?.game
		}
		if (!game && name) {
			const hits = await this.igdb<{ id: number }>('games', `search "${name.replace(/["\\]/g, '')}"; fields id; limit 1;`, keys, token)
			game = hits[0]?.id
		}
		if (!game) return null
		const videos = await this.igdb<{ video_id?: string; name?: string }>(
			'game_videos', `fields video_id,name; where game = ${String(game)}; limit 50;`, keys, token)
		return pickTrailer(videos)
	}
}

// The launch or official trailer when there is one, otherwise any trailer,
// otherwise the first video.
export function pickTrailer(videos: { video_id?: string; name?: string }[]): string | null {
	const valid = videos.filter(v => v.video_id && YOUTUBE_ID.test(v.video_id))
	const named = (pattern: RegExp): { video_id?: string } | undefined => valid.find(v => pattern.test(v.name ?? ''))
	return (named(/launch|official|reveal/i) ?? named(/trailer/i) ?? valid[0])?.video_id ?? null
}

async function fromWikidata(steamAppId: number): Promise<string | null> {
	const get = async <T>(query: string): Promise<T | null> => {
		try {
			const resp = await requestUrl({ url: `${WIKIDATA}?${query}&format=json&origin=*`, throw: false })
			return resp.status === 200 ? resp.json as T : null
		} catch (e) {
			console.error('Library: Wikidata request error', e)
			return null
		}
	}
	const found = await get<{ query?: { search?: { title: string }[] } }>(
		`action=query&list=search&srlimit=1&srsearch=${encodeURIComponent(`haswbstatement:P1733=${String(steamAppId)}`)}`)
	const item = found?.query?.search?.[0]?.title
	if (!item) return null
	type Claim = { mainsnak?: { datavalue?: { value?: unknown } } }
	const entity = await get<{ entities?: Record<string, { claims?: Record<string, Claim[]> }> }>(
		`action=wbgetentities&props=claims&ids=${encodeURIComponent(item)}`)
	const value = entity?.entities?.[item]?.claims?.P1651?.[0]?.mainsnak?.datavalue?.value
	return typeof value === 'string' && YOUTUBE_ID.test(value) ? value : null
}
