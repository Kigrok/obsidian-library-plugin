> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md) | **TR**

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
  Filmler, diziler, kitaplar, anime, çizgi romanlar, oyunlar ve müzik, Obsidian'da not olarak ve kapak kartlarından oluşan bir galeri halinde.
  <br />
  <a href="https://community.obsidian.md/plugins/library">Obsidian eklenti dizini</a>
</p>

## Özellikler

- Bir başlık arayın; afişi, yılı, türü, yapımcıları, oyuncuları ve puanları doldurulmuş bir not alın.
- Kütüphaneye kapak kartları olarak göz atın; kartlar kategoriye göre gruplanır ve ada, yıla, puana veya tarihe göre sıralanır.
- Dizi bölümlerini veya kitap bölümlerini işaretleyip her birini puanlayın; `Progress` ve `My Rating` bunlardan hesaplanır.
- Film ve dizi notlarında fragman, kareler, süre ve sezon listesi bulunur.
- Türler, yapımcılar ve oyuncular bağlantıdır; bu yüzden notları her başlığı geri bağlantılarda ve grafikte toplar.
- İstatistik paneli seçtiğiniz listeleri ve toplam izleme sürenizi gösterir.
- Bir başlığı kart görseli olarak X, Telegram, Reddit ve altı ağda daha paylaşın.
- Anime ilerlemesini AniList ile eşitleyin.
- Arayüz Obsidian'ın desteklediği tüm dillere, bu README ise [30 dile](./) çevrildi.

## Hızlı başlangıç

1. **Library** eklentisini Ayarlar → Topluluk Eklentileri → Göz at üzerinden veya [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases) sayfasından kurun.
2. Ayarlar → Library bölümünde her içerik türü için bir kategori ekleyin: Filmler, Diziler, Kitaplar, Çizgi Romanlar, Oyunlar, Müzik, Anime, Elle.
3. Kaynaklarınızın ihtiyaç duyduğu API anahtarlarını girin (aşağıya bakın).
4. Kütüphane sekmesini araç çubuğundan açın, **+** düğmesine basın, bir kategori seçin ve bir başlık arayın. Kütüphanede zaten olan bir başlık mevcut notunu açar.

Bir kategorinin `Type` değeri (örneğin `Movie`) hangi notların ona ait olduğunu, klasörü ise yeni notların nereye gideceğini belirler. İkisi de kategorinin ayarlarında **Gelişmiş** altındadır.

## Kaynaklar

