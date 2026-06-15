export interface WorkshopItem {
	name: string;
	summary: string;
	image: string;
	imageAlt: string;
	focus: string;
}

export const workshops: WorkshopItem[] = [
	{
		name: 'Danza contemporanea',
		summary: 'Explora el movimiento libre y el trabajo expresivo desde una practica corporal sensible.',
		image: '/images/talleres/danza-contemporanea.jpg',
		imageAlt: 'Taller de danza contemporanea',
		focus: 'Movimiento y expresion',
	},
	{
		name: 'Yoga',
		summary: 'Una practica para cultivar movilidad, respiracion, equilibrio y presencia.',
		image: '/images/talleres/yoga.jpg',
		imageAlt: 'Taller de yoga',
		focus: 'Bienestar y equilibrio',
	},
	{
		name: 'Parada de manos',
		summary: 'Trabajo progresivo de fuerza, tecnica y confianza para explorar el equilibrio invertido.',
		image: '/images/talleres/parada-de-manos.jpg',
		imageAlt: 'Taller de parada de manos',
		focus: 'Fuerza y tecnica',
	},
	{
		name: 'Lyra',
		summary: 'Acrobacia aerea en aro con foco en fuerza, control, fluidez y expresion.',
		image: '/images/talleres/lyra.jpg',
		imageAlt: 'Taller de lyra',
		focus: 'Disciplina aerea',
	},
	{
		name: 'Flexibilidad',
		summary: 'Trabajo especifico para ampliar rango de movimiento y acompanar otras practicas corporales.',
		image: '/images/talleres/flexibilidad.jpg',
		imageAlt: 'Taller de flexibilidad',
		focus: 'Movilidad y cuidado corporal',
	},
	{
		name: 'Fuerza',
		summary: 'Entrenamiento con peso corporal orientado a control, resistencia y tecnica.',
		image: '/images/talleres/calistenia.jpg',
		imageAlt: 'Taller de fuerza y calistenia',
		focus: 'Entrenamiento',
	},
	{
		name: 'Entrenamiento funcional',
		summary: 'Sesiones integrales para desarrollar fuerza, movilidad y resistencia en distintos niveles.',
		image: '/images/talleres/entrenamiento-funcional.jpg',
		imageAlt: 'Entrenamiento funcional',
		focus: 'Condicion fisica',
	},
];
