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
	{ key: 'fact.elephant', icon: 'baby', kind: 'share', minutes: 660 * DAY },
	// A resting heart, about 70 beats a minute: the count is thousands of beats.
	{ key: 'fact.heart', icon: 'heart-pulse', kind: 'times', minutes: 1000 / 70 },
	// Usain Bolt's 100 m world record, Berlin 2009: 9.58 seconds.
	{ key: 'fact.bolt', icon: 'zap', kind: 'times', minutes: 9.58 / 60 },
	// The ISS goes round the Earth in about 92 minutes.
	{ key: 'fact.iss', icon: 'satellite-dish', kind: 'times', minutes: 92 },
	// Kelvin Kiptum's marathon record, Chicago 2023: 2:00:35.
	{ key: 'fact.marathon', icon: 'timer', kind: 'times', minutes: 120 + 35 / 60 },
	// Titanic, theatrical cut: 194 minutes.
	{ key: 'fact.titanic', icon: 'anchor', kind: 'times', minutes: 194 },
	// Concorde, London to New York: about 3 hours 30 minutes.
	{ key: 'fact.concorde', icon: 'plane-takeoff', kind: 'times', minutes: 210 },
	// Sunlight to Neptune, 30 AU: about 4 hours 10 minutes.
	{ key: 'fact.neptune', icon: 'sun', kind: 'times', minutes: 250 },
	// Wagner's Ring cycle: four operas, about 15 hours of music.
	{ key: 'fact.wagner', icon: 'music', kind: 'times', minutes: 15 * HOUR },
	// The nine Skywalker saga films: 136 + 142 + 140 + 121 + 124 + 131 + 138 + 152 + 142 minutes.
	{ key: 'fact.starwars', icon: 'swords', kind: 'times', minutes: 1226 },
	// Voyager 1 at about 17 km/s, 61,200 km an hour: the count is millions of km.
	{ key: 'fact.voyager', icon: 'satellite', kind: 'times', minutes: (1e6 / 61200) * HOUR },
	// War and Peace: 587,287 words at 300 words a minute.
	{ key: 'fact.tolstoy', icon: 'book-open', kind: 'times', minutes: 587287 / 300 },
	// Friends, all ten seasons: 236 episodes of about 22 minutes.
	{ key: 'fact.friends', icon: 'sofa', kind: 'times', minutes: 236 * 22 },
	// The Rossiya train, Moscow to Vladivostok: about 7 days.
	{ key: 'fact.transsib', icon: 'train-front', kind: 'times', minutes: 7 * DAY },
	// The Moon goes round the Earth in 27.3 days.
	{ key: 'fact.moonOrbit', icon: 'moon-star', kind: 'times', minutes: 27.3 * DAY },
	// Mercury goes round the Sun in 88 days.
	{ key: 'fact.mercury', icon: 'orbit', kind: 'times', minutes: 88 * DAY },
	// A year on Mars: 687 Earth days.
	{ key: 'fact.mars', icon: 'globe', kind: 'share', minutes: 687 * DAY },
	// Magellan's expedition around the world, 1519 to 1522: three years.
	{ key: 'fact.magellan', icon: 'sailboat', kind: 'share', minutes: 3 * 365.25 * DAY },
	// Michelangelo painted the Sistine Chapel ceiling from 1508 to 1512.
	{ key: 'fact.sistine', icon: 'paintbrush', kind: 'share', minutes: 4 * 365.25 * DAY },
	// Periodical cicadas spend 17 years underground.
	{ key: 'fact.cicada', icon: 'leaf', kind: 'share', minutes: 17 * 365.25 * DAY },
	// Halley's Comet comes back about every 76 years.
	{ key: 'fact.halley', icon: 'sparkles', kind: 'share', minutes: 76 * 365.25 * DAY }
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
