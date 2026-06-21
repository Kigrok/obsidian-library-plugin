# Contributing

Thanks for your interest in improving Library!

## Development

```bash
npm install      # install dependencies
npm run dev      # watch build into main.js
npm run build    # type-check + production build
```

Symlink or copy the repo into `<vault>/.obsidian/plugins/library/`, then enable the plugin and use **Reload app without saving** (or toggle the plugin) to pick up changes.

## Guidelines

- TypeScript is strict — keep it fully typed, no `any`.
- UI strings go through `tr()` in `src/i18n.ts`; add keys to every locale in `src/constants.ts`.
- New content sources implement `ContentProvider` (`src/providers/types.ts`) and register in `src/main.ts`.
- Run `npm run build` before opening a pull request; it must pass with no errors.

## Reporting issues

Open an [issue](https://github.com/Kigrok/obsidian-library-plugin/issues) with steps to reproduce, your Obsidian version, and the plugin version.
