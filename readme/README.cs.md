> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md) | **[CS](README.cs.md)**

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
  Filmy, seriály, knihy, anime, komiksy, hry a hudba jako poznámky v Obsidianu, zobrazené jako galerie obálek.
  <br />
  <a href="https://community.obsidian.md/plugins/library">Adresář pluginů Obsidianu</a>
</p>

## Funkce

- Vyhledejte titul a získejte poznámku s plakátem, rokem, žánrem, tvůrci, obsazením a hodnocením.
- Procházejte knihovnu jako karty s obálkami, seskupené podle kategorií a seřazené podle názvu, roku, hodnocení nebo data.
- Odškrtávejte díly seriálu nebo kapitoly knihy a hodnoťte každý zvlášť; `Progress` a `My Rating` se z nich počítají.
- Poznámky k filmům a seriálům ukazují trailer, záběry, délku a seznam řad.
- Žánry, tvůrci a herci jsou odkazy, takže jejich poznámky shromažďují každý titul ve zpětných odkazech a v grafu.
- Panel statistik ukazuje žebříčky, které si vyberete, a celkový čas sledování.
- Sdílejte titul jako obrázek na X, Telegramu, Redditu a dalších šesti sítích.
- Synchronizujte postup anime s AniList.
- Rozhraní je přeložené do všech jazyků, které Obsidian podporuje, a toto README do [30 jazyků](./).

## Rychlý start

1. Nainstalujte **Library** přes Nastavení → Pluginy třetích stran → Procházet nebo z [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).
2. V Nastavení → Library přidejte kategorii pro každý druh obsahu: Filmy, Serie, Knihy, Komiksy, Hry, Hudba, Anime, Ručně.
3. Zadejte klíče API, které vaše zdroje potřebují (viz níže).
4. Otevřete kartu Knihovna z postranního panelu nástrojů, stiskněte **+**, vyberte kategorii a vyhledejte titul. Titul, který už v knihovně je, otevře svou existující poznámku.

Hodnota `Type` kategorie (například `Movie`) určuje, které poznámky do ní patří, a její složka, kam se ukládají nové poznámky. Obojí najdete pod **Pokročilé** v nastavení kategorie.

## Zdroje

