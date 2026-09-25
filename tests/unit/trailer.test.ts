import { describe, expect, it } from "vitest";
import {
	createEmbedPlayer,
	normalizeSeasons,
	toEmbed,
} from "../../src/trailer";

const ID = "dQw4w9WgXcQ";

describe("toEmbed", () => {
	it("reads every common YouTube link shape", () => {
		const expected = {
			kind: "youtube",
			src: `https://www.youtube-nocookie.com/embed/${ID}`,
		};
		expect(toEmbed(`https://www.youtube.com/watch?v=${ID}`)).toEqual(expected);
		expect(toEmbed(`https://youtube.com/watch?v=${ID}&t=42s`)).toEqual(
			expected,
		);
		expect(toEmbed(`https://youtu.be/${ID}`)).toEqual(expected);
		expect(toEmbed(`https://www.youtube.com/embed/${ID}`)).toEqual(expected);
		expect(toEmbed(`https://www.youtube.com/shorts/${ID}`)).toEqual(expected);
		expect(toEmbed(`https://www.youtube.com/v/${ID}`)).toEqual(expected);
		expect(toEmbed(`https://www.youtube.com/live/${ID}`)).toEqual(expected);
		expect(toEmbed(`https://m.youtube.com/watch?v=${ID}`)).toEqual(expected);
		expect(toEmbed(`https://music.youtube.com/watch?v=${ID}`)).toEqual(
			expected,
		);
		expect(toEmbed(ID)).toEqual(expected);
	});

	it("reads Vimeo links", () => {
		expect(toEmbed("https://vimeo.com/123456789")).toEqual({
			kind: "vimeo",
			src: "https://player.vimeo.com/video/123456789",
		});
		expect(toEmbed("https://player.vimeo.com/video/987654")).toEqual({
			kind: "vimeo",
			src: "https://player.vimeo.com/video/987654",
		});
	});

	it("rejects anything it cannot embed", () => {
		expect(toEmbed("")).toBeNull();
		expect(toEmbed(undefined)).toBeNull();
		expect(toEmbed("https://example.com/watch?v=" + ID)).toBeNull();
		expect(toEmbed("https://www.youtube.com/watch?v=short")).toBeNull();
		expect(toEmbed("not a url")).toBeNull();
		expect(toEmbed("https://vimeo.com/album")).toBeNull();
	});
});

describe("normalizeSeasons", () => {
	it("maps well formed rows", () => {
		expect(
			normalizeSeasons([
				{
					name: "Season 1",
					episodes: 10,
					rating: 8.3,
					trailer: "https://youtu.be/" + ID,
				},
			]),
		).toEqual([
			{
				name: "Season 1",
				episodes: 10,
				rating: 8.3,
				trailer: "https://youtu.be/" + ID,
			},
		]);
	});

	it("names numbered seasons without a name", () => {
		expect(normalizeSeasons([{ season: 2, episodes: 8 }])).toEqual([
			{ name: "Season 2", episodes: 8, rating: null, trailer: null },
		]);
	});

	it("drops empty and malformed entries", () => {
		expect(normalizeSeasons(["", null, [], 42, {}])).toEqual([]);
		expect(normalizeSeasons("nope")).toEqual([]);
		expect(normalizeSeasons(undefined)).toEqual([]);
	});

	it("keeps rows that only carry an episode count", () => {
		expect(normalizeSeasons([{ episodes: 6 }])).toEqual([
			{ name: "—", episodes: 6, rating: null, trailer: null },
		]);
	});
});

describe("createEmbedPlayer", () => {
	it("builds a 16:9 wrapper with a sandboxed iframe", () => {
		const player = createEmbedPlayer("https://www.youtube-nocookie.com/embed/x", "Trailer");
		// The Obsidian helpers append to the node they are called on, so a
		// `document.createDiv()` here would land in <body> (the test setup
		// redirects it) and throw a HierarchyRequestError in the real app.
		expect(player.parentNode).toBeNull();
		expect(player.classList.contains("note-header-player")).toBe(true);
		const iframe = player.querySelector("iframe");
		expect(iframe).toBeTruthy();
		expect(iframe?.getAttribute("src")).toBe(
			"https://www.youtube-nocookie.com/embed/x",
		);
		expect(iframe?.getAttribute("title")).toBe("Trailer");
		expect(iframe?.getAttribute("allowfullscreen")).toBe("true");
		expect(iframe?.getAttribute("referrerpolicy")).toBe(
			"strict-origin-when-cross-origin",
		);
	});
});
