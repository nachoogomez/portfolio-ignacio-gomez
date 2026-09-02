import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const SUPPORTED_LANGUAGES = ["es", "en"] as const;
type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const DEFAULT_LANGUAGE: SupportedLanguage = "es";

const resources = {
	es: {
		translation: {
			// Shared
			"common.loading": "Cargando…",

			// Navigation
			"nav.skills": "Skills",
			"nav.projects": "Proyectos",
			"nav.about": "Sobre mí",
			"nav.contact": "Contacto",
			"nav.skipToContent": "Saltar al contenido",
			"nav.switchLanguage": "Switch to English",
			"nav.changeTheme": "Cambiar tema",
			"theme.light": "Claro",
			"theme.dark": "Oscuro",
			"theme.system": "Sistema",

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
				"Soy un desarrollador Full Stack en formación con una <strong>pasión genuina por la tecnología</strong> y el aprendizaje constante. Actualmente curso el último año de la carrera de Desarrollo de Software Full Stack, donde me especializo en el stack MERN y arquitecturas modernas.",
			"about.paragraph2":
				"Mi background en <strong>soporte IT</strong> me brindó una perspectiva única: entiendo tanto la infraestructura como las necesidades reales de los usuarios. Esta experiencia me permite desarrollar soluciones que no solo funcionan técnicamente, sino que realmente resuelven problemas.",
			"about.paragraph3":
				"He trabajado con tecnologías como <strong>React, Node.js, NestJS, MongoDB y PostgreSQL</strong>, implementando desde interfaces de usuario hasta arquitecturas de microservicios. También tengo certificaciones en <strong>AWS</strong> y experiencia con Docker.",
			"about.paragraph4":
				"Busco mi primera oportunidad como desarrollador Junior o Trainee para seguir creciendo, enfrentar nuevos desafíos y aportar mi proactividad y capacidad de resolución de problemas a un equipo dinámico.",
			"about.skills.title": "Skills",
			"about.skills.label": "Habilidades técnicas",
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
			"projects.title": "Proyectos destacados",
			"projects.subtitle": "Del prototipo a producción",
			"projects.featured": "Destacado",
			"projects.code": "Código",
			"projects.demo": "Demo",
			"projects.visit": "Visitar sitio",
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
			"projects.project4.title": "JL Group — Landing Page Freelance",
			"projects.project4.description":
				"Proyecto freelance: landing page corporativa responsive para un cliente real, entregada en producción.",
			"projects.project5.title": "Programadores Argentina",
			"projects.project5.description":
				"Contribución al rediseño del sitio principal de la plataforma — la comunidad de desarrolladores más grande de Argentina — implementando y mejorando múltiples features de frontend.",

			// Contact section
			"contact.title": "Construyamos algo increíble juntos",
			"contact.subtitle":
				"¿Tienes un proyecto en mente o buscas un perfil técnico para tu equipo? Hablemos de cómo puedo aportar valor a tu visión.",
			"contact.name": "Nombre",
			"contact.email": "Email",
			"contact.message": "Mensaje",
			"contact.send": "Enviar mensaje",
			"contact.sending": "Enviando…",
			"contact.success": "¡Mensaje enviado con éxito! Te responderé pronto.",
			"contact.error":
				"No se pudo enviar el mensaje. Revisá tu conexión e intentá de nuevo, o escribime a ignaciogomezdev@gmail.com.",
			"contact.location": "Ubicación",
			"contact.locationValue": "Argentina / Remoto",
			"contact.namePlaceholder": "Tu nombre…",
			"contact.emailPlaceholder": "tu@email.com",
			"contact.messagePlaceholder": "¿En qué puedo ayudarte?…",

			// Footer section
			"footer.copyright": "© 2025 IG. Todos los derechos reservados.",
		},
	},
	en: {
		translation: {
			// Shared
			"common.loading": "Loading…",

			// Navigation
			"nav.skills": "Skills",
			"nav.projects": "Projects",
			"nav.about": "About",
			"nav.contact": "Contact",
			"nav.skipToContent": "Skip to content",
			"nav.switchLanguage": "Cambiar a español",
			"nav.changeTheme": "Change theme",
			"theme.light": "Light",
			"theme.dark": "Dark",
			"theme.system": "System",

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
				"I am a Full Stack developer in training with a <strong>genuine passion for technology</strong> and constant learning. I am currently in my final year of the Full Stack Software Development degree, where I specialize in the MERN stack and modern architectures.",
			"about.paragraph2":
				"My background in <strong>IT support</strong> gave me a unique perspective: I understand both infrastructure and real user needs. This experience allows me to develop solutions that not only work technically, but actually solve problems.",
			"about.paragraph3":
				"I have worked with technologies such as <strong>React, Node.js, NestJS, MongoDB and PostgreSQL</strong>, implementing everything from user interfaces to microservices architectures. I also have <strong>AWS</strong> certifications and experience with Docker.",
			"about.paragraph4":
				"I am looking for my first opportunity as a Junior or Trainee developer to continue growing, face new challenges and contribute my proactivity and problem-solving skills to a dynamic team.",
			"about.skills.title": "Skills",
			"about.skills.label": "Technical skills",
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
			"projects.title": "Featured projects",
			"projects.subtitle": "From prototype to production",
			"projects.featured": "Featured",
			"projects.code": "Code",
			"projects.demo": "Demo",
			"projects.visit": "Visit site",
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
			"projects.project4.title": "JL Group — Freelance Landing Page",
			"projects.project4.description":
				"Freelance project: responsive corporate landing page for a real client, delivered in production.",
			"projects.project5.title": "Programadores Argentina",
			"projects.project5.description":
				"Contributed to the redesign of the platform's main site — Argentina's largest developer community — implementing and improving multiple frontend features.",

			// Contact section
			"contact.title": "Let's build something incredible together",
			"contact.subtitle":
				"Have a project in mind or looking for a technical profile for your team? Let's talk about how I can add value to your vision.",
			"contact.name": "Name",
			"contact.email": "Email",
			"contact.message": "Message",
			"contact.send": "Send message",
			"contact.sending": "Sending…",
			"contact.success":
				"Message sent successfully! I'll get back to you soon.",
			"contact.error":
				"The message could not be sent. Check your connection and try again, or email me at ignaciogomezdev@gmail.com.",
			"contact.location": "Location",
			"contact.locationValue": "Argentina / Remote",
			"contact.namePlaceholder": "Your name…",
			"contact.emailPlaceholder": "your@email.com",
			"contact.messagePlaceholder": "How can I help you?…",

			// Footer section
			"footer.copyright": "© 2025 IG. All rights reserved.",
		},
	},
};

