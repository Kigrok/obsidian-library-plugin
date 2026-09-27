import { requestUrl } from 'obsidian'

// The user's own Steam library through the Steam Web API: the games they own
// and the minutes played. Needs their Web API key; the profile's game details
// must be public for GetOwnedGames to list anything.
const API = 'https://api.steampowered.com'

export interface OwnedGame {
	appId: number
	name: string
	minutes: number
}

async function get<T>(url: string): Promise<T | null> {
	try {
		const resp = await requestUrl({ url, throw: false })
		if (resp.status !== 200) return null
		return resp.json as T
	} catch (e) {
		console.error('Library: Steam Web API error', e)
		return null
	}
}

// Accepts a SteamID64, a profile address, or a custom profile name.
export async function resolveSteamId(key: string, input: string): Promise<string | null> {
	const text = input.trim().replace(/\/+$/, '')
	const direct = text.match(/(?:^|\/profiles\/)(\d{17})$/)
	if (direct) return direct[1] ?? null
	const vanity = (text.match(/\/id\/([^/?#]+)$/)?.[1] ?? text).trim()
	if (!vanity) return null
	const json = await get<{ response?: { success?: number; steamid?: string } }>(
		`${API}/ISteamUser/ResolveVanityURL/v1/?key=${encodeURIComponent(key)}&vanityurl=${encodeURIComponent(vanity)}`
	)
	return json?.response?.success === 1 ? (json.response.steamid ?? null) : null
}

// null when the request fails or the profile hides its games.
export async function ownedGames(key: string, steamId: string): Promise<OwnedGame[] | null> {
	const json = await get<{ response?: { games?: { appid: number; name?: string; playtime_forever?: number }[] } }>(
		`${API}/IPlayerService/GetOwnedGames/v1/?key=${encodeURIComponent(key)}&steamid=${encodeURIComponent(steamId)}` +
		'&include_appinfo=1&include_played_free_games=1'
	)
	const games = json?.response?.games
	if (!games) return null
	return games.map(g => ({ appId: g.appid, name: g.name ?? String(g.appid), minutes: g.playtime_forever ?? 0 }))
}

// Hours with one decimal, the unit the Playtime property stores.
export function playtimeHours(minutes: number): number {
	return Math.round(minutes / 6) / 10
}
