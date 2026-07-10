> [EN](README.md) | [RU](README.ru.md) | [UK](README.uk.md) | **[DE](README.de.md)** | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

<p align="center">
  <img src="banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Library</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.2.0-blue" alt="Version">
  <img src="https://img.shields.io/github/downloads/Kigrok/obsidian-library-plugin/total?color=brightgreen" alt="Downloads">
  <img src="https://img.shields.io/badge/Obsidian-v1.8.7+-purple" alt="Obsidian Version">
  <img src="https://img.shields.io/github/license/Kigrok/obsidian-library-plugin?color=orange" alt="License">
</p>

<p align="center">
  <b>Organisiere deine Filme, Serien, Bücher und mehr in einer visuellen Galerie — direkt in Obsidian.</b>
  <br />
  Suche und füge Titel direkt in der App hinzu, rufe Metadaten automatisch ab, verfolge den Fortschritt und verbinde alles mit deinem Graphen.
</p>

<p align="center">
  <a href="https://community.obsidian.md/plugins/library">Im Obsidian Community Plugins Verzeichnis ansehen</a>
</p>

---

## Hauptfunktionen

- **Visuelles Kartenraster** — Ein eigener Library-Tab zeigt deine Sammlung als Galerie mit Cover-Art-Karten.
- **Integrierte Suche** — Suche und füge Titel direkt in der App hinzu: OMDb für Filme und Serien, Open Library oder Google Books für Bücher, RAWG für Spiele, Deezer für Musik, AniList für Anime, Comic Vine für Comics.
- **Intelligente Serienverfolgung** — Staffeln und Episodenzahlen werden automatisch abgerufen und synchron gehalten.
- **Fortschrittsanzeigen** — Visuelle Fortschrittsbalken auf Karten und Notizköpfen zeigen, wie viel du gesehen oder gelesen hast.
- **Reichhaltige Notizköpfe** — Jede Inhaltsnotiz erhält einen automatisch generierten Kopf mit allen wichtigsten Metadaten.
- **Benutzerdefinierte Kategorien** — Erstelle Kategorien für Filme, Serien, Anime, Comics, Spiele, Musik oder alles andere über die manuelle Quelle.
- **Graph-Verknüpfungen** — Eine `Related` Frontmatter-Eigenschaft verknüpft jede Notiz mit ihrer Kategorie, Genres und Erstellern, automatisch synchronisiert für einen schönen Graphen.
- **Teilen-Karten** — Verwandle jede Inhaltsnotiz in ein teilbares Kartenbild (Poster, Titel, Jahr, Genre, IMDb-Bewertung und deine Bewertung) und poste es auf X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky oder Pinterest — teile es direkt an die Apps deines Geräts oder kopiere/speichere das Bild, um es überall zu verwenden.
- **Sortieren & Zusammenfassen** — Sortiere Karten nach Name, Jahr, Bewertung oder Datum; klappe beliebige Kategorien zusammen.
- **Statistiken** — Top-Genres, Top-Ersteller (nur Filme & Serien) und Top-Elemente pro Kategorie mit Medaillen-Rankings.
- **Duplikaterkennung** — Verhindert automatisch das Hinzufügen desselben Titels zweimal anhand der URL. Ein integrierter Befehl findet und entfernt vorhandene Duplikate.
- **Mehrsprachig** — 31 Sprachen: Englisch, Ukrainisch, Russisch, Weißrussisch, Kasachisch, Usbekisch, Deutsch, Spanisch, Französisch, Italienisch, Niederländisch, Tschechisch, Kroatisch, Polnisch, Rumänisch, Türkisch, Aserbaidschanisch, Persisch, Hindi, Bengali, Urdu, Tagalog, Vietnamesisch, Thai, Javanisch, Japanisch, Koreanisch, Chinesisch, Arabisch, Singhalesisch, Hebräisch.

---

## Schnellstart

### 1. Installation

