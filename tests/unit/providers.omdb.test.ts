import { afterEach, describe, expect, it } from "vitest";
import { CinemetaEnricher } from "../../src/providers/cinemeta";
import { OmdbProvider } from "../../src/providers/omdb";
import { TmdbEnricher } from "../../src/providers/tmdb";
import { requestLog, resetRequests, stubRequest } from "../stubs/obsidian";

afterEach(resetRequests);

const movie = {
	Title: "Dune",
	Year: "2021",
	Genre: "Sci-Fi, Adventure",
	Director: "Denis Villeneuve",
	Poster: "https://m.media-amazon.com/dune.jpg",
	imdbRating: "8.0",
	Runtime: "155 min",
	imdbID: "tt1160419",
	Response: "True",
	Ratings: [{ Source: "Rotten Tomatoes", Value: "83%" }],
};

describe("OmdbProvider", () => {
	it("requires a key", async () => {
		expect(await new OmdbProvider(() => "").fetch("tt1", "movie")).toBeNull();
		expect(await new OmdbProvider(() => "").search("dune", "movie")).toEqual(
			[],
		);
	});

	it("parses Rotten Tomatoes percentages and the IMDb rating", async () => {
		stubRequest({ match: "omdbapi.com", json: movie });
		const result = await new OmdbProvider(() => "k").fetch(
			"tt1160419",
			"movie",
		);
		expect(result?.fields["Rating IMDB"]).toBe(8);
		expect(result?.fields["Rating RT"]).toBe(83);
	});

	it("stores the top-billed actors as the cast", async () => {
		stubRequest({
			match: "omdbapi.com",
			json: { ...movie, Actors: "Timothée Chalamet, Rebecca Ferguson,  Zendaya" },
		});
		const result = await new OmdbProvider(() => "k").fetch("tt1160419", "movie");
		expect(result?.fields.Cast).toEqual(["Timothée Chalamet", "Rebecca Ferguson", "Zendaya"]);
	});

	it("leaves the cast empty when OMDb has none", async () => {
		stubRequest({ match: "omdbapi.com", json: { ...movie, Actors: "N/A" } });
		const result = await new OmdbProvider(() => "k").fetch("tt1160419", "movie");
		expect(result?.fields.Cast).toEqual([]);
	});

	it("records the runtime in minutes", async () => {
		stubRequest({ match: "omdbapi.com", json: movie });
		const result = await new OmdbProvider(() => "k").fetch(
			"tt1160419",
			"movie",
		);
		expect(result?.fields.Runtime).toBe(155);
	});

	it("ignores N/A runtimes", async () => {
		stubRequest({ match: "omdbapi.com", json: { ...movie, Runtime: "N/A" } });
		const result = await new OmdbProvider(() => "k").fetch(
			"tt1160419",
			"movie",
		);
		expect(result?.fields).not.toHaveProperty("Runtime");
	});

	it("drops junk short runtimes so an enricher can win", async () => {
		stubRequest({
			match: "omdbapi.com",
			json: { ...movie, Type: "series", Runtime: "1 min" },
		});
		stubRequest({
			match: "v3-cinemeta.strem.io",
			json: { meta: { runtime: "52 min" } },
		});
		const result = await new OmdbProvider(() => "k", [
			new CinemetaEnricher(),
		]).fetch("tt1160419", "series");
		expect(result?.fields.Runtime).toBe(52);
	});

	it("skips every enricher when none is wired", async () => {
		stubRequest({ match: "omdbapi.com", json: movie });
		const result = await new OmdbProvider(() => "k").fetch(
			"tt1160419",
			"movie",
		);
		expect(result?.fields).not.toHaveProperty("Trailer");
		expect(requestLog.some((url) => url.includes("themoviedb"))).toBe(false);
		expect(requestLog.some((url) => url.includes("cinemeta"))).toBe(false);
	});

	it("fills trailer and stills from Cinemeta when no TMDB key is set", async () => {
		stubRequest({ match: "omdbapi.com", json: movie });
		stubRequest({
			match: "cinemeta.strem.io/meta/movie/tt1160419.json",
			json: {
				meta: {
					background: "https://images.metahub.space/background/medium/tt1160419/img",
					trailerStreams: [{ ytId: "n9xhJrPXop4" }],
				},
			},
		});
		const tmdb = new TmdbEnricher(() => "");
		const result = await new OmdbProvider(() => "k", [
			tmdb,
			new CinemetaEnricher(),
		]).fetch("tt1160419", "movie");
		expect(result?.fields.Trailer).toBe(
			"https://www.youtube.com/watch?v=n9xhJrPXop4",
		);
		expect(result?.fields.Gallery).toEqual([
			"https://images.metahub.space/background/medium/tt1160419/img",
			"https://i.ytimg.com/vi/n9xhJrPXop4/hqdefault.jpg",
		]);
		// Runtime still comes from OMDb, not from an enricher.
		expect(result?.fields.Runtime).toBe(155);
		expect(requestLog.some((url) => url.includes("themoviedb"))).toBe(false);
	});

	it("lets OMDb win on shared keys while TMDB fills the rest", async () => {
		stubRequest({ match: "omdbapi.com", json: movie });
		stubRequest({ match: "api.themoviedb.org/3/find/", json: { movie_results: [{ id: 438631 }] } });
		stubRequest({
			match: "/movie/438631/videos",
			json: { results: [{ site: "YouTube", type: "Trailer", key: "n9xhJrPXop4" }] },
		});
		stubRequest({ match: "/movie/438631?", json: { runtime: 120 } });
		stubRequest({ match: "/movie/438631/images", json: { backdrops: [] } });
		const tmdb = new TmdbEnricher(() => "tmdb-key");
		const result = await new OmdbProvider(() => "k", [tmdb]).fetch(
			"tt1160419",
			"movie",
		);
		expect(result?.fields.Runtime).toBe(155);
		expect(result?.fields.Trailer).toBe(
			"https://www.youtube.com/watch?v=n9xhJrPXop4",
		);
	});

	it("keeps the TMDB trailer when Cinemeta also has one", async () => {
		stubRequest({ match: "omdbapi.com", json: movie });
		stubRequest({
			match: "api.themoviedb.org/3/find/",
			json: { movie_results: [{ id: 438631 }] },
		});
		stubRequest({
			match: "/movie/438631/videos",
			json: { results: [{ site: "YouTube", type: "Trailer", key: "tmdbTrailer" }] },
		});
		stubRequest({ match: "/movie/438631?", json: { runtime: 120 } });
		stubRequest({ match: "/movie/438631/images", json: { backdrops: [] } });
		stubRequest({
			match: "cinemeta.strem.io",
			json: {
				meta: {
					trailerStreams: [{ ytId: "cinemetaTrlr" }],
					background: "cinemeta-bg.jpg",
				},
			},
		});
		const result = await new OmdbProvider(() => "k", [
			new TmdbEnricher(() => "tmdb-key"),
			new CinemetaEnricher(),
		]).fetch("tt1160419", "movie");
		expect(result?.fields.Trailer).toBe(
			"https://www.youtube.com/watch?v=tmdbTrailer",
		);
		// TMDB left the gallery empty, so Cinemeta's still is used.
		expect(result?.fields.Gallery).toEqual([
			"cinemeta-bg.jpg",
			"https://i.ytimg.com/vi/cinemetaTrlr/hqdefault.jpg",
		]);
	});

	it("names scraped episode counts as the progress total", async () => {
		stubRequest({
			match: "Season=1",
			json: { Episodes: [{}, {}, {}] },
		});
		stubRequest({
			match: "Season=2",
			json: { Episodes: [{}, {}] },
		});
		stubRequest({
			match: "omdbapi.com",
			json: {
				...movie,
				Year: "2019–2023",
				totalSeasons: "2",
				Runtime: "58 min",
			},
		});
		const result = await new OmdbProvider(() => "k").fetch(
			"tt1160419",
			"series",
		);
		expect(result?.fields.Season).toBe(2);
		expect(result?.fields["End Year"]).toBe(2023);
		expect(result?.fields.Runtime).toBe(58);
		expect(result?.progressTotal).toBe(5);
	});
});
