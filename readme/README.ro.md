> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md) | **RO**

<p align="center">
  <img src="../banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Library</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.3.5-blue" alt="Version">
  <img src="https://img.shields.io/github/downloads/Kigrok/obsidian-library-plugin/total?color=brightgreen" alt="Downloads">
  <img src="https://img.shields.io/badge/Obsidian-v1.8.7+-purple" alt="Obsidian Version">
  <img src="https://img.shields.io/github/license/Kigrok/obsidian-library-plugin?color=orange" alt="License">
</p>

<p align="center">
  Filme, seriale, cărți, anime, benzi desenate, jocuri și muzică drept note în Obsidian, afișate ca o galerie de coperți.
  <br />
  <a href="https://community.obsidian.md/plugins/library">Directorul de pluginuri Obsidian</a>
</p>

## Funcții

- Caută un titlu și primești o notă cu posterul, anul, genul, creatorii, distribuția și evaluările completate.
- Titlurile se găsesc în orice limbă: un titlu în rusă sau japoneză își găsește filmul, jocul sau banda desenată. Un an după titlu (`brother 1997`) restrânge un nume des întâlnit.
- Răsfoiește biblioteca drept carduri cu coperți, grupate pe categorii și sortate după nume, an, evaluare sau dată.
- Titlurile pe care nu le-ați început au un ochi pe copertă și se adună în blocul **Urmează** de la finalul paginii.
- O categorie restrânsă își arată cardurile pe un singur rând care se derulează lateral.
- Bifează episoadele unui serial sau capitolele unei cărți și notează fiecare; `Progress` și `My Rating` se calculează din ele.
- Notițele despre filme, seriale, anime și jocuri arată un trailer și cadre; filmele și serialele arată și durata și lista sezoanelor.
- Sub fiecare notiță apar titluri asemănătoare pe care nu le ai încă; un clic adaugă unul.
- Importă jocurile din Steam cu orele jucate.
- Genurile, creatorii și actorii sunt linkuri, așa că notele lor adună fiecare titlu în referințe și în graf.
- Panoul de statistici arată topurile alese de tine și timpul total de vizionare.
- Distribuie un titlu ca imagine-card pe X, Telegram, Reddit și alte șase rețele.
- Sincronizează progresul anime cu AniList.
- Interfața este tradusă în toate limbile pe care le suportă Obsidian, iar acest README în [30 de limbi](./).

## Pornire rapidă

1. Instalează **Library** din Setări → Module comunitare → Răsfoiți sau din [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).
2. În Setări → Library, adaugă o categorie pentru fiecare tip de conținut: Filme, Seriale, Cărți, Benzodesene, Jocuri, Muzică, Anime, Manual.
3. Deschide fila Bibliotecă din panglică, apasă **+**, alege o categorie și caută un titlu. Un titlu care e deja în bibliotecă deschide nota existentă.

Valoarea `Type` a unei categorii (de exemplu `Movie`) stabilește ce note îi aparțin, iar dosarul ei stabilește unde ajung notele noi. Ambele sunt sub **Avansat** în setările categoriei.

## Surse

