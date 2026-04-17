const LANGUAGES = {
    en: { label: "English", flagClass: "flag-us", htmlLang: "en" },
    es: { label: "Español", flagClass: "flag-es", htmlLang: "es" },
    pt: { label: "Português", flagClass: "flag-br", htmlLang: "pt-BR" },
    de: { label: "Deutsch", flagClass: "flag-de", htmlLang: "de" },
    fr: { label: "Français", flagClass: "flag-fr", htmlLang: "fr" }
};

const TRANSLATIONS = {
    en: {
        "nav.home": "Home", "nav.about": "About", "nav.services": "Services", "nav.skills": "Skills", "nav.demos": "Demos", "nav.contact": "Contact", "common.back": "Back",
        "home.eyebrow": "Full Stack Developer", "home.title": "Hi, I'm <span>Simon</span>", "home.typePrefix": "I'm a", "home.description": "Software developer with 4 years of experience in design, planning and development of complete systems. Specialized in full stack development, interactive interfaces with SPA, Angular and React Native, microservices with .NET, chatbot design, cloud resources and CI/CD processes.", "home.hire": "Hire Me!", "home.viewDemos": "View Demos",
        "about.body": "I started my software development studies in 2019 at <a href=\"https://www.iudigital.edu.co\" target=\"_blank\" style=\"color: #279fec;\">IUDigital de Antioquia</a>, driven by my interest in artificial intelligence and process automation. In 2021, I completed a one-year internship with <a href=\"https://www.linkedin.com/company/webhelpamericas/\" target=\"_blank\" style=\"color: #279fec;\">OneLink</a> and <a href=\"https://www.cesde.edu.co\" target=\"_blank\" style=\"color: #279fec;\">CESDE</a>. Later, I joined as a Jr. software developer and worked for two years on projects for clients such as Avianca, LifeMiles, Puntos Colombia, Zwift, Volaris and Aceros Guatemala.<br><br>During these projects, I gained experience with C#, .NET, SQL Server, JavaScript/TypeScript, Angular, React Native, Single SPA and Dialogflow ES-CX. I also created, configured and managed Azure resources such as CDN, Azure Functions, AppServices, Service Bus, API Management and Key Vault.<br><br>I have experience with Scrum and Kanban, project management with Jira, collaborative environments with Azure DevOps, branch policies, environments, CI/CD automation and SonarCloud integrations.<br><br>My professional vision is driven by continuous self-study and the desire to work with skilled professionals. I want to share knowledge, support others' growth and become a software architect who contributes to high-impact technology solutions.",
        "services.title": "Services <span>I offer</span>", "services.frontend.title": "<span>Frontend Development</span>", "services.frontend.description": "I design and develop interactive user interfaces with Angular, React and Single SPA, creating responsive, attractive and user-friendly experiences for mobile and desktop devices.", "services.backend.title": "<span>Backend Development</span>", "services.backend.description": "I build server logic with C# and .NET, creating scalable and secure APIs for databases, external integrations and business functionality, applying security and performance best practices.", "services.custom.title": "<span>Made to measure</span>", "services.custom.description": "I cover the full lifecycle of web applications, from design to deployment on servers or cloud platforms such as Azure, including monitoring, support and continuous improvement.", "services.chatbots.title": "<span>Chatbots Design</span>", "services.chatbots.description": "I design and implement chatbot solutions with Dialogflow ES-CX to automate customer service, connect messaging platforms and improve conversational experiences.", "services.databases.title": "<span>Databases</span>", "services.databases.description": "I design and implement relational databases with SQL Server, optimizing queries and ensuring data integrity, availability, scalability and security in cloud environments.", "services.optimization.title": "<span>Code Refinement and Optimization</span>", "services.optimization.description": "I review and improve code to optimize performance and maintainability, using tools such as SonarCloud to detect bugs, risks and scalability opportunities.",
        "skills.title": "Main <span>Skills</span>",
        "skills.csharp.description": "I use C# to build efficient applications with high code quality, object-oriented principles, design patterns, frameworks and libraries that improve delivery.",
        "skills.dotnet.description": "My .NET experience includes scalable microservices, ASP.NET Core, RESTful APIs, Domain-Driven Design and Xunit tests to deliver robust, secure and maintainable solutions.",
        "skills.sql.description": "I design SQL Server solutions that improve data management, model complex relationships, protect data integrity and optimize performance with stored procedures.",
        "skills.mysql.description": "I design and manage MySQL relational databases for dynamic web applications, including schemas, query optimization, normalization and relationship modeling.",
        "skills.javascript.description": "I use JavaScript to build dynamic web applications with React and Angular, asynchronous programming, event handling, DOM manipulation and API integrations.",
        "skills.angular.description": "I build responsive Angular applications with component-based architecture, RESTful integrations, performance optimization and maintainable design practices.",
        "skills.react.description": "I develop cross-platform React Native apps with intuitive interfaces, real-time API integrations, reusable components, state management and efficient deployment.",
        "skills.singleSpa.description": "With Single-SPA, I create microfrontend architectures that integrate multiple frameworks, improve modularity and enable independent deployments.",
        "skills.dialogflow.description": "With Dialogflow, I design intelligent chatbots, train conversational flows, improve response accuracy and integrate webhooks with external APIs.",
        "skills.azure.description": "With Azure, I create and manage cloud solutions using API Management, Key Vault, Service Bus, CDN, Azure Functions and App Services.",
        "skills.devops.description": "My DevOps work focuses on CI/CD automation with Azure DevOps and GitHub Actions, improving collaboration, testing, releases and delivery quality.",
        "skills.jira.description": "I use Jira to manage software projects, implement Scrum and Kanban boards, track progress, identify bottlenecks and improve collaboration.",
        "demos.heading": "Featured <span>Demo</span>", "demos.description1": "I designed and implemented a production-ready MVP called ClinicalProfileAgent, an AI-assisted clinical documentation copilot for respiratory therapists and healthcare professionals. The system receives or syncs sessions, processes transcripts, de-identifies sensitive content, generates structured drafts with language models, creates clinical documents in PDF/DOCX formats, and centralizes the professional review workflow in a responsive web dashboard.", "demos.description2": "The solution was built as a monorepo with FastAPI, SQLAlchemy, Alembic, PostgreSQL, Celery, Redis, Next.js 15, TypeScript, and Tailwind. It includes JWT authentication, SMTP-based password recovery, Google/Microsoft OAuth integration, basic observability, automated testing, Docker Compose, CI/CD with GitHub Actions, and production deployment on a cloud server.", "demos.button": "View Website",
        typewriter: ["FULL STACK DEVELOPER", "WEB DESIGNER", "CHATBOT DESIGNER", "DATABASE DEVELOPER"]
    },
    es: {
        "nav.home": "Inicio", "nav.about": "Sobre mí", "nav.services": "Servicios", "nav.skills": "Habilidades", "nav.demos": "Demos", "nav.contact": "Contacto", "common.back": "Volver",
        "home.eyebrow": "Desarrollador Full Stack", "home.title": "Hola, soy <span>Simon</span>", "home.typePrefix": "Soy", "home.description": "Desarrollador de software con 4 años de experiencia en diseño, planeación y desarrollo de sistemas completos. Especializado en desarrollo full stack, interfaces interactivas con SPA, Angular y React Native, microservicios con .NET, diseño de chatbots, recursos cloud y procesos CI/CD.", "home.hire": "¡Contrátame!", "home.viewDemos": "Ver demos",
        "about.body": "Inicié mis estudios en desarrollo de software en 2019 en <a href=\"https://www.iudigital.edu.co\" target=\"_blank\" style=\"color: #279fec;\">IUDigital de Antioquia</a>, motivado por mi interés en inteligencia artificial y automatización de procesos. En 2021 realicé una práctica de un año con <a href=\"https://www.linkedin.com/company/webhelpamericas/\" target=\"_blank\" style=\"color: #279fec;\">OneLink</a> y <a href=\"https://www.cesde.edu.co\" target=\"_blank\" style=\"color: #279fec;\">CESDE</a>. Luego ingresé como desarrollador de software Jr. y trabajé durante dos años en proyectos para clientes como Avianca, LifeMiles, Puntos Colombia, Zwift, Volaris y Aceros Guatemala.<br><br>Durante estos proyectos adquirí experiencia con C#, .NET, SQL Server, JavaScript/TypeScript, Angular, React Native, Single SPA y Dialogflow ES-CX. También creé, configuré y administré recursos en Azure como CDN, Azure Functions, AppServices, Service Bus, API Management y Key Vault.<br><br>Tengo experiencia con Scrum y Kanban, gestión de proyectos con Jira, entornos colaborativos con Azure DevOps, políticas de ramas, ambientes, automatización CI/CD e integraciones con SonarCloud.<br><br>Mi visión profesional está impulsada por el autoestudio continuo y el deseo de trabajar con profesionales competentes. Quiero compartir conocimiento, apoyar el crecimiento de otros y convertirme en arquitecto de software para contribuir a soluciones tecnológicas de alto impacto.",
        "services.title": "Servicios <span>que ofrezco</span>", "services.frontend.title": "<span>Desarrollo Frontend</span>", "services.frontend.description": "Diseño y desarrollo interfaces interactivas con Angular, React y Single SPA, creando experiencias responsivas, atractivas y fáciles de usar en móvil y escritorio.", "services.backend.title": "<span>Desarrollo Backend</span>", "services.backend.description": "Construyo lógica de servidor con C# y .NET, creando APIs escalables y seguras para bases de datos, integraciones externas y funcionalidades de negocio.", "services.custom.title": "<span>A la medida</span>", "services.custom.description": "Cubro el ciclo completo de aplicaciones web, desde el diseño hasta el despliegue en servidores o cloud como Azure, incluyendo monitoreo, soporte y mejora continua.", "services.chatbots.title": "<span>Diseño de Chatbots</span>", "services.chatbots.description": "Diseño e implemento chatbots con Dialogflow ES-CX para automatizar atención al cliente, conectar plataformas de mensajería y mejorar experiencias conversacionales.", "services.databases.title": "<span>Bases de Datos</span>", "services.databases.description": "Diseño e implemento bases de datos relacionales con SQL Server, optimizando consultas y asegurando integridad, disponibilidad, escalabilidad y seguridad.", "services.optimization.title": "<span>Refinamiento y Optimización de Código</span>", "services.optimization.description": "Reviso y mejoro código para optimizar rendimiento y mantenibilidad, usando herramientas como SonarCloud para detectar errores, riesgos y oportunidades de escalabilidad.",
        "skills.title": "Principales <span>Habilidades</span>",
        "skills.csharp.description": "Uso C# para crear aplicaciones eficientes con alta calidad de código, principios orientados a objetos, patrones de diseño, frameworks y librerías que mejoran la entrega.",
        "skills.dotnet.description": "Mi experiencia con .NET incluye microservicios escalables, ASP.NET Core, APIs RESTful, Domain-Driven Design y pruebas con Xunit para soluciones robustas y mantenibles.",
        "skills.sql.description": "Diseño soluciones SQL Server que mejoran la gestión de datos, modelan relaciones complejas, protegen la integridad y optimizan rendimiento con procedimientos almacenados.",
        "skills.mysql.description": "Diseño y administro bases de datos MySQL para aplicaciones web dinámicas, incluyendo esquemas, optimización de consultas, normalización y modelado relacional.",
        "skills.javascript.description": "Uso JavaScript para construir aplicaciones web dinámicas con React y Angular, programación asíncrona, eventos, manipulación del DOM e integraciones con APIs.",
        "skills.angular.description": "Construyo aplicaciones Angular responsivas con arquitectura por componentes, integraciones RESTful, optimización de rendimiento y prácticas de diseño mantenibles.",
        "skills.react.description": "Desarrollo apps React Native multiplataforma con interfaces intuitivas, APIs en tiempo real, componentes reutilizables, gestión de estado y despliegues eficientes.",
        "skills.singleSpa.description": "Con Single-SPA creo arquitecturas microfrontend que integran múltiples frameworks, mejoran la modularidad y permiten despliegues independientes.",
        "skills.dialogflow.description": "Con Dialogflow diseño chatbots inteligentes, entreno flujos conversacionales, mejoro precisión de respuestas e integro webhooks con APIs externas.",
        "skills.azure.description": "Con Azure creo y gestiono soluciones cloud usando API Management, Key Vault, Service Bus, CDN, Azure Functions y App Services.",
        "skills.devops.description": "Mi trabajo DevOps se enfoca en automatización CI/CD con Azure DevOps y GitHub Actions, mejorando colaboración, pruebas, releases y calidad de entrega.",
        "skills.jira.description": "Uso Jira para gestionar proyectos de software, implementar tableros Scrum y Kanban, seguir avances, identificar bloqueos y mejorar colaboración.",
        "demos.heading": "Demo <span>Destacada</span>", "demos.description1": "Diseñé e implementé un MVP listo para producción llamado ClinicalProfileAgent, un copiloto de documentación clínica asistida por IA para terapeutas respiratorios y profesionales de salud. El sistema recibe o sincroniza sesiones, procesa transcripciones, desidentifica contenido sensible, genera borradores estructurados con modelos de lenguaje, crea documentos clínicos en formatos PDF/DOCX y centraliza el flujo de revisión profesional en un dashboard web responsive.", "demos.description2": "La solución fue desarrollada como un monorepo con FastAPI, SQLAlchemy, Alembic, PostgreSQL, Celery, Redis, Next.js 15, TypeScript y Tailwind. Incluye autenticación JWT, recuperación de contraseña por SMTP, OAuth con Google/Microsoft, observabilidad básica, pruebas automatizadas, Docker Compose, CI/CD con GitHub Actions y despliegue productivo en servidor cloud.", "demos.button": "Ver Website",
        typewriter: ["DESARROLLADOR FULL STACK", "DISEÑADOR WEB", "DISEÑADOR DE CHATBOTS", "DESARROLLADOR DE BASES DE DATOS"]
    },
    pt: {
        "nav.home": "Início", "nav.about": "Sobre", "nav.services": "Serviços", "nav.skills": "Habilidades", "nav.demos": "Demos", "nav.contact": "Contato", "common.back": "Voltar",
        "home.eyebrow": "Desenvolvedor Full Stack", "home.title": "Olá, sou <span>Simon</span>", "home.typePrefix": "Sou", "home.description": "Desenvolvedor de software com 4 anos de experiência em design, planejamento e desenvolvimento de sistemas completos. Especializado em desenvolvimento full stack, interfaces interativas com SPA, Angular e React Native, microsserviços com .NET, design de chatbots, recursos em nuvem e processos CI/CD.", "home.hire": "Contrate-me!", "home.viewDemos": "Ver demos",
        "about.body": "Iniciei meus estudos em desenvolvimento de software em 2019 na <a href=\"https://www.iudigital.edu.co\" target=\"_blank\" style=\"color: #279fec;\">IUDigital de Antioquia</a>, motivado pelo interesse em inteligência artificial e automação de processos. Em 2021 fiz um estágio de um ano com <a href=\"https://www.linkedin.com/company/webhelpamericas/\" target=\"_blank\" style=\"color: #279fec;\">OneLink</a> e <a href=\"https://www.cesde.edu.co\" target=\"_blank\" style=\"color: #279fec;\">CESDE</a>. Depois ingressei como desenvolvedor Jr. e trabalhei por dois anos em projetos para Avianca, LifeMiles, Puntos Colombia, Zwift, Volaris e Aceros Guatemala.<br><br>Nesses projetos ganhei experiência com C#, .NET, SQL Server, JavaScript/TypeScript, Angular, React Native, Single SPA e Dialogflow ES-CX. Também criei, configurei e administrei recursos Azure como CDN, Azure Functions, AppServices, Service Bus, API Management e Key Vault.<br><br>Tenho experiência com Scrum e Kanban, gestão com Jira, ambientes colaborativos com Azure DevOps, políticas de branches, ambientes, automação CI/CD e integrações com SonarCloud.<br><br>Minha visão profissional é guiada pelo autoestudo contínuo e pelo desejo de trabalhar com profissionais competentes. Quero compartilhar conhecimento, apoiar o crescimento de outras pessoas e me tornar arquiteto de software para contribuir com soluções tecnológicas de alto impacto.",
        "services.title": "Serviços <span>que ofereço</span>", "services.frontend.title": "<span>Desenvolvimento Frontend</span>", "services.frontend.description": "Desenho e desenvolvo interfaces interativas com Angular, React e Single SPA, criando experiências responsivas, atraentes e fáceis de usar em mobile e desktop.", "services.backend.title": "<span>Desenvolvimento Backend</span>", "services.backend.description": "Construo lógica de servidor com C# e .NET, criando APIs escaláveis e seguras para bancos de dados, integrações externas e funcionalidades de negócio.", "services.custom.title": "<span>Sob medida</span>", "services.custom.description": "Cubro o ciclo completo de aplicações web, do design ao deploy em servidores ou cloud como Azure, incluindo monitoramento, suporte e melhoria contínua.", "services.chatbots.title": "<span>Design de Chatbots</span>", "services.chatbots.description": "Desenho e implemento chatbots com Dialogflow ES-CX para automatizar atendimento, conectar plataformas de mensagens e melhorar experiências conversacionais.", "services.databases.title": "<span>Bancos de Dados</span>", "services.databases.description": "Desenho e implemento bancos relacionais com SQL Server, otimizando consultas e garantindo integridade, disponibilidade, escalabilidade e segurança.", "services.optimization.title": "<span>Refinamento e Otimização de Código</span>", "services.optimization.description": "Reviso e melhoro código para otimizar desempenho e manutenção, usando SonarCloud para detectar erros, riscos e oportunidades de escalabilidade.",
        "skills.title": "Principais <span>Habilidades</span>", "skills.csharp.description": "Uso C# para criar aplicações eficientes com alta qualidade de código, princípios orientados a objetos, padrões de design, frameworks e bibliotecas.", "skills.dotnet.description": "Minha experiência com .NET inclui microsserviços escaláveis, ASP.NET Core, APIs RESTful, Domain-Driven Design e testes com Xunit para soluções robustas.", "skills.sql.description": "Desenho soluções SQL Server que melhoram gestão de dados, modelam relações complexas, protegem integridade e otimizam desempenho.", "skills.mysql.description": "Desenho e administro bancos MySQL para aplicações web dinâmicas, com esquemas, consultas otimizadas, normalização e modelagem relacional.", "skills.javascript.description": "Uso JavaScript para aplicações web dinâmicas com React e Angular, programação assíncrona, eventos, DOM e integrações com APIs.", "skills.angular.description": "Construo aplicações Angular responsivas com arquitetura por componentes, integrações RESTful, otimização de desempenho e design manutenível.", "skills.react.description": "Desenvolvo apps React Native multiplataforma com interfaces intuitivas, APIs em tempo real, componentes reutilizáveis e gerenciamento de estado.", "skills.singleSpa.description": "Com Single-SPA crio arquiteturas microfrontend que integram múltiplos frameworks, melhoram modularidade e permitem deploys independentes.", "skills.dialogflow.description": "Com Dialogflow desenho chatbots inteligentes, treino fluxos conversacionais, melhoro respostas e integro webhooks com APIs externas.", "skills.azure.description": "Com Azure crio e gerencio soluções cloud usando API Management, Key Vault, Service Bus, CDN, Azure Functions e App Services.", "skills.devops.description": "Meu trabalho em DevOps foca em automação CI/CD com Azure DevOps e GitHub Actions, melhorando colaboração, testes, releases e qualidade.", "skills.jira.description": "Uso Jira para gerenciar projetos, implementar quadros Scrum e Kanban, acompanhar progresso, identificar bloqueios e melhorar colaboração.",
        "demos.heading": "Demo <span>em Destaque</span>", "demos.description1": "Projetei e implementei um MVP pronto para produção chamado ClinicalProfileAgent, um copiloto de documentação clínica assistida por IA para terapeutas respiratórios e profissionais de saúde. O sistema recebe ou sincroniza sessões, processa transcrições, remove dados sensíveis, gera rascunhos estruturados com modelos de linguagem, cria documentos clínicos em PDF/DOCX e centraliza a revisão profissional em um dashboard web responsivo.", "demos.description2": "A solução foi construída como monorepo com FastAPI, SQLAlchemy, Alembic, PostgreSQL, Celery, Redis, Next.js 15, TypeScript e Tailwind. Inclui autenticação JWT, recuperação de senha por SMTP, OAuth com Google/Microsoft, observabilidade básica, testes automatizados, Docker Compose, CI/CD com GitHub Actions e deploy em servidor cloud.", "demos.button": "Ver Website", typewriter: ["DESENVOLVEDOR FULL STACK", "WEB DESIGNER", "DESIGNER DE CHATBOTS", "DESENVOLVEDOR DE BANCO DE DADOS"]
    },
    de: {
        "nav.home": "Start", "nav.about": "Über mich", "nav.services": "Leistungen", "nav.skills": "Fähigkeiten", "nav.demos": "Demos", "nav.contact": "Kontakt", "common.back": "Zurück",
        "home.eyebrow": "Full-Stack-Entwickler", "home.title": "Hallo, ich bin <span>Simon</span>", "home.typePrefix": "Ich bin", "home.description": "Softwareentwickler mit 4 Jahren Erfahrung in Design, Planung und Entwicklung vollständiger Systeme. Spezialisiert auf Full-Stack-Entwicklung, interaktive Oberflächen mit SPA, Angular und React Native, Microservices mit .NET, Chatbot-Design, Cloud-Ressourcen und CI/CD-Prozesse.", "home.hire": "Kontakt aufnehmen", "home.viewDemos": "Demos ansehen",
        "about.body": "Ich begann 2019 mein Studium der Softwareentwicklung an der <a href=\"https://www.iudigital.edu.co\" target=\"_blank\" style=\"color: #279fec;\">IUDigital de Antioquia</a>, motiviert durch künstliche Intelligenz und Prozessautomatisierung. 2021 absolvierte ich ein einjähriges Praktikum mit <a href=\"https://www.linkedin.com/company/webhelpamericas/\" target=\"_blank\" style=\"color: #279fec;\">OneLink</a> und <a href=\"https://www.cesde.edu.co\" target=\"_blank\" style=\"color: #279fec;\">CESDE</a>. Danach arbeitete ich zwei Jahre als Jr. Softwareentwickler an Projekten für Avianca, LifeMiles, Puntos Colombia, Zwift, Volaris und Aceros Guatemala.<br><br>Dabei sammelte ich Erfahrung mit C#, .NET, SQL Server, JavaScript/TypeScript, Angular, React Native, Single SPA und Dialogflow ES-CX. Außerdem erstellte und verwaltete ich Azure-Ressourcen wie CDN, Azure Functions, AppServices, Service Bus, API Management und Key Vault.<br><br>Ich habe Erfahrung mit Scrum und Kanban, Jira, kollaborativen Azure-DevOps-Umgebungen, Branch-Richtlinien, CI/CD-Automatisierung und SonarCloud-Integrationen.<br><br>Meine berufliche Vision basiert auf kontinuierlichem Lernen und Zusammenarbeit mit starken Fachleuten. Ich möchte Wissen teilen, andere unterstützen und langfristig Softwarearchitekt für wirkungsvolle Technologielösungen werden.",
        "services.title": "Leistungen <span>die ich anbiete</span>", "services.frontend.title": "<span>Frontend-Entwicklung</span>", "services.frontend.description": "Ich entwerfe und entwickle interaktive Oberflächen mit Angular, React und Single SPA für responsive, attraktive und benutzerfreundliche Web-Erlebnisse.", "services.backend.title": "<span>Backend-Entwicklung</span>", "services.backend.description": "Ich entwickle Serverlogik mit C# und .NET und erstelle skalierbare, sichere APIs für Datenbanken, externe Integrationen und Geschäftsprozesse.", "services.custom.title": "<span>Maßgeschneidert</span>", "services.custom.description": "Ich begleite den gesamten Lebenszyklus von Webanwendungen, vom Design bis zum Deployment auf Servern oder in Azure, inklusive Monitoring, Support und Verbesserung.", "services.chatbots.title": "<span>Chatbot-Design</span>", "services.chatbots.description": "Ich entwerfe Chatbots mit Dialogflow ES-CX, automatisiere Kundenservice, verbinde Messaging-Plattformen und verbessere Gesprächserlebnisse.", "services.databases.title": "<span>Datenbanken</span>", "services.databases.description": "Ich entwerfe relationale SQL-Server-Datenbanken, optimiere Abfragen und sichere Integrität, Verfügbarkeit, Skalierbarkeit und Sicherheit.", "services.optimization.title": "<span>Code-Verbesserung und Optimierung</span>", "services.optimization.description": "Ich überprüfe und verbessere Code für Performance und Wartbarkeit und nutze SonarCloud, um Fehler, Risiken und Skalierungschancen zu erkennen.",
        "skills.title": "Wichtigste <span>Fähigkeiten</span>", "skills.csharp.description": "Ich nutze C# für effiziente Anwendungen mit hoher Codequalität, objektorientierten Prinzipien, Design Patterns, Frameworks und Bibliotheken.", "skills.dotnet.description": "Meine .NET-Erfahrung umfasst skalierbare Microservices, ASP.NET Core, RESTful APIs, Domain-Driven Design und Xunit-Tests für robuste Lösungen.", "skills.sql.description": "Ich entwerfe SQL-Server-Lösungen für Datenmanagement, komplexe Beziehungen, Datenintegrität und Performanceoptimierung.", "skills.mysql.description": "Ich entwerfe und verwalte MySQL-Datenbanken für dynamische Webanwendungen mit Schemas, optimierten Abfragen und relationaler Modellierung.", "skills.javascript.description": "Ich nutze JavaScript für dynamische Webanwendungen mit React und Angular, asynchrone Programmierung, Events, DOM und API-Integrationen.", "skills.angular.description": "Ich baue responsive Angular-Anwendungen mit Komponentenarchitektur, RESTful-Integrationen, Performanceoptimierung und wartbarem Design.", "skills.react.description": "Ich entwickle React-Native-Apps mit intuitiven Oberflächen, Echtzeit-APIs, wiederverwendbaren Komponenten und State Management.", "skills.singleSpa.description": "Mit Single-SPA erstelle ich Microfrontend-Architekturen, die mehrere Frameworks integrieren und unabhängige Deployments ermöglichen.", "skills.dialogflow.description": "Mit Dialogflow entwerfe ich intelligente Chatbots, trainiere Gesprächsflüsse, verbessere Antworten und integriere Webhooks mit externen APIs.", "skills.azure.description": "Mit Azure erstelle und verwalte ich Cloud-Lösungen mit API Management, Key Vault, Service Bus, CDN, Azure Functions und App Services.", "skills.devops.description": "Meine DevOps-Arbeit fokussiert CI/CD-Automatisierung mit Azure DevOps und GitHub Actions für bessere Zusammenarbeit, Tests und Releases.", "skills.jira.description": "Ich nutze Jira für Projektmanagement, Scrum- und Kanban-Boards, Fortschrittsverfolgung, Engpasserkennung und bessere Zusammenarbeit.",
        "demos.heading": "Ausgewählte <span>Demo</span>", "demos.description1": "Ich entwarf und implementierte ein produktionsreifes MVP namens ClinicalProfileAgent, einen KI-gestützten Copiloten für klinische Dokumentation für Atemtherapeuten und Gesundheitsfachkräfte. Das System synchronisiert Sitzungen, verarbeitet Transkripte, anonymisiert sensible Inhalte, generiert strukturierte Entwürfe, erstellt PDF/DOCX-Dokumente und zentralisiert Reviews in einem responsiven Dashboard.", "demos.description2": "Die Lösung wurde als Monorepo mit FastAPI, SQLAlchemy, Alembic, PostgreSQL, Celery, Redis, Next.js 15, TypeScript und Tailwind entwickelt. Sie enthält JWT-Authentifizierung, SMTP-Passwortwiederherstellung, Google/Microsoft OAuth, Observability, Tests, Docker Compose, CI/CD und Cloud-Deployment.", "demos.button": "Website ansehen", typewriter: ["FULL-STACK-ENTWICKLER", "WEB DESIGNER", "CHATBOT-DESIGNER", "DATENBANKENTWICKLER"]
    },
    fr: {
        "nav.home": "Accueil", "nav.about": "À propos", "nav.services": "Services", "nav.skills": "Compétences", "nav.demos": "Démos", "nav.contact": "Contact", "common.back": "Retour",
        "home.eyebrow": "Développeur Full Stack", "home.title": "Bonjour, je suis <span>Simon</span>", "home.typePrefix": "Je suis", "home.description": "Développeur logiciel avec 4 ans d'expérience dans la conception, la planification et le développement de systèmes complets. Spécialisé en full stack, interfaces SPA, Angular et React Native, microservices .NET, chatbots, cloud et CI/CD.", "home.hire": "Me contacter", "home.viewDemos": "Voir les démos",
        "about.body": "J'ai commencé mes études en développement logiciel en 2019 à <a href=\"https://www.iudigital.edu.co\" target=\"_blank\" style=\"color: #279fec;\">IUDigital de Antioquia</a>, motivé par l'intelligence artificielle et l'automatisation. En 2021, j'ai réalisé un stage d'un an avec <a href=\"https://www.linkedin.com/company/webhelpamericas/\" target=\"_blank\" style=\"color: #279fec;\">OneLink</a> et <a href=\"https://www.cesde.edu.co\" target=\"_blank\" style=\"color: #279fec;\">CESDE</a>. Ensuite, j'ai travaillé deux ans comme développeur Jr. sur des projets pour Avianca, LifeMiles, Puntos Colombia, Zwift, Volaris et Aceros Guatemala.<br><br>J'ai acquis de l'expérience avec C#, .NET, SQL Server, JavaScript/TypeScript, Angular, React Native, Single SPA et Dialogflow ES-CX. J'ai aussi créé et administré des ressources Azure comme CDN, Azure Functions, AppServices, Service Bus, API Management et Key Vault.<br><br>J'ai de l'expérience avec Scrum, Kanban, Jira, Azure DevOps, politiques de branches, environnements, automatisation CI/CD et intégrations SonarCloud.<br><br>Ma vision professionnelle repose sur l'apprentissage continu et la collaboration avec des experts. Je veux partager mes connaissances, soutenir la croissance des autres et devenir architecte logiciel pour contribuer à des solutions technologiques à fort impact.",
        "services.title": "Services <span>que je propose</span>", "services.frontend.title": "<span>Développement Frontend</span>", "services.frontend.description": "Je conçois et développe des interfaces interactives avec Angular, React et Single SPA pour créer des expériences responsives, attractives et faciles à utiliser.", "services.backend.title": "<span>Développement Backend</span>", "services.backend.description": "Je développe la logique serveur avec C# et .NET, en créant des APIs évolutives et sécurisées pour bases de données, intégrations externes et fonctionnalités métier.", "services.custom.title": "<span>Sur mesure</span>", "services.custom.description": "Je couvre le cycle complet des applications web, de la conception au déploiement sur serveur ou cloud comme Azure, avec monitoring, support et amélioration continue.", "services.chatbots.title": "<span>Conception de Chatbots</span>", "services.chatbots.description": "Je conçois des chatbots avec Dialogflow ES-CX pour automatiser le service client, connecter des plateformes de messagerie et améliorer les conversations.", "services.databases.title": "<span>Bases de Données</span>", "services.databases.description": "Je conçois des bases relationnelles avec SQL Server, optimise les requêtes et assure intégrité, disponibilité, scalabilité et sécurité.", "services.optimization.title": "<span>Amélioration et Optimisation du Code</span>", "services.optimization.description": "Je révise et améliore le code pour optimiser performance et maintenabilité, avec SonarCloud pour détecter bugs, risques et opportunités de scalabilité.",
        "skills.title": "Principales <span>Compétences</span>", "skills.csharp.description": "J'utilise C# pour créer des applications efficaces avec une haute qualité de code, principes orientés objet, design patterns, frameworks et bibliothèques.", "skills.dotnet.description": "Mon expérience .NET inclut microservices évolutifs, ASP.NET Core, APIs RESTful, Domain-Driven Design et tests Xunit pour des solutions robustes.", "skills.sql.description": "Je conçois des solutions SQL Server pour améliorer la gestion des données, modéliser des relations complexes, protéger l'intégrité et optimiser les performances.", "skills.mysql.description": "Je conçois et gère des bases MySQL pour applications web dynamiques, avec schémas, requêtes optimisées, normalisation et modélisation relationnelle.", "skills.javascript.description": "J'utilise JavaScript pour des applications web dynamiques avec React et Angular, programmation asynchrone, événements, DOM et intégrations API.", "skills.angular.description": "Je construis des applications Angular responsives avec architecture composant, intégrations RESTful, optimisation de performance et design maintenable.", "skills.react.description": "Je développe des apps React Native multiplateformes avec interfaces intuitives, APIs temps réel, composants réutilisables et gestion d'état.", "skills.singleSpa.description": "Avec Single-SPA, je crée des architectures microfrontend qui intègrent plusieurs frameworks et permettent des déploiements indépendants.", "skills.dialogflow.description": "Avec Dialogflow, je conçois des chatbots intelligents, entraîne des flux conversationnels, améliore les réponses et intègre webhooks et APIs externes.", "skills.azure.description": "Avec Azure, je crée et gère des solutions cloud avec API Management, Key Vault, Service Bus, CDN, Azure Functions et App Services.", "skills.devops.description": "Mon travail DevOps se concentre sur l'automatisation CI/CD avec Azure DevOps et GitHub Actions pour améliorer collaboration, tests et releases.", "skills.jira.description": "J'utilise Jira pour gérer des projets, mettre en place Scrum et Kanban, suivre l'avancement, identifier les blocages et améliorer la collaboration.",
        "demos.heading": "Démo <span>en Vedette</span>", "demos.description1": "J'ai conçu et implémenté un MVP prêt pour la production appelé ClinicalProfileAgent, un copilote de documentation clinique assistée par IA pour thérapeutes respiratoires et professionnels de santé. Le système synchronise des sessions, traite les transcriptions, désidentifie les contenus sensibles, génère des brouillons structurés, crée des documents PDF/DOCX et centralise la revue dans un dashboard responsive.", "demos.description2": "La solution a été développée comme monorepo avec FastAPI, SQLAlchemy, Alembic, PostgreSQL, Celery, Redis, Next.js 15, TypeScript et Tailwind. Elle inclut JWT, récupération SMTP, OAuth Google/Microsoft, observabilité, tests, Docker Compose, CI/CD et déploiement cloud.", "demos.button": "Voir le website", typewriter: ["DÉVELOPPEUR FULL STACK", "WEB DESIGNER", "DESIGNER DE CHATBOTS", "DÉVELOPPEUR BASES DE DONNÉES"]
    }
};

