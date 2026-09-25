// Checks the rules Obsidian's community-plugin submission enforces on
// manifest.json: https://docs.obsidian.md/Plugins/Releasing/Submission+requirements
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const manifest = JSON.parse(
	readFileSync(resolve(root, "manifest.json"), "utf8"),
) as Record<string, unknown>;

describe("manifest.json", () => {
	it("has the required keys", () => {
		for (const key of [
			"id",
			"name",
			"version",
			"minAppVersion",
			"description",
			"author",
		]) {
			expect(manifest[key], key).toBeTruthy();
		}
	});

	it("uses the plugin id 'library'", () => {
		expect(manifest.id).toBe("library");
	});

	it("uses a semver version", () => {
		expect(manifest.version).toMatch(/^\d+\.\d+\.\d+$/);
	});

	it("keeps the description short, sentence-shaped and emoji-free", () => {
		const description = manifest.description as string;
		expect(description.length).toBeLessThanOrEqual(250);
		expect(description.trim().endsWith(".")).toBe(true);
		expect(description).not.toMatch(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u);
	});

	it("declares desktop support explicitly", () => {
		expect(typeof manifest.isDesktopOnly).toBe("boolean");
	});

	it("does not prefix the plugin name with 'Obsidian'", () => {
		expect(String(manifest.name)).not.toMatch(/obsidian/i);
	});

	it("keeps the name and description free of 'plugin'", () => {
		expect(String(manifest.name)).not.toMatch(/\bplugin\b/i);
		expect(String(manifest.description)).not.toMatch(/\bplugin\b/i);
	});
});
