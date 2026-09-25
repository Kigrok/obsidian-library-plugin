import type { App } from "obsidian";
import { describe, expect, it } from "vitest";
import type { ICategory } from "../../src/constants";
import { setStubLanguage } from "../stubs/obsidian";
import {
	coverSrc,
	coverValue,
	inferContentType,
	isEmptyValue,
	isTemplateFile,
	linkLabel,
	toLinks,
	parseDate,
	parseProgress,
	parseWatched,
	plausibleRuntime,
	runtimeMinutes,
	safeUrl,
	sameTitle,
	sanitizeFilename,
	sanitizeLink,
	topLabel,
	todayDmy,
	totalRuntimeMinutes,
	watchedRuntimeMinutes,
	toStrArray,
} from "../../src/util";

describe("coverValue", () => {
	it("reads the configured property first", () => {
		expect(coverValue({ Poster: "p.jpg", Cover: "c.jpg" }, "Poster")).toBe(
			"p.jpg",
		);
	});

	it("falls back to the legacy property names", () => {
		expect(coverValue({ Image: "i.jpg" })).toBe("i.jpg");
		expect(coverValue({ Baner: "b.jpg" })).toBe("b.jpg");
	});

	it("skips empty values", () => {
		expect(coverValue({ Cover: "", Image: "i.jpg" })).toBe("i.jpg");
		expect(coverValue({ Cover: [] as unknown[] })).toBeUndefined();
	});

	it("ignores an empty configured property name", () => {
		expect(coverValue({ Cover: "c.jpg" }, "")).toBe("c.jpg");
	});
});

describe("coverSrc", () => {
	const app = {
		vault: {
			getFileByPath: (path: string) =>
				path === "img/poster.jpg" ? { path } : null,
			getResourcePath: () => "app://local/img/poster.jpg",
		},
		metadataCache: {
			// Link resolution by name, the way `[[poster.jpg]]` finds the file.
			getFirstLinkpathDest: (link: string) =>
				link === "poster.jpg" ? { path: "img/poster.jpg" } : null,
		},
	} as unknown as App;

	it("passes remote URLs through", () => {
		expect(coverSrc(app, "https://x.dev/a.jpg")).toBe("https://x.dev/a.jpg");
	});

	it("resolves vault paths to resource URLs", () => {
		expect(coverSrc(app, "img/poster.jpg")).toBe(
			"app://local/img/poster.jpg",
		);
	});

	it("returns null for unknown files and empty input", () => {
		expect(coverSrc(app, "img/missing.jpg")).toBeNull();
		expect(coverSrc(app, "  ")).toBeNull();
	});

	it("resolves internal links the properties panel writes", () => {
		expect(coverSrc(app, "[[poster.jpg]]")).toBe("app://local/img/poster.jpg");
		expect(coverSrc(app, "![[poster.jpg|300]]")).toBe(
			"app://local/img/poster.jpg",
		);
		expect(coverSrc(app, "[[missing.jpg]]")).toBeNull();
	});
});

describe("safeUrl", () => {
	it("keeps web links", () => {
		expect(safeUrl(" https://www.imdb.com/title/tt1160419/ ")).toBe(
			"https://www.imdb.com/title/tt1160419/",
		);
		expect(safeUrl("http://example.com/a.jpg")).toBe("http://example.com/a.jpg");
	});

	it("rejects every scheme that could run inside the app", () => {
		expect(safeUrl("javascript:alert(1)")).toBeNull();
		expect(safeUrl(" JavaScript:alert(1)")).toBeNull();
		expect(safeUrl("data:text/html,<b>x</b>")).toBeNull();
		expect(safeUrl("file:///etc/passwd")).toBeNull();
		expect(safeUrl("app://local/x")).toBeNull();
		expect(safeUrl("https://")).toBeNull();
		expect(safeUrl(undefined)).toBeNull();
		expect(safeUrl(42)).toBeNull();
	});
});

