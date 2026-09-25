import { App, normalizePath } from 'obsidian'
import { progressPattern, dmyDatePattern, type ICategory, type IStatsTop } from './constants'
import { tr } from './i18n'
import { normalizeSeasons } from './trailer'
import type { ContentType } from './providers/types'

export function toStr(val: unknown): string {
	if (typeof val === 'string') return val
	if (typeof val === 'number' || typeof val === 'boolean') return String(val)
	if (val == null) return ''
	if (Array.isArray(val)) return val.join(', ')
	return JSON.stringify(val)
}

export function parseProgress(val: unknown): number {
	if (typeof val === 'number') return val <= 1 ? Math.round(val * 100) : Math.round(val)
	const match = toStr(val).match(progressPattern)
	if (!match) return 0
	const current = Number(match[1])
	const total = Number(match[2])
	if (!Number.isFinite(current) || !Number.isFinite(total) || total <= 0) return 0
	return Math.round((current / total) * 100)
}

export function parseWatched(val: unknown): number {
	const match = toStr(val).match(/^(\d+)\s*\//)
	return match ? Number(match[1]) : 0
}

export function parseDate(val: unknown): number {
	if (!val) return 0
	const raw = toStr(val)
	const dmyMatch = raw.match(dmyDatePattern)
	if (dmyMatch) {
		return new Date(Number(dmyMatch[3]), Number(dmyMatch[2]) - 1, Number(dmyMatch[1])).getTime()
	}
	const timestamp = new Date(raw).getTime()
	return Number.isNaN(timestamp) ? 0 : timestamp
}

export function todayDmy(): string {
	const now = new Date()
	const dd = ('0' + now.getDate()).slice(-2)
	const mm = ('0' + (now.getMonth() + 1)).slice(-2)
	return `${dd}.${mm}.${now.getFullYear()}`
}

// Most file systems cap one name at 255 bytes, and a Cyrillic or CJK title
// takes two or three bytes per character; the rest is headroom for " (2).md".
const MAX_FILENAME_BYTES = 200

function truncateBytes(value: string, max: number): string {
	const encoder = new TextEncoder()
	let out = ''
	let bytes = 0
	for (const char of value) {
		bytes += encoder.encode(char).length
		if (bytes > max) break
		out += char
	}
	return out
}

// A leading dot would hide the note from Obsidian (".hack//Sign"), and
// trailing dots or spaces are invalid on Windows.
export function sanitizeFilename(name: string): string {
	const cleaned = name.replace(/[\\/:*?"<>|#^[\]]/g, '').replace(/\s+/g, ' ').trim()
	const trimmed = truncateBytes(cleaned.replace(/^\.+/, ''), MAX_FILENAME_BYTES)
	return trimmed.replace(/[. ]+$/, '').trim() || 'Untitled'
}

// Frontmatter is user data: only web links may become clickable or loadable,
// never `javascript:` or another scheme that would run inside the app.
export function safeUrl(value: unknown): string | null {
	const url = toStr(value).trim()
	return /^https?:\/\/\S/i.test(url) ? url : null
}

export function isTemplateFile(path: string): boolean {
	const segments = path.split('/')
	const folders = segments.slice(0, -1)
	if (folders.some(f => f.startsWith('_') || f.toLowerCase() === 'templates')) return true
	const base = segments[segments.length - 1] ?? ''
	return base.startsWith('_')
}

export function isEmptyValue(val: unknown): boolean {
	return val == null || val === '' || (Array.isArray(val) && val.length === 0)
}

// Properties that never make a top: unique per note, measurements, or the
// plugin's own bookkeeping. Compared in lower case.
const UNRANKED = new Set([
	'name', 'url', 'cover', 'image', 'baner', 'gallery', 'trailer', 'seasons', 'source', 'source id',
	'date', 'progress', 'related', 'type', 'isbn', 'aliases', 'cssclasses', 'runtime', 'season',
	'end year', 'complete', 'my rating', 'rating', 'rating imdb', 'rating rt', 'rating rawg', 'rating mc',
	'rating anilist'
])

// The properties a set of notes uses that can be ranked — once each, since
// "genre" and "Genre" are the same property to the reader.
export function rankableProperties(frontmatters: Record<string, unknown>[], coverProperty: string): string[] {
	const found = new Map<string, string>()
	for (const fm of frontmatters) {
		for (const key of Object.keys(fm)) {
			const lower = key.trim().toLowerCase()
			if (!lower || UNRANKED.has(lower) || lower === coverProperty.trim().toLowerCase()) continue
			if (!found.has(lower)) found.set(lower, key.trim())
		}
	}
	return [...found.values()].sort((a, b) => a.localeCompare(b))
}

// Every value a note holds under a property, whatever the key's case.
export function propertyValues(fm: Record<string, unknown>, property: string): string[] {
	const lower = property.toLowerCase()
	const values: string[] = []
	for (const [key, value] of Object.entries(fm)) {
		if (key.trim().toLowerCase() !== lower) continue
		// A number is a value too: "Top: Year" counts 2014 like any genre.
		const list = typeof value === 'number' && Number.isFinite(value) ? [String(value)] : toStrArray(value)
		values.push(...list.map(linkLabel))
	}
	return values
}

// A medium's own word for its top: "Top movies" reads, "Top Movies" does not
// in a language that declines the name ("Топ фильмов", not "Топ Фильмы").
const MEDIUM_TOPS: Partial<Record<ContentType, string>> = {
	movie: 'stats.topOf.movie',
	series: 'stats.topOf.series',
	book: 'stats.topOf.book',
	comic: 'stats.topOf.comic',
	game: 'stats.topOf.game',
	music: 'stats.topOf.music',
	anime: 'stats.topOf.anime'
}

// A statistics column's heading: "Top genres", "Top movies", or "Top: Author"
// for anything without a word of its own — another property, a manual
// category, or two categories of one medium that the word could not tell apart.
export function topLabel(top: IStatsTop, categories: ICategory[]): string {
	if (top.kind === 'property') {
		switch (top.key.toLowerCase()) {
			case 'genre': return tr('stats.topGenres')
			case 'creator': return tr('stats.topCreators')
			case 'cast': return tr('stats.topCast')
			default: return tr('stats.topNamed', { name: top.key })
		}
	}
	const category = categories.find(c => c.typeValue === top.key)
	if (!category) return tr('stats.topNamed', { name: top.key })
	const word = MEDIUM_TOPS[category.contentType]
	const shared = categories.filter(c => c.contentType === category.contentType).length > 1
	return word && !shared ? tr(word) : tr('stats.topNamed', { name: category.name || category.typeValue })
}

// OMDb returns "148 min"; TMDB returns a plain number of minutes.
export function runtimeMinutes(val: unknown): number | null {
	if (typeof val === 'number') {
		return Number.isFinite(val) && val > 0 ? Math.round(val) : null
	}
	const match = toStr(val).match(/(\d+)\s*min\b/i)
	return match ? Number(match[1]) : null
}

// OMDb carries junk per-episode runtimes for a few series ("1 min" on The
// Sandman); anything under the floor counts as missing so the value neither
// shadows the better source nor sticks in an existing note.
export const MIN_RUNTIME_MINUTES = 5

export function plausibleRuntime(val: unknown): number | null {
	const minutes = runtimeMinutes(val)
	return minutes !== null && minutes >= MIN_RUNTIME_MINUTES ? minutes : null
}

// Episode counts live in two places: the Progress denominator the user keeps up
// to date, and the season list the enrichment writes. Progress wins.
function progressEpisodes(fm: Record<string, unknown>): { watched: number; total: number } {
	const match = toStr(fm.Progress).match(progressPattern)
	if (match) return { watched: Number(match[1]), total: Number(match[2]) }
	let total = 0
	for (const season of normalizeSeasons(fm.Seasons)) {
		if (season.episodes) total += season.episodes
	}
	return { watched: 0, total }
}

function isComplete(fm: Record<string, unknown>): boolean {
	return fm.Complete === true || toStr(fm.Complete) === 'true'
}

// A series keeps the length of one episode in `Runtime`; the note shows the
// whole run. A movie's Progress is 1/1, so it falls through unchanged.
export function totalRuntimeMinutes(fm: Record<string, unknown>, perEpisode: number): number {
	if (perEpisode <= 0) return 0
	const { total } = progressEpisodes(fm)
	return total > 1 ? perEpisode * total : perEpisode
}

// The time actually spent: watched episodes at the per-episode length, the
// whole run once the note is marked complete. 0 when the length is unknown.
export function watchedRuntimeMinutes(fm: Record<string, unknown>): number {
	const perEpisode = runtimeMinutes(fm.Runtime)
	if (perEpisode === null) return 0
	const { watched, total } = progressEpisodes(fm)
	if (isComplete(fm)) return perEpisode * (total > 0 ? total : 1)
	return perEpisode * watched
}

// Minutes alone stop reading once a whole series run is summed up: 2907 becomes
// 48 h 27 min. Whole hours drop the minutes part, anything under an hour stays.
export function runtimeParts(totalMinutes: number): string[] {
	const hours = Math.floor(totalMinutes / 60)
	const minutes = totalMinutes % 60
	const parts: string[] = []
	if (hours > 0) parts.push(tr('header.hours', { count: String(hours) }))
	if (minutes > 0 || hours === 0) parts.push(tr('header.minutes', { count: String(minutes) }))
	return parts
}

export function formatRuntime(totalMinutes: number): string {
	return runtimeParts(totalMinutes).join(' ')
}

export function toStrArray(val: unknown): string[] {
	if (Array.isArray(val)) return val.map(v => String(v).trim()).filter(Boolean)
	if (typeof val === 'string') return val.split(',').map(s => s.trim()).filter(Boolean)
	return []
}

// Sources title their hits their own way ("Dune (2021)", "Дюна"); compare
// loosely so a hand-made note can be matched against a search result.
export function sameTitle(a: string, b: string): boolean {
	const left = titleKey(a)
	return left !== '' && left === titleKey(b)
}

function titleKey(value: string): string {
	return value
		.toLowerCase()
		.replace(/\([^)]*\)|\[[^\]]*\]/g, ' ')
		.replace(/[^\p{L}\p{N}]+/gu, ' ')
		.trim()
}

// "[[Target|Alias]]" shows "Alias", "[[Target]]" shows "Target", plain text
// stays as is: Genre and Cast hold links, the header and statistics show names.
export function linkLabel(value: string): string {
	const match = value.match(/^\[\[([^\]|]*)(?:\|([^\]]*))?\]\]$/)
	if (!match) return value
	return (match[2] ?? match[1] ?? '').trim()
}

