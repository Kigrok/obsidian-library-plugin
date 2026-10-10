import { App, normalizePath } from 'obsidian'
import { progressPattern, dmyDatePattern, type ICategory, type IStatsTop } from './constants'
import { formatNumber, tr } from './i18n'
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

// An ISO date ("2025-08-01T22:01:09Z") as the plugin writes dates, in local time.
export function dmyOf(iso: string): string {
	const date = new Date(iso)
	if (Number.isNaN(date.getTime())) return ''
	const dd = ('0' + String(date.getDate())).slice(-2)
	const mm = ('0' + String(date.getMonth() + 1)).slice(-2)
	return `${dd}.${mm}.${String(date.getFullYear())}`
}

// A release date as the plugin writes dates, from "2020-11-17", Wikidata's
// "+2020-11-17T00:00:00Z" or Steam's "17 Nov, 2020"; '' when the value has no
// day in it ("2020", "Q4 2020", "Coming soon").
export function releasedDmy(value: string | null | undefined): string {
	const raw = (value ?? '').trim()
	const iso = raw.match(/^\+?(\d{4})-(\d{2})-(\d{2})/)
	if (iso) return iso[2] === '00' || iso[3] === '00' ? '' : `${iso[3] ?? ''}.${iso[2] ?? ''}.${iso[1] ?? ''}`
	if (!/\d{1,2}\D+\d{4}|[A-Za-z]{3,}\.? \d{1,2},? \d{4}/.test(raw)) return ''
	const time = Date.parse(raw)
	return Number.isNaN(time) ? '' : dmyOf(new Date(time).toISOString())
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
	if (top.kind === 'platform') return tr('stats.psn')
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

// How a medium keeps track of a title: series, anime and books by their
// progress alone, movies by the Complete switch alone (watched or not), every
// other medium by both, as before.
export type Tracking = 'progress' | 'watched' | 'both'

export function trackingOf(kind: ContentType | undefined): Tracking {
	if (kind === 'series' || kind === 'anime' || kind === 'book') return 'progress'
	return kind === 'movie' ? 'watched' : 'both'
}

// Done with a title. Series, anime and books are done once every episode,
// chapter or page counts as seen; a note without a total to count against
// keeps the Complete it had. Every other medium is done by its Complete switch.
export function isFinished(fm: Record<string, unknown>, kind?: ContentType): boolean {
	if (trackingOf(kind) !== 'progress') return isComplete(fm)
	const match = toStr(fm.Progress).match(progressPattern)
	const total = match ? Number(match[2]) : 0
	return total > 0 ? Number(match?.[1]) >= total : isComplete(fm)
}

// A title that will not grow: a series with an End Year, an anime that has
// finished airing or was cancelled, and any book.
export function hasEnded(fm: Record<string, unknown>, kind?: ContentType): boolean {
	if (kind === 'book' || toStr(fm['End Year']).trim()) return true
	return kind === 'anime' && /^(finished|cancelled)/i.test(toStr(fm.Status))
}

// The share of a title to show as progress, or null for none. Movies never
// show one. Series, anime and books hide it once a title that will not grow is
// done; a running series at 100% keeps it, more episodes may come. Every other
// medium hides it once Complete is on. Nothing done yet shows nothing.
export function shownProgress(fm: Record<string, unknown>, kind?: ContentType): number | null {
	const tracking = trackingOf(kind)
	if (tracking === 'watched') return null
	const percent = Math.min(100, parseProgress(fm.Progress))
	if (percent <= 0) return null
	if (tracking === 'both') return isComplete(fm) ? null : percent
	return isFinished(fm, kind) && hasEnded(fm, kind) ? null : percent
}

// Nothing of it done yet: not done, nothing watched, read or played, and
// no rating of one's own, since a rated title was seen whether ticked or not.
export function notStarted(fm: Record<string, unknown>, kind?: ContentType): boolean {
	if (isFinished(fm, kind) || parseWatched(fm.Progress) > 0) return false
	// A game with hours on the clock was played, trophies or not.
	if (Number(fm.Playtime) > 0) return false
	const rating = fm['My Rating'] ?? fm.Rating
	return rating === null || rating === undefined || toStr(rating).trim() === ''
}

// A series keeps the length of one episode in `Runtime`; the note shows the
// whole run. A movie has no Progress and an album keeps its whole length, so
// both stay as they are.
export function totalRuntimeMinutes(fm: Record<string, unknown>, perEpisode: number, kind?: ContentType): number {
	if (perEpisode <= 0) return 0
	const { total } = progressEpisodes(fm)
	return total > 1 && kind !== 'music' ? perEpisode * total : perEpisode
}

// The time actually spent: watched episodes at the per-episode length, the
// whole run once the title is done. 0 when the length is unknown.
export function watchedRuntimeMinutes(fm: Record<string, unknown>, kind?: ContentType): number {
	const perEpisode = runtimeMinutes(fm.Runtime)
	if (perEpisode === null) return 0
	const { watched, total } = progressEpisodes(fm)
	// An album's Runtime is the whole album: the share of tracks played counts.
	if (kind === 'music') {
		if (isFinished(fm, kind)) return perEpisode
		return total > 0 ? Math.round(perEpisode * Math.min(1, watched / total)) : 0
	}
	if (isFinished(fm, kind)) return perEpisode * (total > 0 ? total : 1)
	return perEpisode * watched
}

// The time a title took: a game's Playtime in hours, or the watched or
// listened runtime of everything else.
export function spentMinutes(fm: Record<string, unknown>, kind?: ContentType): number {
	if (kind === 'game') {
		const hours = Number(fm.Playtime)
		return Number.isFinite(hours) && hours > 0 ? Math.round(hours * 60) : 0
	}
	return watchedRuntimeMinutes(fm, kind)
}

// Time in the units a person would say it in, the larger two at most:
// 45 min, 5 h 20 min, 12 d 5 h, 4 mo 12 d, 2 y 3 mo. Unit names come from
// the platform in the reader's language, short form.
export function spentTime(totalMinutes: number): string {
	const minutes = Math.round(totalMinutes)
	const HOUR = 60
	const DAY = 24 * HOUR
	const MONTH = 30.44 * DAY
	const YEAR = 365.25 * DAY
	const unit = (count: number, name: string): string =>
		formatNumber(count, { style: 'unit', unit: name, unitDisplay: 'short' })
	const pair = (big: number, bigName: string, small: number, smallName: string): string =>
		small > 0 ? `${unit(big, bigName)} ${unit(small, smallName)}` : unit(big, bigName)
	if (minutes < HOUR) return unit(minutes, 'minute')
	if (minutes < DAY) return pair(Math.floor(minutes / HOUR), 'hour', minutes % HOUR, 'minute')
	if (minutes < 100 * DAY) return pair(Math.floor(minutes / DAY), 'day', Math.floor((minutes % DAY) / HOUR), 'hour')
	if (minutes < YEAR) return pair(Math.floor(minutes / MONTH), 'month', Math.floor((minutes % MONTH) / DAY), 'day')
	return pair(Math.floor(minutes / YEAR), 'year', Math.floor((minutes % YEAR) / MONTH), 'month')
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

// A search waits this long for each source; one that has not answered by
// then is left out, so a stalled server cannot hold back the others.
export const SEARCH_BUDGET_MS = 4000

export function within<T>(promise: Promise<T>, ms: number, fallback: T): Promise<T> {
	return new Promise((resolve) => {
		const timer = window.setTimeout(() => resolve(fallback), ms)
		promise.then(
			(value) => { window.clearTimeout(timer); resolve(value) },
			() => { window.clearTimeout(timer); resolve(fallback) }
		)
	})
}

// A game on one more platform: the platform joins Platforms (once), its own
// hours go to "Playtime <platform>" (Playtime PS5, Playtime Steam), and
// Playtime becomes the sum over every platform. Only an import adds a
// platform: a Steam store link alone says where the game is sold, not owned.
export function addPlatform(fm: Record<string, unknown>, platform: string, hours: number | null): void {
	const perPlatform = (): string[] => Object.keys(fm).filter(key => /^Playtime .+/.test(key))
	// A game's console is listed once: "PS5" makes a bare "PlayStation" (Sony
	// names no console for some entries) redundant; its hours still count.
	const isPlayStation = (value: string): boolean => /^ps\d/i.test(value)
	let platforms = toStrArray(fm.Platforms)
	if (isPlayStation(platform)) platforms = platforms.filter(value => value.toLowerCase() !== 'playstation')
	const covered = platform.toLowerCase() === 'playstation' && platforms.some(isPlayStation)
	if (!covered && !platforms.some(value => value.toLowerCase() === platform.toLowerCase())) platforms.push(platform)
	fm.Platforms = platforms
	if (hours !== null) fm[`Playtime ${platform}`] = hours
	const total = perPlatform().reduce((sum, key) => sum + (Number(fm[key]) || 0), 0)
	if (perPlatform().length > 0) fm.Playtime = Math.round(total * 10) / 10
}

// Takes one platform family off a game before an import writes it afresh:
// its Platforms entries and its hours. family: a test on a Platforms value.
export function dropPlatforms(fm: Record<string, unknown>, family: (platform: string) => boolean): void {
	fm.Platforms = toStrArray(fm.Platforms).filter(value => !family(value))
	for (const key of Object.keys(fm)) {
		const match = key.match(/^Playtime (.+)$/)
		if (match?.[1] && family(match[1])) delete fm[key]
	}
}

// The exact hours behind a converted time, for a tooltip: "1,578.5 hours".
export function exactHours(totalMinutes: number): string {
	return formatNumber(Math.round(totalMinutes / 6) / 10, { style: 'unit', unit: 'hour', unitDisplay: 'long', maximumFractionDigits: 1 })
}
