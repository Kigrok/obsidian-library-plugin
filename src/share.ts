import { App, requestUrl, TFile } from 'obsidian'
import { sanitizeFilename, toStr } from './util'

const W = 1200
const H = 630
const PAD = 48
const POSTER_W = 340
const POSTER_H = 510
const PLUGIN_URL = 'https://community.obsidian.md/plugins/library'

type Frontmatter = Record<string, unknown>

async function loadCoverBytes(app: App, rawCover: unknown): Promise<ArrayBuffer | null> {
	const s = toStr(rawCover).trim()
	if (!s) return null
	if (/^https?:\/\//i.test(s)) {
		const resp = await requestUrl({ url: s, throw: false })
		return resp.status === 200 ? resp.arrayBuffer : null
	}
	const match = s.match(/\[\[([^\]|]+)/)
	const path = (match?.[1] ?? s).replace(/^!?\[\[|\]\]$/g, '').trim()
	const file = app.metadataCache.getFirstLinkpathDest(path, '')
	if (file) return app.vault.readBinary(file)
	return null
}

function loadImage(bytes: ArrayBuffer): Promise<HTMLImageElement | null> {
	return new Promise((resolve) => {
		const url = URL.createObjectURL(new Blob([bytes]))
		const img = new Image()
		img.onload = (): void => {
			URL.revokeObjectURL(url)
			resolve(img)
		}
		img.onerror = (): void => {
			URL.revokeObjectURL(url)
			resolve(null)
		}
		img.src = url
	})
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number): void {
	ctx.beginPath()
	ctx.moveTo(x + r, y)
	ctx.arcTo(x + w, y, x + w, y + h, r)
	ctx.arcTo(x + w, y + h, x, y + h, r)
	ctx.arcTo(x, y + h, x, y, r)
	ctx.arcTo(x, y, x + w, y, r)
	ctx.closePath()
}

function wrap(ctx: CanvasRenderingContext2D, text: string, maxWidth: number, maxLines: number): string[] {
	const words = text.split(/\s+/).filter(Boolean)
	const lines: string[] = []
	let line = ''
	let dropped = false
	for (const word of words) {
		const test = line ? `${line} ${word}` : word
		if (ctx.measureText(test).width > maxWidth && line) {
			if (lines.length === maxLines - 1) { dropped = true; break }
			lines.push(line)
			line = word
		} else {
			line = test
		}
	}
	if (line) lines.push(line)
	// Ellipsize the last line if words were dropped or it (a single long word) overflows.
	const i = lines.length - 1
	if (i >= 0) {
		let last = lines[i] ?? ''
		if (dropped || ctx.measureText(last).width > maxWidth) {
			while (last && ctx.measureText(last + '…').width > maxWidth) last = last.slice(0, -1)
			lines[i] = last + '…'
		}
	}
	return lines
}

export interface ShareText {
	text: string
	url: string
	redditTitle: string
}

export function buildShareText(fm: Frontmatter, name: string): ShareText {
	const year = fm.Year ? ` (${toStr(fm.Year)})` : ''
	const ratingRaw = fm['My Rating'] ?? fm.Rating
	const rating = ratingRaw ? toStr(ratingRaw).trim() : ''
	const ratingPart = rating ? ` — my rating ${rating}/10` : ''
	const url = toStr(fm.URL).trim()
	const headline = `${name}${year}${ratingPart}`
	const text = `${headline}\n\nTracked with Library for Obsidian\n${PLUGIN_URL}`
	return { text, url, redditTitle: headline }
}

export function shareIntent(network: string, share: ShareText): string {
	const enc = encodeURIComponent
	const text = share.url ? `${share.text}\n${share.url}` : share.text
	switch (network) {
		case 'x':
			return `https://twitter.com/intent/tweet?text=${enc(text)}`
		case 'telegram':
			return share.url
				? `https://t.me/share/url?url=${enc(share.url)}&text=${enc(share.text)}`
				: `https://t.me/share/url?url=${enc(share.text)}`
		case 'reddit':
			return share.url
				? `https://www.reddit.com/submit?url=${enc(share.url)}&title=${enc(share.redditTitle)}`
				: `https://www.reddit.com/submit?title=${enc(share.redditTitle)}`
		case 'whatsapp':
			return `https://wa.me/?text=${enc(text)}`
		case 'facebook':
			// Facebook's sharer only accepts a URL; it ignores prefilled text.
			return `https://www.facebook.com/sharer/sharer.php?u=${enc(share.url || share.text)}`
		case 'linkedin':
			return `https://www.linkedin.com/sharing/share-offsite/?url=${enc(share.url || share.text)}`
		case 'vk':
			return share.url
				? `https://vk.com/share.php?url=${enc(share.url)}&title=${enc(share.redditTitle)}`
				: `https://vk.com/share.php?url=${enc(share.text)}`
		case 'bluesky':
			return `https://bsky.app/intent/compose?text=${enc(text)}`
		case 'pinterest':
			return `https://www.pinterest.com/pin/create/button/?url=${enc(share.url || share.text)}&description=${enc(share.redditTitle)}`
		default:
			return ''
	}
}

// Render a shareable landscape card (poster + title + rating) to a PNG blob.
export async function renderShareCard(app: App, fm: Frontmatter, name: string): Promise<Blob | null> {
	const canvas = createEl('canvas')
	canvas.width = W
	canvas.height = H
	const ctx = canvas.getContext('2d')
	if (!ctx) return null

	ctx.fillStyle = '#16161c'
	ctx.fillRect(0, 0, W, H)
	ctx.fillStyle = '#7c6cff'
	ctx.fillRect(0, 0, 8, H)

	const posterX = PAD
	const posterY = (H - POSTER_H) / 2
	const coverBytes = await loadCoverBytes(app, fm.Cover ?? fm.Image ?? fm.Baner)
	const img = coverBytes ? await loadImage(coverBytes) : null
	roundRect(ctx, posterX, posterY, POSTER_W, POSTER_H, 16)
	ctx.save()
	ctx.clip()
	if (img && img.width > 0 && img.height > 0) {
		const scale = Math.max(POSTER_W / img.width, POSTER_H / img.height)
		const dw = img.width * scale
		const dh = img.height * scale
		ctx.drawImage(img, posterX + (POSTER_W - dw) / 2, posterY + (POSTER_H - dh) / 2, dw, dh)
	} else {
		ctx.fillStyle = '#24242e'
		ctx.fillRect(posterX, posterY, POSTER_W, POSTER_H)
		ctx.fillStyle = '#5a5a6e'
		ctx.font = '140px sans-serif'
		ctx.textAlign = 'center'
		const type = toStr(fm.Type).toLowerCase()
		const glyph = type === 'book' ? '📖'
			: type === 'game' ? '🎮'
			: type === 'music' ? '🎵'
			: type === 'anime' ? '🎌'
			: type === 'comic' ? '📚'
			: '🎬'
		ctx.fillText(glyph, posterX + POSTER_W / 2, posterY + POSTER_H / 2 + 50)
	}
	ctx.restore()

	const colX = posterX + POSTER_W + PAD
	const colW = W - colX - PAD
	ctx.textAlign = 'left'
	ctx.textBaseline = 'alphabetic'

	ctx.fillStyle = '#f2f2f5'
	ctx.font = 'bold 58px sans-serif'
	const titleLines = wrap(ctx, name, colW, 2)
	let y = posterY + 70
	for (const line of titleLines) {
		ctx.fillText(line, colX, y)
		y += 70
	}

	const meta: string[] = []
	if (fm.Year) meta.push(toStr(fm.Year))
	const genre = toStr(fm.Genre).trim()
	if (genre) meta.push(genre.split(',').slice(0, 3).map((g) => g.trim()).join(' · '))
	if (meta.length > 0) {
		ctx.fillStyle = '#a0a0b0'
		ctx.font = '30px sans-serif'
		y += 14
		wrap(ctx, meta.join('  ·  '), colW, 1).forEach((l) => {
			ctx.fillText(l, colX, y)
			y += 40
		})
	}

	const creator = toStr(fm.Creator ?? fm.Director ?? fm.Author ?? fm.Artist).trim()
	if (creator) {
		ctx.fillStyle = '#8a8a9a'
		ctx.font = '28px sans-serif'
		y += 8
		wrap(ctx, creator, colW, 1).forEach((l) => {
			ctx.fillText(l, colX, y)
			y += 40
		})
	}

	const ext: string[] = []
	const imdb = toStr(fm['Rating IMDB']).trim()
	if (imdb) ext.push(`IMDb ${imdb}`)
	const anilist = toStr(fm['Rating AniList']).trim()
	if (anilist) ext.push(`AniList ${anilist}`)
	if (ext.length > 0) {
		ctx.fillStyle = '#7a7a8a'
		ctx.font = '24px sans-serif'
		y += 12
		ctx.fillText(ext.join('   ·   '), colX, y + 12)
		y += 36
	}

	const ratingRaw = fm['My Rating'] ?? fm.Rating
	const rating = ratingRaw ? toStr(ratingRaw).trim() : ''
	if (rating) {
		const pillY = posterY + POSTER_H - 96
		ctx.fillStyle = '#7c6cff'
		roundRect(ctx, colX, pillY, 260, 84, 42)
		ctx.fill()
		ctx.fillStyle = '#ffffff'
		ctx.font = 'bold 46px sans-serif'
		ctx.textBaseline = 'middle'
		ctx.fillText(`★ ${rating} / 10`, colX + 28, pillY + 44)
		ctx.textBaseline = 'alphabetic'
	}

	ctx.fillStyle = '#5a5a6e'
	ctx.font = '24px sans-serif'
	ctx.textAlign = 'right'
	ctx.fillText('Tracked with Library for Obsidian', W - PAD, H - 32)

	return new Promise((resolve) => {
		canvas.toBlob((blob) => resolve(blob), 'image/png')
	})
}

// Copy a PNG blob to the system clipboard. Returns false if unsupported.
export async function copyImageToClipboard(blob: Blob): Promise<boolean> {
	const clip = navigator.clipboard
	if (!clip || typeof ClipboardItem === 'undefined' || typeof clip.write !== 'function') {
		return false
	}
	try {
		await clip.write([new ClipboardItem({ 'image/png': blob })])
		return true
	} catch {
		return false
	}
}

export async function copyTextToClipboard(text: string): Promise<boolean> {
	const clip = navigator.clipboard
	if (!clip || typeof clip.writeText !== 'function') return false
	try {
		await clip.writeText(text)
		return true
	} catch {
		return false
	}
}

// Save a PNG blob into the vault's attachment folder. Returns the created file.
export async function saveImageToVault(app: App, blob: Blob, baseName: string): Promise<TFile> {
	const bytes = await blob.arrayBuffer()
	const safe = sanitizeFilename(baseName) || 'card'
	const path = await app.fileManager.getAvailablePathForAttachment(`${safe} share.png`)
	return app.vault.createBinary(path, bytes)
}

export function canNativeShare(): boolean {
	return typeof (navigator as Navigator & { share?: unknown }).share === 'function'
}

type ShareStatus = 'shared' | 'unsupported' | 'failed'

// Share the rendered card via the OS share sheet (Web Share API). The image file
// is attached directly where the platform supports it (mobile); otherwise falls
// back to text + link, and reports 'unsupported' if the API is missing (desktop).
export async function nativeShare(blob: Blob, share: ShareText, baseName: string): Promise<ShareStatus> {
	const nav = navigator as Navigator & {
		canShare?: (data: { files?: File[] }) => boolean
		share?: (data: { files?: File[]; text?: string; url?: string; title?: string }) => Promise<void>
	}
	if (typeof nav.share !== 'function') return 'unsupported'
	const text = share.url ? `${share.text}\n${share.url}` : share.text
	const safe = sanitizeFilename(baseName) || 'card'
	try {
		if (typeof File === 'function' && typeof nav.canShare === 'function') {
			const file = new File([blob], `${safe}.png`, { type: 'image/png' })
			if (nav.canShare({ files: [file] })) {
				await nav.share({ files: [file], text, title: share.redditTitle })
				return 'shared'
			}
		}
		await nav.share({ text, url: share.url || undefined, title: share.redditTitle })
		return 'shared'
	} catch (e) {
		// AbortError = user dismissed the sheet; treat as handled.
		if (e instanceof DOMException && e.name === 'AbortError') return 'shared'
		return 'failed'
	}
}