// A property as links, one per distinct entry: a plain name becomes
// "[[Name]]", a link someone already wrote (alias and all) is kept.
export function toLinks(value: unknown): string[] {
	const links: string[] = []
	for (const item of toStrArray(value)) {
		const target = /^\[\[[^\]]+\]\]$/.test(item) ? item : sanitizeLink(item)
		const link = target.startsWith('[[') ? target : `[[${target}]]`
		if (target && links.indexOf(link) < 0) links.push(link)
	}
	return links
}

// A link target is also a note name: a slash would turn "AC/DC" into a folder
// path, and the other characters are invalid in file names on Windows and mobile.
export function sanitizeLink(name: string): string {
	return name
		.replace(/[[\]|#^*"<>?:]/g, '')
		.replace(/[\\/]/g, '-')
		.replace(/\s+/g, ' ')
		.trim()
		.replace(/^\.+/, '')
}

export function inferContentType(typeValue: string): ContentType {
	switch (typeValue) {
		case 'Series': return 'series'
		case 'Book': return 'book'
		case 'Game': return 'game'
		case 'Music': return 'music'
		case 'Anime': return 'anime'
		case 'Comic': return 'comic'
		case 'Manual': return 'manual'
		default: return 'movie'
	}
}

// Reads the cover from the configured frontmatter property, falling back to the
// names used by earlier versions so notes keep rendering after a property rename.
export function coverValue(fm: Record<string, unknown>, property = 'Cover'): unknown {
	const keys = [property, 'Cover', 'Image', 'Baner']
	for (const key of keys) {
		if (!key) continue
		const value = fm[key]
		if (!isEmptyValue(value)) return value
	}
	return undefined
}

export function coverSrc(app: App, raw: unknown): string | null {
	const value = toStr(raw).trim()
	if (!value) return null
	if (/^https?:\/\//i.test(value)) return value
	// A vault image is a plain path or an internal link the properties panel
	// writes ("[[poster.jpg]]", "![[poster.jpg|300]]").
	const link = value.match(/^!?\[\[([^\]|#]+)/)
	const path = (link?.[1] ?? value).trim()
	if (!path) return null
	const file = app.vault.getFileByPath(normalizePath(path))
		?? app.metadataCache.getFirstLinkpathDest(path, '')
	return file ? app.vault.getResourcePath(file) : null
}
