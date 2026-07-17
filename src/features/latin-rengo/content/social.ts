import type { ImageMetadata } from 'astro';

import essenciaLatinaImage from '../assets/artists/essencia-latina.jpg';
import falakHanaImage from '../assets/artists/falak-hana.jpg';
import ladiesMayImage from '../assets/artists/ladies-may-gema-dance-academy.jpg';
import latinRengoImage from '../assets/artists/latin-rengo-mi-timbaton.jpg';
import magiaLatinaImage from '../assets/artists/magia-latina.jpg';
import rominaMarceloImage from '../assets/artists/romina-marcelo.jpg';
import lauraAlvaroImage from '../assets/artists/laura-alvaro.jpg';

export type EditorialStatus = 'confirmed' | 'provisional' | 'withheld';

type PublishableStatus = Exclude<EditorialStatus, 'withheld'>;

interface Statused {
	status: EditorialStatus;
}

export interface SocialEvent extends Statused {
	name: string;
	shortName: string;
	edition: string;
	dateLabel: string;
	venueName: string;
	timezone: 'America/Santiago';
	startDateTime: string;
	endDateTime: string;
	quickSummary: string;
	contact: {
		label: string;
		phone: string;
		whatsappHref: string;
	};
	location: {
		venueName: string;
		address?: string;
		mapUrl?: string;
		status: EditorialStatus;
	};
}

export interface ScheduleItem extends Statused {
	id: string;
	timeLabel: string;
	startDateTime: string;
	endDateTime?: string;
	title: string;
	description?: string;
}

export interface Artist {
	id: string;
	name: string;
	presentation?: string;
	image: ImageMetadata;
	alt: string;
	credit?: string;
	status: PublishableStatus;
}

export interface ArtistPresentation {
	artistId: string;
	order: number;
	status: PublishableStatus;
}

export interface TicketTier extends Statused {
	id: string;
	label: string;
	price: number;
	note?: string;
	availability?: 'available' | 'sold-out';
}

export interface MenuPrice {
	label: string;
	price: number;
}

export interface MenuItem extends Statused {
	id: string;
	name: string;
	description: string;
	prices: MenuPrice[];
	tags?: string[];
}

export interface MenuCategory extends Statused {
	id: string;
	title: string;
	provider?: string;
	items: MenuItem[];
}

export interface FaqItem extends Statused {
	question: string;
	answer: string;
}

export const siteOrigin = 'https://espacioelementos.cl';
export const socialPath = '/latin-rengo-social';
export const menuPath = '/latin-rengo-social/menu';
export const archivePath = '/latin-rengo-social/archivo/social-original';
export const legacyQrPath = '/latin-rengo-v3';

export const latinRengoSocialEvent: SocialEvent = {
	status: 'confirmed',
	name: 'LatinRengo Social - Primer aniversario',
	shortName: 'LatinRengo Social',
	edition: 'Primer aniversario',
	dateLabel: 'Sábado 18 de julio de 2026',
	venueName: 'Centro de Eventos Mariette',
	timezone: 'America/Santiago',
	startDateTime: '2026-07-18T20:30:00-04:00',
	endDateTime: '2026-07-19T03:00:00-04:00',
	quickSummary: '20:30 Apertura · 21:00 Clase · 23:00 Shows · 03:00 Cierre',
	contact: {
		label: '+56 9 7989 8502',
		phone: '+56979898502',
		whatsappHref:
			'https://wa.me/56979898502?text=Hola%20LatinRengo%2C%20quiero%20consultar%20por%20LatinRengo%20Social.',
	},
	location: {
		venueName: 'Centro de Eventos Mariette',
		status: 'provisional',
	},
};

export const publicSchedule: ScheduleItem[] = [
	{
		id: 'doors',
		status: 'confirmed',
		timeLabel: '20:30',
		startDateTime: '2026-07-18T20:30:00-04:00',
		title: 'Apertura de puertas',
	},
	{
		id: 'class',
		status: 'confirmed',
		timeLabel: '21:00 a 22:00',
		startDateTime: '2026-07-18T21:00:00-04:00',
		endDateTime: '2026-07-18T22:00:00-04:00',
		title: 'Clase de salsa cubana',
	},
	{
		id: 'first-social',
		status: 'confirmed',
		timeLabel: '22:00 a 22:50',
		startDateTime: '2026-07-18T22:00:00-04:00',
		endDateTime: '2026-07-18T22:50:00-04:00',
		title: 'Social de salsa y bachata',
	},
	{
		id: 'shows',
		status: 'confirmed',
		timeLabel: '23:00 a 23:50',
		startDateTime: '2026-07-18T23:00:00-04:00',
		endDateTime: '2026-07-18T23:50:00-04:00',
		title: 'Presentaciones',
		description: 'Orden de presentaciones sujeto a cambios.',
	},
	{
		id: 'main-social',
		status: 'confirmed',
		timeLabel: '23:50 a 03:00',
		startDateTime: '2026-07-18T23:50:00-04:00',
		endDateTime: '2026-07-19T03:00:00-04:00',
		title: 'Social de salsa, bachata y otros ritmos',
	},
	{
		id: 'close',
		status: 'confirmed',
		timeLabel: '03:00 domingo 19',
		startDateTime: '2026-07-19T03:00:00-04:00',
		title: 'Cierre al público',
	},
];

