// Seasons and episodes of a series or anime note, with what the user has
// watched and rated. All of it lives in the `Seasons` frontmatter list:
//
//   Seasons:
//     - name: Season 1
//       episodes: 8              # the episode count (from the source)
//       rating: 8.1              # the source's season rating
//       trailer: https://…
//       my_rating: 9             # the user's season rating, when no episode is rated
//       episode_list:
//         - title: Chapter One   # from the source, when it has titles
//           watched: true
//           my_rating: 8
//
// Until the user ticks anything, the first N episodes count as watched, N
// being the Progress numerator, so notes from earlier versions keep their
// progress. The first tick writes every episode's state out.
//
// A book keeps its chapters the same way, as one flat `Chapters` list of
// `{title, watched, my_rating}`; once a book has chapters its Progress counts
// chapters, not pages.
//
// No obsidian import: the logic is unit-tested on plain objects.

// series: `Seasons`; anime: `Seasons`, or one season from Progress;
// book: the flat `Chapters` list as a single season.
export type TrackKind = 'series' | 'anime' | 'book'

export interface EpisodeState {
	title: string
	watched: boolean
	rating: number | null
}

export interface SeasonState {
	name: string
	// The source's season rating.
	sourceRating: number | null
	trailer: string | null
	// The user's own season rating, used when no episode is rated.
	manualRating: number | null
	episodes: EpisodeState[]
	// Average of the rated episodes, else the manual rating.
	rating: number | null
	// Every episode ticked (and there is at least one).
	watched: boolean
	// Rated through its episodes, so the season rating is not typed by hand.
	ratedByEpisodes: boolean
}

export type EpisodeChange =
	| { season: number; episode?: number; watched: boolean }
	| { season: number; episode?: number; rating: number | null }

const PROGRESS = /^\s*(\d+)\s*\/\s*(\d+)\s*$/

function record(value: unknown): Record<string, unknown> | null {
	return value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : null
}

function text(value: unknown): string {
	if (typeof value === 'string') return value.trim()
	if (typeof value === 'number') return String(value)
	return ''
}

// A 0–10 score, or null for anything else (blank, 0, junk).
function score(value: unknown): number | null {
	const n = typeof value === 'number' ? value : Number(text(value))
	return Number.isFinite(n) && n > 0 ? Math.min(10, n) : null
}

function average(values: number[]): number | null {
	if (values.length === 0) return null
	return Math.round((values.reduce((a, b) => a + b, 0) / values.length) * 10) / 10
}

function progressOf(fm: Record<string, unknown>): { watched: number; total: number } {
	const match = text(fm.Progress).match(PROGRESS)
	return match ? { watched: Number(match[1]), total: Number(match[2]) } : { watched: 0, total: 0 }
}

function rawSeasons(fm: Record<string, unknown>, kind: TrackKind = 'series'): Record<string, unknown>[] {
	if (kind === 'book') {
		const chapters = Array.isArray(fm.Chapters) ? (fm.Chapters as unknown[]) : []
		return chapters.length > 0 ? [{ name: 'Chapters', episodes: chapters.length, episode_list: chapters }] : []
	}
	const list = Array.isArray(fm.Seasons) ? (fm.Seasons as unknown[]) : []
	const out: Record<string, unknown>[] = []
	for (const entry of list) {
		const row = record(entry)
		if (row) out.push(row)
	}
	return out
}

function rawEpisodes(season: Record<string, unknown>): Record<string, unknown>[] {
	const list = Array.isArray(season.episode_list) ? (season.episode_list as unknown[]) : []
	return list.map((entry) => record(entry) ?? {})
}

// The user has ticked episodes before: the ticks, not Progress, say what is watched.
function tracked(seasons: Record<string, unknown>[]): boolean {
	return seasons.some((season) => rawEpisodes(season).some((episode) => typeof episode.watched === 'boolean'))
}

function countOf(season: Record<string, unknown>): number {
	const n = Number(season.episodes)
	const count = Number.isFinite(n) && n > 0 ? Math.round(n) : 0
	return Math.max(count, rawEpisodes(season).length)
}

