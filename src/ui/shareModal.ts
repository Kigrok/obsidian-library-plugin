import { App, Modal, Notice, Platform, TFile, setIcon } from 'obsidian'
import { tr } from '../i18n'
import { toStr } from '../util'
import {
	buildShareText,
	canNativeShare,
	copyImageToClipboard,
	copyTextToClipboard,
	nativeShare,
	renderShareCard,
	saveImageToVault,
	shareIntent,
	type ShareText
} from '../share'

interface Network {
	id: string
	label: string
	icon: string
}

const NETWORKS: Network[] = [
	{ id: 'x', label: 'X', icon: 'twitter' },
	{ id: 'telegram', label: 'Telegram', icon: 'send' },
	{ id: 'reddit', label: 'Reddit', icon: 'message-circle' },
	{ id: 'whatsapp', label: 'WhatsApp', icon: 'message-square' },
	{ id: 'facebook', label: 'Facebook', icon: 'facebook' },
	{ id: 'linkedin', label: 'LinkedIn', icon: 'linkedin' },
	{ id: 'vk', label: 'VK', icon: 'share-2' },
	{ id: 'bluesky', label: 'Bluesky', icon: 'cloud' },
	{ id: 'pinterest', label: 'Pinterest', icon: 'pin' }
]

export class ShareModal extends Modal {
	private fm: Record<string, unknown>
	private name: string
	private share: ShareText
	private blob: Blob | null = null
	private previewEl!: HTMLElement
	private previewUrl: string | null = null

	constructor(app: App, fm: Record<string, unknown>, name: string) {
		super(app)
		this.fm = fm
		this.name = name
		this.share = buildShareText(fm, name)
	}

	onOpen(): void {
		const { contentEl } = this
		this.setTitle(tr('share.title'))
		this.modalEl.addClass('library-share-modal')

		this.previewEl = contentEl.createDiv({ cls: 'library-share-preview' })
		this.previewEl.createDiv({ cls: 'library-share-loading', text: tr('share.rendering') })
		void this.renderPreview()

		const hasNative = canNativeShare()

		// Native share (mobile) attaches the image directly — the primary path where available.
		if (hasNative) {
			const nativeBtn = contentEl.createEl('button', { cls: 'mod-cta library-share-native', text: tr('share.native') })
			nativeBtn.addEventListener('click', () => { void this.doNativeShare() })
		}

		// On desktop the image can't be auto-attached to intent links, so explain the paste step.
		const hint = contentEl.createDiv({ cls: 'library-share-hint', text: tr('share.hint') })
		hint.toggle(!hasNative && !Platform.isMobile)

		const netRow = contentEl.createDiv({ cls: 'library-share-networks' })
		for (const net of NETWORKS) {
			const btn = netRow.createEl('button', { cls: 'library-share-btn', attr: { 'aria-label': net.label } })
			setIcon(btn.createSpan({ cls: 'library-share-btn-icon' }), net.icon)
			btn.createSpan({ text: net.label })
			btn.addEventListener('click', () => { void this.openNetwork(net) })
		}

		const actions = contentEl.createDiv({ cls: 'library-share-actions' })

		const copyImg = actions.createEl('button', { text: tr('share.copyImage') })
		if (!hasNative) copyImg.addClass('mod-cta')
		copyImg.addEventListener('click', () => { void this.doCopyImage() })

		const copyTxt = actions.createEl('button', { text: tr('share.copyText') })
		copyTxt.addEventListener('click', () => { void this.doCopyText() })

		const saveBtn = actions.createEl('button', { text: tr('share.save') })
		saveBtn.addEventListener('click', () => { void this.doSave() })
	}

	private async renderPreview(): Promise<void> {
		try {
			this.blob = await renderShareCard(this.app, this.fm, this.name)
		} catch (e) {
			console.error('Library: failed to render share card', e)
			this.blob = null
		}
		this.previewEl.empty()
		if (this.blob) {
			if (this.previewUrl) URL.revokeObjectURL(this.previewUrl)
			this.previewUrl = URL.createObjectURL(this.blob)
			this.previewEl.createEl('img', { cls: 'library-share-image', attr: { src: this.previewUrl } })
		} else {
			this.previewEl.createDiv({ cls: 'library-share-loading', text: tr('share.renderFailed') })
		}
	}

	private async openNetwork(net: Network): Promise<void> {
		// Intent links can't attach a local image, so put the card on the clipboard
		// first — the user pastes it into the compose window that opens.
		if (!this.blob) {
			new Notice(tr('share.renderFailed'))
			return
		}
		const ok = await copyImageToClipboard(this.blob)
		new Notice(ok ? tr('share.copiedThenOpen', { net: net.label }) : tr('share.openingNoImage', { net: net.label }))
		const url = shareIntent(net.id, this.share)
		if (url) window.open(url, '_blank')
	}

	private async doNativeShare(): Promise<void> {
		if (!this.blob) { new Notice(tr('share.renderFailed')); return }
		const status = await nativeShare(this.blob, this.share, this.name)
		if (status === 'shared') this.close()
		else if (status === 'unsupported') new Notice(tr('share.nativeUnavailable'))
		else new Notice(tr('share.shareFailed'))
	}

	private async doCopyImage(): Promise<void> {
		if (!this.blob) { new Notice(tr('share.renderFailed')); return }
		const ok = await copyImageToClipboard(this.blob)
		new Notice(ok ? tr('share.imageCopied') : tr('share.clipboardUnavailable'))
	}

	private async doCopyText(): Promise<void> {
		const text = this.share.url ? `${this.share.text}\n${this.share.url}` : this.share.text
		const ok = await copyTextToClipboard(text)
		new Notice(ok ? tr('share.textCopied') : tr('share.clipboardUnavailable'))
	}

	private async doSave(): Promise<void> {
		if (!this.blob) { new Notice(tr('share.renderFailed')); return }
		try {
			const file: TFile = await saveImageToVault(this.app, this.blob, this.name)
			new Notice(tr('share.saved', { path: file.path }))
		} catch (e) {
			console.error('Library: failed to save share card', e)
			new Notice(tr('share.saveFailed'))
		}
	}

	onClose(): void {
		if (this.previewUrl) {
			URL.revokeObjectURL(this.previewUrl)
			this.previewUrl = null
		}
		this.contentEl.empty()
	}
}

// Resolve the shareable frontmatter + display name for a note, or null if not a library note.
export function shareTargetFromFile(app: App, file: TFile | null): { fm: Record<string, unknown>; name: string } | null {
	if (!file) return null
	const fm = app.metadataCache.getFileCache(file)?.frontmatter
	if (!fm) return null
	const name = toStr(fm.Name) || file.basename
	return { fm, name }
}
