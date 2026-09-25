> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md) | **[CS](README.cs.md)**

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
  <b>Uspořádejte své filmy, seriály, knihy a další do vizuální galerie — přímo uvnitř Obsidian.</b>
  <br />
  Vyhledávejte a přidávejte tituly přímo v aplikaci, automaticky načítejte metadata, sledujte postup a propojte vše se svým grafem.
</p>

<p align="center">
  <a href="https://community.obsidian.md/plugins/library">Zobrazit v adresáři Obsidian Community Plugins</a>
</p>

---

## Hlavní Funkce

- **Vizuální Mřížka Karet** — Vyhrazená záložka Library zobrazuje vaši sbírku jako galerii karet s obaly.
- **Vestavěné Vyhledávání** — Vyhledávejte a přidávejte tituly přímo v aplikaci: OMDb pro filmy a seriály, Open Library nebo Google Books pro knihy, RAWG/Steam pro hry, Deezer pro hudbu, AniList pro anime, Comic Vine pro komiksy.
- **Chytré Sledování Seriálů** — Řady a celkový počet epizod se automaticky načítají a udržují synchronizované.
- **Indikátory Postupu** — Vizuální ukazatele průběhu na kartách a hlavičkách poznámek ukazují, kolik jste viděli nebo přečetli.
- **Bohaté Hlavičky Poznámek** — Každá obsahová poznámka dostane automaticky generovanou hlavičku se všemi důležitými metadaty.
- **Trailery, fotky a série** — Poznámky k filmům a seriálům zobrazují vložený trailer YouTube/Vimeo, řadu fotek a délku; seriály navíc dostávají seznam sérií s počtem epizod, hodnocením a trailery k jednotlivým sériím.
- **Vlastní Kategorie** — Vytvářejte kategorie pro Filmy, Seriály, Anime, Komiksy, Knihy, Hry, Hudbu nebo cokoliv jiného přes manuální zdroj.
- **Grafické Odkazy** — Žánry, tvůrci a herci se ukládají jako odkazy ve vlastních vlastnostech `Genre`, `Creator` a `Cast`, takže poznámka každého žánru, tvůrce a herce sbírá své tituly ve zpětných odkazech a graf ukáže vše.
- **Sdílitelné Karty** — Proměňte libovolnou obsahovou poznámku ve sdílitelný obrázek karty (poster, název, rok, žánr, hodnocení IMDb a vaše hodnocení) a zveřejněte ji na X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky nebo Pinterest — sdílejte ji přímo do aplikací ve vašem zařízení, nebo obrázek zkopírujte či uložte a použijte kdekoliv.
- **AniList Sync** — Odešlete postup, stav a hodnocení svého anime přímo na svůj AniList účet, nebo stáhněte svůj seznam zpět do svých poznámek.
- **Řazení a Skládání** — Řaďte karty podle názvu, roku, hodnocení nebo data; sbalte libovolnou kategorii — zůstane sbalená i po restartu.
- **Statistiky** — Sloupce si vyberete sami: nejlépe hodnocené tituly libovolné kategorie nebo nejčastější hodnoty libovolné vlastnosti (žánry, tvůrci, herci…), k tomu graf doby sledování.
- **Detekce Duplicit** — Automaticky zabraňuje přidání stejného titulu dvakrát podle URL. Vestavěný příkaz najde a odstraní existující duplicity.
- **Vícejazyčnost** — rozhraní pluginu je přeloženo do **všech jazyků, které Obsidian podporuje** (70+), takže vždy odpovídá jazyku vašeho Obsidianu. Úplné překlady README existují pro 30 z nich (viz lišta jazyků nahoře).

---

## Rychlý Start

### 1. Instalace

