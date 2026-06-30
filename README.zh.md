> [EN](README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | **[ZH](README.zh.md)** | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

<p align="center">
  <img src="banner.png" alt="Obsidian Library 横幅" width="100%">
</p>

<h1 align="center">图书馆</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.1.2-blue" alt="版本">
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
- **内置搜索** — 直接在应用内搜索并添加标题：电影和剧集使用 OMDb，图书使用 Open Library 或 Google Books，游戏使用 RAWG，音乐使用 Deezer，动画使用 Jikan，漫画使用 Comic Vine。
- **智能剧集追踪** — 季数和集数自动获取并保持同步。
- **进度指示器** — 卡片和笔记标题上的可视化进度条显示您的观看或阅读进度。
- **丰富的笔记标题** — 每个内容笔记都获得包含所有关键元数据的自动生成标题。
- **自定义分类** — 为电影、剧集、动画、漫画、图书、游戏、音乐或其他任何内容创建分类，通过手动源。
- **图谱链接** — `Related` 前置属性将每个笔记链接到其分类、类型和创作者，自动保持同步以形成美丽的图谱。
- **排序与折叠** — 按名称、年份、评分或日期排序卡片；折叠任意分类。
- **统计** — 热门类型、热门创作者（仅电影和剧集）、各分类热门项目（带奖牌排名）。
- **重复检测** — 通过 URL 自动防止添加相同标题两次。内置命令可查找并移除现有重复项。
- **多语言支持** — 31种语言：英语、乌克兰语、俄语、白俄罗斯语、哈萨克语、乌兹别克语、德语、西班牙语、法语、意大利语、荷兰语、捷克语、克罗地亚语、波兰语、罗马尼亚语、土耳其语、阿塞拜疆语、波斯语、印地语、孟加拉语、乌尔都语、他加禄语、越南语、泰语、爪哇语、日语、韩语、中文、阿拉伯语、僧伽罗语、希伯来语。

---

## 快速开始

### 1. 安装

从 [Obsidian 社区插件目录](https://community.obsidian.md/plugins/library) 安装 **图书馆**（设置 > 社区插件 > 浏览 > 搜索"图书馆"），或通过 [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases) 手动安装。

### 2. 基本设置

1. 前往 **设置** > **图书馆**。
2. 添加您的 **分类** — 从下拉菜单中选择预定义类型（电影、剧集、图书、漫画、游戏、音乐、动画或手动），然后点击 **添加分类**。每个分类都有显示名称（翻译为您的语言）、`Type` 值（始终为英文，例如 `Movie`）、数据源以及用于存储笔记的可选文件夹。
3. _（可选）_ 输入您使用的服务的 API 密钥：电影/剧集使用 [OMDb](https://www.omdbapi.com/apikey.aspx)，游戏使用 [RAWG](https://rawg.io/apidocs)，漫画使用 [Comic Vine](https://comicvine.gamespot.com/api/)。动画（Jikan）和音乐（Deezer）无需密钥。

### 3. 通过标题添加卡片

不再需要手动填写前置元数据 — 只需搜索名称即可添加电影、剧集、图书、动画或漫画：

1. 从功能区图标打开 **图书馆** 标签页（或运行 `Open Library`）。
2. 点击图书馆页面右上角的 **+** 按钮（或运行 `Add content`）。
3. 选择分类，在搜索框中输入 **标题**，然后选择结果。
4. 即时创建卡片，海报、年份、类型、创作者和评分自动填充。

**+** 旁边的 **搜索** 按钮搜索您图书馆中已有的标题。

对于 **手动** 分类，您只需输入标题并自行填写封面、年份和其他字段。

---

## 统计

图书馆标签页顶部包含可折叠的 **统计** 部分：

- **热门类型** — 按整个图书馆中的频率排名。
- **热门创作者** — 按出演的电影和剧集数量排名。
- **各分类热门** — 每个分类（电影、剧集、图书等）中评分最高的前3个项目（带小封面缩略图）。

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
| **RAWG**         | 游戏           | 需要免费密钥 — [rawg.io/apidocs](https://rawg.io/apidocs) |
| **Deezer**       | 音乐（专辑）  | 无需                                                        |
| **Jikan**        | 动画           | 无需 — 免费的非官方 MyAnimeList API，无需密钥       |
| **Comic Vine**   | 漫画          | 需要免费密钥 — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**       | 其他所有内容   | 无需 — 您自行输入标题并填写字段          |

---

## 隐私与网络使用

图书馆是 **离线优先** 的。插件仅在您主动搜索要添加的标题时才连接网络，并且仅发送您输入的搜索词：

| 服务 | 时机 | 发送内容 | 原因 |
| --- | --- | --- | --- |
| `www.omdbapi.com` | 搜索 OMDb 支持的分类时 | 您输入的标题和 OMDb API 密钥 | 获取电影/剧集元数据（年份、类型、演员、评分、海报、集数） |
| `openlibrary.org` | 搜索 Open Library 分类时 | 您输入的标题 | 获取图书元数据（作者、年份、主题、封面ID） |
| `covers.openlibrary.org` | 图书卡片有封面时 | Open Library 封面ID | 加载封面图片 |
| `www.googleapis.com` | 搜索 Google Books 分类时 | 您输入的标题和 Google Books 密钥 | 获取图书元数据（作者、年份、分类、页数、封面、ISBN） |
| `api.rawg.io` | 搜索 RAWG 游戏分类时 | 您输入的标题和 RAWG 密钥 | 获取游戏元数据（年份、类型、开发者、封面） |
| `api.deezer.com` | 搜索 Deezer 音乐分类时 | 您输入的专辑或艺术家 | 获取专辑元数据（艺术家、年份、类型、曲目数、封面） |
| `api.jikan.moe` | 搜索动画分类时 | 您输入的标题 | 获取动画元数据（标题、年份、类型、集数、MAL评分、剧情简介、海报） |
| `comicvine.gamespot.com` | 搜索漫画分类时 | 您输入的标题和 Comic Vine 密钥 | 获取漫画元数据（标题、年份、出版商、期数、封面） |

没有其他数据会离开您的保险库。插件 **没有遥测、没有分析、没有自动更新机制**。API 密钥（OMDb、Google Books、RAWG、Comic Vine）仅存储在您的本地插件设置中，仅发送到各自的服务。封面图片直接从各数据源返回的 URL 加载。

---

## 前置元数据模式

插件读写标准的 YAML 前置元数据。笔记会自动创建，但每个字段都可编辑。`Source` 和 `Source ID` 让插件可以稍后刷新元数据。

### 电影

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

### 剧集

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

> **剧集自动更新：** 运行 `Refresh metadata for current note`（或直接打开笔记），插件会更新 `Progress` 中的总集数（例如从 `25/42` 更新到 `25/50`）和 `Season` 数，同时保留您的观看计数。

### 图书

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

### 动画

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

### 漫画

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

## 图谱链接

每个内容笔记都获得一个 `Related` 前置属性，自动保持最新 — 笔记正文永远不会被修改：

```yaml
Related:
    - "[[Movie]]"
    - "[[Action]]"
    - "[[Sci-Fi]]"
    - "[[Christopher Nolan]]"
```

这些链接通过共享分类、类型和创作者连接您的笔记，使 Obsidian 图谱视图形成清晰的聚类。每个分类会创建一个真正的枢纽笔记（例如 `Movie`），因此即使隐藏未解析的链接，聚类也会显示。该属性在创建笔记时写入，并在元数据更改时刷新 — 仅在您想强制完全重建时才运行 `Rebuild graph links`。

---

## 命令

| 命令                              | 描述                                                              |
| ------------------------------------ | ----------------------------------------------------------------------- |
| `Open Library`                       | 打开图书馆图库标签页。                                           |
| `Add content`                        | 搜索数据源并创建内容笔记（手动分类则输入标题）。 |
| `Search your library`                | 模糊搜索并打开图书馆中已有的笔记。                 |
| `Refresh metadata for current note`  | 重新获取活动笔记的元数据；更新剧集集数总计。   |
| `Rebuild graph links`                | 将每个内容笔记连接到其分类、类型和创作者。          |
| `Find & remove duplicates`           | 按 URL 扫描所有笔记，显示重复项并移除选中的项。       |

---

## 贡献与支持

- **发现了 bug？** 提交 [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues)。
- **有功能建议？** 发起 [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions)。
- **喜欢这个插件？** 请为仓库点星以示支持！

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
