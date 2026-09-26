> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md) | **PL**

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
  Filmy, seriale, książki, anime, komiksy, gry i muzyka jako notatki w Obsidian, pokazane jako galeria okładek.
  <br />
  <a href="https://community.obsidian.md/plugins/library">Katalog wtyczek Obsidian</a>
</p>

## Funkcje

- Wyszukaj tytuł i dostań notatkę z plakatem, rokiem, gatunkiem, twórcami, obsadą i ocenami.
- Przeglądaj bibliotekę jako karty z okładkami, pogrupowane według kategorii i posortowane według nazwy, roku, oceny lub daty.
- Odhaczaj odcinki serialu lub rozdziały książki i oceniaj każdy z osobna; `Progress` i `My Rating` są z nich liczone.
- Notatki o filmach i serialach pokazują zwiastun, kadry, czas trwania i listę sezonów.
- Gatunki, twórcy i aktorzy są linkami, więc ich notatki zbierają każdy tytuł w linkach zwrotnych i na grafie.
- Panel statystyk pokazuje wybrane przez ciebie rankingi i łączny czas oglądania.
- Udostępnij tytuł jako obrazek na X, Telegramie, Reddicie i sześciu innych sieciach.
- Synchronizuj postęp anime z AniList.
- Interfejs jest przetłumaczony na wszystkie języki obsługiwane przez Obsidian, a ten README na [30 języków](./).

## Szybki start

1. Zainstaluj **Library** przez Ustawienia → Wtyczki społeczności → Przeglądaj albo z [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).
2. W Ustawienia → Library dodaj kategorię dla każdego rodzaju treści: Filmy, Seriale, Książki, Komiksy, Gry, Muzyka, Anime, Ręcznie.
3. Wpisz klucze API, których potrzebują twoje źródła (patrz niżej).
4. Otwórz kartę Biblioteka z paska bocznego, naciśnij **+**, wybierz kategorię i wyszukaj tytuł. Tytuł, który już jest w bibliotece, otwiera istniejącą notatkę.

Wartość `Type` kategorii (na przykład `Movie`) decyduje, które notatki do niej należą, a jej folder, gdzie trafiają nowe notatki. Oba ustawienia są pod **Zaawansowane** w ustawieniach kategorii.

## Źródła

