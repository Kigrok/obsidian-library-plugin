> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | **[JA](README.ja.md)** | [KO](README.ko.md) | [AR](README.ar.md)

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
  映画、ドラマ、本、アニメ、漫画、ゲーム、音楽を Obsidian のノートとして管理し、カバー画像のカードギャラリーで表示します。
  <br />
  <a href="https://community.obsidian.md/plugins/library">Obsidian コミュニティプラグイン一覧</a>
</p>

## 機能

- タイトルを検索すると、ポスター、公開年、ジャンル、制作者、キャスト、評価が入ったノートができます。
- ライブラリはカバー画像のカードで表示され、カテゴリごとにまとまり、名前、年、評価、日付で並べ替えられます。
- ドラマのエピソードや本の章にチェックを入れて一つずつ評価できます。`Progress` と `My Rating` はそこから計算されます。
- 映画とドラマのノートには予告編、スチル画像、上映時間、シーズン一覧が表示されます。
- ジャンル、制作者、俳優はリンクなので、それぞれのノートにすべての作品がバックリンクとグラフビューで集まります。
- 統計パネルには、選んだランキングと合計視聴時間が表示されます。
- 作品をカード画像にして X、Telegram、Reddit ほか 6 つのネットワークに共有できます。
- アニメの進捗を AniList と同期できます。
- インターフェースは Obsidian が対応するすべての言語に翻訳され、この README は [30 言語](./)で読めます。

## クイックスタート

1. 設定 → コミュニティプラグイン → 閲覧 から **Library** をインストールするか、[GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases) から入手します。
2. 設定 → Library で、メディアごとにカテゴリを追加します：映画、テレビ番組、本、漫画、ゲーム、音楽、アニメ、手動。
3. 使うソースに必要な API キーを入力します（下記参照）。
4. リボンから「ライブラリ」タブを開き、**+** を押し、カテゴリを選んでタイトルを検索します。すでにライブラリにあるタイトルは、既存のノートが開きます。

カテゴリの `Type` 値（例：`Movie`）はどのノートがそのカテゴリに属するかを決め、フォルダーは新しいノートの保存先を決めます。どちらもカテゴリ設定の **詳細設定** にあります。

## ソース

