> [EN](README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md) | **PL**

<p align="center">
  <img src="banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Library</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.2.0-blue" alt="Version">
  <img src="https://img.shields.io/github/downloads/Kigrok/obsidian-library-plugin/total?color=brightgreen" alt="Downloads">
  <img src="https://img.shields.io/badge/Obsidian-v1.8.7+-purple" alt="Obsidian Version">
  <img src="https://img.shields.io/github/license/Kigrok/obsidian-library-plugin?color=orange" alt="License">
</p>

<p align="center">
  <b>Uporządkuj swoje filmy, seriale, książki i nie tylko w wizualnej galerii — bezpośrednio w Obsidianie.</b>
  <br />
  Przeszukuj i dodawaj tytuły w aplikacji, automatycznie pobieraj metadane, śledź postępy i połącz wszystko ze swoim grafem.
</p>

<p align="center">
  <a href="https://community.obsidian.md/plugins/library">Zobacz w katalogu Obsidian Community Plugins</a>
</p>

---

## Kluczowe funkcje

- **Wizualna siatka kart** — Dedykowana karta Library wyświetla Twoją kolekcję jako galerię kart ze sztukami okładek.
- **Wbudowane wyszukiwanie** — Przeszukuj i dodawaj tytuły bezpośrednio w aplikacji: OMDb dla filmów i seriali, Open Library lub Google Books dla książek, RAWG dla gier, Deezer dla muzyki, AniList dla anime, Comic Vine dla komiksów.
- **Inteligentne śledzenie seriali** — Sezon i łączna liczba odcinków są automatycznie pobierane i utrzymywane w synchronizacji.
- **Wskaźniki postępu** — Wizualne paski postępu na kartach i nagłówkach notatek pokazują, ile obejrzałeś lub przeczytałeś.
- **Bogate nagłówki notatek** — Każda notatka treści otrzymuje automatycznie wygenerowany nagłówek ze wszystkimi kluczowymi metadanymi.
- **Własne kategorie** — Twórz kategorie dla filmów, seriali, anime, komiksów, książek, gier, muzyki lub czegokolwiek innego za pomocą ręcznego źródła.
- **Linki grafu** — Właściwość `Related` w frontmatterze łączy każdą notatkę z jej kategorią, gatunkami i twórcami, automatycznie utrzymywana w synchronizacji dla pięknego grafu.
- **Karty do udostępniania** — Zamień dowolną notatkę treści w obraz karty do udostępnienia (plakat, tytuł, rok, gatunek, ocena IMDb i Twoja ocena) i opublikuj go na X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky lub Pinterest — udostępnij go bezpośrednio aplikacjom na Twoim urządzeniu lub skopiuj/zapisz obraz, aby użyć go gdziekolwiek.
- **Sortowanie i zwijanie** — Sortuj karty według nazwy, roku, oceny lub daty; zwijaj dowolną kategorię.
- **Statystyki** — Najlepsze gatunki, najlepsi twórcy (tylko filmy i seriale) i najlepsze pozycje w każdej kategorii z rankingami medalowymi.
- **Wykrywanie duplikatów** — Automatycznie zapobiega dodawaniu tego samego tytułu dwukrotnie według URL. Wbudowane polecenie znajduje i usuwa istniejące duplikaty.
- **Wielojęzyczność** — 31 języków: angielski, ukraiński, rosyjski, białoruski, kazachski, uzbecki, niemiecki, hiszpański, francuski, włoski, holenderski, czeski, chorwacki, polski, rumuński, turecki, azerski, perski, hindi, bengalski, urdu, tagalog, wietnamski, tajski, jawajski, japoński, koreański, chiński, arabski, sinhala, hebrajski.

---

## Szybki start

### 1. Instalacja

