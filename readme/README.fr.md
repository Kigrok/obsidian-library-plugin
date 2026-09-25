> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | **[FR](README.fr.md)** | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

<p align="center">
  <img src="../banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Library</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.3.1-blue" alt="Version">
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
- **Recherche Intégrée** — Recherchez et ajoutez des titres directement dans l'application : OMDb pour les films et séries, Open Library ou Google Books pour les livres, RAWG/Steam pour les jeux, Deezer pour la musique, AniList pour l'anime, Comic Vine pour les comics.
- **Suivi Intelligent des Séries** — Les saisons et le nombre total d'épisodes sont récupérés automatiquement et maintenus synchronisés.
- **Indicateurs de Progression** — Des barres de progression visuelles sur les cartes et les en-têtes de notes montrent ce que vous avez regardé ou lu.
- **En-têtes de Notes Enrichis** — Chaque note de contenu reçoit un en-tête généré automatiquement avec toutes les métadonnées clés.
- **Bandes-annonces, images et saisons** — Les notes de films et de séries affichent une bande-annonce YouTube/Vimeo intégrée, une rangée d'images et la durée ; les séries ont en plus une liste de saisons avec le nombre d'épisodes, les notes et les bandes-annonces par saison.
- **Catégories Personnalisées** — Créez des catégories pour les Films, Séries, Anime, Comics, Livres, Jeux, Musique ou tout autre élément via la source manuelle.
- **Liens dans le Graphe** — Les genres, créateurs et la distribution sont stockés comme liens dans leurs propres propriétés `Genre`, `Creator` et `Cast` : la note de chaque genre, créateur et acteur rassemble ses titres dans les rétroliens, et le graphe montre tout.
- **Cartes de Partage** — Transformez n'importe quelle note de contenu en une image de carte partageable (affiche, titre, année, genre, note IMDb et votre note) et publiez-la sur X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky ou Pinterest — partagez-la directement vers les applications de votre appareil, ou copiez/enregistrez l'image pour l'utiliser où vous voulez.
- **Synchronisation AniList** — Poussez la progression, le statut et la note de vos anime directement vers votre compte AniList, ou récupérez votre liste dans vos notes.
- **Tri et Réduction** — Triez les cartes par nom, année, note ou date ; réduisez n'importe quelle catégorie : elle reste réduite après un redémarrage.
- **Statistiques** — Vous choisissez les colonnes : les titres les mieux notés d'une catégorie ou les valeurs les plus fréquentes d'une propriété (genres, créateurs, acteurs…), plus un graphique du temps de visionnage.
- **Détection de Doublons** — Empêche automatiquement l'ajout du même titre deux fois par URL. Une commande intégrée trouve et supprime les doublons existants.
- **Multilingue** — l'interface du plugin est traduite dans **toutes les langues prises en charge par Obsidian** (plus de 70) et suit donc toujours la langue de votre Obsidian. Le README est entièrement traduit dans 30 d'entre elles (voir la barre des langues en haut).

---

## Démarrage Rapide

### 1. Installation

