> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | **[ZH](README.zh.md)** | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

<p align="center">
  <img src="../banner.png" alt="Obsidian Library 横幅" width="100%">
</p>

<h1 align="center">图书馆</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.3.0-blue" alt="版本">
  <img src="https://img.shields.io/github/downloads/Kigrok/obsidian-library-plugin/total?color=brightgreen" alt="下载量">
  <img src="https://img.shields.io/badge/Obsidian-v1.8.7+-purple" alt="Obsidian 版本">
  <img src="https://img.shields.io/github/license/Kigrok/obsidian-library-plugin?color=orange" alt="许可证">
</p>

<p align="center">
  <b>将您的电影、剧集、图书等内容整理成可视化图库 — 直接在 Obsidian 中。</b>
  <br />
  在应用内搜索并添加标题，自动获取元数据，跟踪进度，并将所有内容连接到您的图谱中。
</p>

<p align="center">
  <a href="https://community.obsidian.md/plugins/library">在 Obsidian 社区插件目录中查看</a>
</p>

---

## 主要功能

- **可视化卡片网格** — 专用的图书馆标签页将您的收藏渲染为封面艺术卡片图库。
- **内置搜索** — 直接在应用内搜索并添加标题：电影和剧集使用 OMDb，图书使用 Open Library 或 Google Books，游戏使用 RAWG/Steam，音乐使用 Deezer，动画使用 AniList，漫画使用 Comic Vine。
- **智能剧集追踪** — 季数和集数自动获取并保持同步。
- **进度指示器** — 卡片和笔记标题上的可视化进度条显示您的观看或阅读进度。
- **丰富的笔记标题** — 每个内容笔记都获得包含所有关键元数据的自动生成标题。
- **预告片、剧照与季信息** — 电影和剧集笔记会显示内嵌的 YouTube/Vimeo 预告片、剧照栏和时长；剧集还会显示季列表，包含集数、评分和每季预告片。
- **自定义分类** — 为电影、剧集、动画、漫画、图书、游戏、音乐或其他任何内容创建分类，通过手动源。
- **图谱链接** — 类型、创作者和演员以链接形式保存在各自的 `Genre`、`Creator` 和 `Cast` 属性中，因此每个类型、创作者和演员笔记都会在反向链接中汇集其作品，图谱中一目了然。
- **分享卡片** — 将任意内容笔记转换为可分享的卡片图片（海报、标题、年份、类型、IMDb 评分和您的评分），并发布到 X、Telegram、Reddit、WhatsApp、Facebook、LinkedIn、VK、Bluesky 或 Pinterest — 直接分享到您设备的应用，或复制/保存图片以便随处使用。
- **AniList 同步** — 将您的动画进度、状态和评分直接推送到您的 AniList 账户，或将您的列表拉取回笔记中。
- **排序与折叠** — 按名称、年份、评分或日期排序卡片；可折叠任意分类，重启后仍保持折叠。
- **统计** — 自己选择要显示的栏目：任意分类中评分最高的作品，或任意属性中出现最多的值（类型、创作者、演员……），外加观看时长图表。
- **重复检测** — 通过 URL 自动防止添加相同标题两次。内置命令可查找并移除现有重复项。
- **多语言支持** — 插件界面已翻译成 **Obsidian 支持的所有语言**（70 多种），因此始终与你的 Obsidian 语言一致。其中 30 种语言提供完整的 README 翻译（见顶部的语言栏）。

---

## 快速开始

### 1. 安装

