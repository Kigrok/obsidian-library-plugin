> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md) | **[NL](README.nl.md)**

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
  Films, series, boeken, anime, strips, games en muziek als notities in Obsidian, getoond als een galerij van covers.
  <br />
  <a href="https://community.obsidian.md/plugins/library">Obsidian Community Plugins-overzicht</a>
</p>

## Functies

- Zoek een titel en krijg een notitie met poster, jaar, genre, makers, cast en beoordelingen ingevuld.
- Blader door de bibliotheek als covers, gegroepeerd per categorie en gesorteerd op naam, jaar, beoordeling of datum.
- Vink afleveringen van een serie of hoofdstukken van een boek af en beoordeel ze stuk voor stuk; `Progress` en `My Rating` worden daaruit berekend.
- Notities van films en series tonen een trailer, stills, speelduur en de lijst met seizoenen.
- Genres, makers en acteurs zijn links, dus hun notities verzamelen elke titel in de terugverwijzingen en in de graaf.
- Het statistiekenpaneel toont de toplijsten die je kiest en je totale kijktijd.
- Deel een titel als kaartafbeelding op X, Telegram, Reddit en zes andere netwerken.
- Synchroniseer anime-voortgang met AniList.
- De interface is vertaald in elke taal die Obsidian ondersteunt, en deze README in [30 talen](./).

## Snel aan de slag

1. Installeer **Library** via Instellingen → Externe plug-in → Doorbladeren, of uit [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).
2. Voeg in Instellingen → Library een categorie toe voor elk medium: Films, Series, Boeken, Strips, Spellen, Muziek, Anime, Handmatig.
3. Vul de API-sleutels in die je bronnen nodig hebben (zie hieronder).
4. Open het tabblad Bibliotheek via de werkbalk, druk op **+**, kies een categorie en zoek een titel. Een titel die al in de bibliotheek staat, opent de bestaande notitie.

De `Type`-waarde van een categorie (bijvoorbeeld `Movie`) bepaalt welke notities erbij horen, en de map bepaalt waar nieuwe notities komen. Beide staan onder **Geavanceerd** in de instellingen van de categorie.

## Bronnen

