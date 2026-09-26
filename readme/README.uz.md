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
  Filmlar, seriallar, kitoblar, anime, komikslar, o'yinlar va musiqa Obsidian qaydlari sifatida, muqovali kartochkalar galereyasida.
  <br />
  <a href="https://community.obsidian.md/plugins/library">Obsidian plaginlar katalogi</a>
</p>

## Imkoniyatlar

- Asarni nomi bo'yicha qidiring va posteri, yili, janri, mualliflari, aktyorlari va reytinglari to'ldirilgan qayd oling.
- Kutubxona toifalarga ajratilgan va nomi, yili, reytingi yoki sanasi bo'yicha saralangan muqovali kartochkalar ko'rinishida.
- Serial qismlarini yoki kitob boblarini belgilang va har birini baholang; `Progress` va `My Rating` ular asosida hisoblanadi.
- Film va serial qaydlarida treyler, kadrlar, davomiylik va mavsumlar ro'yxati bor.
- Janrlar, mualliflar va aktyorlar havola sifatida saqlanadi, shuning uchun ularning qaydlari barcha asarlarni orqa havolalarda va grafda to'playdi.
- Statistika paneli siz tanlagan toplarni va umumiy tomosha vaqtini ko'rsatadi.
- Asarni kartochka-rasm ko'rinishida X, Telegram, Reddit va yana oltita tarmoqqa ulashing.
- Anime progressi AniList bilan sinxronlanadi.
- Interfeys Obsidian qo'llab-quvvatlaydigan barcha tillarga tarjima qilingan. Bu README [30 tilda](./) mavjud.

## Tez boshlash

1. **Library** plaginini Sozlamalar → Tashqi plaginlar → Ko'rish orqali yoki [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases) sahifasidan o'rnating.
2. Sozlamalar → Library bo'limida har bir kontent turi uchun toifa qo'shing: Filmlar, Seriallar, Kitoblar, Komikslar, Oʻyinlar, Musiqa, Anime, Qoʻlda.
3. Manbalaringizga kerakli API kalitlarini kiriting (quyida qarang).
4. Yon paneldan «Kutubxona» yorlig'ini oching, **+** tugmasini bosing, toifani tanlang va asarni qidiring. Agar u kutubxonada allaqachon bo'lsa, mavjud qayd ochiladi.

Toifaning `Type` qiymati (masalan, `Movie`) qaysi qaydlar unga tegishli ekanini, jild esa yangi qaydlar qayerga tushishini belgilaydi. Ikkala sozlama ham toifa yonidagi **Kengaytirilgan** tugmasi bilan ochiladi.

## Manbalar

