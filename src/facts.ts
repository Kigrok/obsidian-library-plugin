// The watch-time total put in other terms, one comparison a day: "Apollo 11
// could have flown to the Moon and back 8 times". The figures are rounded
// public numbers, noted beside each one.

import { formatNumber, tr, trCount } from './i18n'

// 'times' counts whole repeats; 'share' is the part of a record reached so far.
export type ComparisonKind = 'times' | 'share'

export interface WatchComparison {
	// tr key of the sentence; a 'times' key has the trCount forms <key>1/2/5.
	key: string
	icon: string
	kind: ComparisonKind
	// The total divided by the duration.
	value: number
}

const HOUR = 60
const DAY = 24 * HOUR

const COMPARISONS: { key: string; icon: string; kind: ComparisonKind; minutes: number }[] = [
	// Vostok 1, 12 April 1961: one orbit.
	{ key: 'fact.gagarin', icon: 'rocket', kind: 'times', minutes: 108 },
	// Mir, 1994–95: 437 days 18 hours, the longest single spaceflight.
	{ key: 'fact.polyakov', icon: 'satellite', kind: 'share', minutes: 437.75 * DAY },
	// Apollo 11, launch to splashdown: 8 days 3 hours 18 minutes.
	{ key: 'fact.moon', icon: 'moon', kind: 'times', minutes: 8 * DAY + 3 * HOUR + 18 },
	// Theatrical cuts: 178 + 179 + 201 minutes.
	{ key: 'fact.lotr', icon: 'clapperboard', kind: 'times', minutes: 558 },
	// Birth to first litter: about ten weeks.
	{ key: 'fact.mice', icon: 'rat', kind: 'times', minutes: 70 * DAY },
	// Egg to adult in warm weather: about ten days.
	{ key: 'fact.mosquitoes', icon: 'bug', kind: 'times', minutes: 10 * DAY }
]

// A comparison is shown once it says something: one whole repeat, 1% of the record.
const THRESHOLD: Record<ComparisonKind, number> = { times: 1, share: 0.01 }

export function watchComparisons(minutes: number): WatchComparison[] {
	return COMPARISONS
		.map(c => ({ key: c.key, icon: c.icon, kind: c.kind, value: minutes / c.minutes }))
		.filter(c => c.value >= THRESHOLD[c.kind])
}

// The comparisons take turns by the local day number, so the one shown stays
// put through the day and the next one comes at midnight.
export function comparisonOfTheDay(minutes: number, now: Date = new Date()): WatchComparison | null {
	const shown = watchComparisons(minutes)
	if (shown.length === 0) return null
	const day = Math.floor((now.getTime() - now.getTimezoneOffset() * 60000) / (DAY * 60000))
	return shown[day % shown.length] ?? null
}

// "Gagarin could have orbited the Earth 873 times", "That's 15% of the 437 days…".
export function comparisonText(comparison: WatchComparison): string {
	if (comparison.kind === 'share') {
		const percent = formatNumber(comparison.value, { style: 'percent', maximumFractionDigits: 0 })
		return tr(comparison.key, { percent })
	}
	return trCount(comparison.key, Math.floor(comparison.value))
}
