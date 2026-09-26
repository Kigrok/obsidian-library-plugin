> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | **[IT](README.it.md)** | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

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
  Film, serie, libri, anime, fumetti, giochi e musica come note in Obsidian, mostrati come una galleria di copertine.
  <br />
  <a href="https://community.obsidian.md/plugins/library">Directory dei plugin di Obsidian</a>
</p>

## Funzionalità

- Cerca un titolo e ottieni una nota con poster, anno, genere, autori, cast e valutazioni già compilati.
- Sfoglia la libreria come galleria di copertine, raggruppate per categoria e ordinate per nome, anno, valutazione o data.
- Spunta gli episodi di una serie o i capitoli di un libro e valuta ciascuno; `Progress` e `My Rating` vengono calcolati da questi.
- Le note di film e serie mostrano trailer, fotogrammi, durata e l'elenco delle stagioni.
- Generi, autori e attori sono link, quindi le loro note raccolgono ogni titolo nei riferimenti e nel grafo.
- Il pannello delle statistiche mostra le classifiche che scegli e il tempo di visione totale.
- Condividi un titolo come immagine su X, Telegram, Reddit e altri sei social.
- Sincronizza i progressi degli anime con AniList.
- L'interfaccia è tradotta in tutte le lingue supportate da Obsidian, e questo README in [30 lingue](./).

## Guida rapida

1. Installa **Library** da Impostazioni → Plugin di terze parti → Sfoglia, oppure dalle [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).
2. In Impostazioni → Library, aggiungi una categoria per ogni tipo di contenuto: Film, Serie, Libri, Fumetti, Giochi, Musica, Anime, Manuale.
3. Inserisci le chiavi API richieste dalle tue fonti (vedi sotto).
4. Apri la scheda Libreria dalla barra multifunzione, premi **+**, scegli una categoria e cerca un titolo. Un titolo già presente nella libreria apre la sua nota esistente.

Il valore `Type` di una categoria (per esempio `Movie`) stabilisce quali note le appartengono, e la sua cartella dove finiscono le note nuove. Entrambi si trovano sotto **Avanzate** nelle impostazioni della categoria.

## Fonti

