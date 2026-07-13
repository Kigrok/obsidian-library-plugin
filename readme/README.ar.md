> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | **العربية**

<p align="center">
  <img src="../banner.png" alt="شعار مكتبة Obsidian" width="100%">
</p>

<h1 align="center">المكتبة</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.2.1-blue" alt="الإصدار">
  <img src="https://img.shields.io/github/downloads/Kigrok/obsidian-library-plugin/total?color=brightgreen" alt="التنزيلات">
  <img src="https://img.shields.io/badge/Obsidian-v1.8.7+-purple" alt="إصدار Obsidian">
  <img src="https://img.shields.io/github/license/Kigrok/obsidian-library-plugin?color=orange" alt="الرخصة">
</p>

<p align="center">
  <b>نظّم أفلامك ومسلسلاتك وكتبك والمزيد في معرض بصري — مباشرة داخل Obsidian.</b>
  <br />
  ابحث عن العناوين وأضفها داخل التطبيق، واحصل على البيانات الوصفية تلقائيًا، وتتبع التقدم، واربط كل شيء برسمك البياني.
</p>

<p align="center">
  <a href="community.obsidian.md/plugins/library">عرض في دليل الإضافات المجتمعية لـ Obsidian</a>
</p>

---

## الميزات الرئيسية

- **شبكة بطاقات بصرية** — علامة تبويب مكتبة مخصصة تعرض مجموعتك كمعرض من بطاقات أغلفة الفن.
- **بحث مدمج** — ابحث عن العناوين وأضفها مباشرة داخل التطبيق: OMDb للأفلام والمسلسلات، أو Open Library أو Google Books للكتب، أو RAWG للألعاب، أو Deezer للموسيقى، أو AniList للأنمي، أو Comic Vine للكوميكس.
- **تتبع ذكي للمسلسلات** — يتم جلب مواسم وعدد الحلقات تلقائيًا وإبقاؤها متزامنة.
- **مؤشرات التقدم** — شرائط التقدم المرئية على البطاقات وترويسات الملاحظات تُظهر كم شاهدت أو قرأت.
- **ترويسات ملاحظات غنية** — كل ملاحظة محتوى تحصل على ترويسة مولّدة تلقائيًا بجميع البيانات الوصفية الرئيسية.
- **فئات مخصصة** — أنشئ فئات للأفلام والمسلسلات والأنمي والكوميكس والكتب والألعاب والموسيقى أو أي شيء آخر عبر المصدر اليدوي.
- **روابط الرسم البياني** — خاصية `Related` في البيانات الأمامية تربط كل ملاحظة بفئتها وأنواعها ومنشئيها، وتبقى متزامنة تلقائيًا لرسم بياني جميل.
- **بطاقات المشاركة** — حوّل أي ملاحظة محتوى إلى صورة بطاقة قابلة للمشاركة (الملصق، العنوان، السنة، النوع، تقييم IMDb، وتقييمك الخاص) وانشرها على X أو Telegram أو Reddit أو WhatsApp أو Facebook أو LinkedIn أو VK أو Bluesky أو Pinterest — شاركها مباشرة إلى تطبيقات جهازك، أو انسخ/احفظ الصورة لاستخدامها في أي مكان.
- **مزامنة AniList** — ادفع تقدّم الأنمي وحالته وتقييمه مباشرةً إلى حساب AniList الخاص بك، أو اسحب قائمتك إلى ملاحظاتك.
- **الترتيب والطي** — رتّب البطاقات حسب الاسم أو السنة أو التقييم أو التاريخ؛ اطوِ أي فئة.
- **الإحصائيات** — الأنواع الأعلى، المنشئون الأعلى (للفيلم والمسلسل فقط)، والعناصر الأعلى لكل فئة مع ترتيب الميداليات.
- **اكتشاف التكرار** — يمنع تلقائيًا إضافة العنوان نفسه مرتين حسب الرابط. أمر مدمج يعثر على التكرارات القائمة ويحذفها.
- **متعدد اللغات** — 31 لغة.

---

## البدء السريع

### 1. التثبيت

