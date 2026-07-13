> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

<p align="center">
  <img src="../banner.png" alt="Banner Obsidian Library" width="100%">
</p>

<h1 align="center">Pustaka</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.2.1-blue" alt="Versi">
  <img src="https://img.shields.io/github/downloads/Kigrok/obsidian-library-plugin/total?color=brightgreen" alt="Unduhan">
  <img src="https://img.shields.io/badge/Obsidian-v1.8.7+-purple" alt="Versi Obsidian">
  <img src="https://img.shields.io/github/license/Kigrok/obsidian-library-plugin?color=orange" alt="Lisensi">
</p>

<p align="center">
  <b>Atur film, serial, buku, dan lainnya menjadi galeri visual — langsung di dalam Obsidian.</b>
  <br />
  Cari dan tambahkan judul di dalam aplikasi, ambil metadata secara otomatis, lacak kemajuan, dan hubungkan semuanya ke grafik Anda.
</p>

<p align="center">
  <a href="https://community.obsidian.md/plugins/library">Lihat di direktori Plugin Komunitas Obsidian</a>
</p>

---

## Fitur Utama

- **Grid Kartu Visual** — Tab Pustaka khusus menampilkan koleksi Anda sebagai galeri kartu cover art.
- **Pencarian Bawaan** — Cari dan tambahkan judul langsung di dalam aplikasi: OMDb untuk film dan serial, Open Library atau Google Books untuk buku, RAWG untuk game, Deezer untuk musik, AniList untuk anime, Comic Vine untuk komik.
- **Pelacakan Serial Pintar** — Jumlah season dan episode diambil secara otomatis dan disinkronkan.
- **Indikator Kemajuan** — Bar kemajuan visual pada kartu dan header catatan menunjukkan seberapa banyak Anda telah menonton atau membaca.
- **Header Catatan Kaya** — Setiap catatan konten mendapat header yang dibuat otomatis dengan semua metadata penting.
- **Kategori Kustom** — Buat kategori untuk Film, Serial, Anime, Komik, Buku, Game, Musik, atau hal lain melalui sumber manual.
- **Tautan Grafik** — Properti frontmatter `Related` menghubungkan setiap catatan dengan kategorinya, genre, dan kreator, disinkronkan secara otomatis untuk grafik yang indah.
- **Kartu Berbagi** — Ubah catatan konten apa pun menjadi gambar kartu yang dapat dibagikan (poster, judul, tahun, genre, peringkat IMDb, dan peringkat Anda) dan posting ke X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, atau Pinterest — bagikan langsung ke aplikasi di perangkat Anda, atau salin/simpan gambar untuk digunakan di mana saja.
- **Sinkronisasi AniList** — Kirim kemajuan, status, dan peringkat anime Anda langsung ke akun AniList Anda, atau tarik daftar Anda kembali ke dalam catatan Anda.
- **Pengurutan & Pelipatan** — Urutkan kartu berdasarkan nama, tahun, peringkat, atau tanggal; lipat kategori apa pun.
- **Statistik** — Genre teratas, kreator teratas (hanya film & serial), dan item teratas per kategori dengan peringkat medali.
- **Deteksi Duplikat** — Secara otomatis mencegah penambahan judul yang sama dua kali berdasarkan URL. Perintah bawaan menemukan dan menghapus duplikat yang ada.
- **Multibahasa** — 31 bahasa: Inggris, Ukraina, Rusia, Belarusia, Kazakh, Uzbek, Jerman, Spanyol, Prancis, Italia, Belanda, Ceko, Kroasia, Polandia, Rumania, Turki, Azerbaijan, Persia, Hindi, Bengali, Urdu, Tagalog, Vietnam, Thailand, Jawa, Jepang, Korea, Cina, Arab, Sinhala, Ibrani.

---

## Mulai Cepat

### 1. Instalasi