| カテゴリ | ソース | キー |
| --- | --- | --- |
| 映画、ドラマ | OMDb | [無料キー](https://www.omdbapi.com/apikey.aspx) |
| 本 | Google Books + Open Library | 任意の [Google Books キー](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| ゲーム | RAWG + Steam | [無料の RAWG キー](https://rawg.io/apidocs)。Steam は不要 |
| 音楽 | Deezer | 不要 |
| アニメ | AniList | 不要 |
| 漫画 | Comic Vine | [無料キー](https://comicvine.gamespot.com/api/) |
| その他 | 手動：項目を自分で入力 | 不要 |

予告編、スチル画像、上映時間、シーズン一覧はキーなしで Cinemeta から取得します。[TMDB キー](https://www.themoviedb.org/settings/api) を設定すると、シーズン評価とスチル画像が増えます。

## 進捗と評価

ドラマのノートのヘッダーにはシーズン一覧があり、各シーズンを開くとエピソードが表示されます（ソースにあればタイトル付き）。エピソードやシーズン全体を視聴済みにして、1 から 10 で評価します。`Progress` はチェックしたエピソードの数、シーズンの評価は評価済みエピソードの平均、`My Rating` は評価済みシーズンの平均です。評価済みエピソードがないシーズンには、独自の評価を付けられます。

アニメも同じ仕組みで、エピソードタイトルのない 1 シーズンとして扱います。

本の章は Open Library にある版の目次から取得します。目次が見つからない場合は、ノートのヘッダーの **章を追加** に章の数か、1 行に 1 つずつ章タイトルを入力します。以降 `Progress` はページではなく章を数え、読んだページは同じ割合の章に換算されます。

以前のバージョンのノートも進捗はそのままです。何もチェックしていない間は、`Progress` の数までの最初のエピソードが視聴済みとして表示されます。

## 統計

「ライブラリ」タブ上部のパネルには、設定 → Library → 統計 で選んだ列が表示されます。カテゴリの評価上位 3 作品、プロパティの出現頻度上位 3 つの値（ジャンル、俳優など）、映画・ドラマ・アニメに費やした時間です。グラフの下には 1 日に 1 つ比較が表示されます。例: アポロ 11 号なら月まで 8 往復できた計算です。

## グラフのリンク

`Genre`、`Creator`、`Cast` には `[[Christopher Nolan]]` のようなリンクが入るので、ジャンルや人物のノートのバックリンクにその作品が並びます。手入力した名前はノートが変更されたときにリンクになり、`グラフリンクを再構築` でライブラリ全体を変換できます。

## 共有と AniList

ノートのヘッダーの **共有** で、ポスター、タイトル、年、ジャンル、キャスト、評価、あなたのスコアが入ったカードを作成します。デスクトップでは画像がクリップボードにコピーされ、選んだネットワークがキャプション付きで開くので、画像を投稿に貼り付けるだけです。モバイルでは画像がシステムの共有メニューに渡されます。画像やキャプションのコピー、画像の保存もできます。

アニメを同期するには、[anilist.co/settings/developer](https://anilist.co/settings/developer) でリダイレクト URL `https://anilist.co/api/v2/oauth/pin` のクライアントを登録します。Client ID を 設定 → Library → AniList 同期 に貼り付けて **接続** をクリックし、AniList に表示されるトークンを貼り付けます。`現在のノートを AniList に送信` は進捗、ステータス、スコアを送信します。`AniList から進捗を取得` はノートを更新しますが、進捗を戻すことはなく、`My Rating` も変更しません。同期されるのは `Source: anilist` のノートだけです。

## フロントマター

カードはそれぞれ 1 つのノートで、プラグインが持つ情報はすべてフロントマターにあります：

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
      # ...ほか 7 エピソード
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

ドラマの `Runtime` は 1 エピソードの長さです。本には `ISBN` もあり、章は同じ `title`、`watched`、`my_rating` フィールドで `Chapters` に保存されます。アニメには `Rating AniList` と `Status` があります。カバーのプロパティ名は設定で変更できます（例：`image`）。

更新では空のフィールドだけが埋まるので、編集した値はそのまま残ります。また `Progress` の総エピソード数を更新し、新しいシーズンとエピソードタイトルを追加します。

## プライバシーとネットワーク

ライブラリは普通のノートなので、オフラインでも動きます。プラグインがネットワークを使うのは、検索、更新、同期、共有のとき、ライブラリのノートを開いたとき（ノートごとに最大 5 分に 1 回）、そしてアップデートやキー変更の後に新しいフィールドを埋めるための 1 回だけです。テレメトリ、分析、自動更新はありません。API キーはローカルのプラグイン設定に保存され、それぞれのサービスにだけ送られます。

| ホスト | タイミング | 送信内容 |
| --- | --- | --- |
| `www.omdbapi.com` | 映画とドラマの検索 | タイトルまたは IMDb ID、OMDb キー |
| `openlibrary.org` | 本の検索、本を追加・表示したときの章の検索 | タイトルと著者、ISBN、または作品 ID |
| `covers.openlibrary.org` | 本のカバー | カバー ID |
| `www.googleapis.com` | 本の検索 | タイトル、Google Books キー |
| `api.rawg.io` | ゲームの検索 | タイトル、RAWG キー |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | ゲームの検索とカバー | タイトルまたは Steam アプリ ID |
| `api.deezer.com` | 音楽の検索 | アルバムまたはアーティスト |
| `graphql.anilist.co` | アニメの検索、AniList 同期 | タイトル、トークン・進捗・ステータス・スコア |
| `anilist.co` | **接続** をクリックしたとき | Client ID（ブラウザで開きます） |
| `s4.anilist.co` | アニメのバナー | CDN パス |
| `comicvine.gamespot.com` | 漫画の検索 | タイトル、Comic Vine キー |
| `v3-cinemeta.strem.io` | 映画・ドラマの追加または更新 | IMDb ID |
| `images.metahub.space`, `episodes.metahub.space` | スチル画像 | IMDb ID、シーズン番号とエピソード番号 |
| `api.themoviedb.org`, `image.tmdb.org` | TMDB キー設定時の映画・ドラマの追加または更新 | IMDb ID と TMDB キー、画像パス |
| `i.ytimg.com` | 予告編のスチル画像 | 動画 ID |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | 予告編のあるノートを開いたとき | 動画 ID |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | 共有ボタンをクリックしたとき | キャプション（タイトル、スコア、ソースへのリンク）。画像は端末から出ません |

## コマンド

| コマンド | 内容 |
| --- | --- |
| `ライブラリを開く` | 「ライブラリ」タブを開く |
| `コンテンツを追加` | ソースを検索してノートを作成 |
| `ライブラリを検索` | ライブラリのノートを探して開く |
| `現在のノートのメタデータを更新` | アクティブなノートを再取得 |
| `すべてのノートのメタデータを更新` | ライブラリのすべてのノートを 1 つずつ再取得 |
| `グラフリンクを再構築` | `Genre`、`Creator`、`Cast` をリンクに変換 |
| `重複を検索して削除` | URL が同じノートを一覧表示し、選んだものを削除 |
| `現在のノートを共有` | 共有カードを開く |
| `現在のノートを AniList に送信` | 進捗、ステータス、スコアを送信 |
| `AniList から進捗を取得` | AniList のリストからノートを更新 |

## サポート

バグは [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues) へ、アイデアは [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions) へどうぞ。プラグインは [MIT ライセンス](../LICENSE) です。

プラグインが役に立ったら、支援していただけます：

| | ネットワーク | アドレス |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
