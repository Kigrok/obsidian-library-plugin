> [EN](README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

<p align="center">
  <img src="banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Kutubxona</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.1.2-blue" alt="Versiya">
  <img src="https://img.shields.io/github/downloads/Kigrok/obsidian-library-plugin/total?color=brightgreen" alt="Yuklamalar">
  <img src="https://img.shields.io/badge/Obsidian-v1.8.7+-purple" alt="Obsidian versiyasi">
  <img src="https://img.shields.io/github/license/Kigrok/obsidian-library-plugin?color=orange" alt="Litsenziya">
</p>

<p align="center">
  <b>Filmlaringizni, seriallaringizni, kitoblaringizni va boshqalarni vizual galeriyaga joylashtiring — to'g'ridan-to'g'ri Obsidian ichida.</b>
  <br />
  Ilova ichida nomlarni qidiring va qo'shing, metadatalarni avtomatik yuklang, taraqqiyotni kuzating va hamma narsani grafikingizga bog'lang.
</p>

<p align="center">
  <a href="https://community.obsidian.md/plugins/library">Obsidian Jamiyat Plaginlar katalogida ko'ring</a>
</p>

---

## Asosiy Xususiyatlar

- **Vizual Karta Tarmog'i** — Maxsus Kutubxona yorlig'i yig'mingizni muqova san'at kartalari galeriyasi sifatida ko'rsatadi.
- **Ichki Qidiruv** — Ilova ichida nomlarni qidiring va qo'shing: filmlar va seriallar uchun OMDb, kitoblar uchun Open Library yoki Google Books, o'yinlar uchun RAWG, musiqi uchun Deezer, anime uchun Jikan, komikslar uchun Comic Vine.
- **Aqlli Serial Kuzatuvi** — Mavsumlar va epizodlar soni avtomatik yuklanadi va sinxronlanadi.
- **Taraqqiyot Ko'rsatkichlari** — Kartalarda va eslatma sarlavhalarida vizual taraqqiyot paneli qancha ko'rgan yoki o'qiganingizni ko'rsatadi.
- **Boy Eslatma Sarlavhalari** — Har bir kontent eslatmasi barcha asosiy metadatalar bilan avtomatik yaratilgan sarlavha oladi.
- **Maxsus Kategoriyalar** — Filmlar, Seriallar, Anime, Komikslar, Kitoblar, O'yinlar, Musiqi yoki qo'lda manba orqali boshqa narsalar uchun kategoriyalar yarating.
- **Grafik Bog'lanishlari** — `Related` oldingi ma'lumot xususiyati har bir eslatmani uning kategoriyasi, janrlari va yaratuvchilari bilan bog'laydi, chiroyli grafik uchun avtomatik sinxronlanadi.
- **Saralash & Yig'ilish** — Kartalarni nom, yil, reyting yoki sana bo'yicha saralang; istalgan kategoriyani yig'ing.
- **Statistika** — Eng yaxshi janrlar, eng yaxshi yaratuvchilar (faqat filmlar va seriallar) va medal reytinglari bilan har bir kategoriya uchun eng yaxshi elementlar.
- **Takroriy Topish** — URL bo'yicha bir xil nomni qo'shishni avtomatik to'xtatadi. Ichki buyruq mavjud takroriy topadi va o'chiradi.
- **Ko'p Tilli** — 31 til.

---

## Tez Boshlash

### 1. O'rnatish

**Kutubxona**ni [Obsidian Jamiyat Plaginlar katalogidan](https://community.obsidian.md/plugins/library) o'rnating (Sozlamalar > Jamiyat plaginlari > Ko'rish > "Kutubxona" qidiring) yoki [GitHub Chiqarishlaridan](https://github.com/Kigrok/obsidian-library-plugin/releases) qo'lda o'rnating.

### 2. Asosiy Sozlash

1. **Sozlamalar** > **Kutubxona**ga o'ting.
2. **Kategoriyalaringizni** qo'shing — ochiladigan menyudan oldindan belgilangan turini (Filmlar, Seriallar, Kitoblar, Komikslar, O'yinlar, Musiqi, Anime yoki Qo'lda) tanlang va **Kategoriya qo'shing** tugmasini bosing. Har bir kategoriyada tilingizga tarjima qilingan ko'rsatilgan nom, `Type` qiymati (har doim inglizcha, masalan `Movie`), manba va eslatmalarni saqlash uchun ixtiyoriy papka mavjud.
3. _(Ixtiyoriy)_ Ishlatgan xizmatlaringiz uchun API kalitlarini kiriting: filmlar/seriallar uchun [OMDb](https://www.omdbapi.com/apikey.aspx), o'yinlar uchun [RAWG](https://rawg.io/apidocs), komikslar uchun [Comic Vine](https://comicvine.gamespot.com/api/). Anime (Jikan) va musiqi (Deezer) kalit talab qilmaydi.

### 3. Nom Bilan Qo'shish

Oldingi ma'lumotni qo'lda to'ldirishga hojat yo'q — faqat nomini qidirib film, serial, kitab, anime yoki komiks qo'shing:

1. Lent belgisidan **Kutubxona** yorlig'ini oching (yoki `Open Library` buyrug'ini ishga tushiring).
2. Kutubxona sahifasining yuqori o'ng burchagidagi **+** tugmasini bosing (yoki `Add content` buyrug'ini ishga tushiring).
3. Kategoriyani tanlang, **nomni** qidiruv maydoniga kiriting va natijani tanlang.
4. Karta darhol poster, yil, janr, yaratuvchilar va reyting avtomatik to'ldirilgan holda yaratiladi.

**+** yonidagi **Qidirish** tugmasi kutubxoningizda mavjud nomlarni qidiradi.

**Qo'lda** Kategoriyalar uchun faqat nom kiriting va muqovani, yilni va boshqa maydonlarni o'zingiz to'ldiring.

---

## Statistika

Kutubxona yorlig'i yuqorida yig'iladigan **Statistika** bo'limini o'z ichiga oladi:

- **Eng Yaxshi Janrlar** — butun kutubxonaingiz bo'yicha chastotaga ko'ra reytinglanadi.
- **Eng Yaxshi Yaratuvchilar** — ular ko'rinadigan filmlar va seriallar soni bo'yicha reytinglanadi.
- **Kategoriya bo'yicha Eng Yaxshi** — har bir kategoriya uchun (Filmlar, Seriallar, Kitoblar va h.k.), reyting bo'yicha TOP 3 element kichik muqova rasmlari bilan.

---

## Takroriy Topish

Kutubxona `URL` maydonini tekshirish orqali takroriy yozuvlarni oldini oladi:

- **Qo'shishda** — bir xil URL ga ega yozuv allaqachon mavjud bo'lsa, takroriy yaratish o'rniga mavjud yozuvni ochadi.
- **Takroriy Topish va O'chirish** — bu buyruqni palitradan ishga tushirib, barcha yozuvlarni skanerlang, URL bo'yicha guruhlang va modal orqali tanlangan takroriy o'chiring.

---

## Manbalar

Har bir kategoriya uning qidiruvini ta'minlaydigan manbaga bog'langan:

| Manba           | Kontent turlari   | API kaliti                                                      |
| ---------------- | --------------- | ----------------------------------------------------------- |
| **OMDb**         | Filmlar, Seriallar  | Bepul kalit talab qilinadi — [omdbapi.com](https://www.omdbapi.com/apikey.aspx) |
| **Books**        | Kitoblar           | Open Library (kalit yo'q) + Google Books (ixtiyoriy bepul kalit). Natijalar birlashtirilgan — Google Books birinchi, Open Library pastda. |
| **RAWG**         | O'yinlar           | Bepul kalit talab qilinadi — [rawg.io/apidocs](https://rawg.io/apidocs) |
| **Deezer**       | Musiqi (albomlar)  | Yo'q                                                        |
| **Jikan**        | Anime           | Yo'q — bepul rasmiy bo'lmagan MyAnimeList API, kalit kerak emas       |
| **Comic Vine**   | Komikslar          | Bepul kalit talab qilinadi — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Qo'lda**       | Boshqa narsalar   | Yo'q — siz nom kiritsangiz va maydonlarni o'zingiz to'ldirasiz          |

---

## Maxfiylik & Tarmoq Ishlatilishi

Kutubxona **offline-birinchi**. Plagin faqat qo'shish uchun nomni faol qidirganingizda va faqat siz kiritgan qidiruv shartlari bilan tarmoqqa murojaat qiladi:

| Xizmat | Qachon | Nima yuboriladi | Nega |
| --- | --- | --- | --- |
| `www.omdbapi.com` | OMDb asosidagi kategoriyani qidirganingizda | Siz kiritgan nom va OMDb API kalitingiz | Film/serial metadatasini yuklash (yil, janr, aktyorlar, reyting, poster, epizodlar soni) |
| `openlibrary.org` | Open Library kategoriyasini qidirganingizda | Siz kiritgan nom | Kitab metadatasini yuklash (muallif, yil, mavzular, muqova id) |
| `covers.openlibrary.org` | Kitab kartasining muqovasi bo'lsa | Open Library muqova id si | Muqova rasmini yuklash |
| `www.googleapis.com` | Google Books kategoriyasini qidirganingizda | Siz kiritgan nom va Google Books kalitingiz | Kitab metadatasini yuklash (muallif, yil, kategoriyalar, sahifalar soni, muqova, ISBN) |
| `api.rawg.io` | RAWG o'yin kategoriyasini qidirganingizda | Siz kiritgan nom va RAWG kalitingiz | O'yin metadatasini yuklash (yil, janr, ishlab chiqaruvchi, muqova) |
| `api.deezer.com` | Deezer musiqi kategoriyasini qidirganingizda | Siz kiritgan albom yoki ijrochi | Albom metadatasini yuklash (ijrochi, yil, janr, treklar soni, muqova) |
| `api.jikan.moe` | Anime kategoriyasini qidirganingizda | Siz kiritgan nom | Anime metadatasini yuklash (nom, yil, janr, epizodlar, MAL bali, syujet, poster) |
| `comicvine.gamespot.com` | Komiks kategoriyasini qidirganingizda | Siz kiritgan nom va Comic Vine kalitingiz | Komiks metadatasini yuklash (nom, yil, nashriyot, sonlar soni, muqova) |

Boshqa hech qanday ma'lumot sizning vaultingizdan chiqmaydi. Plaginda **telemetriya, analitika va o'zini yangilash mexanizmi yo'q**. API kalitlari (OMDb, Google Books, RAWG, Comic Vine) faqat mahalliy plagin sozlamalarida saqlanadi va faqat tegishli xizmatlarga yuboriladi. Muqova rasmlari to'g'ridan-to'g'ri har bir manbaning qaytargan URL laridan yuklanadi.

---

## Oldingi Ma'lumot Sxemasi

### Film

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

### Serial

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

> **Serial avtomatik yangilanishi:** `Refresh metadata for current note` buyrug'ini ishga tushiring (yoki faqat eslatmani oching) va plugin `Progress` dagi umumiy epizod sonini (masalan `25/42` dan `25/50` ga) va `Season` sonini yangilaydi, ko'rgan soningiz o'zgarmaydi.

### Kitab

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

## Grafik Bog'lanishlari

Har bir kontent eslatmasi avtomatik yangilangan `Related` oldingi ma'lumot xususiyatini oladi — eslatma matniga hech qachon tegilmaydi:

```yaml
Related:
    - "[[Movie]]"
    - "[[Action]]"
    - "[[Sci-Fi]]"
    - "[[Christopher Nolan]]"
```

Ushbu bog'lanishlar eslatmalaringizni umumiy kategoriyalar, janrlar va yaratuvchilar orqali bog'laydi, shuning uchun Obsidian grafik ko'rinishi toza klasterlar shakllantiradi. Har bir kategoriya uchun (masalan `Movie`) haqiqiy hub eslatmasi yaratiladi, shuning uchun hal qilinmagan bog'lanishlar yashirin bo'lsa ham klasterlar ko'rinadi. Xususiyat eslatma yaratilganda yoziladi va uning metadatalari o'zgarganda yangilanadi — to'liq qayta qurishni majburlash uchun `Rebuild graph links` buyrug'ini ishga tushiring.

---

## Buyruqlar

| Buyruq                              | Tavsif                                                              |
| ------------------------------------ | ----------------------------------------------------------------------- |
| `Open Library`                       | Kutubxona galeriya yorlig'ini oching.                                           |
| `Add content`                        | Manbani qidiring va kontent eslatma yarating (yoki Qo'lda nom kiriting). |
| `Search your library`                | Kutubxoningizdagi mavjud istalgan eslatmani xira qidiring va oching.                 |
| `Refresh metadata for current note`  | Faol eslatma uchun metadatalarni qayta yuklang; serial epizodlar sonini yangilaydi.   |
| `Rebuild graph links`                | Har bir kontent eslatmasini uning kategoriyasi, janrlari va yaratuvchilari bilan bog'lang.          |
| `Find & remove duplicates`           | Barcha eslatmalarni URL bo'yicha skanerlang, takroriy ko'rsating va tanlanganlarni o'chiring.       |

---

## Hissa qo'shish va Qo'llab-quvvatlash

- **Xato topdingiz mi?** [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues) oching.
- **Xususiyat g'oyangiz bormi?** [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions) boshlang.
- **Plagini yaxshi ko'rdingizmi?** Qo'llab-quvvatlashni ko'rsatish uchun repositoryni yulduzlashni ko'rib chiqing!

---

## Raxmat

Agar bu plugin foydali bo'lsa, uning rivojlanishini qo'llab-quvvatlashni ko'rib chiqing:

| | Tarmoq | Manzil |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |

---
