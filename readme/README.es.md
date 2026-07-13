> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | **[ES](README.es.md)** | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

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
  <b>Organiza tus películas, series, libros y más en una galería visual — directamente dentro de Obsidian.</b>
  <br />
  Busca y añade títulos dentro de la app, obtén metadatos automáticamente, haz seguimiento del progreso y conecta todo con tu grafo.
</p>

<p align="center">
  <a href="https://community.obsidian.md/plugins/library">Ver en el directorio de Obsidian Community Plugins</a>
</p>

---

## Características Principales

- **Cuadrícula Visual de Tarjetas** — Una pestaña dedicada de Library renderiza tu colección como una galería de tarjetas con arte de portada.
- **Búsqueda Integrada** — Busca y añade títulos directamente en la app: OMDb para películas y series, Open Library o Google Books para libros, RAWG para juegos, Deezer para música, AniList para anime, Comic Vine para cómics.
- **Seguimiento Inteligente de Series** — Las temporadas y el total de episodios se obtienen automáticamente y se mantienen sincronizados.
- **Indicadores de Progreso** — Barras de progreso visuales en tarjetas y encabezados de notas muestran cuánto has visto o leído.
- **Encabezados de Notas Ricos** — Cada nota de contenido recibe un encabezado generado automáticamente con todos los metadatos clave.
- **Categorías Personalizadas** — Crea categorías para Películas, Series, Anime, Cómics, Libros, Juegos, Música o cualquier otra cosa a través de la fuente manual.
- **Enlaces en el Grafo** — Una propiedad `Related` en el frontmatter enlaza cada nota con su categoría, géneros y creadores, sincronizados automáticamente para un grafo hermoso.
- **Tarjetas para Compartir** — Convierte cualquier nota de contenido en una imagen de tarjeta lista para compartir (póster, título, año, género, puntuación de IMDb y tu valoración) y publícala en X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky o Pinterest — compártela directamente con las apps de tu dispositivo, o copia/guarda la imagen para usarla donde quieras.
- **Sincronización con AniList** — Envía el progreso, el estado y la valoración de tu anime directamente a tu cuenta de AniList, o descarga tu lista de vuelta a tus notas.
- **Ordenación y Contracción** — Ordena tarjetas por nombre, año, valoración o fecha; contrae cualquier categoría.
- **Estadísticas** — Géneros principales, creadores principales (solo películas y series) y elementos principales por categoría con clasificaciones de medalla.
- **Detección de Duplicados** — Previene automáticamente añadir el mismo título dos veces por URL. Un comando integrado encuentra y elimina duplicados existentes.
- **Multilingüe** — 31 idiomas: inglés, ucraniano, ruso, bielorruso, kazajo, uzbeko, alemán, español, francés, italiano, neerlandés, checo, croata, polaco, rumano, turco, azerbaiyano, persa, hindi, bengalí, urdu, tagalo, vietnamita, tailandés, javanés, japonés, coreano, chino, árabe, cingalés, hebreo.

---

## Inicio Rápido

### 1. Instalación

