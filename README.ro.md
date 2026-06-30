> [EN](README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md) | **RO**

<p align="center">
  <img src="banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Library</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.1.2-blue" alt="Version">
  <img src="https://img.shields.io/github/downloads/Kigrok/obsidian-library-plugin/total?color=brightgreen" alt="Downloads">
  <img src="https://img.shields.io/badge/Obsidian-v1.8.7+-purple" alt="Obsidian Version">
  <img src="https://img.shields.io/github/license/Kigrok/obsidian-library-plugin?color=orange" alt="License">
</p>

<p align="center">
  <b>Organizați filmele, serialele, cărțile și multe altele într-o galerie vizuală — direct în Obsidian.</b>
  <br />
  Căutați și adăugați titluri în aplicație, preluați automat metadatele, urmăriți progresul și conectați totul la graful dvs.
</p>

<p align="center">
  <a href="https://community.obsidian.md/plugins/library">Vizualizați în directorul Obsidian Community Plugins</a>
</p>

---

## Funcționalități cheie

- **Grila vizuală de cărți** — O fila dedicată Library afișează colecția dvs. ca o galerie de cărți cu artă de copertă.
- **Căutare integrată** — Căutați și adăugați titluri direct în aplicație: OMDb pentru filme și seriale, Open Library sau Google Books pentru cărți, RAWG pentru jocuri, Deezer pentru muzică, Jikan pentru anime, Comic Vine pentru benzi desenate.
- **Urmărire inteligentă a serialelor** — Sezoanele și totalurile episoadelor sunt preluate automat și menținute sincronizate.
- **Indicatori de progres** — Barele de progres vizuale pe cărți și antetele notelor arată cât ați văzut sau citit.
- **Antete bogate pentru note** — Fiecare notă de conținut primește un antet generat automat cu toate metadatele cheie.
- **Categorii personalizate** — Creați categorii pentru Filme, Seriale, Anime, Benzi desenate, Cărți, Jocuri, Muzică sau orice altceva prin sursa manuală.
- **Linkuri în graf** — O proprietate `Related` în frontmatter leagă fiecare notă de categoria, genurile și creatorii săi, menținută automat sincronizată pentru un graf frumos.
- **Sortare și pliere** — Sortați cărțile după nume, an, rating sau dată; pliați orice categorie.
- **Statistici** — Genuri de top, creatori de top (doar filme și seriale) și elemente de top per categorie cu clasamente cu medalii.
- **Detectarea duplicatelor** — Previne automat adăugarea aceluiași titlu de două ori după URL. O comandă integrată găsește și elimină duplicatele existente.
- **Multilingv** — 31 de limbi: engleză, ucraineană, rusă, belarusă, kazahă, uzbecă, germană, spaniolă, franceză, italiană, olandeză, cehă, croată, poloneză, română, turcă, azeră, persană, hindi, bengală, urdu, tagalog, vietnameză, thailandeză, javaneză, japoneză, coreeană, chineză, arabă, singaleză, ebraică.

---

## Pornire rapidă

### 1. Instalare

