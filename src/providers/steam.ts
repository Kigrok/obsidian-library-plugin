import { requestUrl } from 'obsidian'
import type { ContentProvider, ContentType, NormalizedMetadata, SearchResult } from './types'

interface SteamSearchItem {
	id: number
	name: string
	tiny_image?: string
	metascore?: string
}

interface SteamSearchResponse {
	items?: SteamSearchItem[]
}

interface SteamAppDetails {
	type?: string
	name?: string
	header_image?: string
	release_date?: { coming_soon?: boolean; date?: string }
	developers?: string[]
	publishers?: string[]
	genres?: { description?: string }[]
	metacritic?: { score?: number }
}

interface SteamAppDetailsResponse {
	[appId: string]: { success?: boolean; data?: SteamAppDetails }
}

export class SteamProvider implements ContentProvider {
	readonly id = 'steam'
	// Registered through GameAggregatorProvider only; never bound to a registry content type.
	readonly contentTypes: ContentType[] = ['game']

	private static readonly STORE = 'https://store.steampowered.com'
	private static readonly CDN = 'https://cdn.cloudflare.steamstatic.com/steam/apps'
	// RAWG and Steam both use numeric ids, so Steam ids carry a prefix to stay
	// distinguishable when a refresh routes without the original search result.
	static readonly PREFIX = 'steam:'

	private appId(value: string): number | null {
		const id = Number(value)
		return Number.isSafeInteger(id) && id > 0 ? id : null
	}

	private bareId(sourceId: string): string {
		return sourceId.startsWith(SteamProvider.PREFIX)
			? sourceId.slice(SteamProvider.PREFIX.length)
			: sourceId
	}

	private year(value: string | undefined): number | null {
		if (!value) return null
		const match = value.match(/(\d{4})/)
		return match ? Number(match[1]) : null
	}

	async search(query: string): Promise<SearchResult[]> {
		try {
			const term = encodeURIComponent(query)
			const resp = await requestUrl({
				url: `${SteamProvider.STORE}/api/storesearch/?term=${term}&l=english&cc=US`,
				throw: false
			})
			if (resp.status !== 200) return []
			const data = resp.json as SteamSearchResponse
			const items = Array.isArray(data.items) ? data.items : []
			return items.map((item) => ({
				provider: this.id,
				sourceId: SteamProvider.PREFIX + String(item.id),
				title: item.name,
				year: null,
				cover: item.tiny_image ?? null,
				subtitle: item.metascore ? `Metacritic ${item.metascore}` : null,
				raw: item
			}))
		} catch (e) {
			console.error('Library: Steam search error', e)
			return []
		}
	}

	async fetch(sourceId: string): Promise<NormalizedMetadata | null> {
		try {
			const id = this.appId(this.bareId(sourceId))
			if (id === null) return null
			const resp = await requestUrl({
				url: `${SteamProvider.STORE}/api/appdetails?appids=${String(id)}&l=english`,
				throw: false
			})
			if (resp.status !== 200) return null
			const data = resp.json as SteamAppDetailsResponse
			const app = data[String(id)]?.data
			if (!app) return null

			const developers = Array.isArray(app.developers) ? app.developers : []
			const publishers = Array.isArray(app.publishers) ? app.publishers : []
			const genres = Array.isArray(app.genres)
				? app.genres.map((g) => (g.description ?? '').trim()).filter(Boolean)
				: []

			const fields: Record<string, unknown> = {
				Name: app.name,
				Year: this.year(app.release_date?.date),
				Genre: genres,
				Creator: developers.length > 0 ? developers : publishers,
				Cover: await this.cover(id, app.header_image),
				URL: `${SteamProvider.STORE}/app/${String(id)}/`
			}
			// Metacritic is 0-100; the note stores ratings on a 0-10 scale.
			const score = app.metacritic?.score
			if (typeof score === 'number' && score > 0) fields['Rating MC'] = Math.round(score) / 10
			return { fields, progressTotal: null, imdbId: null }
		} catch (e) {
			console.error('Library: Steam fetch error', e)
			return null
		}
	}

	// Prefer the portrait capsule so game cards match the other poster-shaped sources;
	// fall back to the wide header image for apps that have no portrait asset.
	private async cover(id: number, header?: string): Promise<string | null> {
		const portrait = `${SteamProvider.CDN}/${String(id)}/library_600x900.jpg`
		try {
			const resp = await requestUrl({ url: portrait, method: 'HEAD', throw: false })
			if (resp.status === 200) return portrait
		} catch (e) {
			console.error('Library: Steam cover check error', e)
		}
		return header ?? null
	}
}
