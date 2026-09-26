> **English** | [RU](readme/README.ru.md) | [UK](readme/README.uk.md) | [DE](readme/README.de.md) | [ES](readme/README.es.md) | [FR](readme/README.fr.md) | [ZH](readme/README.zh.md) | [JA](readme/README.ja.md) | [KO](readme/README.ko.md) | [AR](readme/README.ar.md)

<p align="center">
  <img src="banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Library</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.3.2-blue" alt="Version">
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

- Search a title and get a note with the poster, year, genre, creators, cast, and ratings filled in.
- Browse the library as cover cards, grouped by category and sorted by name, year, rating, or date.
- Tick the episodes of a series or the chapters of a book and rate each one; `Progress` and `My Rating` are computed from them.
- Movie and series notes show a trailer, stills, runtime, and the season list.
- Genres, creators, and actors are links, so their notes collect every title in backlinks and the graph.
- The statistics panel shows the top lists you pick and your total watch time.
- Share a title as a card image to X, Telegram, Reddit, and six other networks.
- Sync anime progress with AniList.
- The interface is translated into every language Obsidian supports, and this README into [30 languages](readme/).

## Quick start

1. Install **Library** from Settings → Community plugins → Browse, or from [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).
2. In Settings → Library, add a category for each medium: Movies, Series, Books, Comics, Games, Music, Anime, Manual.
3. Add the API keys your sources need (see below).
4. Open the Library tab from the ribbon, press **+**, pick a category, and search a title. A title already in the library opens its existing note.

A category's `Type` value (for example `Movie`) decides which notes belong to it, and its folder decides where new notes go. Both are under **Advanced** in the category's settings.

## Sources

