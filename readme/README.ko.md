> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | **[KO](README.ko.md)** | [AR](README.ar.md)

<p align="center">
  <img src="../banner.png" alt="Obsidian Library 배너" width="100%">
</p>

<h1 align="center">라이브러리</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.3.0-blue" alt="버전">
  <img src="https://img.shields.io/github/downloads/Kigrok/obsidian-library-plugin/total?color=brightgreen" alt="다운로드 수">
  <img src="https://img.shields.io/badge/Obsidian-v1.8.7+-purple" alt="Obsidian 버전">
  <img src="https://img.shields.io/github/license/Kigrok/obsidian-library-plugin?color=orange" alt="라이선스">
</p>

<p align="center">
  <b>영화, 시리즈, 도서 등을 비주얼 갤러리로 정리하세요 — Obsidian 안에서 바로.</b>
  <br />
  앱 내에서 제목을 검색하고 추가하고, 메타데이터를 자동으로 가져오고, 진행 상황을 추적하며, 모든 것을 그래프에 연결하세요.
</p>

<p align="center">
  <a href="https://community.obsidian.md/plugins/library">Obsidian 커뮤니티 플러그인 디렉토리에서 보기</a>
</p>

---

## 주요 기능

- **비주얼 카드 그리드** — 전용 라이브러리 탭에서 컬렉션을 커버 아트 카드 갤러리로 렌더링합니다.
- **내장 검색** — 앱 내에서 제목을 검색하고 추가합니다: 영화와 시리즈는 OMDb, 도서는 Open Library 또는 Google Books, 게임은 RAWG/Steam, 음악은 Deezer, 애니메이션은 AniList, 만화는 Comic Vine.
- **스마트 시리즈 추적** — 시즌과 에피소드 수가 자동으로 가져와져 동기화됩니다.
- **진행 표시기** — 카드와 노트 헤더의 시각적 프로그레스 바로 시청/독서 진행률을 보여줍니다.
- **풍부한 노트 헤더** — 모든 콘텐츠 노트에 주요 메타데이터가 포함된 자동 생성 헤더가 부여됩니다.
- **예고편, 스틸, 시즌** — 영화와 시리즈 노트에 임베드된 YouTube/Vimeo 예고편, 스틸 모음, 상영 시간이 표시됩니다. 시리즈에는 에피소드 수, 평가, 시즌별 예고편이 담긴 시즌 목록도 추가됩니다.
- **사용자 정의 카테고리** — 영화, 시리즈, 애니메이션, 만화, 도서, 게임, 음악 또는 수동 소스를 사용하여 기타 카테고리를 생성할 수 있습니다.
- **그래프 링크** — 장르, 크리에이터, 출연진은 전용 `Genre`, `Creator`, `Cast` 속성에 링크로 저장되므로 각 장르·크리에이터·배우 노트의 백링크에 작품이 모이고 그래프에 모두 표시됩니다.
- **공유 카드** — 모든 콘텐츠 노트를 공유 가능한 카드 이미지(포스터, 제목, 연도, 장르, IMDb 점수, 내 평점)로 변환하여 X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky 또는 Pinterest에 게시합니다 — 기기의 앱으로 바로 공유하거나, 이미지를 복사/저장하여 어디서나 사용하세요.
- **AniList 동기화** — 애니메이션 진행 상황, 상태, 평점을 AniList 계정으로 바로 푸시하거나, 목록을 노트로 다시 가져옵니다.
- **정렬 및 접기** — 이름, 연도, 평점, 날짜로 카드를 정렬하고 원하는 카테고리를 접을 수 있습니다. 접은 상태는 다시 시작해도 유지됩니다.
- **통계** — 표시할 열을 직접 고르세요: 카테고리별로 평점이 가장 높은 작품이나 속성별로 가장 많이 나오는 값(장르, 크리에이터, 배우…), 그리고 시청 시간 차트.
- **중복 감지** — URL로 동일한 제목의 중복 추가를 자동으로 방지합니다. 내장 명령으로 기존 중복을 찾아 제거합니다.
- **다국어 지원** — 플러그인 인터페이스는 **Obsidian이 지원하는 모든 언어**(70개 이상)로 번역되어 있어 항상 Obsidian 언어와 일치합니다. 그중 30개 언어는 README 전체 번역을 제공합니다(상단 언어 표시줄 참고).

