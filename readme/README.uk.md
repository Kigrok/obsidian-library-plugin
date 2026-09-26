> [EN](../README.md) | [RU](README.ru.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md) | **UK**

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
  Фільми, серіали, книги, аніме, комікси, ігри та музика як нотатки Obsidian, показані галереєю карток з обкладинками.
  <br />
  <a href="https://community.obsidian.md/plugins/library">Каталог плагінів Obsidian</a>
</p>

## Можливості

- Знайдіть твір за назвою й отримайте нотатку з постером, роком, жанром, творцями, акторами та рейтингами.
- Бібліотека має вигляд карток з обкладинками, розбитих за категоріями й відсортованих за назвою, роком, рейтингом або датою.
- Позначайте серії серіалу або розділи книги й оцінюйте кожну; `Progress` і `My Rating` рахуються за ними.
- Нотатки про фільми й серіали показують трейлер, кадри, тривалість і список сезонів.
- Жанри, творці й актори зберігаються посиланнями, тому їхні нотатки збирають усі твори у зворотних посиланнях і на графі.
- Панель статистики показує вибрані вами топи й загальний час перегляду.
- Діліться твором у вигляді картки-зображення в X, Telegram, Reddit і ще шести мережах.
- Прогрес аніме синхронізується з AniList.
- Інтерфейс перекладено всіма мовами, які підтримує Obsidian. Цей README є [30 мовами](./).

## Швидкий старт

1. Встановіть **Library** через Налаштування → Сторонні додатки → Огляд або з [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).
2. У Налаштування → Library додайте категорію для кожного виду контенту: Фільми, Серіали, Книги, Комікси, Ігри, Музика, Аніме, Вручну.
3. Введіть API-ключі, потрібні вашим джерелам (див. нижче).
4. Відкрийте вкладку «Бібліотека» на бічній панелі, натисніть **+**, виберіть категорію й знайдіть твір. Якщо він уже є в бібліотеці, відкриється наявна нотатка.

Значення `Type` категорії (наприклад, `Movie`) визначає, які нотатки до неї належать, а тека визначає, куди потрапляють нові нотатки. Обидва параметри відкриває кнопка **Додатково** біля категорії.

## Джерела

