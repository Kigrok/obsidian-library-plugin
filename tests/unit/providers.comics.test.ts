import { afterEach, describe, expect, it } from "vitest";
import { ComicsProvider } from "../../src/providers/comics";
import { requestLog, resetRequests, stubRequest } from "../stubs/obsidian";

afterEach(resetRequests);

const volume = {
	id: 12345,
	name: "Saga",
	start_year: "2012",
	image: { medium_url: "https://comicvine.gamespot.com/saga.jpg" },
	publisher: { name: "Image" },
	count_of_issues: 54,
	site_detail_url: "https://comicvine.gamespot.com/saga",
};

describe("ComicsProvider", () => {
	it("requires a key", async () => {
		expect(
			await new ComicsProvider(() => "").fetch("12345", "comic"),
		).toBeNull();
	});

	it("rejects search responses that Comic Vine flags as errors", async () => {
		stubRequest({ match: "/volumes/", json: { error: "Invalid API Key", results: [volume] } });
		expect(await new ComicsProvider(() => "k").search("saga")).toEqual([]);
	});

	it("fetches through the volume endpoint", async () => {
		stubRequest({ match: "/volume/4050-12345/", json: { error: "OK", results: volume } });
		const result = await new ComicsProvider(() => "k").fetch(
			"12345",
			"comic",
		);
		expect(result?.fields.Name).toBe("Saga");
		expect(result?.fields.Year).toBe(2012);
		expect(result?.fields.URL).toBe(
			"https://comicvine.gamespot.com/saga",
		);
		expect(result?.progressTotal).toBe(54);
		expect(
			requestLog.some((url) => url.includes("/volume/4050-12345/")),
		).toBe(true);
	});

	it("keeps a resource-type prefix in the source id out of the id itself", async () => {
		stubRequest({ match: "/volume/4050-12345/", json: { error: "OK", results: volume } });
		await new ComicsProvider(() => "k").fetch("4050-12345", "comic");
		expect(
			requestLog.some((url) => url.includes("/volume/4050-12345/")),
		).toBe(true);
	});

	it("prefers api_detail_url from the search result", async () => {
		const apiDetail =
			"https://comicvine.gamespot.com/api/volume/4050-98765/";
		stubRequest({ match: "4050-98765", json: { error: "OK", results: volume } });
		await new ComicsProvider(() => "k").fetch("12345", "comic", {
			api_detail_url: apiDetail,
		});
		expect(requestLog[0]).toContain("4050-98765");
	});

	it("ignores api_detail_url pointing at another host", async () => {
		stubRequest({ match: "/volume/4050-12345/", json: { error: "OK", results: volume } });
		await new ComicsProvider(() => "k").fetch("12345", "comic", {
			api_detail_url: "https://evil.example.com/volume/4050-666/",
		});
		expect(requestLog[0]).toContain("/volume/4050-12345/");
		expect(requestLog[0]).not.toContain("evil.example.com");
	});
});
