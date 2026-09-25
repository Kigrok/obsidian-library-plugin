> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | **[DE](README.de.md)** | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

<p align="center">
  <img src="../banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Library</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.3.0-blue" alt="Version">
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
- **Integrierte Suche** — Suche und füge Titel direkt in der App hinzu: OMDb für Filme und Serien, Open Library oder Google Books für Bücher, RAWG/Steam für Spiele, Deezer für Musik, AniList für Anime, Comic Vine für Comics.
- **Intelligente Serienverfolgung** — Staffeln und Episodenzahlen werden automatisch abgerufen und synchron gehalten.
- **Fortschrittsanzeigen** — Visuelle Fortschrittsbalken auf Karten und Notizköpfen zeigen, wie viel du gesehen oder gelesen hast.
- **Reichhaltige Notizköpfe** — Jede Inhaltsnotiz erhält einen automatisch generierten Kopf mit allen wichtigsten Metadaten.
- **Trailer, Bilder und Staffeln** — Film- und Seriennotizen zeigen einen eingebetteten YouTube/Vimeo-Trailer, eine Reihe von Bildern und die Laufzeit; Serien erhalten zusätzlich eine Staffelliste mit Episodenzahlen, Bewertungen und Staffel-Trailern.
- **Benutzerdefinierte Kategorien** — Erstelle Kategorien für Filme, Serien, Anime, Comics, Spiele, Musik oder alles andere über die manuelle Quelle.
- **Graph-Verknüpfungen** — Genres, Urheber und Besetzung stehen als Links in eigenen Eigenschaften `Genre`, `Creator` und `Cast`, sodass die Notiz jedes Genres, Urhebers und Schauspielers ihre Titel in den Rückverweisen sammelt und der Graph alles zeigt.
- **Teilen-Karten** — Verwandle jede Inhaltsnotiz in ein teilbares Kartenbild (Poster, Titel, Jahr, Genre, IMDb-Bewertung und deine Bewertung) und poste es auf X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky oder Pinterest — teile es direkt an die Apps deines Geräts oder kopiere/speichere das Bild, um es überall zu verwenden.
- **AniList-Sync** — Übertrage deinen Anime-Fortschritt, Status und deine Bewertung direkt in dein AniList-Konto oder hole deine Liste zurück in deine Notizen.
- **Sortieren & Einklappen** — Sortiere Karten nach Name, Jahr, Bewertung oder Datum; klappe jede Kategorie ein — sie bleibt auch nach einem Neustart eingeklappt.
- **Statistiken** — Du wählst die Spalten selbst: die bestbewerteten Titel einer Kategorie oder die häufigsten Werte einer beliebigen Eigenschaft (Genres, Autoren, Schauspieler…), dazu ein Diagramm der Sehzeit.
- **Duplikaterkennung** — Verhindert automatisch das Hinzufügen desselben Titels zweimal anhand der URL. Ein integrierter Befehl findet und entfernt vorhandene Duplikate.
- **Mehrsprachig** — die Oberfläche des Plugins ist in **jede von Obsidian unterstützte Sprache** (70+) übersetzt und folgt daher immer deiner Obsidian-Sprache. Vollständige README-Übersetzungen gibt es für 30 davon (siehe Sprachleiste oben).

---

## Schnellstart

### 1. Installation