describe("isEmptyValue", () => {
	it("treats null, '' and [] as empty", () => {
		expect(isEmptyValue(null)).toBe(true);
		expect(isEmptyValue(undefined)).toBe(true);
		expect(isEmptyValue("")).toBe(true);
		expect(isEmptyValue([])).toBe(true);
	});

	it("keeps populated values", () => {
		expect(isEmptyValue("x")).toBe(false);
		expect(isEmptyValue(["a"])).toBe(false);
		expect(isEmptyValue(0)).toBe(false);
		expect(isEmptyValue({})).toBe(false);
	});
});

describe("progress parsing", () => {
	it("reads 'watched/total'", () => {
		expect(parseWatched("5/12")).toBe(5);
		expect(parseWatched("watched 5/12")).toBe(0);
		expect(parseWatched(undefined)).toBe(0);
	});

	it("turns progress into a percentage", () => {
		expect(parseProgress("3/10")).toBe(30);
		expect(parseProgress(0.5)).toBe(50);
		expect(parseProgress(7)).toBe(7);
		expect(parseProgress("3/0")).toBe(0);
		expect(parseProgress("nope")).toBe(0);
	});
});

describe("runtimeMinutes", () => {
	it("parses OMDb strings", () => {
		expect(runtimeMinutes("148 min")).toBe(148);
		expect(runtimeMinutes("22 min")).toBe(22);
	});

	it("accepts plain numbers", () => {
		expect(runtimeMinutes(101)).toBe(101);
		expect(runtimeMinutes(0)).toBeNull();
	});

	it("rejects N/A and free text", () => {
		expect(runtimeMinutes("N/A")).toBeNull();
		expect(runtimeMinutes("")).toBeNull();
		expect(runtimeMinutes(undefined)).toBeNull();
		expect(runtimeMinutes("148")).toBeNull();
		expect(runtimeMinutes("about two hours")).toBeNull();
	});
});

describe("plausibleRuntime", () => {
	it("keeps lengths a real episode could have", () => {
		expect(plausibleRuntime("52 min")).toBe(52);
		expect(plausibleRuntime(5)).toBe(5);
		expect(plausibleRuntime(148)).toBe(148);
	});

	it("drops junk runtimes below the floor", () => {
		expect(plausibleRuntime("1 min")).toBeNull();
		expect(plausibleRuntime(4)).toBeNull();
		expect(plausibleRuntime("N/A")).toBeNull();
		expect(plausibleRuntime(null)).toBeNull();
	});
});

describe("totalRuntimeMinutes", () => {
	it("keeps a single runtime for non-series", () => {
		expect(totalRuntimeMinutes({ Type: "Movie" }, 148)).toBe(148);
		expect(totalRuntimeMinutes({}, 0)).toBe(0);
	});

	it("multiplies the episode length by the season counts", () => {
		expect(
			totalRuntimeMinutes(
				{
					Type: "Series",
					Seasons: [
						{ name: "Season 1", episodes: 8 },
						{ name: "Season 2", episodes: 9 },
					],
				},
				45,
			),
		).toBe(765);
	});

	it("falls back to the Progress denominator", () => {
		expect(
			totalRuntimeMinutes({ Type: "Series", Progress: "10/51" }, 57),
		).toBe(2907);
	});

	it("stays at one episode when nothing is known", () => {
		expect(totalRuntimeMinutes({ Type: "Series" }, 45)).toBe(45);
		expect(totalRuntimeMinutes({ Type: "Series", Progress: "1/1" }, 45)).toBe(
			45,
		);
		expect(totalRuntimeMinutes({ Type: "Series", Progress: "nope" }, 45)).toBe(
			45,
		);
	});

	// Anime is episodic too, whatever the note calls its Type.
	it("counts the episodes of an episodic note", () => {
		expect(totalRuntimeMinutes({ Type: "Anime", Progress: "12/25" }, 24)).toBe(
			600,
		);
	});
});

