> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

<p align="center">
  <img src="../banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Library</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.3.2-blue" alt="Version">
  <img src="https://img.shields.io/github/downloads/Kigrok/obsidian-library-plugin/total?color=brightgreen" alt="Downloads">
  <img src="https://img.shields.io/badge/Obsidian-v1.8.7+-purple" alt="Obsidian Version">
  <img src="https://img.shields.io/github/license/Kigrok/obsidian-library-plugin?color=orange" alt="License">
</p>

<p align="center">
  Film, seri, buku, anime, komik, game lan musik minangka cathetan ing Obsidian, ditampilake kaya galeri kertu sampul.
  <br />
  <a href="https://community.obsidian.md/plugins/library">Direktori plugin Obsidian</a>
</p>

## Fitur

- Goleki judhul lan entuk cathetan sing wis diisi poster, taun, genre, pangripta, pemain lan rating.
- Deleng perpustakaan minangka kertu sampul, diklompokake miturut kategori lan diurutake miturut jeneng, taun, rating utawa tanggal.
- Centhang episode seri utawa bab buku lan wenehi biji saben siji; `Progress` lan `My Rating` diitung saka kuwi.
- Cathetan film lan seri nampilake trailer, gambar, durasi lan dhaptar musim.
- Genre, pangripta lan aktor iku pranala, mula cathetane nglumpukake saben judhul ing backlink lan graf.
- Panel statistik nampilake dhaptar paling dhuwur sing sampeyan pilih lan total wektu nonton.
- Bagi judhul minangka gambar kertu menyang X, Telegram, Reddit lan enem jaringan liyane.
- Sinkronake kemajuan anime karo AniList.
- Antarmuka wis diterjemahake menyang kabeh basa sing didhukung Obsidian, lan README iki ana ing [30 basa](./).

## Wiwitan cepet

1. Pasang **Library** saka Settings → Community plugins → Browse, utawa saka [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).
2. Ing Settings → Library, tambahake kategori kanggo saben jinis isi: Film, Seri, Buku, Komik, Game, Musik, Anime, Manual.
3. Lebokake kunci API sing dibutuhake sumber sampeyan (deleng ing ngisor).
4. Bukak tab "Pustaka" saka ribbon, pencet **+**, pilih kategori lan goleki judhul. Judhul sing wis ana ing perpustakaan mbukak cathetan sing wis ana.

Nilai `Type` kategori (umpamane `Movie`) nemtokake cathetan endi sing kalebu, lan folder-e nemtokake ing ngendi cathetan anyar disimpen. Loro-lorone ana ing **Lanjut** ing setelan kategori.

## Sumber

