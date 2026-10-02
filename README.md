<p align="center">
  <img src="banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Library</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.3.6-blue" alt="Version">
  <img src="https://img.shields.io/github/downloads/Kigrok/obsidian-library-plugin/total?color=brightgreen" alt="Downloads">
  <img src="https://img.shields.io/badge/Obsidian-v1.8.7+-purple" alt="Obsidian Version">
  <img src="https://img.shields.io/github/license/Kigrok/obsidian-library-plugin?color=orange" alt="License">
</p>

<p align="center">
  Movies, series, books, anime, comics, games, and music as notes in Obsidian, shown as a gallery of cover cards.
  <br />
  <a href="https://community.obsidian.md/plugins/library">Community Plugins directory</a>
</p>

## Features

- Search a title in any language and get a note with the poster, year, genres, creators, cast, and ratings.
- Browse cover cards by category; a folded one scrolls sideways.
- Titles you haven't started get an eye on the cover and gather in Up next.
- Tick episodes or chapters and rate them; `Progress` and `My Rating` follow.
- Trailers, stills, and similar titles under each note.
- Steam import, anime sync, and share cards.
- Genres, creators, and actors are links that collect their titles.
- The interface is translated into every language Obsidian supports.

## Quick start

1. Install Library from Settings → Community plugins, or from [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).
2. In Settings → Library, add a category per medium: Movies, Series, Books, Comics, Games, Music, Anime, Manual.
3. Open the Library tab from the ribbon, press **+**, pick a category, and search. A year after the title (`brother 1997`) narrows a common name.

A category's `Type` value picks its notes, and its folder takes new ones (Advanced in the category's settings).

## Sources

| Category | Sources | First, with a key |
| --- | --- | --- |
| Movies, series | Cinemeta, Wikidata | [OMDb](https://www.omdbapi.com/apikey.aspx) |
| Books | Open Library | [Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| Games | Steam, Wikidata | [RAWG](https://rawg.io/apidocs) |
| Music | Deezer | |
| Anime | AniList | [MyAnimeList](https://myanimelist.net/apiconfig) Client ID |
| Comics | Wikidata, AniList for manga | [Comic Vine](https://comicvine.gamespot.com/api/) |
| Anything else | Manual: you fill the fields | |

Keys go in Settings → Library → API keys. A [TMDB key](https://www.themoviedb.org/settings/api) adds season ratings and stills; Rotten Tomatoes scores come from Wikidata or OMDb. Game trailers come from IGDB with a Twitch Client ID and secret ([dev.twitch.tv/console/apps](https://dev.twitch.tv/console/apps)), otherwise from Wikidata or Steam. `Import Steam library` adds your games with `Playtime` in hours; it needs a [Steam Web API key](https://steamcommunity.com/dev/apikey) and public game details. Settings → Library → Show recommendations hides the similar titles.

## Progress and statistics

Open a season in a series note to tick episodes and score them from 1 to 10. `Progress` counts the ticked episodes, and `My Rating` averages the season scores. Anime is one season. Books get chapters from Open Library or from **Add chapters**.

Up next holds the titles you haven't finished, ticked, or scored. Settings → Library hides it or keeps those titles out of their categories. The statistics panel shows the top lists you pick and your hours on movies, series, and anime.

## Sync

AniList: register a client at [anilist.co/settings/developer](https://anilist.co/settings/developer) with the redirect URL `https://anilist.co/api/v2/oauth/pin`, paste the Client ID in Settings → Library → AniList sync, click **Connect**, and paste the token.

MyAnimeList: create a client at [myanimelist.net/apiconfig](https://myanimelist.net/apiconfig) with the redirect URL `http://localhost`, paste its Client ID (and secret, if it has one) in Settings → Library → MyAnimeList sync, click **Connect**, and paste the address your browser opens. The Client ID alone puts MyAnimeList titles first in anime search.

Every anime note syncs with both sites. Pull never moves progress back and leaves `My Rating` alone.

## Frontmatter

Each card is a note, and everything the plugin knows about it is in the frontmatter:

```yaml
---
Type: Series
Name: Stranger Things
Year: 2016
Genre: ["[[Drama]]", "[[Horror]]"]
Creator: ["[[The Duffer Brothers]]"]
Cast: ["[[Winona Ryder]]"]
Rating IMDB: 8.7
Runtime: 42
My Rating: 9
Cover: https://m.media-amazon.com/images/...
URL: https://www.imdb.com/title/tt4574334/
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

Movies and series also have `Rating RT`, `Trailer`, and `Gallery`; series `End Year`, `Season`, and `Seasons` (episodes with `watched` and `my_rating`); books `ISBN` and `Chapters`; anime `Rating AniList` or `Rating MAL`. `Runtime` is one episode. A refresh fills empty fields and updates the sources' ratings, never yours.

## Privacy and network use

Your library is plain notes and works offline. The plugin goes online to search, refresh, sync, or share, when you open a library note (at most once in 5 minutes), and once after an update or a key change. It has no telemetry or self-update, and each key goes only to its own service.

| Hosts | Use | Data sent |
| --- | --- | --- |
| `www.omdbapi.com` | Movie search, with a key | Title or IMDb id, key |
| `v3-cinemeta.strem.io`, `images.metahub.space`, `episodes.metahub.space` | Movies, series, stills | Title or IMDb id, genre |
| `api.themoviedb.org`, `image.tmdb.org` | Movie and series details, with a key | IMDb id, key |
| `www.wikidata.org`, `en.wikipedia.org`, `upload.wikimedia.org` | Search, Rotten Tomatoes, trailers, covers | Search text, ids |
| `openlibrary.org`, `covers.openlibrary.org` | Books, chapters, covers | Title, author, ISBN, genres |
| `www.googleapis.com` | Book search, with a key | Title, key |
| `api.rawg.io`, `media.rawg.io` | Games, with a key | Title or id, genre, key |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com`, `video.akamai.steamstatic.com`, `shared.akamai.steamstatic.com`, `api.steampowered.com` | Games, trailers, Steam import | Title or app id; key and SteamID on import |
| `id.twitch.tv`, `api.igdb.com` | Game trailers, with Twitch keys | Twitch ID and secret, game |
| `api.deezer.com` | Music search | Album or artist |
| `graphql.anilist.co`, `anilist.co`, `s4.anilist.co`, streaming services' image hosts | Anime, manga, sync | Title or ids; your token, progress, status, score |
| `myanimelist.net`, `api.myanimelist.net` | Anime search with a Client ID, sync | Search text, Client ID and secret; your token, progress, status, score |
| `comicvine.gamespot.com` | Comic search, with a key | Title, key |
| `www.youtube.com`, `www.youtube-nocookie.com`, `i.ytimg.com`, `player.vimeo.com`, `www.dailymotion.com` | Trailers | Video id |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Share buttons | Caption with title, score, and link; the image stays local |

## Commands

- `Open Library`
- `Add content`
- `Search your library`
- `Refresh metadata for current note`, `Refresh metadata of all notes`
- `Rebuild graph links`
- `Find & remove duplicates`
- `Share current note`
- `Push current note to AniList`, `Pull progress from AniList`
- `Push current note to MyAnimeList`, `Pull progress from MyAnimeList`
- `Import Steam library`

## Support

Report bugs in [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues) and ideas in [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions). The plugin is under the [MIT License](LICENSE).

If the plugin is useful to you, you can support it:

| | Network | Address |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
