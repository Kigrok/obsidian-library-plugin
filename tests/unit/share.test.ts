import { describe, expect, it } from "vitest";
import { buildShareText, shareRatings } from "../../src/share";

describe("shareRatings", () => {
	it("lists every source that has a rating", () => {
		expect(
			shareRatings({
				"Rating IMDB": 8.4,
				"Rating RT": 91,
				"Rating RAWG": 8.5,
				"Rating MC": 9.2,
				"Rating AniList": 87,
			}),
		).toEqual(["IMDb 8.4", "🍅 91%", "RAWG 8.5", "MC 9.2", "AniList 87"]);
	});

	it("skips sources without a rating", () => {
		expect(shareRatings({ "Rating RAWG": 7 })).toEqual(["RAWG 7"]);
		expect(shareRatings({})).toEqual([]);
		expect(shareRatings({ "Rating RT": " " })).toEqual([]);
	});

	it("handles string-frontmatter values", () => {
		expect(
			shareRatings({ "Rating IMDB": "8.0", "Rating MC": "8.8" }),
		).toEqual(["IMDb 8.0", "MC 8.8"]);
	});
});

describe("buildShareText", () => {
	it("uses the name, year and a rating headline", () => {
		const { text, url } = buildShareText(
			{ Year: 2021, "My Rating": 9, URL: "https://www.imdb.com/title/tt1/" },
			"Dune",
		);
		expect(text).toContain("Dune");
		expect(text).toContain("2021");
		expect(text).toContain("9/10");
		expect(url).toBe("https://www.imdb.com/title/tt1/");
	});

	it("falls back to the Rating field when My Rating is missing", () => {
		const { text } = buildShareText({ Rating: 7 }, "Whatever");
		expect(text).toContain("7/10");
	});
});
