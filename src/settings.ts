import {
	App,
	Notice,
	PluginSettingTab,
	Setting,
	type DropdownComponent,
	type TextComponent,
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

export class LibrarySettingTab extends PluginSettingTab {
	private plugin: LibraryPlugin;

	constructor(app: App, plugin: LibraryPlugin) {
		super(app, plugin);
		this.plugin = plugin;
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
		]
		for (const [value, label] of options) d.addOption(value, label)
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

	display(): void {
		const { containerEl } = this;
		containerEl.empty();

		containerEl.createEl("p", { text: tr("settings.intro") });

		new Setting(containerEl)
			.setName(tr("settings.omdb.name"))
			.setDesc(tr("settings.omdb.desc"))
			.addText((text) =>
				text
					.setPlaceholder(tr("settings.omdb.placeholder"))
					.setValue(this.plugin.settings.omdbApiKey)
					.onChange(async (v) => {
						this.plugin.settings.omdbApiKey = v.trim();
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName(tr("settings.google.name"))
			.setDesc(tr("settings.google.desc"))
			.addText((text) =>
				text
					.setPlaceholder(tr("settings.google.placeholder"))
					.setValue(this.plugin.settings.googleBooksApiKey)
					.onChange(async (v) => {
						this.plugin.settings.googleBooksApiKey = v.trim();
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName(tr("settings.rawg.name"))
			.setDesc(tr("settings.rawg.desc"))
			.addText((text) =>
				text
					.setPlaceholder(tr("settings.rawg.placeholder"))
					.setValue(this.plugin.settings.rawgApiKey)
					.onChange(async (v) => {
						this.plugin.settings.rawgApiKey = v.trim();
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName(tr("settings.tmdbApiKey.name"))
			.setDesc(tr("settings.tmdbApiKey.desc"))
			.addText((text) =>
				text
					.setPlaceholder(tr("settings.google.placeholder"))
					.setValue(this.plugin.settings.tmdbApiKey)
					.onChange(async (v) => {
						this.plugin.settings.tmdbApiKey = v.trim();
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName(tr("settings.comicvine.name"))
			.setDesc(tr("settings.comicvine.desc"))
			.addText((text) =>
				text
					.setPlaceholder(tr("settings.comicvine.placeholder"))
					.setValue(this.plugin.settings.comicVineApiKey)
					.onChange(async (v) => {
						this.plugin.settings.comicVineApiKey = v.trim();
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName(tr("settings.coverProperty.name"))
			.setDesc(tr("settings.coverProperty.desc"))
			.addText((text) =>
				text
					.setPlaceholder("Cover")
					.setValue(this.plugin.settings.coverProperty)
					.onChange(async (v) => {
						this.plugin.settings.coverProperty = v.trim();
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName(tr("settings.section.anilist"))
			.setHeading();
		containerEl.createEl("p", { text: tr("settings.anilist.desc") });

		new Setting(containerEl)
			.setName(tr("settings.anilist.clientId"))
			.addText((text) =>
				text
					.setPlaceholder(tr("settings.anilist.clientId.placeholder"))
					.setValue(this.plugin.settings.anilistClientId)
					.onChange(async (v) => {
						this.plugin.settings.anilistClientId = v.trim();
						await this.plugin.saveSettings();
					}),
			)
			.addButton((b) =>
				b.setButtonText(tr("settings.anilist.connect")).onClick(() => {
					const id = this.plugin.settings.anilistClientId.trim();
					if (!id) {
						new Notice(tr("settings.anilist.needClientId"));
						return;
					}
					window.open(anilistAuthUrl(id), "_blank");
				}),
			);

		new Setting(containerEl)
			.setName(tr("settings.anilist.token"))
			.addText((text) => {
				text.inputEl.type = "password";
				text
					.setPlaceholder(tr("settings.anilist.token.placeholder"))
					.setValue(this.plugin.settings.anilistToken)
					.onChange(async (v) => {
						this.plugin.settings.anilistToken = v.trim();
						await this.plugin.saveSettings();
					});
			})
			.addButton((b) =>
				b.setButtonText(tr("settings.anilist.test")).onClick(async () => {
					const token = this.plugin.settings.anilistToken.trim();
					const viewer = token ? await aniListViewer(token) : null;
					new Notice(
						viewer
							? tr("settings.anilist.connected", { name: viewer.name })
							: tr("settings.anilist.invalidToken"),
					);
				}),
			);

		new Setting(containerEl)
			.setName(tr("settings.section.categories"))
			.setHeading();
		containerEl.createEl("p", { text: tr("settings.categories.desc") });

		this.plugin.settings.categories.forEach((cat, i) => {
			const div = containerEl.createDiv({
				cls: "library-settings-category",
			});
			let typeInput: TextComponent | null = null;

			const row = new Setting(div)
				.setName(
					cat.name ||
						tr("settings.category.name", { index: i + 1 }),
				)
				.addText((t) =>
					t
						.setPlaceholder(
							tr("settings.category.name.placeholder"),
						)
						.setValue(cat.name)
						.onChange(async (v) => {
							cat.name = v.trim();
							row.nameEl.setText(
								cat.name ||
									tr("settings.category.name", {
										index: i + 1,
									}),
							);
							await this.plugin.saveSettings();
						}),
				)
				.addDropdown((d) => {
					this.addSourceOptions(d);
					d.setValue(cat.contentType).onChange(async (v) => {
						if (!isContentType(v)) return;
						// Follow the new source unless a custom Type value was typed.
						const def = TYPE_DEFAULTS[v];
						if (
							def &&
							(!cat.typeValue ||
								isDefaultTypeValue(cat.typeValue))
						) {
							this.retypeCategory(cat, def);
							typeInput?.setValue(def);
						}
						cat.contentType = v;
						await this.plugin.saveSettings();
					});
				})
				.addButton((b) =>
					b
						.setIcon("trash")
						.setWarning()
						.onClick(async () => {
							this.plugin.settings.categories.splice(i, 1);
							// Its statistics column goes too, unless another
							// category still shows notes of that Type.
							const settings = this.plugin.settings;
							if (!settings.categories.some((c) => c.typeValue === cat.typeValue)) {
								settings.stats.tops = settings.stats.tops.filter(
									(top) => !(top.kind === "category" && top.key === cat.typeValue),
								);
							}
							await this.plugin.saveSettings();
							this.display();
						}),
				);

			const details = div.createEl("details", {
				cls: "library-settings-advanced",
			});
			details.createEl("summary", {
				text: tr("settings.category.advanced"),
			});

			new Setting(details)
				.setName(tr("settings.category.type"))
				.addText((t) => {
					typeInput = t;
					t.setPlaceholder(
						tr("settings.category.type.placeholder"),
					)
						.setValue(cat.typeValue)
						.onChange(async (v) => {
							this.retypeCategory(cat, v.trim());
							await this.plugin.saveSettings();
						});
				});

			new Setting(details)
				.setName(tr("settings.category.folder"))
				.addText((t) =>
					t
						.setPlaceholder(
							tr("settings.category.folder.placeholder"),
						)
						.setValue(cat.folder)
						.onChange(async (v) => {
							cat.folder = v.trim();
							await this.plugin.saveSettings();
						}),
				);
		});

		const addDiv = containerEl.createDiv({
			cls: "library-settings-category",
		})
		let addValue = "movie"
		new Setting(addDiv)
			.setName(tr("settings.addCategory"))
			.addDropdown((d) => {
				this.addSourceOptions(d)
				d.setValue("movie")
				d.onChange((v) => {
					addValue = v
				})
			})
			.addButton((b) =>
				b
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
						}
						const contentType: ContentType = isContentType(addValue)
							? addValue
							: "movie"
						const typeValue = TYPE_DEFAULTS[contentType] ?? "Movie"
						this.plugin.settings.categories.push({
							name: names[contentType] ?? contentType,
							typeValue,
							contentType,
							folder: "",
						})
						// A new category shows its top titles right away, the
						// way every category did before tops were chosen.
						const tops = this.plugin.settings.stats.tops
						if (!tops.some((top) => top.kind === "category" && top.key === typeValue)) {
							tops.push({ kind: "category", key: typeValue })
						}
						await this.plugin.saveSettings()
						this.display()
					})
			)

		new Setting(containerEl).setName(tr("stats.title")).setHeading();
		containerEl.createEl("p", { text: tr("settings.stats.desc") });
		new Setting(containerEl).setName(tr("stats.watchTime")).addToggle((toggle) =>
			toggle
				.setValue(this.plugin.settings.stats.watchTime)
				.onChange(async (value) => {
					this.plugin.settings.stats.watchTime = value;
					await this.plugin.saveSettings();
				}),
		);
		// The columns in the order they show, each with its own remove button.
		this.plugin.settings.stats.tops.forEach((top, i) => {
			new Setting(containerEl)
				.setName(topLabel(top, this.plugin.settings.categories))
				.addButton((b) =>
					b
						.setIcon("trash")
						.setWarning()
						.onClick(async () => {
							this.plugin.settings.stats.tops.splice(i, 1);
							await this.plugin.saveSettings();
							this.display();
						}),
				);
		});

		// Adding works like adding a category: a category (its best-rated
		// titles) or a property of the notes (its most frequent values). The
		// row stays when everything is listed already, just switched off.
		const candidates = this.topCandidates();
		const addTop = containerEl.createDiv({ cls: "library-settings-category" });
		let chosen = 0;
		new Setting(addTop)
			.setName(tr("settings.stats.addTop"))
			.addDropdown((d) => {
				const groups = new Map<string, HTMLElement>();
				candidates.forEach((candidate, index) => {
					let group = groups.get(candidate.group);
					if (!group) {
						group = d.selectEl.createEl("optgroup", { attr: { label: candidate.group } });
						groups.set(candidate.group, group);
					}
					group.createEl("option", { text: candidate.label, attr: { value: String(index) } });
				});
				if (candidates.length === 0) d.addOption("", "—");
				d.setValue(candidates.length > 0 ? "0" : "");
				d.setDisabled(candidates.length === 0);
				d.onChange((v) => {
					chosen = Number(v);
				});
			})
			.addButton((b) =>
				b
					.setButtonText(tr("settings.stats.addTop"))
					.setCta()
					.setDisabled(candidates.length === 0)
					.onClick(async () => {
						const candidate = candidates[chosen];
						if (!candidate) return;
						this.plugin.settings.stats.tops.push(candidate.top);
						await this.plugin.saveSettings();
						this.display();
					}),
			);

		new Setting(containerEl)
			.setName(tr("settings.section.example"))
			.setHeading();
		containerEl.createEl("p", { text: tr("settings.example.desc") });
		containerEl.createEl("pre", { text: FRONTMATTER_EXAMPLE });
	}
}
