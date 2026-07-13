> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

<p align="center">
  <img src="../banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Kitabxana</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.2.1-blue" alt="Versiya">
  <img src="https://img.shields.io/github/downloads/Kigrok/obsidian-library-plugin/total?color=brightgreen" alt="Yükləmələr">
  <img src="https://img.shields.io/badge/Obsidian-v1.8.7+-purple" alt="Obsidian Versiyası">
  <img src="https://img.shields.io/github/license/Kigrok/obsidian-library-plugin?color=orange" alt="Lisenziya">
</p>

<p align="center">
  <b>Filmlərinizi, seriallarınızı, kitablarınızı və daha çoxunu vizual qalereyaya düzənləyin — birbaşa Obsidianın içində.</b>
  <br />
  Tətbiq içində adları axtarın və əlavə edin, metadataları avtomatik yükləyin, irəliləyişi izləyin və hər şeyi qrafikinizə birləşdirin.
</p>

<p align="center">
  <a href="https://community.obsidian.md/plugins/library">Obsidian İcma Pluginsi kataloqunda baxın</a>
</p>

---

## Əsas Xüsusiyyətlər

- **Vizual Kart Şəbəkəsi** — Xüsusi Kitabxana nişanı kolleksiyanızı örtük sənəti kartlarından ibarət qalereya şəklində göstərir.
- **Daxili Axtarış** — Tətbiq içində adları axtarın və əlavə edin: filmlər və seriallar üçün OMDb, kitablar üçün Open Library və ya Google Books, oyunlar üçün RAWG, musiqi üçün Deezer, anime üçün AniList, komikslər üçün Comic Vine.
- **Ağıllı Serial İzləmə** — Mövsümlər və epizod sayı avtomatik olaraq yüklənir və sinxronlaşdırılır.
- **İrəliləyiş Göstəriciləri** — Kartlarda və qeyd başlıqlarında vizual irəliləyiş zolaqları nə qədər baxdığınızı və ya oxuduğunuzu göstərir.
- **Zəngin Qeyd Başlıqları** — Hər məzmun qeydi bütün açar metadataları olan avtomatik başlıq alır.
- **Xüsusi Kateqoriyalar** — Filmlər, Seriallar, Anime, Komikslər, Kitablar, Oyunlar, Musiqi və ya əl ilə mənbə vasitəsilə hər hansı digər şeylər üçün kateqoriyalar yaradın.
- **Qrafik Bağlantıları** — `Related` ön məlumat xüsusiyyəti hər qeydi onun kateqoriyası, janrları və yaradıcıları ilə bağlayır, gözəl qrafik üçün avtomatik olaraq sinxronlaşdırılır.
- **Paylaşım Kartları** — Hər hansı məzmun qeydini paylaşıla bilən kart şəklinə (poster, ad, il, janr, IMDb xalı və sizin reytinqiniz) çevirin və onu X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky və ya Pinterest-də paylaşın — birbaşa cihazınızın tətbiqlərinə göndərin, və ya istənilən yerdə istifadə etmək üçün şəkli kopyalayın/saxlayın.
- **AniList Sinxronizasiyası** — Anime irəliləyişinizi, statusunuzu və reytinqinizi birbaşa AniList hesabınıza göndərin, və ya siyahınızı yenidən qeydlərinizə çəkin.
- **Sıralama & Yığılma** — Kartları ad, il, reytinq və ya tarixə görə sıralayın; istənilən kateqoriyanı yığın.
- **Statistika** — Ən yaxşı janrlar, yalnız yaradıcılar (filmlər & seriallar), və hər kateqoriya üzrə medal sıralaması ilə ən yaxşı elementlər.
- **Dublikat Aşkarlanması** — URL eyni adı iki dəfə əlavə etməyi avtomatik olaraq dayandırır. Daxili əmr mövcud dublikatları tapır və silir.
- **Çoxdilli** — 31 dil.

---

## Başlanğıc

### 1. Quraşdırma

