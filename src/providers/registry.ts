import type { ContentProvider, ContentType } from './types'

export class ProviderRegistry {
	private byType = new Map<ContentType, ContentProvider>()

	register(provider: ContentProvider): void {
		for (const type of provider.contentTypes) this.byType.set(type, provider)
	}

	forType(type: ContentType): ContentProvider | null {
		return this.byType.get(type) ?? null
	}
}
