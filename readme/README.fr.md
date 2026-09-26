> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | **[FR](README.fr.md)** | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

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
  Films, séries, livres, anime, BD, jeux et musique sous forme de notes Obsidian, affichés en galerie de jaquettes.
  <br />
  <a href="https://community.obsidian.md/plugins/library">Répertoire des plugins Obsidian</a>
</p>

## Fonctionnalités

- Cherchez un titre et obtenez une note avec l'affiche, l'année, le genre, les créateurs, la distribution et les évaluations déjà remplis.
- Parcourez la bibliothèque sous forme de jaquettes, groupées par catégorie et triées par nom, année, évaluation ou date.
- Cochez les épisodes d'une série ou les chapitres d'un livre et notez-les un par un ; `Progress` et `My Rating` se calculent à partir d'eux.
- Les notes de films et de séries affichent une bande-annonce, des images, la durée et la liste des saisons.
- Genres, créateurs et acteurs sont des liens, donc leurs notes rassemblent chaque titre dans les rétroliens et le graphe.
- Le panneau de statistiques affiche les classements de votre choix et votre temps de visionnage total.
- Partagez un titre sous forme d'image sur X, Telegram, Reddit et six autres réseaux.
- Synchronisez la progression des anime avec AniList.
- L'interface est traduite dans toutes les langues prises en charge par Obsidian, et ce README dans [30 langues](./).

## Démarrage rapide

1. Installez **Library** via Paramètres → Modules complémentaires → Parcourir, ou depuis les [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).
2. Dans Paramètres → Library, ajoutez une catégorie par média : Films, Séries, Livres, BD, Jeux, Musique, Animé, Manuel.
3. Saisissez les clés d'API dont vos sources ont besoin (voir plus bas).
4. Ouvrez l'onglet Bibliothèque depuis le ruban, appuyez sur **+**, choisissez une catégorie et cherchez un titre. Un titre déjà présent dans la bibliothèque ouvre sa note existante.

La valeur `Type` d'une catégorie (par exemple `Movie`) détermine les notes qui lui appartiennent, et son dossier l'endroit où arrivent les nouvelles notes. Les deux se trouvent sous **Avancé** dans les réglages de la catégorie.

## Sources

