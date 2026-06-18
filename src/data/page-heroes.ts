import { buildWhatsAppHref } from './site';

export interface HeroAction {
	label: string;
	href: string;
	variant?: 'primary' | 'secondary';
	target?: string;
}

export interface HeroContent {
	eyebrow: string;
	title: string;
	description: string;
	image: string;
	imageAlt: string;
	actions: HeroAction[];
}

const whatsappHref = buildWhatsAppHref(
	'Hola Espacio Elementos, quiero cotizar una experiencia o servicio.'
);

export const heroContent = {
	home: {
		eyebrow: 'Espacio Elementos',
		title: 'Experiencias escenicas y corporales para equipos, instituciones y eventos',
		description:
			'Disenamos talleres, presentaciones y activaciones para empresas, colegios, municipios, organizaciones y eventos privados, con un sello humano, cercano y profesional.',
		image: '/images/banners/banner-1.png',
		imageAlt: 'Espacio Elementos en escena',
		actions: [
			{ label: 'Explora nuestros servicios', href: '/servicios' },
			{ label: 'Hablemos por WhatsApp', href: whatsappHref, variant: 'secondary', target: '_blank' },
		],
	},
	services: {
		eyebrow: 'Servicios',
		title: 'Soluciones escenicas, corporales y comunitarias para distintos contextos',
		description:
			'Esta pagina concentra la oferta comercial principal de Espacio Elementos: presentaciones, talleres y experiencias, y activacion de eventos con un sello humano y profesional.',
		image: '/images/servicios/presentaciones.jpg',
		imageAlt: 'Servicios de Espacio Elementos',
		actions: [
			{ label: 'Hablemos por WhatsApp', href: whatsappHref, target: '_blank' },
			{ label: 'Ir a contacto', href: '/contacto', variant: 'secondary' },
		],
	},
	workshops: {
		eyebrow: 'Talleres regulares',
		title: 'Lyra y entrenamiento funcional con horario fijo en Rengo',
		description:
			'Dos disciplinas activas esta temporada, abiertas desde los 14 anos sin experiencia previa requerida. Clases de 2 horas, dos veces por semana, con instructor presente.',
		image: '/images/talleres/lyra.jpg',
		imageAlt: 'Clase de lyra en Espacio Elementos, Rengo',
		actions: [
			{ label: 'Reservar cupo por WhatsApp', href: whatsappHref, target: '_blank' },
			{ label: 'Ir a contacto', href: '/contacto', variant: 'secondary' },
		],
	},
	projects: {
		eyebrow: 'Proyectos comunitarios',
		title: 'Trabajo territorial con cuerpo, arte y cercania',
		description:
			'En esta primera etapa, la ruta de proyectos se concentra en la dimension comunitaria de Espacio Elementos: colaboraciones, activaciones y trabajo con organizaciones y espacios colectivos.',
		image: '/images/fondos/comunidad.png',
		imageAlt: 'Proyectos comunitarios de Espacio Elementos',
		actions: [
			{ label: 'Escribir por WhatsApp', href: whatsappHref, target: '_blank' },
			{ label: 'Ir a servicios', href: '/servicios', variant: 'secondary' },
		],
	},
	videos: {
		eyebrow: 'Videos y registros',
		title: 'Elementos en movimiento',
		description:
			'Obras, shows, talleres y experiencias comunitarias que muestran como vivimos el arte, el cuerpo y el territorio.',
		image: '/images/fondos/servicios.png',
		imageAlt: 'Espacio Elementos en escena — obras, shows y talleres',
		actions: [
			{ label: 'Ver canal de YouTube', href: 'https://www.youtube.com/@EspacioElementos', target: '_blank' },
			{ label: 'Ir a servicios', href: '/servicios', variant: 'secondary' },
		],
	},
} satisfies Record<string, HeroContent>;
