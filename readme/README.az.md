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
  Filmlər, seriallar, kitablar, anime, komikslər, oyunlar və musiqi Obsidian qeydləri kimi, üz qabıqlı kartlar qalereyasında.
  <br />
  <a href="https://community.obsidian.md/plugins/library">Obsidian plagin kataloqu</a>
</p>

## İmkanlar

- Əsəri adı ilə axtarın və posteri, ili, janrı, müəllifləri, aktyorları və reytinqləri doldurulmuş qeyd alın.
- Kitabxana kateqoriyalara bölünmüş, ad, il, reytinq və ya tarixə görə sıralanmış üz qabıqlı kartlar kimi görünür.
- Serialın seriyalarını və ya kitabın fəsillərini işarələyin və hər birini qiymətləndirin; `Progress` və `My Rating` onlara görə hesablanır.
- Film və serial qeydlərində treyler, kadrlar, müddət və mövsümlərin siyahısı var.
- Janrlar, müəlliflər və aktyorlar keçid kimi saxlanılır, buna görə onların qeydləri bütün əsərləri geri keçidlərdə və qrafda toplayır.
- Statistika paneli seçdiyiniz topları və ümumi baxış vaxtını göstərir.
- Əsəri kart şəkli kimi X, Telegram, Reddit və daha altı şəbəkədə paylaşın.
- Anime irəliləyişi AniList ilə sinxronlaşır.
- İnterfeys Obsidian-ın dəstəklədiyi bütün dillərə tərcümə olunub. Bu README [30 dildə](./) mövcuddur.

## Sürətli başlanğıc

1. **Library** plaginini Settings → Community plugins → Browse vasitəsilə və ya [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases) səhifəsindən quraşdırın.
2. Settings → Library bölməsində hər məzmun növü üçün kateqoriya əlavə edin: Filmlər, Seriallar, Kitablar, Komikslər, Oyunlar, Musiqi, Anime, Əllə.
3. Mənbələrinizin tələb etdiyi API açarlarını daxil edin (aşağıya baxın).
4. Yan paneldən «Kitabxana» tabını açın, **+** düyməsini basın, kateqoriya seçin və əsəri axtarın. Əsər artıq kitabxanadadırsa, mövcud qeyd açılır.

Kateqoriyanın `Type` dəyəri (məsələn, `Movie`) hansı qeydlərin ona aid olduğunu, qovluq isə yeni qeydlərin hara düşdüyünü müəyyən edir. Hər iki ayar kateqoriyanın yanındakı **Ətraflı** düyməsi ilə açılır.

## Mənbələr

