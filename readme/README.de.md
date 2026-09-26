> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | **[DE](README.de.md)** | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

<p align="center">
  <img src="../banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Library</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.3.3-blue" alt="Version">
  <img src="https://img.shields.io/github/downloads/Kigrok/obsidian-library-plugin/total?color=brightgreen" alt="Downloads">
  <img src="https://img.shields.io/badge/Obsidian-v1.8.7+-purple" alt="Obsidian Version">
  <img src="https://img.shields.io/github/license/Kigrok/obsidian-library-plugin?color=orange" alt="License">
</p>

<p align="center">
  Filme, Serien, Bücher, Anime, Comics, Spiele und Musik als Notizen in Obsidian, dargestellt als Galerie aus Cover-Karten.
  <br />
  <a href="https://community.obsidian.md/plugins/library">Obsidian-Plugin-Verzeichnis</a>
</p>

## Funktionen

- Suche einen Titel und erhalte eine Notiz mit Poster, Jahr, Genre, Machern, Besetzung und Bewertungen.
- Die Bibliothek erscheint als Cover-Karten, nach Kategorien gruppiert und nach Name, Jahr, Bewertung oder Datum sortiert.
- Hake Folgen einer Serie oder Kapitel eines Buchs ab und bewerte jede einzeln; `Progress` und `My Rating` werden daraus berechnet.
- Film- und Seriennotizen zeigen Trailer, Standbilder, Laufzeit und die Staffelliste.
- Genres, Macher und Schauspieler sind Links, daher sammeln ihre Notizen jeden Titel in den Rückverweisen und im Graphen.
- Das Statistik-Panel zeigt die Toplisten deiner Wahl und deine gesamte Sehzeit.
- Teile einen Titel als Kartenbild auf X, Telegram, Reddit und sechs weiteren Netzwerken.
- Anime-Fortschritt wird mit AniList synchronisiert.
- Die Oberfläche ist in jede Sprache übersetzt, die Obsidian unterstützt, und diese README in [30 Sprachen](./).

## Schnellstart

1. Installiere **Library** über Einstellungen → Externe Erweiterungen → Durchsuchen oder aus den [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).
2. Lege unter Einstellungen → Library für jedes Medium eine Kategorie an: Filme, Serien, Bücher, Comics, Spiele, Musik, Anime, Manuell.
3. Trage die API-Schlüssel ein, die deine Quellen brauchen (siehe unten).
4. Öffne den Tab „Bibliothek“ über die Werkzeugleiste, klicke auf **+**, wähle eine Kategorie und suche einen Titel. Ein Titel, der schon in der Bibliothek ist, öffnet seine vorhandene Notiz.

Der `Type`-Wert einer Kategorie (zum Beispiel `Movie`) legt fest, welche Notizen dazugehören, und ihr Ordner, wo neue Notizen landen. Beides findest du unter **Erweitert** in den Einstellungen der Kategorie.

## Quellen

