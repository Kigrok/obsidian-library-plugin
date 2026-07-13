> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

<p align="center">
  <img src="../banner.png" alt="Biểu ngữ Obsidian Library" width="100%">
</p>

<h1 align="center">Thư viện</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.2.1-blue" alt="Phiên bản">
  <img src="https://img.shields.io/github/downloads/Kigrok/obsidian-library-plugin/total?color=brightgreen" alt="Lượt tải">
  <img src="https://img.shields.io/badge/Obsidian-v1.8.7+-purple" alt="Phiên bản Obsidian">
  <img src="https://img.shields.io/github/license/Kigrok/obsidian-library-plugin?color=orange" alt="Giấy phép">
</p>

<p align="center">
  <b>Tổ chức phim, series, sách và nhiều thứ khác vào thư viện hình ảnh — ngay trong Obsidian.</b>
  <br />
  Tìm kiếm và thêm tiêu đề trong ứng dụng, tự động lấy metadata, theo dõi tiến độ và kết nối mọi thứ vào biểu đồ của bạn.
</p>

<p align="center">
  <a href="https://community.obsidian.md/plugins/library">Xem trên thư mục Plugins Cộng Đồng Obsidian</a>
</p>

---

## Tính Năng Chính

- **Lưới Thẻ Trực Quan** — Tab Thư viện chuyên dụng hiển thị bộ sưu tập của bạn dưới dạng thư viện thẻ bìa artwork.
- **Tìm Kiếm Built-in** — Tìm kiếm và thêm tiêu đề ngay trong ứng dụng: OMDb cho phim và series, Open Library hoặc Google Books cho sách, RAWG cho trò chơi, Deezer cho nhạc, AniList cho anime, Comic Vine cho truyện tranh.
- **Theo Dõi Series Thông Minh** — Số season và tổng tập được tự động lấy và đồng bộ.
- **Chỉ Báo Tiến Độ** — Thanh tiến độ trực quan trên thẻ và tiêu đề ghi chú hiển thị bạn đã xem hoặc đọc được bao nhiêu.
- **Tiêu Đề Ghi Chú Phong Phú** — Mỗi ghi chú nội dung đều có tiêu đề tự động tạo với tất cả metadata chính.
- **Danh Mục Tùy Chỉnh** — Tạo danh mục cho Phim, Series, Anime, Truyện Tranh, Sách, Trò Chơi, Nhạc, hoặc bất kỳ thứ gì khác qua nguồn thủ công.
- **Liên Kết Biểu Đồ** — Thuộc tính frontmatter `Related` liên kết mỗi ghi chú với danh mục, thể loại và nhà sáng tạo, được đồng bộ tự động cho biểu đồ đẹp.
- **Thẻ Chia Sẻ** — Biến bất kỳ ghi chú nội dung nào thành hình ảnh thẻ có thể chia sẻ (poster, tiêu đề, năm, thể loại, điểm IMDb và đánh giá của bạn) và đăng lên X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, hoặc Pinterest — chia sẻ thẳng đến các ứng dụng trên thiết bị của bạn, hoặc sao chép/lưu hình ảnh để dùng ở bất cứ đâu.
- **Đồng Bộ AniList** — Đẩy tiến độ, trạng thái và đánh giá anime của bạn thẳng đến tài khoản AniList, hoặc kéo danh sách của bạn về lại các ghi chú.
- **Sắp Xếp & Thu Gộp** — Sắp xếp thẻ theo tên, năm, đánh giá hoặc ngày; thu gộp bất kỳ danh mục nào.
- **Thống Kê** — Thể loại hàng đầu, nhà sáng tạo hàng đầu (chỉ phim & series), và mục hàng đầu mỗi danh mục với xếp hạng huy chương.
- **Phát Hiện Trùng Lặp** — Tự động ngăn chặn thêm cùng tiêu đề twice bằng URL. Lệnh built-in tìm và xóa các bản trùng lặp.
- **Đa Ngôn Ngữ** — 31 ngôn ngữ: Tiếng Anh, Tiếng Ukraina, Tiếng Nga, Tiếng Belarus, Tiếng Kazakhstan, Tiếng Uzbek, Tiếng Đức, Tiếng Tây Ban Nha, Tiếng Pháp, Tiếng Ý, Tiếng Hà Lan, Tiếng Séc, Tiếng Croatia, Tiếng Ba Lan, Tiếng Romania, Tiếng Thổ Nhĩ Kỳ, Tiếng Azerbaijan, Tiếng Ba Tư, Tiếng Hindi, Tiếng Bengal, Tiếng Urdu, Tiếng Tagalog, Tiếng Việt, Tiếng Thái, Tiếng Java, Tiếng Nhật, Tiếng Hàn, Tiếng Trung, Tiếng Ả Rập, Tiếng Sinhala, Tiếng Do Thái.