**Kitabxana**nı [Obsidian İcma Pluginsi kataloqundan](https://community.obsidian.md/plugins/library) quraşdırın (Ayarlar > İcma pluginləri > Kəşf > "Kitabxana" axtarın) və ya [GitHub Buraxılışlarından](https://github.com/Kigrok/obsidian-library-plugin/releases) əl ilə quraşdırın.

### 2. Əsas Qurulum

1. **Ayarlar** > **Kitabxana**ya keçin.
2. **Kateqoriyalar**ınızı əlavə edin — açılır menyudan qabaqcadan təyin olunmuş tipi (Filmlər, Seriallar, Kitablar, Komikslər, Oyunlar, Musiqi, Anime və ya Əl ilə) seçin və **Kateqoriya əlavə et** düyməsinə basın. Hər kateqoriyanın dilinizə tərcümə olunmuş göstərilən adı, `Type` dəyəri (həmişə ingiliscə, məs. `Movie`), mənbə və qeydləri saxlamaq üçün istəyə görə qovluq var.
3. _(İstəyə görə)_ İstifadə etdiyiniz xidmətlər üçün API açarlarını daxil edin: filmlər/seriallar üçün [OMDb](https://www.omdbapi.com/apikey.aspx), oyunlar üçün [RAWG](https://rawg.io/apidocs), komikslər üçün [Comic Vine](https://comicvine.gamespot.com/api/). Anime (AniList) və musiqi (Deezer) açar tələb etmir.

### 3. Ad ilə Kart Əlavə Edin

Ön məlumatı əl ilə doldurmağa son — sadəcə adını axtararaq film, serial, kitab, anime və ya komiks əlavə edin:

1. Lent nişanından **Kitabxana** nişanını açın (və ya `Open Library` əmrini işə salın).
2. Kitabxana səhifəsinin yuxarı sağ küncündəki **+** düyməsinə basın (və ya `Add content` əmrini işə salın).
3. Kateqoriya seçin, **adı** axtarış qutusuna yazın və nəticəni seçin.
4. Kart dərhal poster, il, janr, yaradıcılar və reytinq avtomatik doldurulmuş şəkildə yaradılır.

**+** yanındakı **Axtarış** düyməsi kitabxananızda artıq olan adları axtarır.

**Əl ilə** Kateqoriyalar üçün sadəcə ad yazın və örtüyü, ili və digər sahələri özünüz doldurun.

---

## Statistika

Kitabxana nişanı yuxarıda yığılan **Statistika** bölməsi ehtiva edir:

- **Ən Yaxşı Janrlar** — bütün kitabxananızda tezliyə görə sıralanır.
- **Ən Yaxşı Yaradıcılar** — göründüyü film və serial sayına görə sıralanır.
- **Kateqoriya üzrə Ən Yaxşı** — hər kateqoriya üçün (Filmlər, Seriallar, Kitablar və s.), reytinqə görə TOP 3 element kiçik örtük şəkilləri ilə.

---

## Dublikat Aşkarlanması

Kitabxana `URL` sahəsini yoxlayaraq dublikat qeydləri dayandırır:

- **Əlavə edərkən** — eyni URL-li qeyd artıq mövcuddursa, dublikat yaratmaq əvəzinə mövcud qeydi açır.
- **Dublikatları Tap & Sil** — bu əmri paletdən işə salaraq bütün qeydləri tarayın, URL üzrə qruplaşdırın və modal vasitəsilə seçilmiş dublikatları silin.

---

## Mənbələr

Hər kateqoriya onun axtarışını təmin edən mənbəyə bağlıdır:

| Mənbə           | Məzmun növləri   | API açarı                                                      |
| ---------------- | --------------- | ----------------------------------------------------------- |
| **OMDb**         | Filmlər, Seriallar  | Pulsuz açar tələb olunur — [omdbapi.com](https://www.omdbapi.com/apikey.aspx) |
| **Books**        | Kitablar           | Open Library (açar yox) + Google Books (istəyə görə pulsuz açar). Nəticələr birləşdirilir — Google Books birinci, Open Library aşağıdakı. |
| **RAWG**         | Oyunlar           | Pulsuz açar tələb olunur — [rawg.io/apidocs](https://rawg.io/apidocs) |
| **Deezer**       | Musiqi (albomlar)  | Yoxdur                                                        |
| **AniList**        | Anime           | Yoxdur — pulsuz AniList GraphQL API, açar lazım deyil       |
| **Comic Vine**   | Komikslər          | Pulsuz açar tələb olunur — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Əl ilə**       | Hər hansı digər   | Yoxdur — siz adı yazır və sahələri özünüz doldurursunuz          |

---

## Məxfilik & Şəbəkə İstifadəsi

Kitabxana **offlayn-ilk**dir. Plugin yalnız əlavə etmək üçün bir adı aktiv şəkildə axtardığınızda və yalnız yazdığınız axtarış şərtləri ilə şəbəkə ilə əlaqə saxlayır:

| Xidmət | Nə vaxt | Nə göndərilir | Niyə |
| --- | --- | --- | --- |
| `www.omdbapi.com` | OMDb dəstəkli kateqoriya axtaranda | Yazdığınız ad və OMDb API açarınız | Film/serial metadatasını yüklə (il, janr, aktyor heyəti, reytinq, poster, epizod sayıları) |
| `openlibrary.org` | Open Library kateqoriyası axtaranda | Yazdığınız ad | Kitab metadatasını yüklə (müəllif, il, mövzular, örtük id) |
| `covers.openlibrary.org` | Kitab kartının örtüyü varsa | Open Library örtük id-si | Örtük şəkilini yüklə |
| `www.googleapis.com` | Google Books kateqoriyası axtaranda | Yazdığınız ad və Google Books açarınız | Kitab metadatasını yüklə (müəllif, il, kateqoriyalar, səhifə sayı, örtük, ISBN) |
| `api.rawg.io` | RAWG oyun kateqoriyası axtaranda | Yazdığınız ad və RAWG açarınız | Oyun metadatasını yüklə (il, janr, inkişaf etdirici, örtük) |
| `api.deezer.com` | Deezer musiqi kateqoriyası axtaranda | Yazdığınız albom və ya sənətçi | Albom metadatasını yüklə (sənətçi, il, janr, treklər sayı, örtük) |
| `graphql.anilist.co` | Anime kateqoriyası axtaranda | Yazdığınız ad | Anime metadatasını yüklə (ad, il, janr, epizodlar, AniList xalı, studiya, poster) |
| `graphql.anilist.co` | AniList sinxronizasiya əmrini işə saldığınızda | AniList giriş tokeniniz və qeydin irəliləyişi, statusu və reytinqi | AniList anime siyahınızı oxu və ya yenilə |
| `comicvine.gamespot.com` | Komiks kateqoriyası axtaranda | Yazdığınız ad və Comic Vine açarınız | Komiks metadatasını yüklə (ad, il, nəşriyyat, nüsxə sayı, örtük) |

Digər məlumat heç vaxt vaultunuzu tərk etmir. Pluginda **telemetriya, analitika və özünü yeniləmə mexanizmi yoxdur**. API açarları (OMDb, Google Books, RAWG, Comic Vine) yalnız yerli plugin ayarlarında saxlanılır və yalnız müvafiq xidmətlərə göndərilir. Örtük şəkilləri birbaşa hər mənbənin qaytardığı URL-lərdən yüklənir.

---

## Ön Məlumat Sxemi

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

> **Serial avtomatik yenilənməsi:** `Refresh metadata for current note` əmrini işə salın (və sadəcə qeydi açın) və plugin `Progress`-də ümumi epizod sayını (məs. `25/42`-dən `25/50`-yə) və `Season` sayını yeniləyir, baxdığınız say olduğu kimi qalır.

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

## Qrafik Bağlantıları

Hər məzmun qeydi avtomatik olaraq yenilənən `Related` ön məlumat xüsusiyyəti alır — qeyd mətninə toxunulmur:

```yaml
Related:
    - "[[Movie]]"
    - "[[Action]]"
    - "[[Sci-Fi]]"
    - "[[Christopher Nolan]]"
```

Bu bağlantılar qeydlərinizi paylaşılan kateqoriyalar, janrlar və yaradıcılar vasitəsilə birləşdirir, beləliklə Obsidian qrafik görünüşü təmiz klasterlər formalaşdırır. Hər kateqoriya üçün (məs. `Movie`) real hub qeydi yaradılır, belə ki həll edilməmiş bağlantılar gizli olanda belə klasterlər görünür. Xüsusiyyət qeyd yaradılanda yazılır və metadatası dəyişdikcə yenilənir — tam yenidənqurma məcburi etmək istəyirsinizsə `Rebuild graph links` əmrini işə salın.

---

## Paylaşım

Hər məzmun qeydi başlığında bir **Paylaş** düyməsi alır (və ya `Share current note` əmrini işə salın). O, istənilən yerdə yerləşdirə biləcəyiniz kart şəkli — poster, ad, il, janr, IMDb/AniList xalı və sizin reytinqiniz — yaradır:

- **Mobil cihazda** — **Paylaş…** düyməsi kart şəkli birbaşa əlavə olunmuş halda cihazınızın doğma paylaşım vərəqəsini açır, beləliklə onu istənilən tətbiqə birbaşa göndərə bilərsiniz.
- **X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, Pinterest** — şəbəkənin yazı redaktorunu qabaqcadan doldurulmuş izahat (ad, sizin reytinqiniz, mənbə linki və bu pluginə link) ilə açır. Kart şəkli eyni anda mübadilə buferinizə kopyalanır, beləliklə onu sadəcə yazıya yapışdırırsınız (Ctrl/Cmd+V).
- **Şəkli kopyala / Mətni kopyala / Şəkli saxla** — yaradılmış kartı və ya izahatı mübadilə buferinə kopyalayın, və ya əl ilə əlavə etmək üçün şəkli vaultunuzun qoşma qovluğuna saxlayın.

Paylaşım tamamilə yerlidir: kart tətbiq içində qeydin öz metadatası və örtüyündən çəkilir. Heç nə yüklənmir — plugin yalnız seçdiyiniz redaktor URL-ini brauzerinizdə açır.

---

## AniList Sinxronizasiyası

Anime irəliləyişinizi [AniList](https://anilist.co) hesabınızla sinxron saxlayın.

**Qurulum** — **Ayarlar → Kitabxana → AniList sinxronizasiyası**da:

1. [anilist.co/settings/developer](https://anilist.co/settings/developer) ünvanında pulsuz API klienti qeydiyyatdan keçirin, yönləndirmə URL-ini `https://anilist.co/api/v2/oauth/pin` təyin edərək.
2. **Client ID**-ni yapışdırın, **Connect** düyməsinə basın və icazə verin.
3. AniList sizə giriş tokeni göstərir — onu plugine yapışdırın. Təsdiqləmək üçün **Test connection** düyməsinə basın.

Sonra əmrlərdən istifadə edin:

- `Push current note to AniList` — aktiv anime qeydinin irəliləyişini (baxılan epizodlar), statusunu (baxılır / tamamlanıb / planlanır) və reytinqinizi AniList siyahınıza göndərir.
- `Pull progress from AniList` — AniList anime siyahınızı yükləyir və uyğun qeydləri yeniləyir. Çəkmə **yalnız irəliyə**dir: yerli olaraq daha irəlidə olan və ya artıq tamamlanmış qeydi heç vaxt geri qaytarmır və şəxsi `My Rating`-inizə toxunmur.

Yalnız `Source: anilist` olan qeydlər (AniList anime mənbəyi vasitəsilə əlavə edilmiş) sinxronlaşdırılır. Tokeniniz yerli olaraq plugin ayarlarında saxlanılır və yalnız AniList-ə göndərilir.

---

## Əmrlər

| Əmr                              | Təsvir                                                              |
| ------------------------------------ | ----------------------------------------------------------------------- |
| `Open Library`                       | Kitabxana qalereya nişanını açın.                                           |
| `Add content`                        | Mənbə axtarın və məzmun qeydi yaradın (və Əl ilə üçün ad yazın). |
| `Search your library`                | Kitabxananızda artıq olan hər hansı qeydi bulanıq axtarın və açın.                 |
| `Refresh metadata for current note`  | Aktiv qeyd üçün metadataları yenidən yükləyin; serial epizod ümumi saylarını yeniləyir.   |
| `Rebuild graph links`                | Hər məzmun qeydini onun kateqoriyası, janrları və yaradıcıları ilə birləşdirin.          |
| `Find & remove duplicates`           | Bütün qeydləri URL üzrə tarayın, dublikatları göstərin və seçilmişləri silin.       |
| `Share current note`                 | Qeydi kart şəkli kimi yaradın və onu X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky və ya Pinterest-də paylaşın. |
| `Push current note to AniList`       | Aktiv anime qeydinin irəliləyişini, statusunu və reytinqini AniList hesabınıza göndərin. |
| `Pull progress from AniList`         | AniList siyahınızı yükləyin və uyğun qeydləri yeniləyin (yalnız irəliyə). |

---

## Məlumat Dəstəyi

- **Xəta tapdınız?** [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues) açın.
- **Xüsusiyyət ideyanız var?** [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions) başladın.
- **Plugini bəyəndiniz?** Dəstəyinizi göstərmək üçün repozitoriya ulduzlayın!

---

## Təşəkkürlər

Bu plugin faydalı olarsa, inkişafını dəstəkləməyi düşünün:

| | Şəbəkə | Ünvan |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |

---
