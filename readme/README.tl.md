> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

<p align="center">
  <img src="../banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Library</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.3.1-blue" alt="Bersyon">
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
- **Built-in na Paghahanap** — Maghanap at magdagdag ng mga pamagat mismo sa loob ng app: OMDb para sa mga pelikula at serye, Open Library o Google Books para sa mga libro, RAWG/Steam para sa mga laro, Deezer para sa musika, AniList para sa anime, Comic Vine para sa mga komiks.
- **Matalinong Pagsubaybay sa Serye** — Awtomatikong kinukuha ang bilang ng mga season at episode at pinapanatili ang sync.
- **Mga Tagapagpahiwatig ng Progreso** — Ang mga visual na progress bar sa mga card at header ng note ay nagpapakita kung gaano ka na karami ang napanood o nabasa.
- **Mamahaling mga Header ng Note** — Bawat note ng content ay nakakakuha ng auto-generated header na may lahat ng pangunahing metadata.
- **Mga Trailer, Still at Season** — Ang mga tala ng pelikula at serye ay nagpapakita ng naka-embed na YouTube/Vimeo trailer, isang hanay ng mga still, at ang tagal; ang mga serye ay mayroon ding listahan ng season na may bilang ng episode, rating, at trailer ng bawat season.
- **Mga Custom na Kategorya** — Lumikha ng mga kategorya para sa mga Pelikula, Serye, Anime, Komiks, Libro, Laro, Musika, o anumang iba pa sa pamamagitan ng manual na source.
- **Mga Link sa Graph** — Ang mga genre, tagalikha, at artista ay naka-imbak bilang mga link sa sarili nilang `Genre`, `Creator`, at `Cast` na property, kaya tinitipon ng tala ng bawat genre, tagalikha, at artista ang mga pamagat nito sa mga backlink at ipinapakita ng graph ang lahat.
- **Share Cards** — Gawing naibabahaging card image ang anumang content note (poster, pamagat, taon, genre, IMDb score, at ang iyong rating) at i-post ito sa X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, o Pinterest — ibahagi ito nang diretso sa mga app ng iyong device, o kopyahin/i-save ang larawan upang gamitin kahit saan.
- **AniList Sync** — I-push ang iyong anime progress, status, at rating nang direkta sa iyong AniList account, o i-pull ang iyong listahan pabalik sa iyong mga note.
- **Pag-sort at Pag-fold** — I-sort ang mga card ayon sa pangalan, taon, rating, o petsa; i-fold ang anumang kategorya — mananatili itong naka-fold kahit i-restart.
- **Mga Estadistika** — Ikaw ang pipili ng mga column: ang mga pinakamataas ang rating sa anumang kategorya o ang pinakamadalas na value ng anumang property (genre, tagalikha, artista…), kasama ang chart ng oras ng panonood.
- **Pag-detect ng Duplicate** — Awtomatikong pinipigilan ang pagdaragdag ng parehong pamagat dalawang beses sa pamamagitan ng URL. Ang isang built-in na command ay naghahanap at nag-aalis ng mga umiiral na duplicate.
- **Multi-lingguwal** — ang interface ng plugin ay isinalin sa **bawat wikang sinusuportahan ng Obsidian** (70+), kaya lagi itong tugma sa wika ng iyong Obsidian. May buong salin ng README para sa 30 sa mga ito (tingnan ang language bar sa itaas).

---

## Mabilis na Simulan

### 1. Pag-install

