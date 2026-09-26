> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

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
  Фильмдер, сериалдар, кітаптар, аниме, комикстер, ойындар мен музыка Obsidian жазбалары ретінде, мұқабалы карточкалар галереясымен көрсетіледі.
  <br />
  <a href="https://community.obsidian.md/plugins/library">Obsidian плагиндер каталогы</a>
</p>

## Мүмкіндіктер

- Туындыны атауы бойынша іздеп, постері, жылы, жанры, авторлары, актерлері мен рейтингтері толтырылған жазба алыңыз.
- Кітапхана санаттарға бөлінген, атауы, жылы, рейтингі немесе күні бойынша сұрыпталған мұқабалы карточкалар түрінде көрінеді.
- Сериалдың серияларын немесе кітаптың тарауларын белгілеп, әрқайсысын бағалаңыз; `Progress` пен `My Rating` солар бойынша есептеледі.
- Фильм мен сериал жазбаларында трейлер, кадрлар, ұзақтығы және маусымдар тізімі бар.
- Жанрлар, авторлар мен актерлер сілтеме ретінде сақталады, сондықтан олардың жазбалары барлық туындыларды кері сілтемелер мен графта жинайды.
- Статистика панелі сіз таңдаған топтарды және жалпы көру уақытын көрсетеді.
- Туындымен карточка-сурет түрінде X, Telegram, Reddit және тағы алты желіде бөлісіңіз.
- Аниме прогресі AniList-пен синхрондалады.
- Интерфейс Obsidian қолдайтын барлық тілдерге аударылған. Бұл README [30 тілде](./) бар.

## Жылдам бастау

1. **Library** плагинін Settings → Community plugins → Browse арқылы немесе [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases) бетінен орнатыңыз.
2. Settings → Library бөлімінде әр контент түріне санат қосыңыз: Фильмдер, Сериялар, Кітаптар, Комикстер, Ойындар, Музыка, Аниме, Қолмен.
3. Дереккөздеріңізге қажет API кілттерін енгізіңіз (төменде қараңыз).
4. Бүйір панельден «Кітапхана» қойындысын ашып, **+** батырмасын басыңыз, санатты таңдап, туындыны іздеңіз. Ол кітапханада бұрыннан болса, бар жазба ашылады.

Санаттың `Type` мәні (мысалы, `Movie`) қай жазбалар оған жататынын, ал қалта жаңа жазбалардың қайда түсетінін анықтайды. Екі баптау да санат жанындағы **Қосымша** батырмасымен ашылады.

## Дереккөздер