| Categoria | Fonte | Chiave |
| --- | --- | --- |
| Film, serie | OMDb | [Chiave gratuita](https://www.omdbapi.com/apikey.aspx) |
| Libri | Google Books + Open Library | [Chiave Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) facoltativa |
| Giochi | RAWG + Steam | [Chiave RAWG gratuita](https://rawg.io/apidocs); Steam non ne ha bisogno |
| Musica | Deezer | Nessuna |
| Anime | AniList | Nessuna |
| Fumetti | Comic Vine | [Chiave gratuita](https://comicvine.gamespot.com/api/) |
| Tutto il resto | Manuale: compili tu i campi | Nessuna |

Trailer, fotogrammi, durata ed elenchi delle stagioni arrivano da Cinemeta senza chiave. Una [chiave TMDB](https://www.themoviedb.org/settings/api) aggiunge le valutazioni delle stagioni e più fotogrammi.

## Progressi e valutazioni

L'intestazione di una nota di serie elenca le stagioni, e ogni stagione si apre sui suoi episodi, con i titoli quando la fonte li conosce. Spunta un episodio o un'intera stagione come visto e dagli un voto da 1 a 10. `Progress` conta gli episodi spuntati, il voto di una stagione è la media dei suoi episodi votati, e `My Rating` è la media delle stagioni votate. Una stagione senza episodi votati riceve un voto proprio.

Gli anime funzionano allo stesso modo, come un'unica stagione senza titoli degli episodi.

I capitoli di un libro vengono dall'indice di un'edizione su Open Library. Se non ce n'è uno, **Aggiungi capitoli** nell'intestazione della nota accetta un numero di capitoli o un titolo per riga. Da quel momento `Progress` conta i capitoli invece delle pagine, e le pagine già lette passano alla stessa quota di capitoli.

Le note delle versioni precedenti mantengono i loro progressi. Finché non spunti nulla, i primi episodi fino al numero in `Progress` risultano visti.

## Statistiche

Il pannello in cima alla scheda Libreria mostra le colonne scelte in Impostazioni → Library → Statistiche: i tre titoli con il voto più alto di una categoria, i tre valori più frequenti di una proprietà (generi, attori o qualsiasi altra) e le ore dedicate a film, serie e anime. Sotto il grafico compare un confronto al giorno, per esempio: L'Apollo 11 avrebbe potuto andare sulla Luna e tornare 8 volte.

## Collegamenti nel grafo

`Genre`, `Creator` e `Cast` contengono link come `[[Christopher Nolan]]`, così la nota di un genere o di una persona elenca i suoi titoli nei riferimenti. I nomi scritti a mano diventano link quando la nota cambia, e `Ricostruisci i link del grafo` converte l'intera libreria.

## Condivisione e AniList

**Condividi** nell'intestazione di una nota disegna un'immagine con poster, titolo, anno, genere, cast, valutazioni e il tuo voto. Su desktop l'immagine va negli appunti e il social scelto si apre con una didascalia, così incolli l'immagine nel post. Su mobile l'immagine passa al menu di condivisione del sistema. Puoi anche copiare l'immagine o la didascalia, o salvare l'immagine nel vault.

Per sincronizzare gli anime, registra un client su [anilist.co/settings/developer](https://anilist.co/settings/developer) con l'URL di reindirizzamento `https://anilist.co/api/v2/oauth/pin`. Incolla il Client ID in Impostazioni → Library → Sincronizzazione AniList, fai clic su **Connetti** e incolla il token che AniList ti mostra. `Invia la nota corrente ad AniList` invia progressi, stato e voto. `Recupera i progressi da AniList` aggiorna le tue note, non fa mai tornare indietro i progressi e lascia stare `My Rating`. Si sincronizzano solo le note con `Source: anilist`.

## Frontmatter

Ogni titolo è una nota, e tutto ciò che il plugin ne sa è nel frontmatter:

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
      # ...altri 7 episodi
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

Per una serie, `Runtime` è la durata di un episodio. I libri aggiungono `ISBN` e tengono i capitoli in `Chapters` con gli stessi campi `title`, `watched` e `my_rating`; gli anime aggiungono `Rating AniList` e `Status`. La proprietà della copertina si può rinominare nelle impostazioni, per esempio in `image`.

Un aggiornamento riempie solo i campi vuoti, quindi i valori che modifichi restano. Aggiorna anche il totale degli episodi in `Progress` e aggiunge nuove stagioni e titoli degli episodi.

## Privacy e uso della rete

La tua libreria è fatta di semplici note e funziona offline. Il plugin va online quando cerchi, aggiorni, sincronizzi o condividi; quando apri una nota della libreria, al massimo una volta ogni 5 minuti per nota; e una volta dopo un aggiornamento o un cambio di chiave, per compilare i campi nuovi. Non ha telemetria, analisi né aggiornamento automatico. Le chiavi API restano nelle impostazioni locali del plugin e vanno solo al rispettivo servizio.

| Host | Quando | Cosa viene inviato |
| --- | --- | --- |
| `www.omdbapi.com` | Ricerca di film e serie | Titolo o id IMDb, chiave OMDb |
| `openlibrary.org` | Ricerca di libri; ricerca dei capitoli quando aggiungi o apri un libro | Titolo e autore, ISBN o id dell'opera |
| `covers.openlibrary.org` | Copertine dei libri | Id della copertina |
| `www.googleapis.com` | Ricerca di libri | Titolo, chiave Google Books |
| `api.rawg.io` | Ricerca di giochi | Titolo, chiave RAWG |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | Ricerca di giochi e copertine | Titolo o id dell'app Steam |
| `api.deezer.com` | Ricerca di musica | Album o artista |
| `graphql.anilist.co` | Ricerca di anime; sincronizzazione AniList | Titolo; il tuo token, progressi, stato e voto |
| `anilist.co` | Fai clic su **Connetti** | Client ID, aperto nel browser |
| `s4.anilist.co` | Banner degli anime | Percorso CDN |
| `comicvine.gamespot.com` | Ricerca di fumetti | Titolo, chiave Comic Vine |
| `v3-cinemeta.strem.io` | Aggiunta o aggiornamento di un film o di una serie | Id IMDb |
| `images.metahub.space`, `episodes.metahub.space` | Fotogrammi | Id IMDb, numeri di stagione ed episodio |
| `api.themoviedb.org`, `image.tmdb.org` | Aggiunta o aggiornamento di un film o di una serie, se imposti una chiave TMDB | Id IMDb e chiave TMDB; percorso dell'immagine |
| `i.ytimg.com` | Fotogrammi dei trailer | Id del video |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Apertura di una nota con trailer | Id del video |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Fai clic su un pulsante di condivisione | La didascalia: titolo, il tuo voto, link alla fonte. L'immagine resta sul tuo dispositivo |

## Comandi

| Comando | Cosa fa |
| --- | --- |
| `Apri la libreria` | Apre la scheda Libreria |
| `Aggiungi contenuto` | Cerca in una fonte e crea una nota |
| `Cerca nella tua libreria` | Trova e apre una nota della libreria |
| `Aggiorna i metadati della nota corrente` | Recupera di nuovo la nota attiva |
| `Aggiorna i metadati di tutte le note` | Recupera ogni nota della libreria, una alla volta |
| `Ricostruisci i link del grafo` | Trasforma `Genre`, `Creator` e `Cast` in link |
| `Trova e rimuovi i duplicati` | Elenca le note con lo stesso URL e rimuove quelle scelte |
| `Condividi la nota corrente` | Apre l'immagine da condividere |
| `Invia la nota corrente ad AniList` | Invia progressi, stato e voto |
| `Recupera i progressi da AniList` | Aggiorna le note dalla tua lista AniList |

## Supporto

Segnala i bug nelle [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues) e proponi idee nelle [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions). Il plugin è rilasciato con [licenza MIT](../LICENSE).

Se il plugin ti è utile, puoi sostenerlo:

| | Rete | Indirizzo |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
