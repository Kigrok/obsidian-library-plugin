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
