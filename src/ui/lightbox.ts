// Shows a gallery still the way the browser did — one picture, large, on a
// near-black backdrop — but as a plain overlay inside Obsidian, with no modal
// chrome: the arrow keys flip through the rest of the gallery, Escape or a
// click anywhere brings the note back.
export class Lightbox {
	private caption: string
	private images: string[]
	private index: number
	private overlay: HTMLElement | null = null

	constructor(caption: string, images: string[], index: number) {
		this.caption = caption
		this.images = images
		this.index = index
	}

	open(): void {
		if (this.overlay) return
		const overlay = createDiv()
		overlay.addClass('library-lightbox')
		overlay.addEventListener('click', () => {
			this.close()
		})
		this.overlay = overlay
		this.draw()
		activeDocument.body.appendChild(overlay)
		activeDocument.addEventListener('keydown', this.onKey)
	}

	close(): void {
		if (!this.overlay) return
		activeDocument.removeEventListener('keydown', this.onKey)
		this.overlay.remove()
		this.overlay = null
	}

	private draw(): void {
		const overlay = this.overlay
		if (!overlay) return
		overlay.empty()
		const img = createEl('img')
		img.src = this.images[this.index] ?? ''
		img.alt = this.caption
		overlay.appendChild(img)
	}

	private step(delta: number): void {
		if (this.images.length < 2) return
		this.index = (this.index + delta + this.images.length) % this.images.length
		this.draw()
	}

	private onKey = (event: KeyboardEvent): void => {
		if (event.key === 'Escape') {
			event.preventDefault()
			this.close()
		} else if (event.key === 'ArrowLeft') {
			event.preventDefault()
			this.step(-1)
		} else if (event.key === 'ArrowRight') {
			event.preventDefault()
			this.step(1)
		}
	}
}