| Категорія | Джерело | Ключ |
| --- | --- | --- |
| Фільми, серіали | OMDb | [Безкоштовний ключ](https://www.omdbapi.com/apikey.aspx) |
| Книги | Google Books + Open Library | Необов'язковий [ключ Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| Ігри | RAWG + Steam | [Безкоштовний ключ RAWG](https://rawg.io/apidocs); Steam без ключа |
| Музика | Deezer | Не потрібен |
| Аніме | AniList | Не потрібен |
| Комікси | Comic Vine | [Безкоштовний ключ](https://comicvine.gamespot.com/api/) |
| Усе інше | Вручну: поля заповнюєте ви | Не потрібен |

Трейлери, кадри, тривалість і списки сезонів надходять із Cinemeta без ключа. [Ключ TMDB](https://www.themoviedb.org/settings/api) додає оцінки сезонів і більше кадрів.

## Прогрес і оцінки

У шапці нотатки серіалу є список сезонів, і кожен сезон розгортається в список серій з назвами, якщо джерело їх знає. Позначте серію або весь сезон як переглянуті й поставте оцінку від 1 до 10. `Progress` рахує позначені серії, оцінка сезону дорівнює середньому за оціненими серіями, а `My Rating` дорівнює середньому за оціненими сезонами. Сезону без оцінених серій оцінку можна поставити напряму.

Аніме влаштоване так само, як один сезон без назв серій.

Розділи книги беруться зі змісту видання в Open Library. Якщо змісту немає, кнопка **Додати розділи** у шапці нотатки приймає кількість розділів або назви розділів по одній у рядку. Після цього `Progress` рахує розділи, а не сторінки, і прочитані сторінки переходять у ту саму частку розділів.

Нотатки зі старих версій зберігають прогрес. Поки ви нічого не позначили, перші серії в межах `Progress` показано переглянутими.

## Статистика

Панель угорі вкладки «Бібліотека» показує колонки, вибрані в Налаштування → Library → Статистика: три найкраще оцінені твори категорії, три найчастіші значення властивості (жанри, актори чи будь-яка інша) і години, витрачені на фільми, серіали та аніме. Під графіком раз на день з'являється одне порівняння, наприклад: «Аполлон-11» міг би долетіти до Місяця й назад 8 разів.

## Зв'язки в графі

`Genre`, `Creator` і `Cast` зберігають посилання на кшталт `[[Christopher Nolan]]`, тому нотатка жанру чи людини показує її твори у зворотних посиланнях. Імена, введені вручну, стають посиланнями при зміні нотатки, а `Перебудувати посилання графа` перетворює всю бібліотеку одразу.

## Поширення й AniList

Кнопка **Поділитися** у шапці нотатки малює картку з постером, назвою, роком, жанром, акторами, рейтингами та вашою оцінкою. На комп'ютері зображення копіюється в буфер обміну, а вибрана мережа відкривається з готовим підписом, тож лишається вставити зображення в допис. На телефоні зображення йде в системне меню «Поділитися». Зображення чи підпис також можна скопіювати, а зображення зберегти в сховище.

Щоб синхронізувати аніме, зареєструйте клієнт на [anilist.co/settings/developer](https://anilist.co/settings/developer) з redirect URL `https://anilist.co/api/v2/oauth/pin`. Вставте Client ID у Налаштування → Library → Синхронізація з AniList, натисніть **Підключити** і вставте токен, який покаже AniList. `Надіслати поточну нотатку до AniList` надсилає прогрес, статус і оцінку. `Завантажити прогрес з AniList` оновлює нотатки, ніколи не повертає прогрес назад і не чіпає `My Rating`. Синхронізуються лише нотатки з `Source: anilist`.

Ті самі нотатки синхронізуються з MyAnimeList. Створіть клієнт на [myanimelist.net/apiconfig](https://myanimelist.net/apiconfig) з redirect URL `http://localhost`, вставте його Client ID (і Client Secret, якщо він є) у Налаштування → Library → Синхронізація з MyAnimeList, натисніть **Підключити** і вставте адресу, яку відкриє браузер. Запис MyAnimeList для кожного тайтлу плагін знаходить через AniList і сам оновлює токен. `Надіслати поточну нотатку до MyAnimeList` і `Завантажити прогрес з MyAnimeList` працюють так само, як команди для AniList.

## Frontmatter

Кожна картка — звичайна нотатка, і все, що плагін про неї знає, зберігається у frontmatter:

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
      # ...ще 7 серій
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

Для серіалу `Runtime` означає тривалість однієї серії. Книги мають `ISBN` і зберігають розділи в `Chapters` з тими самими полями `title`, `watched` і `my_rating`; аніме має `Rating AniList` і `Status`. Властивість обкладинки можна перейменувати в налаштуваннях, наприклад на `image`.

Оновлення метаданих заповнює лише порожні поля, тому ваші правки лишаються. Ще воно оновлює загальну кількість серій у `Progress` і додає нові сезони та назви серій.

## Конфіденційність і мережа

Бібліотека складається зі звичайних нотаток і працює офлайн. Плагін виходить у мережу, коли ви шукаєте, оновлюєте, синхронізуєте чи ділитеся; коли ви відкриваєте нотатку бібліотеки, але не частіше ніж раз на 5 хвилин для кожної нотатки; і один раз після оновлення плагіна або зміни ключа, щоб заповнити нові поля. Телеметрії, аналітики й самооновлення немає. API-ключі зберігаються в локальних налаштуваннях плагіна й надсилаються лише до свого сервісу.

| Хост | Коли | Що надсилається |
| --- | --- | --- |
| `www.omdbapi.com` | Пошук фільмів і серіалів | Назва або IMDb id, ключ OMDb |
| `openlibrary.org` | Пошук книг; пошук розділів, коли ви додаєте або відкриваєте книгу | Назва й автор, ISBN або id твору |
| `covers.openlibrary.org` | Обкладинки книг | Id обкладинки |
| `www.googleapis.com` | Пошук книг | Назва, ключ Google Books |
| `api.rawg.io` | Пошук ігор | Назва, ключ RAWG |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | Пошук ігор і обкладинки | Назва або Steam app id |
| `api.deezer.com` | Пошук музики | Альбом або виконавець |
| `graphql.anilist.co` | Пошук аніме; синхронізація з AniList; id MyAnimeList для синхронізації | Назва; ваш токен, прогрес, статус і оцінка; id AniList |
| `anilist.co` | Ви натискаєте **Підключити** | Client ID, відкривається в браузері |
| `myanimelist.net` | Ви натискаєте **Підключити** для MyAnimeList; оновлення токена | Client ID і секрет, код авторизації, токен оновлення |
| `api.myanimelist.net` | Синхронізація з MyAnimeList | Ваш токен, прогрес, статус і оцінка |
| `s4.anilist.co` | Банери аніме | Шлях на CDN |
| `comicvine.gamespot.com` | Пошук коміксів | Назва, ключ Comic Vine |
| `v3-cinemeta.strem.io` | Додавання або оновлення фільму чи серіалу | IMDb id |
| `images.metahub.space`, `episodes.metahub.space` | Кадри | IMDb id, номери сезону й серії |
| `api.themoviedb.org`, `image.tmdb.org` | Додавання або оновлення фільму чи серіалу, якщо задано ключ TMDB | IMDb id і ключ TMDB; шлях до зображення |
| `i.ytimg.com` | Кадри трейлерів | Id відео |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Відкриття нотатки з трейлером | Id відео |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Ви натискаєте кнопку поширення | Підпис: назва, ваша оцінка, посилання на джерело. Зображення лишається на пристрої |

## Команди

| Команда | Що робить |
| --- | --- |
| `Відкрити бібліотеку` | Відкриває вкладку «Бібліотека» |
| `Додати вміст` | Шукає в джерелі й створює нотатку |
| `Шукати у вашій бібліотеці` | Знаходить і відкриває нотатку бібліотеки |
| `Оновити метадані для поточної нотатки` | Заново завантажує дані активної нотатки |
| `Оновити метадані всіх нотаток` | Завантажує дані всіх нотаток бібліотеки по одній |
| `Перебудувати посилання графа` | Перетворює `Genre`, `Creator` і `Cast` на посилання |
| `Знайти та видалити дублікати` | Показує нотатки з однаковим URL і видаляє вибрані |
| `Поділитися поточною нотаткою` | Відкриває картку для поширення |
| `Надіслати поточну нотатку до AniList` | Надсилає прогрес, статус і оцінку |
| `Завантажити прогрес з AniList` | Оновлює нотатки з вашого списку AniList |
| `Надіслати поточну нотатку до MyAnimeList` | Надсилає прогрес, статус і оцінку |
| `Завантажити прогрес з MyAnimeList` | Оновлює нотатки з вашого списку MyAnimeList |

## Підтримка

Про помилки пишіть в [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues), ідеї пропонуйте в [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions). Плагін поширюється за [ліцензією MIT](../LICENSE).

Якщо плагін вам знадобився, його можна підтримати:

| | Мережа | Адреса |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