| Kategoria | Źródło | Klucz |
| --- | --- | --- |
| Filmy, seriale | OMDb | [Darmowy klucz](https://www.omdbapi.com/apikey.aspx) |
| Książki | Google Books + Open Library | Opcjonalny [klucz Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| Gry | RAWG + Steam | [Darmowy klucz RAWG](https://rawg.io/apidocs); Steam go nie potrzebuje |
| Muzyka | Deezer | Brak |
| Anime | AniList | Brak |
| Komiksy | Comic Vine | [Darmowy klucz](https://comicvine.gamespot.com/api/) |
| Wszystko inne | Ręcznie: pola wypełniasz sam | Brak |

Zwiastuny, kadry, czas trwania i listy sezonów pochodzą z Cinemeta bez klucza. [Klucz TMDB](https://www.themoviedb.org/settings/api) dodaje oceny sezonów i więcej kadrów.

## Postęp i oceny

Nagłówek notatki serialu wymienia sezony, a każdy sezon rozwija się w listę odcinków, z tytułami, jeśli źródło je zna. Odhacz odcinek lub cały sezon jako obejrzany i oceń go w skali od 1 do 10. `Progress` liczy odhaczone odcinki, ocena sezonu to średnia jego ocenionych odcinków, a `My Rating` to średnia ocenionych sezonów. Sezon bez ocenionych odcinków dostaje własną ocenę.

Anime działa tak samo, jako jeden sezon bez tytułów odcinków.

Rozdziały książki pochodzą ze spisu treści wydania w Open Library. Jeśli go nie ma, **Dodaj rozdziały** w nagłówku notatki przyjmuje liczbę rozdziałów albo po jednym tytule w wierszu. Od tej chwili `Progress` liczy rozdziały zamiast stron, a przeczytane strony przechodzą na ten sam odsetek rozdziałów.

Notatki ze starszych wersji zachowują postęp. Dopóki niczego nie odhaczysz, pierwsze odcinki do liczby z `Progress` są pokazane jako obejrzane.

## Statystyki

Panel u góry karty Biblioteka pokazuje kolumny wybrane w Ustawienia → Library → Statystyki: trzy najwyżej ocenione tytuły kategorii, trzy najczęstsze wartości właściwości (gatunki, aktorzy lub dowolna inna) oraz godziny spędzone na filmach, serialach i anime. Pod wykresem codziennie pojawia się jedno porównanie, na przykład: Apollo 11 mogłoby polecieć na Księżyc i z powrotem 8 razy.

## Połączenia w grafie

`Genre`, `Creator` i `Cast` przechowują linki takie jak `[[Christopher Nolan]]`, więc notatka gatunku lub osoby wymienia jej tytuły w linkach zwrotnych. Nazwy wpisane ręcznie stają się linkami, gdy notatka się zmienia, a `Przebuduj linki grafu` przekształca całą bibliotekę.

## Udostępnianie i AniList

**Udostępnij** w nagłówku notatki rysuje kartę z plakatem, tytułem, rokiem, gatunkiem, obsadą, ocenami i twoją notą. Na komputerze obrazek trafia do schowka, a wybrana sieć otwiera się z podpisem, więc wklejasz obrazek do posta. Na telefonie obrazek trafia do systemowego menu udostępniania. Możesz też skopiować obrazek lub podpis albo zapisać obrazek w sejfie.

Aby synchronizować anime, zarejestruj klienta na [anilist.co/settings/developer](https://anilist.co/settings/developer) z adresem przekierowania `https://anilist.co/api/v2/oauth/pin`. Wklej Client ID w Ustawienia → Library → Synchronizacja z AniList, kliknij **Połącz** i wklej token, który pokaże AniList. `Wyślij bieżącą notatkę do AniList` wysyła postęp, status i ocenę. `Pobierz postęp z AniList` aktualizuje notatki, nigdy nie cofa postępu i nie rusza `My Rating`. Synchronizują się tylko notatki z `Source: anilist`.

Te same notatki synchronizują się z MyAnimeList. Utwórz klienta na [myanimelist.net/apiconfig](https://myanimelist.net/apiconfig) z adresem przekierowania `http://localhost`, wklej jego Client ID (i Client Secret, jeśli go ma) w Ustawienia → Library → Synchronizacja z MyAnimeList, kliknij **Połącz** i wklej adres otwarty przez przeglądarkę. Wpis MyAnimeList dla każdego tytułu wtyczka znajduje przez AniList i sama odnawia token. `Wyślij bieżącą notatkę do MyAnimeList` i `Pobierz postęp z MyAnimeList` działają jak ich odpowiedniki dla AniList.

## Frontmatter

Każda karta to notatka, a wszystko, co wtyczka o niej wie, jest we frontmatterze:

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
      # ...jeszcze 7 odcinków
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

W serialu `Runtime` to długość jednego odcinka. Książki mają dodatkowo `ISBN` i trzymają rozdziały w `Chapters` z tymi samymi polami `title`, `watched` i `my_rating`; anime ma `Rating AniList` i `Status`. Właściwość okładki można przemianować w ustawieniach, na przykład na `image`.

Odświeżenie wypełnia tylko puste pola, więc wartości, które edytujesz, zostają. Aktualizuje też łączną liczbę odcinków w `Progress` i dodaje nowe sezony oraz tytuły odcinków.

## Prywatność i sieć

Twoja biblioteka to zwykłe notatki i działa offline. Wtyczka łączy się z siecią, gdy wyszukujesz, odświeżasz, synchronizujesz lub udostępniasz; gdy otwierasz notatkę z biblioteki, najwyżej raz na 5 minut dla każdej notatki; oraz raz po aktualizacji lub zmianie klucza, żeby wypełnić nowe pola. Nie ma telemetrii, analityki ani samoaktualizacji. Klucze API zostają w lokalnych ustawieniach wtyczki i trafiają tylko do swojej usługi.

| Host | Kiedy | Co jest wysyłane |
| --- | --- | --- |
| `www.omdbapi.com` | Wyszukiwanie filmów i seriali | Tytuł lub id IMDb, klucz OMDb |
| `openlibrary.org` | Wyszukiwanie książek; szukanie rozdziałów przy dodaniu lub otwarciu książki | Tytuł i autor, ISBN lub id dzieła |
| `covers.openlibrary.org` | Okładki książek | Id okładki |
| `www.googleapis.com` | Wyszukiwanie książek | Tytuł, klucz Google Books |
| `api.rawg.io` | Wyszukiwanie gier | Tytuł, klucz RAWG |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | Wyszukiwanie gier i okładki | Tytuł lub id aplikacji Steam |
| `api.deezer.com` | Wyszukiwanie muzyki | Album lub wykonawca |
| `graphql.anilist.co` | Wyszukiwanie anime; synchronizacja z AniList; id MyAnimeList do synchronizacji | Tytuł; twój token, postęp, status i ocena; id AniList |
| `anilist.co` | Klikasz **Połącz** | Client ID, otwierany w przeglądarce |
| `myanimelist.net` | Klikasz **Połącz** dla MyAnimeList; odnawianie tokenu | Client ID i sekret, kod autoryzacji, token odświeżania |
| `api.myanimelist.net` | Synchronizacja z MyAnimeList | Twój token, postęp, status i ocena |
| `s4.anilist.co` | Banery anime | Ścieżka CDN |
| `comicvine.gamespot.com` | Wyszukiwanie komiksów | Tytuł, klucz Comic Vine |
| `v3-cinemeta.strem.io` | Dodanie lub odświeżenie filmu albo serialu | Id IMDb |
| `images.metahub.space`, `episodes.metahub.space` | Kadry | Id IMDb, numery sezonu i odcinka |
| `api.themoviedb.org`, `image.tmdb.org` | Dodanie lub odświeżenie filmu albo serialu, jeśli ustawisz klucz TMDB | Id IMDb i klucz TMDB; ścieżka obrazka |
| `i.ytimg.com` | Kadry zwiastunów | Id wideo |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Otwarcie notatki ze zwiastunem | Id wideo |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Klikasz przycisk udostępniania | Podpis: tytuł, twoja ocena, link do źródła. Obrazek zostaje na twoim urządzeniu |

## Polecenia

| Polecenie | Co robi |
| --- | --- |
| `Otwórz bibliotekę` | Otwiera kartę Biblioteka |
| `Dodaj zawartość` | Przeszukuje źródło i tworzy notatkę |
| `Przeszukaj bibliotekę` | Znajduje i otwiera notatkę z biblioteki |
| `Odśwież metadane bieżącej notatki` | Pobiera ponownie aktywną notatkę |
| `Odśwież metadane wszystkich notatek` | Pobiera ponownie każdą notatkę z biblioteki, po kolei |
| `Przebuduj linki grafu` | Zamienia `Genre`, `Creator` i `Cast` w linki |
| `Znajdź i usuń duplikaty` | Wymienia notatki z tym samym URL i usuwa wybrane |
| `Udostępnij bieżącą notatkę` | Otwiera kartę do udostępnienia |
| `Wyślij bieżącą notatkę do AniList` | Wysyła postęp, status i ocenę |
| `Pobierz postęp z AniList` | Aktualizuje notatki z twojej listy AniList |
| `Wyślij bieżącą notatkę do MyAnimeList` | Wysyła postęp, status i ocenę |
| `Pobierz postęp z MyAnimeList` | Aktualizuje notatki z twojej listy MyAnimeList |

## Wsparcie

Błędy zgłaszaj w [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues), a pomysły w [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions). Wtyczka jest udostępniana na [licencji MIT](../LICENSE).

Jeśli wtyczka ci się przydaje, możesz ją wesprzeć:

| | Sieć | Adres |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
