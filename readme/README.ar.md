> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | **العربية**

<p align="center">
  <img src="../banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Library</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.3.5-blue" alt="Version">
  <img src="https://img.shields.io/github/downloads/Kigrok/obsidian-library-plugin/total?color=brightgreen" alt="Downloads">
  <img src="https://img.shields.io/badge/Obsidian-v1.8.7+-purple" alt="Obsidian Version">
  <img src="https://img.shields.io/github/license/Kigrok/obsidian-library-plugin?color=orange" alt="License">
</p>

<p align="center">
  الأفلام والمسلسلات والكتب والأنمي والقصص المصورة والألعاب والموسيقى كملاحظات في Obsidian، تُعرض كمعرض من بطاقات الأغلفة.
  <br />
  <a href="https://community.obsidian.md/plugins/library">دليل إضافات Obsidian</a>
</p>

## الميزات

- ابحث عن عنوان واحصل على ملاحظة فيها الملصق والسنة والنوع والمبدعون وطاقم التمثيل والتقييمات.
- يُعثر على الأعمال بأي لغة: عنوان بالروسية أو اليابانية يجد فيلمه أو لعبته أو قصته المصورة. وسنة بعد العنوان (`brother 1997`) تضيّق البحث عن اسم شائع.
- تصفّح المكتبة كبطاقات أغلفة مجمّعة حسب الفئة ومرتّبة حسب الاسم أو السنة أو التقييم أو التاريخ.
- الأعمال التي لم تبدأها بعد تحمل عينًا على الغلاف وتجتمع في قسم **التالي** في آخر الصفحة.
- الفئة المطوية تعرض بطاقاتها في صف واحد يُمرَّر أفقيًا.
- علّم حلقات المسلسل أو فصول الكتاب وقيّم كلًّا منها، فيُحسب `Progress` و `My Rating` منها.
- تعرض ملاحظات الأفلام والمسلسلات والأنمي والألعاب مقطعًا دعائيًا ولقطات، وتعرض الأفلام والمسلسلات أيضًا المدة وقائمة المواسم.
- أسفل كل ملاحظة عناوين مشابهة لا تملكها بعد؛ نقرة واحدة تضيف أحدها.
- استيراد ألعابك من Steam مع ساعات اللعب.
- الأنواع والمبدعون والممثلون روابط، لذا تجمع ملاحظاتهم كل عنوان في الروابط الخلفية وفي العرض البياني.
- تعرض لوحة الإحصائيات القوائم التي تختارها ووقت المشاهدة الإجمالي.
- شارك عنوانًا كصورة بطاقة على X و Telegram و Reddit وست شبكات أخرى.
- زامن تقدّم الأنمي مع AniList.
- الواجهة مترجمة إلى كل اللغات التي يدعمها Obsidian، وهذا الملف مترجم إلى [30 لغة](./).

## البدء السريع

1. ثبّت **Library** من الإعدادات ← إضافات تابعة لجهات خارجية ← تصفّح، أو من [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).
2. في الإعدادات ← Library، أضف فئة لكل نوع من المحتوى: أفلام، مسلسلات، كتب، قصص مصورة، ألعاب، موسيقى، أنمي، يدوي.
3. افتح تبويب «المكتبة» من الشريط، واضغط **+**، واختر فئة وابحث عن عنوان. العنوان الموجود في المكتبة يفتح ملاحظته الحالية.

قيمة `Type` للفئة (مثل `Movie`) تحدد الملاحظات التي تنتمي إليها، ومجلدها يحدد مكان الملاحظات الجديدة. كلاهما تحت **متقدم** في إعدادات الفئة.

## المصادر

