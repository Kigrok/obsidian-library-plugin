> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md) | **[CS](README.cs.md)**

<p align="center">
  <img src="../banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Library</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.2.1-blue" alt="Version">
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
- **Vestavěné Vyhledávání** — Vyhledávejte a přidávejte tituly přímo v aplikaci: OMDb pro filmy a seriály, Open Library nebo Google Books pro knihy, RAWG pro hry, Deezer pro hudbu, AniList pro anime, Comic Vine pro komiksy.
- **Chytré Sledování Seriálů** — Řady a celkový počet epizod se automaticky načítají a udržují synchronizované.
- **Indikátory Postupu** — Vizuální ukazatele průběhu na kartách a hlavičkách poznámek ukazují, kolik jste viděli nebo přečetli.
- **Bohaté Hlavičky Poznámek** — Každá obsahová poznámka dostane automaticky generovanou hlavičku se všemi důležitými metadaty.
- **Vlastní Kategorie** — Vytvářejte kategorie pro Filmy, Seriály, Anime, Komiksy, Knihy, Hry, Hudbu nebo cokoliv jiného přes manuální zdroj.
- **Grafické Odkazy** — Vlastnost `Related` v frontmatteru propojuje každou poznámku s její kategorií, žánry a tvůrci, automaticky synchronizovaná pro krásný graf.
- **Sdílitelné Karty** — Proměňte libovolnou obsahovou poznámku ve sdílitelný obrázek karty (poster, název, rok, žánr, hodnocení IMDb a vaše hodnocení) a zveřejněte ji na X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky nebo Pinterest — sdílejte ji přímo do aplikací ve vašem zařízení, nebo obrázek zkopírujte či uložte a použijte kdekoliv.
- **AniList Sync** — Odešlete postup, stav a hodnocení svého anime přímo na svůj AniList účet, nebo stáhněte svůj seznam zpět do svých poznámek.
- **Řazení a Skládání** — Řaďte karty podle názvu, roku, hodnocení nebo data; sbíjejte libovolné kategorie.
- **Statistiky** — Nejlepší žánry, nejlepší tvůrci (pouze filmy a seriály) a nejlepší položky v každé kategorii s medailovým žebříčkem.
- **Detekce Duplicit** — Automaticky zabraňuje přidání stejného titulu dvakrát podle URL. Vestavěný příkaz najde a odstraní existující duplicity.
- **Vícejazyčnost** — 31 jazyků: angličtina, ukrajinština, ruština, běloruština, kazaština, uzbečtina, němština, španělština, francouzština, italština, nizozemština, čeština, chorvatština, polština, rumunština, turečtina, ázerbájdžánština, perština, hindština, bengálština, urdština, tagalština, vietnamština, thajština, javánština, japonština, korejština, čínština, arabština, sinhalština, hebrejština.

---

## Rychlý Start

### 1. Instalace