Instalați **Library** din [directorul Obsidian Community Plugins](https://community.obsidian.md/plugins/library) (Setări > Community plugins > Răsfoiește > căutați "Library") sau instalați-l manual prin [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).

### 2. Configurare de bază

1. Mergeți la **Setări** > **Library**.
2. Adăugați **Categoriile** dvs. — selectați un tip predefinit (Movies, Series, Books, Comics, Games, Music, Anime sau Manual) din meniul derulant și faceți clic pe **Add category**. Fiecare categorie are un nume de afișare (tradus în limba dvs.), o valoare `Type` (întotdeauna în engleză, de ex. `Movie`), o sursă și un folder opțional pentru stocarea notelor.
3. _(Opțional)_ Introduceți cheile API pentru serviciile pe care le utilizați: [OMDb](https://www.omdbapi.com/apikey.aspx) pentru filme/seriale, [RAWG](https://rawg.io/apidocs) pentru jocuri, [Comic Vine](https://comicvine.gamespot.com/api/) pentru benzi desenate. Anime (Jikan) și muzica (Deezer) nu necesită cheie.

### 3. Adăugați o carte după titlu

Nu mai trebuie să completați frontmatterul manual — adăugați un film, serial, carte, anime sau bandă desenată pur și simplu căutându-i numele:

1. Deschideți fila **Library** din pictura de pe bara laterală (sau rulați `Open Library`).
2. Faceți clic pe butonul **+** din colțul din dreapta sus al paginii Library (sau rulați `Add content`).
3. Alegeți o categorie, tastați **titlul** în caseta de căutare și selectați un rezultat.
4. O carte este creată instantaneu, cu poster, an, gen, creatori și rating completate automat.

Butonul **Search** de lângă **+** caută titluri deja în biblioteca dvs.

Pentru categoriile **Manual** pur și simplu tastați un titlu și completați singur coperta, anul și alte câmpuri.

---

## Statistici

Fila Library include o secțiune pliabilă **Statistics** în partea de sus:

- **Genuri de top** — clasate după frecvență în întreaga bibliotecă.
- **Creatori de top** — clasate după numărul de filme și seriale în care apar.
- **Top per categorie** — pentru fiecare categorie (Movies, Series, Books etc.), primele 3 elemente după rating cu miniaturi mici de copertă.

---

## Detectarea duplicatelor

Library previne intrările duplicate verificând câmpul `URL`:

- **La adăugare** — dacă o notă cu același URL există deja, deschide nota existentă în loc să creeze un duplicat.
- **Găsește și elimină duplicatele** — rulați această comandă din paletă pentru a scana toate notele, a le grupa după URL și a elimina selectiv duplicatele printr-o fereastră modală.

---

## Surse

Fiecare categorie este legată de o sursă care îi alimentează căutarea:

| Sursă             | Tipuri de conținut | Cheie API                                                   |
| ----------------- | ----------------- | ---------------------------------------------------------- |
| **OMDb**          | Filme, Seriale    | Cheie gratuită necesară — [omdbapi.com](https://www.omdbapi.com/apikey.aspx) |
| **Books**         | Cărți             | Open Library (fără cheie) + Google Books (cheie gratuită opțională). Rezultatele sunt îmbinate — Google Books primele, Open Library dedesubt. |
| **RAWG**          | Jocuri            | Cheie gratuită necesară — [rawg.io/apidocs](https://rawg.io/apidocs) |
| **Deezer**        | Muzică (albume)   | Niciuna                                                     |
| **Jikan**         | Anime             | Niciuna — API neoficial gratuit MyAnimeList, nu este necesară cheie |
| **Comic Vine**    | Benzi desenate    | Cheie gratuită necesară — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**        | Orice altceva     | Niciuna — tastați singur titlul și completați câmpurile    |

---

## Confidențialitate și utilizarea rețelei

Library este **offline-first**. Pluginul contactează rețeaua doar atunci când căutați activ un titlu de adăugat, și doar cu termenii de căutare pe care îi tastați:

| Serviciu | Când | Ce se trimite | De ce |
| --- | --- | --- | --- |
| `www.omdbapi.com` | Căutați o categorie bazată pe OMDb | Titlul pe care îl tastați și cheia dvs. API OMDb | Preluarea metadatelor filmului/serialului (an, genuri, distribuție, rating, poster, numărul de episoade) |
| `openlibrary.org` | Căutați o categorie Open Library | Titlul pe care îl tastați | Preluarea metadatelor cărții (autor, an, subiecte, ID copertă) |
| `covers.openlibrary.org` | O carte are o copertă | ID copertă Open Library | Încărcarea imaginii de copertă |
| `www.googleapis.com` | Căutați o categorie Google Books | Titlul pe care îl tastați și cheia dvs. Google Books | Preluarea metadatelor cărții (autor, an, categorii, numărul de pagini, copertă, ISBN) |
| `api.rawg.io` | Căutați o categorie de jocuri RAWG | Titlul pe care îl tastați și cheia dvs. RAWG | Preluarea metadatelor jocului (an, genuri, dezvoltator, copertă) |
| `api.deezer.com` | Căutați o categorie de muzică Deezer | Albumul sau artistul pe care îl tastați | Preluarea metadatelor albumului (artist, an, genuri, numărul de piese, copertă) |
| `api.jikan.moe` | Căutați o categorie anime | Titlul pe care îl tastați | Preluarea metadatelor anime (titlu, an, genuri, episoade, scor MAL, sinopsis, poster) |
| `comicvine.gamespot.com` | Căutați o categorie de benzi desenate | Titlul pe care îl tastați și cheia dvs. Comic Vine | Preluarea metadatelor benzii desenate (titlu, an, editor, numărul de issue-uri, copertă) |

Nicio altă dată nu părăsește vreodată vaultul dvs. Pluginul **nu are telemetrie, nu are analitică și nu are mecanism de auto-actualizare**. Cheile API (OMDb, Google Books, RAWG, Comic Vine) sunt stocate doar în setările locale ale pluginului și sunt trimise doar serviciilor respective. Imaginile de copertă se încarcă direct de la URL-urile returnate de fiecare sursă.

---

## Schemă Frontmatter

Pluginul citește și scrie în frontmatter YAML standard. Notele sunt create pentru dvs., dar fiecare câmp este editabil. `Source` și `Source ID` permit pluginului să reîmprospăteze metadatele mai târziu.

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

> **Auto-actualizarea serialelor:** Rulați `Refresh metadata for current note` (sau pur și simplu deschideți nota) și pluginul actualizează numărul total de episoade în `Progress` (de ex., `25/42` în `25/50`) și numărul de `Season`, menținând numărul dvs. de episoade văzute intact.

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
    - シュタインズ・ゲート
Rating MAL: 9.07
Total Episodes: 24
Status: Finished Airing
Cover: https://cdn.myanimelist.net/images/anime/...
URL: https://myanimelist.net/anime/9253/Steins_Gate
Progress: 0/24
Complete: false
Date: 01.03.2026
Source: jikan
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

## Linkuri în graf

Fiecare notă de conținut primește o proprietate `Related` în frontmatter, menținută automat actualizată — corpul notei nu este niciodată atins:

```yaml
Related:
    - "[[Movie]]"
    - "[[Action]]"
    - "[[Sci-Fi]]"
    - "[[Christopher Nolan]]"
```

Aceste linkuri conectează notele dvs. prin categorii, genuri și creatori comuni, astfel încât vizualizarea grafului Obsidian formează clustere curate. O notă hub reală este creată per categorie (de ex. `Movie`) astfel încât clusterele să apară chiar și cu linkurile nerezolvate ascunse. Proprietatea este scrisă când o notă este creată și reîmprospătată de fiecare dată când metadatele sale se schimbă — rulați `Rebuild graph links` doar dacă doriți să forțați o reconstrucție completă.

---

## Comenzi

| Comandă                              | Descriere                                                                 |
| ------------------------------------ | ------------------------------------------------------------------------- |
| `Open Library`                       | Deschideți fila galeriei Library.                                         |
| `Add content`                        | Căutați o sursă și creați o notă de conținut (sau tastați un titlu pentru Manual). |
| `Search your library`                | Căutare fuzzy și deschidere a oricărei note deja în biblioteca dvs.      |
| `Refresh metadata for current note`  | Recuperați metadatele pentru nota activă; actualizați totalurile de episoade ale serialelor. |
| `Rebuild graph links`                | Conectați fiecare notă de conținut la categoria, genurile și creatorii săi. |
| `Find & remove duplicates`           | Scanați toate notele după URL, afișați duplicatele și eliminați-le pe cele selectate. |

---

## Contribuții și suport

- **Ați găsit o eroare?** Deschideți un [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues).
- **Aveți o idee de funcționalitate?** Începeți o [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions).
- **Vă place pluginul?** Luați în considerare să dați o stea repo-ului pentru a vă arăta sprijinul!

---

## Mulțumiri

Dacă găsiți acest plugin util, luați în considerare sprijinirea dezvoltării sale:

| | Rețea | Adresă |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |

---