Instala **Library** desde el [directorio de Obsidian Community Plugins](https://community.obsidian.md/plugins/library) (Ajustes > Complementos comunitarios > Explorar > buscar "Library"), o instálalo manualmente a través de las [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases).

### 2. Configuración Básica

1. Ve a **Ajustes** > **Library**.
2. Añade tus **Categorías** — selecciona un tipo predefinido (Movies, Series, Books, Comics, Games, Music, Anime o Manual) del menú desplegable y haz clic en **Add category**. Cada categoría tiene un nombre para mostrar (traducido a tu idioma), un valor `Type` (siempre en inglés, por ejemplo `Movie`), una fuente y una carpeta opcional para almacenar notas.
3. _(Opcional)_ Introduce claves API para los servicios que uses: [OMDb](https://www.omdbapi.com/apikey.aspx) para películas/series, [RAWG](https://rawg.io/apidocs) para juegos, [Comic Vine](https://comicvine.gamespot.com/api/) para cómics. Anime (AniList) y música (Deezer) no requieren clave.

### 3. Añadir una Tarjeta por Título

¡No más rellenar frontmatter a mano! Añade una película, serie, anime o cómic simplemente buscando su nombre:

1. Abre la pestaña **Library** desde el icono de la barra lateral (o ejecuta `Open Library`).
2. Haz clic en el botón **+** en la parte superior derecha de la página de Library (o ejecuta `Add content`).
3. Elige una categoría, escribe el **título** en el cuadro de búsqueda y selecciona un resultado.
4. Se crea una tarjeta al instante, con póster, año, género, creadores y valoración rellenados automáticamente.

El botón **Search** junto a **+** busca títulos que ya están en tu biblioteca.

Para categorías **Manuales** simplemente escribes un título y rellenas la portada, el año y otros campos tú mismo.

---

## Estadísticas

La pestaña de Library incluye una sección plegable de **Estadísticas** en la parte superior:

- **Géneros Principales** — clasificados por frecuencia en toda tu biblioteca.
- **Creadores Principales** — clasificados por número de películas y series en las que aparecen.
- **Principales por Categoría** — para cada categoría (Películas, Series, Libros, etc.), los 3 elementos principales por valoración con miniaturas de portada pequeñas.

---

## Detección de Duplicados

Library previene entradas duplicadas verificando el campo `URL`:

- **Al añadir** — si ya existe una nota con la misma URL, abre la nota existente en lugar de crear un duplicado.
- **Encontrar y Eliminar Duplicados** — ejecuta este comando desde la paleta para escanear todas las notas, agrupar por URL y eliminar selectivamente los duplicados a través de un modal.

---

## Fuentes

Cada categoría está vinculada a una fuente que potencia su búsqueda:

| Fuente            | Tipos de contenido | Clave API                                                   |
| ----------------- | ------------------- | ----------------------------------------------------------- |
| **OMDb**          | Películas, Series   | Clave gratuita requerida — [omdbapi.com](https://www.omdbapi.com/apikey.aspx) |
| **Books**         | Libros              | Open Library (sin clave) + Google Books (clave gratuita opcional). Los resultados se combinan — Google Books primero, Open Library debajo. |
| **RAWG**          | Juegos              | Clave gratuita requerida — [rawg.io/apidocs](https://rawg.io/apidocs) |
| **Deezer**        | Música (álbumes)    | Ninguna                                                    |
| **AniList**       | Anime               | Ninguna — API GraphQL gratuita de AniList, no se necesita clave |
| **Comic Vine**    | Cómics              | Clave gratuita requerida — [comicvine.gamespot.com/api](https://comicvine.gamespot.com/api/) |
| **Manual**        | Cualquier otra cosa | Ninguna — escribes el título y rellenas los campos tú mismo |

---

## Privacidad y Uso de Red

Library es **offline-first**. El complemento solo contacta la red cuando buscas activamente un título para añadir, y solo con los términos de búsqueda que escribes:

| Servicio | Cuándo | Qué se envía | Por qué |
| --- | --- | --- | --- |
| `www.omdbapi.com` | Buscas en una categoría respaldada por OMDb | El título que escribes y tu clave API de OMDb | Obtener metadatos de películas/series (año, género, elenco, valoración, póster, conteo de episodios) |
| `openlibrary.org` | Buscas en una categoría de Open Library | El título que escribes | Obtener metadatos de libros (autor, año, temas, ID de portada) |
| `covers.openlibrary.org` | Una tarjeta de libro tiene portada | El ID de portada de Open Library | Cargar la imagen de portada |
| `www.googleapis.com` | Buscas en una categoría de Google Books | El título que escribes y tu clave de Google Books | Obtener metadatos de libros (autor, año, categorías, número de páginas, portada, ISBN) |
| `api.rawg.io` | Buscas en una categoría de juegos RAWG | El título que escribes y tu clave RAWG | Obtener metadatos de juegos (año, género, desarrollador, portada) |
| `api.deezer.com` | Buscas en una categoría de música Deezer | El álbum o artista que escribes | Obtener metadatos de álbum (artista, año, género, conteo de pistas, portada) |
| `graphql.anilist.co` | Buscas en una categoría de anime | El título que escribes | Obtener metadatos de anime (título, año, género, episodios, puntuación de AniList, estudio, póster) |
| `graphql.anilist.co` | Ejecutas un comando de sincronización con AniList | Tu token de acceso de AniList y el progreso, el estado y la valoración de la nota | Leer o actualizar tu lista de anime de AniList |
| `comicvine.gamespot.com` | Buscas en una categoría de cómics | El título que escribes y tu clave de Comic Vine | Obtener metadatos de cómics (título, año, editorial, conteo de números, portada) |

Ningún otro dato sale nunca de tu vault. El complemento **no tiene telemetría, ni análisis, ni mecanismo de actualización automática**. Las claves API (OMDb, Google Books, RAWG, Comic Vine) se almacenan solo en la configuración local del complemento y se envían solo a sus respectivos servicios. Las imágenes de portada se cargan directamente desde las URLs devueltas por cada fuente.

---

## Esquema de Frontmatter

El complemento lee y escribe en YAML frontmatter estándar. Las notas se crean por ti, pero cada campo es editable. `Source` y `Source ID` permiten al complemento actualizar metadatos más adelante.

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

> **Actualización automática de series:** Ejecuta `Refresh metadata for current note` (o simplemente abre la nota) y el complemento actualiza el conteo total de episodios en `Progress` (por ejemplo, de `25/42` a `25/50`) y el conteo de `Season`, manteniendo tu conteo visto intacto.

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

## Enlaces en el Grafo

Cada nota de contenido recibe una propiedad `Related` en el frontmatter, mantenida actualizada automáticamente — el cuerpo de la nota nunca se modifica:

```yaml
Related:
    - "[[Movie]]"
    - "[[Action]]"
    - "[[Sci-Fi]]"
    - "[[Christopher Nolan]]"
```

Estos enlaces conectan tus notas a través de categorías compartidas, géneros y creadores, para que la vista de grafo de Obsidian forme clusters limpios. Se crea una nota real de hub por categoría (por ejemplo, `Movie`) para que los clusters se muestren incluso cuando los enlaces no resueltos estén ocultos. La propiedad se escribe cuando se crea una nota y se actualiza cada vez que cambian sus metadatos — ejecuta `Rebuild graph links` solo si quieres forzar una reconstrucción completa.

---

## Compartir

Cada nota de contenido tiene un botón **Compartir** en su encabezado (o ejecuta `Share current note`). Renderiza una imagen de tarjeta —póster, título, año, género, puntuación de IMDb/AniList y tu valoración— que puedes publicar donde quieras:

- **En el móvil** — el botón **Compartir…** abre la hoja de compartir nativa de tu dispositivo con la imagen de la tarjeta adjunta directamente, para que puedas enviarla directo a cualquier app.
- **X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky, Pinterest** — abre el editor de la red con un texto prerellenado (título, tu valoración, el enlace de origen y un enlace a este complemento). La imagen de la tarjeta se copia a tu portapapeles al mismo tiempo, así que solo tienes que pegarla (Ctrl/Cmd+V) en la publicación.
- **Copiar imagen / Copiar texto / Guardar imagen** — copia la tarjeta renderizada o el texto al portapapeles, o guarda la imagen en la carpeta de adjuntos de tu vault para adjuntarla manualmente.

Compartir es totalmente local: la tarjeta se dibuja dentro de la app a partir de los propios metadatos y la portada de la nota. No se sube nada — el complemento solo abre en tu navegador la URL del editor que elijas.

---

## Sincronización con AniList

Mantén el progreso de tu anime sincronizado con tu cuenta de [AniList](https://anilist.co).

**Configuración** — en **Ajustes → Library → AniList sync**:

1. Registra un cliente API gratuito en [anilist.co/settings/developer](https://anilist.co/settings/developer), con la URL de redirección establecida en `https://anilist.co/api/v2/oauth/pin`.
2. Pega el **Client ID**, haz clic en **Connect** y autoriza.
3. AniList te muestra un token de acceso — pégalo en el complemento. Haz clic en **Test connection** para confirmar.

Luego usa los comandos:

- **`Push current note to AniList`** — envía el progreso (episodios vistos), el estado (viendo / completado / planeado) y tu valoración de la nota de anime activa a tu lista de AniList.
- **`Pull progress from AniList`** — obtiene tu lista de anime de AniList y actualiza las notas coincidentes. La descarga es **solo hacia adelante**: nunca retrocede una nota que localmente está más avanzada o ya completa, y deja intacta tu valoración personal `My Rating`.

Solo se sincronizan las notas con `Source: anilist` (añadidas a través de la fuente de anime de AniList). Tu token se almacena localmente en la configuración del complemento y se envía únicamente a AniList.

---

## Comandos

| Comando                              | Descripción                                                                |
| ------------------------------------ | -------------------------------------------------------------------------- |
| `Open Library`                       | Abre la pestaña de galería de Library.                                     |
| `Add content`                        | Busca una fuente y crea una nota de contenido (o escribe un título para Manual). |
| `Search your library`                | Busca difusamente y abre cualquier nota que ya esté en tu biblioteca.       |
| `Refresh metadata for current note`  | Vuelve a obtener metadatos para la nota activa; actualiza conteos de episodios de series. |
| `Rebuild graph links`                | Conecta cada nota de contenido con su categoría, géneros y creadores.       |
| `Find & remove duplicates`           | Escanea todas las notas por URL, muestra duplicados y elimina los seleccionados. |
| `Share current note`                 | Renderiza la nota como una imagen de tarjeta y compártela en X, Telegram, Reddit, WhatsApp, Facebook, LinkedIn, VK, Bluesky o Pinterest. |
| `Push current note to AniList`       | Envía el progreso, el estado y la valoración de la nota de anime activa a tu cuenta de AniList. |
| `Pull progress from AniList`         | Obtiene tu lista de AniList y actualiza las notas coincidentes (solo hacia adelante). |

---

## Contribuciones y Soporte

- **¿Encontraste un bug?** Abre un [Issue](https://github.com/Kigrok/obsidian-library-plugin/issues).
- **¿Tienes una idea de función?** Inicia una [Discussion](https://github.com/Kigrok/obsidian-library-plugin/discussions).
- **¿Te encanta el complemento?** ¡Considera dar una estrella al repositorio para mostrar tu apoyo!

---

## Gracias

Si encuentras este complemento útil, considera apoyar su desarrollo:

| | Red | Dirección |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |

---
