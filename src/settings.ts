import { App, PluginSettingTab, Setting } from "obsidian";
import type LibraryPlugin from "./main";
import { isContentType, type ContentType } from "./providers/types";
import { tr } from "./i18n";

export class LibrarySettingTab extends PluginSettingTab {
	private plugin: LibraryPlugin;

	constructor(app: App, plugin: LibraryPlugin) {
		super(app, plugin);
		this.plugin = plugin;
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
			.setName(tr("settings.section.categories"))
			.setHeading();
		containerEl.createEl("p", { text: tr("settings.categories.desc") });

		this.plugin.settings.categories.forEach((cat, i) => {
			const div = containerEl.createDiv({
				cls: "library-settings-category",
			});

			new Setting(div)
				.setName(tr("settings.category.name", { index: i + 1 }))
				.setDesc(tr("settings.category.desc"))
				.addText((t) =>
					t
						.setPlaceholder(
							tr("settings.category.name.placeholder"),
						)
						.setValue(cat.name)
						.onChange(async (v) => {
							cat.name = v.trim();
							await this.plugin.saveSettings();
						}),
				)
				.addText((t) =>
					t
						.setPlaceholder(
							tr("settings.category.type.placeholder"),
						)
						.setValue(cat.typeValue)
						.onChange(async (v) => {
							cat.typeValue = v.trim();
							await this.plugin.saveSettings();
						}),
				)
				.addDropdown((d) =>
					d
						.addOption("movie", "OMDb · " + tr('settings.default.movie'))
						.addOption("series", "OMDb · " + tr('settings.default.series'))
						.addOption("anime", "Jikan · " + tr('settings.default.anime') + " (free)")
						.addOption("book", "Books · " + tr('settings.default.book'))
						.addOption("comic", "Comic Vine · " + tr('settings.default.comic'))
						.addOption("game", "RAWG · " + tr('settings.default.game'))
						.addOption("music", "Deezer · " + tr('settings.default.music'))
						.addOption("manual", tr("settings.category.manual"))
						.setValue(cat.contentType)
						.onChange(async (v) => {
							if (isContentType(v)) cat.contentType = v;
							await this.plugin.saveSettings();
						}),
				)
				.addButton((b) =>
					b
						.setIcon("trash")
						.setWarning()
						.onClick(async () => {
							this.plugin.settings.categories.splice(i, 1);
							await this.plugin.saveSettings();
							this.display();
						}),
				);

			new Setting(div)
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

		const addDiv = containerEl.createDiv({ cls: 'library-settings-category' })
		let addValue = 'movie'
		new Setting(addDiv)
			.setName(tr('settings.addCategory'))
			.addDropdown((d) => {
				d.addOption('movie', tr('settings.default.movie'))
				d.addOption('series', tr('settings.default.series'))
				d.addOption('book', tr('settings.default.book'))
				d.addOption('comic', tr('settings.default.comic'))
				d.addOption('game', tr('settings.default.game'))
				d.addOption('music', tr('settings.default.music'))
				d.addOption('anime', tr('settings.default.anime'))
				d.addOption('manual', tr('settings.default.manual'))
				d.setValue('movie')
				d.onChange((v) => { addValue = v })
			})
			.addButton((b) =>
				b
					.setButtonText(tr('settings.addCategory'))
					.setCta()
					.onClick(async () => {
						const typeMap: Record<string, { name: string; typeValue: string; contentType: ContentType }> = {
							movie: { name: tr('settings.default.movie'), typeValue: 'Movie', contentType: 'movie' },
							series: { name: tr('settings.default.series'), typeValue: 'Series', contentType: 'series' },
							book: { name: tr('settings.default.book'), typeValue: 'Book', contentType: 'book' },
							comic: { name: tr('settings.default.comic'), typeValue: 'Comic', contentType: 'comic' },
							game: { name: tr('settings.default.game'), typeValue: 'Game', contentType: 'game' },
							music: { name: tr('settings.default.music'), typeValue: 'Music', contentType: 'music' },
							anime: { name: tr('settings.default.anime'), typeValue: 'Anime', contentType: 'anime' },
							manual: { name: tr('settings.default.manual'), typeValue: 'Manual', contentType: 'manual' },
						}
						const def = typeMap[addValue]
						if (!def) return
						this.plugin.settings.categories.push({
							name: def.name,
							typeValue: def.typeValue,
							contentType: def.contentType,
							folder: '',
						})
						await this.plugin.saveSettings()
						this.display()
					})
			)

		new Setting(containerEl)
			.setName(tr("settings.section.example"))
			.setHeading();
		containerEl.createEl("p", { text: tr("settings.example.desc") });
		containerEl.createEl("pre", {
			text: "---\nType: Movie\nURL: https://www.imdb.com/title/tt.....\n---",
		});
	}
}
