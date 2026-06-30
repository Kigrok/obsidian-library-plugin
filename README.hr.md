> [EN](README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md) | **HR**

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
  <b>Organizirajte svoje filmove, serije, knjige i više u vizualnoj galeriji — izravno unutar Obsidiana.</b>
  <br />
  Pretražujte i dodajte naslove unutar aplikacije, automatski dohvaćajte metapodatke, pratite napredak i povežite sve sa svojim grafom.
</p>

<p align="center">
  <a href="https://community.obsidian.md/plugins/library">Pogledajte u direktoriju Obsidian Community Plugins</a>
</p>

---

## Ključne značajke

- **Vizualna mreža kartica** — Posvećena kartica Library prikazuje vašu kolekciju kao galeriju kartica s naslovnim slikama.
- **Ugrađeno pretraživanje** — Pretražujte i dodajte naslove izravno u aplikaciji: OMDb za filmove i serije, Open Library ili Google Books za knjige, RAWG za igrice, Deezer za glazbu, Jikan za anime, Comic Vine za stripove.
- **Pametno praćenje serija** — Sezone i ukupni brojevi epizoda automatski se dohvaćaju i održavaju sinkroniziranima.
- **Pokazatelji napretka** — Vizualne trake napretka na karticama i zaglavlju bilješki pokazuju koliko ste pogledali ili pročitali.
- **Bogata zaglavlja bilješki** — Svaka bilješka sadržaja dobiva automatski generirano zaglavlje sa svim ključnim metapodacima.
- **Prilagođene kategorije** — Stvorite kategorije za filmove, serije, anime, stripove, knjige, igrice, glazbu ili bilo što drugo putem ručnog izvora.
- **Veze grafana** — Svojstvo `Related` u frontmatteru povezuje svaku bilješku s njezinom kategorijom, žanrovima i stvarateljima, automatski održavano sinkroniziranim za prekrasan graf.
- **Sortiranje i sažimanje** — Sortirajte kartice po nazivu, godini, ocjeni ili datumu; sažmite bilo koju kategoriju.
- **Statistika** — Najbolji žanrovi, najbolji stvaratelji (samo filmovi i serije) i najbolje stavke po kategoriji s medaljama.
- **Otkrivanje duplikata** — Automatski sprječava dodavanje istog naslova dva puta prema URL-u. Ugrađena naredba pronalazi i uklanja postojeće duplikate.
- **Višejezičnost** — 31 jezik: engleski, ukrajinski, ruski, bjeloruski, kazaški, uzbekački, njemački, španjolski, francuski, talijanski, nizozemski, češki, hrvatski, poljski, rumunjski, turski, azerbajdžanski, perzijski, hindi, bengalski, urdski, tagalog, vijetnamski, tajlandski, javanski, japanski, korejski, kineski, arapski, sinhala, hebrejski.

---

## Brzi početak

### 1. Instalacija

