> [English](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

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
  Фильмы, сериалы, книги, аниме, комиксы, игры и музыка как заметки Obsidian, показанные галереей карточек с обложками.
  <br />
  <a href="https://community.obsidian.md/plugins/library">Каталог плагинов Obsidian</a>
</p>

## Возможности

- Найдите произведение по названию и получите заметку с постером, годом, жанром, создателями, актёрами и рейтингами.
- Библиотека выглядит как карточки с обложками, разбитые по категориям и отсортированные по названию, году, рейтингу или дате.
- Отмечайте серии сериала или главы книги и оценивайте каждую; `Progress` и `My Rating` считаются по ним.
- В заметках о фильмах и сериалах есть трейлер, кадры, длительность и список сезонов.
- Жанры, создатели и актёры хранятся ссылками, поэтому их заметки собирают все произведения в обратных ссылках и на графе.
- Панель статистики показывает выбранные вами топы и общее время просмотра.
- Делитесь произведением в виде картинки-карточки в X, Telegram, Reddit и ещё шести сетях.
- Прогресс аниме синхронизируется с AniList.
- Интерфейс переведён на все языки, которые поддерживает Obsidian. Этот README есть на [30 языках](./).

## Быстрый старт

1. Установите **Library** через Настройки → Сторонние плагины → Обзор или из [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).
2. В Настройки → Library добавьте категорию для каждого вида контента: Фильмы, Сериалы, Книги, Комиксы, Игры, Музыка, Аниме, Вручную.
3. Введите API-ключи, которые нужны вашим источникам (см. ниже).
4. Откройте вкладку «Библиотека» на боковой панели, нажмите **+**, выберите категорию и найдите произведение. Если оно уже есть в библиотеке, откроется существующая заметка.

Значение `Type` категории (например, `Movie`) определяет, какие заметки к ней относятся, а папка определяет, куда попадают новые заметки. Обе настройки открываются кнопкой **Дополнительно** у категории.

## Источники

| Категория | Источник | Ключ |
| --- | --- | --- |
| Фильмы, сериалы | OMDb | [Бесплатный ключ](https://www.omdbapi.com/apikey.aspx) |
| Книги | Google Books + Open Library | Необязательный [ключ Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| Игры | RAWG + Steam | [Бесплатный ключ RAWG](https://rawg.io/apidocs); Steam без ключа |
| Музыка | Deezer | Не нужен |
| Аниме | AniList | Не нужен |
| Комиксы | Comic Vine | [Бесплатный ключ](https://comicvine.gamespot.com/api/) |
| Всё остальное | Вручную: поля заполняете вы | Не нужен |

Трейлеры, кадры, длительность и списки сезонов приходят из Cinemeta без ключа. [Ключ TMDB](https://www.themoviedb.org/settings/api) добавляет оценки сезонов и больше кадров.

## Прогресс и оценки

В шапке заметки сериала есть список сезонов, и каждый сезон раскрывается в список серий с названиями, если источник их знает. Отметьте серию или весь сезон как просмотренные и поставьте оценку от 1 до 10. `Progress` считает отмеченные серии, оценка сезона равна среднему по оценённым сериям, а `My Rating` равна среднему по оценённым сезонам. Сезону без оценённых серий оценку можно поставить напрямую.

Аниме устроено так же, как один сезон без названий серий.

Главы книги берутся из оглавления издания в Open Library. Если оглавления нет, кнопка **Добавить главы** в шапке заметки принимает число глав или названия глав по одному в строке. После этого `Progress` считает главы, а не страницы, и прочитанные страницы переходят в ту же долю глав.

Заметки из старых версий сохраняют прогресс. Пока вы ничего не отметили, первые серии в пределах `Progress` показаны просмотренными.

## Статистика

Панель вверху вкладки «Библиотека» показывает колонки, выбранные в Настройки → Library → Статистика: три лучших по оценке произведения категории, три самых частых значения свойства (жанры, актёры или любое другое) и часы, потраченные на фильмы, сериалы и аниме. Под графиком раз в день появляется одно сравнение, например: «Аполлон-11» мог бы долететь до Луны и обратно 8 раз.

## Связи в графе

`Genre`, `Creator` и `Cast` хранят ссылки вроде `[[Christopher Nolan]]`, поэтому заметка жанра или человека показывает его произведения в обратных ссылках. Имена, введённые вручную, становятся ссылками при изменении заметки, а `Перестроить связи для графа` переводит всю библиотеку разом.

## Публикация и AniList

Кнопка **Поделиться** в шапке заметки рисует карточку с постером, названием, годом, жанром, актёрами, рейтингами и вашей оценкой. На компьютере картинка копируется в буфер обмена, а выбранная сеть открывается с готовой подписью, так что остаётся вставить картинку в пост. На телефоне картинка уходит в системное меню «Поделиться». Картинку или подпись также можно скопировать, а картинку сохранить в хранилище.

Для синхронизации аниме зарегистрируйте клиент на [anilist.co/settings/developer](https://anilist.co/settings/developer) с redirect URL `https://anilist.co/api/v2/oauth/pin`. Вставьте Client ID в Настройки → Library → Синхронизация с AniList, нажмите **Подключить** и вставьте токен, который покажет AniList. `Отправить текущую заметку в AniList` отправляет прогресс, статус и оценку. `Загрузить прогресс из AniList` обновляет заметки, никогда не откатывает прогресс назад и не трогает `My Rating`. Синхронизируются только заметки с `Source: anilist`.

Те же заметки синхронизируются с MyAnimeList. Создайте клиент на [myanimelist.net/apiconfig](https://myanimelist.net/apiconfig) с redirect URL `http://localhost`, вставьте его Client ID (и Client Secret, если он есть) в Настройки → Library → Синхронизация с MyAnimeList, нажмите **Подключить** и вставьте адрес, который откроет браузер. Запись MyAnimeList для каждого тайтла плагин находит через AniList и сам обновляет токен. `Отправить текущую заметку в MyAnimeList` и `Загрузить прогресс из MyAnimeList` работают так же, как команды для AniList.

## Фронтматтер

Карточка — обычная заметка, и всё, что плагин о ней знает, хранится во фронтматтере:

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
      # ...ещё 7 серий
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

У сериала `Runtime` означает длительность одной серии. У книг есть `ISBN`, а главы хранятся в `Chapters` с теми же полями `title`, `watched` и `my_rating`; у аниме есть `Rating AniList` и `Status`. Свойство обложки можно переименовать в настройках, например в `image`.

Обновление метаданных заполняет только пустые поля, поэтому ваши правки сохраняются. Ещё оно обновляет общее число серий в `Progress` и добавляет новые сезоны и названия серий.

## Конфиденциальность и сеть

Библиотека состоит из обычных заметок и работает офлайн. Плагин выходит в сеть, когда вы ищете, обновляете, синхронизируете или делитесь; когда вы открываете заметку библиотеки, но не чаще раза в 5 минут на заметку; и один раз после обновления плагина или смены ключа, чтобы заполнить новые поля. Телеметрии, аналитики и самообновления нет. API-ключи хранятся в локальных настройках плагина и уходят только в свой сервис.

| Хост | Когда | Что отправляется |
| --- | --- | --- |
| `www.omdbapi.com` | Поиск фильмов и сериалов | Название или IMDb id, ключ OMDb |
| `openlibrary.org` | Поиск книг; поиск глав, когда вы добавляете или открываете книгу | Название и автор, ISBN или id произведения |
| `covers.openlibrary.org` | Обложки книг | Id обложки |
| `www.googleapis.com` | Поиск книг | Название, ключ Google Books |
| `api.rawg.io` | Поиск игр | Название, ключ RAWG |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | Поиск игр и обложки | Название или Steam app id |
| `api.deezer.com` | Поиск музыки | Альбом или исполнитель |
| `graphql.anilist.co` | Поиск аниме; синхронизация с AniList; id MyAnimeList для синхронизации | Название; ваш токен, прогресс, статус и оценка; id AniList |
| `anilist.co` | Вы нажимаете **Подключить** | Client ID, открывается в браузере |
| `myanimelist.net` | Вы нажимаете **Подключить** для MyAnimeList; обновление токена | Client ID и секрет, код авторизации, токен обновления |
| `api.myanimelist.net` | Синхронизация с MyAnimeList | Ваш токен, прогресс, статус и оценка |
| `s4.anilist.co` | Баннеры аниме | Путь на CDN |
| `comicvine.gamespot.com` | Поиск комиксов | Название, ключ Comic Vine |
| `v3-cinemeta.strem.io` | Добавление или обновление фильма или сериала | IMDb id |
| `images.metahub.space`, `episodes.metahub.space` | Кадры | IMDb id, номера сезона и серии |
| `api.themoviedb.org`, `image.tmdb.org` | Добавление или обновление фильма или сериала, если задан ключ TMDB | IMDb id и ключ TMDB; путь к картинке |
| `i.ytimg.com` | Кадры трейлеров | Id видео |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Открытие заметки с трейлером | Id видео |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Вы нажимаете кнопку публикации | Подпись: название, ваша оценка, ссылка на источник. Картинка остаётся на устройстве |

## Команды

| Команда | Что делает |
| --- | --- |
| `Открыть библиотеку` | Открывает вкладку «Библиотека» |
| `Добавить контент` | Ищет в источнике и создаёт заметку |
| `Поиск по библиотеке` | Находит и открывает заметку библиотеки |
| `Обновить метаданные текущей заметки` | Заново загружает данные активной заметки |
| `Обновить метаданные всех заметок` | Загружает данные всех заметок библиотеки по одной |
| `Перестроить связи для графа` | Превращает `Genre`, `Creator` и `Cast` в ссылки |
| `Найти и удалить дубли` | Показывает заметки с одинаковым URL и удаляет выбранные |
| `Поделиться текущей заметкой` | Открывает карточку для публикации |
| `Отправить текущую заметку в AniList` | Отправляет прогресс, статус и оценку |
| `Загрузить прогресс из AniList` | Обновляет заметки из вашего списка AniList |
| `Отправить текущую заметку в MyAnimeList` | Отправляет прогресс, статус и оценку |
| `Загрузить прогресс из MyAnimeList` | Обновляет заметки из вашего списка MyAnimeList |

## Поддержка

Об ошибках пишите в [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues), идеи предлагайте в [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions). Плагин распространяется по [лицензии MIT](../LICENSE).

Если плагин вам пригодился, его можно поддержать:

| | Сеть | Адрес |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
