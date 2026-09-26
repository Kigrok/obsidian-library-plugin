import { App, Modal, Setting } from 'obsidian'
import { tr } from '../i18n'

export class PromptModal extends Modal {
	private placeholder: string
	private onSubmit: (value: string) => void
	private title: string
	private button: string

	constructor(app: App, placeholder: string, onSubmit: (value: string) => void, title?: string, button?: string) {
		super(app)
		this.placeholder = placeholder
		this.onSubmit = onSubmit
		this.title = title ?? tr('modal.manualTitle')
		this.button = button ?? tr('modal.manualCreate')
	}

	onOpen(): void {
		const { contentEl } = this
		this.setTitle(this.title)
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
			b.setButtonText(this.button).setCta().onClick(submit)
		)
	}

	onClose(): void {
		this.contentEl.empty()
	}
}