// The seasons to show. An anime note has no season list — one AniList entry
// is one season — so its Progress total stands in as a single season.
export function seasonsOf(fm: Record<string, unknown>, kind: TrackKind = 'series'): SeasonState[] {
	let seasons = rawSeasons(fm, kind)
	const progress = progressOf(fm)
	if (seasons.length === 0 && kind === 'anime' && progress.total > 0) seasons = [{ name: 'Season 1', episodes: progress.total }]
	const ticks = tracked(seasons)
	const complete = fm.Complete === true || text(fm.Complete) === 'true'
	// Untracked: the first `watched` episodes in order count as seen. A book
	// whose Progress still counts pages reads that share of its chapters.
	let remaining = complete ? Number.POSITIVE_INFINITY : progress.watched
	const count = seasons.reduce((sum, season) => sum + countOf(season), 0)
	if (kind === 'book' && !complete && progress.total > 0 && progress.total !== count) {
		remaining = Math.round((progress.watched / progress.total) * count)
	}

	const out: SeasonState[] = []
	seasons.forEach((season, index) => {
		const raw = rawEpisodes(season)
		const episodes: EpisodeState[] = []
		for (let i = 0; i < countOf(season); i++) {
			const entry = raw[i] ?? {}
			let watched: boolean
			if (ticks) watched = entry.watched === true
			else {
				watched = remaining > 0
				remaining -= 1
			}
			episodes.push({ title: text(entry.title), watched, rating: score(entry.my_rating) })
		}
		const rated = episodes.map((e) => e.rating).filter((r): r is number => r !== null)
		const manualRating = score(season.my_rating)
		const number = Number(season.season ?? season.number)
		out.push({
			name: text(season.name) || `Season ${String(Number.isFinite(number) && number > 0 ? number : index + 1)}`,
			sourceRating: score(season.rating),
			trailer: text(season.trailer) || null,
			manualRating,
			episodes,
			rating: rated.length > 0 ? average(rated) : manualRating,
			watched: episodes.length > 0 && episodes.every((e) => e.watched),
			ratedByEpisodes: rated.length > 0
		})
	})
	return out
}

// Writes the seasons back into the note: every episode's tick and rating,
// Progress and Complete from the ticks, My Rating from the seasons. Keys the
// plugin does not know stay as they are.
function writeBack(fm: Record<string, unknown>, states: SeasonState[], kind: TrackKind = 'series'): void {
	const raw = rawSeasons(fm, kind)
	const seasons = states.map((state, index) => {
		const season: Record<string, unknown> = { ...(raw[index] ?? { name: state.name, episodes: state.episodes.length }) }
		const oldEpisodes = rawEpisodes(season)
		season.episode_list = state.episodes.map((episode, i) => {
			const entry: Record<string, unknown> = { ...(oldEpisodes[i] ?? {}) }
			if (episode.title) entry.title = episode.title
			entry.watched = episode.watched
			if (episode.rating !== null) entry.my_rating = episode.rating
			else delete entry.my_rating
			return entry
		})
		season.episodes = state.episodes.length
		if (state.manualRating !== null) season.my_rating = state.manualRating
		else delete season.my_rating
		return season
	})
	if (kind === 'book') fm.Chapters = seasons[0]?.episode_list ?? []
	else fm.Seasons = seasons

	const episodes = states.reduce((all, season) => all.concat(season.episodes), [] as EpisodeState[])
	const total = episodes.length
	const watched = episodes.filter((e) => e.watched).length
	if (total > 0) {
		// A book's old total counted pages; its chapters are the whole now.
		const recorded = kind === 'book' ? total : Math.max(total, progressOf(fm).total)
		fm.Progress = `${String(watched)}/${String(recorded)}`
		fm.Complete = watched === total
	}
	const seasonRatings = states.map((s) => s.rating).filter((r): r is number => r !== null)
	if (seasonRatings.length > 0) fm['My Rating'] = average(seasonRatings)
}

function recompute(state: SeasonState): void {
	const rated = state.episodes.map((e) => e.rating).filter((r): r is number => r !== null)
	state.ratedByEpisodes = rated.length > 0
	state.rating = rated.length > 0 ? average(rated) : state.manualRating
	state.watched = state.episodes.length > 0 && state.episodes.every((e) => e.watched)
}

