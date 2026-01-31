export const translations = {
  es: {
    // Navbar
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      contact: "Contacto",
      skipToContent: "Saltar al contenido principal",
      toggleTheme: {
        toDark: "Cambiar a modo oscuro",
        toLight: "Cambiar a modo claro",
      },
      toggleLanguage: {
        toEnglish: "Cambiar a inglés",
        toSpanish: "Cambiar a español",
      },
    },
    // Home
    home: {
      title: "Emanuel Agüero",
      subtitle: "Diseñador UX/UI y Desarrollador Web",
      description: "Creo soluciones web funcionales y atractivas. Especializado en frontend moderno, backend robusto y experiencia de usuario.",
      buttons: {
        viewProjects: "Ver mis proyectos",
        downloadCV: "Descargar CV",
        contactMe: "Contactarme",
      },
      about: {
        title: "Sobre mí",
        description: "Diseñador UX/UI, desarrollador web y profesional en experiencia de usuario",
        viewGitHub: "Ver perfil de GitHub",
      },
      techStack: {
        title: "Tecnologías y Herramientas",
        programming: "Programación",
        design: "Diseño",
      },
      whatIDo: {
        title: "¿Qué hago?",
        description: "Diseñador UX/UI y desarrollador web especializado en crear soluciones web funcionales y atractivas.",
        frontend: "Frontend moderno:",
        backend: "Backend robusto:",
        uxui: "UX/UI Design:",
        deployment: "Despliegue:",
      },
      softSkills: {
        title: "Habilidades Blandas",
        skills: [
          "Trabajo en equipo",
          "Comunicación efectiva",
          "Resolución de problemas",
          "Adaptabilidad",
          "Pensamiento crítico",
          "Gestión del tiempo",
          "Aprendizaje continuo",
          "Atención al detalle",
        ],
      },
      projects: {
        title: "Proyectos destacados",
        viewAll: "Ver todos",
        exploreAll: "Explorar todos los proyectos",
      },
      interests: {
        title: "Intereses",
        technology: "Tecnología:",
        technologyDesc: "Exploración de nuevas tecnologías y frameworks",
        design: "Diseño UX/UI:",
        designDesc: "Creación de interfaces intuitivas con Figma y Adobe",
        learning: "Aprendizaje continuo:",
        learningDesc: "Cursos online y proyectos personales",
        collaboration: "Colaboración:",
        collaborationDesc: "Trabajo en equipo y proyectos open source",
      },
    },
    // Projects
    projects: {
      title: "Proyectos",
      description: "Una selección de mis proyectos más destacados. Cada uno representa un desafío único y una solución innovadora.",
      list: {
        ticolancer: {
          description: "Plataforma de freelancers diseñada para conectar trabajadores con oportunidades de trabajo en diversos sectores. Incluye gestión de perfiles, publicación de proyectos y sistema de contratos.",
          type: "Plataforma Web",
          features: ["Autenticación", "Sistema de contratos", "Búsqueda avanzada"],
        },
        jint: {
          description: "Sistema de gestión de tareas diseñado para optimizar la productividad. Permite organizar proyectos, establecer prioridades y mejorar la colaboración en equipo.",
          type: "Aplicación Web",
          features: ["Gestión de tareas", "Prioridades", "Colaboración"],
        },
        kimchis: {
          description: "Plataforma digital creada para mejorar la experiencia gastronómica del restaurante de comida coreana. Incluye menú digital, sistema de reservas y promociones.",
          type: "Sitio Web Restaurante",
          features: ["Menú digital", "Reservas online", "Sistema de promociones"],
        },
        agueroArtesanal: {
          description: "Tienda en línea dedicada a la creación y venta de productos artesanales en madera hechos a mano. Catálogo dinámico con integración de WhatsApp para pedidos.",
          type: "E-commerce",
          features: ["Catálogo dinámico", "Integración WhatsApp", "Responsive"],
        },
      },
      individual: {
        screenshots: "Screenshots",
        features: "Características",
        technologies: "Tecnologías",
        viewRepository: "Ver repositorio",
        visitWebsite: "Visitar sitio web",
        methodology: "Metodología",
        myRole: "Mi Rol",
        results: "Resultados",
        about: "Acerca de",
        labels: {
          functionalities: "Funcionalidades",
          time: "Tiempo",
          modules: "Módulos",
        },
        ticolancer: {
          description: "Plataforma de freelancers diseñada para conectar profesionales con oportunidades de trabajo en diversos sectores.",
          about: "Ticolancer es una plataforma web completa diseñada para conectar profesionales freelancers con empresas y clientes que buscan servicios especializados. La plataforma ofrece un ecosistema robusto que incluye gestión de perfiles profesionales, publicación y búsqueda de proyectos, sistema de contratos seguros, y herramientas de comunicación integradas. Desarrollada con Laravel en el backend y React en el frontend, Ticolancer proporciona una experiencia de usuario fluida e intuitiva, permitiendo a los freelancers mostrar sus portafolios, habilidades y experiencia, mientras que los clientes pueden publicar proyectos detallados y encontrar el talento adecuado para sus necesidades. La plataforma incluye funcionalidades avanzadas como sistema de calificaciones, gestión de pagos, y seguimiento de proyectos en tiempo real.",
          features: [
            "Interfaz moderna y accesible",
            "Gestión de perfiles y portafolios",
            "Publicación y búsqueda de trabajos",
            "Seguridad en pagos y contratos",
          ],
          methodology: {
            title: "El proyecto se desarrolló siguiendo una metodología ágil con enfoque en desarrollo iterativo. Se utilizaron técnicas de diseño centrado en el usuario (UCD) para garantizar una experiencia intuitiva.",
            items: [
              "Desarrollo ágil con sprints semanales",
              "Prototipado rápido con Figma",
              "Arquitectura MVC con Laravel",
              "API RESTful",
            ],
          },
          role: "Como diseñador UX/UI y desarrollador web full-stack, fui responsable de la arquitectura completa del proyecto, desde el diseño de la base de datos hasta la implementación del frontend y backend.",
        },
        jint: {
          description: "Sistema de gestión de tareas diseñado para optimizar la productividad. Permite organizar proyectos, establecer prioridades y mejorar la colaboración en equipo.",
          about: "Jint es una aplicación web moderna de gestión de tareas desarrollada con React y Laravel. La plataforma permite a los usuarios crear, organizar y priorizar tareas de manera eficiente, con una interfaz intuitiva que facilita la productividad personal y en equipo. Incluye funcionalidades avanzadas como drag-and-drop para reorganización de tareas, sistema de prioridades visuales, múltiples vistas (lista, kanban, calendario), filtros avanzados y notificaciones. Desarrollada siguiendo metodología ágil con sprints de 2 semanas, utiliza componentes React reutilizables, API REST para comunicación asíncrona, y Context API para gestión de estado global. La aplicación está completamente funcional y optimizada para dispositivos móviles.",
          features: [
            "Creación y organización de tareas",
            "Interfaz intuitiva y optimizada",
            "Sistema de prioridades",
            "Colaboración en tiempo real",
          ],
          methodology: {
            title: "Desarrollo siguiendo metodología ágil con enfoque en iteraciones rápidas y feedback continuo.",
            items: [
              "Metodología Scrum con sprints de 2 semanas",
              "Prototipado con Figma",
              "Arquitectura modular",
              "Testing continuo",
            ],
          },
          role: "Diseñador UX/UI y desarrollador web full-stack responsable del diseño e implementación completa del sistema, incluyendo la arquitectura de datos y la experiencia de usuario.",
        },
        kimchis: {
          description: "Plataforma digital creada para mejorar la experiencia gastronómica del restaurante de comida coreana. Incluye menú digital, sistema de reservas y promociones.",
          about: "Kimchis es una plataforma web completa desarrollada con Laravel y JavaScript para mejorar la experiencia digital del restaurante de comida coreana. La plataforma incluye un menú digital interactivo con categorías y descripciones detalladas de cada platillo, sistema de reservas en línea con validación de disponibilidad en tiempo real, sección de promociones destacada para ofertas especiales, y diseño completamente responsive optimizado para dispositivos móviles. Desarrollada siguiendo metodología de prototipado rápido con feedback constante del cliente, utiliza arquitectura MVC con Laravel para organización del código, implementación de sistema de reservas con validaciones robustas, e integración de JavaScript vanilla para interactividad. La plataforma fue implementada exitosamente mejorando significativamente la experiencia digital del restaurante y facilitando el proceso de reservas para los clientes.",
          features: [
            "Menú digital interactivo",
            "Sistema de reservas en línea",
            "Promociones y descuentos exclusivos",
            "Interfaz optimizada para móviles",
          ],
          methodology: {
            title: "Desarrollo orientado a resolver necesidades específicas del restaurante, utilizando metodología de prototipado rápido y validación con el cliente.",
            items: [
              "Desarrollo iterativo con feedback constante del cliente",
              "Diseño responsive-first para experiencia móvil",
              "Arquitectura MVC con Laravel para organización del código",
              "Implementación de sistema de reservas con validaciones",
            ],
          },
          role: "Fui responsable del desarrollo completo de la plataforma, desde el análisis de requisitos hasta la implementación y despliegue, trabajando directamente con el cliente.",
        },
        agueroArtesanal: {
          description: "Tienda en línea dedicada a la creación y venta de productos artesanales en madera hechos a mano. Catálogo dinámico con integración de WhatsApp para pedidos.",
          about: "Agüero Artesanal es una tienda en línea completa desarrollada con WordPress y Elementor para la venta de productos artesanales en madera hechos a mano. La plataforma incluye un catálogo dinámico con galería de imágenes de alta calidad para cada producto, sistema de filtros por categoría para fácil navegación, integración directa con WhatsApp para contacto inmediato y pedidos personalizados, diseño completamente responsive optimizado para todos los dispositivos móviles, y uso de WordPress para facilitar la gestión de contenido por parte del cliente. Desarrollada siguiendo metodología de diseño y desarrollo iterativo, aprovecha las capacidades de CMS para crear una solución eficiente y fácil de mantener. El sitio está completamente operativo y desplegado en Pantheon, permitiendo al cliente gestionar fácilmente su contenido y recibir consultas a través de WhatsApp. La solución es escalable y fácil de mantener.",
          features: [
            "Catálogo dinámico de productos con filtros por categoría",
            "Integración con WhatsApp para contacto rápido y pedidos",
            "Sitio responsivo optimizado para dispositivos móviles",
            "Construido con WordPress + plugins personalizados",
          ],
          methodology: {
            title: "Desarrollo basado en WordPress utilizando metodología de diseño y desarrollo iterativo, aprovechando las capacidades de CMS para crear una solución eficiente y fácil de mantener.",
            items: [
              "Desarrollo con WordPress y personalización de temas",
              "Uso de Elementor para diseño visual sin código",
              "Implementación de Gutenberg para contenido dinámico",
              "Diseño responsive con enfoque mobile-first",
            ],
          },
          role: "Desarrollé completamente la tienda en línea, desde la configuración inicial de WordPress hasta la personalización de plugins y la integración con WhatsApp para pedidos.",
        },
      },
    },
    // Contact
    contact: {
      title: "Contacto",
      description: "¿Tienes un proyecto en mente? Estoy disponible para colaborar. Elige el canal que prefieras.",
      methods: {
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        whatsapp: "WhatsApp",
      },
    },
    // Footer
    footer: {
      location: "Palmares, Costa Rica",
      rights: "Todos los derechos reservados",
    },
  },
  en: {
    // Navbar
    nav: {
      home: "Home",
      projects: "Projects",
      contact: "Contact",
      skipToContent: "Skip to main content",
      toggleTheme: {
        toDark: "Switch to dark mode",
        toLight: "Switch to light mode",
      },
      toggleLanguage: {
        toEnglish: "Switch to English",
        toSpanish: "Switch to Spanish",
      },
    },
    // Home
    home: {
      title: "Emanuel Agüero",
      subtitle: "UX/UI Designer and Web Developer",
      description: "I create functional and attractive web solutions. Specialized in modern frontend, robust backend and user experience.",
      buttons: {
        viewProjects: "View my projects",
        downloadCV: "Download CV",
        contactMe: "Contact me",
      },
      about: {
        title: "About me",
        description: "UX/UI designer, web developer and user experience professional",
        viewGitHub: "View GitHub profile",
      },
      techStack: {
        title: "Technologies and Tools",
        programming: "Programming",
        design: "Design",
      },
      whatIDo: {
        title: "What I do",
        description: "UX/UI designer and web developer specialized in creating functional and attractive web solutions.",
        frontend: "Modern frontend:",
        backend: "Robust backend:",
        uxui: "UX/UI Design:",
        deployment: "Deployment:",
      },
      softSkills: {
        title: "Soft Skills",
        skills: [
          "Teamwork",
          "Effective communication",
          "Problem solving",
          "Adaptability",
          "Critical thinking",
          "Time management",
          "Continuous learning",
          "Attention to detail",
        ],
      },
      projects: {
        title: "Featured projects",
        viewAll: "View all",
        exploreAll: "Explore all projects",
      },
      interests: {
        title: "Interests",
        technology: "Technology:",
        technologyDesc: "Exploring new technologies and frameworks",
        design: "UX/UI Design:",
        designDesc: "Creating intuitive interfaces with Figma and Adobe",
        learning: "Continuous learning:",
        learningDesc: "Online courses and personal projects",
        collaboration: "Collaboration:",
        collaborationDesc: "Teamwork and open source projects",
      },
    },
    // Projects
    projects: {
      title: "Projects",
      description: "A selection of my most outstanding projects. Each one represents a unique challenge and an innovative solution.",
      list: {
        ticolancer: {
          description: "Freelancer platform designed to connect workers with job opportunities in various sectors. Includes profile management, project posting and contract system.",
          type: "Web Platform",
          features: ["Authentication", "Contract system", "Advanced search"],
        },
        jint: {
          description: "Task management system designed to optimize productivity. Allows organizing projects, setting priorities and improving team collaboration.",
          type: "Web Application",
          features: ["Task management", "Priorities", "Collaboration"],
        },
        kimchis: {
          description: "Digital platform created to improve the gastronomic experience of the Korean restaurant. Includes digital menu, reservation system and promotions.",
          type: "Restaurant Website",
          features: ["Digital menu", "Online reservations", "Promotion system"],
        },
        agueroArtesanal: {
          description: "Online store dedicated to the creation and sale of handmade wood artisanal products. Dynamic catalog with WhatsApp integration for orders.",
          type: "E-commerce",
          features: ["Dynamic catalog", "WhatsApp integration", "Responsive"],
        },
      },
      individual: {
        screenshots: "Screenshots",
        features: "Features",
        technologies: "Technologies",
        viewRepository: "View repository",
        visitWebsite: "Visit website",
        methodology: "Methodology",
        myRole: "My Role",
        results: "Results",
        about: "About",
        labels: {
          functionalities: "Functionalities",
          time: "Time",
          modules: "Modules",
        },
        ticolancer: {
          description: "Freelancer platform designed to connect professionals with job opportunities in various sectors.",
          about: "Ticolancer is a complete web platform designed to connect freelance professionals with companies and clients seeking specialized services. The platform offers a robust ecosystem that includes professional profile management, project posting and search, secure contract system, and integrated communication tools. Developed with Laravel on the backend and React on the frontend, Ticolancer provides a smooth and intuitive user experience, allowing freelancers to showcase their portfolios, skills and experience, while clients can post detailed projects and find the right talent for their needs. The platform includes advanced features such as rating system, payment management, and real-time project tracking.",
          features: [
            "Modern and accessible interface",
            "Profile and portfolio management",
            "Job posting and search",
            "Payment and contract security",
          ],
          methodology: {
            title: "The project was developed following an agile methodology with a focus on iterative development. User-centered design (UCD) techniques were used to ensure an intuitive experience.",
            items: [
              "Agile development with weekly sprints",
              "Rapid prototyping with Figma",
              "MVC architecture with Laravel",
              "RESTful API",
            ],
          },
          role: "As a UX/UI designer and full-stack web developer, I was responsible for the complete architecture of the project, from database design to frontend and backend implementation.",
        },
        jint: {
          description: "Task management system designed to optimize productivity. Allows organizing projects, setting priorities and improving team collaboration.",
          about: "Jint is a modern web task management application developed with React and Laravel. The platform allows users to create, organize and prioritize tasks efficiently, with an intuitive interface that facilitates personal and team productivity. It includes advanced features such as drag-and-drop for task reorganization, visual priority system, multiple views (list, kanban, calendar), advanced filters and notifications. Developed following agile methodology with 2-week sprints, it uses reusable React components, REST API for asynchronous communication, and Context API for global state management. The application is fully functional and optimized for mobile devices.",
          features: [
            "Task creation and organization",
            "Intuitive and optimized interface",
            "Priority system",
            "Real-time collaboration",
          ],
          methodology: {
            title: "Development following agile methodology with a focus on rapid iterations and continuous feedback.",
            items: [
              "Scrum methodology with 2-week sprints",
              "Prototyping with Figma",
              "Modular architecture",
              "Continuous testing",
            ],
          },
          role: "UX/UI designer and full-stack web developer responsible for the complete design and implementation of the system, including data architecture and user experience.",
        },
        kimchis: {
          description: "Digital platform created to improve the gastronomic experience of the Korean restaurant. Includes digital menu, reservation system and promotions.",
          about: "Kimchis is a complete web platform developed with Laravel and JavaScript to improve the digital experience of the Korean restaurant. The platform includes an interactive digital menu with categories and detailed descriptions of each dish, online reservation system with real-time availability validation, featured promotions section for special offers, and fully responsive design optimized for mobile devices. Developed following rapid prototyping methodology with constant client feedback, it uses MVC architecture with Laravel for code organization, robust reservation system implementation with validations, and vanilla JavaScript integration for interactivity. The platform was successfully implemented significantly improving the restaurant's digital experience and facilitating the reservation process for customers.",
          features: [
            "Interactive digital menu",
            "Online reservation system",
            "Exclusive promotions and discounts",
            "Mobile-optimized interface",
          ],
          methodology: {
            title: "Development focused on solving specific restaurant needs, using rapid prototyping methodology and client validation.",
            items: [
              "Iterative development with constant client feedback",
              "Responsive-first design for mobile experience",
              "MVC architecture with Laravel for code organization",
              "Reservation system implementation with validations",
            ],
          },
          role: "I was responsible for the complete development of the platform, from requirements analysis to implementation and deployment, working directly with the client.",
        },
        agueroArtesanal: {
          description: "Online store dedicated to the creation and sale of handmade wood artisanal products. Dynamic catalog with WhatsApp integration for orders.",
          about: "Agüero Artesanal is a complete online store developed with WordPress and Elementor for the sale of handmade wood artisanal products. The platform includes a dynamic catalog with high-quality image gallery for each product, category filter system for easy navigation, direct WhatsApp integration for immediate contact and custom orders, fully responsive design optimized for all mobile devices, and use of WordPress to facilitate content management by the client. Developed following iterative design and development methodology, it leverages CMS capabilities to create an efficient and easy-to-maintain solution. The site is fully operational and deployed on Pantheon, allowing the client to easily manage their content and receive inquiries through WhatsApp. The solution is scalable and easy to maintain.",
          features: [
            "Dynamic product catalog with category filters",
            "WhatsApp integration for quick contact and orders",
            "Responsive site optimized for mobile devices",
            "Built with WordPress + custom plugins",
          ],
          methodology: {
            title: "WordPress-based development using iterative design and development methodology, leveraging CMS capabilities to create an efficient and easy-to-maintain solution.",
            items: [
              "WordPress development and theme customization",
              "Use of Elementor for visual design without code",
              "Gutenberg implementation for dynamic content",
              "Responsive design with mobile-first approach",
            ],
          },
          role: "I completely developed the online store, from initial WordPress setup to plugin customization and WhatsApp integration for orders.",
        },
      },
    },
    // Contact
    contact: {
      title: "Contact",
      description: "Do you have a project in mind? I'm available to collaborate. Choose the channel you prefer.",
      methods: {
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        whatsapp: "WhatsApp",
      },
    },
    // Footer
    footer: {
      location: "Palmares, Costa Rica",
      rights: "All rights reserved",
    },
  },
};
