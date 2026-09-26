> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | **[ES](README.es.md)** | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

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
  Películas, series, libros, anime, cómics, juegos y música como notas en Obsidian, mostradas como una galería de portadas.
  <br />
  <a href="https://community.obsidian.md/plugins/library">Directorio de plugins de Obsidian</a>
</p>

## Funciones

- Busca un título y obtén una nota con el póster, el año, el género, los creadores, el reparto y las valoraciones ya rellenados.
- Explora la biblioteca como tarjetas con portada, agrupadas por categoría y ordenadas por nombre, año, valoración o fecha.
- Marca los episodios de una serie o los capítulos de un libro y puntúa cada uno; `Progress` y `My Rating` se calculan a partir de ellos.
- Las notas de películas y series muestran un tráiler, fotogramas, la duración y la lista de temporadas.
- Géneros, creadores y actores son enlaces, así que sus notas reúnen cada título en los enlaces entrantes y en el grafo.
- El panel de estadísticas muestra los rankings que elijas y tu tiempo total de visionado.
- Comparte un título como imagen en X, Telegram, Reddit y otras seis redes.
- Sincroniza el progreso del anime con AniList.
- La interfaz está traducida a todos los idiomas que admite Obsidian, y este README a [30 idiomas](./).

## Inicio rápido

1. Instala **Library** desde Preferencias → Complementos comunitarios → Buscar, o desde [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).
2. En Preferencias → Library, añade una categoría por cada medio: Películas, Series, Libros, Cómics, Juegos, Música, Anime, Manual.
3. Añade las claves de API que necesiten tus fuentes (ver abajo).
4. Abre la pestaña Biblioteca desde la cinta, pulsa **+**, elige una categoría y busca un título. Un título que ya está en la biblioteca abre su nota existente.

El valor `Type` de una categoría (por ejemplo `Movie`) decide qué notas le pertenecen, y su carpeta decide dónde van las notas nuevas. Ambos están en **Avanzado** dentro de los ajustes de la categoría.

## Fuentes