Nainstalujte **Library** z [adresáře Obsidian Community Plugins](https://community.obsidian.md/plugins/library) (Nastavení > Komunitní pluginy > Procházet > hledat "Library"), nebo jej nainstalujte ručně přes [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).

### 2. Základní Nastavení

1. Přejděte na **Nastavení** > **Library**.
2. Přidejte své **Kategorie** — vyberte předdefinovaný typ (Movies, Series, Books, Comics, Games, Music, Anime nebo Manual) z rozbalovacího seznamu a klikněte na **Přidat kategorii**. Každá kategorie má zobrazovaný název (přeložený do vašeho jazyka), hodnotu `Type` (vždy anglicky, např. `Movie`), zdroj a volitelnou složku pro ukládání poznámek.
3. _(Volitelné)_ Zadejte API klíče pro služby, které používáte: [OMDb](https://www.omdbapi.com/apikey.aspx) pro filmy/seriály, [RAWG](https://rawg.io/apidocs) pro hry, [Comic Vine](https://comicvine.gamespot.com/api/) pro komiksy, [TMDB](https://www.themoviedb.org/settings/api) pro trailery, fotky a údaje o sériích, [Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) pro vyhledávání knih. Anime (AniList), hudba (Deezer) a Steam nevyžadují klíč.

### 3. Přidání Karty podle Názvu

Žádné ruční vyplňování frontmatteru — přidejte film, seriál, anime nebo komiks jednoduše vyhledáním jeho názvu:

1. Otevřete záložku **Library** z ikony na panelu (nebo spusťte `Otevřít knihovnu`).
2. Klikněte na tlačítko **+** v pravé horní části stránky Library (nebo spusťte `Přidat obsah`).
3. Vyberte kategorii, zadejte **název** do vyhledávacího pole a vyberte výsledek.
4. Karta se okamžitě vytvoří s automaticky vyplněným posterem, rokem, žánrem, tvůrci a hodnocením.

Tlačítko **Hledat v knihovně** vedle **+** vyhledává tituly, které již máte v knihovně.

Pro **Manuální** kategorie jednoduše zadáte název a sami vyplníte obal, rok a další pole.

---

## Statistiky

Nahoře na kartě Knihovna zobrazuje sbalitelná sekce **Statistiky** sloupce, které si vyberete:

- **Žebříčky kategorií** — tři nejlépe hodnocené tituly kategorie s obálkami: *Top filmy*, *Top knihy* a tak dále. Řazeno podle `My Rating`, jinak podle `Rating IMDB`.
- **Žebříčky vlastností** — tři nejčastější hodnoty vlastnosti v celé knihovně: *Top žánry*, *Top tvůrci*, *Top herci* nebo jakákoli jiná vlastnost, například *Top: Author*. `Sci-Fi`, `sci-fi` a `[[Sci-Fi]]` se počítají jako jedna hodnota.
- **Doba sledování** — graf hodin strávených u filmů, seriálů a anime, spočítaný z polí `Runtime` a `Progress` každé poznámky.

Nastavuje se v **Nastavení → Library → Statistiky**: **Přidat žebříček** nabízí vaše kategorie a vlastnosti nalezené v poznámkách, ikona koše sloupec odebere a přepínač skryje graf doby sledování. Sloupce jdou v pořadí přidání; nová kategorie rovnou přidá svůj žebříček.

Sbalené kategorie zůstanou sbalené i po restartu.

---

## Detekce Duplicit

Library zabraňuje duplicitním záznamům kontrolou pole `URL`:

- **Při přidání** — pokud již existuje poznámka se stejnou URL, otevře existující poznámku místo vytvoření duplikátu.
- **Najít a Odstranit Duplicity** — spusťte tento příkaz z palety pro prohledání všech poznámek, seskupení podle URL a selektivní odstranění duplicit přes modální okno.

---

## Zdroje

Každá kategorie je vázána na zdroj, který pohání její vyhledávání:

| Zdroj              | Typy obsahu    | API klíč                                                     |
| ------------------ | --------------- | ------------------------------------------------------------ |
| **OMDb**           | Filmy, Seriály  | Vyžadován bezplatný klíč — [omdbapi.com](https://www.omdbapi.com/apikey.aspx) |
| **Books**          | Knihy           | Open Library (bez klíče) + Google Books (volitelný bezplatný klíč). Výsledky jsou sloučeny — Google Books první, Open Library pod. |
| **Games**           | Hry             | RAWG (vyžadován bezplatný klíč — [rawg.io/apidocs](https://rawg.io/apidocs)) + Steam (žádný). Výsledky jsou sloučeny — RAWG první, Steam pod. |
| **Deezer**         | Hudba (alba)    | Žádný                                                       |
| **AniList**        | Anime           | Žádný — bezplatná AniList GraphQL API, klíč není potřeba |
| **Comic Vine**     | Komiksy         | Vyžadován bezplatný klíč — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**         | Cokoliv jiného  | Žádný — zadáte název a vyplníte pole sami                   |

Poznámky k filmům a seriálům lze dále obohatit pomocí **TMDB** (volitelný bezplatný klíč): trailer, fotky, délka a seznam sérií seriálu se načtou a zapíší do frontmatteru poznámky.

---

## Soukromí a Využití Sítě

Library funguje **offline-first**: vaše knihovna jsou obyčejné poznámky a funguje i bez připojení. Plugin odesílá pouze údaje uvedené níže, a to jen v těchto případech:

- **Když jednáte vy:** hledáte titul, obnovujete metadata, spouštíte příkaz AniList nebo kliknete na tlačítko sdílení.
- **Když otevřete poznámku z knihovny:** její metadata se obnoví ze zdroje podle `Source ID`, nejvýše jednou za 5 minut pro každou poznámku; poznámka bez `Source ID` se vyhledá podle svého názvu.
- **Po aktualizaci pluginu nebo změně API klíče:** průchod na pozadí jednou obnoví poznámky vaší knihovny z jejich zdrojů, jednu poznámku po druhé.

Obaly, fotografie a přehrávače trailerů, na které vaše poznámky odkazují, se načítají z hostitelů uvedených níže.

| Služba | Kdy | Co se odesílá | Proč |
| --- | --- | --- | --- |
| `www.omdbapi.com` | Vyhledáváte v kategorii podporované OMDb | Název, který zadáte, a váš OMDb API klíč | Načtení metadat filmů/seriálů (rok, žánre, obsazení, hodnocení, poster, počty epizod) |
| `openlibrary.org` | Vyhledáváváte v kategorii Open Library | Název, který zadáte | Načtení metadat knih (autor, rok, předměty, ID obalu) |
| `covers.openlibrary.org` | Karta knihy má obal | ID obalu Open Library | Načtení obrázku obalu |
| `www.googleapis.com` | Vyhledáváváte v kategorii Google Books | Název, který zadáte, a váš Google Books klíč | Načtení metadat knih (autor, rok, kategorie, počet stránek, obal, ISBN) |
| `api.rawg.io` | Vyhledáváváte v kategorii her RAWG | Název, který zadáte, a váš RAWG klíč | Načtení metadat her (rok, žánre, vývojář, obal) |
| `api.deezer.com` | Vyhledáváváte v kategorii hudby Deezer | Album nebo umělec, který zadáte | Načtení metadat alba (umělec, rok, žánre, počet stop, obal) |
| `graphql.anilist.co` | Vyhledáváte v kategorii anime | Název, který zadáte | Načtení metadat anime (název, rok, žánr, epizody, skóre AniList, studio, poster) |
| `graphql.anilist.co` | Spustíte příkaz synchronizace s AniList | Váš AniList přístupový token a postup, stav a hodnocení poznámky | Čtení nebo aktualizace vašeho AniList anime seznamu |
| `anilist.co` | Kliknete na **Připojit** v nastavení synchronizace s AniList | Vaše AniList Client ID | Otevření autorizační stránky AniList v prohlížeči |
| `comicvine.gamespot.com` | Vyhledáváváte v kategorii komiksů | Název, který zadáte, a váš Comic Vine klíč | Načtení metadat komiksů (název, rok, vydavatel, počet čísel, obal) |
| `store.steampowered.com` | Hledáte nebo přidáváte hru ze Steamu | Zadaný název nebo ID aplikace Steam | Načtení metadat hry (rok, žánr, vývojář, obal) |
| `cdn.cloudflare.steamstatic.com` | Karta hry ze Steamu má obal | ID aplikace Steam | Načtení obrázku obalu |
| `api.themoviedb.org` | Přidáte nebo obnovíte poznámku filmu/seriálu s klíčem TMDB | IMDb ID poznámky a váš klíč TMDB | Načtení traileru, fotek, délky a seznamu sérií |
| `image.tmdb.org` | Poznámka filmu/seriálu obsahuje fotky | Cesta k obrázku TMDB | Načtení fotek |
| `v3-cinemeta.strem.io` | Přidáváte nebo obnovujete poznámku o filmu či seriálu | IMDb ID poznámky | Načtení traileru, záběrů, délky a seznamu sérií seriálu – bez klíče |
| `images.metahub.space` | Poznámka o filmu či seriálu má záběry | IMDb ID poznámky | Načtení záběrů (pozadí) |
| `episodes.metahub.space` | Poznámka o seriálu má záběry epizod | IMDb ID seriálu a čísla série a epizody | Načtení záběrů epizod |
| `i.ytimg.com` | Poznámka o filmu zobrazuje záběry z traileru | ID videa traileru | Načtení záběrů z traileru |
| `s4.anilist.co` | Poznámka o anime má banner | Cesta na CDN AniList | Načtení obrázku banneru |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Otevřete poznámku s trailerem | ID traileru | Vložení přehrávače traileru |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Kliknete na tlačítko sdílení | Popisek karty (název, vaše hodnocení, odkaz na zdroj) | Otevření okna sdílení zvolené sítě s předvyplněným příspěvkem — obrázek karty zůstává lokální |

Žádná další data nikdy neopustí váš vault. Plugin **nemá telemetrii, analytiku ani mechanismus samoaktualizace**. API klíče (OMDb, Google Books, RAWG, Comic Vine, TMDB) jsou uloženy pouze v místních nastaveních pluginu a odesílány pouze příslušným službám. Obrázky obalů se načítají přímo z URL vrácených jednotlivými zdroji.

---

## Schéma Frontmatter

Plugin čte a zapisuje do standardního YAML frontmatteru. Poznámky se pro vás vytvářejí, ale každé pole je editovatelné. `Source` a `Source ID` umožňují pluginu později aktualizovat metadata.

### Movie

> **Vlastnost obalu** — vlastnost frontmatteru s obalem lze přejmenovat v **Nastavení → Library** (například na `image`); stávající poznámky fungují dál.

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

> **Automatická aktualizace seriálů:** Spusťte `Obnovit metadata aktuální poznámky` (nebo jednoduše otevřete poznámku) a plugin aktualizuje celkový počet epizod v `Progress` (např. z `25/42` na `25/50`) a počet `Season`, přičemž váš počet zhlédnutých zůstane nedotčený.

> **Trailer, fotky a série:** S nastaveným klíčem TMDB plugin automaticky vyplní `Trailer`, `Gallery`, `Runtime` a (u seriálů) `Seasons` — `Runtime` je délka filmu v minutách, u seriálu minuty na epizodu. Hlavička poznámky pak zobrazí vložený přehrávač, řadu fotek a seznam sérií s počtem epizod, hodnocením a tlačítky trailerů. Každé pole je obyčejný frontmatter: upravte nebo smažte ho a plugin při další aktualizaci vaše hodnoty ponechá. Každá nová verze pluginu navíc spustí jeden průchod knihovnou na pozadí, který doplní nově přidaná pole – poznámku po poznámce, bez blokování aplikace.

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

## Grafické Odkazy

Žánry, tvůrci a u filmů a seriálů i herci se ukládají jako odkazy ve vlastních vlastnostech:

```yaml
Genre:
    - "[[Action]]"
    - "[[Sci-Fi]]"
Creator:
    - "[[Christopher Nolan]]"
Cast:
    - "[[Leonardo DiCaprio]]"
```

Poznámka každého žánru, tvůrce a herce tak ve zpětných odkazech ukazuje všechny jeho tituly a graf přes ně propojuje poznámky. Obyčejné názvy — zadané ručně nebo ponechané dřívější verzí — se při každé změně poznámky stanou odkazy; odkaz s aliasem zůstane beze změny. `Přestavět odkazy grafu` převede celou knihovnu najednou. Vlastnost `Related` z dřívějších verzí se už nepoužívá a z poznámek se odstraní.

---

## Sdílení

Každá obsahová poznámka má ve své hlavičce tlačítko **Sdílet** (nebo spusťte `Sdílet aktuální poznámku`). Vykreslí obrázek karty — poster, název, rok, žánr, hodnocení IMDb/AniList a vaše hodnocení — který můžete zveřejnit kdekoliv:

- **Na mobilu** — tlačítko **Sdílet…** otevře nativní panel sdílení vašeho zařízení s přímo přiloženým obrázkem karty, takže jej můžete poslat rovnou do libovolné aplikace.
- **X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, Pinterest** — otevře editor příspěvku dané sítě s předvyplněným popiskem (název, vaše hodnocení, odkaz na zdroj a odkaz na tento plugin). Obrázek karty se zároveň zkopíruje do schránky, takže jej stačí vložit (Ctrl/Cmd+V) do příspěvku.
- **Kopírovat obrázek / Kopírovat text / Uložit obrázek** — zkopírujte vykreslenou kartu nebo popisek do schránky, nebo obrázek uložte do složky příloh vašeho vaultu a přiložte jej ručně.

Sdílení je zcela lokální: karta se vykresluje přímo v aplikaci z vlastních metadat a obalu poznámky. Nic se nenahrává — plugin pouze otevře ve vašem prohlížeči adresu URL editoru, který zvolíte.

---

## AniList Sync

Udržujte postup svého anime synchronizovaný s vaším [AniList](https://anilist.co) účtem.

**Nastavení** — v **Nastavení → Library → Synchronizace s AniList**:

1. Zaregistrujte bezplatného API klienta na [anilist.co/settings/developer](https://anilist.co/settings/developer) s přesměrovací URL nastavenou na `https://anilist.co/api/v2/oauth/pin`.
2. Vložte **Client ID**, klikněte na **Připojit** a autorizujte.
3. AniList vám zobrazí přístupový token — vložte jej do pluginu. Klikněte na **Otestovat připojení** pro potvrzení.

Poté použijte příkazy:

- `Odeslat aktuální poznámku do AniList` — odešle postup aktivní anime poznámky (zhlédnuté epizody), stav (sleduji / dokončeno / plánuji) a vaše hodnocení do vašeho AniList seznamu.
- `Načíst postup z AniList` — načte váš AniList anime seznam a aktualizuje odpovídající poznámky. Stahování je **pouze dopředné**: nikdy nevrátí zpět poznámku, která je lokálně dále nebo již dokončená, a ponechá vaše osobní `My Rating` beze změny.

Synchronizují se pouze poznámky s `Source: anilist` (přidané přes zdroj anime AniList). Váš token je uložen lokálně v nastaveních pluginu a je odesílán pouze na AniList.

---

## Příkazy

| Příkaz                               | Popis                                                                     |
| ------------------------------------ | ------------------------------------------------------------------------- |
| `Otevřít knihovnu`                       | Otevře záložku galerie Library.                                           |
| `Přidat obsah`                        | Prohledá zdroj a vytvoří obsahovou poznámku (nebo zadejte název pro Manual). |
| `Hledat v knihovně`                | Fuzzy vyhledávání a otevření libovolné poznámky ve vaší knihovně.         |
| `Obnovit metadata aktuální poznámky`  | Znovu načte metadata pro aktivní poznámku; aktualizuje celkové počty epizod seriálů. |
| `Přestavět odkazy grafu`                | Převede `Genre`, `Creator` a `Cast` na odkazy ve všech poznámkách knihovny. |
| `Najít a odstranit duplicity`           | Prohledá všechny poznámky podle URL, zobrazí duplicity a odstraní vybrané. |
| `Sdílet aktuální poznámku`                 | Vykreslí poznámku jako obrázek karty a sdílí ji na X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky nebo Pinterest. |
| `Odeslat aktuální poznámku do AniList`       | Odešle postup, stav a hodnocení aktivní anime poznámky na váš AniList účet. |
| `Načíst postup z AniList`         | Načte váš AniList seznam a aktualizuje odpovídající poznámky (pouze dopředně). |
| `Obnovit metadata všech poznámek` | Načíst metadata všech poznámek v knihovně – jednu po druhé, na pozadí. |

---

## Přispívání a Podpora

- **Našli jste bug?** Otevřete [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues).
- **Máte nápad na funkci?** Spusťte [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions).
- **Líbí se vám plugin?** Zvažte dát hvězdičku repozitáři, abyste ukázali svou podporu!

---

## Licence

[MIT License](LICENSE) — můžete ji volně používat, upravovat a šířit.

---

## Děkujeme

Pokud považujete tento plugin za užitečný, zvažte podporu jeho vývoje:

| | Síť | Adresa |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |

---
