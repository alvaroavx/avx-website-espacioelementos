import { buildWhatsAppHref } from './site';

export interface ServiceItem {
	slug: string;
	title: string;
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
}

export const services: ServiceItem[] = [
	{
		slug: 'presentaciones',
		title: 'Presentaciones y espectaculos',
		href: '/servicios/presentaciones',
		summary: 'Shows, intervenciones y formatos escenicos para eventos, celebraciones y programacion cultural.',
		description:
			'Propuestas escenicas que combinan movimiento, artes y presencia en vivo para espacios publicos, privados e institucionales.',
		image: '/images/servicios/presentaciones.jpg',
		imageAlt: 'Presentacion artistica de Espacio Elementos',
		audiences: ['Eventos privados', 'Colegios', 'Municipios', 'Organizaciones'],
		formats: ['Presentaciones en vivo', 'Intervenciones escenicas', 'Activaciones artisticas'],
		highlights: ['Sello humano y cercano', 'Adaptable a distintos contextos', 'Disponible con dossier comercial'],
		contactHref: buildWhatsAppHref(
			'Hola Espacio Elementos, quiero cotizar una presentacion o formato escenico.'
		),
		contactLabel: 'Cotizar',
		dossierHref: '/dossiers/presentaciones.pdf',
	},
	{
		slug: 'talleres-y-experiencias',
		title: 'Talleres y experiencias de movimiento',
		href: '/servicios/talleres-y-experiencias',
		summary: 'Instancias practicas para equipos, comunidades, cursos y grupos que buscan bienestar, juego y aprendizaje.',
		description:
			'Talleres disenados para contextos educativos, organizacionales y comunitarios, con foco en experiencia concreta y facilitacion cercana.',
		image: '/images/servicios/bienestar.jpg',
		imageAlt: 'Taller guiado de movimiento y bienestar',
		audiences: ['Empresas', 'Colegios', 'Municipios', 'Organizaciones'],
		formats: ['Jornadas de bienestar', 'Talleres tematicos', 'Experiencias grupales'],
		highlights: ['Diseno segun contexto', 'Cruce entre cuerpo, juego y expresion', 'Acompanamiento profesional'],
		contactHref: buildWhatsAppHref(
			'Hola Espacio Elementos, quiero cotizar un taller o experiencia de movimiento.'
		),
		contactLabel: 'Solicitar propuesta',
		dossierHref: '/dossiers/espacio-elementos.pdf',
	},
	{
		slug: 'produccion-de-eventos',
		title: 'Produccion y activacion de eventos',
		href: '/servicios/produccion-de-eventos',
		summary: 'Apoyo para levantar experiencias con identidad, movimiento y presencia escenica en encuentros y celebraciones.',
		description:
			'Desarrollo de activaciones y experiencias para jornadas institucionales, celebraciones, encuentros comunitarios y eventos privados.',
		image: '/images/servicios/comunidad.jpg',
		imageAlt: 'Actividad comunitaria y evento activado por Espacio Elementos',
		audiences: ['Empresas', 'Municipios', 'Organizaciones', 'Eventos privados'],
		formats: ['Activaciones', 'Experiencias para jornadas', 'Acompanamiento de produccion'],
		highlights: ['Mirada creativa y operativa', 'Posibilidad de integrar presentaciones y talleres', 'Pensado para contextos reales'],
		contactHref: buildWhatsAppHref(
			'Hola Espacio Elementos, quiero cotizar apoyo para produccion o activacion de un evento.'
		),
		contactLabel: 'Hablar del evento',
		dossierHref: '/dossiers/espacio-elementos.pdf',
	},
];