Instalirajte **Library** iz [direktorija Obsidian Community Plugins](https://community.obsidian.md/plugins/library) (Postavke > Community plugins > Pretraži > potražite "Library"), ili ga instalirajte ručno putem [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).

### 2. Osnovna postavka

1. Idite na **Postavke** > **Library**.
2. Dodajte svoje **Kategorije** — odaberite unaprijed definirani tip (Movies, Series, Books, Comics, Games, Music, Anime ili Manual) iz padajućeg izbornika i kliknite **Add category**. Svaka kategorija ima ime za prikaz (prevedeno na vaš jezik), vrijednost `Type` (uvijek engleski, npr. `Movie`), izvor i opcionalnu mapu za pohranu bilješki.
3. _(Opcionalno)_ Unesite API ključeve za usluge koje koristite: [OMDb](https://www.omdbapi.com/apikey.aspx) za filmove/serije, [RAWG](https://rawg.io/apidocs) za igrice, [Comic Vine](https://comicvine.gamespot.com/api/) za stripove. Anime (Jikan) i glazba (Deezer) ne zahtijevaju ključ.

### 3. Dodajte karticu po naslovu

Više nema ručnog popunjavanja frontmattera — dodajte film, seriju, knjigu, anime ili strip samo pretraživanjem njegovog imena:

1. Otvorite karticu **Library** iz ikone na traci (ili pokrenite `Open Library`).
2. Kliknite gumb **+** u gornjem desnom kutu stranice Library (ili pokrenite `Add content`).
3. Odaberite kategoriju, unesite **naslov** u okvir za pretraživanje i odaberite rezultat.
4. Kartica se trenutno stvara s posterom, godinom, žanrom, stvarateljima i ocjenom automatski popunjenim.

Gumb **Search** pored **+** pretražuje naslove koji su već u vašoj biblioteci.

Za **Manual** kategorije jednostavno unesite naslov i sami ispunite naslovnicu, godinu i ostala polja.

---

## Statistika

Kartica Library uključuje saživi odjeljak **Statistics** na vrhu:

- **Najbolji žanrovi** — rangirani po učestalosti u cijeloj vašoj biblioteci.
- **Najbolji stvaratelji** — rangirani po broju filmova i serija u kojima se pojavljuju.
- **Najbolje po kategoriji** — za svaku kategoriju (Movies, Series, Books, itd.), top 3 stavke po ocjeni s malim sličicama naslovnica.

---

## Otkrivanje duplikata

Library sprječava duplicirane unose provjerom polja `URL`:

- **Pri dodavanju** — ako bilješka s istim URL-om već postoji, otvara postojeću bilješku umjesto stvaranja duplikata.
- **Pronađi i ukloni duplikate** — pokrenite ovu naredbu iz palete za skeniranje svih bilješki, grupiranje po URL-u i selektivno uklanjanje duplikata putem modalnog prozora.

---

## Izvori

Svaka kategorija je vezana za izvor koji pokreće njezino pretraživanje:

| Izvor             | Vrste sadržaja  | API ključ                                                    |
| ----------------- | --------------- | ----------------------------------------------------------- |
| **OMDb**          | Filmovi, Serije | Potreban besplatni ključ — [omdbapi.com](https://www.omdbapi.com/apikey.aspx) |
| **Books**         | Knjige          | Open Library (bez ključa) + Google Books (opcionalni besplatni ključ). Rezultati se spajaju — Google Books prvi, Open Library ispod. |
| **RAWG**          | Igrice          | Potreban besplatni ključ — [rawg.io/apidocs](https://rawg.io/apidocs) |
| **Deezer**        | Glazba (albumi) | Nema                                                        |
| **Jikan**         | Anime           | Nema — besplatna neslužbena MyAnimeList API, ključ nije potreban |
| **Comic Vine**    | Stripovi        | Potreban besplatni ključ — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**        | Sve ostalo      | Nema — sami unosite naslov i ispunjavate polja              |

---

## Privatnost i korištenje mreže

Library je **offline-first**. Plugin kontaktira mrežu samo kada aktivno pretražujete naslov za dodavanje, i samo s pojmovima koje unosite:

| Usluga | Kada | Što se šalje | Zašto |
| --- | --- | --- | --- |
| `www.omdbapi.com` | Pretražujete kategoriju temeljenu na OMDb | Naslov koji unosite i vaš OMDb API ključ | Dohvaćanje metapodataka filma/serije (godina, žanrovi, glumačka postava, ocjena, poster, broj epizoda) |
| `openlibrary.org` | Pretražujete kategoriju Open Library | Naslov koji unosite | Dohvaćanje metapodataka knjige (autor, godine, teme, ID naslovnice) |
| `covers.openlibrary.org` | Kartica knjige ima naslovnicu | Open Library ID naslovnice | Učitavanje slike naslovnice |
| `www.googleapis.com` | Pretražujete kategoriju Google Books | Naslov koji unosite i vaš Google Books ključ | Dohvaćanje metapodataka knjige (autor, godine, kategorije, broj stranica, naslovnica, ISBN) |
| `api.rawg.io` | Pretražujete kategoriju RAWG igara | Naslov koji unosite i vaš RAWG ključ | Dohvaćanje metapodataka igre (godina, žanrovi, programer, naslovnica) |
| `api.deezer.com` | Pretražujete kategoriju Deezer glazbe | Album ili izvođač koji unosite | Dohvaćanje metapodataka albuma (izvođač, godina, žanrovi, broj pjesama, naslovnica) |
| `api.jikan.moe` | Pretražujete kategoriju animea | Naslov koji unosite | Dohvaćanje metapodataka animea (naslov, godina, žanrovi, epizode, MAL ocjena, sinopsis, poster) |
| `comicvine.gamespot.com` | Pretražujete kategoriju stripova | Naslov koji unosite i vaš Comic Vine ključ | Dohvaćanje metapodataka stripa (naslov, godina, izdavač, broj izdanja, naslovnica) |

Nikakvi drugi podaci ne napuštaju vaš vault. Plugin **nema telemetriju, nema analitiku i nema mehanizam samo-ažuriranja**. API ključevi (OMDb, Google Books, RAWG, Comic Vine) pohranjeni su samo u vašim lokalnim postavkama plugin-a i šalju se samo njihovim odgovarajućim uslugama. Slike naslovnica učitavaju se izravno s URL-ova koje vraća svaki izvor.

---

## Frontmatter shema

Plugin čita i piše u standardni YAML frontmatter. Bilješke se automatski stvaraju, ali je svako polje uredivo. `Source` i `Source ID` omogućuju pluginu naknadno osvježavanje metapodataka.

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

> **Automatsko ažuriranje serija:** Pokrenite `Refresh metadata for current note` (ili jednostavno otvorite bilješku) i plugin ažurira ukupni broj epizoda u `Progress` (npr., `25/42` u `25/50`) i broj `Season`, zadržavajući vaš broj pogledanih netaknutim.

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

## Veze grafana

Svaka bilješka sadržaja dobiva svojstvo `Related` u frontmatteru, koje se automatski održava ažurnim — tijelo bilješke se nikad ne dira:

```yaml
Related:
    - "[[Movie]]"
    - "[[Action]]"
    - "[[Sci-Fi]]"
    - "[[Christopher Nolan]]"
```

Ove veze povezuju vaše bilješke kroz zajedničke kategorije, žanrove i stvaratelje, tako da grafni pogled Obsidiana čisti čiste skupine. Pravi bilješka čvorišta se stvaraju za svaku kategoriju (npr. `Movie`) tako da se skupine prikazuju čak i skrivenim neriješenim vezama. Svojstvo se zapisuje kada se bilješka stvara i osvježava kad god se njezini metapodaci promijene — pokrenite `Rebuild graph links` samo ako želite prisiliti potpunu obnovu.

---

## Naredbe

| Naredba                              | Opis                                                                     |
| ------------------------------------ | ------------------------------------------------------------------------ |
| `Open Library`                       | Otvorite karticu galerije Library.                                       |
| `Add content`                        | Pretražite izvor i stvorite bilješku sadržaja (ili unesite naslov za Manual). |
| `Search your library`                | Fuzzy-pretraživanje i otvaranje bilo koje bilješke koja je već u vašoj biblioteci. |
| `Refresh metadata for current note`  | Ponovo dohvaća metapodatke za aktivnu bilješku; ažurira ukupne brojeve epizoda serija. |
| `Rebuild graph links`                | Povezuje svaku bilješku sadržaja s njezinom kategorijom, žanrovima i stvarateljima. |
| `Find & remove duplicates`           | Skenira sve bilješke po URL-u, prikazuje duplikate i uklanja odabrane.    |

---

## Doprinos i podrška

- **Pronašli ste grešku?** Otvorite [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues).
- **Imate ideju za značajku?** Pokrenite [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions).
- **Sviđa vam se plugin?** Razmislite o zvjezdici repozitorija kako biste pokazali svoju podršku!

---

## Hvala vam

Ako vam se ovaj plugin čini korisnim, razmislite o podršci njegovom razvoju:

| | Mreža | Adresa |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |

---