describe("watchedRuntimeMinutes", () => {
	it("charges a series for the episodes watched so far", () => {
		expect(
			watchedRuntimeMinutes({ Type: "Series", Runtime: 57, Progress: "10/51" }),
		).toBe(570);
		expect(
			watchedRuntimeMinutes({ Type: "Anime", Runtime: 24, Progress: "12/25" }),
		).toBe(288);
	});

	it("charges the whole run once the note is complete", () => {
		expect(
			watchedRuntimeMinutes({
				Type: "Series",
				Runtime: 60,
				Progress: "8/8",
				Complete: true,
			}),
		).toBe(480);
		expect(
			watchedRuntimeMinutes({
				Type: "Movie",
				Runtime: 155,
				Progress: "1/1",
				Complete: true,
			}),
		).toBe(155);
	});

	it("counts a single run for a finished note without progress", () => {
		expect(watchedRuntimeMinutes({ Type: "Movie", Runtime: 100, Complete: true })).toBe(
			100,
		);
	});

	it("reads a complete flag written as a string", () => {
		expect(watchedRuntimeMinutes({ Runtime: 100, Complete: "true" })).toBe(100);
		expect(watchedRuntimeMinutes({ Runtime: 100, Complete: "" })).toBe(0);
	});

	it("stays at zero when the length is unknown or nothing was watched", () => {
		expect(watchedRuntimeMinutes({ Type: "Series", Progress: "10/51" })).toBe(0);
		expect(
			watchedRuntimeMinutes({ Type: "Series", Runtime: 57, Progress: "0/51" }),
		).toBe(0);
		expect(watchedRuntimeMinutes({ Type: "Movie", Runtime: 100 })).toBe(0);
	});
});

describe("sanitizeFilename", () => {
	it("strips characters Obsidian forbids", () => {
		expect(sanitizeFilename('a/b\\c:d*e?f"g<h>i|j#k^l[m]')).toBe(
			"abcdefghijklm",
		);
	});

	it("collapses whitespace and falls back for empty names", () => {
		expect(sanitizeFilename("  a   b  ")).toBe("a b");
		expect(sanitizeFilename("///")).toBe("Untitled");
	});

	it("never produces a hidden or Windows-invalid name", () => {
		// ".hack//Sign" would otherwise become the dotfile ".hackSign".
		expect(sanitizeFilename(".hack//Sign")).toBe("hackSign");
		expect(sanitizeFilename("Why? Because...")).toBe("Why Because");
		expect(sanitizeFilename("...")).toBe("Untitled");
	});

	it("keeps a name within the file system byte limit", () => {
		const long = "Ж".repeat(300);
		const name = sanitizeFilename(long);
		expect(new TextEncoder().encode(name).length).toBeLessThanOrEqual(200);
		expect(name.startsWith("ЖЖЖ")).toBe(true);
		// Never cuts a character in half.
		expect(name).toBe("Ж".repeat(name.length));
	});
});

describe("link properties", () => {
	it("shows the name a link stands for", () => {
		expect(linkLabel("[[Sci-Fi]]")).toBe("Sci-Fi");
		expect(linkLabel("[[Science Fiction|Sci-Fi]]")).toBe("Sci-Fi");
		expect(linkLabel("Sci-Fi")).toBe("Sci-Fi");
	});

	it("turns names into distinct links and keeps written links", () => {
		expect(toLinks(["Drama", "[[Western|Westerns]]", "Drama", "AC/DC", "   "])).toEqual([
			"[[Drama]]",
			"[[Western|Westerns]]",
			"[[AC-DC]]",
		]);
		expect(toLinks("Gene Hackman, Morgan Freeman")).toEqual(["[[Gene Hackman]]", "[[Morgan Freeman]]"]);
		expect(toLinks(undefined)).toEqual([]);
	});
});

