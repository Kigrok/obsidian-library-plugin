import { afterEach, describe, expect, it } from "vitest";
import { findChapters } from "../../src/providers/openlibrary";
import { requestLog, resetRequests, stubRequest } from "../stubs/obsidian";

afterEach(resetRequests);

describe("findChapters", () => {
	it("reads the top-level chapter titles of the ISBN's edition", async () => {
		stubRequest({
			match: "/isbn/9780441013593.json",
			json: {
				table_of_contents: [
					{ level: 0, title: "Book One: Dune" },
					{ level: 1, title: "A section inside" },
					{ level: 0, title: "  Book Two: Muad'Dib " },
					{ level: 0, title: "" },
				],
			},
		});
		expect(await findChapters({ isbn: "978-0-441-01359-3" })).toEqual(["Book One: Dune", "Book Two: Muad'Dib"]);
	});

	it("falls back to the fullest contents among the work's editions", async () => {
		stubRequest({ match: "/isbn/0671027034.json", json: { works: [{ key: "/works/OL1W" }] } });
		stubRequest({
			match: "/works/OL1W/editions.json",
			json: {
				entries: [
					{ table_of_contents: [{ title: "Only one" }] },
					{ table_of_contents: [{ title: "Part 1" }, { title: "Part 2" }, { title: "Part 3" }] },
					{},
				],
			},
		});
		expect(await findChapters({ isbn: "0671027034" })).toEqual(["Part 1", "Part 2", "Part 3"]);
	});

	it("prefers contents in the script of the book's title", async () => {
		stubRequest({
			match: "/works/OL4W/editions.json",
			json: {
				entries: [
					{ table_of_contents: [{ title: "Глава 1" }, { title: "Глава 2" }, { title: "Глава 3" }] },
					{ table_of_contents: [{ title: "Chapter 1" }, { title: "Chapter 2" }] },
				],
			},
		});
		expect(await findChapters({ work: "/works/OL4W", title: "Nineteen Eighty-Four" })).toEqual(["Chapter 1", "Chapter 2"]);
	});

	it("does not search by title without an author", async () => {
		expect(await findChapters({ title: "Anarchism" })).toEqual([]);
		expect(requestLog).toEqual([]);
	});

	it("finds the work by title and author when no id is known", async () => {
		stubRequest({ match: "search.json", json: { docs: [{ key: "/works/OL2W" }] } });
		stubRequest({
			match: "/works/OL2W/editions.json",
			json: { entries: [{ table_of_contents: [{ title: "I" }, { title: "II" }] }] },
		});
		expect(await findChapters({ title: "Meditations", author: "Marcus Aurelius" })).toEqual(["I", "II"]);
		expect(requestLog.some((url) => url.includes("title=Meditations") && url.includes("author=Marcus"))).toBe(true);
	});

	it("gives [] when no edition lists its contents, and asks only once", async () => {
		stubRequest({ match: "/works/OL3W/editions.json", json: { entries: [{}, {}] } });
		expect(await findChapters({ work: "/works/OL3W" })).toEqual([]);
		const asked = requestLog.length;
		expect(await findChapters({ work: "/works/OL3W" })).toEqual([]);
		expect(requestLog.length).toBe(asked);
	});
});
