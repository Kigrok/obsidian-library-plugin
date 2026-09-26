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
  Mga pelikula, serye, libro, anime, komiks, laro, at musika bilang mga tala sa Obsidian, ipinapakita bilang gallery ng mga cover card.
  <br />
  <a href="https://community.obsidian.md/plugins/library">Direktoryo ng mga plugin ng Obsidian</a>
</p>

## Mga tampok

- Maghanap ng pamagat at makakuha ng talang may poster, taon, genre, mga lumikha, cast, at mga rating.
- Tingnan ang library bilang mga cover card, naka-grupo ayon sa kategorya at nakaayos ayon sa pangalan, taon, rating, o petsa.
- Markahan ang mga episode ng serye o ang mga kabanata ng libro at i-rate ang bawat isa; kinukuwenta mula rito ang `Progress` at `My Rating`.
- Ipinapakita ng mga tala ng pelikula at serye ang trailer, mga still, haba, at listahan ng mga season.
- Mga link ang genre, mga lumikha, at mga aktor, kaya tinitipon ng kanilang mga tala ang bawat pamagat sa backlinks at sa graph.
- Ipinapakita ng panel ng estadistika ang mga top list na pinili mo at ang kabuuang oras ng panonood.
- Ibahagi ang isang pamagat bilang larawan ng card sa X, Telegram, Reddit, at anim pang network.
- I-sync ang progreso ng anime sa AniList.
- Isinalin ang interface sa bawat wikang sinusuportahan ng Obsidian, at ang README na ito sa [30 wika](./).

## Mabilis na pagsisimula

1. I-install ang **Library** mula sa Settings → Community plugins → Browse, o mula sa [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).
2. Sa Settings → Library, magdagdag ng kategorya para sa bawat uri ng nilalaman: Mga Pelikula, Mga Series, Mga Libro, Mga Komiks, Mga Laro, Musika, Anime, Manwal.
3. Ilagay ang mga API key na kailangan ng iyong mga source (tingnan sa ibaba).
4. Buksan ang tab na "Aklatan" mula sa ribbon, pindutin ang **+**, pumili ng kategorya, at maghanap ng pamagat. Ang pamagat na nasa library na ay magbubukas ng kasalukuyang tala nito.

Tinutukoy ng `Type` value ng kategorya (halimbawa `Movie`) kung aling mga tala ang kabilang dito, at tinutukoy ng folder nito kung saan mapupunta ang mga bagong tala. Parehong nasa ilalim ng **Advanced** sa mga setting ng kategorya.

## Mga source

