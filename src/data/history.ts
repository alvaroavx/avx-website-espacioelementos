export interface HistoryMoment {
	date: string;
	datetime?: string;
	title: string;
	story: string;
	source?: string;
	quiet?: boolean;
}

export interface HistoryChapter {
	id: string;
	year: string;
	title: string;
	element: 'aire' | 'tierra' | 'agua' | 'fuego';
	moments: HistoryMoment[];
}

// Origen y formalizaciones: testimonio del responsable, documentado en
// docs/research/instagram-2026-10-13/origen-confirmado-y-cronologia.md.
// Resto: lectura-historica-textos.md y registros enlazados. Una fecha parcial
// conserva su precisión; no convertir fechas de publicaciones en fechas de eventos.
export const historyChapters: HistoryChapter[] = [
	{
		id: 'antes-del-nombre', year: 'Antes del nombre', title: 'Nos juntábamos a entrenar.', element: 'aire',
		moments: [{
			date: 'El comienzo', title: 'Primero fue encontrarnos',
			story: 'Antes de llamarnos Espacio Elementos, éramos personas que se juntaban a entrenar. Compartíamos el movimiento y las ganas de aprender. Esa forma de encontrarnos sigue siendo el corazón de esta casa.',
		}],
	},
	{
		id: '2022', year: '2022', title: 'Abrimos el círculo.', element: 'tierra',
		moments: [{
			date: 'Mediados de 2022', title: 'Nuestro primer taller',
			story: 'La práctica compartida comenzó a abrirse a otras personas. Hicimos nuestro primer taller: un paso para que más gente pudiera sumarse a lo que nos gustaba hacer.',
		}],
	},
	{
		id: '2023', year: '2023', title: 'Le damos forma a Elementos.', element: 'fuego',
		moments: [
			{
				date: 'Enero', datetime: '2023-01', title: 'Una identidad para lo que estábamos construyendo',
				story: 'Comenzamos a construir la marca Elementos. Las clases reunían entrenamiento, flexibilidad, artes marciales y baile. La invitación que repetíamos entonces nos sigue acompañando: entrenar de manera consciente y diferente.',
				source: 'https://www.instagram.com/espacio.elementos/reel/CnMbRjkKhD7/',
			},
			{
				date: '22 de agosto', datetime: '2023-08-22', title: 'Nos organizamos para sostener el espacio', quiet: true,
				story: 'Nace Espacio Cultural y Deportivo Elementos SpA. Un paso en la organización del proyecto que ya estábamos viviendo juntos.',
			},
		],
	},
	{
		id: '2024', year: '2024', title: 'La casa crece entre todos.', element: 'agua',
		moments: [
			{
				date: '25 de enero', datetime: '2024-01-25', title: 'La comunidad también se organiza', quiet: true,
				story: 'Nace la Agrupación Socio Cultural Espacio Elementos Arte Deporte y Salud. La agrupación y la empresa son dos formas distintas de acompañar el camino del espacio.',
			},
			{
				date: 'Agosto a octubre', title: 'Nos encontramos con el barrio',
				story: 'Con el proyecto Promoviendo la vida sana compartimos talleres gratuitos de circo y arteterapia con El Naranjal Norte. Cerramos el proceso con una jornada de circo, danza y encuentro vecinal.',
				source: 'https://www.instagram.com/espacio.elementos/reel/DBbXW4mpzWu/',
			},
			{
				date: 'Cierre de 2024', title: 'Levantamos nuestra estructura de aéreos',
				story: 'Era un sueño desde el inicio. Con tiempo, manos y ayuda compartida, instalamos nuestra propia estructura. El patio abrió nuevas posibilidades para entrenar y seguir aprendiendo al aire libre.',
				source: 'https://www.instagram.com/espacio.elementos/p/DDUw9UmJkBu/',
			},
			{
				date: 'Diciembre', datetime: '2024-12', title: 'Nuestra primera gala',
				story: 'Cerramos el año llevando el movimiento a escena. Presentaciones, comida y baile para celebrar con quienes habían sido parte del camino: nuestra primera Gala Elementos.',
				source: 'https://www.instagram.com/espacio.elementos/reel/DD-MVcfOTxI/',
			},
		],
	},
	{
		id: '2025', year: '2025', title: 'Lo que practicamos se comparte.', element: 'tierra',
		moments: [
			{
				date: 'Durante 2025', title: 'Bailamos con Latin Rengo',
				story: 'La salsa y la bachata reúnen una comunidad desde Elementos. La primera clase se llenó de ganas de bailar, incluso con lluvia. Después vinieron más encuentros, aprendizajes y una presentación de estudiantes en nuestra gala.',
				source: 'https://www.instagram.com/latin.rengo/reel/DJ2i4EXgDgG/',
			},
			{
				date: '10 de septiembre', datetime: '2025-09-10', title: 'Estrenamos La Tarea Más Difícil',
				story: 'Nuestra compañía llevó esta obra de circo contemporáneo al Festival del Mes del Circo, en Quinta de Tilcoco. El entrenamiento se convirtió en creación colectiva: acrobacias, confianza y distintas maneras de estar juntos.',
				source: 'https://www.instagram.com/espacio.elementos/p/DOovonUj1No/',
			},
			{
				date: 'Octubre', datetime: '2025-10', title: 'Movimiento para la vida',
				story: 'Junto a la Junta de Vecinos de El Naranjal Norte llevamos jornadas de talleres y circo a Los Conquistadores, El Llano y El Naranjal Norte. Compartimos lo que hacemos con vecinos y vecinas de otros rincones de Rengo.',
				source: 'https://www.instagram.com/espacio.elementos/p/DQVBNByEXmP/',
			},
			{
				date: '13 de diciembre', datetime: '2025-12-13', title: 'Una segunda gala, muchas historias',
				story: 'Lira, danza, equilibrio, yoga expresivo, música y baile se encontraron en la Gala Elementos 2025. Estudiantes, talleristas y amistades compartieron el trabajo de todo un año. Una noche para vernos, acompañarnos y celebrar.',
				source: 'https://www.instagram.com/espacio.elementos/reel/DSgDIz3Ecae/',
			},
		],
	},
];
