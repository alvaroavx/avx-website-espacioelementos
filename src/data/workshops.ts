import { buildWhatsAppHref } from './site';

export interface PricingTier {
	label: string;
	price: string;
	note?: string;
}

// Precios vigentes 2025. Se publican tal cual confirmó Álvaro.
export const WORKSHOP_PRICING: PricingTier[] = [
	{ label: 'Clase individual', price: '$9.000' },
	{ label: '1 clase semanal', price: '$30.000' },
	{ label: '2 clases semanales', price: '$36.000' },
	{ label: '3 clases semanales', price: '$45.000' },
	{ label: 'Arriendo de espacio por hora', price: '$7.500' },
];

export const WORKSHOP_PRICING_NOTE = 'Precios vigentes 2025, incluyen IVA.';

export const WORKSHOP_CALENDAR_NOTE =
	'El calendario mensual, cambios puntuales y cupos disponibles se confirman por Instagram y WhatsApp.';

export interface WorkshopItem {
	name: string;
	summary: string;
	image: string;
	imageAlt: string;
	focus: string;
	teacher:string;
	level: string;
	ageRange: string;
	schedule: string;
	duration: string;
	// active: false = disciplina suspendida temporalmente, no se muestra en el sitio
	active: boolean;
	// ctaHref: enlace directo al WhatsApp con mensaje pre-armado para este taller
	ctaHref: string;
}

export const workshops: WorkshopItem[] = [
	{
		name: 'Lyra',
		summary:
			'Acrobacia aerea en aro que trabaja fuerza, control corporal, coordinacion y expresion desde el primer dia. Abierta a personas sin experiencia previa.',
		image: '/images/talleres/lyra.jpg',
		imageAlt: 'Clase de lyra en Espacio Elementos, Rengo',
		focus: 'Disciplina aerea',
		teacher:'Evelyn Astorga',
		level: 'Inicial y basico — abierto a todos los niveles',
		ageRange: 'Desde 14 hasta 65 anos aproximadamente',
		schedule: 'Lunes y miercoles de 19:00 a 21:00 hrs',
		duration: '2 horas por clase',
		active: true,
		ctaHref: buildWhatsAppHref(
			'Hola Espacio Elementos, quiero consultar cupos y horarios para el taller de Lyra.'
		),
	},
	{
		name: 'Entrenamiento funcional',
		summary:
			'Sesiones de entrenamiento integral con peso corporal y ejercicio funcional. Trabaja fuerza, movilidad y resistencia adaptada a cada persona.',
		image: '/images/talleres/entrenamiento-funcional.jpg',
		imageAlt: 'Clase de entrenamiento funcional en Espacio Elementos, Rengo',
		focus: 'Condicion fisica',
		teacher:'Alvaro Vargas',
		level: 'Inicial y basico — abierto a todos los niveles',
		ageRange: 'Desde 14 hasta 65 anos aproximadamente',
		schedule: 'Martes y jueves de 19:00 a 21:00 hrs',
		duration: '2 horas por clase',
		active: true,
		ctaHref: buildWhatsAppHref(
			'Hola Espacio Elementos, quiero consultar cupos y horarios para el taller de Entrenamiento funcional.'
		),
	},
	// Disciplinas suspendidas — active: false mientras no haya clases regulares activas
	{
		name: 'Danza contemporanea',
		summary: 'Exploracion del movimiento libre y el trabajo expresivo desde una practica corporal sensible.',
		image: '/images/talleres/danza-contemporanea.jpg',
		imageAlt: 'Taller de danza contemporanea',
		focus: 'Movimiento y expresion',
		teacher:'Monica Rogers',
		level: 'Todos los niveles',
		ageRange: 'Consultar',
		schedule: 'Consultar',
		duration: 'Consultar',
		active: false,
		ctaHref: buildWhatsAppHref(
			'Hola Espacio Elementos, quiero consultar disponibilidad para el taller de Danza contemporanea.'
		),
	},
	{
		name: 'Yoga',
		summary: 'Practica para cultivar movilidad, respiracion, equilibrio y presencia.',
		image: '/images/talleres/yoga.jpg',
		imageAlt: 'Taller de yoga',
		focus: 'Bienestar y equilibrio',
		teacher:'Erika General',
		level: 'Todos los niveles',
		ageRange: 'Consultar',
		schedule: 'Consultar',
		duration: 'Consultar',
		active: false,
		ctaHref: buildWhatsAppHref(
			'Hola Espacio Elementos, quiero consultar disponibilidad para el taller de Yoga.'
		),
	},
	{
		name: 'Parada de manos',
		summary: 'Trabajo progresivo de fuerza, tecnica y confianza para explorar el equilibrio invertido.',
		image: '/images/talleres/parada-de-manos.jpg',
		imageAlt: 'Taller de parada de manos',
		focus: 'Fuerza y tecnica',
		teacher:'Alvaro Vargas',
		level: 'Todos los niveles',
		ageRange: 'Consultar',
		schedule: 'Consultar',
		duration: 'Consultar',
		active: false,
		ctaHref: buildWhatsAppHref(
			'Hola Espacio Elementos, quiero consultar disponibilidad para el taller de Parada de manos.'
		),
	},
	{
		name: 'Flexibilidad',
		summary: 'Trabajo especifico para ampliar rango de movimiento y acompanar otras practicas corporales.',
		image: '/images/talleres/flexibilidad.jpg',
		imageAlt: 'Taller de flexibilidad',
		focus: 'Movilidad y cuidado corporal',
		teacher:'Paulina Diaz',
		level: 'Todos los niveles',
		ageRange: 'Consultar',
		schedule: 'Consultar',
		duration: 'Consultar',
		active: false,
		ctaHref: buildWhatsAppHref(
			'Hola Espacio Elementos, quiero consultar disponibilidad para el taller de Flexibilidad.'
		),
	},
	{
		name: 'Calistenia',
		summary: 'Entrenamiento con peso corporal orientado a control, resistencia y tecnica progresiva.',
		image: '/images/talleres/calistenia.jpg',
		imageAlt: 'Taller de calistenia',
		focus: 'Entrenamiento',
		teacher:'Sebastian Acuna',
		level: 'Todos los niveles',
		ageRange: 'Consultar',
		schedule: 'Consultar',
		duration: 'Consultar',
		active: false,
		ctaHref: buildWhatsAppHref(
			'Hola Espacio Elementos, quiero consultar disponibilidad para el taller de Calistenia.'
		),
	},
];

// Helpers de filtrado para usar en páginas
export const activeWorkshops = workshops.filter((w) => w.active);
export const inactiveWorkshops = workshops.filter((w) => !w.active);
