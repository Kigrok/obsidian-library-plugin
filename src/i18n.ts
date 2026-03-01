import { getLanguage } from 'obsidian'
import { localeMap, I18N, type SupportedLocale } from './constants'

export function tr(key: string, vars?: Record<string, string | number>): string {
	const language: string = getLanguage().toLowerCase()
	const locale: SupportedLocale = (Object.keys(localeMap).find(lang =>
		language.startsWith(lang)
	) ?? 'en') as SupportedLocale
	const template: string = I18N[locale]?.[key] ?? I18N.en[key] ?? key
	if (!vars) return template
	return template.replace(/\{(\w+)\}/g, (_, name: string) =>
		vars[name] !== undefined ? String(vars[name]) : ''
	)
}
