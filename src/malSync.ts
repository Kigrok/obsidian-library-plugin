import { requestUrl } from 'obsidian'
import type { MalTokens } from './constants'

const AUTH_URL = 'https://myanimelist.net/v1/oauth2/authorize'
const TOKEN_URL = 'https://myanimelist.net/v1/oauth2/token'
const API = 'https://api.myanimelist.net/v2'
const ANILIST = 'https://graphql.anilist.co'
const UNRESERVED = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'

export interface MalEntry {
	malId: number
	progress: number
	status: string
	score?: number
	title?: string
	mediaId?: number
}

export type MalStatus = 'watching' | 'completed' | 'on_hold' | 'dropped' | 'plan_to_watch'
export type MalListStatus = MalStatus

export function makeVerifier(): string {
	const bytes = crypto.getRandomValues(new Uint8Array(128))
	let out = ''
	for (let i = 0; i < bytes.length; i++) out += UNRESERVED.charAt((bytes[i] ?? 0) % UNRESERVED.length)
	return out
}

export async function generatePKCE(): Promise<{ verifier: string; challenge: string }> {
	const verifier = makeVerifier()
	return { verifier, challenge: verifier }
}

export async function generatePKCEAsync(): Promise<{ verifier: string; challenge: string }> {
	return generatePKCE()
}

export function malAuthUrl(clientId: string, verifier: string): string {
	return `${AUTH_URL}?response_type=code&client_id=${encodeURIComponent(clientId)}` +
		`&code_challenge=${encodeURIComponent(verifier)}&code_challenge_method=plain`
}

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

export const malListStatus = malStatus

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
		if (resp.status !== 200) {
			console.error('Library: MyAnimeList token request failed', resp.status)
			return null
		}
		const json = resp.json as { access_token?: string; refresh_token?: string; expires_in?: number; token_type?: string }
		if (!json.access_token || !json.refresh_token) return null
		const tokens = {
			access_token: json.access_token,
			refresh_token: json.refresh_token,
			expires_in: json.expires_in ?? 0,
			token_type: json.token_type ?? 'Bearer',
			created_at: Date.now()
		}
		return {
			...tokens,
			access: tokens.access_token,
			refresh: tokens.refresh_token,
			expiresAt: tokens.created_at + tokens.expires_in * 1000
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

export function isExpired(tokens: MalTokens, now: number = Date.now()): boolean {
	const expiresAt = tokens.expiresAt ?? tokens.created_at + tokens.expires_in * 1000
	return now >= expiresAt - 60000
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

export async function pushMalEntry(token: string, malId: number, progress: number, status: MalStatus, rating: number | null): Promise<boolean> {
	let body = `status=${encodeURIComponent(status)}&num_watched_episodes=${String(Math.max(0, Math.floor(progress)))}`
	if (rating != null && rating > 0) body += `&score=${String(Math.min(10, Math.max(1, Math.round(rating))))}`
	const json = await api<{ status?: string }>(token, `/anime/${String(malId)}/my_list_status`, 'PATCH', body)
	return !!json?.status
}

interface MalListPage {
	data?: { node: { id: number; title?: string; alternative_titles?: { synonyms?: string[] } }; list_status?: {
		status?: string
		score?: number
		num_episodes_watched?: number
	} }[]
	paging?: { next?: string }
}

export async function fetchMalList(token: string): Promise<MalEntry[] | null> {
	const out: MalEntry[] = []
	let path: string | undefined = '/users/@me/animelist?fields=list_status,alternative_titles&limit=1000&nsfw=true'
	while (path) {
		const page: MalListPage | null = await api<MalListPage>(token, path)
		if (!page) return null
		for (const item of page.data ?? []) {
			out.push({
				malId: item.node.id,
				progress: item.list_status?.num_episodes_watched ?? 0,
				status: item.list_status?.status ?? '',
				...(item.list_status?.score ? { score: item.list_status.score } : {})
			})
		}
		path = page.paging?.next
	}
	return out
}

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
			const media = (resp.json as { data?: { Page?: { media?: { id: number; idMal: number | null }[] } } }).data?.Page?.media ?? []
			for (const item of media) if (item.idMal) out.set(item.id, item.idMal)
		} catch (e) {
			console.error('Library: AniList MAL id lookup error', e)
			return null
		}
	}
	return out
}
