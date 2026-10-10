import { I18N, type ICategory, type ILibrarySettings } from './constants'
import { tr } from './i18n'
import type { ContentType } from './providers/types'

// The Type value a new category of each medium writes into its notes.
export const TYPE_DEFAULTS: Record<string, string> = {
	movie: 'Movie',
	series: 'Series',
	book: 'Book',
	comic: 'Comic',
	game: 'Game',
	music: 'Music',
	anime: 'Anime',
	manual: 'Manual',
}

// The media a category can be made for, in the order the add picker lists them.
export const MEDIA: ContentType[] = ['movie', 'series', 'book', 'comic', 'game', 'music', 'anime', 'manual']

export function isDefaultTypeValue(value: string): boolean {
	return Object.values(TYPE_DEFAULTS).includes(value)
}

// A folder path as stored: no surrounding spaces or slashes; '' is the vault root.
export function cleanFolder(folder: string): string {
	return folder.trim().replace(/^\/+|\/+$/g, '')
}

export function joinFolder(parent: string, name: string): string {
	const root = cleanFolder(parent)
	const child = cleanFolder(name)
	if (!root) return child
	return child ? `${root}/${child}` : root
}

// True for the folder itself and everything below it; the vault root holds nothing here.
export function isInside(path: string, folder: string): boolean {
	return folder !== '' && (path === folder || path.startsWith(folder + '/'))
}

// The parent folder of a path, '' at the vault root.
export function parentFolder(path: string): string {
	const at = path.lastIndexOf('/')
	return at > 0 ? path.slice(0, at) : ''
}

// The folder a library of earlier versions already uses: the one parent that
// every category folder shares, or the default when they differ or are unset.
export function inferLibraryFolder(categories: ICategory[], fallback: string): string {
	const parents = new Set(categories.map(cat => cleanFolder(cat.folder)).filter(Boolean).map(parentFolder))
	const only = parents.size === 1 ? Array.from(parents)[0] : undefined
	return only ?? fallback
}

// A new category of a medium: named in the interface language, filed in an
// English folder inside the library folder, and given a Type value no other
// category uses, so no note shows up twice.
export function newCategory(contentType: ContentType, settings: ILibrarySettings): ICategory {
	const base = TYPE_DEFAULTS[contentType] ?? 'Movie'
	const taken = new Set(settings.categories.map(cat => cat.typeValue))
	let typeValue = base
	for (let n = 2; taken.has(typeValue); n++) typeValue = `${base} ${String(n)}`
	return {
		name: tr(`settings.default.${contentType}`),
		typeValue,
		contentType,
		folder: joinFolder(settings.libraryFolder, I18N.en[`settings.default.${contentType}`] ?? base),
	}
}

// A new category shows its top titles in the statistics right away, the way
// every category did before tops were chosen.
export function addCategoryTop(settings: ILibrarySettings, typeValue: string): void {
	const tops = settings.stats.tops
	if (!tops.some(top => top.kind === 'category' && top.key === typeValue)) tops.push({ kind: 'category', key: typeValue })
}