let currentLanguage = localStorage.getItem("portfolioLanguage") || "en";
if (!LANGUAGES[currentLanguage]) {
    currentLanguage = "en";
}
let textElement = null;
let textIndex = 0;
let characterIndex = 0;
let typewriterTimer = null;
let typewriterTexts = TRANSLATIONS[currentLanguage].typewriter;
const speed = 100;

function t(key) {
    return TRANSLATIONS[currentLanguage]?.[key] || TRANSLATIONS.en[key] || "";
}

function hamburg() {
    const navbar = document.querySelector('.dropdown');
    if (navbar) {
        navbar.style.transform = 'translateY(0px)';
    }
}

function cancel() {
    const navbar = document.querySelector('.dropdown');
    if (navbar) {
        navbar.style.transform = 'translateY(-520px)';
    }
}

function setHtml(selector, key) {
    const element = document.querySelector(selector);
    if (element) {
        element.innerHTML = t(key);
    }
}

function setText(selector, key) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = t(key);
    }
}

function setAllText(selector, key) {
    document.querySelectorAll(selector).forEach((element) => {
        element.textContent = t(key);
    });
}

function setParagraphs(selector, keys) {
    const elements = document.querySelectorAll(selector);
    keys.forEach((key, index) => {
        if (elements[index]) {
            elements[index].innerHTML = t(key);
        }
    });
}

