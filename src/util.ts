import { App, normalizePath } from 'obsidian'
import { progressPattern, dmyDatePattern } from './constants'
import type { ContentType } from './providers/types'

export function toStr(val: unknown): string {
	if (typeof val === 'string') return val
	if (typeof val === 'number' || typeof val === 'boolean') return String(val)
	if (val == null) return ''
	if (Array.isArray(val)) return val.join(', ')
	return JSON.stringify(val)
}

export function parseProgress(val: unknown): number {
	if (typeof val === 'number') return val <= 1 ? Math.round(val * 100) : Math.round(val)
	const match = toStr(val).match(progressPattern)
	if (!match) return 0
	const current = Number(match[1])
	const total = Number(match[2])
	if (!Number.isFinite(current) || !Number.isFinite(total) || total <= 0) return 0
	return Math.round((current / total) * 100)
}

export function parseWatched(val: unknown): number {
	const match = toStr(val).match(/^(\d+)\s*\//)
	return match ? Number(match[1]) : 0
}

export function parseDate(val: unknown): number {
	if (!val) return 0
	const raw = toStr(val)
	const dmyMatch = raw.match(dmyDatePattern)
	if (dmyMatch) {
		return new Date(Number(dmyMatch[3]), Number(dmyMatch[2]) - 1, Number(dmyMatch[1])).getTime()
	}
	const timestamp = new Date(raw).getTime()
	return Number.isNaN(timestamp) ? 0 : timestamp
}

export function todayDmy(): string {
	const now = new Date()
	const dd = String(now.getDate()).padStart(2, '0')
	const mm = String(now.getMonth() + 1).padStart(2, '0')
	return `${dd}.${mm}.${String(now.getFullYear())}`
}

export function sanitizeFilename(name: string): string {
	const cleaned = name.replace(/[\\/:*?"<>|#^[\]]/g, '').replace(/\s+/g, ' ').trim()
	return cleaned || 'Untitled'
}

export function isTemplateFile(path: string): boolean {
	const segments = path.split('/')
	const folders = segments.slice(0, -1)
	if (folders.some(f => f.startsWith('_') || f.toLowerCase() === 'templates')) return true
	const base = segments[segments.length - 1] ?? ''
	return base.startsWith('_')
}

export function isEmptyValue(val: unknown): boolean {
	return val == null || val === '' || (Array.isArray(val) && val.length === 0)
}

export function toStrArray(val: unknown): string[] {
	if (Array.isArray(val)) return val.map(v => String(v).trim()).filter(Boolean)
	if (typeof val === 'string') return val.split(',').map(s => s.trim()).filter(Boolean)
	return []
}

export function sanitizeLink(name: string): string {
	return name.replace(/[[\]|#^]/g, '').trim()
}

export function inferContentType(typeValue: string): ContentType {
	switch (typeValue) {
		case 'Series': return 'series'
		case 'Book': return 'book'
		default: return 'movie'
	}
}

export function coverSrc(app: App, raw: unknown): string | null {
	const value = toStr(raw).trim()
	if (!value) return null
	if (value.startsWith('http')) return value
	const file = app.vault.getFileByPath(normalizePath(value))
	return file ? app.vault.getResourcePath(file) : null
}
