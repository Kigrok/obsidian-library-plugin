> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md) | **[NL](README.nl.md)**

<p align="center">
  <img src="../banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Library</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.3.1-blue" alt="Version">
  <img src="https://img.shields.io/github/downloads/Kigrok/obsidian-library-plugin/total?color=brightgreen" alt="Downloads">
  <img src="https://img.shields.io/badge/Obsidian-v1.8.7+-purple" alt="Obsidian Version">
  <img src="https://img.shields.io/github/license/Kigrok/obsidian-library-plugin?color=orange" alt="License">
</p>

<p align="center">
  <b>Organiseer je films, series, boeken en meer in een visuele galerij — direct binnenin Obsidian.</b>
  <br />
  Zoek en voeg titels toe in de app, haal automatisch metadata op, volg de voortgang en verbind alles met je grafiek.
</p>

<p align="center">
  <a href="https://community.obsidian.md/plugins/library">Bekijk in de Obsidian Community Plugins directory</a>
</p>

---

## Belangrijkste Functies

- **Visueel Kaartenraster** — Een speciaal Library-tabblad toont je collectie als een galerij van kaarten met coverart.
- **Ingebouwde Zoekfunctie** — Zoek en voeg titels direct toe in de app: OMDb voor films en series, Open Library of Google Books voor boeken, RAWG/Steam voor games, Deezer voor muziek, AniList voor anime, Comic Vine voor stripboeken.
- **Slimme Seriënvolging** — Seizoenen en totale afleveringen worden automatisch opgehaald en gesynchroniseerd gehouden.
- **Voortgangsindicatoren** — Visuele voortgangsbalken op kaarten en notitiekoppen tonen hoeveel je hebt gezien of gelezen.
- **Rijke Notitiekoppen** — Elke inhoudsnotitie krijgt een automatisch gegenereerde kop met alle belangrijke metadata.
- **Trailers, stills en seizoenen** — Film- en serienotities tonen een ingebedde YouTube/Vimeo-trailer, een rij stills en de speelduur; series krijgen ook een seizoenenlijst met afleveringenaantallen, beoordelingen en trailers per seizoen.
- **Aangepaste Categorieën** — Maak categorieën voor Films, Series, Anime, Stripboeken, Boeken, Games, Muziek of iets anders via de handmatige bron.
- **Grafieklinks** — Genres, makers en cast worden als links opgeslagen in eigen eigenschappen `Genre`, `Creator` en `Cast`, zodat de notitie van elk genre, elke maker en elke acteur de titels verzamelt in de terugverwijzingen en de grafiek alles toont.
- **Deelkaarten** — Verander elke inhoudsnotitie in een deelbare kaartafbeelding (poster, titel, jaar, genre, IMDb-score en je eigen beoordeling) en plaats deze op X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky of Pinterest — deel direct naar de apps op je apparaat, of kopieer/bewaar de afbeelding om overal te gebruiken.
- **AniList-synchronisatie** — Push je animevoortgang, status en beoordeling rechtstreeks naar je AniList-account, of haal je lijst terug in je notities.
- **Sorteren en Inklappen** — Sorteer kaarten op naam, jaar, beoordeling of datum; klap elke categorie in — die blijft ook na een herstart ingeklapt.
- **Statistieken** — Je kiest de kolommen zelf: de best beoordeelde titels van een categorie of de meest voorkomende waarden van een eigenschap (genres, makers, acteurs…), plus een kijktijdgrafiek.
- **Duplicaatdetectie** — Voorkomt automatisch het twee keer toevoegen van dezelfde titel op URL. Een ingebouwd commando vindt en verwijdert bestaande duplicaten.
- **Meertalig** — de interface van de plug-in is vertaald in **elke taal die Obsidian ondersteunt** (70+), dus hij volgt altijd je Obsidian-taal. Volledige README-vertalingen zijn er voor 30 daarvan (zie de taalbalk bovenaan).

---

## Snelstart

### 1. Installatie

