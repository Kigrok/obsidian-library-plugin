> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | **සිංහල**

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
  චිත්‍රපට, කතාමාලා, පොත්, ඇනිමෙ, කොමික්, ක්‍රීඩා සහ සංගීතය Obsidian හි සටහන් ලෙස, කවර කාඩ්පත් ගැලරියක් ලෙස.
  <br />
  <a href="https://community.obsidian.md/plugins/library">Obsidian ප්ලගින නාමාවලිය</a>
</p>

## විශේෂාංග

- මාතෘකාවක් සොයා පෝස්ටරය, වර්ෂය, ප්‍රභේදය, නිර්මාණකරුවන්, නළු නිළියන් සහ ශ්‍රේණිගත කිරීම් පුරවා ඇති සටහනක් ලබා ගන්න.
- පුස්තකාලය කවර කාඩ්පත් ලෙස බලන්න, ප්‍රවර්ගය අනුව කාණ්ඩ කර නම, වර්ෂය, ශ්‍රේණිගත කිරීම හෝ දිනය අනුව පිළිවෙළට.
- කතාමාලාවක කථාංග හෝ පොතක පරිච්ඡේද සලකුණු කර එකිනෙකට ලකුණු දෙන්න; `Progress` සහ `My Rating` ඒවායින් ගණනය වේ.
- චිත්‍රපට සහ කතාමාලා සටහන්වල ට්‍රේලරය, රූප, කාලය සහ වාර ලැයිස්තුව පෙන්වයි.
- ප්‍රභේද, නිර්මාණකරුවන් සහ නළු නිළියන් සබැඳි වන නිසා ඔවුන්ගේ සටහන් සෑම මාතෘකාවක්ම පසු-සබැඳි සහ ප්‍රස්ථාරය තුළ එකතු කරයි.
- සංඛ්‍යාලේඛන පුවරුව ඔබ තෝරන ඉහළම ලැයිස්තු සහ මුළු නැරඹුම් කාලය පෙන්වයි.
- මාතෘකාවක් කාඩ්පත් රූපයක් ලෙස X, Telegram, Reddit සහ තවත් ජාල හයක බෙදාගන්න.
- ඇනිමෙ ප්‍රගතිය AniList සමඟ සමමුහුර්ත කරන්න.
- අතුරුමුහුණත Obsidian සහාය දක්වන සියලු භාෂාවලට පරිවර්තනය කර ඇති අතර, මෙම README [භාෂා 30කින්](./) ඇත.

## ඉක්මන් ආරම්භය

1. **Library** සැකසුම් → තුන්වන පාර්ශවීය ප්ලගිනය → පිරික්සන්න හරහා හෝ [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases) වෙතින් ස්ථාපනය කරන්න.
2. සැකසුම් → Library තුළ එක් එක් අන්තර්ගත වර්ගය සඳහා ප්‍රවර්ගයක් එක් කරන්න: චිත්‍රපට, මාලා, පොත්, කොමික්, ක්‍රීඩා, සංගීතය, ඇනිමේ, අතින්.
3. ඔබේ මූලාශ්‍රවලට අවශ්‍ය API යතුරු ඇතුළත් කරන්න (පහත බලන්න).
4. රිබනයෙන් "පුස්තකාලය" ටැබය විවෘත කර, **+** ඔබා, ප්‍රවර්ගයක් තෝරා මාතෘකාවක් සොයන්න. දැනටමත් පුස්තකාලයේ ඇති මාතෘකාවක් එහි පවතින සටහන විවෘත කරයි.

ප්‍රවර්ගයක `Type` අගය (උදා. `Movie`) එයට අයත් සටහන් තීරණය කරන අතර, එහි ෆෝල්ඩරය නව සටහන් යන තැන තීරණය කරයි. දෙකම ප්‍රවර්ගයේ සැකසුම්වල **උසස්** යටතේ ඇත.

## මූලාශ්‍ර