Instal **Pustaka** dari [direktori Plugin Komunitas Obsidian](https://community.obsidian.md/plugins/library) (Pengaturan > Plugin komunitas > Telusuri > cari "Pustaka"), atau instal secara manual melalui [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).

### 2. Pengaturan Dasar

1. Buka **Pengaturan** > **Pustaka**.
2. Tambahkan **Kategori** Anda — pilih jenis yang sudah ditentukan (Film, Serial, Buku, Komik, Game, Musik, Anime, atau Manual) dari dropdown dan klik **Tambah kategori**. Setiap kategori memiliki nama tampilan (diterjemahkan ke bahasa Anda), nilai `Type` (selalu bahasa Inggris, contoh `Movie`), sumber, dan folder opsional untuk menyimpan catatan.
3. _（Opsional）_ Masukkan API key untuk layanan yang Anda gunakan: [OMDb](https://www.omdbapi.com/apikey.aspx) untuk film/serial, [RAWG](https://rawg.io/apidocs) untuk game, [Comic Vine](https://comicvine.gamespot.com/api/) untuk komik. Anime (AniList) dan musik (Deezer) tidak memerlukan key.

### 3. Menambahkan Kartu dengan Judul

Tidak perlu mengisi frontmatter secara manual lagi — tambahkan film, serial, buku, anime, atau komik hanya dengan mencari namanya:

1. Buka tab **Pustaka** dari ikon ribbon (atau jalankan `Open Library`).
2. Klik tombol **+** di pojok kanan atas halaman Pustaka (atau jalankan `Add content`).
3. Pilih kategori, ketik **judul** di kotak pencarian, dan pilih hasil.
4. Kartu dibuat seketika, dengan poster, tahun, genre, kreator, dan peringkat terisi secara otomatis.

Tombol **Pencarian** di sebelah **+** mencari judul yang sudah ada di pustaka Anda.

Untuk kategori **Manual**, Anda cukup mengetik judul dan mengisi cover, tahun, dan field lainnya sendiri.

---

## Statistik

Tab Pustaka mencakup bagian **Statistik** yang dapat dilipat di bagian atas:

- **Genre Teratas** — diurutkan berdasarkan frekuensi di seluruh pustaka Anda.
- **Kreator Teratas** — diurutkan berdasarkan jumlah film dan serial yang mereka tampilkan.
- **Teratas per Kategori** — untuk setiap kategori (Film, Serial, Buku, dll.), 3 item teratas berdasarkan peringkat dengan thumbnail cover kecil.

---

## Deteksi Duplikat

Pustaka mencegah entri duplikat dengan memeriksa field `URL`:

- **Saat menambahkan** — jika catatan dengan URL yang sama sudah ada, ia membuka catatan yang ada alih-alih membuat duplikat.
- **Cari & Hapus Duplikat** — jalankan perintah ini dari palette untuk memindai semua catatan, kelompokkan berdasarkan URL, dan pilih hapus duplikat melalui modal.

---

## Sumber

Setiap kategori terikat dengan sumber yang menjalankan pencariannya:

| Sumber           | Jenis konten   | API key                                                      |
| ---------------- | --------------- | ----------------------------------------------------------- |
| **OMDb**         | Film, Serial    | Key gratis diperlukan — [omdbapi.com](https://www.omdbapi.com/apikey.aspx) |
| **Books**        | Buku            | Open Library (tanpa key) + Google Books (key gratis opsional). Hasil digabung — Google Books di atas, Open Library di bawah. |
| **RAWG**         | Game            | Key gratis diperlukan — [rawg.io/apidocs](https://rawg.io/apidocs) |
| **Deezer**       | Musik (album)   | Tidak perlu                                                    |
| **AniList**        | Anime           | Tidak perlu — API GraphQL AniList gratis, ora perlu key |
| **Comic Vine**   | Komik           | Key gratis diperlukan — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**       | Apa pun lainnya | Tidak perlu — Anda mengetik judul dan mengisi field sendiri          |

---

## Privasi & Penggunaan Jaringan

Pustaka adalah **offline-first**. Plugin hanya menghubungi jaringan ketika Anda secara aktif mencari judul untuk ditambahkan, dan hanya dengan istilah pencarian yang Anda ketik:

| Layanan | Kapan | Apa yang dikirim | Mengapa |
| --- | --- | --- | --- |
| `www.omdbapi.com` | Anda mencari kategori yang menggunakan OMDb | Judul yang Anda ketik dan OMDb API key Anda | Mengambil metadata film/serial (tahun, genre, pemeran, peringkat, poster, jumlah episode) |
| `openlibrary.org` | Anda mencari kategori Open Library | Judul yang Anda ketik | Mengambil metadata buku (pengarang, tahun, subjek, cover id) |
| `covers.openlibrary.org` | Kartu buku memiliki cover | Cover id Open Library | Memuat gambar cover |
| `www.googleapis.com` | Anda mencari kategori Google Books | Judul yang Anda ketik dan Google Books key Anda | Mengambil metadata buku (pengarang, tahun, kategori, jumlah halaman, cover, ISBN) |
| `api.rawg.io` | Anda mencari kategori game RAWG | Judul yang Anda ketik dan RAWG key Anda | Mengambil metadata game (tahun, genre, pengembang, cover) |
| `api.deezer.com` | Anda mencari kategori musik Deezer | Album atau artis yang Anda ketik | Mengambil metadata album (artis, tahun, genre, jumlah trek, cover) |
| `graphql.anilist.co` | Anda mencari kategori anime | Judul yang Anda ketik | Mengambil metadata anime (judul, tahun, genre, episode, nilai AniList, studio, poster) |
| `graphql.anilist.co` | Anda menjalankan perintah sinkronisasi AniList | Access token AniList Anda dan kemajuan, status, serta peringkat catatan | Membaca atau memperbarui daftar anime AniList Anda |
| `comicvine.gamespot.com` | Anda mencari kategori komik | Judul yang Anda ketik dan Comic Vine key Anda | Mengambil metadata komik (judul, tahun, penerbit, jumlah issue, cover) |

Data lainnya tidak pernah keluar dari vault Anda. Plugin **tidak memiliki遥测, tidak memiliki analitik, dan tidak memiliki mekanisme pembaruan otomatis**. API key (OMDb, Google Books, RAWG, Comic Vine) hanya disimpan di pengaturan plugin lokal Anda dan hanya dikirim ke layanan masing-masing. Gambar cover dimuat langsung dari URL yang dikembalikan oleh setiap sumber.

---

## Skema Frontmatter

Plugin membaca dan menulis frontmatter YAML standar. Catatan dibuat untuk Anda, tetapi setiap field dapat diedit. `Source` dan `Source ID` memungkinkan plugin menyegarkan metadata nanti.

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

> **Pembaruan otomatis serial:** Jalankan `Refresh metadata for current note` (atau cukup buka catatan) dan plugin akan memperbarui jumlah episode total di `Progress` (misalnya dari `25/42` menjadi `25/50`) dan jumlah `Season`, sambil mempertahankan jumlah tontonan Anda tetap utuh.

### Buku

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

### Komik

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

## Tautan Grafik

Setiap catatan konten mendapat properti frontmatter `Related`, disimpan secara otomatis — isi catatan tidak pernah disentuh:

```yaml
Related:
    - "[[Movie]]"
    - "[[Action]]"
    - "[[Sci-Fi]]"
    - "[[Christopher Nolan]]"
```

Tautan ini menghubungkan catatan Anda melalui kategori, genre, dan kreator yang dibagikan, sehingga tampilan grafik Obsidian membentuk klaster yang rapi. Catatan hub nyata dibuat untuk setiap kategori (misalnya `Movie`) sehingga klaster tetap terlihat meskipun tautan yang belum diselesaikan disembunyikan. Properti ditulis saat catatan dibuat dan disegarkan setiap kali metadata berubah — jalankan `Rebuild graph links` hanya jika Anda ingin memaksa pembuatan ulang penuh.

---

## Berbagi

Setiap catatan konten mendapat tombol **Bagikan** di header-nya (atau jalankan `Share current note`). Ia merender gambar kartu — poster, judul, tahun, genre, nilai IMDb/AniList, dan peringkat Anda — yang dapat Anda posting di mana saja:

- **Di perangkat seluler** — tombol **Bagikan…** membuka lembar berbagi bawaan perangkat Anda dengan gambar kartu terlampir langsung, sehingga Anda dapat mengirimnya langsung ke aplikasi apa pun.
- **X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, Pinterest** — membuka komposer jaringan tersebut dengan keterangan yang sudah terisi (judul, peringkat Anda, tautan sumber, dan tautan ke plugin ini). Gambar kartu disalin ke clipboard Anda pada saat yang sama, jadi Anda cukup menempelkannya (Ctrl/Cmd+V) ke dalam postingan.
- **Salin gambar / Salin teks / Simpan gambar** — salin kartu yang dirender atau keterangannya ke clipboard, atau simpan gambar ke folder lampiran vault Anda untuk dilampirkan secara manual.

Berbagi sepenuhnya lokal: kartu digambar di dalam aplikasi dari metadata dan cover catatan itu sendiri. Tidak ada yang diunggah — plugin hanya membuka URL komposer yang Anda pilih di browser Anda.

---

## Sinkronisasi AniList

Jaga kemajuan anime Anda tetap sinkron dengan akun [AniList](https://anilist.co) Anda.

**Penyiapan** — di **Pengaturan → Pustaka → Sinkronisasi AniList**:

1. Daftarkan API client gratis di [anilist.co/settings/developer](https://anilist.co/settings/developer), dengan redirect URL disetel ke `https://anilist.co/api/v2/oauth/pin`.
2. Tempel **Client ID**, klik **Connect**, dan otorisasi.
3. AniList menampilkan access token kepada Anda — tempel ke dalam plugin. Klik **Test connection** untuk mengonfirmasi.

Lalu gunakan perintah:

- `Push current note to AniList` — mengirim kemajuan (episode yang telah ditonton), status (sedang ditonton / selesai / direncanakan), dan peringkat Anda dari catatan anime aktif ke daftar AniList Anda.
- `Pull progress from AniList` — mengambil daftar anime AniList Anda dan memperbarui catatan yang cocok. Penarikan bersifat **maju-saja**: ia tidak pernah memundurkan catatan yang secara lokal lebih maju atau sudah selesai, dan membiarkan `My Rating` pribadi Anda tidak tersentuh.

Hanya catatan dengan `Source: anilist` (ditambahkan melalui sumber anime AniList) yang disinkronkan. Token Anda disimpan secara lokal di pengaturan plugin dan hanya dikirim ke AniList.

---

## Perintah

| Perintah                            | Deskripsi                                                              |
| ------------------------------------ | ----------------------------------------------------------------------- |
| `Open Library`                       | Buka tab galeri Pustaka.                                           |
| `Add content`                        | Cari sumber dan buat catatan konten (atau ketik judul untuk Manual). |
| `Search your library`                | Cari samar dan buka catatan yang sudah ada di pustaka Anda.                 |
| `Refresh metadata for current note`  | Ambil ulang metadata untuk catatan aktif; perbarui total episode serial.   |
| `Rebuild graph links`                | Hubungkan setiap catatan konten ke kategorinya, genre, dan kreator.          |
| `Find & remove duplicates`           | Pindai semua catatan berdasarkan URL, tampilkan duplikat, dan hapus yang dipilih.       |
| `Share current note`                 | Render catatan sebagai gambar kartu dan bagikan ke X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, atau Pinterest. |
| `Push current note to AniList`       | Kirim kemajuan, status, dan peringkat catatan anime aktif ke akun AniList Anda. |
| `Pull progress from AniList`         | Ambil daftar AniList Anda dan perbarui catatan yang cocok (maju-saja). |

---

## Kontribusi & Dukungan

- **Menemukan bug?** Buka [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues).
- **Punya ide fitur?** Mulai [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions).
- **Menyukai plugin?** Beri bintang pada repositori untuk menunjukkan dukungan Anda!

---

## Terima Kasih

Jika Anda merasa plugin ini berguna, pertimbangkan untuk mendukung pengembangannya:

| | Jaringan | Alamat |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |

---
