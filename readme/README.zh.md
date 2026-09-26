> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | **[ZH](README.zh.md)** | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

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
  把电影、剧集、书籍、动画、漫画、游戏和音乐作为笔记存进 Obsidian，并以封面卡片墙展示。
  <br />
  <a href="https://community.obsidian.md/plugins/library">Obsidian 社区插件目录</a>
</p>

## 功能

- 搜索标题，即可得到一篇填好海报、年份、类型、主创、演员和评分的笔记。
- 以封面卡片浏览库，按分类分组，并按名称、年份、评分或日期排序。
- 勾选剧集的每一集或书的每一章并分别评分；`Progress` 和 `My Rating` 由此计算。
- 电影和剧集笔记会显示预告片、剧照、时长和季列表。
- 类型、主创和演员都是链接，所以他们的笔记会在反向链接和关系图谱中汇集所有作品。
- 统计面板显示你选择的排行榜和总观看时长。
- 把作品生成卡片图片，分享到 X、Telegram、Reddit 以及另外六个平台。
- 与 AniList 同步动画进度。
- 界面已翻译成 Obsidian 支持的所有语言，本 README 提供 [30 种语言](./)版本。

## 快速开始

1. 在 设置 → 第三方插件 → 浏览 中安装 **Library**，或从 [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases) 下载。
2. 在 设置 → Library 中为每种媒体添加一个分类：电影、剧集、书籍、漫画、游戏、音乐、动画、手动。
3. 填入你的数据源所需的 API 密钥（见下文）。
4. 从功能区打开“库”标签页，点击 **+**，选择分类并搜索标题。已在库中的标题会打开已有笔记。

分类的 `Type` 值（例如 `Movie`）决定哪些笔记属于该分类，其文件夹决定新笔记存放的位置。两者都在分类设置的 **高级** 下。

## 数据源

