// Loads the real esbuild bundle the way Obsidian does (CJS + `require('obsidian')`)
// and boots the plugin against a stubbed App, so onload wiring and unload
// cleanup are checked without touching the vault.
import { buildSync } from "esbuild";
import { builtinModules } from "node:module";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { App, PluginManifest } from "obsidian";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import * as obsidianStub from "../stubs/obsidian";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

interface LoadedPlugin {
	onload(): Promise<void>;
	onunload(): void;
	commands: Array<{ id: string }>;
	settingTabs: unknown[];
	views: Map<string, (leaf: unknown) => unknown>;
	registry: { forType(type: string): { id: string } | null };
}

function bundlePlugin(): string {
	const result = buildSync({
		entryPoints: [resolve(root, "src/main.ts")],
		bundle: true,
		external: [
			"obsidian",
			"electron",
			"@codemirror/autocomplete",
			"@codemirror/collab",
			"@codemirror/commands",
			"@codemirror/language",
			"@codemirror/lint",
			"@codemirror/search",
			"@codemirror/state",
			"@codemirror/view",
			"@lezer/common",
			"@lezer/highlight",
			"@lezer/lr",
			...builtinModules,
		],
		format: "cjs",
		target: "es2020",
		treeShaking: true,
		write: false,
		logLevel: "silent",
	});
	const output = result.outputFiles?.[0];
	if (!output) throw new Error("esbuild produced no output");
	return output.text;
}

type PluginConstructor = new (app: App, manifest: PluginManifest) => LoadedPlugin;

function loadPlugin(code: string): PluginConstructor {
	const module = { exports: {} as { default?: unknown } };
	const requireShim = (id: string): unknown =>
		id === "obsidian" ? obsidianStub : {};
	const fn = new Function("require", "module", "exports", code) as (
		require: unknown,
		module: unknown,
		exports: unknown,
	) => void;
	fn(requireShim, module, module.exports);
	const ctor = module.exports.default;
	if (typeof ctor !== "function") {
		throw new Error("bundle has no default plugin export");
	}
	return ctor as PluginConstructor;
}

const manifest = JSON.parse(
	readFileSync(resolve(root, "manifest.json"), "utf8"),
) as PluginManifest;

