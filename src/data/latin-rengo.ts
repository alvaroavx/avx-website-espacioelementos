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

const whatsappNumber = '56979898502';
const whatsappMessage =
	'Hola, quiero reservar entradas para Latin Rengo Social, el 1er Social de Salsa y Bachata de Rengo.';

export const latinRengoEvent = {
	name: 'Latin Rengo Social',
	brand: 'Social de Rengo',
	headline: 'El 1er Social de Salsa y Bachata de Rengo',
	subtitle: 'Celebrando el primer aniversario de Latin Rengo.',
	context: 'Latin Rengo Social',
	date: 'Sábado 18 de julio',
	dateTime: '2026-07-18',
	startTime: '21:00 hrs',
	endTime: '03:00 hrs',
	venue: 'Centro de Eventos Mariette',
	address: 'Solicita la dirección exacta por WhatsApp',
	contactLabel: '+56 9 7989 8502',
	whatsappHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
	format: 'Clase inicial + presentaciones + social latino.',
	music: 'Salsa, bachata y más.',
	message:
		'Una noche para bailar, compartir y ser parte del nacimiento de una nueva comunidad salsera y bachatera en Rengo.',
	seo: {
		title: 'Latin Rengo Social | El 1er Social de Salsa y Bachata de Rengo',
		description:
			'Vive el 1er Social de Salsa y Bachata de Rengo: clase de salsa cubana, shows invitados y social latino. Sábado 18 de julio, de 21:00 a 03:00 hrs, en Centro de Eventos Mariette.',
		image: '/images/colaboradores/latinrengo.png',
	},
};

export const eventFacts: LatinRengoFact[] = [
	{ label: 'Fecha', value: latinRengoEvent.date },
	{ label: 'Horario', value: '21:00 a 03:00 hrs' },
	{ label: 'Lugar', value: latinRengoEvent.venue },
	{ label: 'Entradas', value: 'Desde $3.000' },
];

export const ticketIncludes = [
	'Clase de Salsa Cubana a las 21:00 hrs',
	'Ingreso al social',
	'Shows invitados',
	'Salsa y bachata durante la noche',
	'Celebración del primer aniversario de Latin Rengo',
];

export const tickets: LatinRengoTicket[] = [
	{ name: 'Preventa', price: '$3.000' },
	{ name: 'General', price: '$5.000' },
	{
		name: 'Puerta',
		price: '$8.000',
		note: 'Sujeto a disponibilidad',
	},
];

export const schedule: LatinRengoScheduleItem[] = [
	{ time: '21:00', title: 'Clase de Salsa Cubana' },
	{ time: '22:00', title: 'Inicio del Social' },
	{ time: '23:00', title: 'Shows invitados' },
	{ time: '00:00 - 03:00', title: 'Salsa, Bachata y Social' },
];

export const reasonsToAttend = [
	'No necesitas pareja',
	'No necesitas experiencia',
	'Clase incluida',
	'Shows invitados',
	'Salsa y bachata toda la noche',
	'Barra y comida disponible',
	'Conocer personas con intereses similares',
];

export const eventAmenities = [
	{ title: 'Barra', detail: 'Disponible durante el evento' },
	{ title: 'Comida', detail: 'Disponible durante el evento' },
	{ title: 'Baños', detail: 'Disponibles en el recinto' },
	{ title: 'Espacio para bailar', detail: 'Pista preparada para el social' },
];

export const faqs: LatinRengoFaq[] = [
	{
		question: '¿Qué es un social?',
		answer:
			'Es una instancia para bailar, compartir y conocer personas en torno a la salsa y la bachata. No es una competencia ni una clase tradicional: es una noche social con música, shows y pista abierta.',
	},
	{
		question: '¿Necesito saber bailar?',
		answer:
			'No. Comenzaremos con una clase inicial para que todos puedan participar y entrar en ambiente.',
	},
	{
		question: '¿Puedo ir sin pareja?',
		answer:
			'Sí, puedes asistir sin pareja. El social está pensado para compartir y bailar con distintas personas durante la noche.',
	},
	{
		question: '¿Qué debo llevar?',
		answer:
			'Ropa cómoda y ganas de bailar. Si tienes zapatos cómodos para bailar, mejor.',
	},
	{
		question: '¿Cómo compro mi entrada?',
		answer:
			'Puedes reservar escribiendo por WhatsApp al +56 9 7989 8502.',
	},
	{
		question: '¿Habrá presentaciones?',
		answer:
			'Sí, tendremos presentaciones especiales durante la noche. Los nombres se anunciarán pronto.',
	},
	{
		question: '¿A qué hora empieza?',
		answer: 'Comenzamos a las 21:00 hrs con una clase de Salsa Cubana. El evento termina a las 03:00 hrs.',
	},
	{
		question: '¿Dónde queda el evento?',
		answer:
			'Será en Centro de Eventos Mariette. La dirección exacta se agregará apenas esté confirmada.',
	},
];
