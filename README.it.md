> [EN](README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | **[IT](README.it.md)** | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

<p align="center">
  <img src="banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Library</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.2.0-blue" alt="Version">
  <img src="https://img.shields.io/github/downloads/Kigrok/obsidian-library-plugin/total?color=brightgreen" alt="Downloads">
  <img src="https://img.shields.io/badge/Obsidian-v1.8.7+-purple" alt="Obsidian Version">
  <img src="https://img.shields.io/github/license/Kigrok/obsidian-library-plugin?color=orange" alt="License">
</p>

<p align="center">
  <b>Organizza i tuoi film, serie, libri e molto altro in una galleria visiva — direttamente all'interno di Obsidian.</b>
  <br />
  Cerca e aggiungi titoli direttamente nell'app, recupera automaticamente i metadati, monitora i progressi e collega tutto al tuo grafo.
</p>

<p align="center">
  <a href="https://community.obsidian.md/plugins/library">Visualizza nella directory Obsidian Community Plugins</a>
</p>

---

## Funzionalità Principali

- **Griglia Visuale di Schede** — Un tab dedicato Library visualizza la tua collezione come una galleria di schede con copertine.
- **Ricerca Integrata** — Cerca e aggiungi titoli direttamente nell'app: OMDb per film e serie, Open Library o Google Books per i libri, RAWG per i giochi, Deezer per la musica, AniList per l'anime, Comic Vine per i fumetti.
- **Monitoraggio Intelligente delle Serie** — Le stagioni e il numero totale degli episodi vengono recuperati automaticamente e mantenuti sincronizzati.
- **Indicatori di Progresso** — Barre di progresso visive sulle schede e negli header delle note mostrano quanto hai guardato o letto.
- **Header delle Note Ricchi** — Ogni nota di contenuto riceve un header generato automaticamente con tutti i metadati chiave.
- **Categorie Personalizzate** — Crea categorie per Film, Serie, Anime, Fumetti, Libri, Giochi, Musica o qualsiasi altra cosa tramite la fonte manuale.
- **Collegamenti nel Grafo** — Una proprietà `Related` nel frontmatter collega ogni nota alla sua categoria, generi e creatori, mantenuta sincronizzata automaticamente per un bel grafo.
- **Schede Condivisibili** — Trasforma qualsiasi nota di contenuto in un'immagine-scheda condivisibile (poster, titolo, anno, genere, punteggio IMDb e la tua valutazione) e pubblicala su X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky o Pinterest — condividila direttamente nelle app del tuo dispositivo, oppure copia/salva l'immagine per usarla ovunque.
- **Ordinamento e Compressione** — Ordina le schede per nome, anno, valutazione o data; comprimi qualsiasi categoria.
- **Statistiche** — Generi principali, creatori principali (solo film e serie) e elementi principali per categoria con classifiche a medaglia.
- **Rilevamento Duplicati** — Impedisce automaticamente l'aggiunta dello stesso titolo due volte per URL. Un comando integrato trova e rimuove i duplicati esistenti.
- **Multilingue** — 31 lingue: inglese, ucraino, russo, bielorusso, kazako, uzbeko, tedesco, spagnolo, francese, italiano, olandese, ceco, croato, polacco, rumeno, turco, azerbaigiano, persiano, hindi, bengali, urdu, tagalog, vietnamita, tailandese, giavanese, giapponese, coreano, cinese, arabo, singalese, ebraico.

---

## Inizio Rapido

### 1. Installazione

Installa **Library** dalla [directory Obsidian Community Plugins](https://community.obsidian.md/plugins/library) (Impostazioni > Plugin comunitari > Sfoglia > cerca "Library"), o installalo manualmente tramite le [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).

### 2. Configurazione Base

1. Vai su **Impostazioni** > **Library**.
2. Aggiungi le tue **Categorie** — seleziona un tipo predefinito (Movies, Series, Books, Comics, Games, Music, Anime o Manual) dal menu a tendina e clicca su **Add category**. Ogni categoria ha un nome visualizzato (tradotto nella tua lingua), un valore `Type` (sempre in inglese, ad esempio `Movie`), una fonte e una cartella opzionale per memorizzare le note.
3. _(Opzionale)_ Inserisci le chiavi API per i servizi che utilizzi: [OMDb](https://www.omdbapi.com/apikey.aspx) per film/serie, [RAWG](https://rawg.io/apidocs) per i giochi, [Comic Vine](https://comicvine.gamespot.com/api/) per i fumetti. Anime (AniList) e musica (Deezer) non richiedono chiave.

### 3. Aggiungere una Scheda per Titolo

Niente più compilazione manuale del frontmatter — aggiungi un film, serie, anime o fumetto semplicemente cercando il suo nome:

1. Apri il tab **Library** dall'icona nella barra laterale (esegui `Open Library`).
2. Clicca sul pulsante **+** in alto a destra della pagina Library (esegui `Add content`).
3. Scegli una categoria, digita il **titolo** nella casella di ricerca e seleziona un risultato.
4. Una scheda viene creata istantaneamente, con poster, anno, genere, creatori e valutazione compilati automaticamente.

Il pulsante **Search** accanto a **+** cerca i titoli già nella tua libreria.

Per le categorie **Manuali** digita semplicemente un titolo e compila la copertina, l'anno e gli altri campi tu stesso.

---

## Statistiche

Il tab Library include una sezione **Statistiche** ripiegabile in alto:

- **Generi Principali** — classificati per frequenza in tutta la tua libreria.
- **Creatori Principali** — classificati per numero di film e serie in cui appaiono.
- **Principali per Categoria** — per ogni categoria (Film, Serie, Libri, ecc.), i primi 3 elementi per valutazione con miniature delle copertine.

---

## Rilevamento Duplicati

Library previene le voci duplicate verificando il campo `URL`:

- **All'aggiunta** — se esiste già una nota con lo stesso URL, apre la nota esistente invece di creare un duplicato.
- **Trova e Rimuovi Duplicati** — esegui questo comando dalla palette per scansionare tutte le note, raggruppare per URL e rimuovere selettivamente i duplicati tramite un modale.

---

## Fonti

Ogni categoria è legata a una fonte che alimenta la sua ricerca:

| Fonte             | Tipi di contenuto | Chiave API                                                  |
| ----------------- | ------------------- | ------------------------------------------------------------ |
| **OMDb**          | Film, Serie         | Chiave gratuita richiesta — [omdbapi.com](https://www.omdbapi.com/apikey.aspx) |
| **Books**         | Libri               | Open Library (nessuna chiave) + Google Books (chiave gratuita opzionale). I risultati vengono uniti — Google Books per primo, Open Library sotto. |
| **RAWG**          | Giochi              | Chiave gratuita richiesta — [rawg.io/apidocs](https://rawg.io/apidocs) |
| **Deezer**        | Musica (album)      | Nessuna                                                     |
| **AniList**         | Anime               | Nessuna — API GraphQL gratuita di AniList, nessuna chiave necessaria |
| **Comic Vine**    | Fumetti             | Chiave gratuita richiesta — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**        | Qualsiasi altro     | Nessuna — digiti il titolo e compili i campi tu stesso      |

---

## Privacy e Utilizzo della Rete

Library è **offline-first**. Il plugin contatta la rete solo quando cerchi attivamente un titolo da aggiungere, e solo con i termini di ricerca che digiti:

| Servizio | Quando | Cosa viene inviato | Perché |
| --- | --- | --- | --- |
| `www.omdbapi.com` | Cerchi in una categoria supportata da OMDb | Il titolo che digiti e la tua chiave API OMDb | Recuperare i metadati di film/serie (anno, genere, cast, valutazione, poster, conteggio episodi) |
| `openlibrary.org` | Cerchi in una categoria Open Library | Il titolo che digiti | Recuperare i metadati dei libri (autore, anno, soggetti, ID copertina) |
| `covers.openlibrary.org` | Una scheda libro ha una copertina | L'ID copertina di Open Library | Caricare l'immagine della copertina |
| `www.googleapis.com` | Cerchi in una categoria Google Books | Il titolo che digiti e la tua chiave Google Books | Recuperare i metadati dei libri (autore, anno, categorie, numero pagine, copertina, ISBN) |
| `api.rawg.io` | Cerchi in una categoria giochi RAWG | Il titolo che digiti e la tua chiave RAWG | Recuperare i metadati dei giochi (anno, genere, sviluppatore, copertina) |
| `api.deezer.com` | Cerchi in una categoria musicale Deezer | L'album o l'artista che digiti | Recuperare i metadati dell'album (artista, anno, genere, conteggio tracce, copertina) |
| `graphql.anilist.co` | Cerchi in una categoria anime | Il titolo che digiti | Recuperare i metadati anime (titolo, anno, genere, episodi, punteggio AniList, studio, poster) |
| `comicvine.gamespot.com` | Cerchi in una categoria fumetti | Il titolo che digiti e la tua chiave Comic Vine | Recuperare i metadati dei fumetti (titolo, anno, editore, conteggio numeri, copertina) |

Nessun altro dato lascia mai il tuo vault. Il plugin **non ha telemetria, nessuna analisi e nessun meccanismo di auto-aggiornamento**. Le chiavi API (OMDb, Google Books, RAWG, Comic Vine) sono memorizzate solo nelle impostazioni locali del plugin e inviate solo ai rispettivi servizi. Le immagini delle copertine vengono caricate direttamente dagli URL restituiti da ciascuna fonte.

---

## Schema Frontmatter

Il plugin legge e scrive nel frontmatter YAML standard. Le note vengono create per te, ma ogni campo è modificabile. `Source` e `Source ID` permettono al plugin di aggiornare i metadati in seguito.

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

> **Aggiornamento automatico delle serie:** Esegui `Refresh metadata for current note` (o apri semplicemente la nota) e il plugin aggiorna il conteggio totale degli episodi in `Progress` (ad esempio da `25/42` a `25/50`) e il conteggio delle `Season`, mantenendo intatto il tuo conteggio visionato.

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

## Collegamenti nel Grafo

Ogni nota di contenuto riceve una proprietà `Related` nel frontmatter, mantenuta aggiornata automaticamente — il corpo della nota non viene mai toccato:

```yaml
Related:
    - "[[Movie]]"
    - "[[Action]]"
    - "[[Sci-Fi]]"
    - "[[Christopher Nolan]]"
```

Questi collegamenti collegano le tue note tramite categorie, generi e creatori condivisi, così la vista grafo di Obsidian forma cluster puliti. Un vero nodo hub viene creato per ogni categoria (ad esempio `Movie`) in modo che i cluster siano visibili anche quando i link non risolti sono nascosti. La proprietà viene scritta quando una nota viene creata e aggiornata ogni volta che i suoi metadati cambiano — esegui `Rebuild graph links` solo se vuoi forzare una ricostruzione completa.

---

## Condivisione

Ogni nota di contenuto riceve un pulsante **Share** nel suo header (o esegui `Share current note`). Genera un'immagine-scheda — poster, titolo, anno, genere, punteggio IMDb/AniList e la tua valutazione — che puoi pubblicare ovunque:

- **Su dispositivi mobili** — il pulsante **Share…** apre il foglio di condivisione nativo del tuo dispositivo con l'immagine-scheda già allegata, così puoi inviarla direttamente a qualsiasi app.
- **X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, Pinterest** — apre il compositore della rete con una didascalia precompilata (titolo, la tua valutazione, il link alla fonte e un link a questo plugin). L'immagine-scheda viene copiata contemporaneamente negli appunti, così basta incollarla (Ctrl/Cmd+V) nel post.
- **Copy image / Copy text / Save image** — copia la scheda generata o la didascalia negli appunti, oppure salva l'immagine nella cartella degli allegati del tuo vault per allegarla manualmente.

La condivisione è completamente locale: la scheda viene disegnata nell'app a partire dai metadati e dalla copertina della nota stessa. Nulla viene caricato — il plugin apre soltanto nel browser l'URL del compositore che scegli.

---

## Comandi

| Comando                              | Descrizione                                                                  |
| ------------------------------------ | ---------------------------------------------------------------------------- |
| `Open Library`                       | Apre il tab galleria di Library.                                             |
| `Add content`                        | Cerca una fonte e crea una nota di contenuto (o digita un titolo per Manual). |
| `Search your library`                | Ricerca fuzzy e apri qualsiasi nota già nella tua libreria.                  |
| `Refresh metadata for current note`  | Recupera nuovamente i metadati per la nota attiva; aggiorna i totali episodi delle serie. |
| `Rebuild graph links`                | Collega ogni nota di contenuto alla sua categoria, generi e creatori.         |
| `Find & remove duplicates`           | Scansiona tutte le note per URL, mostra i duplicati e rimuovi quelli selezionati. |
| `Share current note`                 | Genera la nota come immagine-scheda e condividila su X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky o Pinterest. |

---

## Contribuire e Supporto

- **Hai trovato un bug?** Apri un [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues).
- **Hai un'idea per una funzionalità?** Avvia una [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions).
- **Ti piace il plugin?** Considera di dare una stella al repository per mostrare il tuo supporto!

---

## Grazie

Se trovi questo plugin utile, considera di supportarne lo sviluppo:

| | Rete | Indirizzo |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |

---