| Kategorie | Quelle | Schlüssel |
| --- | --- | --- |
| Filme, Serien | OMDb | [Kostenloser Schlüssel](https://www.omdbapi.com/apikey.aspx) |
| Bücher | Google Books + Open Library | Optionaler [Google-Books-Schlüssel](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| Spiele | RAWG + Steam | [Kostenloser RAWG-Schlüssel](https://rawg.io/apidocs); Steam braucht keinen |
| Musik | Deezer | Keiner |
| Anime | AniList | Keiner |
| Comics | Comic Vine | [Kostenloser Schlüssel](https://comicvine.gamespot.com/api/) |
| Alles andere | Manuell: du füllst die Felder aus | Keiner |

Trailer, Standbilder, Laufzeit und Staffellisten kommen ohne Schlüssel von Cinemeta. Ein [TMDB-Schlüssel](https://www.themoviedb.org/settings/api) ergänzt Staffelbewertungen und mehr Standbilder.

## Fortschritt und Bewertungen

Der Kopf einer Seriennotiz listet die Staffeln, und jede Staffel klappt ihre Folgen auf, mit Titeln, wenn die Quelle sie kennt. Hake eine Folge oder eine ganze Staffel als gesehen ab und bewerte sie von 1 bis 10. `Progress` zählt die abgehakten Folgen, die Bewertung einer Staffel ist der Durchschnitt ihrer bewerteten Folgen, und `My Rating` ist der Durchschnitt der bewerteten Staffeln. Eine Staffel ohne bewertete Folgen bekommt eine eigene Bewertung.

Anime funktioniert genauso, als eine Staffel ohne Folgentitel.

Buchkapitel stammen aus dem Inhaltsverzeichnis einer Ausgabe bei Open Library. Wird keines gefunden, nimmt **Kapitel hinzufügen** im Notizkopf eine Kapitelanzahl oder einen Titel pro Zeile entgegen. Ab dann zählt `Progress` Kapitel statt Seiten, und die gelesenen Seiten werden als gleicher Anteil der Kapitel übernommen.

Notizen aus älteren Versionen behalten ihren Fortschritt. Solange du nichts abhakst, gelten die ersten Folgen bis zum Stand von `Progress` als gesehen.

## Statistik

Das Panel oben im Tab „Bibliothek“ zeigt die Spalten, die du unter Einstellungen → Library → Statistik auswählst: die drei bestbewerteten Titel einer Kategorie, die drei häufigsten Werte einer Eigenschaft (Genres, Schauspieler oder jede andere) und die Stunden für Filme, Serien und Anime. Unter dem Diagramm steht jeden Tag ein anderer Vergleich, zum Beispiel: Apollo 11 hätte 8-mal zum Mond und zurück fliegen können.

## Graph-Verknüpfungen

`Genre`, `Creator` und `Cast` enthalten Links wie `[[Christopher Nolan]]`, daher listet die Notiz eines Genres oder einer Person deren Titel in den Rückverweisen. Von Hand getippte Namen werden zu Links, sobald sich die Notiz ändert, und `Graph-Verknüpfungen neu aufbauen` wandelt die ganze Bibliothek um.

## Teilen und AniList

**Teilen** im Notizkopf zeichnet eine Karte mit Poster, Titel, Jahr, Genre, Besetzung, Bewertungen und deiner Wertung. Am Desktop landet das Bild in der Zwischenablage, und das gewählte Netzwerk öffnet sich mit einer Bildunterschrift, sodass du das Bild nur noch in den Beitrag einfügst. Auf dem Handy geht das Bild an das Teilen-Menü des Systems. Du kannst Bild oder Text auch kopieren oder das Bild im Vault speichern.

Zum Synchronisieren registrierst du einen Client unter [anilist.co/settings/developer](https://anilist.co/settings/developer) mit der Redirect-URL `https://anilist.co/api/v2/oauth/pin`. Füge die Client ID unter Einstellungen → Library → AniList-Synchronisierung ein, klicke auf **Verbinden** und füge das Token ein, das AniList anzeigt. `Aktuelle Notiz zu AniList übertragen` sendet Fortschritt, Status und Wertung. `Fortschritt von AniList abrufen` aktualisiert deine Notizen, setzt Fortschritt nie zurück und lässt `My Rating` unverändert. Nur Notizen mit `Source: anilist` werden synchronisiert.

Dieselben Notizen lassen sich mit MyAnimeList synchronisieren. Lege unter [myanimelist.net/apiconfig](https://myanimelist.net/apiconfig) einen Client mit der Redirect-URL `http://localhost` an, füge seine Client ID (und das Client Secret, falls vorhanden) unter Einstellungen → Library → MyAnimeList-Synchronisierung ein, klicke auf **Verbinden** und füge die Adresse ein, die dein Browser öffnet. Den MyAnimeList-Eintrag jedes Titels findet das Plugin über AniList, und den Token erneuert es selbst. `Aktuelle Notiz zu MyAnimeList übertragen` und `Fortschritt von MyAnimeList abrufen` arbeiten wie ihre AniList-Gegenstücke.

## Frontmatter

Jede Karte ist eine Notiz, und alles, was das Plugin über sie weiß, steht im Frontmatter:

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
      # ...7 weitere Folgen
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

Bei einer Serie ist `Runtime` die Länge einer Folge. Bücher haben zusätzlich `ISBN` und speichern Kapitel in `Chapters` mit denselben Feldern `title`, `watched` und `my_rating`; Anime haben `Rating AniList` und `Status`. Die Cover-Eigenschaft lässt sich in den Einstellungen umbenennen, zum Beispiel in `image`.

Eine Aktualisierung füllt nur leere Felder, deine Änderungen bleiben also erhalten. Außerdem aktualisiert sie die Gesamtzahl der Folgen in `Progress` und ergänzt neue Staffeln und Folgentitel.

## Datenschutz und Netzwerk

Deine Bibliothek besteht aus einfachen Notizen und funktioniert offline. Das Plugin geht online, wenn du suchst, aktualisierst, synchronisierst oder teilst; wenn du eine Bibliotheksnotiz öffnest, höchstens alle 5 Minuten pro Notiz; und einmal nach einem Update oder einer Schlüsseländerung, um neue Felder zu füllen. Es gibt keine Telemetrie, keine Analyse und kein Selbst-Update. API-Schlüssel bleiben in deinen lokalen Plugin-Einstellungen und gehen nur an ihren eigenen Dienst.

| Host | Wann | Was gesendet wird |
| --- | --- | --- |
| `www.omdbapi.com` | Film- und Seriensuche | Titel oder IMDb-ID, OMDb-Schlüssel |
| `openlibrary.org` | Buchsuche; Kapitelsuche, wenn du ein Buch hinzufügst oder öffnest | Titel und Autor, ISBN oder Werk-ID |
| `covers.openlibrary.org` | Buchcover | Cover-ID |
| `www.googleapis.com` | Buchsuche | Titel, Google-Books-Schlüssel |
| `api.rawg.io` | Spielesuche | Titel, RAWG-Schlüssel |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | Spielesuche und Cover | Titel oder Steam-App-ID |
| `api.deezer.com` | Musiksuche | Album oder Künstler |
| `graphql.anilist.co` | Anime-Suche; AniList-Synchronisierung; MyAnimeList-IDs für die Synchronisierung | Titel; dein Token, Fortschritt, Status und Wertung; AniList-IDs |
| `anilist.co` | Du klickst auf **Verbinden** | Client ID, im Browser geöffnet |
| `myanimelist.net` | Du klickst bei MyAnimeList auf **Verbinden**; Token-Erneuerung | Client ID und Secret, Autorisierungscode, Refresh-Token |
| `api.myanimelist.net` | MyAnimeList-Synchronisierung | Dein Token, Fortschritt, Status und Wertung |
| `s4.anilist.co` | Anime-Banner | CDN-Pfad |
| `comicvine.gamespot.com` | Comicsuche | Titel, Comic-Vine-Schlüssel |
| `v3-cinemeta.strem.io` | Hinzufügen oder Aktualisieren eines Films oder einer Serie | IMDb-ID |
| `images.metahub.space`, `episodes.metahub.space` | Standbilder | IMDb-ID, Staffel- und Folgennummer |
| `api.themoviedb.org`, `image.tmdb.org` | Hinzufügen oder Aktualisieren eines Films oder einer Serie, wenn ein TMDB-Schlüssel gesetzt ist | IMDb-ID und TMDB-Schlüssel; Bildpfad |
| `i.ytimg.com` | Trailer-Standbilder | Video-ID |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Öffnen einer Notiz mit Trailer | Video-ID |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Du klickst auf eine Teilen-Schaltfläche | Die Bildunterschrift: Titel, deine Wertung, Quelllink. Das Bild bleibt auf deinem Gerät |

## Befehle

| Befehl | Was er tut |
| --- | --- |
| `Bibliothek öffnen` | Öffnet den Tab „Bibliothek“ |
| `Inhalt hinzufügen` | Durchsucht eine Quelle und legt eine Notiz an |
| `Bibliothek durchsuchen` | Findet und öffnet eine Bibliotheksnotiz |
| `Metadaten der aktuellen Notiz aktualisieren` | Lädt die aktive Notiz neu |
| `Metadaten aller Notizen aktualisieren` | Lädt jede Bibliotheksnotiz neu, eine nach der anderen |
| `Graph-Verknüpfungen neu aufbauen` | Macht `Genre`, `Creator` und `Cast` zu Links |
| `Doppelte finden & entfernen` | Listet Notizen mit gleicher URL und entfernt die ausgewählten |
| `Aktuelle Notiz teilen` | Öffnet die Teilen-Karte |
| `Aktuelle Notiz zu AniList übertragen` | Sendet Fortschritt, Status und Wertung |
| `Fortschritt von AniList abrufen` | Aktualisiert Notizen aus deiner AniList-Liste |
| `Aktuelle Notiz zu MyAnimeList übertragen` | Sendet Fortschritt, Status und Wertung |
| `Fortschritt von MyAnimeList abrufen` | Aktualisiert Notizen aus deiner MyAnimeList-Liste |

## Support

Fehler meldest du in den [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues), Ideen in den [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions). Das Plugin steht unter der [MIT-Lizenz](../LICENSE).

Wenn dir das Plugin nützt, kannst du es unterstützen:

| | Netzwerk | Adresse |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