// A tick or a rating on a season or one of its episodes. A season tick ticks
// (or clears) all of its episodes.
export function applyEpisodeChange(fm: Record<string, unknown>, change: EpisodeChange, kind: TrackKind = 'series'): void {
	const states = seasonsOf(fm, kind)
	const season = states[change.season]
	if (!season) return
	const episode = change.episode === undefined ? null : season.episodes[change.episode]
	if (change.episode !== undefined && !episode) return
	if ('watched' in change) {
		if (episode) episode.watched = change.watched
		else for (const e of season.episodes) e.watched = change.watched
	} else if (episode) {
		episode.rating = score(change.rating)
	} else {
		season.manualRating = score(change.rating)
	}
	recompute(season)
	writeBack(fm, states, kind)
}

// Progress moved ahead from elsewhere (AniList pull, the Complete switch):
// tick the episodes up to it, never untick. Nothing to do while the note
// still counts watched episodes from Progress alone.
export function followProgress(fm: Record<string, unknown>, kind: TrackKind = 'series'): void {
	const seasons = rawSeasons(fm, kind)
	if (!tracked(seasons)) return
	const complete = fm.Complete === true || text(fm.Complete) === 'true'
	const states = seasonsOf(fm, kind)
	const episodes = states.reduce((all, season) => all.concat(season.episodes), [] as EpisodeState[])
	const target = complete ? episodes.length : progressOf(fm).watched
	let ticked = episodes.filter((e) => e.watched).length
	if (ticked >= target) return
	for (const episode of episodes) {
		if (ticked >= target) break
		if (!episode.watched) {
			episode.watched = true
			ticked += 1
		}
	}
	states.forEach(recompute)
	writeBack(fm, states, kind)
}

// A book gets its chapters: titles from a table of contents or typed by
// hand, or a plain count. The share of pages read so far carries over.
export function setChapters(fm: Record<string, unknown>, chapters: string[] | number): void {
	const titles = typeof chapters === 'number' ? Array.from({ length: Math.max(0, Math.floor(chapters)) }, () => '') : chapters
	if (titles.length === 0) return
	const progress = progressOf(fm)
	const complete = fm.Complete === true || text(fm.Complete) === 'true'
	const read = complete ? titles.length : progress.total > 0 ? Math.round((progress.watched / progress.total) * titles.length) : 0
	fm.Chapters = titles.map((title) => (title.trim() ? { title: title.trim() } : {}))
	const states = seasonsOf(fm, 'book')
	states.forEach((state) => state.episodes.forEach((episode, i) => { episode.watched = i < read }))
	states.forEach(recompute)
	writeBack(fm, states, 'book')
}

export function hasChapters(fm: Record<string, unknown>): boolean {
	return Array.isArray(fm.Chapters) && (fm.Chapters as unknown[]).length > 0
}

// A refresh brings the source's season list. New seasons and episodes (a
// running show) are added, titles fill in, and the user's ticks, ratings and
// hand-typed names stay.
export function mergeSeasons(existing: unknown, fetched: unknown): unknown[] {
	const old = Array.isArray(existing) ? (existing as unknown[]) : []
	const fresh = Array.isArray(fetched) ? (fetched as unknown[]) : []
	const out: unknown[] = []
	for (let i = 0; i < Math.max(old.length, fresh.length); i++) {
		const mine = record(old[i])
		const theirs = record(fresh[i])
		if (!mine || !theirs) {
			out.push(mine ?? theirs ?? old[i] ?? fresh[i])
			continue
		}
		const merged: Record<string, unknown> = { ...theirs, ...mine }
		for (const key of ['name', 'rating', 'trailer']) {
			if (text(mine[key]) === '' && theirs[key] !== undefined) merged[key] = theirs[key]
		}
		merged.episodes = Math.max(countOf(mine), countOf(theirs))
		const myEpisodes = rawEpisodes(mine)
		const theirEpisodes = rawEpisodes(theirs)
		if (myEpisodes.length > 0 || theirEpisodes.length > 0) {
			const list: Record<string, unknown>[] = []
			for (let e = 0; e < Math.max(myEpisodes.length, theirEpisodes.length); e++) {
				const entry: Record<string, unknown> = { ...(theirEpisodes[e] ?? {}), ...(myEpisodes[e] ?? {}) }
				if (text(myEpisodes[e]?.title) === '' && text(theirEpisodes[e]?.title) !== '') entry.title = theirEpisodes[e]?.title
				list.push(entry)
			}
			merged.episode_list = list
		}
		out.push(merged)
	}
	return out
}