Installeer **Library** uit de [Obsidian Community Plugins directory](https://community.obsidian.md/plugins/library) (Instellingen > Community-plugins > Bladeren > zoek "Library"), of installeer het handmatig via de [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).

### 2. Basisconfiguratie

1. Ga naar **Instellingen** > **Library**.
2. Voeg je **Categorieën** toe — selecteer een voorgedefinieerd type (Movies, Series, Books, Comics, Games, Music, Anime of Manual) uit de keuzelijst en klik op **Categorie toevoegen**. Elke categorie heeft een weergavenaam (vertaald naar je taal), een `Type`-waarde (altijd Engels, bijv. `Movie`), een bron en optionele map voor het opslaan van notities.
3. _(Optioneel)_ Voer API-sleutels in voor de services die je gebruikt: [OMDb](https://www.omdbapi.com/apikey.aspx) voor films/series, [RAWG](https://rawg.io/apidocs) voor games, [Comic Vine](https://comicvine.gamespot.com/api/) voor stripboeken, [TMDB](https://www.themoviedb.org/settings/api) voor trailers, stills en seizoensdetails, [Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) voor het zoeken naar boeken. Anime (AniList), muziek (Deezer) en Steam vereisen geen sleutel.

### 3. Een Kaart toevoegen op Titel

Geen handmatig invullen van frontmatter meer — voeg een film, serie, anime of stripboek toe door simpelweg de naam te zoeken:

1. Open het **Library**-tabblad vanuit het linticoon (of voer `Bibliotheek openen` uit).
2. Klik op de **+**-knop rechtsboven op de Library-pagina (of voer `Inhoud toevoegen` uit).
3. Kies een categorie, typ de **titel** in het zoekvak en selecteer een resultaat.
4. Er wordt direct een kaart aangemaakt, met poster, jaar, genre, makers en beoordeling automatisch ingevuld.

De **Zoek in je bibliotheek**-knop naast **+** zoekt titels die al in je bibliotheek staan.

Voor **Handmatige** categorieën typ je gewoon een titel en vul je de cover, het jaar en andere velden zelf in.

---

## Statistieken

Boven in het tabblad Bibliotheek toont de inklapbare sectie **Statistieken** de kolommen die je kiest:

- **Categorietops** — de drie best beoordeelde titels van een categorie, met covers: *Top films*, *Top boeken* enzovoort. Gesorteerd op `My Rating`, anders op `Rating IMDB`.
- **Eigenschapstops** — de drie meest voorkomende waarden van een eigenschap in je hele bibliotheek: *Top genres*, *Top makers*, *Top acteurs* of elke andere eigenschap, zoals *Top: Author*. `Sci-Fi`, `sci-fi` en `[[Sci-Fi]]` tellen als één waarde.
- **Kijktijd** — een grafiek van de uren besteed aan films, series en anime, berekend uit `Runtime` en `Progress` van elke notitie.

Stel het in onder **Instellingen → Library → Statistieken**: **Top toevoegen** toont je categorieën en de eigenschappen uit je notities, het prullenbakpictogram verwijdert een kolom en een schakelaar verbergt de kijktijdgrafiek. Kolommen verschijnen in de volgorde waarin je ze toevoegt; een nieuwe categorie voegt haar eigen top toe.

Ingeklapte categorieën blijven ook na een herstart ingeklapt.

---

## Duplicaatdetectie

Library voorkomt dubbele vermeldingen door het `URL`-veld te controleren:

- **Bij toevoegen** — als er al een notitie met dezelfde URL bestaat, opent het de bestaande notitie in plaats van een duplicaat te maken.
- **Duplicaten zoeken en verwijderen** — voer dit commando uit vanuit het palet om alle notities te scannen, op URL te groeperen en selectief duplicaten te verwijderen via een modaal venster.

---

## Bronnen

Elke categorie is gekoppeld aan een bron die de zoekfunctie ondersteunt:

| Bron              | Inhoudstypen   | API-sleutel                                                 |
| ----------------- | --------------- | ------------------------------------------------------------ |
| **OMDb**          | Films, Series   | Gratis sleutel vereist — [omdbapi.com](https://www.omdbapi.com/apikey.aspx) |
| **Books**         | Boeken          | Open Library (geen sleutel) + Google Books (optionele gratis sleutel). Resultaten worden samengevoegd — Google Books eerst, Open Library eronder. |
| **Games**          | Games           | RAWG (gratis sleutel vereist — [rawg.io/apidocs](https://rawg.io/apidocs)) + Steam (geen). Resultaten worden samengevoegd — RAWG eerst, Steam eronder. |
| **Deezer**        | Muziek (albums) | Geen                                                        |
| **AniList**         | Anime           | Geen — gratis AniList GraphQL API, geen sleutel nodig |
| **Comic Vine**    | Stripboeken     | Gratis sleutel vereist — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**        | Alles anders    | Geen — je typt de titel en vult de velden zelf in           |

Film- en serienotities kunnen verder worden verrijkt met **TMDB** (optionele gratis sleutel): de trailer, stills, speelduur en de seizoenenlijst van de serie worden opgehaald en in de frontmatter van de notitie geschreven.

---

## Privacy en Netwerkgebruik

Library werkt **offline-first**: je bibliotheek bestaat uit gewone notities en werkt ook zonder verbinding. De plugin verstuurt alleen de hieronder vermelde gegevens, en alleen in deze gevallen:

- **Als je zelf iets doet:** je zoekt een titel, vernieuwt metadata, voert een AniList-opdracht uit of klikt op de deelknop.
- **Als je een bibliotheeknotitie opent:** de metadata worden via `Source ID` bij de bron vernieuwd, hoogstens eens per 5 minuten per notitie; een notitie zonder `Source ID` wordt op naam gezocht.
- **Na een plugin-update of een gewijzigde API-sleutel:** een achtergrondronde vernieuwt je bibliotheeknotities één keer vanuit hun bronnen, één notitie tegelijk.

Omslagafbeeldingen, stills en trailerspelers waarnaar je notities verwijzen, worden geladen van de hieronder vermelde hosts.

| Service | Wanneer | Wat wordt verzonden | Waarom |
| --- | --- | --- | --- |
| `www.omdbapi.com` | Je zoekt in een OMDb-gestuurde categorie | De titel die je typt en je OMDb API-sleutel | Film/série-metadata ophalen (jaar, genre, cast, beoordeling, poster, afleveringaantallen) |
| `openlibrary.org` | Je zoekt in een Open Library-categorie | De titel die je typt | Boekmetadata ophalen (auteur, jaar, onderwerpen, cover-ID) |
| `covers.openlibrary.org` | Een boekkaart heeft een cover | De Open Library cover-ID | Coverafbeelding laden |
| `www.googleapis.com` | Je zoekt in een Google Books-categorie | De titel die je typt en je Google Books-sleutel | Boekmetadata ophalen (auteur, jaar, categorieën, paginacount, cover, ISBN) |
| `api.rawg.io` | Je zoekt in een RAWG-gamecategorie | De titel die je typt en je RAWG-sleutel | Gamemetadata ophalen (jaar, genre, ontwikkelaar, cover) |
| `api.deezer.com` | Je zoekt in een Deezer-muziekcategorie | Het album of de artiest die je typt | Albummetadata ophalen (artiest, jaar, genre, trackaantal, cover) |
| `graphql.anilist.co` | Je zoekt in een anime-categorie | De titel die je typt | Anime-metadata ophalen (titel, jaar, genre, afleveringen, AniList-score, studio, poster) |
| `graphql.anilist.co` | Je voert een AniList-synchronisatiecommando uit | Je AniList-toegangstoken en de voortgang, status en beoordeling van de notitie | Je AniList-animelijst lezen of bijwerken |
| `anilist.co` | Je klikt op **Verbinden** in de instellingen voor AniList-synchronisatie | Je AniList Client ID | De autorisatiepagina van AniList in je browser openen |
| `comicvine.gamespot.com` | Je zoekt in een stripboekencategorie | De titel die je typt en je Comic Vine-sleutel | Stripboekmetadata ophalen (titel, jaar, uitgever, uitgaveaantal, cover) |
| `store.steampowered.com` | Je zoekt of voegt een Steam-game toe | De titel die je typt of het Steam-app-id | Spelmetadata ophalen (jaar, genre, ontwikkelaar, omslag) |
| `cdn.cloudflare.steamstatic.com` | Een Steam-gamekaart heeft een omslag | Het Steam-app-id | De omslagafbeelding laden |
| `api.themoviedb.org` | Je voegt een film-/serienotitie toe of vernieuwt deze met een TMDB-sleutel | Het IMDb-id van de notitie en je TMDB-sleutel | Trailer, stills, speelduur en de seizoenenlijst ophalen |
| `image.tmdb.org` | Een film-/serienotitie heeft stills | Het TMDB-afbeeldingspad | De stills laden |
| `v3-cinemeta.strem.io` | Je voegt een film- of serienotitie toe of vernieuwt deze | Het IMDb-id van de notitie | Trailer, stills, speelduur en de seizoenslijst van de serie ophalen — geen sleutel nodig |
| `images.metahub.space` | Een film- of serienotitie heeft stills | Het IMDb-id van de notitie | De stills (achtergronden) laden |
| `episodes.metahub.space` | Een serienotitie heeft afleveringstills | Het IMDb-id van de serie en de seizoens- en afleveringsnummers | De afleveringstills laden |
| `i.ytimg.com` | Een filmnotitie toont trailerstills | Het video-id van de trailer | De trailerstills laden |
| `s4.anilist.co` | Een animesnotitie heeft een banner | Het CDN-pad van AniList | De bannerafbeelding laden |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Je opent een notitie met een trailer | Het trailer-id | De trailerplayer insluiten |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Je klikt op de deelknop | Het kaartonderschrift (titel, jouw beoordeling, bronlink) | Het deelvenster van het gekozen netwerk met vooraf ingevulde post openen — de kaartafbeelding zelf blijft lokaal |

Geen enkele andere data verlaat ooit je vault. De plugin heeft **geen telemetrie, geen analyse en geen zelf-update-mechanisme**. API-sleutels (OMDb, Google Books, RAWG, Comic Vine, TMDB) worden alleen opgeslagen in je lokale plugin-instellingen en alleen naar hun respectieve services verzonden. Coverafbeeldingen worden direct geladen vanaf de URL's die door elke bron worden geretourneerd.

---

## Frontmatter Schema

De plugin leest en schrijft naar standaard YAML frontmatter. Notities worden voor je aangemaakt, maar elk veld is bewerkbaar. `Source` en `Source ID` stellen de plugin in staat om metadata later bij te werken.

### Movie

> **Cover-eigenschap** — de frontmatter-eigenschap met de omslagafbeelding kun je hernoemen in **Instellingen → Library** (bijvoorbeeld naar `image`); bestaande notities blijven werken.

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

> **Automatische serie-update:** Voer `Metadata vernieuwen voor huidige notitie` uit (of open gewoon de notitie) en de plugin werkt het totale afleveringenaantal bij in `Progress` (bijv. van `25/42` naar `25/50`) en het `Season`-aantal, terwijl je bekeken aantal intact blijft.

> **Trailer, stills en seizoenen:** Met een ingestelde TMDB-sleutel vult de plugin `Trailer`, `Gallery`, `Runtime` en (bij series) `Seasons` automatisch — `Runtime` is de filmduur in minuten of het aantal minuten per aflevering bij een serie. De notitiekop toont dan een ingebedde speler, een rij stills en een seizoenenlijst met afleveringenaantallen, beoordelingen en trailerknoppen per seizoen. Elk veld is gewone frontmatter: bewerk of verwijder het en de plugin laat je waarden bij de volgende vernieuwing met rust. Bij elke nieuwe pluginversie loopt bovendien één achtergrondronde door de bibliotheek die de nieuwe velden aanvult — notitie voor notitie, zonder de app te blokkeren.

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

## Grafieklinks

Genres, makers en bij films en series de cast worden als links opgeslagen in eigen eigenschappen:

```yaml
Genre:
    - "[[Action]]"
    - "[[Sci-Fi]]"
Creator:
    - "[[Christopher Nolan]]"
Cast:
    - "[[Leonardo DiCaprio]]"
```

Zo toont de notitie van elk genre, elke maker en elke acteur alle titels in de terugverwijzingen, en verbindt de grafiek de notities via hen. Gewone namen — met de hand getypt of achtergelaten door een eerdere versie — worden links zodra een notitie verandert; een link met een alias blijft zoals hij is. `Graf-links herbouwen` zet de hele bibliotheek in één keer om. De eigenschap `Related` van eerdere versies wordt niet meer gebruikt en uit notities verwijderd.

---

## Delen

Elke inhoudsnotitie krijgt een **Delen**-knop in de kop (of voer `Deel huidige notitie` uit). Het genereert een kaartafbeelding — poster, titel, jaar, genre, IMDb/AniList-score en je eigen beoordeling — die je overal kunt plaatsen:

- **Op mobiel** — de **Delen…**-knop opent het native deelvenster van je apparaat met de kaartafbeelding direct bijgevoegd, zodat je deze rechtstreeks naar elke app kunt sturen.
- **X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, Pinterest** — opent het opstelvenster van het netwerk met een vooraf ingevuld bijschrift (titel, je beoordeling, de bronlink en een link naar deze plugin). De kaartafbeelding wordt tegelijkertijd naar je klembord gekopieerd, zodat je deze alleen nog in het bericht hoeft te plakken (Ctrl/Cmd+V).
- **Afbeelding kopiëren / Tekst kopiëren / Afbeelding opslaan** — kopieer de gegenereerde kaart of het bijschrift naar het klembord, of bewaar de afbeelding in de bijlagemap van je vault om deze handmatig bij te voegen.

Delen is volledig lokaal: de kaart wordt in de app getekend op basis van de eigen metadata en cover van de notitie. Er wordt niets geüpload — de plugin opent alleen het opstelvenster-URL die je kiest in je browser.

---

## AniList-synchronisatie

Houd je animevoortgang gesynchroniseerd met je [AniList](https://anilist.co)-account.

**Configuratie** — in **Instellingen → Library → AniList-synchronisatie**:

1. Registreer een gratis API-client op [anilist.co/settings/developer](https://anilist.co/settings/developer), met de redirect-URL ingesteld op `https://anilist.co/api/v2/oauth/pin`.
2. Plak de **Client ID**, klik op **Verbinden** en autoriseer.
3. AniList toont je een toegangstoken — plak dit in de plugin. Klik op **Verbinding testen** om te bevestigen.

Gebruik daarna de commando's:

- `Huidige notitie naar AniList sturen` — stuurt de voortgang (bekeken afleveringen), de status (kijken / voltooid / gepland) en jouw beoordeling van de actieve animenotitie naar je AniList-lijst.
- `Voortgang ophalen van AniList` — haalt je AniList-animelijst op en werkt bijpassende notities bij. Pull is **alleen voorwaarts**: het zet een notitie die lokaal verder is of al voltooid is nooit terug, en laat je persoonlijke `My Rating` ongemoeid.

Alleen notities met `Source: anilist` (toegevoegd via de AniList-animebron) worden gesynchroniseerd. Je token wordt lokaal opgeslagen in de plugin-instellingen en wordt alleen naar AniList verzonden.

---

## Commando's

| Commando                             | Beschrijving                                                                |
| ------------------------------------ | --------------------------------------------------------------------------- |
| `Bibliotheek openen`                       | Opent het galerijtabblad van Library.                                       |
| `Inhoud toevoegen`                        | Doorzoekt een bron en maakt een inhoudsnotitie (of typ een titel voor Manual). |
| `Zoek in je bibliotheek`                | Fuzzy-zoek en open elke notitie die al in je bibliotheek staat.             |
| `Metadata vernieuwen voor huidige notitie`  | Haal opnieuw metadata op voor de actieve notitie; werkt serietotalen bij.    |
| `Graf-links herbouwen`                | Zet `Genre`, `Creator` en `Cast` om in links in alle inhoudsnotities. |
| `Duplicaten zoeken en verwijderen`           | Scan alle notities op URL, toon duplicaten en verwijder geselecteerde.      |
| `Deel huidige notitie`                 | Genereer de notitie als kaartafbeelding en deel deze op X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky of Pinterest. |
| `Huidige notitie naar AniList sturen`        | Stuur de voortgang, status en beoordeling van de actieve animenotitie naar je AniList-account. |
| `Voortgang ophalen van AniList`          | Haal je AniList-lijst op en werk bijpassende notities bij (alleen voorwaarts). |
| `Metadata vernieuwen voor alle notities` | Metadata van alle notities in de bibliotheek ophalen — één voor één, op de achtergrond. |

---

## Bijdragen en Ondersteuning

- **Een bug gevonden?** Open een [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues).
- **Een functie-idee?** Start een [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions).
- **Hou je van de plugin?** Overweeg de repository een ster te geven om je steun te betuigen!

---

## Licentie

[MIT License](LICENSE) — vrij te gebruiken, aan te passen en te delen.

---

## Bedankt

Als je deze plugin nuttig vindt, overweeg dan de ontwikkeling te ondersteunen:

| | Netwerk | Adres |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |

---
