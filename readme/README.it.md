> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | **[IT](README.it.md)** | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

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
- **Ricerca Integrata** — Cerca e aggiungi titoli direttamente nell'app: OMDb per film e serie, Open Library o Google Books per i libri, RAWG/Steam per i giochi, Deezer per la musica, AniList per l'anime, Comic Vine per i fumetti.
- **Monitoraggio Intelligente delle Serie** — Le stagioni e il numero totale degli episodi vengono recuperati automaticamente e mantenuti sincronizzati.
- **Indicatori di Progresso** — Barre di progresso visive sulle schede e negli header delle note mostrano quanto hai guardato o letto.
- **Header delle Note Ricchi** — Ogni nota di contenuto riceve un header generato automaticamente con tutti i metadati chiave.
- **Trailer, immagini e stagioni** — Le note di film e serie mostrano un trailer YouTube/Vimeo integrato, una riga di immagini e la durata; le serie hanno anche un elenco delle stagioni con numero di episodi, valutazioni e trailer per stagione.
- **Categorie Personalizzate** — Crea categorie per Film, Serie, Anime, Fumetti, Libri, Giochi, Musica o qualsiasi altra cosa tramite la fonte manuale.
- **Collegamenti nel Grafo** — Generi, autori e cast sono salvati come link nelle proprie proprietà `Genre`, `Creator` e `Cast`, così la nota di ogni genere, autore e attore raccoglie i suoi titoli nei backlink e il grafo mostra tutto.
- **Schede Condivisibili** — Trasforma qualsiasi nota di contenuto in un'immagine-scheda condivisibile (poster, titolo, anno, genere, punteggio IMDb e la tua valutazione) e pubblicala su X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky o Pinterest — condividila direttamente nelle app del tuo dispositivo, oppure copia/salva l'immagine per usarla ovunque.
- **Sincronizzazione AniList** — Invia i progressi, lo stato e la valutazione dei tuoi anime direttamente al tuo account AniList, oppure recupera la tua lista nelle tue note.
- **Ordinamento e Compressione** — Ordina le schede per nome, anno, valutazione o data; comprimi qualsiasi categoria: resta compressa anche dopo un riavvio.
- **Statistiche** — Scegli tu le colonne: i titoli con la valutazione più alta di una categoria o i valori più frequenti di una proprietà (generi, creatori, attori…), più un grafico del tempo di visione.
- **Rilevamento Duplicati** — Impedisce automaticamente l'aggiunta dello stesso titolo due volte per URL. Un comando integrato trova e rimuove i duplicati esistenti.
- **Multilingue** — l'interfaccia del plugin è tradotta in **tutte le lingue supportate da Obsidian** (oltre 70), quindi corrisponde sempre alla lingua del tuo Obsidian. Il README è tradotto integralmente in 30 di esse (vedi la barra delle lingue in alto).

---

## Inizio Rapido

### 1. Installazione

