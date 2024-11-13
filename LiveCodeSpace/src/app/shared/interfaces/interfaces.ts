export interface IMenu {
    path: string;
    text: string;
}

export interface IProject {
    type: string;
    name: string;
    status: string;
    url: string;
    img: string[];
    text: string;
    client: IClient | undefined;
    tags: ITags[]
}

export interface IClient {
    name: string;
    img: string;
    description: string;
}

export interface ITags {
    icon: string | null,
    color: string,
    text: string
}

export const CLIENTS: IClient[] = [
    {name: 'Bongo Analytics', img: 'iconBongo.png', description: 'Actividades de desarrollo de sistemas informaticos'},
    {name: 'Intevo S.A.S', img: 'iconIntevo.png', description: 'Actividades de desarrollo de sistemas informaticos'},
]

export const PROJECTS: IProject[] = [
    {
        name: 'Landing Page Bongo Analytics', 
        client: CLIENTS[0], 
        status: 'online', 
        img: ['LandingBongo/Screen IPhone 14 Pro Max-portrait.png', 'LandingBongo/Screen IPhone 14 Pro Max-left.png', 'LandingBongo/Screen web-front.png'], 
        type: 'pago', 
        url: 'https://www.bongoanalytics.com/landing',
        tags: [
            {icon: 'fa-brands fa-angular', color: 'bg-red-500', text: 'Angular'},
            {icon: 'fa-brands fa-square-js', color: 'bg-blue-500', text: 'TypeScript'},
            {icon: 'fa-brands fa-bootstrap', color: 'bg-violet-500', text: 'Bootstrap'},
            {icon: 'fa-brands fa-js', color: 'bg-yellow-500', text: 'JavaScript'},
            {icon: null, color: 'bg-blue-400', text: 'PrimeNG'},
            {icon: 'fa-brands fa-html5', color: 'bg-orange-400', text: 'HTML'},
            {icon: 'fa-brands fa-css3-alt', color: 'bg-sky-400', text: 'CSS'},
        ],
        text: 'En este proyecto, desarrollé una propuesta completa para Bongo Analytics, diseñando y ejecutando una landing page moderna y atractiva que refleja la esencia de la marca. Con un enfoque en la experiencia del usuario, creé un sitio visualmente impactante y altamente funcional que conecta con los visitantes desde el primer momento. La implementación fue meticulosa, asegurando que cada detalle contribuyera a una navegación fluida y una presentación profesional. Al final, el cliente expresó una gran satisfacción con el resultado y el impacto positivo que la página tiene en su negocio, consolidando la presencia de Bongo Analytics en el entorno digital.'
    },
    {
        name: 'Landing Page Loopap', 
        client: CLIENTS[1], 
        status: 'online', 
        img: ['Loopap/lupaap.co_(iPhone 14 Pro Max) recorte-portrait.png', 'Loopap/lupaap.co_(iPhone 14 Pro Max) recorte-left.png', 'Loopap/lupaap.co_-front.png'], 
        type: 'pago', 
        url: 'https://lupaap.co/',
        tags: [
            {icon: 'fa-brands fa-js', color: 'bg-yellow-500', text: 'JavaScript'},
            {icon: 'fa-brands fa-html5', color: 'bg-orange-400', text: 'HTML'},
            {icon: 'fa-brands fa-css3-alt', color: 'bg-sky-400', text: 'CSS'},
            {icon: 'fa-brands fa-bootstrap', color: 'bg-violet-500', text: 'Bootstrap'},
        ],
        text: 'Este proyecto fue diseñado y desarrollado para ofrecer a los clientes de Lupaap una experiencia de usuario fluida y segura. La página web cuenta con un módulo de inicio de sesión intuitivo, donde los usuarios pueden seleccionar su portal específico e iniciar sesión con facilidad. Cada detalle fue cuidadosamente implementado para asegurar una experiencia sin complicaciones y adaptada a las necesidades de los clientes. Este desarrollo refuerza la presencia digital de Lupaap, proporcionando a los usuarios una herramienta confiable y profesional desde el primer acceso.'
    },
    {
        name: 'Machine Learning y predicción de datos - Universidad Distrital Francisco Jose de Caldas', 
        client: CLIENTS[0], 
        status: 'online', 
        img: ['UD/ud_login-front.png', 'UD/ud_profile-front.png'], 
        type: 'pago', 
        url: 'private',
        tags: [
            {icon: 'fa-brands fa-angular', color: 'bg-red-500', text: 'Angular'},
            {icon: 'fa-brands fa-square-js', color: 'bg-blue-500', text: 'TypeScript'},
            {icon: 'fa-brands fa-bootstrap', color: 'bg-violet-500', text: 'Bootstrap'},
            {icon: 'fa-solid fa-database', color: 'bg-blue-300', text: 'MySQL'},
            {icon: 'fa-brands fa-js', color: 'bg-yellow-500', text: 'JavaScript'},
            {icon: null, color: 'bg-blue-400', text: 'Angular Material'},
            {icon: 'fa-brands fa-html5', color: 'bg-orange-400', text: 'HTML'},
            {icon: 'fa-brands fa-css3-alt', color: 'bg-sky-400', text: 'CSS'},
        ],
        text: 'Colaboré en el desarrollo de un proyecto innovador para la Universidad Distrital Francisco José de Caldas, ejecutado por Bongo Analytics, enfocado en machine learning y modelos de predicción de datos. Mi rol fue clave en el ajuste y mejora del frontend, desarrollado en Angular, que requería implementar funcionalidades específicas para satisfacer los requerimientos del cliente final. En el backend, optimicé y transformé el código existente en una API REST eficiente, facilitando la integración y consumo de datos para nuestra aplicación cliente. Con modelos avanzados de aprendizaje en Python, el sistema entrega predicciones precisas y estadísticas de alto valor, adaptadas a la trazabilidad de los estudiantes y sus datos.'
    },
    {
        name: 'DataDeep', 
        client: CLIENTS[1], 
        status: 'dev', 
        img: ['DataDeep/datadeep-front.png', 'DataDeep/Datadeep Control Panel-front.png', 'DataDeep/datadeep-carga-front.png'], 
        type: 'pago', 
        url: 'private',
        tags: [
            {icon: 'fa-brands fa-angular', color: 'bg-red-500', text: 'Angular'},
            {icon: 'fa-brands fa-js', color: 'bg-yellow-500', text: 'JavaScript'},
            {icon: 'fa-brands fa-square-js', color: 'bg-blue-500', text: 'TypeScript'},
            {icon: null, color: 'bg-blue-400', text: 'PrimeNG'},
            {icon: 'fa-brands fa-bootstrap', color: 'bg-violet-500', text: 'Bootstrap'},
            {icon: 'fa-solid fa-database', color: 'bg-blue-300', text: 'MySQL'},
            {icon: 'fa-brands fa-html5', color: 'bg-orange-400', text: 'HTML'},
            {icon: 'fa-brands fa-css3-alt', color: 'bg-sky-400', text: 'CSS'},
        ],
        text: 'pendiente'
    },
]