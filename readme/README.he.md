> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | **עברית**

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
  סרטים, סדרות, ספרים, אנימה, קומיקס, משחקים ומוזיקה כפתקים ב-Obsidian, בתצוגת גלריה של כרטיסי עטיפה.
  <br />
  <a href="https://community.obsidian.md/plugins/library">מדריך התוספים של Obsidian</a>
</p>

## תכונות

- חפשו כותר וקבלו פתק עם פוסטר, שנה, ז'אנר, יוצרים, שחקנים ודירוגים.
- עיינו בספרייה ככרטיסי עטיפה, מקובצים לפי קטגוריה וממוינים לפי שם, שנה, דירוג או תאריך.
- סמנו פרקי סדרה או פרקי ספר ודרגו כל אחד; `Progress` ו-`My Rating` מחושבים מהם.
- פתקי סרטים וסדרות מציגים טריילר, תמונות, משך ורשימת עונות.
- ז'אנרים, יוצרים ושחקנים הם קישורים, ולכן הפתקים שלהם אוספים כל כותר בקישורים הנכנסים ובתצוגת הגרף.
- לוח הסטטיסטיקות מציג את רשימות המובילים שבחרתם ואת זמן הצפייה הכולל.
- שתפו כותר כתמונת כרטיס ב-X, ב-Telegram, ב-Reddit ובשש רשתות נוספות.
- סנכרנו את ההתקדמות באנימה עם AniList.
- הממשק מתורגם לכל השפות ש-Obsidian תומך בהן, וה-README הזה ל-[30 שפות](./).

## התחלה מהירה

1. התקינו את **Library** דרך הגדרות ← תוספים קהילתיים ← עיון או מ-[GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).
2. ב-הגדרות ← Library הוסיפו קטגוריה לכל סוג תוכן: סרטים, סדרות, ספרים, קומיקסים, משחקים, מוזיקה, אנימה, ידני.
3. הזינו את מפתחות ה-API שהמקורות שלכם צריכים (ראו למטה).
4. פתחו את הלשונית "ספרייה" מהסרגל, לחצו על **+**, בחרו קטגוריה וחפשו כותר. כותר שכבר נמצא בספרייה פותח את הפתק הקיים שלו.

ערך ה-`Type` של קטגוריה (למשל `Movie`) קובע אילו פתקים שייכים לה, והתיקייה שלה קובעת לאן נשמרים פתקים חדשים. שניהם נמצאים תחת **מתקדם** בהגדרות הקטגוריה.

## מקורות