Zainstaluj **Library** z [katalogu Obsidian Community Plugins](https://community.obsidian.md/plugins/library) (Ustawienia > Community plugins > Przeglądaj > wyszukaj "Library") lub zainstaluj ręcznie przez [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).

### 2. Podstawowa konfiguracja

1. Przejdź do **Ustawienia** > **Library**.
2. Dodaj swoje **Kategorie** — wybierz predefiniowany typ (Movies, Series, Books, Comics, Games, Music, Anime lub Manual) z menu rozwijanego i kliknij **Add category**. Każda kategoria ma nazwę wyświetlaną (przetłumaczoną na Twój język), wartość `Type` (zawsze angielską, np. `Movie`), źródło i opcjonalny folder do przechowywania notatek.
3. _(Opcjonalnie)_ Wprowadź klucze API dla używanych usług: [OMDb](https://www.omdbapi.com/apikey.aspx) dla filmów/seriali, [RAWG](https://rawg.io/apidocs) dla gier, [Comic Vine](https://comicvine.gamespot.com/api/) dla komiksów. Anime (AniList) i muzyka (Deezer) nie wymagają klucza.

### 3. Dodaj kartę po tytule

Koniec z ręcznym wypełnianiem frontmattera — dodaj film, serial, książkę, anime lub komiks po prostu wyszukując jego nazwę:

1. Otwórz kartę **Library** z ikony na pasku bocznym (lub uruchom `Open Library`).
2. Kliknij przycisk **+** w prawym górnym rogu strony Library (lub uruchom `Add content`).
3. Wybierz kategorię, wpisz **tytuł** w okno wyszukiwania i wybierz wynik.
4. Karta zostanie natychmiast utworzona z automatycznie wypełnionym plakatem, rokiem, gatunkiem, twórcami i oceną.

Przycisk **Search** obok **+** przeszukuje tytuły już w Twojej bibliotece.

Dla kategorii **Manual** po prostu wpisz tytuł i sam wypełnij okładkę, rok i inne pola.

---

## Statystyka

Karta Library zawiera zwijalną sekcję **Statistics** na górze:

- **Najlepsze gatunki** — klasyfikowane według częstości w całej bibliotece.
- **Najlepsi twórcy** — klasyfikowani według liczby filmów i seriali, w których występują.
- **Najlepsze w kategorii** — dla każdej kategorii (Movies, Series, Books itp.) top 3 pozycji według oceny z małymi miniaturkami okładek.

---

## Wykrywanie duplikatów

Library zapobiega duplikatom sprawdzając pole `URL`:

- **Przy dodawaniu** — jeśli notatka o tym samym URL-u już istnieje, otwiera istniejącą notatkę zamiast tworzyć duplikat.
- **Znajdź i usuń duplikaty** — uruchom to polecenie z palety, aby przeskanować wszystkie notatki, pogrupować według URL i selektywnie usunąć duplikaty za pomocą okna modalnego.

---

## Źródła

Każda kategoria jest powiązana ze źródłem, które zasila jej wyszukiwanie:

| Źródło            | Typy treści    | Klucz API                                                   |
| ----------------- | -------------- | ---------------------------------------------------------- |
| **OMDb**          | Filmy, Seriale | Wymagany darmowy klucz — [omdbapi.com](https://www.omdbapi.com/apikey.aspx) |
| **Books**         | Książki        | Open Library (bez klucza) + Google Books (opcjonalny darmowy klucz). Wyniki są łączone — Google Books pierwsze, Open Library poniżej. |
| **RAWG**          | Gry            | Wymagany darmowy klucz — [rawg.io/apidocs](https://rawg.io/apidocs) |
| **Deezer**        | Muzyka (albumy)| Brak                                                       |
| **AniList**         | Anime          | Brak — darmowe API GraphQL AniList, klucz nie jest wymagany |
| **Comic Vine**    | Komiksy        | Wymagany darmowy klucz — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**        | Wszystko inne  | Brak — sam wpisujesz tytuł i wypełniasz pola              |

---

## Prywatność i korzystanie z sieci

Library jest **offline-first**. Plugin kontaktuje się z siecią tylko wtedy, gdy aktywnie szukasz tytułu do dodania, i tylko z wprowadzanymi przez Ciebie frazami:

| Usługa | Kiedy | Co jest wysyłane | Dlaczego |
| --- | --- | --- | --- |
| `www.omdbapi.com` | Przeszukujesz kategorię opartą na OMDb | Tytuł, który wpisujesz, i Twój klucz API OMDb | Pobieranie metadanych filmu/serialu (rok, gatunki, obsada, ocena, plakat, liczba odcinków) |
| `openlibrary.org` | Przeszukujesz kategorię Open Library | Tytuł, który wpisujesz | Pobieranie metadanych książki (autor, rok, tematy, ID okładki) |
| `covers.openlibrary.org` | Karta książki ma okładkę | ID okładki Open Library | Ładowanie obrazu okładki |
| `www.googleapis.com` | Przeszukujesz kategorię Google Books | Tytuł, który wpisujesz, i Twój klucz Google Books | Pobieranie metadanych książki (autor, rok, kategorie, liczba stron, okładka, ISBN) |
| `api.rawg.io` | Przeszukujesz kategorię gier RAWG | Tytuł, który wpisujesz, i Twój klucz RAWG | Pobieranie metadanych gry (rok, gatunki, deweloper, okładka) |
| `api.deezer.com` | Przeszukujesz kategorię muzyki Deezer | Album lub artysta, którego wpisujesz | Pobieranie metadanych albumu (artysta, rok, gatunki, liczba utworów, okładka) |
| `graphql.anilist.co` | Przeszukujesz kategorię anime | Tytuł, który wpisujesz | Pobieranie metadanych anime (tytuł, rok, gatunek, odcinki, ocena AniList, studio, plakat) |
| `comicvine.gamespot.com` | Przeszukujesz kategorię komiksów | Tytuł, który wpisujesz, i Twój klucz Comic Vine | Pobieranie metadanych komiksu (tytuł, rok, wydawca, liczba numerów, okładka) |

Żadne inne dane nigdy nie opuszczają Twojego vaultu. Plugin **nie ma telemetrii, nie ma analityki i nie ma mechanizmu automatycznej aktualizacji**. Klucze API (OMDb, Google Books, RAWG, Comic Vine) są przechowywane tylko w lokalnych ustawieniach pluginu i wysyłane tylko do odpowiednich usług. Obrazy okładek są ładowane bezpośrednio z adresów URL zwracanych przez każde źródło.

---

## Schemat frontmattera

Plugin odczytuje i zapisuje do standardowego YAML frontmattera. Notatki są tworzone automatycznie, ale każde pole jest edytowalne. `Source` i `Source ID` pozwalają pluginowi odświeżyć metadane później.

### Movie

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

### Series

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

> **Automatyczna aktualizacja seriali:** Uruchom `Refresh metadata for current note` (lub po prostu otwórz notatkę), a plugin zaktualizuje łączną liczbę odcinków w `Progress` (np., `25/42` na `25/50`) i liczbę `Season`, zachowując Twoją liczbę obejrzanych bez zmian.

### Book

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

### Anime

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

### Comic

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

## Linki grafu

Każda notatka treści otrzymuje właściwość `Related` w frontmatterze, automatycznie utrzymywaną w aktualności — treść notatki nigdy nie jest modyfikowana:

```yaml
Related:
    - "[[Movie]]"
    - "[[Action]]"
    - "[[Sci-Fi]]"
    - "[[Christopher Nolan]]"
```

Te linki łączą Twoje notatki przez wspólne kategorie, gatunki i twórców, dzięki czemu widok grafu Obsidiana tworzy czyste klastry. Prawdziwe notatki-huby są tworzone dla każdej kategorii (np. `Movie`), dzięki czemu klastry są widoczne nawet z ukrytymi nierozwiązanymi linkami. Właściwość jest zapisywana при 创建 notatki i odświeżana za każdym razem, gdy zmieniają się jej metadane — uruchom `Rebuild graph links` tylko wtedy, gdy chcesz wymusić pełną przebudowę.

---

## Udostępnianie

Każda notatka treści otrzymuje przycisk **Share** w swoim nagłówku (lub uruchom `Share current note`). Renderuje obraz karty — plakat, tytuł, rok, gatunek, ocenę IMDb/AniList i Twoją ocenę — który możesz opublikować gdziekolwiek:

- **Na urządzeniu mobilnym** — przycisk **Share…** otwiera natywny arkusz udostępniania Twojego urządzenia z bezpośrednio dołączonym obrazem karty, dzięki czemu możesz wysłać go prosto do dowolnej aplikacji.
- **X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, Pinterest** — otwiera edytor danej sieci z wstępnie wypełnionym podpisem (tytuł, Twoja ocena, link źródłowy i link do tego pluginu). Obraz karty jest jednocześnie kopiowany do schowka, więc wystarczy, że wkleisz go (Ctrl/Cmd+V) do posta.
- **Copy image / Copy text / Save image** — skopiuj wyrenderowaną kartę lub podpis do schowka albo zapisz obraz w folderze załączników Twojego vaultu, aby dołączyć go ręcznie.

Udostępnianie odbywa się całkowicie lokalnie: karta jest rysowana w aplikacji na podstawie własnych metadanych i okładki notatki. Nic nie jest przesyłane — plugin otwiera tylko wybrany przez Ciebie adres URL edytora w Twojej przeglądarce.

---

## Polecenia

| Polecenie                            | Opis                                                                     |
| ------------------------------------ | ------------------------------------------------------------------------ |
| `Open Library`                       | Otwórz kartę galerii Library.                                            |
| `Add content`                        | Przeszukaj źródło i utwórz notatkę treści (lub wpisz tytuł dla Manual). |
| `Search your library`                | Wyszukiwanie przybliżone i otwieranie dowolnej notatki w Twojej bibliotece. |
| `Refresh metadata for current note`  | Ponowne pobranie metadanych dla aktywnej notatki; aktualizuje łączne liczby odcinków seriali. |
| `Rebuild graph links`                | Połącz każdą notatkę treści z jej kategorią, gatunkami i twórcami.        |
| `Find & remove duplicates`           | Przeskanuj wszystkie notatki według URL, wyświetl duplikaty i usuń wybrane. |
| `Share current note`                 | Wyrenderuj notatkę jako obraz karty i udostępnij ją na X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky lub Pinterest. |

---

## Wkład i wsparcie

- **Znalazłeś błąd?** Otwórz [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues).
- **Masz pomysł na funkcję?** Rozpocznij [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions).
- **Podoba Ci się plugin?** Rozważ gwiazdkę repozytorium, aby pokazać swoje wsparcie!

---

## Dziękujemy

Jeśli uważasz ten plugin za przydatny, rozważ wsparcie jego rozwoju:

| | Sieć | Adres |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |

---
