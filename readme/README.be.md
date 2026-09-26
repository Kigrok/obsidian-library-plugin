> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md) | **BE**

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
  Фільмы, серыялы, кнігі, анімэ, коміксы, гульні і музыка як нататкі Obsidian, паказаныя галерэяй картак з вокладкамі.
  <br />
  <a href="https://community.obsidian.md/plugins/library">Каталог плагінаў Obsidian</a>
</p>

## Магчымасці

- Знайдзіце твор па назве і атрымайце нататку з постарам, годам, жанрам, стваральнікамі, акцёрамі і рэйтынгамі.
- Бібліятэка выглядае як карткі з вокладкамі, разбітыя па катэгорыях і адсартаваныя па назве, годзе, рэйтынгу ці даце.
- Адзначайце серыі серыяла або раздзелы кнігі і ацэньвайце кожную; `Progress` і `My Rating` лічацца па іх.
- Нататкі пра фільмы і серыялы паказваюць трэйлер, кадры, працягласць і спіс сезонаў.
- Жанры, стваральнікі і акцёры захоўваюцца спасылкамі, таму іх нататкі збіраюць усе творы ў зваротных спасылках і на графе.
- Панэль статыстыкі паказвае выбраныя вамі топы і агульны час прагляду.
- Дзяліцеся творам у выглядзе карткі-выявы ў X, Telegram, Reddit і яшчэ шасці сетках.
- Прагрэс анімэ сінхранізуецца з AniList.
- Інтэрфейс перакладзены на ўсе мовы, якія падтрымлівае Obsidian. Гэты README ёсць на [30 мовах](./).

## Хуткі старт

1. Усталюйце **Library** праз Налады → Плагіны супольнасці → Агляд або з [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).
2. У Налады → Library дадайце катэгорыю для кожнага віду кантэнту: Фільмы, Серыялы, Кнігі, Коміксы, Гульні, Музыка, Анімэ, Уручную.
3. Увядзіце API-ключы, патрэбныя вашым крыніцам (гл. ніжэй).
4. Адкрыйце ўкладку «Бібліятэка» на бакавой панэлі, націсніце **+**, выберыце катэгорыю і знайдзіце твор. Калі ён ужо ёсць у бібліятэцы, адкрыецца існая нататка.

Значэнне `Type` катэгорыі (напрыклад, `Movie`) вызначае, якія нататкі да яе належаць, а тэчка вызначае, куды трапляюць новыя нататкі. Абедзве налады адкрывае кнопка **Дадаткова** каля катэгорыі.

## Крыніцы

