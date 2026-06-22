import { requestUrl } from 'obsidian'
import type { ContentProvider, ContentType, NormalizedMetadata, SearchResult } from './types'

interface DeezerArtist {
	name?: string
}

interface DeezerAlbumLite {
	id: number
	title: string
	cover_big?: string
	cover_xl?: string
	artist?: DeezerArtist
	nb_tracks?: number
}

interface DeezerSearchResponse {
	data?: DeezerAlbumLite[]
}

interface DeezerAlbumFull {
	id: number
	title: string
	release_date?: string
	cover_big?: string
	cover_xl?: string
	artist?: DeezerArtist
	nb_tracks?: number
	genres?: { data?: { name?: string }[] }
	link?: string
}

export class DeezerProvider implements ContentProvider {
	readonly id = 'deezer'
	readonly contentTypes: ContentType[] = ['music']

	private static readonly SEARCH = 'https://api.deezer.com/search/album'
	private static readonly ALBUM = 'https://api.deezer.com/album/'

	private year(value: string | undefined): number | null {
		if (!value) return null
		const match = value.match(/^(\d{4})/)
		return match ? Number(match[1]) : null
	}

	private cover(album: { cover_big?: string; cover_xl?: string }): string | null {
		return album.cover_xl ?? album.cover_big ?? null
	}

	async search(query: string): Promise<SearchResult[]> {
		const params = new URLSearchParams({ q: query, limit: '20' })
		const resp = await requestUrl({ url: `${DeezerProvider.SEARCH}?${params.toString()}`, throw: false })
		if (resp.status !== 200) return []
		const data = resp.json as DeezerSearchResponse
		return (data.data ?? []).map((a) => ({
			provider: this.id,
			sourceId: String(a.id),
			title: a.title,
			year: null,
			cover: this.cover(a),
			subtitle: a.artist?.name ?? null,
			raw: a
		}))
	}

	async fetch(sourceId: string): Promise<NormalizedMetadata | null> {
		const resp = await requestUrl({ url: `${DeezerProvider.ALBUM}${sourceId}`, throw: false })
		if (resp.status !== 200) return null
		const album = resp.json as DeezerAlbumFull

		const genres = (album.genres?.data ?? []).map((g) => g.name).filter((n): n is string => Boolean(n))
		const fields: Record<string, unknown> = {
			Name: album.title,
			Year: this.year(album.release_date),
			Creator: album.artist?.name ? [album.artist.name] : [],
			Genre: genres,
			Cover: this.cover(album)
		}
		if (album.link) fields['URL'] = album.link

		return { fields, progressTotal: album.nb_tracks && album.nb_tracks > 0 ? album.nb_tracks : 1, imdbId: null }
	}
}
