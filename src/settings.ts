import {
	App,
	Notice,
	PluginSettingTab,
	requireApiVersion,
	Setting,
	type DropdownComponent,
	type SettingDefinition,
	type SettingDefinitionItem,
} from "obsidian";
import type LibraryPlugin from "./main";
import type { ICategory, IStatsTop } from "./constants";
import { isTemplateFile, rankableProperties, toStr, topLabel } from "./util";
import { isContentType, type ContentType } from "./providers/types";
import { tr } from "./i18n";
import { aniListViewer, anilistAuthUrl } from "./anilistSync";

const TYPE_DEFAULTS: Record<string, string> = {
	movie: "Movie",
	series: "Series",
	book: "Book",
	comic: "Comic",
	game: "Game",
	music: "Music",
	anime: "Anime",
	manual: "Manual",
};

function isDefaultTypeValue(value: string): boolean {
	return Object.values(TYPE_DEFAULTS).includes(value);
}

// A YAML sample, not UI text: it stays verbatim in every language.
const FRONTMATTER_EXAMPLE = [
	"---",
	"Type: Movie",
	"URL: https://www.imdb.com/title/tt.....",
	"---",
].join("\n");

type TextKey =
	| "omdbApiKey"
	| "googleBooksApiKey"
	| "rawgApiKey"
	| "tmdbApiKey"
	| "comicVineApiKey"
	| "coverProperty"
	| "anilistClientId"
	| "anilistToken";

// One row of the tab. Both renderers draw from the same rows —
// getSettingDefinitions() on Obsidian 1.13+, display() before it — so users on
// either side see the same settings.
interface Row {
	name: string;
	desc?: string;
	render?: (setting: Setting) => void;
	visible?: () => boolean;
	searchable?: boolean;
}

// A group of rows. A group scopes row names, so each category is its own
// group: every one has a "Type value" row.
interface Section {
	heading?: string;
	group?: boolean;
	rows: Row[];
}

// A paragraph of explanation. It renders through a callback because Obsidian
// skips a declarative row that has neither a name nor a control.
function note(text: string): Row {
	return {
		name: "",
		searchable: false,
		render: (row) => {
			row.setDesc(text);
		},
	};
}

export class LibrarySettingTab extends PluginSettingTab {
	private plugin: LibraryPlugin;
	// Categories whose Type value and folder rows are unfolded; screen state only.
	private expanded = new Set<ICategory>();

