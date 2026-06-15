export interface DossierItem {
	title: string;
	description: string;
	audience: string;
	href: string | null;
	assetRequest: string;
}

export const dossiers: DossierItem[] = [
	{
		title: 'Dossier institucional Espacio Elementos',
		description: 'Presentacion general del proyecto, enfoque de trabajo y lineas principales.',
		audience: 'Instituciones, organizaciones y aliados',
		href: '/dossiers/espacio-elementos.pdf',
		assetRequest: '/public/dossiers/espacio-elementos.pdf',
	},
	{
		title: 'Dossier de presentaciones',
		description: 'Material comercial para shows, formatos escenicos y contrataciones.',
		audience: 'Eventos, programacion y celebraciones',
		href: '/dossiers/presentaciones.pdf',
		assetRequest: '/public/dossiers/presentaciones.pdf',
	},
	{
		title: 'Dossier de La Tarea Mas Dificil',
		description: 'Material especifico del proyecto escenico para compartir bajo solicitud.',
		audience: 'Programadores y espacios culturales',
		href: '/dossiers/la-tarea-mas-dificil.pdf',
		assetRequest: '/public/dossiers/la-tarea-mas-dificil.pdf',
	},
	{
		title: 'Dossier personal del presidente',
		description: 'Material de presentacion profesional disponible para conversaciones especificas.',
		audience: 'Instituciones y contraparte tecnica',
		href: '/dossiers/presidencia.pdf',
		assetRequest: '/public/dossiers/presidencia.pdf',
	},
];
