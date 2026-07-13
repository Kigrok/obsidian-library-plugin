> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | **עברית**

<p align="center">
  <img src="../banner.png" alt="סמל ספריית Obsidian" width="100%">
</p>

<h1 align="center">הספרייה</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.2.1-blue" alt="גרסה">
  <img src="https://img.shields.io/github/downloads/Kigrok/obsidian-library-plugin/total?color=brightgreen" alt="הורדות">
  <img src="https://img.shields.io/badge/Obsidian-v1.8.7+-purple" alt="גרסת Obsidian">
  <img src="https://img.shields.io/github/license/Kigrok/obsidian-library-plugin?color=orange" alt="רישיון">
</p>

<p align="center">
  <b>ארגן את הסרטים, הסדרות, הספרים ועוד לתצוגה ויזואלית — ישירות בתוך Obsidian.</b>
  <br />
  חפש והוסף כותרים בתוך האפליקציה, אחזר מטה-נתונים אוטומטית, עקוב אחר התקדמות, וכל הכל בתרשים שלך.
</p>

<p align="center">
  <a href="community.obsidian.md/plugins/library">צפה במדריך התוספים הקהילתיים של Obsidian</a>
</p>

---

## תכונות עיקריות

- **רשת כרטיסים ויזואלית** — לשונית ספרייה ייעודית המציגה את האוסף שלך כגלריה של כרטיסי עטיפות.
- **חיפוש מובנה** — חפש והוסף כותרים ישירות בתוך האפליקציה: OMDb לסרטים וסדרות, Open Library או Google Books לספרים, RAWG למשחקים, Deezer למוזיקה, AniList לאנימה, Comic Vine לקומיקסים.
- **מעקב חכם אחר סדרות** — עונות ומספר פרקים נמשכים אוטומטית ומתעדכנים.
- **מחווני התקדמות** — סרגלי התקדמות ויזואליים על כרטיסים וכותרות הערות מראים כמה צפית או קראת.
- **כותרות הערות עשירות** — כל הערת תוכן מקבלת כותרת שנוצרה אוטומטית עם כל מטה-נתונים מרכזיים.
- **קטגוריות מותאמות אישית** — צור קטגוריות לסרטים, סדרות, אנימה, קומיקסים, ספרים, משחקים, מוזיקה או כל דבר אחר דרך המקור הידני.
- **קישורי תרשים** — מאפיין `Related` בנתונים הקדמיים מחבר כל הערה לקטגוריה, ז'אנרים ויוצרים, ומתעדכן אוטומטית לתרשים יפהפה.
- **כרטיסי שיתוף** — הפוך כל הערת תוכן לתמונת כרטיס לשיתוף (פוסטר, כותרת, שנה, ז'אנר, דירוג IMDb והדירוג שלך) ופרסם אותה ל-X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky או Pinterest — שתף אותה ישירות לאפליקציות של המכשיר שלך, או העתק/שמור את התמונה לשימוש בכל מקום.
- **סנכרון AniList** — דחוף את ההתקדמות, הסטטוס והדירוג של האנימה שלך ישירות לחשבון AniList שלך, או משוך את הרשימה שלך בחזרה להערות שלך.
- **מיון וקיפול** — מיין כרטיסים לפי שם, שנה, דירוג או תאריך; קפל כל קטגוריה.
- **סטטיסטיקות** — ז'אנרים מובילים, יוצרים מובילים (סרטים וסדרות בלבד), ופריטים מובילים לכל קטגוריה עם דירוג מדליות.
- **זיהוי כפילויות** — מונע אוטומטית הוספת אותו כותר פעמיים לפי כתובת URL. פקודה מובנה מוצאת ומוחקת כפילויות קיימות.
- **רב-לשוני** — 31 שפות.

---

## התחלה מהירה

### 1. התקנה

התקן את **הספרייה** מ-[מדריך התוספים הקהילתיים של Obsidian](https://community.obsidian.md/plugins/library) (הגדרות > תוספים קהילתיים > דפדף > חפש "Library"), או התקן ידנית דרך [גרסאות GitHub](https://github.com/Kigrok/obsidian-library-plugin/releases).

### 2. הגדרה בסיסית

1. עבור אל **הגדרות** > **הספרייה**.
2. הוסף את **הקטגוריות שלך** — בחר סוג מוגדר מראש (סרטים, סדרות, ספרים, קומיקסים, משחקים, מוזיקה, אנימה, או ידני) מהתפריט הנפתח ולחץ על **הוסף קטגוריה**. לכל קטגוריה יש שם תצוגה (מתורגם לשפתך), ערך `Type` (תמיד באנגלית, למשל `Movie`), מקור, ותיקייה אופציונלית לשמירת הערות.
3. _(אופציונלי)_ הזן מפתחות API לשירותים בהם אתה משתמש: [OMDb](https://www.omdbapi.com/apikey.aspx) לסרטים/סדרות, [RAWG](https://rawg.io/apidocs) למשחקים, [Comic Vine](https://comicvine.gamespot.com/api/) לקומיקסים. אנימה (AniList) ומוזיקה (Deezer) אינם דורשים מפתח.

### 3. הוספת כותרת

למלא את הנתונים הידנית הוא עבר — הוסף סרט, סדרה, ספר, אנימה או קומיקס רק על ידי חיפוש השם שלו:

1. פתח את לשונית **הספרייה** מאייקון הסרגל (או הרץ `Open Library`).
2. לחץ על כפתור **+** בצד ימין למעלה של דף הספרייה (או הרץ `Add content`).
3. בחר קטגוריה, הקלד את **הכותרת** בתיבת החיפוש, ובחר תוצאה.
4. כותרת נוצרת באופן מיידי, עם פוסטר, שנה, ז'אנרים, יוצרים ודירוג שממולאים אוטומטית.

כפתור **חיפוש** ליד **+** מחפש כותרים שכבר נמצאים בספרייה שלך.

לקטגוריות **ידניות** אתה פשוט מקליד כותר וממלא את העטיפה, השנה ושדות אחרים ידנית.

---

## סטטיסטיקות

לשונית הספרייה כוללת מקטע **סטטיסטיקות** בר בקיפול בחלק העליון:

- **ז'אנרים מובילים** — מדורגים לפי תדירות בכל הספרייה שלך.
- **יוצרים מובילים** — מדורגים לפי מספר הסרטים והסדרות בהם הם מופיעים.
- **מובילים לכל קטגוריה** — עבור כל קטגוריה (סרטים, סדרות, ספרים וכו'), שלושת הפריטים הראשונים לפי דירוג עם תמונות ממוזערות של העטיפה.

---

## זיהוי כפילויות

הספרייה מונעת רשומות כפולות על ידי בדיקת שדה `URL`:

- **בהוספה** — אם הערה עם כתובת URL זהה כבר קיימת, היא פותח את הערה הקיימת במקום ליצור כפילות.
- **מצוא והסר כפילויות** — הרץ פקודה זו מהפלטה לסריקת כל הערות, קיבוץ לפי URL, והסרת כפילויות נבחרות דרך מודאל.

---

## מקורות

| מקור | סוגי תוכן | מפתח API |
| --- | --- | --- |
| **OMDb** | סרטים, סדרות | מפתח חינם נדרש — [omdbapi.com](https://www.omdbapi.com/apikey.aspx) |
| **Books** | ספרים | Open Library (ללא מפתח) + Google Books (מפתח חינם אופציונלי). תוצאות ממוזגות — Google Books ראשון, Open Library מתחת. |
| **RAWG** | משחקים | מפתח חינם נדרש — [rawg.io/apidocs](https://rawg.io/apidocs) |
| **Deezer** | מוזיקה (אלבומים) | אין |
| **AniList** | אנימה | אין — ממשק AniList GraphQL API חינם, ללא צורך במפתח |
| **Comic Vine** | קומיקסים | מפתח חינם נדרש — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **ידני** | כל דבר אחר | אין — אתה מקליד את הכותר וממלא את השדות ידנית |

---

## פרטיות ושימוש ברשת

הספרייה היא ** מקוונת תחילה**. התוסף מתקשרות עם הרשת רק כאשר אתה מחפש באופן פעיל כותר להוספה, ורק עם מונחי החיפוש שאתה מקליד:

| שירות | מתי | מה נשלח | למה |
| --- | --- | --- | --- |
| `www.omdbapi.com` | אתה מחפש בקטגוריה הנתמכת על ידי OMDb | הכותר שאתה מקליד ומפתח OMDb API שלך | אחזר מטה-נתונים של סרט/סדרה (שנה, ז'אנר, שחקנים, דירוג, פוסטר, ספירת פרקים) |
| `openlibrary.org` | אתה מחפש בקטגוריה של Open Library | הכותר שאתה מקליד | אחזר מטה-נתונים של ספר (מחבר, שנה, נושאים, מזהה עטיפה) |
| `covers.openlibrary.org` | כרטיס ספר עם עטיפה | מזהה העטיפה של Open Library | טען את תמונת העטיפה |
| `www.googleapis.com` | אתה מחפש בקטגוריה של Google Books | הכותר שאתה מקליד ומפתח Google Books שלך | אחזר מטה-נתונים של ספר (מחבר, שנה, קטגוריות, מספר עמודים, עטיפה, ISBN) |
| `api.rawg.io` | אתה מחפש בקטגוריית משחק RAWG | הכותר שאתה מקליד ומפתח RAWG שלך | אחזר מטה-נתונים של משחק (שנה, ז'אנר, מפתח, עטיפה) |
| `api.deezer.com` | אתה מחפש בקטגוריית מוזיקה של Deezer | האלבום או האמן שאתה מקליד | אחזר מטה-נתונים של אלבום (אמן, שנה, ז'אנר, ספירת רצועות, עטיפה) |
| `graphql.anilist.co` | אתה מחפש בקטגוריית אנימה | הכותר שאתה מקליד | אחזר מטה-נתונים של אנימה (כותר, שנה, ז'אנר, פרקים, דירוג AniList, אולפן, פוסטר) |
| `graphql.anilist.co` | אתה מריץ פקודת סנכרון AniList | אסימון הגישה שלך ל-AniList וההתקדמות, הסטטוס והדירוג של ההערה | קרא או עדכן את רשימת האנימה שלך ב-AniList |
| `comicvine.gamespot.com` | אתה מחפש בקטגוריית קומיקסים | הכותר שאתה מקליד ומפתח Comic Vine שלך | אחזר מטה-נתונים של קומיקס (כותר, שנה, מפרסם, ספירת גיליונות, עטיפה) |

לא עוזב שום מידע אחר את הכספת שלך. לתוסף **אין טלמטריה, ניתוח, או מנגנון עדכון עצמי**. מפתחות API (OMDb, Google Books, RAWG, Comic Vine) מאוחסנים רק בהגדרות התוסף המקומיות ונשלחים רק לשירותים המתאימים. תמונות עטיפה נטענות ישירות מכתובות ה-URL שהוחזרו מכל מקור.

---

## סכמת נתונים קדמית

התוסף קורא וכותב לנתוני YAML קדמיים סטנדרטיים. הערות נוצרות עבורך, אך כל שדה ניתן לעריכה. `Source` ו-`Source ID` מאפשרים לתוסף לעדכן מטה-נתונים מאוחר יותר.

### סרט

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

### סדרה

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

> **עדכון אוטומטי של סדרה:** הרץ `Refresh metadata for current note` (או פשוט פתח את ההערה) והתוסף מעדכן את ספירת הפרקים הכוללת ב-`Progress` (למשל מ-`25/42` ל-`25/50`) וספירת `Season`, תוך שמירה על ספירת הצפייה שלך שלמה.

### ספר

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

### אנימה

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

### קומיקס

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

## קישורי תרשים

כל הערת תוכן מקבלת מאפיין `Related` בנתונים הקדמים, ומתעדכן אוטומטית — גוף ההערה לעולם לא נגע:

```yaml
Related:
    - "[[Movie]]"
    - "[[Action]]"
    - "[[Sci-Fi]]"
    - "[[Christopher Nolan]]"
```

קישורים אלו מחברים את ההערות שלך דרך קטגוריות, ז'אנרים ויוצרים משותפים, כך שתצוגת התרשים של Obsidian יוצרת אשכולות נקיים. הערת מרכז אמיתית נוצרת לכל קטגוריה (למשל `Movie`) כדי שאשכולות יוצגו גם כשהקישורים הלא פתורים מוסתרים. המאפיין נכתב כאשר הערה נוצרת ומתעדכן כל פעם שמטה-נתונים שלה משתנים — הרץ `Rebuild graph links` רק אם אתה רוצה לכפות בנייה מחדש מלאה.

---

## שיתוף

כל הערת תוכן מקבלת כפתור **שיתוף** בכותרת שלה (או הרץ `Share current note`). הוא מרנדר תמונת כרטיס — פוסטר, כותרת, שנה, ז'אנר, דירוג IMDb/AniList והדירוג שלך — שאתה יכול לפרסם בכל מקום:

- **בנייד** — כפתור **שיתוף…** פותח את גיליון השיתוף המובנה של המכשיר שלך עם תמונת הכרטיס מצורפת ישירות, כך שתוכל לשלוח אותה ישר לכל אפליקציה.
- **X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, Pinterest** — פותח את חלון הכתיבה של הרשת עם כיתוב מוכן מראש (כותרת, הדירוג שלך, קישור המקור וקישור לתוסף זה). תמונת הכרטיס מועתקת ללוח שלך בו-זמנית, כך שאתה רק מדביק אותה (Ctrl/Cmd+V) לתוך הפוסט.
- **העתק תמונה / העתק טקסט / שמור תמונה** — העתק את הכרטיס המרונדר או את הכיתוב ללוח, או שמור את התמונה לתיקיית הקבצים המצורפים של הכספת שלך לצירוף ידני.

השיתוף מקומי לחלוטין: הכרטיס מצויר בתוך האפליקציה מהמטה-נתונים ומהעטיפה של ההערה עצמה. שום דבר לא מועלה — התוסף רק פותח את כתובת ה-URL של חלון הכתיבה שבחרת בדפדפן שלך.

---

## סנכרון AniList

שמור על סנכרון התקדמות האנימה שלך עם חשבון [AniList](https://anilist.co) שלך.

**הגדרה** — ב-**הגדרות → הספרייה → סנכרון AniList**:

1. רשום לקוח API חינם ב-[anilist.co/settings/developer](https://anilist.co/settings/developer), עם כתובת ההפניה מוגדרת ל-`https://anilist.co/api/v2/oauth/pin`.
2. הדבק את ה-**Client ID**, לחץ על **Connect**, ואשר.
3. AniList מציג לך אסימון גישה — הדבק אותו בתוסף. לחץ על **Test connection** כדי לאשר.

לאחר מכן השתמש בפקודות:

- `Push current note to AniList` — שולח את ההתקדמות של הערת האנימה הפעילה (פרקים שנצפו), הסטטוס (בצפייה / הושלם / מתוכנן) והדירוג שלך לרשימת AniList שלך.
- `Pull progress from AniList` — מאחזר את רשימת האנימה שלך ב-AniList ומעדכן הערות תואמות. המשיכה היא **קדימה בלבד**: היא לעולם לא מסיגה לאחור הערה שמתקדמת יותר באופן מקומי או שכבר הושלמה, והיא משאירה את ה-`My Rating` האישי שלך ללא שינוי.

רק הערות עם `Source: anilist` (שנוספו דרך מקור האנימה של AniList) מסונכרנות. האסימון שלך מאוחסן מקומית בהגדרות התוסף ונשלח רק ל-AniList.

---

## פקודות

| פקודה | תיאור |
| --- | --- |
| `Open Library` | פתח את לשונית גלריית הספרייה. |
| `Add content` | חפש מקור וצור הערת תוכן (או הקלד כותר לידני). |
| `Search your library` | חיפוש מטושטש ופתח כל הערה שכבר נמצאת בספרייה שלך. |
| `Refresh metadata for current note` | משוך מחדש מטה-נתונים עבור הערה פעילה; מעדכן ספירת פרקים בסדרות. |
| `Rebuild graph links` | חבר כל הערת תוכן לקטגוריה, ז'אנרים ויוצרים שלה. |
| `Find & remove duplicates` | סרוק כל הערה לפי URL, הצג כפילויות, והסר נבחרות. |
| `Share current note` | רנדר את ההערה כתמונת כרטיס ושתף אותה ל-X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky או Pinterest. |
| `Push current note to AniList` | שלח את ההתקדמות, הסטטוס והדירוג של הערת האנימה הפעילה לחשבון AniList שלך. |
| `Pull progress from AniList` | אחזר את רשימת AniList שלך ועדכן הערות תואמות (קדימה בלבד). |

---

## תרומה ותמיכה

- **מצאת באג?** פתח [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues).
- **יש לך רעיון לתכונה?** התחל [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions).
- **אוהב את התוסף?** שקול ל-star את המאגר כדי להראות את התמיכה שלך!

---

## תודה לך

אם מצאת את התוסף הזה מועיל, שקול לתמוך בפיתוחו:

| | רשת | כתובת |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |

---