	constructor(app: App, plugin: LibraryPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	// Obsidian 1.13+: renders these and indexes them for the settings search.
	// Called on every refresh, so it stays cheap: no vault scans here.
	getSettingDefinitions(): SettingDefinitionItem[] {
		const items: SettingDefinitionItem[] = [];
		for (const section of this.sections()) {
			const definitions = section.rows.map((row) => this.definition(row));
			if (section.heading || section.group) items.push({ type: "group", heading: section.heading, items: definitions });
			else items.push(...definitions);
		}
		return items;
	}

	// Obsidian before 1.13 draws the same rows by hand.
	display(): void {
		this.draw();
	}

	private definition(row: Row): SettingDefinition {
		const base = { name: row.name, desc: row.desc, visible: row.visible, searchable: row.searchable };
		const render = row.render;
		return render ? { ...base, render: (setting: Setting) => render(setting) } : base;
	}

	private draw(): void {
		const { containerEl } = this;
		containerEl.empty();
		for (const section of this.sections()) {
			if (section.heading) new Setting(containerEl).setName(section.heading).setHeading();
			for (const row of section.rows) {
				if (row.visible && !row.visible()) continue;
				const setting = new Setting(containerEl);
				if (row.name) setting.setName(row.name);
				if (row.desc) setting.setDesc(row.desc);
				row.render?.(setting);
			}
		}
	}

	// Rows were added or removed. The version stays a literal: the Obsidian
	// lint recognises requireApiVersion("1.13.0") as the guard for 1.13 APIs.
	private refresh(): void {
		if (requireApiVersion("1.13.0")) this.update();
		else this.draw();
	}

	// Only a row's visibility changed.
	private refreshVisibility(): void {
		if (requireApiVersion("1.13.0")) this.refreshDomState();
		else this.draw();
	}

	private sections(): Section[] {
		const settings = this.plugin.settings;
		const categories: Section[] = [{ heading: tr("settings.section.categories"), rows: [note(tr("settings.categories.desc"))] }];
		settings.categories.forEach((cat, index) => {
			categories.push({ group: true, rows: this.categoryRows(cat, index) });
		});
		categories.push({ group: true, rows: [{ name: tr("settings.addCategory"), render: (row) => this.addCategory(row) }] });

		const statsRows: Row[] = [
			note(tr("settings.stats.desc")),
			{
				name: tr("stats.watchTime"),
				render: (row) => {
					row.addToggle((toggle) =>
						toggle.setValue(settings.stats.watchTime).onChange(async (value) => {
							settings.stats.watchTime = value;
							await this.plugin.saveSettings();
						}),
					);
				},
			},
		];
		// The columns in the order they show, each with its own remove button.
		for (const top of settings.stats.tops) {
			statsRows.push({
				name: topLabel(top, settings.categories),
				render: (row) => {
					row.addExtraButton((button) =>
						button
							.setIcon("trash")
							.setTooltip(tr("dup.remove"))
							.onClick(async () => {
								const at = settings.stats.tops.indexOf(top);
								if (at >= 0) settings.stats.tops.splice(at, 1);
								await this.plugin.saveSettings();
								this.refresh();
							}),
					);
				},
			});
		}
		statsRows.push({ name: tr("settings.stats.addTop"), render: (row) => this.addTop(row) });

		return [
			{
				rows: [
					note(tr("settings.intro")),
					this.textRow("settings.omdb", "omdbApiKey", tr("settings.omdb.placeholder")),
					this.textRow("settings.google", "googleBooksApiKey", tr("settings.google.placeholder")),
					this.textRow("settings.rawg", "rawgApiKey", tr("settings.rawg.placeholder")),
					this.textRow("settings.tmdbApiKey", "tmdbApiKey", tr("settings.rawg.placeholder")),
					this.textRow("settings.comicvine", "comicVineApiKey", tr("settings.comicvine.placeholder")),
					this.textRow("settings.coverProperty", "coverProperty", "Cover"),
				],
			},
			{
				heading: tr("settings.section.anilist"),
				rows: [
					note(tr("settings.anilist.desc")),
					{ name: tr("settings.anilist.clientId"), render: (row) => this.anilistClientId(row) },
					{ name: tr("settings.anilist.token"), render: (row) => this.anilistToken(row) },
				],
			},
			...categories,
			{ heading: tr("stats.title"), rows: statsRows },
			{
				heading: tr("settings.section.example"),
				rows: [
					{
						name: "",
						searchable: false,
						render: (row) => {
							row.setDesc(tr("settings.example.desc"));
							row.infoEl.createEl("pre", { text: FRONTMATTER_EXAMPLE });
						},
					},
				],
			},
		];
	}

	private textRow(prefix: string, key: TextKey, placeholder: string): Row {
		return {
			name: tr(`${prefix}.name`),
			desc: tr(`${prefix}.desc`),
			render: (row) => this.textInput(row, key, placeholder),
		};
	}

	private textInput(row: Setting, key: TextKey, placeholder: string, secret = false): void {
		row.addText((text) => {
			if (secret) text.inputEl.type = "password";
			text
				.setPlaceholder(placeholder)
				.setValue(this.plugin.settings[key])
				.onChange(async (value) => {
					this.plugin.settings[key] = value.trim();
					await this.plugin.saveSettings();
				});
		});
	}

	private anilistClientId(row: Setting): void {
		this.textInput(row, "anilistClientId", tr("settings.anilist.clientId.placeholder"));
		row.addButton((button) =>
			button.setButtonText(tr("settings.anilist.connect")).onClick(() => {
				const id = this.plugin.settings.anilistClientId.trim();
				if (!id) {
					new Notice(tr("settings.anilist.needClientId"));
					return;
				}
				window.open(anilistAuthUrl(id), "_blank");
			}),
		);
	}

	private anilistToken(row: Setting): void {
		this.textInput(row, "anilistToken", tr("settings.anilist.token.placeholder"), true);
		row.addButton((button) =>
			button.setButtonText(tr("settings.anilist.test")).onClick(async () => {
				const token = this.plugin.settings.anilistToken.trim();
				const viewer = token ? await aniListViewer(token) : null;
				new Notice(
					viewer
						? tr("settings.anilist.connected", { name: viewer.name })
						: tr("settings.anilist.invalidToken"),
				);
			}),
		);
	}

	// A category is its name and source; the Type value and the folder unfold
	// under it.
	private categoryRows(cat: ICategory, index: number): Row[] {
		const label = (): string => cat.name || tr("settings.category.name", { index: index + 1 });
		const unfolded = (): boolean => this.expanded.has(cat);
		return [
			{ name: label(), render: (row) => this.categoryControls(row, cat, label) },
			{
				name: tr("settings.category.type"),
				visible: unfolded,
				render: (row) => {
					row.settingEl.addClass("library-settings-advanced-row");
					row.addText((text) =>
						text
							.setPlaceholder(tr("settings.category.type.placeholder"))
							.setValue(cat.typeValue)
							.onChange(async (value) => {
								this.retypeCategory(cat, value.trim());
								await this.plugin.saveSettings();
							}),
					);
				},
			},
			{
				name: tr("settings.category.folder"),
				visible: unfolded,
				render: (row) => {
					row.settingEl.addClass("library-settings-advanced-row");
					row.addText((text) =>
						text
							.setPlaceholder(tr("settings.category.folder.placeholder"))
							.setValue(cat.folder)
							.onChange(async (value) => {
								cat.folder = value.trim();
								await this.plugin.saveSettings();
							}),
					);
				},
			},
		];
	}

	private categoryControls(row: Setting, cat: ICategory, label: () => string): void {
		const settings = this.plugin.settings;
		row.addText((text) =>
			text
				.setPlaceholder(tr("settings.category.name.placeholder"))
				.setValue(cat.name)
				.onChange(async (value) => {
					cat.name = value.trim();
					row.setName(label());
					await this.plugin.saveSettings();
				}),
		);
		row.addDropdown((dropdown) => {
			this.addSourceOptions(dropdown);
			dropdown.setValue(cat.contentType).onChange(async (value) => {
				if (!isContentType(value)) return;
				// Follow the new source unless a custom Type value was typed.
				const def = TYPE_DEFAULTS[value];
				const retype = Boolean(def) && (!cat.typeValue || isDefaultTypeValue(cat.typeValue));
				if (retype && def) this.retypeCategory(cat, def);
				cat.contentType = value;
				await this.plugin.saveSettings();
				if (retype) this.refresh();
			});
		});
		row.addExtraButton((button) => {
			const setIcon = (): void => {
				button.setIcon(this.expanded.has(cat) ? "chevron-up" : "chevron-down");
			};
			setIcon();
			button.setTooltip(tr("settings.category.advanced")).onClick(() => {
				if (this.expanded.has(cat)) this.expanded.delete(cat);
				else this.expanded.add(cat);
				setIcon();
				this.refreshVisibility();
			});
		});
		row.addExtraButton((button) =>
			button
				.setIcon("trash")
				.setTooltip(tr("dup.remove"))
				.onClick(async () => {
					const at = settings.categories.indexOf(cat);
					if (at >= 0) settings.categories.splice(at, 1);
					this.expanded.delete(cat);
					// Its statistics column goes too, unless another category
					// still shows notes of that Type.
					if (!settings.categories.some((c) => c.typeValue === cat.typeValue)) {
						settings.stats.tops = settings.stats.tops.filter(
							(top) => !(top.kind === "category" && top.key === cat.typeValue),
						);
					}
					await this.plugin.saveSettings();
					this.refresh();
				}),
		);
	}

	private addCategory(row: Setting): void {
		let addValue = "movie";
		row.addDropdown((dropdown) => {
			this.addSourceOptions(dropdown);
			dropdown.setValue("movie");
			dropdown.onChange((value) => {
				addValue = value;
			});
		});
		row.addButton((button) =>
			button
				.setButtonText(tr("settings.addCategory"))
				.setCta()
				.onClick(async () => {
					const names: Record<string, string> = {
						movie: tr("settings.default.movie"),
						series: tr("settings.default.series"),
						book: tr("settings.default.book"),
						comic: tr("settings.default.comic"),
						game: tr("settings.default.game"),
						music: tr("settings.default.music"),
						anime: tr("settings.default.anime"),
						manual: tr("settings.default.manual"),
					};
					const contentType: ContentType = isContentType(addValue) ? addValue : "movie";
					const typeValue = TYPE_DEFAULTS[contentType] ?? "Movie";
					this.plugin.settings.categories.push({
						name: names[contentType] ?? contentType,
						typeValue,
						contentType,
						folder: "",
					});
					// A new category shows its top titles right away, the way
					// every category did before tops were chosen.
					const tops = this.plugin.settings.stats.tops;
					if (!tops.some((top) => top.kind === "category" && top.key === typeValue)) {
						tops.push({ kind: "category", key: typeValue });
					}
					await this.plugin.saveSettings();
					this.refresh();
				}),
		);
	}

	// Adding works like adding a category: a category (its best-rated titles)
	// or a property of the notes (its most frequent values). The row stays
	// when everything is listed already, just switched off. The candidates
	// scan the vault, so they are built only when the row is drawn.
	private addTop(row: Setting): void {
		const candidates = this.topCandidates();
		let chosen = 0;
		row.addDropdown((dropdown) => {
			const groups = new Map<string, HTMLElement>();
			candidates.forEach((candidate, index) => {
				let group = groups.get(candidate.group);
				if (!group) {
					group = dropdown.selectEl.createEl("optgroup", { attr: { label: candidate.group } });
					groups.set(candidate.group, group);
				}
				group.createEl("option", { text: candidate.label, attr: { value: String(index) } });
			});
			if (candidates.length === 0) dropdown.addOption("", "—");
			dropdown.setValue(candidates.length > 0 ? "0" : "");
			dropdown.setDisabled(candidates.length === 0);
			dropdown.onChange((value) => {
				chosen = Number(value);
			});
		});
		row.addButton((button) =>
			button
				.setButtonText(tr("settings.stats.addTop"))
				.setCta()
				.setDisabled(candidates.length === 0)
				.onClick(async () => {
					const candidate = candidates[chosen];
					if (!candidate) return;
					this.plugin.settings.stats.tops.push(candidate.top);
					await this.plugin.saveSettings();
					this.refresh();
				}),
		);
	}

	// One category per medium: a single source may merge several providers
	// (Games = RAWG + Steam, Books = Google Books + Open Library).
	private addSourceOptions(d: DropdownComponent): void {
		const options: Array<[string, string]> = [
			["movie", tr("settings.default.movie") + " — OMDb"],
			["series", tr("settings.default.series") + " — OMDb"],
			["book", tr("settings.default.book") + " — Google Books + Open Library"],
			["comic", tr("settings.default.comic") + " — Comic Vine"],
			["game", tr("settings.default.game") + " — RAWG + Steam"],
			["music", tr("settings.default.music") + " — Deezer"],
			["anime", tr("settings.default.anime") + " — AniList"],
			["manual", tr("settings.category.manual")],
		];
		for (const [value, label] of options) d.addOption(value, label);
	}

	private libraryFrontmatter(): Record<string, unknown>[] {
		const types = new Set(this.plugin.settings.categories.map((c) => c.typeValue));
		const list: Record<string, unknown>[] = [];
		for (const file of this.app.vault.getMarkdownFiles()) {
			if (isTemplateFile(file.path)) continue;
			const fm = this.app.metadataCache.getFileCache(file)?.frontmatter;
			if (fm && types.has(toStr(fm.Type))) list.push(fm);
		}
		return list;
	}

	// A category's statistics column is keyed by its Type value, so it moves
	// along when that value changes.
	private retypeCategory(cat: ICategory, typeValue: string): void {
		for (const top of this.plugin.settings.stats.tops) {
			if (top.kind === "category" && top.key === cat.typeValue) top.key = typeValue;
		}
		cat.typeValue = typeValue;
	}

	// What "Add top" can still offer: the categories, then the properties the
	// library's notes use — none that already has its column.
	private topCandidates(): Array<{ group: string; label: string; top: IStatsTop }> {
		const listed = new Set<string>();
		for (const top of this.plugin.settings.stats.tops) listed.add(`${top.kind}:${top.key.toLowerCase()}`);
		const list: Array<{ group: string; label: string; top: IStatsTop }> = [];
		const offer = (group: string, label: string, top: IStatsTop): void => {
			const id = `${top.kind}:${top.key.toLowerCase()}`;
			if (!top.key || listed.has(id)) return;
			listed.add(id);
			list.push({ group, label, top });
		};
		for (const cat of this.plugin.settings.categories) {
			offer(tr("settings.section.categories"), cat.name || cat.typeValue, { kind: "category", key: cat.typeValue });
		}
		for (const property of rankableProperties(this.libraryFrontmatter(), this.plugin.settings.coverProperty)) {
			offer(tr("settings.stats.groupProperties"), property, { kind: "property", key: property });
		}
		return list;
	}
}
