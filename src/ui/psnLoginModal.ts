import { App, Modal } from 'obsidian'
import { tr } from '../i18n'
import { codeFromRedirect, psnAuthUrl } from '../psn'

// Sony's own sign-in page in a window inside Obsidian (desktop only). After the
// user signs in, Sony sends the window to the PlayStation App's redirect with a
// code; the window catches that address, hands the code over and closes. The
// session lives in its own partition, so the next connect may skip the form.
export class PsnLoginModal extends Modal {
	private onCode: (code: string | null) => void
	private done = false

	constructor(app: App, onCode: (code: string | null) => void) {
		super(app)
		this.onCode = onCode
	}

	onOpen(): void {
		this.setTitle(tr('psn.loginTitle'))
		this.modalEl.addClass('library-psn-modal')
		// Passkeys are switched off: Sony's page asks for one, and Electron on
		// macOS brings the whole app down on a Touch ID passkey prompt inside a
		// webview. Sony then signs in with the password. The attributes are set
		// before the element joins the page, since a webview fixes them then.
		const view = createEl('webview' as keyof HTMLElementTagNameMap, {
			cls: 'library-psn-webview',
			attr: { partition: 'persist:library-psn', disableblinkfeatures: 'WebAuth', src: psnAuthUrl() },
		})
		const check = (event: Event): void => {
			const detail = event as Event & { url?: string; validatedURL?: string }
			const code = codeFromRedirect(detail.url ?? detail.validatedURL ?? '')
			if (code) this.finish(code)
		}
		for (const name of ['will-navigate', 'did-start-navigation', 'did-redirect-navigation', 'did-fail-load']) {
			view.addEventListener(name, check)
		}
		this.contentEl.appendChild(view)
	}

	onClose(): void {
		this.contentEl.empty()
		this.finish(null)
	}

	private finish(code: string | null): void {
		if (this.done) return
		this.done = true
		if (code) this.close()
		this.onCode(code)
	}
}
