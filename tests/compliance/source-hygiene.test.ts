// Guards the plugin rules that are easy to break silently: no raw HTML sinks,
// no global fetch (mobile), no Node APIs in the bundle, no stray globals.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const srcDir = resolve(root, "src");

function sourceFiles(dir: string): string[] {
	const out: string[] = [];
	for (const name of readdirSync(dir)) {
		const path = join(dir, name);
		if (statSync(path).isDirectory()) out.push(...sourceFiles(path));
		else if (name.endsWith(".ts")) out.push(path);
	}
	return out;
}

const files = sourceFiles(srcDir).map((path) => ({
	path,
	text: readFileSync(path, "utf8"),
}));

describe("source hygiene", () => {
	it("finds the source tree", () => {
		expect(files.length).toBeGreaterThan(15);
	});

	it("never writes HTML through the DOM sinks Obsidian forbids", () => {
		for (const file of files) {
			expect(file.text, file.path).not.toMatch(
				/\b(innerHTML|outerHTML|insertAdjacentHTML)\b/,
			);
			expect(file.text, file.path).not.toMatch(
				/\bsetAttribute\(\s*['"]style['"]/,
			);
		}
	});

	it("never calls the Obsidian DOM helpers on the document itself", () => {
		// createEl/createDiv/… append to the node they are invoked on, so
		// `document.createDiv(...)` becomes `document.appendChild(...)` — a
		// HierarchyRequestError in the app that jsdom's setup quietly redirects
		// to <body>, which is exactly how such a call slipped through once.
		for (const file of files) {
			expect(file.text, file.path).not.toMatch(
				/\b(document|activeDocument|window)\.create(El|Div|Span|Svg|Fragment)\b/,
			);
		}
	});

	it("uses requestUrl instead of the global fetch", () => {
		for (const file of files) {
			// Method definitions (`async fetch(...)`, interface signatures) are
			// fine; only calls to a global fetch are forbidden.
			const calls = file.text
				.replace(/^[^\S\n]*(?:async\s+)?fetch\s*\(/gm, "(")
				.replace(/\.\s*fetch\s*\(/g, ".(");
			expect(calls, file.path).not.toMatch(/(^|[^.\w])fetch\s*\(/);
			expect(file.text, file.path).not.toMatch(/\bXMLHttpRequest\b/);
		}
	});

	it("keeps browser storage out of the plugin", () => {
		for (const file of files) {
			expect(file.text, file.path).not.toMatch(/\blocalStorage\b|\bsessionStorage\b/);
		}
	});

	it("does not import Node builtins into the bundle", () => {
		for (const file of files) {
			expect(file.text, file.path).not.toMatch(
				/from\s+['"](node:|fs|path|child_process|os|process)['"]/,
			);
		}
	});

	it("does not reach for the global app object", () => {
		for (const file of files) {
			expect(file.text, file.path).not.toMatch(
				/\b(window|globalThis|global)\.app\b/,
			);
			const usesApp = /(^|[^.\w])app\.(vault|workspace|metadataCache)/.test(file.text);
			if (!usesApp) continue;
			// `app` passed in as a parameter or local is fine — only an
			// undeclared (global) `app` is the problem.
			const declaresApp =
				/(^|[^\w.])app\s*[:(,]/.test(file.text) || /\bconst app\b/.test(file.text);
			expect(declaresApp, `${file.path}: uses app.* without declaring app`).toBe(true);
		}
	});

	it("prefixes nothing in command ids with the plugin id", () => {
		const main = files.find((file) => file.path.endsWith("main.ts"));
		const ids = [...(main?.text ?? "").matchAll(/addCommand\(\{[\s\S]*?id:\s*'([^']+)'/g)].map(
			(match) => match[1],
		);
		expect(ids.length).toBeGreaterThanOrEqual(9);
		for (const id of ids) {
			expect(id, id).not.toMatch(/^library[-_]/);
			expect(id).not.toMatch(/\s/);
		}
	});

	it("sends every request host through the privacy table in the READMEs", () => {
		const readme = readFileSync(resolve(root, "README.md"), "utf8");
		const hosts = new Set<string>();
		for (const file of files) {
			for (const match of file.text.matchAll(/https?:\/\/([a-z0-9.-]+)/gi)) {
				const host = (match[1] ?? "").toLowerCase();
				if (!host || host.endsWith("github.com")) continue;
				if (host.includes("obsidian.md")) continue;
				hosts.add(host);
			}
		}
		expect(hosts.size).toBeGreaterThan(5);
		for (const host of hosts) {
			expect(readme.toLowerCase(), host).toContain(host);
		}
	});
});
