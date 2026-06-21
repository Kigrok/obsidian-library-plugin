import { App, FuzzySuggestModal, TFile } from 'obsidian'
import { tr } from '../i18n'

export class LibrarySearchModal extends FuzzySuggestModal<TFile> {
	private files: TFile[]
	private onPick: (file: TFile) => void

	constructor(app: App, files: TFile[], onPick: (file: TFile) => void) {
		super(app)
		this.files = files
		this.onPick = onPick
		this.setPlaceholder(tr('modal.searchLibrary'))
	}

	getItems(): TFile[] {
		return this.files
	}

	getItemText(file: TFile): string {
		const name = this.app.metadataCache.getFileCache(file)?.frontmatter?.Name
		return typeof name === 'string' && name ? name : file.basename
	}

	onChooseItem(file: TFile): void {
		this.onPick(file)
	}
}
