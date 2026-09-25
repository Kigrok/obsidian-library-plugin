import { afterEach, describe, expect, it } from "vitest";
import { AnimeProvider } from "../../src/providers/anime";
import { requestLog, resetRequests, stubRequest } from "../stubs/obsidian";

afterEach(resetRequests);

const media = {
	id: 16498,
	title: { romaji: "Shingeki no Kyojin", english: "Attack on Titan" },
	startDate: { year: 2013 },
	episodes: 25,
	genres: ["Action", "Drama"],
	status: "FINISHED",
	averageScore: 84,
	coverImage: { extraLarge: "https://s4.anilist.co/cover.jpg" },
	bannerImage: "https://s4.anilist.co/banner.jpg",
	trailer: { id: "MGRm4IzK1SQ", site: "youtube" },
	studios: { nodes: [{ name: "Wit Studio" }] },
	siteUrl: "https://anilist.co/anime/16498",
};

function stubSearch(payload: unknown): void {
	stubRequest({ match: "graphql.anilist.co", method: "POST", json: payload });
}

describe("AnimeProvider", () => {
	it("maps a YouTube trailer and the banner into the frontmatter fields", async () => {
		stubSearch({ data: { Media: media } });
		const result = await new AnimeProvider().fetch("16498", "anime");

		expect(result?.fields.Trailer).toBe(
			"https://www.youtube.com/watch?v=MGRm4IzK1SQ",
		);
		expect(result?.fields.Gallery).toEqual([
			"https://s4.anilist.co/banner.jpg",
		]);
		expect(result?.fields["Rating AniList"]).toBe(8.4);
		expect(result?.progressTotal).toBe(25);
	});

	it("keeps a dailymotion trailer as a link", async () => {
		stubSearch({
			data: {
				Media: { ...media, trailer: { id: "x8abc", site: "dailymotion" } },
			},
		});
		const result = await new AnimeProvider().fetch("16498", "anime");
		expect(result?.fields.Trailer).toBe(
			"https://www.dailymotion.com/video/x8abc",
		);
	});

	it("omits trailer and gallery when AniList has neither", async () => {
		stubSearch({
			data: {
				Media: { ...media, trailer: null, bannerImage: null },
			},
		});
		const result = await new AnimeProvider().fetch("16498", "anime");
		expect(result?.fields).not.toHaveProperty("Trailer");
		expect(result?.fields).not.toHaveProperty("Gallery");
	});

	it("records the per-episode length for the watched-time chart", async () => {
		stubSearch({ data: { Media: { ...media, duration: 24 } } });
		const result = await new AnimeProvider().fetch("16498", "anime");
		expect(result?.fields.Runtime).toBe(24);
	});

	it("omits the runtime when AniList has no length", async () => {
		for (const duration of [null, 0, undefined]) {
			stubSearch({ data: { Media: { ...media, duration } } });
			const result = await new AnimeProvider().fetch("16498", "anime");
			expect(result?.fields).not.toHaveProperty("Runtime");
		}
	});

	it("reuses the raw search result without a second request", async () => {
		const result = await new AnimeProvider().fetch("16498", "anime", media);
		expect(result?.fields.Trailer).toBe(
			"https://www.youtube.com/watch?v=MGRm4IzK1SQ",
		);
		expect(requestLog).toEqual([]);
	});
});
