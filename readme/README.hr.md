> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md) | **HR**

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
  Filmovi, serije, knjige, anime, stripovi, igre i glazba kao bilješke u Obsidianu, prikazani kao galerija naslovnica.
  <br />
  <a href="https://community.obsidian.md/plugins/library">Direktorij dodataka za Obsidian</a>
</p>

## Značajke

- Potražite naslov i dobijte bilješku s posterom, godinom, žanrom, autorima, glumcima i ocjenama.
- Pregledavajte knjižnicu kao kartice s naslovnicama, grupirane po kategorijama i poredane po nazivu, godini, ocjeni ili datumu.
- Označite epizode serije ili poglavlja knjige i ocijenite svaku; `Progress` i `My Rating` računaju se iz njih.
- Bilješke o filmovima i serijama prikazuju trailer, kadrove, trajanje i popis sezona.
- Žanrovi, autori i glumci su poveznice, pa njihove bilješke skupljaju svaki naslov u povratnim poveznicama i na grafu.
- Ploča statistike prikazuje ljestvice koje odaberete i ukupno vrijeme gledanja.
- Podijelite naslov kao sliku na X, Telegramu, Redditu i još šest mreža.
- Sinkronizirajte napredak animea s AniListom.
- Sučelje je prevedeno na sve jezike koje Obsidian podržava, a ovaj README na [30 jezika](./).

## Brzi početak

1. Instalirajte **Library** putem Postavke → Community plugins → Browse ili s [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).
2. U Postavke → Library dodajte kategoriju za svaku vrstu sadržaja: Filmovi, Serije, Knjige, Stripovi, Igre, Glazba, Anime, Ručno.
3. Unesite API ključeve koje trebaju vaši izvori (vidi dolje).
4. Otvorite karticu Biblioteka s bočne trake, pritisnite **+**, odaberite kategoriju i potražite naslov. Naslov koji je već u knjižnici otvara postojeću bilješku.

Vrijednost `Type` kategorije (na primjer `Movie`) određuje koje bilješke joj pripadaju, a njezina mapa gdje završavaju nove bilješke. Oboje je pod **Napredno** u postavkama kategorije.

## Izvori

