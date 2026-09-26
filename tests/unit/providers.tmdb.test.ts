import { afterEach, describe, expect, it } from "vitest";
import { TmdbEnricher } from "../../src/providers/tmdb";
import { requestLog, resetRequests, stubRequest } from "../stubs/obsidian";

afterEach(resetRequests);

describe("TmdbEnricher", () => {
	it("does nothing without a key", async () => {
		const enricher = new TmdbEnricher(() => "");
		expect(await enricher.enrich("tt1160419", "movie")).toEqual({});
		expect(await enricher.enrich("", "movie")).toEqual({});
		expect(requestLog).toEqual([]);
	});

	it("fills trailer, stills and runtime for a movie", async () => {
		stubRequest({
			match: "/find/tt1160419",
			json: { movie_results: [{ id: 438631 }] },
		});
		stubRequest({
			match: "/movie/438631/videos",
			json: {
				results: [
					{ site: "YouTube", type: "Clip", key: "clipclipclip" },
					{ site: "YouTube", type: "Trailer", key: "n9xhJrPXop4" },
				],
			},
		});
		stubRequest({ match: "/movie/438631?", json: { runtime: 155 } });
		stubRequest({
			match: "/movie/438631/images",
			json: {
				backdrops: Array.from({ length: 10 }, (_, i) => ({
					file_path: `/still${String(i)}.jpg`,
				})),
			},
		});

		const fields = await new TmdbEnricher(() => "key").enrich(
			"tt1160419",
			"movie",
		);
		expect(fields.Trailer).toBe(
			"https://www.youtube.com/watch?v=n9xhJrPXop4",
		);
		expect(fields.Runtime).toBe(155);
		const gallery = fields.Gallery as string[];
		expect(gallery).toHaveLength(8);
		expect(gallery[0]).toBe("https://image.tmdb.org/t/p/w780/still0.jpg");
		expect(
			requestLog.every((url) => url.includes("api_key=key")),
		).toBe(true);
		expect(
			requestLog.some((url) => url.includes("external_source=imdb_id")),
		).toBe(true);
	});

	it("falls back from Trailer to Teaser to any YouTube clip", async () => {
		stubRequest({ match: "/find/", json: { movie_results: [{ id: 1 }] } });
		stubRequest({
			match: "/movie/1/videos",
			json: {
				results: [
					{ site: "Vimeo", type: "Trailer", key: "999" },
					{ site: "YouTube", type: "Teaser", key: "teasertease" },
				],
			},
		});
		stubRequest({ match: "/movie/1?", json: {} });
		stubRequest({ match: "/movie/1/images", json: { backdrops: [] } });
		const fields = await new TmdbEnricher(() => "key").enrich("tt1", "movie");
		expect(fields.Trailer).toBe(
			"https://www.youtube.com/watch?v=teasertease",
		);
		expect(fields).not.toHaveProperty("Gallery");
		expect(fields).not.toHaveProperty("Runtime");
	});

	it("builds the season list for a series and skips specials", async () => {
		stubRequest({ match: "/find/tt0903747", json: { tv_results: [{ id: 1396 }] } });
		stubRequest({
			match: "/tv/1396/videos",
			json: { results: [{ site: "YouTube", type: "Trailer", key: "HhesaQXLuRY" }] },
		});
		stubRequest({
			match: "/tv/1396?",
			json: {
				episode_run_time: [49],
				seasons: [
					{ name: "Specials", season_number: 0, episode_count: 12 },
					{
						name: "Season 1",
						season_number: 1,
						episode_count: 7,
						vote_average: 8.26,
					},
					{ season_number: 2, episode_count: 13, vote_average: 0 },
				],
			},
		});
		stubRequest({
			match: "/season/1?",
			json: {
				episodes: [{ episode_number: 2, name: "Cat's in the Bag..." }, { episode_number: 1, name: "Pilot" }],
				videos: { results: [{ site: "YouTube", type: "Trailer", key: "s1trailer11" }] },
			},
		});
		stubRequest({
			match: "/season/2?",
			json: { videos: { results: [] } },
		});

		const fields = await new TmdbEnricher(() => "key").enrich(
			"tt0903747",
			"series",
		);
		expect(fields.Trailer).toBe(
			"https://www.youtube.com/watch?v=HhesaQXLuRY",
		);
		expect(fields.Runtime).toBe(49);
		expect(fields.Seasons).toEqual([
			{
				name: "Season 1",
				episodes: 7,
				rating: 8.3,
				trailer: "https://www.youtube.com/watch?v=s1trailer11",
				episode_list: [{ title: "Pilot" }, { title: "Cat's in the Bag..." }],
			},
			{
				name: "Season 2",
				episodes: 13,
				rating: null,
				trailer: null,
			},
		]);
		expect(
			requestLog.some((url) => url.includes("/season/0/")),
		).toBe(false);
	});

	it("returns nothing when TMDB cannot resolve the imdb id", async () => {
		stubRequest({ match: "/find/", json: { movie_results: [] } });
		expect(
			await new TmdbEnricher(() => "key").enrich("tt404", "movie"),
		).toEqual({});
	});

	it("survives network failures", async () => {
		stubRequest({ match: "/find/", networkError: true });
		expect(
			await new TmdbEnricher(() => "key").enrich("tt1", "movie"),
		).toEqual({});
	});
});
