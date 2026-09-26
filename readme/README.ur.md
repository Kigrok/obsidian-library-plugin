> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

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
  فلمیں، سیریز، کتابیں، اینیمے، کامکس، گیمز اور موسیقی Obsidian میں نوٹس کی صورت میں، سرورق کارڈز کی گیلری کے طور پر۔
  <br />
  <a href="https://community.obsidian.md/plugins/library">Obsidian پلگ ان ڈائرکٹری</a>
</p>

## خصوصیات

- کوئی عنوان تلاش کریں اور پوسٹر، سال، صنف، تخلیق کاروں، اداکاروں اور ریٹنگز سے بھرا ہوا نوٹ حاصل کریں۔
- لائبریری کو سرورق کارڈز کی صورت میں دیکھیں، جو زمرے کے لحاظ سے گروپ اور نام، سال، ریٹنگ یا تاریخ کے لحاظ سے ترتیب دیے گئے ہیں۔
- سیریز کی اقساط یا کتاب کے ابواب پر نشان لگائیں اور ہر ایک کو ریٹنگ دیں؛ `Progress` اور `My Rating` انہی سے حساب ہوتے ہیں۔
- فلموں اور سیریز کے نوٹس میں ٹریلر، مناظر، دورانیہ اور سیزنز کی فہرست ہوتی ہے۔
- اصناف، تخلیق کار اور اداکار لنکس ہیں، اس لیے ان کے نوٹس ہر عنوان کو بیک لنکس اور گراف میں جمع کرتے ہیں۔
- اعداد و شمار کا پینل آپ کی منتخب کردہ فہرستیں اور کل دیکھنے کا وقت دکھاتا ہے۔
- کسی عنوان کو کارڈ تصویر کے طور پر X، Telegram، Reddit اور چھ دیگر نیٹ ورکس پر شیئر کریں۔
- اینیمے کی پیش رفت AniList کے ساتھ ہم آہنگ کریں۔
- انٹرفیس Obsidian کی ہر معاون زبان میں ترجمہ شدہ ہے، اور یہ README [30 زبانوں](./) میں دستیاب ہے۔

## فوری آغاز

1. **Library** کو Settings → Community plugins → Browse سے یا [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases) سے انسٹال کریں۔
2. Settings → Library میں ہر قسم کے مواد کے لیے ایک زمرہ شامل کریں: فلمیں، سیریز، کتابیں، کامکس، گیمز، موسیقی، انیمے، دستی۔
3. اپنے ذرائع کو درکار API کلیدیں درج کریں (نیچے دیکھیں)۔
4. ربن سے «لائبریری» ٹیب کھولیں، **+** دبائیں، زمرہ منتخب کریں اور عنوان تلاش کریں۔ جو عنوان پہلے سے لائبریری میں ہے، وہ اپنا موجودہ نوٹ کھولتا ہے۔

زمرے کی `Type` قدر (مثلاً `Movie`) طے کرتی ہے کہ کون سے نوٹس اس سے تعلق رکھتے ہیں، اور اس کا فولڈر طے کرتا ہے کہ نئے نوٹس کہاں جائیں۔ دونوں زمرے کی ترتیبات میں **اعلیٰ درجہ** کے تحت ہیں۔

## ذرائع

