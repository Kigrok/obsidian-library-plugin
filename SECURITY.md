# Security

Report a vulnerability privately through [GitHub's report form](https://github.com/Kigrok/obsidian-library-plugin/security/advisories/new), not in a public issue.

Fixes go into the latest release, which Obsidian installs as an update.

Worth reporting:

- the API keys or the AniList and MyAnimeList tokens kept in the plugin's settings leaking anywhere
- a note's frontmatter or a source's answer making the plugin open a `javascript:` link or run code
- a request going to a host the README's privacy table does not list
