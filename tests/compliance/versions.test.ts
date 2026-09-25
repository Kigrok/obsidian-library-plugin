// versions.json powers the community-plugin updater: every released version
// needs an entry mapping it to the minimum Obsidian version.
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const read = (name: string): string =>
	readFileSync(resolve(root, name), "utf8");
const manifest = JSON.parse(read("manifest.json")) as {
	version: string;
	minAppVersion: string;
};
const packageJson = JSON.parse(read("package.json")) as {
	version: string;
	main: string;
};
const versions = JSON.parse(read("versions.json")) as Record<string, string>;

describe("version triple", () => {
	it("keeps package.json, manifest.json and versions.json in sync", () => {
		expect(manifest.version).toBe(packageJson.version);
		expect(versions[manifest.version]).toBeTruthy();
	});

	it("maps every release to a minAppVersion", () => {
		for (const [version, minAppVersion] of Object.entries(versions)) {
			expect(version, version).toMatch(/^\d+\.\d+\.\d+$/);
			expect(minAppVersion, version).toMatch(/^\d+\.\d+\.\d+$/);
		}
	});

	it("keeps the current minAppVersion at or above every previous one", () => {
		const current = manifest.minAppVersion;
		expect(versions[manifest.version]).toBe(current);
	});

	it("ships the files Obsidian loads", () => {
		expect(packageJson.main).toBe("main.js");
		expect(existsSync(resolve(root, "styles.css"))).toBe(true);
		expect(existsSync(resolve(root, "src/main.ts"))).toBe(true);
	});
});
