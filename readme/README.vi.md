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
  Phim, series, sách, anime, truyện tranh, trò chơi và âm nhạc dưới dạng ghi chú trong Obsidian, hiển thị như một thư viện thẻ bìa.
  <br />
  <a href="https://community.obsidian.md/plugins/library">Danh mục plugin của Obsidian</a>
</p>

## Tính năng

- Tìm một tựa và nhận ghi chú đã điền sẵn áp phích, năm, thể loại, người sáng tạo, diễn viên và điểm đánh giá.
- Xem thư viện dưới dạng thẻ bìa, nhóm theo danh mục và sắp xếp theo tên, năm, điểm hoặc ngày.
- Đánh dấu các tập của series hoặc các chương của sách và chấm điểm từng mục; `Progress` và `My Rating` được tính từ đó.
- Ghi chú phim và series hiển thị trailer, ảnh tĩnh, thời lượng và danh sách mùa.
- Thể loại, người sáng tạo và diễn viên là liên kết, nên ghi chú của họ gom mọi tựa trong liên kết đến và biểu đồ.
- Bảng thống kê hiển thị các bảng xếp hạng bạn chọn và tổng thời gian xem.
- Chia sẻ một tựa dưới dạng ảnh thẻ lên X, Telegram, Reddit và sáu mạng khác.
- Đồng bộ tiến độ anime với AniList.
- Giao diện được dịch sang mọi ngôn ngữ Obsidian hỗ trợ, và README này có [30 ngôn ngữ](./).

## Bắt đầu nhanh

1. Cài **Library** từ Cài đặt → Phần mở rộng của bên thứ ba → Duyệt, hoặc từ [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).
2. Trong Cài đặt → Library, thêm một danh mục cho mỗi loại nội dung: Phim, Phim bộ, Sách, Truyện tranh, Trò chơi, Âm nhạc, Hoạt hình, Thủ công.
3. Nhập các khóa API mà nguồn của bạn cần (xem bên dưới).
4. Mở tab "Thư viện" từ thanh công cụ, nhấn **+**, chọn danh mục và tìm một tựa. Tựa đã có trong thư viện sẽ mở ghi chú hiện có.

Giá trị `Type` của danh mục (ví dụ `Movie`) quyết định ghi chú nào thuộc về nó, còn thư mục của danh mục quyết định ghi chú mới được lưu ở đâu. Cả hai nằm trong **Nâng cao** ở phần cài đặt danh mục.

## Nguồn