---

## Bắt Đầu Nhanh

### 1. Cài Đặt

Cài đặt **Thư viện** từ [thư mục Plugins Cộng Đồng Obsidian](https://community.obsidian.md/plugins/library) (Cài đặt > Plugins cộng đồng > Duyệt > tìm "Thư viện"), hoặc cài đặt thủ công qua [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).

### 2. Thiết Lập Cơ Bản

1. Vào **Cài đặt** > **Thư viện**.
2. Thêm **Danh mục** của bạn — chọn loại định nghĩa sẵn (Phim, Series, Sách, Truyện Tranh, Trò Chơi, Nhạc, Anime, hoặc Thủ công) từ danh sách thả xuống và nhấp **Thêm danh mục**. Mỗi danh mục có tên hiển thị (được dịch sang ngôn ngữ của bạn), giá trị `Type` (luôn bằng tiếng Anh, ví dụ `Movie`), nguồn và thư mục tùy chọn để lưu ghi chú.
3. _（Tùy chọn）_ Nhập API key cho các dịch vụ bạn sử dụng: [OMDb](https://www.omdbapi.com/apikey.aspx) cho phim/series, [RAWG](https://rawg.io/apidocs) cho trò chơi, [Comic Vine](https://comicvine.gamespot.com/api/) cho truyện tranh. Anime (AniList) và nhạc (Deezer) không cần key.

### 3. Thêm Thẻ Bằng Tiêu Đề

Không cần điền frontmatter thủ công nữa — thêm phim, series, sách, anime hoặc truyện tranh chỉ bằng cách tìm kiếm tên:

1. Mở tab **Thư viện** từ biểu tượng ribbon (hoặc chạy `Open Library`).
2. Nhấp nút **+** ở góc trên bên phải trang Thư viện (hoặc chạy `Add content`).
3. Chọn danh mục, nhập **tiêu đề** vào ô tìm kiếm và chọn kết quả.
4. Thẻ được tạo ngay lập tức, với poster, năm, thể loại, nhà sáng tạo và đánh giá được điền tự động.

Nút **Tìm kiếm** bên cạnh **+** tìm kiếm các tiêu đề đã có trong thư viện của bạn.

Với danh mục **Thủ công**, bạn chỉ cần nhập tiêu đề và tự điền bìa, năm và các trường khác.

---

## Thống Kê

Tab Thư viện bao gồm phần **Thống Kê** có thể thu gộp ở đầu:

- **Thể Loại Hàng Đầu** — xếp hạng theo tần suất trong toàn bộ thư viện.
- **Nhà Sáng Tạo Hàng Đầu** — xếp hạng theo số lượng phim và series họ tham gia.
- **Hàng Đầu Mỗi Danh Mục** — cho mỗi danh mục (Phim, Series, Sách, v.v.), top 3 mục theo đánh giá với thumbnail bìa nhỏ.

---

## Phát Hiện Trùng Lặp

Thư viện ngăn chặn các mục trùng lặp bằng cách kiểm tra trường `URL`:

- **Khi thêm** — nếu ghi chú với URL giống đã tồn tại, nó mở ghi chú hiện có thay vì tạo bản trùng.
- **Tìm & Xóa Trùng Lặp** — chạy lệnh này từ palette để quét tất cả ghi chú, nhóm theo URL và chọn lọc xóa trùng lặp qua modal.

---

## Nguồn

Mỗi danh mục được liên kết với nguồn cung cấp tìm kiếm:

| Nguồn            | Loại nội dung   | API key                                                      |
| ---------------- | --------------- | ----------------------------------------------------------- |
| **OMDb**         | Phim, Series   | Cần key miễn phí — [omdbapi.com](https://www.omdbapi.com/apikey.aspx) |
| **Books**        | Sách            | Open Library (không cần key) + Google Books (key miễn phí tùy chọn). Kết quả được hợp nhất — Google Books trước, Open Library phía dưới. |
| **RAWG**         | Trò chơi        | Cần key miễn phí — [rawg.io/apidocs](https://rawg.io/apidocs) |
| **Deezer**       | Nhạc (album)    | Không cần                                                    |
| **AniList**        | Anime           | Không cần — API GraphQL AniList miễn phí, không cần key |
| **Comic Vine**   | Truyện tranh    | Cần key miễn phí — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Thủ công**     | Bất kỳ thứ gì khác | Không cần — bạn tự nhập tiêu đề và điền các trường |

---

## Bảo Mật & Sử Dụng Mạng

Thư viện là **ưu tiên ngoại tuyến**. Plugin chỉ liên lạc mạng khi bạn tích cực tìm kiếm tiêu đề để thêm, và chỉ với các từ khóa bạn nhập:

| Dịch vụ | Khi nào | Gửi gì | Tại sao |
| --- | --- | --- | --- |
| `www.omdbapi.com` | Bạn tìm kiếm danh mục dùng OMDb | Tiêu đề bạn nhập và OMDb API key của bạn | Lấy metadata phim/series (năm, thể loại, diễn viên, đánh giá, poster, số tập) |
| `openlibrary.org` | Bạn tìm kiếm danh mục Open Library | Tiêu đề bạn nhập | Lấy metadata sách (tác giả, năm, chủ đề, cover id) |
| `covers.openlibrary.org` | Thẻ sách có bìa | Cover id của Open Library | Tải hình ảnh bìa |
| `www.googleapis.com` | Bạn tìm kiếm danh mục Google Books | Tiêu đề bạn nhập và Google Books key của bạn | Lấy metadata sách (tác giả, năm, danh mục, số trang, bìa, ISBN) |
| `api.rawg.io` | Bạn tìm kiếm danh mục trò chơi RAWG | Tiêu đề bạn nhập và RAWG key của bạn | Lấy metadata trò chơi (năm, thể loại, nhà phát triển, bìa) |
| `api.deezer.com` | Bạn tìm kiếm danh mục nhạc Deezer | Album hoặc nghệ sĩ bạn nhập | Lấy metadata album (nghệ sĩ, năm, thể loại, số tracks, bìa) |
| `graphql.anilist.co` | Bạn tìm kiếm danh mục anime | Tiêu đề bạn nhập | Lấy metadata anime (tiêu đề, năm, thể loại, tập phim, điểm AniList, studio, poster) |
| `graphql.anilist.co` | Bạn chạy lệnh đồng bộ AniList | AniList access token của bạn và tiến độ, trạng thái, đánh giá của ghi chú | Đọc hoặc cập nhật danh sách anime AniList của bạn |
| `comicvine.gamespot.com` | Bạn tìm kiếm danh mục truyện tranh | Tiêu đề bạn nhập và Comic Vine key của bạn | Lấy metadata truyện tranh (tiêu đề, năm, nhà xuất bản, số issues, bìa) |

Không có dữ liệu nào khác rời khỏi vault của bạn. Plugin **không có遥测, không phân tích, và không có cơ chế tự cập nhật**. API key (OMDb, Google Books, RAWG, Comic Vine) chỉ được lưu trong cài đặt plugin cục bộ và chỉ gửi đến dịch vụ tương ứng. Hình ảnh bìa tải trực tiếp từ URL được mỗi nguồn trả về.

---

## Schema Frontmatter

Plugin đọc và ghi vào frontmatter YAML tiêu chuẩn. Ghi chú được tạo tự động nhưng mọi trường đều có thể chỉnh sửa. `Source` và `Source ID` cho phép plugin làm mới metadata sau này.

### Phim

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

> **Tự động cập nhật series:** Chạy `Refresh metadata for current note` (hoặc chỉ cần mở ghi chú) và plugin cập nhật tổng số tập trong `Progress` (ví dụ `25/42` thành `25/50`) và số `Season`, trong khi giữ nguyên số lượng bạn đã xem.

### Sách

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

### Truyện Tranh

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

## Liên Kết Biểu Đồ

Mỗi ghi chú nội dung đều có thuộc tính frontmatter `Related`, được tự động cập nhật — nội dung ghi chú không bao giờ bị thay đổi:

```yaml
Related:
    - "[[Movie]]"
    - "[[Action]]"
    - "[[Sci-Fi]]"
    - "[[Christopher Nolan]]"
```

Các liên kết này kết nối các ghi chú của bạn qua danh mục, thể loại và nhà sáng tạo được chia sẻ, giúp chế độ xem biểu đồ Obsidian tạo thành các cụm gọn gàng. Một ghi chú trung tâm thực sự được tạo cho mỗi danh mục (ví dụ `Movie`) nên các cụm hiển thị ngay cả khi ẩn các liên kết chưa giải quyết. Thuộc tính được ghi khi tạo ghi chú và làm mới mỗi khi metadata thay đổi — chỉ chạy `Rebuild graph links` nếu bạn muốn buộc xây dựng lại toàn bộ.

---

## Chia Sẻ

Mỗi ghi chú nội dung đều có nút **Chia sẻ** trong tiêu đề (hoặc chạy `Share current note`). Nó tạo một hình ảnh thẻ — poster, tiêu đề, năm, thể loại, điểm IMDb/AniList và đánh giá của bạn — mà bạn có thể đăng ở bất cứ đâu:

- **Trên di động** — nút **Chia sẻ…** mở bảng chia sẻ gốc của thiết bị với hình ảnh thẻ được đính kèm trực tiếp, để bạn có thể gửi thẳng đến bất kỳ ứng dụng nào.
- **X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, Pinterest** — mở trình soạn thảo của mạng với chú thích được điền sẵn (tiêu đề, đánh giá của bạn, liên kết nguồn và liên kết đến plugin này). Hình ảnh thẻ được sao chép vào clipboard cùng lúc, nên bạn chỉ cần dán (Ctrl/Cmd+V) vào bài đăng.
- **Sao chép hình ảnh / Sao chép văn bản / Lưu hình ảnh** — sao chép thẻ đã tạo hoặc chú thích vào clipboard, hoặc lưu hình ảnh vào thư mục đính kèm của vault để đính kèm thủ công.

Chia sẻ hoàn toàn cục bộ: thẻ được vẽ trong ứng dụng từ chính metadata và bìa của ghi chú. Không có gì được tải lên — plugin chỉ mở URL trình soạn thảo bạn chọn trong trình duyệt.

---

## Đồng Bộ AniList

Giữ tiến độ anime của bạn đồng bộ với tài khoản [AniList](https://anilist.co) của bạn.

**Thiết lập** — trong **Cài đặt → Thư viện → Đồng bộ AniList**:

1. Đăng ký một API client miễn phí tại [anilist.co/settings/developer](https://anilist.co/settings/developer), với redirect URL được đặt thành `https://anilist.co/api/v2/oauth/pin`.
2. Dán **Client ID**, nhấp **Connect**, và cấp quyền.
3. AniList hiển thị cho bạn một access token — dán nó vào plugin. Nhấp **Test connection** để xác nhận.

Sau đó dùng các lệnh:

- `Push current note to AniList` — gửi tiến độ (số tập đã xem), trạng thái (đang xem / hoàn thành / dự định) và đánh giá của ghi chú anime đang hoạt động đến danh sách AniList của bạn.
- `Pull progress from AniList` — lấy danh sách anime AniList của bạn và cập nhật các ghi chú khớp. Pull **chỉ tiến về phía trước**: nó không bao giờ làm thụt lùi một ghi chú đang ở tiến độ xa hơn cục bộ hoặc đã hoàn thành, và giữ nguyên `My Rating` cá nhân của bạn.

Chỉ các ghi chú có `Source: anilist` (được thêm qua nguồn anime AniList) mới được đồng bộ. Token của bạn được lưu cục bộ trong cài đặt plugin và chỉ gửi đến AniList.

---

## Lệnh

| Lệnh                                | Mô tả                                                                  |
| ------------------------------------ | ----------------------------------------------------------------------- |
| `Open Library`                       | Mở tab thư viện.                                           |
| `Add content`                        | Tìm kiếm nguồn và tạo ghi chú nội dung (hoặc nhập tiêu đề cho Thủ công). |
| `Search your library`                | Tìm kiếm mờ và mở bất kỳ ghi chú nào đã có trong thư viện.                 |
| `Refresh metadata for current note`  | Lấy lại metadata cho ghi chú đang hoạt động; cập nhật tổng tập series.   |
| `Rebuild graph links`                | Kết nối mọi ghi chú nội dung với danh mục, thể loại và nhà sáng tạo.          |
| `Find & remove duplicates`           | Quét tất cả ghi chú theo URL, hiển thị trùng lặp và xóa các mục được chọn.       |
| `Share current note`                 | Tạo hình ảnh thẻ từ ghi chú và chia sẻ lên X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, hoặc Pinterest. |
| `Push current note to AniList`       | Gửi tiến độ, trạng thái và đánh giá của ghi chú anime đang hoạt động đến tài khoản AniList của bạn. |
| `Pull progress from AniList`         | Lấy danh sách AniList của bạn và cập nhật các ghi chú khớp (chỉ tiến về phía trước). |

---

## Đóng Góp & Hỗ Trợ

- **Tìm thấy lỗi?** Mở [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues).
- **Có ý tưởng tính năng?** Bắt đầu [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions).
- **Thích plugin?** Hãy star repo để ủng hộ!

---

## Cảm Ơn

Nếu bạn thấy plugin này hữu ích, hãy cân nhắc ủng hộ sự phát triển:

| | Mạng | Địa chỉ |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |

---
