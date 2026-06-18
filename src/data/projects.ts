// Proyectos comunitarios y colaboraciones de Espacio Elementos.
// Los marcados con TODO necesitan confirmacion de Álvaro antes de publicar descripcion concreta.

export interface ProjectItem {
	title: string;
	description: string;
	partner?: string;
	partnerHref?: string;
	year?: string;
	tags: string[];
	image?: string;
	imageAlt?: string;
	// note: uso interno — no se muestra en el sitio
	note?: string;
}

export const projects: ProjectItem[] = [
	{
		title: 'Latin Rengo Social',
		description:
			'Primer Social de Salsa y Bachata de Rengo, organizado junto a Latin Rengo para celebrar su primer aniversario. Una noche de baile, shows invitados y comunidad salsera en el Centro de Eventos Mariette.',
		partner: 'Latin Rengo',
		partnerHref: 'https://www.instagram.com/latin.rengo/?utm_source=espacioelementos&utm_medium=referral',
		year: '2026',
		tags: ['Evento', 'Comunidad', 'Danza'],
		image: '/images/latin-rengo-social-poster.jpg',
		imageAlt: 'Afiche del Latin Rengo Social 2026',
	},
	{
		title: 'Colaboracion con Junta de Vecinos Naranjal Norte',
		description:
			// TODO: Álvaro — descripcion concreta de la activacion (que se hizo, cuantos participaron, formato)
			'Activacion comunitaria en el sector Naranjal Norte de Rengo, en colaboracion con la Junta de Vecinos del sector.',
		partner: 'Junta de Vecinos El Naranjal Norte',
		partnerHref: 'https://www.instagram.com/naranjal_norte/?utm_source=espacioelementos&utm_medium=referral',
		year: '2025', // TODO: confirmar año
		tags: ['Comunidad', 'Territorio'],
	},
	{
		title: 'Colaboracion con Circo Quetralmahue',
		description:
			// TODO: Álvaro — descripcion concreta (taller, funcion, encuentro, etc.)
			'Trabajo conjunto con el Circo Quetralmahue en el contexto de sus activaciones culturales en la region de O\'Higgins.',
		partner: 'Circo Quetralmahue',
		partnerHref: 'https://www.circoquetralmahue.cl/?utm_source=espacioelementos&utm_medium=referral',
		year: '2025', // TODO: confirmar año
		tags: ['Circo', 'Colaboracion'],
	},
	{
		title: 'Colaboracion con Compania OtreSer',
		description:
			// TODO: Álvaro — descripcion concreta de la colaboracion
			// NOTA: OtreSer es una compania amiga y colaboradora. No ofrecer como servicio propio de Espacio Elementos
			// salvo que Álvaro confirme que hay venta conjunta.
			'Vinculo de trabajo con la Compania OtreSer, compania colaboradora del ecosistema de Espacio Elementos.',
		partner: 'Compania OtreSer',
		partnerHref: undefined, // TODO: Álvaro — agregar Instagram o sitio de OtreSer
		year: '2025', // TODO: confirmar año
		tags: ['Colaboracion', 'Artes escenicas'],
		note: 'OtreSer es compania amiga/colaboradora. No publicar como servicio propio sin confirmacion de Alvaro.',
	},
	{
		title: 'Activacion con Afro Renku',
		description:
			// TODO: Álvaro — descripcion concreta
			'Colaboracion con Afro Renku en actividades de movimiento y expresion en Rengo.',
		partner: 'Afro Renku',
		partnerHref: 'https://www.instagram.com/afro_renku/?utm_source=espacioelementos&utm_medium=referral',
		year: '2025', // TODO: confirmar año
		tags: ['Danza', 'Comunidad', 'Colaboracion'],
	},
	{
		title: 'Trabajo con Casa 7 Colores',
		description:
			// TODO: Álvaro — descripcion concreta
			'Actividad conjunta con Casa 7 Colores en el marco de sus programas comunitarios.',
		partner: 'Casa 7 Colores',
		partnerHref: 'https://www.instagram.com/casa7colores/?utm_source=espacioelementos&utm_medium=referral',
		year: '2024', // TODO: confirmar año
		tags: ['Comunidad', 'Colaboracion'],
	},
];
