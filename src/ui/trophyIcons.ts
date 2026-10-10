import { formatNumber, tr } from '../i18n'

// The four trophy grades, best first, with the note property that keeps how
// many of each the user earned.
export const TROPHY_GRADES = [
	{ key: 'platinum', property: 'Platinum', color: '#9fc3e6', label: 'stats.psn.platinum' },
	{ key: 'gold', property: 'Gold', color: '#e3b23c', label: 'stats.psn.gold' },
	{ key: 'silver', property: 'Silver', color: '#b9c2cb', label: 'stats.psn.silver' },
	{ key: 'bronze', property: 'Bronze', color: '#c47a45', label: 'stats.psn.bronze' },
] as const

// A trophy cup drawn in the grade's colour: cup, handles, stem and base.
function trophyIcon(color: string): SVGSVGElement {
	const svg = createSvg('svg', { cls: 'library-trophy-icon', attr: { viewBox: '0 0 24 24', 'aria-hidden': 'true' } })
	svg.createSvg('path', { attr: { d: 'M6 3h12v5a6 6 0 0 1-12 0V3z', fill: color } })
	svg.createSvg('path', { attr: { d: 'M6 5H3.5v1.5A3.5 3.5 0 0 0 7 10M18 5h2.5v1.5A3.5 3.5 0 0 1 17 10', fill: 'none', stroke: color, 'stroke-width': '1.6' } })
	svg.createSvg('rect', { attr: { x: '10.5', y: '13.5', width: '3', height: '4', fill: color } })
	svg.createSvg('path', { attr: { d: 'M7 21h10v-1.5a1.5 1.5 0 0 0-1.5-1.5h-7A1.5 1.5 0 0 0 7 19.5V21z', fill: color } })
	svg.createSvg('path', { attr: { d: 'M9 5.5v2.5', stroke: '#ffffff', 'stroke-opacity': '0.5', 'stroke-width': '1.3', 'stroke-linecap': 'round', fill: 'none' } })
	return svg
}

// The trophies a note says the user earned, a cup and a count per grade;
// grades with none are left out. Nothing is drawn without a single trophy.
export function renderTrophies(parent: HTMLElement, fm: Record<string, unknown>, cls: string): void {
	const earned = TROPHY_GRADES
		.map(grade => ({ grade, count: Number(fm[grade.property]) }))
		.filter(item => Number.isFinite(item.count) && item.count > 0)
	if (earned.length === 0) return
	const row = parent.createDiv({ cls: `library-trophies ${cls}` })
	for (const { grade, count } of earned) {
		const item = row.createSpan({ cls: 'library-trophy', attr: { 'aria-label': `${tr(grade.label)}: ${formatNumber(count)}` } })
		item.appendChild(trophyIcon(grade.color))
		item.createSpan({ text: formatNumber(count) })
	}
}
