> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | **فارسی**

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
  فیلم‌ها، سریال‌ها، کتاب‌ها، انیمه، کمیک، بازی و موسیقی به‌صورت یادداشت در Obsidian، به شکل گالری کارت‌های جلد.
  <br />
  <a href="https://community.obsidian.md/plugins/library">فهرست افزونه‌های Obsidian</a>
</p>

## ویژگی‌ها

- عنوانی را جست‌وجو کنید و یادداشتی با پوستر، سال، ژانر، سازندگان، بازیگران و امتیازها بگیرید.
- کتابخانه را به شکل کارت‌های جلد ببینید، گروه‌بندی‌شده بر اساس دسته و مرتب‌شده بر اساس نام، سال، امتیاز یا تاریخ.
- قسمت‌های سریال یا فصل‌های کتاب را تیک بزنید و به هر کدام امتیاز بدهید؛ `Progress` و `My Rating` از روی آن‌ها حساب می‌شوند.
- یادداشت‌های فیلم و سریال تریلر، نماها، مدت و فهرست فصل‌ها را نشان می‌دهند.
- ژانرها، سازندگان و بازیگران پیوند هستند، پس یادداشت‌هایشان هر عنوان را در پشت‌وندها و نمای نمودار جمع می‌کنند.
- پنل آمار فهرست‌های برتری را که انتخاب می‌کنید و کل زمان تماشای شما را نشان می‌دهد.
- یک عنوان را به شکل تصویر کارت در X، Telegram، Reddit و شش شبکهٔ دیگر هم‌رسانی کنید.
- پیشرفت انیمه را با AniList همگام کنید.
- رابط کاربری به همهٔ زبان‌هایی که Obsidian پشتیبانی می‌کند ترجمه شده است و این README به [30 زبان](./).

## شروع سریع

1. **Library** را از تنظیمات ← افزونه‌های شخص‌ثالث ← مرور یا از [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases) نصب کنید.
2. در تنظیمات ← Library برای هر نوع محتوا یک دسته اضافه کنید: فیلم‌ها، سریال‌ها، کتاب‌ها، کمیک‌ها، بازی‌ها، موسیقی، انیمه، دستی.
3. کلیدهای API لازم برای منبع‌هایتان را وارد کنید (پایین‌تر را ببینید).
4. زبانهٔ «کتابخانه» را از روبان باز کنید، **+** را بزنید، دسته‌ای انتخاب کنید و عنوانی را جست‌وجو کنید. عنوانی که از قبل در کتابخانه هست، یادداشت موجودش را باز می‌کند.

مقدار `Type` دسته (مثلاً `Movie`) تعیین می‌کند کدام یادداشت‌ها به آن تعلق دارند، و پوشهٔ آن تعیین می‌کند یادداشت‌های تازه کجا ذخیره شوند. هر دو زیر **پیشرفته** در تنظیمات دسته هستند.

## منبع‌ها

