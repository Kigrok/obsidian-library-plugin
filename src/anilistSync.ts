import { requestUrl } from 'obsidian'

// AniList progress sync. Reading anime metadata is public (see AnimeProvider); writing to a
// user's list needs OAuth. We use the implicit-grant flow: the user registers an API client
// (redirect = the PIN page), authorizes, and pastes the returned access token into settings.
const ENDPOINT = 'https://graphql.anilist.co'

export interface AniListEntry {
	mediaId: number
	progress: number
	status: string
	score: number
}

export type MediaListStatus = 'CURRENT' | 'COMPLETED' | 'PLANNING'

// Build the authorize URL (implicit grant). The client must be registered with the PIN redirect.
export function anilistAuthUrl(clientId: string): string {
	return `https://anilist.co/api/v2/oauth/authorize?client_id=${encodeURIComponent(clientId)}&response_type=token`
}

// Map the note's Complete/Progress state to an AniList list status.
export function listStatus(complete: boolean, watched: number): MediaListStatus {
	if (complete) return 'COMPLETED'
	if (watched > 0) return 'CURRENT'
	return 'PLANNING'
}

async function gql<T>(token: string, query: string, variables: Record<string, unknown>): Promise<T | null> {
	const resp = await requestUrl({
		url: ENDPOINT,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify({ query, variables }),
		throw: false
	})
	if (resp.status !== 200) return null
	return resp.json as T
}

// Validate the token and return the authenticated user (null if the token is bad/expired).
export async function aniListViewer(token: string): Promise<{ id: number; name: string } | null> {
	const json = await gql<{ data?: { Viewer?: { id: number; name: string } } }>(
		token,
		'query { Viewer { id name } }',
		{}
	)
	return json?.data?.Viewer ?? null
}

// Push one note's progress/status/score to the user's AniList list.
export async function pushEntry(
	token: string,
	mediaId: number,
	progress: number,
	status: MediaListStatus,
	scoreRaw: number | null
): Promise<boolean> {
	const query =
		'mutation ($mediaId: Int, $progress: Int, $status: MediaListStatus, $scoreRaw: Int) {' +
		' SaveMediaListEntry(mediaId: $mediaId, progress: $progress, status: $status, scoreRaw: $scoreRaw) { id } }'
	const variables: Record<string, unknown> = { mediaId, progress, status }
	if (scoreRaw != null) variables.scoreRaw = scoreRaw
	const json = await gql<{ data?: { SaveMediaListEntry?: { id: number } } }>(token, query, variables)
	return !!json?.data?.SaveMediaListEntry?.id
}

interface ListCollectionResponse {
	data?: {
		MediaListCollection?: {
			lists?: { entries?: { mediaId: number; progress: number; status: string; score: number }[] }[]
		}
	}
}

// Pull the user's full anime list (all statuses) as flat entries.
export async function fetchList(token: string, userId: number): Promise<AniListEntry[]> {
	const query =
		'query ($userId: Int) { MediaListCollection(userId: $userId, type: ANIME) {' +
		' lists { entries { mediaId progress status score } } } }'
	const json = await gql<ListCollectionResponse>(token, query, { userId })
	const lists = json?.data?.MediaListCollection?.lists ?? []
	const out: AniListEntry[] = []
	for (const list of lists) {
		for (const e of list.entries ?? []) {
			out.push({ mediaId: e.mediaId, progress: e.progress, status: e.status, score: e.score })
		}
	}
	return out
}
