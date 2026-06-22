<p align="center">
  <img src="banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Library</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.0.1-blue" alt="Version">
  <img src="https://img.shields.io/github/downloads/Kigrok/obsidian-library-plugin/total?color=brightgreen" alt="Downloads">
  <img src="https://img.shields.io/badge/Obsidian-v1.8.7+-purple" alt="Obsidian Version">
  <img src="https://img.shields.io/github/license/Kigrok/obsidian-library-plugin?color=orange" alt="License">
</p>

<p align="center">
  <b>Organize your movies, series, books, and more into a visual gallery — right inside Obsidian.</b>
  <br />
  Search and add titles in-app, auto-fetch metadata, track progress, and wire everything into your graph.
</p>

<p align="center">
  <a href="https://community.obsidian.md/plugins/library">📦 View on the Obsidian Community Plugins directory</a>
</p>

---

> **Version 2** — full rewrite. Library is now a dedicated tab (ribbon icon), with in-app search across multiple sources (OMDb, Open Library), per-category folders, manual categories for anything, and graph links stored in frontmatter. See [Quick Start](#-quick-start).

---

## ✨ Key Features

- 🖼️ **Visual Card Grid** — A dedicated Library tab renders your collection as a gallery of cover-art cards.
- 🔎 **Built-in Search** — Search and add titles right inside the app: OMDb for movies and series, Open Library for books.
- 📺 **Smart Series Tracking** — Seasons and episode totals are fetched automatically and kept in sync.
- 📊 **Progress Indicators** — Visual progress bars on cards and note headers show how much you've watched or read.
- 📑 **Rich Note Headers** — Every content note gets an auto-generated header with all key metadata.
- 🛠️ **Custom Categories** — Create categories for Movies, Series, Books, or anything else via the manual source.
- 🕸️ **Graph Links** — A `Related` frontmatter property links every note to its category, genres, and creators, kept in sync automatically for a beautiful graph.
- 🔀 **Sorting & Collapsing** — Sort cards by name, year, rating, or date; collapse any category.
- 🌍 **Multilingual** — Native support for English, Russian, German, Spanish, French, Chinese, Arabic, and Hebrew.

---

## 🚀 Quick Start

### 1. Installation

Install **Library** from the [Obsidian Community Plugins directory](https://community.obsidian.md/plugins/library) (Settings → Community plugins → Browse → search “Library”), or install it manually via the [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).

### 2. Basic Setup

1. Go to **Settings** → **Library**.
2. Add your **Categories** — each has a name (e.g. `🎬 Movies`), a `Type` value (e.g. `Movie`), a source (OMDb, Open Library, or Manual), and an optional folder.
3. _(Optional)_ Enter your [OMDb API key](https://www.omdbapi.com/apikey.aspx) to enable movie and series search.

### 3. Add a Card by Title

No more filling in frontmatter by hand — add a movie, series, or book just by searching its name:

1. Open the **Library** tab from the ribbon icon (or run `Open Library`).
2. Click the **＋** button in the top-right of the Library page (or run `Add content`).
3. Pick a category, type the **title** into the search box, and select a result.
4. A card is created instantly, with poster, year, genre, creators, and rating filled in automatically.

The **🔍** button next to **＋** searches titles already in your library.

For **Manual** categories you just type a title and fill in the cover, year, and other fields yourself.

---

## 🔌 Sources

Each category is bound to a source that powers its search:

| Source           | Content types   | API key                                                      |
| ---------------- | --------------- | ----------------------------------------------------------- |
| **OMDb**         | Movies, Series  | Free key required — [omdbapi.com](https://www.omdbapi.com/apikey.aspx) |
| **Open Library** | Books           | None                                                        |
| **Manual**       | Anything else   | None — you type the title and fill fields yourself          |

---

## 🔒 Privacy & Network Use

Library is **offline-first**. The plugin only contacts the network when you actively search for a title to add, and only with the search terms you type:

| Service | When | What is sent | Why |
| --- | --- | --- | --- |
| `www.omdbapi.com` | You search an OMDb-backed category | The title you type and your OMDb API key | Fetch movie/series metadata (year, genre, cast, rating, poster, episode counts) |
| `openlibrary.org` | You search an Open Library category | The title you type | Fetch book metadata (author, year, subjects, cover id) |
| `covers.openlibrary.org` | A book card has a cover | The Open Library cover id | Load the cover image |

No other data ever leaves your vault. The plugin has **no telemetry, no analytics, and no self-update mechanism**. The OMDb API key you enter is stored only in your local plugin settings and is sent solely to `www.omdbapi.com`. Movie and series cover images load directly from the poster URLs returned by OMDb.

---

## 📝 Frontmatter Schema

The plugin reads and writes to standard YAML frontmatter. Notes are created for you, but every field is editable. `Source` and `Source ID` let the plugin refresh metadata later.

### Movie

```yaml
---
Type: Movie
Name: Inception
Year: 2010
Genre:
    - Action
    - Sci-Fi
Creator:
    - Christopher Nolan
Rating IMDB: 8.8
My Rating: 9
Cover: https://m.media-amazon.com/images/...
URL: https://www.imdb.com/title/tt1375666/
Progress: 1/1
Complete: true
Date: 01.03.2026
Source: omdb
Source ID: tt1375666
---
```

### Series

```yaml
---
Type: Series
Name: Stranger Things
Year: 2016
End Year: 2025
Season: 5
Genre:
    - Drama
    - Fantasy
    - Horror
Creator:
    - The Duffer Brothers
Rating IMDB: 8.7
My Rating: 9
Cover: https://m.media-amazon.com/images/...
URL: https://www.imdb.com/title/tt4574334/
Progress: 25/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

> **📺 Series auto-update:** Run `Refresh metadata for current note` (or just open the note) and the plugin updates the total episode count in `Progress` (e.g., `25/42` → `25/50`) and the `Season` count, while keeping your watched count intact.

### Book

```yaml
---
Type: Book
Name: Dune
Year: 1965
Genre:
    - Science Fiction
Creator:
    - Frank Herbert
Cover: https://covers.openlibrary.org/b/id/...-L.jpg
ISBN: 9780441013593
My Rating: 9
Progress: 412/688
Complete: false
Date: 01.03.2026
Source: openlibrary
Source ID: /works/OL893415W
---
```

---

## 🕸️ Graph Links

Each content note gets a `Related` frontmatter property, kept up to date automatically — the note body is never touched:

```yaml
Related:
    - "[[Movie]]"
    - "[[Action]]"
    - "[[Sci-Fi]]"
    - "[[Christopher Nolan]]"
```

These links connect your notes through shared categories, genres, and creators, so the Obsidian graph view forms clean clusters. A real hub note is created per category (e.g. `Movie`) so clusters show even with unresolved links hidden. The property is written when a note is created and refreshed whenever its metadata changes — run `Rebuild graph links` only if you want to force a full rebuild.

---

## 🛠 Commands

| Command                              | Description                                                              |
| ------------------------------------ | ----------------------------------------------------------------------- |
| `Open Library`                       | Open the Library gallery tab.                                           |
| `Add content`                        | Search a source and create a content note (or type a title for Manual). |
| `Search your library`                | Fuzzy-search and open any note already in your library.                 |
| `Refresh metadata for current note`  | Re-fetch metadata for the active note; updates series episode totals.   |
| `Rebuild graph links`                | Wire every content note to its category, genres, and creators.          |

---

## 🤝 Contributing & Support

- 🐛 **Found a bug?** Open an [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues).
- 💡 **Have a feature idea?** Start a [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions).
- ⭐ **Love the plugin?** Consider starring the repository to show your support!

---