ثبّت **المكتبة** من [دليل الإضافات المجتمعية لـ Obsidian](https://community.obsidian.md/plugins/library) (الإعدادات > الإضافات المجتمعية > تصفح > ابحث عن "Library")، أو ثبّته يدويًا عبر [إصدارات GitHub](https://github.com/Kigrok/obsidian-library-plugin/releases).

### 2. الإعداد الأساسي

1. انتقل إلى **الإعدادات** > **المكتبة**.
2. أضف **فئاتك** — اختر نوعًا محددًا مسبقًا (أفلام، مسلسلات، كتب، كوميكس، ألعاب، موسيقى، أنمي، أو يدوي) من القائمة المنسدلة وانقر على **إضافة فئة**. كل فئة لها اسم عرض (مترجم إلى لغتك)، وقيمة `Type` (دائمًا بالإنجليزية، مثل `Movie`)، ومصدر، ومجلد اختياري لتخزين الملاحظات.
3. _(اختياري)_ أدخل مفاتيح API للخدمات التي تستخدمها: [OMDb](https://www.omdbapi.com/apikey.aspx) للأفلام والمسلسلات، [RAWG](https://rawg.io/apidocs) للألعاب، [Comic Vine](https://comicvine.gamespot.com/api/) للكوميكس. الأنمي (AniList) والموسيقى (Deezer) لا يحتاجان مفتاح.

### 3. إضافة بطاقة بالعنوان

لا ملء البيانات الأمامية يدويًا بعد الآن — أضف فيلمًا أو مسلسلًا أو كتابًا أو أنميًا أو كوميكًا بمجرد البحث عن اسمه:

1. افتح علامة تبويب **المكتبة** من أيقونة الشريط (أو نفّذ أمر `Open Library`).
2. انقر على زر **+** في أعلى يمين صفحة المكتبة (أو نفّذ أمر `Add content`).
3. اختر فئة، واكتب **العنوان** في مربع البحث، واختر نتيجة.
4. يتم إنشاء بطاقة فورًا، مع ملء الملصق والسنة والأنواع والمنشئين والتقييم تلقائيًا.

زر **البحث** بجوار **+** يبحث عن العناوين الموجودة بالفعل في مكتبتك.

لفئات **اليدوية**، ما عليك سوى كتابة عنوان وملء الغلاف والسنة والحقول الأخرى يدويًا.

---

## الإحصائيات

تحتوي علامة تبويب المكتبة على قسم **الإحصائيات** قابل للطي في الأعلى:

- **الأنواع الأعلى** — مرتّبة حسب التكرار في مكتبتك بالكامل.
- **المنشئون الأعلى** — مرتّبة حسب عدد الأفلام والمسلسلات التي يظهرون فيها.
- **الأعلى لكل فئة** — لكل فئة (أفلام، مسلسلات، كتب، إلخ)، أعلى 3 عناصر حسب التقييم مع صور مصغرة للأغلفة.

---

## اكتشاف التكرار

تمنع المكتبة الإدخالات المكررة بالتحقق من حقل `URL`:

- **عند الإضافة** — إذا كانت ملاحظة بنفس الرابط موجودة بالفعل، تفتح الملاحظة الموجودة بدلاً من إنشاء تكرار.
- **البحث عن التكرارات وإزالتها** — نفّذ هذا الأمر من لوحة الأوامر لفحص جميع الملاحظات، وتجميعها حسب الرابط، وإزالة التكرارات المحددة عبر نافذة منبثقة.

---

## المصادر

| المصدر | أنواع المحتوى | مفتاح API |
| --- | --- | --- |
| **OMDb** | أفلام، مسلسلات | مفتاح مجاني مطلوب — [omdbapi.com](https://www.omdbapi.com/apikey.aspx) |
| **Books** | كتب | Open Library (بدون مفتاح) + Google Books (مفتاح مجاني اختياري). النتائج مدمجة — Google Books أولاً، ثم Open Library. |
| **RAWG** | ألعاب | مفتاح مجاني مطلوب — [rawg.io/apidocs](https://rawg.io/apidocs) |
| **Deezer** | موسيقى (ألبومات) | لا يوجد |
| **AniList** | أنمي | لا يوجد — واجهة AniList GraphQL API مجانية، لا حاجة لمفتاح |
| **Comic Vine** | كوميكس | مفتاح مجاني مطلوب — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **يدوي** | أي شيء آخر | لا يوجد — تكتب العنوان وتملأ الحقول يدويًا |

---

## الخصوصية واستخدام الشبكة

المكتبة **offline أولاً**. تتواصل الإضافة مع الشبكة فقط عندما تبحث بنشاط عن عنوان لإضافته، وبمفردات البحث التي تكتبها فقط:

| الخدمة | متى | ماذا يُرسل | السبب |
| --- | --- | --- | --- |
| `www.omdbapi.com` | تبحث في فئة مدعومة بـ OMDb | العنوان الذي تكتبه ومفتاح OMDb API الخاص بك | جلب البيانات الوصفية للفيلم/المسلسل (النوع، العام، الممثلون، التقييم، الملصق، عدد الحلقات) |
| `openlibrary.org` | تبحث في فئة Open Library | العنوان الذي تكتبه | جلب بيانات الكتاب (المؤلف، العام، المواضيع، معرف الغلاف) |
| `covers.openlibrary.org` | بطاقة كتاب لها غلاف | معرف غلاف Open Library | تحميل صورة الغلاف |
| `www.googleapis.com` | تبحث في فئة Google Books | العنوان الذي تكتبه ومفتاح Google Books الخاص بك | جلب بيانات الكتاب (المؤلف، العام، الفئات، عدد الصفحات، الغلاف، ISBN) |
| `api.rawg.io` | تبحث في فئة ألعاب RAWG | العنوان الذي تكتبه ومفتاح RAWG الخاص بك | جلب بيانات اللعبة (العام، النوع، المطور، الغلاف) |
| `api.deezer.com` | تبحث في فئة موسيقى Deezer | الألبوم أو الفنان الذي تكتبه | جلب بيانات الألبوم (الفنان، العام، النوع، عدد المقاطع، الغلاف) |
| `graphql.anilist.co` | تبحث في فئة أنمي | العنوان الذي تكتبه | جلب بيانات الأنمي (العنوان، العام، النوع، عدد الحلقات، تقييم AniList، الاستوديو، الملصق) |
| `graphql.anilist.co` | تنفّذ أمر مزامنة AniList | رمز وصول AniList الخاص بك وتقدّم الملاحظة وحالتها وتقييمها | قراءة أو تحديث قائمة أنمي AniList الخاصة بك |
| `comicvine.gamespot.com` | تبحث في فئة كوميكس | العنوان الذي تكتبه ومفتاح Comic Vine الخاص بك | جلب بيانات الكوميك (العنوان، العام، الناشر، عدد الأعداد، الغلاف) |

لا تخرج أي بيانات أخرى من مكتبتك أبدًا. الإضافة **بلا تحليلات، بلا أتمتة، وبدون آلية تحديث ذاتي**. مفاتيح API (OMDb، Google Books، RAWG، Comic Vine) مخزنة فقط في إعدادات الإضافات المحلية ولا تُرسل إلا إلى خدماتها الخاصة. تُحمّل صور الأغلفة مباشرة من عناوين URL التي تُرجعها كل مصدر.

---

## مخطط البيانات الأمامية

تقرأ الإضافة وتكتب إلى بيانات YAML الأمامية القياسية. يتم إنشاء الملاحظات لك، لكن كل حقل قابل للتعديل. `Source` و `Source ID` يسمحان للإضافة بتحديث البيانات الوصفية لاحقًا.

### فيلم

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

### مسلسل

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

> **تحديث تلقائي للمسلسل:** نفّذ أمر `Refresh metadata for current note` (أو فقط افتح الملاحظة) وتحديث الإضافة عدد الحلقات الكلي في `Progress` (مثلاً من `25/42` إلى `25/50`) وعدد `Season`، مع الحفاظ على عدد مشاهداتك سليمًا.

### كتاب

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

### أنمي

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

### كوميك

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

## روابط الرسم البياني

تحصل كل ملاحظة محتوى على خاصية `Related` في البيانات الأمامية، تبقى محدّثة تلقائيًا — لا يتم لمس نص الملاحظة أبدًا:

```yaml
Related:
    - "[[Movie]]"
    - "[[Action]]"
    - "[[Sci-Fi]]"
    - "[[Christopher Nolan]]"
```

هذه الروابط تربط ملاحظاتك عبر الفئات والأنواع والمنشئين المشتركة، لذا يشكّل عرض الرسم البياني في Obsidian مجموعات نظيفة. يتم إنشاء ملاحظة مركز حقيقية لكل فئة (مثل `Movie`) حتى تظهر المجموعات حتى مع إخفاء الروابط غير المحلولة. تُكتب الخاصية عند إنشاء الملاحظة ويتم تحديثها كلما تغيرت بياناتها الوصفية — نفّذ `Rebuild graph links` فقط إذا كنت تريد إجبار إعادة بناء كاملة.

---

## المشاركة

تحصل كل ملاحظة محتوى على زر **مشاركة** في ترويستها (أو نفّذ أمر `Share current note`). يعرض صورة بطاقة — الملصق، العنوان، السنة، النوع، تقييم IMDb/AniList، وتقييمك الخاص — يمكنك نشرها في أي مكان:

- **على الهاتف المحمول** — يفتح زر **مشاركة…** ورقة المشاركة الأصلية في جهازك مع إرفاق صورة البطاقة مباشرة، حتى يمكنك إرسالها فورًا إلى أي تطبيق.
- **X، Telegram، Reddit، WhatsApp، Facebook، LinkedIn، VK، Bluesky، Pinterest** — يفتح محرّر المنشور الخاص بالشبكة مع تعليق مُعبّأ مسبقًا (العنوان، تقييمك، رابط المصدر، ورابط إلى هذه الإضافة). تُنسخ صورة البطاقة إلى حافظتك في الوقت نفسه، فما عليك سوى لصقها (Ctrl/Cmd+V) في المنشور.
- **نسخ الصورة / نسخ النص / حفظ الصورة** — انسخ البطاقة المعروضة أو التعليق إلى الحافظة، أو احفظ الصورة في مجلد المرفقات بمخزنك لإرفاقها يدويًا.

المشاركة محلية بالكامل: تُرسم البطاقة داخل التطبيق من البيانات الوصفية والغلاف الخاصين بالملاحظة نفسها. لا يُرفع أي شيء — تفتح الإضافة فقط رابط محرّر المنشور الذي تختاره في متصفحك.

---

## مزامنة AniList

أبقِ تقدّم الأنمي لديك متزامنًا مع حساب [AniList](https://anilist.co) الخاص بك.

**الإعداد** — في **الإعدادات > المكتبة > مزامنة AniList**:

1. سجّل عميل API مجانيًا على [anilist.co/settings/developer](https://anilist.co/settings/developer)، مع ضبط رابط إعادة التوجيه على `https://anilist.co/api/v2/oauth/pin`.
2. الصق **Client ID**، وانقر على **Connect**، وامنح التصريح.
3. يعرض لك AniList رمز وصول — الصقه في الإضافة. انقر على **Test connection** للتأكيد.

ثم استخدم الأوامر:

- **Push current note to AniList** — يرسل تقدّم ملاحظة الأنمي النشطة (الحلقات المشاهدة)، والحالة (قيد المشاهدة / مكتمل / مخطط له)، وتقييمك إلى قائمة AniList الخاصة بك.
- **Pull progress from AniList** — يجلب قائمة أنمي AniList الخاصة بك ويحدّث الملاحظات المطابقة. السحب **أحادي الاتجاه (للأمام فقط)**: لا يتراجع أبدًا بملاحظة أنت متقدم فيها محليًا أو مكتملة بالفعل، ويترك تقييمك الشخصي `My Rating` دون تغيير.

تُزامَن فقط الملاحظات التي تحمل `Source: anilist` (المضافة عبر مصدر أنمي AniList). يُخزَّن رمزك محليًا في إعدادات الإضافة ولا يُرسَل إلا إلى AniList.

---

## الأوامر

| الأمر | الوصف |
| --- | --- |
| `Open Library` | فتح علامة تبويب معرض المكتبة. |
| `Add content` | ابحث في مصدر وأنشئ ملاحظة محتوى (أو اكتب عنوانًا لليدوي). |
| `Search your library` | ابحث بضبابية وافتح أي ملاحظة موجودة بالفعل في مكتبتك. |
| `Refresh metadata for current note` | أعد جلب البيانات الوصفية للملاحظة النشطة؛ يحدث إجمالي حلقات المسلسل. |
| `Rebuild graph links` | اربط كل ملاحظة محتوى بفئتها وأنواعها ومنشئيها. |
| `Find & remove duplicates` | افحص جميع الملاحظات حسب الرابط، اعرض التكرارات، وأزل المحددة. |
| `Share current note` | اعرض الملاحظة كصورة بطاقة وشاركها على X أو Telegram أو Reddit أو WhatsApp أو Facebook أو LinkedIn أو VK أو Bluesky أو Pinterest. |
| `Push current note to AniList` | أرسل تقدّم ملاحظة الأنمي النشطة وحالتها وتقييمها إلى حساب AniList الخاص بك. |
| `Pull progress from AniList` | اجلب قائمة AniList الخاصة بك وحدّث الملاحظات المطابقة (للأمام فقط). |

---

## المساهمة والدعم

- **وجدت خطأ؟** افتح [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues).
- **لديك فكرة ميزة؟** ابدأ [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions).
- **تحب الإضافة؟** فكر في نجمة المستودع لإظهار دعمك!

---

## شكرًا لك

إذا وجدت هذه الإضافة مفيدة، فكر في دعم تطويرها:

| | الشبكة | العنوان |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |

---