export const artistCatalog: Artist[] = [
	{
		id: 'falak-hana',
		name: 'Falak Hana',
		image: falakHanaImage,
		alt: 'Afiche de Falak Hana para LatinRengo Social.',
		status: 'confirmed',
	},
	{
		id: 'laura-alvaro',
		name: 'Laura y Álvaro',
		image: lauraAlvaroImage,
		alt: 'Afiche de Laura y Álvaro para LatinRengo Social.',
		status: 'confirmed',
	},
	{
		id: 'magia-latina',
		name: 'Magia Latina',
		image: magiaLatinaImage,
		alt: 'Afiche de Magia Latina para LatinRengo Social.',
		status: 'confirmed',
	},
	{
		id: 'essencia-latina',
		name: 'Essencia Latina',
		image: essenciaLatinaImage,
		alt: 'Afiche de Essencia Latina para LatinRengo Social.',
		status: 'confirmed',
	},
	{
		id: 'romina-marcelo',
		name: 'Romina y Marcelo',
		image: rominaMarceloImage,
		alt: 'Afiche de Romina y Marcelo para LatinRengo Social.',
		status: 'confirmed',
	},
	{
		id: 'ladies-may',
		name: 'Ladies May',
		image: ladiesMayImage,
		alt: 'Afiche de Ladies May para LatinRengo Social.',
		status: 'confirmed',
	},
	{
		id: 'latin-rengo-mi-timbaton',
		name: 'LatinRengo - Mi Timbatón',
		image: latinRengoImage,
		alt: 'Afiche de LatinRengo - Mi Timbatón para LatinRengo Social.',
		status: 'confirmed',
	},
];

export const presentationOrder: ArtistPresentation[] = [
	{ artistId: 'falak-hana', order: 1, status: 'confirmed' },
	{ artistId: 'laura-alvaro', order: 2, status: 'confirmed' },
	{ artistId: 'magia-latina', order: 3, status: 'confirmed' },
	{ artistId: 'essencia-latina', order: 4, status: 'confirmed' },
	{ artistId: 'romina-marcelo', order: 5, status: 'confirmed' },
	{ artistId: 'ladies-may', order: 6, status: 'confirmed' },
	{ artistId: 'latin-rengo-mi-timbaton', order: 7, status: 'confirmed' },
];

export const ticketTiers: TicketTier[] = [
	{
		id: 'preventa',
		status: 'confirmed',
		label: 'Preventa',
		price: 3000,
		note: 'Agotada.',
		availability: 'sold-out',
	},
	{
		id: 'general',
		status: 'confirmed',
		label: 'General',
		price: 5000,
		note: 'Disponible hasta el viernes 17 de julio.',
		availability: 'available',
	},
	{
		id: 'puerta',
		status: 'confirmed',
		label: 'Puerta',
		price: 8000,
		note: 'Solo sábado 18 de julio, sujeta a disponibilidad.',
		availability: 'available',
	},
];

