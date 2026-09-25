import { afterEach, describe, expect, it } from "vitest";
import { aniListViewer, fetchList, pushEntry } from "../../src/anilistSync";
import { resetRequests, stubRequest } from "../stubs/obsidian";

afterEach(resetRequests);

function stubGraphql(route: { json?: unknown; status?: number; networkError?: boolean }): void {
	stubRequest({ match: "graphql.anilist.co", method: "POST", ...route });
}

describe("AniList sync", () => {
	it("reads the viewer and the list", async () => {
		stubGraphql({ json: { data: { Viewer: { id: 7, name: "kir" } } } });
		expect(await aniListViewer("token")).toEqual({ id: 7, name: "kir" });

		resetRequests();
		stubGraphql({
			json: {
				data: {
					MediaListCollection: {
						lists: [{ entries: [{ mediaId: 1, progress: 3, status: "CURRENT", score: 8 }] }],
					},
				},
			},
		});
		expect(await fetchList("token", 7)).toEqual([
			{ mediaId: 1, progress: 3, status: "CURRENT", score: 8 },
		]);
	});

	it("turns an offline device into a failure instead of a rejection", async () => {
		stubGraphql({ networkError: true });
		await expect(aniListViewer("token")).resolves.toBeNull();
		await expect(pushEntry("token", 1, 3, "CURRENT", null)).resolves.toBe(false);
		await expect(fetchList("token", 7)).resolves.toBeNull();
	});

	it("reports a failed pull as null, never as an empty list", async () => {
		stubGraphql({ status: 401, json: { errors: [{ message: "Invalid token" }] } });
		expect(await fetchList("token", 7)).toBeNull();
	});
});