Installa **Library** dalla [directory Obsidian Community Plugins](https://community.obsidian.md/plugins/library) (Impostazioni > Plugin comunitari > Sfoglia > cerca "Library"), o installalo manualmente tramite le [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).

### 2. Configurazione Base

1. Vai su **Impostazioni** > **Library**.
2. Aggiungi le tue **Categorie** — seleziona un tipo predefinito (Movies, Series, Books, Comics, Games, Music, Anime o Manual) dal menu a tendina e clicca su **Aggiungi categoria**. Ogni categoria ha un nome visualizzato (tradotto nella tua lingua), un valore `Type` (sempre in inglese, ad esempio `Movie`), una fonte e una cartella opzionale per memorizzare le note.
3. _(Opzionale)_ Inserisci le chiavi API per i servizi che utilizzi: [OMDb](https://www.omdbapi.com/apikey.aspx) per film/serie, [RAWG](https://rawg.io/apidocs) per i giochi, [Comic Vine](https://comicvine.gamespot.com/api/) per i fumetti, [TMDB](https://www.themoviedb.org/settings/api) per trailer, immagini e dettagli delle stagioni, [Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) per la ricerca dei libri. Anime (AniList), musica (Deezer) e Steam non richiedono chiavi.

### 3. Aggiungere una Scheda per Titolo

Niente più compilazione manuale del frontmatter — aggiungi un film, serie, anime o fumetto semplicemente cercando il suo nome:

1. Apri il tab **Library** dall'icona nella barra laterale (esegui `Apri la libreria`).
2. Clicca sul pulsante **+** in alto a destra della pagina Library (esegui `Aggiungi contenuto`).
3. Scegli una categoria, digita il **titolo** nella casella di ricerca e seleziona un risultato.
4. Una scheda viene creata istantaneamente, con poster, anno, genere, creatori e valutazione compilati automaticamente.

Il pulsante **Cerca nella tua libreria** accanto a **+** cerca i titoli già nella tua libreria.

Per le categorie **Manuali** digita semplicemente un titolo e compila la copertina, l'anno e gli altri campi tu stesso.

---

## Statistiche

In cima alla scheda «Libreria», la sezione comprimibile **Statistiche** mostra le colonne che scegli:

- **Classifiche di categoria** — i tre titoli con la valutazione più alta di una categoria, con le copertine: *Film principali*, *Libri principali* e così via. Ordinati per `My Rating` o, in mancanza, per `Rating IMDB`.
- **Classifiche di proprietà** — i tre valori più frequenti di una proprietà in tutta la libreria: *Generi principali*, *Creatori principali*, *Attori principali* o qualsiasi altra proprietà, come *Principali: Author*. `Sci-Fi`, `sci-fi` e `[[Sci-Fi]]` contano come un solo valore.
- **Tempo di visione** — un grafico delle ore dedicate a film, serie e anime, calcolato da `Runtime` e `Progress` di ogni nota.

Si configura in **Impostazioni → Library → Statistiche**: **Aggiungi classifica** elenca le tue categorie e le proprietà trovate nelle note, l'icona del cestino rimuove una colonna e un interruttore nasconde il grafico del tempo di visione. Le colonne compaiono nell'ordine in cui le aggiungi; una nuova categoria aggiunge la propria classifica.

Le categorie compresse restano compresse anche dopo un riavvio.

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
| **Games**          | Giochi              | RAWG (chiave gratuita richiesta — [rawg.io/apidocs](https://rawg.io/apidocs)) + Steam (nessuna). I risultati vengono uniti — RAWG per primo, Steam sotto. |
| **Deezer**        | Musica (album)      | Nessuna                                                     |
| **AniList**         | Anime               | Nessuna — API GraphQL gratuita di AniList, nessuna chiave necessaria |
| **Comic Vine**    | Fumetti             | Chiave gratuita richiesta — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**        | Qualsiasi altro     | Nessuna — digiti il titolo e compili i campi tu stesso      |

Le note di film e serie possono essere arricchite con **TMDB** (chiave gratuita opzionale): trailer, immagini, durata e l'elenco delle stagioni della serie vengono recuperati e scritti nel frontmatter della nota.

---

## Privacy e Utilizzo della Rete

Library è **pensato per funzionare offline**: la tua libreria è fatta di normali note e funziona anche senza connessione. Il plugin invia solo i dati elencati qui sotto, e solo in questi casi:

- **Quando agisci tu:** cerchi un titolo, aggiorni i metadati, esegui un comando AniList o premi il pulsante di condivisione.
- **Quando apri una nota della libreria:** i suoi metadati vengono aggiornati dalla sua fonte tramite `Source ID`, al massimo una volta ogni 5 minuti per nota; una nota senza `Source ID` viene cercata per nome.
- **Dopo un aggiornamento del plugin o il cambio di una chiave API:** un passaggio in background aggiorna una volta le note della libreria dalle loro fonti, una nota alla volta.

Copertine, fotogrammi e player dei trailer a cui fanno riferimento le note vengono caricati dagli host elencati qui sotto.

| Servizio | Quando | Cosa viene inviato | Perché |
| --- | --- | --- | --- |
| `www.omdbapi.com` | Cerchi in una categoria supportata da OMDb | Il titolo che digiti e la tua chiave API OMDb | Recuperare i metadati di film/serie (anno, genere, cast, valutazione, poster, conteggio episodi) |
| `openlibrary.org` | Cerchi in una categoria Open Library | Il titolo che digiti | Recuperare i metadati dei libri (autore, anno, soggetti, ID copertina) |
| `covers.openlibrary.org` | Una scheda libro ha una copertina | L'ID copertina di Open Library | Caricare l'immagine della copertina |
| `www.googleapis.com` | Cerchi in una categoria Google Books | Il titolo che digiti e la tua chiave Google Books | Recuperare i metadati dei libri (autore, anno, categorie, numero pagine, copertina, ISBN) |
| `api.rawg.io` | Cerchi in una categoria giochi RAWG | Il titolo che digiti e la tua chiave RAWG | Recuperare i metadati dei giochi (anno, genere, sviluppatore, copertina) |
| `api.deezer.com` | Cerchi in una categoria musicale Deezer | L'album o l'artista che digiti | Recuperare i metadati dell'album (artista, anno, genere, conteggio tracce, copertina) |
| `graphql.anilist.co` | Cerchi in una categoria anime | Il titolo che digiti | Recuperare i metadati anime (titolo, anno, genere, episodi, punteggio AniList, studio, poster) |
| `graphql.anilist.co` | Esegui un comando di sincronizzazione AniList | Il tuo token di accesso AniList e i progressi, lo stato e la valutazione della nota | Leggere o aggiornare la tua lista anime di AniList |
| `anilist.co` | Fai clic su **Connetti** nelle impostazioni di sincronizzazione AniList | Il tuo Client ID di AniList | Aprire la pagina di autorizzazione di AniList nel browser |
| `comicvine.gamespot.com` | Cerchi in una categoria fumetti | Il titolo che digiti e la tua chiave Comic Vine | Recuperare i metadati dei fumetti (titolo, anno, editore, conteggio numeri, copertina) |
| `store.steampowered.com` | Cerchi o aggiungi un gioco Steam | Il titolo digitato o l’id dell’app Steam | Recuperare i metadati del gioco (anno, genere, sviluppatore, copertina) |
| `cdn.cloudflare.steamstatic.com` | Una scheda di gioco Steam ha una copertina | L’id dell’app Steam | Caricare l’immagine di copertina |
| `api.themoviedb.org` | Aggiungi o aggiorni una nota di film/serie con una chiave TMDB | L'ID IMDb della nota e la tua chiave TMDB | Recuperare trailer, immagini, durata e l'elenco delle stagioni |
| `image.tmdb.org` | Una nota di film/serie ha delle immagini | Il percorso dell'immagine TMDB | Caricare le immagini |
| `v3-cinemeta.strem.io` | Aggiungi o aggiorni una nota di un film o di una serie | L’id IMDb della nota | Recuperare il trailer, le immagini, la durata e l’elenco delle stagioni della serie — senza chiave |
| `images.metahub.space` | Una nota di un film o di una serie ha delle immagini | L’id IMDb della nota | Caricare le immagini (sfondi) |
| `episodes.metahub.space` | Una nota di una serie ha immagini degli episodi | L’id IMDb della serie e i numeri di stagione ed episodio | Caricare le immagini degli episodi |
| `i.ytimg.com` | Una nota di un film mostra immagini del trailer | L’id del video del trailer | Caricare le immagini del trailer |
| `s4.anilist.co` | Una nota di un anime ha un banner | Il percorso sul CDN di AniList | Caricare l’immagine del banner |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Apri una nota con un trailer | L'ID del trailer | Incorporare il player del trailer |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Premi il pulsante di condivisione | La didascalia della card (titolo, la tua valutazione, link alla fonte) | Aprire la finestra di condivisione della rete scelta con il post già compilato — l'immagine della card resta locale |

Nessun altro dato lascia mai il tuo vault. Il plugin **non ha telemetria, nessuna analisi e nessun meccanismo di auto-aggiornamento**. Le chiavi API (OMDb, Google Books, RAWG, Comic Vine, TMDB) sono memorizzate solo nelle impostazioni locali del plugin e inviate solo ai rispettivi servizi. Le immagini delle copertine vengono caricate direttamente dagli URL restituiti da ciascuna fonte.

---

## Schema Frontmatter

Il plugin legge e scrive nel frontmatter YAML standard. Le note vengono create per te, ma ogni campo è modificabile. `Source` e `Source ID` permettono al plugin di aggiornare i metadati in seguito.

### Movie

> **Proprietà copertina** — la proprietà del frontmatter che contiene la copertina può essere rinominata in **Impostazioni → Library** (ad esempio in `image`); le note esistenti continuano a funzionare.

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

> **Aggiornamento automatico delle serie:** Esegui `Aggiorna i metadati della nota corrente` (o apri semplicemente la nota) e il plugin aggiorna il conteggio totale degli episodi in `Progress` (ad esempio da `25/42` a `25/50`) e il conteggio delle `Season`, mantenendo intatto il tuo conteggio visionato.

> **Trailer, immagini e stagioni:** con una chiave TMDB impostata, il plugin compila automaticamente `Trailer`, `Gallery`, `Runtime` e (per le serie) `Seasons` — `Runtime` è la durata del film in minuti o i minuti per episodio per una serie. L'intestazione della nota mostra quindi un player integrato, una riga di immagini e un elenco di stagioni con numero di episodi, valutazioni e pulsanti trailer per stagione. Ogni campo è normale frontmatter: modificalo o eliminalo e il plugin lascerà intatti i tuoi valori al prossimo aggiornamento. A ogni versione del plugin parte anche un passaggio in background sulla libreria che completa i nuovi campi, nota per nota e senza bloccare l’app.

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

## Collegamenti nel Grafo

Generi, autori e, per film e serie, il cast sono salvati come link nelle proprie proprietà:

```yaml
Genre:
    - "[[Action]]"
    - "[[Sci-Fi]]"
Creator:
    - "[[Christopher Nolan]]"
Cast:
    - "[[Leonardo DiCaprio]]"
```

Così la nota di ogni genere, autore e attore elenca tutti i suoi titoli nei backlink, e il grafo collega le note attraverso di loro. I nomi semplici — scritti a mano o lasciati da una versione precedente — diventano link a ogni modifica di una nota; un link con alias resta com'è. `Ricostruisci i link del grafo` converte l'intera libreria in una volta. La proprietà `Related` delle versioni precedenti non è più usata e viene rimossa dalle note.

---

## Condivisione

Ogni nota di contenuto riceve un pulsante **Condividi** nel suo header (o esegui `Condividi la nota corrente`). Genera un'immagine-scheda — poster, titolo, anno, genere, punteggio IMDb/AniList e la tua valutazione — che puoi pubblicare ovunque:

- **Su dispositivi mobili** — il pulsante **Condividi…** apre il foglio di condivisione nativo del tuo dispositivo con l'immagine-scheda già allegata, così puoi inviarla direttamente a qualsiasi app.
- **X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, Pinterest** — apre il compositore della rete con una didascalia precompilata (titolo, la tua valutazione, il link alla fonte e un link a questo plugin). L'immagine-scheda viene copiata contemporaneamente negli appunti, così basta incollarla (Ctrl/Cmd+V) nel post.
- **Copia immagine / Copia testo / Salva immagine** — copia la scheda generata o la didascalia negli appunti, oppure salva l'immagine nella cartella degli allegati del tuo vault per allegarla manualmente.

La condivisione è completamente locale: la scheda viene disegnata nell'app a partire dai metadati e dalla copertina della nota stessa. Nulla viene caricato — il plugin apre soltanto nel browser l'URL del compositore che scegli.

---

## Sincronizzazione AniList

Mantieni i progressi dei tuoi anime sincronizzati con il tuo account [AniList](https://anilist.co).

**Configurazione** — in **Impostazioni → Library → Sincronizzazione AniList**:

1. Registra un client API gratuito su [anilist.co/settings/developer](https://anilist.co/settings/developer), impostando l'URL di reindirizzamento su `https://anilist.co/api/v2/oauth/pin`.
2. Incolla il **Client ID**, clicca su **Connetti** e autorizza.
3. AniList ti mostra un token di accesso — incollalo nel plugin. Clicca su **Prova la connessione** per confermare.

Poi usa i comandi:

- **Push current note to AniList** — invia i progressi (episodi guardati), lo stato (watching / completed / planning) e la tua valutazione della nota anime attiva alla tua lista AniList.
- **Pull progress from AniList** — recupera la tua lista anime di AniList e aggiorna le note corrispondenti. Il pull è **solo in avanti**: non fa mai regredire una nota che è localmente più avanti o già completa, e lascia intatta la tua `My Rating` personale.

Vengono sincronizzate solo le note con `Source: anilist` (aggiunte tramite la fonte anime AniList). Il tuo token è memorizzato localmente nelle impostazioni del plugin e viene inviato solo ad AniList.

---

## Comandi

| Comando                              | Descrizione                                                                  |
| ------------------------------------ | ---------------------------------------------------------------------------- |
| `Apri la libreria`                       | Apre il tab galleria di Library.                                             |
| `Aggiungi contenuto`                        | Cerca una fonte e crea una nota di contenuto (o digita un titolo per Manual). |
| `Cerca nella tua libreria`                | Ricerca fuzzy e apri qualsiasi nota già nella tua libreria.                  |
| `Aggiorna i metadati della nota corrente`  | Recupera nuovamente i metadati per la nota attiva; aggiorna i totali episodi delle serie. |
| `Ricostruisci i link del grafo`                | Trasforma `Genre`, `Creator` e `Cast` in link in tutte le note di contenuto. |
| `Trova e rimuovi i duplicati`           | Scansiona tutte le note per URL, mostra i duplicati e rimuovi quelli selezionati. |
| `Condividi la nota corrente`                 | Genera la nota come immagine-scheda e condividila su X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky o Pinterest. |
| `Invia la nota corrente ad AniList`        | Invia i progressi, lo stato e la valutazione della nota anime attiva al tuo account AniList. |
| `Recupera i progressi da AniList`          | Recupera la tua lista AniList e aggiorna le note corrispondenti (solo in avanti). |
| `Aggiorna i metadati di tutte le note` | Recupera i metadati di tutte le note della libreria, una alla volta in background. |

---

## Contribuire e Supporto

- **Hai trovato un bug?** Apri un [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues).
- **Hai un'idea per una funzionalità?** Avvia una [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions).
- **Ti piace il plugin?** Considera di dare una stella al repository per mostrare il tuo supporto!

---

## Licenza

[MIT License](LICENSE) — libera di essere usata, modificata e condivisa.

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