---

## 빠른 시작

### 1. 설치

[Obsidian 커뮤니티 플러그인 디렉토리](https://community.obsidian.md/plugins/library)에서 **라이브러리**를 설치하세요 (설정 > 커뮤니티 플러그인 > 찾아보기 > "라이브러리" 검색). 또는 [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases)에서 수동으로 설치할 수 있습니다.

### 2. 기본 설정

1. **설정** > **라이브러리**로 이동합니다.
2. **카테고리**를 추가합니다 — 드롭다운에서 사전 정의된 유형(영화, 시리즈, 도서, 만화, 게임, 음악, 애니메이션 또는 수동)을 선택하고 **카테고리 추가**를 클릭합니다. 각 카테고리에는 표시 이름(귀하의 언어로 번역됨), `Type` 값(항상 영어, 예: `Movie`), 소스, 그리고 노트 저장을 위한 선택적 폴더가 있습니다.
3. _(선택사항)_ 사용하는 서비스의 API 키를 입력합니다: 영화/시리즈용 [OMDb](https://www.omdbapi.com/apikey.aspx), 게임용 [RAWG](https://rawg.io/apidocs), 만화용 [Comic Vine](https://comicvine.gamespot.com/api/), [TMDB](https://www.themoviedb.org/settings/api)는 예고편, 스틸, 시즌 정보용이고, [Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com)는 도서 검색용입니다. 애니메이션(AniList), 음악(Deezer), Steam은 키가 필요하지 않습니다.

### 3. 제목으로 카드 추가

프론트매터를 수동으로 입력할 필요가 없습니다 — 이름을 검색하여 영화, 시리즈, 도서, 애니메이션 또는 만화를 추가하세요:

1. 리본 아이콘에서 **라이브러리** 탭을 엽니다 (또는 `라이브러리 열기` 실행).
2. 라이브러리 페이지 오른쪽 상단의 **+** 버튼을 클릭합니다 (또는 `콘텐츠 추가` 실행).
3. 카테고리를 선택하고, 검색 상자에 **제목**을 입력한 후 결과를 선택합니다.
4. 포스터, 연도, 장르, 크리에이터, 평점이 자동으로 입력된 카드가 즉시 생성됩니다.

**+** 옆의 **검색** 버튼은 라이브러리에 이미 있는 제목을 검색합니다.

**수동** 카테고리에서는 제목을 입력하고 커버, 연도 및 기타 필드를 직접 작성합니다.

---

## 통계

'라이브러리' 탭 상단의 접을 수 있는 **통계** 섹션에 선택한 열이 표시됩니다:

- **카테고리 순위** — 카테고리에서 평점이 가장 높은 세 작품을 표지와 함께 보여 줍니다: *인기 영화*, *인기 도서* 등. `My Rating` 기준이며, 없으면 `Rating IMDB` 기준입니다.
- **속성 순위** — 라이브러리 전체에서 한 속성에 가장 많이 나오는 세 값: *인기 장르*, *인기 크리에이터*, *인기 배우* 또는 *인기: Author* 같은 다른 속성. `Sci-Fi`, `sci-fi`, `[[Sci-Fi]]`는 하나의 값으로 셉니다.
- **시청 시간** — 영화, 시리즈, 애니메이션에 쓴 시간 차트로, 각 노트의 `Runtime`과 `Progress`로 계산합니다.

**설정 → Library → 통계**에서 설정합니다: **순위 추가**에는 카테고리와 노트에서 찾은 속성이 표시되고, 휴지통 아이콘으로 열을 제거하며, 토글로 시청 시간 차트를 숨깁니다. 열은 추가한 순서대로 표시되고, 새 카테고리를 만들면 해당 순위도 추가됩니다.

접은 카테고리는 다시 시작해도 접힌 상태로 유지됩니다.

---

## 중복 감지

라이브러리는 `URL` 필드를 확인하여 중복 항목을 방지합니다:

- **추가 시** — 동일한 URL의 노트가 이미 있으면, 중복을 생성하는 대신 기존 노트를 엽니다.
- **중복 찾아 제거** — 이 명령을 팔레트에서 실행하여 모든 노트를 스캔하고, URL별로 그룹화하며, 모달을 통해 선택적으로 중복을 제거합니다.

---

## 소스

각 카테고리에는 검색을 수행하는 소스가 할당되어 있습니다:

| 소스             | 콘텐츠 유형   | API 키                                                      |
| ---------------- | --------------- | ----------------------------------------------------------- |
| **OMDb**         | 영화, 시리즈  | 무료 키 필요 — [omdbapi.com](https://www.omdbapi.com/apikey.aspx) |
| **Books**        | 도서           | Open Library(키 불필요) + Google Books(선택적 무료 키). 결과 병합 — Google Books 우선, Open Library 아래. |
| **Games**         | 게임           | RAWG (무료 키 필요 — [rawg.io/apidocs](https://rawg.io/apidocs)) + Steam (불필요). 결과 병합 — RAWG 우선, Steam 아래. |
| **Deezer**       | 음악(앨범)  | 불필요                                                        |
| **AniList**      | 애니메이션           | 불필요 — 무료 AniList GraphQL API, 키 불필요       |
| **Comic Vine**   | 만화          | 무료 키 필요 — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**       | 기타 모든 것   | 불필요 — 제목을 입력하고 필드를 직접 작성          |

영화와 시리즈 노트는 **TMDB**(선택적 무료 키)로 더 풍부하게 만들 수 있습니다. 예고편, 스틸, 상영 시간, 시리즈의 시즌 목록을 가져와 노트의 frontmatter에 기록합니다.

---

## 개인정보 보호 및 네트워크 사용

Library는 **오프라인 우선**으로 동작합니다. 라이브러리는 일반 노트로 이루어져 있으며 연결 없이도 작동합니다. 플러그인은 아래에 나열된 데이터만, 다음 경우에만 전송합니다:

- **사용자가 직접 할 때:** 제목 검색, 메타데이터 새로 고침, AniList 명령 실행, 공유 버튼 클릭.
- **라이브러리 노트를 열 때:** 해당 노트의 메타데이터가 `Source ID`로 소스에서 새로 고쳐집니다(노트당 최대 5분에 한 번). `Source ID`가 없는 노트는 이름으로 검색됩니다.
- **플러그인 업데이트 또는 API 키 변경 후:** 백그라운드 작업이 라이브러리 노트를 소스에서 한 번, 하나씩 새로 고칩니다.

노트가 참조하는 표지 이미지, 스틸, 예고편 플레이어는 아래에 나열된 호스트에서 불러옵니다.

| 서비스 | 시기 | 전송 내용 | 이유 |
| --- | --- | --- | --- |
| `www.omdbapi.com` | OMDb 기반 카테고리를 검색할 때 | 입력한 제목과 OMDb API 키 | 영화/시리즈 메타데이터 가져오기(연도, 장르, 캐스팅, 평점, 포스터, 에피소드 수) |
| `openlibrary.org` | Open Library 카테고리를 검색할 때 | 입력한 제목 | 도서 메타데이터 가져오기(저자, 연도, 주제, 커버 ID) |
| `covers.openlibrary.org` | 도서 카드에 커버가 있을 때 | Open Library 커버 ID | 커버 이미지 로드 |
| `www.googleapis.com` | Google Books 카테고리를 검색할 때 | 입력한 제목과 Google Books 키 | 도서 메타데이터 가져오기(저자, 연도, 카테고리, 페이지 수, 커버, ISBN) |
| `api.rawg.io` | RAWG 게임 카테고리를 검색할 때 | 입력한 제목과 RAWG 키 | 게임 메타데이터 가져오기(연도, 장르, 개발자, 커버) |
| `api.deezer.com` | Deezer 음악 카테고리를 검색할 때 | 입력한 앨범 또는 아티스트 | 앨범 메타데이터 가져오기(아티스트, 연도, 장르, 트랙 수, 커버) |
| `graphql.anilist.co` | 애니메이션 카테고리를 검색할 때 | 입력한 제목 | 애니메이션 메타데이터 가져오기(제목, 연도, 장르, 에피소드, AniList 점수, 스튜디오, 포스터) |
| `graphql.anilist.co` | AniList 동기화 명령을 실행할 때 | AniList 액세스 토큰과 노트의 진행 상황, 상태, 평점 | AniList 애니메이션 목록 읽기 또는 업데이트 |
| `anilist.co` | AniList 동기화 설정에서 **연결**을 클릭할 때 | AniList Client ID | 브라우저에서 AniList 인증 페이지 열기 |
| `comicvine.gamespot.com` | 만화 카테고리를 검색할 때 | 입력한 제목과 Comic Vine 키 | 만화 메타데이터 가져오기(제목, 연도, 출판사, 호수, 커버) |
| `store.steampowered.com` | Steam 게임을 검색하거나 추가할 때 | 입력한 제목 또는 Steam 앱 ID | 게임 메타데이터 가져오기 (연도, 장르, 개발사, 표지) |
| `cdn.cloudflare.steamstatic.com` | Steam 게임 카드에 표지가 있을 때 | Steam 앱 ID | 표지 이미지 불러오기 |
| `api.themoviedb.org` | TMDB 키가 설정된 상태에서 영화/시리즈 노트를 추가하거나 새로 고칠 때 | 노트의 IMDb ID와 TMDB 키 | 예고편, 스틸, 상영 시간, 시즌 목록 가져오기 |
| `image.tmdb.org` | 영화/시리즈 노트에 스틸이 있을 때 | TMDB 이미지 경로 | 스틸 이미지 불러오기 |
| `v3-cinemeta.strem.io` | 영화/시리즈 노트를 추가하거나 새로고침할 때 | 노트의 IMDb ID | 예고편, 스틸, 재생 시간, 시리즈 시즌 목록 가져오기 — 키 불필요 |
| `images.metahub.space` | 영화/시리즈 노트에 스틸이 있을 때 | 노트의 IMDb ID | 스틸(배경) 이미지 불러오기 |
| `episodes.metahub.space` | 시리즈 노트에 에피소드 스틸이 있을 때 | 시리즈의 IMDb ID와 시즌·에피소드 번호 | 에피소드 스틸 이미지 불러오기 |
| `i.ytimg.com` | 영화 노트에 예고편 스틸이 표시될 때 | 예고편 동영상 ID | 예고편 스틸 이미지 불러오기 |
| `s4.anilist.co` | 애니메이션 노트에 배너가 있을 때 | AniList CDN 경로 | 배너 이미지 불러오기 |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | 예고편이 있는 노트를 열 때 | 예고편 ID | 예고편 플레이어 임베드 |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | 공유 버튼을 클릭할 때 | 카드 캡션(제목, 내 평가, 출처 링크) | 선택한 네트워크의 게시 창을 미리 채워진 상태로 엽니다. 카드 이미지 자체는 로컬에 남습니다 |

그 외의 데이터는 볼트를 떠나지 않습니다. 플러그인에 **텔레메트리, 분석, 자동 업데이트 메커니즘이 없습니다**. API 키(OMDb, Google Books, RAWG, Comic Vine, TMDB)는 로컬 플러그인 설정에만 저장되며 해당 서비스에만 전송됩니다. 커버 이미지는 각 소스에서 반환된 URL에서 직접 로드됩니다.

---

## 프론트매터 스키마

플러그인은 표준 YAML 프론트매터를 읽고 씁니다. 노트는 자동으로 생성되지만 모든 필드는 편집 가능합니다. `Source`와 `Source ID`를 통해 플러그인이 나중에 메타데이터를 새로고칠 수 있습니다.

### 영화

> **표지 속성** — 표지를 저장하는 frontmatter 속성은 **설정 → Library**에서 변경할 수 있습니다 (예: `image`). 기존 노트는 계속 작동합니다.

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

### 시리즈

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

> **시리즈 자동 업데이트:** `현재 노트의 메타데이터 새로고침`을 실행하거나(또는 노트를 열기만 해도) 플러그인이 `Progress`의 총 에피소드 수를 업데이트합니다(예: `25/42`에서 `25/50`으로). 시청 횟수는 그대로 유지됩니다.

> **예고편, 스틸, 시즌:** TMDB 키를 설정하면 플러그인이 `Trailer`, `Gallery`, `Runtime`(시리즈는 `Seasons`도)을 자동으로 채웁니다. `Runtime`은 영화 길이(분) 또는 시리즈의 에피소드당 분입니다. 노트 헤더에는 임베드 플레이어, 스틸 모음, 에피소드 수·평가·시즌별 예고편 버튼이 있는 시즌 목록이 표시됩니다. 모든 필드는 일반 frontmatter입니다. 수정하거나 삭제하면 다음 새로 고침 때 플러그인이 값을 건드리지 않습니다. 또한 플러그인 버전이 바뀔 때마다 백그라운드에서 라이브러리를 한 번 순회하며 새로 추가된 필드를 하나씩 채웁니다.

### 도서

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

### 애니메이션

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

### 만화

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

## 그래프 링크

장르, 크리에이터, 그리고 영화·시리즈의 출연진은 각각 전용 속성에 링크로 저장됩니다:

```yaml
Genre:
    - "[[Action]]"
    - "[[Sci-Fi]]"
Creator:
    - "[[Christopher Nolan]]"
Cast:
    - "[[Leonardo DiCaprio]]"
```

그래서 각 장르·크리에이터·배우 노트의 백링크에 모든 작품이 표시되고, 그래프는 이를 통해 노트를 연결합니다. 직접 입력했거나 이전 버전에서 남은 일반 이름은 노트가 바뀔 때마다 링크로 바뀌며, 별칭이 있는 링크는 그대로 유지됩니다. `그래프 링크 재구성`은 라이브러리 전체를 한 번에 변환합니다. 이전 버전의 `Related` 속성은 더 이상 사용되지 않으며 노트에서 제거됩니다.

---

## 공유

모든 콘텐츠 노트에는 헤더에 **공유** 버튼이 있습니다(또는 `현재 노트 공유` 실행). 이는 카드 이미지 — 포스터, 제목, 연도, 장르, IMDb/AniList 점수, 내 평점 — 를 렌더링하여 어디에나 게시할 수 있게 합니다:

- **모바일에서** — **공유…** 버튼이 카드 이미지가 바로 첨부된 기기의 네이티브 공유 시트를 열어, 어떤 앱으로든 곧바로 보낼 수 있습니다.
- **X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, Pinterest** — 캡션(제목, 내 평점, 소스 링크, 이 플러그인 링크)이 미리 채워진 네트워크의 작성 화면을 엽니다. 동시에 카드 이미지가 클립보드에 복사되므로, 게시물에 붙여넣기(Ctrl/Cmd+V)만 하면 됩니다.
- **이미지 복사 / 텍스트 복사 / 이미지 저장** — 렌더링된 카드나 캡션을 클립보드에 복사하거나, 이미지를 볼트의 첨부 폴더에 저장하여 직접 첨부합니다.

공유는 완전히 로컬입니다: 카드는 노트 자체의 메타데이터와 커버로부터 앱 내에서 그려집니다. 아무것도 업로드되지 않으며 — 플러그인은 선택한 작성 URL을 브라우저에서 열 뿐입니다.

---

## AniList 동기화

애니메이션 진행 상황을 [AniList](https://anilist.co) 계정과 동기화된 상태로 유지하세요.

**설정** — **설정 → 라이브러리 → AniList 동기화**에서:

1. [anilist.co/settings/developer](https://anilist.co/settings/developer)에서 무료 API 클라이언트를 등록하고, 리다이렉트 URL을 `https://anilist.co/api/v2/oauth/pin`으로 설정합니다.
2. **Client ID**를 붙여넣고 **연결**을 클릭한 후 승인합니다.
3. AniList가 액세스 토큰을 보여줍니다 — 이를 플러그인에 붙여넣습니다. **연결 테스트**를 클릭하여 확인합니다.

그런 다음 명령을 사용하세요:

- **Push current note to AniList** — 활성 애니메이션 노트의 진행 상황(시청한 에피소드), 상태(시청 중 / 완료 / 예정), 평점을 AniList 목록으로 전송합니다.
- **Pull progress from AniList** — AniList 애니메이션 목록을 가져와 일치하는 노트를 업데이트합니다. Pull은 **전진 전용**입니다: 로컬에서 더 앞서 있거나 이미 완료된 노트를 되돌리지 않으며, 개인 `My Rating`은 건드리지 않습니다.

`Source: anilist`인 노트(AniList 애니메이션 소스로 추가된 노트)만 동기화됩니다. 토큰은 로컬 플러그인 설정에 저장되며 AniList에만 전송됩니다.

---

## 명령어

| 명령어                              | 설명                                                              |
| ------------------------------------ | ----------------------------------------------------------------------- |
| `라이브러리 열기`                       | 라이브러리 갤러리 탭을 엽니다.                                           |
| `콘텐츠 추가`                        | 소스를 검색하고 콘텐츠 노트를 생성합니다(수동의 경우 제목을 입력). |
| `라이브러리 검색`                | 라이브러리에 이미 있는 노트를 퍼지 검색하여 엽니다.                 |
| `현재 노트의 메타데이터 새로고침`  | 활성 노트의 메타데이터를 다시 가져옵니다. 시리즈 에피소드 합계를 업데이트합니다.   |
| `그래프 링크 재구성`                | 모든 콘텐츠 노트에서 `Genre`, `Creator`, `Cast`를 링크로 바꿉니다. |
| `중복 항목 검색 및 삭제`           | URL로 모든 노트를 스캔하고, 중복을 표시하며, 선택한 것을 제거합니다.       |
| `현재 노트 공유`                 | 노트를 카드 이미지로 렌더링하여 X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky 또는 Pinterest에 공유합니다. |
| `현재 노트를 AniList에 업로드`       | 활성 애니메이션 노트의 진행 상황, 상태, 평점을 AniList 계정으로 전송합니다. |
| `AniList에서 진행률 가져오기`         | AniList 목록을 가져와 일치하는 노트를 업데이트합니다(전진 전용). |
| `모든 노트의 메타데이터 새로고침` | 라이브러리의 모든 노트 메타데이터를 백그라운드에서 하나씩 가져옵니다. |

---

## 기여 및 지원

- **버그를 발견하셨나요?** [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues)를 열어주세요.
- **기능 아이디어가 있으신가요?** [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions)을 시작해주세요.
- **플러그인이 마음에 드셨나요?** 레포지토리에 스타를 주어 지원을 보여주세요!

---

## 라이선스

[MIT License](LICENSE) — 자유롭게 사용, 수정, 공유할 수 있습니다.

---

## 감사합니다

이 플러그인이 유용하다면 개발을 지원해주세요:

| | 네트워크 | 주소 |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |

---