| Toifa | Manba | Kalit |
| --- | --- | --- |
| Filmlar, seriallar | OMDb | [Bepul kalit](https://www.omdbapi.com/apikey.aspx) |
| Kitoblar | Google Books + Open Library | Ixtiyoriy [Google Books kaliti](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| O'yinlar | RAWG + Steam | [Bepul RAWG kaliti](https://rawg.io/apidocs); Steam uchun kalit kerak emas |
| Musiqa | Deezer | Kerak emas |
| Anime | AniList | Kerak emas |
| Komikslar | Comic Vine | [Bepul kalit](https://comicvine.gamespot.com/api/) |
| Qolgan hammasi | Qo'lda: maydonlarni o'zingiz to'ldirasiz | Kerak emas |

Treylerlar, kadrlar, davomiylik va mavsumlar ro'yxati Cinemeta'dan kalitsiz keladi. [TMDB kaliti](https://www.themoviedb.org/settings/api) mavsum baholari va ko'proq kadr qo'shadi.

## Progress va baholar

Serial qaydining sarlavhasida mavsumlar ro'yxati bor va har bir mavsum qismlar ro'yxatiga ochiladi, manbada bo'lsa, nomlari bilan. Qismni yoki butun mavsumni ko'rilgan deb belgilang va 1 dan 10 gacha baho qo'ying. `Progress` belgilangan qismlarni sanaydi, mavsum bahosi baholangan qismlarning o'rtachasiga, `My Rating` esa baholangan mavsumlarning o'rtachasiga teng. Baholangan qismi yo'q mavsumga baho to'g'ridan-to'g'ri qo'yiladi.

Anime ham xuddi shunday, qism nomlarisiz bitta mavsum sifatida ishlaydi.

Kitob boblari Open Library'dagi nashr mundarijasidan olinadi. Mundarija topilmasa, qayd sarlavhasidagi **Bob qo'shish** tugmasi boblar sonini yoki har qatorda bitta bob nomini qabul qiladi. Shundan so'ng `Progress` sahifalarni emas, boblarni sanaydi, o'qilgan sahifalar esa boblarning xuddi shu ulushiga o'tadi.

Eski versiyalardagi qaydlar progressini saqlaydi. Hech narsa belgilamaguningizcha, `Progress` sonigacha bo'lgan birinchi qismlar ko'rilgan deb ko'rsatiladi.

## Statistika

«Kutubxona» yorlig'ining yuqorisidagi panel Sozlamalar → Library → Statistika bo'limida tanlangan ustunlarni ko'rsatadi: toifaning eng yuqori baholangan uchta asari, xususiyatning eng ko'p uchraydigan uchta qiymati (janrlar, aktyorlar yoki boshqa istalgani) va filmlar, seriallar hamda animega sarflangan soatlar. Diagramma ostida kuniga bitta taqqoslash chiqadi, masalan: Apollon 11 Oyga 8 marta borib kelishi mumkin edi.

## Graf bog'lanishlari

`Genre`, `Creator` va `Cast` `[[Christopher Nolan]]` kabi havolalarni saqlaydi, shuning uchun janr yoki shaxs qaydi uning asarlarini orqa havolalarda ko'rsatadi. Qo'lda yozilgan ismlar qayd o'zgarganda havolaga aylanadi, `Graf havolalarini qayta qurish` esa butun kutubxonani birdaniga o'zgartiradi.

## Ulashish va AniList

Qayd sarlavhasidagi **Ulashish** tugmasi poster, nom, yil, janr, aktyorlar, reytinglar va sizning bahoyingiz bilan kartochka chizadi. Kompyuterda rasm almashish buferiga nusxalanadi, tanlangan tarmoq esa tayyor yozuv bilan ochiladi, sizga rasmni postga qo'yish qoladi. Telefonda rasm tizimning «Ulashish» menyusiga yuboriladi. Rasm yoki yozuvni nusxalash, rasmni esa omborga saqlash ham mumkin.

Animeni sinxronlash uchun [anilist.co/settings/developer](https://anilist.co/settings/developer) sahifasida redirect URL `https://anilist.co/api/v2/oauth/pin` bo'lgan klient ro'yxatdan o'tkazing. Client ID'ni Sozlamalar → Library → AniList sinxronizatsiyasi bo'limiga qo'ying, **Ulanish** tugmasini bosing va AniList ko'rsatgan tokenni qo'ying. `Joriy eslatmani AniList ga yuborish` progress, holat va bahoni yuboradi. `AniList dan jarayonni yuklash` qaydlarni yangilaydi, progressni hech qachon orqaga qaytarmaydi va `My Rating`ga tegmaydi. Faqat `Source: anilist` bo'lgan qaydlar sinxronlanadi.

Shu qaydlar MyAnimeList bilan ham sinxronlanadi. [myanimelist.net/apiconfig](https://myanimelist.net/apiconfig) sahifasida redirect URL `http://localhost` bo'lgan klient yarating, uning Client ID'sini (bo'lsa, Client Secret'ini) Sozlamalar → Library → MyAnimeList sinxronizatsiyasi bo'limiga qo'ying, **Ulanish** tugmasini bosing va brauzer ochgan manzilni qo'ying. Plagin har bir asarning MyAnimeList yozuvini AniList orqali topadi va tokenni o'zi yangilaydi. `Joriy eslatmani MyAnimeList ga yuborish` va `MyAnimeList dan jarayonni yuklash` AniList buyruqlari kabi ishlaydi.

## Frontmatter

Har bir kartochka oddiy qayd va plagin u haqida biladigan hamma narsa frontmatter ichida saqlanadi:

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
      # ...yana 7 qism
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

Serialda `Runtime` bitta qismning davomiyligini bildiradi. Kitoblarda `ISBN` bor, boblar esa xuddi shunday `title`, `watched` va `my_rating` maydonlari bilan `Chapters` ichida saqlanadi; animeda `Rating AniList` va `Status` bor. Muqova xususiyati nomini sozlamalarda o'zgartirish mumkin, masalan `image` ga.

Metama'lumotlarni yangilash faqat bo'sh maydonlarni to'ldiradi, shuning uchun tuzatishlaringiz saqlanib qoladi. U, shuningdek, `Progress` dagi umumiy qismlar sonini yangilaydi va yangi mavsumlar hamda qism nomlarini qo'shadi.

## Maxfiylik va tarmoq

Kutubxona oddiy qaydlardan iborat va oflayn ishlaydi. Plagin tarmoqqa siz qidirganingizda, yangilaganingizda, sinxronlaganingizda yoki ulashganingizda; kutubxona qaydini ochganingizda, lekin har bir qayd uchun 5 daqiqada bir martadan ko'p emas; va plagin yangilangandan yoki kalit o'zgargandan keyin yangi maydonlarni to'ldirish uchun bir marta chiqadi. Telemetriya, analitika va o'z-o'zini yangilash yo'q. API kalitlari plaginning mahalliy sozlamalarida saqlanadi va faqat o'z xizmatiga yuboriladi.

| Xost | Qachon | Nima yuboriladi |
| --- | --- | --- |
| `www.omdbapi.com` | Film va serial qidirish | Nom yoki IMDb id, OMDb kaliti |
| `openlibrary.org` | Kitob qidirish; kitob qo'shilganda yoki ochilganda boblarni qidirish | Nom va muallif, ISBN yoki asar id |
| `covers.openlibrary.org` | Kitob muqovalari | Muqova id |
| `www.googleapis.com` | Kitob qidirish | Nom, Google Books kaliti |
| `api.rawg.io` | O'yin qidirish | Nom, RAWG kaliti |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | O'yin qidirish va muqovalar | Nom yoki Steam app id |
| `api.deezer.com` | Musiqa qidirish | Albom yoki ijrochi |
| `graphql.anilist.co` | Anime qidirish; AniList sinxronlash; sinxronlash uchun MyAnimeList id | Nom; tokeningiz, progress, holat va baho; AniList id |
| `anilist.co` | Siz **Ulanish** tugmasini bosasiz | Client ID, brauzerda ochiladi |
| `myanimelist.net` | Siz MyAnimeList uchun **Ulanish** tugmasini bosasiz; tokenni yangilash | Client ID va sir, avtorizatsiya kodi, yangilash tokeni |
| `api.myanimelist.net` | MyAnimeList sinxronlash | Tokeningiz, progress, holat va baho |
| `s4.anilist.co` | Anime bannerlari | CDN yo'li |
| `comicvine.gamespot.com` | Komiks qidirish | Nom, Comic Vine kaliti |
| `v3-cinemeta.strem.io` | Film yoki serial qo'shish yoki yangilash | IMDb id |
| `images.metahub.space`, `episodes.metahub.space` | Kadrlar | IMDb id, mavsum va qism raqamlari |
| `api.themoviedb.org`, `image.tmdb.org` | TMDB kaliti o'rnatilgan bo'lsa, film yoki serial qo'shish yoki yangilash | IMDb id va TMDB kaliti; rasm yo'li |
| `i.ytimg.com` | Treyler kadrlari | Video id |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Treyleri bor qaydni ochish | Video id |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Siz ulashish tugmasini bosasiz | Yozuv: nom, sizning bahoyingiz, manba havolasi. Rasm qurilmangizda qoladi |

## Buyruqlar

| Buyruq | Nima qiladi |
| --- | --- |
| `Kutubxonani ochish` | «Kutubxona» yorlig'ini ochadi |
| `Kontent qo'shish` | Manbadan qidirib, qayd yaratadi |
| `Kutubxonangizda qidirish` | Kutubxona qaydini topib, ochadi |
| `Joriy eslatma uchun metadatani yangilash` | Faol qayd ma'lumotlarini qayta yuklaydi |
| `Barcha eslatmalar uchun metadatani yangilash` | Kutubxonaning barcha qaydlarini birma-bir yuklaydi |
| `Graf havolalarini qayta qurish` | `Genre`, `Creator` va `Cast` ni havolaga aylantiradi |
| `Takrorlanishlarni topish va o'chirish` | URL bir xil qaydlarni ko'rsatadi va tanlanganlarini o'chiradi |
| `Joriy eslatmani ulashish` | Ulashish kartochkasini ochadi |
| `Joriy eslatmani AniList ga yuborish` | Progress, holat va bahoni yuboradi |
| `AniList dan jarayonni yuklash` | Qaydlarni AniList ro'yxatingizdan yangilaydi |
| `Joriy eslatmani MyAnimeList ga yuborish` | Progress, holat va bahoni yuboradi |
| `MyAnimeList dan jarayonni yuklash` | Qaydlarni MyAnimeList ro'yxatingizdan yangilaydi |

## Yordam

Xatolar haqida [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues) bo'limiga, g'oyalarni [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions) bo'limiga yozing. Plagin [MIT litsenziyasi](../LICENSE) asosida tarqatiladi.

Plagin foydali bo'lsa, uni qo'llab-quvvatlashingiz mumkin:

| | Tarmoq | Manzil |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
