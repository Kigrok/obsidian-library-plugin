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
	de: {
		'cmd.fetchImdb': 'IMDb-Bewertung f\u00fcr aktuelle Notiz abrufen',
		'library.emptyList': '_Liste ist noch leer_',
		'notice.type': 'Typ: {value}',
		'notice.poster': 'Poster',
		'notice.creator': 'Autor',
		'notice.year': 'Jahr: {value}',
		'notice.genres': 'Genres',
		'notice.seasons': 'Staffeln: {value}',
		'notice.episodes': 'Episoden: {value}',
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
		'settings.title': 'Library: Einstellungen',
		'settings.intro':
			'Gib Pfad zur Bibliotheksnotiz und Kategorien an. Das Plugin sammelt Links aus Notizen nach dem Frontmatter-Feld Type.',
		'settings.section.general': '1. Allgemeine Einstellungen',
		'settings.libraryFile.name': 'Bibliotheksdatei',
		'settings.libraryFile.desc':
			'Pfad zur Notiz, in die das Plugin die Liste schreibt. Beispiel: Library.md oder Media/Library.md',
		'settings.libraryFile.placeholder': 'Library.md',
		'settings.omdb.name': 'OMDb-API-Schl\u00fcssel (optional)',
		'settings.omdb.desc':
			'Wird zum automatischen Ausf\u00fcllen der IMDb-Bewertung und Metadaten verwendet. Schl\u00fcssel: https://www.omdbapi.com/apikey.aspx',
		'settings.omdb.placeholder': 'z. B. a1b2c3d4',
		'settings.section.categories': '2. Kategorien',
		'settings.categories.desc':
			'Jede Kategorie zeigt Notizen, deren Frontmatter-Feld Type dem Wert entspricht. Der Kategoriename wird als \u00dcberschrift in Library.md angezeigt.',
		'settings.category.name': 'Kategorie {index}',
		'settings.category.desc': 'Anzeige-Name und zugeh\u00f6riger Type-Wert',
		'settings.category.name.placeholder': 'Name (z. B. Filme)',
		'settings.category.type.placeholder': 'Type (z. B. Movie)',
		'settings.addCategory': 'Kategorie hinzuf\u00fcgen',
		'settings.newCategory': 'Neue Kategorie',
		'settings.section.example': 'Beispielnotiz',
		'settings.example.desc':
			'Damit eine Notiz in eine Kategorie f\u00e4llt, setze das Type-Feld im Frontmatter.'
	},
	en: {
		'cmd.fetchImdb': 'Fetch IMDb rating for current note',
		'library.emptyList': '_List is empty for now_',
		'notice.type': 'Type: {value}',
		'notice.poster': 'Poster',
		'notice.creator': 'Creator',
		'notice.year': 'Year: {value}',
		'notice.genres': 'Genres',
		'notice.seasons': 'Seasons: {value}',
		'notice.episodes': 'Episodes: {value}',
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
		'settings.title': 'Library: Settings',
		'settings.intro':
			'Set the library note path and categories. The plugin will collect links from notes by the Type frontmatter field.',
		'settings.section.general': '1. General',
		'settings.libraryFile.name': 'Library file',
		'settings.libraryFile.desc':
			'Path to the note where the plugin writes the list. Example: Library.md or Media/Library.md',
		'settings.libraryFile.placeholder': 'Library.md',
		'settings.omdb.name': 'OMDb API key (optional)',
		'settings.omdb.desc':
			'Used to auto-fill IMDb rating and metadata. Get a key at: https://www.omdbapi.com/apikey.aspx',
		'settings.omdb.placeholder': 'Example: a1b2c3d4',
		'settings.section.categories': '2. Categories',
		'settings.categories.desc':
			'Each category includes notes where frontmatter Type equals the value below. Category name becomes a heading in Library.md.',
		'settings.category.name': 'Category {index}',
		'settings.category.desc': 'Display name and matching Type value',
		'settings.category.name.placeholder': 'Name (e.g. Movies)',
		'settings.category.type.placeholder': 'Type (e.g. Movie)',
		'settings.addCategory': 'Add category',
		'settings.newCategory': 'New category',
		'settings.section.example': 'Example note',
		'settings.example.desc':
			'To include a note in a category, set the Type field in frontmatter.'
	},
	ru: {
		'cmd.fetchImdb': '\u041f\u043e\u0434\u0442\u044f\u043d\u0443\u0442\u044c IMDb \u0440\u0435\u0439\u0442\u0438\u043d\u0433 \u0434\u043b\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0437\u0430\u043c\u0435\u0442\u043a\u0438',
		'library.emptyList': '_\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043a\u0430 \u043f\u0443\u0441\u0442_',
		'notice.type': '\u0422\u0438\u043f: {value}',
		'notice.poster': '\u041f\u043e\u0441\u0442\u0435\u0440',
		'notice.creator': '\u0410\u0432\u0442\u043e\u0440',
		'notice.year': '\u0413\u043e\u0434: {value}',
		'notice.genres': '\u0416\u0430\u043d\u0440\u044b',
		'notice.seasons': '\u0421\u0435\u0437\u043e\u043d\u043e\u0432: {value}',
		'notice.episodes': '\u0421\u0435\u0440\u0438\u0439: {value}',
		'sort.name': '\u0410-\u042f',
		'sort.year': '\u0413\u043e\u0434',
		'sort.rating': '\u0420\u0435\u0439\u0442\u0438\u043d\u0433',
		'sort.date': '\u0414\u0430\u0442\u0430',
		'header.creator': '\u0410\u0432\u0442\u043e\u0440',
		'header.years': '\u0413\u043e\u0434\u044b',
		'header.seasons': '\u0421\u0435\u0437\u043e\u043d\u044b',
		'header.genre': '\u0416\u0430\u043d\u0440',
		'header.myRating': '\u041c\u043e\u044f \u043e\u0446\u0435\u043d\u043a\u0430',
		'header.progress': '\u041f\u0440\u043e\u0433\u0440\u0435\u0441\u0441',
		'header.complete': '\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043e',
		'settings.title': 'Library: \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438',
		'settings.intro':
			'\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438. \u041f\u043b\u0430\u0433\u0438\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u043e\u0431\u0435\u0440\u0435\u0442 \u0441\u0441\u044b\u043b\u043a\u0438 \u0438\u0437 \u0437\u0430\u043c\u0435\u0442\u043e\u043a \u043f\u043e \u043f\u043e\u043b\u044e Type \u0432\u043e \u0444\u0440\u043e\u043d\u0442\u043c\u0430\u0442\u0442\u0435\u0440\u0435.',
		'settings.section.general': '1. \u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438',
		'settings.libraryFile.name': '\u0424\u0430\u0439\u043b \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438',
		'settings.libraryFile.desc':
			'\u041f\u0443\u0442\u044c \u043a \u0437\u0430\u043c\u0435\u0442\u043a\u0435, \u043a\u0443\u0434\u0430 \u043f\u043b\u0430\u0433\u0438\u043d \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0431\u0438\u0440\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a. \u041f\u0440\u0438\u043c\u0435\u0440: Library.md \u0438\u043b\u0438 Media/Library.md',
		'settings.libraryFile.placeholder': 'Library.md',
		'settings.omdb.name': 'OMDb API \u043a\u043b\u044e\u0447 (\u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)',
		'settings.omdb.desc':
			'\u041d\u0443\u0436\u0435\u043d \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f IMDb \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0430 \u0438 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445. \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u043b\u044e\u0447: https://www.omdbapi.com/apikey.aspx',
		'settings.omdb.placeholder': '\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: a1b2c3d4',
		'settings.section.categories': '2. \u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438',
		'settings.categories.desc':
			'\u041a\u0430\u0436\u0434\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0437\u0430\u043c\u0435\u0442\u043a\u0438, \u0433\u0434\u0435 \u043f\u043e\u043b\u0435 Type \u0440\u0430\u0432\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e. \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0432 Library.md.',
		'settings.category.name': '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f {index}',
		'settings.category.desc': '\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0444\u0440\u043e\u043d\u0442\u043c\u0430\u0442\u0442\u0435\u0440\u0443 Type',
		'settings.category.name.placeholder': '\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: \u0424\u0438\u043b\u044c\u043c\u044b)',
		'settings.category.type.placeholder': 'Type (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: Movie)',
		'settings.addCategory': '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e',
		'settings.newCategory': '\u041d\u043e\u0432\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f',
		'settings.section.example': '\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043c\u0435\u0442\u043a\u0438',
		'settings.example.desc':
			'\u0427\u0442\u043e\u0431\u044b \u0437\u0430\u043c\u0435\u0442\u043a\u0430 \u043f\u043e\u043f\u0430\u043b\u0430 \u0432 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e, \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 Type \u0432\u043e \u0444\u0440\u043e\u043d\u0442\u043c\u0430\u0442\u0442\u0435\u0440\u0435.'
	},
	es: {
		'cmd.fetchImdb': 'Obtener puntuaci\u00f3n IMDb de la nota actual',
		'library.emptyList': '_Lista vac\u00eda por ahora_',
		'notice.type': 'Tipo: {value}',
		'notice.poster': 'Cartel',
		'notice.creator': 'Creador',
		'notice.year': 'A\u00f1o: {value}',
		'notice.genres': 'G\u00e9neros',
		'notice.seasons': 'Temporadas: {value}',
		'notice.episodes': 'Episodios: {value}',
		'sort.name': 'A-Z',
		'sort.year': 'A\u00f1o',
		'sort.rating': 'Puntuaci\u00f3n',
		'sort.date': 'Fecha',
		'header.creator': 'Creador',
		'header.years': 'A\u00f1os',
		'header.seasons': 'Temporadas',
		'header.genre': 'G\u00e9nero',
		'header.myRating': 'Mi nota',
		'header.progress': 'Progreso',
		'header.complete': 'Completado',
		'settings.title': 'Library: ajustes',
		'settings.intro':
			'Define la nota de biblioteca y las categor\u00edas. El plugin recopila enlaces de notas seg\u00fan el campo Type del frontmatter.',
		'settings.section.general': '1. Ajustes generales',
		'settings.libraryFile.name': 'Archivo de biblioteca',
		'settings.libraryFile.desc':
			'Ruta de la nota donde se escribe la lista. Ejemplo: Library.md o Media/Library.md',
		'settings.libraryFile.placeholder': 'Library.md',
		'settings.omdb.name': 'Clave OMDb API (opcional)',
		'settings.omdb.desc':
			'Se usa para autocompletar la puntuaci\u00f3n de IMDb y metadatos. Obt\u00e9n la clave en https://www.omdbapi.com/apikey.aspx',
		'settings.omdb.placeholder': 'Ej: a1b2c3d4',
		'settings.section.categories': '2. Categor\u00edas',
		'settings.categories.desc':
			'Cada categor\u00eda muestra notas cuyo campo Type coincide con el valor indicado. El nombre sirve como encabezado en Library.md.',
		'settings.category.name': 'Categor\u00eda {index}',
		'settings.category.desc': 'Nombre visible y valor equivalente de Type',
		'settings.category.name.placeholder': 'Nombre (p.ej. Pel\u00edculas)',
		'settings.category.type.placeholder': 'Type (p.ej. Movie)',
		'settings.addCategory': 'Agregar categor\u00eda',
		'settings.newCategory': 'Nueva categor\u00eda',
		'settings.section.example': 'Nota de ejemplo',
		'settings.example.desc':
			'Para incluir una nota en una categor\u00eda, define el campo Type en el frontmatter.'
	},
	fr: {
		'cmd.fetchImdb': 'R\u00e9cup\u00e9rer la note IMDb pour la note courante',
		'library.emptyList': '_Liste vide pour le moment_',
		'notice.type': 'Type : {value}',
		'notice.poster': 'Affiche',
		'notice.creator': 'Cr\u00e9ateur',
		'notice.year': 'Ann\u00e9e : {value}',
		'notice.genres': 'Genres',
		'notice.seasons': 'Saisons : {value}',
		'notice.episodes': '\u00c9pisodes : {value}',
		'sort.name': 'A-Z',
		'sort.year': 'Ann\u00e9e',
		'sort.rating': 'Note',
		'sort.date': 'Date',
		'header.creator': 'Cr\u00e9ateur',
		'header.years': 'Ann\u00e9es',
		'header.seasons': 'Saisons',
		'header.genre': 'Genre',
		'header.myRating': 'Ma note',
		'header.progress': 'Progression',
		'header.complete': 'Termin\u00e9',
		'settings.title': 'Library : param\u00e8tres',
		'settings.intro':
			'Indiquez la note de biblioth\u00e8que et les cat\u00e9gories. Le plugin collecte les liens dans les notes via le champ Type du frontmatter.',
		'settings.section.general': '1. Param\u00e8tres g\u00e9n\u00e9raux',
		'settings.libraryFile.name': 'Fichier de biblioth\u00e8que',
		'settings.libraryFile.desc':
			'Chemin vers la note o\u00f9 le plugin \u00e9crit la liste. Exemple : Library.md ou Media/Library.md',
		'settings.libraryFile.placeholder': 'Library.md',
		'settings.omdb.name': 'Cl\u00e9 OMDb API (optionnelle)',
		'settings.omdb.desc':
			'Permet d\u2019auto-remplir la note IMDb et les m\u00e9tadonn\u00e9es. Obtenez la cl\u00e9 sur https://www.omdbapi.com/apikey.aspx',
		'settings.omdb.placeholder': 'Ex : a1b2c3d4',
		'settings.section.categories': '2. Cat\u00e9gories',
		'settings.categories.desc':
			'Chaque cat\u00e9gorie affiche les notes dont Type correspond \u00e0 la valeur ci-dessous. Le nom de la cat\u00e9gorie devient le titre dans Library.md.',
		'settings.category.name': 'Cat\u00e9gorie {index}',
		'settings.category.desc': 'Nom d\u2019affichage et valeur Type associ\u00e9e',
		'settings.category.name.placeholder': 'Nom (p. ex. Films)',
		'settings.category.type.placeholder': 'Type (p. ex. Movie)',
		'settings.addCategory': 'Ajouter une cat\u00e9gorie',
		'settings.newCategory': 'Nouvelle cat\u00e9gorie',
		'settings.section.example': 'Note d\u2019exemple',
		'settings.example.desc':
			'Pour inclure une note dans une cat\u00e9gorie, renseignez le champ Type dans le frontmatter.'
	}
}

export interface ICategory {
	name: string
	typeValue: string
}

export interface ILibrarySettings {
	libraryFilePath: string
	categories: ICategory[]
	omdbApiKey: string
}

export const DEFAULT_SETTINGS: ILibrarySettings = {
	libraryFilePath: 'Library.md',
	categories: [],
	omdbApiKey: ''
}
