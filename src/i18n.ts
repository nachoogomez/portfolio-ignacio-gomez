import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	es: {
		translation: {
			// Hero section
			"hero.greeting": "Hola, soy Ignacio Gomez",
			"hero.greeting.prefix": "Hola, soy",
			"hero.title": "Desarrollador Full Stack",
			"hero.description":
				"Desarrollador de software Full Stack con experiencia en soporte IT. Especializado en MERN stack, arquitecturas de microservicios y AWS.",
			"hero.available": "Disponible para nuevas oportunidades",
			"hero.connect": "Conectemos",
			"hero.downloadCV": "Descargar CV",

			// About section
			"about.title": "Sobre mí",
			"about.subtitle": "De la infraestructura al código",
			"about.paragraph1":
				"Soy un desarrollador Full Stack en formación con una pasión genuina por la tecnología y el aprendizaje constante. Actualmente curso el último año de la carrera de Desarrollo de Software Full Stack, donde me especializo en el stack MERN y arquitecturas modernas.",
			"about.paragraph1.highlight": "pasión genuina por la tecnología",
			"about.paragraph2":
				"Mi background en soporte IT me brindó una perspectiva única: entiendo tanto la infraestructura como las necesidades reales de los usuarios. Esta experiencia me permite desarrollar soluciones que no solo funcionan técnicamente, sino que realmente resuelven problemas.",
			"about.paragraph2.highlight": "soporte IT",
			"about.paragraph3":
				"He trabajado con tecnologías como React, Node.js, NestJS, MongoDB y PostgreSQL, implementando desde interfaces de usuario hasta arquitecturas de microservicios. También tengo certificaciones en AWS y experiencia con Docker.",
			"about.paragraph3.highlight1":
				"React, Node.js, NestJS, MongoDB y PostgreSQL",
			"about.paragraph3.highlight2": "AWS",
			"about.paragraph4":
				"Busco mi primera oportunidad como desarrollador Junior o Trainee para seguir creciendo, enfrentar nuevos desafíos y aportar mi proactividad y capacidad de resolución de problemas a un equipo dinámico.",
			"about.skills.title": "Skills",
			"about.skills.label": "HABILIDADES TÉCNICAS",
			"about.skills.subtitle": "Experticia que construye el futuro",
			"about.skill1.title": "Desarrollo Full Stack",
			"about.skill1.description":
				"Dominio del stack MERN y experiencia con Vue.js, Angular y TypeScript",
			"about.skill2.title": "Arquitectura de Software",
			"about.skill2.description":
				"Implementación de microservicios con NestJS, Docker y bases de datos SQL/NoSQL",
			"about.skill3.title": "Cloud & DevOps",
			"about.skill3.description":
				"Certificación en AWS y experiencia en despliegue de aplicaciones en la nube",
			"about.skill4.title": "Soporte IT",
			"about.skill4.description":
				"Background sólido en infraestructura, redes y automatización de procesos",

			// Projects section
			"projects.title": "Proyectos Destacados",
			"projects.featured": "Destacado",
			"projects.code": "Código",
			"projects.demo": "Demo",
			"projects.viewMore": "Ver más proyectos en GitHub",
			"projects.project1.title": "ITS-Microservicio + Frontend Angular",
			"projects.project1.description":
				"Arquitectura de microservicios para un sistema de gestión empresarial desarrollado como proyecto académico. Implementa tres servicios independientes: gestión de facturas, productos y usuarios, cada uno con su propia base de datos (PostgreSQL, MongoDB, MySQL) siguiendo principios de arquitectura distribuida.",
			"projects.project2.title": "React Native Ricky Morty App",
			"projects.project2.description":
				"Aplicación móvil multiplataforma que consume la API de Rick and Morty para explorar el multiverso. Incluye exploración de personajes con filtros, sistema de favoritos con persistencia local, estadísticas del universo, gestión de conectividad y tema personalizable. Primera app completa con Expo.",
			"projects.project3.title": "Quadra",
			"projects.project3.description":
				"Workspace personal all-in-one que integra gestión de eventos (5 vistas de calendario), tablero kanban de tareas, editor de texto enriquecido con carpetas, y planificación de bloques semanales recurrentes. Dashboard centralizado con widgets. Autenticación con Supabase y rutas protegidas por middleware.",

			// Contact section
			"contact.title": "Construyamos algo increíble juntos",
			"contact.subtitle":
				"¿Tienes un proyecto en mente o buscas un perfil técnico para tu equipo? Hablemos de cómo puedo aportar valor a tu visión.",
			"contact.name": "Nombre",
			"contact.email": "Email",
			"contact.message": "Mensaje",
			"contact.send": "Enviar mensaje",
			"contact.sending": "Enviando...",
			"contact.success": "¡Mensaje enviado con éxito! Te responderé pronto.",
			"contact.error":
				"Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.",
			"contact.location": "Ubicación",
			"contact.locationValue": "Argentina / Remoto",
			"contact.namePlaceholder": "Tu nombre",
			"contact.emailPlaceholder": "tu@email.com",
			"contact.messagePlaceholder": "¿En qué puedo ayudarte?",

			// Footer section
			"footer.copyright": "© 2025 IG. Todos los derechos reservados.",
		},
	},
	en: {
		translation: {
			// Hero section
			"hero.greeting": "Hi, I'm Ignacio Gomez",
			"hero.greeting.prefix": "Hi, I'm",
			"hero.title": "Full Stack Developer",
			"hero.description":
				"Software developer Full Stack with IT support experience. Specialized in MERN stack, microservices architectures, and AWS.",
			"hero.available": "Available for new opportunities",
			"hero.connect": "Let's Connect",
			"hero.downloadCV": "Download CV",

			// About section
			"about.title": "About me",
			"about.subtitle": "From infrastructure to code",
			"about.paragraph1":
				"I am a Full Stack developer in training with a genuine passion for technology and constant learning. I am currently in my final year of the Full Stack Software Development degree, where I specialize in the MERN stack and modern architectures.",
			"about.paragraph1.highlight": "genuine passion for technology",
			"about.paragraph2":
				"My background in IT support gave me a unique perspective: I understand both infrastructure and real user needs. This experience allows me to develop solutions that not only work technically, but actually solve problems.",
			"about.paragraph2.highlight": "IT support",
			"about.paragraph3":
				"I have worked with technologies such as React, Node.js, NestJS, MongoDB and PostgreSQL, implementing everything from user interfaces to microservices architectures. I also have AWS certifications and experience with Docker.",
			"about.paragraph3.highlight1":
				"React, Node.js, NestJS, MongoDB and PostgreSQL",
			"about.paragraph3.highlight2": "AWS",
			"about.paragraph4":
				"I am looking for my first opportunity as a Junior or Trainee developer to continue growing, face new challenges and contribute my proactivity and problem-solving skills to a dynamic team.",
			"about.skills.title": "Skills",
			"about.skills.label": "TECHNICAL SKILLS",
			"about.skills.subtitle": "Expertise that builds the future",
			"about.skill1.title": "Full Stack Development",
			"about.skill1.description":
				"MERN stack mastery and experience with Vue.js, Angular and TypeScript",
			"about.skill2.title": "Software Architecture",
			"about.skill2.description":
				"Implementation of microservices with NestJS, Docker and SQL/NoSQL databases",
			"about.skill3.title": "Cloud & DevOps",
			"about.skill3.description":
				"AWS certification and experience deploying applications in the cloud",
			"about.skill4.title": "IT Support",
			"about.skill4.description":
				"Strong background in infrastructure, networking and process automation",

			// Projects section
			"projects.title": "Featured Projects",
			"projects.featured": "Featured",
			"projects.code": "Code",
			"projects.demo": "Demo",
			"projects.viewMore": "View more projects on GitHub",
			"projects.project1.title": "ITS-Microservice + Frontend Angular",
			"projects.project1.description":
				"Microservices architecture for a business management system developed as an academic project. It implements three independent services: invoice, product, and user management, each with its own database (PostgreSQL, MongoDB, MySQL) following distributed architecture principles.",
			"projects.project2.title": "React Native Rick & Morty App",
			"projects.project2.description":
				"Multi-platform mobile application that consumes the Rick and Morty API to explore the multiverse. It includes character exploration with filters, favorites system with local persistence, universe statistics, connectivity management, and customizable theme. First complete app with Expo.",
			"projects.project3.title": "Quadra",
			"projects.project3.description":
				"All-in-one personal workspace combining event management (5 calendar views), kanban task board, rich text editor with folder organization, and recurring weekly schedule planning. Centralized widget dashboard with Supabase authentication and middleware-protected routes.",

			// Contact section
			"contact.title": "Let's build something incredible together",
			"contact.subtitle":
				"Have a project in mind or looking for a technical profile for your team? Let's talk about how I can add value to your vision.",
			"contact.name": "Name",
			"contact.email": "Email",
			"contact.message": "Message",
			"contact.send": "Send message",
			"contact.sending": "Sending...",
			"contact.success":
				"Message sent successfully! I'll get back to you soon.",
			"contact.error":
				"There was an error sending the message. Please try again.",
			"contact.location": "Location",
			"contact.locationValue": "Madrid, Spain / Remote",
			"contact.namePlaceholder": "Your name",
			"contact.emailPlaceholder": "your@email.com",
			"contact.messagePlaceholder": "How can I help you?",

			// Footer section
			"footer.copyright": "© 2025 IG. All rights reserved.",
		},
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "es", // idioma por defecto
	fallbackLng: "es",
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
