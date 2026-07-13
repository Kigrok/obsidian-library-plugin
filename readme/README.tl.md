> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

<p align="center">
  <img src="../banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Library</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.2.1-blue" alt="Bersyon">
  <img src="https://img.shields.io/github/downloads/Kigrok/obsidian-library-plugin/total?color=brightgreen" alt="Mga Download">
  <img src="https://img.shields.io/badge/Obsidian-v1.8.7+-purple" alt="Bersyon ng Obsidian">
  <img src="https://img.shields.io/github/license/Kigrok/obsidian-library-plugin?color=orange" alt="Lisensya">
</p>

<p align="center">
  <b>Organize ang iyong mga pelikula, serye, libro, at iba pa sa isang visual gallery — mismo sa loob ng Obsidian.</b>
  <br />
  Maghanap at magdagdag ng mga pamagat sa app, awtomatikong kunin ang metadata, subaybayan ang progreso, at ikonekta ang lahat sa iyong graph.
</p>

<p align="center">
  <a href="https://community.obsidian.md/plugins/library">Tingnan sa Obsidian Community Plugins directory</a>
</p>

---

## Mga Pangunahing Tampok

- **Visual Card Grid** — Isang nakalaang Library tab na nag-render ng iyong collection bilang isang gallery ng mga cover-art card.
- **Built-in na Paghahanap** — Maghanap at magdagdag ng mga pamagat mismo sa loob ng app: OMDb para sa mga pelikula at serye, Open Library o Google Books para sa mga libro, RAWG para sa mga laro, Deezer para sa musika, AniList para sa anime, Comic Vine para sa mga komiks.
- **Matalinong Pagsubaybay sa Serye** — Awtomatikong kinukuha ang bilang ng mga season at episode at pinapanatili ang sync.
- **Mga Tagapagpahiwatig ng Progreso** — Ang mga visual na progress bar sa mga card at header ng note ay nagpapakita kung gaano ka na karami ang napanood o nabasa.
- **Mamahaling mga Header ng Note** — Bawat note ng content ay nakakakuha ng auto-generated header na may lahat ng pangunahing metadata.
- **Mga Custom na Kategorya** — Lumikha ng mga kategorya para sa mga Pelikula, Serye, Anime, Komiks, Libro, Laro, Musika, o anumang iba pa sa pamamagitan ng manual na source.
- **Mga Link sa Graph** — Ang `Related` na frontmatter property ay nag-uugnay sa bawat note sa kanyang kategorya, mga genre, at mga creator, na awtomatikong pinapanatili ang sync para sa isang magandang graph.
- **Share Cards** — Gawing naibabahaging card image ang anumang content note (poster, pamagat, taon, genre, IMDb score, at ang iyong rating) at i-post ito sa X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, o Pinterest — ibahagi ito nang diretso sa mga app ng iyong device, o kopyahin/i-save ang larawan upang gamitin kahit saan.
- **AniList Sync** — I-push ang iyong anime progress, status, at rating nang direkta sa iyong AniList account, o i-pull ang iyong listahan pabalik sa iyong mga note.
- **Pag-sort at Pag-fold** — I-sort ang mga card ayon sa pangalan, taon, rating, o petsa; i-fold ang anumang kategorya.
- **Mga Estadistika** — Mga nangungunang genre, nangungunang mga creator (mga pelikula at serye lamang), at mga nangungunang item bawat kategorya na may medal rankings.
- **Pag-detect ng Duplicate** — Awtomatikong pinipigilan ang pagdaragdag ng parehong pamagat dalawang beses sa pamamagitan ng URL. Ang isang built-in na command ay naghahanap at nag-aalis ng mga umiiral na duplicate.
- **Multi-lingguwal** — 31 wika.

---

## Mabilis na Simulan

### 1. Pag-install

