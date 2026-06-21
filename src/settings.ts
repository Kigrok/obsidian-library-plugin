import { App, PluginSettingTab } from "obsidian";
import type { SettingDefinitionItem, SettingGroupItem } from "obsidian";
import type LibraryPlugin from "./main";
import type { ICategory } from "./constants";
import { tr } from "./i18n";

function getPath(obj: unknown, path: string): unknown {
	let cursor: unknown = obj;
	for (const part of path.split(".")) {
		if (cursor === null || typeof cursor !== "object") return undefined;
		cursor = (cursor as Record<string, unknown>)[part];
	}
	return cursor;
}

function setPath(obj: Record<string, unknown>, path: string, value: unknown): void {
	const parts = path.split(".");
	const last = parts.pop();
	if (last === undefined) return;
	let cursor: Record<string, unknown> = obj;
	for (const part of parts) {
		const next = cursor[part];
		if (next === null || typeof next !== "object") return;
		cursor = next as Record<string, unknown>;
	}
	cursor[last] = value;
}

export class LibrarySettingTab extends PluginSettingTab {
	private plugin: LibraryPlugin;

	constructor(app: App, plugin: LibraryPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	getControlValue(key: string): unknown {
		return getPath(this.plugin.settings, key);
	}

	async setControlValue(key: string, value: unknown): Promise<void> {
		setPath(this.plugin.settings as unknown as Record<string, unknown>, key, value);
		await this.plugin.saveSettings();
	}

	getSettingDefinitions(): SettingDefinitionItem[] {
		const categories = this.plugin.settings.categories;

		const nameCounts = new Map<string, number>();
		for (const cat of categories) {
			const base = cat.name.trim() || tr("settings.newCategory");
			nameCounts.set(base, (nameCounts.get(base) ?? 0) + 1);
		}
		const used = new Map<string, number>();
		const pageName = (cat: ICategory): string => {
			const base = cat.name.trim() || tr("settings.newCategory");
			if ((nameCounts.get(base) ?? 0) <= 1) return base;
			const n = (used.get(base) ?? 0) + 1;
			used.set(base, n);
			return `${base} (${String(n)})`;
		};

		return [
			{
				name: tr("settings.omdb.name"),
				desc: tr("settings.omdb.desc"),
				control: {
					type: "text",
					key: "omdbApiKey",
					placeholder: tr("settings.omdb.placeholder"),
				},
			},
			{
				type: "list",
				heading: tr("settings.section.categories"),
				emptyState: tr("settings.categories.desc"),
				addItem: {
					name: tr("settings.addCategory"),
					action: (): void => {
						this.plugin.settings.categories.push({
							name: tr("settings.newCategory"),
							typeValue: "Movie",
							contentType: "movie",
							folder: "",
						});
						void this.plugin.saveSettings();
						this.update();
					},
				},
				onDelete: (index: number): void => {
					this.plugin.settings.categories.splice(index, 1);
					void this.plugin.saveSettings();
					this.update();
				},
				items: categories.map((cat, i): SettingGroupItem => ({
					type: "page",
					name: pageName(cat),
					desc: tr("settings.category.desc"),
					items: [
						{
							name: tr("settings.field.name"),
							control: {
								type: "text",
								key: `categories.${String(i)}.name`,
								placeholder: tr("settings.category.name.placeholder"),
							},
						},
						{
							name: tr("settings.field.type"),
							control: {
								type: "text",
								key: `categories.${String(i)}.typeValue`,
								placeholder: tr("settings.category.type.placeholder"),
							},
						},
						{
							name: tr("settings.field.source"),
							control: {
								type: "dropdown",
								key: `categories.${String(i)}.contentType`,
								options: {
									movie: "OMDb · movie",
									series: "OMDb · series",
									book: "Open Library · book",
									manual: tr("settings.category.manual"),
								},
							},
						},
						{
							name: tr("settings.category.folder"),
							control: {
								type: "text",
								key: `categories.${String(i)}.folder`,
								placeholder: tr("settings.category.folder.placeholder"),
							},
						},
					],
				})),
			},
		];
	}
}