function setHeadings(selector, keys) {
    const elements = document.querySelectorAll(selector);
    keys.forEach((key, index) => {
        if (elements[index]) {
            elements[index].innerHTML = t(key);
        }
    });
}

function createLanguageSwitcher(context = "desktop") {
    const wrapper = document.createElement("div");
    wrapper.className = `language-switcher language-switcher-${context}`;
    wrapper.innerHTML = `
        <button class="language-trigger" type="button" aria-label="Select language" aria-expanded="false">
            <span class="selected-flag flag-icon ${LANGUAGES[currentLanguage].flagClass}"></span>
        </button>
        <div class="language-options" role="menu">
            ${Object.entries(LANGUAGES).map(([code, language]) => `
                <button type="button" class="language-option" data-language="${code}" role="menuitem">
                    <span class="option-flag flag-icon ${language.flagClass}"></span>
                    <span>${language.label}</span>
                </button>
            `).join("")}
        </div>
    `;
    return wrapper;
}
function setupLanguageSwitchers() {
    document.querySelectorAll('.language-switcher').forEach((switcher) => switcher.remove());

    const desktopLinks = document.querySelector('.nav-container .links');
    if (desktopLinks) {
        desktopLinks.appendChild(createLanguageSwitcher("desktop"));
    }

    const dropdownLinks = document.querySelector('.dropdown .links');
    const cancelButton = dropdownLinks?.querySelector('.cancel');
    if (dropdownLinks && cancelButton) {
        dropdownLinks.insertBefore(createLanguageSwitcher("mobile"), cancelButton);
    }

    document.querySelectorAll('.language-trigger').forEach((trigger) => {
        trigger.addEventListener('click', (event) => {
            event.stopPropagation();
            const switcher = trigger.closest('.language-switcher');
            const isOpen = switcher.classList.toggle('open');
            trigger.setAttribute('aria-expanded', String(isOpen));
            document.querySelectorAll('.language-switcher').forEach((other) => {
                if (other !== switcher) {
                    other.classList.remove('open');
                    other.querySelector('.language-trigger')?.setAttribute('aria-expanded', 'false');
                }
            });
        });
    });

    document.querySelectorAll('.language-option').forEach((option) => {
        option.addEventListener('click', (event) => {
            event.stopPropagation();
            changeLanguage(option.dataset.language);
        });
    });

    document.addEventListener('click', closeLanguageMenus);
}

