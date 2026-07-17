import {
	faqItems,
	formatCLP,
	latinRengoSocialEvent,
	publicSchedule,
	publicTickets,
} from '../features/latin-rengo/content/social';

export interface LatinRengoFact {
	label: string;
	value: string;
}

export interface LatinRengoTicket {
	name: string;
	price: string;
	note?: string;
}

export interface LatinRengoScheduleItem {
	time: string;
	title: string;
}

export interface LatinRengoFaq {
	question: string;
	answer: string;
}

export const latinRengoEvent = {
	name: latinRengoSocialEvent.name,
	brand: latinRengoSocialEvent.shortName,
	headline: 'Primer aniversario',
	subtitle: latinRengoSocialEvent.quickSummary,
	context: latinRengoSocialEvent.shortName,
	date: latinRengoSocialEvent.dateLabel,
	dateTime: '2026-07-18',
	startTime: '20:30 hrs',
	endTime: '03:00 hrs del domingo 19',
	venue: latinRengoSocialEvent.venueName,
	contactLabel: latinRengoSocialEvent.contact.label,
	whatsappHref: latinRengoSocialEvent.contact.whatsappHref,
	format: 'Clase inicial, presentaciones y social latino.',
	music: 'Salsa, bachata y otros ritmos.',
	message: 'Guía pública del evento LatinRengo Social.',
	seo: {
		title: 'LatinRengo Social | Primer aniversario',
		description:
			'Guía pública de LatinRengo Social: fecha, programa, artistas, entradas, menú y contacto autorizado.',
		image: '/images/colaboradores/latinrengo.png',
	},
};

export const eventFacts: LatinRengoFact[] = [
	{ label: 'Fecha', value: latinRengoSocialEvent.dateLabel },
	{ label: 'Horario', value: '20:30 a 03:00 hrs' },
	{ label: 'Lugar', value: latinRengoSocialEvent.venueName },
	{ label: 'Entradas', value: 'Desde $3.000' },
];

export const ticketIncludes = [
	'Clase de salsa cubana a las 21:00 hrs',
	'Ingreso al social',
	'Presentaciones',
	'Salsa, bachata y otros ritmos durante la noche',
	'Celebración del primer aniversario de LatinRengo',
];

export const tickets: LatinRengoTicket[] = publicTickets.map((ticket) => ({
	name: ticket.label,
	price: formatCLP(ticket.price),
	note: ticket.note,
}));

export const schedule: LatinRengoScheduleItem[] = publicSchedule.map((item) => ({
	time: item.timeLabel,
	title: item.title,
}));

export const reasonsToAttend = [
	'Clase incluida',
	'Presentaciones',
	'Salsa, bachata y otros ritmos durante la noche',
	'Celebración del primer aniversario de LatinRengo',
];

export const eventAmenities = [
	{ title: 'Comida', detail: 'Menú público confirmado disponible en la guía del evento' },
	{ title: 'Espacio para bailar', detail: 'Pista preparada para el social' },
];

export const faqs: LatinRengoFaq[] = faqItems
	.filter((item) => item.status === 'confirmed')
	.map((item) => ({
		question: item.question,
		answer: item.answer,
	}));
