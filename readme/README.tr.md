> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md) | **TR**

<p align="center">
  <img src="../banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Library</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.3.1-blue" alt="Version">
  <img src="https://img.shields.io/github/downloads/Kigrok/obsidian-library-plugin/total?color=brightgreen" alt="Downloads">
  <img src="https://img.shields.io/badge/Obsidian-v1.8.7+-purple" alt="Obsidian Version">
  <img src="https://img.shields.io/github/license/Kigrok/obsidian-library-plugin?color=orange" alt="License">
</p>

<p align="center">
  <b>Filmlerinizi, dizilerinizi, kitaplarınızı ve daha fazlasını görsel bir galeriye düzenleyin — doğrudan Obsidian içinde.</b>
  <br />
  Uygulama içinde başlık arayın ve ekleyin, meta verileri otomatik olarak alın, ilerlemeyi takip edin ve her şeyi grafinize bağlayın.
</p>

<p align="center">
  <a href="https://community.obsidian.md/plugins/library">Obsidian Community Plugins dizininde görüntüleyin</a>
</p>

---

## Temel Özellikler

- **Görsel Kart Izgarası** — Özel bir Library sekmesi koleksiyonunuzu kapak sanatı kartlarından oluşan bir galeri olarak görüntüler.
- **Yerleşik Arama** — Uygulama içinde doğrudan başlık arayın ve ekleyin: film ve diziler için OMDb, kitaplar için Open Library veya Google Books, oyunlar için RAWG/Steam, müzik için Deezer, anime için AniList, çizgi romanlar için Comic Vine.
- **Akıllı Dizi Takibi** — Sezonlar ve toplam bölüm sayıları otomatik olarak alınır ve senkronize edilir.
- **İlerleme Göstergeleri** — Kartlarda ve not başlıklarındaki görsel ilerleme çubukları ne kadar izlediğinizi veya okuduğunuzu gösterir.
- **Zengin Not Başlıkları** — Her içerik notu, tüm ana meta verilerle otomatik olarak oluşturulmuş bir başlık alır.
- **Fragmanlar, kareler ve sezonlar** — Film ve dizi notları gömülü bir YouTube/Vimeo fragmanı, bir kare dizisi ve süreyi gösterir; dizilerde ayrıca bölüm sayıları, puanlar ve sezon fragmanlarıyla bir sezon listesi bulunur.
- **Özel Kategoriler** — Filmler, Diziler, Anime, Çizgi Romanlar, Kitaplar, Oyunlar, Müzik veya manuel kaynak aracılığıyla başka herhangi bir şey için kategoriler oluşturun.
- **Graf Bağlantıları** — Türler, yaratıcılar ve oyuncular kendi `Genre`, `Creator` ve `Cast` özelliklerinde bağlantı olarak saklanır; böylece her türün, yaratıcının ve oyuncunun notu yapımlarını geri bağlantılarda toplar ve grafik her şeyi gösterir.
- **Paylaşım Kartları** — Herhangi bir içerik notunu paylaşılabilir bir kart görseline (poster, başlık, yıl, tür, IMDb puanı ve kendi puanınız) dönüştürün ve X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky veya Pinterest'te paylaşın — doğrudan cihazınızın uygulamalarına gönderin ya da görseli kopyalayıp/kaydederek her yerde kullanın.
- **AniList Senkronizasyonu** — Anime ilerlemenizi, durumunuzu ve puanınızı doğrudan AniList hesabınıza gönderin ya da listenizi notlarınıza geri çekin.
- **Sıralama ve Daraltma** — Kartları ada, yıla, puana veya tarihe göre sıralayın; herhangi bir kategoriyi daraltın — yeniden başlattıktan sonra da daraltılmış kalır.
- **İstatistikler** — Sütunları kendiniz seçin: herhangi bir kategorinin en yüksek puanlı eserleri ya da herhangi bir özelliğin en sık geçen değerleri (türler, yaratıcılar, oyuncular…), ayrıca izleme süresi grafiği.
- **Çoğaltma Algılama** — URL'ye göre aynı başlığın iki kez eklenmesini otomatik olarak önler. Yerleşik bir komut mevcut çoğaltmaları bulur ve kaldırır.
- **Çok Dilli** — eklentinin arayüzü **Obsidian'ın desteklediği tüm dillere** (70+) çevrilmiştir, bu yüzden her zaman Obsidian dilinizle eşleşir. README'nin tam çevirisi bunlardan 30'u için mevcuttur (üstteki dil çubuğuna bakın).