Installiere **Library** aus dem [Obsidian Community Plugins Verzeichnis](https://community.obsidian.md/plugins/library) (Einstellungen > Community-Plugins > Durchsuchen > "Library" suchen) oder installiere es manuell über die [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).

### 2. Grundkonfiguration

1. Gehe zu **Einstellungen** > **Library**.
2. Füge deine **Kategorien** hinzu — wähle einen vordefinierten Typ (Movies, Series, Books, Comics, Games, Music, Anime oder Manual) aus dem Dropdown und klicke auf **Kategorie hinzufügen**. Jede Kategorie hat einen Anzeigenamen (in deine Sprache übersetzt), einen `Type`-Wert (immer Englisch, z.B. `Movie`), eine Quelle und einen optionalen Ordner zum Speichern von Notizen.
3. _(Optional)_ Gib API-Schlüssel für die von dir genutzten Dienste ein: [OMDb](https://www.omdbapi.com/apikey.aspx) für Filme/Serien, [RAWG](https://rawg.io/apidocs) für Spiele, [Comic Vine](https://comicvine.gamespot.com/api/) für Comics, [TMDB](https://www.themoviedb.org/settings/api) für Trailer, Bilder und Staffeldetails, [Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) für die Buchsuche. Anime (AniList), Musik (Deezer) und Steam erfordern keinen Schlüssel.

### 3. Eine Karte per Titel hinzufügen

Kein manuelles Ausfüllen von Frontmatter mehr — füge einen Film, Serie, Anime oder Comic einfach durch Suchen des Namens hinzu:

1. Öffne den **Library**-Tab über das Symbol in der Seitenleiste (oder führe `Bibliothek öffnen` aus).
2. Klicke auf die **+**-Schaltfläche oben rechts auf der Library-Seite (oder führe `Inhalt hinzufügen` aus).
3. Wähle eine Kategorie, gib den **Titel** in das Suchfeld ein und wähle ein Ergebnis aus.
4. Eine Karte wird sofort erstellt, mit Poster, Jahr, Genre, Erstellern und Bewertung automatisch ausgefüllt.

Die **Suche**-Schaltfläche neben **+** durchsucht Titel, die bereits in deiner Bibliothek sind.

Für **manuelle** Kategorien gibst du einfach einen Titel ein und füllst das Cover, das Jahr und andere Felder selbst aus.

---

## Statistiken

Oben im Tab „Bibliothek“ zeigt der einklappbare Abschnitt **Statistik** die Spalten, die du auswählst:

- **Kategorie-Tops** — die drei bestbewerteten Titel einer Kategorie mit Covern: *Top-Filme*, *Top-Bücher* und so weiter. Sortiert nach `My Rating`, ersatzweise nach `Rating IMDB`.
- **Eigenschafts-Tops** — die drei häufigsten Werte einer Eigenschaft in der ganzen Bibliothek: *Top-Genres*, *Top-Autoren*, *Top-Schauspieler* oder jede andere Eigenschaft, etwa *Top: Author*. `Sci-Fi`, `sci-fi` und `[[Sci-Fi]]` zählen als ein Wert.
- **Sehzeit** — ein Diagramm der Stunden für Filme, Serien und Anime, berechnet aus `Runtime` und `Progress` jeder Notiz.

Eingerichtet wird das unter **Einstellungen → Library → Statistik**: **Top hinzufügen** listet deine Kategorien und die in deinen Notizen gefundenen Eigenschaften, das Papierkorb-Symbol entfernt eine Spalte, und ein Schalter blendet das Sehzeit-Diagramm aus. Die Spalten erscheinen in der Reihenfolge, in der du sie hinzufügst; eine neue Kategorie bringt ihr eigenes Top mit.

Eingeklappte Kategorien bleiben auch nach einem Neustart eingeklappt.

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
| **Games**          | Spiele          | RAWG (freier Schlüssel erforderlich — [rawg.io/apidocs](https://rawg.io/apidocs)) + Steam (keiner). Ergebnisse werden zusammengeführt — RAWG zuerst, Steam darunter. |
| **Deezer**        | Musik (Alben)   | Keiner                                                     |
| **AniList**       | Anime           | Keiner — kostenlose AniList GraphQL-API, kein Schlüssel erforderlich |
| **Comic Vine**    | Comics          | Freier Schlüssel erforderlich — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**        | Alles andere    | Keiner — du gibst den Titel ein und füllst die Felder selbst aus |

Film- und Seriennotizen lassen sich mit **TMDB** (optionaler kostenloser Schlüssel) zusätzlich anreichern: Trailer, Bilder, Laufzeit und die Staffelliste der Serie werden abgerufen und in das Frontmatter der Notiz geschrieben.

---

## Datenschutz & Netzwerknutzung

Library ist **offline-zuerst**: Deine Bibliothek besteht aus normalen Notizen und funktioniert auch ohne Verbindung. Das Plugin sendet nur die unten aufgeführten Daten und nur in diesen Fällen:

- **Wenn du selbst handelst:** Du suchst nach einem Titel, aktualisierst Metadaten, führst einen AniList-Befehl aus oder klickst auf die Teilen-Schaltfläche.
- **Wenn du eine Bibliotheksnotiz öffnest:** Ihre Metadaten werden anhand der `Source ID` aus ihrer Quelle aktualisiert, höchstens einmal alle 5 Minuten pro Notiz; eine Notiz ohne `Source ID` wird über ihren Namen gesucht.
- **Nach einem Plugin-Update oder einem geänderten API-Schlüssel:** Ein Hintergrunddurchlauf aktualisiert deine Bibliotheksnotizen einmal aus ihren Quellen, eine Notiz nach der anderen.

Cover-Bilder, Standbilder und Trailer-Player, auf die deine Notizen verweisen, werden von den unten aufgeführten Hosts geladen.

| Dienst | Wann | Was gesendet wird | Warum |
| --- | --- | --- | --- |
| `www.omdbapi.com` | Du durchsuchst eine OMDb-gestützte Kategorie | Der Titel, den du eingibst, und dein OMDb-API-Schlüssel | Film/Serien-Metadaten abrufen (Jahr, Genre, Besetzung, Bewertung, Poster, Episodenzahlen) |
| `openlibrary.org` | Du durchsuchst eine Open-Library-Kategorie | Der Titel, den du eingibst | Buch-Metadaten abrufen (Autor, Jahr, Themen, Cover-ID) |
| `covers.openlibrary.org` | Eine Buchkarte hat ein Cover | Die Open-Library-Cover-ID | Cover-Bild laden |
| `www.googleapis.com` | Du durchsuchst eine Google-Books-Kategorie | Der Titel, den du eingibst, und dein Google-Books-Schlüssel | Buch-Metadaten abrufen (Autor, Jahr, Kategorien, Seitenzahl, Cover, ISBN) |
| `api.rawg.io` | Du durchsuchst eine RAWG-Spiel-Kategorie | Der Titel, den du eingibst, und dein RAWG-Schlüssel | Spiel-Metadaten abrufen (Jahr, Genre, Entwickler, Cover) |
| `api.deezer.com` | Du durchsuchst eine Deezer-Musik-Kategorie | Der Album- oder Künstlername, den du eingibst | Album-Metadaten abrufen (Künstler, Jahr, Genre, Anzahl der Titel, Cover) |
| `graphql.anilist.co` | Du durchsuchst eine Anime-Kategorie | Der Titel, den du eingibst | Anime-Metadaten abrufen (Titel, Jahr, Genre, Episoden, AniList-Bewertung, Studio, Poster) |
| `graphql.anilist.co` | Du führst einen AniList-Sync-Befehl aus | Dein AniList-Zugriffstoken und der Fortschritt, Status und die Bewertung der Notiz | Deine AniList-Anime-Liste lesen oder aktualisieren |
| `anilist.co` | Du klickst in den Einstellungen der AniList-Synchronisierung auf **Verbinden** | Deine AniList Client ID | Die Autorisierungsseite von AniList im Browser öffnen |
| `comicvine.gamespot.com` | Du durchsuchst eine Comics-Kategorie | Der Titel, den du eingibst, und dein Comic-Vine-Schlüssel | Comic-Metadaten abrufen (Titel, Jahr, Verlag, Ausgabenanzahl, Cover) |
| `store.steampowered.com` | Sie suchen oder fügen ein Steam-Spiel hinzu | Der eingegebene Titel oder die Steam-App-ID | Abruf der Spielmetadaten (Jahr, Genre, Entwickler, Cover) |
| `cdn.cloudflare.steamstatic.com` | Eine Steam-Spielkarte hat ein Cover | Die Steam-App-ID | Laden des Coverbildes |
| `api.themoviedb.org` | Du fügst eine Film-/Seriennotiz hinzu oder aktualisierst sie mit gesetztem TMDB-Schlüssel | Die IMDb-ID der Notiz und dein TMDB-Schlüssel | Trailer, Bilder, Laufzeit und die Staffelliste der Serie abrufen |
| `image.tmdb.org` | Eine Film-/Seriennotiz enthält Bilder | Der TMDB-Bildpfad | Die Bilder laden |
| `v3-cinemeta.strem.io` | Sie fügen eine Film- oder Seriennotiz hinzu oder aktualisieren sie | Die IMDb-ID der Notiz | Abruf von Trailer, Stills, Laufzeit und der Staffelliste der Serie – kein Schlüssel nötig |
| `images.metahub.space` | Eine Film- oder Seriennotiz hat Stills | Die IMDb-ID der Notiz | Laden der Still-Bilder (Backdrops) |
| `episodes.metahub.space` | Eine Seriennotiz hat Episoden-Stills | Die IMDb-ID der Serie sowie Staffel- und Episodennummern | Laden der Episoden-Still-Bilder |
| `i.ytimg.com` | Eine Filmnotiz zeigt Trailer-Stills | Die Video-ID des Trailers | Laden der Trailer-Still-Bilder |
| `s4.anilist.co` | Eine Anime-Notiz hat einen Banner | Der CDN-Pfad von AniList | Laden des Bannerbildes |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Du öffnest eine Notiz mit einem Trailer | Die Trailer-ID | Einbetten des Trailer-Players |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Du klickst auf die Teilen-Schaltfläche | Die Kartenunterschrift (Titel, deine Bewertung, Quelllink) | Das Teilen-Fenster des gewählten Netzwerks mit vorausgefülltem Beitrag öffnen — das Kartenbild selbst bleibt lokal |

Keine anderen Daten verlassen jemals dein Vault. Das Plugin hat **keine Telemetrie, keine Analysen und keinen Selbstaktualisierungsmechanismus**. API-Schlüssel (OMDb, Google Books, RAWG, Comic Vine, TMDB) werden nur in deinen lokalen Plugin-Einstellungen gespeichert und nur an die jeweiligen Dienste gesendet. Cover-Bilder werden direkt aus den von jeder Quelle zurückgegebenen URLs geladen.

---

## Frontmatter-Schema

Das Plugin liest und schreibt in das Standard-YAML-Frontmatter. Notizen werden für dich erstellt, aber jedes Feld ist bearbeitbar. `Source` und `Source ID` ermöglichen es dem Plugin, Metadaten später zu aktualisieren.

### Movie

> **Cover-Eigenschaft** — die Frontmatter-Eigenschaft für das Titelbild lässt sich in **Einstellungen → Library** umbenennen (z. B. in `image`); bestehende Notizen funktionieren weiter.

```yaml
---
Type: Movie
Name: Inception
Year: 2010
Genre:
    - "[[Action]]"
    - "[[Sci-Fi]]"
Creator:
    - "[[Christopher Nolan]]"
Cast:
    - "[[Leonardo DiCaprio]]"
    - "[[Joseph Gordon-Levitt]]"
    - "[[Elliot Page]]"
Rating IMDB: 8.8
Rating RT: 87
Runtime: 148
My Rating: 9
Cover: https://m.media-amazon.com/images/...
URL: https://www.imdb.com/title/tt1375666/
Trailer: https://www.youtube.com/watch?v=YoHD9XEInc0
Gallery:
    - https://image.tmdb.org/t/p/w780/9e3Dz7H1J0s5cBZLX2yXKxkC7Jg.jpg
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
    - "[[Drama]]"
    - "[[Fantasy]]"
    - "[[Horror]]"
Creator:
    - "[[The Duffer Brothers]]"
Cast:
    - "[[Winona Ryder]]"
    - "[[David Harbour]]"
    - "[[Millie Bobby Brown]]"
Rating IMDB: 8.7
Rating RT: 91
Runtime: 42
My Rating: 9
Cover: https://m.media-amazon.com/images/...
URL: https://www.imdb.com/title/tt4574334/
Trailer: https://www.youtube.com/watch?v=b9EkMc79ZSU
Gallery:
    - https://image.tmdb.org/t/p/w780/56v2KjBlU4XaOv9rVYEQypROD7P.jpg
Seasons:
    - name: Season 1
      episodes: 8
      rating: 8.0
      trailer: https://www.youtube.com/watch?v=XWxyRG_tckY
    - name: Season 2
      episodes: 9
      rating: 8.1
      trailer: https://www.youtube.com/watch?v=R1ZXOOLMJ8s
Progress: 25/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

> **Serien-Aktualisierung:** Führe `Metadaten der aktuellen Notiz aktualisieren` aus (oder öffne einfach die Notiz) und das Plugin aktualisiert die Gesamtepisodeanzahl in `Progress` (z.B. von `25/42` auf `25/50`) und die `Season`-Anzahl, wobei deine gesehene Anzahl erhalten bleibt.

> **Trailer, Bilder und Staffeln:** Mit gesetztem TMDB-Schlüssel füllt das Plugin `Trailer`, `Gallery`, `Runtime` und (bei Serien) `Seasons` automatisch — `Runtime` ist die Filmlänge in Minuten bzw. die Minuten pro Folge bei einer Serie. Der Notizkopf zeigt dann einen eingebetteten Player, eine Reihe Bilder und eine Staffelliste mit Episodenzahlen, Bewertungen und Staffel-Trailer-Schaltflächen. Jedes Feld ist einfaches Frontmatter: Bearbeite oder lösche es, und das Plugin lässt deine Werte beim nächsten Aktualisieren unangetastet. Jede neue Plugin-Version startet zusätzlich einen Hintergrund-Durchlauf über die Bibliothek, der die neu hinzugekommenen Felder ergänzt – Notiz für Notiz, ohne die App zu blockieren.

### Book

```yaml
---
Type: Book
Name: Dune
Year: 1965
Genre:
    - "[[Science Fiction]]"
Creator:
    - "[[Frank Herbert]]"
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
    - "[[Sci-Fi]]"
    - "[[Thriller]]"
Creator:
    - "[[White Fox]]"
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
    - "[[Comics]]"
Creator:
    - "[[DC Comics]]"
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

Genres, Urheber und bei Filmen und Serien die Besetzung stehen als Links in eigenen Eigenschaften:

```yaml
Genre:
    - "[[Action]]"
    - "[[Sci-Fi]]"
Creator:
    - "[[Christopher Nolan]]"
Cast:
    - "[[Leonardo DiCaprio]]"
```

So listet die Notiz jedes Genres, Urhebers und Schauspielers alle Titel in ihren Rückverweisen, und der Graph verbindet die Notizen darüber. Einfache Namen – von Hand eingetragen oder aus einer früheren Version – werden bei jeder Änderung einer Notiz zu Links; ein Link mit Alias bleibt, wie er ist. `Graph-Verknüpfungen neu aufbauen` stellt die ganze Bibliothek auf einmal um. Die Eigenschaft `Related` früherer Versionen wird nicht mehr verwendet und aus den Notizen entfernt.

---

## Teilen

Jede Inhaltsnotiz erhält eine **Teilen**-Schaltfläche in ihrem Kopf (oder führe `Aktuelle Notiz teilen` aus). Sie rendert ein Kartenbild — Poster, Titel, Jahr, Genre, IMDb/AniList-Bewertung und deine Bewertung — das du überall posten kannst:

- **Auf dem Handy** — die **Teilen…**-Schaltfläche öffnet das native Teilen-Menü deines Geräts mit dem direkt angehängten Kartenbild, sodass du es direkt an jede App senden kannst.
- **X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, Pinterest** — öffnet den Editor des jeweiligen Netzwerks mit einer vorausgefüllten Bildunterschrift (Titel, deine Bewertung, der Quell-Link und ein Link zu diesem Plugin). Das Kartenbild wird gleichzeitig in deine Zwischenablage kopiert, sodass du es einfach (Strg/Cmd+V) in den Beitrag einfügst.
- **Bild kopieren / Text kopieren / Bild speichern** — kopiere die gerenderte Karte oder die Bildunterschrift in die Zwischenablage oder speichere das Bild im Anhang-Ordner deines Vaults, um es manuell anzuhängen.

Das Teilen ist vollständig lokal: Die Karte wird in der App aus den eigenen Metadaten und dem Cover der Notiz gezeichnet. Nichts wird hochgeladen — das Plugin öffnet nur die von dir gewählte Editor-URL in deinem Browser.

---

## AniList-Sync

Halte deinen Anime-Fortschritt mit deinem [AniList](https://anilist.co)-Konto synchron.

**Einrichtung** — unter **Einstellungen → Library → AniList-Sync**:

1. Registriere einen kostenlosen API-Client unter [anilist.co/settings/developer](https://anilist.co/settings/developer), mit der Redirect-URL `https://anilist.co/api/v2/oauth/pin`.
2. Füge die **Client ID** ein, klicke auf **Verbinden** und autorisiere.
3. AniList zeigt dir ein Zugriffstoken — füge es in das Plugin ein. Klicke auf **Verbindung testen**, um zu bestätigen.

Dann nutze die Befehle:

- `Aktuelle Notiz zu AniList übertragen` — sendet den Fortschritt der aktiven Anime-Notiz (gesehene Episoden), den Status (wird angesehen / abgeschlossen / geplant) und deine Bewertung an deine AniList-Liste.
- `Fortschritt von AniList abrufen` — ruft deine AniList-Anime-Liste ab und aktualisiert passende Notizen. Pull ist **nur vorwärts**: Eine Notiz, die lokal weiter fortgeschritten oder bereits abgeschlossen ist, wird niemals zurückgesetzt, und deine persönliche `My Rating` bleibt unangetastet.

Nur Notizen mit `Source: anilist` (hinzugefügt über die AniList-Anime-Quelle) werden synchronisiert. Dein Token wird lokal in den Plugin-Einstellungen gespeichert und nur an AniList gesendet.

---

## Befehle

| Befehl                               | Beschreibung                                                               |
| ------------------------------------ | -------------------------------------------------------------------------- |
| `Bibliothek öffnen`                       | Öffnet die Library-Galerie-Ansicht.                                        |
| `Inhalt hinzufügen`                        | Durchsucht eine Quelle und erstellt eine Inhaltsnotiz (oder gib einen Titel für Manual ein). |
| `Bibliothek durchsuchen`                | Durchsuche und öffne eine beliebige Notiz in deiner Bibliothek.            |
| `Metadaten der aktuellen Notiz aktualisieren`  | Metadaten für die aktive Notiz neu abrufen; aktualisiert Serien-Episodenzahlen. |
| `Graph-Verknüpfungen neu aufbauen`                | Wandelt `Genre`, `Creator` und `Cast` in allen Inhaltsnotizen in Links um. |
| `Doppelte finden & entfernen`           | Scanne alle Notizen nach URL, zeige Duplikate und entferne ausgewählte.    |
| `Aktuelle Notiz teilen`                 | Rendert die Notiz als Kartenbild und teilt es auf X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky oder Pinterest. |
| `Aktuelle Notiz zu AniList übertragen`       | Sendet den Fortschritt, Status und die Bewertung der aktiven Anime-Notiz an dein AniList-Konto. |
| `Fortschritt von AniList abrufen`         | Ruft deine AniList-Liste ab und aktualisiert passende Notizen (nur vorwärts). |
| `Metadaten aller Notizen aktualisieren` | Metadaten aller Notizen der Bibliothek abrufen – eine nach der anderen, im Hintergrund. |

---

## Beiträge & Unterstützung

- **Einen Bug gefunden?** Eröffne ein [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues).
- **Ideen für Funktionen?** Starte eine [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions).
- **Du liebst das Plugin?** Erwäge, das Repository mit einem Stern zu unterstützen!

---

## Lizenz

[MIT License](LICENSE) — frei verwendbar, veränderbar und teilbar.

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
