> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md) | **PL**

<p align="center">
  <img src="../banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Library</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.3.0-blue" alt="Version">
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
- **Wbudowane wyszukiwanie** — Przeszukuj i dodawaj tytuły bezpośrednio w aplikacji: OMDb dla filmów i seriali, Open Library lub Google Books dla książek, RAWG/Steam dla gier, Deezer dla muzyki, AniList dla anime, Comic Vine dla komiksów.
- **Inteligentne śledzenie seriali** — Sezon i łączna liczba odcinków są automatycznie pobierane i utrzymywane w synchronizacji.
- **Wskaźniki postępu** — Wizualne paski postępu na kartach i nagłówkach notatek pokazują, ile obejrzałeś lub przeczytałeś.
- **Bogate nagłówki notatek** — Każda notatka treści otrzymuje automatycznie wygenerowany nagłówek ze wszystkimi kluczowymi metadanymi.
- **Zwiastuny, kadry i sezony** — Notatki filmów i seriali pokazują osadzony zwiastun YouTube/Vimeo, rząd kadrów i czas trwania; seriale mają dodatkowo listę sezonów z liczbą odcinków, ocenami i zwiastunami sezonów.
- **Własne kategorie** — Twórz kategorie dla filmów, seriali, anime, komiksów, książek, gier, muzyki lub czegokolwiek innego za pomocą ręcznego źródła.
- **Linki grafu** — Gatunki, twórcy i obsada są zapisywane jako linki we własnych właściwościach `Genre`, `Creator` i `Cast`, więc notatka każdego gatunku, twórcy i aktora zbiera swoje tytuły w linkach zwrotnych, a graf pokazuje wszystko.
- **Karty do udostępniania** — Zamień dowolną notatkę treści w obraz karty do udostępnienia (plakat, tytuł, rok, gatunek, ocena IMDb i Twoja ocena) i opublikuj go na X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky lub Pinterest — udostępnij go bezpośrednio aplikacjom na Twoim urządzeniu lub skopiuj/zapisz obraz, aby użyć go gdziekolwiek.
- **Synchronizacja AniList** — Wyślij postęp, status i ocenę swojego anime prosto na konto AniList lub pobierz swoją listę z powrotem do notatek.
- **Sortowanie i zwijanie** — Sortuj karty według nazwy, roku, oceny lub daty; zwijaj dowolną kategorię — pozostaje zwinięta także po ponownym uruchomieniu.
- **Statystyki** — Kolumny wybierasz sam: najwyżej oceniane tytuły dowolnej kategorii lub najczęstsze wartości dowolnej właściwości (gatunki, twórcy, aktorzy…), a do tego wykres czasu oglądania.
- **Wykrywanie duplikatów** — Automatycznie zapobiega dodawaniu tego samego tytułu dwukrotnie według URL. Wbudowane polecenie znajduje i usuwa istniejące duplikaty.
- **Wielojęzyczność** — interfejs wtyczki jest przetłumaczony na **wszystkie języki obsługiwane przez Obsidian** (70+), więc zawsze pasuje do języka Twojego Obsidiana. Pełne tłumaczenia README są dostępne dla 30 z nich (zobacz pasek języków u góry).

---

## Szybki start

### 1. Instalacja