| زمرہ | ذریعہ | کلید |
| --- | --- | --- |
| فلمیں، سیریز | OMDb | [مفت کلید](https://www.omdbapi.com/apikey.aspx) |
| کتابیں | Google Books + Open Library | اختیاری [Google Books کلید](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| گیمز | RAWG + Steam | [مفت RAWG کلید](https://rawg.io/apidocs)؛ Steam کو ضرورت نہیں |
| موسیقی | Deezer | ضرورت نہیں |
| اینیمے | AniList | ضرورت نہیں |
| کامکس | Comic Vine | [مفت کلید](https://comicvine.gamespot.com/api/) |
| باقی سب کچھ | دستی: فیلڈز آپ خود بھرتے ہیں | ضرورت نہیں |

ٹریلرز، مناظر، دورانیہ اور سیزنز کی فہرستیں بغیر کلید کے Cinemeta سے آتی ہیں۔ [TMDB کلید](https://www.themoviedb.org/settings/api) سیزنز کی ریٹنگز اور مزید مناظر شامل کرتی ہے۔

## پیش رفت اور ریٹنگز

سیریز کے نوٹ کا ہیڈر سیزنز کی فہرست دکھاتا ہے، اور ہر سیزن کھل کر اپنی اقساط دکھاتا ہے، اگر ذریعے کے پاس ہوں تو عنوانات کے ساتھ۔ کسی قسط یا پورے سیزن کو دیکھا ہوا نشان زد کریں اور 1 سے 10 تک ریٹنگ دیں۔ `Progress` نشان زد اقساط گنتا ہے، سیزن کی ریٹنگ اس کی ریٹ شدہ اقساط کا اوسط ہے، اور `My Rating` ریٹ شدہ سیزنز کا اوسط ہے۔ جس سیزن کی کوئی قسط ریٹ نہ ہو، اسے الگ ریٹنگ دی جا سکتی ہے۔

اینیمے بھی اسی طرح کام کرتا ہے، اقساط کے عنوانات کے بغیر ایک سیزن کی صورت میں۔

کتاب کے ابواب Open Library پر کسی ایڈیشن کی فہرستِ مضامین سے آتے ہیں۔ اگر فہرست نہ ملے تو نوٹ کے ہیڈر میں **ابواب شامل کریں** ابواب کی تعداد یا ہر سطر میں ایک عنوان قبول کرتا ہے۔ اس کے بعد `Progress` صفحات کے بجائے ابواب گنتا ہے، اور پڑھے گئے صفحات ابواب کے اسی تناسب میں منتقل ہو جاتے ہیں۔

پرانے ورژنز کے نوٹس اپنی پیش رفت برقرار رکھتے ہیں۔ جب تک آپ کچھ نشان زد نہ کریں، `Progress` کی تعداد تک پہلی اقساط دیکھی ہوئی دکھائی دیتی ہیں۔

## اعداد و شمار

«لائبریری» ٹیب کے اوپر کا پینل وہ کالم دکھاتا ہے جو آپ Settings → Library → اعداد و شمار میں منتخب کرتے ہیں: کسی زمرے کے تین بہترین ریٹنگ والے عنوانات، کسی خاصیت کی تین سب سے عام قدریں (اصناف، اداکار یا کوئی اور)، اور فلموں، سیریز اور اینیمے پر صرف کیے گئے گھنٹے۔ چارٹ کے نیچے روزانہ ایک موازنہ دکھایا جاتا ہے، مثلاً: اپالو 11 8 بار چاند تک جا کر واپس آ سکتا تھا۔

## گراف روابط

`Genre`، `Creator` اور `Cast` میں `[[Christopher Nolan]]` جیسے لنکس ہوتے ہیں، اس لیے کسی صنف یا شخص کا نوٹ اس کے عنوانات بیک لنکس میں دکھاتا ہے۔ ہاتھ سے لکھے نام نوٹ بدلنے پر لنکس بن جاتے ہیں، اور `گراف لنکس دوبارہ بنائیں` پوری لائبریری کو تبدیل کر دیتا ہے۔

## شیئرنگ اور AniList

نوٹ کے ہیڈر میں **شیئر کریں** پوسٹر، عنوان، سال، صنف، اداکاروں، ریٹنگز اور آپ کے اسکور کے ساتھ ایک کارڈ بناتا ہے۔ ڈیسک ٹاپ پر تصویر کلپ بورڈ میں چلی جاتی ہے اور آپ کا منتخب نیٹ ورک ایک تیار کیپشن کے ساتھ کھلتا ہے، بس تصویر پوسٹ میں پیسٹ کریں۔ موبائل پر تصویر سسٹم کے شیئر مینو میں جاتی ہے۔ آپ تصویر یا کیپشن کاپی بھی کر سکتے ہیں، یا تصویر محفوظ کر سکتے ہیں۔

اینیمے ہم آہنگ کرنے کے لیے [anilist.co/settings/developer](https://anilist.co/settings/developer) پر ری ڈائریکٹ URL `https://anilist.co/api/v2/oauth/pin` کے ساتھ ایک کلائنٹ رجسٹر کریں۔ Client ID کو Settings → Library → AniList سنک میں پیسٹ کریں، **جوڑیں** پر کلک کریں اور AniList کا دکھایا ہوا ٹوکن پیسٹ کریں۔ `موجودہ نوٹ AniList پر بھیجیں` پیش رفت، حیثیت اور اسکور بھیجتا ہے۔ `AniList سے پیش رفت حاصل کریں` آپ کے نوٹس اپ ڈیٹ کرتا ہے، پیش رفت کبھی پیچھے نہیں کرتا اور `My Rating` کو نہیں چھیڑتا۔ صرف `Source: anilist` والے نوٹس ہم آہنگ ہوتے ہیں۔

## Frontmatter

ہر کارڈ ایک نوٹ ہے، اور پلگ ان اس کے بارے میں جو کچھ جانتا ہے وہ frontmatter میں ہے:

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
      # ...مزید 7 اقساط
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

سیریز میں `Runtime` ایک قسط کا دورانیہ ہے۔ کتابوں میں `ISBN` بھی ہوتا ہے اور ابواب `Chapters` میں انہی فیلڈز `title`، `watched` اور `my_rating` کے ساتھ رکھے جاتے ہیں؛ اینیمے میں `Rating AniList` اور `Status` ہوتے ہیں۔ سرورق والی خاصیت کا نام ترتیبات میں بدلا جا سکتا ہے، مثلاً `image`۔

ریفریش صرف خالی فیلڈز بھرتا ہے، اس لیے آپ کی ترمیم شدہ قدریں برقرار رہتی ہیں۔ یہ `Progress` میں اقساط کی کل تعداد بھی اپ ڈیٹ کرتا ہے اور نئے سیزنز اور اقساط کے عنوانات شامل کرتا ہے۔

## رازداری اور نیٹ ورک کا استعمال

آپ کی لائبریری سادہ نوٹس ہے اور آف لائن کام کرتی ہے۔ پلگ ان اس وقت آن لائن جاتا ہے جب آپ تلاش، ریفریش، ہم آہنگی یا شیئر کرتے ہیں؛ جب آپ لائبریری کا کوئی نوٹ کھولتے ہیں، ہر نوٹ کے لیے زیادہ سے زیادہ ہر 5 منٹ میں ایک بار؛ اور اپ ڈیٹ یا کلید بدلنے کے بعد ایک بار، نئے فیلڈز بھرنے کے لیے۔ اس میں ٹیلی میٹری، اینالیٹکس یا خودکار اپ ڈیٹ نہیں ہے۔ API کلیدیں پلگ ان کی مقامی ترتیبات میں رہتی ہیں اور صرف اپنی سروس کو بھیجی جاتی ہیں۔

| ہوسٹ | کب | کیا بھیجا جاتا ہے |
| --- | --- | --- |
| `www.omdbapi.com` | فلم اور سیریز کی تلاش | عنوان یا IMDb id، OMDb کلید |
| `openlibrary.org` | کتاب کی تلاش؛ کتاب شامل کرنے یا کھولنے پر ابواب کی تلاش | عنوان اور مصنف، ISBN یا کام کی id |
| `covers.openlibrary.org` | کتابوں کے سرورق | سرورق کی id |
| `www.googleapis.com` | کتاب کی تلاش | عنوان، Google Books کلید |
| `api.rawg.io` | گیم کی تلاش | عنوان، RAWG کلید |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | گیم کی تلاش اور سرورق | عنوان یا Steam ایپ id |
| `api.deezer.com` | موسیقی کی تلاش | البم یا فنکار |
| `graphql.anilist.co` | اینیمے کی تلاش؛ AniList ہم آہنگی | عنوان؛ آپ کا ٹوکن، پیش رفت، حیثیت اور اسکور |
| `anilist.co` | آپ **جوڑیں** پر کلک کرتے ہیں | Client ID، آپ کے براؤزر میں کھلتا ہے |
| `s4.anilist.co` | اینیمے بینرز | CDN راستہ |
| `comicvine.gamespot.com` | کامکس کی تلاش | عنوان، Comic Vine کلید |
| `v3-cinemeta.strem.io` | فلم یا سیریز شامل کرنا یا ریفریش کرنا | IMDb id |
| `images.metahub.space`, `episodes.metahub.space` | مناظر | IMDb id، سیزن اور قسط کے نمبر |
| `api.themoviedb.org`, `image.tmdb.org` | اگر TMDB کلید سیٹ ہو تو فلم یا سیریز شامل کرنا یا ریفریش کرنا | IMDb id اور TMDB کلید؛ تصویر کا راستہ |
| `i.ytimg.com` | ٹریلر کے مناظر | ویڈیو id |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | ٹریلر والا نوٹ کھولنا | ویڈیو id |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | آپ شیئر بٹن پر کلک کرتے ہیں | کیپشن: عنوان، آپ کا اسکور، ذریعے کا لنک۔ تصویر آپ کے آلے پر رہتی ہے |

## کمانڈز

| کمانڈ | کیا کرتی ہے |
| --- | --- |
| `لائبریری کھولیں` | «لائبریری» ٹیب کھولتی ہے |
| `مواد شامل کریں` | کسی ذریعے میں تلاش کر کے نوٹ بناتی ہے |
| `اپنی لائبریری میں تلاش کریں` | لائبریری کا نوٹ ڈھونڈ کر کھولتی ہے |
| `موجودہ نوٹ کا میٹا ڈیٹا ریفریش کریں` | فعال نوٹ کا ڈیٹا دوبارہ لاتی ہے |
| `تمام نوٹس کا میٹا ڈیٹا ریفریش کریں` | لائبریری کے ہر نوٹ کا ڈیٹا ایک ایک کر کے دوبارہ لاتی ہے |
| `گراف لنکس دوبارہ بنائیں` | `Genre`، `Creator` اور `Cast` کو لنکس میں بدلتی ہے |
| `ڈپلیکیٹ تلاش اور ہٹائیں` | ایک جیسے URL والے نوٹس دکھاتی ہے اور منتخب کردہ ہٹاتی ہے |
| `موجودہ نوٹ شیئر کریں` | شیئر کارڈ کھولتی ہے |
| `موجودہ نوٹ AniList پر بھیجیں` | پیش رفت، حیثیت اور اسکور بھیجتی ہے |
| `AniList سے پیش رفت حاصل کریں` | آپ کی AniList فہرست سے نوٹس اپ ڈیٹ کرتی ہے |

## معاونت

خرابیوں کی اطلاع [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues) میں اور خیالات [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions) میں دیں۔ پلگ ان [MIT لائسنس](../LICENSE) کے تحت ہے۔

اگر پلگ ان آپ کے کام آیا ہو تو آپ اس کی مدد کر سکتے ہیں:

| | نیٹ ورک | پتہ |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
