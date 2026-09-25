import { App, Modal } from 'obsidian'
import { tr } from '../i18n'
import { createEmbedPlayer, toEmbed } from '../trailer'
import { safeUrl } from '../util'

export class TrailerModal extends Modal {
	private title: string
	private url: string

	constructor(app: App, title: string, url: string) {
		super(app)
		this.title = title
		this.url = url
	}

	onOpen(): void {
		const { contentEl } = this
		this.setTitle(this.title)
		const embed = toEmbed(this.url)
		if (embed) {
			contentEl.appendChild(createEmbedPlayer(embed.src, tr('header.trailer')))
			return
		}
		const href = safeUrl(this.url)
		if (!href) return
		contentEl.createEl('a', {
			text: tr('header.watchTrailer'),
			href,
			cls: 'external-link',
			attr: { target: '_blank', rel: 'noopener noreferrer' }
		})
	}

	onClose(): void {
		this.contentEl.empty()
	}
}
