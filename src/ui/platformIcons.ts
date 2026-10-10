import { toStrArray } from '../util'

// Brand marks from Simple Icons (CC0-1.0), 24×24, drawn in the current colour.
const MARKS: Record<string, { label: string; path: string }> = {
	playstation: {
		label: 'PlayStation',
		path: 'M8.984 2.596v17.547l3.915 1.261V6.688c0-.69.304-1.151.794-.991.636.18.76.814.76 1.505v5.875c2.441 1.193 4.362-.002 4.362-3.152 0-3.237-1.126-4.675-4.438-5.827-1.307-.448-3.728-1.186-5.39-1.502zm4.656 16.241l6.296-2.275c.715-.258.826-.625.246-.818-.586-.192-1.637-.139-2.357.123l-4.205 1.5V14.98l.24-.085s1.201-.42 2.913-.615c1.696-.18 3.785.03 5.437.661 1.848.601 2.04 1.472 1.576 2.072-.465.6-1.622 1.036-1.622 1.036l-8.544 3.107V18.86zM1.807 18.6c-1.9-.545-2.214-1.668-1.352-2.32.801-.586 2.16-1.052 2.16-1.052l5.615-2.013v2.313L4.205 17c-.705.271-.825.632-.239.826.586.195 1.637.15 2.343-.12L8.247 17v2.074c-.12.03-.256.044-.39.073-1.939.331-3.996.196-6.038-.479z',
	},
	steam: {
		label: 'Steam',
		path: 'M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z',
	},
	xbox: {
		label: 'Xbox',
		path: 'M4.102 21.033C6.211 22.881 8.977 24 12 24c3.026 0 5.789-1.119 7.902-2.967 1.877-1.912-4.316-8.709-7.902-11.417-3.582 2.708-9.779 9.505-7.898 11.417zm11.16-14.406c2.5 2.961 7.484 10.313 6.076 12.912C23.002 17.48 24 14.861 24 12.004c0-3.34-1.365-6.362-3.57-8.536 0 0-.027-.022-.082-.042-.063-.022-.152-.045-.281-.045-.592 0-1.985.434-4.805 3.246zM3.654 3.426c-.057.02-.082.041-.086.042C1.365 5.642 0 8.664 0 12.004c0 2.854.998 5.473 2.661 7.533-1.401-2.605 3.579-9.951 6.08-12.91-2.82-2.813-4.216-3.245-4.806-3.245-.131 0-.223.021-.281.046v-.002zM12 3.551S9.055 1.828 6.755 1.746c-.903-.033-1.454.295-1.521.339C7.379.646 9.659 0 11.984 0H12c2.334 0 4.605.646 6.766 2.085-.068-.046-.615-.372-1.52-.339C14.946 1.828 12 3.545 12 3.545v.006z',
	},
	nintendo: {
		label: 'Nintendo Switch',
		path: 'M14.176 24h3.674c3.376 0 6.15-2.774 6.15-6.15V6.15C24 2.775 21.226 0 17.85 0H14.1c-.074 0-.15.074-.15.15v23.7c-.001.076.075.15.226.15zm4.574-13.199c1.351 0 2.399 1.125 2.399 2.398 0 1.352-1.125 2.4-2.399 2.4-1.35 0-2.4-1.049-2.4-2.4-.075-1.349 1.05-2.398 2.4-2.398zM11.4 0H6.15C2.775 0 0 2.775 0 6.15v11.7C0 21.226 2.775 24 6.15 24h5.25c.074 0 .15-.074.15-.149V.15c.001-.076-.075-.15-.15-.15zM9.676 22.051H6.15c-2.326 0-4.201-1.875-4.201-4.201V6.15c0-2.326 1.875-4.201 4.201-4.201H9.6l.076 20.102zM3.75 7.199c0 1.275.975 2.25 2.25 2.25s2.25-.975 2.25-2.25c0-1.273-.975-2.25-2.25-2.25s-2.25.977-2.25 2.25z',
	},
}

// A platform's brand mark as an icon, drawn in the current colour.
export function platformMark(family: string): SVGSVGElement {
	const svg = createSvg('svg', { attr: { viewBox: '0 0 24 24', 'aria-hidden': 'true' } })
	const mark = MARKS[family]
	if (mark) svg.createSvg('path', { attr: { d: mark.path, fill: 'currentColor' } })
	return svg
}

// The family a Platforms value belongs to: PS4 and PS5 are PlayStation, Xbox
// Series X is Xbox, Switch is Nintendo. Null for one without a mark.
export function platformFamily(value: string): string | null {
	const v = value.toLowerCase()
	if (/^ps\d|playstation|^psn/.test(v)) return 'playstation'
	if (v.includes('steam')) return 'steam'
	if (v.includes('xbox')) return 'xbox'
	if (v.includes('switch') || v.includes('nintendo')) return 'nintendo'
	return null
}

// A mark per platform the game is on, once per family, in the order listed.
export function renderPlatforms(parent: HTMLElement, fm: Record<string, unknown>, cls: string): void {
	const families: string[] = []
	for (const value of toStrArray(fm.Platforms)) {
		const family = platformFamily(value)
		if (family && families.indexOf(family) < 0) families.push(family)
	}
	if (families.length === 0) return
	const row = parent.createDiv({ cls: `library-platforms ${cls}` })
	for (const family of families) {
		const mark = MARKS[family]
		if (!mark) continue
		const badge = row.createSpan({ cls: 'library-platform', attr: { 'aria-label': mark.label } })
		badge.appendChild(platformMark(family))
	}
}

// The platforms written out the way stores label a game's versions: a small
// plate per platform, "PS5", "PS4", "Steam". Under a note's title.
export function renderPlatformLabels(parent: HTMLElement, fm: Record<string, unknown>): void {
	// The console is what the plate names; a bare "PlayStation" says nothing more
	// than the mark on the card.
	const platforms = toStrArray(fm.Platforms)
		.filter((value, i, all) => all.indexOf(value) === i && value.toLowerCase() !== 'playstation')
	if (platforms.length === 0) return
	const row = parent.createDiv({ cls: 'library-platform-labels' })
	for (const platform of platforms) {
		const family = platformFamily(platform) ?? 'other'
		row.createSpan({ cls: `library-platform-label is-${family}`, text: platform })
	}
}