| Kategori | Kaynak | Anahtar |
| --- | --- | --- |
| Filmler, diziler | OMDb | [Ücretsiz anahtar](https://www.omdbapi.com/apikey.aspx) |
| Kitaplar | Google Books + Open Library | İsteğe bağlı [Google Books anahtarı](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| Oyunlar | RAWG + Steam | [Ücretsiz RAWG anahtarı](https://rawg.io/apidocs); Steam için gerekmez |
| Müzik | Deezer | Gerekmez |
| Anime | AniList | Gerekmez |
| Çizgi romanlar | Comic Vine | [Ücretsiz anahtar](https://comicvine.gamespot.com/api/) |
| Geri kalan her şey | Elle: alanları siz doldurursunuz | Gerekmez |

Fragmanlar, kareler, süre ve sezon listeleri anahtarsız olarak Cinemeta'dan gelir. Bir [TMDB anahtarı](https://www.themoviedb.org/settings/api) sezon puanlarını ve daha fazla kareyi ekler.

## İlerleme ve puanlar

Dizi notunun başlığı sezonları listeler ve her sezon, kaynak biliyorsa adlarıyla birlikte bölümlerine açılır. Bir bölümü veya tüm sezonu izlendi olarak işaretleyin ve 1'den 10'a kadar puan verin. `Progress` işaretli bölümleri sayar, bir sezonun puanı puanlanmış bölümlerinin ortalamasıdır, `My Rating` ise puanlanmış sezonların ortalamasıdır. Puanlanmış bölümü olmayan bir sezona doğrudan puan verilir.

Anime de aynı şekilde, bölüm adları olmayan tek bir sezon olarak çalışır.

Kitap bölümleri, Open Library'deki bir baskının içindekiler tablosundan gelir. İçindekiler yoksa, not başlığındaki **Bölüm ekle** bölüm sayısını veya her satıra bir bölüm adını kabul eder. Bundan sonra `Progress` sayfaları değil bölümleri sayar ve okunmuş sayfalar bölümlerin aynı oranına aktarılır.

Eski sürümlerden kalan notlar ilerlemesini korur. Hiçbir şey işaretlemediğiniz sürece, `Progress` sayısına kadar olan ilk bölümler izlenmiş görünür.

## İstatistikler

Kütüphane sekmesinin üstündeki panel, Ayarlar → Library → İstatistikler bölümünde seçtiğiniz sütunları gösterir: bir kategorinin en yüksek puanlı üç başlığı, bir özelliğin en sık görülen üç değeri (türler, oyuncular veya başka herhangi biri) ve filmlere, dizilere ve animeye harcanan saatler. Grafiğin altında her gün bir karşılaştırma çıkar, örneğin: Apollo 11 Ay'a 8 kez gidip dönebilirdi.

## Grafik bağlantıları

`Genre`, `Creator` ve `Cast`, `[[Christopher Nolan]]` gibi bağlantılar tutar; bu yüzden bir türün veya kişinin notu başlıklarını geri bağlantılarda listeler. Elle yazılan adlar not değiştiğinde bağlantıya dönüşür, `Grafik bağlantılarını yeniden oluştur` ise tüm kütüphaneyi dönüştürür.

## Paylaşım ve AniList

Not başlığındaki **Paylaş**; afiş, başlık, yıl, tür, oyuncular, puanlar ve sizin puanınızla bir kart çizer. Masaüstünde görsel panoya kopyalanır ve seçtiğiniz ağ hazır bir açıklamayla açılır, size görseli gönderiye yapıştırmak kalır. Mobilde görsel sistemin paylaşım menüsüne gider. Görseli veya açıklamayı kopyalayabilir, görseli kasaya da kaydedebilirsiniz.

Animeyi eşitlemek için [anilist.co/settings/developer](https://anilist.co/settings/developer) adresinde yönlendirme URL'si `https://anilist.co/api/v2/oauth/pin` olan bir istemci kaydedin. Client ID'yi Ayarlar → Library → AniList senkronizasyonu bölümüne yapıştırın, **Bağlan** düğmesine tıklayın ve AniList'in gösterdiği belirteci yapıştırın. `Geçerli notu AniList'e gönder` ilerlemeyi, durumu ve puanı gönderir. `İlerlemeyi AniList'ten çek` notlarınızı günceller, ilerlemeyi asla geri almaz ve `My Rating` alanına dokunmaz. Yalnızca `Source: anilist` olan notlar eşitlenir.

Aynı notlar MyAnimeList ile de eşitlenir. [myanimelist.net/apiconfig](https://myanimelist.net/apiconfig) adresinde yönlendirme URL'si `http://localhost` olan bir istemci oluşturun, Client ID'sini (varsa Client Secret'ını) Ayarlar → Library → MyAnimeList senkronizasyonu bölümüne yapıştırın, **Bağlan** düğmesine basın ve tarayıcının açtığı adresi yapıştırın. Eklenti her yapımın MyAnimeList kaydını AniList üzerinden bulur ve belirteci kendisi yeniler. `Geçerli notu MyAnimeList'e gönder` ve `İlerlemeyi MyAnimeList'ten çek`, AniList karşılıkları gibi çalışır.

## Frontmatter

Her kart bir nottur ve eklentinin onun hakkında bildiği her şey frontmatter'dadır:

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
      # ...7 bölüm daha
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

Bir dizide `Runtime` tek bir bölümün süresidir. Kitaplar ayrıca `ISBN` içerir ve bölümlerini aynı `title`, `watched` ve `my_rating` alanlarıyla `Chapters` içinde tutar; animede `Rating AniList` ve `Status` bulunur. Kapak özelliğinin adı ayarlardan değiştirilebilir, örneğin `image` olarak.

Yenileme yalnızca boş alanları doldurur, bu yüzden düzenlediğiniz değerler kalır. Ayrıca `Progress` içindeki toplam bölüm sayısını günceller ve yeni sezonları ve bölüm adlarını ekler.

## Gizlilik ve ağ kullanımı

Kütüphaneniz sade notlardan oluşur ve çevrimdışı çalışır. Eklenti; arama, yenileme, eşitleme veya paylaşım yaptığınızda, bir kütüphane notunu açtığınızda (her not için en fazla 5 dakikada bir) ve bir güncellemeden ya da anahtar değişikliğinden sonra yeni alanları doldurmak için bir kez çevrimiçi olur. Telemetri, analiz veya kendi kendini güncelleme yoktur. API anahtarları eklentinin yerel ayarlarında kalır ve yalnızca kendi hizmetine gider.

| Sunucu | Ne zaman | Ne gönderilir |
| --- | --- | --- |
| `www.omdbapi.com` | Film ve dizi arama | Başlık veya IMDb kimliği, OMDb anahtarı |
| `openlibrary.org` | Kitap arama; kitap eklediğinizde veya açtığınızda bölüm arama | Başlık ve yazar, ISBN veya eser kimliği |
| `covers.openlibrary.org` | Kitap kapakları | Kapak kimliği |
| `www.googleapis.com` | Kitap arama | Başlık, Google Books anahtarı |
| `api.rawg.io` | Oyun arama | Başlık, RAWG anahtarı |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | Oyun arama ve kapaklar | Başlık veya Steam uygulama kimliği |
| `api.deezer.com` | Müzik arama | Albüm veya sanatçı |
| `graphql.anilist.co` | Anime arama; AniList eşitleme; eşitleme için MyAnimeList kimlikleri | Başlık; belirteciniz, ilerleme, durum ve puan; AniList kimlikleri |
| `anilist.co` | **Bağlan** düğmesine tıklarsınız | Client ID, tarayıcınızda açılır |
| `myanimelist.net` | MyAnimeList için **Bağlan** düğmesine basarsınız; belirteç yenileme | Client ID ve gizli anahtar, yetkilendirme kodu, yenileme belirteci |
| `api.myanimelist.net` | MyAnimeList eşitleme | Belirteciniz, ilerleme, durum ve puan |
| `s4.anilist.co` | Anime afişleri | CDN yolu |
| `comicvine.gamespot.com` | Çizgi roman arama | Başlık, Comic Vine anahtarı |
| `v3-cinemeta.strem.io` | Film veya dizi ekleme ya da yenileme | IMDb kimliği |
| `images.metahub.space`, `episodes.metahub.space` | Kareler | IMDb kimliği, sezon ve bölüm numaraları |
| `api.themoviedb.org`, `image.tmdb.org` | TMDB anahtarı ayarlıysa film veya dizi ekleme ya da yenileme | IMDb kimliği ve TMDB anahtarı; görsel yolu |
| `i.ytimg.com` | Fragman kareleri | Video kimliği |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Fragmanlı bir notu açma | Video kimliği |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Bir paylaşım düğmesine tıklarsınız | Açıklama: başlık, puanınız, kaynak bağlantısı. Görsel cihazınızda kalır |

## Komutlar

| Komut | Ne yapar |
| --- | --- |
| `Kütüphaneyi aç` | Kütüphane sekmesini açar |
| `İçerik ekle` | Bir kaynakta arar ve not oluşturur |
| `Kütüphanende ara` | Bir kütüphane notunu bulur ve açar |
| `Mevcut notun meta verilerini yenile` | Etkin notun verilerini yeniden getirir |
| `Tüm notların meta verilerini yenile` | Her kütüphane notunu tek tek yeniden getirir |
| `Grafik bağlantılarını yeniden oluştur` | `Genre`, `Creator` ve `Cast` alanlarını bağlantıya çevirir |
| `Tekrarları bul ve kaldır` | Aynı URL'yi paylaşan notları listeler ve seçtiklerinizi kaldırır |
| `Geçerli notu paylaş` | Paylaşım kartını açar |
| `Geçerli notu AniList'e gönder` | İlerlemeyi, durumu ve puanı gönderir |
| `İlerlemeyi AniList'ten çek` | Notları AniList listenizden günceller |
| `Geçerli notu MyAnimeList'e gönder` | İlerlemeyi, durumu ve puanı gönderir |
| `İlerlemeyi MyAnimeList'ten çek` | Notları MyAnimeList listenizden günceller |

## Destek

Hataları [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues) bölümüne, fikirleri [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions) bölümüne yazın. Eklenti [MIT Lisansı](../LICENSE) ile dağıtılır.

Eklenti işinize yaradıysa onu destekleyebilirsiniz:

| | Ağ | Adres |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