| Kategori | Sumber | Kunci |
| --- | --- | --- |
| Film, seri | OMDb | [Kunci gratis](https://www.omdbapi.com/apikey.aspx) |
| Buku | Google Books + Open Library | [Kunci Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) opsional |
| Game | RAWG + Steam | [Kunci RAWG gratis](https://rawg.io/apidocs); Steam ora butuh |
| Musik | Deezer | Ora perlu |
| Anime | AniList | Ora perlu |
| Komik | Comic Vine | [Kunci gratis](https://comicvine.gamespot.com/api/) |
| Liyane | Manual: sampeyan ngisi kolom dhewe | Ora perlu |

Trailer, gambar, durasi lan dhaptar musim teka saka Cinemeta tanpa kunci. [Kunci TMDB](https://www.themoviedb.org/settings/api) nambahi rating musim lan luwih akeh gambar.

## Kemajuan lan rating

Header cathetan seri nampilake dhaptar musim, lan saben musim mbukak dhaptar episode, karo judhule yen sumber nduweni. Centhang episode utawa kabeh musim minangka wis ditonton lan wenehi biji 1 nganti 10. `Progress` ngitung episode sing dicenthang, biji musim yaiku rata-rata episode sing wis dibiji, lan `My Rating` yaiku rata-rata musim sing wis dibiji. Musim sing ora ana episode dibiji bisa entuk biji dhewe.

Anime uga padha, minangka siji musim tanpa judhul episode.

Bab buku dijupuk saka daftar isi salah siji edisi ing Open Library. Yen ora ketemu, **Tambahake bab** ing header cathetan nampa cacahe bab utawa siji judhul saben baris. Sabanjure `Progress` ngitung bab tinimbang kaca, lan kaca sing wis diwaca dipindhah dadi bagean bab sing padha.

Cathetan saka versi lawas tetep nyimpen kemajuane. Sadurunge sampeyan nyenthang apa-apa, episode kawitan nganti cacah ing `Progress` ditampilake wis ditonton.

## Statistik

Panel ing dhuwur tab "Pustaka" nampilake kolom sing sampeyan pilih ing Settings → Library → Statistik: telung judhul kanthi rating paling dhuwur ing kategori, telung nilai sing paling kerep metu ing properti (genre, aktor utawa liyane), lan jam sing dienggo nonton film, seri lan anime. Ing ngisor grafik saben dina ana siji perbandhingan, contone: Apollo 11 bisa mabur menyang Rembulan lan bali 8 kali.

## Pranala graf

`Genre`, `Creator` lan `Cast` isine pranala kaya `[[Christopher Nolan]]`, mula cathetan genre utawa wong nampilake judhule ing backlink. Jeneng sing diketik tangan dadi pranala nalika cathetan owah, lan `Bangun maneh tautan graf` ngowahi kabeh perpustakaan.

## Nuduhake lan AniList

**Bagi** ing header cathetan nggambar kertu karo poster, judhul, taun, genre, pemain, rating lan biji sampeyan. Ing desktop gambar mlebu clipboard lan jaringan sing sampeyan pilih mbukak karo katrangan, dadi sampeyan mung nempel gambar ing kiriman. Ing HP gambar dikirim menyang menu bagi sistem. Sampeyan uga bisa nyalin gambar utawa katrangan, utawa nyimpen gambar.

Kanggo nyinkronake anime, daftarake klien ing [anilist.co/settings/developer](https://anilist.co/settings/developer) karo redirect URL `https://anilist.co/api/v2/oauth/pin`. Tempel Client ID ing Settings → Library → Sinkronisasi AniList, klik **Sambungake**, banjur tempel token sing ditampilake AniList. `Kirim cathetan saiki menyang AniList` ngirim kemajuan, status lan biji. `Tarik kemajuan saka AniList` nganyari cathetan sampeyan, ora tau mundurake kemajuan lan ora ngowahi `My Rating`. Mung cathetan sing nduweni `Source: anilist` sing disinkronake.

## Frontmatter

Saben kertu iku cathetan, lan kabeh sing dingerteni plugin ana ing frontmatter:

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
      # ...7 episode liyane
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

Kanggo seri, `Runtime` yaiku durasi siji episode. Buku uga nduweni `ISBN` lan nyimpen bab ing `Chapters` karo kolom sing padha `title`, `watched` lan `my_rating`; anime nduweni `Rating AniList` lan `Status`. Jeneng properti sampul bisa diganti ing setelan, umpamane dadi `image`.

Nyegerake mung ngisi kolom sing kosong, mula nilai sing sampeyan owahi tetep ana. Uga nganyari total episode ing `Progress` lan nambahi musim lan judhul episode anyar.

## Privasi lan jaringan

Perpustakaan sampeyan mung cathetan biasa lan bisa mlaku offline. Plugin mung online nalika sampeyan nggoleki, nyegerake, nyinkronake utawa nuduhake; nalika mbukak cathetan perpustakaan, paling akeh sepisan saben 5 menit kanggo saben cathetan; lan sepisan sawise nganyari utawa ngganti kunci, kanggo ngisi kolom anyar. Ora ana telemetri, analitik utawa nganyari dhewe. Kunci API tetep ing setelan lokal plugin lan mung dikirim menyang layanane dhewe.

| Host | Kapan | Apa sing dikirim |
| --- | --- | --- |
| `www.omdbapi.com` | Nggoleki film lan seri | Judhul utawa IMDb id, kunci OMDb |
| `openlibrary.org` | Nggoleki buku; nggoleki bab nalika nambah utawa mbukak buku | Judhul lan pangarang, ISBN utawa id karya |
| `covers.openlibrary.org` | Sampul buku | Id sampul |
| `www.googleapis.com` | Nggoleki buku | Judhul, kunci Google Books |
| `api.rawg.io` | Nggoleki game | Judhul, kunci RAWG |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | Nggoleki game lan sampul | Judhul utawa id aplikasi Steam |
| `api.deezer.com` | Nggoleki musik | Album utawa artis |
| `graphql.anilist.co` | Nggoleki anime; sinkronisasi AniList | Judhul; token, kemajuan, status lan biji sampeyan |
| `anilist.co` | Sampeyan ngeklik **Sambungake** | Client ID, dibukak ing browser |
| `s4.anilist.co` | Banner anime | Path CDN |
| `comicvine.gamespot.com` | Nggoleki komik | Judhul, kunci Comic Vine |
| `v3-cinemeta.strem.io` | Nambah utawa nyegerake film utawa seri | IMDb id |
| `images.metahub.space`, `episodes.metahub.space` | Gambar | IMDb id, nomer musim lan episode |
| `api.themoviedb.org`, `image.tmdb.org` | Nambah utawa nyegerake film utawa seri, yen kunci TMDB disetel | IMDb id lan kunci TMDB; path gambar |
| `i.ytimg.com` | Gambar trailer | Id video |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Mbukak cathetan sing ana trailer | Id video |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Sampeyan ngeklik tombol bagi | Katrangan: judhul, biji sampeyan, pranala sumber. Gambar tetep ing piranti sampeyan |

## Prentah

| Prentah | Gunane |
| --- | --- |
| `Bukak pustaka` | Mbukak tab "Pustaka" |
| `Tambahake konten` | Nggoleki ing sumber lan nggawe cathetan |
| `Goleki ing pustakamu` | Nemokake lan mbukak cathetan perpustakaan |
| `Anyari metadata catetan saiki` | Njupuk maneh data cathetan aktif |
| `Anyari metadata kabeh catetan` | Njupuk maneh data saben cathetan perpustakaan, siji-siji |
| `Bangun maneh tautan graf` | Ngowahi `Genre`, `Creator` lan `Cast` dadi pranala |
| `Goleki lan copot duplikat` | Nampilake cathetan kanthi URL padha lan mbusak sing dipilih |
| `Bagi cathetan iki` | Mbukak kertu bagi |
| `Kirim cathetan saiki menyang AniList` | Ngirim kemajuan, status lan biji |
| `Tarik kemajuan saka AniList` | Nganyari cathetan saka dhaptar AniList sampeyan |

## Dhukungan

Laporake bug ing [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues) lan ide ing [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions). Plugin iki nganggo [lisensi MIT](../LICENSE).

Yen plugin iki migunani, sampeyan bisa ndhukung:

| | Jaringan | Alamat |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
