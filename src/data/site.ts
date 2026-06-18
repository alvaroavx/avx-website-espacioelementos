export const OFFICIAL_WHATSAPP_NUMBER = '56956490299';
export const OFFICIAL_WHATSAPP_LABEL = '+56 9 5649 0299';

export const buildWhatsAppHref = (message: string) =>
	`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_MESSAGE_PRESETS = {
	liraCupos: 'Hola Espacio Elementos, quiero consultar cupos para Lira.',
	funcionalCupos: 'Hola Espacio Elementos, quiero consultar cupos para Entrenamiento funcional.',
	cotizarShow: 'Hola Espacio Elementos, quiero cotizar un show o presentacion.',
	cotizarLaTareaMasDificil: 'Hola Espacio Elementos, quiero cotizar La Tarea Mas Dificil.',
	entrenamientoPersonalizado:
		'Hola Espacio Elementos, quiero consultar por entrenamiento personalizado.',
	coreografiaMatrimonio:
		'Hola Espacio Elementos, quiero consultar por una coreografia para matrimonio.',
} as const;

export const buildWhatsAppPresetHref = (preset: keyof typeof WHATSAPP_MESSAGE_PRESETS) =>
	buildWhatsAppHref(WHATSAPP_MESSAGE_PRESETS[preset]);

export const buildMailHref = (subject: string, body?: string) => {
	const params = new URLSearchParams({ subject });

	if (body) {
		params.set('body', body);
	}

	return `mailto:espacio.elementos@gmail.com?${params.toString()}`;
};

export const NAV_ITEMS = [
	{ label: 'Inicio', href: '/' },
	{ label: 'Servicios', href: '/servicios' },
	{ label: 'Talleres', href: '/talleres' },
	{ label: 'Proyectos', href: '/proyectos' },
	{ label: 'Videos', href: '/videos' },
	{ label: 'Nosotros', href: '/nosotros' },
	{ label: 'Contacto', href: '/contacto' },
];

export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@EspacioElementos';
export const INSTAGRAM_URL = 'https://www.instagram.com/espacio.elementos';

export const SITE_CONTACT = {
	email: 'espacio.elementos@gmail.com',
	emailHref: buildMailHref('Contacto desde espacioelementos.cl'),
	whatsappLabel: OFFICIAL_WHATSAPP_LABEL,
	whatsappHref: buildWhatsAppHref(
		'Hola Espacio Elementos, quiero cotizar una experiencia o servicio.'
	),
	location: "Rengo, Region de O'Higgins, Chile",
};

export const INQUIRY_PATHS = [
	{
		title: 'Empresas y equipos',
		summary:
			'Jornadas de bienestar, activaciones, experiencias corporales y propuestas para equipos de trabajo.',
		href: buildWhatsAppHref(
			'Hola Espacio Elementos, quiero cotizar una propuesta para una empresa o equipo.'
		),
		label: 'Cotizar por WhatsApp',
		target: '_blank',
	},
	{
		title: 'Colegios y cursos',
		summary:
			'Talleres, experiencias y acciones formativas para estudiantes, docentes y comunidades educativas.',
		href: buildMailHref(
			'Consulta colegios y cursos',
			'Hola Espacio Elementos,\r\n\r\nQuiero consultar por una propuesta para un colegio o curso.\r\n\r\nContexto:\r\nFecha tentativa:\r\nCantidad de participantes:\r\n'
		),
		label: 'Escribir por correo',
	},
	{
		title: 'Municipios y organizaciones',
		summary:
			'Activaciones comunitarias, trabajo territorial, jornadas abiertas y experiencias para organizaciones.',
		href: buildMailHref(
			'Consulta municipios y organizaciones',
			'Hola Espacio Elementos,\r\n\r\nQuiero conversar sobre una propuesta para municipio u organizacion.\r\n\r\nObjetivo:\r\nFecha tentativa:\r\nLugar:\r\n'
		),
		label: 'Abrir correo',
	},
	{
		title: 'Eventos privados',
		summary:
			'Shows, intervenciones, talleres y experiencias para celebraciones, fiestas y encuentros especiales.',
		href: buildWhatsAppHref(
			'Hola Espacio Elementos, quiero cotizar una propuesta para un evento privado.'
		),
		label: 'Hablar por WhatsApp',
		target: '_blank',
	},
];

export const CONTACT_BRIEF_ITEMS = [
	'Fecha tentativa o rango de fechas',
	'Lugar o comuna donde se realizara la actividad',
	'Tipo de publico o cantidad de participantes',
	'Servicio que te interesa o idea inicial',
	'Objetivo de la experiencia',
];

export const SOCIAL_LINKS = [
	{
		label: 'Instagram',
		href: 'https://www.instagram.com/espacio.elementos',
		icon: '/images/rrss/instagram.png',
	},
	{
		label: 'Facebook',
		href: 'https://www.facebook.com/espacio.elementos.rengo',
		icon: '/images/rrss/facebook.png',
	},
	{
		label: 'YouTube',
		href: 'https://www.youtube.com/@EspacioElementos',
		icon: '/images/rrss/youtube.png',
	},
];

export const AUDIENCE_SEGMENTS = [
	'Empresas',
	'Colegios',
	'Municipios',
	'Organizaciones',
	'Eventos privados',
];

export const ECOSYSTEM_PILLARS = [
	{
		title: 'Servicios para organizaciones y eventos',
		description:
			'Experiencias de movimiento, presentaciones y activaciones pensadas para contextos institucionales, comunitarios y privados.',
	},
	{
		title: 'Talleres regulares y procesos formativos',
		description:
			'Practicas estables para personas que quieren entrenar, explorar disciplinas escenicas y sostener un proceso corporal en el tiempo.',
	},
	{
		title: 'Comunidad y trabajo territorial',
		description:
			'Acciones que conectan arte, bienestar y participacion con barrios, equipos, agrupaciones y espacios colectivos.',
	},
];

export const TRUST_POINTS = [
	'Base territorial en Rengo',
	'Cruce real entre arte, movimiento y bienestar',
	'Propuestas para instituciones, equipos y eventos privados',
	'Trabajo con comunidad, colaboraciones y talleres activos',
];

export const COMMUNITY_PARTNERS = [
	{
		name: 'El Naranjal Norte',
		logo: '/images/colaboradores/jjvvnaranjalnorte.png',
		href: 'https://www.instagram.com/naranjal_norte/?utm_source=espacioelementos&utm_medium=referral',
	},
	{
		name: 'Circo Quetralmahue',
		logo: '/images/colaboradores/quetralmahue.png',
		href: 'https://www.circoquetralmahue.cl/?utm_source=espacioelementos&utm_medium=referral',
	},
	{
		name: 'Casa 7 Colores',
		logo: '/images/colaboradores/casa7colores.png',
		href: 'https://www.instagram.com/casa7colores/?utm_source=espacioelementos&utm_medium=referral',
	},
	{
		name: 'Afro Renku',
		logo: '/images/colaboradores/afrorenku.png',
		href: 'https://www.instagram.com/afro_renku/?utm_source=espacioelementos&utm_medium=referral',
	},
	{
		name: 'Latin Rengo',
		logo: '/images/colaboradores/latinrengo.png',
		href: 'https://www.instagram.com/latin.rengo/?utm_source=espacioelementos&utm_medium=referral',
	},
];
