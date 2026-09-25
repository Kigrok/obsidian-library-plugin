# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

`AGENTS.md` in this repo is the long-form version of the same guidance — read it for the
full list of easy-to-violate constraints (frontmatter contract, enrichment pass, i18n,
version bumping). This file is the short map.

## Commands

- `npm run dev` — esbuild watch build, writes `main.js` in place.
- `npm run build` — `tsc -noEmit -skipLibCheck` + minified `main.js`. Required gate before a PR.
- `npm run lint` — eslint on `src/**/*.ts` and `tests/**/*.ts`.
- `npm test` / `npm run test:watch` — vitest over `tests/**/*.test.ts` in jsdom.
- Single test file: `npx vitest run tests/unit/util.test.ts`
- Single test by name: `npx vitest run -t "progress parsing"`
- `npm version <x.y.z>` — syncs `manifest.json` + `versions.json` and stages them. Never
  hand-edit the three version fields.

The working directory **is** the installed plugin folder inside an Obsidian vault, so a dev
build is live after a plugin reload in Obsidian.

## Architecture

Single Obsidian plugin bundled from `src/main.ts` to CJS `main.js` (esbuild, `target: es2020`,
`obsidian`/electron/codemirror external).

**Data model.** There is no database. A "card" is a vault note; all state lives in its
frontmatter (`Source`, `Source ID`, `Progress` as `watched/total`, `Date` as `dd.mm.yyyy`,
`My Rating`, `Rating IMDB`, plus optional `Trailer`/`Gallery`/`Seasons`/`Runtime`/`Cast`). Notes are
grouped into categories by their `Type` value; category definitions (name, Type value, folder)
live in plugin settings, not in code.

**Providers** (`src/providers/`). Each implements `ContentProvider` (`search` + `fetch`) from
`types.ts` and is registered per `ContentType` in `ProviderRegistry` (`registry.ts`) from
`main.ts`. Two sources for the same medium are merged behind an aggregator
(`bookAggregator.ts`, `gameAggregator.ts`) that tags results with `{__pid, __raw}` so refresh
can route back — never register a second category for the same medium.

**Enrichers** are a separate interface (`MetadataEnricher`, keyed by IMDb id) injected into
`OmdbProvider` in priority order: `tmdb.ts` (optional, needs a key) then `cinemeta.ts`
(keyless default). They fill trailer/gallery/seasons/runtime. They are *not* providers.

**`src/main.ts`** is the plugin class: commands, note creation/refresh, duplicate detection,
AniList sync wiring, and `scheduleEnrich` — the background pass that backfills new frontmatter
fields into existing notes after a release (marks stored in `settings.enrichMarks`, cleared when
the API-key signature changes).

**`src/view.ts`** is the whole UI surface: one `ItemView` that renders the statistics section
plus one grid section per category, driven by a debounced `render()` reading the vault's
metadata cache. Sort state, folded sections and the statistics layout persist through settings, not
module scope.

**`src/constants.ts`** is almost entirely the `I18N` table (one block per Obsidian UI language) plus
`DEFAULT_SETTINGS`. `tr()` in `src/i18n.ts` resolves Obsidian's language subtag through
`localeMap`. Every user-facing string goes through `tr()` and must be added to **all** locale
blocks, each in its own script (`tests/unit/i18n.test.ts` checks both).

Leaf modules: `util.ts` (frontmatter parsing, runtime math), `share.ts` (canvas-rendered share
card + intent URLs), `trailer.ts` (embed URL normalization), `anilistSync.ts` (GraphQL progress
push/pull), `src/ui/*` (modals and the lightbox).

## Hard constraints

- **ES2017 is the type ceiling** (`tsconfig.json` `lib`). `Object.fromEntries`,
  `Array.prototype.flat`, `String.prototype.trimEnd` fail the build. Use a loop or regex.
- **All network calls use `requestUrl` from `obsidian`, never global `fetch`** — mobile target.
- **The Obsidian API ceiling is `minAppVersion` 1.8.7**, but the `obsidian` dep is `latest`, so
  the typings accept APIs that do not exist there. Check the docs version, not the typings.
- **Renaming a frontmatter field is a breaking change** — it silently breaks refresh, statistics
  and AniList sync on existing notes.
- **`Genre`, `Creator` and `Cast` hold `[[links]]`** (`LINK_FIELDS`, written through `toLinks()`, shown
  through `linkLabel()`); `syncLinkFields` removes the `Related` property older versions wrote.
- **Frontmatter is untrusted**: values that become `href`/`src` go through `safeUrl()`; file and
  link names through `sanitizeFilename()` / `sanitizeLink()` (all in `src/util.ts`).
- **Counts use `trCount(key, n)`** with `<key>1/2/5` locale keys (it fills `{count}`), never
  hand-written plural rules or `note(s)`.
- **DOM injected into Obsidian's views** (note header, lightbox) is removed in `onunload`.
- **`main.js` is generated and gitignored** — never edit or commit it.
- Tabs for indentation; strict TypeScript, no `any`.
- Conventional Commits with the version in the subject, e.g. `feat: 2.2.1 — AniList progress sync`.
- User-facing changes usually also mean updating the 30 translated READMEs under `readme/`.

## Tests

`tests/unit/` covers pure helpers and providers. `tests/compliance/` guards the Obsidian
submission rules (manifest, versions, license, source hygiene, README privacy table) and ends
with a bundle smoke test that rebuilds `src/main.ts`, evaluates it against
`tests/stubs/obsidian.ts` (the npm `obsidian` package is types-only, so `vitest.config.ts`
aliases it), and asserts no timer survives `onunload`. `tests/tsconfig.json` raises `lib` to
ES2020 — the ES2017 ceiling applies to `src/` only.