| Kategorie | Zdroj | Klíč |
| --- | --- | --- |
| Filmy, seriály | OMDb | [Bezplatný klíč](https://www.omdbapi.com/apikey.aspx) |
| Knihy | Google Books + Open Library | Volitelný [klíč Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| Hry | RAWG + Steam | [Bezplatný klíč RAWG](https://rawg.io/apidocs); Steam žádný nepotřebuje |
| Hudba | Deezer | Žádný |
| Anime | AniList | Žádný |
| Komiksy | Comic Vine | [Bezplatný klíč](https://comicvine.gamespot.com/api/) |
| Vše ostatní | Ručně: pole vyplňujete sami | Žádný |

Trailery, záběry, délka a seznamy řad přicházejí z Cinemeta bez klíče. [Klíč TMDB](https://www.themoviedb.org/settings/api) přidá hodnocení řad a další záběry.

## Postup a hodnocení

Záhlaví poznámky seriálu vypisuje řady a každá řada se rozbalí do dílů, s názvy, pokud je zdroj zná. Označte díl nebo celou řadu jako zhlédnuté a ohodnoťte je od 1 do 10. `Progress` počítá označené díly, hodnocení řady je průměr jejích hodnocených dílů a `My Rating` je průměr hodnocených řad. Řada bez hodnocených dílů dostane vlastní hodnocení.

Anime funguje stejně, jako jedna řada bez názvů dílů.

Kapitoly knihy pocházejí z obsahu vydání na Open Library. Pokud žádný není, **Přidat kapitoly** v záhlaví poznámky přijme počet kapitol nebo jeden název na řádek. Od té chvíle `Progress` počítá kapitoly místo stran a přečtené strany se převedou na stejný podíl kapitol.

Poznámky ze starších verzí si postup ponechají. Dokud nic neoznačíte, první díly až po počet v `Progress` se zobrazují jako zhlédnuté.

## Statistiky

Panel v horní části karty Knihovna ukazuje sloupce vybrané v Nastavení → Library → Statistiky: tři nejlépe hodnocené tituly kategorie, tři nejčastější hodnoty vlastnosti (žánry, herci nebo jakákoli jiná) a hodiny strávené u filmů, seriálů a anime. Pod grafem se každý den objeví jedno srovnání, například: Apollo 11 mohlo letět na Měsíc a zpět 8krát.

## Propojení v grafu

`Genre`, `Creator` a `Cast` obsahují odkazy jako `[[Christopher Nolan]]`, takže poznámka žánru nebo osoby vypisuje její tituly ve zpětných odkazech. Ručně napsaná jména se stanou odkazy, když se poznámka změní, a `Přestavět odkazy grafu` převede celou knihovnu.

## Sdílení a AniList

**Sdílet** v záhlaví poznámky vykreslí kartu s plakátem, názvem, rokem, žánrem, obsazením, hodnoceními a vaší známkou. Na počítači jde obrázek do schránky a vybraná síť se otevře s popiskem, takže obrázek jen vložíte do příspěvku. Na mobilu dostane obrázek systémová nabídka sdílení. Obrázek nebo popisek můžete také zkopírovat, případně obrázek uložit do trezoru.

Pro synchronizaci anime zaregistrujte klienta na [anilist.co/settings/developer](https://anilist.co/settings/developer) s adresou přesměrování `https://anilist.co/api/v2/oauth/pin`. Vložte Client ID do Nastavení → Library → Synchronizace s AniList, klikněte na **Připojit** a vložte token, který AniList zobrazí. `Odeslat aktuální poznámku do AniList` odešle postup, stav a hodnocení. `Načíst postup z AniList` aktualizuje poznámky, nikdy nevrací postup zpět a nesahá na `My Rating`. Synchronizují se jen poznámky se `Source: anilist`.

## Frontmatter

Každá karta je poznámka a vše, co o ní plugin ví, je ve frontmatteru:

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
      # ...dalších 7 dílů
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

U seriálu je `Runtime` délka jednoho dílu. Knihy navíc mají `ISBN` a kapitoly ukládají do `Chapters` se stejnými poli `title`, `watched` a `my_rating`; anime má `Rating AniList` a `Status`. Vlastnost obálky lze v nastavení přejmenovat, například na `image`.

Obnovení vyplní jen prázdná pole, takže hodnoty, které upravíte, zůstanou. Také aktualizuje celkový počet dílů v `Progress` a přidá nové řady a názvy dílů.

## Soukromí a síť

Vaše knihovna jsou obyčejné poznámky a funguje offline. Plugin jde online, když vyhledáváte, obnovujete, synchronizujete nebo sdílíte; když otevřete poznámku z knihovny, nejvýše jednou za 5 minut pro každou poznámku; a jednou po aktualizaci nebo změně klíče, aby vyplnil nová pole. Nemá telemetrii, analytiku ani samoaktualizaci. Klíče API zůstávají v místním nastavení pluginu a jdou jen ke své službě.

| Hostitel | Kdy | Co se odesílá |
| --- | --- | --- |
| `www.omdbapi.com` | Hledání filmů a seriálů | Název nebo IMDb id, klíč OMDb |
| `openlibrary.org` | Hledání knih; hledání kapitol při přidání nebo otevření knihy | Název a autor, ISBN nebo id díla |
| `covers.openlibrary.org` | Obálky knih | Id obálky |
| `www.googleapis.com` | Hledání knih | Název, klíč Google Books |
| `api.rawg.io` | Hledání her | Název, klíč RAWG |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | Hledání her a obálky | Název nebo id aplikace Steam |
| `api.deezer.com` | Hledání hudby | Album nebo interpret |
| `graphql.anilist.co` | Hledání anime; synchronizace s AniList | Název; váš token, postup, stav a hodnocení |
| `anilist.co` | Kliknete na **Připojit** | Client ID, otevřené v prohlížeči |
| `s4.anilist.co` | Bannery anime | Cesta CDN |
| `comicvine.gamespot.com` | Hledání komiksů | Název, klíč Comic Vine |
| `v3-cinemeta.strem.io` | Přidání nebo obnovení filmu či seriálu | IMDb id |
| `images.metahub.space`, `episodes.metahub.space` | Záběry | IMDb id, čísla řady a dílu |
| `api.themoviedb.org`, `image.tmdb.org` | Přidání nebo obnovení filmu či seriálu, pokud nastavíte klíč TMDB | IMDb id a klíč TMDB; cesta k obrázku |
| `i.ytimg.com` | Záběry z trailerů | Id videa |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Otevření poznámky s trailerem | Id videa |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Kliknete na tlačítko sdílení | Popisek: název, vaše hodnocení, odkaz na zdroj. Obrázek zůstává ve vašem zařízení |

## Příkazy

| Příkaz | Co dělá |
| --- | --- |
| `Otevřít knihovnu` | Otevře kartu Knihovna |
| `Přidat obsah` | Prohledá zdroj a vytvoří poznámku |
| `Hledat v knihovně` | Najde a otevře poznámku z knihovny |
| `Obnovit metadata aktuální poznámky` | Znovu načte aktivní poznámku |
| `Obnovit metadata všech poznámek` | Znovu načte každou poznámku z knihovny, jednu po druhé |
| `Přestavět odkazy grafu` | Převede `Genre`, `Creator` a `Cast` na odkazy |
| `Najít a odstranit duplicity` | Vypíše poznámky se stejnou URL a odstraní vybrané |
| `Sdílet aktuální poznámku` | Otevře kartu ke sdílení |
| `Odeslat aktuální poznámku do AniList` | Odešle postup, stav a hodnocení |
| `Načíst postup z AniList` | Aktualizuje poznámky z vašeho seznamu AniList |

## Podpora

Chyby hlaste v [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues), nápady v [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions). Plugin je šířen pod [licencí MIT](../LICENSE).

Pokud je pro vás plugin užitečný, můžete ho podpořit:

| | Síť | Adresa |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