| Category | Source | Key |
| --- | --- | --- |
| Movies, series | OMDb | [Free key](https://www.omdbapi.com/apikey.aspx) |
| Books | Google Books + Open Library | Optional [Google Books key](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| Games | RAWG + Steam | [Free RAWG key](https://rawg.io/apidocs); Steam needs none |
| Music | Deezer | None |
| Anime | AniList | None |
| Comics | Comic Vine | [Free key](https://comicvine.gamespot.com/api/) |
| Anything else | Manual: you fill the fields | None |

Trailers, stills, runtime, and season lists come from Cinemeta without a key. A [TMDB key](https://www.themoviedb.org/settings/api) adds season ratings and more stills.

## Progress and ratings

A series note's header lists the seasons, and each season opens into its episodes, with titles where the source has them. Tick an episode or a whole season as watched and score it from 1 to 10. `Progress` counts the ticked episodes, a season's score is the average of its rated episodes, and `My Rating` is the average of the rated seasons. A season with no rated episodes takes a score of its own.

Anime works the same way, as one season without episode titles.

Book chapters come from an edition's table of contents on Open Library. When none is found, **Add chapters** in the note header takes a chapter count or one title per line. From then on `Progress` counts chapters instead of pages, and the pages you had read carry over as the same share of chapters.

Notes from older versions keep their progress. Until you tick anything, the first episodes up to the `Progress` count show as watched.

## Statistics

The panel at the top of the Library tab shows the columns you pick in Settings → Library → Statistics: a category's three best-rated titles, a property's three most frequent values (genres, actors, or any other), and the hours spent on movies, series, and anime. Under the chart, one comparison a day puts your watch time in other terms, for example: Apollo 11 could have flown to the Moon and back 8 times.

## Graph links

`Genre`, `Creator`, and `Cast` hold links such as `[[Christopher Nolan]]`, so each genre's or person's note lists its titles in backlinks. Names typed by hand become links when the note changes, and `Rebuild graph links` converts the whole library.

## Sharing and AniList

**Share** in a note's header draws a card with the poster, title, year, genre, cast, ratings, and your score. On desktop the image goes to the clipboard and the network you pick opens with a caption, so you paste the image into the post. On mobile the system share sheet gets the image. You can also copy the image or caption, or save the image to the vault.

To sync anime, register a client at [anilist.co/settings/developer](https://anilist.co/settings/developer) with the redirect URL `https://anilist.co/api/v2/oauth/pin`. Paste the Client ID in Settings → Library → AniList sync, click **Connect**, and paste the token AniList shows you. `Push current note to AniList` sends progress, status, and score. `Pull progress from AniList` updates your notes, never moves progress back, and leaves `My Rating` alone. Only notes with `Source: anilist` sync.

## Frontmatter

Each card is a note, and everything the plugin knows about it is in the frontmatter:

```yaml
---
Type: Series
Name: Stranger Things
Year: 2016
End Year: 2025
Season: 5
Genre: ["[[Drama]]", "[[Horror]]"]
Creator: ["[[The Duffer Brothers]]"]
Cast: ["[[Winona Ryder]]", "[[David Harbour]]"]
Rating IMDB: 8.7
Rating RT: 91
Runtime: 42
My Rating: 9
Cover: https://m.media-amazon.com/images/...
URL: https://www.imdb.com/title/tt4574334/
Trailer: https://www.youtube.com/watch?v=b9EkMc79ZSU
Gallery: ["https://image.tmdb.org/t/p/w780/56v2KjBlU4XaOv9rVYEQypROD7P.jpg"]
Seasons:
  - name: Season 1
    episodes: 8
    rating: 8.0
    episode_list:
      - title: "Chapter One: The Vanishing of Will Byers"
        watched: true
        my_rating: 9
      # ...7 more episodes
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

For a series, `Runtime` is the length of one episode. Books add `ISBN` and keep chapters in `Chapters` with the same `title`, `watched`, and `my_rating` fields; anime adds `Rating AniList` and `Status`. The cover property can be renamed in settings, for example to `image`.

A refresh fills only empty fields, so the values you edit stay. It also updates the episode total in `Progress` and adds new seasons and episode titles.

## Privacy and network use

Your library is plain notes and works offline. The plugin goes online when you search, refresh, sync, or share; when you open a library note, at most once every 5 minutes per note; and once after an update or a key change, to fill in new fields. It has no telemetry, analytics, or self-update. API keys stay in your local plugin settings and go only to their own service.

| Host | When | What is sent |
| --- | --- | --- |
| `www.omdbapi.com` | Movie and series search | Title or IMDb id, OMDb key |
| `openlibrary.org` | Book search; chapter lookup when you add or open a book | Title and author, ISBN, or work id |
| `covers.openlibrary.org` | Book covers | Cover id |
| `www.googleapis.com` | Book search | Title, Google Books key |
| `api.rawg.io` | Game search | Title, RAWG key |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | Game search and covers | Title or Steam app id |
| `api.deezer.com` | Music search | Album or artist |
| `graphql.anilist.co` | Anime search; AniList sync | Title; your token, progress, status, and score |
| `anilist.co` | You click **Connect** | Client ID, opened in your browser |
| `s4.anilist.co` | Anime banners | CDN path |
| `comicvine.gamespot.com` | Comic search | Title, Comic Vine key |
| `v3-cinemeta.strem.io` | Adding or refreshing a movie or series | IMDb id |
| `images.metahub.space`, `episodes.metahub.space` | Stills | IMDb id, season and episode numbers |
| `api.themoviedb.org`, `image.tmdb.org` | Adding or refreshing a movie or series, if you set a TMDB key | IMDb id and TMDB key; image path |
| `i.ytimg.com` | Trailer stills | Video id |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Opening a note with a trailer | Video id |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | You click a share button | The caption: title, your score, source link. The image stays on your device |

## Commands

| Command | What it does |
| --- | --- |
| `Open Library` | Opens the Library tab |
| `Add content` | Searches a source and creates a note |
| `Search your library` | Finds and opens a library note |
| `Refresh metadata for current note` | Fetches the active note again |
| `Refresh metadata of all notes` | Fetches every library note, one at a time |
| `Rebuild graph links` | Turns `Genre`, `Creator`, and `Cast` into links |
| `Find & remove duplicates` | Lists notes that share a URL and removes the ones you pick |
| `Share current note` | Opens the share card |
| `Push current note to AniList` | Sends progress, status, and score |
| `Pull progress from AniList` | Updates notes from your AniList list |

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