function closeLanguageMenus() {
    document.querySelectorAll('.language-switcher').forEach((switcher) => {
        switcher.classList.remove('open');
        switcher.querySelector('.language-trigger')?.setAttribute('aria-expanded', 'false');
    });
}

function updateLanguageSwitchers() {
    document.querySelectorAll('.selected-flag').forEach((flag) => {
        flag.className = `selected-flag flag-icon ${LANGUAGES[currentLanguage].flagClass}`;
    });

    document.querySelectorAll('.language-option').forEach((option) => {
        option.classList.toggle('active', option.dataset.language === currentLanguage);
    });
}

function changeLanguage(language) {
    if (!LANGUAGES[language]) {
        return;
    }

    currentLanguage = language;
    localStorage.setItem("portfolioLanguage", language);
    applyTranslations();
    closeLanguageMenus();
}

function applyTranslations() {
    document.documentElement.lang = LANGUAGES[currentLanguage].htmlLang;
    updateLanguageSwitchers();

    setAllText('a[href="index.html"]', 'nav.home');
    setAllText('a[href="about.html"]', 'nav.about');
    setAllText('a[href="services.html"]', 'nav.services');
    setAllText('a[href="skills.html"]', 'nav.skills');
    setAllText('a[href="demos.html"]', 'nav.demos');
    setAllText('#contact-link a, #contact-link-dropdown', 'nav.contact');
    setAllText('.btn button[onclick*="index.html"]', 'common.back');

    if (document.body.classList.contains('home-page')) {
        setText('.eyebrow', 'home.eyebrow');
        setHtml('.content h1', 'home.title');
        const typewriter = document.querySelector('.typewriter');
        if (typewriter) {
            typewriter.innerHTML = `${t('home.typePrefix')} <span class="typewriter-text"></span><label for="">|</label>`;
            textElement = document.querySelector('.typewriter-text');
            restartTypewriter();
        }
        setText('.home-page .content p', 'home.description');
        setText('#hireButton', 'home.hire');
        setText('.secondary-action', 'home.viewDemos');
    }

    if (document.title.includes('About')) {
        setHtml('.main-container .content p', 'about.body');
    }

    if (document.title.includes('Services')) {
        setHeadings('.content-services > h1', ['services.title', 'services.frontend.title', 'services.backend.title', 'services.custom.title', 'services.chatbots.title', 'services.databases.title', 'services.optimization.title']);
        setParagraphs('.content-services > p', ['services.frontend.description', 'services.backend.description', 'services.custom.description', 'services.chatbots.description', 'services.databases.description', 'services.optimization.description']);
    }

    if (document.title.toLowerCase().includes('skills')) {
        setHtml('.content-skills > h1', 'skills.title');
        setParagraphs('.skill-item p', ['skills.csharp.description', 'skills.dotnet.description', 'skills.sql.description', 'skills.mysql.description', 'skills.javascript.description', 'skills.angular.description', 'skills.react.description', 'skills.singleSpa.description', 'skills.dialogflow.description', 'skills.azure.description', 'skills.devops.description', 'skills.jira.description']);
    }

    if (document.title.includes('Demos')) {
        setHtml('.demo-card h1', 'demos.heading');
        setParagraphs('.demo-card p', ['demos.description1', 'demos.description2']);
        setText('.demo-card .btn button', 'demos.button');
    }
}