| Катэгорыя | Крыніца | Ключ |
| --- | --- | --- |
| Фільмы, серыялы | OMDb | [Бясплатны ключ](https://www.omdbapi.com/apikey.aspx) |
| Кнігі | Google Books + Open Library | Неабавязковы [ключ Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| Гульні | RAWG + Steam | [Бясплатны ключ RAWG](https://rawg.io/apidocs); Steam без ключа |
| Музыка | Deezer | Не патрэбны |
| Анімэ | AniList | Не патрэбны |
| Коміксы | Comic Vine | [Бясплатны ключ](https://comicvine.gamespot.com/api/) |
| Усё астатняе | Уручную: палі запаўняеце вы | Не патрэбны |

Трэйлеры, кадры, працягласць і спісы сезонаў прыходзяць з Cinemeta без ключа. [Ключ TMDB](https://www.themoviedb.org/settings/api) дадае ацэнкі сезонаў і больш кадраў.

## Прагрэс і ацэнкі

У шапцы нататкі серыяла ёсць спіс сезонаў, і кожны сезон разгортваецца ў спіс серый з назвамі, калі крыніца іх ведае. Адзначце серыю або ўвесь сезон як прагледжаныя і пастаўце ацэнку ад 1 да 10. `Progress` лічыць адзначаныя серыі, ацэнка сезона роўная сярэдняму па ацэненых серыях, а `My Rating` роўная сярэдняму па ацэненых сезонах. Сезону без ацэненых серый ацэнку можна паставіць наўпрост.

Анімэ ўладкавана гэтак жа, як адзін сезон без назваў серый.

Раздзелы кнігі бяруцца са зместу выдання ў Open Library. Калі зместу няма, кнопка **Дадаць раздзелы** у шапцы нататкі прымае колькасць раздзелаў або назвы раздзелаў па адной у радку. Пасля гэтага `Progress` лічыць раздзелы, а не старонкі, і прачытаныя старонкі пераходзяць у тую ж долю раздзелаў.

Нататкі са старых версій захоўваюць прагрэс. Пакуль вы нічога не адзначылі, першыя серыі ў межах `Progress` паказаны прагледжанымі.

## Статыстыка

Панэль уверсе ўкладкі «Бібліятэка» паказвае калонкі, выбраныя ў Налады → Library → Статыстыка: тры лепшыя па ацэнцы творы катэгорыі, тры самыя частыя значэнні ўласцівасці (жанры, акцёры ці любая іншая) і гадзіны, выдаткаваныя на фільмы, серыялы і анімэ. Пад графікам раз на дзень з'яўляецца адно параўнанне, напрыклад: «Апалон-11» мог бы даляцець да Месяца і назад 8 разоў.

## Сувязі ў графе

`Genre`, `Creator` і `Cast` захоўваюць спасылкі накшталт `[[Christopher Nolan]]`, таму нататка жанру ці чалавека паказвае яго творы ў зваротных спасылках. Імёны, уведзеныя ўручную, становяцца спасылкамі пры змене нататкі, а `Перабудаваць спасылкі графа` пераўтварае ўсю бібліятэку адразу.

## Публікацыя і AniList

Кнопка **Падзяліцца** у шапцы нататкі малюе картку з постарам, назвай, годам, жанрам, акцёрамі, рэйтынгамі і вашай ацэнкай. На камп'ютары выява капіюецца ў буфер абмену, а выбраная сетка адкрываецца з гатовым подпісам, так што застаецца ўставіць выяву ў допіс. На тэлефоне выява ідзе ў сістэмнае меню «Падзяліцца». Выяву ці подпіс таксама можна скапіяваць, а выяву захаваць у сховішча.

Каб сінхранізаваць анімэ, зарэгіструйце кліент на [anilist.co/settings/developer](https://anilist.co/settings/developer) з redirect URL `https://anilist.co/api/v2/oauth/pin`. Устаўце Client ID у Налады → Library → Сінхранізацыя з AniList, націсніце **Падключыць** і ўстаўце токен, які пакажа AniList. `Адправіць бягучую нататку ў AniList` адпраўляе прагрэс, статус і ацэнку. `Загрузіць прагрэс з AniList` абнаўляе нататкі, ніколі не адкочвае прагрэс назад і не кранае `My Rating`. Сінхранізуюцца толькі нататкі з `Source: anilist`.

Тыя ж нататкі сінхранізуюцца з MyAnimeList. Стварыце кліент на [myanimelist.net/apiconfig](https://myanimelist.net/apiconfig) з redirect URL `http://localhost`, устаўце яго Client ID (і Client Secret, калі ён ёсць) у Налады → Library → Сінхранізацыя з MyAnimeList, націсніце **Падключыць** і ўстаўце адрас, які адкрые браўзер. Запіс MyAnimeList для кожнага тайтла плагін знаходзіць праз AniList і сам абнаўляе токен. `Адправіць бягучую нататку ў MyAnimeList` і `Загрузіць прагрэс з MyAnimeList` працуюць гэтак жа, як каманды для AniList.

## Frontmatter

Кожная картка — звычайная нататка, і ўсё, што плагін пра яе ведае, захоўваецца ў frontmatter:

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
      # ...яшчэ 7 серый
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

Для серыяла `Runtime` азначае працягласць адной серыі. Кнігі маюць `ISBN` і захоўваюць раздзелы ў `Chapters` з тымі ж палямі `title`, `watched` і `my_rating`; анімэ мае `Rating AniList` і `Status`. Уласцівасць вокладкі можна перайменаваць у наладах, напрыклад у `image`.

Абнаўленне метаданых запаўняе толькі пустыя палі, таму вашы праўкі застаюцца. Яшчэ яно абнаўляе агульную колькасць серый у `Progress` і дадае новыя сезоны і назвы серый.

## Прыватнасць і сетка

Бібліятэка складаецца са звычайных нататак і працуе афлайн. Плагін выходзіць у сетку, калі вы шукаеце, абнаўляеце, сінхранізуеце ці дзеліцеся; калі вы адкрываеце нататку бібліятэкі, але не часцей за раз на 5 хвілін для кожнай нататкі; і адзін раз пасля абнаўлення плагіна або змены ключа, каб запоўніць новыя палі. Тэлеметрыі, аналітыкі і самаабнаўлення няма. API-ключы захоўваюцца ў лакальных наладах плагіна і адпраўляюцца толькі ў свой сэрвіс.

| Хост | Калі | Што адпраўляецца |
| --- | --- | --- |
| `www.omdbapi.com` | Пошук фільмаў і серыялаў | Назва або IMDb id, ключ OMDb |
| `openlibrary.org` | Пошук кніг; пошук раздзелаў, калі вы дадаеце або адкрываеце кнігу | Назва і аўтар, ISBN або id твора |
| `covers.openlibrary.org` | Вокладкі кніг | Id вокладкі |
| `www.googleapis.com` | Пошук кніг | Назва, ключ Google Books |
| `api.rawg.io` | Пошук гульняў | Назва, ключ RAWG |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | Пошук гульняў і вокладкі | Назва або Steam app id |
| `api.deezer.com` | Пошук музыкі | Альбом або выканаўца |
| `graphql.anilist.co` | Пошук анімэ; сінхранізацыя з AniList; id MyAnimeList для сінхранізацыі | Назва; ваш токен, прагрэс, статус і ацэнка; id AniList |
| `anilist.co` | Вы націскаеце **Падключыць** | Client ID, адкрываецца ў браўзеры |
| `myanimelist.net` | Вы націскаеце **Падключыць** для MyAnimeList; абнаўленне токена | Client ID і сакрэт, код аўтарызацыі, токен абнаўлення |
| `api.myanimelist.net` | Сінхранізацыя з MyAnimeList | Ваш токен, прагрэс, статус і ацэнка |
| `s4.anilist.co` | Банеры анімэ | Шлях на CDN |
| `comicvine.gamespot.com` | Пошук коміксаў | Назва, ключ Comic Vine |
| `v3-cinemeta.strem.io` | Даданне або абнаўленне фільма ці серыяла | IMDb id |
| `images.metahub.space`, `episodes.metahub.space` | Кадры | IMDb id, нумары сезона і серыі |
| `api.themoviedb.org`, `image.tmdb.org` | Даданне або абнаўленне фільма ці серыяла, калі зададзены ключ TMDB | IMDb id і ключ TMDB; шлях да выявы |
| `i.ytimg.com` | Кадры трэйлераў | Id відэа |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Адкрыццё нататкі з трэйлерам | Id відэа |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Вы націскаеце кнопку публікацыі | Подпіс: назва, ваша ацэнка, спасылка на крыніцу. Выява застаецца на прыладзе |

## Каманды

| Каманда | Што робіць |
| --- | --- |
| `Адкрыць бібліятэку` | Адкрывае ўкладку «Бібліятэка» |
| `Дадаць змест` | Шукае ў крыніцы і стварае нататку |
| `Шукаць у сваёй бібліятэцы` | Знаходзіць і адкрывае нататку бібліятэкі |
| `Абнавіць метаданыя бягучай нататкі` | Нанова загружае даныя актыўнай нататкі |
| `Абнавіць метаданыя ўсіх нататак` | Загружае даныя ўсіх нататак бібліятэкі па адной |
| `Перабудаваць спасылкі графа` | Ператварае `Genre`, `Creator` і `Cast` у спасылкі |
| `Знайсці і выдаліць дублікаты` | Паказвае нататкі з аднолькавым URL і выдаляе выбраныя |
| `Падзяліцца бягучай нататкай` | Адкрывае картку для публікацыі |
| `Адправіць бягучую нататку ў AniList` | Адпраўляе прагрэс, статус і ацэнку |
| `Загрузіць прагрэс з AniList` | Абнаўляе нататкі з вашага спіса AniList |
| `Адправіць бягучую нататку ў MyAnimeList` | Адпраўляе прагрэс, статус і ацэнку |
| `Загрузіць прагрэс з MyAnimeList` | Абнаўляе нататкі з вашага спіса MyAnimeList |

## Падтрымка

Пра памылкі пішыце ў [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues), ідэі прапануйце ў [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions). Плагін распаўсюджваецца па [ліцэнзіі MIT](../LICENSE).

Калі плагін вам спатрэбіўся, яго можна падтрымаць:

| | Сетка | Адрас |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
