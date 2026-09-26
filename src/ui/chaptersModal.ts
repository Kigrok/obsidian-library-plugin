import { App, Modal, Setting } from 'obsidian'
import { tr } from '../i18n'

// Chapters for a book with no table of contents: a count, or one title per line.
export class ChaptersModal extends Modal {
	private onSubmit: (chapters: string[] | number) => void

	constructor(app: App, onSubmit: (chapters: string[] | number) => void) {
		super(app)
		this.onSubmit = onSubmit
	}

	onOpen(): void {
		const { contentEl } = this
		this.setTitle(tr('header.addChapters'))
		contentEl.createEl('p', { text: tr('modal.chaptersHint') })
		const input = contentEl.createEl('textarea', { cls: 'library-chapters-input', attr: { rows: '8' } })
		new Setting(contentEl).addButton((button) =>
			button
				.setButtonText(tr('modal.manualCreate'))
				.setCta()
				.onClick(() => {
					const lines = input.value.split('\n').map((line) => line.trim()).filter(Boolean)
					const only = lines[0] ?? ''
					const chapters = lines.length === 1 && /^\d+$/.test(only) ? Number(only) : lines
					if ((typeof chapters === 'number' && chapters > 0) || (Array.isArray(chapters) && chapters.length > 0)) {
						this.onSubmit(chapters)
						this.close()
					}
				})
		)
		input.focus()
	}

	onClose(): void {
		this.contentEl.empty()
	}
}
