import type LibraryPlugin from './main'
import { requestUrl } from 'obsidian'
import type { MalTokens } from './constants'

const TOKEN_URL = 'https://myanimelist.net/v1/oauth2/token'
const API_BASE = 'https://api.myanimelist.net/v2'

export class MalTokenManager {
	private plugin: LibraryPlugin
	private refreshLock: Promise<MalTokens | null> | null = null

	constructor(plugin: LibraryPlugin) {
		this.plugin = plugin
	}

	private get clientId(): string {
		return this.plugin.settings.malClientId.trim()
	}

	private get clientSecret(): string {
		return this.plugin.settings.malClientSecret.trim()
	}

	private get tokens(): MalTokens | null {
		return this.plugin.settings.malTokens
	}

	private async saveTokens(tokens: MalTokens): Promise<void> {
		this.plugin.settings.malTokens = tokens
		this.plugin.settings.malToken = tokens.access_token
		this.plugin.settings.malRefreshToken = tokens.refresh_token
		await this.plugin.saveSettings()
	}

	isTokenExpired(tokens: MalTokens | null = this.tokens): boolean {
		if (!tokens) return true
		const expiresAt = tokens.created_at + tokens.expires_in * 1000
		return Date.now() >= expiresAt - 60000
	}

	getDaysUntilExpiry(tokens: MalTokens | null = this.tokens): number | null {
		if (!tokens) return null
		const expiresAt = tokens.created_at + tokens.expires_in * 1000
		const diff = expiresAt - Date.now()
		if (diff <= 0) return 0
		return Math.ceil(diff / (1000 * 60 * 60 * 24))
	}

	async getValidAccessToken(): Promise<string | null> {
		if (!this.clientId || !this.clientSecret) {
			return null
		}

		const tokens = this.tokens
		if (!tokens) {
			return null
		}

		if (!this.isTokenExpired(tokens)) {
			return tokens.access_token
		}

		return this.refreshAccessToken()
	}

	private async refreshAccessToken(): Promise<string | null> {
		if (this.refreshLock) {
			const result = await this.refreshLock
			return result?.access_token ?? null
		}

		const tokens = this.tokens
		if (!tokens?.refresh_token) {
			return null
		}

		this.refreshLock = this.doRefresh(tokens.refresh_token)

		try {
			const newTokens = await this.refreshLock
			return newTokens?.access_token ?? null
		} finally {
			this.refreshLock = null
		}
	}

	private async doRefresh(refreshToken: string): Promise<MalTokens | null> {
		const resp = await requestUrl({
			url: TOKEN_URL,
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams({
				grant_type: 'refresh_token',
				client_id: this.clientId,
				client_secret: this.clientSecret,
				refresh_token: refreshToken
			}).toString(),
			throw: false
		})

		if (resp.status !== 200) {
			console.error('MAL token refresh failed:', resp.status, resp.json)
			return null
		}

		const json = resp.json as Omit<MalTokens, 'created_at'>
		const newTokens: MalTokens = { ...json, created_at: Date.now() }
		await this.saveTokens(newTokens)
		return newTokens
	}

	async exchangeCode(code: string, verifier: string): Promise<MalTokens | null> {
		const bodyParams = new URLSearchParams({
			grant_type: 'authorization_code',
			client_id: this.clientId,
			client_secret: this.clientSecret,
			code,
			code_verifier: verifier
		})
		const bodyString = bodyParams.toString()

		const resp = await requestUrl({
			url: TOKEN_URL,
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: bodyString,
			throw: false
		})

		if (resp.status !== 200) {
			return null
		}

		const json = resp.json as Omit<MalTokens, 'created_at'>
		const newTokens: MalTokens = { ...json, created_at: Date.now() }
		await this.saveTokens(newTokens)
		return newTokens
	}

	async testConnection(token: string): Promise<{ id: number; name: string } | null> {
		const resp = await requestUrl({
			url: `${API_BASE}/users/@me`,
			headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' },
			throw: false
		})
		if (resp.status !== 200) return null
		return resp.json as { id: number; name: string }
	}

	clearTokens(): void {
		this.plugin.settings.malTokens = null
		this.plugin.settings.malToken = ''
		this.plugin.settings.malRefreshToken = ''
		this.refreshLock = null
	}
}