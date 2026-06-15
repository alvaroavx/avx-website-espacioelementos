export interface EventFact {
	label: string;
	value: string;
}

export interface TicketOption {
	name: string;
	price: string;
	description: string;
}

export interface ScheduleItem {
	time: string;
	title: string;
	description: string;
}

export interface Performer {
	name: string;
	type: string;
	description: string;
	instagram?: string;
	image?: string;
}

export interface FaqItem {
	question: string;
	answer: string;
}

const whatsappNumber = '56979898502';
const whatsappMessage =
	'Hola, quiero reservar entradas para Latin Rengo Social, el 1er Social de Rengo.';

export const event = {
	name: 'Latin Rengo Social',
	headline: 'El 1er Social de Salsa y Bachata de Rengo',
	context: 'Celebración del primer aniversario de Latin Rengo.',
	date: 'Sábado 18 de julio',
	dateTime: '2026-07-18',
	hours: '21:00 a 03:00 hrs',
	startDateTime: '2026-07-18T21:00:00-04:00',
	endDateTime: '2026-07-19T03:00:00-04:00',
	venue: 'Centro de Eventos Mariette',
	city: 'Rengo',
	contact: '+56 9 7989 8502',
	format: 'Clase inicial + shows invitados + social latino',
	music: 'Salsa, bachata y más',
	whatsappHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
	seo: {
		title: 'Latin Rengo Social | El 1er Social de Salsa y Bachata de Rengo',
		description:
			'Celebra el primer aniversario de Latin Rengo en el 1er Social de Salsa y Bachata de Rengo: clase inicial, shows invitados y pista abierta. Sábado 18 de julio, de 21:00 a 03:00 hrs.',
		// TODO(asset): Reemplazar por una imagen OG propia del evento en formato 1200x630.
		image: '/images/colaboradores/latinrengo.png',
	},
};

export const eventFacts: EventFact[] = [
	{ label: 'Fecha', value: event.date },
	{ label: 'Horario', value: event.hours },
	{ label: 'Lugar', value: event.venue },
	{ label: 'Entradas', value: 'Desde $3.000' },
];

export const ticketIncludes = [
	'Clase inicial de Salsa Cubana a las 21:00 hrs',
	'Ingreso al social',
	'Shows y presentaciones invitadas',
	'Pista abierta de salsa y bachata',
	'Celebración del primer aniversario de Latin Rengo',
	'Ambiente social para asistir con o sin pareja',
];

export const tickets: TicketOption[] = [
	{
		name: 'Preventa',
		price: '$3.000',
		description: 'Ideal para asegurar tu cupo con anticipación.',
	},
	{
		name: 'General',
		price: '$5.000',
		description: 'Valor regular del evento.',
	},
	{
		name: 'Puerta',
		price: '$8.000',
		description: 'Sujeto a disponibilidad el día del evento.',
	},
];

export const schedule: ScheduleItem[] = [
	{
		time: '21:00',
		title: 'Clase inicial de Salsa Cubana',
		description: 'Clase abierta para aprender pasos básicos y entrar en ambiente.',
	},
	{
		time: '22:00',
		title: 'Bienvenida oficial',
		description: 'Inicio de la celebración del primer aniversario de Latin Rengo.',
	},
	{
		time: '22:15',
		title: 'Presentaciones invitadas',
		description: 'Shows de artistas, grupos o academias invitadas.',
	},
	{
		time: '23:00',
		title: 'Social latino',
		description: 'Pista abierta para bailar salsa, bachata y más.',
	},
	{
		time: '03:00',
		title: 'Cierre',
		description: 'Cierre estimado del evento.',
	},
];

// Agregar aquí cada artista cuando nombre, tipo y participación estén confirmados.
export const performers: Performer[] = [];

export const faqs: FaqItem[] = [
	{
		question: '¿Qué es un social?',
		answer:
			'Es una noche para bailar, compartir y disfrutar música latina en comunidad. No es una competencia ni una clase tradicional: es una experiencia social con clase inicial, shows y pista abierta.',
	},
	{
		question: '¿Necesito saber bailar?',
		answer:
			'No. Comenzamos con una clase inicial para que todos puedan aprender pasos básicos y entrar en ambiente.',
	},
	{
		question: '¿Puedo ir sin pareja?',
		answer:
			'Sí. Puedes asistir sin pareja. El social está pensado para compartir, bailar con distintas personas y conocer comunidad.',
	},
	{
		question: '¿Qué incluye mi entrada?',
		answer:
			'Incluye la clase inicial, ingreso al social, presentaciones invitadas y pista abierta de salsa, bachata y más.',
	},
	{
		question: '¿Cuánto cuestan las entradas?',
		answer:
			'Preventa $3.000, general $5.000 y puerta $8.000 sujeto a disponibilidad.',
	},
	{
		question: '¿A qué hora empieza?',
		answer: 'Comenzamos a las 21:00 hrs con la clase inicial.',
	},
	{
		question: '¿A qué hora termina?',
		answer: 'El cierre estimado es a las 03:00 hrs.',
	},
	{
		question: '¿Dónde es el evento?',
		answer:
			'Será en Centro de Eventos Mariette, Rengo. La dirección exacta y las referencias de llegada se entregarán por WhatsApp al reservar.',
	},
	{
		question: '¿Cómo compro mi entrada?',
		answer: `Puedes reservar escribiendo por WhatsApp al ${event.contact}.`,
	},
	{
		question: '¿Habrá presentaciones?',
		answer: 'Sí, tendremos shows y presentaciones invitadas durante la noche.',
	},
	{
		question: '¿Qué música habrá?',
		answer: 'Salsa, bachata y más música latina.',
	},
];