describe("built bundle", () => {
	let code = "";

	beforeEach(() => {
		vi.useFakeTimers();
		// Routes are matched in registration order for the whole file, so a test
		// must not inherit the broad stubs of the one before it.
		obsidianStub.resetRequests();
		code = bundlePlugin();
	});

	afterEach(() => {
		vi.useRealTimers();
		// A lightbox left open by a failing assertion must not leak into the
		// next test — it lives on the shared jsdom body.
		for (const overlay of activeDocument.body.querySelectorAll(
			".library-lightbox",
		)) {
			overlay.remove();
		}
	});

	it("boots through the Obsidian plugin lifecycle", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);

		await plugin.onload();

		expect(plugin.settingTabs).toHaveLength(1);
		expect(plugin.views.has("library-view")).toBe(true);
		expect(plugin.commands.length).toBeGreaterThanOrEqual(9);
		expect(plugin.commands.map((command) => command.id)).toContain("add-content");
	});

	it("registers exactly one provider per medium", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();

		const providers: Record<string, string | null> = {};
		for (const type of [
			"movie",
			"series",
			"book",
			"game",
			"music",
			"anime",
			"comic",
		]) {
			providers[type] = plugin.registry.forType(type)?.id ?? null;
		}
		expect(providers).toEqual({
			movie: "omdb",
			series: "omdb",
			book: "books",
			game: "games",
			music: "deezer",
			anime: "anilist",
			comic: "comicvine",
		});
	});

	it("leaves no timers behind after onunload", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();

		const file = new obsidianStub.TFile("Media/Dune.md");
		stub.setActiveFile(file);
		stub.workspace.emit("file-open", file);
		stub.workspace.emit("active-leaf-change");
		stub.metadataCache.emit("changed", file);

		expect(vi.getTimerCount()).toBeGreaterThan(0);
		plugin.onunload();
		expect(vi.getTimerCount()).toBe(0);
		const fields = plugin as unknown as {
			refreshTimer: number | null;
			bannerTimer: number | null;
			linkTimers: Map<string, number>;
		};
		expect(fields.refreshTimer).toBeNull();
		expect(fields.bannerTimer).toBeNull();
		expect(fields.linkTimers.size).toBe(0);
	});

	it("registers its own view type and ribbon icon", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();

		expect([...plugin.views.keys()]).toEqual(["library-view"]);
		const ribbon = (plugin as unknown as { ribbonIcons: string[] }).ribbonIcons;
		expect(ribbon).toContain("library");
	});

	it("remembers the last sort choice of each section", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();

		const internals = plugin as unknown as {
			settings: {
				categories: unknown[];
				sortState: Record<string, { key: string; asc: boolean }>;
			};
			data: unknown;
		};
		internals.settings.categories = [
			{ name: "Movies", contentType: "movie", typeValue: "Movie", folder: "" },
		];

		const files = [
			new obsidianStub.TFile("Media/Dune.md"),
			new obsidianStub.TFile("Media/Alien.md"),
		];
		const frontmatter: Record<string, Record<string, unknown>> = {
			"Media/Dune.md": { Type: "Movie", Name: "Dune", Year: 2021, "My Rating": 8 },
			"Media/Alien.md": { Type: "Movie", Name: "Alien", Year: 1979, "My Rating": 9 },
		};
		Object.assign(stub.app.vault, { getMarkdownFiles: () => files });
		Object.assign(stub.app.metadataCache, {
			getFileCache: (file: { path: string }) => ({
				frontmatter: frontmatter[file.path] ?? null,
			}),
		});

		const factory = plugin.views.get("library-view");
		if (!factory) throw new Error("no library view registered");
		const openView = (): { render(): void; contentEl: HTMLElement } => {
			const leaf = new obsidianStub.WorkspaceLeaf();
			leaf.app = stub.app;
			return factory(leaf) as { render(): void; contentEl: HTMLElement };
		};

		const view = openView();
		view.render();
		expect(
			view.contentEl.querySelector(".library-sort-trigger")?.textContent,
		).toBe("A-Z ▾");

		const rating = [...view.contentEl.querySelectorAll(".library-sort-menu-item")].find(
			(item) => item.textContent === "Rating",
		);
		rating?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		expect(internals.settings.sortState["Movies"]).toEqual({ key: "rating", asc: false });
		expect(
			view.contentEl.querySelector(".library-sort-trigger")?.textContent,
		).toContain("Rating");
		// Newest choice went to disk, not only into memory.
		expect(JSON.stringify(internals.data)).toContain('"rating"');

		// A fresh view (what a restart or a second tab gets) opens the same way.
		const reopened = openView();
		reopened.render();
		expect(
			reopened.contentEl.querySelector(".library-sort-trigger")?.textContent,
		).toContain("Rating");
		expect(
			reopened.contentEl.querySelector(".library-sort-menu-item.active")
				?.textContent,
		).toBe("Rating");
		expect(
			reopened.contentEl.querySelector(".library-card .card-title")?.textContent,
		).toBe("Alien");

		// A hand-edited, unknown sort key falls back instead of breaking the page.
		internals.settings.sortState["Movies"] = { key: "bogus", asc: false };
		const repaired = openView();
		repaired.render();
		expect(
			repaired.contentEl.querySelector(".library-sort-trigger")?.textContent,
		).toBe("A-Z ▾");
	});

	it("charts the time spent per medium on the library page", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();

		(
			plugin as unknown as { settings: { categories: unknown[] } }
		).settings.categories = [
			{ name: "Movies", contentType: "movie", typeValue: "Movie", folder: "" },
			{ name: "Series", contentType: "series", typeValue: "Series", folder: "" },
			{ name: "Books", contentType: "book", typeValue: "Book", folder: "" },
		];

		const files = [
			new obsidianStub.TFile("Media/Dune.md"),
			new obsidianStub.TFile("Media/Fargo.md"),
			new obsidianStub.TFile("Media/Untimed.md"),
			new obsidianStub.TFile("Books/Dune.md"),
		];
		const frontmatter: Record<string, Record<string, unknown>> = {
			"Media/Dune.md": {
				Type: "Movie",
				Name: "Dune",
				Progress: "1/1",
				Complete: true,
				Runtime: 155,
			},
			"Media/Fargo.md": { Type: "Series", Name: "Fargo", Progress: "10/51", Runtime: 57 },
			"Media/Untimed.md": {
				Type: "Movie",
				Name: "Untimed",
				Progress: "1/1",
				Complete: true,
			},
			"Books/Dune.md": { Type: "Book", Name: "Dune", Progress: "10/500" },
		};
		Object.assign(stub.app.vault, { getMarkdownFiles: () => files });
		Object.assign(stub.app.metadataCache, {
			getFileCache: (file: { path: string }) => ({
				frontmatter: frontmatter[file.path] ?? null,
			}),
		});

		const factory = plugin.views.get("library-view");
		if (!factory) throw new Error("no library view registered");
		const leaf = new obsidianStub.WorkspaceLeaf();
		leaf.app = stub.app;
		const view = factory(leaf) as { render(): void; contentEl: HTMLElement };
		view.render();

		// 155 minutes for the film, 10 watched episodes of 57 minutes for the
		// series — the book has no length and gets no slice.
		const rows = [...view.contentEl.querySelectorAll(".library-time-item")];
		expect(rows).toHaveLength(2);
		expect(rows[0]?.querySelector(".library-time-name")?.textContent).toBe("Movies");
		expect(rows[0]?.querySelector(".library-time-value")?.textContent).toBe(
			"2 h 35 min · 21%",
		);
		expect(rows[1]?.querySelector(".library-time-name")?.textContent).toBe("Series");
		expect(rows[1]?.querySelector(".library-time-value")?.textContent).toBe(
			"9 h 30 min · 79%",
		);
		expect(
			view.contentEl.querySelector(".library-time-total")?.textContent,
		).toBe("12 h 5 min");

		// A note whose source never reported a length is called out rather than
		// quietly missing from the chart.
		expect(
			[...view.contentEl.querySelectorAll(".library-stats-empty")].map(
				(el) => el.textContent,
			),
		).toContain("1 without runtime");
	});

	it("keeps the stats section as it was left, with the chart on the right", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();

		const internals = plugin as unknown as {
			settings: {
				categories: unknown[];
				statsCollapsed: boolean;
				stats: { tops: Array<{ kind: string; key: string }> };
			};
			data: Record<string, unknown>;
		};
		internals.settings.categories = [
			{ name: "Movies", contentType: "movie", typeValue: "Movie", folder: "" },
		];
		internals.settings.stats.tops.push({ kind: "category", key: "Movie" });
		const files = [new obsidianStub.TFile("Media/Dune.md")];
		Object.assign(stub.app.vault, { getMarkdownFiles: () => files });
		Object.assign(stub.app.metadataCache, {
			getFileCache: () => ({
				frontmatter: {
					Type: "Movie",
					Name: "Dune",
					Progress: "1/1",
					Complete: true,
					Runtime: 155,
				},
			}),
		});

		const factory = plugin.views.get("library-view");
		if (!factory) throw new Error("no library view registered");
		const openView = (): { render(): void; contentEl: HTMLElement } => {
			const leaf = new obsidianStub.WorkspaceLeaf();
			leaf.app = stub.app;
			return factory(leaf) as { render(): void; contentEl: HTMLElement };
		};

		const view = openView();
		view.render();
		const body = view.contentEl.querySelector(".library-stats-body");
		expect(body?.classList.contains("collapsed")).toBe(false);
		// The tops open the row and the chart closes it on the right.
		const children = [...(body?.children ?? [])];
		expect(children[0]?.classList.contains("library-stats-tops")).toBe(true);
		expect(
			children[children.length - 1]?.classList.contains("library-time-col"),
		).toBe(true);

		view.contentEl
			.querySelector(".library-collapse-btn")
			?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		expect(internals.settings.statsCollapsed).toBe(true);
		expect(JSON.stringify(internals.data)).toContain('"statsCollapsed":true');

		// A fresh view (a restart or a second tab) comes up collapsed.
		const reopened = openView();
		reopened.render();
		expect(
			reopened.contentEl
				.querySelector(".library-stats-body")
				?.classList.contains("collapsed"),
		).toBe(true);
		expect(
			reopened.contentEl.querySelector(".library-collapse-btn")?.textContent,
		).toBe("▶");
	});

	it("fills new metadata across the library in the background, once per version", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();

		const internals = plugin as unknown as {
			settings: {
				categories: unknown[];
				omdbApiKey: string;
				enrichMarks: Record<string, string>;
			};
			scheduleEnrich(delay: number): void;
		};
		internals.settings.categories = [
			{ name: "Movies", contentType: "movie", typeValue: "Movie", folder: "" },
			{ name: "Series", contentType: "series", typeValue: "Series", folder: "" },
		];
		internals.settings.omdbApiKey = "key";

		const files = [
			new obsidianStub.TFile("Media/Dune.md"),
			new obsidianStub.TFile("Media/Manual.md"),
			new obsidianStub.TFile("Media/Sandman.md"),
		];
		const frontmatter: Record<string, Record<string, unknown>> = {
			"Media/Dune.md": { Type: "Movie", Name: "Dune", "Source ID": "tt1160419" },
			// Hand-made: no source id, nothing to fetch — the walk only brings
			// its links to the current format.
			"Media/Manual.md": {
				Type: "Movie",
				Name: "Manual",
				Genre: ["Drama"],
				Related: ["[[Movie]]", "[[Drama]]"],
			},
			// Carries the junk "1 min" OMDb reports for a few series; the walk
			// must replace it with Cinemeta's real episode length.
			"Media/Sandman.md": { Type: "Series", Name: "The Sandman", "Source ID": "tt1751634", Runtime: 1 },
		};
		Object.assign(stub.app.vault, { getMarkdownFiles: () => files });
		Object.assign(stub.app.metadataCache, {
			getFileCache: (file: { path: string }) => ({
				frontmatter: frontmatter[file.path] ?? null,
			}),
		});
		Object.assign(stub.app.fileManager, {
			processFrontMatter: (
				file: { path: string },
				cb: (fm: Record<string, unknown>) => void,
			) => {
				cb(frontmatter[file.path] ?? {});
				return Promise.resolve();
			},
		});
		obsidianStub.stubRequest({
			// Only the OMDb details call for this id: the Cinemeta request carries
			// the same id, so a plain substring match would hijack it.
			match: /omdbapi\.com\/\?.*i=tt1751634/,
			json: {
				Response: "True",
				Type: "series",
				Title: "The Sandman",
				Year: "2022",
				Runtime: "1 min",
				imdbID: "tt1751634",
				Genre: "Fantasy",
				Poster: "N/A",
			},
		});
		obsidianStub.stubRequest({
			match: "v3-cinemeta.strem.io",
			json: { meta: { runtime: "52 min" } },
		});
		obsidianStub.stubRequest({
			match: "omdbapi.com",
			json: {
				Response: "True",
				Title: "Dune",
				Year: "2021",
				Runtime: "155 min",
				imdbID: "tt1160419",
				Genre: "Sci-Fi",
				Director: "Denis Villeneuve",
				Poster: "N/A",
			},
		});

		internals.scheduleEnrich(0);
		await vi.advanceTimersByTimeAsync(4000);

		expect(frontmatter["Media/Dune.md"]?.Runtime).toBe(155);
		expect(frontmatter["Media/Sandman.md"]?.Runtime).toBe(52);
		expect(internals.settings.enrichMarks["Media/Dune.md"]).toBe(
			manifest.version,
		);
		expect(frontmatter["Media/Manual.md"]?.Genre).toEqual(["[[Drama]]"]);
		expect("Related" in (frontmatter["Media/Manual.md"] ?? {})).toBe(false);
		expect(internals.settings.enrichMarks["Media/Manual.md"]).toBe(manifest.version);

		// The same version again: the marks keep the walk quiet.
		obsidianStub.resetRequests();
		internals.scheduleEnrich(0);
		await vi.advanceTimersByTimeAsync(2000);
		expect(obsidianStub.requestLog).toEqual([]);

		// Unloading mid-walk stops it instead of leaving a timer behind.
		internals.settings.enrichMarks = {};
		internals.scheduleEnrich(0);
		await vi.advanceTimersByTimeAsync(0);
		plugin.onunload();
		const during = obsidianStub.requestLog.length;
		await vi.advanceTimersByTimeAsync(5000);
		expect(obsidianStub.requestLog.length).toBe(during);
		expect(vi.getTimerCount()).toBe(0);
	});

	it("shows only the name + source per category, type/folder unfold under it", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();

		(
			plugin as unknown as {
				settings: { categories: unknown[] };
			}
		).settings.categories = [
			{ name: "Movies", contentType: "movie", typeValue: "Movie", folder: "Media" },
		];

		const tab = (plugin.settingTabs as unknown as Array<{ containerEl: HTMLElement; display(): void }>)[0];
		if (!tab) throw new Error("no settings tab registered");
		tab.display();
		const rows = (): Element[] => [...tab.containerEl.querySelectorAll(".setting-item")];
		const named = (name: string): Element | undefined =>
			rows().find((el) => el.firstElementChild?.textContent === name);

		// One row per category (name + source dropdown), and the source label
		// spells out the merged medium.
		const category = named("Movies");
		expect(category).toBeDefined();
		const labels = [...(category?.querySelectorAll("option") ?? [])].map(
			(option) => option.textContent ?? "",
		);
		expect(labels.some((label) => label.includes("OMDb"))).toBe(true);
		expect(labels.some((label) => label.includes("RAWG + Steam"))).toBe(true);
		expect(labels.some((label) => label === "steam")).toBe(false);

		// Type value + folder stay folded until the category's toggle opens them.
		expect(named("Type value")).toBeUndefined();
		expect(named("Folder")).toBeUndefined();
		const toggle = category?.querySelector('[aria-label="Advanced"]');
		toggle?.dispatchEvent(new MouseEvent("click"));
		expect(named("Type value")?.querySelector("input")?.value).toBe("Movie");
		expect(named("Folder")?.querySelector("input")?.value).toBe("Media");
		named("Movies")?.querySelector('[aria-label="Advanced"]')?.dispatchEvent(new MouseEvent("click"));
		expect(named("Type value")).toBeUndefined();
	});

	it("describes the same settings for the 1.13 settings search", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();
		const tab = (plugin.settingTabs as unknown as Array<{ getSettingDefinitions(): unknown[] }>)[0];
		if (!tab) throw new Error("no settings tab registered");

		type Definition = { name?: string; heading?: string; items?: Definition[]; searchable?: boolean };
		const definitions = tab.getSettingDefinitions() as Definition[];
		const headings = definitions.filter((d) => d.heading).map((d) => d.heading);
		expect(headings).toEqual(["AniList sync", "Categories", "Statistics", "Example note"]);
		const names = definitions
			.flatMap((d) => (d.items ? d.items : [d]))
			.filter((d) => d.searchable !== false)
			.map((d) => d.name);
		for (const name of ["OMDb API key", "TMDB API key (optional)", "Cover property", "AniList access token", "Add category", "Watch time", "Add top"]) {
			expect(names).toContain(name);
		}
		// The descriptions and the YAML sample are not settings to find.
		expect(names).not.toContain("");
	});

	it("adds the note header after the properties panel on file-open, exactly once", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();

		(
			plugin as unknown as {
				settings: { categories: unknown[] };
			}
		).settings.categories = [
			{ name: "Movies", contentType: "movie", typeValue: "Movie", folder: "" },
		];

		const file = new obsidianStub.TFile("Media/Dune.md");
		stub.setActiveFile(file);
		Object.assign(stub.app.metadataCache, {
			getFileCache: () => ({
				frontmatter: { Type: "Movie", Name: "Dune", Trailer: "https://youtu.be/T1vJ8OdJqOo" },
			}),
		});

		// The reading view the plugin will find through getActiveViewOfType.
		const viewEl = document.createElement("div");
		const sizer = viewEl.createDiv({ cls: "markdown-preview-sizer" });
		const modHeader = sizer.createDiv({ cls: "mod-header mod-ui" });
		modHeader.createDiv({ cls: "inline-title", text: "Dune" });
		const props = modHeader.createDiv({ cls: "metadata-container" });
		stub.setActiveView({ file, containerEl: viewEl });

		stub.workspace.emit("file-open", file);
		expect(viewEl.querySelector(".note-header-wrap")).toBeNull();
		await vi.advanceTimersByTimeAsync(60);

		// Anchored to the properties panel — inside `mod-header`, the one part
		// of the reading view that survives its section re-renders.
		const wrap = viewEl.querySelector(".note-header-wrap");
		expect(wrap).not.toBeNull();
		expect(props.nextElementSibling).toBe(wrap);
		expect(wrap?.querySelector(".note-header-media iframe")).not.toBeNull();

		// Every later render event keeps exactly one header.
		stub.workspace.emit("layout-change");
		await vi.advanceTimersByTimeAsync(60);
		expect(viewEl.querySelectorAll(".note-header-wrap")).toHaveLength(1);

		// A note outside the configured categories gets none — and takes any
		// leftover header of the previous note with it.
		Object.assign(stub.app.metadataCache, {
			getFileCache: () => ({ frontmatter: { Type: "Unknown" } }),
		});
		stub.workspace.emit("layout-change");
		await vi.advanceTimersByTimeAsync(60);
		expect(viewEl.querySelectorAll(".note-header-wrap")).toHaveLength(0);
	});

	it("retries until the reading view has rendered its properties panel", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();

		(
			plugin as unknown as {
				settings: { categories: unknown[] };
			}
		).settings.categories = [
			{ name: "Movies", contentType: "movie", typeValue: "Movie", folder: "" },
		];

		const file = new obsidianStub.TFile("Media/Dune.md");
		stub.setActiveFile(file);
		Object.assign(stub.app.metadataCache, {
			getFileCache: () => ({
				frontmatter: { Type: "Movie", Name: "Dune", Trailer: "https://youtu.be/T1vJ8OdJqOo" },
			}),
		});

		// First render: the sizer exists but is still empty (its sections have
		// not been rendered yet), so nothing is inserted — only a retry is set.
		const viewEl = document.createElement("div");
		const sizer = viewEl.createDiv({ cls: "markdown-preview-sizer" });
		stub.setActiveView({ file, containerEl: viewEl });

		stub.workspace.emit("file-open", file);
		await vi.advanceTimersByTimeAsync(60);
		expect(viewEl.querySelector(".note-header-wrap")).toBeNull();

		// The sections appear; the retry anchors the header to the panel.
		const modHeader = sizer.createDiv({ cls: "mod-header mod-ui" });
		const props = modHeader.createDiv({ cls: "metadata-container" });
		await vi.advanceTimersByTimeAsync(90);

		const wrap = viewEl.querySelector(".note-header-wrap");
		expect(wrap).not.toBeNull();
		expect(props.nextElementSibling).toBe(wrap);
		expect(viewEl.querySelectorAll(".note-header-wrap")).toHaveLength(1);
	});

	it("falls back to the top of an already rendered sizer", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();

		(
			plugin as unknown as {
				settings: { categories: unknown[] };
			}
		).settings.categories = [
			{ name: "Movies", contentType: "movie", typeValue: "Movie", folder: "" },
		];

		const file = new obsidianStub.TFile("Media/Dune.md");
		stub.setActiveFile(file);
		Object.assign(stub.app.metadataCache, {
			getFileCache: () => ({
				frontmatter: { Type: "Movie", Name: "Dune", Trailer: "https://youtu.be/T1vJ8OdJqOo" },
			}),
		});

		// A rendered sizer that has no header section (older renderers): the
		// header goes to the top as it always did.
		const viewEl = document.createElement("div");
		const sizer = viewEl.createDiv({ cls: "markdown-preview-sizer" });
		sizer.createDiv({ cls: "markdown-preview-pusher" });
		stub.setActiveView({ file, containerEl: viewEl });

		stub.workspace.emit("file-open", file);
		await vi.advanceTimersByTimeAsync(60);

		expect(
			sizer.firstElementChild?.classList.contains("note-header-wrap"),
		).toBe(true);
		expect(viewEl.querySelectorAll(".note-header-wrap")).toHaveLength(1);
	});

	it("renders trailer, stills and seasons when the frontmatter carries them", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();

		const build = (
			plugin as unknown as {
				buildNoteHeader(
					file: unknown,
					fm: Record<string, unknown>,
				): HTMLElement;
			}
		).buildNoteHeader.bind(plugin);
		const file = new obsidianStub.TFile("Media/Dune.md");

		const wrap = build(file, {
			Name: "Dune",
			Runtime: 148,
			Trailer: "https://www.youtube.com/watch?v=T1vJ8OdJqOo",
			Gallery: [
				"https://image.tmdb.org/t/p/w780/a.jpg",
				"https://image.tmdb.org/t/p/w780/b.jpg",
			],
			Seasons: [
				{ name: "Season 1", episodes: 8, rating: 8.1, trailer: "https://youtu.be/abc123" },
				{ name: "Season 2", episodes: 9, rating: 8.4, trailer: "" },
			],
		});

		expect(wrap.classList.contains("note-header-wrap")).toBe(true);
		const iframe = wrap.querySelector(".note-header-media iframe");
		expect(iframe?.getAttribute("src")).toBe(
			"https://www.youtube-nocookie.com/embed/T1vJ8OdJqOo",
		);

		const thumbs = wrap.querySelectorAll(".note-header-gallery a");
		expect(thumbs).toHaveLength(2);
		expect(thumbs[0]?.getAttribute("rel")).toBe("noopener noreferrer");
		expect(thumbs[0]?.getAttribute("href")).toContain("image.tmdb.org");

		// A plain click must enlarge the still inside Obsidian instead of
		// handing it to the browser — as a plain overlay, not a modal window;
		// modifier clicks stay the escape hatch.
		const modalsBefore = obsidianStub.Modal.instances.length;
		const cancelable = new MouseEvent("click", { bubbles: true, cancelable: true });
		thumbs[0]?.dispatchEvent(cancelable);
		expect(cancelable.defaultPrevented).toBe(true);
		const overlay = activeDocument.body.querySelector(".library-lightbox");
		expect(overlay).not.toBeNull();
		expect(overlay?.querySelector("img")?.getAttribute("src")).toBe(
			"https://image.tmdb.org/t/p/w780/a.jpg",
		);
		expect(obsidianStub.Modal.instances).toHaveLength(modalsBefore);

		// Arrow keys walk the gallery and wrap around at the ends.
		activeDocument.dispatchEvent(
			new KeyboardEvent("keydown", { key: "ArrowRight" }),
		);
		expect(overlay?.querySelector("img")?.getAttribute("src")).toBe(
			"https://image.tmdb.org/t/p/w780/b.jpg",
		);
		activeDocument.dispatchEvent(
			new KeyboardEvent("keydown", { key: "ArrowRight" }),
		);
		expect(overlay?.querySelector("img")?.getAttribute("src")).toBe(
			"https://image.tmdb.org/t/p/w780/a.jpg",
		);
		activeDocument.dispatchEvent(
			new KeyboardEvent("keydown", { key: "ArrowLeft" }),
		);
		expect(overlay?.querySelector("img")?.getAttribute("src")).toBe(
			"https://image.tmdb.org/t/p/w780/b.jpg",
		);

		// Escape closes it, and so does a click on the backdrop.
		activeDocument.dispatchEvent(
			new KeyboardEvent("keydown", { key: "Escape" }),
		);
		expect(activeDocument.body.querySelector(".library-lightbox")).toBeNull();
		thumbs[1]?.dispatchEvent(
			new MouseEvent("click", { bubbles: true, cancelable: true }),
		);
		const reopened = activeDocument.body.querySelector(".library-lightbox");
		reopened?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		expect(activeDocument.body.querySelector(".library-lightbox")).toBeNull();

		const modified = new MouseEvent("click", {
			bubbles: true,
			cancelable: true,
			metaKey: true,
		});
		thumbs[1]?.dispatchEvent(modified);
		expect(modified.defaultPrevented).toBe(false);
		expect(activeDocument.body.querySelector(".library-lightbox")).toBeNull();
		expect(obsidianStub.Modal.instances).toHaveLength(modalsBefore);

		const rows = wrap.querySelectorAll(
			".note-header-seasons .note-header-season",
		);
		expect(rows).toHaveLength(2);
		expect(rows[0]?.textContent).toContain("Season 1");
		expect(rows[0]?.querySelector("button")).not.toBeNull();
		// No trailer link on the season -> no button.
		expect(rows[1]?.querySelector("button")).toBeNull();

		// The rows the note header gains from the same data: this note carries a
		// season list, so its 148-minute episodes are counted as a whole run.
		const runtimeRow = [...wrap.querySelectorAll(".note-header-row")].find(
			(row) => row.textContent?.includes("41 h 56 min"),
		);
		expect(runtimeRow).toBeDefined();

		// Anything under an hour stays in minutes.
		const shortFilm = build(file, { Name: "Pi", Runtime: 45 });
		expect(
			[...shortFilm.querySelectorAll(".note-header-row")].some((row) =>
				row.textContent?.includes("45 min"),
			),
		).toBe(true);

		// A series stores the length of one episode but shows the whole run as
		// hours and minutes: 8 + 9 episodes at 45 minutes each.
		const series = build(file, {
			Name: "Fargo",
			Type: "Series",
			Runtime: 45,
			Seasons: [
				{ name: "Season 1", episodes: 8 },
				{ name: "Season 2", episodes: 9 },
			],
		});
		expect(
			[...series.querySelectorAll(".note-header-row")].some((row) =>
				row.textContent?.includes("12 h 45 min"),
			),
		).toBe(true);

		// Without season counts the Progress denominator stands in for them.
		const counted = build(file, {
			Name: "Fargo",
			Type: "Series",
			Runtime: 57,
			Progress: "10/51",
		});
		expect(
			[...counted.querySelectorAll(".note-header-row")].some((row) =>
				row.textContent?.includes("48 h 27 min"),
			),
		).toBe(true);

		// Without those fields there is nothing to render — this is the state
		// of a note whose source had no trailer data.
		const plain = build(file, { Name: "Dune" });
		expect(plain.querySelector(".note-header-media")).toBeNull();
		expect(plain.querySelector(".note-header-seasons")).toBeNull();
	});

	it("adopts a hand-made note whose title matches a search hit", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();

		const internals = plugin as unknown as {
			settings: { categories: unknown[]; omdbApiKey: string };
			tryRefresh(force: boolean): Promise<void>;
		};
		internals.settings.categories = [
			{ name: "Movies", contentType: "movie", typeValue: "Movie", folder: "" },
		];
		internals.settings.omdbApiKey = "key";

		const store: Record<string, unknown> = { Type: "Movie", Name: "Dune" };
		const file = new obsidianStub.TFile("Media/Dune.md");
		stub.setActiveFile(file);
		Object.assign(stub.app.metadataCache, {
			getFileCache: () => ({ frontmatter: store }),
		});
		Object.assign(stub.app.fileManager, {
			processFrontMatter: (
				_target: unknown,
				cb: (fm: Record<string, unknown>) => void,
			) => {
				cb(store);
				return Promise.resolve();
			},
		});

		obsidianStub.stubRequest({
			match: /[?&]s=/,
			json: {
				Search: [{ Title: "Dune", Year: "2021", imdbID: "tt1160419" }],
				Response: "True",
			},
		});
		obsidianStub.stubRequest({
			match: /[?&]i=/,
			json: {
				Title: "Dune",
				Year: "2021",
				Genre: "Sci-Fi, Adventure",
				Director: "Denis Villeneuve",
				Poster: "https://m.media-amazon.com/dune.jpg",
				imdbRating: "8.0",
				Runtime: "155 min",
				imdbID: "tt1160419",
				Response: "True",
			},
		});

		await internals.tryRefresh(true);

		expect(store.Source).toBe("omdb");
		expect(store["Source ID"]).toBe("tt1160419");
		expect(store.Cover).toBe("https://m.media-amazon.com/dune.jpg");
		expect(store["Rating IMDB"]).toBe(8);
		expect(store.Runtime).toBe(155);
		// Whatever the user had already written stays as it was.
		expect(store.Name).toBe("Dune");
		expect(store.Type).toBe("Movie");

		// A near miss does not guess: the command opens the picker with the
		// note's own name already in the search field.
		const mystery: Record<string, unknown> = { Type: "Movie", Name: "Mystery" };
		const mysteryFile = new obsidianStub.TFile("Media/Mystery.md");
		stub.setActiveFile(mysteryFile);
		Object.assign(stub.app.metadataCache, {
			getFileCache: () => ({ frontmatter: mystery }),
		});
		obsidianStub.resetRequests();
		obsidianStub.stubRequest({
			match: /[?&]s=/,
			json: {
				Search: [{ Title: "Mystery Men", Year: "1999", imdbID: "tt0132347" }],
				Response: "True",
			},
		});

		const modalsBefore = obsidianStub.Modal.instances.length;
		await internals.tryRefresh(true);
		expect(obsidianStub.Modal.instances).toHaveLength(modalsBefore + 1);
		const picker = obsidianStub.Modal.instances[modalsBefore] as unknown as {
			inputEl: HTMLInputElement;
		};
		expect(picker.inputEl.value).toBe("Mystery");
		expect(mystery["Source ID"]).toBeUndefined();

		// Opening a note does not pop anything up on its own, but it does try.
		const unknown: Record<string, unknown> = { Type: "Movie", Name: "Nothing" };
		stub.setActiveFile(new obsidianStub.TFile("Media/Nothing.md"));
		Object.assign(stub.app.metadataCache, {
			getFileCache: () => ({ frontmatter: unknown }),
		});
		obsidianStub.resetRequests();
		obsidianStub.stubRequest({
			match: /[?&]s=/,
			json: { Search: [], Response: "False" },
		});
		await internals.tryRefresh(false);
		expect(obsidianStub.Modal.instances).toHaveLength(modalsBefore + 1);
		expect(
			obsidianStub.requestLog.some((url) => url.includes("s=Nothing")),
		).toBe(true);
	});

	// Shared setup for the background-walk tests: two movie notes with source
	// ids, frontmatter kept in `store`, OMDb answering per id.
	async function walkFixture(): Promise<{
		plugin: LoadedPlugin;
		store: Record<string, Record<string, unknown>>;
		internals: {
			settings: { categories: unknown[]; omdbApiKey: string; enrichMarks: Record<string, string> };
			scheduleEnrich(delay: number): void;
			saveSettings(): Promise<void>;
			enrichRunning: boolean;
		};
	}> {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();
		const internals = plugin as unknown as {
			settings: { categories: unknown[]; omdbApiKey: string; enrichMarks: Record<string, string> };
			scheduleEnrich(delay: number): void;
			saveSettings(): Promise<void>;
			enrichRunning: boolean;
		};
		internals.settings.categories = [
			{ name: "Movies", contentType: "movie", typeValue: "Movie", folder: "" },
		];
		internals.settings.omdbApiKey = "key";
		await internals.saveSettings();

		const files = [
			new obsidianStub.TFile("Media/Dune.md"),
			new obsidianStub.TFile("Media/Alien.md"),
		];
		const store: Record<string, Record<string, unknown>> = {
			"Media/Dune.md": { Type: "Movie", Name: "Dune", "Source ID": "tt1160419" },
			"Media/Alien.md": { Type: "Movie", Name: "Alien", "Source ID": "tt0078748" },
		};
		Object.assign(stub.app.vault, { getMarkdownFiles: () => files });
		Object.assign(stub.app.metadataCache, {
			getFileCache: (file: { path: string }) => ({ frontmatter: store[file.path] ?? null }),
		});
		Object.assign(stub.app.fileManager, {
			processFrontMatter: (file: { path: string }, cb: (fm: Record<string, unknown>) => void) => {
				cb(store[file.path] ?? {});
				return Promise.resolve();
			},
		});
		for (const [id, title] of [["tt1160419", "Dune"], ["tt0078748", "Alien"]]) {
			obsidianStub.stubRequest({
				match: new RegExp(`omdbapi\\.com/\\?.*i=${id}`),
				json: { Response: "True", Title: title, Year: "1979", Runtime: "117 min", imdbID: id, Poster: "N/A" },
			});
		}
		return { plugin, store, internals };
	}

	it("finishes a walk when a key changes mid-way, then walks again", async () => {
		const { internals } = await walkFixture();
		// Let the walk scheduled by the first save (10 s) run out on its own.
		await vi.advanceTimersByTimeAsync(20_000);
		expect(internals.enrichRunning).toBe(false);

		internals.settings.enrichMarks = {};
		internals.scheduleEnrich(0);
		await vi.advanceTimersByTimeAsync(100);
		// First note fetched, the walk now sleeps before the second one.
		expect(internals.enrichRunning).toBe(true);

		// A key typed now used to cancel that sleep and hang the walk forever.
		internals.settings.omdbApiKey = "other-key";
		await internals.saveSettings();
		await vi.advanceTimersByTimeAsync(5_000);
		expect(internals.enrichRunning).toBe(false);

		// The restart reaches every note again, with the new key.
		expect(internals.settings.enrichMarks["Media/Dune.md"]).toBe(manifest.version);
		expect(internals.settings.enrichMarks["Media/Alien.md"]).toBe(manifest.version);
		expect(
			obsidianStub.requestLog.filter((url) => url.includes("apikey=other-key")).length,
		).toBeGreaterThanOrEqual(2);
	});

	it("leaves a failed or offline note unmarked for the next walk", async () => {
		const { internals, store } = await walkFixture();
		await vi.advanceTimersByTimeAsync(20_000);

		// OMDb over quota for one title: that note must not count as done.
		obsidianStub.resetRequests();
		obsidianStub.stubRequest({
			match: /omdbapi\.com\/\?.*i=tt0078748/,
			status: 401,
			json: { Response: "False", Error: "Request limit reached!" },
		});
		obsidianStub.stubRequest({
			match: /omdbapi\.com\/\?.*i=tt1160419/,
			json: { Response: "True", Title: "Dune", imdbID: "tt1160419", Poster: "N/A" },
		});
		internals.settings.enrichMarks = { "Media/Gone.md": manifest.version };
		internals.scheduleEnrich(0);
		await vi.advanceTimersByTimeAsync(5_000);
		expect(internals.settings.enrichMarks["Media/Dune.md"]).toBe(manifest.version);
		expect(internals.settings.enrichMarks["Media/Alien.md"]).toBeUndefined();
		// The mark of a note that no longer exists is dropped by a full walk.
		expect(internals.settings.enrichMarks["Media/Gone.md"]).toBeUndefined();
		expect(store["Media/Alien.md"]?.Name).toBe("Alien");

		// Offline, the walk stops before sending anything.
		const online = vi.spyOn(navigator, "onLine", "get").mockReturnValue(false);
		obsidianStub.resetRequests();
		internals.settings.enrichMarks = {};
		internals.scheduleEnrich(0);
		await vi.advanceTimersByTimeAsync(5_000);
		online.mockRestore();
		expect(obsidianStub.requestLog).toEqual([]);
		expect(internals.settings.enrichMarks).toEqual({});
	});

	it("takes its headers out of open notes when it unloads", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();

		const viewEl = document.createElement("div");
		viewEl.createDiv({ cls: "note-header-wrap" });
		viewEl.createDiv({ cls: "markdown-preview-section" });
		Object.assign(stub.app.workspace, {
			getLeavesOfType: (type: string) =>
				type === "markdown" ? [{ view: { containerEl: viewEl } }] : [],
		});

		plugin.onunload();
		expect(viewEl.querySelector(".note-header-wrap")).toBeNull();
		expect(viewEl.querySelector(".markdown-preview-section")).not.toBeNull();
	});

	it("reloads settings that sync changed on disk", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();

		const internals = plugin as unknown as {
			settings: { omdbApiKey: string; categories: unknown[] };
			data: unknown;
			onExternalSettingsChange(): Promise<void>;
			apiKeySignature(): string;
			keySignature: string;
		};
		internals.data = {
			omdbApiKey: "from-another-device",
			categories: [{ name: "Movies", contentType: "movie", typeValue: "Movie", folder: "" }, null],
		};
		await internals.onExternalSettingsChange();

		expect(internals.settings.omdbApiKey).toBe("from-another-device");
		// A broken entry in a half-synced file is dropped instead of crashing.
		expect(internals.settings.categories).toHaveLength(1);
		// The reload is not mistaken for a key typed here.
		expect(internals.keySignature).toBe(internals.apiKeySignature());
	});

	it("never turns frontmatter links with other schemes into clickable links", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();

		const build = (
			plugin as unknown as {
				buildNoteHeader(file: unknown, fm: Record<string, unknown>): HTMLElement;
			}
		).buildNoteHeader.bind(plugin);
		const wrap = build(new obsidianStub.TFile("Media/Evil.md"), {
			Name: "Evil",
			URL: "javascript:alert(1)",
			Trailer: "javascript:alert(2)",
			Gallery: ["javascript:alert(3)", "https://image.tmdb.org/t/p/w780/a.jpg"],
		});

		const hrefs = [...wrap.querySelectorAll("a")].map((a) => a.getAttribute("href") ?? "");
		expect(hrefs).toEqual(["https://image.tmdb.org/t/p/w780/a.jpg"]);
		expect(wrap.querySelector(".note-header-title")?.textContent).toContain("Evil");
	});

	it("asks for the missing key instead of searching a keyless movie source", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();

		const internals = plugin as unknown as {
			settings: { categories: unknown[]; omdbApiKey: string };
			tryRefresh(force: boolean): Promise<void>;
		};
		internals.settings.categories = [
			{ name: "Movies", contentType: "movie", typeValue: "Movie", folder: "" },
		];
		internals.settings.omdbApiKey = "";
		stub.setActiveFile(new obsidianStub.TFile("Media/Dune.md"));
		Object.assign(stub.app.metadataCache, {
			getFileCache: () => ({ frontmatter: { Type: "Movie", Name: "Dune" } }),
		});

		const noticesBefore = obsidianStub.Notice.instances.length;
		const modalsBefore = obsidianStub.Modal.instances.length;
		await internals.tryRefresh(true);
		const message = obsidianStub.Notice.instances[noticesBefore]?.message;
		expect(typeof message === "string" ? message : "").toContain("OMDb API key");
		expect(obsidianStub.Modal.instances).toHaveLength(modalsBefore);
		expect(obsidianStub.requestLog).toEqual([]);
	});

	it("does not adopt a remake silently when the title is ambiguous", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();

		const internals = plugin as unknown as {
			settings: { categories: unknown[]; omdbApiKey: string };
			tryRefresh(force: boolean): Promise<void>;
		};
		internals.settings.categories = [
			{ name: "Movies", contentType: "movie", typeValue: "Movie", folder: "" },
		];
		internals.settings.omdbApiKey = "key";
		const store: Record<string, unknown> = { Type: "Movie", Name: "Dune" };
		stub.setActiveFile(new obsidianStub.TFile("Media/Dune.md"));
		Object.assign(stub.app.metadataCache, {
			getFileCache: () => ({ frontmatter: store }),
		});
		Object.assign(stub.app.fileManager, {
			processFrontMatter: (_file: unknown, cb: (fm: Record<string, unknown>) => void) => {
				cb(store);
				return Promise.resolve();
			},
		});
		obsidianStub.stubRequest({
			match: /[?&]s=/,
			json: {
				Search: [
					{ Title: "Dune", Year: "2021", imdbID: "tt1160419" },
					{ Title: "Dune", Year: "1984", imdbID: "tt0087182" },
				],
				Response: "True",
			},
		});
		obsidianStub.stubRequest({
			match: /[?&]i=tt0087182/,
			json: { Title: "Dune", Year: "1984", imdbID: "tt0087182", Poster: "N/A", Response: "True" },
		});

		await internals.tryRefresh(false);
		expect(store["Source ID"]).toBeUndefined();

		// The note's own year settles it.
		store.Year = 1984;
		await internals.tryRefresh(true);
		expect(store["Source ID"]).toBe("tt0087182");
	});

	it("redraws the library only for library notes and keeps a fold", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();

		(plugin as unknown as { settings: { categories: unknown[] } }).settings.categories = [
			{ name: "Movies", contentType: "movie", typeValue: "Movie", folder: "" },
		];
		const dune = new obsidianStub.TFile("Media/Dune.md");
		const diary = new obsidianStub.TFile("Diary/Today.md");
		const frontmatter: Record<string, Record<string, unknown>> = {
			"Media/Dune.md": { Type: "Movie", Name: "Dune", Genre: ["Sci-Fi"] },
			// Not a library note: its genre must not reach the statistics.
			"Diary/Today.md": { Genre: ["Diary"] },
		};
		Object.assign(stub.app.vault, { getMarkdownFiles: () => [dune, diary] });
		Object.assign(stub.app.metadataCache, {
			getFileCache: (file: { path: string }) => ({ frontmatter: frontmatter[file.path] ?? null }),
		});

		const factory = plugin.views.get("library-view");
		if (!factory) throw new Error("no library view registered");
		const leaf = new obsidianStub.WorkspaceLeaf();
		leaf.app = stub.app;
		const view = factory(leaf) as { onOpen(): Promise<void>; contentEl: HTMLElement };
		await view.onOpen();

		const genres = [...view.contentEl.querySelectorAll(".library-stats-medal-name")].map(
			(el) => el.textContent,
		);
		expect(genres).toContain("Sci-Fi");
		expect(genres).not.toContain("Diary");

		const fold = view.contentEl.querySelector(".library-section .library-collapse-btn");
		fold?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		expect(view.contentEl.querySelector(".library-grid")?.classList.contains("collapsed")).toBe(true);

		// Typing in an unrelated note schedules nothing.
		const timers = vi.getTimerCount();
		stub.metadataCache.emit("changed", diary);
		expect(vi.getTimerCount()).toBe(timers);

		// A library note does redraw — and the fold survives it.
		stub.metadataCache.emit("changed", dune);
		await vi.advanceTimersByTimeAsync(300);
		expect(view.contentEl.querySelector(".library-grid")?.classList.contains("collapsed")).toBe(true);
		expect(
			view.contentEl.querySelector(".library-section .library-collapse-btn")?.textContent,
		).toBe("▶");

		// The fold is written to the settings file: a fresh view (a second tab
		// or a restart) opens the section folded, and unfolding clears it.
		expect(JSON.stringify((plugin as unknown as { data: unknown }).data)).toContain('"collapsed":true');
		const reopened = factory(leaf) as { onOpen(): Promise<void>; contentEl: HTMLElement };
		await reopened.onOpen();
		const again = reopened.contentEl.querySelector(".library-section .library-collapse-btn");
		expect(reopened.contentEl.querySelector(".library-grid")?.classList.contains("collapsed")).toBe(true);
		expect(again?.textContent).toBe("▶");
		again?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		expect(JSON.stringify((plugin as unknown as { data: unknown }).data)).not.toContain('"collapsed"');
	});

	it("counts a numeric property like any other and keeps the add row when all is listed", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();
		const internals = plugin as unknown as {
			settings: {
				categories: unknown[];
				stats: { watchTime: boolean; tops: Array<{ kind: string; key: string }> };
			};
		};
		internals.settings.categories = [{ name: "Movies", contentType: "movie", typeValue: "Movie", folder: "" }];
		internals.settings.stats = {
			watchTime: false,
			tops: [
				{ kind: "property", key: "Year" },
				{ kind: "category", key: "Movie" },
			],
		};
		const files = [new obsidianStub.TFile("a.md"), new obsidianStub.TFile("b.md"), new obsidianStub.TFile("c.md")];
		const frontmatter: Record<string, Record<string, unknown>> = {
			"a.md": { Type: "Movie", Name: "Dune", Year: 2021 },
			"b.md": { Type: "Movie", Name: "Arrival", Year: 2016 },
			"c.md": { Type: "Movie", Name: "Tenet", Year: 2021 },
		};
		Object.assign(stub.app.vault, { getMarkdownFiles: () => files });
		Object.assign(stub.app.metadataCache, {
			getFileCache: (file: { path: string }) => ({ frontmatter: frontmatter[file.path] ?? null }),
		});

		const factory = plugin.views.get("library-view");
		if (!factory) throw new Error("no library view registered");
		const leaf = new obsidianStub.WorkspaceLeaf();
		leaf.app = stub.app;
		const view = factory(leaf) as { render(): void; contentEl: HTMLElement };
		view.render();
		const yearColumn = [...view.contentEl.querySelectorAll(".library-stats-col")].find(
			(col) => col.querySelector("h3")?.textContent === "Top: Year",
		);
		expect(
			[...(yearColumn?.querySelectorAll(".library-stats-medal-label") ?? [])].map((el) => el.textContent),
		).toEqual(["20212 works", "20161 work"]);

		// Every category and property already has its column: the add row is
		// still there, just switched off.
		const tab = (plugin.settingTabs as unknown as Array<{ containerEl: HTMLElement; display(): void }>)[0];
		if (!tab) throw new Error("no settings tab registered");
		tab.display();
		const addRow = [...tab.containerEl.querySelectorAll(".setting-item")].find(
			(el) => el.firstElementChild?.textContent === "Add top",
		);
		expect(addRow?.querySelector("select")?.disabled).toBe(true);
		expect(addRow?.querySelector("button")?.disabled).toBe(true);
	});

	it("shows the statistics columns the settings list, in their order", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();

		type Top = { kind: "category" | "property"; key: string };
		const internals = plugin as unknown as {
			settings: {
				categories: Array<{ name: string; typeValue: string; contentType: string; folder: string }>;
				stats: { watchTime: boolean; tops: Top[] };
			};
			data: unknown;
		};
		internals.settings.categories = [
			{ name: "Movies", contentType: "movie", typeValue: "Movie", folder: "" },
			{ name: "Series", contentType: "series", typeValue: "Series", folder: "" },
			{ name: "Books", contentType: "book", typeValue: "Book", folder: "" },
		];
		internals.settings.stats.tops = [
			{ kind: "property", key: "Genre" },
			{ kind: "property", key: "Creator" },
			{ kind: "property", key: "Cast" },
			{ kind: "category", key: "Movie" },
			{ kind: "category", key: "Series" },
		];
		const files = [
			new obsidianStub.TFile("Media/Dune.md"),
			new obsidianStub.TFile("Media/Arrival.md"),
			new obsidianStub.TFile("Series/Dune Prophecy.md"),
			new obsidianStub.TFile("Books/Dune.md"),
		];
		const frontmatter: Record<string, Record<string, unknown>> = {
			"Media/Dune.md": {
				Type: "Movie", Name: "Dune", Genre: ["[[Sci-Fi]]"], Creator: ["[[Denis Villeneuve]]"], Cast: ["[[Zendaya]]"],
				Studio: "Legendary", URL: "https://www.imdb.com/title/tt1160419/", "My Rating": 9, Progress: "1/1", Complete: true, Runtime: 155,
			},
			// Another spelling of the same property and of the same value.
			"Media/Arrival.md": {
				Type: "Movie", Name: "Arrival", genre: ["sci-fi", "Drama"], Creator: ["[[Denis Villeneuve]]"], Cast: ["[[Amy Adams]]"], "My Rating": 8,
			},
			"Series/Dune Prophecy.md": {
				Type: "Series", Name: "Dune: Prophecy", Genre: ["[[Sci-Fi]]"], Cast: ["[[Emily Watson]]"], Studio: "Legendary",
				"My Rating": 7, Progress: "3/6", Runtime: 60,
			},
			"Books/Dune.md": { Type: "Book", Name: "Dune", Genre: ["[[Science Fiction]]"], Creator: ["[[Frank Herbert]]"], "My Rating": 10 },
		};
		Object.assign(stub.app.vault, { getMarkdownFiles: () => files });
		Object.assign(stub.app.metadataCache, {
			getFileCache: (file: { path: string }) => ({ frontmatter: frontmatter[file.path] ?? null }),
		});

		const factory = plugin.views.get("library-view");
		if (!factory) throw new Error("no library view registered");
		const leaf = new obsidianStub.WorkspaceLeaf();
		leaf.app = stub.app;
		const view = factory(leaf) as { render(): void; contentEl: HTMLElement };
		const headings = (): string[] =>
			[...view.contentEl.querySelectorAll(".library-stats-tops h3")].map((h) => h.textContent ?? "");
		const column = (title: string): string[] => {
			const col = [...view.contentEl.querySelectorAll(".library-stats-tops .library-stats-col")].find(
				(el) => el.querySelector("h3")?.textContent === title,
			);
			return [...(col?.querySelectorAll(".library-stats-medal-label") ?? [])].map((el) => el.textContent ?? "");
		};

		view.render();
		// A category column is named after its medium, the way the property
		// columns are: "Top movies", not "Top rated · Movies".
		expect(headings()).toEqual(["Top genres", "Top creators", "Top actors", "Top movies", "Top series"]);
		expect(column("Top genres")[0]).toBe("Sci-Fi3 works");
		expect(column("Top movies")[0]).toBe("Dune★ 9");
		expect(view.contentEl.querySelector(".library-time-col")).not.toBeNull();

		// The settings list the columns and offer the rest: the categories,
		// then each property of the notes once, and none that cannot rank.
		const tab = (plugin.settingTabs as unknown as Array<{ containerEl: HTMLElement; display(): void }>)[0];
		if (!tab) throw new Error("no settings tab registered");
		tab.display();
		const select = (): HTMLSelectElement => {
			const row = [...tab.containerEl.querySelectorAll(".setting-item")].find(
				(el) => el.firstElementChild?.textContent === "Add top",
			);
			const found = row?.querySelector("select");
			if (!(found instanceof HTMLSelectElement)) throw new Error("no add-top dropdown");
			return found;
		};
		const groups = [...select().querySelectorAll("optgroup")].map((group) => ({
			label: group.getAttribute("label"),
			options: [...group.querySelectorAll("option")].map((option) => option.textContent),
		}));
		expect(groups[0]).toEqual({ label: "Categories", options: ["Books"] });
		expect(groups[1]?.label).toBe("Properties");
		expect(groups[1]?.options).toContain("Studio");
		for (const hidden of ["Genre", "genre", "Name", "URL", "Type", "My Rating", "Runtime", "Progress", "Complete"]) {
			expect(groups[1]?.options).not.toContain(hidden);
		}

		// Add "Studio" through the dropdown and the button, as a user does.
		const pick = (label: string): void => {
			const dropdown = select();
			const option = [...dropdown.querySelectorAll("option")].find((o) => o.textContent === label);
			if (!option) throw new Error(`no option ${label}`);
			dropdown.value = option.value;
			dropdown.dispatchEvent(new Event("change"));
			const button = dropdown.closest(".setting-item")?.querySelector("button");
			button?.dispatchEvent(new MouseEvent("click"));
		};
		pick("Studio");
		await vi.advanceTimersByTimeAsync(0);
		expect(internals.settings.stats.tops.at(-1)).toEqual({ kind: "property", key: "Studio" });
		expect(JSON.stringify(internals.data)).toContain('"Studio"');

		// Remove "Top genres" with its trash button.
		const trash = [...tab.containerEl.querySelectorAll(".setting-item")]
			.find((el) => el.firstElementChild?.textContent === "Top genres")
			?.querySelector('[aria-label="Remove"]');
		trash?.dispatchEvent(new MouseEvent("click"));
		await vi.advanceTimersByTimeAsync(0);
		expect(internals.settings.stats.tops.map((top) => top.key)).toEqual(["Creator", "Cast", "Movie", "Series", "Studio"]);

		view.render();
		expect(headings()).toEqual(["Top creators", "Top actors", "Top movies", "Top series", "Top: Studio"]);
		expect(column("Top: Studio")).toEqual(["Legendary2 works"]);

		// Two categories of one medium cannot both be "Top movies".
		internals.settings.categories.push({ name: "Documentaries", contentType: "movie", typeValue: "Doc", folder: "" });
		internals.settings.stats.tops.push({ kind: "category", key: "Doc" });
		frontmatter["Media/Dune.md"]!.Type = "Doc";
		view.render();
		expect(headings()).toContain("Top: Movies");
		expect(headings()).toContain("Top: Documentaries");

		// Nothing left to show: the section goes away instead of an empty box.
		internals.settings.stats.watchTime = false;
		internals.settings.stats.tops = [];
		view.render();
		expect(view.contentEl.querySelector(".library-stats")).toBeNull();

		// The chart alone stands without an empty tops box beside it.
		internals.settings.stats.watchTime = true;
		view.render();
		const body = view.contentEl.querySelector(".library-stats-body");
		expect(body?.querySelector(".library-stats-tops")).toBeNull();
		expect(body?.querySelector(".library-time-col")).not.toBeNull();
	});

	it("keeps a category's column when the category is renamed, retyped or removed", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();
		const internals = plugin as unknown as {
			settings: {
				categories: Array<{ name: string; typeValue: string; contentType: string; folder: string }>;
				stats: { tops: Array<{ kind: string; key: string }> };
			};
		};
		const tab = (plugin.settingTabs as unknown as Array<{ containerEl: HTMLElement; display(): void }>)[0];
		if (!tab) throw new Error("no settings tab registered");
		tab.display();

		// Adding a category also adds its column, as every category had one before.
		const addRow = [...tab.containerEl.querySelectorAll(".setting-item")].find(
			(el) => el.firstElementChild?.textContent === "Add category",
		);
		addRow?.querySelector("button")?.dispatchEvent(new MouseEvent("click"));
		await vi.advanceTimersByTimeAsync(0);
		expect(internals.settings.categories.map((c) => c.typeValue)).toEqual(["Movie"]);
		expect(internals.settings.stats.tops.at(-1)).toEqual({ kind: "category", key: "Movie" });

		// A new Type value carries the column along.
		const row = (name: string): Element | undefined =>
			[...tab.containerEl.querySelectorAll(".setting-item")].find((el) => el.firstElementChild?.textContent === name);
		row("Movies")?.querySelector('[aria-label="Advanced"]')?.dispatchEvent(new MouseEvent("click"));
		const typeInput = row("Type value")?.querySelector("input");
		if (!(typeInput instanceof HTMLInputElement)) throw new Error("no type input");
		typeInput.value = "Film";
		typeInput.dispatchEvent(new Event("input"));
		await vi.advanceTimersByTimeAsync(0);
		expect(internals.settings.stats.tops.at(-1)).toEqual({ kind: "category", key: "Film" });

		// Removing the category removes its column.
		const trash = row("Movies")?.querySelector('[aria-label="Remove"]');
		trash?.dispatchEvent(new MouseEvent("click"));
		await vi.advanceTimersByTimeAsync(0);
		expect(internals.settings.categories).toEqual([]);
		expect(internals.settings.stats.tops.some((top) => top.kind === "category")).toBe(false);
	});

	it("loads statistics settings and turns the old switches into the column list", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		(plugin as unknown as { data: unknown }).data = {
			stats: { watchTime: false, topGenres: "yes", properties: ["Genre", 7, " ", "Studio", "genre"] },
			categories: [
				{ name: "Movies", contentType: "movie", typeValue: "Movie", folder: "", showTop: false },
				{ name: "Series", contentType: "series", typeValue: "Series", folder: "", stats: { rating: false, cast: false } },
				{ name: "Books", contentType: "book", typeValue: "Book", folder: "", stats: "junk" },
				{ name: "Games", contentType: "game", typeValue: "Game", folder: "", showRated: false },
			],
		};
		await plugin.onload();
		const settings = (plugin as unknown as {
			settings: { stats: unknown; categories: Array<Record<string, unknown>> };
		}).settings;
		// The same columns as before: the chosen properties, then every
		// category whose switch was on.
		expect(settings.stats).toEqual({
			watchTime: false,
			tops: [
				{ kind: "property", key: "Genre" },
				{ kind: "property", key: "Studio" },
				{ kind: "category", key: "Book" },
			],
		});
		for (const category of settings.categories) {
			expect("showTop" in category || "stats" in category || "showRated" in category).toBe(false);
		}

		// A saved list is taken as it is, minus what cannot be a column.
		(plugin as unknown as { data: unknown }).data = {
			stats: { tops: [{ kind: "property", key: "Cast" }, { kind: "bogus", key: "x" }, { kind: "category", key: "" }, "junk"] },
		};
		await (plugin as unknown as { onExternalSettingsChange(): Promise<void> }).onExternalSettingsChange();
		expect(settings.stats).not.toBe((plugin as unknown as { settings: { stats: unknown } }).settings.stats);
		expect((plugin as unknown as { settings: { stats: unknown } }).settings.stats).toEqual({
			watchTime: true,
			tops: [{ kind: "property", key: "Cast" }],
		});
	});

	it("keeps genres, creators and cast as links and drops Related", async () => {
		const PluginClass = loadPlugin(code);
		const stub = obsidianStub.createStubApp();
		const plugin = new PluginClass(stub.app, manifest);
		await plugin.onload();

		const internals = plugin as unknown as {
			settings: { categories: unknown[]; omdbApiKey: string };
			syncNote(file: unknown): Promise<void>;
			tryRefresh(force: boolean): Promise<void>;
			buildNoteHeader(file: unknown, fm: Record<string, unknown>): HTMLElement;
		};
		internals.settings.categories = [
			{ name: "Movies", contentType: "movie", typeValue: "Movie", folder: "" },
		];
		internals.settings.omdbApiKey = "key";
		const store: Record<string, unknown> = {
			Type: "Movie",
			Name: "Unforgiven",
			"Source ID": "tt0105695",
			// What an earlier version wrote: gone after the next sync.
			Related: ["[[Movie]]", "[[Western]]"],
		};
		const file = new obsidianStub.TFile("Media/Unforgiven.md");
		stub.setActiveFile(file);
		Object.assign(stub.app.metadataCache, { getFileCache: () => ({ frontmatter: store }) });
		Object.assign(stub.app.fileManager, {
			processFrontMatter: (_file: unknown, cb: (fm: Record<string, unknown>) => void) => {
				cb(store);
				return Promise.resolve();
			},
		});
		const created: string[] = [];
		Object.assign(stub.app.vault, {
			create: (path: string) => {
				created.push(path);
				return Promise.resolve(new obsidianStub.TFile(path));
			},
		});
		obsidianStub.stubRequest({
			match: /omdbapi\.com\/\?.*i=tt0105695/,
			json: {
				Response: "True",
				Title: "Unforgiven",
				Year: "1992",
				Genre: "Drama, Western",
				Director: "Clint Eastwood",
				Actors: "Clint Eastwood, Gene Hackman, Morgan Freeman",
				imdbID: "tt0105695",
				Poster: "N/A",
			},
		});

		// A refresh writes all three as links: each genre's, creator's and
		// actor's note then lists this title among its backlinks.
		await internals.tryRefresh(true);
		expect(store.Genre).toEqual(["[[Drama]]", "[[Western]]"]);
		expect(store.Creator).toEqual(["[[Clint Eastwood]]"]);
		expect(store.Cast).toEqual(["[[Clint Eastwood]]", "[[Gene Hackman]]", "[[Morgan Freeman]]"]);

		// Related is not needed any more, and no category hub note is made.
		await internals.syncNote(file);
		expect("Related" in store).toBe(false);
		expect(created).toEqual([]);

		// Plain names from an earlier version or typed by hand become links;
		// a link someone wrote with an alias stays exactly as it was.
		store.Genre = ["Drama", "[[Western|Westerns]]"];
		store.Creator = "Clint Eastwood";
		store.Cast = "Gene Hackman, Morgan Freeman";
		await internals.syncNote(file);
		expect(store.Genre).toEqual(["[[Drama]]", "[[Western|Westerns]]"]);
		expect(store.Creator).toEqual(["[[Clint Eastwood]]"]);
		expect(store.Cast).toEqual(["[[Gene Hackman]]", "[[Morgan Freeman]]"]);

		// The header shows the names, not the link syntax.
		const header = internals.buildNoteHeader.call(plugin, file, store);
		const rows = [...header.querySelectorAll(".note-header-row")].map((row) => row.textContent ?? "");
		expect(rows).toContain("Creator: Clint Eastwood");
		expect(rows).toContain("Genre: Drama, Westerns");
		expect(rows).toContain("Cast: Gene Hackman, Morgan Freeman");
	});
});
