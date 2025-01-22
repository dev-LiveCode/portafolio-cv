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
  tags: ITags[];
}

export interface IClient {
  name: string;
  img: string;
  description: string;
}

export interface ITags {
  icon?: string;
  iconDark?: string;
  color?: string;
  text?: string;
  type?: Array<'cloud' | 'frontend' | 'backend' | 'database'>;
}

export interface IServices {
  title: string;
  subtitle: string;
  text: string;
  icon?: string;
}

export const CLIENTS: IClient[] = [
  {
    name: `Bongo Analytics`,
    img: `iconBongo.png`,
    description: `Computer systems development activities`,
  },
  {
    name: `Intevo S.A.S`,
    img: `iconIntevo.png`,
    description: `Computer systems development activities`,
  },
];

export const PROJECTS: IProject[] = [
  {
    name: `Landing Page Bongo Analytics`,
    client: CLIENTS[0],
    status: `online`,
    img: [
      `LandingBongo/Screen IPhone 14 Pro Max-portrait.png`,
      `LandingBongo/Screen IPhone 14 Pro Max-left.png`,
      `LandingBongo/Screen web-front.png`,
    ],
    type: `pago`,
    url: `https://www.bongoanalytics.com`,
    tags: [
      { icon: `fa-brands fa-angular`, color: `bg-red-500`, text: `Angular` },
      {
        icon: `fa-brands fa-square-js`,
        color: `bg-blue-500`,
        text: `TypeScript`,
      },
      {
        icon: `fa-brands fa-bootstrap`,
        color: `bg-violet-500`,
        text: `Bootstrap`,
      },
      { icon: `fa-brands fa-js`, color: `bg-yellow-500`, text: `JavaScript` },
      { color: `bg-blue-400`, text: `PrimeNG` },
      { icon: `fa-brands fa-html5`, color: `bg-orange-400`, text: `HTML` },
      { icon: `fa-brands fa-css3-alt`, color: `bg-sky-400`, text: `CSS` },
    ],
    text: `In this project, I developed a complete proposal for Bongo Analytics, designing and executing a modern and attractive landing page that reflects the essence of the brand. With a focus on user experience, I created a visually stunning and highly functional site that connects with visitors from the very first moment. The implementation was meticulous, ensuring that every detail contributed to a smooth navigation and professional presentation. In the end, the client expressed great satisfaction with the result and the positive impact the site has on their business, consolidating Bongo Analytics' presence in the digital environment.`,
  },
  {
    name: `Landing Page Loopap`,
    client: CLIENTS[1],
    status: `online`,
    img: [
      `Loopap/lupaap.co_(iPhone 14 Pro Max) recorte-portrait.png`,
      `Loopap/lupaap.co_(iPhone 14 Pro Max) recorte-left.png`,
      `Loopap/lupaap.co_-front.png`,
    ],
    type: `pago`,
    url: `https://lupaap.co/`,
    tags: [
      { icon: `fa-brands fa-js`, color: `bg-yellow-500`, text: `JavaScript` },
      { icon: `fa-brands fa-html5`, color: `bg-orange-400`, text: `HTML` },
      { icon: `fa-brands fa-css3-alt`, color: `bg-sky-400`, text: `CSS` },
      {
        icon: `fa-brands fa-bootstrap`,
        color: `bg-violet-500`,
        text: `Bootstrap`,
      },
    ],
    text: `This project was designed and developed to offer Lupaap's customers a seamless and secure user experience. The website features an intuitive login module, where users can select their specific portal and log in with ease. Every detail was carefully implemented to ensure a seamless experience tailored to customers' needs. This development reinforces Lupaap's digital presence, providing users with a reliable and professional tool from the first login.`,
  },
  {
    name: `Machine Learning y predicción de datos - Universidad Distrital Francisco Jose de Caldas`,
    client: CLIENTS[0],
    status: `online`,
    img: [`UD/ud_login-front.png`, `UD/ud_profile-front.png`],
    type: `pago`,
    url: `private`,
    tags: [
      { icon: `fa-brands fa-angular`, color: `bg-red-500`, text: `Angular` },
      {
        icon: `fa-brands fa-square-js`,
        color: `bg-blue-500`,
        text: `TypeScript`,
      },
      {
        icon: `fa-brands fa-bootstrap`,
        color: `bg-violet-500`,
        text: `Bootstrap`,
      },
      { icon: `fa-solid fa-database`, color: `bg-blue-300`, text: `MySQL` },
      { icon: `fa-brands fa-js`, color: `bg-yellow-500`, text: `JavaScript` },
      { color: `bg-blue-400`, text: `Angular Material` },
      { icon: `fa-brands fa-html5`, color: `bg-orange-400`, text: `HTML` },
      { icon: `fa-brands fa-css3-alt`, color: `bg-sky-400`, text: `CSS` },
    ],
    text: `I collaborated in the development of an innovative project for the Universidad Distrital Francisco José de Caldas, executed by Bongo Analytics, focused on machine learning and data prediction models. My role was key in the adjustment and improvement of the frontend, developed in Angular, which required implementing specific functionalities to meet the requirements of the end customer. In the backend, I optimized and transformed the existing code into an efficient REST API, facilitating the integration and data consumption for our client application. With advanced learning models in Python, the system delivers accurate predictions and high-value statistics, tailored to the traceability of students and their data.`,
  },
  {
    name: `DataDeep`,
    client: CLIENTS[1],
    status: `dev`,
    img: [
      `DataDeep/datadeep-front.png`,
      `DataDeep/Datadeep Control Panel-front.png`,
      `DataDeep/datadeep-carga-front.png`,
    ],
    type: `pago`,
    url: `private`,
    tags: [
      { icon: `fa-brands fa-angular`, color: `bg-red-500`, text: `Angular` },
      { icon: `fa-brands fa-js`, color: `bg-yellow-500`, text: `JavaScript` },
      {
        icon: `fa-brands fa-square-js`,
        color: `bg-blue-500`,
        text: `TypeScript`,
      },
      { color: `bg-blue-400`, text: `PrimeNG` },
      {
        icon: `fa-brands fa-bootstrap`,
        color: `bg-violet-500`,
        text: `Bootstrap`,
      },
      { icon: `fa-solid fa-database`, color: `bg-blue-300`, text: `MySQL` },
      { icon: `fa-brands fa-html5`, color: `bg-orange-400`, text: `HTML` },
      { icon: `fa-brands fa-css3-alt`, color: `bg-sky-400`, text: `CSS` },
    ],
    text: `I collaborated in the development of DataDeep, an innovative product designed by Bongo Analytics, aimed at offering a multitenant solution for data management and predictive analytics. This system, based on machine learning and advanced predictive models, is optimized for educational institutions and organizations that require a versatile and scalable platform.

        My role was key in the development of the frontend, built in Angular, where I implemented specific functionalities to ensure an intuitive and adaptable experience for multiple users and environments. On the backend, I implemented a REST API architecture, ensuring an efficient and scalable backend, allowing a seamless integration with different client applications. In addition, advanced learning models, developed in Python, allow you to deliver accurate predictions and personalized statistics, providing valuable insights based on traceability and end-user data.

        DataDeep not only extends the capabilities of traditional predictive analytics, but also ensures scalability and customization to meet the demands of a diversified customer base.`,
  },
];