| Categorie | Surse | Întâi, cu cheie |
| --- | --- | --- |
| Filme, seriale | Cinemeta, Wikidata | [OMDb](https://www.omdbapi.com/apikey.aspx) |
| Cărți | Open Library | [Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| Jocuri | Steam, Wikidata | [RAWG](https://rawg.io/apidocs) |
| Muzică | Deezer | — |
| Anime | AniList | — |
| Benzi desenate | Wikidata, AniList pentru manga | [Comic Vine](https://comicvine.gamespot.com/api/) |
| Orice altceva | Manual: completezi tu câmpurile | — |

Cheile se introduc în Setări → Library → Chei API.

Trailerele, imaginile, durata și listele de sezoane vin din Cinemeta, iar scorurile Rotten Tomatoes din Wikidata sau OMDb. O [cheie TMDB](https://www.themoviedb.org/settings/api) adaugă notele sezoanelor și mai multe imagini.

Ca să îți aduci jocurile, introdu în setări o [cheie Steam Web API](https://steamcommunity.com/dev/apikey) și profilul Steam, apoi rulează `Importă biblioteca Steam`. Comanda creează o notiță pentru fiecare joc, cu `Playtime` în ore; rulată din nou, adaugă jocurile noi și actualizează orele. Detaliile jocurilor din profil trebuie să fie publice.

Notițele despre jocuri primesc capturi de ecran și un trailer. Trailerul este un video YouTube din IGDB dacă adaugi un Twitch Client ID și un Client Secret (creează o aplicație pe [dev.twitch.tv/console/apps](https://dev.twitch.tv/console/apps)), altfel din Wikidata dacă are unul, altfel trailerul Steam al jocului.

## Progres și note

Antetul notei unui serial listează sezoanele, iar fiecare sezon se deschide în episoadele sale, cu titluri când sursa le are. Bifează un episod sau un sezon întreg ca văzut și dă-i o notă de la 1 la 10. `Progress` numără episoadele bifate, nota unui sezon este media episoadelor sale notate, iar `My Rating` este media sezoanelor notate. Un sezon fără episoade notate primește o notă proprie.

Anime funcționează la fel, ca un singur sezon fără titluri de episoade.

Capitolele unei cărți vin din cuprinsul unei ediții de pe Open Library. Dacă nu există, **Adaugă capitole** din antetul notei primește un număr de capitole sau câte un titlu pe rând. De atunci `Progress` numără capitole în loc de pagini, iar paginile deja citite trec în aceeași proporție de capitole.

Notele din versiunile mai vechi își păstrează progresul. Cât timp nu bifezi nimic, primele episoade până la numărul din `Progress` apar ca văzute.

## Statistici

Panoul din partea de sus a filei Bibliotecă arată coloanele alese în Setări → Library → Statistici: cele mai bine notate trei titluri ale unei categorii, cele mai frecvente trei valori ale unei proprietăți (genuri, actori sau oricare alta) și orele petrecute cu filme, seriale și anime. Sub grafic apare o comparație pe zi, de exemplu: Apollo 11 ar fi putut zbura până la Lună și înapoi de 8 ori.

## Urmează

Un titlu fără progres (neterminat, nimic bifat, fără nota dvs.) are un ochi pe copertă. Blocul **Urmează** de la finalul filei Bibliotecă adună aceste titluri din toate categoriile, cele mai noi primele, și se restrânge și se sortează ca o categorie. În Setări → Library, **Blocul „Urmează”** oprește blocul, iar cu **Neînceputele în categorii** dezactivat aceste titluri apar doar în „Urmează”.

## Legături în graf

`Genre`, `Creator` și `Cast` conțin linkuri precum `[[Christopher Nolan]]`, așa că nota unui gen sau a unei persoane îi listează titlurile în referințe. Numele scrise de mână devin linkuri când nota se schimbă, iar `Reconstruiește legăturile grafului` convertește toată biblioteca.

## Distribuire și AniList

**Distribuie** din antetul unei note desenează un card cu posterul, titlul, anul, genul, distribuția, evaluările și nota ta. Pe desktop imaginea ajunge în clipboard, iar rețeaua aleasă se deschide cu o descriere, așa că lipești imaginea în postare. Pe mobil imaginea ajunge în meniul de partajare al sistemului. Poți și copia imaginea sau descrierea, ori salva imaginea în seif.

Pentru sincronizarea anime, înregistrează un client la [anilist.co/settings/developer](https://anilist.co/settings/developer) cu URL-ul de redirecționare `https://anilist.co/api/v2/oauth/pin`. Lipește Client ID în Setări → Library → Sincronizare AniList, apasă **Conectează** și lipește tokenul afișat de AniList. `Trimite nota curentă în AniList` trimite progresul, starea și nota. `Descarcă progresul din AniList` actualizează notele, nu dă niciodată progresul înapoi și nu atinge `My Rating`. Se sincronizează doar notele cu `Source: anilist`.

Aceleași notițe se sincronizează și cu MyAnimeList. Creează un client pe [myanimelist.net/apiconfig](https://myanimelist.net/apiconfig) cu URL-ul de redirecționare `http://localhost`, lipește Client ID-ul (și Client Secret-ul, dacă există) în Setări → Library → Sincronizare MyAnimeList, apasă **Conectează** și lipește adresa deschisă de browser. Pluginul găsește intrarea MyAnimeList a fiecărui titlu prin AniList și reînnoiește singur tokenul. `Trimite nota curentă în MyAnimeList` și `Descarcă progresul din MyAnimeList` funcționează ca echivalentele lor pentru AniList.

## Frontmatter

Fiecare card este o notă, iar tot ce știe pluginul despre el se află în frontmatter:

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
      # ...încă 7 episoade
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

La un serial, `Runtime` este durata unui episod. Cărțile adaugă `ISBN` și păstrează capitolele în `Chapters` cu aceleași câmpuri `title`, `watched` și `my_rating`; anime adaugă `Rating AniList` și `Status`. Proprietatea copertei poate fi redenumită în setări, de exemplu în `image`.

Reîmprospătarea completează doar câmpurile goale, așa că valorile editate rămân; notele surselor (`Rating IMDB`, `Rating RT`, `Rating MC`, `Rating RAWG`) sunt aduse la zi. Actualizează și numărul de episoade din `Progress` și adaugă sezoane și titluri de episoade noi.

## Recomandări

Sub antetul fiecărei notițe, un rând de titluri asemănătoare pe care nu le ai încă:

- anime: recomandările utilizatorilor AniList;
- filme și seriale: recomandările TMDB cu o cheie TMDB, altfel titlurile cel mai bine notate din aceleași genuri, din Cinemeta;
- jocuri: restul seriei și cele mai bune jocuri din același gen, din RAWG cu o cheie RAWG, altfel din Wikidata;
- cărți: cele mai citite cărți de pe Open Library cu aceleași prime două genuri.

Apasă pe o copertă ca să adaugi titlul. Benzile desenate și muzica nu au recomandări. Dezactivează rândul din Setări → Library → Arată recomandări.

## Confidențialitate și rețea

Biblioteca ta este formată din note simple și funcționează offline. Pluginul se conectează când cauți, reîmprospătezi, sincronizezi sau distribui; când deschizi o notă din bibliotecă, cel mult o dată la 5 minute pentru fiecare notă; și o dată după o actualizare sau o schimbare de cheie, ca să completeze câmpurile noi. Nu are telemetrie, analiză sau auto-actualizare. Cheile API rămân în setările locale ale pluginului și merg doar la serviciul lor.

| Gazdă | Când | Ce se trimite |
| --- | --- | --- |
| `www.omdbapi.com` | Căutare de filme și seriale (cu cheie OMDb) | Titlu sau id IMDb, cheie OMDb |
| `openlibrary.org` | Căutare de cărți; căutarea capitolelor când adaugi sau deschizi o carte; recomandări la deschiderea unei notițe | Titlu și autor, ISBN sau id-ul operei; genuri |
| `covers.openlibrary.org` | Coperți de cărți | Id-ul copertei |
| `www.googleapis.com` | Căutare de cărți (cu cheie Google Books) | Titlu, cheie Google Books |
| `api.rawg.io` | Căutarea și actualizarea jocurilor; recomandări la deschiderea unei notițe (cu cheie RAWG) | Titlu sau id RAWG, gen, cheie RAWG |
| `media.rawg.io` | Coperte și capturi de ecran ale jocurilor | Calea imaginii |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | Căutarea jocurilor, coperte, trailere și capturi de ecran | Titlu sau id de aplicație Steam |
| `video.akamai.steamstatic.com`, `shared.akamai.steamstatic.com` | Redarea unui trailer Steam; capturi de ecran ale jocurilor | Calea videoclipului sau a imaginii |
| `api.steampowered.com` | Rulezi `Importă biblioteca Steam` | Cheia Steam Web API, SteamID-ul sau numele profilului |
| `id.twitch.tv`, `api.igdb.com` | Adăugarea sau actualizarea unui joc, dacă setezi cheile Twitch | Twitch Client ID și secret; id-ul aplicației Steam sau numele jocului |
| `www.wikidata.org` | Căutare de filme, seriale, jocuri și benzi desenate; jocuri și benzi desenate adăugate de acolo; scoruri Rotten Tomatoes; trailere de jocuri; recomandări de jocuri la deschiderea unei notițe | Textul căutat, id IMDb, Steam app id sau id-ul elementului |
| `en.wikipedia.org`, `upload.wikimedia.org` | Copertele jocurilor și benzilor desenate găsite pe Wikidata | Titlul articolului; calea imaginii |
| `api.deezer.com` | Căutare de muzică | Album sau artist |
| `graphql.anilist.co` | Căutare anime; sincronizare AniList; id-uri MyAnimeList pentru sincronizare; recomandări la deschiderea unei notițe; căutare de manga | Titlu; tokenul tău, progresul, starea și nota; id-uri AniList |
| `anilist.co` | Apeși **Conectează** | Client ID, deschis în browser |
| `myanimelist.net` | Apeși **Conectează** pentru MyAnimeList; reînnoirea tokenului | Client ID și secret, cod de autorizare, token de reînnoire |
| `api.myanimelist.net` | Sincronizare MyAnimeList | Tokenul tău, progresul, starea și nota |
| `s4.anilist.co` | Bannere anime | Cale CDN |
| `comicvine.gamespot.com` | Căutare de benzi desenate (cu cheie Comic Vine) | Titlu, cheie Comic Vine |
| `v3-cinemeta.strem.io` | Adăugarea sau reîmprospătarea unui film sau serial; căutare de filme și seriale; recomandări la deschiderea unei notițe, fără cheie TMDB | Titlu sau id IMDb; gen |
| `images.metahub.space`, `episodes.metahub.space` | Postere în căutarea de filme; imagini | Id IMDb, numerele sezonului și episodului |
| `api.themoviedb.org`, `image.tmdb.org` | Adăugarea sau actualizarea unui film ori serial și recomandări la deschiderea unei notițe, dacă setezi o cheie TMDB | Id IMDb și cheie TMDB; calea imaginii |
| `i.ytimg.com` | Cadre din trailere | Id-ul videoclipului |
| Serverele de imagini ale serviciilor de streaming, prin AniList | Cadre din episoadele anime | Calea imaginii |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Deschiderea unei note cu trailer | Id-ul videoclipului |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Apeși un buton de distribuire | Descrierea: titlu, nota ta, link spre sursă. Imaginea rămâne pe dispozitivul tău |

## Comenzi

| Comandă | Ce face |
| --- | --- |
| `Deschide biblioteca` | Deschide fila Bibliotecă |
| `Adaugă conținut` | Caută într-o sursă și creează o notă |
| `Caută în biblioteca ta` | Găsește și deschide o notă din bibliotecă |
| `Reîmprospătează metadatele pentru nota curentă` | Preia din nou nota activă |
| `Reîmprospătează metadatele tuturor notelor` | Preia din nou fiecare notă din bibliotecă, pe rând |
| `Reconstruiește legăturile grafului` | Transformă `Genre`, `Creator` și `Cast` în linkuri |
| `Găsește și elimină duplicatele` | Listează notele cu același URL și le șterge pe cele alese |
| `Distribuie nota curentă` | Deschide cardul de distribuire |
| `Trimite nota curentă în AniList` | Trimite progresul, starea și nota |
| `Descarcă progresul din AniList` | Actualizează notele din lista ta AniList |
| `Trimite nota curentă în MyAnimeList` | Trimite progresul, starea și nota |
| `Descarcă progresul din MyAnimeList` | Actualizează notele din lista ta MyAnimeList |
| `Importă biblioteca Steam` | Creează o notiță pentru fiecare joc deținut și actualizează `Playtime` |

## Asistență

Raportează erori în [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues) și propune idei în [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions). Pluginul este distribuit sub [licența MIT](../LICENSE).

Dacă pluginul îți este util, îl poți susține:

| | Rețea | Adresă |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
