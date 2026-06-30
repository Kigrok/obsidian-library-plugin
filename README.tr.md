> [EN](README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md) | **TR**

<p align="center">
  <img src="banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Library</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.1.2-blue" alt="Version">
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
- **Yerleşik Arama** — Uygulama içinde doğrudan başlık arayın ve ekleyin: film ve diziler için OMDb, kitaplar için Open Library veya Google Books, oyunlar için RAWG, müzik için Deezer, anime için Jikan, çizgi romanlar için Comic Vine.
- **Akıllı Dizi Takibi** — Sezonlar ve toplam bölüm sayıları otomatik olarak alınır ve senkronize edilir.
- **İlerleme Göstergeleri** — Kartlarda ve not başlıklarındaki görsel ilerleme çubukları ne kadar izlediğinizi veya okuduğunuzu gösterir.
- **Zengin Not Başlıkları** — Her içerik notu, tüm ana meta verilerle otomatik olarak oluşturulmuş bir başlık alır.
- **Özel Kategoriler** — Filmler, Diziler, Anime, Çizgi Romanlar, Kitaplar, Oyunlar, Müzik veya manuel kaynak aracılığıyla başka herhangi bir şey için kategoriler oluşturun.
- **Graf Bağlantıları** — Frontmatter'daki bir `Related` özelliği her notu kategorisi, türleri ve yaratıcılarıyla bağlar, güzel bir graf için otomatik olarak senkronize edilir.
- **Sıralama ve Daraltma** — Kartları ada, yıla, puana veya tarihe göre sıralayın; herhangi bir kategoriyi daraltın.
- **İstatistikler** — Üst türler, üst yaratıcılar (yalnızca film ve diziler) ve madalya sıralamalarıyla kategori başına üst öğeler.
- **Çoğaltma Algılama** — URL'ye göre aynı başlığın iki kez eklenmesini otomatik olarak önler. Yerleşik bir komut mevcut çoğaltmaları bulur ve kaldırır.
- **Çok Dilli** — 31 dil: İngilizce, Ukraynaca, Rusça, Beyaz Rusça, Kazakça, Özbekçe, Almanca, İspanyolca, Fransızca, İtalyanca, Felemenkçe, Çekçe, Hırvatça, Lehçe, Rumence, Türkçe, Azerice, Farsça, Hintçe, Bengalce, Urduca, Tagalogca, Vietnamca, Tayca, Cavaca, Japonca, Korece, Çince, Arapça, Sinhalaca, İbranice.

---

## Hızlı Başlangıç

### 1. Kurulum

**Library**'yi [Obsidian Community Plugins dizininden](https://community.obsidian.md/plugins/library) kurun (Ayarlar > Community plugins > Göz at > "Library" arayın) veya [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases) üzerinden manuel olarak kurun.

### 2. Temel Kurulum