| دسته | منبع | کلید |
| --- | --- | --- |
| فیلم، سریال | OMDb | [کلید رایگان](https://www.omdbapi.com/apikey.aspx) |
| کتاب | Google Books + Open Library | [کلید Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) اختیاری |
| بازی | RAWG + Steam | [کلید رایگان RAWG](https://rawg.io/apidocs)؛ Steam کلید نمی‌خواهد |
| موسیقی | Deezer | لازم نیست |
| انیمه | AniList | لازم نیست |
| کمیک | Comic Vine | [کلید رایگان](https://comicvine.gamespot.com/api/) |
| هر چیز دیگر | دستی: فیلدها را خودتان پر می‌کنید | لازم نیست |

تریلرها، نماها، مدت و فهرست فصل‌ها بدون کلید از Cinemeta می‌آیند. [کلید TMDB](https://www.themoviedb.org/settings/api) امتیاز فصل‌ها و نماهای بیشتری اضافه می‌کند.

## پیشرفت و امتیازها

سربرگ یادداشت سریال فصل‌ها را فهرست می‌کند و هر فصل با باز شدن، قسمت‌هایش را نشان می‌دهد، با عنوان‌هایشان اگر منبع آن‌ها را داشته باشد. یک قسمت یا کل فصل را دیده‌شده علامت بزنید و از 1 تا 10 امتیاز دهید. `Progress` قسمت‌های علامت‌خورده را می‌شمارد، امتیاز هر فصل میانگین قسمت‌های امتیازدار آن است و `My Rating` میانگین فصل‌های امتیازدار است. فصلی که قسمت امتیازدار ندارد، امتیاز جداگانهٔ خودش را می‌گیرد.

انیمه هم همین‌طور کار می‌کند، به شکل یک فصل بدون عنوان قسمت‌ها.

فصل‌های کتاب از فهرست مطالب یکی از ویرایش‌های آن در Open Library می‌آیند. اگر فهرستی پیدا نشود، دکمهٔ **افزودن فصل‌ها** در سربرگ یادداشت تعداد فصل‌ها یا در هر خط یک عنوان را می‌پذیرد. از آن پس `Progress` به‌جای صفحه‌ها فصل‌ها را می‌شمارد و صفحه‌های خوانده‌شده به همان نسبت به فصل‌ها منتقل می‌شوند.

یادداشت‌های نسخه‌های قدیمی پیشرفتشان را نگه می‌دارند. تا وقتی چیزی را علامت نزده‌اید، قسمت‌های اول تا عدد `Progress` دیده‌شده نمایش داده می‌شوند.

## آمار

پنل بالای زبانهٔ «کتابخانه» ستون‌هایی را نشان می‌دهد که در تنظیمات ← Library ← آمار انتخاب می‌کنید: سه عنوان با بالاترین امتیاز یک دسته، سه مقدار پرتکرار یک ویژگی (ژانرها، بازیگران یا هر ویژگی دیگر) و ساعت‌هایی که صرف فیلم، سریال و انیمه شده است. زیر نمودار هر روز یک مقایسه نمایش داده می‌شود، مثلاً: آپولو 11 می‌توانست 8 بار تا ماه برود و برگردد.

## پیوندهای گراف

`Genre`، `Creator` و `Cast` پیوندهایی مثل `[[Christopher Nolan]]` نگه می‌دارند، پس یادداشت یک ژانر یا شخص عنوان‌هایش را در پشت‌وندها فهرست می‌کند. نام‌هایی که دستی نوشته شده‌اند با تغییر یادداشت به پیوند تبدیل می‌شوند و `بازسازی پیوندهای گراف` کل کتابخانه را تبدیل می‌کند.

## هم‌رسانی و AniList

دکمهٔ **اشتراک‌گذاری** در سربرگ یادداشت کارتی با پوستر، عنوان، سال، ژانر، بازیگران، امتیازها و امتیاز شما می‌کشد. روی رایانه تصویر به کلیپ‌بورد می‌رود و شبکه‌ای که انتخاب کرده‌اید با یک متن آماده باز می‌شود، پس فقط تصویر را در پست جای‌گذاری می‌کنید. روی تلفن تصویر به منوی اشتراک‌گذاری سیستم می‌رود. همچنین می‌توانید تصویر یا متن را کپی کنید یا تصویر را ذخیره کنید.

برای همگام‌سازی انیمه، یک کلاینت در [anilist.co/settings/developer](https://anilist.co/settings/developer) با نشانی بازگشت `https://anilist.co/api/v2/oauth/pin` ثبت کنید. Client ID را در تنظیمات ← Library ← همگام‌سازی AniList جای‌گذاری کنید، روی **اتصال** بزنید و توکنی را که AniList نشان می‌دهد جای‌گذاری کنید. `ارسال یادداشت فعلی به AniList` پیشرفت، وضعیت و امتیاز را می‌فرستد. `دریافت پیشرفت از AniList` یادداشت‌هایتان را به‌روز می‌کند، هرگز پیشرفت را عقب نمی‌برد و به `My Rating` دست نمی‌زند. فقط یادداشت‌های دارای `Source: anilist` همگام می‌شوند.

## Frontmatter

هر کارت یک یادداشت است و هر چه افزونه دربارهٔ آن می‌داند در frontmatter است:

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
      # ...7 قسمت دیگر
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

در سریال، `Runtime` مدت یک قسمت است. کتاب‌ها `ISBN` هم دارند و فصل‌ها را با همان فیلدهای `title`، `watched` و `my_rating` در `Chapters` نگه می‌دارند؛ انیمه `Rating AniList` و `Status` دارد. نام ویژگی جلد را می‌توان در تنظیمات تغییر داد، مثلاً به `image`.

به‌روزرسانی فقط فیلدهای خالی را پر می‌کند، پس مقدارهایی که ویرایش می‌کنید می‌مانند. همچنین تعداد کل قسمت‌ها را در `Progress` به‌روز می‌کند و فصل‌ها و عنوان‌های تازهٔ قسمت‌ها را اضافه می‌کند.

## حریم خصوصی و استفاده از شبکه

کتابخانهٔ شما یادداشت‌های ساده است و آفلاین کار می‌کند. افزونه وقتی به شبکه وصل می‌شود که جست‌وجو، به‌روزرسانی، همگام‌سازی یا هم‌رسانی می‌کنید؛ وقتی یادداشتی از کتابخانه را باز می‌کنید، حداکثر هر 5 دقیقه یک بار برای هر یادداشت؛ و یک بار پس از به‌روزرسانی یا تغییر کلید، برای پر کردن فیلدهای تازه. تله‌متری، تحلیل و به‌روزرسانی خودکار ندارد. کلیدهای API در تنظیمات محلی افزونه می‌مانند و فقط به سرویس خودشان فرستاده می‌شوند.

| میزبان | چه زمانی | چه چیزی فرستاده می‌شود |
| --- | --- | --- |
| `www.omdbapi.com` | جست‌وجوی فیلم و سریال | عنوان یا شناسهٔ IMDb، کلید OMDb |
| `openlibrary.org` | جست‌وجوی کتاب؛ یافتن فصل‌ها هنگام افزودن یا باز کردن کتاب | عنوان و نویسنده، ISBN یا شناسهٔ اثر |
| `covers.openlibrary.org` | جلد کتاب‌ها | شناسهٔ جلد |
| `www.googleapis.com` | جست‌وجوی کتاب | عنوان، کلید Google Books |
| `api.rawg.io` | جست‌وجوی بازی | عنوان، کلید RAWG |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | جست‌وجوی بازی و جلدها | عنوان یا شناسهٔ برنامهٔ Steam |
| `api.deezer.com` | جست‌وجوی موسیقی | آلبوم یا هنرمند |
| `graphql.anilist.co` | جست‌وجوی انیمه؛ همگام‌سازی AniList | عنوان؛ توکن شما، پیشرفت، وضعیت و امتیاز |
| `anilist.co` | روی **اتصال** می‌زنید | Client ID، در مرورگر باز می‌شود |
| `s4.anilist.co` | بنرهای انیمه | مسیر CDN |
| `comicvine.gamespot.com` | جست‌وجوی کمیک | عنوان، کلید Comic Vine |
| `v3-cinemeta.strem.io` | افزودن یا به‌روزرسانی فیلم یا سریال | شناسهٔ IMDb |
| `images.metahub.space`, `episodes.metahub.space` | نماها | شناسهٔ IMDb، شمارهٔ فصل و قسمت |
| `api.themoviedb.org`, `image.tmdb.org` | افزودن یا به‌روزرسانی فیلم یا سریال، اگر کلید TMDB تنظیم شده باشد | شناسهٔ IMDb و کلید TMDB؛ مسیر تصویر |
| `i.ytimg.com` | نماهای تریلر | شناسهٔ ویدیو |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | باز کردن یادداشتی که تریلر دارد | شناسهٔ ویدیو |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | روی یک دکمهٔ هم‌رسانی می‌زنید | متن: عنوان، امتیاز شما، پیوند منبع. تصویر روی دستگاه شما می‌ماند |

## فرمان‌ها

| فرمان | چه می‌کند |
| --- | --- |
| `باز کردن کتابخانه` | زبانهٔ «کتابخانه» را باز می‌کند |
| `افزودن محتوا` | در یک منبع جست‌وجو می‌کند و یادداشت می‌سازد |
| `در کتابخانه خود جستجو کنید` | یادداشتی از کتابخانه را پیدا و باز می‌کند |
| `بروزرسانی فراداده برای یادداشت فعلی` | داده‌های یادداشت فعال را دوباره می‌گیرد |
| `بروزرسانی فراداده برای همه یادداشت‌ها` | داده‌های همهٔ یادداشت‌های کتابخانه را یکی‌یکی دوباره می‌گیرد |
| `بازسازی پیوندهای گراف` | `Genre`، `Creator` و `Cast` را به پیوند تبدیل می‌کند |
| `یافتن و حذف تکراری‌ها` | یادداشت‌هایی با URL یکسان را فهرست و موارد انتخابی را حذف می‌کند |
| `اشتراک‌گذاری یادداشت فعلی` | کارت هم‌رسانی را باز می‌کند |
| `ارسال یادداشت فعلی به AniList` | پیشرفت، وضعیت و امتیاز را می‌فرستد |
| `دریافت پیشرفت از AniList` | یادداشت‌ها را از فهرست AniList شما به‌روز می‌کند |

## پشتیبانی

اشکال‌ها را در [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues) و ایده‌ها را در [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions) مطرح کنید. این افزونه تحت [مجوز MIT](../LICENSE) منتشر شده است.

اگر افزونه به کارتان آمده، می‌توانید از آن حمایت کنید:

| | شبکه | نشانی |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