I-install ang **Library** mula sa [Obsidian Community Plugins directory](https://community.obsidian.md/plugins/library) (Mga Setting > Community plugins > Maghanap ng "Library"), o i-install ito nang mano-mano sa pamamagitan ng [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).

### 2. Pangunahing Pag-setup

1. Pumunta sa **Mga Setting** > **Library**.
2. Idagdag ang iyong mga **Kategorya** — pumili ng isang pre-defined na uri (Pelikula, Serye, Libro, Komiks, Laro, Musika, Anime, o Manual) mula sa dropdown at i-click ang **Magdagdag ng kategorya**. Bawat kategorya ay may display name (naisalin sa iyong wika), isang `Type` na halaga (laging Ingles, hal. `Movie`), isang source, at isang opsyonal na folder para sa pag-iimbak ng mga note.
3. _(Opsyonal)_ Ilagay ang mga API key para sa mga serbisyo na iyong ginagamit: [OMDb](https://www.omdbapi.com/apikey.aspx) para sa mga pelikula/serye, [RAWG](https://rawg.io/apidocs) para sa mga laro, [Comic Vine](https://comicvine.gamespot.com/api/) para sa mga komiks, [TMDB](https://www.themoviedb.org/settings/api) para sa mga trailer, still at detalye ng season, at isang [Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) na key para sa paghahanap ng libro. Ang Anime (AniList), Musika (Deezer), at Steam ay hindi nangangailangan ng key.

### 3. Magdagdag ng Card sa Pamamagitan ng Pamagat

Wala nang pag-fill ng frontmatter nang mano-mano — magdagdag ng pelikula, serye, libro, anime, o komiks sa pamamagitan lamang ng paghahanap ng pangalan nito:

1. Buksan ang **Library** tab mula sa ribbon icon (o patakbuhin ang `Buksan ang aklatan`).
2. I-click ang **+** na button sa kanang itaas ng Library page (o patakbuhin ang `Magdagdag ng nilalaman`).
3. Pumili ng kategorya, i-type ang **pamagat** sa search box, at pumili ng resulta.
4. Awtomatikong nalilikha ang isang card, na may poster, taon, genre, creator, at rating na automatic na napupunan.

Ang **Maghanap sa iyong aklatan** button sa tabi ng **+** ay naghahanap ng mga pamagat na nasa iyong library na.

Para sa mga **Manual** na kategorya, i-type lamang ang pamagat at punan ang cover, taon, at iba pang mga field mismo.

---

## Mga Estadistika

Sa itaas ng tab na Aklatan, ipinapakita ng natitiklop na seksyong **Mga estadistika** ang mga column na pinili mo:

- **Top ng kategorya** — ang tatlong pinakamataas ang rating sa isang kategorya, may mga cover: *Mga nangungunang pelikula*, *Mga nangungunang aklat*, at iba pa. Nakaayos ayon sa `My Rating`, o sa `Rating IMDB` kung wala.
- **Top ng property** — ang tatlong pinakamadalas na value ng isang property sa buong library: *Mga nangungunang genre*, *Mga nangungunang tagalikha*, *Mga nangungunang artista*, o anumang ibang property, gaya ng *Nangunguna: Author*. Iisang value ang `Sci-Fi`, `sci-fi`, at `[[Sci-Fi]]`.
- **Oras ng panonood** — chart ng mga oras na ginugol sa mga pelikula, serye, at anime, kinuwenta mula sa `Runtime` at `Progress` ng bawat tala.

I-set up ito sa **Mga Setting → Library → Mga estadistika**: ipinapakita ng **Magdagdag ng top** ang iyong mga kategorya at ang mga property na nasa iyong mga tala, inaalis ng trash icon ang isang column, at itinatago ng isang toggle ang chart ng oras ng panonood. Lumalabas ang mga column ayon sa pagkakasunod ng pagdagdag mo; nagdadagdag din ng sariling top ang bagong kategorya.

Nananatiling naka-fold ang mga naka-fold na kategorya kahit i-restart.

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
| **Games**         | Laro           | RAWG (kailangan ng libreng key — [rawg.io/apidocs](https://rawg.io/apidocs)) + Steam (wala). Pinagsasama ang mga resulta — RAWG muna, Steam sa ibaba. |
| **Deezer**       | Musika (mga album)  | Wala                                                        |
| **AniList**        | Anime           | Wala — libreng AniList GraphQL API, walang kailangang key       |
| **Comic Vine**   | Komiks          | Kailangan ng libreng key — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**       | Anumang iba pa   | Wala — i-type mo ang pamagat at punan mo ang mga field          |

Ang mga tala ng pelikula at serye ay maaaring payamanin pa ng **TMDB** (opsyonal na libreng key): ang trailer, mga still, tagal, at listahan ng season ng serye ay kinukuha at isinusulat sa frontmatter ng tala.

---

## Pribasiya at Paggamit ng Network

Ang Library ay **offline-muna**: ang iyong library ay mga karaniwang tala lamang at gumagana kahit walang koneksyon. Ipinapadala lamang ng plugin ang datos na nakalista sa ibaba, at sa mga kasong ito lamang:

- **Kapag ikaw mismo ang kumilos:** naghahanap ka ng pamagat, nagre-refresh ng metadata, nagpapatakbo ng AniList command, o nag-click ng share button.
- **Kapag nagbukas ka ng tala sa library:** nire-refresh ang metadata nito mula sa pinagmulan gamit ang `Source ID`, hindi hihigit sa isang beses bawat 5 minuto kada tala; ang talang walang `Source ID` ay hinahanap ayon sa pangalan nito.
- **Pagkatapos ng update ng plugin o pagpapalit ng API key:** isang proseso sa background ang minsang nagre-refresh ng mga tala sa iyong library mula sa kanilang mga pinagmulan, isa-isa.

Ang mga cover image, still, at trailer player na tinutukoy ng iyong mga tala ay nilo-load mula sa mga host na nakalista sa ibaba.

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
| `anilist.co` | Nag-click ka ng **Ikonekta** sa mga setting ng AniList sync | Ang iyong AniList Client ID | Buksan ang authorization page ng AniList sa iyong browser |
| `comicvine.gamespot.com` | Naghahanap ka ng isang komiks na kategorya | Ang pamagat na iyong tina-type at ang iyong Comic Vine key | Kunin ang metadata ng komiks (pamagat, taon, publisher, bilang ng issue, cover) |
| `store.steampowered.com` | Naghahanap o nagdadagdag ka ng Steam game | Ang title na itina-type mo o ang Steam app id | Pagkuha ng metadata ng laro (taon, genre, developer, cover) |
| `cdn.cloudflare.steamstatic.com` | May cover ang isang Steam game card | Ang Steam app id | Pag-load ng cover na larawan |
| `api.themoviedb.org` | Nagdadagdag o nagre-refresh ka ng tala ng pelikula/serye at may nakatakdang TMDB key | Ang IMDb id ng tala at ang iyong TMDB key | Kunin ang trailer, mga still, tagal, at listahan ng season ng serye |
| `image.tmdb.org` | May mga still ang tala ng pelikula/serye | Ang path ng larawan ng TMDB | I-load ang mga still na larawan |
| `v3-cinemeta.strem.io` | Nagdadagdag o nagre-refresh ka ng tala ng pelikula/serye | Ang IMDb id ng tala | Kunin ang trailer, mga still, tagal, at listahan ng season ng serye — walang kailangang key |
| `images.metahub.space` | May mga still ang tala ng pelikula/serye | Ang IMDb id ng tala | I-load ang mga still (backdrop) na larawan |
| `episodes.metahub.space` | May mga still ng episode ang tala ng serye | Ang IMDb id ng serye at mga numero ng season at episode | I-load ang mga still na larawan ng mga episode |
| `i.ytimg.com` | May mga still ng trailer ang tala ng pelikula | Ang video id ng trailer | I-load ang mga still na larawan ng trailer |
| `s4.anilist.co` | May banner ang tala ng anime | Ang path sa CDN ng AniList | I-load ang larawan ng banner |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Binuksan mo ang isang tala na may trailer | Ang id ng trailer | I-embed ang player ng trailer |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Nag-click ka ng share button | Ang caption ng card (pamagat, iyong rating, link ng source) | Buksan ang share window ng napiling network na may paunang nakalagay na post — ang larawan ng card mismo ay nananatiling lokal |

Walang ibang datos na lumalabas sa iyong vault kailanman. Ang plugin ay **walang telemetry, walang analytics, at walang mekanismo ng self-update**. Ang mga API key (OMDb, Google Books, RAWG, Comic Vine, TMDB) ay naka-imbak lamang sa iyong lokal na plugin settings at ipinapadala lamang sa kanilang kaukulang mga serbisyo. Ang mga larawan ng cover ay naglo-load nang direkta mula sa mga URL na ibinabalik ng bawat source.

---

## Frontmatter Schema

### Pelikula

> **Property ng cover** — mababago ang frontmatter property na nag-iimbak ng cover sa **Settings → Library** (halimbawa sa `image`); gagana pa rin ang mga existing na note.

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

### Serye

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

> **Awtomatikong pag-update ng serye:** Patakbuhin ang `I-refresh ang metadata ng kasalukuyang tala` (o buksan lang ang note) at ia-update ng plugin ang kabuuang bilang ng episode sa `Progress` (hal., `25/42` patungong `25/50`) at ang bilang ng `Season`, habang pinapanatili ang iyong napanood na bilang.

> **Trailer, still at season:** Kapag nakatakda ang TMDB key, awtomatikong pinupunan ng plugin ang `Trailer`, `Gallery`, `Runtime` at (para sa mga serye) `Seasons` — ang `Runtime` ay ang tagal ng pelikula sa minuto, o ang minuto bawat episode para sa isang serye. Pagkatapos ay ipinapakita ng header ng tala ang isang naka-embed na player, isang hanay ng mga still, at isang listahan ng season na may bilang ng episode, rating, at mga button ng trailer ng bawat season. Ang bawat field ay ordinaryong frontmatter: i-edit o tanggalin ito at hindi gagalawin ng plugin ang iyong mga halaga sa susunod na refresh. Sa bawat bagong bersyon ng plugin, may isang background na paglilibot sa library na nagdadagdag ng mga bagong field — isa-isa, hindi humaharang sa app.

### Aklat

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

### Komiks

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

## Mga Link sa Graph

Ang mga genre, tagalikha, at — para sa mga pelikula at serye — mga artista ay naka-imbak bilang mga link sa sarili nilang mga property:

```yaml
Genre:
    - "[[Action]]"
    - "[[Sci-Fi]]"
Creator:
    - "[[Christopher Nolan]]"
Cast:
    - "[[Leonardo DiCaprio]]"
```

Kaya ipinapakita ng tala ng bawat genre, tagalikha, at artista ang lahat ng pamagat nito sa mga backlink, at ikinokonekta ng graph ang mga tala sa pamamagitan nila. Ang mga karaniwang pangalan — manu-manong tinype o naiwan ng naunang bersyon — ay nagiging link tuwing nagbabago ang tala; nananatili ang link na may alias. Kino-convert ng `Muling buuin ang mga link ng graph` ang buong library nang sabay-sabay. Hindi na ginagamit ang `Related` na property ng mga naunang bersyon at inaalis ito sa mga tala.

---

## Pagbabahagi

Bawat content note ay nakakakuha ng **Ibahagi** button sa header nito (o patakbuhin ang `Ibahagi ang kasalukuyang tala`). Nagre-render ito ng card image — poster, pamagat, taon, genre, IMDb/AniList score, at ang iyong rating — na maaari mong i-post kahit saan:

- **Sa mobile** — binubuksan ng **Ibahagi…** button ang native share sheet ng iyong device na nakakabit nang direkta ang card image, kaya maaari mo itong ipadala nang diretso sa anumang app.
- **X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, Pinterest** — binubuksan ang composer ng network na may prefilled na caption (pamagat, ang iyong rating, ang source link, at isang link sa plugin na ito). Kinokopya nang sabay ang card image sa iyong clipboard, kaya i-paste mo na lang ito (Ctrl/Cmd+V) sa post.
- **Kopyahin ang larawan / Kopyahin ang teksto / I-save ang larawan** — kopyahin ang na-render na card o ang caption sa clipboard, o i-save ang larawan sa attachment folder ng iyong vault upang i-attach nang mano-mano.

Ang pagbabahagi ay ganap na lokal: ang card ay iginuguhit sa loob ng app mula sa sariling metadata at cover ng note. Walang ini-upload — binubuksan lamang ng plugin ang composer URL na iyong pinili sa iyong browser.

---

## AniList Sync

Panatilihing naka-sync ang iyong anime progress sa iyong [AniList](https://anilist.co) account.

**Pag-setup** — sa **Mga Setting → Library → AniList sync**:

1. Magrehistro ng libreng API client sa [anilist.co/settings/developer](https://anilist.co/settings/developer), na ang redirect URL ay nakatakda sa `https://anilist.co/api/v2/oauth/pin`.
2. I-paste ang **Client ID**, i-click ang **Ikonekta**, at mag-authorize.
3. Magpapakita sa iyo ang AniList ng isang access token — i-paste ito sa plugin. I-click ang **Subukan ang koneksyon** upang kumpirmahin.

Pagkatapos, gamitin ang mga command:

- `I-push ang kasalukuyang tala sa AniList` — ipinapadala ang progreso (mga napanood na episode), status (watching / completed / planning), at ang iyong rating ng aktibong anime note sa iyong AniList list.
- `Kunin ang progreso mula sa AniList` — kinukuha ang iyong AniList anime list at ina-update ang mga tumutugmang note. Ang pull ay **forward-only**: hindi nito kailanman ibinababa ang isang note na mas nauna na nang lokal o kumpleto na, at hindi nito ginagalaw ang iyong personal na `My Rating`.

Ang mga note lamang na may `Source: anilist` (idinagdag sa pamamagitan ng AniList anime source) ang sini-sync. Ang iyong token ay naka-imbak lokal sa plugin settings at ipinapadala lamang sa AniList.

---

## Mga Command

| Command                              | Paglalarawan                                                              |
| ------------------------------------ | ----------------------------------------------------------------------- |
| `Buksan ang aklatan`                       | Buksan ang Library gallery tab.                                           |
| `Magdagdag ng nilalaman`                        | Maghanap ng source at lumikha ng content note (o mag-type ng pamagat para sa Manual). |
| `Maghanap sa iyong aklatan`                | Fuzzy-search at buksan ang anumang note na nasa iyong library na.                 |
| `I-refresh ang metadata ng kasalukuyang tala`  | Muling kunin ang metadata para sa aktibong note; ina-update ang bilang ng mga episode ng serye.   |
| `Muling buuin ang mga link ng graph`                | Ginagawang link ang `Genre`, `Creator`, at `Cast` sa bawat content note. |
| `Maghanap at magtanggal ng mga duplicate`           | I-scan ang lahat ng note ayon sa URL, ipakita ang mga duplicate, at alisin ang mga napili.       |
| `Ibahagi ang kasalukuyang tala`                 | I-render ang note bilang card image at ibahagi ito sa X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, o Pinterest. |
| `I-push ang kasalukuyang tala sa AniList`        | Ipadala ang progreso, status, at rating ng aktibong anime note sa iyong AniList account. |
| `Kunin ang progreso mula sa AniList`          | Kunin ang iyong AniList list at i-update ang mga tumutugmang note (forward-only). |
| `I-refresh ang metadata ng lahat ng tala` | Kunin ang metadata ng lahat ng tala sa library, isa-isa sa background. |

---

## Pag-aambag at Suporta

- **Nakahanap ng bug?** Magbukas ng [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues).
- **May ideya para sa feature?** Magsimula ng [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions).
- **Gusto mo ang plugin?** Isaalang-alang ang pagbibigay ng star sa repository upang ipakita ang iyong suporta!

---

## Lisensya

[MIT License](LICENSE) — libre gamitin, baguhin, at ibahagi.

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