I-install ang **Library** mula sa [Obsidian Community Plugins directory](https://community.obsidian.md/plugins/library) (Mga Setting > Community plugins > Maghanap ng "Library"), o i-install ito nang mano-mano sa pamamagitan ng [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).

### 2. Pangunahing Pag-setup

1. Pumunta sa **Mga Setting** > **Library**.
2. Idagdag ang iyong mga **Kategorya** — pumili ng isang pre-defined na uri (Pelikula, Serye, Libro, Komiks, Laro, Musika, Anime, o Manual) mula sa dropdown at i-click ang **Add category**. Bawat kategorya ay may display name (naisalin sa iyong wika), isang `Type` na halaga (laging Ingles, hal. `Movie`), isang source, at isang opsyonal na folder para sa pag-iimbak ng mga note.
3. _(Opsyonal)_ Ilagay ang mga API key para sa mga serbisyo na iyong ginagamit: [OMDb](https://www.omdbapi.com/apikey.aspx) para sa mga pelikula/serye, [RAWG](https://rawg.io/apidocs) para sa mga laro, [Comic Vine](https://comicvine.gamespot.com/api/) para sa mga komiks. Ang Anime (AniList) at Musika (Deezer) ay hindi nangangailangan ng key.

### 3. Magdagdag ng Card sa Pamamagitan ng Pamagat

Wala nang pag-fill ng frontmatter nang mano-mano — magdagdag ng pelikula, serye, libro, anime, o komiks sa pamamagitan lamang ng paghahanap ng pangalan nito:

1. Buksan ang **Library** tab mula sa ribbon icon (o patakbuhin ang `Open Library`).
2. I-click ang **+** na button sa kanang itaas ng Library page (o patakbuhin ang `Add content`).
3. Pumili ng kategorya, i-type ang **pamagat** sa search box, at pumili ng resulta.
4. Awtomatikong nalilikha ang isang card, na may poster, taon, genre, creator, at rating na automatic na napupunan.

Ang **Search** button sa tabi ng **+** ay naghahanap ng mga pamagat na nasa iyong library na.

Para sa mga **Manual** na kategorya, i-type lamang ang pamagat at punan ang cover, taon, at iba pang mga field mismo.

---

## Mga Estadistika

Ang Library tab ay may kasamang isang nakufold na **Mga Estadistika** na seksyon sa itaas:

- **Mga Nangungunang Genre** — naka-rank ayon sa dalas sa buong iyong library.
- **Mga Nangungunang Creator** — naka-rank ayon sa bilang ng mga pelikula at serye kung saan sila lumalabas.
- **Nangungunang Bawat Kategorya** — para sa bawat kategorya (Pelikula, Serye, Libro, atbp.), ang TOP 3 na item ayon sa rating na may maliliit na cover thumbnail.

---

## Pag-detect ng Duplicate

Ang Library ay pumipigil ng mga duplicate na entry sa pamamagitan ng pag-check ng `URL` field:

- **Sa pagdaragdag** — kung ang isang note na may parehong URL ay mayroon nang umiiral, binubuksan nito ang umiiral na note sa halip na lumikha ng duplicate.
- **Hanapin at Alisin ang mga Duplicate** — patakbuhin ang command na ito mula sa palette upang i-scan ang lahat ng note, i-group ayon sa URL, at piliin ang mga duplicate na aalisin sa pamamagitan ng isang modal.

---

## Mga Source

Bawat kategorya ay naka-link sa isang source na nagbibigay ng kanyang paghahanap:

| Source           | Mga uri ng content   | API key                                                      |
| ---------------- | --------------- | ----------------------------------------------------------- |
| **OMDb**         | Pelikula, Serye  | Kailangan ng libreng key — [omdbapi.com](https://www.omdbapi.com/apikey.aspx) |
| **Books**        | Libro           | Open Library (walang key) + Google Books (opsyonal na libreng key). Pinagsasama ang mga resulta — Google Books muna, Open Library sa ibaba. |
| **RAWG**         | Laro           | Kailangan ng libreng key — [rawg.io/apidocs](https://rawg.io/apidocs) |
| **Deezer**       | Musika (mga album)  | Wala                                                        |
| **AniList**        | Anime           | Wala — libreng AniList GraphQL API, walang kailangang key       |
| **Comic Vine**   | Komiks          | Kailangan ng libreng key — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**       | Anumang iba pa   | Wala — i-type mo ang pamagat at punan mo ang mga field          |

---

## Pribasiya at Paggamit ng Network

Ang Library ay **offline-muna**. Ang plugin ay nakikipag-ugnayan lamang sa network kapag ikaw ay aktibong naghahanap ng isang pamagat para idagdag, at lamang sa mga search term na iyong tina-type:

| Serbisyo | Kailan | Ipinapadala | Bakit |
| --- | --- | --- | --- |
| `www.omdbapi.com` | Naghahanap ka ng isang OMDb-backed na kategorya | Ang pamagat na iyong tina-type at ang iyong OMDb API key | Kunin ang metadata ng pelikula/serye (taon, genre, cast, rating, poster, bilang ng episode) |
| `openlibrary.org` | Naghahanap ka ng isang Open Library na kategorya | Ang pamagat na iyong tina-type | Kunin ang metadata ng libro (may-akda, taon, mga paksa, cover id) |
| `covers.openlibrary.org` | Ang book card ay may cover | Ang Open Library cover id | I-load ang larawan ng cover |
| `www.googleapis.com` | Naghahanap ka ng isang Google Books na kategorya | Ang pamagat na iyong tina-type at ang iyong Google Books key | Kunin ang metadata ng libro (may-akda, taon, mga kategorya, bilang ng pahina, cover, ISBN) |
| `api.rawg.io` | Naghahanap ka ng isang RAWG game na kategorya | Ang pamagat na iyong tina-type at ang iyong RAWG key | Kunin ang metadata ng laro (taon, genre, developer, cover) |
| `api.deezer.com` | Naghahanap ka ng isang Deezer music na kategorya | Ang album o artist na iyong tina-type | Kunin ang metadata ng album (artist, taon, genre, bilang ng track, cover) |
| `graphql.anilist.co` | Naghahanap ka ng isang anime na kategorya | Ang pamagat na iyong tina-type | Kunin ang metadata ng anime (pamagat, taon, genre, mga episode, AniList score, studio, poster) |
| `graphql.anilist.co` | Nagpapatakbo ka ng isang AniList sync command | Ang iyong AniList access token at ang progreso, status, at rating ng note | Basahin o i-update ang iyong AniList anime list |
| `comicvine.gamespot.com` | Naghahanap ka ng isang komiks na kategorya | Ang pamagat na iyong tina-type at ang iyong Comic Vine key | Kunin ang metadata ng komiks (pamagat, taon, publisher, bilang ng issue, cover) |

Walang ibang datos na lumalabas sa iyong vault kailanman. Ang plugin ay **walang telemetry, walang analytics, at walang mekanismo ng self-update**. Ang mga API key (OMDb, Google Books, RAWG, Comic Vine) ay naka-imbak lamang sa iyong lokal na plugin settings at ipinapadala lamang sa kanilang kaukulang mga serbisyo. Ang mga larawan ng cover ay naglo-load nang direkta mula sa mga URL na ibinabalik ng bawat source.

---

## Frontmatter Schema

### Pelikula

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

### Serye

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

> **Awtomatikong pag-update ng serye:** Patakbuhin ang `Refresh metadata for current note` (o buksan lang ang note) at ia-update ng plugin ang kabuuang bilang ng episode sa `Progress` (hal., `25/42` patungong `25/50`) at ang bilang ng `Season`, habang pinapanatili ang iyong napanood na bilang.

### Aklat

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

### Komiks

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

## Mga Link sa Graph

Bawat note ng content ay nakakakuha ng isang `Related` na frontmatter property na awtomatikong pinapanatili ang pag-update — hindi kailanman hinahawakan ang katawan ng note:

```yaml
Related:
    - "[[Movie]]"
    - "[[Action]]"
    - "[[Sci-Fi]]"
    - "[[Christopher Nolan]]"
```

Ang mga link na ito ay nag-uugnay sa iyong mga note sa pamamagitan ng mga ibinahaging kategorya, genre, at mga creator, kaya ang Obsidian graph view ay nabubuo ng mga malinis na cluster. Ang isang totoong hub note ay nililikha para sa bawat kategorya (hal. `Movie`) upang ang mga cluster ay makita kahit na nakatago ang mga hindi nalutas na link. Ang property ay isinusulat kapag ang isang note ay nililikha at na-update kapag nagbago ang kanyang metadata — patakbuhin lamang ang `Rebuild graph links` kung nais mong pilitin ang isang buong rebuild.

---

## Pagbabahagi

Bawat content note ay nakakakuha ng **Share** button sa header nito (o patakbuhin ang `Share current note`). Nagre-render ito ng card image — poster, pamagat, taon, genre, IMDb/AniList score, at ang iyong rating — na maaari mong i-post kahit saan:

- **Sa mobile** — binubuksan ng **Share…** button ang native share sheet ng iyong device na nakakabit nang direkta ang card image, kaya maaari mo itong ipadala nang diretso sa anumang app.
- **X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, Pinterest** — binubuksan ang composer ng network na may prefilled na caption (pamagat, ang iyong rating, ang source link, at isang link sa plugin na ito). Kinokopya nang sabay ang card image sa iyong clipboard, kaya i-paste mo na lang ito (Ctrl/Cmd+V) sa post.
- **Copy image / Copy text / Save image** — kopyahin ang na-render na card o ang caption sa clipboard, o i-save ang larawan sa attachment folder ng iyong vault upang i-attach nang mano-mano.

Ang pagbabahagi ay ganap na lokal: ang card ay iginuguhit sa loob ng app mula sa sariling metadata at cover ng note. Walang ini-upload — binubuksan lamang ng plugin ang composer URL na iyong pinili sa iyong browser.

---

## AniList Sync

Panatilihing naka-sync ang iyong anime progress sa iyong [AniList](https://anilist.co) account.

**Pag-setup** — sa **Mga Setting → Library → AniList sync**:

1. Magrehistro ng libreng API client sa [anilist.co/settings/developer](https://anilist.co/settings/developer), na ang redirect URL ay nakatakda sa `https://anilist.co/api/v2/oauth/pin`.
2. I-paste ang **Client ID**, i-click ang **Connect**, at mag-authorize.
3. Magpapakita sa iyo ang AniList ng isang access token — i-paste ito sa plugin. I-click ang **Test connection** upang kumpirmahin.

Pagkatapos, gamitin ang mga command:

- `Push current note to AniList` — ipinapadala ang progreso (mga napanood na episode), status (watching / completed / planning), at ang iyong rating ng aktibong anime note sa iyong AniList list.
- `Pull progress from AniList` — kinukuha ang iyong AniList anime list at ina-update ang mga tumutugmang note. Ang pull ay **forward-only**: hindi nito kailanman ibinababa ang isang note na mas nauna na nang lokal o kumpleto na, at hindi nito ginagalaw ang iyong personal na `My Rating`.

Ang mga note lamang na may `Source: anilist` (idinagdag sa pamamagitan ng AniList anime source) ang sini-sync. Ang iyong token ay naka-imbak lokal sa plugin settings at ipinapadala lamang sa AniList.

---

## Mga Command

| Command                              | Paglalarawan                                                              |
| ------------------------------------ | ----------------------------------------------------------------------- |
| `Open Library`                       | Buksan ang Library gallery tab.                                           |
| `Add content`                        | Maghanap ng source at lumikha ng content note (o mag-type ng pamagat para sa Manual). |
| `Search your library`                | Fuzzy-search at buksan ang anumang note na nasa iyong library na.                 |
| `Refresh metadata for current note`  | Muling kunin ang metadata para sa aktibong note; ina-update ang bilang ng mga episode ng serye.   |
| `Rebuild graph links`                | Ikonekta ang bawat content note sa kanyang kategorya, genre, at mga creator.          |
| `Find & remove duplicates`           | I-scan ang lahat ng note ayon sa URL, ipakita ang mga duplicate, at alisin ang mga napili.       |
| `Share current note`                 | I-render ang note bilang card image at ibahagi ito sa X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, o Pinterest. |
| `Push current note to AniList`        | Ipadala ang progreso, status, at rating ng aktibong anime note sa iyong AniList account. |
| `Pull progress from AniList`          | Kunin ang iyong AniList list at i-update ang mga tumutugmang note (forward-only). |

---

## Pag-aambag at Suporta

- **Nakahanap ng bug?** Magbukas ng [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues).
- **May ideya para sa feature?** Magsimula ng [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions).
- **Gusto mo ang plugin?** Isaalang-alang ang pagbibigay ng star sa repository upang ipakita ang iyong suporta!

---

## Salamat

Kung nakita mo ang plugin na ito na kapaki-pakinabang, isaalang-alang ang pagsuporta sa pag-unlad nito:

| | Network | Address |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |

---
