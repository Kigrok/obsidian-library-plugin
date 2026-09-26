import { requestUrl } from 'obsidian'

// MyAnimeList progress sync for the anime notes AniList created. MAL's OAuth has
// no PIN page: the user registers a client with any redirect URL (http://localhost
// works), authorizes, and pastes the address the browser lands on, which carries
// the code. PKCE uses the plain method, the only one MAL accepts.
// OAuth client, PKCE and token refresh adapted from RobertoJarquinRR's fork (MIT).
const AUTH_URL = 'https://myanimelist.net/v1/oauth2/authorize'
const TOKEN_URL = 'https://myanimelist.net/v1/oauth2/token'
const API = 'https://api.myanimelist.net/v2'
const ANILIST = 'https://graphql.anilist.co'

export interface MalTokens {
	access: string
	refresh: string
	// ms since epoch
	expiresAt: number
}

export interface MalEntry {
	malId: number
	progress: number
	status: string
}

export type MalStatus = 'watching' | 'completed' | 'plan_to_watch'

const UNRESERVED = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'

// 128 unreserved characters, the longest verifier RFC 7636 allows.
export function makeVerifier(): string {
	const bytes = crypto.getRandomValues(new Uint8Array(128))
	let out = ''
	for (let i = 0; i < bytes.length; i++) out += UNRESERVED.charAt((bytes[i] ?? 0) % UNRESERVED.length)
	return out
}

export function malAuthUrl(clientId: string, verifier: string): string {
	return `${AUTH_URL}?response_type=code&client_id=${encodeURIComponent(clientId)}` +
		`&code_challenge=${verifier}&code_challenge_method=plain`
}

// The pasted text is the whole redirect address or the bare code.
export function codeFromInput(input: string): string {
	const text = input.trim()
	const match = text.match(/[?&]code=([^&#\s]+)/)
	return match ? decodeURIComponent(match[1] ?? '') : text
}

export function malStatus(complete: boolean, watched: number): MalStatus {
	if (complete) return 'completed'
	if (watched > 0) return 'watching'
	return 'plan_to_watch'
}

// Token endpoint: the secret goes along only when the client has one ("web"
// clients do, "other" clients do not).
async function tokenRequest(fields: Record<string, string>, secret: string): Promise<MalTokens | null> {
	const params: string[] = []
	for (const key of Object.keys(fields)) params.push(`${key}=${encodeURIComponent(fields[key] ?? '')}`)
	if (secret) params.push(`client_secret=${encodeURIComponent(secret)}`)
	try {
		const resp = await requestUrl({
			url: TOKEN_URL,
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: params.join('&'),
			throw: false
		})
		// Only the status is logged: the body may carry tokens.
		if (resp.status !== 200) {
			console.error('Library: MyAnimeList token request failed', resp.status)
			return null
		}
		const json = resp.json as { access_token?: string; refresh_token?: string; expires_in?: number }
		if (!json.access_token || !json.refresh_token) return null
		return {
			access: json.access_token,
			refresh: json.refresh_token,
			expiresAt: Date.now() + (json.expires_in ?? 0) * 1000
		}
	} catch (e) {
		console.error('Library: MyAnimeList token request error', e)
		return null
	}
}

export function exchangeCode(clientId: string, secret: string, code: string, verifier: string): Promise<MalTokens | null> {
	return tokenRequest({ grant_type: 'authorization_code', client_id: clientId, code, code_verifier: verifier }, secret)
}

export function refreshTokens(clientId: string, secret: string, refresh: string): Promise<MalTokens | null> {
	return tokenRequest({ grant_type: 'refresh_token', client_id: clientId, refresh_token: refresh }, secret)
}

// A minute of slack so a token does not expire between the check and the call.
export function isExpired(tokens: MalTokens, now: number = Date.now()): boolean {
	return now >= tokens.expiresAt - 60000
}

async function api<T>(token: string, path: string, method = 'GET', body?: string): Promise<T | null> {
	try {
		const resp = await requestUrl({
			url: path.startsWith('http') ? path : API + path,
			method,
			headers: {
				Authorization: `Bearer ${token}`,
				...(body ? { 'Content-Type': 'application/x-www-form-urlencoded' } : {})
			},
			body,
			throw: false
		})
		if (resp.status !== 200) return null
		return resp.json as T
	} catch (e) {
		console.error('Library: MyAnimeList request error', e)
		return null
	}
}

export function malViewer(token: string): Promise<{ id: number; name: string } | null> {
	return api<{ id: number; name: string }>(token, '/users/@me')
}

// MAL scores are whole numbers 1–10; 0 would clear the user's score, so it is left out.
export async function pushMalEntry(token: string, malId: number, progress: number, status: MalStatus, rating: number | null): Promise<boolean> {
	let body = `status=${status}&num_watched_episodes=${String(Math.max(0, Math.floor(progress)))}`
	if (rating != null && rating > 0) body += `&score=${String(Math.min(10, Math.max(1, Math.round(rating))))}`
	const json = await api<{ status?: string }>(token, `/anime/${String(malId)}/my_list_status`, 'PATCH', body)
	return !!json?.status
}

interface MalListPage {
	data?: { node: { id: number }; list_status?: { status?: string; num_episodes_watched?: number } }[]
	paging?: { next?: string }
}

// The whole anime list, page by page; null when any page fails, so a partial
// list is never mistaken for a sync.
export async function fetchMalList(token: string): Promise<MalEntry[] | null> {
	const out: MalEntry[] = []
	let path: string | undefined = '/users/@me/animelist?fields=list_status&limit=1000&nsfw=true'
	while (path) {
		const page: MalListPage | null = await api<MalListPage>(token, path)
		if (!page) return null
		for (const item of page.data ?? []) {
			out.push({
				malId: item.node.id,
				progress: item.list_status?.num_episodes_watched ?? 0,
				status: item.list_status?.status ?? ''
			})
		}
		path = page.paging?.next
	}
	return out
}

// AniList knows each title's MAL id; notes keep only the AniList one. Public
// query, 50 ids per page. Titles MAL does not list are simply missing.
export async function malIdsFor(anilistIds: number[]): Promise<Map<number, number> | null> {
	const out = new Map<number, number>()
	for (let i = 0; i < anilistIds.length; i += 50) {
		const ids = anilistIds.slice(i, i + 50)
		try {
			const resp = await requestUrl({
				url: ANILIST,
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({
					query: 'query ($ids: [Int]) { Page(perPage: 50) { media(id_in: $ids, type: ANIME) { id idMal } } }',
					variables: { ids }
				}),
				throw: false
			})
			if (resp.status !== 200) return null
			const media = (resp.json as { data?: { Page?: { media?: { id: number; idMal: number | null }[] } } })
				.data?.Page?.media ?? []
			for (const m of media) if (m.idMal) out.set(m.id, m.idMal)
		} catch (e) {
			console.error('Library: AniList MAL id lookup error', e)
			return null
		}
	}
	return out
}
