import { App, PluginSettingTab, Setting } from "obsidian";
import type LibraryPlugin from "./main";
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
		containerEl.createEl("h2", { text: tr("settings.title") });
		containerEl.createEl("p", { text: tr("settings.intro") });

		containerEl.createEl("h3", { text: tr("settings.section.general") });

		new Setting(containerEl)
			.setName(tr("settings.libraryFile.name"))
			.setDesc(tr("settings.libraryFile.desc"))
			.addText((text) =>
				text
					.setPlaceholder(tr("settings.libraryFile.placeholder"))
					.setValue(this.plugin.settings.libraryFilePath)
					.onChange(async (v) => {
						this.plugin.settings.libraryFilePath = v.trim();
						await this.plugin.saveSettings();
					}),
			);

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

		containerEl.createEl("h3", { text: tr("settings.section.categories") });
		containerEl.createEl("p", { text: tr("settings.categories.desc") });

		this.plugin.settings.categories.forEach((cat, i) => {
			const div = containerEl.createDiv({ cls: "setting-item-custom" });
			div.style.border = "1px solid var(--background-modifier-border)";
			div.style.padding = "8px";
			div.style.marginBottom = "8px";
			div.style.borderRadius = "6px";

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
		});

		new Setting(containerEl).addButton((b) =>
			b
				.setButtonText(tr("settings.addCategory"))
				.setCta()
				.onClick(async () => {
					this.plugin.settings.categories.push({
						name: tr("settings.newCategory"),
						typeValue: "NewType",
					});
					await this.plugin.saveSettings();
					this.display();
				}),
		);

		containerEl.createEl("h3", { text: tr("settings.section.example") });
		containerEl.createEl("p", { text: tr("settings.example.desc") });
		containerEl.createEl("pre", {
			text: "---\nType: Movie\nURL: https://www.imdb.com/title/tt.....\n---",
		});
	}
}
