// Contrato editorial de videos para Espacio Elementos.
// Los items con isPending: true esperan selección de Álvaro.
// No usar videos de Latin Rengo, salsa ni bachata en este archivo.

export type VideoCategory =
	| 'obra'
	| 'shows'
	| 'circo-contemporaneo'
	| 'galas'
	| 'comunidad'
	| 'talleres'
	| 'procesos';

export type VideoItem = {
	id: string;
	title: string;
	description: string;
	category: VideoCategory;
	videoUrl: string;
	thumbnail: string;
	pagePlacement?: ('home' | 'servicios' | 'talleres' | 'proyectos' | 'videos')[];
	featured?: boolean;
	commercialPriority?: 'alta' | 'media' | 'baja';
	emotionalPriority?: 'alta' | 'media' | 'baja';
	date?: string;
	duration?: string;
	ctaLabel?: string;
	relatedServiceSlug?: string;
	// isPending: true = URL aún no seleccionada por Álvaro. No embeder, mostrar placeholder.
	isPending?: boolean;
};

// ─── PLAYLISTS ────────────────────────────────────────────────────────────────
// Referencia editorial. No son embeds: son recursos para que Álvaro elija videos
// específicos y los cargue en el array `videos` de abajo.

export type PlaylistItem = {
	id: string;
	title: string;
	url: string;
	category: VideoCategory;
	publicUse: boolean;
};

export const youtubePlaylists: PlaylistItem[] = [
	{
		id: 'la-tarea-mas-dificil-funciones',
		title: 'Funciones de La Tarea Más Difícil',
		url: 'https://www.youtube.com/playlist?list=PLVTTci2R6PF85xC7F2sOsjTFx-TYxsEXl',
		category: 'obra',
		publicUse: true,
	},
	{
		id: 'la-tarea-mas-dificil-creacion',
		title: 'Proceso de creación de La Tarea Más Difícil',
		url: 'https://www.youtube.com/playlist?list=PLVTTci2R6PF8VDKmza3B1StDw5RT4lNtw',
		category: 'procesos',
		publicUse: true,
	},
	{
		id: 'oe-despierta',
		title: 'Funciones obra Oe Despierta',
		url: 'https://www.youtube.com/playlist?list=PLVTTci2R6PF_G4KPL3R9WmXEGWW3SNTDU',
		category: 'obra',
		publicUse: true,
	},
	{
		id: 'gala-elementos',
		title: 'Gala Elementos',
		url: 'https://www.youtube.com/playlist?list=PLVTTci2R6PF9ZRNtmQPpm6WNYNkytCAGS',
		category: 'galas',
		publicUse: true,
	},
	{
		id: 'varietes-circo',
		title: 'Varietés de circo',
		url: 'https://www.youtube.com/playlist?list=PLVTTci2R6PF9LyFucqbeC7l2KhH3_Vq6-',
		category: 'shows',
		publicUse: true,
	},
];

// ─── VIDEOS ESPECÍFICOS ───────────────────────────────────────────────────────
// Álvaro elige una URL de YouTube por placeholder y reemplaza:
//   videoUrl: '' → URL del video elegido
//   thumbnail: '' → thumbnail del video (o dejar vacío para usar embed automático)
//   isPending: true → false (o eliminar el campo)