从 [Obsidian 社区插件目录](https://community.obsidian.md/plugins/library) 安装 **图书馆**（设置 > 社区插件 > 浏览 > 搜索"图书馆"），或通过 [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases) 手动安装。

### 2. 基本设置

1. 前往 **设置** > **图书馆**。
2. 添加您的 **分类** — 从下拉菜单中选择预定义类型（电影、剧集、图书、漫画、游戏、音乐、动画或手动），然后点击 **添加分类**。每个分类都有显示名称（翻译为您的语言）、`Type` 值（始终为英文，例如 `Movie`）、数据源以及用于存储笔记的可选文件夹。
3. _（可选）_ 输入您使用的服务的 API 密钥：电影/剧集使用 [OMDb](https://www.omdbapi.com/apikey.aspx)，游戏使用 [RAWG](https://rawg.io/apidocs)，漫画使用 [Comic Vine](https://comicvine.gamespot.com/api/)。[TMDB](https://www.themoviedb.org/settings/api) 用于预告片、剧照和季信息，[Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) 用于图书搜索。动画（AniList）、音乐（Deezer）和 Steam 无需密钥。

### 3. 通过标题添加卡片

不再需要手动填写前置元数据 — 只需搜索名称即可添加电影、剧集、图书、动画或漫画：

1. 从功能区图标打开 **图书馆** 标签页（或运行 `打开库`）。
2. 点击图书馆页面右上角的 **+** 按钮（或运行 `添加内容`）。
3. 选择分类，在搜索框中输入 **标题**，然后选择结果。
4. 即时创建卡片，海报、年份、类型、创作者和评分自动填充。

**+** 旁边的 **搜索** 按钮搜索您图书馆中已有的标题。

对于 **手动** 分类，您只需输入标题并自行填写封面、年份和其他字段。

---

## 统计

在“库”标签页顶部，可折叠的 **统计** 区域会显示你选择的栏目：

- **分类榜单** — 某个分类中评分最高的三部作品，附带封面：*热门电影*、*热门图书* 等。按 `My Rating` 排序，没有时按 `Rating IMDB`。
- **属性榜单** — 某个属性在整个库中出现最多的三个值：*热门类型*、*热门创作者*、*热门演员*，或任何其他属性，例如 *热门：Author*。`Sci-Fi`、`sci-fi` 和 `[[Sci-Fi]]` 算作同一个值。
- **观看时长** — 电影、剧集和动画所花时间的图表，根据每条笔记的 `Runtime` 和 `Progress` 计算。

在 **设置 → Library → 统计** 中设置：**添加榜单** 会列出你的分类以及笔记中出现的属性，垃圾桶图标可移除栏目，开关可隐藏观看时长图表。栏目按添加顺序显示；新建的分类会自动添加自己的榜单。

折叠的分类在重启后仍保持折叠。

---

## 重复检测

图书馆通过检查 `URL` 字段来防止重复条目：

- **添加时** — 如果已存在相同 URL 的笔记，则打开现有笔记而不是创建重复项。
- **查找并移除重复项** — 从命令面板运行此命令扫描所有笔记，按 URL 分组，并通过弹窗选择性移除重复项。

---

## 数据源

每个分类绑定到一个驱动搜索的数据源：

| 数据源           | 内容类型   | API 密钥                                                      |
| ---------------- | --------------- | ----------------------------------------------------------- |
| **OMDb**         | 电影、剧集  | 需要免费密钥 — [omdbapi.com](https://www.omdbapi.com/apikey.aspx) |
| **Books**        | 图书           | Open Library（无需密钥）+ Google Books（可选免费密钥）。结果合并 — Google Books 在前，Open Library 在后。 |
| **Games**         | 游戏           | RAWG (需要免费密钥 — [rawg.io/apidocs](https://rawg.io/apidocs)) + Steam (无需)。结果合并 — RAWG 在前，Steam 在后。 |
| **Deezer**       | 音乐（专辑）  | 无需                                                        |
| **AniList**      | 动画           | 无需 — 免费的 AniList GraphQL API，无需密钥          |
| **Comic Vine**   | 漫画          | 需要免费密钥 — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**       | 其他所有内容   | 无需 — 您自行输入标题并填写字段          |

电影和剧集笔记可通过 **TMDB**（可选免费密钥）进一步丰富：预告片、剧照、时长和剧集的季列表会被抓取并写入笔记的 frontmatter。

---

## 隐私与网络使用

Library 以**离线优先**为原则：你的资料库就是普通笔记，没有网络也能正常使用。插件只发送下面列出的数据，而且只在以下情况下发送：

- **你主动操作时：** 搜索标题、刷新元数据、运行 AniList 命令或点击分享按钮。
- **打开资料库中的笔记时：** 按 `Source ID` 从来源刷新该笔记的元数据，每条笔记最多每 5 分钟一次；没有 `Source ID` 的笔记会按名称查找。
- **插件更新或 API 密钥变更后：** 后台流程会从来源将资料库中的笔记逐条刷新一次。

笔记引用的封面图片、剧照和预告片播放器会从下方列出的主机加载。

| 服务 | 时机 | 发送内容 | 原因 |
| --- | --- | --- | --- |
| `www.omdbapi.com` | 搜索 OMDb 支持的分类时 | 您输入的标题和 OMDb API 密钥 | 获取电影/剧集元数据（年份、类型、演员、评分、海报、集数） |
| `openlibrary.org` | 搜索 Open Library 分类时 | 您输入的标题 | 获取图书元数据（作者、年份、主题、封面ID） |
| `covers.openlibrary.org` | 图书卡片有封面时 | Open Library 封面ID | 加载封面图片 |
| `www.googleapis.com` | 搜索 Google Books 分类时 | 您输入的标题和 Google Books 密钥 | 获取图书元数据（作者、年份、分类、页数、封面、ISBN） |
| `api.rawg.io` | 搜索 RAWG 游戏分类时 | 您输入的标题和 RAWG 密钥 | 获取游戏元数据（年份、类型、开发者、封面） |
| `api.deezer.com` | 搜索 Deezer 音乐分类时 | 您输入的专辑或艺术家 | 获取专辑元数据（艺术家、年份、类型、曲目数、封面） |
| `graphql.anilist.co` | 搜索动画分类时 | 您输入的标题 | 获取动画元数据（标题、年份、类型、集数、AniList评分、制作公司、海报） |
| `graphql.anilist.co` | 运行 AniList 同步命令时 | 您的 AniList 访问令牌以及笔记的进度、状态和评分 | 读取或更新您的 AniList 动画列表 |
| `anilist.co` | 你在 AniList 同步设置中点击 **连接** | 你的 AniList Client ID | 在浏览器中打开 AniList 授权页面 |
| `comicvine.gamespot.com` | 搜索漫画分类时 | 您输入的标题和 Comic Vine 密钥 | 获取漫画元数据（标题、年份、出版商、期数、封面） |
| `store.steampowered.com` | 你搜索或添加 Steam 游戏时 | 你输入的标题或 Steam 应用 ID | 获取游戏元数据（年份、类型、开发商、封面） |
| `cdn.cloudflare.steamstatic.com` | Steam 游戏卡片有封面时 | Steam 应用 ID | 加载封面图片 |
| `api.themoviedb.org` | 你添加或刷新电影/剧集笔记并设置了 TMDB 密钥时 | 笔记的 IMDb ID 和你的 TMDB 密钥 | 抓取预告片、剧照、时长和季列表 |
| `image.tmdb.org` | 电影/剧集笔记包含剧照时 | TMDB 图片路径 | 加载剧照 |
| `v3-cinemeta.strem.io` | 你添加或更新电影/剧集笔记时 | 笔记的 IMDb ID | 获取预告片、剧照、时长和剧集季列表 — 无需密钥 |
| `images.metahub.space` | 电影/剧集笔记有剧照时 | 笔记的 IMDb ID | 加载剧照（背景图） |
| `episodes.metahub.space` | 剧集笔记有分集剧照时 | 剧集的 IMDb ID 及季号和集号 | 加载分集剧照 |
| `i.ytimg.com` | 电影笔记显示预告片剧照时 | 预告片视频 ID | 加载预告片剧照 |
| `s4.anilist.co` | 动画笔记有横幅时 | AniList CDN 路径 | 加载横幅图片 |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | 你打开包含预告片的笔记时 | 预告片 ID | 嵌入预告片播放器 |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | 你点击分享按钮时 | 卡片文案（标题、你的评分、来源链接） | 打开所选平台的发布窗口并预填内容——卡片图片本身保留在本地 |

没有其他数据会离开您的保险库。插件 **没有遥测、没有分析、没有自动更新机制**。API 密钥（OMDb、Google Books、RAWG、Comic Vine、TMDB）仅存储在您的本地插件设置中，仅发送到各自的服务。封面图片直接从各数据源返回的 URL 加载。

---

## 前置元数据模式

插件读写标准的 YAML 前置元数据。笔记会自动创建，但每个字段都可编辑。`Source` 和 `Source ID` 让插件可以稍后刷新元数据。

### 电影

> **封面属性** — 存储封面的 frontmatter 属性可在**设置 → Library**中重命名（例如改为 `image`）；已有笔记继续正常工作。

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

### 剧集

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

> **剧集自动更新：** 运行 `刷新当前笔记的元数据`（或直接打开笔记），插件会更新 `Progress` 中的总集数（例如从 `25/42` 更新到 `25/50`）和 `Season` 数，同时保留您的观看计数。

> **预告片、剧照与季信息：** 设置 TMDB 密钥后，插件会自动填充 `Trailer`、`Gallery`、`Runtime`，剧集还会填充 `Seasons`——`Runtime` 是电影分钟时长，剧集则为每集分钟数。笔记头部随即显示内嵌播放器、剧照栏，以及含集数、评分和每季预告片按钮的季列表。所有字段都是普通 frontmatter：你可随时编辑或删除，插件下次刷新不会覆盖你的值。 此外，每个插件版本还会在后台遍历一次书库，逐条补全新版本新增的字段，不会阻塞使用。

### 图书

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

### 动画

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

### 漫画

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

## 图谱链接

类型、创作者以及电影和剧集的演员，以链接形式保存在各自的属性中：

```yaml
Genre:
    - "[[Action]]"
    - "[[Sci-Fi]]"
Creator:
    - "[[Christopher Nolan]]"
Cast:
    - "[[Leonardo DiCaprio]]"
```

因此每个类型、创作者和演员笔记的反向链接都会列出其全部作品，图谱也通过它们连接笔记。手动输入或旧版本留下的普通名称会在笔记每次变更时转换为链接；带别名的链接保持不变。`重建关系图链接` 可一次性转换整个资料库。旧版本的 `Related` 属性不再使用，并会从笔记中移除。

---

## 分享

每个内容笔记的标题栏都有一个 **分享** 按钮（或运行 `分享当前笔记`）。它会渲染一张卡片图片 — 海报、标题、年份、类型、IMDb/AniList 评分和您的评分 — 您可以将其发布到任何地方：

- **在移动端** — **分享…** 按钮会打开您设备的原生分享面板，并直接附上卡片图片，因此您可以将其直接发送到任何应用。
- **X、Telegram、Reddit、WhatsApp、Facebook、LinkedIn、VK、Bluesky、Pinterest** — 打开该网络的编辑器，并预填说明文字（标题、您的评分、来源链接以及本插件的链接）。卡片图片会同时被复制到您的剪贴板，因此您只需将其粘贴（Ctrl/Cmd+V）到帖子中。
- **复制图片 / 复制文本 / 保存图片** — 将渲染的卡片或说明文字复制到剪贴板，或将图片保存到您保险库的附件文件夹以便手动附加。

分享完全在本地进行：卡片由应用根据笔记自身的元数据和封面绘制。不会上传任何内容 — 插件仅在您的浏览器中打开您选择的编辑器 URL。

---

## AniList 同步

将您的动画进度与您的 [AniList](https://anilist.co) 账户保持同步。

**设置** — 在 **设置 → 图书馆 → AniList 同步** 中：

1. 在 [anilist.co/settings/developer](https://anilist.co/settings/developer) 注册一个免费的 API 客户端，并将重定向 URL 设置为 `https://anilist.co/api/v2/oauth/pin`。
2. 粘贴 **Client ID**，点击 **连接**，然后授权。
3. AniList 会向您显示一个访问令牌 — 将其粘贴到插件中。点击 **测试连接** 以确认。

然后使用以下命令：

- **Push current note to AniList** — 将活动动画笔记的进度（已观看集数）、状态（观看中 / 已完成 / 计划中）和您的评分发送到您的 AniList 列表。
- **Pull progress from AniList** — 获取您的 AniList 动画列表并更新匹配的笔记。拉取是 **仅向前** 的：它绝不会回退本地进度更靠前或已完成的笔记，并且不会改动您个人的 `My Rating`。

只有带有 `Source: anilist`（通过 AniList 动画源添加）的笔记才会被同步。您的令牌存储在本地插件设置中，并且仅发送到 AniList。

---

## 命令

| 命令                              | 描述                                                              |
| ------------------------------------ | ----------------------------------------------------------------------- |
| `打开库`                       | 打开图书馆图库标签页。                                           |
| `添加内容`                        | 搜索数据源并创建内容笔记（手动分类则输入标题）。 |
| `搜索你的库`                | 模糊搜索并打开图书馆中已有的笔记。                 |
| `刷新当前笔记的元数据`  | 重新获取活动笔记的元数据；更新剧集集数总计。   |
| `重建关系图链接`                | 将所有内容笔记中的 `Genre`、`Creator` 和 `Cast` 转换为链接。 |
| `查找并删除重复项`           | 按 URL 扫描所有笔记，显示重复项并移除选中的项。       |
| `分享当前笔记`                 | 将笔记渲染为卡片图片并分享到 X、Telegram、Reddit、WhatsApp、Facebook、LinkedIn、VK、Bluesky 或 Pinterest。 |
| `将当前笔记推送到 AniList`       | 将活动动画笔记的进度、状态和评分发送到您的 AniList 账户。 |
| `从 AniList 拉取进度`         | 获取您的 AniList 列表并更新匹配的笔记（仅向前）。 |
| `刷新所有笔记的元数据` | 在后台逐条获取书库中所有笔记的元数据。 |

---

## 贡献与支持

- **发现了 bug？** 提交 [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues)。
- **有功能建议？** 发起 [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions)。
- **喜欢这个插件？** 请为仓库点星以示支持！

---

## 许可证

[MIT License](LICENSE) — 可自由使用、修改和分享。

---

## 感谢

如果您觉得这个插件有用，请考虑支持其开发：

| | 网络 | 地址 |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |

---