Installiere **Library** aus dem [Obsidian Community Plugins Verzeichnis](https://community.obsidian.md/plugins/library) (Einstellungen > Community-Plugins > Durchsuchen > "Library" suchen) oder installiere es manuell über die [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).

### 2. Grundkonfiguration

1. Gehe zu **Einstellungen** > **Library**.
2. Füge deine **Kategorien** hinzu — wähle einen vordefinierten Typ (Movies, Series, Books, Comics, Games, Music, Anime oder Manual) aus dem Dropdown und klicke auf **Add category**. Jede Kategorie hat einen Anzeigenamen (in deine Sprache übersetzt), einen `Type`-Wert (immer Englisch, z.B. `Movie`), eine Quelle und einen optionalen Ordner zum Speichern von Notizen.
3. _(Optional)_ Gib API-Schlüssel für die von dir genutzten Dienste ein: [OMDb](https://www.omdbapi.com/apikey.aspx) für Filme/Serien, [RAWG](https://rawg.io/apidocs) für Spiele, [Comic Vine](https://comicvine.gamespot.com/api/) für Comics. Anime (AniList) und Musik (Deezer) benötigen keinen Schlüssel.

### 3. Eine Karte per Titel hinzufügen

Kein manuelles Ausfüllen von Frontmatter mehr — füge einen Film, Serie, Anime oder Comic einfach durch Suchen des Namens hinzu:

1. Öffne den **Library**-Tab über das Symbol in der Seitenleiste (oder führe `Open Library` aus).
2. Klicke auf die **+**-Schaltfläche oben rechts auf der Library-Seite (oder führe `Add content` aus).
3. Wähle eine Kategorie, gib den **Titel** in das Suchfeld ein und wähle ein Ergebnis aus.
4. Eine Karte wird sofort erstellt, mit Poster, Jahr, Genre, Erstellern und Bewertung automatisch ausgefüllt.

Die **Suche**-Schaltfläche neben **+** durchsucht Titel, die bereits in deiner Bibliothek sind.

Für **manuelle** Kategorien gibst du einfach einen Titel ein und füllst das Cover, das Jahr und andere Felder selbst aus.

---

## Statistiken

Der Library-Tab enthält einen zusammenklappbaren **Statistiken**-Bereich oben:

- **Top-Genres** — nach Häufigkeit in deiner gesamten Bibliothek sortiert.
- **Top-Ersteller** — nach Anzahl der Filme und Serien sortiert, in denen sie vorkommen.
- **Top pro Kategorie** — für jede Kategorie (Filme, Serien, Bücher usw.) die Top-3-Elemente nach Bewertung mit kleinen Cover-Miniaturen.

---

## Duplikaterkennung

Library verhindert doppelte Einträge durch Prüfen des `URL`-Felds:

- **Beim Hinzufügen** — wenn bereits eine Notiz mit derselben URL existiert, wird die vorhandene Notiz geöffnet, anstatt ein Duplikat zu erstellen.
- **Duplikate finden & entfernen** — führe diesen Befehl aus der Palette aus, um alle Notizen zu scannen, nach URL zu gruppieren und Duplikate selektiv über ein Modal zu entfernen.

---

## Quellen

Jede Kategorie ist an eine Quelle gebunden, die ihre Suche unterstützt:

| Quelle            | Inhaltstypen   | API-Schlüssel                                              |
| ----------------- | --------------- | ----------------------------------------------------------- |
| **OMDb**          | Filme, Serien   | Freier Schlüssel erforderlich — [omdbapi.com](https://www.omdbapi.com/apikey.aspx) |
| **Books**         | Bücher          | Open Library (kein Schlüssel) + Google Books (optionaler kostenloser Schlüssel). Ergebnisse werden zusammengeführt — Google Books zuerst, Open Library darunter. |
| **RAWG**          | Spiele          | Freier Schlüssel erforderlich — [rawg.io/apidocs](https://rawg.io/apidocs) |
| **Deezer**        | Musik (Alben)   | Keiner                                                     |
| **AniList**       | Anime           | Keiner — kostenlose AniList GraphQL-API, kein Schlüssel erforderlich |
| **Comic Vine**    | Comics          | Freier Schlüssel erforderlich — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**        | Alles andere    | Keiner — du gibst den Titel ein und füllst die Felder selbst aus |

---

## Datenschutz & Netzwerknutzung

Library ist **offline-zuerst**. Das Plugin kontaktiert das Netzwerk nur, wenn du aktiv nach einem Titel zum Hinzufügen suchst, und nur mit den Suchbegriffen, die du eingibst:

| Dienst | Wann | Was gesendet wird | Warum |
| --- | --- | --- | --- |
| `www.omdbapi.com` | Du durchsuchst eine OMDb-gestützte Kategorie | Der Titel, den du eingibst, und dein OMDb-API-Schlüssel | Film/Serien-Metadaten abrufen (Jahr, Genre, Besetzung, Bewertung, Poster, Episodenzahlen) |
| `openlibrary.org` | Du durchsuchst eine Open-Library-Kategorie | Der Titel, den du eingibst | Buch-Metadaten abrufen (Autor, Jahr, Themen, Cover-ID) |
| `covers.openlibrary.org` | Eine Buchkarte hat ein Cover | Die Open-Library-Cover-ID | Cover-Bild laden |
| `www.googleapis.com` | Du durchsuchst eine Google-Books-Kategorie | Der Titel, den du eingibst, und dein Google-Books-Schlüssel | Buch-Metadaten abrufen (Autor, Jahr, Kategorien, Seitenzahl, Cover, ISBN) |
| `api.rawg.io` | Du durchsuchst eine RAWG-Spiel-Kategorie | Der Titel, den du eingibst, und dein RAWG-Schlüssel | Spiel-Metadaten abrufen (Jahr, Genre, Entwickler, Cover) |
| `api.deezer.com` | Du durchsuchst eine Deezer-Musik-Kategorie | Der Album- oder Künstlername, den du eingibst | Album-Metadaten abrufen (Künstler, Jahr, Genre, Anzahl der Titel, Cover) |
| `graphql.anilist.co` | Du durchsuchst eine Anime-Kategorie | Der Titel, den du eingibst | Anime-Metadaten abrufen (Titel, Jahr, Genre, Episoden, AniList-Bewertung, Studio, Poster) |
| `comicvine.gamespot.com` | Du durchsuchst eine Comics-Kategorie | Der Titel, den du eingibst, und dein Comic-Vine-Schlüssel | Comic-Metadaten abrufen (Titel, Jahr, Verlag, Ausgabenanzahl, Cover) |

Keine anderen Daten verlassen jemals dein Vault. Das Plugin hat **keine Telemetrie, keine Analysen und keinen Selbstaktualisierungsmechanismus**. API-Schlüssel (OMDb, Google Books, RAWG, Comic Vine) werden nur in deinen lokalen Plugin-Einstellungen gespeichert und nur an die jeweiligen Dienste gesendet. Cover-Bilder werden direkt aus den von jeder Quelle zurückgegebenen URLs geladen.

---

## Frontmatter-Schema

Das Plugin liest und schreibt in das Standard-YAML-Frontmatter. Notizen werden für dich erstellt, aber jedes Feld ist bearbeitbar. `Source` und `Source ID` ermöglichen es dem Plugin, Metadaten später zu aktualisieren.

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

> **Serien-Aktualisierung:** Führe `Refresh metadata for current note` aus (oder öffne einfach die Notiz) und das Plugin aktualisiert die Gesamtepisodeanzahl in `Progress` (z.B. von `25/42` auf `25/50`) und die `Season`-Anzahl, wobei deine gesehene Anzahl erhalten bleibt.

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

### Anime

```yaml
---
Type: Anime
Name: Steins;Gate
Year: 2011
Genre:
    - Sci-Fi
    - Thriller
Creator:
    - White Fox
Rating AniList: 9.1
Status: FINISHED
Cover: https://s4.anilist.co/file/anilistcdn/media/anime/cover/...
URL: https://anilist.co/anime/9253
Progress: 0/24
Complete: false
Date: 01.03.2026
Source: anilist
Source ID: 9253
---
```

### Comic

```yaml
---
Type: Comic
Name: Watchmen
Year: 1986
Genre:
    - Comics
Creator:
    - DC Comics
Cover: https://comicvine.gamespot.com/a/uploads/...
URL: https://comicvine.gamespot.com/watchmen/4050-33819/
Progress: 0/12
Complete: false
Date: 01.03.2026
Source: comicvine
Source ID: 33819
---
```

---

## Graph-Verknüpfungen

Jede Inhaltsnotiz erhält eine `Related` Frontmatter-Eigenschaft, die automatisch aktuell gehalten wird — der Notizinhalt wird niemals geändert:

```yaml
Related:
    - "[[Movie]]"
    - "[[Action]]"
    - "[[Sci-Fi]]"
    - "[[Christopher Nolan]]"
```

Diese Verknüpfungen verbinden deine Notizen über gemeinsame Kategorien, Genres und Ersteller, sodass die Obsidian-Graph-Ansicht saubere Cluster bildet. Pro Kategorie wird ein echter Hub-Notiz erstellt (z.B. `Movie`), sodass Cluster auch dann sichtbar sind, wenn nicht aufgelöste Links ausgeblendet sind. Die Eigenschaft wird beim Erstellen einer Notiz geschrieben und bei jeder Änderung ihrer Metadaten aktualisiert — führe `Rebuild graph links` nur aus, wenn du einen vollständigen Neuaufbau erzwingen möchtest.

---

## Teilen

Jede Inhaltsnotiz erhält eine **Teilen**-Schaltfläche in ihrem Kopf (oder führe `Share current note` aus). Sie rendert ein Kartenbild — Poster, Titel, Jahr, Genre, IMDb/AniList-Bewertung und deine Bewertung — das du überall posten kannst:

- **Auf dem Handy** — die **Teilen…**-Schaltfläche öffnet das native Teilen-Menü deines Geräts mit dem direkt angehängten Kartenbild, sodass du es direkt an jede App senden kannst.
- **X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, Pinterest** — öffnet den Editor des jeweiligen Netzwerks mit einer vorausgefüllten Bildunterschrift (Titel, deine Bewertung, der Quell-Link und ein Link zu diesem Plugin). Das Kartenbild wird gleichzeitig in deine Zwischenablage kopiert, sodass du es einfach (Strg/Cmd+V) in den Beitrag einfügst.
- **Bild kopieren / Text kopieren / Bild speichern** — kopiere die gerenderte Karte oder die Bildunterschrift in die Zwischenablage oder speichere das Bild im Anhang-Ordner deines Vaults, um es manuell anzuhängen.

Das Teilen ist vollständig lokal: Die Karte wird in der App aus den eigenen Metadaten und dem Cover der Notiz gezeichnet. Nichts wird hochgeladen — das Plugin öffnet nur die von dir gewählte Editor-URL in deinem Browser.

---

## Befehle

| Befehl                               | Beschreibung                                                               |
| ------------------------------------ | -------------------------------------------------------------------------- |
| `Open Library`                       | Öffnet die Library-Galerie-Ansicht.                                        |
| `Add content`                        | Durchsucht eine Quelle und erstellt eine Inhaltsnotiz (oder gib einen Titel für Manual ein). |
| `Search your library`                | Durchsuche und öffne eine beliebige Notiz in deiner Bibliothek.            |
| `Refresh metadata for current note`  | Metadaten für die aktive Notiz neu abrufen; aktualisiert Serien-Episodenzahlen. |
| `Rebuild graph links`                | Verknüpft jede Inhaltsnotiz mit ihrer Kategorie, Genres und Erstellern.    |
| `Find & remove duplicates`           | Scanne alle Notizen nach URL, zeige Duplikate und entferne ausgewählte.    |
| `Share current note`                 | Rendert die Notiz als Kartenbild und teilt es auf X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky oder Pinterest. |

---

## Beiträge & Unterstützung

- **Einen Bug gefunden?** Eröffne ein [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues).
- **Ideen für Funktionen?** Starte eine [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions).
- **Du liebst das Plugin?** Erwäge, das Repository mit einem Stern zu unterstützen!

---

## Danke

Wenn du dieses Plugin nützlich findest, erwäge die Entwicklung zu unterstützen:

| | Netzwerk | Adresse |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |

---
