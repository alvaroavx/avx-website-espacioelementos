export interface TeamMember {
	name: string;
	role: string;
	image: string;
	imageAlt: string;
}

export const teamMembers: TeamMember[] = [
	{
		name: 'Monica Rogers',
		role: 'Bailarina profesional en formacion',
		image: '/images/equipo/monica.png',
		imageAlt: 'Monica Rogers',
	},
	{
		name: 'Erika General',
		role: 'Instructora de yoga',
		image: '/images/equipo/erika.jpg',
		imageAlt: 'Erika General',
	},
	{
		name: 'Evelyn Astorga',
		role: 'Lyrista y kinesiologa',
		image: '/images/equipo/evelyn.jpg',
		imageAlt: 'Evelyn Astorga',
	},
	{
		name: 'Alvaro Vargas',
		role: 'Artista de circo y preparador fisico',
		image: '/images/equipo/alvaro.jpg',
		imageAlt: 'Alvaro Vargas',
	},
	{
		name: 'Paulina Diaz',
		role: 'Instructora de flexibilidad y artista circense',
		image: '/images/equipo/paulina.jpg',
		imageAlt: 'Paulina Diaz',
	},
	{
		name: 'Sebastian Acuna',
		role: 'Instructor certificado de calistenia',
		image: '/images/equipo/sebastian.jpg',
		imageAlt: 'Sebastian Acuna',
	},
];