export const menuCategories: MenuCategory[] = [
	{
		id: 'pizzas',
		status: 'confirmed',
		title: 'Pizzas',
		provider: 'Pizzis Pizzería',
		items: [
			{
				id: 'pepperoni',
				status: 'confirmed',
				name: 'Pepperoni',
				description: 'Masa artesanal, salsa de tomate, queso mozzarella y pepperoni.',
				prices: [
					{ label: 'Individual 24 cm', price: 7500 },
					{ label: 'Familiar 32 cm', price: 13000 },
				],
			},
			{
				id: 'del-jardin',
				status: 'confirmed',
				name: 'Del Jardín',
				description:
					'Masa artesanal, salsa de tomate, queso mozzarella, champiñón, choclo, aceituna y pimentón.',
				prices: [
					{ label: 'Individual 24 cm', price: 7500 },
					{ label: 'Familiar 32 cm', price: 13000 },
				],
				tags: ['Apta para vegetarianos'],
			},
			{
				id: 'mediterranea',
				status: 'confirmed',
				name: 'Mediterránea',
				description:
					'Masa artesanal, salsa de tomate, queso mozzarella, jamón serrano, tomate cherry y pesto.',
				prices: [
					{ label: 'Individual 24 cm', price: 9000 },
					{ label: 'Familiar 32 cm', price: 14500 },
				],
			},
			{
				id: 'todas-las-carnes',
				status: 'confirmed',
				name: 'Todas las carnes',
				description:
					'Masa artesanal, salsa de tomate, queso mozzarella, pepperoni, jamón, carne molida y longaniza.',
				prices: [
					{ label: 'Individual 24 cm', price: 7500 },
					{ label: 'Familiar 32 cm', price: 13000 },
				],
			},
		],
	},
	{
		id: 'aperitivos',
		status: 'confirmed',
		title: 'Aperitivos',
		items: [
			{
				id: 'papas-fritas',
				status: 'confirmed',
				name: 'Papas fritas',
				description: 'Con salsa de la casa, aptas para vegetarianos y con opción de salsa vegana.',
				prices: [{ label: 'Porción', price: 4500 }],
				tags: ['Aptas para vegetarianos', 'Opción de salsa vegana'],
			},
			{
				id: 'papas-fritas-mechada',
				status: 'confirmed',
				name: 'Papas fritas con mechada',
				description: 'Con salsa de queso y ciboulette.',
				prices: [{ label: 'Porción', price: 10000 }],
			},
			{
				id: 'papas-fritas-jardin',
				status: 'confirmed',
				name: 'Papas fritas del Jardín',
				description: 'Con champiñón, choclo, pimentón y salsa cheddar.',
				prices: [{ label: 'Porción', price: 8000 }],
				tags: ['Aptas para vegetarianos'],
			},
			{
				id: 'aros-cebolla',
				status: 'confirmed',
				name: 'Aros de cebolla',
				description: 'Diez unidades con salsa a elección.',
				prices: [{ label: '10 unidades', price: 4000 }],
			},
		],
	},
];

export const faqItems: FaqItem[] = [
	{
		status: 'confirmed',
		question: '¿A qué hora parte y termina?',
		answer:
			'La apertura de puertas es a las 20:30 del sábado 18 de julio de 2026. El cierre al público está programado para las 03:00 del domingo 19 de julio.',
	},
	{
		status: 'confirmed',
		question: '¿Habrá clase antes del social?',
		answer: 'Sí. La clase de salsa cubana está programada de 21:00 a 22:00.',
	},
	{
		status: 'confirmed',
		question: '¿Dónde será?',
		answer: 'El recinto confirmado es Centro de Eventos Mariette.',
	},
	{
		status: 'confirmed',
		question: '¿Dónde consulto entradas o dudas del evento?',
		answer: 'El contacto público autorizado de LatinRengo es +56 9 7989 8502.',
	},
];

export const publicArtists = presentationOrder
	.filter((item) => item.status === 'confirmed')
	.sort((a, b) => a.order - b.order)
	.map((item) => artistCatalog.find((artist) => artist.id === item.artistId))
	.filter((artist): artist is Artist => Boolean(artist) && artist.status === 'confirmed');

export const publicTickets = ticketTiers.filter((item) => item.status === 'confirmed');
export const publicMenuCategories = menuCategories
	.filter((category) => category.status === 'confirmed')
	.map((category) => ({
		...category,
		items: category.items.filter((item) => item.status === 'confirmed'),
	}));
export const publicFaqItems = faqItems.filter((item) => item.status === 'confirmed');

export function formatCLP(price: number): string {
	return new Intl.NumberFormat('es-CL', {
		style: 'currency',
		currency: 'CLP',
		maximumFractionDigits: 0,
	}).format(price);
}

export function createEventJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Event',
		name: latinRengoSocialEvent.name,
		startDate: latinRengoSocialEvent.startDateTime,
		endDate: latinRengoSocialEvent.endDateTime,
		eventStatus: 'https://schema.org/EventScheduled',
		eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
		location: {
			'@type': 'Place',
			name: latinRengoSocialEvent.venueName,
		},
		offers: publicTickets.map((ticket) => ({
			'@type': 'Offer',
			name: ticket.label,
			price: ticket.price,
			priceCurrency: 'CLP',
			url: `${siteOrigin}${socialPath}#entradas`,
			availability:
				ticket.availability === 'sold-out'
					? 'https://schema.org/SoldOut'
					: 'https://schema.org/InStock',
		})),
	};
}
