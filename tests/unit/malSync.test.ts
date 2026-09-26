import { afterEach, describe, expect, it } from "vitest";
import {
	codeFromInput,
	exchangeCode,
	fetchMalList,
	isExpired,
	makeVerifier,
	malAuthUrl,
	malIdsFor,
	malStatus,
} from "../../src/malSync";
import { resetRequests, stubRequest } from "../stubs/obsidian";

afterEach(resetRequests);

describe("MyAnimeList OAuth", () => {
	it("makes a 128-character PKCE verifier and sends it as a plain challenge", () => {
		const verifier = makeVerifier();
		expect(verifier).toMatch(/^[A-Za-z0-9._~-]{128}$/);
		expect(makeVerifier()).not.toBe(verifier);
		const url = malAuthUrl("abc", verifier);
		expect(url).toContain("client_id=abc");
		expect(url).toContain(`code_challenge=${verifier}`);
		expect(url).toContain("code_challenge_method=plain");
	});

	it("reads the code from the redirect address or takes a bare code", () => {
		expect(codeFromInput("http://localhost/?code=def50200abc&state=x")).toBe("def50200abc");
		expect(codeFromInput("  def50200abc ")).toBe("def50200abc");
	});

	it("turns the token response into tokens with an expiry", async () => {
		stubRequest({
			match: "myanimelist.net/v1/oauth2/token",
			method: "POST",
			json: { access_token: "a", refresh_token: "r", expires_in: 3600 },
		});
		const tokens = await exchangeCode("id", "", "code", "verifier");
		expect(tokens?.access).toBe("a");
		expect(tokens?.refresh).toBe("r");
		expect(isExpired(tokens!, Date.now())).toBe(false);
		expect(isExpired(tokens!, Date.now() + 3600 * 1000)).toBe(true);
	});

	it("fails without throwing when MyAnimeList rejects the code", async () => {
		stubRequest({ match: "oauth2/token", method: "POST", status: 400, json: { error: "invalid_grant" } });
		expect(await exchangeCode("id", "secret", "bad", "verifier")).toBeNull();
	});
});

describe("MyAnimeList list", () => {
	it("maps note state to a MAL status", () => {
		expect(malStatus(true, 3)).toBe("completed");
		expect(malStatus(false, 3)).toBe("watching");
		expect(malStatus(false, 0)).toBe("plan_to_watch");
	});

	it("follows the list pages to the end", async () => {
		stubRequest({
			match: "offset=1000",
			json: { data: [{ node: { id: 2 }, list_status: { status: "completed", num_episodes_watched: 24 } }] },
		});
		stubRequest({
			match: "/users/@me/animelist",
			json: {
				data: [{ node: { id: 1 }, list_status: { status: "watching", num_episodes_watched: 5 } }],
				paging: { next: "https://api.myanimelist.net/v2/users/@me/animelist?offset=1000" },
			},
		});
		expect(await fetchMalList("token")).toEqual([
			{ malId: 1, progress: 5, status: "watching" },
			{ malId: 2, progress: 24, status: "completed" },
		]);
	});

	it("reports a failed page instead of a short list", async () => {
		stubRequest({ match: "/users/@me/animelist", status: 401 });
		expect(await fetchMalList("token")).toBeNull();
	});

	it("finds MAL ids for AniList notes and skips titles MAL lacks", async () => {
		stubRequest({
			match: "graphql.anilist.co",
			method: "POST",
			json: { data: { Page: { media: [{ id: 21, idMal: 9253 }, { id: 22, idMal: null }] } } },
		});
		const ids = await malIdsFor([21, 22]);
		expect(ids?.get(21)).toBe(9253);
		expect(ids?.has(22)).toBe(false);
	});
});
