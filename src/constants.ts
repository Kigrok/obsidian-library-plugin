import type { ContentType } from './providers/types'

export const progressPattern: RegExp = /^(\d+)\s*\/\s*(\d+)$/
export const dmyDatePattern: RegExp = /^(\d{2})\.(\d{2})\.(\d{4})$/
export const localeMap: Record<string, SupportedLocale> = {
	ru: 'ru',
	de: 'de',
	es: 'es',
	fr: 'fr'
}

export type SupportedLocale = 'en' | 'ru' | 'de' | 'es' | 'fr'

export const I18N: Record<SupportedLocale, Record<string, string>> = {
	en: {
		'cmd.addContent': 'Add content',
		'cmd.refresh': 'Refresh metadata for current note',
		'cmd.searchLibrary': 'Search your library',
		'cmd.openLibrary': 'Open Library',
		'cmd.rebuildLinks': 'Rebuild graph links',
		'view.title': 'Library',
		'modal.pickType': 'Choose a category',
		'modal.search.placeholder': 'Search by title…',
		'modal.searchLibrary': 'Search your library…',
		'modal.noCategories': 'Add a category in settings first',
		'modal.manualTitle': 'New entry',
		'modal.manualCreate': 'Create',
		'notice.created': 'Created: {name}',
		'notice.notFound': 'Nothing found to update',
		'notice.searching': 'Fetching metadata…',
		'notice.linksRebuilt': 'Graph links rebuilt: {count}',
		'sort.name': 'A-Z',
		'sort.year': 'Year',
		'sort.rating': 'Rating',
		'sort.date': 'Date',
		'header.creator': 'Creator',
		'header.years': 'Years',
		'header.seasons': 'Seasons',
		'header.genre': 'Genre',
		'header.myRating': 'My Rating',
		'header.progress': 'Progress',
		'header.complete': 'Complete',
		'settings.intro':
			'Configure content categories. Open the Library tab from the ribbon to add content; notes are grouped into categories by their Type frontmatter field.',
		'settings.omdb.name': 'OMDb API key (optional)',
		'settings.omdb.desc':
			'Used to auto-fill IMDb rating and metadata for movies and series. Get a key at: https://www.omdbapi.com/apikey.aspx',
		'settings.omdb.placeholder': 'Example: a1b2c3d4',
		'settings.section.categories': 'Categories',
		'settings.categories.desc':
			'Each category shows notes whose Type frontmatter equals the value below.',
		'settings.category.name': 'Category {index}',
		'settings.category.desc': 'Display name, matching Type value, and source',
		'settings.category.name.placeholder': 'Name (e.g. Movies)',
		'settings.category.type.placeholder': 'Type (e.g. Movie)',
		'settings.category.folder': 'Folder',
		'settings.category.folder.placeholder': 'e.g. Media/Movies',
		'settings.category.manual': 'Manual · no source',
		'settings.addCategory': 'Add category',
		'settings.newCategory': 'New category',
		'settings.section.example': 'Example note',
		'settings.example.desc':
			'To include a note in a category, set the Type field in frontmatter.'
	},
	ru: {
		'cmd.addContent': 'Добавить контент',
		'cmd.refresh': 'Обновить метаданные текущей заметки',
		'cmd.searchLibrary': 'Поиск по библиотеке',
		'cmd.openLibrary': 'Открыть библиотеку',
		'cmd.rebuildLinks': 'Перестроить связи для графа',
		'view.title': 'Библиотека',
		'modal.pickType': 'Выберите категорию',
		'modal.search.placeholder': 'Поиск по названию…',
		'modal.searchLibrary': 'Поиск по библиотеке…',
		'modal.noCategories': 'Сначала добавьте категорию в настройках',
		'modal.manualTitle': 'Новая запись',
		'modal.manualCreate': 'Создать',
		'notice.created': 'Создано: {name}',
		'notice.notFound': 'Нечего обновлять',
		'notice.searching': 'Загрузка метаданных…',
		'notice.linksRebuilt': 'Связи для графа перестроены: {count}',
		'sort.name': 'А-Я',
		'sort.year': 'Год',
		'sort.rating': 'Рейтинг',
		'sort.date': 'Дата',
		'header.creator': 'Автор',
		'header.years': 'Годы',
		'header.seasons': 'Сезоны',
		'header.genre': 'Жанр',
		'header.myRating': 'Моя оценка',
		'header.progress': 'Прогресс',
		'header.complete': 'Завершено',
		'settings.intro':
			'Настройте категории контента. Открывайте вкладку «Библиотека» из бокового меню, чтобы добавлять контент; заметки группируются по полю Type во фронтматтере.',
		'settings.omdb.name': 'OMDb API ключ (необязательно)',
		'settings.omdb.desc':
			'Нужен для автозаполнения рейтинга IMDb и метаданных фильмов и сериалов. Получить ключ: https://www.omdbapi.com/apikey.aspx',
		'settings.omdb.placeholder': 'Например: a1b2c3d4',
		'settings.section.categories': 'Категории',
		'settings.categories.desc':
			'Каждая категория показывает заметки, где поле Type равно указанному значению.',
		'settings.category.name': 'Категория {index}',
		'settings.category.desc': 'Название, значение Type и источник',
		'settings.category.name.placeholder': 'Название (например: Фильмы)',
		'settings.category.type.placeholder': 'Type (например: Movie)',
		'settings.category.folder': 'Папка',
		'settings.category.folder.placeholder': 'напр. Media/Movies',
		'settings.category.manual': 'Вручную · без источника',
		'settings.addCategory': 'Добавить категорию',
		'settings.newCategory': 'Новая категория',
		'settings.section.example': 'Пример заметки',
		'settings.example.desc':
			'Чтобы заметка попала в категорию, укажите поле Type во фронтматтере.'
	},
	de: {
		'cmd.addContent': 'Inhalt hinzufügen',
		'cmd.refresh': 'Metadaten der aktuellen Notiz aktualisieren',
		'cmd.searchLibrary': 'Bibliothek durchsuchen',
		'cmd.openLibrary': 'Bibliothek öffnen',
		'cmd.rebuildLinks': 'Graph-Verknüpfungen neu aufbauen',
		'view.title': 'Bibliothek',
		'modal.pickType': 'Kategorie wählen',
		'modal.search.placeholder': 'Nach Titel suchen…',
		'modal.searchLibrary': 'Bibliothek durchsuchen…',
		'modal.noCategories': 'Füge zuerst eine Kategorie in den Einstellungen hinzu',
		'modal.manualTitle': 'Neuer Eintrag',
		'modal.manualCreate': 'Erstellen',
		'notice.created': 'Erstellt: {name}',
		'notice.notFound': 'Nichts zum Aktualisieren gefunden',
		'notice.searching': 'Metadaten werden geladen…',
		'notice.linksRebuilt': 'Graph-Verknüpfungen neu aufgebaut: {count}',
		'sort.name': 'A-Z',
		'sort.year': 'Jahr',
		'sort.rating': 'Bewertung',
		'sort.date': 'Datum',
		'header.creator': 'Autor',
		'header.years': 'Jahre',
		'header.seasons': 'Staffeln',
		'header.genre': 'Genre',
		'header.myRating': 'Meine Bewertung',
		'header.progress': 'Fortschritt',
		'header.complete': 'Abgeschlossen',
		'settings.intro':
			'Konfiguriere Inhaltskategorien. Öffne den Bibliothek-Tab über das Seitenmenü, um Inhalte hinzuzufügen; Notizen werden anhand des Frontmatter-Felds Type gruppiert.',
		'settings.omdb.name': 'OMDb-API-Schlüssel (optional)',
		'settings.omdb.desc':
			'Wird zum automatischen Ausfüllen der IMDb-Bewertung und Metadaten von Filmen und Serien verwendet. Schlüssel: https://www.omdbapi.com/apikey.aspx',
		'settings.omdb.placeholder': 'z. B. a1b2c3d4',
		'settings.section.categories': 'Kategorien',
		'settings.categories.desc':
			'Jede Kategorie zeigt Notizen, deren Frontmatter-Feld Type dem Wert entspricht.',
		'settings.category.name': 'Kategorie {index}',
		'settings.category.desc': 'Anzeigename, zugehöriger Type-Wert und Quelle',
		'settings.category.name.placeholder': 'Name (z. B. Filme)',
		'settings.category.type.placeholder': 'Type (z. B. Movie)',
		'settings.category.folder': 'Ordner',
		'settings.category.folder.placeholder': 'z. B. Media/Filme',
		'settings.category.manual': 'Manuell · keine Quelle',
		'settings.addCategory': 'Kategorie hinzufügen',
		'settings.newCategory': 'Neue Kategorie',
		'settings.section.example': 'Beispielnotiz',
		'settings.example.desc':
			'Damit eine Notiz in eine Kategorie fällt, setze das Type-Feld im Frontmatter.'
	},
	es: {
		'cmd.addContent': 'Agregar contenido',
		'cmd.refresh': 'Actualizar metadatos de la nota actual',
		'cmd.searchLibrary': 'Buscar en tu biblioteca',
		'cmd.openLibrary': 'Abrir biblioteca',
		'cmd.rebuildLinks': 'Reconstruir enlaces del grafo',
		'view.title': 'Biblioteca',
		'modal.pickType': 'Elige una categoría',
		'modal.search.placeholder': 'Buscar por título…',
		'modal.searchLibrary': 'Buscar en tu biblioteca…',
		'modal.noCategories': 'Primero añade una categoría en los ajustes',
		'modal.manualTitle': 'Nueva entrada',
		'modal.manualCreate': 'Crear',
		'notice.created': 'Creado: {name}',
		'notice.notFound': 'No hay nada que actualizar',
		'notice.searching': 'Obteniendo metadatos…',
		'notice.linksRebuilt': 'Enlaces del grafo reconstruidos: {count}',
		'sort.name': 'A-Z',
		'sort.year': 'Año',
		'sort.rating': 'Puntuación',
		'sort.date': 'Fecha',
		'header.creator': 'Creador',
		'header.years': 'Años',
		'header.seasons': 'Temporadas',
		'header.genre': 'Género',
		'header.myRating': 'Mi nota',
		'header.progress': 'Progreso',
		'header.complete': 'Completado',
		'settings.intro':
			'Configura las categorías de contenido. Abre la pestaña Biblioteca desde la barra lateral para agregar contenido; las notas se agrupan por el campo Type del frontmatter.',
		'settings.omdb.name': 'Clave OMDb API (opcional)',
		'settings.omdb.desc':
			'Se usa para autocompletar la puntuación de IMDb y metadatos de películas y series. Obtén la clave en https://www.omdbapi.com/apikey.aspx',
		'settings.omdb.placeholder': 'Ej: a1b2c3d4',
		'settings.section.categories': 'Categorías',
		'settings.categories.desc':
			'Cada categoría muestra notas cuyo campo Type coincide con el valor indicado.',
		'settings.category.name': 'Categoría {index}',
		'settings.category.desc': 'Nombre visible, valor de Type y fuente',
		'settings.category.name.placeholder': 'Nombre (p. ej. Películas)',
		'settings.category.type.placeholder': 'Type (p. ej. Movie)',
		'settings.category.folder': 'Carpeta',
		'settings.category.folder.placeholder': 'p. ej. Media/Películas',
		'settings.category.manual': 'Manual · sin fuente',
		'settings.addCategory': 'Agregar categoría',
		'settings.newCategory': 'Nueva categoría',
		'settings.section.example': 'Nota de ejemplo',
		'settings.example.desc':
			'Para incluir una nota en una categoría, define el campo Type en el frontmatter.'
	},
	fr: {
		'cmd.addContent': 'Ajouter du contenu',
		'cmd.refresh': 'Actualiser les métadonnées de la note',
		'cmd.searchLibrary': 'Rechercher dans la bibliothèque',
		'cmd.openLibrary': 'Ouvrir la bibliothèque',
		'cmd.rebuildLinks': 'Reconstruire les liens du graphe',
		'view.title': 'Bibliothèque',
		'modal.pickType': 'Choisir une catégorie',
		'modal.search.placeholder': 'Rechercher par titre…',
		'modal.searchLibrary': 'Rechercher dans la bibliothèque…',
		'modal.noCategories': 'Ajoutez d’abord une catégorie dans les paramètres',
		'modal.manualTitle': 'Nouvelle entrée',
		'modal.manualCreate': 'Créer',
		'notice.created': 'Créé : {name}',
		'notice.notFound': 'Rien à mettre à jour',
		'notice.searching': 'Récupération des métadonnées…',
		'notice.linksRebuilt': 'Liens du graphe reconstruits : {count}',
		'sort.name': 'A-Z',
		'sort.year': 'Année',
		'sort.rating': 'Note',
		'sort.date': 'Date',
		'header.creator': 'Créateur',
		'header.years': 'Années',
		'header.seasons': 'Saisons',
		'header.genre': 'Genre',
		'header.myRating': 'Ma note',
		'header.progress': 'Progression',
		'header.complete': 'Terminé',
		'settings.intro':
			'Configurez les catégories de contenu. Ouvrez l’onglet Bibliothèque depuis la barre latérale pour ajouter du contenu ; les notes sont regroupées selon le champ Type du frontmatter.',
		'settings.omdb.name': 'Clé OMDb API (optionnelle)',
		'settings.omdb.desc':
			'Permet de remplir automatiquement la note IMDb et les métadonnées des films et séries. Obtenez la clé sur https://www.omdbapi.com/apikey.aspx',
		'settings.omdb.placeholder': 'Ex : a1b2c3d4',
		'settings.section.categories': 'Catégories',
		'settings.categories.desc':
			'Chaque catégorie affiche les notes dont le champ Type correspond à la valeur ci-dessous.',
		'settings.category.name': 'Catégorie {index}',
		'settings.category.desc': 'Nom d’affichage, valeur Type et source',
		'settings.category.name.placeholder': 'Nom (p. ex. Films)',
		'settings.category.type.placeholder': 'Type (p. ex. Movie)',
		'settings.category.folder': 'Dossier',
		'settings.category.folder.placeholder': 'p. ex. Media/Films',
		'settings.category.manual': 'Manuel · sans source',
		'settings.addCategory': 'Ajouter une catégorie',
		'settings.newCategory': 'Nouvelle catégorie',
		'settings.section.example': 'Note d’exemple',
		'settings.example.desc':
			'Pour inclure une note dans une catégorie, renseignez le champ Type dans le frontmatter.'
	}
}

export interface ICategory {
	name: string
	typeValue: string
	contentType: ContentType
	folder: string
}

export interface ILibrarySettings {
	categories: ICategory[]
	omdbApiKey: string
}

export const DEFAULT_SETTINGS: ILibrarySettings = {
	categories: [],
	omdbApiKey: ''
}