Nainstalujte **Library** z [adresáře Obsidian Community Plugins](https://community.obsidian.md/plugins/library) (Nastavení > Komunitní pluginy > Procházet > hledat "Library"), nebo jej nainstalujte ručně přes [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).

### 2. Základní Nastavení

1. Přejděte na **Nastavení** > **Library**.
2. Přidejte své **Kategorie** — vyberte předdefinovaný typ (Movies, Series, Books, Comics, Games, Music, Anime nebo Manual) z rozbalovacího seznamu a klikněte na **Add category**. Každá kategorie má zobrazovaný název (přeložený do vašeho jazyka), hodnotu `Type` (vždy anglicky, např. `Movie`), zdroj a volitelnou složku pro ukládání poznámek.
3. _(Volitelné)_ Zadejte API klíče pro služby, které používáte: [OMDb](https://www.omdbapi.com/apikey.aspx) pro filmy/seriály, [RAWG](https://rawg.io/apidocs) pro hry, [Comic Vine](https://comicvine.gamespot.com/api/) pro komiksy. Anime (AniList) a hudba (Deezer) nepotřebují klíč.

### 3. Přidání Karty podle Názvu

Žádné ruční vyplňování frontmatteru — přidejte film, seriál, anime nebo komiks jednoduše vyhledáním jeho názvu:

1. Otevřete záložku **Library** z ikony na panelu (nebo spusťte `Open Library`).
2. Klikněte na tlačítko **+** v pravé horní části stránky Library (nebo spusťte `Add content`).
3. Vyberte kategorii, zadejte **název** do vyhledávacího pole a vyberte výsledek.
4. Karta se okamžitě vytvoří s automaticky vyplněným posterem, rokem, žánrem, tvůrci a hodnocením.

Tlačítko **Search** vedle **+** vyhledává tituly, které již máte v knihovně.

Pro **Manuální** kategorie jednoduše zadáte název a sami vyplníte obal, rok a další pole.

---

## Statistiky

Záložka Library obsahuje nahoře sbalitelnou sekci **Statistiky**:

- **Nejlepší Žánry** — seřazeny podle frekvence v celé knihovně.
- **Nejlepší Tvůrci** — seřazeni podle počtu filmů a seriálů, ve kterých se objevují.
- **Nejlepší v Každé Kategorii** — pro každou kategorii (Filmy, Seriály, Knihy atd.) top 3 položky podle hodnocení s miniaturami obalů.

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
| **RAWG**           | Hry             | Vyžadován bezplatný klíč — [rawg.io/apidocs](https://rawg.io/apidocs) |
| **Deezer**         | Hudba (alba)    | Žádný                                                       |
| **AniList**        | Anime           | Žádný — bezplatná AniList GraphQL API, klíč není potřeba |
| **Comic Vine**     | Komiksy         | Vyžadován bezplatný klíč — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**         | Cokoliv jiného  | Žádný — zadáte název a vyplníte pole sami                   |

---

## Soukromí a Využití Sítě

Library je **offline-první**. Plugin kontaktuje síť pouze, když aktivně vyhledáváte titul pro přidání, a pouze s vyhledávacími termíny, které zadáte:

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
| `comicvine.gamespot.com` | Vyhledáváváte v kategorii komiksů | Název, který zadáte, a váš Comic Vine klíč | Načtení metadat komiksů (název, rok, vydavatel, počet čísel, obal) |

Žádná další data nikdy neopustí váš vault. Plugin **nemá telemetrii, analytiku ani mechanismus samoaktualizace**. API klíče (OMDb, Google Books, RAWG, Comic Vine) jsou uloženy pouze v místních nastaveních pluginu a odesílány pouze příslušným službám. Obrázky obalů se načítají přímo z URL vrácených jednotlivými zdroji.

---

## Schéma Frontmatter

Plugin čte a zapisuje do standardního YAML frontmatteru. Poznámky se pro vás vytvářejí, ale každé pole je editovatelné. `Source` a `Source ID` umožňují pluginu později aktualizovat metadata.

### Movie

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

### Series

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

> **Automatická aktualizace seriálů:** Spusťte `Refresh metadata for current note` (nebo jednoduše otevřete poznámku) a plugin aktualizuje celkový počet epizod v `Progress` (např. z `25/42` na `25/50`) a počet `Season`, přičemž váš počet zhlédnutých zůstane nedotčený.

### Book

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

### Anime

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

### Comic

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

## Grafické Odkazy

Každá obsahová poznámka dostane vlastnost `Related` v frontmatteru, která se automaticky udržuje aktuální — tělo poznámky se nikdy nemění:

```yaml
Related:
    - "[[Movie]]"
    - "[[Action]]"
    - "[[Sci-Fi]]"
    - "[[Christopher Nolan]]"
```

Tyto odkazy propojují vaše poznámky prostřednictvím sdílených kategorií, žánrů a tvůrců, takže zobrazení grafu Obsidian tvoří čisté klastery. Pro každou kategorii se vytvoří skutečný hub uzel (např. `Movie`), aby se klastry zobrazovaly i skrytými nerozlišenými odkazy. Vlastnost se zapíše při vytvoření poznámky a aktualizuje se při každé změně jejích metadat — spusťte `Rebuild graph links` pouze pokud chcete vynutit kompletní přestavbu.

---

## Sdílení

Každá obsahová poznámka má ve své hlavičce tlačítko **Share** (nebo spusťte `Share current note`). Vykreslí obrázek karty — poster, název, rok, žánr, hodnocení IMDb/AniList a vaše hodnocení — který můžete zveřejnit kdekoliv:

- **Na mobilu** — tlačítko **Share…** otevře nativní panel sdílení vašeho zařízení s přímo přiloženým obrázkem karty, takže jej můžete poslat rovnou do libovolné aplikace.
- **X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, Pinterest** — otevře editor příspěvku dané sítě s předvyplněným popiskem (název, vaše hodnocení, odkaz na zdroj a odkaz na tento plugin). Obrázek karty se zároveň zkopíruje do schránky, takže jej stačí vložit (Ctrl/Cmd+V) do příspěvku.
- **Copy image / Copy text / Save image** — zkopírujte vykreslenou kartu nebo popisek do schránky, nebo obrázek uložte do složky příloh vašeho vaultu a přiložte jej ručně.

Sdílení je zcela lokální: karta se vykresluje přímo v aplikaci z vlastních metadat a obalu poznámky. Nic se nenahrává — plugin pouze otevře ve vašem prohlížeči adresu URL editoru, který zvolíte.

---

## AniList Sync

Udržujte postup svého anime synchronizovaný s vaším [AniList](https://anilist.co) účtem.

**Nastavení** — v **Nastavení → Library → AniList sync**:

1. Zaregistrujte bezplatného API klienta na [anilist.co/settings/developer](https://anilist.co/settings/developer) s přesměrovací URL nastavenou na `https://anilist.co/api/v2/oauth/pin`.
2. Vložte **Client ID**, klikněte na **Connect** a autorizujte.
3. AniList vám zobrazí přístupový token — vložte jej do pluginu. Klikněte na **Test connection** pro potvrzení.

Poté použijte příkazy:

- `Push current note to AniList` — odešle postup aktivní anime poznámky (zhlédnuté epizody), stav (sleduji / dokončeno / plánuji) a vaše hodnocení do vašeho AniList seznamu.
- `Pull progress from AniList` — načte váš AniList anime seznam a aktualizuje odpovídající poznámky. Stahování je **pouze dopředné**: nikdy nevrátí zpět poznámku, která je lokálně dále nebo již dokončená, a ponechá vaše osobní `My Rating` beze změny.

Synchronizují se pouze poznámky s `Source: anilist` (přidané přes zdroj anime AniList). Váš token je uložen lokálně v nastaveních pluginu a je odesílán pouze na AniList.

---

## Příkazy

| Příkaz                               | Popis                                                                     |
| ------------------------------------ | ------------------------------------------------------------------------- |
| `Open Library`                       | Otevře záložku galerie Library.                                           |
| `Add content`                        | Prohledá zdroj a vytvoří obsahovou poznámku (nebo zadejte název pro Manual). |
| `Search your library`                | Fuzzy vyhledávání a otevření libovolné poznámky ve vaší knihovně.         |
| `Refresh metadata for current note`  | Znovu načte metadata pro aktivní poznámku; aktualizuje celkové počty epizod seriálů. |
| `Rebuild graph links`                | Propojí každou obsahovou poznámku s kategorií, žánry a tvůrci.            |
| `Find & remove duplicates`           | Prohledá všechny poznámky podle URL, zobrazí duplicity a odstraní vybrané. |
| `Share current note`                 | Vykreslí poznámku jako obrázek karty a sdílí ji na X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky nebo Pinterest. |
| `Push current note to AniList`       | Odešle postup, stav a hodnocení aktivní anime poznámky na váš AniList účet. |
| `Pull progress from AniList`         | Načte váš AniList seznam a aktualizuje odpovídající poznámky (pouze dopředně). |

---

## Přispívání a Podpora

- **Našli jste bug?** Otevřete [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues).
- **Máte nápad na funkci?** Spusťte [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions).
- **Líbí se vám plugin?** Zvažte dát hvězdičku repozitáři, abyste ukázali svou podporu!

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
