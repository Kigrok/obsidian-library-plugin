import { afterEach, describe, expect, it } from "vitest";
import { CinemetaEnricher } from "../../src/providers/cinemeta";
import { requestLog, resetRequests, stubRequest } from "../stubs/obsidian";

afterEach(resetRequests);

const MOVIE_META = {
	meta: {
		background: "https://images.metahub.space/background/medium/tt1160419/img",
		runtime: "155 min",
		trailerStreams: [
			{ title: "Official Trailer", ytId: "n9xhJrPXop4" },
			{ title: "Teaser", ytId: "abc12345678" },
		],
	},
};

describe("CinemetaEnricher", () => {
	it("fills trailer, runtime and gallery for a movie without a key", async () => {
		stubRequest({ match: "/meta/movie/tt1160419.json", json: MOVIE_META });
		const fields = await new CinemetaEnricher().enrich("tt1160419", "movie");

		expect(fields.Trailer).toBe(
			"https://www.youtube.com/watch?v=n9xhJrPXop4",
		);
		expect(fields.Runtime).toBe(155);
		expect(fields.Gallery).toEqual([
			"https://images.metahub.space/background/medium/tt1160419/img",
			"https://i.ytimg.com/vi/n9xhJrPXop4/hqdefault.jpg",
			"https://i.ytimg.com/vi/abc12345678/hqdefault.jpg",
		]);
		expect(requestLog).toHaveLength(1);
		expect(requestLog[0]).toContain("v3-cinemeta.strem.io/meta/movie/tt1160419.json");
	});

	it("builds the season list from episode thumbnails and skips specials", async () => {
		const videos = [
			{ season: 0, number: 1, name: "Special", thumbnail: "special.jpg" },
			...Array.from({ length: 6 }, (_, i) => ({
				season: 1,
				number: i + 1,
				thumbnail: `s1e${String(i + 1)}.jpg`,
			})),
			...Array.from({ length: 4 }, (_, i) => ({
				season: 2,
				number: i + 1,
				thumbnail: `s2e${String(i + 1)}.jpg`,
			})),
		];
		stubRequest({
			match: "/meta/series/tt0903747.json",
			json: {
				meta: {
					runtime: "49 min",
					trailerStreams: [{ ytId: "HhesaQXLuRY" }],
					videos,
				},
			},
		});

		const fields = await new CinemetaEnricher().enrich("tt0903747", "series");

		expect(fields.Seasons).toEqual([
			{ name: "Season 1", episodes: 6, rating: null, trailer: null },
			{ name: "Season 2", episodes: 4, rating: null, trailer: null },
		]);
		expect(fields.Runtime).toBe(49);
		const gallery = fields.Gallery as string[];
		expect(gallery).not.toContain("special.jpg");
		expect(gallery).toContain("s2e1.jpg");
		expect(gallery.length).toBeLessThanOrEqual(8);
	});

	it("orders unordered seasons and shares the gallery across them", async () => {
		stubRequest({
			match: "/meta/series/tt1.json",
			json: {
				meta: {
					background: "bg.jpg",
					videos: [
						{ season: 3, number: 1, thumbnail: "s3.jpg" },
						{ season: 1, number: 1, thumbnail: "s1.jpg" },
						{ season: 2, number: 1, thumbnail: "s2.jpg" },
					],
				},
			},
		});
		const fields = await new CinemetaEnricher().enrich("tt1", "series");
		expect((fields.Seasons as { name: string }[]).map((s) => s.name)).toEqual([
			"Season 1",
			"Season 2",
			"Season 3",
		]);
		expect(fields.Gallery).toEqual(["bg.jpg", "s1.jpg", "s2.jpg", "s3.jpg"]);
	});

	it("caps the series gallery even when season 1 alone would fill it", async () => {
		stubRequest({
			match: "/meta/series/tt2.json",
			json: {
				meta: {
					videos: [1, 2, 3, 4].flatMap((season) =>
						Array.from({ length: 6 }, (_, i) => ({
							season,
							number: i + 1,
							thumbnail: `s${String(season)}e${String(i + 1)}.jpg`,
						})),
					),
				},
			},
		});
		const gallery = (await new CinemetaEnricher().enrich("tt2", "series"))
			.Gallery as string[];
		expect(gallery).toHaveLength(8);
		// Season 1 gets a share, not the whole budget: two picks per season.
		for (const season of [1, 2, 3, 4]) {
			expect(gallery.filter((url) => url.startsWith(`s${String(season)}`))).toHaveLength(2);
		}
	});

	it("returns an empty field map when Cinemeta has no entry", async () => {
		stubRequest({ match: "/meta/movie/tt404.json", status: 404 });
		expect(await new CinemetaEnricher().enrich("tt404", "movie")).toEqual({});
	});

	it("does nothing without an imdb id", async () => {
		expect(await new CinemetaEnricher().enrich("", "movie")).toEqual({});
		expect(requestLog).toEqual([]);
	});

	it("survives network failures", async () => {
		stubRequest({ match: "/meta/movie/tt1.json", networkError: true });
		expect(await new CinemetaEnricher().enrich("tt1", "movie")).toEqual({});
	});
});
