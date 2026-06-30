> [EN](README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | **[KO](README.ko.md)** | [AR](README.ar.md)

<p align="center">
  <img src="banner.png" alt="Obsidian Library 배너" width="100%">
</p>

<h1 align="center">라이브러리</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.1.2-blue" alt="버전">
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
- **내장 검색** — 앱 내에서 제목을 검색하고 추가합니다: 영화와 시리즈는 OMDb, 도서는 Open Library 또는 Google Books, 게임은 RAWG, 음악은 Deezer, 애니메이션은 Jikan, 만화는 Comic Vine.
- **스마트 시리즈 추적** — 시즌과 에피소드 수가 자동으로 가져와져 동기화됩니다.
- **진행 표시기** — 카드와 노트 헤더의 시각적 프로그레스 바로 시청/독서 진행률을 보여줍니다.
- **풍부한 노트 헤더** — 모든 콘텐츠 노트에 주요 메타데이터가 포함된 자동 생성 헤더가 부여됩니다.
- **사용자 정의 카테고리** — 영화, 시리즈, 애니메이션, 만화, 도서, 게임, 음악 또는 수동 소스를 사용하여 기타 카테고리를 생성할 수 있습니다.
- **그래프 링크** — `Related` 프론트매터 속성이 각 노트를 카테고리, 장르, 크리에이터에 연결하고, 아름다운 그래프를 위해 자동으로 동기화됩니다.
- **정렬 및 접기** — 이름, 연도, 평점, 날짜별로 카드를 정렬할 수 있고, 모든 카테고리를 접을 수 있습니다.
- **통계** — 상위 장르, 상위 크리에이터(영화 및 시리즈만), 카테고리별 상위 항목(메달 랭킹 포함).
- **중복 감지** — URL로 동일한 제목의 중복 추가를 자동으로 방지합니다. 내장 명령으로 기존 중복을 찾아 제거합니다.
- **다국어 지원** — 31개 언어: 영어, 우크라이나어, 러시아어, 벨라루스어, 카자흐어, 우즈베크어, 독일어, 스페인어, 프랑스어, 이탈리아어, 네덜란드어, 체코어, 크로아티아어, 폴란드어, 루마니아어, 터키어, 아제르바이잔어, 페르시아어, 힌디어, 벵갈어, 우르두어, 타갈로그어, 베트남어, 태국어, 자바어, 일본어, 한국어, 중국어, 아라비아어, 싱할라어, 히브리어.

---

## 빠른 시작

### 1. 설치

[Obsidian 커뮤니티 플러그인 디렉토리](https://community.obsidian.md/plugins/library)에서 **라이브러리**를 설치하세요 (설정 > 커뮤니티 플러그인 > 찾아보기 > "라이브러리" 검색). 또는 [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases)에서 수동으로 설치할 수 있습니다.

### 2. 기본 설정

1. **설정** > **라이브러리**로 이동합니다.
2. **카테고리**를 추가합니다 — 드롭다운에서 사전 정의된 유형(영화, 시리즈, 도서, 만화, 게임, 음악, 애니메이션 또는 수동)을 선택하고 **카테고리 추가**를 클릭합니다. 각 카테고리에는 표시 이름(귀하의 언어로 번역됨), `Type` 값(항상 영어, 예: `Movie`), 소스, 그리고 노트 저장을 위한 선택적 폴더가 있습니다.
3. _(선택사항)_ 사용하는 서비스의 API 키를 입력합니다: 영화/시리즈용 [OMDb](https://www.omdbapi.com/apikey.aspx), 게임용 [RAWG](https://rawg.io/apidocs), 만화용 [Comic Vine](https://comicvine.gamespot.com/api/). 애니메이션(Jikan)과 음악(Deezer)은 키가 필요하지 않습니다.

### 3. 제목으로 카드 추가

프론트매터를 수동으로 입력할 필요가 없습니다 — 이름을 검색하여 영화, 시리즈, 도서, 애니메이션 또는 만화를 추가하세요:

1. 리ibbon 아이콘에서 **라이브러리** 탭을 엽니다 (또는 `Open Library` 실행).
2. 라이브러리 페이지 오른쪽 상단의 **+** 버튼을 클릭합니다 (또는 `Add content` 실행).
3. 카테고리를 선택하고, 검색 상자에 **제목**을 입력한 후 결과를 선택합니다.
4. 포스터, 연도, 장르, 크리에이터, 평점이 자동으로 입력된 카드가 즉시 생성됩니다.

**+** 옆의 **검색** 버튼은 라이브러리에 이미 있는 제목을 검색합니다.

**수동** 카테고리에서는 제목을 입력하고 커버, 연도 및 기타 필드를 직접 작성합니다.

---

## 통계

라이브러리 탭 상단에는 접을 수 있는 **통계** 섹션이 있습니다:

- **상위 장르** — 라이브러리 전체에서 빈도순으로 랭킹.
- **상위 크리에이터** — 출연한 영화 및 시리즈 수로 랭킹.
- **카테고리별 상위** — 각 카테고리(영화, 시리즈, 도서 등)에서 평점 기준 상위 3개 항목(작은 커버 썸네일 포함).

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
| **RAWG**         | 게임           | 무료 키 필요 — [rawg.io/apidocs](https://rawg.io/apidocs) |
| **Deezer**       | 음악(앨범)  | 불필요                                                        |
| **Jikan**        | 애니메이션           | 불필요 — 무료 비공식 MyAnimeList API, 키 불필요       |
| **Comic Vine**   | 만화          | 무료 키 필요 — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**       | 기타 모든 것   | 불필요 — 제목을 입력하고 필드를 직접 작성          |

---

## 개인정보 보호 및 네트워크 사용

라이브러리는 **오프라인 우선**입니다. 플러그인은 제목을 추가하기 위해 적극적으로 검색할 때만 네트워크에 접속하며, 입력한 검색어만 전송합니다:

| 서비스 | 시기 | 전송 내용 | 이유 |
| --- | --- | --- | --- |
| `www.omdbapi.com` | OMDb 기반 카테고리를 검색할 때 | 입력한 제목과 OMDb API 키 | 영화/시리즈 메타데이터 가져오기(연도, 장르, 캐스팅, 평점, 포스터, 에피소드 수) |
| `openlibrary.org` | Open Library 카테고리를 검색할 때 | 입력한 제목 | 도서 메타데이터 가져오기(저자, 연도, 주제, 커버 ID) |
| `covers.openlibrary.org` | 도서 카드에 커버가 있을 때 | Open Library 커버 ID | 커버 이미지 로드 |
| `www.googleapis.com` | Google Books 카테고리를 검색할 때 | 입력한 제목과 Google Books 키 | 도서 메타데이터 가져오기(저자, 연도, 카테고리, 페이지 수, 커버, ISBN) |
| `api.rawg.io` | RAWG 게임 카테고리를 검색할 때 | 입력한 제목과 RAWG 키 | 게임 메타데이터 가져오기(연도, 장르, 개발자, 커버) |
| `api.deezer.com` | Deezer 음악 카테고리를 검색할 때 | 입력한 앨범 또는 아티스트 | 앨범 메타데이터 가져오기(아티스트, 연도, 장르, 트랙 수, 커버) |
| `api.jikan.moe` | 애니메이션 카테고리를 검색할 때 | 입력한 제목 | 애니메이션 메타데이터 가져오기(제목, 연도, 장르, 에피소드, MAL 점수, 시놉시스, 포스터) |
| `comicvine.gamespot.com` | 만화 카테고리를 검색할 때 | 입력한 제목과 Comic Vine 키 | 만화 메타데이터 가져오기(제목, 연도, 출판사, 호수, 커버) |

그 외의 데이터는 비ール트를 떠나지 않습니다. 플러그인에 **텔레메트리, 분석, 자동 업데이트 메커니즘이 없습니다**. API 키(OMDb, Google Books, RAWG, Comic Vine)는 로컬 플러그인 설정에만 저장되며 해당 서비스에만 전송됩니다. 커버 이미지는 각 소스에서 반환된 URL에서 직접 로드됩니다.

---

## 프론트매터 스키마

플러그인은 표준 YAML 프론트매터를 읽고 씁니다. 노트는 자동으로 생성되지만 모든 필드는 편집 가능합니다. `Source`와 `Source ID`를 통해 플러그인이 나중에 메타데이터를 새로고칠 수 있습니다.

### 영화

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

### 시리즈

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

> **시리즈 자동 업데이트:** `Refresh metadata for current note`를 실행하거나(또는 노트를 열기만 해도) 플러그인이 `Progress`의 총 에피소드 수를 업데이트합니다(예: `25/42`에서 `25/50`으로). 시청 횟수는 그대로 유지됩니다.

### 도서

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

### 애니메이션

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

### 만화

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

## 그래프 링크

각 콘텐츠 노트에 `Related` 프론트매터 속성이 부여되며 자동으로 최신 상태를 유지합니다 — 노트 본문은 절대 변경되지 않습니다:

```yaml
Related:
    - "[[Movie]]"
    - "[[Action]]"
    - "[[Sci-Fi]]"
    - "[[Christopher Nolan]]"
```

이러한 링크는 공유 카테고리, 장르, 크리에이터를 통해 노트를 연결하여 Obsidian 그래프 뷰에 깔끔한 클러스터를 형성합니다. 각 카테고리에 허브 노트(예: `Movie`)가 생성되어 미해결 링크가 숨겨져 있어도 클러스터가 표시됩니다. 이 속성은 노트가 생성될 때 작성되며 메타데이터가 변경될 때마다 새로고침됩니다 — 완전한 재구성을 강제하려는 경우에만 `Rebuild graph links`를 실행하세요.

---

## 명령어

| 명령어                              | 설명                                                              |
| ------------------------------------ | ----------------------------------------------------------------------- |
| `Open Library`                       | 라이브러리 갤러리 탭을 엽니다.                                           |
| `Add content`                        | 소스를 검색하고 콘텐츠 노트를 생성합니다(수동의 경우 제목을 입력). |
| `Search your library`                | 라이브러리에 이미 있는 노트를 퍼지 검색하여 엽니다.                 |
| `Refresh metadata for current note`  | 활성 노트의 메타데이터를 다시 가져옵니다. 시리즈 에피소드 합계를 업데이트합니다.   |
| `Rebuild graph links`                | 모든 콘텐츠 노트를 카테고리, 장르, 크리에이터에 연결합니다.          |
| `Find & remove duplicates`           | URL로 모든 노트를 스캔하고, 중복을 표시하며, 선택한 것을 제거합니다.       |

---

## 기여 및 지원

- **버그를 발견하셨나요?** [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues)를 열어주세요.
- **기능 아이디어가 있으신가요?** [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions)을 시작해주세요.
- **플러그인이 마음에 드셨나요?** 레포지토리에 스타를 주어 지원을 보여주세요!

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
