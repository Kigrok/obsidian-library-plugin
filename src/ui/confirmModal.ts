import { App, Modal, Setting } from 'obsidian'

export interface ConfirmText {
	title: string
	text: string
	confirm: string
	cancel: string
}

// A yes-or-no question. Closing it any other way than the confirm button
// counts as no, so the answer always arrives exactly once.
export class ConfirmModal extends Modal {
	private copy: ConfirmText
	private onAnswer: (yes: boolean) => void
	private answered = false

	constructor(app: App, copy: ConfirmText, onAnswer: (yes: boolean) => void) {
		super(app)
		this.copy = copy
		this.onAnswer = onAnswer
	}

	onOpen(): void {
		const { contentEl } = this
		this.setTitle(this.copy.title)
		contentEl.createEl('p', { text: this.copy.text })
		new Setting(contentEl)
			.addButton((b) => b.setButtonText(this.copy.cancel).onClick(() => this.close()))
			.addButton((b) => b.setButtonText(this.copy.confirm).setCta().onClick(() => this.answer(true)))
	}

	onClose(): void {
		this.contentEl.empty()
		this.answer(false)
	}

	private answer(yes: boolean): void {
		if (this.answered) return
		this.answered = true
		if (yes) this.close()
		this.onAnswer(yes)
	}
}
