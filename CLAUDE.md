# CLAUDE.md

Guidance for Claude Code (claude.ai/code) in this repo.

`AGENTS.md` = long-form version of same guidance — read for full list of easy-to-violate constraints (frontmatter contract, enrichment pass, i18n, version bumping). This file = short map.

## Commands

- `npm run dev` — esbuild watch build, writes `main.js` in place.
- `npm run build` — `tsc -noEmit -skipLibCheck` + minified `main.js`. Required gate before PR.
- `npm run lint` — eslint on `src/**/*.ts` and `tests/**/*.ts`.
- `npm test` / `npm run test:watch` — vitest over `tests/**/*.test.ts` in jsdom.
- Single test file: `npx vitest run tests/unit/util.test.ts`
- Single test by name: `npx vitest run -t "progress parsing"`
- `npm version <x.y.z>` — syncs `manifest.json` + `versions.json`, stages them. Never hand-edit three version fields.

Working dir **is** installed plugin folder inside Obsidian vault → dev build live after plugin reload in Obsidian.

## Architecture

Single Obsidian plugin bundled from `src/main.ts` to CJS `main.js` (esbuild, `target: es2020`, `obsidian`/electron/codemirror external).

**Data model.** No database. "Card" = vault note; all state in frontmatter (`Source`, `Source ID`, `Progress` as `watched/total`, `Date` as `dd.mm.yyyy`, `My Rating`, `Rating IMDB`, optional `Trailer`/`Gallery`/`Seasons`/`Chapters`/`Runtime`/`Cast`). Notes grouped into categories by `Type` value; category definitions (name, Type value, folder) live in plugin settings, not code.

**Providers** (`src/providers/`). Each implements `ContentProvider` (`search` + `fetch`) from `types.ts`, registered per `ContentType` in `ProviderRegistry` (`registry.ts`) from `main.ts`. Two sources for same medium merged behind aggregator (`bookAggregator.ts`, `gameAggregator.ts`) that tags results with `{__pid, __raw}` so refresh routes back — never register second category for same medium.

**Enrichers** = separate interface (`MetadataEnricher`, keyed by IMDb id) injected into `OmdbProvider` in priority order: `tmdb.ts` (optional, needs key) then `cinemeta.ts` (keyless default). Fill trailer/gallery/seasons/runtime. *Not* providers.

**`src/main.ts`** = plugin class: commands, note creation/refresh, duplicate detection, AniList sync wiring, `scheduleEnrich` — background pass backfilling new frontmatter fields into existing notes after release (marks in `settings.enrichMarks`, cleared when API-key signature changes).

**`src/view.ts`** = whole UI surface: one `ItemView` rendering statistics section + one grid section per category, driven by debounced `render()` reading vault metadata cache. Sort state, folded sections, statistics layout persist via settings, not module scope.

**`src/constants.ts`** = almost entirely `I18N` table (one block per Obsidian UI language) + `DEFAULT_SETTINGS`. `tr()` in `src/i18n.ts` resolves Obsidian language subtag via `localeMap`. Every user-facing string goes through `tr()`, must be added to **all** locale blocks, each in own script (`tests/unit/i18n.test.ts` checks both).

Leaf modules: `util.ts` (frontmatter parsing, runtime math), `episodes.ts` (episode/chapter ticks, ratings, season merge), `facts.ts` (watch-time comparisons), `share.ts` (canvas-rendered share card + intent URLs), `trailer.ts` (embed URL normalization), `anilistSync.ts` (GraphQL progress push/pull), `src/ui/*` (modals, lightbox).

## Hard constraints

- **ES2017 = type ceiling** (`tsconfig.json` `lib`). `Object.fromEntries`, `Array.prototype.flat`, `String.prototype.trimEnd` fail build. Use loop or regex.
- **All network calls use `requestUrl` from `obsidian`, never global `fetch`** — mobile target.
- **Obsidian API ceiling = `minAppVersion` 1.8.7**, but `obsidian` dep is `latest` → typings accept APIs missing there. Check docs version, not typings.
- **Renaming frontmatter field = breaking change** — silently breaks refresh, statistics, AniList sync on existing notes.
- **`Genre`, `Creator`, `Cast` hold `[[links]]`** (`LINK_FIELDS`, written via `toLinks()`, shown via `linkLabel()`); `syncLinkFields` removes `Related` property older versions wrote.
- **Frontmatter untrusted**: values becoming `href`/`src` go through `safeUrl()`; file/link names through `sanitizeFilename()` / `sanitizeLink()` (all in `src/util.ts`).
- **Counts use `trCount(key, n)`** with `<key>1/2/5` locale keys (fills `{count}`), never hand-written plural rules or `note(s)`.
- **Settings defined once** in `sections()` (`src/settings.ts`), rendered by `getSettingDefinitions()` on 1.13+ and by `display()` before. Guard 1.13-only calls with `requireApiVersion("1.13.0")` — string literal, else review lint errors.
- **DOM injected into Obsidian views** (note header, lightbox) removed in `onunload`.
- **`main.js` generated + gitignored** — never edit or commit.
- Tabs for indentation; strict TypeScript, no `any`.
- Conventional Commits with version in subject, e.g. `feat: 2.2.1 — AniList progress sync`.
- User-facing changes usually also mean updating 30 translated READMEs under `readme/`.

## Tests

`tests/unit/` covers pure helpers + providers. `tests/compliance/` guards Obsidian submission rules (manifest, versions, license, source hygiene, README privacy table), ends with bundle smoke test: rebuilds `src/main.ts`, evaluates against `tests/stubs/obsidian.ts` (npm `obsidian` package types-only, so `vitest.config.ts` aliases it), asserts no timer survives `onunload`. `tests/tsconfig.json` raises `lib` to ES2020 — ES2017 ceiling applies to `src/` only.

## Agent skills

### Issue tracker

Issues and specs live as local markdown under `.scratch/<feature>/` (gitignored). See `docs/agents/issue-tracker.md`.

### Triage labels

Default five roles: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `CONTEXT.md` + `docs/adr/` at repo root, created lazily. See `docs/agents/domain.md`.
