import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { I18N, localeMap } from "../../src/constants";
import { tr, trCount } from "../../src/i18n";
import { setStubLanguage } from "../stubs/obsidian";

const constantsPath = resolve(
	dirname(fileURLToPath(import.meta.url)),
	"../../src/constants.ts",
);

describe("I18N dictionaries", () => {
	it("every locale block has exactly the en key set", () => {
		const base = Object.keys(I18N.en).sort();
		expect(base.length).toBeGreaterThan(100);
		for (const [code, block] of Object.entries(I18N)) {
			expect(Object.keys(block).sort(), code).toEqual(base);
		}
	});

	it("keeps every locale block in its own script", () => {
		// A block copied from another locale passes the key check above; its
		// letters give it away. Latin is allowed everywhere for names (AniList, Type).
		const scripts = [
			"Cyrillic", "Arabic", "Hebrew", "Han", "Hiragana", "Katakana", "Hangul", "Devanagari",
			"Bengali", "Oriya", "Tamil", "Telugu", "Kannada", "Malayalam", "Sinhala", "Thai",
			"Georgian", "Greek", "Ethiopic", "Thaana", "Khmer",
		];
		const own: Record<string, string[]> = {
			ru: ["Cyrillic"], uk: ["Cyrillic"], be: ["Cyrillic"], kk: ["Cyrillic"], bg: ["Cyrillic"],
			ky: ["Cyrillic"], tt: ["Cyrillic"], ar: ["Arabic"], ur: ["Arabic"], fa: ["Arabic"],
			he: ["Hebrew"], zh: ["Han"], "zh-TW": ["Han"], ja: ["Han", "Hiragana", "Katakana"],
			ko: ["Hangul", "Han"], hi: ["Devanagari"], ne: ["Devanagari"], sa: ["Devanagari"],
			bn: ["Bengali"], or: ["Oriya"], ta: ["Tamil"], te: ["Telugu"], kn: ["Kannada"],
			ml: ["Malayalam"], si: ["Sinhala"], th: ["Thai"], ka: ["Georgian"], el: ["Greek"],
			am: ["Ethiopic"], dv: ["Thaana"], kh: ["Khmer"],
		};
		for (const [code, block] of Object.entries(I18N)) {
			const foreign = scripts
				.filter((script) => !(own[code] ?? []).includes(script))
				.map((script) => new RegExp(`\\p{Script=${script}}`, "u"));
			for (const [key, value] of Object.entries(block)) {
				expect(foreign.some((pattern) => pattern.test(value)), `${code} ${key}`).toBe(false);
			}
		}
	});

	it("has no duplicate keys inside a locale block", () => {
		const text = readFileSync(constantsPath, "utf8");
		const body = text.slice(text.indexOf("export const I18N"));
		const blockStarts = [
			...body.matchAll(/^\t'?([A-Za-z][A-Za-z0-9-]*)'?: \{$/gm),
		];
		expect(blockStarts.length).toBeGreaterThan(1);
		blockStarts.forEach((start, index) => {
			const from = start.index ?? 0;
			const to =
				index + 1 < blockStarts.length
					? (blockStarts[index + 1]?.index ?? body.length)
					: body.length;
			const chunk = body.slice(from, to);
			const keys = [...chunk.matchAll(/^\t\t'([^']+)':/gm)].map(
				(match) => match[1],
			);
			const unique = new Set(keys);
			expect(unique.size, `${start[1] ?? "?"} duplicates`).toBe(
				keys.length,
			);
		});
	});

	it("maps every localeMap entry to a real block", () => {
		for (const [language, code] of Object.entries(localeMap)) {
			expect(I18N[code], language).toBeTruthy();
		}
	});
});

describe("tr", () => {
	it("returns the english string by default", () => {
		setStubLanguage("en");
		expect(tr("view.title")).toBe("Library");
	});

	it("translates known languages", () => {
		setStubLanguage("ru");
		expect(tr("view.title")).toBe(I18N.ru["view.title"]);
		expect(tr("view.title")).not.toBe(I18N.en["view.title"]);
	});

	it("matches the longest language subtag", () => {
		setStubLanguage("zh-TW");
		expect(tr("cmd.addContent")).toBe(I18N["zh-TW"]["cmd.addContent"]);
	});

	it("does not collapse three-letter codes into two-letter ones", () => {
		setStubLanguage("kab");
		expect(tr("cmd.addContent")).toBe(I18N.kab["cmd.addContent"]);
	});

	it("falls back to english for unknown languages", () => {
		setStubLanguage("xx");
		expect(tr("view.title")).toBe(I18N.en["view.title"]);
	});

	it("interpolates variables and drops unknown ones", () => {
		setStubLanguage("en");
		expect(tr("notice.created", { name: "Dune" })).toContain("Dune");
		expect(tr("header.season", { number: 10 })).toBe("Season 10");
		expect(tr("notice.created", { other: "x" })).not.toContain("{name}");
	});

	it("returns the key when it is missing", () => {
		setStubLanguage("en");
		expect(tr("does.not.exist")).toBe("does.not.exist");
	});
});

describe("trCount", () => {
	const forms = (language: string, counts: number[]): string[] => {
		setStubLanguage(language);
		return counts.map((n) => trCount("stats.works", n));
	};

	it("keeps English singular to exactly one", () => {
		expect(forms("en", [1, 2, 5, 21])).toEqual(["work", "works", "works", "works"]);
	});

	it("follows the Slavic one / few / many split", () => {
		expect(forms("ru", [1, 2, 5, 11, 21, 22])).toEqual([
			"произведение", "произведения", "произведений", "произведений", "произведение", "произведения",
		]);
		expect(forms("uk", [1, 3, 7])).toEqual(["робота", "роботи", "робіт"]);
		expect(forms("pl", [1, 2, 5, 22])).toEqual(["dzieło", "dzieła", "dzieł", "dzieła"]);
	});

	it("uses the many form where 'other' is the genitive plural", () => {
		expect(forms("cs", [1, 3, 5])).toEqual(["dílo", "díla", "děl"]);
		expect(forms("lt", [1, 2, 10])).toEqual(["kūrinys", "kūriniai", "kūrinių"]);
	});

	it("fills the count into the chosen form", () => {
		setStubLanguage("ru");
		expect([1, 3, 22, 25].map((n) => trCount("header.episodes", n))).toEqual([
			"1 серия", "3 серии", "22 серии", "25 серий",
		]);
		setStubLanguage("en");
		expect([1, 12].map((n) => trCount("header.episodes", n))).toEqual(["1 episode", "12 episodes"]);
	});

	it("falls back to the English rules for an unusable language tag", () => {
		expect(forms("not a tag!", [1, 2])).toEqual(["work", "works"]);
		setStubLanguage("en");
	});
});
