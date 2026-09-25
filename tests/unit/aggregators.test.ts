import { afterEach, describe, expect, it } from "vitest";
import { BookAggregatorProvider } from "../../src/providers/bookAggregator";
import { GameAggregatorProvider } from "../../src/providers/gameAggregator";
import { RawgProvider } from "../../src/providers/rawg";
import { SteamProvider } from "../../src/providers/steam";
import type { ContentType } from "../../src/providers/types";
import { requestLog, resetRequests, stubRequest } from "../stubs/obsidian";

afterEach(resetRequests);

describe("GameAggregatorProvider", () => {
	function games(): GameAggregatorProvider {
		stubRequest({
			match: "api.rawg.io/api/games?",
			json: {
				results: [
					{
						id: 3328,
						name: "The Witcher 3",
						released: "2015-05-19",
						genres: [],
					},
				],
			},
		});
		stubRequest({
			match: "store.steampowered.com/api/storesearch",
			json: { items: [{ id: 292030, name: "The Witcher 3: Wild Hunt" }] },
		});
		return new GameAggregatorProvider(
			new RawgProvider(() => "rawg-key"),
			new SteamProvider(),
		);
	}

	it("merges RAWG and Steam hits into one result list", async () => {
		const results = await games().search("witcher");
		expect(results.map((r) => r.sourceId)).toEqual([
			"3328",
			"steam:292030",
		]);
		expect(results.map((r) => r.provider)).toEqual(["rawg", "steam"]);
		expect(results[0]?.raw).toMatchObject({ __pid: "rawg" });
		expect(results[1]?.raw).toMatchObject({ __pid: "steam" });
	});

	it("routes a picked result back to its source", async () => {
		const provider = games();
		const results = await provider.search("witcher");
		resetRequests();
		stubRequest({
			match: "api.rawg.io/api/games/3328",
			json: { name: "The Witcher 3", genres: [], developers: [] },
		});
		const fromRawg = await provider.fetch(
			"3328",
			"game",
			results[0]?.raw,
		);
		expect(fromRawg?.fields.Name).toBe("The Witcher 3");
		expect(requestLog[0]).toContain("api.rawg.io/api/games/3328");
	});

	it("routes by prefix when a refresh passes no raw result", async () => {
		const provider = games();
		resetRequests();
		stubRequest({ match: "library_600x900.jpg", method: "HEAD", status: 404 });
		stubRequest({
			match: "store.steampowered.com/api/appdetails",
			json: {
				"292030": {
					success: true,
					data: { name: "The Witcher 3: Wild Hunt" },
				},
			},
		});
		const refreshed = await provider.fetch("steam:292030", "game");
		expect(refreshed?.fields.Name).toBe("The Witcher 3: Wild Hunt");
		expect(requestLog[0]).toContain("appids=292030");
	});

	it("treats a bare numeric id as a legacy RAWG id", async () => {
		const provider = games();
		resetRequests();
		stubRequest({
			match: "api.rawg.io/api/games/3328",
			json: { name: "The Witcher 3", genres: [], developers: [] },
		});
		const refreshed = await provider.fetch("3328", "game");
		expect(refreshed?.fields.Name).toBe("The Witcher 3");
		expect(requestLog[0]).toContain("api.rawg.io/api/games/3328");
	});

	it("keeps one source's failure from breaking the search", async () => {
		stubRequest({ match: "api.rawg.io", networkError: true });
		stubRequest({
			match: "store.steampowered.com/api/storesearch",
			json: { items: [{ id: 1, name: "Only Steam" }] },
		});
		const results = await new GameAggregatorProvider(
			new RawgProvider(() => "rawg-key"),
			new SteamProvider(),
		).search("x");
		expect(results.map((r) => r.title)).toEqual(["Only Steam"]);
	});
});

describe("BookAggregatorProvider", () => {
	it("routes by source id shape when there is no raw result", async () => {
		const google = {
			id: "googlebooks",
			contentTypes: ["googlebook"] as ContentType[],
			search: () => Promise.resolve([]),
			fetch: (sourceId: string) =>
				Promise.resolve({
					fields: { Name: `google:${sourceId}` },
					progressTotal: null,
					imdbId: null,
				}),
		};
		const openlib = {
			id: "openlibrary",
			contentTypes: ["book"] as ContentType[],
			search: () => Promise.resolve([]),
			fetch: (sourceId: string) =>
				Promise.resolve({
					fields: { Name: `openlib:${sourceId}` },
					progressTotal: null,
					imdbId: null,
				}),
		};
		const provider = new BookAggregatorProvider(google, openlib);
		expect(
			(await provider.fetch("/works/OL123W", "book"))?.fields.Name,
		).toBe("openlib:/works/OL123W");
		expect((await provider.fetch("abc123", "book"))?.fields.Name).toBe(
			"google:abc123",
		);
	});
});