| ප්‍රවර්ගය | මූලාශ්‍රය | යතුර |
| --- | --- | --- |
| චිත්‍රපට, කතාමාලා | OMDb | [නොමිලේ යතුර](https://www.omdbapi.com/apikey.aspx) |
| පොත් | Google Books + Open Library | විකල්ප [Google Books යතුර](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| ක්‍රීඩා | RAWG + Steam | [නොමිලේ RAWG යතුර](https://rawg.io/apidocs); Steam සඳහා අවශ්‍ය නැත |
| සංගීතය | Deezer | අවශ්‍ය නැත |
| ඇනිමෙ | AniList | අවශ්‍ය නැත |
| කොමික් | Comic Vine | [නොමිලේ යතුර](https://comicvine.gamespot.com/api/) |
| වෙනත් ඕනෑම දෙයක් | අතින්: ක්ෂේත්‍ර ඔබම පුරවයි | අවශ්‍ය නැත |

ට්‍රේලර්, රූප, කාලය සහ වාර ලැයිස්තු යතුරක් නොමැතිව Cinemeta වෙතින් ලැබේ. [TMDB යතුරක්](https://www.themoviedb.org/settings/api) වාර ශ්‍රේණිගත කිරීම් සහ තවත් රූප එක් කරයි.

## ප්‍රගතිය සහ ලකුණු

කතාමාලා සටහනේ ශීර්ෂය වාර ලැයිස්තුගත කරන අතර, එක් එක් වාරය එහි කථාංග වෙත විවෘත වේ, මූලාශ්‍රයේ නම් ඇත්නම් ඒවා සමඟ. කථාංගයක් හෝ සම්පූර්ණ වාරයක් නැරඹූ ලෙස සලකුණු කර 1 සිට 10 දක්වා ලකුණු දෙන්න. `Progress` සලකුණු කළ කථාංග ගණන් කරයි, වාරයක ලකුණ එහි ලකුණු දුන් කථාංගවල සාමාන්‍යය වන අතර, `My Rating` ලකුණු දුන් වාරවල සාමාන්‍යය වේ. ලකුණු දුන් කථාංග නැති වාරයකට වෙනම ලකුණක් දිය හැක.

ඇනිමෙ ද එලෙසම, කථාංග නම් නැති එක් වාරයක් ලෙස ක්‍රියා කරයි.

පොතක පරිච්ඡේද Open Library හි සංස්කරණයක පටුනෙන් ලැබේ. පටුනක් හමු නොවුණොත්, සටහන් ශීර්ෂයේ ඇති **පරිච්ඡේද එක් කරන්න** පරිච්ඡේද ගණනක් හෝ පේළියකට එක් මාතෘකාවක් බැගින් ගනී. ඉන්පසු `Progress` පිටු වෙනුවට පරිච්ඡේද ගණන් කරන අතර, කියවූ පිටු පරිච්ඡේදවල එම අනුපාතයටම මාරු වේ.

පැරණි අනුවාදවල සටහන් ඒවායේ ප්‍රගතිය රඳවා ගනී. ඔබ කිසිවක් සලකුණු නොකරන තුරු, `Progress` ගණන දක්වා පළමු කථාංග නැරඹූ ලෙස පෙන්වයි.

## සංඛ්‍යාලේඛන

"පුස්තකාලය" ටැබයේ ඉහළ ඇති පුවරුව ඔබ සැකසුම් → Library → සංඛ්‍යාලේඛන හි තෝරන තීරු පෙන්වයි: ප්‍රවර්ගයක ඉහළම ලකුණු ලත් මාතෘකා තුන, ගුණාංගයක බහුලවම ඇති අගයන් තුන (ප්‍රභේද, නළු නිළියන් හෝ වෙනත් ඕනෑම එකක්) සහ චිත්‍රපට, කතාමාලා සහ ඇනිමෙ සඳහා ගත කළ පැය. ප්‍රස්ථාරය යට දිනකට එක් සැසඳීමක් පෙන්වයි, උදාහරණයක් ලෙස: ඇපලෝ 11 ට 8 වරක් හඳට ගොස් ආපසු ඒමට හැකිව තිබුණි.

## ප්‍රස්ථාර සබැඳි

`Genre`, `Creator` සහ `Cast` හි `[[Christopher Nolan]]` වැනි සබැඳි ඇති නිසා, ප්‍රභේදයක හෝ පුද්ගලයෙකුගේ සටහන එහි මාතෘකා පසු-සබැඳිවල පෙන්වයි. අතින් ලියූ නම් සටහන වෙනස් වන විට සබැඳි බවට පත් වන අතර, `ග්‍රාෆ් සබැඳි නැවත ගොඩනගන්න` සම්පූර්ණ පුස්තකාලයම පරිවර්තනය කරයි.

## බෙදාගැනීම සහ AniList

සටහන් ශීර්ෂයේ ඇති **බෙදාගන්න** පෝස්ටරය, මාතෘකාව, වර්ෂය, ප්‍රභේදය, නළු නිළියන්, ශ්‍රේණිගත කිරීම් සහ ඔබේ ලකුණ සහිත කාඩ්පතක් අඳියි. පරිගණකයේ රූපය පසුරු පුවරුවට යන අතර ඔබ තෝරන ජාලය සූදානම් විස්තරයක් සමඟ විවෘත වේ, එවිට රූපය පළ කිරීමට ඇලවීම පමණයි. ජංගම දුරකථනයේ රූපය පද්ධතියේ බෙදාගැනීමේ මෙනුවට යයි. රූපය හෝ විස්තරය පිටපත් කිරීමට, හෝ රූපය සුරැකීමට ද හැකිය.

ඇනිමෙ සමමුහුර්ත කිරීමට [anilist.co/settings/developer](https://anilist.co/settings/developer) හි redirect URL `https://anilist.co/api/v2/oauth/pin` සමඟ සේවාලාභියෙකු ලියාපදිංචි කරන්න. Client ID සැකසුම් → Library → AniList සමමුහුර්තකරණය හි අලවා, **සම්බන්ධ කරන්න** ඔබා, AniList පෙන්වන ටෝකනය අලවන්න. `වත්මන් සටහන AniList වෙත යවන්න` ප්‍රගතිය, තත්ත්වය සහ ලකුණ යවයි. `AniList වෙතින් ප්‍රගතිය ලබා ගන්න` ඔබේ සටහන් යාවත්කාලීන කරයි, ප්‍රගතිය කිසිවිටෙක පසුපසට නොගෙන `My Rating` වෙනස් නොකරයි. සමමුහුර්ත වන්නේ `Source: anilist` ඇති සටහන් පමණි.

## Frontmatter

සෑම කාඩ්පතක්ම සටහනක් වන අතර, ප්ලගිනය ඒ ගැන දන්නා සියල්ල frontmatter තුළ ඇත:

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
      # ...තවත් කථාංග 7ක්
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

කතාමාලාවක `Runtime` යනු එක් කථාංගයක කාලයයි. පොත්වල `ISBN` ද ඇති අතර පරිච්ඡේද එම `title`, `watched` සහ `my_rating` ක්ෂේත්‍ර සමඟ `Chapters` තුළ තබා ගනී; ඇනිමෙවල `Rating AniList` සහ `Status` ඇත. කවර ගුණාංගයේ නම සැකසුම්වල වෙනස් කළ හැක, උදා. `image` ලෙස.

යළි ප්‍රබෝධනය හිස් ක්ෂේත්‍ර පමණක් පුරවන නිසා ඔබ සංස්කරණය කළ අගයන් රැඳේ. එය `Progress` හි මුළු කථාංග ගණන යාවත්කාලීන කර නව වාර සහ කථාංග නම් ද එක් කරයි.

## පෞද්ගලිකත්වය සහ ජාල භාවිතය

ඔබේ පුස්තකාලය සාමාන්‍ය සටහන් වන අතර නොබැඳිව ක්‍රියා කරයි. ප්ලගිනය මාර්ගගත වන්නේ ඔබ සොයන, යළි ප්‍රබෝධනය කරන, සමමුහුර්ත කරන හෝ බෙදාගන්නා විට; පුස්තකාල සටහනක් විවෘත කරන විට, එක් සටහනකට විනාඩි 5කට වරක් උපරිමයෙන්; සහ යාවත්කාලීනයකින් හෝ යතුරු වෙනසකින් පසු නව ක්ෂේත්‍ර පිරවීමට එක් වරක් පමණි. දුරස්ථ මිනුම්, විශ්ලේෂණ හෝ ස්වයං-යාවත්කාලීන නැත. API යතුරු ප්ලගිනයේ දේශීය සැකසුම්වල රැඳී ඒවායේම සේවාවට පමණක් යවනු ලැබේ.

| සත්කාරකය | කවදාද | යවන දේ |
| --- | --- | --- |
| `www.omdbapi.com` | චිත්‍රපට සහ කතාමාලා සෙවීම | මාතෘකාව හෝ IMDb id, OMDb යතුර |
| `openlibrary.org` | පොත් සෙවීම; පොතක් එක් කරන හෝ විවෘත කරන විට පරිච්ඡේද සෙවීම | මාතෘකාව සහ කතුවරයා, ISBN හෝ කෘති id |
| `covers.openlibrary.org` | පොත් කවර | කවර id |
| `www.googleapis.com` | පොත් සෙවීම | මාතෘකාව, Google Books යතුර |
| `api.rawg.io` | ක්‍රීඩා සෙවීම | මාතෘකාව, RAWG යතුර |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | ක්‍රීඩා සෙවීම සහ කවර | මාතෘකාව හෝ Steam යෙදුම් id |
| `api.deezer.com` | සංගීත සෙවීම | ඇල්බමය හෝ කලාකරුවා |
| `graphql.anilist.co` | ඇනිමෙ සෙවීම; AniList සමමුහුර්තය | මාතෘකාව; ඔබේ ටෝකනය, ප්‍රගතිය, තත්ත්වය සහ ලකුණ |
| `anilist.co` | ඔබ **සම්බන්ධ කරන්න** ඔබයි | Client ID, ඔබේ බ්‍රවුසරයේ විවෘත වේ |
| `s4.anilist.co` | ඇනිමෙ බැනර් | CDN මාර්ගය |
| `comicvine.gamespot.com` | කොමික් සෙවීම | මාතෘකාව, Comic Vine යතුර |
| `v3-cinemeta.strem.io` | චිත්‍රපටයක් හෝ කතාමාලාවක් එක් කිරීම හෝ යළි ප්‍රබෝධනය | IMDb id |
| `images.metahub.space`, `episodes.metahub.space` | රූප | IMDb id, වාර සහ කථාංග අංක |
| `api.themoviedb.org`, `image.tmdb.org` | TMDB යතුරක් සකසා ඇත්නම් චිත්‍රපටයක් හෝ කතාමාලාවක් එක් කිරීම හෝ යළි ප්‍රබෝධනය | IMDb id සහ TMDB යතුර; රූප මාර්ගය |
| `i.ytimg.com` | ට්‍රේලර් රූප | වීඩියෝ id |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | ට්‍රේලරයක් ඇති සටහනක් විවෘත කිරීම | වීඩියෝ id |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | ඔබ බෙදාගැනීමේ බොත්තමක් ඔබයි | විස්තරය: මාතෘකාව, ඔබේ ලකුණ, මූලාශ්‍ර සබැඳිය. රූපය ඔබේ උපාංගයේම රැඳේ |

## විධාන

| විධානය | කරන දේ |
| --- | --- |
| `පුස්තකාලය විවෘත කරන්න` | "පුස්තකාලය" ටැබය විවෘත කරයි |
| `අන්තර්ගතය එක් කරන්න` | මූලාශ්‍රයක සොයා සටහනක් සාදයි |
| `ඔබේ පුස්තකාලයේ සොයන්න` | පුස්තකාල සටහනක් සොයා විවෘත කරයි |
| `වත්මන් සටහනේ පාරදත්ත යාවත්කාලීන කරන්න` | සක්‍රිය සටහනේ දත්ත නැවත ලබා ගනී |
| `සියලුම සටහන්වල පාරදත්ත යාවත්කාලීන කරන්න` | සෑම පුස්තකාල සටහනකම දත්ත එකින් එක නැවත ලබා ගනී |
| `ග්‍රාෆ් සබැඳි නැවත ගොඩනගන්න` | `Genre`, `Creator` සහ `Cast` සබැඳි බවට පත් කරයි |
| `අනුපිටපත් සොයා ඉවත් කරන්න` | එකම URL ඇති සටහන් පෙන්වා තෝරාගත් ඒවා ඉවත් කරයි |
| `වත්මන් සටහන බෙදාගන්න` | බෙදාගැනීමේ කාඩ්පත විවෘත කරයි |
| `වත්මන් සටහන AniList වෙත යවන්න` | ප්‍රගතිය, තත්ත්වය සහ ලකුණ යවයි |
| `AniList වෙතින් ප්‍රගතිය ලබා ගන්න` | ඔබේ AniList ලැයිස්තුවෙන් සටහන් යාවත්කාලීන කරයි |

## සහාය

දෝෂ [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues) හි සහ අදහස් [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions) හි වාර්තා කරන්න. ප්ලගිනය [MIT බලපත්‍රය](../LICENSE) යටතේ ඇත.

ප්ලගිනය ඔබට ප්‍රයෝජනවත් නම්, ඔබට එයට සහාය විය හැක:

| | ජාලය | ලිපිනය |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