---

## Hızlı Başlangıç

### 1. Kurulum

**Library**'yi [Obsidian Community Plugins dizininden](https://community.obsidian.md/plugins/library) kurun (Ayarlar > Community plugins > Göz at > "Library" arayın) veya [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases) üzerinden manuel olarak kurun.

### 2. Temel Kurulum

1. **Ayarlar** > **Library**'ye gidin.
2. **Kategorilerinizi** ekleyin — açılır menüden önceden tanımlanmış bir tür (Movies, Series, Books, Comics, Games, Music, Anime veya Manual) seçin ve **Kategori ekle**'ye tıklayın. Her kategorinin bir görüntü adı (sizin dilinize çevrilmiş), bir `Type` değeri (her zaman İngilizce, ör. `Movie`), bir kaynak ve notları depolamak için isteğe bir klasörü vardır.
3. _(İsteğe bağlı)_ Kullandığınız hizmetler için API anahtarlarını girin: film/diziler için [OMDb](https://www.omdbapi.com/apikey.aspx), oyunlar için [RAWG](https://rawg.io/apidocs), çizgi romanlar için [Comic Vine](https://comicvine.gamespot.com/api/), [TMDB](https://www.themoviedb.org/settings/api) fragman, kare ve sezon bilgileri için, [Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) kitap araması için. Anime (AniList), müzik (Deezer) ve Steam anahtar gerektirmez.

### 3. Başlığa Göre Kart Ekleme

Artık frontmatter'ı manuel olarak doldurmanıza gerek yok — bir film, dizi, kitap, anime veya çizgi romanı adını arayarak ekleyin:

1. Şerit simgesinden **Library** sekmesini açın (veya `Kütüphaneyi aç` komutunu çalıştırın).
2. Library sayfasının sağ üst köşesindeki **+** düğmesine tıklayın (veya `İçerik ekle` komutunu çalıştırın).
3. Bir kategori seçin, arama kutusuna **başlığı** yazın ve bir sonuç seçin.
4. Bir kart anında oluşturulur; poster, yıl, tür, yaratıcılar ve puan otomatik olarak doldurulur.

**+**'nın yanındaki **Kütüphanende ara** düğmesi, kitaplığınızdaki zaten mevcut başlıkları arar.

**Manual** kategoriler için sadece bir başlık yazın ve kapak, yıl ve diğer alanları kendiniz doldurun.

---

## İstatistikler

Kütüphane sekmesinin üstündeki daraltılabilir **İstatistikler** bölümü seçtiğiniz sütunları gösterir:

- **Kategori sıralamaları** — bir kategorinin en yüksek puanlı üç eseri, kapaklarıyla: *En iyi filmler*, *En iyi kitaplar* vb. Sıralama `My Rating` alanına, o yoksa `Rating IMDB` alanına göre yapılır.
- **Özellik sıralamaları** — bir özelliğin tüm kütüphanede en sık geçen üç değeri: *En iyi türler*, *En iyi yaratıcılar*, *En iyi oyuncular* ya da *En iyiler: Author* gibi başka herhangi bir özellik. `Sci-Fi`, `sci-fi` ve `[[Sci-Fi]]` tek değer sayılır.
- **İzleme süresi** — filmlere, dizilere ve animelere harcanan saatlerin grafiği; her notun `Runtime` ve `Progress` alanlarından hesaplanır.

Bunu **Ayarlar → Library → İstatistikler** bölümünden ayarlayın: **Sıralama ekle** kategorilerinizi ve notlarınızda bulunan özellikleri listeler, çöp kutusu simgesi bir sütunu kaldırır, bir anahtar da izleme süresi grafiğini gizler. Sütunlar eklediğiniz sırayla görünür; yeni bir kategori kendi sıralamasını da ekler.

Daraltılan kategoriler yeniden başlattıktan sonra da daraltılmış kalır.

---

## Çoğaltma Algılama

Library, `URL` alanını kontrol ederek çoğaltma girişimlerini önler:

- **Eklerken** — Aynı URL'ye sahip bir not zaten varsa, çoğaltma oluşturmak yerine mevcut notu açar.
- **Çoğaltmaları Bul ve Kaldır** — Bu komutu paletten çalıştırarak tüm notları tarayın, URL'ye göre gruplayın ve bir modal aracılığıyla seçili çoğaltmaları kaldırın.

---

## Kaynaklar

Her kategori, aramasını güçlendiren bir kaynağa bağlıdır:

| Kaynak            | İçerik türleri  | API anahtarı                                                |
| ----------------- | --------------- | ---------------------------------------------------------- |
| **OMDb**          | Filmler, Diziler| Ücretsiz anahtar gerekli — [omdbapi.com](https://www.omdbapi.com/apikey.aspx) |
| **Books**         | Kitaplar        | Open Library (anahtarsız) + Google Books (isteğe bağlı ücretsiz anahtar). Sonuçlar birleştirilir — Google Books önce, Open Library altında. |
| **Games**          | Oyunlar         | RAWG (ücretsiz anahtar gerekli — [rawg.io/apidocs](https://rawg.io/apidocs)) + Steam (yok). Sonuçlar birleştirilir — RAWG önce, Steam altında. |
| **Deezer**        | Müzik (albümler)| Yok                                                        |
| **AniList**         | Anime           | Yok — ücretsiz AniList GraphQL API, anahtar gerekmez |
| **Comic Vine**    | Çizgi romanlar  | Ücretsiz anahtar gerekli — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**        | Diğer her şey   | Yok — başlığı kendiniz yazarsınız ve alanları kendiniz doldurursunuz |

Film ve dizi notları **TMDB** (isteğe bağlı ücretsiz anahtar) ile zenginleştirilebilir: fragman, kareler, süre ve dizinin sezon listesi alınır ve notun frontmatter'ına yazılır.

---

## Gizlilik ve Ağ Kullanımı

Library **öncelikle çevrimdışı** çalışır: kitaplığınız sıradan notlardan oluşur ve bağlantı olmadan da çalışır. Eklenti yalnızca aşağıda listelenen verileri ve yalnızca şu durumlarda gönderir:

- **Siz bir şey yaptığınızda:** bir başlık aradığınızda, meta verileri yenilediğinizde, bir AniList komutu çalıştırdığınızda veya paylaş düğmesine tıkladığınızda.
- **Bir kitaplık notunu açtığınızda:** notun meta verileri `Source ID` ile kaynağından yenilenir, not başına en fazla 5 dakikada bir; `Source ID` olmayan bir not adıyla aranır.
- **Eklenti güncellendikten veya bir API anahtarı değiştirildikten sonra:** arka planda bir tarama, kitaplık notlarınızı kaynaklarından bir kez, birer birer yeniler.

Notlarınızın başvurduğu kapak görselleri, kareler ve fragman oynatıcıları aşağıda listelenen sunuculardan yüklenir.

| Hizmet | Ne zaman | Ne gönderilir | Neden |
| --- | --- | --- | --- |
| `www.omdbapi.com` | OMDb destekli bir kategoriyi aradığınızda | Yazdığınız başlık ve OMDb API anahtarınız | Film/dizi meta verilerini alın (yıl, tür, oyuncu kadrosu, puan, poster, bölüm sayıları) |
| `openlibrary.org` | Bir Open Library kategorisi aradığınızda | Yazdığınız başlık | Kitap meta verilerini alın (yazar, yıl, konular, kapak ID) |
| `covers.openlibrary.org` | Bir kitap kartının kapağı varsa | Open Library kapak ID | Kapak resmini yükleyin |
| `www.googleapis.com` | Bir Google Books kategorisi aradığınızda | Yazdığınız başlık ve Google Books anahtarınız | Kitap meta verilerini alın (yazar, yıl, kategoriler, sayfa sayısı, kapak, ISBN) |
| `api.rawg.io` | Bir RAWG oyun kategorisi aradığınızda | Yazdığınız başlık ve RAWG anahtarınız | Oyun meta verilerini alın (yıl, tür, geliştirici, kapak) |
| `api.deezer.com` | Bir Deezer müzik kategorisi aradığınızda | Yazdığınız albüm veya sanatçı | Albüm meta verilerini alın (sanatçı, yıl, tür, parça sayısı, kapak) |
| `graphql.anilist.co` | Bir anime kategorisi aradığınızda | Yazdığınız başlık | Anime meta verilerini alın (başlık, yıl, tür, bölümler, AniList puanı, stüdyo, poster) |
| `graphql.anilist.co` | Bir AniList senkronizasyon komutu çalıştırdığınızda | AniList erişim jetonunuz ve notun ilerlemesi, durumu ve puanı | AniList anime listenizi okuyun veya güncelleyin |
| `anilist.co` | AniList senkronizasyon ayarlarında **Bağlan** düğmesine tıklarsınız | AniList Client ID'niz | AniList yetkilendirme sayfasını tarayıcınızda açmak |
| `comicvine.gamespot.com` | Bir çizgi roman kategorisi aradığınızda | Yazdığınız başlık ve Comic Vine anahtarınız | Çizgi roman meta verilerini alın (başlık, yıl, yayıncı, sorun sayısı, kapak) |
| `store.steampowered.com` | Bir Steam oyunu arar veya eklersiniz | Yazdığınız başlık veya Steam uygulama kimliği | Oyun meta verilerini alma (yıl, tür, geliştirici, kapak) |
| `cdn.cloudflare.steamstatic.com` | Bir Steam oyun kartının kapağı varsa | Steam uygulama kimliği | Kapak görselini yükleme |
| `api.themoviedb.org` | TMDB anahtarıyla bir film/dizi notu eklersiniz veya yenilersiniz | Notun IMDb kimliği ve TMDB anahtarınız | Fragman, kareler, süre ve sezon listesini almak |
| `image.tmdb.org` | Bir film/dizi notunda kareler var | TMDB görsel yolu | Kareleri yüklemek |
| `v3-cinemeta.strem.io` | Bir film/dizi notu ekler veya yenilersiniz | Notun IMDb kimliği | Fragman, kareler, süre ve dizinin sezon listesini alma — anahtar gerekmez |
| `images.metahub.space` | Film/dizi notunda kareler var | Notun IMDb kimliği | Kare (arka plan) görsellerini yükleme |
| `episodes.metahub.space` | Dizi notunda bölüm kareleri var | Dizinin IMDb kimliği ile sezon ve bölüm numaraları | Bölüm kare görsellerini yükleme |
| `i.ytimg.com` | Film notunda fragman kareleri gösterilir | Fragman video kimliği | Fragman kare görsellerini yükleme |
| `s4.anilist.co` | Anime notunda banner var | AniList CDN yolu | Banner görselini yükleme |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Fragman içeren bir not açarsınız | Fragman kimliği | Fragman oynatıcısını gömmek |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Paylaş düğmesine tıklarsınız | Kart başlığı (başlık, puanınız, kaynak bağlantısı) | Seçilen ağın paylaşım penceresini önceden doldurulmuş gönderiyle açmak — kart görseli yerel kalır |

Başka hiçbir veri asla kasinizdan dışarı çıkmaz. Eklenti **telemetri, analiz veya otomatik güncelleme mekanizması içermez**. API anahtarları (OMDb, Google Books, RAWG, Comic Vine, TMDB) yalnızca yerel eklenti ayarlarınızda saklanır ve yalnızca ilgili hizmetlere gönderilir. Kapak resimleri doğrudan her kaynaktan dönen URL'lerden yüklenir.

---

## Frontmatter Şeması

Eklenti standart YAML frontmatter'ı okur ve yazar. Notlar sizin için oluşturulur, ancak her alan düzenlenebilir. `Source` ve `Source ID`, eklentinin meta verileri daha sonra yenilemesine olanak tanır.

### Movie

> **Kapak özelliği** — kapağı saklayan frontmatter özelliği **Ayarlar → Library** bölümünden yeniden adlandırılabilir (örneğin `image`); mevcut notlar çalışmaya devam eder.

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

### Series

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

> **Dizi otomatik güncelleme:** `Mevcut notun meta verilerini yenile` komutunu çalıştırın (veya sadece notu açın) ve eklenti `Progress` içindeki toplam bölüm sayısını (ör. `25/42`'den `25/50`'ye) ve `Season` sayısını günceller; izleme sayınızı bozulmamış olarak korur.

> **Fragman, kareler ve sezonlar:** TMDB anahtarı ayarlandığında eklenti `Trailer`, `Gallery`, `Runtime` ve (dizilerde) `Seasons` alanlarını otomatik doldurur — `Runtime` filmin dakika cinsinden süresi, dizilerde ise bölüm başına dakikadır. Not başlığında gömülü oynatıcı, bir kare dizisi ve bölüm sayıları, puanlar ve sezon fragmanı düğmeleriyle sezon listesi görünür. Her alan düz frontmatter'dır: düzenleyin veya silin; eklenti bir sonraki yenilemede değerlerinize dokunmaz. Her yeni eklenti sürümünde kütüphane arka planda bir kez taranır ve eklenen yeni alanlar tek tek doldurulur.

### Book

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

### Comic

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

## Graf Bağlantıları

Türler, yaratıcılar ve film ile dizilerde oyuncular kendi özelliklerinde bağlantı olarak saklanır:

```yaml
Genre:
    - "[[Action]]"
    - "[[Sci-Fi]]"
Creator:
    - "[[Christopher Nolan]]"
Cast:
    - "[[Leonardo DiCaprio]]"
```

Böylece her türün, yaratıcının ve oyuncunun notu geri bağlantılarında tüm yapımlarını listeler ve grafik notları bunlar üzerinden bağlar. Düz adlar — elle yazılmış veya önceki bir sürümden kalmış — not her değiştiğinde bağlantıya dönüşür; takma adlı bir bağlantı olduğu gibi kalır. `Grafik bağlantılarını yeniden oluştur` tüm kitaplığı tek seferde dönüştürür. Önceki sürümlerin `Related` özelliği artık kullanılmaz ve notlardan kaldırılır.

---

## Paylaşım

Her içerik notu, başlığında bir **Paylaş** düğmesi alır (veya `Geçerli notu paylaş` komutunu çalıştırın). Poster, başlık, yıl, tür, IMDb/AniList puanı ve kendi puanınızı içeren bir kart görseli oluşturur — bunu her yerde paylaşabilirsiniz:

- **Mobilde** — **Paylaş…** düğmesi, kart görseli doğrudan ekli olarak cihazınızın yerel paylaşım sayfasını açar, böylece görseli herhangi bir uygulamaya doğrudan gönderebilirsiniz.
- **X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, Pinterest** — ağın oluşturma penceresini önceden doldurulmuş bir açıklamayla (başlık, kendi puanınız, kaynak bağlantısı ve bu eklentiye bir bağlantı) açar. Kart görseli aynı anda panonuza kopyalanır, böylece gönderiye yapıştırmanız (Ctrl/Cmd+V) yeterlidir.
- **Görseli kopyala / Metni kopyala / Görseli kaydet** — oluşturulan kartı veya açıklamayı panoya kopyalayın ya da manuel olarak eklemek için görseli kasınızın ek klasörüne kaydedin.

Paylaşım tamamen yereldir: kart, notun kendi meta verilerinden ve kapağından uygulama içinde çizilir. Hiçbir şey yüklenmez — eklenti yalnızca seçtiğiniz oluşturma penceresi URL'sini tarayıcınızda açar.

---

## AniList Senkronizasyonu

Anime ilerlemenizi [AniList](https://anilist.co) hesabınızla senkronize tutun.

**Kurulum** — **Ayarlar → Library → AniList senkronizasyonu** bölümünde:

1. [anilist.co/settings/developer](https://anilist.co/settings/developer) adresinde ücretsiz bir API istemcisi kaydedin ve yönlendirme URL'sini `https://anilist.co/api/v2/oauth/pin` olarak ayarlayın.
2. **Client ID**'yi yapıştırın, **Bağlan** düğmesine tıklayın ve yetkilendirin.
3. AniList size bir erişim jetonu gösterir — bunu eklentiye yapıştırın. Onaylamak için **Bağlantıyı test et** düğmesine tıklayın.

Ardından komutları kullanın:

- **`Geçerli notu AniList'e gönder`** — etkin anime notunun ilerlemesini (izlenen bölümler), durumunu (izleniyor / tamamlandı / planlanıyor) ve puanınızı AniList listenize gönderir.
- **`İlerlemeyi AniList'ten çek`** — AniList anime listenizi alır ve eşleşen notları günceller. Çekme işlemi **yalnızca ileri yöneliktir**: yerel olarak daha ileride olan ya da zaten tamamlanmış bir notu asla geriye götürmez ve kişisel `My Rating` değerinize dokunmaz.

Yalnızca `Source: anilist` olan notlar (AniList anime kaynağı aracılığıyla eklenenler) senkronize edilir. Jetonunuz yerel olarak eklenti ayarlarında saklanır ve yalnızca AniList'e gönderilir.

---

## Komutlar

| Komut                                | Açıklama                                                                 |
| ------------------------------------ | ------------------------------------------------------------------------ |
| `Kütüphaneyi aç`                       | Library galeri sekmesini açın.                                           |
| `İçerik ekle`                        | Bir kaynak arayın ve bir içerik notu oluşturun (veya Manual için bir başlık yazın). |
| `Kütüphanende ara`                | Kitaplığınızdaki herhangi bir notu bulanık arayın ve açın.               |
| `Mevcut notun meta verilerini yenile`  | Etkin not için meta verileri yeniden alın; dizi toplam bölüm sayılarını günceller. |
| `Grafik bağlantılarını yeniden oluştur`                | Tüm içerik notlarında `Genre`, `Creator` ve `Cast` değerlerini bağlantıya dönüştürür. |
| `Tekrarları bul ve kaldır`           | URL'ye göre tüm notları tarayın, çoğaltmaları gösterin ve seçilenleri kaldırın. |
| `Geçerli notu paylaş`                 | Notu bir kart görseli olarak oluşturun ve X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky veya Pinterest'te paylaşın. |
| `Geçerli notu AniList'e gönder`       | Etkin anime notunun ilerlemesini, durumunu ve puanını AniList hesabınıza gönderin. |
| `İlerlemeyi AniList'ten çek`         | AniList listenizi alın ve eşleşen notları güncelleyin (yalnızca ileri yönelik). |
| `Tüm notların meta verilerini yenile` | Kütüphanedeki tüm notların meta verilerini arka planda tek tek getir. |

---

## Katkı ve Destek

- **Hata mı buldunuz?** Bir [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues) açın.
- **Özellik fikri mi var?** Bir [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions) başlatın.
- **Eklentiyi seviyor musunuz?** Destek göstermek için depoyu yıldızlamayı düşünün!

---

## Lisans

[MIT License](LICENSE) — kullanmak, değiştirmek ve paylaşmak ücretsizdir.

---

## Teşekkürler

Bu eklentiyi faydalı bulursanız, gelişimini desteklemeyi düşünün:

| | Ağ | Adres |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |

---