export const videos: VideoItem[] = [
	// ── PENDIENTE 1: Video destacado para inicio ─────────────────────────────
	{
		id: 'featured-home',
		title: 'Video destacado — inicio',
		description:
			'Video pendiente de selección por Álvaro. Opciones recomendadas: Gala Elementos 2025, varieté de circo o registro comunitario de alto impacto visual. Elegir desde playlists "Gala Elementos" o "Varietés de circo".',
		category: 'galas',
		videoUrl: '',
		thumbnail: '',
		// TODO(Álvaro): reemplazar videoUrl con URL de YouTube y thumbnail con imagen del video
		isPending: true,
		pagePlacement: ['home', 'videos'],
		featured: true,
		commercialPriority: 'alta',
		emotionalPriority: 'alta',
	},

	// ── PENDIENTE 2: La Tarea Más Difícil ────────────────────────────────────
	{
		id: 'la-tarea-mas-dificil-funcion',
		title: 'La Tarea Más Difícil — función',
		description:
			'Video pendiente de selección por Álvaro. Elegir desde playlist "Funciones de La Tarea Más Difícil". Preferir registro de función completa o extracto de escena principal con buena calidad de audio/imagen.',
		category: 'obra',
		videoUrl: '',
		thumbnail: '',
		// TODO(Álvaro): elegir desde https://www.youtube.com/playlist?list=PLVTTci2R6PF85xC7F2sOsjTFx-TYxsEXl
		isPending: true,
		pagePlacement: ['servicios', 'videos'],
		featured: true,
		commercialPriority: 'alta',
		emotionalPriority: 'alta',
		ctaLabel: 'Solicitar ficha técnica',
		relatedServiceSlug: 'la-tarea-mas-dificil',
	},

	// ── PENDIENTE 3: Show / varieté de circo ─────────────────────────────────
	{
		id: 'show-variete-circo',
		title: 'Show y varieté de circo',
		description:
			'Video pendiente de selección por Álvaro. Elegir desde playlist "Varietés de circo". Preferir registro con malabares, tela aérea, acrobacia grupal o zancos en escena. Que muestre variedad de la oferta artística.',
		category: 'shows',
		videoUrl: '',
		thumbnail: '',
		// TODO(Álvaro): elegir desde https://www.youtube.com/playlist?list=PLVTTci2R6PF9LyFucqbeC7l2KhH3_Vq6-
		isPending: true,
		pagePlacement: ['servicios', 'videos'],
		featured: false,
		commercialPriority: 'alta',
		emotionalPriority: 'media',
		ctaLabel: 'Cotizar show',
		relatedServiceSlug: 'compania-elementos',
	},

	// ── PENDIENTE 4: Gala Elementos ───────────────────────────────────────────
	{
		id: 'gala-elementos',
		title: 'Gala Elementos',
		description:
			'Video pendiente de selección por Álvaro. Elegir desde playlist "Gala Elementos". Preferir registro completo o extracto con mayor participación y energía colectiva visible.',
		category: 'galas',
		videoUrl: '',
		thumbnail: '',
		// TODO(Álvaro): elegir desde https://www.youtube.com/playlist?list=PLVTTci2R6PF9ZRNtmQPpm6WNYNkytCAGS
		isPending: true,
		pagePlacement: ['videos'],
		featured: false,
		commercialPriority: 'media',
		emotionalPriority: 'alta',
	},

	// ── PENDIENTE 5: Circo contemporáneo / dúo ───────────────────────────────
	{
		id: 'circo-contemporaneo-duo',
		title: 'Circo contemporáneo — dúo o pieza de escena',
		description:
			'Video pendiente de selección por Álvaro. Elegir registro de pieza de circo contemporáneo: dúo, número solista o secuencia de escena con componente expresivo. Puede ser de obra o gala. Preferir toma limpia con buena luz.',
		category: 'circo-contemporaneo',
		videoUrl: '',
		thumbnail: '',
		// TODO(Álvaro): puede elegir desde "Funciones La Tarea" o "Varietés" según lo que mejor represente este registro
		isPending: true,
		pagePlacement: ['videos'],
		featured: false,
		commercialPriority: 'media',
		emotionalPriority: 'alta',
	},

	// ── PENDIENTE 6: Talleres en acción ──────────────────────────────────────
	{
		id: 'talleres-en-accion',
		title: 'Talleres en acción',
		description:
			'Video pendiente de selección por Álvaro. Preferir registro de clase de lyra o entrenamiento funcional en Espacio Elementos. Que muestre el espacio, el instructor y participantes trabajando. Si no hay video editado, puede ser un registro corto de Instagram.',
		category: 'talleres',
		videoUrl: '',
		thumbnail: '',
		// TODO(Álvaro): elegir video o reel propio de clase. Si no hay en YouTube, usar URL de Instagram Reel.
		isPending: true,
		pagePlacement: ['talleres', 'videos'],
		featured: false,
		commercialPriority: 'media',
		emotionalPriority: 'alta',
	},

	// ── PENDIENTE 7: Comunidad y territorio ───────────────────────────────────
	{
		id: 'comunidad-territorio',
		title: 'Comunidad y territorio',
		description:
			'Video pendiente de selección por Álvaro. Elegir registro de activación comunitaria, jornada en sector, colaboración con JJVV o acción territorial. No usar material de Latin Rengo ni baile social.',
		category: 'comunidad',
		videoUrl: '',
		thumbnail: '',
		// TODO(Álvaro): elegir desde archivo propio. Si no hay en YouTube, usar URL pública de Facebook o Instagram.
		isPending: true,
		pagePlacement: ['proyectos', 'videos'],
		featured: false,
		commercialPriority: 'baja',
		emotionalPriority: 'alta',
	},
];

// ─── HELPERS DE FILTRADO ──────────────────────────────────────────────────────

export const featuredVideos = videos.filter((v) => v.featured && !v.isPending);
export const pendingVideos = videos.filter((v) => v.isPending);
export const readyVideos = videos.filter((v) => !v.isPending);

export const videosByCategory = (category: VideoCategory) =>
	videos.filter((v) => v.category === category);

export const videosByPage = (page: NonNullable<VideoItem['pagePlacement']>[number]) =>
	videos.filter((v) => v.pagePlacement?.includes(page));
