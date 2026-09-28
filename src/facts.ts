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
	{ key: 'fact.mosquitoes', icon: 'bug', kind: 'times', minutes: 10 * DAY },
	// Sunlight reaches the Earth in 8 minutes 20 seconds.
	{ key: 'fact.sunlight', icon: 'sun', kind: 'times', minutes: 8 + 20 / 60 },
	// Jupiter turns on its axis in 9 hours 56 minutes.
	{ key: 'fact.jupiter', icon: 'orbit', kind: 'times', minutes: 9 * HOUR + 56 },
	// The Earth moves along its orbit at 29.8 km/s, about 107,000 km an hour:
	// the count is millions of km.
	{ key: 'fact.earth', icon: 'earth', kind: 'times', minutes: (1e6 / 107000) * HOUR },
	// The eight Harry Potter films: 152 + 161 + 142 + 157 + 138 + 153 + 146 + 130 minutes.
	{ key: 'fact.potter', icon: 'wand', kind: 'times', minutes: 1179 },
	// An airliner cruising at 900 km/h around the Equator, 40,075 km: 44.5 hours.
	{ key: 'fact.plane', icon: 'plane', kind: 'times', minutes: (40075 / 900) * HOUR },
	// Venus turns once on its axis in 243 Earth days.
	{ key: 'fact.venus', icon: 'telescope', kind: 'share', minutes: 243 * DAY },
	// Jules Verne, Around the World in Eighty Days.
	{ key: 'fact.fogg', icon: 'ship', kind: 'share', minutes: 80 * DAY },
	// The Equator, 40,075 km, walked at 5 km/h.
	{ key: 'fact.equator', icon: 'footprints', kind: 'share', minutes: (40075 / 5) * HOUR },
	// An elephant's pregnancy: about 22 months.
	{ key: 'fact.elephant', icon: 'baby', kind: 'share', minutes: 660 * DAY }
]

// A comparison is shown while it says something: from one whole repeat, or
// from 1% of a record up to the whole of it ("104% of 80 days" says little).
export function watchComparisons(minutes: number): WatchComparison[] {
	return COMPARISONS
		.map(c => ({ key: c.key, icon: c.icon, kind: c.kind, value: minutes / c.minutes }))
		.filter(c => (c.kind === 'times' ? c.value >= 1 : c.value >= 0.01 && c.value < 1))
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
