> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | **[JA](README.ja.md)** | [KO](README.ko.md) | [AR](README.ar.md)

<p align="center">
  <img src="../banner.png" alt="Obsidian Library バナー" width="100%">
</p>

<h1 align="center">ライブラリ</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.3.0-blue" alt="バージョン">
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
- **内蔵検索** — アプリ内でタイトルを検索して追加できます：映画とシリーズは OMDb、本は Open Library または Google Books、ゲームは RAWG/Steam、音楽は Deezer、アニメは AniList、漫画は Comic Vine。
- **スマートなシリーズ追跡** — シーズン数とエピソード数は自動で取得され、同期が保たれます。
- **進捗インジケーター** — カードとノートヘッダーに視覚的なプログレスバーが表示され、視聴・読了の進捗がわかります。
- **リッチなノートヘッダー** — すべてのコンテンツノートに、主要なメタデータを含む自動生成ヘッダーが付きます。
- **予告編・スチル・シーズン** — 映画・シリーズのノートに、埋め込みの YouTube/Vimeo 予告編、スチルの一覧、再生時間が表示されます。シリーズにはエピソード数・評価・シーズンごとの予告編を含むシーズン一覧も付きます。
- **カスタムカテゴリ** — 映画、シリーズ、アニメ、漫画、本、ゲーム、音楽、またはマニュアルソースを使用してその他のカテゴリを作成できます。
- **グラフリンク** — ジャンル、クリエイター、出演者は専用の `Genre`、`Creator`、`Cast` プロパティにリンクとして保存されるため、各ジャンル・クリエイター・俳優のノートのバックリンクに作品が集まり、グラフにすべて表示されます。
- **共有カード** — 任意のコンテンツノートを共有可能なカード画像（ポスター、タイトル、年、ジャンル、IMDb スコア、あなたの評価）に変換し、X、Telegram、Reddit、WhatsApp、Facebook、LinkedIn、VK、Bluesky、Pinterest に投稿できます — デバイスのアプリに直接共有したり、画像をコピー／保存してどこでも使えます。
- **AniList 同期** — アニメの進捗、ステータス、評価を AniList アカウントに直接プッシュしたり、リストをノートに引き戻したりできます。
- **ソートと折りたたみ** — 名前、年、評価、日付でカードを並べ替え、任意のカテゴリを折りたためます。折りたたみは再起動後も保持されます。
- **統計** — 表示する列は自分で選べます：任意のカテゴリで評価の高い作品、または任意のプロパティで多い値（ジャンル、クリエイター、俳優…）、そして視聴時間のグラフ。
- **重複検出** — URL による同一タイトルの重複追加を自動防止。内蔵コマンドで既存の重複を検索・削除できます。
- **多言語対応** — プラグインの UI は **Obsidian が対応するすべての言語**（70 以上）に翻訳されているため、常に Obsidian の言語と一致します。そのうち 30 言語では README の完全な翻訳を用意しています（上部の言語バーを参照）。

---

## クイックスタート

### 1. インストール

