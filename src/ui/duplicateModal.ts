import { App, Modal, TFile } from 'obsidian'
import { tr } from '../i18n'
import { toStr } from '../util'

export interface DuplicateGroup {
	url: string
	files: TFile[]
}

export class DuplicateRemovalModal extends Modal {
	private groups: DuplicateGroup[]
	private onDone: (removed: number) => void

	constructor(app: App, groups: DuplicateGroup[], onDone: (removed: number) => void) {
		super(app)
		this.groups = groups
		this.onDone = onDone
	}

	onOpen(): void {
		const { contentEl } = this
		this.setTitle(tr('dup.title'))

		const checkboxes: { file: TFile; checkbox: HTMLInputElement }[] = []

		for (const group of this.groups) {
			const groupEl = contentEl.createDiv({ cls: 'library-dup-group' })
			groupEl.createDiv({ cls: 'library-dup-group-title', text: group.url })

			for (let i = 0; i < group.files.length; i++) {
				const file: TFile | undefined = group.files[i]
				if (!file) continue
				const fm = this.app.metadataCache.getFileCache(file)?.frontmatter
				const name = toStr(fm?.Name) || file.basename
				const item = groupEl.createDiv({ cls: 'library-dup-item' })
				const cb = item.createEl('input', {
					type: 'checkbox',
					attr: { 'aria-label': name }
				})
				item.createSpan({ cls: 'library-dup-item-label', text: name })

				if (i > 0) {
					cb.checked = true
				}

				checkboxes.push({ file, checkbox: cb })
			}
		}

		const actions = contentEl.createDiv({ cls: 'library-dup-actions' })
		const removeBtn = actions.createEl('button', {
			text: tr('dup.remove'),
			cls: 'mod-cta'
		})
		removeBtn.addEventListener('click', () => {
			const toRemove = checkboxes.filter(c => c.checkbox.checked).map(c => c.file)
			if (toRemove.length === 0) {
				this.close()
				return
			}
			this.close()
			void this.removeFiles(toRemove)
		})

		const cancelBtn = actions.createEl('button', { text: tr('dup.keep') })
		cancelBtn.addEventListener('click', () => this.close())
	}

	private async removeFiles(files: TFile[]): Promise<void> {
		let removed = 0
		for (const file of files) {
			try {
				await this.app.fileManager.trashFile(file)
				removed++
			} catch (e) {
				console.error('Library: failed to delete duplicate', file.path, e)
			}
		}
		if (removed > 0) {
			this.onDone(removed)
		}
	}

	onClose(): void {
		this.contentEl.empty()
	}
}