Installez **Library** depuis le [répertoire Obsidian Community Plugins](https://community.obsidian.md/plugins/library) (Paramètres > Plugins communautaires > Parcourir > rechercher "Library"), ou installez-le manuellement via les [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).

### 2. Configuration de Base

1. Allez dans **Paramètres** > **Library**.
2. Ajoutez vos **Catégories** — sélectionnez un type prédéfini (Movies, Series, Books, Comics, Games, Music, Anime ou Manual) dans le menu déroulant et cliquez sur **Ajouter une catégorie**. Chaque catégorie a un nom d'affichage (traduit dans votre langue), une valeur `Type` (toujours en anglais, par exemple `Movie`), une source et un dossier optionnel pour stocker les notes.
3. _(Optionnel)_ Saisissez les clés API pour les services que vous utilisez : [OMDb](https://www.omdbapi.com/apikey.aspx) pour les films/séries, [RAWG](https://rawg.io/apidocs) pour les jeux, [Comic Vine](https://comicvine.gamespot.com/api/) pour les comics, [TMDB](https://www.themoviedb.org/settings/api) pour les bandes-annonces, les images et les détails des saisons, [Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) pour la recherche de livres. Anime (AniList), musique (Deezer) et Steam ne nécessitent aucune clé.

### 3. Ajouter une Carte par Titre

Plus besoin de remplir le frontmatter à la main — ajoutez un film, une série, un anime ou un comic simplement en recherchant son nom :

1. Ouvrez l'onglet **Library** depuis l'icône de la barre latérale (ou exécutez `Ouvrir la bibliothèque`).
2. Cliquez sur le bouton **+** en haut à droite de la page Library (ou exécutez `Ajouter du contenu`).
3. Choisissez une catégorie, tapez le **titre** dans la boîte de recherche et sélectionnez un résultat.
4. Une carte est créée instantanément, avec l'affiche, l'année, le genre, les créateurs et la note remplis automatiquement.

Le bouton **Rechercher dans la bibliothèque** à côté de **+** recherche les titres déjà dans votre bibliothèque.

Pour les catégories **Manuelles**, vous tapez simplement un titre et remplissez la couverture, l'année et les autres champs vous-même.

---

## Statistiques

En haut de l'onglet « Bibliothèque », la section repliable **Statistiques** affiche les colonnes de votre choix :

- **Tops de catégorie** — les trois titres les mieux notés d'une catégorie, avec leurs couvertures : *Top films*, *Top livres*, etc. Classés selon `My Rating`, à défaut selon `Rating IMDB`.
- **Tops de propriété** — les trois valeurs les plus fréquentes d'une propriété dans toute la bibliothèque : *Top genres*, *Top créateurs*, *Top acteurs* ou toute autre propriété, par exemple *Top : Author*. `Sci-Fi`, `sci-fi` et `[[Sci-Fi]]` comptent comme une seule valeur.
- **Temps de visionnage** — un graphique des heures passées devant les films, les séries et les anime, calculé à partir des champs `Runtime` et `Progress` de chaque note.

Tout se règle dans **Paramètres → Library → Statistiques** : **Ajouter un top** propose vos catégories et les propriétés trouvées dans vos notes, l'icône de corbeille retire une colonne et un interrupteur masque le graphique du temps de visionnage. Les colonnes s'affichent dans l'ordre d'ajout ; une nouvelle catégorie ajoute son propre top.

Les catégories réduites le restent après un redémarrage.

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
| **Games**          | Jeux               | RAWG (clé gratuite requise — [rawg.io/apidocs](https://rawg.io/apidocs)) + Steam (aucune). Les résultats sont fusionnés — RAWG en premier, Steam en dessous. |
| **Deezer**        | Musique (albums)   | Aucune                                                      |
| **AniList**       | Anime              | Aucune — API GraphQL AniList gratuite, aucune clé requise |
| **Comic Vine**    | Comics             | Clé gratuite requise — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**        | Tout autre         | Aucune — vous tapez le titre et remplissez les champs vous-même |

Les notes de films et de séries peuvent être enrichies avec **TMDB** (clé gratuite facultative) : la bande-annonce, les images, la durée et la liste des saisons de la série sont récupérées et écrites dans le frontmatter de la note.

---

## Confidentialité et Utilisation Réseau

Library est **conçu pour fonctionner hors ligne** : votre bibliothèque n'est faite que de notes ordinaires et fonctionne sans connexion. Le plugin n'envoie que les données listées ci-dessous, et seulement dans ces cas :

- **Quand vous agissez vous-même :** vous recherchez un titre, actualisez des métadonnées, lancez une commande AniList ou cliquez sur le bouton de partage.
- **Quand vous ouvrez une note de la bibliothèque :** ses métadonnées sont actualisées depuis sa source via `Source ID`, au plus une fois toutes les 5 minutes par note ; une note sans `Source ID` est recherchée par son nom.
- **Après une mise à jour du plugin ou un changement de clé d'API :** un passage en arrière-plan actualise une fois les notes de votre bibliothèque depuis leurs sources, une note à la fois.

Les couvertures, images et lecteurs de bandes-annonces référencés par vos notes se chargent depuis les hôtes listés ci-dessous.

| Service | Quand | Ce qui est envoyé | Pourquoi |
| --- | --- | --- | --- |
| `www.omdbapi.com` | Vous recherchez une catégorie basée sur OMDb | Le titre que vous tapez et votre clé API OMDb | Récupérer les métadonnées de films/séries (année, genre, distribution, note, affiche, nombre d'épisodes) |
| `openlibrary.org` | Vous recherchez une catégorie Open Library | Le titre que vous tapez | Récupérer les métadonnées de livres (auteur, année, sujets, ID de couverture) |
| `covers.openlibrary.org` | Une carte de livre a une couverture | L'ID de couverture Open Library | Charger l'image de couverture |
| `www.googleapis.com` | Vous recherchez une catégorie Google Books | Le titre que vous tapez et votre clé Google Books | Récupérer les métadonnées de livres (auteur, année, catégories, nombre de pages, couverture, ISBN) |
| `api.rawg.io` | Vous recherchez une catégorie de jeux RAWG | Le titre que vous tapez et votre clé RAWG | Récupérer les métadonnées de jeux (année, genre, développeur, couverture) |
| `api.deezer.com` | Vous recherchez une catégorie musicale Deezer | L'album ou l'artiste que vous tapez | Récupérer les métadonnées d'album (artiste, année, genre, nombre de pistes, couverture) |
| `graphql.anilist.co` | Vous recherchez une catégorie anime | Le titre que vous tapez | Récupérer les métadonnées anime (titre, année, genre, épisodes, score AniList, studio, affiche) |
| `graphql.anilist.co` | Vous exécutez une commande de synchronisation AniList | Votre jeton d'accès AniList et la progression, le statut et la note de la note | Lire ou mettre à jour votre liste d'anime AniList |
| `anilist.co` | Vous cliquez sur **Connecter** dans les paramètres de synchronisation AniList | Votre Client ID AniList | Ouvrir la page d'autorisation d'AniList dans votre navigateur |
| `comicvine.gamespot.com` | Vous recherchez une catégorie comics | Le titre que vous tapez et votre clé Comic Vine | Récupérer les métadonnées de comics (titre, année, éditeur, nombre de numéros, couverture) |
| `store.steampowered.com` | Vous recherchez ou ajoutez un jeu Steam | Le titre saisi ou l’id de l’application Steam | Récupérer les métadonnées du jeu (année, genre, développeur, jaquette) |
| `cdn.cloudflare.steamstatic.com` | Une carte de jeu Steam a une jaquette | L’id de l’application Steam | Charger l’image de jaquette |
| `api.themoviedb.org` | Vous ajoutez ou actualisez une note de film/série avec une clé TMDB | L'ID IMDb de la note et votre clé TMDB | Récupérer la bande-annonce, les images, la durée et la liste des saisons |
| `image.tmdb.org` | Une note de film/série contient des images | Le chemin de l'image TMDB | Charger les images |
| `v3-cinemeta.strem.io` | Vous ajoutez ou actualisez une note de film ou de série | L’id IMDb de la note | Récupérer la bande-annonce, les images, la durée et la liste des saisons de la série — sans clé |
| `images.metahub.space` | Une note de film ou de série a des images | L’id IMDb de la note | Charger les images (arrière-plans) |
| `episodes.metahub.space` | Une note de série a des images d’épisodes | L’id IMDb de la série ainsi que les numéros de saison et d’épisode | Charger les images des épisodes |
| `i.ytimg.com` | Une note de film affiche des images de la bande-annonce | L’id de la vidéo de la bande-annonce | Charger les images de la bande-annonce |
| `s4.anilist.co` | Une note d’anime a une bannière | Le chemin CDN d’AniList | Charger l’image de la bannière |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Vous ouvrez une note contenant une bande-annonce | L'ID de la bande-annonce | Intégrer le lecteur de bande-annonce |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Vous cliquez sur le bouton de partage | La légende de la carte (titre, votre note, lien vers la source) | Ouvrir la fenêtre de partage du réseau choisi avec la publication préremplie — l'image de la carte reste locale |

Aucune autre donnée ne quitte jamais votre vault. Le plugin **n'a pas de télémétrie, pas d'analytique et pas de mécanisme de mise à jour automatique**. Les clés API (OMDb, Google Books, RAWG, Comic Vine, TMDB) sont stockées uniquement dans les paramètres locaux du plugin et envoyées uniquement à leurs services respectifs. Les images de couverture sont chargées directement depuis les URLs retournées par chaque source.

---

## Schéma Frontmatter

Le plugin lit et écrit dans le YAML frontmatter standard. Les notes sont créées pour vous, mais chaque champ est modifiable. `Source` et `Source ID` permettent au plugin de rafraîchir les métadonnées ultérieurement.

### Movie

> **Propriété de couverture** — la propriété du frontmatter qui stocke la jaquette peut être renommée dans **Paramètres → Library** (par exemple en `image`) ; les notes existantes continuent de fonctionner.

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

> **Mise à jour automatique des séries :** Exécutez `Actualiser les métadonnées de la note` (ou ouvrez simplement la note) et le plugin met à jour le nombre total d'épisodes dans `Progress` (par exemple, de `25/42` à `25/50`) et le nombre de `Season`, tout en conservant votre nombre visionné intact.

> **Bande-annonce, images et saisons :** avec une clé TMDB configurée, le plugin remplit automatiquement `Trailer`, `Gallery`, `Runtime` et (pour les séries) `Seasons` — `Runtime` correspond à la durée du film en minutes, ou aux minutes par épisode pour une série. L'en-tête de la note affiche alors un lecteur intégré, une rangée d'images et une liste de saisons avec le nombre d'épisodes, les notes et des boutons de bande-annonce par saison. Chaque champ est du frontmatter classique : modifiez-le ou supprimez-le, et le plugin laissera vos valeurs intactes au prochain rafraîchissement. Chaque version du plugin lance aussi un passage en arrière-plan sur la bibliothèque pour compléter les nouveaux champs, note par note, sans bloquer l’application.

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

## Liens dans le Graphe

Les genres, les créateurs et, pour les films et les séries, la distribution sont stockés comme liens dans leurs propres propriétés :

```yaml
Genre:
    - "[[Action]]"
    - "[[Sci-Fi]]"
Creator:
    - "[[Christopher Nolan]]"
Cast:
    - "[[Leonardo DiCaprio]]"
```

Ainsi, la note de chaque genre, créateur et acteur liste tous ses titres dans ses rétroliens, et le graphe relie les notes par leur intermédiaire. Les noms simples — saisis à la main ou laissés par une version précédente — deviennent des liens à chaque modification d'une note ; un lien avec alias est conservé tel quel. `Reconstruire les liens du graphe` convertit toute la bibliothèque d'un coup. La propriété `Related` des versions précédentes n'est plus utilisée et est retirée des notes.

---

## Partage

Chaque note de contenu obtient un bouton **Partager** dans son en-tête (ou exécutez `Partager la note actuelle`). Il génère une image de carte — affiche, titre, année, genre, note IMDb/AniList et votre note — que vous pouvez publier n'importe où :

- **Sur mobile** — le bouton **Partager…** ouvre la feuille de partage native de votre appareil avec l'image de la carte directement jointe, pour que vous puissiez l'envoyer vers n'importe quelle application.
- **X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, Pinterest** — ouvre le compositeur du réseau avec une légende pré-remplie (titre, votre note, le lien source et un lien vers ce plugin). L'image de la carte est copiée dans votre presse-papiers en même temps, il vous suffit donc de la coller (Ctrl/Cmd+V) dans la publication.
- **Copier l'image / Copier le texte / Enregistrer l'image** — copiez la carte générée ou la légende dans le presse-papiers, ou enregistrez l'image dans le dossier de pièces jointes de votre vault pour la joindre manuellement.

Le partage est entièrement local : la carte est dessinée dans l'application à partir des métadonnées et de la couverture de la note elle-même. Rien n'est téléchargé — le plugin ouvre uniquement l'URL du compositeur que vous choisissez dans votre navigateur.

---

## Synchronisation AniList

Gardez la progression de vos anime synchronisée avec votre compte [AniList](https://anilist.co).

**Configuration** — dans **Paramètres → Library → Synchronisation AniList** :

1. Enregistrez un client API gratuit sur [anilist.co/settings/developer](https://anilist.co/settings/developer), avec l'URL de redirection définie sur `https://anilist.co/api/v2/oauth/pin`.
2. Collez le **Client ID**, cliquez sur **Connecter** et autorisez.
3. AniList vous affiche un jeton d'accès — collez-le dans le plugin. Cliquez sur **Tester la connexion** pour confirmer.

Utilisez ensuite les commandes :

- **Push current note to AniList** — envoie la progression (épisodes regardés), le statut (en cours / terminé / prévu) et votre note de la note anime active vers votre liste AniList.
- **Pull progress from AniList** — récupère votre liste d'anime AniList et met à jour les notes correspondantes. Le pull est **unidirectionnel** : il ne fait jamais reculer une note qui est localement plus avancée ou déjà terminée, et il laisse votre `My Rating` personnel intact.

Seules les notes avec `Source: anilist` (ajoutées via la source anime AniList) sont synchronisées. Votre jeton est stocké localement dans les paramètres du plugin et n'est envoyé qu'à AniList.

---

## Commandes

| Commande                             | Description                                                                |
| ------------------------------------ | -------------------------------------------------------------------------- |
| `Ouvrir la bibliothèque`                       | Ouvre l'onglet galerie de Library.                                         |
| `Ajouter du contenu`                        | Recherche une source et crée une note de contenu (ou tapez un titre pour Manual). |
| `Rechercher dans la bibliothèque`                | Recherche floue et ouvre n'importe quelle note déjà dans votre bibliothèque. |
| `Actualiser les métadonnées de la note`  | Récupère à nouveau les métadonnées pour la note active ; met à jour les totaux d'épisodes des séries. |
| `Reconstruire les liens du graphe`                | Transforme `Genre`, `Creator` et `Cast` en liens dans toutes les notes de contenu. |
| `Trouver et supprimer les doublons`           | Scanne toutes les notes par URL, affiche les doublons et supprime ceux sélectionnés. |
| `Partager la note actuelle`                 | Génère la note sous forme d'image de carte et la partage sur X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky ou Pinterest. |
| `Envoyer la note actuelle vers AniList`       | Envoie la progression, le statut et la note de la note anime active vers votre compte AniList. |
| `Récupérer la progression depuis AniList`         | Récupère votre liste AniList et met à jour les notes correspondantes (unidirectionnel). |
| `Actualiser les métadonnées de toutes les notes` | Récupérer les métadonnées de toutes les notes de la bibliothèque, une par une et en arrière-plan. |

---

## Contributions et Support

- **Vous avez trouvé un bug ?** Ouvrez un [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues).
- **Vous avez une idée de fonctionnalité ?** Lancez une [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions).
- **Vous aimez le plugin ?** Envisagez de donner une étoile au dépôt pour montrer votre soutien !

---

## Licence

[MIT License](LICENSE) — libre d'utilisation, de modification et de partage.

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
