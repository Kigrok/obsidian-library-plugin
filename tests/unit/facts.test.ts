import { describe, expect, it } from "vitest";
import { comparisonOfTheDay, comparisonText, watchComparisons } from "../../src/facts";
import { setStubLanguage } from "../stubs/obsidian";

const texts = (minutes: number): string[] => watchComparisons(minutes).map(comparisonText);
const WATCHED = 1572 * 60 + 58;

describe("watchComparisons", () => {
	it("says nothing about a library with no watch time", () => {
		expect(watchComparisons(0)).toEqual([]);
		expect(comparisonOfTheDay(0)).toBeNull();
	});

	it("puts 1572 h 58 min in other terms", () => {
		setStubLanguage("en");
		// A mouse generation (ten weeks) is not complete yet, so mice stay out.
		expect(texts(WATCHED)).toEqual([
			"Gagarin could have orbited the Earth 873 times",
			"That's 15% of the 437 days Valeri Polyakov spent in orbit",
			"Apollo 11 could have flown to the Moon and back 8 times",
			"You could have watched the whole Lord of the Rings trilogy 169 times",
			"6 generations of mosquitoes could have hatched",
		]);
	});

	it("says once for a single repeat", () => {
		setStubLanguage("en");
		expect(texts(558)).toContain("You could have watched the whole Lord of the Rings trilogy once");
	});

	it("follows the reader's plural rules", () => {
		setStubLanguage("ru");
		expect(texts(WATCHED)[0]).toBe("Гагарин мог бы облететь Землю 873 раза");
		expect(texts(2 * 558)).toContain("Трилогию «Властелин колец» можно было бы посмотреть 2 раза");
		expect(texts(5 * 70 * 24 * 60)).toContain("Успело бы вырасти 5 поколений мышей");
		setStubLanguage("de");
		expect(texts(WATCHED)[1]).toMatch(/^Das sind 15\s% der 437 Tage/);
	});
});

describe("comparisonOfTheDay", () => {
	it("keeps one comparison through the day and moves on at midnight", () => {
		const morning = comparisonOfTheDay(WATCHED, new Date(2026, 8, 26, 0, 1));
		const night = comparisonOfTheDay(WATCHED, new Date(2026, 8, 26, 23, 59));
		const tomorrow = comparisonOfTheDay(WATCHED, new Date(2026, 8, 27, 0, 1));
		expect(night).toEqual(morning);
		expect(tomorrow?.key).not.toBe(morning?.key);
	});

	it("shows every comparison in turn", () => {
		const week = [0, 1, 2, 3, 4].map((day) => comparisonOfTheDay(WATCHED, new Date(2026, 8, 26 + day, 12))?.key);
		expect(new Set(week).size).toBe(5);
	});
});
