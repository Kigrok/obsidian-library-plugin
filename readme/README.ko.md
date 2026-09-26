> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | **[KO](README.ko.md)** | [AR](README.ar.md)

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
  영화, 시리즈, 책, 애니메이션, 만화, 게임, 음악을 Obsidian 노트로 관리하고 표지 카드 갤러리로 보여줍니다.
  <br />
  <a href="https://community.obsidian.md/plugins/library">Obsidian 커뮤니티 플러그인 디렉터리</a>
</p>

## 기능

- 제목을 검색하면 포스터, 연도, 장르, 제작자, 출연진, 평점이 채워진 노트가 생깁니다.
- 라이브러리를 표지 카드로 보고, 카테고리별로 묶어 이름, 연도, 평점, 날짜순으로 정렬합니다.
- 시리즈의 에피소드나 책의 장을 체크하고 하나씩 평가하세요. `Progress`와 `My Rating`은 여기서 계산됩니다.
- 영화와 시리즈 노트에는 예고편, 스틸 이미지, 러닝타임, 시즌 목록이 표시됩니다.
- 장르, 제작자, 배우는 링크이므로 각자의 노트가 모든 작품을 백링크와 그래프 뷰에 모읍니다.
- 통계 패널은 선택한 순위 목록과 총 시청 시간을 보여줍니다.
- 작품을 카드 이미지로 만들어 X, Telegram, Reddit 외 6개 네트워크에 공유하세요.
- 애니메이션 진행 상황을 AniList와 동기화합니다.
- 인터페이스는 Obsidian이 지원하는 모든 언어로 번역되어 있고, 이 README는 [30개 언어](./)로 제공됩니다.

## 빠른 시작

1. 설정 → 커뮤니티 플러그인 → 탐색에서 **Library**를 설치하거나 [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases)에서 받으세요.
2. 설정 → Library에서 미디어마다 카테고리를 추가하세요: 영화, 시리즈, 도서, 만화, 게임, 음악, 애니메이션, 수동.
3. 소스에 필요한 API 키를 입력하세요(아래 참고).
4. 리본에서 "라이브러리" 탭을 열고 **+**를 누른 뒤 카테고리를 고르고 제목을 검색하세요. 이미 라이브러리에 있는 제목은 기존 노트를 엽니다.

카테고리의 `Type` 값(예: `Movie`)은 어떤 노트가 그 카테고리에 속하는지, 폴더는 새 노트가 저장될 위치를 정합니다. 둘 다 카테고리 설정의 **고급** 아래에 있습니다.

## 소스