| Санат | Дереккөз | Кілт |
| --- | --- | --- |
| Фильмдер, сериалдар | OMDb | [Тегін кілт](https://www.omdbapi.com/apikey.aspx) |
| Кітаптар | Google Books + Open Library | Міндетті емес [Google Books кілті](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| Ойындар | RAWG + Steam | [Тегін RAWG кілті](https://rawg.io/apidocs); Steam-ге кілт керек емес |
| Музыка | Deezer | Қажет емес |
| Аниме | AniList | Қажет емес |
| Комикстер | Comic Vine | [Тегін кілт](https://comicvine.gamespot.com/api/) |
| Қалғанының бәрі | Қолмен: өрістерді өзіңіз толтырасыз | Қажет емес |

Трейлерлер, кадрлар, ұзақтық және маусымдар тізімі Cinemeta-дан кілтсіз келеді. [TMDB кілті](https://www.themoviedb.org/settings/api) маусым бағаларын және көбірек кадр қосады.

## Прогресс және бағалар

Сериал жазбасының тақырыбында маусымдар тізімі бар, әр маусым серияларға ашылады, дереккөзде болса, атауларымен. Серияны немесе бүкіл маусымды көрілді деп белгілеп, 1-ден 10-ға дейін баға қойыңыз. `Progress` белгіленген серияларды санайды, маусым бағасы бағаланған сериялардың орташасына тең, ал `My Rating` бағаланған маусымдардың орташасына тең. Бағаланған сериясы жоқ маусымға баға тікелей қойылады.

Аниме де дәл солай, серия атауларынсыз бір маусым ретінде жұмыс істейді.

Кітап тараулары Open Library-дегі басылымның мазмұнынан алынады. Мазмұн табылмаса, жазба тақырыбындағы **Тарау қосу** батырмасы тараулар санын немесе әр жолға бір тарау атауын қабылдайды. Содан кейін `Progress` беттерді емес, тарауларды санайды, ал оқылған беттер тараулардың сол үлесіне ауысады.

Ескі нұсқалардағы жазбалар прогресін сақтайды. Сіз ештеңе белгілемейінше, `Progress` санына дейінгі алғашқы сериялар көрілген болып көрсетіледі.

## Статистика

«Кітапхана» қойындысының жоғарғы жағындағы панель Settings → Library → Статистика бөлімінде таңдалған бағандарды көрсетеді: санаттың ең жоғары бағаланған үш туындысы, қасиеттің ең жиі кездесетін үш мәні (жанрлар, актерлер немесе кез келген басқа) және фильмдерге, сериалдарға, анимеге жұмсалған сағаттар. Диаграмманың астында күніне бір салыстыру шығады, мысалы: «Аполлон-11» Айға 8 рет барып қайта алар еді.

## Граф байланыстары

`Genre`, `Creator` және `Cast` өрістері `[[Christopher Nolan]]` сияқты сілтемелерді сақтайды, сондықтан жанрдың немесе адамның жазбасы оның туындыларын кері сілтемелерде көрсетеді. Қолмен енгізілген атаулар жазба өзгергенде сілтемеге айналады, ал `Граф байланыстарын қайта құру` бүкіл кітапхананы бірден түрлендіреді.

## Бөлісу және AniList

Жазба тақырыбындағы **Бөлісу** батырмасы постер, атау, жыл, жанр, актерлер, рейтингтер және сіздің бағаңыз бар карточка салады. Компьютерде сурет алмасу буферіне көшіріледі, ал таңдалған желі дайын жазумен ашылады, сізге суретті постқа қою ғана қалады. Телефонда сурет жүйелік «Бөлісу» мәзіріне жіберіледі. Суретті немесе жазуды көшіруге, ал суретті қоймаға сақтауға да болады.

Анимені синхрондау үшін [anilist.co/settings/developer](https://anilist.co/settings/developer) бетінде redirect URL `https://anilist.co/api/v2/oauth/pin` болатын клиент тіркеңіз. Client ID-ді Settings → Library → AniList синхрондау бөліміне қойып, **Қосылу** батырмасын басыңыз да, AniList көрсеткен токенді қойыңыз. `Ағымдағы жазбаны AniList-ке жіберу` прогресті, күйді және бағаны жібереді. `AniList-тен прогресті жүктеу` жазбаларды жаңартады, прогресті ешқашан артқа қайтармайды және `My Rating` өрісіне тимейді. Тек `Source: anilist` бар жазбалар синхрондалады.

Сол жазбалар MyAnimeList-пен де синхрондалады. [myanimelist.net/apiconfig](https://myanimelist.net/apiconfig) бетінде redirect URL `http://localhost` болатын клиент жасап, оның Client ID-ін (бар болса, Client Secret-ін) Settings → Library → MyAnimeList синхрондау бөліміне қойыңыз, **Қосылу** батырмасын басып, браузер ашқан мекенжайды қойыңыз. Плагин әр туындының MyAnimeList жазбасын AniList арқылы табады және токенді өзі жаңартады. `Ағымдағы жазбаны MyAnimeList-ке жіберу` және `MyAnimeList-тен прогресті жүктеу` AniList командалары сияқты жұмыс істейді.

## Frontmatter

Әр карточка кәдімгі жазба, ал плагин ол туралы білетіннің бәрі frontmatter ішінде сақталады:

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
      # ...тағы 7 серия
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

Сериалда `Runtime` бір серияның ұзақтығын білдіреді. Кітаптарда `ISBN` бар, ал тараулар дәл сондай `title`, `watched` және `my_rating` өрістерімен `Chapters` ішінде сақталады; анимеде `Rating AniList` пен `Status` бар. Мұқаба қасиетінің атын баптауларда өзгертуге болады, мысалы `image` деп.

Метадеректерді жаңарту тек бос өрістерді толтырады, сондықтан сіздің түзетулеріңіз сақталады. Ол сондай-ақ `Progress` ішіндегі жалпы серия санын жаңартып, жаңа маусымдар мен серия атауларын қосады.

## Құпиялылық және желі

Кітапхана кәдімгі жазбалардан тұрады және офлайн жұмыс істейді. Плагин желіге сіз іздегенде, жаңартқанда, синхрондағанда немесе бөліскенде; кітапхана жазбасын ашқанда, бірақ әр жазба үшін 5 минутта бір реттен жиі емес; және плагин жаңартылғаннан немесе кілт өзгергеннен кейін жаңа өрістерді толтыру үшін бір рет шығады. Телеметрия, аналитика және өздігінен жаңарту жоқ. API кілттері плагиннің жергілікті баптауларында сақталады және тек өз қызметіне жіберіледі.

| Хост | Қашан | Не жіберіледі |
| --- | --- | --- |
| `www.omdbapi.com` | Фильмдер мен сериалдарды іздеу | Атау немесе IMDb id, OMDb кілті |
| `openlibrary.org` | Кітап іздеу; кітапты қосқанда немесе ашқанда тарауларды іздеу | Атау мен автор, ISBN немесе туынды id |
| `covers.openlibrary.org` | Кітап мұқабалары | Мұқаба id |
| `www.googleapis.com` | Кітап іздеу | Атау, Google Books кілті |
| `api.rawg.io` | Ойын іздеу | Атау, RAWG кілті |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | Ойын іздеу және мұқабалар | Атау немесе Steam app id |
| `api.deezer.com` | Музыка іздеу | Альбом немесе орындаушы |
| `graphql.anilist.co` | Аниме іздеу; AniList синхрондау; синхрондауға арналған MyAnimeList id | Атау; сіздің токеніңіз, прогресс, күй және баға; AniList id |
| `anilist.co` | Сіз **Қосылу** батырмасын басасыз | Client ID, браузерде ашылады |
| `myanimelist.net` | Сіз MyAnimeList үшін **Қосылу** батырмасын басасыз; токенді жаңарту | Client ID мен құпия, авторизация коды, жаңарту токені |
| `api.myanimelist.net` | MyAnimeList синхрондау | Сіздің токеніңіз, прогресс, күй және баға |
| `s4.anilist.co` | Аниме баннерлері | CDN жолы |
| `comicvine.gamespot.com` | Комикс іздеу | Атау, Comic Vine кілті |
| `v3-cinemeta.strem.io` | Фильм немесе сериал қосу не жаңарту | IMDb id |
| `images.metahub.space`, `episodes.metahub.space` | Кадрлар | IMDb id, маусым және серия нөмірлері |
| `api.themoviedb.org`, `image.tmdb.org` | TMDB кілті орнатылса, фильм немесе сериал қосу не жаңарту | IMDb id және TMDB кілті; сурет жолы |
| `i.ytimg.com` | Трейлер кадрлары | Бейне id |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Трейлері бар жазбаны ашу | Бейне id |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Сіз бөлісу батырмасын басасыз | Жазу: атау, сіздің бағаңыз, дереккөз сілтемесі. Сурет құрылғыда қалады |

## Командалар

| Команда | Не істейді |
| --- | --- |
| `Кітапхананы ашу` | «Кітапхана» қойындысын ашады |
| `Мазмұн қосу` | Дереккөзден іздеп, жазба жасайды |
| `Кітапханаңызда іздеу` | Кітапхана жазбасын тауып, ашады |
| `Ағымдағы жазбаның метадеректерін жаңарту` | Белсенді жазбаның деректерін қайта жүктейді |
| `Барлық жазбалардың метадеректерін жаңарту` | Кітапхананың барлық жазбаларын бір-бірлеп жүктейді |
| `Граф байланыстарын қайта құру` | `Genre`, `Creator` және `Cast` өрістерін сілтемеге айналдырады |
| `Қайталануларды тауып, жою` | URL бірдей жазбаларды көрсетіп, таңдалғандарын жояды |
| `Ағымдағы жазбамен бөлісу` | Бөлісу карточкасын ашады |
| `Ағымдағы жазбаны AniList-ке жіберу` | Прогрессті, күйді және бағаны жібереді |
| `AniList-тен прогресті жүктеу` | Жазбаларды AniList тізіміңізден жаңартады |
| `Ағымдағы жазбаны MyAnimeList-ке жіберу` | Прогрессті, күйді және бағаны жібереді |
| `MyAnimeList-тен прогресті жүктеу` | Жазбаларды MyAnimeList тізіміңізден жаңартады |

## Қолдау

Қателер туралы [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues) бөліміне, идеяларды [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions) бөліміне жазыңыз. Плагин [MIT лицензиясы](../LICENSE) бойынша таратылады.

Плагин пайдалы болса, оны қолдай аласыз:

| | Желі | Мекенжай |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
