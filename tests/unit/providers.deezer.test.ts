import { afterEach, describe, expect, it } from "vitest";
import { DeezerProvider } from "../../src/providers/deezer";
import { requestLog, resetRequests, stubRequest } from "../stubs/obsidian";

afterEach(resetRequests);

describe("DeezerProvider", () => {
	it("maps an album into the frontmatter fields", async () => {
		stubRequest({
			match: "api.deezer.com/album/302127",
			json: {
				id: 302127,
				title: "Discovery",
				release_date: "2001-03-07",
				artist: { name: "Daft Punk" },
				nb_tracks: 14,
				genres: { data: [{ name: "Electro" }] },
				link: "https://www.deezer.com/album/302127",
			},
		});
		const meta = await new DeezerProvider().fetch("302127");
		expect(meta?.fields.Name).toBe("Discovery");
		expect(meta?.fields.Year).toBe(2001);
		expect(meta?.fields.Creator).toEqual(["Daft Punk"]);
		expect(meta?.progressTotal).toBe(14);
	});

	it("treats a removed album as not found instead of a one-track album", async () => {
		// Deezer answers 200 with an error object for an id it no longer has.
		stubRequest({
			match: "api.deezer.com/album/",
			json: { error: { type: "DataException", message: "no data", code: 800 } },
		});
		expect(await new DeezerProvider().fetch("999999999")).toBeNull();
	});

	it("keeps a hand-edited source id inside the album path", async () => {
		await new DeezerProvider().fetch("1?x=../2");
		expect(requestLog[0]).toBe("https://api.deezer.com/album/1%3Fx%3D..%2F2");
	});
});