| Kategorija | Izvor | Ključ |
| --- | --- | --- |
| Filmovi, serije | OMDb | [Besplatan ključ](https://www.omdbapi.com/apikey.aspx) |
| Knjige | Google Books + Open Library | Neobavezan [ključ za Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| Igre | RAWG + Steam | [Besplatan ključ za RAWG](https://rawg.io/apidocs); Steamu ne treba |
| Glazba | Deezer | Nije potreban |
| Anime | AniList | Nije potreban |
| Stripovi | Comic Vine | [Besplatan ključ](https://comicvine.gamespot.com/api/) |
| Sve ostalo | Ručno: polja ispunjavate sami | Nije potreban |

Traileri, kadrovi, trajanje i popisi sezona dolaze s Cinemete bez ključa. [Ključ za TMDB](https://www.themoviedb.org/settings/api) dodaje ocjene sezona i više kadrova.

## Napredak i ocjene

Zaglavlje bilješke serije navodi sezone, a svaka se sezona otvara u svoje epizode, s naslovima ako ih izvor ima. Označite epizodu ili cijelu sezonu kao pogledanu i ocijenite je od 1 do 10. `Progress` broji označene epizode, ocjena sezone je prosjek njezinih ocijenjenih epizoda, a `My Rating` je prosjek ocijenjenih sezona. Sezona bez ocijenjenih epizoda dobiva vlastitu ocjenu.

Anime radi na isti način, kao jedna sezona bez naslova epizoda.

Poglavlja knjige dolaze iz sadržaja izdanja na Open Library. Ako ga nema, **Dodaj poglavlja** u zaglavlju bilješke prima broj poglavlja ili jedan naslov po retku. Od tada `Progress` broji poglavlja umjesto stranica, a pročitane stranice prelaze u isti udio poglavlja.

Bilješke iz starijih verzija zadržavaju napredak. Dok ništa ne označite, prve epizode do broja u `Progress` prikazuju se kao pogledane.

## Statistika

Ploča na vrhu kartice Biblioteka prikazuje stupce odabrane u Postavke → Library → Statistika: tri najbolje ocijenjena naslova kategorije, tri najčešće vrijednosti svojstva (žanrovi, glumci ili bilo koje drugo) i sate provedene uz filmove, serije i anime. Ispod grafikona svaki se dan pojavi jedna usporedba, na primjer: Apollo 11 mogao je letjeti na Mjesec i natrag 8 puta.

## Veze u grafu

`Genre`, `Creator` i `Cast` sadrže poveznice poput `[[Christopher Nolan]]`, pa bilješka žanra ili osobe navodi njezine naslove u povratnim poveznicama. Ručno upisana imena postaju poveznice kad se bilješka promijeni, a `Ponovo izgradi veze grafa` pretvara cijelu knjižnicu.

## Dijeljenje i AniList

**Podijeli** u zaglavlju bilješke crta karticu s posterom, naslovom, godinom, žanrom, glumcima, ocjenama i vašom ocjenom. Na računalu slika ide u međuspremnik, a odabrana mreža otvara se s opisom, pa sliku samo zalijepite u objavu. Na mobitelu slika ide u sustavni izbornik za dijeljenje. Sliku ili opis možete i kopirati, a sliku spremiti u trezor.

Za sinkronizaciju animea registrirajte klijent na [anilist.co/settings/developer](https://anilist.co/settings/developer) s URL-om preusmjeravanja `https://anilist.co/api/v2/oauth/pin`. Zalijepite Client ID u Postavke → Library → AniList sinkronizacija, kliknite **Poveži** i zalijepite token koji AniList prikaže. `Pošalji trenutnu bilješku na AniList` šalje napredak, status i ocjenu. `Preuzmi napredak s AniLista` ažurira bilješke, nikad ne vraća napredak unatrag i ne dira `My Rating`. Sinkroniziraju se samo bilješke sa `Source: anilist`.

Iste se bilješke sinkroniziraju s MyAnimeListom. Izradite klijent na [myanimelist.net/apiconfig](https://myanimelist.net/apiconfig) s adresom preusmjeravanja `http://localhost`, zalijepite njegov Client ID (i Client Secret, ako ga ima) u Postavke → Library → MyAnimeList sinkronizacija, kliknite **Poveži** i zalijepite adresu koju otvori preglednik. Zapis MyAnimeLista za svaki naslov dodatak pronalazi preko AniLista i sam obnavlja token. `Pošalji trenutnu bilješku na MyAnimeList` i `Preuzmi napredak s MyAnimeLista` rade kao njihovi parnjaci za AniList.

## Frontmatter

Svaka kartica je bilješka, a sve što dodatak zna o njoj nalazi se u frontmatteru:

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
      # ...još 7 epizoda
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

Kod serije je `Runtime` trajanje jedne epizode. Knjige imaju i `ISBN` te poglavlja drže u `Chapters` s istim poljima `title`, `watched` i `my_rating`; anime ima `Rating AniList` i `Status`. Svojstvo naslovnice može se preimenovati u postavkama, na primjer u `image`.

Osvježavanje ispunjava samo prazna polja, pa vrijednosti koje uredite ostaju. Ono također ažurira ukupan broj epizoda u `Progress` i dodaje nove sezone i naslove epizoda.

## Privatnost i mreža

Vaša knjižnica su obične bilješke i radi izvanmrežno. Dodatak se spaja na mrežu kad pretražujete, osvježavate, sinkronizirate ili dijelite; kad otvorite bilješku iz knjižnice, najviše jednom u 5 minuta po bilješci; i jednom nakon ažuriranja ili promjene ključa, da ispuni nova polja. Nema telemetrije, analitike ni samoažuriranja. API ključevi ostaju u lokalnim postavkama dodatka i idu samo svojoj usluzi.

| Poslužitelj | Kada | Što se šalje |
| --- | --- | --- |
| `www.omdbapi.com` | Pretraga filmova i serija | Naslov ili IMDb id, OMDb ključ |
| `openlibrary.org` | Pretraga knjiga; traženje poglavlja kad dodate ili otvorite knjigu | Naslov i autor, ISBN ili id djela |
| `covers.openlibrary.org` | Naslovnice knjiga | Id naslovnice |
| `www.googleapis.com` | Pretraga knjiga | Naslov, ključ za Google Books |
| `api.rawg.io` | Pretraga igara | Naslov, ključ za RAWG |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | Pretraga igara i naslovnice | Naslov ili id Steam aplikacije |
| `api.deezer.com` | Pretraga glazbe | Album ili izvođač |
| `graphql.anilist.co` | Pretraga animea; sinkronizacija s AniListom; id-jevi MyAnimeLista za sinkronizaciju | Naslov; vaš token, napredak, status i ocjena; id-jevi AniLista |
| `anilist.co` | Kliknete **Poveži** | Client ID, otvara se u pregledniku |
| `myanimelist.net` | Kliknete **Poveži** za MyAnimeList; obnova tokena | Client ID i tajna, autorizacijski kod, token za obnovu |
| `api.myanimelist.net` | Sinkronizacija s MyAnimeListom | Vaš token, napredak, status i ocjena |
| `s4.anilist.co` | Banneri animea | CDN putanja |
| `comicvine.gamespot.com` | Pretraga stripova | Naslov, ključ za Comic Vine |
| `v3-cinemeta.strem.io` | Dodavanje ili osvježavanje filma ili serije | IMDb id |
| `images.metahub.space`, `episodes.metahub.space` | Kadrovi | IMDb id, brojevi sezone i epizode |
| `api.themoviedb.org`, `image.tmdb.org` | Dodavanje ili osvježavanje filma ili serije, ako postavite ključ za TMDB | IMDb id i ključ za TMDB; putanja slike |
| `i.ytimg.com` | Kadrovi trailera | Id videa |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Otvaranje bilješke s trailerom | Id videa |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Kliknete gumb za dijeljenje | Opis: naslov, vaša ocjena, poveznica na izvor. Slika ostaje na vašem uređaju |

## Naredbe

| Naredba | Što radi |
| --- | --- |
| `Otvori biblioteku` | Otvara karticu Biblioteka |
| `Dodaj sadržaj` | Pretražuje izvor i stvara bilješku |
| `Pretraži svoju biblioteku` | Pronalazi i otvara bilješku iz knjižnice |
| `Osvježi metapodatke za trenutnu bilješku` | Ponovno dohvaća aktivnu bilješku |
| `Osvježi metapodatke za sve bilješke` | Ponovno dohvaća svaku bilješku iz knjižnice, jednu po jednu |
| `Ponovo izgradi veze grafa` | Pretvara `Genre`, `Creator` i `Cast` u poveznice |
| `Pronađi i ukloni duplikate` | Navodi bilješke s istim URL-om i uklanja odabrane |
| `Podijeli trenutnu bilješku` | Otvara karticu za dijeljenje |
| `Pošalji trenutnu bilješku na AniList` | Šalje napredak, status i ocjenu |
| `Preuzmi napredak s AniLista` | Ažurira bilješke iz vašeg AniList popisa |
| `Pošalji trenutnu bilješku na MyAnimeList` | Šalje napredak, status i ocjenu |
| `Preuzmi napredak s MyAnimeLista` | Ažurira bilješke iz vašeg MyAnimeList popisa |

## Podrška

Pogreške prijavite u [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues), a ideje predložite u [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions). Dodatak je objavljen pod [MIT licencom](../LICENSE).

Ako vam je dodatak koristan, možete ga podržati:

| | Mreža | Adresa |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
