import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

describe("license", () => {
	it("ships a LICENSE file", () => {
		expect(existsSync(resolve(root, "LICENSE"))).toBe(true);
	});

	it("matches the license declared in package.json", () => {
		const license = readFileSync(resolve(root, "LICENSE"), "utf8");
		const packageJson = JSON.parse(
			readFileSync(resolve(root, "package.json"), "utf8"),
		) as { license?: string };
		expect(packageJson.license).toBe("MIT");
		expect(license).toContain("MIT License");
	});

	it("links the license from the README", () => {
		const readme = readFileSync(resolve(root, "README.md"), "utf8");
		expect(readme).toMatch(/\[[^\]]*LICENSE[^\]]*\]\(\.?\/?LICENSE\)/i);
	});
});
