import { buildMailHref, buildWhatsAppHref } from './site';

export interface ServiceItem {
	slug: string;
	title: string;
	// href: URL de página de detalle. Si no tiene página propia, apunta a /contacto.
	href: string;
	summary: string;
	description: string;
	image: string;
	imageAlt: string;
	audiences: string[];
	formats: string[];
	highlights: string[];
	contactHref: string;
	contactLabel: string;
	dossierHref?: string;
	// hasPage: false = todavia no tiene página de detalle propia
	hasPage: boolean;
}

export const services: ServiceItem[] = [
	{
		slug: 'la-tarea-mas-dificil',
		title: 'La tarea mas dificil',
		href: '/contacto',
		hasPage: false,
		// TODO(Gepeto): crear /servicios/la-tarea-mas-dificil cuando Álvaro confirme disponibilidad de gira
		summary:
			'Obra de circo contemporaneo de la Compania Elementos. 35 minutos. Pensada para publico adolescente y juvenil. Aborda la neurodiversidad, la colaboracion y la diversidad desde el cuerpo y el movimiento.',
		description:
			'La tarea mas dificil es una obra de circo contemporaneo de la Compania Elementos. Duracion de 35 minutos, orientada a publico adolescente y juvenil. Trabaja los temas de neurodiversidad, colaboracion, diversidad y trabajo en grupo a traves del circo, la acrobacia y la presencia escenica. Disponible para funciones en teatros, colegios, municipios y espacios culturales con dossier y ficha tecnica.',
		// TODO: imagen propia de la obra (foto de funcion, afiche o registro de escena)
		image: '/images/servicios/presentaciones.jpg',
		imageAlt: 'La tarea mas dificil — obra de circo contemporaneo de Compania Elementos',
		audiences: ['Colegios', 'Teatros y salas culturales', 'Municipios', 'Festivales y programadores culturales'],
		formats: ['Funcion completa (35 min)', 'Itinerancia en colegios y localidades', 'Temporada o funcion unica'],
		highlights: [
			'Duracion: 35 minutos',
			'Publica adolescente y juvenil',
			'Temas: neurodiversidad, colaboracion y diversidad',
		],
		contactHref: buildMailHref(
			'Solicitud de ficha tecnica — La tarea mas dificil',
			'Hola Espacio Elementos,\r\n\r\nQuiero solicitar la ficha tecnica de la obra "La tarea mas dificil" para evaluar una funcion.\r\n\r\nEspacio o contexto:\r\nFecha tentativa:\r\nCiudad:\r\n'
		),
		contactLabel: 'Solicitar ficha tecnica',
		dossierHref: '/dossiers/la-tarea-mas-dificil.pdf',
	},
	{
		slug: 'compania-elementos',
		title: 'Compania Elementos — Shows y espectaculos',
		href: '/servicios/presentaciones',
		hasPage: true,
		summary:
			'Shows en vivo para colegios, municipios, eventos y localidades: circo, malabares, tela aerea, zancos, clown, acrobacia, salsa y bachata. El brazo escenico de Espacio Elementos.',
		description:
			'La Compania Elementos ofrece shows y espectaculos en vivo para distintos contextos: colegios, localidades rurales, eventos municipales, teatros y fiestas privadas. El repertorio incluye circo, malabares, tela aerea, parada de manos, zancos, animacion y clown, acroduo, show deportivo, acrobacia grupal, variete de circo y presentaciones de salsa y bachata. Tiene identidad propia y dossier comercial disponible.',
		image: '/images/servicios/presentaciones.jpg',
		imageAlt: 'Show de la Compania Elementos — circo, malabares y acrobacia en vivo',
		audiences: ['Colegios', 'Municipios', 'Organizaciones', 'Localidades rurales', 'Teatros', 'Eventos privados'],
		formats: [
			'Malabares',
			'Tela aerea',
			'Parada de manos',
			'Zancos',
			'Animacion y clown',
			'Acroduo',
			'Show deportivo',
			'Acrobacia grupal',
			'Variete de circo',
			'Presentaciones de salsa y bachata',
		],
		highlights: [
			'Proyecto escenico propio con identidad y trayectoria',
			'Repertorio amplio: circo, acrobacia, clown y danza',
			'Experiencia en colegios, localidades rurales y teatro',
		],
		contactHref: buildWhatsAppHref(
			'Hola Espacio Elementos, quiero cotizar un show de la Compania Elementos.'
		),
		contactLabel: 'Cotizar show',
		dossierHref: '/dossiers/presentaciones.pdf',
	},
	{
		slug: 'entrenamiento-personalizado',
		title: 'Entrenamiento personalizado a domicilio',
		href:'/contacto',
		hasPage: false,
		// TODO(Gepeto): evaluar si merece página propia o se integra en /servicios/talleres-y-experiencias
		summary:
			'Sesiones de entrenamiento funcional y movimiento disenadas para tu nivel y objetivo, en tu espacio.',
		description:
			'El instructor va a tu domicilio. Trabajo de fuerza funcional, movilidad y acondicionamiento fisico adaptado a nivel inicial o intermedio. Sin equipamiento especial requerido.',
		// TODO: imagen propia — idealmente sesion a domicilio o exterior
		image: '/images/talleres/entrenamiento-funcional.jpg',
		imageAlt: 'Entrenamiento personalizado a domicilio con Espacio Elementos',
		audiences: ['Personas individuales', 'Adultos', 'Adultos mayores activos'],
		formats: ['Sesiones individuales', 'Plan semanal a coordinar', 'A domicilio en Rengo y sectores cercanos'],
		highlights: [
			'Instructor certificado va a tu ubicacion',
			'Adaptado a tu nivel: desde basico hasta intermedio',
			'Sin necesidad de equipamiento previo',
		],
		contactHref: buildWhatsAppHref(
			'Hola Espacio Elementos, quiero consultar sobre entrenamiento personalizado a domicilio.'
		),
		contactLabel: 'Consultar disponibilidad',
	},
	{
		slug: 'coreografias-matrimonios',
		title: 'Coreografias para matrimonios',
		href:'/contacto',
		hasPage: false,
		// TODO(Gepeto): evaluar si tiene suficiente volumen para página propia
		summary:
			'Disenamos y ensayamos una coreografia para el dia de tu matrimonio. El instructor acompana el proceso desde el aprendizaje hasta la presentacion.',
		description:
			'Montaje de coreografia personalizada para novios, familia o grupo de honor en matrimonios. Incluye sesiones de ensayo y coordinacion del numero para el dia del evento.',
		// TODO: imagen — foto de ensayo o presentacion en matrimonio real (con permiso de pareja)
		image: '/images/banners/banner-1.png',
		imageAlt: 'Coreografia para matrimonios con Espacio Elementos',
		audiences: ['Novios', 'Familias', 'Grupo de honor', 'Organizadores de matrimonios'],
		formats: ['Coreografia con novios', 'Numero grupal', 'Sorpresa de padrinos o familia'],
		highlights: [
			'Disenada desde cero segun musica y contexto',
			'Acompanamiento desde el primer ensayo',
			'Adaptada a personas sin experiencia en baile',
		],
		contactHref: buildWhatsAppHref(
			'Hola Espacio Elementos, quiero consultar sobre coreografias para matrimonio.'
		),
		contactLabel: 'Hablar por WhatsApp',
	},
	{
		slug: 'shows-eventos-privados',
		title: 'Shows y animaciones para eventos privados',
		href: '/servicios/produccion-de-eventos',
		hasPage: true,
		summary:
			'Circo, malabares, clown, acrobacia y salsa y bachata para cumpleanos, fiestas y celebraciones privadas. Formato adaptable segun espacio y publico.',
		description:
			'Propuestas de entretenimiento en vivo para eventos privados: cumpleanos, fiestas familiares y celebraciones de empresa. La oferta incluye shows de circo, malabares, clown, acrobacia grupal y presentaciones de salsa y bachata. El formato se adapta al espacio, la duracion y el tipo de publico.',
		// TODO: imagen propia — foto de show en cumpleanos o fiesta privada
		image: '/images/servicios/comunidad.jpg',
		imageAlt: 'Show de circo y animacion para eventos privados con Espacio Elementos',
		audiences: ['Familias', 'Ninos y jovenes', 'Adultos', 'Empresas'],
		formats: ['Shows de circo', 'Malabares y clown', 'Acrobacia grupal', 'Presentaciones de salsa y bachata', 'Animacion de cumpleanos'],
		highlights: [
			'Oferta artistica: circo, malabares, clown, acrobacia y danza',
			'Formato flexible segun espacio y duracion del evento',
			'Publico de todas las edades',
		],
		contactHref: buildWhatsAppHref(
			'Hola Espacio Elementos, quiero cotizar un show o animacion para un evento privado.'
		),
		contactLabel: 'Cotizar por WhatsApp',
	},
];