Zainstaluj **Library** z [katalogu Obsidian Community Plugins](https://community.obsidian.md/plugins/library) (Ustawienia > Community plugins > Przeglądaj > wyszukaj "Library") lub zainstaluj ręcznie przez [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).

### 2. Podstawowa konfiguracja

1. Przejdź do **Ustawienia** > **Library**.
2. Dodaj swoje **Kategorie** — wybierz predefiniowany typ (Movies, Series, Books, Comics, Games, Music, Anime lub Manual) z menu rozwijanego i kliknij **Dodaj kategorię**. Każda kategoria ma nazwę wyświetlaną (przetłumaczoną na Twój język), wartość `Type` (zawsze angielską, np. `Movie`), źródło i opcjonalny folder do przechowywania notatek.
3. _(Opcjonalnie)_ Wprowadź klucze API dla używanych usług: [OMDb](https://www.omdbapi.com/apikey.aspx) dla filmów/seriali, [RAWG](https://rawg.io/apidocs) dla gier, [Comic Vine](https://comicvine.gamespot.com/api/) dla komiksów, [TMDB](https://www.themoviedb.org/settings/api) dla zwiastunów, kadrów i szczegółów sezonów, [Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) do wyszukiwania książek. Anime (AniList), muzyka (Deezer) i Steam nie wymagają klucza.

### 3. Dodaj kartę po tytule

Koniec z ręcznym wypełnianiem frontmattera — dodaj film, serial, książkę, anime lub komiks po prostu wyszukując jego nazwę:

1. Otwórz kartę **Library** z ikony na pasku bocznym (lub uruchom `Otwórz bibliotekę`).
2. Kliknij przycisk **+** w prawym górnym rogu strony Library (lub uruchom `Dodaj zawartość`).
3. Wybierz kategorię, wpisz **tytuł** w okno wyszukiwania i wybierz wynik.
4. Karta zostanie natychmiast utworzona z automatycznie wypełnionym plakatem, rokiem, gatunkiem, twórcami i oceną.

Przycisk **Przeszukaj bibliotekę** obok **+** przeszukuje tytuły już w Twojej bibliotece.

Dla kategorii **Manual** po prostu wpisz tytuł i sam wypełnij okładkę, rok i inne pola.

---

## Statystyka

Na górze karty „Biblioteka” zwijana sekcja **Statystyki** pokazuje wybrane przez Ciebie kolumny:

- **Rankingi kategorii** — trzy najwyżej oceniane tytuły kategorii wraz z okładkami: *Top filmy*, *Top książki* i tak dalej. Kolejność według `My Rating`, a gdy jej brak — według `Rating IMDB`.
- **Rankingi właściwości** — trzy najczęstsze wartości właściwości w całej bibliotece: *Top gatunki*, *Top twórcy*, *Top aktorzy* lub dowolna inna właściwość, np. *Top: Author*. `Sci-Fi`, `sci-fi` i `[[Sci-Fi]]` liczą się jako jedna wartość.
- **Czas oglądania** — wykres godzin spędzonych na filmach, serialach i anime, liczony z pól `Runtime` i `Progress` każdej notatki.

Konfiguracja znajduje się w **Ustawienia → Library → Statystyki**: **Dodaj ranking** pokazuje Twoje kategorie i właściwości znalezione w notatkach, ikona kosza usuwa kolumnę, a przełącznik ukrywa wykres czasu oglądania. Kolumny pojawiają się w kolejności dodawania; nowa kategoria od razu dodaje własny ranking.

Zwinięte kategorie pozostają zwinięte po ponownym uruchomieniu.

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
| **Games**          | Gry            | RAWG (wymagany darmowy klucz — [rawg.io/apidocs](https://rawg.io/apidocs)) + Steam (brak). Wyniki są łączone — RAWG pierwsze, Steam poniżej. |
| **Deezer**        | Muzyka (albumy)| Brak                                                       |
| **AniList**         | Anime          | Brak — darmowe API GraphQL AniList, klucz nie jest wymagany |
| **Comic Vine**    | Komiksy        | Wymagany darmowy klucz — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**        | Wszystko inne  | Brak — sam wpisujesz tytuł i wypełniasz pola              |

Notatki filmów i seriali można dodatkowo wzbogacić o **TMDB** (opcjonalny darmowy klucz): zwiastun, kadry, czas trwania i lista sezonów serialu są pobierane i zapisywane w frontmatterze notatki.

---

## Prywatność i korzystanie z sieci

Library działa **przede wszystkim offline**: twoja biblioteka to zwykłe notatki i działa także bez połączenia. Wtyczka wysyła tylko dane wymienione poniżej i tylko w tych przypadkach:

- **Gdy działasz sam:** szukasz tytułu, odświeżasz metadane, uruchamiasz polecenie AniList lub klikasz przycisk udostępniania.
- **Gdy otwierasz notatkę z biblioteki:** jej metadane są odświeżane ze źródła według `Source ID`, najwyżej raz na 5 minut dla każdej notatki; notatka bez `Source ID` jest wyszukiwana po nazwie.
- **Po aktualizacji wtyczki lub zmianie klucza API:** przebieg w tle jednorazowo odświeża notatki z biblioteki z ich źródeł, jedną po drugiej.

Okładki, kadry i odtwarzacze zwiastunów, do których odwołują się notatki, są wczytywane z hostów wymienionych poniżej.

| Usługa | Kiedy | Co jest wysyłane | Dlaczego |
| --- | --- | --- | --- |
| `www.omdbapi.com` | Przeszukujesz kategorię opartą na OMDb | Tytuł, który wpisujesz, i Twój klucz API OMDb | Pobieranie metadanych filmu/serialu (rok, gatunki, obsada, ocena, plakat, liczba odcinków) |
| `openlibrary.org` | Przeszukujesz kategorię Open Library | Tytuł, który wpisujesz | Pobieranie metadanych książki (autor, rok, tematy, ID okładki) |
| `covers.openlibrary.org` | Karta książki ma okładkę | ID okładki Open Library | Ładowanie obrazu okładki |
| `www.googleapis.com` | Przeszukujesz kategorię Google Books | Tytuł, który wpisujesz, i Twój klucz Google Books | Pobieranie metadanych książki (autor, rok, kategorie, liczba stron, okładka, ISBN) |
| `api.rawg.io` | Przeszukujesz kategorię gier RAWG | Tytuł, który wpisujesz, i Twój klucz RAWG | Pobieranie metadanych gry (rok, gatunki, deweloper, okładka) |
| `api.deezer.com` | Przeszukujesz kategorię muzyki Deezer | Album lub artysta, którego wpisujesz | Pobieranie metadanych albumu (artysta, rok, gatunki, liczba utworów, okładka) |
| `graphql.anilist.co` | Przeszukujesz kategorię anime | Tytuł, który wpisujesz | Pobieranie metadanych anime (tytuł, rok, gatunek, odcinki, ocena AniList, studio, plakat) |
| `graphql.anilist.co` | Uruchamiasz polecenie synchronizacji AniList | Twój token dostępu AniList oraz postęp, status i ocena notatki | Odczyt lub aktualizacja Twojej listy anime na AniList |
| `anilist.co` | Klikasz **Połącz** w ustawieniach synchronizacji z AniList | Twój AniList Client ID | Otwarcie strony autoryzacji AniList w przeglądarce |
| `comicvine.gamespot.com` | Przeszukujesz kategorię komiksów | Tytuł, który wpisujesz, i Twój klucz Comic Vine | Pobieranie metadanych komiksu (tytuł, rok, wydawca, liczba numerów, okładka) |
| `store.steampowered.com` | Wyszukujesz lub dodajesz grę ze Steam | Wpisany tytuł lub identyfikator aplikacji Steam | Pobranie metadanych gry (rok, gatunek, wydawca, okładka) |
| `cdn.cloudflare.steamstatic.com` | Karta gry Steam ma okładkę | Identyfikator aplikacji Steam | Wczytanie okładki |
| `api.themoviedb.org` | Dodajesz lub odświeżasz notatkę filmu/serialu z kluczem TMDB | Identyfikator IMDb notatki i Twój klucz TMDB | Pobranie zwiastuna, kadrów, czasu trwania i listy sezonów |
| `image.tmdb.org` | Notatka filmu/serialu ma kadry | Ścieżka obrazu TMDB | Wczytanie kadrów |
| `v3-cinemeta.strem.io` | Dodajesz lub odświeżasz notatkę o filmie lub serialu | Identyfikator IMDb notatki | Pobranie zwiastuna, kadrów, czasu trwania i listy sezonów serialu — bez klucza |
| `images.metahub.space` | Notatka o filmie lub serialu ma kadry | Identyfikator IMDb notatki | Wczytanie kadrów (teł) |
| `episodes.metahub.space` | Notatka o serialu ma kadry odcinków | Identyfikator IMDb serialu oraz numery sezonu i odcinka | Wczytanie kadrów odcinków |
| `i.ytimg.com` | Notatka o filmie wyświetla kadry zwiastuna | Identyfikator filmu zwiastuna | Wczytanie kadrów zwiastuna |
| `s4.anilist.co` | Notatka o anime ma baner | Ścieżka w CDN AniList | Wczytanie obrazu banera |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Otwierasz notatkę ze zwiastunem | Identyfikator zwiastuna | Osadzenie odtwarzacza zwiastuna |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Klikasz przycisk udostępniania | Podpis karty (tytuł, twoja ocena, link do źródła) | Otworzenie okna udostępniania wybranej sieci z wypełnionym wpisem — sam obraz karty pozostaje lokalny |

Żadne inne dane nigdy nie opuszczają Twojego vaultu. Plugin **nie ma telemetrii, nie ma analityki i nie ma mechanizmu automatycznej aktualizacji**. Klucze API (OMDb, Google Books, RAWG, Comic Vine, TMDB) są przechowywane tylko w lokalnych ustawieniach pluginu i wysyłane tylko do odpowiednich usług. Obrazy okładek są ładowane bezpośrednio z adresów URL zwracanych przez każde źródło.

---

## Schemat frontmattera

Plugin odczytuje i zapisuje do standardowego YAML frontmattera. Notatki są tworzone automatycznie, ale każde pole jest edytowalne. `Source` i `Source ID` pozwalają pluginowi odświeżyć metadane później.

### Movie

> **Właściwość okładki** — właściwość frontmatter przechowującą okładkę można zmienić w **Ustawienia → Library** (np. na `image`); istniejące notatki nadal działają.

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

### Series

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

> **Automatyczna aktualizacja seriali:** Uruchom `Odśwież metadane bieżącej notatki` (lub po prostu otwórz notatkę), a plugin zaktualizuje łączną liczbę odcinków w `Progress` (np., `25/42` na `25/50`) i liczbę `Season`, zachowując Twoją liczbę obejrzanych bez zmian.

> **Zwiastun, kadry i sezony:** Gdy klucz TMDB jest ustawiony, wtyczka automatycznie wypełnia `Trailer`, `Gallery`, `Runtime` i (w serialach) `Seasons` — `Runtime` to długość filmu w minutach lub liczba minut na odcinek w serialu. Nagłówek notatki pokazuje wtedy osadzony odtwarzacz, rząd kadrów i listę sezonów z liczbą odcinków, ocenami i przyciskami zwiastunów sezonów. Każde pole to zwykły frontmatter: edytuj lub usuń je, a wtyczka nie tknie twoich wartości przy następnym odświeżeniu. Każda nowa wersja wtyczki uruchamia też jedną rundę w tle, która uzupełnia nowo dodane pola — notatka po notatce, bez blokowania aplikacji.

### Book

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

### Anime

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

### Comic

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

## Linki grafu

Gatunki, twórcy i — w filmach i serialach — obsada są zapisywane jako linki we własnych właściwościach:

```yaml
Genre:
    - "[[Action]]"
    - "[[Sci-Fi]]"
Creator:
    - "[[Christopher Nolan]]"
Cast:
    - "[[Leonardo DiCaprio]]"
```

Dzięki temu notatka każdego gatunku, twórcy i aktora pokazuje wszystkie jego tytuły w linkach zwrotnych, a graf łączy przez nie notatki. Zwykłe nazwy — wpisane ręcznie lub pozostawione przez wcześniejszą wersję — stają się linkami przy każdej zmianie notatki; link z aliasem pozostaje bez zmian. `Przebuduj linki grafu` przekształca całą bibliotekę naraz. Właściwość `Related` z wcześniejszych wersji nie jest już używana i zostaje usunięta z notatek.

---

## Udostępnianie

Każda notatka treści otrzymuje przycisk **Udostępnij** w swoim nagłówku (lub uruchom `Udostępnij bieżącą notatkę`). Renderuje obraz karty — plakat, tytuł, rok, gatunek, ocenę IMDb/AniList i Twoją ocenę — który możesz opublikować gdziekolwiek:

- **Na urządzeniu mobilnym** — przycisk **Udostępnij…** otwiera natywny arkusz udostępniania Twojego urządzenia z bezpośrednio dołączonym obrazem karty, dzięki czemu możesz wysłać go prosto do dowolnej aplikacji.
- **X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, Pinterest** — otwiera edytor danej sieci z wstępnie wypełnionym podpisem (tytuł, Twoja ocena, link źródłowy i link do tego pluginu). Obraz karty jest jednocześnie kopiowany do schowka, więc wystarczy, że wkleisz go (Ctrl/Cmd+V) do posta.
- **Kopiuj obraz / Kopiuj tekst / Zapisz obraz** — skopiuj wyrenderowaną kartę lub podpis do schowka albo zapisz obraz w folderze załączników Twojego vaultu, aby dołączyć go ręcznie.

Udostępnianie odbywa się całkowicie lokalnie: karta jest rysowana w aplikacji na podstawie własnych metadanych i okładki notatki. Nic nie jest przesyłane — plugin otwiera tylko wybrany przez Ciebie adres URL edytora w Twojej przeglądarce.

---

## Synchronizacja AniList

Utrzymuj postęp swojego anime w synchronizacji z kontem [AniList](https://anilist.co).

**Konfiguracja** — w **Ustawienia → Library → Synchronizacja z AniList**:

1. Zarejestruj darmowego klienta API na [anilist.co/settings/developer](https://anilist.co/settings/developer), ustawiając redirect URL na `https://anilist.co/api/v2/oauth/pin`.
2. Wklej **Client ID**, kliknij **Połącz** i autoryzuj.
3. AniList pokaże Ci token dostępu — wklej go do pluginu. Kliknij **Testuj połączenie**, aby potwierdzić.

Następnie użyj poleceń:

- **Push current note to AniList** — wysyła postęp aktywnej notatki anime (obejrzane odcinki), status (oglądane / ukończone / planowane) i Twoją ocenę do Twojej listy AniList.
- **Pull progress from AniList** — pobiera Twoją listę anime z AniList i aktualizuje pasujące notatki. Pull jest **tylko do przodu**: nigdy nie cofa notatki, która lokalnie jest dalej lub już ukończona, i pozostawia Twoją osobistą `My Rating` nietkniętą.

Synchronizowane są tylko notatki z `Source: anilist` (dodane przez źródło anime AniList). Twój token jest przechowywany lokalnie w ustawieniach pluginu i wysyłany tylko do AniList.

---

## Polecenia

| Polecenie                            | Opis                                                                     |
| ------------------------------------ | ------------------------------------------------------------------------ |
| `Otwórz bibliotekę`                       | Otwórz kartę galerii Library.                                            |
| `Dodaj zawartość`                        | Przeszukaj źródło i utwórz notatkę treści (lub wpisz tytuł dla Manual). |
| `Przeszukaj bibliotekę`                | Wyszukiwanie przybliżone i otwieranie dowolnej notatki w Twojej bibliotece. |
| `Odśwież metadane bieżącej notatki`  | Ponowne pobranie metadanych dla aktywnej notatki; aktualizuje łączne liczby odcinków seriali. |
| `Przebuduj linki grafu`                | Zamienia `Genre`, `Creator` i `Cast` na linki we wszystkich notatkach biblioteki. |
| `Znajdź i usuń duplikaty`           | Przeskanuj wszystkie notatki według URL, wyświetl duplikaty i usuń wybrane. |
| `Udostępnij bieżącą notatkę`                 | Wyrenderuj notatkę jako obraz karty i udostępnij ją na X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky lub Pinterest. |
| `Wyślij bieżącą notatkę do AniList`       | Wyślij postęp, status i ocenę aktywnej notatki anime do Twojego konta AniList. |
| `Pobierz postęp z AniList`         | Pobierz swoją listę AniList i zaktualizuj pasujące notatki (tylko do przodu). |
| `Odśwież metadane wszystkich notatek` | Pobierz metadane wszystkich notatek w bibliotece — jedna po drugiej, w tle. |

---

## Wkład i wsparcie

- **Znalazłeś błąd?** Otwórz [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues).
- **Masz pomysł na funkcję?** Rozpocznij [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions).
- **Podoba Ci się plugin?** Rozważ gwiazdkę repozytorium, aby pokazać swoje wsparcie!

---

## Licencja

[MIT License](LICENSE) — można jej używać, modyfikować i udostępniać.

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