| 카테고리 | 소스 | 키 |
| --- | --- | --- |
| 영화, 시리즈 | OMDb | [무료 키](https://www.omdbapi.com/apikey.aspx) |
| 책 | Google Books + Open Library | 선택 사항인 [Google Books 키](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| 게임 | RAWG + Steam | [무료 RAWG 키](https://rawg.io/apidocs); Steam은 필요 없음 |
| 음악 | Deezer | 필요 없음 |
| 애니메이션 | AniList | 필요 없음 |
| 만화 | Comic Vine | [무료 키](https://comicvine.gamespot.com/api/) |
| 그 밖의 모든 것 | 수동: 항목을 직접 입력 | 필요 없음 |

예고편, 스틸 이미지, 러닝타임, 시즌 목록은 키 없이 Cinemeta에서 가져옵니다. [TMDB 키](https://www.themoviedb.org/settings/api)를 넣으면 시즌 평점과 스틸 이미지가 더해집니다.

## 진행 상황과 평점

시리즈 노트의 헤더에는 시즌 목록이 있고, 각 시즌을 펼치면 에피소드가 나옵니다. 소스에 제목이 있으면 제목도 함께 표시됩니다. 에피소드나 시즌 전체를 시청함으로 체크하고 1부터 10까지 점수를 매기세요. `Progress`는 체크한 에피소드 수이고, 시즌 점수는 점수를 매긴 에피소드의 평균, `My Rating`은 점수를 매긴 시즌의 평균입니다. 점수를 매긴 에피소드가 없는 시즌에는 따로 점수를 줄 수 있습니다.

애니메이션도 같은 방식으로, 에피소드 제목이 없는 한 시즌으로 다룹니다.

책의 장은 Open Library에 있는 판본의 목차에서 가져옵니다. 목차를 찾지 못하면 노트 헤더의 **장 추가**에 장 수를 입력하거나 한 줄에 하나씩 장 제목을 입력하세요. 그 뒤로 `Progress`는 페이지 대신 장을 세고, 읽은 페이지는 같은 비율의 장으로 옮겨집니다.

이전 버전의 노트도 진행 상황이 그대로입니다. 아무것도 체크하지 않은 동안에는 `Progress` 수만큼의 첫 에피소드가 시청함으로 표시됩니다.

## 통계

"라이브러리" 탭 상단의 패널은 설정 → Library → 통계에서 고른 열을 보여줍니다: 카테고리의 평점 상위 3개 작품, 속성에서 가장 자주 나오는 값 3개(장르, 배우 등), 영화·시리즈·애니메이션에 쓴 시간. 차트 아래에는 하루에 하나씩 비교가 표시됩니다. 예: 아폴로 11호는 달까지 8번 왕복할 수 있었습니다.

## 그래프 링크

`Genre`, `Creator`, `Cast`에는 `[[Christopher Nolan]]` 같은 링크가 들어가므로, 장르나 인물의 노트는 백링크에 해당 작품을 나열합니다. 직접 입력한 이름은 노트가 바뀔 때 링크가 되고, `그래프 링크 재구성`는 라이브러리 전체를 변환합니다.

## 공유와 AniList

노트 헤더의 **공유**는 포스터, 제목, 연도, 장르, 출연진, 평점, 내 점수가 담긴 카드를 그립니다. 데스크톱에서는 이미지가 클립보드에 복사되고 고른 네트워크가 캡션과 함께 열리므로, 이미지를 게시물에 붙여 넣기만 하면 됩니다. 모바일에서는 이미지가 시스템 공유 메뉴로 전달됩니다. 이미지나 캡션을 복사하거나 이미지를 저장할 수도 있습니다.

애니메이션을 동기화하려면 [anilist.co/settings/developer](https://anilist.co/settings/developer)에서 리디렉션 URL을 `https://anilist.co/api/v2/oauth/pin`으로 한 클라이언트를 등록하세요. Client ID를 설정 → Library → AniList 동기화에 붙여 넣고 **연결**를 누른 뒤, AniList가 보여주는 토큰을 붙여 넣습니다. `현재 노트를 AniList에 업로드`는 진행 상황, 상태, 점수를 보냅니다. `AniList에서 진행률 가져오기`은 노트를 업데이트하지만 진행 상황을 되돌리지 않고 `My Rating`도 건드리지 않습니다. `Source: anilist`인 노트만 동기화됩니다.

## 프런트매터

카드 하나가 노트 하나이며, 플러그인이 아는 모든 정보는 프런트매터에 있습니다:

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
      # ...에피소드 7개 더
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

시리즈에서 `Runtime`은 에피소드 하나의 길이입니다. 책에는 `ISBN`도 있고, 장은 같은 `title`, `watched`, `my_rating` 필드로 `Chapters`에 저장됩니다. 애니메이션에는 `Rating AniList`와 `Status`가 있습니다. 표지 속성 이름은 설정에서 바꿀 수 있습니다(예: `image`).

새로 고침은 빈 필드만 채우므로 직접 고친 값은 그대로 남습니다. 또한 `Progress`의 전체 에피소드 수를 갱신하고 새 시즌과 에피소드 제목을 추가합니다.

## 개인정보와 네트워크 사용

라이브러리는 평범한 노트이며 오프라인에서도 작동합니다. 플러그인은 검색, 새로 고침, 동기화, 공유를 할 때, 라이브러리 노트를 열 때(노트마다 최대 5분에 한 번), 그리고 업데이트나 키 변경 후 새 필드를 채울 때 한 번만 네트워크를 사용합니다. 원격 측정, 분석, 자동 업데이트는 없습니다. API 키는 로컬 플러그인 설정에 저장되며 해당 서비스에만 전송됩니다.

| 호스트 | 시점 | 전송 내용 |
| --- | --- | --- |
| `www.omdbapi.com` | 영화와 시리즈 검색 | 제목 또는 IMDb ID, OMDb 키 |
| `openlibrary.org` | 책 검색, 책을 추가하거나 열 때 장 검색 | 제목과 저자, ISBN 또는 작품 ID |
| `covers.openlibrary.org` | 책 표지 | 표지 ID |
| `www.googleapis.com` | 책 검색 | 제목, Google Books 키 |
| `api.rawg.io` | 게임 검색 | 제목, RAWG 키 |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | 게임 검색과 표지 | 제목 또는 Steam 앱 ID |
| `api.deezer.com` | 음악 검색 | 앨범 또는 아티스트 |
| `graphql.anilist.co` | 애니메이션 검색, AniList 동기화 | 제목, 토큰과 진행 상황, 상태, 점수 |
| `anilist.co` | **연결**를 누를 때 | Client ID, 브라우저에서 열림 |
| `s4.anilist.co` | 애니메이션 배너 | CDN 경로 |
| `comicvine.gamespot.com` | 만화 검색 | 제목, Comic Vine 키 |
| `v3-cinemeta.strem.io` | 영화나 시리즈 추가 또는 새로 고침 | IMDb ID |
| `images.metahub.space`, `episodes.metahub.space` | 스틸 이미지 | IMDb ID, 시즌과 에피소드 번호 |
| `api.themoviedb.org`, `image.tmdb.org` | TMDB 키를 설정한 경우 영화나 시리즈 추가 또는 새로 고침 | IMDb ID와 TMDB 키, 이미지 경로 |
| `i.ytimg.com` | 예고편 스틸 이미지 | 동영상 ID |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | 예고편이 있는 노트 열기 | 동영상 ID |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | 공유 버튼을 누를 때 | 캡션: 제목, 내 점수, 소스 링크. 이미지는 기기에 남습니다 |

## 명령

| 명령 | 하는 일 |
| --- | --- |
| `라이브러리 열기` | "라이브러리" 탭 열기 |
| `콘텐츠 추가` | 소스를 검색해 노트 만들기 |
| `라이브러리 검색` | 라이브러리 노트를 찾아 열기 |
| `현재 노트의 메타데이터 새로고침` | 활성 노트 다시 가져오기 |
| `모든 노트의 메타데이터 새로고침` | 라이브러리의 모든 노트를 하나씩 다시 가져오기 |
| `그래프 링크 재구성` | `Genre`, `Creator`, `Cast`를 링크로 바꾸기 |
| `중복 항목 검색 및 삭제` | URL이 같은 노트를 나열하고 고른 노트 삭제 |
| `현재 노트 공유` | 공유 카드 열기 |
| `현재 노트를 AniList에 업로드` | 진행 상황, 상태, 점수 보내기 |
| `AniList에서 진행률 가져오기` | AniList 목록에서 노트 업데이트 |

## 지원

버그는 [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues)에, 아이디어는 [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions)에 남겨 주세요. 플러그인은 [MIT 라이선스](../LICENSE)를 따릅니다.

플러그인이 도움이 되었다면 후원할 수 있습니다:

| | 네트워크 | 주소 |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