| Categoría | Fuente | Clave |
| --- | --- | --- |
| Películas, series | OMDb | [Clave gratuita](https://www.omdbapi.com/apikey.aspx) |
| Libros | Google Books + Open Library | [Clave de Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) opcional |
| Juegos | RAWG + Steam | [Clave gratuita de RAWG](https://rawg.io/apidocs); Steam no necesita |
| Música | Deezer | Ninguna |
| Anime | AniList | Ninguna |
| Cómics | Comic Vine | [Clave gratuita](https://comicvine.gamespot.com/api/) |
| Todo lo demás | Manual: tú rellenas los campos | Ninguna |

Los tráileres, fotogramas, la duración y las listas de temporadas vienen de Cinemeta sin clave. Una [clave de TMDB](https://www.themoviedb.org/settings/api) añade valoraciones de temporadas y más fotogramas.

## Progreso y puntuaciones

La cabecera de una nota de serie lista las temporadas, y cada temporada se despliega en sus episodios, con títulos cuando la fuente los tiene. Marca un episodio o una temporada entera como visto y puntúalo de 1 a 10. `Progress` cuenta los episodios marcados, la puntuación de una temporada es la media de sus episodios puntuados, y `My Rating` es la media de las temporadas puntuadas. Una temporada sin episodios puntuados recibe una puntuación propia.

El anime funciona igual, como una sola temporada sin títulos de episodios.

Los capítulos de un libro salen del índice de una edición en Open Library. Si no hay ninguno, **Añadir capítulos** en la cabecera de la nota acepta un número de capítulos o un título por línea. A partir de ahí, `Progress` cuenta capítulos en lugar de páginas, y las páginas ya leídas pasan a la misma proporción de capítulos.

Las notas de versiones anteriores conservan su progreso. Mientras no marques nada, los primeros episodios hasta la cifra de `Progress` aparecen como vistos.

## Estadísticas

El panel de la parte superior de la pestaña Biblioteca muestra las columnas que elijas en Preferencias → Library → Estadísticas: los tres títulos mejor puntuados de una categoría, los tres valores más frecuentes de una propiedad (géneros, actores o cualquier otra) y las horas dedicadas a películas, series y anime. Debajo del gráfico aparece una comparación al día, por ejemplo: El Apolo 11 podría haber ido a la Luna y vuelto 8 veces.

## Enlaces del grafo

`Genre`, `Creator` y `Cast` guardan enlaces como `[[Christopher Nolan]]`, así que la nota de un género o de una persona lista sus títulos en los enlaces entrantes. Los nombres escritos a mano se convierten en enlaces cuando cambia la nota, y `Reconstruir enlaces del grafo` convierte toda la biblioteca.

## Compartir y AniList

**Compartir** en la cabecera de una nota dibuja una tarjeta con el póster, el título, el año, el género, el reparto, las valoraciones y tu puntuación. En el escritorio, la imagen va al portapapeles y la red que elijas se abre con un texto, así que solo pegas la imagen en la publicación. En el móvil, la imagen va al menú de compartir del sistema. También puedes copiar la imagen o el texto, o guardar la imagen en la bóveda.

Para sincronizar anime, registra un cliente en [anilist.co/settings/developer](https://anilist.co/settings/developer) con la URL de redirección `https://anilist.co/api/v2/oauth/pin`. Pega el Client ID en Preferencias → Library → Sincronización con AniList, haz clic en **Conectar** y pega el token que muestra AniList. `Enviar la nota actual a AniList` envía el progreso, el estado y la puntuación. `Obtener el progreso desde AniList` actualiza tus notas, nunca hace retroceder el progreso y no toca `My Rating`. Solo se sincronizan las notas con `Source: anilist`.

## Frontmatter

Cada tarjeta es una nota, y todo lo que el plugin sabe de ella está en el frontmatter:

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
      # ...7 episodios más
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

En una serie, `Runtime` es la duración de un episodio. Los libros añaden `ISBN` y guardan los capítulos en `Chapters` con los mismos campos `title`, `watched` y `my_rating`; el anime añade `Rating AniList` y `Status`. La propiedad de la portada se puede renombrar en los ajustes, por ejemplo a `image`.

Una actualización solo rellena los campos vacíos, así que los valores que edites se mantienen. También actualiza el total de episodios en `Progress` y añade temporadas y títulos de episodios nuevos.

## Privacidad y uso de la red

Tu biblioteca son notas normales y funciona sin conexión. El plugin se conecta cuando buscas, actualizas, sincronizas o compartes; cuando abres una nota de la biblioteca, como mucho una vez cada 5 minutos por nota; y una vez tras una actualización o un cambio de clave, para rellenar los campos nuevos. No tiene telemetría, analíticas ni autoactualización. Las claves de API se quedan en los ajustes locales del plugin y solo van a su propio servicio.

| Host | Cuándo | Qué se envía |
| --- | --- | --- |
| `www.omdbapi.com` | Búsqueda de películas y series | Título o id de IMDb, clave de OMDb |
| `openlibrary.org` | Búsqueda de libros; búsqueda de capítulos al añadir o abrir un libro | Título y autor, ISBN o id de la obra |
| `covers.openlibrary.org` | Portadas de libros | Id de la portada |
| `www.googleapis.com` | Búsqueda de libros | Título, clave de Google Books |
| `api.rawg.io` | Búsqueda de juegos | Título, clave de RAWG |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | Búsqueda de juegos y portadas | Título o id de app de Steam |
| `api.deezer.com` | Búsqueda de música | Álbum o artista |
| `graphql.anilist.co` | Búsqueda de anime; sincronización con AniList | Título; tu token, el progreso, el estado y la puntuación |
| `anilist.co` | Haces clic en **Conectar** | Client ID, abierto en tu navegador |
| `s4.anilist.co` | Banners de anime | Ruta del CDN |
| `comicvine.gamespot.com` | Búsqueda de cómics | Título, clave de Comic Vine |
| `v3-cinemeta.strem.io` | Añadir o actualizar una película o serie | Id de IMDb |
| `images.metahub.space`, `episodes.metahub.space` | Fotogramas | Id de IMDb, números de temporada y episodio |
| `api.themoviedb.org`, `image.tmdb.org` | Añadir o actualizar una película o serie, si configuras una clave de TMDB | Id de IMDb y clave de TMDB; ruta de la imagen |
| `i.ytimg.com` | Fotogramas de tráileres | Id del vídeo |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | Abrir una nota con tráiler | Id del vídeo |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | Haces clic en un botón de compartir | El texto: título, tu puntuación, enlace a la fuente. La imagen se queda en tu dispositivo |

## Comandos

| Comando | Qué hace |
| --- | --- |
| `Abrir biblioteca` | Abre la pestaña Biblioteca |
| `Agregar contenido` | Busca en una fuente y crea una nota |
| `Buscar en tu biblioteca` | Encuentra y abre una nota de la biblioteca |
| `Actualizar metadatos de la nota actual` | Vuelve a obtener los datos de la nota activa |
| `Actualizar metadatos de todas las notas` | Vuelve a obtener cada nota de la biblioteca, una a una |
| `Reconstruir enlaces del grafo` | Convierte `Genre`, `Creator` y `Cast` en enlaces |
| `Encontrar y eliminar duplicados` | Lista las notas que comparten URL y elimina las que elijas |
| `Compartir nota actual` | Abre la tarjeta para compartir |
| `Enviar la nota actual a AniList` | Envía el progreso, el estado y la puntuación |
| `Obtener el progreso desde AniList` | Actualiza las notas desde tu lista de AniList |

## Soporte

Informa de errores en [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues) y propón ideas en [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions). El plugin se distribuye bajo la [licencia MIT](../LICENSE).

Si el plugin te resulta útil, puedes apoyarlo:

| | Red | Dirección |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