| Kateqoriya | Mənbə | Açar |
| --- | --- | --- |
| Filmlər, seriallar | OMDb | [Pulsuz açar](https://www.omdbapi.com/apikey.aspx) |
| Kitablar | Google Books + Open Library | İstəyə bağlı [Google Books açarı](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| Oyunlar | RAWG + Steam | [Pulsuz RAWG açarı](https://rawg.io/apidocs); Steam üçün açar lazım deyil |
| Musiqi | Deezer | Lazım deyil |
| Anime | AniList | Lazım deyil |
| Komikslər | Comic Vine | [Pulsuz açar](https://comicvine.gamespot.com/api/) |
| Qalan hər şey | Əl ilə: sahələri özünüz doldurursunuz | Lazım deyil |

Treylerlər, kadrlar, müddət və mövsüm siyahıları Cinemeta-dan açarsız gəlir. [TMDB açarı](https://www.themoviedb.org/settings/api) mövsüm qiymətlərini və daha çox kadr əlavə edir.

## İrəliləyiş və qiymətlər

Serial qeydinin başlığında mövsümlərin siyahısı var və hər mövsüm seriyalara açılır, mənbədə varsa, adları ilə. Seriyanı və ya bütün mövsümü baxılmış kimi işarələyin və 1-dən 10-a qədər qiymət verin. `Progress` işarələnmiş seriyaları sayır, mövsümün qiyməti qiymətləndirilmiş seriyaların ortalamasına, `My Rating` isə qiymətləndirilmiş mövsümlərin ortalamasına bərabərdir. Qiymətləndirilmiş seriyası olmayan mövsümə qiymət birbaşa verilir.

Anime də eyni qaydada, seriya adları olmayan bir mövsüm kimi işləyir.

Kitabın fəsilləri Open Library-dəki nəşrin mündəricatından götürülür. Mündəricat tapılmasa, qeyd başlığındakı **Fəsil əlavə et** düyməsi fəsillərin sayını və ya hər sətirdə bir fəsil adını qəbul edir. Bundan sonra `Progress` səhifələri deyil, fəsilləri sayır, oxunmuş səhifələr isə fəsillərin eyni payına keçir.

Köhnə versiyalardan qalan qeydlər irəliləyişini saxlayır. Heç nə işarələməyincə, `Progress` sayına qədər olan ilk seriyalar baxılmış kimi göstərilir.

## Statistika

«Kitabxana» tabının yuxarısındakı panel Settings → Library → Statistika bölməsində seçdiyiniz sütunları göstərir: kateqoriyanın ən yüksək qiymətləndirilmiş üç əsəri, xüsusiyyətin ən tez-tez rast gəlinən üç dəyəri (janrlar, aktyorlar və ya istənilən digəri) və filmlərə, seriallara və animeyə sərf olunan saatlar. Diaqramın altında gündə bir müqayisə görünür, məsələn: Apollon 11 Aya 8 dəfə gedib qayıda bilərdi.

## Qraf əlaqələri

`Genre`, `Creator` və `Cast` `[[Christopher Nolan]]` kimi keçidləri saxlayır, buna görə janrın və ya şəxsin qeydi onun əsərlərini geri keçidlərdə göstərir. Əl ilə yazılmış adlar qeyd dəyişəndə keçidə çevrilir, `Qraf bağlantılarını yenidən qur` isə bütün kitabxananı birdən çevirir.

## Paylaşma və AniList

Qeyd başlığındakı **Paylaş** düyməsi poster, ad, il, janr, aktyorlar, reytinqlər və sizin qiymətinizlə kart çəkir. Kompüterdə şəkil mübadilə buferinə kopyalanır, seçdiyiniz şəbəkə isə hazır mətnlə açılır, sizə şəkli posta yapışdırmaq qalır. Telefonda şəkil sistemin «Paylaş» menyusuna gedir. Şəkli və ya mətni kopyalamaq, şəkli isə anbara saxlamaq da olar.

Animeni sinxronlaşdırmaq üçün [anilist.co/settings/developer](https://anilist.co/settings/developer) səhifəsində redirect URL `https://anilist.co/api/v2/oauth/pin` olan klient qeydiyyatdan keçirin. Client ID-ni Settings → Library → AniList sinxronizasiyası bölməsinə yapışdırın, **Qoşul** düyməsini basın və AniList-in göstərdiyi tokeni yapışdırın. `Cari qeydi AniList-ə göndər` irəliləyişi, statusu və qiyməti göndərir. `AniList-dən irəliləyişi yüklə` qeydləri yeniləyir, irəliləyişi heç vaxt geri qaytarmır və `My Rating`-ə toxunmur. Yalnız `Source: anilist` olan qeydlər sinxronlaşır.

## Frontmatter

Hər kart adi qeyddir və plaginin onun haqqında bildiyi hər şey frontmatter-də saxlanılır:

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
      # ...daha 7 seriya
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

Serialda `Runtime` bir seriyanın müddətidir. Kitablarda `ISBN` var, fəsillər isə eyni `title`, `watched` və `my_rating` sahələri ilə `Chapters`-də saxlanılır; animedə `Rating AniList` və `Status` var. Üz qabığı xüsusiyyətinin adını ayarlarda dəyişmək olar, məsələn `image`-ə.

Metaməlumatların yenilənməsi yalnız boş sahələri doldurur, buna görə düzəlişləriniz qalır. O, həmçinin `Progress`-dəki ümumi seriya sayını yeniləyir və yeni mövsümləri və seriya adlarını əlavə edir.

## Məxfilik və şəbəkə

Kitabxana adi qeydlərdən ibarətdir və oflayn işləyir. Plagin şəbəkəyə siz axtaranda, yeniləyəndə, sinxronlaşdıranda və ya paylaşanda; kitabxana qeydini açanda, lakin hər qeyd üçün 5 dəqiqədə bir dəfədən tez olmayaraq; və plagin yeniləndikdən və ya açar dəyişdikdən sonra yeni sahələri doldurmaq üçün bir dəfə çıxır. Telemetriya, analitika və özünüyeniləmə yoxdur. API açarları plaginin yerli ayarlarında saxlanılır və yalnız öz xidmətinə göndərilir.

| Host | Nə vaxt | Nə göndərilir |
| --- | --- | --- |
| `www.omdbapi.com` | Film və serial axtarışı | Ad və ya IMDb id, OMDb açarı |
| `openlibrary.org` | Kitab axtarışı; kitab əlavə edəndə və ya açanda fəsillərin axtarışı | Ad və müəllif, ISBN və ya əsər id |
| `covers.openlibrary.org` | Kitab üz qabıqları | Üz qabığı id |
| `www.googleapis.com` | Kitab axtarışı | Ad, Google Books açarı |
| `api.rawg.io` | Oyun axtarışı | Ad, RAWG açarı |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | Oyun axtarışı və üz qabıqları | Ad və ya Steam app id |
| `api.deezer.com` | Musiqi axtarışı | Albom və ya ifaçı |
| `graphql.anilist.co` | Anime axtarışı; AniList sinxronlaşdırması | Ad; tokeniniz, irəliləyiş, status və qiymət |
| `anilist.co` | Siz **Qoşul** düyməsini basırsınız | Client ID, brauzerdə açılır |
| `s4.anilist.co` | Anime bannerləri | CDN yolu |
| `comicvine.gamespot.com` | Komiks axtarışı | Ad, Comic Vine açarı |
| `v3-cinemeta.strem.io` | Film və ya serial əlavə etmək və ya yeniləmək | IMDb id |
| `images.metahub.space`, `episodes.metahub.space` | Kadrlar | IMDb id, mövsüm və seriya nömrələri |
| `api.themoviedb.org`, `image.tmdb.org` | TMDB açarı təyin olunubsa, film və ya serial əlavə etmək və ya yeniləmək | IMDb id və TMDB açarı; şəkil yolu |
| `i.ytimg.com` | Treyler kadrları | Video id |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Treyleri olan qeydi açmaq | Video id |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Siz paylaşma düyməsini basırsınız | Mətn: ad, sizin qiymətiniz, mənbə keçidi. Şəkil cihazınızda qalır |

## Əmrlər

| Əmr | Nə edir |
| --- | --- |
| `Kitabxananı aç` | «Kitabxana» tabını açır |
| `Məzmun əlavə et` | Mənbədə axtarır və qeyd yaradır |
| `Kitabxananda axtar` | Kitabxana qeydini tapır və açır |
| `Cari qeyd üçün metadatanı yenilə` | Aktiv qeydin məlumatlarını yenidən yükləyir |
| `Bütün qeydlər üçün metadatanı yenilə` | Kitabxananın bütün qeydlərini bir-bir yükləyir |
| `Qraf bağlantılarını yenidən qur` | `Genre`, `Creator` və `Cast` sahələrini keçidə çevirir |
| `Dublikatları tap və sil` | Eyni URL-li qeydləri göstərir və seçilənləri silir |
| `Cari qeydi paylaş` | Paylaşma kartını açır |
| `Cari qeydi AniList-ə göndər` | İrəliləyişi, statusu və qiyməti göndərir |
| `AniList-dən irəliləyişi yüklə` | Qeydləri AniList siyahınızdan yeniləyir |

## Dəstək

Xətalar barədə [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues) bölməsinə, ideyaları [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions) bölməsinə yazın. Plagin [MIT lisenziyası](../LICENSE) ilə yayılır.

Plagin faydalı olubsa, onu dəstəkləyə bilərsiniz:

| | Şəbəkə | Ünvan |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
