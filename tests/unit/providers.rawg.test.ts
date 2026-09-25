import { afterEach, describe, expect, it } from "vitest";
import { RawgProvider } from "../../src/providers/rawg";
import { requestLog, resetRequests, stubRequest } from "../stubs/obsidian";

afterEach(resetRequests);

const details = {
	name: "The Witcher 3",
	released: "2015-05-19",
	background_image: "https://media.rawg.io/w3.jpg",
	slug: "the-witcher-3-wild-hunt",
	genres: [{ name: "RPG" }, { name: "Action" }],
	developers: [{ name: "CD Projekt Red" }],
};

describe("RawgProvider", () => {
	it("keeps a free keyless search empty", async () => {
		const provider = new RawgProvider(() => "");
		expect(await provider.search("witcher")).toEqual([]);
		expect(requestLog).toEqual([]);
	});

	it("maps search results", async () => {
		stubRequest({
			match: "api.rawg.io/api/games?",
			json: {
				results: [
					{
						id: 3328,
						name: "The Witcher 3",
						released: "2015-05-19",
						background_image: "cover.jpg",
						genres: [{ name: "RPG" }],
					},
				],
			},
		});
		const results = await new RawgProvider(() => "k").search("witcher");
		expect(results).toHaveLength(1);
		expect(results[0]).toMatchObject({
			provider: "rawg",
			sourceId: "3328",
			title: "The Witcher 3",
			year: 2015,
			cover: "cover.jpg",
			subtitle: "RPG",
		});
	});

	it("converts RAWG and Metacritic scores to a 0-10 scale", async () => {
		stubRequest({
			match: "api.rawg.io/api/games/3328",
			json: { ...details, rating: 4.5, metacritic: 93 },
		});
		const result = await new RawgProvider(() => "k").fetch("3328");
		expect(result?.fields["Rating RAWG"]).toBe(9);
		expect(result?.fields["Rating MC"]).toBe(9.3);
		expect(result?.fields["URL"]).toBe(
			"https://rawg.io/games/the-witcher-3-wild-hunt",
		);
		expect(result?.fields.Genre).toEqual(["RPG", "Action"]);
	});

	it("rounds one decimal place", async () => {
		stubRequest({
			match: "api.rawg.io/api/games/1",
			json: { ...details, rating: 3.34, metacritic: 74 },
		});
		const result = await new RawgProvider(() => "k").fetch("1");
		expect(result?.fields["Rating RAWG"]).toBe(6.7);
		expect(result?.fields["Rating MC"]).toBe(7.4);
	});

	it("skips ratings that are zero or missing", async () => {
		stubRequest({
			match: "api.rawg.io/api/games/2",
			json: { ...details, rating: 0, metacritic: null },
		});
		const result = await new RawgProvider(() => "k").fetch("2");
		expect(result?.fields).not.toHaveProperty("Rating RAWG");
		expect(result?.fields).not.toHaveProperty("Rating MC");
	});

	it("returns null without a key or on an error status", async () => {
		expect(await new RawgProvider(() => "").fetch("1")).toBeNull();
		stubRequest({ match: "api.rawg.io", status: 500 });
		expect(await new RawgProvider(() => "k").fetch("1")).toBeNull();
	});
});
