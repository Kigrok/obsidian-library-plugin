import { describe, expect, it } from "vitest";
import { applyEpisodeChange, followProgress, hasChapters, mergeSeasons, seasonsOf, setChapters } from "../../src/episodes";

const series = (): Record<string, unknown> => ({
	Progress: "3/5",
	Seasons: [
		{ name: "Season 1", episodes: 3, rating: 8.1 },
		{ name: "Season 2", episodes: 2 },
	],
});

describe("seasonsOf", () => {
	it("counts the first Progress episodes as watched until anything is ticked", () => {
		const seasons = seasonsOf(series());
		expect(seasons.map((s) => s.episodes.map((e) => e.watched))).toEqual([[true, true, true], [false, false]]);
		expect(seasons[0]?.watched).toBe(true);
		expect(seasons[1]?.watched).toBe(false);
		expect(seasons[0]?.sourceRating).toBe(8.1);
	});

	it("treats a complete note as all watched", () => {
		const fm = { ...series(), Progress: "0/5", Complete: true };
		expect(seasonsOf(fm).every((s) => s.watched)).toBe(true);
	});

	it("gives an anime note one season from its Progress total", () => {
		const seasons = seasonsOf({ Progress: "2/4" }, "anime");
		expect(seasons).toHaveLength(1);
		expect(seasons[0]?.episodes.map((e) => e.watched)).toEqual([true, true, false, false]);
		expect(seasonsOf({ Progress: "2/4" })).toEqual([]);
	});
});

describe("applyEpisodeChange", () => {
	it("writes every tick out, then Progress and Complete follow the ticks", () => {
		const fm = series();
		applyEpisodeChange(fm, { season: 1, episode: 0, watched: true });
		const lists = (fm.Seasons as Array<{ episode_list: Array<{ watched: boolean }> }>).map((s) =>
			s.episode_list.map((e) => e.watched),
		);
		expect(lists).toEqual([[true, true, true], [true, false]]);
		expect(fm.Progress).toBe("4/5");
		expect(fm.Complete).toBe(false);

		applyEpisodeChange(fm, { season: 1, watched: true });
		expect(fm.Progress).toBe("5/5");
		expect(fm.Complete).toBe(true);

		applyEpisodeChange(fm, { season: 0, watched: false });
		expect(fm.Progress).toBe("2/5");
		expect(fm.Complete).toBe(false);
	});

	it("rates a season by its episodes, and the series by its seasons", () => {
		const fm = series();
		applyEpisodeChange(fm, { season: 0, episode: 0, rating: 8 });
		applyEpisodeChange(fm, { season: 0, episode: 1, rating: 9 });
		expect(seasonsOf(fm)[0]?.rating).toBe(8.5);
		expect(seasonsOf(fm)[0]?.ratedByEpisodes).toBe(true);
		expect(fm["My Rating"]).toBe(8.5);

		// A season without rated episodes takes a rating by hand.
		applyEpisodeChange(fm, { season: 1, rating: 6 });
		expect(seasonsOf(fm)[1]?.rating).toBe(6);
		expect(fm["My Rating"]).toBe(7.3);

		// Clearing an episode rating drops it from the average.
		applyEpisodeChange(fm, { season: 0, episode: 1, rating: null });
		expect(seasonsOf(fm)[0]?.rating).toBe(8);
		expect(fm["My Rating"]).toBe(7);
	});

	it("keeps keys it does not know and the source's titles", () => {
		const fm: Record<string, unknown> = {
			Progress: "0/1",
			Seasons: [{ name: "Pilot season", episodes: 1, trailer: "https://youtu.be/x", episode_list: [{ title: "Pilot", note: "keep" }] }],
		};
		applyEpisodeChange(fm, { season: 0, episode: 0, watched: true });
		expect(fm.Seasons).toEqual([
			{ name: "Pilot season", episodes: 1, trailer: "https://youtu.be/x", episode_list: [{ title: "Pilot", note: "keep", watched: true }] },
		]);
	});

	it("creates the season list of an anime note on the first tick", () => {
		const fm: Record<string, unknown> = { Progress: "1/3" };
		applyEpisodeChange(fm, { season: 0, episode: 2, watched: true }, "anime");
		expect(fm.Progress).toBe("2/3");
		expect((fm.Seasons as unknown[]).length).toBe(1);
	});
});

describe("followProgress", () => {
	it("ticks forward to a Progress set elsewhere, never back", () => {
		const fm = series();
		applyEpisodeChange(fm, { season: 0, episode: 2, watched: false });
		expect(fm.Progress).toBe("2/5");
		fm.Progress = "4/5";
		followProgress(fm);
		expect(seasonsOf(fm).map((s) => s.episodes.map((e) => e.watched))).toEqual([[true, true, true], [true, false]]);
		fm.Progress = "1/5";
		followProgress(fm);
		expect(fm.Progress).toBe("1/5");
		expect(seasonsOf(fm)[0]?.watched).toBe(true);
	});

	it("does nothing while the note has no ticks", () => {
		const fm = series();
		followProgress(fm);
		expect(fm).toEqual(series());
	});
});

describe("mergeSeasons", () => {
	it("adds new seasons and episode titles and keeps the user's ticks and names", () => {
		const mine = [
			{ name: "My name", episodes: 2, my_rating: 9, episode_list: [{ watched: true, my_rating: 8 }, { watched: false }] },
		];
		const theirs = [
			{ name: "Season 1", episodes: 3, rating: 7.9, episode_list: [{ title: "A" }, { title: "B" }, { title: "C" }] },
			{ name: "Season 2", episodes: 10, rating: null },
		];
		expect(mergeSeasons(mine, theirs)).toEqual([
			{
				name: "My name",
				episodes: 3,
				rating: 7.9,
				my_rating: 9,
				episode_list: [{ title: "A", watched: true, my_rating: 8 }, { title: "B", watched: false }, { title: "C" }],
			},
			{ name: "Season 2", episodes: 10, rating: null },
		]);
	});
});

describe("book chapters", () => {
	it("carries the share of pages read over to new chapters, then counts chapters", () => {
		const fm: Record<string, unknown> = { Progress: "344/688" };
		setChapters(fm, ["One", "Two", "Three", "Four"]);
		expect(hasChapters(fm)).toBe(true);
		expect(fm.Chapters).toEqual([
			{ title: "One", watched: true },
			{ title: "Two", watched: true },
			{ title: "Three", watched: false },
			{ title: "Four", watched: false },
		]);
		expect(fm.Progress).toBe("2/4");

		applyEpisodeChange(fm, { season: 0, episode: 2, watched: true }, "book");
		applyEpisodeChange(fm, { season: 0, episode: 0, rating: 9 }, "book");
		applyEpisodeChange(fm, { season: 0, episode: 1, rating: 7 }, "book");
		expect(fm.Progress).toBe("3/4");
		expect(fm["My Rating"]).toBe(8);
		expect("Seasons" in fm).toBe(false);
	});

	it("makes a plain count of untitled chapters", () => {
		const fm: Record<string, unknown> = { Progress: "0/300" };
		setChapters(fm, 3);
		expect(fm.Chapters).toEqual([{ watched: false }, { watched: false }, { watched: false }]);
		expect(fm.Progress).toBe("0/3");
		expect(seasonsOf(fm, "book")[0]?.episodes).toHaveLength(3);
	});
});