| Danh mục | Nguồn | Khóa |
| --- | --- | --- |
| Phim, series | OMDb | [Khóa miễn phí](https://www.omdbapi.com/apikey.aspx) |
| Sách | Google Books + Open Library | [Khóa Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) tùy chọn |
| Trò chơi | RAWG + Steam | [Khóa RAWG miễn phí](https://rawg.io/apidocs); Steam không cần |
| Âm nhạc | Deezer | Không cần |
| Anime | AniList | Không cần |
| Truyện tranh | Comic Vine | [Khóa miễn phí](https://comicvine.gamespot.com/api/) |
| Mọi thứ khác | Thủ công: bạn tự điền các trường | Không cần |

Trailer, ảnh tĩnh, thời lượng và danh sách mùa đến từ Cinemeta mà không cần khóa. [Khóa TMDB](https://www.themoviedb.org/settings/api) thêm điểm của từng mùa và nhiều ảnh tĩnh hơn.

## Tiến độ và điểm

Phần đầu ghi chú của series liệt kê các mùa, và mỗi mùa mở ra danh sách tập, kèm tên tập nếu nguồn có. Đánh dấu một tập hoặc cả mùa là đã xem và chấm điểm từ 1 đến 10. `Progress` đếm các tập đã đánh dấu, điểm của mùa là trung bình các tập đã chấm, còn `My Rating` là trung bình các mùa đã chấm. Mùa không có tập nào được chấm có thể nhận điểm riêng.

Anime hoạt động giống vậy, như một mùa không có tên tập.

Các chương của sách lấy từ mục lục của một ấn bản trên Open Library. Nếu không tìm thấy mục lục, nút **Thêm chương** ở phần đầu ghi chú nhận số chương hoặc mỗi dòng một tên chương. Từ đó `Progress` đếm chương thay vì trang, và số trang đã đọc được quy đổi theo cùng tỉ lệ chương.

Ghi chú từ các phiên bản cũ vẫn giữ tiến độ. Khi bạn chưa đánh dấu gì, các tập đầu tiên đến con số trong `Progress` hiển thị là đã xem.

## Thống kê

Bảng ở đầu tab "Thư viện" hiển thị các cột bạn chọn trong Cài đặt → Library → Thống kê: ba tựa được chấm điểm cao nhất của một danh mục, ba giá trị phổ biến nhất của một thuộc tính (thể loại, diễn viên hoặc bất kỳ thuộc tính nào khác) và số giờ bạn dành cho phim, series và anime. Bên dưới biểu đồ, mỗi ngày hiện một phép so sánh, ví dụ: Apollo 11 có thể bay lên Mặt Trăng rồi trở về 8 lần.

## Liên kết trong biểu đồ

`Genre`, `Creator` và `Cast` chứa liên kết như `[[Christopher Nolan]]`, nên ghi chú của một thể loại hay một người liệt kê các tựa của họ trong liên kết đến. Tên gõ tay trở thành liên kết khi ghi chú thay đổi, và `Xây dựng lại liên kết đồ thị` chuyển đổi toàn bộ thư viện.

## Chia sẻ và AniList

Nút **Chia sẻ** ở phần đầu ghi chú vẽ một thẻ có áp phích, tên, năm, thể loại, diễn viên, điểm đánh giá và điểm của bạn. Trên máy tính, ảnh được chép vào bộ nhớ tạm và mạng bạn chọn mở ra với chú thích sẵn, bạn chỉ cần dán ảnh vào bài đăng. Trên điện thoại, ảnh được chuyển tới menu chia sẻ của hệ thống. Bạn cũng có thể sao chép ảnh hoặc chú thích, hoặc lưu ảnh.

Để đồng bộ anime, hãy đăng ký một client tại [anilist.co/settings/developer](https://anilist.co/settings/developer) với URL chuyển hướng `https://anilist.co/api/v2/oauth/pin`. Dán Client ID vào Cài đặt → Library → Đồng bộ AniList, nhấn **Kết nối** rồi dán token mà AniList hiển thị. `Đẩy ghi chú hiện tại lên AniList` gửi tiến độ, trạng thái và điểm. `Lấy tiến độ từ AniList` cập nhật ghi chú của bạn, không bao giờ lùi tiến độ và không động đến `My Rating`. Chỉ các ghi chú có `Source: anilist` mới được đồng bộ.

Các ghi chú này cũng đồng bộ với MyAnimeList. Tạo một ứng dụng tại [myanimelist.net/apiconfig](https://myanimelist.net/apiconfig) với URL chuyển hướng `http://localhost`, dán Client ID (và Client Secret nếu có) vào Cài đặt → Library → Đồng bộ MyAnimeList, bấm **Kết nối** rồi dán địa chỉ mà trình duyệt mở ra. Plugin tìm mục MyAnimeList của từng tựa qua AniList và tự làm mới token. `Đẩy ghi chú hiện tại lên MyAnimeList` và `Lấy tiến độ từ MyAnimeList` hoạt động giống các lệnh tương ứng của AniList.

## Frontmatter

Mỗi thẻ là một ghi chú, và mọi thứ plugin biết về nó nằm trong frontmatter:

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
      # ...thêm 7 tập
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

Với series, `Runtime` là thời lượng một tập. Sách có thêm `ISBN` và lưu các chương trong `Chapters` với cùng các trường `title`, `watched` và `my_rating`; anime có thêm `Rating AniList` và `Status`. Có thể đổi tên thuộc tính ảnh bìa trong cài đặt, ví dụ thành `image`.

Làm mới chỉ điền các trường trống, nên các giá trị bạn đã sửa vẫn giữ nguyên. Nó cũng cập nhật tổng số tập trong `Progress` và thêm mùa mới cùng tên tập.

## Quyền riêng tư và sử dụng mạng

Thư viện của bạn là các ghi chú thông thường và hoạt động ngoại tuyến. Plugin chỉ kết nối mạng khi bạn tìm kiếm, làm mới, đồng bộ hoặc chia sẻ; khi bạn mở một ghi chú trong thư viện, tối đa 5 phút một lần cho mỗi ghi chú; và một lần sau khi cập nhật hoặc đổi khóa, để điền các trường mới. Không có đo lường từ xa, phân tích hay tự cập nhật. Khóa API nằm trong cài đặt cục bộ của plugin và chỉ được gửi đến dịch vụ của chính nó.

| Máy chủ | Khi nào | Gửi gì |
| --- | --- | --- |
| `www.omdbapi.com` | Tìm phim và series | Tên hoặc IMDb id, khóa OMDb |
| `openlibrary.org` | Tìm sách; tìm chương khi bạn thêm hoặc mở sách | Tên và tác giả, ISBN hoặc id tác phẩm |
| `covers.openlibrary.org` | Bìa sách | Id bìa |
| `www.googleapis.com` | Tìm sách | Tên, khóa Google Books |
| `api.rawg.io` | Tìm trò chơi | Tên, khóa RAWG |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | Tìm trò chơi và ảnh bìa | Tên hoặc id ứng dụng Steam |
| `api.deezer.com` | Tìm nhạc | Album hoặc nghệ sĩ |
| `graphql.anilist.co` | Tìm anime; đồng bộ AniList; id MyAnimeList để đồng bộ | Tên; token của bạn, tiến độ, trạng thái và điểm; id AniList |
| `anilist.co` | Bạn nhấn **Kết nối** | Client ID, mở trong trình duyệt |
| `myanimelist.net` | Bạn bấm **Kết nối** cho MyAnimeList; làm mới token | Client ID và secret, mã ủy quyền, refresh token |
| `api.myanimelist.net` | Đồng bộ MyAnimeList | Token của bạn, tiến độ, trạng thái và điểm |
| `s4.anilist.co` | Banner anime | Đường dẫn CDN |
| `comicvine.gamespot.com` | Tìm truyện tranh | Tên, khóa Comic Vine |
| `v3-cinemeta.strem.io` | Thêm hoặc làm mới phim hay series | IMDb id |
| `images.metahub.space`, `episodes.metahub.space` | Ảnh tĩnh | IMDb id, số mùa và số tập |
| `api.themoviedb.org`, `image.tmdb.org` | Thêm hoặc làm mới phim hay series, nếu bạn đặt khóa TMDB | IMDb id và khóa TMDB; đường dẫn ảnh |
| `i.ytimg.com` | Ảnh tĩnh từ trailer | Id video |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Mở ghi chú có trailer | Id video |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Bạn nhấn nút chia sẻ | Chú thích: tên, điểm của bạn, liên kết nguồn. Ảnh vẫn ở trên thiết bị của bạn |

## Lệnh

| Lệnh | Tác dụng |
| --- | --- |
| `Mở thư viện` | Mở tab "Thư viện" |
| `Thêm nội dung` | Tìm trong một nguồn và tạo ghi chú |
| `Tìm kiếm trong thư viện` | Tìm và mở một ghi chú trong thư viện |
| `Làm mới metadata cho ghi chú hiện tại` | Tải lại dữ liệu của ghi chú đang mở |
| `Làm mới metadata cho tất cả ghi chú` | Tải lại dữ liệu mọi ghi chú trong thư viện, từng cái một |
| `Xây dựng lại liên kết đồ thị` | Biến `Genre`, `Creator` và `Cast` thành liên kết |
| `Tìm và xóa bản trùng lặp` | Liệt kê các ghi chú trùng URL và xóa những ghi chú bạn chọn |
| `Chia sẻ ghi chú hiện tại` | Mở thẻ chia sẻ |
| `Đẩy ghi chú hiện tại lên AniList` | Gửi tiến độ, trạng thái và điểm |
| `Lấy tiến độ từ AniList` | Cập nhật ghi chú từ danh sách AniList của bạn |
| `Đẩy ghi chú hiện tại lên MyAnimeList` | Gửi tiến độ, trạng thái và điểm |
| `Lấy tiến độ từ MyAnimeList` | Cập nhật ghi chú từ danh sách MyAnimeList của bạn |

## Hỗ trợ

Báo lỗi trong [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues) và đề xuất ý tưởng trong [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions). Plugin phát hành theo [giấy phép MIT](../LICENSE).

Nếu plugin hữu ích với bạn, bạn có thể ủng hộ:

| | Mạng | Địa chỉ |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
