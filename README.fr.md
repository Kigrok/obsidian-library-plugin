> [EN](README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | **[FR](README.fr.md)** | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

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
  <b>Organisez vos films, séries, livres et plus encore dans une galerie visuelle — directement dans Obsidian.</b>
  <br />
  Recherchez et ajoutez des titres directement dans l'application, récupérez automatiquement les métadonnées, suivez la progression et connectez tout à votre graphe.
</p>

<p align="center">
  <a href="https://community.obsidian.md/plugins/library">Voir dans le répertoire Obsidian Community Plugins</a>
</p>

---

## Fonctionnalités Principales

- **Grille Visuelle de Cartes** — Un onglet dédié Library affiche votre collection sous forme de galerie de cartes avec illustrations.
- **Recherche Intégrée** — Recherchez et ajoutez des titres directement dans l'application : OMDb pour les films et séries, Open Library ou Google Books pour les livres, RAWG pour les jeux, Deezer pour la musique, AniList pour l'anime, Comic Vine pour les comics.
- **Suivi Intelligent des Séries** — Les saisons et le nombre total d'épisodes sont récupérés automatiquement et maintenus synchronisés.
- **Indicateurs de Progression** — Des barres de progression visuelles sur les cartes et les en-têtes de notes montrent ce que vous avez regardé ou lu.
- **En-têtes de Notes Enrichis** — Chaque note de contenu reçoit un en-tête généré automatiquement avec toutes les métadonnées clés.
- **Catégories Personnalisées** — Créez des catégories pour les Films, Séries, Anime, Comics, Livres, Jeux, Musique ou tout autre élément via la source manuelle.
- **Liens dans le Graphe** — Une propriété `Related` dans le frontmatter relie chaque note à sa catégorie, ses genres et ses créateurs, synchronisée automatiquement pour un beau graphe.
- **Cartes de Partage** — Transformez n'importe quelle note de contenu en une image de carte partageable (affiche, titre, année, genre, note IMDb et votre note) et publiez-la sur X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky ou Pinterest — partagez-la directement vers les applications de votre appareil, ou copiez/enregistrez l'image pour l'utiliser où vous voulez.
- **Tri et Réduction** — Triez les cartes par nom, année, note ou date ; réduisez n'importe quelle catégorie.
- **Statistiques** — Genres principaux, créateurs principaux (films et séries uniquement) et éléments principaux par catégorie avec classements médailles.
- **Détection de Doublons** — Empêche automatiquement l'ajout du même titre deux fois par URL. Une commande intégrée trouve et supprime les doublons existants.
- **Multilingue** — 31 langues : anglais, ukrainien, russe, biélorusse, kazakh, ouzbek, allemand, espagnol, français, italien, néerlandais, tchèque, croate, polonais, roumain, turc, azerbaïdjanais, persan, hindi, bengali, ourdou, tagalog, vietnamien, thaï, javanais, japonais, coréen, chinois, arabe, singhalais, hébreu.

---

## Démarrage Rapide

### 1. Installation

Installez **Library** depuis le [répertoire Obsidian Community Plugins](https://community.obsidian.md/plugins/library) (Paramètres > Plugins communautaires > Parcourir > rechercher "Library"), ou installez-le manuellement via les [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).

### 2. Configuration de Base

1. Allez dans **Paramètres** > **Library**.
2. Ajoutez vos **Catégories** — sélectionnez un type prédéfini (Movies, Series, Books, Comics, Games, Music, Anime ou Manual) dans le menu déroulant et cliquez sur **Add category**. Chaque catégorie a un nom d'affichage (traduit dans votre langue), une valeur `Type` (toujours en anglais, par exemple `Movie`), une source et un dossier optionnel pour stocker les notes.
3. _(Optionnel)_ Saisissez les clés API pour les services que vous utilisez : [OMDb](https://www.omdbapi.com/apikey.aspx) pour les films/séries, [RAWG](https://rawg.io/apidocs) pour les jeux, [Comic Vine](https://comicvine.gamespot.com/api/) pour les comics. L'anime (AniList) et la musique (Deezer) ne nécessitent pas de clé.

### 3. Ajouter une Carte par Titre

Plus besoin de remplir le frontmatter à la main — ajoutez un film, une série, un anime ou un comic simplement en recherchant son nom :

1. Ouvrez l'onglet **Library** depuis l'icône de la barre latérale (ou exécutez `Open Library`).
2. Cliquez sur le bouton **+** en haut à droite de la page Library (ou exécutez `Add content`).
3. Choisissez une catégorie, tapez le **titre** dans la boîte de recherche et sélectionnez un résultat.
4. Une carte est créée instantanément, avec l'affiche, l'année, le genre, les créateurs et la note remplis automatiquement.

Le bouton **Search** à côté de **+** recherche les titres déjà dans votre bibliothèque.

Pour les catégories **Manuelles**, vous tapez simplement un titre et remplissez la couverture, l'année et les autres champs vous-même.

---

## Statistiques

L'onglet Library comprend une section **Statistiques** réductible en haut :

- **Genres Principaux** — classés par fréquence dans toute votre bibliothèque.
- **Créateurs Principaux** — classés par nombre de films et séries dans lesquels ils apparaissent.
- **Principaux par Catégorie** — pour chaque catégorie (Films, Séries, Livres, etc.), les 3 éléments principaux par note avec des miniatures de couverture.

---

## Détection de Doublons

Library empêche les entrées en double en vérifiant le champ `URL` :

- **À l'ajout** — si une note avec la même URL existe déjà, elle ouvre la note existante au lieu de créer un doublon.
- **Trouver et Supprimer les Doublons** — exécutez cette commande depuis la palette pour scanner toutes les notes, les regrouper par URL et supprimer sélectivement les doublons via un modal.

---

## Sources

Chaque catégorie est liée à une source qui alimente sa recherche :

| Source            | Types de contenu | Clé API                                                     |
| ----------------- | ------------------ | ------------------------------------------------------------ |
| **OMDb**          | Films, Séries      | Clé gratuite requise — [omdbapi.com](https://www.omdbapi.com/apikey.aspx) |
| **Books**         | Livres             | Open Library (pas de clé) + Google Books (clé gratuite optionnelle). Les résultats sont fusionnés — Google Books en premier, Open Library en dessous. |
| **RAWG**          | Jeux               | Clé gratuite requise — [rawg.io/apidocs](https://rawg.io/apidocs) |
| **Deezer**        | Musique (albums)   | Aucune                                                      |
| **AniList**       | Anime              | Aucune — API GraphQL AniList gratuite, aucune clé requise |
| **Comic Vine**    | Comics             | Clé gratuite requise — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**        | Tout autre         | Aucune — vous tapez le titre et remplissez les champs vous-même |

---

## Confidentialité et Utilisation Réseau

Library est **hors-ligne d'abord**. Le plugin ne contacte le réseau que lorsque vous recherchez activement un titre à ajouter, et uniquement avec les termes de recherche que vous saisissez :

| Service | Quand | Ce qui est envoyé | Pourquoi |
| --- | --- | --- | --- |
| `www.omdbapi.com` | Vous recherchez une catégorie basée sur OMDb | Le titre que vous tapez et votre clé API OMDb | Récupérer les métadonnées de films/séries (année, genre, distribution, note, affiche, nombre d'épisodes) |
| `openlibrary.org` | Vous recherchez une catégorie Open Library | Le titre que vous tapez | Récupérer les métadonnées de livres (auteur, année, sujets, ID de couverture) |
| `covers.openlibrary.org` | Une carte de livre a une couverture | L'ID de couverture Open Library | Charger l'image de couverture |
| `www.googleapis.com` | Vous recherchez une catégorie Google Books | Le titre que vous tapez et votre clé Google Books | Récupérer les métadonnées de livres (auteur, année, catégories, nombre de pages, couverture, ISBN) |
| `api.rawg.io` | Vous recherchez une catégorie de jeux RAWG | Le titre que vous tapez et votre clé RAWG | Récupérer les métadonnées de jeux (année, genre, développeur, couverture) |
| `api.deezer.com` | Vous recherchez une catégorie musicale Deezer | L'album ou l'artiste que vous tapez | Récupérer les métadonnées d'album (artiste, année, genre, nombre de pistes, couverture) |
| `graphql.anilist.co` | Vous recherchez une catégorie anime | Le titre que vous tapez | Récupérer les métadonnées anime (titre, année, genre, épisodes, score AniList, studio, affiche) |
| `comicvine.gamespot.com` | Vous recherchez une catégorie comics | Le titre que vous tapez et votre clé Comic Vine | Récupérer les métadonnées de comics (titre, année, éditeur, nombre de numéros, couverture) |

Aucune autre donnée ne quitte jamais votre vault. Le plugin **n'a pas de télémétrie, pas d'analytique et pas de mécanisme de mise à jour automatique**. Les clés API (OMDb, Google Books, RAWG, Comic Vine) sont stockées uniquement dans les paramètres locaux du plugin et envoyées uniquement à leurs services respectifs. Les images de couverture sont chargées directement depuis les URLs retournées par chaque source.

---

## Schéma Frontmatter

Le plugin lit et écrit dans le YAML frontmatter standard. Les notes sont créées pour vous, mais chaque champ est modifiable. `Source` et `Source ID` permettent au plugin de rafraîchir les métadonnées ultérieurement.

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

> **Mise à jour automatique des séries :** Exécutez `Refresh metadata for current note` (ou ouvrez simplement la note) et le plugin met à jour le nombre total d'épisodes dans `Progress` (par exemple, de `25/42` à `25/50`) et le nombre de `Season`, tout en conservant votre nombre visionné intact.

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

## Liens dans le Graphe

Chaque note de contenu reçoit une propriété `Related` dans le frontmatter, maintenue à jour automatiquement — le corps de la note n'est jamais modifié :

```yaml
Related:
    - "[[Movie]]"
    - "[[Action]]"
    - "[[Sci-Fi]]"
    - "[[Christopher Nolan]]"
```

Ces liens connectent vos notes via des catégories, genres et créateurs partagés, de sorte que la vue graphe d'Obsidian forme des clusters propres. Un vrai nœud hub est créé par catégorie (par exemple, `Movie`) pour que les clusters soient visibles même lorsque les liens non résolus sont masqués. La propriété est écrite lors de la création d'une note et mise à jour à chaque changement de ses métadonnées — exécutez `Rebuild graph links` uniquement si vous voulez forcer une reconstruction complète.

---

## Partage

Chaque note de contenu obtient un bouton **Partager** dans son en-tête (ou exécutez `Share current note`). Il génère une image de carte — affiche, titre, année, genre, note IMDb/AniList et votre note — que vous pouvez publier n'importe où :

- **Sur mobile** — le bouton **Partager…** ouvre la feuille de partage native de votre appareil avec l'image de la carte directement jointe, pour que vous puissiez l'envoyer vers n'importe quelle application.
- **X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, Pinterest** — ouvre le compositeur du réseau avec une légende pré-remplie (titre, votre note, le lien source et un lien vers ce plugin). L'image de la carte est copiée dans votre presse-papiers en même temps, il vous suffit donc de la coller (Ctrl/Cmd+V) dans la publication.
- **Copier l'image / Copier le texte / Enregistrer l'image** — copiez la carte générée ou la légende dans le presse-papiers, ou enregistrez l'image dans le dossier de pièces jointes de votre vault pour la joindre manuellement.

Le partage est entièrement local : la carte est dessinée dans l'application à partir des métadonnées et de la couverture de la note elle-même. Rien n'est téléchargé — le plugin ouvre uniquement l'URL du compositeur que vous choisissez dans votre navigateur.

---

## Commandes

| Commande                             | Description                                                                |
| ------------------------------------ | -------------------------------------------------------------------------- |
| `Open Library`                       | Ouvre l'onglet galerie de Library.                                         |
| `Add content`                        | Recherche une source et crée une note de contenu (ou tapez un titre pour Manual). |
| `Search your library`                | Recherche floue et ouvre n'importe quelle note déjà dans votre bibliothèque. |
| `Refresh metadata for current note`  | Récupère à nouveau les métadonnées pour la note active ; met à jour les totaux d'épisodes des séries. |
| `Rebuild graph links`                | Connecte chaque note de contenu à sa catégorie, ses genres et ses créateurs. |
| `Find & remove duplicates`           | Scanne toutes les notes par URL, affiche les doublons et supprime ceux sélectionnés. |
| `Share current note`                 | Génère la note sous forme d'image de carte et la partage sur X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky ou Pinterest. |

---

## Contributions et Support

- **Vous avez trouvé un bug ?** Ouvrez un [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues).
- **Vous avez une idée de fonctionnalité ?** Lancez une [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions).
- **Vous aimez le plugin ?** Envisagez de donner une étoile au dépôt pour montrer votre soutien !

---

## Merci

Si vous trouvez ce plugin utile, envisagez de soutenir son développement :

| | Réseau | Adresse |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |

---
