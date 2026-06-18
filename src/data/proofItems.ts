// Evidencia disponible para el sitio: fotos, testimonios, colaboraciones y material institucional.
// Estado de cada item: 'disponible' | 'pendiente' | 'por-aprobar'
// No publicar nada con estado 'pendiente' o 'por-aprobar' sin confirmacion de Alvaro.

export type ProofStatus = 'disponible' | 'pendiente' | 'por-aprobar';
export type ProofType = 'foto' | 'testimonio' | 'colaboracion' | 'dossier';

export interface ProofItem {
	type: ProofType;
	title: string;
	// page: página del sitio donde se recomienda usar esta evidencia
	page: string;
	status: ProofStatus;
	note?: string;
}

export const proofItems: ProofItem[] = [
	// FOTOS DISPONIBLES
	{
		type: 'foto',
		title: 'Fotos de clases semanales de Lyra',
		page: '/talleres — tarjeta de Lyra y hero',
		status: 'disponible',
		note: 'Usar imagen real de clase en lugar de placeholder actual',
	},
	{
		type: 'foto',
		title: 'Fotos de clases de Entrenamiento funcional',
		page: '/talleres — tarjeta de Entrenamiento funcional',
		status: 'disponible',
		note: 'Usar imagen real de clase si existe',
	},
	{
		type: 'foto',
		title: 'Fotos de clases a ninos',
		page: '/nosotros o /proyectos — mostrar alcance educativo',
		status: 'disponible',
		note: 'Verificar que los menores tengan autorizacion de imagen antes de publicar',
	},
	{
		type: 'foto',
		title: 'Fotos de presentaciones en localidades rurales',
		page: '/servicios/presentaciones o pagina de Compania Elementos',
		status: 'disponible',
		note: 'Evidencia directa del alcance territorial — alta prioridad de uso',
	},
	{
		type: 'foto',
		title: 'Fotos de presentaciones en teatro',
		page: '/servicios/la-tarea-mas-dificil (cuando exista la pagina)',
		status: 'disponible',
		note: 'Usar en la presentacion de la obra y en la Compania Elementos',
	},
	{
		type: 'foto',
		title: 'Fotos de baile con alta participacion de publico',
		page: '/proyectos — proyectos comunitarios',
		status: 'disponible',
		note: 'Muestra dimension comunitaria y alcance de convocatoria',
	},
	{
		type: 'foto',
		title: 'Poster Latin Rengo Social',
		page: '/latin-rengo-social — ya en uso',
		status: 'disponible',
		note: 'No intervenir — página Latin Rengo queda fuera de este scope',
	},

	// TESTIMONIOS
	{
		type: 'testimonio',
		title: 'Testimonios de estudiantes de taller',
		page: '/talleres — seccion de confianza',
		status: 'por-aprobar',
		note: 'Pendientes de aprobacion de Alvaro. No publicar hasta tener texto y nombre real confirmados.',
	},
	{
		type: 'testimonio',
		title: 'Testimonios de clientes de servicios',
		page: '/servicios o index — seccion de confianza',
		status: 'por-aprobar',
		note: 'Pendientes de aprobacion. Priorizar testimonios de empresas o colegios por credibilidad institucional.',
	},

	// COLABORACIONES
	{
		type: 'colaboracion',
		title: 'Junta de Vecinos Naranjal Norte',
		page: '/proyectos',
		status: 'disponible',
		note: 'Colaboracion confirmada — describe la accion concreta si hay registro disponible',
	},
	{
		type: 'colaboracion',
		title: 'Compania Elementos como proyecto hijo de Espacio Elementos',
		page: '/nosotros y /servicios/compania-elementos (futura)',
		status: 'disponible',
		note: 'Dato confirmado — se puede mencionar en la pagina Nosotros y en la presentacion de servicios',
	},

	// DOSSIERS
	{
		type: 'dossier',
		title: 'Dossier institucional Espacio Elementos',
		page: '/contacto y /nosotros',
		status: 'pendiente',
		note: 'Pendiente de revision por Alvaro antes de promoverlo activamente',
	},
	{
		type: 'dossier',
		title: 'Dossier de presentaciones (Compania Elementos)',
		page: '/servicios/presentaciones y /contacto',
		status: 'pendiente',
		note: 'Pendiente de revision. Verificar que refleje la oferta actual antes de compartir',
	},
	{
		type: 'dossier',
		title: 'Dossier La tarea mas dificil',
		page: '/servicios/la-tarea-mas-dificil (futura) y /contacto',
		status: 'pendiente',
		note: 'Pendiente de revision. Alta prioridad si hay gira o busqueda activa de funciones',
	},
	{
		type: 'dossier',
		title: 'Dossier personal del presidente',
		page: '/nosotros — uso restringido, solo bajo solicitud',
		status: 'pendiente',
		note: 'No promover publicamente. Compartir solo bajo solicitud directa',
	},
];

// Helpers de filtrado
export const availableProof = proofItems.filter((p) => p.status === 'disponible');
export const pendingProof = proofItems.filter((p) => p.status !== 'disponible');
export const availablePhotos = proofItems.filter((p) => p.type === 'foto' && p.status === 'disponible');