export const SERVICES: IServices[] = [
  {
    title: `Web and mobile application development`,
    subtitle: `We transform your ideas into digital experiences.`,
    text: `We create intuitive and high performance web and mobile applications. We focus on an agile user experience and a design adapted to the needs of your customers, applying the best development practices to ensure scalability and long-term maintenance.`,
    icon: `lni-code`
  },
  {
    title: `Process integration and automation with cloud computing`,
    subtitle: `Boost the efficiency of your business with cloud solutions.`,
    text: `We implement solutions that optimize your processes by integrating cloud services. With AWS, Azure, and Google Cloud, we achieve secure deployments, scalable storage, and real-time access to information, allowing you to focus on strategic decision making.`,
    icon: `lni-cloud-check`
  },
  {
    title: `Data analysis and machine learning`,
    subtitle: `Turn your data into strategic decisions.`,
    text: `We help you discover hidden patterns in your data, facilitating informed decision making. With machine learning techniques and statistical analysis, we create customized solutions that provide valuable insights about your customers behavior and the performance of your processes.`,
    icon: `lni-bar-chart`
  },
  {
    title: `API development and microservices architecture`,
    subtitle: `We facilitate the connectivity and scalability of your systems.`,
    text: `We design robust APIs and microservices that allow seamless integration and communication between different applications. We focus on modular solutions that facilitate scalability and maintenance of your platform as your business grows.`,
    icon: `lni-code-alt`
  },
  {
    title: `Cloud architecture design for IoT solutions`,
    subtitle: `Connect devices and power your data.`,
    text: `We create Internet of Things (IoT) architectures that integrate with cloud services, capturing and analyzing real-time data from connected devices. Thus, we generate valuable information to monitor, control and optimize industrial or agricultural processes.`,
    icon: `lni-cloud-network`
  },
  {
    title: `Digital transformation consulting`,
    subtitle: `Take your business to the next level with digital solutions.`,
    text: `We guide you through the digital transformation process, helping you to implement tools and processes that optimize productivity and decision making. With a strategic approach, we adapt digital solutions to your needs, enhancing the efficiency of each area of your business.`,
    icon: `lni-laptop-phone`
  },
  {
    title: `Custom dashboard development`,
    subtitle: `Visualize your metrics in real time.`,
    text: `We design interactive dashboards that allow clear and accurate visualization of your key indicators. With user-friendly and customizable interfaces, you can easily access critical information to evaluate performance and make informed decisions.`,
    icon: `lni-pie-chart`
  },
  {
    title: `Consulting in agile methodologies`,
    subtitle: `Boost your team's productivity with agile practices.`,
    text: `We implement agile methodologies such as Scrum or Kanban, tailored to your needs, to improve the efficiency and adaptability of your team. With a focus on collaboration and continuous delivery, we achieve more agile development cycles and projects aligned with business objectives.`,
    icon: `lni-handshake`
  },
];