| 分类 | 数据源 | 密钥 |
| --- | --- | --- |
| 电影、剧集 | OMDb | [免费密钥](https://www.omdbapi.com/apikey.aspx) |
| 书籍 | Google Books + Open Library | 可选的 [Google Books 密钥](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| 游戏 | RAWG + Steam | [免费 RAWG 密钥](https://rawg.io/apidocs)；Steam 无需密钥 |
| 音乐 | Deezer | 无需 |
| 动画 | AniList | 无需 |
| 漫画 | Comic Vine | [免费密钥](https://comicvine.gamespot.com/api/) |
| 其他一切 | 手动：字段由你填写 | 无需 |

预告片、剧照、时长和季列表无需密钥，来自 Cinemeta。填入 [TMDB 密钥](https://www.themoviedb.org/settings/api) 可增加季评分和更多剧照。

## 进度与评分

剧集笔记的头部列出各季，每季展开后显示各集，数据源有标题时会一并显示。把某一集或整季标记为已看，并给出 1 到 10 的评分。`Progress` 统计已勾选的集数，一季的评分是其已评分各集的平均值，`My Rating` 是已评分各季的平均值。没有已评分集的季可以单独评分。

动画的方式相同，作为一个没有集标题的季。

书的章节来自 Open Library 上某个版本的目录。找不到目录时，笔记头部的 **添加章节** 可以输入章节数，或每行输入一个章节标题。此后 `Progress` 按章节而不是页数计算，已读页数会按相同比例换算成章节。

旧版本的笔记会保留进度。在你勾选任何内容之前，前 `Progress` 集会显示为已看。

## 统计

“库”标签页顶部的面板显示你在 设置 → Library → 统计 中选择的列：某个分类中评分最高的三部作品、某个属性最常见的三个值（类型、演员或其他任意属性），以及在电影、剧集和动画上花费的小时数。图表下方每天显示一条比较，例如：阿波罗 11 号可以往返月球 8 次。

## 关系图谱链接

`Genre`、`Creator` 和 `Cast` 保存 `[[Christopher Nolan]]` 这样的链接，所以某个类型或人物的笔记会在反向链接中列出其作品。手动输入的名字会在笔记变化时变成链接，`重建关系图链接` 会转换整个库。

## 分享与 AniList

笔记头部的 **分享** 会绘制一张卡片，包含海报、标题、年份、类型、演员、评分和你的打分。在桌面端，图片会复制到剪贴板，你选择的平台会带着配文打开，只需把图片粘贴到帖子里。在移动端，图片会交给系统分享菜单。你也可以复制图片或配文，或保存图片。

要同步动画，请在 [anilist.co/settings/developer](https://anilist.co/settings/developer) 注册一个客户端，重定向 URL 设为 `https://anilist.co/api/v2/oauth/pin`。把 Client ID 粘贴到 设置 → Library → AniList 同步，点击 **连接**，再粘贴 AniList 显示的令牌。`将当前笔记推送到 AniList` 会发送进度、状态和评分。`从 AniList 拉取进度` 会更新你的笔记，但从不回退进度，也不改动 `My Rating`。只有带 `Source: anilist` 的笔记会同步。

这些笔记也可以同步到 MyAnimeList。在 [myanimelist.net/apiconfig](https://myanimelist.net/apiconfig) 创建一个客户端，重定向地址填 `http://localhost`，把它的 Client ID（如有 Client Secret 也一起）粘贴到 设置 → Library → MyAnimeList 同步，点击 **连接**，然后粘贴浏览器打开的地址。插件通过 AniList 找到每部作品在 MyAnimeList 上的条目，并自动续期令牌。`将当前笔记推送到 MyAnimeList` 和 `从 MyAnimeList 拉取进度` 的用法与 AniList 的对应命令相同。

## Frontmatter

每张卡片都是一篇笔记，插件知道的一切都在 frontmatter 中：

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
      # ...另外 7 集
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

对剧集来说，`Runtime` 是单集时长。书籍另有 `ISBN`，章节以相同的 `title`、`watched` 和 `my_rating` 字段保存在 `Chapters` 中；动画另有 `Rating AniList` 和 `Status`。封面属性可在设置中改名，例如改为 `image`。

刷新只填写空字段，所以你编辑过的值会保留。它还会更新 `Progress` 中的总集数，并添加新的季和集标题。

## 隐私与网络使用

你的库就是普通笔记，离线也能用。插件只在以下情况联网：你搜索、刷新、同步或分享时；你打开库中的笔记时（每篇笔记最多每 5 分钟一次）；以及更新或更换密钥后运行一次，用来填写新字段。没有遥测、统计分析或自动更新。API 密钥保存在本地插件设置中，只发送给各自的服务。

| 主机 | 何时 | 发送内容 |
| --- | --- | --- |
| `www.omdbapi.com` | 搜索电影和剧集 | 标题或 IMDb ID、OMDb 密钥 |
| `openlibrary.org` | 搜索书籍；添加或打开书时查找章节 | 标题和作者、ISBN 或作品 ID |
| `covers.openlibrary.org` | 书籍封面 | 封面 ID |
| `www.googleapis.com` | 搜索书籍 | 标题、Google Books 密钥 |
| `api.rawg.io` | 搜索游戏 | 标题、RAWG 密钥 |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | 搜索游戏和封面 | 标题或 Steam 应用 ID |
| `api.deezer.com` | 搜索音乐 | 专辑或艺术家 |
| `graphql.anilist.co` | 搜索动画；AniList 同步; 用于同步的 MyAnimeList ID | 标题；你的令牌、进度、状态和评分; AniList ID |
| `anilist.co` | 你点击 **连接** 时 | Client ID，在浏览器中打开 |
| `myanimelist.net` | 为 MyAnimeList 点击 **连接** 时；令牌续期 | Client ID 和密钥、授权码、刷新令牌 |
| `api.myanimelist.net` | MyAnimeList 同步 | 你的令牌、进度、状态和评分 |
| `s4.anilist.co` | 动画横幅 | CDN 路径 |
| `comicvine.gamespot.com` | 搜索漫画 | 标题、Comic Vine 密钥 |
| `v3-cinemeta.strem.io` | 添加或刷新电影、剧集 | IMDb ID |
| `images.metahub.space`, `episodes.metahub.space` | 剧照 | IMDb ID、季号和集号 |
| `api.themoviedb.org`, `image.tmdb.org` | 设置了 TMDB 密钥时添加或刷新电影、剧集 | IMDb ID 和 TMDB 密钥；图片路径 |
| `i.ytimg.com` | 预告片截图 | 视频 ID |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | 打开带预告片的笔记 | 视频 ID |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | 你点击分享按钮时 | 配文：标题、你的评分、来源链接。图片留在你的设备上 |

## 命令

| 命令 | 作用 |
| --- | --- |
| `打开库` | 打开“库”标签页 |
| `添加内容` | 搜索数据源并创建笔记 |
| `搜索你的库` | 查找并打开库中的笔记 |
| `刷新当前笔记的元数据` | 重新获取当前笔记的数据 |
| `刷新所有笔记的元数据` | 逐篇重新获取库中所有笔记的数据 |
| `重建关系图链接` | 把 `Genre`、`Creator` 和 `Cast` 转成链接 |
| `查找并删除重复项` | 列出 URL 相同的笔记并删除你选中的 |
| `分享当前笔记` | 打开分享卡片 |
| `将当前笔记推送到 AniList` | 发送进度、状态和评分 |
| `从 AniList 拉取进度` | 根据你的 AniList 列表更新笔记 |
| `将当前笔记推送到 MyAnimeList` | 发送进度、状态和评分 |
| `从 MyAnimeList 拉取进度` | 根据你的 MyAnimeList 列表更新笔记 |

## 支持

请在 [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues) 报告问题，在 [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions) 提出想法。插件采用 [MIT 许可证](../LICENSE)。

如果这个插件对你有用，可以支持它：

| | 网络 | 地址 |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