const isSupportedLanguage = (value: string): value is SupportedLanguage =>
	SUPPORTED_LANGUAGES.includes(value as SupportedLanguage);

const readStoredLanguage = (): SupportedLanguage | null => {
	try {
		const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
		return stored && isSupportedLanguage(stored) ? stored : null;
	} catch {
		return null;
	}
};

/** Explicit choice wins; otherwise fall back to what the browser reports. */
const detectLanguage = (): SupportedLanguage => {
	const stored = readStoredLanguage();
	if (stored) {
		return stored;
	}

	const candidates = navigator.languages?.length
		? navigator.languages
		: [navigator.language];

	for (const candidate of candidates) {
		const base = candidate.split("-")[0]?.toLowerCase();
		if (base && isSupportedLanguage(base)) {
			return base;
		}
	}

	return DEFAULT_LANGUAGE;
};

i18n.use(initReactI18next).init({
	resources,
	lng: detectLanguage(),
	fallbackLng: DEFAULT_LANGUAGE,
	supportedLngs: SUPPORTED_LANGUAGES,
	interpolation: {
		escapeValue: false,
	},
});

const syncLanguage = (language: string) => {
	document.documentElement.lang = language;
	try {
		localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
	} catch {
		// Storage unavailable (private mode) — the language still applies for this session.
	}
};

syncLanguage(i18n.language);
i18n.on("languageChanged", syncLanguage);

export default i18n;