| Categorie | Bron | Sleutel |
| --- | --- | --- |
| Films, series | OMDb | [Gratis sleutel](https://www.omdbapi.com/apikey.aspx) |
| Boeken | Google Books + Open Library | Optionele [Google Books-sleutel](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| Games | RAWG + Steam | [Gratis RAWG-sleutel](https://rawg.io/apidocs); Steam heeft er geen nodig |
| Muziek | Deezer | Geen |
| Anime | AniList | Geen |
| Strips | Comic Vine | [Gratis sleutel](https://comicvine.gamespot.com/api/) |
| Al het andere | Handmatig: je vult de velden zelf in | Geen |

Trailers, stills, speelduur en seizoenslijsten komen zonder sleutel van Cinemeta. Een [TMDB-sleutel](https://www.themoviedb.org/settings/api) voegt seizoensbeoordelingen en meer stills toe.

## Voortgang en beoordelingen

De kop van een serienotitie toont de seizoenen, en elk seizoen klapt open naar zijn afleveringen, met titels als de bron die heeft. Vink een aflevering of een heel seizoen af als gezien en geef een score van 1 tot 10. `Progress` telt de afgevinkte afleveringen, de score van een seizoen is het gemiddelde van zijn beoordeelde afleveringen, en `My Rating` is het gemiddelde van de beoordeelde seizoenen. Een seizoen zonder beoordeelde afleveringen krijgt een eigen score.

Anime werkt op dezelfde manier, als één seizoen zonder afleveringstitels.

Hoofdstukken van een boek komen uit de inhoudsopgave van een editie op Open Library. Als er geen is, neemt **Hoofdstukken toevoegen** in de notitiekop een aantal hoofdstukken of één titel per regel aan. Vanaf dan telt `Progress` hoofdstukken in plaats van pagina's, en de gelezen pagina's gaan mee als hetzelfde deel van de hoofdstukken.

Notities uit oudere versies houden hun voortgang. Zolang je niets afvinkt, staan de eerste afleveringen tot het aantal in `Progress` als gezien.

## Statistieken

Het paneel bovenaan het tabblad Bibliotheek toont de kolommen die je kiest in Instellingen → Library → Statistieken: de drie best beoordeelde titels van een categorie, de drie vaakst voorkomende waarden van een eigenschap (genres, acteurs of een andere) en de uren besteed aan films, series en anime. Onder de grafiek staat elke dag één vergelijking, bijvoorbeeld: Apollo 11 had 8 keer naar de maan en terug kunnen vliegen.

## Graafkoppelingen

`Genre`, `Creator` en `Cast` bevatten links zoals `[[Christopher Nolan]]`, dus de notitie van een genre of persoon toont de titels in de terugverwijzingen. Met de hand getypte namen worden links zodra de notitie verandert, en `Graf-links herbouwen` zet de hele bibliotheek om.

## Delen en AniList

**Delen** in de kop van een notitie tekent een kaart met poster, titel, jaar, genre, cast, beoordelingen en jouw score. Op de desktop gaat de afbeelding naar het klembord en opent het gekozen netwerk met een bijschrift, zodat je de afbeelding in het bericht plakt. Op mobiel krijgt het deelmenu van het systeem de afbeelding. Je kunt de afbeelding of het bijschrift ook kopiëren, of de afbeelding in de kluis opslaan.

Registreer voor anime-synchronisatie een client op [anilist.co/settings/developer](https://anilist.co/settings/developer) met de redirect-URL `https://anilist.co/api/v2/oauth/pin`. Plak de Client ID in Instellingen → Library → AniList-synchronisatie, klik op **Verbinden** en plak het token dat AniList toont. `Huidige notitie naar AniList sturen` stuurt voortgang, status en score. `Voortgang ophalen van AniList` werkt je notities bij, zet voortgang nooit terug en laat `My Rating` met rust. Alleen notities met `Source: anilist` worden gesynchroniseerd.

Dezelfde notities synchroniseren ook met MyAnimeList. Maak op [myanimelist.net/apiconfig](https://myanimelist.net/apiconfig) een client met de redirect-URL `http://localhost`, plak de Client ID (en het Client Secret, als dat er is) in Instellingen → Library → MyAnimeList-synchronisatie, klik op **Verbinden** en plak het adres dat je browser opent. De plugin vindt het MyAnimeList-item van elke titel via AniList en vernieuwt het token zelf. `Huidige notitie naar MyAnimeList sturen` en `Voortgang ophalen van MyAnimeList` werken zoals hun AniList-tegenhangers.

## Frontmatter

Elke kaart is een notitie, en alles wat de plugin erover weet staat in de frontmatter:

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
      # ...nog 7 afleveringen
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

Bij een serie is `Runtime` de duur van één aflevering. Boeken hebben daarnaast `ISBN` en bewaren hoofdstukken in `Chapters` met dezelfde velden `title`, `watched` en `my_rating`; anime heeft `Rating AniList` en `Status`. De eigenschap voor de cover kun je in de instellingen hernoemen, bijvoorbeeld naar `image`.

Een verversing vult alleen lege velden, dus waarden die je bewerkt blijven staan. Ze werkt ook het totaal aantal afleveringen in `Progress` bij en voegt nieuwe seizoenen en afleveringstitels toe.

## Privacy en netwerkgebruik

Je bibliotheek bestaat uit gewone notities en werkt offline. De plugin gaat online als je zoekt, ververst, synchroniseert of deelt; als je een bibliotheeknotitie opent, hooguit eens per 5 minuten per notitie; en één keer na een update of een sleutelwijziging, om nieuwe velden te vullen. Er is geen telemetrie, geen analytics en geen zelfupdate. API-sleutels blijven in je lokale plugininstellingen en gaan alleen naar hun eigen dienst.

| Host | Wanneer | Wat wordt verstuurd |
| --- | --- | --- |
| `www.omdbapi.com` | Films en series zoeken | Titel of IMDb-id, OMDb-sleutel |
| `openlibrary.org` | Boeken zoeken; hoofdstukken opzoeken als je een boek toevoegt of opent | Titel en auteur, ISBN of werk-id |
| `covers.openlibrary.org` | Boekcovers | Cover-id |
| `www.googleapis.com` | Boeken zoeken | Titel, Google Books-sleutel |
| `api.rawg.io` | Games zoeken | Titel, RAWG-sleutel |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | Games zoeken en covers | Titel of Steam-app-id |
| `api.deezer.com` | Muziek zoeken | Album of artiest |
| `graphql.anilist.co` | Anime zoeken; AniList-synchronisatie; MyAnimeList-id's voor synchronisatie | Titel; je token, voortgang, status en score; AniList-id's |
| `anilist.co` | Je klikt op **Verbinden** | Client ID, geopend in je browser |
| `myanimelist.net` | Je klikt op **Verbinden** voor MyAnimeList; token vernieuwen | Client ID en secret, autorisatiecode, refresh-token |
| `api.myanimelist.net` | MyAnimeList-synchronisatie | Je token, voortgang, status en score |
| `s4.anilist.co` | Anime-banners | CDN-pad |
| `comicvine.gamespot.com` | Strips zoeken | Titel, Comic Vine-sleutel |
| `v3-cinemeta.strem.io` | Een film of serie toevoegen of verversen | IMDb-id |
| `images.metahub.space`, `episodes.metahub.space` | Stills | IMDb-id, seizoens- en afleveringsnummer |
| `api.themoviedb.org`, `image.tmdb.org` | Een film of serie toevoegen of verversen, als je een TMDB-sleutel hebt ingesteld | IMDb-id en TMDB-sleutel; afbeeldingspad |
| `i.ytimg.com` | Trailerstills | Video-id |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Een notitie met trailer openen | Video-id |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Je klikt op een deelknop | Het bijschrift: titel, jouw score, bronlink. De afbeelding blijft op je apparaat |

## Opdrachten

| Opdracht | Wat het doet |
| --- | --- |
| `Bibliotheek openen` | Opent het tabblad Bibliotheek |
| `Inhoud toevoegen` | Zoekt in een bron en maakt een notitie |
| `Zoek in je bibliotheek` | Vindt en opent een bibliotheeknotitie |
| `Metadata vernieuwen voor huidige notitie` | Haalt de actieve notitie opnieuw op |
| `Metadata vernieuwen voor alle notities` | Haalt elke bibliotheeknotitie opnieuw op, één voor één |
| `Graf-links herbouwen` | Maakt links van `Genre`, `Creator` en `Cast` |
| `Duplicaten zoeken en verwijderen` | Toont notities met dezelfde URL en verwijdert de gekozen |
| `Deel huidige notitie` | Opent de deelkaart |
| `Huidige notitie naar AniList sturen` | Stuurt voortgang, status en score |
| `Voortgang ophalen van AniList` | Werkt notities bij vanuit je AniList-lijst |
| `Huidige notitie naar MyAnimeList sturen` | Stuurt voortgang, status en score |
| `Voortgang ophalen van MyAnimeList` | Werkt notities bij vanuit je MyAnimeList-lijst |

## Ondersteuning

Meld bugs in [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues) en ideeën in [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions). De plugin valt onder de [MIT-licentie](../LICENSE).

Heb je iets aan de plugin, dan kun je hem steunen:

| | Netwerk | Adres |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