1. **Ayarlar** > **Library**'ye gidin.
2. **Kategorilerinizi** ekleyin — açılır menüden önceden tanımlanmış bir tür (Movies, Series, Books, Comics, Games, Music, Anime veya Manual) seçin ve **Add category**'ye tıklayın. Her kategorinin bir görüntü adı (sizin dilinize çevrilmiş), bir `Type` değeri (her zaman İngilizce, ör. `Movie`), bir kaynak ve notları depolamak için isteğe bir klasörü vardır.
3. _(İsteğe bağlı)_ Kullandığınız hizmetler için API anahtarlarını girin: film/diziler için [OMDb](https://www.omdbapi.com/apikey.aspx), oyunlar için [RAWG](https://rawg.io/apidocs), çizgi romanlar için [Comic Vine](https://comicvine.gamespot.com/api/). Anime (Jikan) ve müzik (Deezer) anahtar gerektirmez.

### 3. Başlığa Göre Kart Ekleme

Artık frontmatter'ı manuel olarak doldurmanıza gerek yok — bir film, dizi, kitap, anime veya çizgi romanı adını arayarak ekleyin:

1. Şerit simgesinden **Library** sekmesini açın (veya `Open Library` komutunu çalıştırın).
2. Library sayfasının sağ üst köşesindeki **+** düğmesine tıklayın (veya `Add content` komutunu çalıştırın).
3. Bir kategori seçin, arama kutusuna **başlığı** yazın ve bir sonuç seçin.
4. Bir kart anında oluşturulur; poster, yıl, tür, yaratıcılar ve puan otomatik olarak doldurulur.

**+**'nın yanındaki **Search** düğmesi, kitaplığınızdaki zaten mevcut başlıkları arar.

**Manual** kategoriler için sadece bir başlık yazın ve kapak, yıl ve diğer alanları kendiniz doldurun.

---

## İstatistikler

Library sekmesinin üstünde katlanabilir bir **Statistics** bölümü bulunur:

- **Üst Türler** — Tüm kitaplığınızdaki frekansa göre sıralanır.
- **Üst Yaratıcılar** — Bulundukları film ve dizi sayısına göre sıralanır.
- **Kategoriye Göre Üst** — Her kategori için (Movies, Series, Books vb.), küçük kapak küçük resimleriyle puana göre en iyi 3 öğe.

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
| **RAWG**          | Oyunlar         | Ücretsiz anahtar gerekli — [rawg.io/apidocs](https://rawg.io/apidocs) |
| **Deezer**        | Müzik (albümler)| Yok                                                        |
| **Jikan**         | Anime           | Yok — ücretsiz resmi olmayan MyAnimeList API, anahtar gerekmez |
| **Comic Vine**    | Çizgi romanlar  | Ücretsiz anahtar gerekli — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**        | Diğer her şey   | Yok — başlığı kendiniz yazarsınız ve alanları kendiniz doldurursunuz |

---

## Gizlilik ve Ağ Kullanımı

Library **çevrimdışı önceliklidir**. Eklenti, yalnızca eklemek için bir başlık aradığınızda ve yalnızca yazdığınız arama terimleriyle ağa bağlanır:

| Hizmet | Ne zaman | Ne gönderilir | Neden |
| --- | --- | --- | --- |
| `www.omdbapi.com` | OMDb destekli bir kategoriyi aradığınızda | Yazdığınız başlık ve OMDb API anahtarınız | Film/dizi meta verilerini alın (yıl, tür, oyuncu kadrosu, puan, poster, bölüm sayıları) |
| `openlibrary.org` | Bir Open Library kategorisi aradığınızda | Yazdığınız başlık | Kitap meta verilerini alın (yazar, yıl, konular, kapak ID) |
| `covers.openlibrary.org` | Bir kitap kartının kapağı varsa | Open Library kapak ID | Kapak resmini yükleyin |
| `www.googleapis.com` | Bir Google Books kategorisi aradığınızda | Yazdığınız başlık ve Google Books anahtarınız | Kitap meta verilerini alın (yazar, yıl, kategoriler, sayfa sayısı, kapak, ISBN) |
| `api.rawg.io` | Bir RAWG oyun kategorisi aradığınızda | Yazdığınız başlık ve RAWG anahtarınız | Oyun meta verilerini alın (yıl, tür, geliştirici, kapak) |
| `api.deezer.com` | Bir Deezer müzik kategorisi aradığınızda | Yazdığınız albüm veya sanatçı | Albüm meta verilerini alın (sanatçı, yıl, tür, parça sayısı, kapak) |
| `api.jikan.moe` | Bir anime kategorisi aradığınızda | Yazdığınız başlık | Anime meta verilerini alın (başlık, yıl, tür, bölümler, MAL puanı, konu özeti, poster) |
| `comicvine.gamespot.com` | Bir çizgi roman kategorisi aradığınızda | Yazdığınız başlık ve Comic Vine anahtarınız | Çizgi roman meta verilerini alın (başlık, yıl, yayıncı, sorun sayısı, kapak) |

Başka hiçbir veri asla kasinizdan dışarı çıkmaz. Eklenti **telemetri, analiz veya otomatik güncelleme mekanizması içermez**. API anahtarları (OMDb, Google Books, RAWG, Comic Vine) yalnızca yerel eklenti ayarlarınızda saklanır ve yalnızca ilgili hizmetlere gönderilir. Kapak resimleri doğrudan her kaynaktan dönen URL'lerden yüklenir.

---

## Frontmatter Şeması

Eklenti standart YAML frontmatter'ı okur ve yazar. Notlar sizin için oluşturulur, ancak her alan düzenlenebilir. `Source` ve `Source ID`, eklentinin meta verileri daha sonra yenilemesine olanak tanır.

### Movie

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

### Series

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

> **Dizi otomatik güncelleme:** `Refresh metadata for current note` komutunu çalıştırın (veya sadece notu açın) ve eklenti `Progress` içindeki toplam bölüm sayısını (ör. `25/42`'den `25/50`'ye) ve `Season` sayısını günceller; izleme sayınızı bozulmamış olarak korur.

### Book

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

### Comic

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

## Graf Bağlantıları

Her içerik notu, otomatik olarak güncel tutulan bir `Related` frontmatter özelliği alır — not gövdesine asla dokunulmaz:

```yaml
Related:
    - "[[Movie]]"
    - "[[Action]]"
    - "[[Sci-Fi]]"
    - "[[Christopher Nolan]]"
```

Bu bağlantılar, notlarınızı paylaşılan kategoriler, türler ve yaratıcılar aracılığıyla bağlar, böylece Obsidian graf görünümü temiz kümelemeler oluşturur. Her kategori için gerçek bir hub notu oluşturulur (ör. `Movie`), böylece çözülmemiş bağlantılar gizliyken bile kümeler gösterilir. Özellik bir not oluşturulduğunda yazılır ve meta verileri her değiştiğinde yenilenir — yalnızca tam bir yeniden oluşturma zorlamak istiyorsanız `Rebuild graph links` komutunu çalıştırın.

---

## Komutlar

| Komut                                | Açıklama                                                                 |
| ------------------------------------ | ------------------------------------------------------------------------ |
| `Open Library`                       | Library galeri sekmesini açın.                                           |
| `Add content`                        | Bir kaynak arayın ve bir içerik notu oluşturun (veya Manual için bir başlık yazın). |
| `Search your library`                | Kitaplığınızdaki herhangi bir notu bulanık arayın ve açın.               |
| `Refresh metadata for current note`  | Etkin not için meta verileri yeniden alın; dizi toplam bölüm sayılarını günceller. |
| `Rebuild graph links`                | Her içerik notunu kategorisine, türlerine ve yaratıcılarına bağlayın.    |
| `Find & remove duplicates`           | URL'ye göre tüm notları tarayın, çoğaltmaları gösterin ve seçilenleri kaldırın. |

---

## Katkı ve Destek

- **Hata mı buldunuz?** Bir [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues) açın.
- **Özellik fikri mi var?** Bir [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions) başlatın.
- **Eklentiyi seviyor musunuz?** Destek göstermek için depoyu yıldızlamayı düşünün!

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