| קטגוריה | מקור | מפתח |
| --- | --- | --- |
| סרטים, סדרות | OMDb | [מפתח חינמי](https://www.omdbapi.com/apikey.aspx) |
| ספרים | Google Books + Open Library | [מפתח Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) אופציונלי |
| משחקים | RAWG + Steam | [מפתח RAWG חינמי](https://rawg.io/apidocs); ל-Steam לא צריך |
| מוזיקה | Deezer | לא נדרש |
| אנימה | AniList | לא נדרש |
| קומיקס | Comic Vine | [מפתח חינמי](https://comicvine.gamespot.com/api/) |
| כל השאר | ידני: אתם ממלאים את השדות | לא נדרש |

טריילרים, תמונות, משך ורשימות עונות מגיעים מ-Cinemeta בלי מפתח. [מפתח TMDB](https://www.themoviedb.org/settings/api) מוסיף דירוגי עונות ועוד תמונות.

## התקדמות ודירוגים

הכותרת של פתק סדרה מציגה את העונות, וכל עונה נפתחת לפרקים שלה, עם שמות אם המקור מכיר אותם. סמנו פרק או עונה שלמה כנצפו ודרגו מ-1 עד 10. `Progress` סופר את הפרקים המסומנים, הדירוג של עונה הוא הממוצע של הפרקים המדורגים שלה, ו-`My Rating` הוא הממוצע של העונות המדורגות. עונה בלי פרקים מדורגים מקבלת דירוג משלה.

אנימה עובדת באותו אופן, כעונה אחת בלי שמות פרקים.

פרקי הספר מגיעים מתוכן העניינים של אחת המהדורות ב-Open Library. אם לא נמצא תוכן עניינים, הכפתור **הוסף פרקים** בכותרת הפתק מקבל מספר פרקים או שם פרק אחד בכל שורה. מאותו רגע `Progress` סופר פרקים במקום עמודים, והעמודים שכבר נקראו עוברים לאותו חלק יחסי של הפרקים.

פתקים מגרסאות קודמות שומרים על ההתקדמות שלהם. כל עוד לא סימנתם דבר, הפרקים הראשונים עד המספר ב-`Progress` מוצגים כנצפו.

## סטטיסטיקות

הלוח בראש הלשונית "ספרייה" מציג את העמודות שבחרתם ב-הגדרות ← Library ← סטטיסטיקות: שלושת הכותרים בעלי הדירוג הגבוה ביותר בקטגוריה, שלושת הערכים הנפוצים ביותר של מאפיין (ז'אנרים, שחקנים או כל מאפיין אחר) והשעות שהקדשתם לסרטים, סדרות ואנימה. מתחת לתרשים מופיעה השוואה אחת בכל יום, למשל: אפולו 11 יכלה לטוס לירח ובחזרה 8 פעמים.

## קישורים בגרף

`Genre`, `Creator` ו-`Cast` מכילים קישורים כמו `[[Christopher Nolan]]`, ולכן הפתק של ז'אנר או של אדם מציג את הכותרים שלו בקישורים הנכנסים. שמות שהוקלדו ידנית הופכים לקישורים כשהפתק משתנה, ו-`בנה מחדש קישורי גרף` ממיר את כל הספרייה.

## שיתוף ו-AniList

הכפתור **שיתוף** בכותרת הפתק מצייר כרטיס עם פוסטר, שם, שנה, ז'אנר, שחקנים, דירוגים והציון שלכם. במחשב התמונה מועתקת ללוח, והרשת שבחרתם נפתחת עם כיתוב מוכן, כך שנשאר רק להדביק את התמונה בפוסט. בטלפון התמונה עוברת לתפריט השיתוף של המערכת. אפשר גם להעתיק את התמונה או את הכיתוב, או לשמור את התמונה בכספת.

כדי לסנכרן אנימה, רשמו לקוח ב-[anilist.co/settings/developer](https://anilist.co/settings/developer) עם כתובת ההפניה `https://anilist.co/api/v2/oauth/pin`. הדביקו את ה-Client ID ב-הגדרות ← Library ← סנכרון AniList, לחצו על **התחבר** והדביקו את הטוקן ש-AniList מציג. `שלח את הפתק הנוכחי ל-AniList` שולח התקדמות, סטטוס וציון. `משוך התקדמות מ-AniList` מעדכן את הפתקים שלכם, אף פעם לא מחזיר התקדמות אחורה ולא נוגע ב-`My Rating`. רק פתקים עם `Source: anilist` מסונכרנים.

אותם פתקים מסתנכרנים גם עם MyAnimeList. צרו לקוח ב־[myanimelist.net/apiconfig](https://myanimelist.net/apiconfig) עם כתובת ההפניה `http://localhost`, הדביקו את ה־Client ID שלו (ואת ה־Client Secret, אם יש) בהגדרות ← Library ← סנכרון MyAnimeList, לחצו על **התחבר** והדביקו את הכתובת שהדפדפן פותח. התוסף מוצא את הרשומה ב־MyAnimeList של כל כותר דרך AniList ומחדש את האסימון בעצמו. `שלח את הפתק הנוכחי ל-MyAnimeList` ו־`משוך התקדמות מ-MyAnimeList` פועלות כמו המקבילות שלהן ל־AniList.

## Frontmatter

כל כרטיס הוא פתק, וכל מה שהתוסף יודע עליו נמצא ב-frontmatter:

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
      # ...עוד 7 פרקים
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

בסדרה, `Runtime` הוא משך של פרק אחד. ספרים מוסיפים `ISBN` ושומרים פרקים ב-`Chapters` עם אותם שדות `title`, `watched` ו-`my_rating`; אנימה מוסיפה `Rating AniList` ו-`Status`. אפשר לשנות את שם מאפיין העטיפה בהגדרות, למשל ל-`image`.

רענון ממלא רק שדות ריקים, כך שהערכים שערכתם נשמרים. הוא גם מעדכן את סך הפרקים ב-`Progress` ומוסיף עונות ושמות פרקים חדשים.

## פרטיות ושימוש ברשת

הספרייה שלכם היא פתקים רגילים ועובדת בלי חיבור. התוסף מתחבר לרשת כשאתם מחפשים, מרעננים, מסנכרנים או משתפים; כשאתם פותחים פתק מהספרייה, לכל היותר פעם ב-5 דקות לכל פתק; ופעם אחת אחרי עדכון או החלפת מפתח, כדי למלא שדות חדשים. אין טלמטריה, אין אנליטיקה ואין עדכון עצמי. מפתחות ה-API נשארים בהגדרות המקומיות של התוסף ונשלחים רק לשירות שלהם.

| שרת | מתי | מה נשלח |
| --- | --- | --- |
| `www.omdbapi.com` | חיפוש סרטים וסדרות | שם או מזהה IMDb, מפתח OMDb |
| `openlibrary.org` | חיפוש ספרים; חיפוש פרקים כשמוסיפים או פותחים ספר | שם ומחבר, ISBN או מזהה יצירה |
| `covers.openlibrary.org` | עטיפות ספרים | מזהה עטיפה |
| `www.googleapis.com` | חיפוש ספרים | שם, מפתח Google Books |
| `api.rawg.io` | חיפוש משחקים | שם, מפתח RAWG |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | חיפוש משחקים ועטיפות | שם או מזהה אפליקציה ב-Steam |
| `api.deezer.com` | חיפוש מוזיקה | אלבום או אמן |
| `graphql.anilist.co` | חיפוש אנימה; סנכרון AniList; מזהי MyAnimeList לסנכרון | שם; הטוקן שלכם, התקדמות, סטטוס וציון; מזהי AniList |
| `anilist.co` | אתם לוחצים על **התחבר** | Client ID, נפתח בדפדפן |
| `myanimelist.net` | לוחצים על **התחבר** עבור MyAnimeList; חידוש אסימון | Client ID וסוד, קוד הרשאה, אסימון רענון |
| `api.myanimelist.net` | סנכרון MyAnimeList | האסימון שלכם, התקדמות, סטטוס וציון |
| `s4.anilist.co` | באנרים של אנימה | נתיב CDN |
| `comicvine.gamespot.com` | חיפוש קומיקס | שם, מפתח Comic Vine |
| `v3-cinemeta.strem.io` | הוספה או רענון של סרט או סדרה | מזהה IMDb |
| `images.metahub.space`, `episodes.metahub.space` | תמונות | מזהה IMDb, מספרי עונה ופרק |
| `api.themoviedb.org`, `image.tmdb.org` | הוספה או רענון של סרט או סדרה, אם הגדרתם מפתח TMDB | מזהה IMDb ומפתח TMDB; נתיב התמונה |
| `i.ytimg.com` | תמונות מטריילרים | מזהה הסרטון |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | פתיחת פתק עם טריילר | מזהה הסרטון |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | אתם לוחצים על כפתור שיתוף | הכיתוב: שם, הציון שלכם, קישור למקור. התמונה נשארת במכשיר שלכם |

## פקודות

| פקודה | מה היא עושה |
| --- | --- |
| `פתח את הספרייה` | פותחת את הלשונית "ספרייה" |
| `הוסף תוכן` | מחפשת במקור ויוצרת פתק |
| `חפש בספרייה שלך` | מוצאת ופותחת פתק מהספרייה |
| `רענן מטא-נתונים של הפתק הנוכחי` | מביאה מחדש את נתוני הפתק הפעיל |
| `רענן מטא-נתונים של כל הפתקים` | מביאה מחדש את נתוני כל פתקי הספרייה, אחד אחרי השני |
| `בנה מחדש קישורי גרף` | הופכת את `Genre`, `Creator` ו-`Cast` לקישורים |
| `מצא והסר כפולים` | מציגה פתקים עם אותה כתובת URL ומוחקת את אלה שבחרתם |
| `שתף את הפתק הנוכחי` | פותחת את כרטיס השיתוף |
| `שלח את הפתק הנוכחי ל-AniList` | שולחת התקדמות, סטטוס וציון |
| `משוך התקדמות מ-AniList` | מעדכנת פתקים מרשימת ה-AniList שלכם |
| `שלח את הפתק הנוכחי ל-MyAnimeList` | שולחת התקדמות, סטטוס וציון |
| `משוך התקדמות מ-MyAnimeList` | מעדכנת פתקים מרשימת ה-MyAnimeList שלכם |

## תמיכה

דווחו על באגים ב-[Issues](https://github.com/Kigrok/obsidian-library-plugin/issues) והציעו רעיונות ב-[Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions). התוסף מופץ תחת [רישיון MIT](../LICENSE).

אם התוסף מועיל לכם, אפשר לתמוך בו:

| | רשת | כתובת |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
