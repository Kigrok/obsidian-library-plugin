> [EN](README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | **[JA](README.ja.md)** | [KO](README.ko.md) | [AR](README.ar.md)

<p align="center">
  <img src="banner.png" alt="Obsidian Library バナー" width="100%">
</p>

<h1 align="center">ライブラリ</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.2.0-blue" alt="バージョン">
  <img src="https://img.shields.io/github/downloads/Kigrok/obsidian-library-plugin/total?color=brightgreen" alt="ダウンロード数">
  <img src="https://img.shields.io/badge/Obsidian-v1.8.7+-purple" alt="Obsidian バージョン">
  <img src="https://img.shields.io/github/license/Kigrok/obsidian-library-plugin?color=orange" alt="ライセンス">
</p>

<p align="center">
  <b>映画、シリーズ、本などをビジュアルギャラリーに整理しましょう — Obsidian の中で。</b>
  <br />
  アプリ内でタイトルを検索して追加、メタデータを自動取得、進捗を追跡し、すべてをグラフに接続します。
</p>

<p align="center">
  <a href="https://community.obsidian.md/plugins/library">Obsidian コミュニティプラグインディレクトリで見る</a>
</p>

---

## 主な機能

- **ビジュアルカードグリッド** — 専用のライブラリタブで、コレクションをカバーアートのカードギャラリーとして表示します。
- **内蔵検索** — アプリ内でタイトルを検索して追加できます：映画とシリーズは OMDb、本は Open Library または Google Books、ゲームは RAWG、音楽は Deezer、アニメは AniList、漫画は Comic Vine。
- **スマートなシリーズ追跡** — シーズン数とエピソード数は自動で取得され、同期が保たれます。
- **進捗インジケーター** — カードとノートヘッダーに視覚的なプログレスバーが表示され、視聴・読了の進捗がわかります。
- **リッチなノートヘッダー** — すべてのコンテンツノートに、主要なメタデータを含む自動生成ヘッダーが付きます。
- **カスタムカテゴリ** — 映画、シリーズ、アニメ、漫画、本、ゲーム、音楽、またはマニュアルソースを使用してその他のカテゴリを作成できます。
- **グラフリンク** — `Related` フロントマッタープロパティが各ノートをカテゴリ、ジャンル、クリエイターにリンクし、美しいグラフのために自動同期されます。
- **共有カード** — 任意のコンテンツノートを共有可能なカード画像（ポスター、タイトル、年、ジャンル、IMDb スコア、あなたの評価）に変換し、X、Telegram、Reddit、WhatsApp、Facebook、LinkedIn、VK、Bluesky、Pinterest に投稿できます — デバイスのアプリに直接共有したり、画像をコピー／保存してどこでも使えます。
- **ソートと折りたたみ** — 名前、年、評価、日付でカードをソート。任意のカテゴリを折りたたみできます。
- **統計** — トップジャンル、トップクリエイター（映画＆シリーズのみ）、カテゴリごとのトップアイテム（メダル付きランキング）。
- **重複検出** — URL による同一タイトルの重複追加を自動防止。内蔵コマンドで既存の重複を検索・削除できます。
- **多言語対応** — 31言語：英語、ウクライナ語、ロシア語、ベラルーシ語、カザフ語、ウズベク語、ドイツ語、スペイン語、フランス語、イタリア語、オランダ語、チェコ語、クロアチア語、ポーランド語、ルーマニア語、トルコ語、アゼルバイジャン語、ペルシア語、ヒンディー語、ベンガル語、ウルドゥー語、タガログ語、ベトナム語、タイ語、ジャワ語、日本語、韓国語、中国語、アラビア語、シンハラ語、ヘブライ語。

---

## クイックスタート

### 1. インストール

[Obsidian コミュニティプラグインディレクトリ](https://community.obsidian.md/plugins/library)から **ライブラリ** をインストールします（設定 > コミュニティプラグイン > 参照 > "ライブラリ" を検索）。または [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases) から手動でインストールできます。

### 2. 基本設定

1. **設定** > **ライブラリ** に移動します。
2. **カテゴリ** を追加します — ドロップダウンから定義されたタイプ（映画、シリーズ、本、漫画、ゲーム、音楽、アニメ、またはマニュアル）を選択し、**カテゴリを追加** をクリックします。各カテゴリには表示名（あなたの言語に翻訳されたもの）、`Type` 値（常に英語、例：`Movie`）、ソース、およびノート保存用のオプションフォルダがあります。
3. _（オプション）_ 使用しているサービスの API キーを入力します：映画/シリーズ用の [OMDb](https://www.omdbapi.com/apikey.aspx)、ゲーム用の [RAWG](https://rawg.io/apidocs)、漫画用の [Comic Vine](https://comicvine.gamespot.com/api/)。アニメ（AniList）と音楽（Deezer）はキー不要です。

### 3. タイトルでカードを追加

フロントマッタを手動で入力する必要はもうありません — 名前を検索するだけで映画、シリーズ、本、アニメ、または漫画を追加できます：

1. リボンアイコンから **ライブラリ** タブを開きます（または `Open Library` を実行）。
2. ライブラリページの右上にある **+** ボタンをクリックします（または `Add content` を実行）。
3. カテゴリを選択し、検索ボックスに **タイトル** を入力し、結果を選択します。
4. ポスター、年、ジャンル、クリエイター、評価が自動入力されたカードが即座に作成されます。

**+** の横にある **検索** ボタンは、ライブラリに既に含まれるタイトルを検索します。

**マニュアル** カテゴリでは、タイトルを入力し、カバー、年、その他のフィールドを自分で記入します。

---

## 統計

ライブラリタブの上部には折りたたみ可能な **統計** セクションがあります：

- **トップジャンル** — ライブラリ全体の頻度でランキング。
- **トップクリエイター** — 出演した映画とシリーズの数でランキング。
- **カテゴリごとのトップ** — 各カテゴリ（映画、シリーズ、本など）で、評価の高いトップ3アイテム（サムネイル付き）。

---

## 重複検出

ライブラリは `URL` フィールドを確認して重複エントリを防止します：

- **追加時** — 同じ URL のノートが既に存在する場合、重複を作成する代わりに既存のノートを開きます。
- **重複を検索して削除** — このコマンドをパレットから実行し、すべてのノートをスキャン、URL でグループ化し、モーダル経由で選択的に重複を削除します。

---

## ソース

各カテゴリには検索を実行するソースが割り当てられています：

| ソース             | コンテンツタイプ   | API キー                                                      |
| ---------------- | --------------- | ----------------------------------------------------------- |
| **OMDb**         | 映画、シリーズ  | 無料キーが必要 — [omdbapi.com](https://www.omdbapi.com/apikey.aspx) |
| **Books**        | 本              | Open Library（キー不要）+ Google Books（オプションの無料キー）。結果は統合 — Google Books が最初、Open Library がその下。 |
| **RAWG**         | ゲーム          | 無料キーが必要 — [rawg.io/apidocs](https://rawg.io/apidocs) |
| **Deezer**       | 音楽（アルバム）  | 不要                                                        |
| **AniList**      | アニメ          | 不要 — 無料の AniList GraphQL API、キー不要               |
| **Comic Vine**   | 漫画            | 無料キーが必要 — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**       | その他すべて    | 不要 — タイトルを入力し、フィールドを自分で記入              |

---

## プライバシーとネットワーク使用

ライブラリは **オフラインファースト** です。プラグインはタイトルを追加するためにアクティブに検索する時のみネットワークに接続し、入力した検索語のみを送信します：

| サービス | タイミング | 送信内容 | 理由 |
| --- | --- | --- | --- |
| `www.omdbapi.com` | OMDb バックエンドのカテゴリを検索時 | 入力したタイトルと OMDb API キー | 映画/シリーズのメタデータ取得（年、ジャンル、キャスト、評価、ポスター、エピソード数） |
| `openlibrary.org` | Open Library カテゴリを検索時 | 入力したタイトル | 本のメタデータ取得（著者、年、件名、カバーID） |
| `covers.openlibrary.org` | 本のカードにカバーがある場合 | Open Library カバーID | カバー画像の読み込み |
| `www.googleapis.com` | Google Books カテゴリを検索時 | 入力したタイトルと Google Books キー | 本のメタデータ取得（著者、年、カテゴリ、ページ数、カバー、ISBN） |
| `api.rawg.io` | RAWG ゲームカテゴリを検索時 | 入力したタイトルと RAWG キー | ゲームのメタデータ取得（年、ジャンル、開発者、カバー） |
| `api.deezer.com` | Deezer 音楽カテゴリを検索時 | 入力したアルバムまたはアーティスト | アルバムのメタデータ取得（アーティスト、年、ジャンル、トラック数、カバー） |
| `graphql.anilist.co` | アニメカテゴリを検索時 | 入力したタイトル | アニメのメタデータ取得（タイトル、年、ジャンル、エピソード数、AniList スコア、スタジオ、ポスター） |
| `comicvine.gamespot.com` | 漫画カテゴリを検索時 | 入力したタイトルと Comic Vine キー | 漫画のメタデータ取得（タイトル、年、出版社、号数、カバー） |

これ以外のデータがボールトから外に出ることはありません。プラグインに **テレメトリ、分析、自動更新機能** はありません。API キー（OMDb、Google Books、RAWG、Comic Vine）はローカルのプラグイン設定にのみ保存され、それぞれのサービスにのみ送信されます。カバー画像は各ソースから返された URL から直接読み込まれます。

---

## フロントマッタスキーマ

プラグインは標準の YAML フロントマッタを読み書きします。ノートは自動作成されますが、すべてのフィールドは編集可能です。`Source` と `Source ID` により、プラグインは後でメタデータを更新できます。

### 映画

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

### シリーズ

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

> **シリーズ自動更新：** `Refresh metadata for current note` を実行するか（またはノートを開くだけ）で、プラグインが `Progress` の合計エピソード数を更新し（例：`25/42` から `25/50` へ）、`Season` 数も更新します。視聴数はそのまま維持されます。

### 本

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

### アニメ

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

## グラフリンク

各コンテンツノートには `Related` フロントマッタープロパティが付与され、自動的に最新の状態に保たれます — ノート本文は変更されません：

```yaml
Related:
    - "[[Movie]]"
    - "[[Action]]"
    - "[[Sci-Fi]]"
    - "[[Christopher Nolan]]"
```

これらのリンクは共有カテゴリ、ジャンル、クリエイターを通じてノートを接続し、Obsidian のグラフビューにきれいなクラスターを形成します。各カテゴリにハブノート（例：`Movie`）が作成されるため、未解決リンクが非表示でもクラスターが表示されます。このプロパティはノート作成時に書き込まれ、メタデータが変更されるたびに更新されます — 完全な再構築を強制したい場合のみ `Rebuild graph links` を実行してください。

---

## 共有

すべてのコンテンツノートには、ヘッダーに **共有** ボタンが付きます（または `Share current note` を実行）。ポスター、タイトル、年、ジャンル、IMDb/AniList スコア、あなたの評価を含むカード画像がレンダリングされ、どこにでも投稿できます：

- **モバイルでは** — **共有…** ボタンがデバイスのネイティブ共有シートを開き、カード画像が直接添付されるため、任意のアプリにそのまま送信できます。
- **X、Telegram、Reddit、WhatsApp、Facebook、LinkedIn、VK、Bluesky、Pinterest** — キャプション（タイトル、あなたの評価、ソースリンク、およびこのプラグインへのリンク）が事前入力された状態で、そのネットワークの投稿画面を開きます。同時にカード画像がクリップボードにコピーされるため、投稿に貼り付ける（Ctrl/Cmd+V）だけで済みます。
- **画像をコピー／テキストをコピー／画像を保存** — レンダリングされたカードまたはキャプションをクリップボードにコピーするか、ボールトの添付ファイルフォルダに画像を保存して手動で添付できます。

共有は完全にローカルで動作します：カードはノート自身のメタデータとカバーからアプリ内で描画されます。アップロードは一切行われません — プラグインはあなたが選んだ投稿画面の URL をブラウザで開くだけです。

---

## コマンド

| コマンド                              | 説明                                                                      |
| ------------------------------------ | ----------------------------------------------------------------------- |
| `Open Library`                       | ライブラリギャラリータブを開きます。                                         |
| `Add content`                        | ソースを検索してコンテンツノートを作成します（マニュアルの場合はタイトルを入力）。  |
| `Search your library`                | ライブラリに既にあるノートをあいまい検索して開きます。                           |
| `Refresh metadata for current note`  | アクティブなノートのメタデータを再取得します。シリーズのエピソード合計を更新します。 |
| `Rebuild graph links`                | すべてのコンテンツノートをカテゴリ、ジャンル、クリエイターに接続します。          |
| `Find & remove duplicates`           | URL ですべてのノートをスキャンし、重複を表示し、選択したものを削除します。       |
| `Share current note`                 | ノートをカード画像としてレンダリングし、X、Telegram、Reddit、WhatsApp、Facebook、LinkedIn、VK、Bluesky、Pinterest に共有します。 |

---

## コントリビュートとサポート

- **バグを見つけましたか？** [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues) を開いてください。
- **機能のアイデアがありますか？** [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions) を開始してください。
- **プラグインが気に入りましたか？** リポジトリにスターを付けてサポートを示してください！

---

## ありがとうございます

このプラグインが役に立った場合は、開発のサポートをご検討ください：

| | ネットワーク | アドレス |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |

---
