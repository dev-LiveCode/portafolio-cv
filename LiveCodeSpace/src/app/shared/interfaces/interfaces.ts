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
    icon: string,
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
        img: ['', '', ''], 
        type: 'dev', 
        url: 'https://www.bongoanalytics.com/landing',
        tags: [
            {icon: 'angular', color: '#red', text: 'Angular v18'},
            {icon: 'ngPrime', color: '#blue', text: 'Prime NG v17'},
            {icon: 'typescript', color: '#blue', text: 'Typescript'},
            {icon: 'html', color: '#orange', text: 'HTML'},
            {icon: 'css', color: '#orange', text: 'CSS'},
            {icon: 'bootstrap', color: '#indigo', text: 'Bootstrap'}
        ],
        text: 'En este proyecto, desarrollé una propuesta completa para Bongo Analytics, diseñando y ejecutando una landing page moderna y atractiva que refleja la esencia de la marca. Con un enfoque en la experiencia del usuario, creé un sitio visualmente impactante y altamente funcional que conecta con los visitantes desde el primer momento. La implementación fue meticulosa, asegurando que cada detalle contribuyera a una navegación fluida y una presentación profesional. Al final, el cliente expresó una gran satisfacción con el resultado y el impacto positivo que la página tiene en su negocio, consolidando la presencia de Bongo Analytics en el entorno digital.'
    },
    {
        name: 'Landing Page Loopap', 
        client: CLIENTS[0], 
        status: 'online', 
        img: ['', '', ''], 
        type: 'dev', 
        url: 'https://lupaap.co/',
        tags: [
            {icon: 'angular', color: '#red', text: 'Angular v18'},
            {icon: 'ngPrime', color: '#blue', text: 'Prime NG v17'},
            {icon: 'typescript', color: '#blue', text: 'Typescript'},
            {icon: 'html', color: '#orange', text: 'HTML'},
            {icon: 'css', color: '#orange', text: 'CSS'},
            {icon: 'bootstrap', color: '#indigo', text: 'Bootstrap'}
        ],
        text: 'En este proyecto, desarrollé una propuesta completa para Bongo Analytics, diseñando y ejecutando una landing page moderna y atractiva para el producto. Con un enfoque en la experiencia del usuario, creé un sitio visualmente impactante y altamente funcional que conecta con los visitantes desde el primer momento. La implementación fue meticulosa, asegurando que cada detalle contribuyera a una navegación fluida y una presentación profesional. Al final, el cliente expresó una gran satisfacción con el resultado y el impacto positivo que la página tiene en su negocio.'
    },
]