describe("topLabel", () => {
	const categories: ICategory[] = [
		{ name: "Фильмы", typeValue: "Movie", contentType: "movie", folder: "" },
		{ name: "Сериалы", typeValue: "Series", contentType: "series", folder: "" },
		{ name: "Моё", typeValue: "Mine", contentType: "manual", folder: "" },
	];

	it("names each column the way the reader's language says it", () => {
		setStubLanguage("ru");
		expect(topLabel({ kind: "category", key: "Movie" }, categories)).toBe("Топ фильмов");
		expect(topLabel({ kind: "category", key: "Series" }, categories)).toBe("Топ сериалов");
		expect(topLabel({ kind: "property", key: "Genre" }, categories)).toBe("Топ жанров");
		expect(topLabel({ kind: "property", key: "cast" }, categories)).toBe("Топ актёров");
		// No word of its own: a manual category, an arbitrary property.
		expect(topLabel({ kind: "category", key: "Mine" }, categories)).toBe("Топ: Моё");
		expect(topLabel({ kind: "property", key: "Author" }, categories)).toBe("Топ: Author");
		setStubLanguage("en");
		expect(topLabel({ kind: "category", key: "Movie" }, categories)).toBe("Top movies");
	});

	it("falls back to the name when the medium's word would be ambiguous or unknown", () => {
		setStubLanguage("en");
		const two: ICategory[] = [
			...categories,
			{ name: "Documentaries", typeValue: "Doc", contentType: "movie", folder: "" },
		];
		expect(topLabel({ kind: "category", key: "Movie" }, two)).toBe("Top: Фильмы");
		expect(topLabel({ kind: "category", key: "Doc" }, two)).toBe("Top: Documentaries");
		expect(topLabel({ kind: "category", key: "Gone" }, two)).toBe("Top: Gone");
	});
});

describe("sanitizeLink", () => {
	it("keeps a link target a plain note name", () => {
		expect(sanitizeLink("AC/DC")).toBe("AC-DC");
		expect(sanitizeLink("Fiction / Fantasy")).toBe("Fiction - Fantasy");
		expect(sanitizeLink("[[Sci-Fi]]")).toBe("Sci-Fi");
		expect(sanitizeLink('Who? "Me" <here>')).toBe("Who Me here");
		expect(sanitizeLink("Star Wars: Andor")).toBe("Star Wars Andor");
		expect(sanitizeLink(" .hidden ")).toBe("hidden");
	});
});

describe("isTemplateFile", () => {
	it("detects templates by folder or name prefix", () => {
		expect(isTemplateFile("_draft.md")).toBe(true);
		expect(isTemplateFile("Media/_draft.md")).toBe(true);
		expect(isTemplateFile("Templates/movie.md")).toBe(true);
		expect(isTemplateFile("templates/movie.md")).toBe(true);
		expect(isTemplateFile("Media/movie.md")).toBe(false);
	});
});

describe("inferContentType", () => {
	it("maps the Type frontmatter values", () => {
		expect(inferContentType("Series")).toBe("series");
		expect(inferContentType("Book")).toBe("book");
		expect(inferContentType("Game")).toBe("game");
		expect(inferContentType("Music")).toBe("music");
		expect(inferContentType("Manual")).toBe("manual");
		expect(inferContentType("Anime")).toBe("anime");
		expect(inferContentType("Comic")).toBe("comic");
		expect(inferContentType("Movie")).toBe("movie");
		expect(inferContentType("Unknown")).toBe("movie");
	});
});

describe("misc helpers", () => {
	it("splits comma separated arrays", () => {
		expect(toStrArray("a, b ,c")).toEqual(["a", "b", "c"]);
		expect(toStrArray(["a", " b "])).toEqual(["a", "b"]);
		expect(toStrArray(undefined)).toEqual([]);
	});

	it("parses dd.mm.yyyy and ISO dates", () => {
		expect(parseDate("31.12.2020")).toBe(
			new Date(2020, 11, 31).getTime(),
		);
		expect(parseDate("2020-12-31T00:00:00Z")).toBe(
			new Date("2020-12-31T00:00:00Z").getTime(),
		);
		expect(parseDate("garbage")).toBe(0);
	});

	it("formats today as dd.mm.yyyy", () => {
		expect(todayDmy()).toMatch(/^\d{2}\.\d{2}\.\d{4}$/);
	});

	it("matches titles ignoring case, punctuation and a year suffix", () => {
		expect(sameTitle("Dune", "dune")).toBe(true);
		expect(sameTitle("Dune", "Dune (2021)")).toBe(true);
		expect(sameTitle("The Sandman", "The  Sandman!")).toBe(true);
		expect(sameTitle("Дюна", "дюна")).toBe(true);
		expect(sameTitle("Dune", "Dune: Part Two")).toBe(false);
		expect(sameTitle("Dune", "Alien")).toBe(false);
		// An empty key must not match another empty key.
		expect(sameTitle("...", "!")).toBe(false);
		expect(sameTitle("", "")).toBe(false);
	});
});
