import { afterEach, describe, expect, it } from "vitest";
import { SteamProvider } from "../../src/providers/steam";
import { requestLog, resetRequests, stubRequest } from "../stubs/obsidian";

afterEach(resetRequests);

const appDetails = {
	success: true,
	data: {
		name: "Hades",
		header_image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg",
		release_date: { date: "17 Sep, 2020" },
		developers: ["Supergiant Games"],
		genres: [{ description: "Action" }],
		metacritic: { score: 93 },
	},
};

describe("SteamProvider", () => {
	it("prefixes search ids so they stay distinguishable from RAWG ids", async () => {
		stubRequest({
			match: "store.steampowered.com/api/storesearch",
			json: { items: [{ id: 1145360, name: "Hades", metascore: "93" }] },
		});
		const results = await new SteamProvider().search("hades");
		expect(results).toHaveLength(1);
		expect(results[0]?.sourceId).toBe("steam:1145360");
		expect(results[0]?.subtitle).toBe("Metacritic 93");
	});

	it("strips the prefix before requesting app details", async () => {
		stubRequest({
			match: "library_600x900.jpg",
			method: "HEAD",
			status: 404,
		});
		stubRequest({
			match: "store.steampowered.com/api/appdetails",
			json: { "1145360": appDetails },
		});
		const result = await new SteamProvider().fetch("steam:1145360");
		expect(result?.fields.Name).toBe("Hades");
		expect(result?.fields.Year).toBe(2020);
		expect(
			requestLog.some((url) => url.includes("appids=1145360")),
		).toBe(true);
		expect(requestLog.some((url) => url.includes("steam%3A"))).toBe(false);
	});

	it("normalises the Metacritic score to 0-10", async () => {
		stubRequest({ match: "library_600x900.jpg", method: "HEAD", status: 404 });
		stubRequest({
			match: "store.steampowered.com/api/appdetails",
			json: { "1145360": appDetails },
		});
		const result = await new SteamProvider().fetch("steam:1145360");
		expect(result?.fields["Rating MC"]).toBe(9.3);
	});

	it("prefers the portrait capsule for covers", async () => {
		stubRequest({ match: "library_600x900.jpg", method: "HEAD", status: 200 });
		stubRequest({
			match: "store.steampowered.com/api/appdetails",
			json: { "1145360": appDetails },
		});
		const result = await new SteamProvider().fetch("steam:1145360");
		expect(result?.fields.Cover).toContain("library_600x900.jpg");
	});

	it("falls back to the header image when the capsule is missing", async () => {
		stubRequest({ match: "library_600x900.jpg", method: "HEAD", status: 404 });
		stubRequest({
			match: "store.steampowered.com/api/appdetails",
			json: { "1145360": appDetails },
		});
		const result = await new SteamProvider().fetch("steam:1145360");
		expect(result?.fields.Cover).toContain("header.jpg");
	});

	it("rejects ids that are not numbers", async () => {
		expect(await new SteamProvider().fetch("steam:abc")).toBeNull();
		expect(await new SteamProvider().fetch("steam:")).toBeNull();
		expect(await new SteamProvider().fetch("")).toBeNull();
		expect(requestLog).toEqual([]);
	});

	it("returns null when Steam reports no data for the app", async () => {
		stubRequest({
			match: "store.steampowered.com/api/appdetails",
			json: { "1145360": { success: false } },
		});
		expect(await new SteamProvider().fetch("steam:1145360")).toBeNull();
	});
});