| Kategorya | Source | Key |
| --- | --- | --- |
| Mga pelikula, serye | OMDb | [Libreng key](https://www.omdbapi.com/apikey.aspx) |
| Mga libro | Google Books + Open Library | Opsyonal na [Google Books key](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| Mga laro | RAWG + Steam | [Libreng RAWG key](https://rawg.io/apidocs); hindi kailangan ng Steam |
| Musika | Deezer | Hindi kailangan |
| Anime | AniList | Hindi kailangan |
| Komiks | Comic Vine | [Libreng key](https://comicvine.gamespot.com/api/) |
| Lahat ng iba pa | Manwal: ikaw ang pupuno sa mga field | Hindi kailangan |

Galing sa Cinemeta nang walang key ang mga trailer, still, haba, at listahan ng season. Nagdadagdag ang [TMDB key](https://www.themoviedb.org/settings/api) ng mga rating ng season at mas maraming still.

## Progreso at mga rating

Inililista ng header ng tala ng serye ang mga season, at bumubukas ang bawat season sa mga episode nito, kasama ang mga pamagat kung mayroon ang source. Markahan ang isang episode o buong season bilang napanood at i-rate mula 1 hanggang 10. Binibilang ng `Progress` ang mga minarkahang episode, ang rating ng season ay ang average ng mga na-rate nitong episode, at ang `My Rating` ay ang average ng mga na-rate na season. Ang season na walang na-rate na episode ay puwedeng bigyan ng sariling rating.

Ganoon din ang anime, bilang isang season na walang pamagat ng episode.

Galing ang mga kabanata ng libro sa talaan ng nilalaman ng isang edisyon sa Open Library. Kung walang mahanap, tumatanggap ang **Magdagdag ng mga kabanata** sa header ng tala ng bilang ng kabanata o isang pamagat bawat linya. Mula noon, binibilang ng `Progress` ang mga kabanata sa halip na pahina, at nalilipat ang mga nabasang pahina sa katumbas na bahagi ng mga kabanata.

Napapanatili ng mga tala mula sa lumang bersyon ang kanilang progreso. Hangga't wala kang minamarkahan, ang mga unang episode hanggang sa bilang sa `Progress` ay lumalabas na napanood.

## Mga estadistika

Ipinapakita ng panel sa itaas ng tab na "Aklatan" ang mga column na pinili mo sa Settings → Library → Mga estadistika: ang tatlong pamagat na may pinakamataas na rating sa isang kategorya, ang tatlong pinakamadalas na value ng isang property (genre, aktor, o anumang iba), at ang mga oras na ginugol sa mga pelikula, serye, at anime. Sa ilalim ng tsart, may isang paghahambing bawat araw, halimbawa: Nakapunta at nakabalik sana sa Buwan ang Apollo 11 nang isang beses.

## Mga link sa graph

May mga link ang `Genre`, `Creator`, at `Cast` tulad ng `[[Christopher Nolan]]`, kaya inililista ng tala ng isang genre o tao ang mga pamagat nito sa backlinks. Nagiging link ang mga pangalang manwal na tinype kapag nagbago ang tala, at kino-convert ng `Muling buuin ang mga link ng graph` ang buong library.

## Pagbabahagi at AniList

Gumuguhit ang **Ibahagi** sa header ng tala ng card na may poster, pamagat, taon, genre, cast, mga rating, at ang iyong score. Sa desktop, napupunta ang larawan sa clipboard at bumubukas ang network na pinili mo na may caption, kaya ipi-paste mo na lang ang larawan sa post. Sa mobile, napupunta ang larawan sa share menu ng system. Puwede mo ring kopyahin ang larawan o caption, o i-save ang larawan.

Para i-sync ang anime, magrehistro ng client sa [anilist.co/settings/developer](https://anilist.co/settings/developer) na may redirect URL na `https://anilist.co/api/v2/oauth/pin`. I-paste ang Client ID sa Settings → Library → AniList sync, i-click ang **Ikonekta**, at i-paste ang token na ipinapakita ng AniList. Ipinapadala ng `I-push ang kasalukuyang tala sa AniList` ang progreso, status, at score. Ina-update ng `Kunin ang progreso mula sa AniList` ang iyong mga tala, hindi kailanman ibinabalik ang progreso, at hindi ginagalaw ang `My Rating`. Ang mga tala lang na may `Source: anilist` ang nagsi-sync.

## Frontmatter

Ang bawat card ay isang tala, at lahat ng alam ng plugin tungkol dito ay nasa frontmatter:

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
      # ...7 pang episode
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

Sa serye, ang `Runtime` ay ang haba ng isang episode. May `ISBN` din ang mga libro at nakatago ang mga kabanata sa `Chapters` na may parehong mga field na `title`, `watched`, at `my_rating`; may `Rating AniList` at `Status` ang anime. Puwedeng palitan ang pangalan ng property ng cover sa mga setting, halimbawa sa `image`.

Pinupunan lang ng refresh ang mga bakanteng field, kaya nananatili ang mga value na inedit mo. Ina-update din nito ang kabuuang bilang ng episode sa `Progress` at nagdadagdag ng mga bagong season at pamagat ng episode.

## Privacy at paggamit ng network

Ang iyong library ay mga karaniwang tala at gumagana offline. Nag-o-online lang ang plugin kapag naghahanap, nagre-refresh, nagsi-sync, o nagbabahagi ka; kapag nagbukas ka ng tala sa library, pinakamadalas isang beses bawat 5 minuto sa bawat tala; at isang beses pagkatapos ng update o pagpapalit ng key, para punan ang mga bagong field. Walang telemetry, analytics, o self-update. Nananatili ang mga API key sa lokal na setting ng plugin at ipinapadala lang sa sarili nilang serbisyo.

| Host | Kailan | Ano ang ipinapadala |
| --- | --- | --- |
| `www.omdbapi.com` | Paghahanap ng pelikula at serye | Pamagat o IMDb id, OMDb key |
| `openlibrary.org` | Paghahanap ng libro; paghahanap ng kabanata kapag nagdagdag o nagbukas ng libro | Pamagat at may-akda, ISBN, o id ng akda |
| `covers.openlibrary.org` | Mga cover ng libro | Id ng cover |
| `www.googleapis.com` | Paghahanap ng libro | Pamagat, Google Books key |
| `api.rawg.io` | Paghahanap ng laro | Pamagat, RAWG key |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | Paghahanap ng laro at mga cover | Pamagat o Steam app id |
| `api.deezer.com` | Paghahanap ng musika | Album o artist |
| `graphql.anilist.co` | Paghahanap ng anime; AniList sync | Pamagat; ang iyong token, progreso, status, at score |
| `anilist.co` | Nag-click ka ng **Ikonekta** | Client ID, binubuksan sa iyong browser |
| `s4.anilist.co` | Mga banner ng anime | CDN path |
| `comicvine.gamespot.com` | Paghahanap ng komiks | Pamagat, Comic Vine key |
| `v3-cinemeta.strem.io` | Pagdagdag o pag-refresh ng pelikula o serye | IMDb id |
| `images.metahub.space`, `episodes.metahub.space` | Mga still | IMDb id, numero ng season at episode |
| `api.themoviedb.org`, `image.tmdb.org` | Pagdagdag o pag-refresh ng pelikula o serye, kung may TMDB key | IMDb id at TMDB key; path ng larawan |
| `i.ytimg.com` | Mga still ng trailer | Id ng video |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Pagbukas ng talang may trailer | Id ng video |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Nag-click ka ng share button | Ang caption: pamagat, iyong score, link ng source. Nananatili sa iyong device ang larawan |

## Mga command

| Command | Ginagawa |
| --- | --- |
| `Buksan ang aklatan` | Binubuksan ang tab na "Aklatan" |
| `Magdagdag ng nilalaman` | Naghahanap sa source at gumagawa ng tala |
| `Maghanap sa iyong aklatan` | Hinahanap at binubuksan ang isang tala sa library |
| `I-refresh ang metadata ng kasalukuyang tala` | Kinukuha ulit ang data ng aktibong tala |
| `I-refresh ang metadata ng lahat ng tala` | Kinukuha ulit ang data ng bawat tala sa library, isa-isa |
| `Muling buuin ang mga link ng graph` | Ginagawang link ang `Genre`, `Creator`, at `Cast` |
| `Maghanap at magtanggal ng mga duplicate` | Inililista ang mga talang pareho ang URL at binubura ang mga pinili mo |
| `Ibahagi ang kasalukuyang tala` | Binubuksan ang share card |
| `I-push ang kasalukuyang tala sa AniList` | Ipinapadala ang progreso, status, at score |
| `Kunin ang progreso mula sa AniList` | Ina-update ang mga tala mula sa iyong AniList list |

## Suporta

I-report ang mga bug sa [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues) at ang mga ideya sa [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions). Nasa ilalim ng [MIT License](../LICENSE) ang plugin.

Kung nakatulong sa iyo ang plugin, puwede mo itong suportahan:

| | Network | Address |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