| Catégorie | Source | Clé |
| --- | --- | --- |
| Films, séries | OMDb | [Clé gratuite](https://www.omdbapi.com/apikey.aspx) |
| Livres | Google Books + Open Library | [Clé Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) facultative |
| Jeux | RAWG + Steam | [Clé RAWG gratuite](https://rawg.io/apidocs) ; Steam n'en a pas besoin |
| Musique | Deezer | Aucune |
| Anime | AniList | Aucune |
| BD | Comic Vine | [Clé gratuite](https://comicvine.gamespot.com/api/) |
| Tout le reste | Manuel : vous remplissez les champs | Aucune |

Les bandes-annonces, images, durées et listes de saisons viennent de Cinemeta sans clé. Une [clé TMDB](https://www.themoviedb.org/settings/api) ajoute les notes des saisons et davantage d'images.

## Progression et notes

L'en-tête d'une note de série liste les saisons, et chaque saison se déplie en épisodes, avec leurs titres quand la source les connaît. Cochez un épisode ou une saison entière comme vu et notez-le de 1 à 10. `Progress` compte les épisodes cochés, la note d'une saison est la moyenne de ses épisodes notés, et `My Rating` est la moyenne des saisons notées. Une saison sans épisode noté reçoit sa propre note.

Les anime fonctionnent de la même façon, comme une seule saison sans titres d'épisodes.

Les chapitres d'un livre viennent de la table des matières d'une édition sur Open Library. S'il n'y en a pas, **Ajouter des chapitres** dans l'en-tête de la note accepte un nombre de chapitres ou un titre par ligne. Dès lors, `Progress` compte les chapitres au lieu des pages, et les pages déjà lues sont reportées dans la même proportion de chapitres.

Les notes des versions précédentes gardent leur progression. Tant que vous ne cochez rien, les premiers épisodes jusqu'au compte de `Progress` s'affichent comme vus.

## Statistiques

Le panneau en haut de l'onglet Bibliothèque affiche les colonnes choisies dans Paramètres → Library → Statistiques : les trois titres les mieux notés d'une catégorie, les trois valeurs les plus fréquentes d'une propriété (genres, acteurs ou toute autre) et les heures passées sur les films, séries et anime. Sous le graphique apparaît une comparaison par jour, par exemple : Apollo 11 aurait pu faire l'aller-retour vers la Lune 8 fois.

## Liens du graphe

`Genre`, `Creator` et `Cast` contiennent des liens comme `[[Christopher Nolan]]`, si bien que la note d'un genre ou d'une personne liste ses titres dans les rétroliens. Les noms saisis à la main deviennent des liens quand la note change, et `Reconstruire les liens du graphe` convertit toute la bibliothèque.

## Partage et AniList

**Partager** dans l'en-tête d'une note dessine une carte avec l'affiche, le titre, l'année, le genre, la distribution, les évaluations et votre note. Sur ordinateur, l'image part dans le presse-papiers et le réseau choisi s'ouvre avec une légende, il reste à coller l'image dans la publication. Sur mobile, l'image va à la feuille de partage du système. Vous pouvez aussi copier l'image ou la légende, ou enregistrer l'image dans le coffre.

Pour synchroniser les anime, enregistrez un client sur [anilist.co/settings/developer](https://anilist.co/settings/developer) avec l'URL de redirection `https://anilist.co/api/v2/oauth/pin`. Collez le Client ID dans Paramètres → Library → Synchronisation AniList, cliquez sur **Connecter** et collez le jeton qu'affiche AniList. `Envoyer la note actuelle vers AniList` envoie la progression, le statut et la note. `Récupérer la progression depuis AniList` met à jour vos notes, ne fait jamais reculer la progression et ne touche pas à `My Rating`. Seules les notes avec `Source: anilist` sont synchronisées.

## Frontmatter

Chaque carte est une note, et tout ce que le plugin en sait se trouve dans le frontmatter :

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
      # ...7 autres épisodes
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

Pour une série, `Runtime` est la durée d'un épisode. Les livres ajoutent `ISBN` et rangent les chapitres dans `Chapters` avec les mêmes champs `title`, `watched` et `my_rating` ; les anime ajoutent `Rating AniList` et `Status`. La propriété de la jaquette peut être renommée dans les réglages, par exemple en `image`.

Une actualisation ne remplit que les champs vides, donc les valeurs que vous modifiez restent. Elle met aussi à jour le total d'épisodes dans `Progress` et ajoute les nouvelles saisons et les titres d'épisodes.

## Confidentialité et réseau

Votre bibliothèque se compose de simples notes et fonctionne hors ligne. Le plugin se connecte quand vous cherchez, actualisez, synchronisez ou partagez ; quand vous ouvrez une note de la bibliothèque, au plus une fois toutes les 5 minutes par note ; et une fois après une mise à jour ou un changement de clé, pour remplir les nouveaux champs. Il n'a ni télémétrie, ni statistiques d'usage, ni mise à jour automatique. Les clés d'API restent dans les réglages locaux du plugin et ne vont qu'à leur propre service.

| Hôte | Quand | Ce qui est envoyé |
| --- | --- | --- |
| `www.omdbapi.com` | Recherche de films et de séries | Titre ou identifiant IMDb, clé OMDb |
| `openlibrary.org` | Recherche de livres ; recherche des chapitres quand vous ajoutez ou ouvrez un livre | Titre et auteur, ISBN ou identifiant d'œuvre |
| `covers.openlibrary.org` | Couvertures de livres | Identifiant de couverture |
| `www.googleapis.com` | Recherche de livres | Titre, clé Google Books |
| `api.rawg.io` | Recherche de jeux | Titre, clé RAWG |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | Recherche de jeux et jaquettes | Titre ou identifiant d'app Steam |
| `api.deezer.com` | Recherche de musique | Album ou artiste |
| `graphql.anilist.co` | Recherche d'anime ; synchronisation AniList | Titre ; votre jeton, la progression, le statut et la note |
| `anilist.co` | Vous cliquez sur **Connecter** | Client ID, ouvert dans votre navigateur |
| `s4.anilist.co` | Bannières d'anime | Chemin CDN |
| `comicvine.gamespot.com` | Recherche de BD | Titre, clé Comic Vine |
| `v3-cinemeta.strem.io` | Ajout ou actualisation d'un film ou d'une série | Identifiant IMDb |
| `images.metahub.space`, `episodes.metahub.space` | Images | Identifiant IMDb, numéros de saison et d'épisode |
| `api.themoviedb.org`, `image.tmdb.org` | Ajout ou actualisation d'un film ou d'une série, si une clé TMDB est définie | Identifiant IMDb et clé TMDB ; chemin de l'image |
| `i.ytimg.com` | Images des bandes-annonces | Identifiant de la vidéo |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Ouverture d'une note avec bande-annonce | Identifiant de la vidéo |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Vous cliquez sur un bouton de partage | La légende : titre, votre note, lien source. L'image reste sur votre appareil |

## Commandes

| Commande | Ce qu'elle fait |
| --- | --- |
| `Ouvrir la bibliothèque` | Ouvre l'onglet Bibliothèque |
| `Ajouter du contenu` | Cherche dans une source et crée une note |
| `Rechercher dans la bibliothèque` | Trouve et ouvre une note de la bibliothèque |
| `Actualiser les métadonnées de la note` | Récupère à nouveau la note active |
| `Actualiser les métadonnées de toutes les notes` | Récupère chaque note de la bibliothèque, une à une |
| `Reconstruire les liens du graphe` | Transforme `Genre`, `Creator` et `Cast` en liens |
| `Trouver et supprimer les doublons` | Liste les notes qui partagent une URL et supprime celles que vous choisissez |
| `Partager la note actuelle` | Ouvre la carte de partage |
| `Envoyer la note actuelle vers AniList` | Envoie la progression, le statut et la note |
| `Récupérer la progression depuis AniList` | Met à jour les notes depuis votre liste AniList |

## Assistance

Signalez les bugs dans les [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues) et proposez vos idées dans les [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions). Le plugin est sous [licence MIT](../LICENSE).

Si le plugin vous est utile, vous pouvez le soutenir :

| | Réseau | Adresse |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
