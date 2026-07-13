> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md) | **[NL](README.nl.md)**

<p align="center">
  <img src="../banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Library</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.2.1-blue" alt="Version">
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
- **Ingebouwde Zoekfunctie** — Zoek en voeg titels direct toe in de app: OMDb voor films en series, Open Library of Google Books voor boeken, RAWG voor games, Deezer voor muziek, AniList voor anime, Comic Vine voor stripboeken.
- **Slimme Seriënvolging** — Seizoenen en totale afleveringen worden automatisch opgehaald en gesynchroniseerd gehouden.
- **Voortgangsindicatoren** — Visuele voortgangsbalken op kaarten en notitiekoppen tonen hoeveel je hebt gezien of gelezen.
- **Rijke Notitiekoppen** — Elke inhoudsnotitie krijgt een automatisch gegenereerde kop met alle belangrijke metadata.
- **Aangepaste Categorieën** — Maak categorieën voor Films, Series, Anime, Stripboeken, Boeken, Games, Muziek of iets anders via de handmatige bron.
- **Grafieklinks** — Een `Related` frontmatter-eigenschap koppelt elke notitie aan categorie, genres en makers, automatisch gesynchroniseerd voor een mooie grafiek.
- **Deelkaarten** — Verander elke inhoudsnotitie in een deelbare kaartafbeelding (poster, titel, jaar, genre, IMDb-score en je eigen beoordeling) en plaats deze op X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky of Pinterest — deel direct naar de apps op je apparaat, of kopieer/bewaar de afbeelding om overal te gebruiken.
- **AniList-synchronisatie** — Push je animevoortgang, status en beoordeling rechtstreeks naar je AniList-account, of haal je lijst terug in je notities.
- **Sorteren en Inklappen** — Sorteer kaarten op naam, jaar, beoordeling of datum; klapp willekeurige categorieën in.
- **Statistieken** — Topgenres, topmakers (alleen films en series) en topitems per categorie met medaille-ranglijsten.
- **Duplicaatdetectie** — Voorkomt automatisch het twee keer toevoegen van dezelfde titel op URL. Een ingebouwd commando vindt en verwijdert bestaande duplicaten.
- **Meertalig** — 31 talen: Engels, Oekraïens, Russisch, Wit-Russisch, Kazachs, Oezbeeks, Duits, Spaans, Frans, Italiaans, Nederlands, Tsjechisch, Kroatisch, Pools, Roemeens, Turks, Azerbeidzjaans, Perzisch, Hindi, Bengaals, Urdu, Tagalog, Vietnamees, Thais, Javaans, Japans, Koreaans, Chinees, Arabisch, Singalees, Hebreeuws.

---

## Snelstart

### 1. Installatie