export const SKILLS: ITags[] = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    iconDark: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    text: 'Amazon Web Service',
    type: ["cloud"],
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
    iconDark: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
    text: 'Azure',
    type: ["cloud"],
  },
  {        
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
    iconDark: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
    text: 'Google Cloud Platform',
    type: ["cloud"],
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    iconDark: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    text: 'Tailwind CSS',
    type: ["frontend"],
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
    iconDark: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
    text: 'Bootstrap',
    type: ["frontend"],
  },
  { 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
    iconDark: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
    text: 'Angular',
    type: ["frontend"],
   },
   { 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularmaterial/angularmaterial-original.svg',
    iconDark: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularmaterial/angularmaterial-original.svg',
    text: 'Angular Material',
    type: ["frontend"],
   },
   { 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    iconDark: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    text: 'React',
    type: ["frontend"],
   },
   { 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
    iconDark: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
    text: 'Laravel',
    type: ["backend"],
   },
   { 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
    iconDark: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg',
    text: 'Nodejs',
    type: ["backend"],
   },
   { 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    iconDark: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    text: 'Java',
    type: ["backend"],
   },
   { 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    iconDark: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    text: 'Javascript',
    type: ["frontend", "backend"],
   },
   { 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg',
    iconDark: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    text: 'Typescript',
    type: ["frontend", "backend"],
   },
   { 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
    iconDark: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
    text: 'Spring',
    type: ["backend"],
   },
   { 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg',
    iconDark: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg',
    text: 'MongoDB',
    type: ["database"]
   },
   { 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg',
    iconDark: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg',
    text: 'SQLServer',
    type: ["database"]
   },
   { 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    iconDark: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    text: 'MySQL',
    type: ["database"]
   },
   { 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    iconDark: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    text: 'PostgreSQL',
    type: ["database"]
   },

];


export interface IEmail {
  subject: string,
  email: string,
  message: string
}

export interface IToast {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning'; // Determines color/icon
}