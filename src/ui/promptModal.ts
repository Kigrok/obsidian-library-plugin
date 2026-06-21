import { App, Modal, Setting } from 'obsidian'
import { tr } from '../i18n'

export class PromptModal extends Modal {
	private placeholder: string
	private onSubmit: (value: string) => void

	constructor(app: App, placeholder: string, onSubmit: (value: string) => void) {
		super(app)
		this.placeholder = placeholder
		this.onSubmit = onSubmit
	}

	onOpen(): void {
		const { contentEl } = this
		this.setTitle(tr('modal.manualTitle'))
		const input = contentEl.createEl('input', { type: 'text', cls: 'library-prompt-input' })
		input.placeholder = this.placeholder
		input.focus()

		const submit = (): void => {
			const value = input.value.trim()
			if (!value) return
			this.close()
			this.onSubmit(value)
		}

		input.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') {
				e.preventDefault()
				submit()
			}
		})

		new Setting(contentEl).addButton((b) =>
			b.setButtonText(tr('modal.manualCreate')).setCta().onClick(submit)
		)
	}

	onClose(): void {
		this.contentEl.empty()
	}
}