Installeer **Library** uit de [Obsidian Community Plugins directory](https://community.obsidian.md/plugins/library) (Instellingen > Community-plugins > Bladeren > zoek "Library"), of installeer het handmatig via de [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).

### 2. Basisconfiguratie

1. Ga naar **Instellingen** > **Library**.
2. Voeg je **Categorieën** toe — selecteer een voorgedefinieerd type (Movies, Series, Books, Comics, Games, Music, Anime of Manual) uit de keuzelijst en klik op **Add category**. Elke categorie heeft een weergavenaam (vertaald naar je taal), een `Type`-waarde (altijd Engels, bijv. `Movie`), een bron en optionele map voor het opslaan van notities.
3. _(Optioneel)_ Voer API-sleutels in voor de services die je gebruikt: [OMDb](https://www.omdbapi.com/apikey.aspx) voor films/series, [RAWG](https://rawg.io/apidocs) voor games, [Comic Vine](https://comicvine.gamespot.com/api/) voor stripboeken. Anime (AniList) en muziek (Deezer) hebben geen sleutel nodig.

### 3. Een Kaart toevoegen op Titel

Geen handmatig invullen van frontmatter meer — voeg een film, serie, anime of stripboek toe door simpelweg de naam te zoeken:

1. Open het **Library**-tabblad vanuit het linticoon (of voer `Open Library` uit).
2. Klik op de **+**-knop rechtsboven op de Library-pagina (of voer `Add content` uit).
3. Kies een categorie, typ de **titel** in het zoekvak en selecteer een resultaat.
4. Er wordt direct een kaart aangemaakt, met poster, jaar, genre, makers en beoordeling automatisch ingevuld.

De **Search**-knop naast **+** zoekt titels die al in je bibliotheek staan.

Voor **Handmatige** categorieën typ je gewoon een titel en vul je de cover, het jaar en andere velden zelf in.

---

## Statistieken

Het Library-tabblad bevat een inklapbaar **Statistieken**-gedeelte bovenaan:

- **Topgenres** — gerangschikt op frequentie in je hele bibliotheek.
- **Topmakers** — gerangschikt op aantal films en series waarin ze voorkomen.
- **Top per Categorie** — voor elke categorie (Films, Series, Boeken, enz.) de top 3 items op beoordeling met kleine coverthumbnails.

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
| **RAWG**          | Games           | Gratis sleutel vereist — [rawg.io/apidocs](https://rawg.io/apidocs) |
| **Deezer**        | Muziek (albums) | Geen                                                        |
| **AniList**         | Anime           | Geen — gratis AniList GraphQL API, geen sleutel nodig |
| **Comic Vine**    | Stripboeken     | Gratis sleutel vereist — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**        | Alles anders    | Geen — je typt de titel en vult de velden zelf in           |

---

## Privacy en Netwerkgebruik

Library is **offline-eerst**. De plugin maakt alleen contact met het netwerk wanneer je actief naar een titel zoekt om toe te voegen, en alleen met de zoektermen die je typt:

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
| `comicvine.gamespot.com` | Je zoekt in een stripboekencategorie | De titel die je typt en je Comic Vine-sleutel | Stripboekmetadata ophalen (titel, jaar, uitgever, uitgaveaantal, cover) |

Geen enkele andere data verlaat ooit je vault. De plugin heeft **geen telemetrie, geen analyse en geen zelf-update-mechanisme**. API-sleutels (OMDb, Google Books, RAWG, Comic Vine) worden alleen opgeslagen in je lokale plugin-instellingen en alleen naar hun respectieve services verzonden. Coverafbeeldingen worden direct geladen vanaf de URL's die door elke bron worden geretourneerd.

---

## Frontmatter Schema

De plugin leest en schrijft naar standaard YAML frontmatter. Notities worden voor je aangemaakt, maar elk veld is bewerkbaar. `Source` en `Source ID` stellen de plugin in staat om metadata later bij te werken.

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

> **Automatische serie-update:** Voer `Refresh metadata for current note` uit (of open gewoon de notitie) en de plugin werkt het totale afleveringenaantal bij in `Progress` (bijv. van `25/42` naar `25/50`) en het `Season`-aantal, terwijl je bekeken aantal intact blijft.

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

## Grafieklinks

Elke inhoudsnotitie krijgt een `Related` frontmatter-eigenschap, automatisch bijgehouden — de notitieinhoud wordt nooit aangeraakt:

```yaml
Related:
    - "[[Movie]]"
    - "[[Action]]"
    - "[[Sci-Fi]]"
    - "[[Christopher Nolan]]"
```

Deze links verbinden je notities via gedeelde categorieën, genres en makers, zodat de Obsidian-grafiekweergave schone clusters vormt. Een echt hub-notie wordt aangemaakt per categorie (bijv. `Movie`) zodat clusters zichtbaar zijn, zelfs wanneer onopgeloste links verborgen zijn. De eigenschap wordt geschreven wanneer een notitie wordt aangemaakt en bijgewerkt telkens wanneer de metadata verandert — voer `Rebuild graph links` alleen uit als je een volledige herbouw wilt forceren.

---

## Delen

Elke inhoudsnotitie krijgt een **Share**-knop in de kop (of voer `Share current note` uit). Het genereert een kaartafbeelding — poster, titel, jaar, genre, IMDb/AniList-score en je eigen beoordeling — die je overal kunt plaatsen:

- **Op mobiel** — de **Share…**-knop opent het native deelvenster van je apparaat met de kaartafbeelding direct bijgevoegd, zodat je deze rechtstreeks naar elke app kunt sturen.
- **X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, Pinterest** — opent het opstelvenster van het netwerk met een vooraf ingevuld bijschrift (titel, je beoordeling, de bronlink en een link naar deze plugin). De kaartafbeelding wordt tegelijkertijd naar je klembord gekopieerd, zodat je deze alleen nog in het bericht hoeft te plakken (Ctrl/Cmd+V).
- **Copy image / Copy text / Save image** — kopieer de gegenereerde kaart of het bijschrift naar het klembord, of bewaar de afbeelding in de bijlagemap van je vault om deze handmatig bij te voegen.

Delen is volledig lokaal: de kaart wordt in de app getekend op basis van de eigen metadata en cover van de notitie. Er wordt niets geüpload — de plugin opent alleen het opstelvenster-URL die je kiest in je browser.

---

## AniList-synchronisatie

Houd je animevoortgang gesynchroniseerd met je [AniList](https://anilist.co)-account.

**Configuratie** — in **Instellingen → Library → AniList-synchronisatie**:

1. Registreer een gratis API-client op [anilist.co/settings/developer](https://anilist.co/settings/developer), met de redirect-URL ingesteld op `https://anilist.co/api/v2/oauth/pin`.
2. Plak de **Client ID**, klik op **Connect** en autoriseer.
3. AniList toont je een toegangstoken — plak dit in de plugin. Klik op **Test connection** om te bevestigen.

Gebruik daarna de commando's:

- `Push current note to AniList` — stuurt de voortgang (bekeken afleveringen), de status (kijken / voltooid / gepland) en jouw beoordeling van de actieve animenotitie naar je AniList-lijst.
- `Pull progress from AniList` — haalt je AniList-animelijst op en werkt bijpassende notities bij. Pull is **alleen voorwaarts**: het zet een notitie die lokaal verder is of al voltooid is nooit terug, en laat je persoonlijke `My Rating` ongemoeid.

Alleen notities met `Source: anilist` (toegevoegd via de AniList-animebron) worden gesynchroniseerd. Je token wordt lokaal opgeslagen in de plugin-instellingen en wordt alleen naar AniList verzonden.

---

## Commando's

| Commando                             | Beschrijving                                                                |
| ------------------------------------ | --------------------------------------------------------------------------- |
| `Open Library`                       | Opent het galerijtabblad van Library.                                       |
| `Add content`                        | Doorzoekt een bron en maakt een inhoudsnotitie (of typ een titel voor Manual). |
| `Search your library`                | Fuzzy-zoek en open elke notitie die al in je bibliotheek staat.             |
| `Refresh metadata for current note`  | Haal opnieuw metadata op voor de actieve notitie; werkt serietotalen bij.    |
| `Rebuild graph links`                | Koppel elke inhoudsnotitie aan categorie, genres en makers.                 |
| `Find & remove duplicates`           | Scan alle notities op URL, toon duplicaten en verwijder geselecteerde.      |
| `Share current note`                 | Genereer de notitie als kaartafbeelding en deel deze op X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky of Pinterest. |
| `Push current note to AniList`        | Stuur de voortgang, status en beoordeling van de actieve animenotitie naar je AniList-account. |
| `Pull progress from AniList`          | Haal je AniList-lijst op en werk bijpassende notities bij (alleen voorwaarts). |

---

## Bijdragen en Ondersteuning

- **Een bug gevonden?** Open een [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues).
- **Een functie-idee?** Start een [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions).
- **Hou je van de plugin?** Overweeg de repository een ster te geven om je steun te betuigen!

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