[Obsidian コミュニティプラグインディレクトリ](https://community.obsidian.md/plugins/library)から **ライブラリ** をインストールします（設定 > コミュニティプラグイン > 参照 > "ライブラリ" を検索）。または [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases) から手動でインストールできます。

### 2. 基本設定

1. **設定** > **ライブラリ** に移動します。
2. **カテゴリ** を追加します — ドロップダウンから定義されたタイプ（映画、シリーズ、本、漫画、ゲーム、音楽、アニメ、またはマニュアル）を選択し、**カテゴリを追加** をクリックします。各カテゴリには表示名（あなたの言語に翻訳されたもの）、`Type` 値（常に英語、例：`Movie`）、ソース、およびノート保存用のオプションフォルダがあります。
3. _（オプション）_ 使用しているサービスの API キーを入力します：映画/シリーズ用の [OMDb](https://www.omdbapi.com/apikey.aspx)、ゲーム用の [RAWG](https://rawg.io/apidocs)、漫画用の [Comic Vine](https://comicvine.gamespot.com/api/)。[TMDB](https://www.themoviedb.org/settings/api) は予告編・スチル・シーズン情報用、[Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) は書籍検索用です。アニメ（AniList）、音楽（Deezer）、Steam はキー不要です。

### 3. タイトルでカードを追加

フロントマッタを手動で入力する必要はもうありません — 名前を検索するだけで映画、シリーズ、本、アニメ、または漫画を追加できます：

1. リボンアイコンから **ライブラリ** タブを開きます（または `ライブラリを開く` を実行）。
2. ライブラリページの右上にある **+** ボタンをクリックします（または `コンテンツを追加` を実行）。
3. カテゴリを選択し、検索ボックスに **タイトル** を入力し、結果を選択します。
4. ポスター、年、ジャンル、クリエイター、評価が自動入力されたカードが即座に作成されます。

**+** の横にある **検索** ボタンは、ライブラリに既に含まれるタイトルを検索します。

**マニュアル** カテゴリでは、タイトルを入力し、カバー、年、その他のフィールドを自分で記入します。

---

## 統計

「ライブラリ」タブの上部にある折りたたみ可能な **統計** セクションに、選んだ列が表示されます:

- **カテゴリのトップ** — カテゴリ内で評価が最も高い 3 作品をカバー付きで表示: *人気映画*、*人気の本* など。`My Rating` 順で、未評価なら `Rating IMDB` 順。
- **プロパティのトップ** — ライブラリ全体でプロパティに最も多く現れる 3 つの値: *人気ジャンル*、*人気クリエイター*、*人気俳優*、または *人気：Author* のような任意のプロパティ。`Sci-Fi`、`sci-fi`、`[[Sci-Fi]]` は同じ値として数えます。
- **視聴時間** — 映画、シリーズ、アニメに費やした時間のグラフ。各ノートの `Runtime` と `Progress` から計算します。

設定は **設定 → Library → 統計** で行います: **トップを追加** にはカテゴリとノート内で見つかったプロパティが並び、ゴミ箱アイコンで列を削除、トグルで視聴時間のグラフを非表示にできます。列は追加した順に並び、新しいカテゴリを作るとそのトップも追加されます。

折りたたんだカテゴリは再起動後も折りたたまれたままです。

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
| **Games**         | ゲーム          | RAWG (無料キーが必要 — [rawg.io/apidocs](https://rawg.io/apidocs)) + Steam (不要)。結果は統合 — RAWG が最初、Steam がその下。 |
| **Deezer**       | 音楽（アルバム）  | 不要                                                        |
| **AniList**      | アニメ          | 不要 — 無料の AniList GraphQL API、キー不要               |
| **Comic Vine**   | 漫画            | 無料キーが必要 — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**       | その他すべて    | 不要 — タイトルを入力し、フィールドを自分で記入              |

映画・シリーズのノートは **TMDB**（任意の無料キー）でさらに強化できます。予告編、スチル、再生時間、シリーズのシーズン一覧を取得してノートの frontmatter に書き込みます。

---

## プライバシーとネットワーク使用

Library は**オフライン優先**で動作します。ライブラリは通常のノートでできており、接続がなくても使えます。プラグインが送信するのは以下のデータだけで、送信するのは次の場合に限られます:

- **自分で操作したとき:** タイトルの検索、メタデータの更新、AniList コマンドの実行、共有ボタンのクリック。
- **ライブラリのノートを開いたとき:** そのメタデータが `Source ID` によってソースから更新されます(ノートごとに最大 5 分に 1 回)。`Source ID` のないノートは名前で検索されます。
- **プラグインの更新後、または API キーの変更後:** バックグラウンド処理がライブラリのノートをソースから 1 回だけ、1 件ずつ更新します。

ノートが参照するカバー画像、スチル、予告編プレーヤーは、以下に記載のホストから読み込まれます。

| サービス | タイミング | 送信内容 | 理由 |
| --- | --- | --- | --- |
| `www.omdbapi.com` | OMDb バックエンドのカテゴリを検索時 | 入力したタイトルと OMDb API キー | 映画/シリーズのメタデータ取得（年、ジャンル、キャスト、評価、ポスター、エピソード数） |
| `openlibrary.org` | Open Library カテゴリを検索時 | 入力したタイトル | 本のメタデータ取得（著者、年、件名、カバーID） |
| `covers.openlibrary.org` | 本のカードにカバーがある場合 | Open Library カバーID | カバー画像の読み込み |
| `www.googleapis.com` | Google Books カテゴリを検索時 | 入力したタイトルと Google Books キー | 本のメタデータ取得（著者、年、カテゴリ、ページ数、カバー、ISBN） |
| `api.rawg.io` | RAWG ゲームカテゴリを検索時 | 入力したタイトルと RAWG キー | ゲームのメタデータ取得（年、ジャンル、開発者、カバー） |
| `api.deezer.com` | Deezer 音楽カテゴリを検索時 | 入力したアルバムまたはアーティスト | アルバムのメタデータ取得（アーティスト、年、ジャンル、トラック数、カバー） |
| `graphql.anilist.co` | アニメカテゴリを検索時 | 入力したタイトル | アニメのメタデータ取得（タイトル、年、ジャンル、エピソード数、AniList スコア、スタジオ、ポスター） |
| `graphql.anilist.co` | AniList 同期コマンドを実行時 | AniList アクセストークンとノートの進捗、ステータス、評価 | AniList のアニメリストの読み取りまたは更新 |
| `anilist.co` | AniList 同期の設定で **接続** をクリックしたとき | あなたの AniList Client ID | ブラウザで AniList の認可ページを開く |
| `comicvine.gamespot.com` | 漫画カテゴリを検索時 | 入力したタイトルと Comic Vine キー | 漫画のメタデータ取得（タイトル、年、出版社、号数、カバー） |
| `store.steampowered.com` | Steam のゲームを検索または追加したとき | 入力したタイトルまたは Steam アプリ ID | ゲームのメタデータ取得（年、ジャンル、開発元、カバー） |
| `cdn.cloudflare.steamstatic.com` | Steam のゲームカードにカバーがあるとき | Steam アプリ ID | カバー画像の読み込み |
| `api.themoviedb.org` | TMDB キーを設定して映画・シリーズのノートを追加・更新したとき | ノートの IMDb ID と TMDB キー | 予告編・スチル・再生時間・シーズン一覧の取得 |
| `image.tmdb.org` | 映画・シリーズのノートにスチルがあるとき | TMDB の画像パス | スチルの読み込み |
| `v3-cinemeta.strem.io` | 映画・シリーズのノートを追加または更新したとき | ノートの IMDb ID | 予告編、スチル、再生時間、シリーズのシーズン一覧を取得 — キー不要 |
| `images.metahub.space` | 映画・シリーズのノートにスチルがあるとき | ノートの IMDb ID | スチル（背景）画像を読み込む |
| `episodes.metahub.space` | シリーズのノートにエピソードスチルがあるとき | シリーズの IMDb ID とシーズン・エピソード番号 | エピソードスチル画像を読み込む |
| `i.ytimg.com` | 映画のノートで予告編スチルを表示するとき | 予告編の動画 ID | 予告編スチル画像を読み込む |
| `s4.anilist.co` | アニメのノートにバナーがあるとき | AniList CDN のパス | バナー画像を読み込む |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | 予告編のあるノートを開いたとき | 予告編の ID | 予告編プレーヤーの埋め込み |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | 共有ボタンをクリックしたとき | カードのキャプション（タイトル・あなたの評価・出典リンク） | 選んだ SNS の投稿画面を本文入りで開きます。カード画像自体は端末内に留まります |

これ以外のデータがボールトから外に出ることはありません。プラグインに **テレメトリ、分析、自動更新機能** はありません。API キー（OMDb、Google Books、RAWG、Comic Vine、TMDB）はローカルのプラグイン設定にのみ保存され、それぞれのサービスにのみ送信されます。カバー画像は各ソースから返された URL から直接読み込まれます。

---

## フロントマッタスキーマ

プラグインは標準の YAML フロントマッタを読み書きします。ノートは自動作成されますが、すべてのフィールドは編集可能です。`Source` と `Source ID` により、プラグインは後でメタデータを更新できます。

### 映画

> **カバー用プロパティ** — カバーを保存する frontmatter プロパティは**設定 → Library**で変更できます（例: `image`）。既存のノートはそのまま動作します。

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

### シリーズ

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

> **シリーズ自動更新：** `現在のノートのメタデータを更新` を実行するか（またはノートを開くだけ）で、プラグインが `Progress` の合計エピソード数を更新し（例：`25/42` から `25/50` へ）、`Season` 数も更新します。視聴数はそのまま維持されます。

> **予告編・スチル・シーズン:** TMDB キーを設定すると、プラグインが `Trailer`、`Gallery`、`Runtime`、シリーズでは `Seasons` を自動入力します。`Runtime` は映画の長さ（分）、シリーズでは 1 エピソードあたりの分数です。ノートのヘッダーには埋め込みプレーヤー、スチルの一覧、エピソード数・評価・シーズンごとの予告編ボタン付きのシーズン一覧が表示されます。各フィールドは通常の frontmatter です。編集・削除しても、次回の更新でプラグインが値を上書きすることはありません。 また、プラグインが更新されるたびにバックグラウンドでライブラリを1回巡回し、新しく追加されたフィールドを1件ずつ補完します。

### 本

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

### アニメ

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

## グラフリンク

ジャンル、クリエイター、そして映画・シリーズの出演者は、それぞれ専用のプロパティにリンクとして保存されます:

```yaml
Genre:
    - "[[Action]]"
    - "[[Sci-Fi]]"
Creator:
    - "[[Christopher Nolan]]"
Cast:
    - "[[Leonardo DiCaprio]]"
```

そのため各ジャンル・クリエイター・俳優のノートのバックリンクに全作品が並び、グラフはそれらを通してノートをつなぎます。手入力や以前のバージョンで残った通常の名前は、ノートが変更されるたびにリンクになります。エイリアス付きのリンクはそのまま残ります。`グラフリンクを再構築` でライブラリ全体を一度に変換できます。以前のバージョンの `Related` プロパティは使われなくなり、ノートから削除されます。

---

## 共有

すべてのコンテンツノートには、ヘッダーに **共有** ボタンが付きます（または `現在のノートを共有` を実行）。ポスター、タイトル、年、ジャンル、IMDb/AniList スコア、あなたの評価を含むカード画像がレンダリングされ、どこにでも投稿できます：

- **モバイルでは** — **共有…** ボタンがデバイスのネイティブ共有シートを開き、カード画像が直接添付されるため、任意のアプリにそのまま送信できます。
- **X、Telegram、Reddit、WhatsApp、Facebook、LinkedIn、VK、Bluesky、Pinterest** — キャプション（タイトル、あなたの評価、ソースリンク、およびこのプラグインへのリンク）が事前入力された状態で、そのネットワークの投稿画面を開きます。同時にカード画像がクリップボードにコピーされるため、投稿に貼り付ける（Ctrl/Cmd+V）だけで済みます。
- **画像をコピー／テキストをコピー／画像を保存** — レンダリングされたカードまたはキャプションをクリップボードにコピーするか、ボールトの添付ファイルフォルダに画像を保存して手動で添付できます。

共有は完全にローカルで動作します：カードはノート自身のメタデータとカバーからアプリ内で描画されます。アップロードは一切行われません — プラグインはあなたが選んだ投稿画面の URL をブラウザで開くだけです。

---

## AniList 同期

アニメの進捗を [AniList](https://anilist.co) アカウントと同期させましょう。

**セットアップ** — **設定 → ライブラリ → AniList 同期** で：

1. [anilist.co/settings/developer](https://anilist.co/settings/developer) で無料の API クライアントを登録し、リダイレクト URL を `https://anilist.co/api/v2/oauth/pin` に設定します。
2. **Client ID** を貼り付け、**接続** をクリックして認可します。
3. AniList にアクセストークンが表示されるので、それをプラグインに貼り付けます。**接続をテスト** をクリックして確認します。

その後、次のコマンドを使用します：

- **Push current note to AniList** — アクティブなアニメノートの進捗（視聴済みエピソード数）、ステータス（視聴中／完了／視聴予定）、あなたの評価を AniList リストに送信します。
- **Pull progress from AniList** — AniList のアニメリストを取得し、一致するノートを更新します。プルは **前進のみ**：ローカルの方が進んでいるノートや既に完了したノートを後退させることはなく、あなた個人の `My Rating` はそのまま維持されます。

同期されるのは `Source: anilist` のノート（AniList アニメソースで追加されたもの）のみです。トークンはローカルのプラグイン設定に保存され、AniList にのみ送信されます。

---

## コマンド

| コマンド                              | 説明                                                                      |
| ------------------------------------ | ----------------------------------------------------------------------- |
| `ライブラリを開く`                       | ライブラリギャラリータブを開きます。                                         |
| `コンテンツを追加`                        | ソースを検索してコンテンツノートを作成します（マニュアルの場合はタイトルを入力）。  |
| `ライブラリを検索`                | ライブラリに既にあるノートをあいまい検索して開きます。                           |
| `現在のノートのメタデータを更新`  | アクティブなノートのメタデータを再取得します。シリーズのエピソード合計を更新します。 |
| `グラフリンクを再構築`                | すべてのコンテンツノートで `Genre`、`Creator`、`Cast` をリンクに変換します。 |
| `重複を検索して削除`           | URL ですべてのノートをスキャンし、重複を表示し、選択したものを削除します。       |
| `現在のノートを共有`                 | ノートをカード画像としてレンダリングし、X、Telegram、Reddit、WhatsApp、Facebook、LinkedIn、VK、Bluesky、Pinterest に共有します。 |
| `現在のノートを AniList に送信`       | アクティブなアニメノートの進捗、ステータス、評価を AniList アカウントに送信します。 |
| `AniList から進捗を取得`         | AniList リストを取得し、一致するノートを更新します（前進のみ）。 |
| `すべてのノートのメタデータを更新` | ライブラリ内のすべてのノートのメタデータを、バックグラウンドで1件ずつ取得します。 |

---

## コントリビュートとサポート

- **バグを見つけましたか？** [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues) を開いてください。
- **機能のアイデアがありますか？** [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions) を開始してください。
- **プラグインが気に入りましたか？** リポジトリにスターを付けてサポートを示してください！

---

## ライセンス

[MIT License](LICENSE) — 自由に使用・改変・配布できます。

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
