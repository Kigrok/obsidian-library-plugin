import { App, FuzzySuggestModal } from 'obsidian'
import type { ICategory } from '../constants'
import { tr } from '../i18n'

export class PickTypeModal extends FuzzySuggestModal<ICategory> {
	private categories: ICategory[]
	private onPick: (category: ICategory) => void

	constructor(app: App, categories: ICategory[], onPick: (category: ICategory) => void) {
		super(app)
		this.categories = categories
		this.onPick = onPick
		this.setPlaceholder(tr('modal.pickType'))
	}

	getItems(): ICategory[] {
		return this.categories
	}

	getItemText(category: ICategory): string {
		return `${category.name} (${category.typeValue})`
	}

	onChooseItem(category: ICategory): void {
		this.onPick(category)
	}
}