| الفئة | المصادر | أولًا عند وجود مفتاح |
| --- | --- | --- |
| الأفلام والمسلسلات | Cinemeta, Wikidata | [OMDb](https://www.omdbapi.com/apikey.aspx) |
| الكتب | Open Library | [Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| الألعاب | Steam, Wikidata | [RAWG](https://rawg.io/apidocs) |
| الموسيقى | Deezer | — |
| الأنمي | AniList | — |
| القصص المصورة | Wikidata, AniList للمانغا | [Comic Vine](https://comicvine.gamespot.com/api/) |
| أي شيء آخر | يدوي: تملأ الحقول بنفسك | — |

تُضاف المفاتيح في الإعدادات ← Library ← مفاتيح API.

تأتي المقاطع الدعائية واللقطات والمدة وقوائم المواسم من Cinemeta، وتقييمات Rotten Tomatoes من Wikidata أو OMDb. يضيف [مفتاح TMDB](https://www.themoviedb.org/settings/api) تقييمات المواسم والمزيد من اللقطات.

لجلب ألعابك، أضف في الإعدادات [مفتاح Steam Web API](https://steamcommunity.com/dev/apikey) وملفك على Steam، ثم شغّل `استيراد مكتبة Steam`. ينشئ الأمر ملاحظة لكل لعبة مع `Playtime` بالساعات، وعند تشغيله مرة أخرى يضيف الألعاب الجديدة ويحدّث الساعات. يجب أن تكون تفاصيل الألعاب في الملف عامة.

تحصل ملاحظات الألعاب على لقطات شاشة ومقطع دعائي. يأتي المقطع من YouTube عبر IGDB إذا أضفت Twitch Client ID وClient Secret (أنشئ تطبيقًا على [dev.twitch.tv/console/apps](https://dev.twitch.tv/console/apps))، وإلا من Wikidata إن وُجد فيه، وإلا فالمقطع الدعائي للعبة على Steam.

## التقدم والتقييمات

يعرض رأس ملاحظة المسلسل قائمة المواسم، وينفتح كل موسم على حلقاته مع عناوينها إن كانت لدى المصدر. علّم حلقة أو موسمًا كاملًا كمُشاهَد وقيّمه من 1 إلى 10. يعدّ `Progress` الحلقات المعلَّمة، وتقييم الموسم هو متوسط حلقاته المقيَّمة، و `My Rating` هو متوسط المواسم المقيَّمة. والموسم الذي لا حلقات مقيَّمة فيه يأخذ تقييمًا خاصًا به.

يعمل الأنمي بالطريقة نفسها، كموسم واحد بلا عناوين للحلقات.

تأتي فصول الكتاب من فهرس إحدى طبعاته في Open Library. وإن لم يوجد فهرس، يقبل زر **إضافة فصول** في رأس الملاحظة عدد الفصول أو عنوانًا واحدًا في كل سطر. بعدها يعدّ `Progress` الفصول بدل الصفحات، وتنتقل الصفحات المقروءة إلى النسبة نفسها من الفصول.

تحتفظ ملاحظات الإصدارات القديمة بتقدمها. وما دمت لم تعلّم شيئًا، تظهر الحلقات الأولى حتى عدد `Progress` كمُشاهَدة.

## الإحصائيات

تعرض اللوحة أعلى تبويب «المكتبة» الأعمدة التي تختارها في الإعدادات ← Library ← الإحصائيات: أعلى ثلاثة عناوين تقييمًا في فئة ما، وأكثر ثلاث قيم تكرارًا لخاصية ما (الأنواع أو الممثلون أو أي خاصية أخرى)، والساعات التي قضيتها في الأفلام والمسلسلات والأنمي. تحت الرسم تظهر مقارنة واحدة كل يوم، مثل: كان بإمكان أبولو 11 أن يطير إلى القمر ويعود 8 مرات.

## التالي

العمل الذي لا تقدّم فيه بعد (غير مكتمل، لا شيء محدد، ولا تقييم منك) يحمل عينًا على غلافه. يجمع قسم **التالي** في آخر تبويب المكتبة هذه الأعمال من كل الفئات، الأحدث أولًا، ويُطوى ويُرتَّب مثل الفئة. في الإعدادات ← Library يوقف **قسم «التالي»** القسم، وإذا أوقفت **غير المبدوء في الفئات** تظهر هذه الأعمال في «التالي» فقط.

## روابط الرسم البياني

تحمل `Genre` و `Creator` و `Cast` روابط مثل `[[Christopher Nolan]]`، لذا تسرد ملاحظة النوع أو الشخص عناوينه في الروابط الخلفية. تتحول الأسماء المكتوبة يدويًا إلى روابط عند تغيّر الملاحظة، ويحوّل `إعادة بناء روابط الرسم البياني` المكتبة كلها.

## المشاركة و AniList

يرسم زر **مشاركة** في رأس الملاحظة بطاقة فيها الملصق والعنوان والسنة والنوع وطاقم التمثيل والتقييمات وتقييمك. على الحاسوب تُنسخ الصورة إلى الحافظة وتُفتح الشبكة التي تختارها مع تعليق جاهز، فتلصق الصورة في المنشور. وعلى الهاتف تذهب الصورة إلى قائمة المشاركة في النظام. ويمكنك أيضًا نسخ الصورة أو التعليق، أو حفظ الصورة في الخزنة.

لمزامنة الأنمي، سجّل عميلًا في [anilist.co/settings/developer](https://anilist.co/settings/developer) مع رابط إعادة التوجيه `https://anilist.co/api/v2/oauth/pin`. الصق Client ID في الإعدادات ← Library ← مزامنة AniList، واضغط **اتصال**، ثم الصق الرمز الذي يعرضه AniList. يرسل `دفع الملاحظة الحالية إلى AniList` التقدم والحالة والتقييم. ويحدّث `سحب التقدّم من AniList` ملاحظاتك دون أن يعيد التقدم إلى الوراء ولا يمس `My Rating`. تُزامَن فقط الملاحظات التي فيها `Source: anilist`.

تتزامن الملاحظات نفسها مع MyAnimeList أيضًا. أنشئ عميلًا على [myanimelist.net/apiconfig](https://myanimelist.net/apiconfig) مع عنوان إعادة التوجيه `http://localhost`، والصق Client ID الخاص به (وClient Secret إن وُجد) في الإعدادات ← Library ← مزامنة MyAnimeList، وانقر **اتصال**، ثم الصق العنوان الذي يفتحه المتصفح. يجد الملحق إدخال MyAnimeList لكل عنوان عبر AniList ويجدد الرمز بنفسه. يعمل `دفع الملاحظة الحالية إلى MyAnimeList` و`سحب التقدّم من MyAnimeList` مثل نظيريهما في AniList.

## Frontmatter

كل بطاقة ملاحظة، وكل ما تعرفه الإضافة عنها موجود في الـ frontmatter:

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
      # ...7 حلقات أخرى
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

في المسلسل، `Runtime` هو مدة الحلقة الواحدة. تضيف الكتب `ISBN` وتحفظ الفصول في `Chapters` بالحقول نفسها `title` و `watched` و `my_rating`؛ ويضيف الأنمي `Rating AniList` و `Status`. يمكن إعادة تسمية خاصية الغلاف في الإعدادات، مثلًا إلى `image`.

التحديث يملأ الحقول الفارغة فقط، فتبقى القيم التي تعدّلها؛ وتُحدَّث تقييمات المصادر (`Rating IMDB`، `Rating RT`، `Rating MC`، `Rating RAWG`) إلى قيمها الحالية. ويحدّث أيضًا عدد الحلقات في `Progress` ويضيف المواسم وعناوين الحلقات الجديدة.

## توصيات

أسفل ترويسة كل ملاحظة صف من العناوين المشابهة التي لا تملكها بعد:

- الأنمي: توصيات مستخدمي AniList؛
- الأفلام والمسلسلات: توصيات TMDB مع مفتاح TMDB، وإلا فالعناوين الأعلى تقييمًا من الأنواع نفسها في Cinemeta؛
- الألعاب: بقية السلسلة وأفضل ألعاب النوع نفسه، من RAWG مع مفتاح RAWG، وإلا من Wikidata؛
- الكتب: الكتب الأكثر قراءة في Open Library التي تشترك في أول نوعين للملاحظة.

انقر على غلاف لإضافة العنوان. لا توجد توصيات للقصص المصورة والموسيقى. يمكن إيقاف الصف من الإعدادات ← Library ← إظهار التوصيات.

## الخصوصية واستخدام الشبكة

مكتبتك ملاحظات عادية وتعمل دون اتصال. تتصل الإضافة بالشبكة عندما تبحث أو تحدّث أو تزامن أو تشارك؛ وعندما تفتح ملاحظة من المكتبة، مرة كل 5 دقائق على الأكثر لكل ملاحظة؛ ومرة واحدة بعد تحديث أو تغيير مفتاح لملء الحقول الجديدة. لا قياس عن بُعد ولا تحليلات ولا تحديث ذاتي. تبقى مفاتيح API في إعدادات الإضافة المحلية ولا تُرسل إلا إلى خدمتها.

| المضيف | متى | ما يُرسل |
| --- | --- | --- |
| `www.omdbapi.com` | البحث عن الأفلام والمسلسلات (مع مفتاح OMDb) | العنوان أو معرّف IMDb، ومفتاح OMDb |
| `openlibrary.org` | البحث عن الكتب؛ البحث عن الفصول عند إضافة كتاب أو فتحه؛ توصيات عند فتح ملاحظة | العنوان والمؤلف، أو ISBN، أو معرّف العمل؛ الأنواع |
| `covers.openlibrary.org` | أغلفة الكتب | معرّف الغلاف |
| `www.googleapis.com` | البحث عن الكتب (مع مفتاح Google Books) | العنوان، ومفتاح Google Books |
| `api.rawg.io` | البحث عن الألعاب وتحديثها؛ توصيات عند فتح ملاحظة (مع مفتاح RAWG) | العنوان أو معرّف RAWG، النوع، مفتاح RAWG |
| `media.rawg.io` | أغلفة الألعاب ولقطات الشاشة | مسار الصورة |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | البحث عن الألعاب والأغلفة والمقاطع الدعائية ولقطات الشاشة | العنوان أو معرّف تطبيق Steam |
| `video.akamai.steamstatic.com`, `shared.akamai.steamstatic.com` | تشغيل مقطع دعائي من Steam؛ لقطات شاشة الألعاب | مسار الفيديو أو الصورة |
| `api.steampowered.com` | تشغّل `استيراد مكتبة Steam` | مفتاح Steam Web API، ومعرّف SteamID أو اسم الملف |
| `id.twitch.tv`, `api.igdb.com` | إضافة لعبة أو تحديثها، إذا ضبطت مفاتيح Twitch | Twitch Client ID والسر؛ معرّف تطبيق Steam أو اسم اللعبة |
| `www.wikidata.org` | البحث عن الأفلام والمسلسلات والألعاب والقصص المصورة؛ الألعاب والقصص المصورة المضافة منه؛ تقييمات Rotten Tomatoes؛ المقاطع الدعائية للألعاب؛ توصيات الألعاب عند فتح ملاحظة | نص البحث أو معرّف IMDb أو Steam app id أو معرّف العنصر |
| `en.wikipedia.org`, `upload.wikimedia.org` | أغلفة الألعاب والقصص المصورة الموجودة في Wikidata | عنوان المقالة؛ مسار الصورة |
| `api.deezer.com` | البحث عن الموسيقى | الألبوم أو الفنان |
| `graphql.anilist.co` | البحث عن الأنمي؛ مزامنة AniList; معرّفات MyAnimeList للمزامنة؛ توصيات عند فتح ملاحظة؛ البحث عن المانغا | العنوان؛ رمزك والتقدم والحالة والتقييم; معرّفات AniList |
| `anilist.co` | تضغط **اتصال** | Client ID، يُفتح في متصفحك |
| `myanimelist.net` | تنقر **اتصال** في MyAnimeList؛ تجديد الرمز | Client ID والسر، رمز التفويض، رمز التجديد |
| `api.myanimelist.net` | مزامنة MyAnimeList | رمزك، والتقدم، والحالة، والتقييم |
| `s4.anilist.co` | لافتات الأنمي | مسار CDN |
| `comicvine.gamespot.com` | البحث عن القصص المصورة (مع مفتاح Comic Vine) | العنوان، ومفتاح Comic Vine |
| `v3-cinemeta.strem.io` | إضافة فيلم أو مسلسل أو تحديثه؛ البحث عن الأفلام والمسلسلات؛ توصيات عند فتح ملاحظة، دون مفتاح TMDB | العنوان أو معرّف IMDb؛ النوع |
| `images.metahub.space`, `episodes.metahub.space` | الملصقات في البحث عن الأفلام؛ اللقطات | معرّف IMDb، ورقما الموسم والحلقة |
| `api.themoviedb.org`, `image.tmdb.org` | إضافة فيلم أو مسلسل أو تحديثه، وتوصيات عند فتح ملاحظة، إذا ضبطت مفتاح TMDB | معرّف IMDb ومفتاح TMDB؛ مسار الصورة |
| `i.ytimg.com` | لقطات الإعلانات التشويقية | معرّف الفيديو |
| خوادم صور خدمات البث، عبر AniList | لقطات حلقات الأنمي | مسار الصورة |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | فتح ملاحظة فيها إعلان تشويقي | معرّف الفيديو |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | تضغط زر مشاركة | التعليق: العنوان وتقييمك ورابط المصدر. تبقى الصورة على جهازك |

## الأوامر

| الأمر | ما يفعله |
| --- | --- |
| `فتح المكتبة` | يفتح تبويب «المكتبة» |
| `إضافة محتوى` | يبحث في مصدر وينشئ ملاحظة |
| `ابحث في مكتبتك` | يجد ملاحظة في المكتبة ويفتحها |
| `تحديث البيانات الوصفية للملاحظة الحالية` | يجلب بيانات الملاحظة النشطة من جديد |
| `تحديث البيانات الوصفية لكل الملاحظات` | يجلب بيانات كل ملاحظات المكتبة، واحدة تلو الأخرى |
| `إعادة بناء روابط الرسم البياني` | يحوّل `Genre` و `Creator` و `Cast` إلى روابط |
| `البحث عن التكرارات وإزالتها` | يسرد الملاحظات ذات الرابط نفسه ويحذف ما تختاره |
| `مشاركة الملاحظة الحالية` | يفتح بطاقة المشاركة |
| `دفع الملاحظة الحالية إلى AniList` | يرسل التقدم والحالة والتقييم |
| `سحب التقدّم من AniList` | يحدّث الملاحظات من قائمتك في AniList |
| `دفع الملاحظة الحالية إلى MyAnimeList` | يرسل التقدم والحالة والتقييم |
| `سحب التقدّم من MyAnimeList` | يحدّث الملاحظات من قائمتك في MyAnimeList |
| `استيراد مكتبة Steam` | ينشئ ملاحظة لكل لعبة تملكها ويحدّث `Playtime` |

## الدعم

أبلغ عن الأخطاء في [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues) واقترح الأفكار في [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions). الإضافة مرخّصة بموجب [رخصة MIT](../LICENSE).

إن كانت الإضافة مفيدة لك، يمكنك دعمها:

| | الشبكة | العنوان |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
