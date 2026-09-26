import { getLanguage } from 'obsidian'
import { localeMap, I18N, type SupportedLocale } from './constants'

export function tr(key: string, vars?: Record<string, string | number>): string {
	const language: string = getLanguage().toLowerCase()
	// Match on language SUBTAGS, longest first, so 'zh-tw' resolves to the zh-TW block
	// (not zh) and 'kab' does not collapse into 'ka'. localeMap keys are compared
	// case-insensitively; a key matches only at a segment boundary (exact or 'key-...').
	const match: string | undefined = Object.keys(localeMap)
		.sort((a, b) => b.length - a.length)
		.find(lang => {
			const l = lang.toLowerCase()
			return language === l || language.startsWith(l + '-')
		})
	const locale: SupportedLocale = (match ? localeMap[match] : undefined) ?? 'en'
	const template: string = I18N[locale]?.[key] ?? I18N.en[key] ?? key
	if (!vars) return template
	return template.replace(/\{(\w+)\}/g, (_, name: string) =>
		vars[name] !== undefined ? String(vars[name]) : ''
	)
}

// Typed here: Intl.PluralRules is ES2018 in the typings, though every
// Obsidian runtime has it.
interface PluralRulesApi {
	select(count: number): string
	resolvedOptions(): { pluralCategories: string[] }
}

// `<key>1` is the singular, `<key>2` the plural, `<key>5` the "many" plural
// Slavic and Baltic languages add — chosen by the language's own rules, so 21
// is singular in Russian but not in English. A `{count}` in the text is filled.
export function trCount(key: string, count: number): string {
	let category = count === 1 ? 'one' : 'other'
	let hasFew = false
	try {
		const PluralRules = (Intl as unknown as { PluralRules: new (locale: string) => PluralRulesApi }).PluralRules
		const rules = new PluralRules(getLanguage())
		category = rules.select(count)
		hasFew = rules.resolvedOptions().pluralCategories.indexOf('few') >= 0
	} catch {
		// An unknown language tag keeps the English rule set above.
	}
	const vars = { count }
	if (category === 'one') return tr(key + '1', vars)
	if (category === 'two' || category === 'few') return tr(key + '2', vars)
	if (category === 'many' || category === 'zero') return tr(key + '5', vars)
	// Where "few" exists, "other" is the genitive plural (5 děl, 10 kūrinių).
	return tr(key + (hasFew ? '5' : '2'), vars)
}

// A number in the reader's grouping and decimal mark (12 345, 12,345, 0,9),
// in the same Latin digits as every other number the plugin prints.
export function formatNumber(value: number, options?: Intl.NumberFormatOptions): string {
	try {
		return value.toLocaleString(getLanguage() + '-u-nu-latn', options)
	} catch {
		return String(value)
	}
}