function restartTypewriter() {
    clearTimeout(typewriterTimer);
    typewriterTexts = TRANSLATIONS[currentLanguage].typewriter;
    textIndex = 0;
    characterIndex = 0;
    if (textElement) {
        textElement.textContent = "";
        typeWriter();
    }
}

function typeWriter() {
    if (!textElement) {
        return;
    }

    if (characterIndex < typewriterTexts[textIndex].length) {
        textElement.textContent += typewriterTexts[textIndex].charAt(characterIndex);
        characterIndex++;
        typewriterTimer = setTimeout(typeWriter, speed);
    } else {
        typewriterTimer = setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (!textElement) {
        return;
    }

    if (textElement.textContent.length > 0) {
        textElement.textContent = textElement.textContent.slice(0, -1);
        typewriterTimer = setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % typewriterTexts.length;
        characterIndex = 0;
        typewriterTimer = setTimeout(typeWriter, 500);
    }
}

function sendEmail() {
    const email = "padrongavi@hotmail.com";
    const subject = "job vacancy";
    const body = "Hello Simon. I would like to make you a job offer";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, '_blank');
}

function setupHireButton() {
    const hireButton = document.getElementById('hireButton');
    if (!hireButton) {
        return;
    }

    hireButton.addEventListener('click', function() {
        const phoneNumber = '573045374560';
        const message = "Hello Simon. I have seen your portfolio and would like to talk to you about a job offer.";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, '_blank');
    });
}

function initPortfolio() {
    textElement = document.querySelector('.typewriter-text');
    setupLanguageSwitchers();
    setupHireButton();
    applyTranslations();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
    initPortfolio();
}
