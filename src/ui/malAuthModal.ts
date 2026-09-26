import { App, Modal, Notice } from 'obsidian'
import type LibraryPlugin from '../main'
import { tr } from '../i18n'
import { MalTokenManager } from '../malTokenManager'

export class MalAuthModal extends Modal {
	private plugin: LibraryPlugin
	private tokenManager: MalTokenManager
	private verifier: string
	private onSuccess: () => void

	constructor(app: App, plugin: LibraryPlugin, tokenManager: MalTokenManager, verifier: string, onSuccess: () => void) {
		super(app)
		this.plugin = plugin
		this.tokenManager = tokenManager
		this.verifier = verifier
		this.onSuccess = onSuccess
	}

	onOpen(): void {
		const { contentEl } = this
		contentEl.empty()
		contentEl.addClass('mal-auth-modal')

		contentEl.createEl('h2', { text: tr('settings.mal.connect') })

		const desc = contentEl.createDiv({ cls: 'mal-auth-desc' })
		desc.setText(tr('settings.mal.authUrl'))

		const inputContainer = contentEl.createDiv({ cls: 'mal-auth-input-container' })
		const input = inputContainer.createEl('textarea', {
			cls: 'mal-auth-input',
			attr: { placeholder: tr('settings.mal.authUrl.placeholder'), rows: 3 }
		})

		const buttonContainer = contentEl.createDiv({ cls: 'mal-auth-buttons' })

		const exchangeBtn = buttonContainer.createEl('button', {
			cls: 'mod-cta mal-auth-exchange-btn',
			text: tr('settings.mal.exchange')
		})
		exchangeBtn.addEventListener('click', () => void this.handleExchange(input.value.trim()))

		const cancelBtn = buttonContainer.createEl('button', {
			cls: 'mal-auth-cancel-btn',
			text: 'Cancel'
		})
		cancelBtn.addEventListener('click', () => this.close())

		const statusContainer = contentEl.createDiv({ cls: 'mal-auth-status' })
		this.statusEl = statusContainer

		input.focus()
		new Notice('Paste the full redirect URL (http://localhost/?code=...) here and click "Exchange Code"')
	}

	private statusEl: HTMLElement

	private setStatus(message: string, isError = false): void {
		this.statusEl.empty()
		this.statusEl.createDiv({
			cls: `mal-auth-status-text ${isError ? 'mal-auth-error' : 'mal-auth-success'}`,
			text: message
		})
	}

	private async handleExchange(input: string): Promise<void> {
		if (!input) {
			this.setStatus('Please paste the redirect URL or authorization code', true)
			return
		}

		const exchangeBtn = this.contentEl.querySelector('.mal-auth-exchange-btn') as HTMLButtonElement
		exchangeBtn.disabled = true
		exchangeBtn.setText(tr('settings.mal.exchanging'))

		this.setStatus('')

		try {
			let code = input

			if (input.includes('code=')) {
				const url = new URL(input.startsWith('http') ? input : `https://example.com${input}`)
				code = url.searchParams.get('code') || ''
				if (!code) {
					throw new Error('No code parameter found in URL')
				}
			}

			const tokens = await this.tokenManager.exchangeCode(code, this.verifier)

			if (!tokens) {
				throw new Error('Exchange failed - no tokens returned')
			}

			this.setStatus(tr('settings.mal.exchangeSuccess'))
			new Notice(tr('settings.mal.exchangeSuccess'))

			window.setTimeout(() => {
				this.close()
				this.onSuccess()
			}, 1000)

		} catch (e) {
			const errorMsg = e instanceof Error ? e.message : String(e)
			this.setStatus(tr('settings.mal.exchangeFailed', { error: errorMsg }), true)
			new Notice(tr('settings.mal.exchangeFailed', { error: errorMsg }))
		} finally {
			exchangeBtn.disabled = false
			exchangeBtn.setText(tr('settings.mal.exchange'))
		}
	}

	onClose(): void {
		const { contentEl } = this
		contentEl.empty()
	}
}