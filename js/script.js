/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== I18N TRANSLATIONS ===============*/
const translations = {
    "pt": {
        "nav_home": "Início",
        "nav_about": "Sobre",
        "nav_services": "Serviços",
        "nav_timeline": "Trajetória",
        "nav_testimonials": "Depoimentos",
        "nav_contact": "Fale Comigo",
        
        "hero_subtitle": "Ciência, Inovação & Carreira Global",
        "hero_title_1": "Conquiste seu espaço com uma carreira acadêmica ",
        "hero_title_2": "internacional",
        "hero_title_3": ".",
        "hero_desc": "PhD em Ciência de Materiais e Pós-Doutoranda na Polytechnique Montréal. Oriento pesquisadores e profissionais a alcançarem a excelência e conquistarem oportunidades no exterior.",
        "hero_btn1": "Agendar Mentoria",
        "hero_btn2": "Conhecer Minha História",

        "about_title_1": "Experiência global para impulsionar seus ",
        "about_title_2": "resultados.",
        "about_desc1": "Sou Jildimara de Jesus Santana, especialista em Catálise e Hidrogênio Verde, com vasta experiência em mobilidade internacional (Canadá, França e China). Minha missão é ajudar talentos a estruturarem carreiras científicas de alto impacto.",
        "about_desc2": "Atualmente atuando como Pesquisadora e Coordenadora do programa europeu H2Excellence na Polytechnique Montréal, utilizo minha vivência prática como bolsista ELAP para guiar pesquisadores rumo ao sucesso global.",
        "about_v1_title": "Visão Global",
        "about_v1_desc": "Estratégias para aprovação no exterior.",
        "about_v2_title": "Excelência",
        "about_v2_desc": "Rigor científico e networking de alto nível.",

        "srv_title_1": "Soluções para sua ",
        "srv_title_2": "Carreira Científica",
        "srv_subtitle": "Do planejamento à aprovação em oportunidades internacionais.",
        
        "srv1_title": "Mentoria Internacional",
        "srv1_desc": "Preparação intensiva para conquista de bolsas de prestígio (ELAP) e processos seletivos de Pós-Doutorado no Canadá e Europa.",
        "srv1_b1": "Revisão de Application",
        "srv1_b2": "Estratégia de Carta de Motivação",
        "srv1_b3": "Preparação para entrevistas",
        "srv1_btn": "Aplicar para Mentoria",

        "srv2_title": "Consultoria H2 Verde",
        "srv2_desc": "Direcionamento técnico especializado em síntese de nanocatalisadores, transição energética e descarbonização para projetos corporativos.",
        "srv2_b1": "Análise de Viabilidade Técnica",
        "srv2_b2": "Tecnologias de Hidrogênio",
        "srv2_b3": "Foco em Catálise Heterogênea",
        "srv2_btn": "Solicitar Consultoria",

        "srv3_title": "Guia do Pesquisador",
        "srv3_desc": "Acesso a E-books e Masterclasses práticas sobre como estruturar um currículo atrativo e otimizar sua produção científica.",
        "srv3_b1": "Do Lattes ao Internacional",
        "srv3_b2": "Escrita Científica de Impacto",
        "srv3_b3": "Acesso imediato",
        "srv3_btn": "Explorar Materiais",

        "time_title_1": "Trajetória ",
        "time_title_2": "Global",
        "time_subtitle": "De pesquisadora no Brasil à coordenação de excelência no Canadá.",
        "time1_date": "2015 - 2018",
        "time1_title": "Formação & Pesquisa no Brasil",
        "time1_desc": "Bacharelado em Química do Petróleo e Mestrado pela UFRN. Onde a jornada científica focada em sustentabilidade começou.",
        "time2_date": "2019 - 2021",
        "time2_title": "Experiência na França",
        "time2_desc": "Pesquisadora Visitante na Université de Lille (França), trabalhando em projetos de ponta focados em energias renováveis.",
        "time3_date": "2023 - 2024",
        "time3_title": "PhD & Bolsista ELAP",
        "time3_desc": "Doutorado pela UFPE com período sanduíche no Canadá através do prestigiado programa ELAP (Governo Canadense).",
        "time4_date": "Atual",
        "time4_title": "Pós-Doc no Canadá",
        "time4_desc": "Pesquisadora de Pós-Doutorado na Polytechnique Montréal e Coordenadora do projeto europeu H2Excellence (Erasmus+).",

        "test_title_1": "O impacto nas ",
        "test_title_2": "carreiras",
        "test1_txt": "A orientação da Jildimara foi crucial para a minha aprovação na bolsa de Pós-Doc no Canadá. O nível de clareza estratégica e experiência que ela traz é inigualável.",
        "test1_role": "Pesquisadora Visitante",
        "test2_txt": "A consultoria sobre nanocatalisadores para o projeto de Hidrogênio Verde economizou meses de pesquisa na nossa empresa. Altamente capacitada tecnicamente.",
        "test2_role": "Engenheiro de P&D",

        "cont_title_1": "Vamos traçar sua rota ",
        "cont_title_2": "internacional?",
        "cont_desc": "Entre em contato para consultorias técnicas ou mentorias de carreira acadêmica.",
        "cont_name": "Seu Nome Completo",
        "cont_email": "Seu E-mail",
        "cont_msg": "Fale um pouco sobre seu momento acadêmico ou necessidade...",
        "cont_btn1": "Enviar Mensagem",
        "cont_btn2": "Agendar Sessão Estratégica",
        "cont_wpp": "Agendar WhatsApp",

        "foot_desc": "Estratégias de alto impacto para ciência, inovação e carreiras globais.",
        "foot_nav": "Navegação",
        "foot_pol": "Políticas",
        "foot_term": "Termos de Serviço",
        "foot_priv": "Privacidade",
        "foot_soc": "Redes",
        "foot_copy": "© 2026 Jildimara Santana. Todos os direitos reservados.",
        "nav_faq": "FAQ",
        "hero_typing": "internacional|global|de impacto|de excelência",
        "faq_title_1": "Perguntas ",
        "faq_title_2": "Frequentes",
        "faq_subtitle": "Tire suas dúvidas sobre mentorias, consultorias e processos internacionais.",
        "faq1_q": "Como funciona a Mentoria Internacional?",
        "faq1_a": "A mentoria é individual e personalizada. Analisamos seu currículo, definimos a melhor estratégia de candidatura (bolsas ELAP, pós-doc ou doutorado), e revisamos cartas de motivação e preparação para entrevistas.",
        "faq2_q": "Quem pode se candidatar à bolsa ELAP no Canadá?",
        "faq2_a": "Estudantes de graduação, mestrado e doutorado matriculados em universidades brasileiras que tenham convênio ou contato com pesquisadores de instituições canadenses. A bolsa cobre despesas de intercâmbio de pesquisa.",
        "faq3_q": "A consultoria de Hidrogênio Verde é para empresas ou pesquisadores?",
        "faq3_a": "A consultoria técnica atende tanto empresas que buscam desenvolver projetos de descarbonização e transição energética, quanto centros de pesquisa que necessitam de orientação técnica especializada em nanocatalisadores.",
        "faq4_q": "Como posso agendar uma sessão estratégica?",
        "faq4_a": "Você pode clicar nos botões de agendamento para escolher um horário disponível diretamente no meu Calendly, ou enviar uma mensagem pelo formulário de contato.",
        "modal_title": "Mensagem Enviada!",
        "modal_desc": "Obrigado pelo contato. Em breve responderei sua mensagem para traçarmos sua rota internacional!",
        "modal_btn": "Fechar",
        "nav_projects": "Projetos",
        "stats_xp": "Anos de Pesquisa",
        "stats_students": "Mentorados",
        "stats_papers": "Artigos & Projetos",
        "stats_countries": "Países de Atuação",
        "proj_title_1": "Pesquisa & ",
        "proj_title_2": "Projetos",
        "proj_subtitle": "Projetos científicos e publicações de impacto internacional.",
        "proj_f_all": "Todos",
        "proj_f_h2": "H2 Verde & Catálise",
        "proj_f_career": "Mentoria Acadêmica",
        "proj_f_pub": "Publicações",
        "proj1_title": "Programa H2Excellence",
        "proj1_desc": "Coordenação do projeto europeu H2Excellence (Erasmus+) focado no desenvolvimento de competências de excelência para a transição energética.",
        "proj2_title": "Nanocatalisadores Estruturados",
        "proj2_desc": "Publicação de artigo sobre a síntese e aplicação de nanocatalisadores para processos de catálise heterogênea e produção limpa de H2.",
        "proj3_title": "Guia Definitivo ELAP",
        "proj3_desc": "E-books e treinamentos completos para pesquisadores e estudantes obterem aprovação no prestigiado programa de bolsas ELAP (Canadá)."
    },
    "en": {
        "nav_home": "Home",
        "nav_about": "About",
        "nav_services": "Services",
        "nav_timeline": "Journey",
        "nav_testimonials": "Testimonials",
        "nav_contact": "Contact Me",
        
        "hero_subtitle": "Science, Innovation & Global Career",
        "hero_title_1": "Conquer your space with an ",
        "hero_title_2": "international",
        "hero_title_3": " academic career.",
        "hero_desc": "PhD in Materials Science and Post-Doc at Polytechnique Montréal. I guide researchers and professionals to achieve excellence and secure opportunities abroad.",
        "hero_btn1": "Schedule Mentoring",
        "hero_btn2": "Discover My Story",

        "about_title_1": "Global experience to boost your ",
        "about_title_2": "results.",
        "about_desc1": "I am Jildimara de Jesus Santana, an expert in Catalysis and Green Hydrogen, with vast international mobility experience (Canada, France, and China). My mission is to help talents build high-impact scientific careers.",
        "about_desc2": "Currently working as a Researcher and Coordinator of the H2Excellence European program at Polytechnique Montréal, I use my practical experience as an ELAP scholar to guide researchers toward global success.",
        "about_v1_title": "Global Vision",
        "about_v1_desc": "Strategies for approval abroad.",
        "about_v2_title": "Excellence",
        "about_v2_desc": "Scientific rigor and high-level networking.",

        "srv_title_1": "Solutions for your ",
        "srv_title_2": "Scientific Career",
        "srv_subtitle": "From planning to approval in international opportunities.",
        
        "srv1_title": "International Mentoring",
        "srv1_desc": "Intensive preparation for prestigious scholarships (ELAP) and Post-Doc selection processes in Canada and Europe.",
        "srv1_b1": "Application Review",
        "srv1_b2": "Motivation Letter Strategy",
        "srv1_b3": "Interview preparation",
        "srv1_btn": "Apply for Mentoring",

        "srv2_title": "Green H2 Consulting",
        "srv2_desc": "Specialized technical guidance in nanocatalyst synthesis, energy transition, and decarbonization for corporate projects.",
        "srv2_b1": "Technical Feasibility Analysis",
        "srv2_b2": "Hydrogen Technologies",
        "srv2_b3": "Focus on Heterogeneous Catalysis",
        "srv2_btn": "Request Consulting",

        "srv3_title": "Researcher's Guide",
        "srv3_desc": "Access to practical E-books and Masterclasses on structuring an attractive CV and optimizing scientific output.",
        "srv3_b1": "From Local to Global CV",
        "srv3_b2": "High-Impact Scientific Writing",
        "srv3_b3": "Immediate access",
        "srv3_btn": "Explore Materials",

        "time_title_1": "Global ",
        "time_title_2": "Journey",
        "time_subtitle": "From a researcher in Brazil to coordinating excellence in Canada.",
        "time1_date": "2015 - 2018",
        "time1_title": "Education & Research in Brazil",
        "time1_desc": "BSc in Petroleum Chemistry and MSc from UFRN. Where the scientific journey focused on sustainability began.",
        "time2_date": "2019 - 2021",
        "time2_title": "Experience in France",
        "time2_desc": "Visiting Researcher at Université de Lille (France), working on cutting-edge projects focused on renewable energies.",
        "time3_date": "2023 - 2024",
        "time3_title": "PhD & ELAP Scholar",
        "time3_desc": "PhD from UFPE with a sandwich period in Canada through the prestigious ELAP program (Canadian Government).",
        "time4_date": "Present",
        "time4_title": "Post-Doc in Canada",
        "time4_desc": "Post-Doctoral Researcher at Polytechnique Montréal and Coordinator of the European project H2Excellence (Erasmus+).",

        "test_title_1": "Impact on ",
        "test_title_2": "careers",
        "test1_txt": "Jildimara's guidance was crucial for my approval for a Post-Doc fellowship in Canada. Her strategic clarity and experience are unmatched.",
        "test1_role": "Visiting Researcher",
        "test2_txt": "The consulting on nanocatalysts for the Green Hydrogen project saved our company months of research. Highly technically qualified.",
        "test2_role": "R&D Engineer",

        "cont_title_1": "Let's chart your ",
        "cont_title_2": "international route?",
        "cont_desc": "Get in touch for technical consulting or academic career mentoring.",
        "cont_name": "Your Full Name",
        "cont_email": "Your Email",
        "cont_msg": "Tell me a bit about your academic situation or needs...",
        "cont_btn1": "Send Message",
        "cont_btn2": "Schedule Strategy Session",
        "cont_wpp": "Schedule via WhatsApp",

        "foot_desc": "High-impact strategies for science, innovation, and global careers.",
        "foot_nav": "Navigation",
        "foot_pol": "Policies",
        "foot_term": "Terms of Service",
        "foot_priv": "Privacy",
        "foot_soc": "Social",
        "foot_copy": "© 2026 Jildimara Santana. All rights reserved.",
        "nav_faq": "FAQ",
        "hero_typing": "international|global|high-impact|with excellence",
        "faq_title_1": "Frequently Asked ",
        "faq_title_2": "Questions",
        "faq_subtitle": "Find answers regarding mentorship, consulting, and international processes.",
        "faq1_q": "How does the International Mentorship work?",
        "faq1_a": "The mentorship is individual and personalized. We analyze your CV, define the best application strategy (ELAP scholarships, post-doc, or PhD), and review motivation letters and interview prep.",
        "faq2_q": "Who can apply for the ELAP scholarship in Canada?",
        "faq2_a": "Undergraduate, Master's, and PhD students enrolled in Brazilian universities that have an agreement or contact with researchers at Canadian institutions. The scholarship covers research exchange expenses.",
        "faq3_q": "Is the Green Hydrogen consulting for companies or researchers?",
        "faq3_a": "Technical consulting serves both companies looking to develop decarbonization and energy transition projects, and research centers that need specialized technical guidance in nanocatalysts.",
        "faq4_q": "How can I schedule a strategic session?",
        "faq4_a": "You can click the booking buttons to choose an available slot directly on my Calendly, or send a message via the contact form.",
        "modal_title": "Message Sent!",
        "modal_desc": "Thank you for reaching out. I will reply soon to plan your international journey!",
        "modal_btn": "Close",
        "nav_projects": "Projects",
        "stats_xp": "Years of Research",
        "stats_students": "Mentored",
        "stats_papers": "Articles & Projects",
        "stats_countries": "Countries Reached",
        "proj_title_1": "Research & ",
        "proj_title_2": "Projects",
        "proj_subtitle": "Scientific projects and publications with international impact.",
        "proj_f_all": "All",
        "proj_f_h2": "Green H2 & Catalysis",
        "proj_f_career": "Academic Mentoring",
        "proj_f_pub": "Publications",
        "proj1_title": "H2Excellence Program",
        "proj1_desc": "Coordination of the H2Excellence European project (Erasmus+) focused on developing competencies of excellence for energy transition.",
        "proj2_title": "Structured Nanocatalysts",
        "proj2_desc": "Article publication on the synthesis and application of nanocatalysts for heterogeneous catalysis and clean H2 production.",
        "proj3_title": "Ultimate ELAP Guide",
        "proj3_desc": "E-books and comprehensive training for researchers and students to gain approval in the prestigious ELAP scholarship program (Canada)."
    },
    "es": {
        "nav_home": "Inicio",
        "nav_about": "Sobre Mí",
        "nav_services": "Servicios",
        "nav_timeline": "Trayectoria",
        "nav_testimonials": "Testimonios",
        "nav_contact": "Contáctame",
        
        "hero_subtitle": "Ciencia, Innovación y Carrera Global",
        "hero_title_1": "Conquista tu espacio con una carrera académica ",
        "hero_title_2": "internacional",
        "hero_title_3": ".",
        "hero_desc": "PhD en Ciencia de Materiales y Posdoctorado en Polytechnique Montréal. Oriento a investigadores a alcanzar la excelencia y asegurar oportunidades en el extranjero.",
        "hero_btn1": "Agendar Mentoría",
        "hero_btn2": "Conoce Mi Historia",

        "about_title_1": "Experiencia global para impulsar tus ",
        "about_title_2": "resultados.",
        "about_desc1": "Soy Jildimara de Jesus Santana, experta en Catálisis e Hidrógeno Verde, con amplia experiencia de movilidad internacional (Canadá, Francia y China). Mi misión es ayudar a estructurar carreras de alto impacto.",
        "about_desc2": "Actualmente Investigadora y Coordinadora del programa europeo H2Excellence en Polytechnique Montréal, utilizo mi experiencia como becaria ELAP para guiar a investigadores hacia el éxito global.",
        "about_v1_title": "Visión Global",
        "about_v1_desc": "Estrategias para aprobación en el extranjero.",
        "about_v2_title": "Excelencia",
        "about_v2_desc": "Rigor científico y networking de alto nivel.",

        "srv_title_1": "Soluciones para tu ",
        "srv_title_2": "Carrera Científica",
        "srv_subtitle": "Desde la planificación hasta la aprobación en oportunidades internacionales.",
        
        "srv1_title": "Mentoría Internacional",
        "srv1_desc": "Preparación intensiva para becas de prestigio (ELAP) y procesos de selección de Posdoctorado en Canadá y Europa.",
        "srv1_b1": "Revisión de Aplicación",
        "srv1_b2": "Estrategia de Carta de Motivación",
        "srv1_b3": "Preparación de entrevistas",
        "srv1_btn": "Aplicar a la Mentoría",

        "srv2_title": "Consultoría en H2 Verde",
        "srv2_desc": "Orientación técnica en síntesis de nanocatalizadores, transición energética y descarbonización para proyectos corporativos.",
        "srv2_b1": "Análisis de Viabilidad Técnica",
        "srv2_b2": "Tecnologías de Hidrógeno",
        "srv2_b3": "Enfoque en Catálisis Heterogénea",
        "srv2_btn": "Solicitar Consultoría",

        "srv3_title": "Guía del Investigador",
        "srv3_desc": "E-books y Masterclasses prácticas sobre cómo estructurar un CV atractivo y optimizar la producción científica.",
        "srv3_b1": "Del CV Local al Global",
        "srv3_b2": "Redacción Científica de Impacto",
        "srv3_b3": "Acceso inmediato",
        "srv3_btn": "Explorar Materiales",

        "time_title_1": "Trayectoria ",
        "time_title_2": "Global",
        "time_subtitle": "De investigadora en Brasil a coordinación de excelencia en Canadá.",
        "time1_date": "2015 - 2018",
        "time1_title": "Formación en Brasil",
        "time1_desc": "Licenciatura en Química del Petróleo y Maestría en la UFRN. Donde comenzó la vocación por la sostenibilidad.",
        "time2_date": "2019 - 2021",
        "time2_title": "Experiencia en Francia",
        "time2_desc": "Investigadora Visitante en la Université de Lille (Francia), en proyectos de vanguardia en energías renovables.",
        "time3_date": "2023 - 2024",
        "time3_title": "PhD y Becaria ELAP",
        "time3_desc": "Doctorado por la UFPE con período sándwich en Canadá a través del prestigioso programa ELAP.",
        "time4_date": "Actual",
        "time4_title": "Posdoc en Canadá",
        "time4_desc": "Investigadora en Polytechnique Montréal y Coordinadora del proyecto europeo H2Excellence (Erasmus+).",

        "test_title_1": "Impacto en las ",
        "test_title_2": "carreras",
        "test1_txt": "La orientación de Jildimara fue crucial para mi aprobación en un Posdoc en Canadá. Su claridad estratégica es inigualable.",
        "test1_role": "Investigadora Visitante",
        "test2_txt": "La consultoría en nanocatalizadores nos ahorró meses de investigación. Altamente cualificada técnicamente.",
        "test2_role": "Ingeniero de I+D",

        "cont_title_1": "¿Trazamos tu ruta ",
        "cont_title_2": "internacional?",
        "cont_desc": "Ponte en contacto para consultoría técnica o mentoría académica.",
        "cont_name": "Nombre Completo",
        "cont_email": "Correo Electrónico",
        "cont_msg": "Cuéntame sobre tus necesidades académicas...",
        "cont_btn1": "Enviar Mensaje",
        "cont_btn2": "Agendar Sesión Estratégica",
        "cont_wpp": "Agendar vía WhatsApp",

        "foot_desc": "Estrategias de alto impacto para ciencia y carreras globales.",
        "foot_nav": "Navegación",
        "foot_pol": "Políticas",
        "foot_term": "Términos de Servicio",
        "foot_priv": "Privacidad",
        "foot_soc": "Redes",
        "foot_copy": "© 2026 Jildimara Santana. Todos los derechos reservados.",
        "nav_faq": "FAQ",
        "hero_typing": "internacional|global|de impacto|con excelencia",
        "faq_title_1": "Preguntas ",
        "faq_title_2": "Frecuentes",
        "faq_subtitle": "Resuelva sus dudas sobre mentorías, consultorías y prcesos internacionales.",
        "faq1_q": "¿Cómo funciona la Mentoría Internacional?",
        "faq1_a": "La mentoría es individual y personalizada. Analizamos su currículum, definimos la mejor estrategia de postulación (becas ELAP, posdoctorado o doctorado), y revisamos cartas de motivación y preparación para entrevistas.",
        "faq2_q": "¿Quién puede postularse a la beca ELAP en Canadá?",
        "faq2_a": "Estudiantes de grado, maestría y doctorado matriculados en universidades brasileñas que tengan convenio o contacto com investigadores en instituciones canadienses. La beca cubre los gastos de intercambio de investigación.",
        "faq3_q": "¿La consultoría de Hidrógeno Verde es para empresas o investigadores?",
        "faq3_a": "La consultoría técnica atiende tanto a empresas que buscan desarrollar proyectos de descarbonización y transición energética, como a centros de investigación que requieren orientación técnica especializada en nanocatalizadores.",
        "faq4_q": "¿Cómo puedo programar una sesión estratégica?",
        "faq4_a": "Puede hacer clic en los botones de programación para elegir un horario disponible directamente en mi Calendly, o enviar un mensaje a través del formulario de contacto.",
        "modal_title": "¡Mensaje Enviado!",
        "modal_desc": "Gracias por ponerse en contacto. Le responderé pronto para planificar su ruta internacional.",
        "modal_btn": "Cerrar",
        "nav_projects": "Proyectos",
        "stats_xp": "Años de Investigación",
        "stats_students": "Mentorados",
        "stats_papers": "Artículos & Proyectos",
        "stats_countries": "Países de Actuación",
        "proj_title_1": "Investigación & ",
        "proj_title_2": "Proyectos",
        "proj_subtitle": "Proyectos científicos y publicaciones de impacto internacional.",
        "proj_f_all": "Todos",
        "proj_f_h2": "H2 Verde & Catálisis",
        "proj_f_career": "Mentoría Académica",
        "proj_f_pub": "Publicaciones",
        "proj1_title": "Programa H2Excellence",
        "proj1_desc": "Coordinación del proyecto europeo H2Excellence (Erasmus+) centrado en el desarrollo de capacidades de excelencia para la transición energética.",
        "proj2_title": "Nanocatalizadores Estructurados",
        "proj2_desc": "Publicación de artículo sobre la síntese y aplicação de nanocatalizadores para procesos de catálisis heterogênea y producción limpia de H2.",
        "proj3_title": "Guia Definitiva ELAP",
        "proj3_desc": "Libros electrónicos y formación integral para que investigadores y estudiantes obtengan la aprobación del prestigioso programa de becas ELAP (Canadá)."
    },
    "fr": {
        "nav_home": "Accueil",
        "nav_about": "À Propos",
        "nav_services": "Services",
        "nav_timeline": "Parcours",
        "nav_testimonials": "Témoignages",
        "nav_contact": "Contact",
        
        "hero_subtitle": "Science, Innovation & Carrière Mondiale",
        "hero_title_1": "Conquérez votre espace avec une carrière académique ",
        "hero_title_2": "internationale",
        "hero_title_3": ".",
        "hero_desc": "PhD en Science des Matériaux et Post-Doc à Polytechnique Montréal. J'accompagne les chercheurs vers l'excellence et les opportunités à l'étranger.",
        "hero_btn1": "Planifier un Mentorat",
        "hero_btn2": "Découvrir Mon Histoire",

        "about_title_1": "Une expérience mondiale pour booster vos ",
        "about_title_2": "résultats.",
        "about_desc1": "Je suis Jildimara de Jesus Santana, experte en Catalyse et Hydrogène Vert, avec une vaste expérience internationale (Canada, France et Chine).",
        "about_desc2": "Actuellement Chercheuse et Coordinatrice du programme européen H2Excellence à Polytechnique Montréal, j'utilise mon expérience pour guider vers le succès mondial.",
        "about_v1_title": "Vision Mondiale",
        "about_v1_desc": "Stratégies d'approbation à l'étranger.",
        "about_v2_title": "Excellence",
        "about_v2_desc": "Rigueur scientifique et réseau de haut niveau.",

        "srv_title_1": "Solutions pour votre ",
        "srv_title_2": "Carrière Scientifique",
        "srv_subtitle": "De la planification à l'approbation d'opportunités internationales.",
        
        "srv1_title": "Mentorat International",
        "srv1_desc": "Préparation intensive pour des bourses prestigieuses (PFLA) et processus de sélection Post-Doc au Canada et en Europe.",
        "srv1_b1": "Révision de Dossier",
        "srv1_b2": "Stratégie de Lettre de Motivation",
        "srv1_b3": "Préparation aux entretiens",
        "srv1_btn": "Postuler au Mentorat",

        "srv2_title": "Conseil H2 Vert",
        "srv2_desc": "Conseil technique en synthèse de nanocatalyseurs, transition énergétique et décarbonation.",
        "srv2_b1": "Analyse de Faisabilité",
        "srv2_b2": "Technologies de l'Hydrogène",
        "srv2_b3": "Focus sur la Catalyse Hétérogène",
        "srv2_btn": "Demander un Conseil",

        "srv3_title": "Guide du Chercheur",
        "srv3_desc": "Accès à des E-books pour structurer un CV attrayant et optimiser la production scientifique.",
        "srv3_b1": "Du CV local au CV mondial",
        "srv3_b2": "Rédaction Scientifique",
        "srv3_b3": "Accès immédiat",
        "srv3_btn": "Explorer les Matériaux",

        "time_title_1": "Parcours ",
        "time_title_2": "Mondial",
        "time_subtitle": "De chercheuse au Brésil à la coordination d'excellence au Canada.",
        "time1_date": "2015 - 2018",
        "time1_title": "Formation au Brésil",
        "time1_desc": "BSc en Chimie du Pétrole et MSc à l'UFRN. Le début du voyage scientifique.",
        "time2_date": "2019 - 2021",
        "time2_title": "Expérience en France",
        "time2_desc": "Chercheuse Invitée à l'Université de Lille, sur des projets d'énergies renouvelables.",
        "time3_date": "2023 - 2024",
        "time3_title": "PhD & Boursière PFLA",
        "time3_desc": "Doctorat de l'UFPE avec une période au Canada via le prestigieux programme PFLA.",
        "time4_date": "Actuel",
        "time4_title": "Post-Doc au Canada",
        "time4_desc": "Chercheuse à Polytechnique Montréal et Coordinatrice du projet européen H2Excellence.",

        "test_title_1": "L'impact sur les ",
        "test_title_2": "carrières",
        "test1_txt": "Les conseils de Jildimara ont été cruciaux pour mon Post-Doc au Canada. Sa clarté est inégalée.",
        "test1_role": "Chercheuse Invitée",
        "test2_txt": "Le conseil en nanocatalyseurs nous a fait gagner des mois de recherche.",
        "test2_role": "Ingénieur R&D",

        "cont_title_1": "Traçons votre route ",
        "cont_title_2": "internationale ?",
        "cont_desc": "Contactez-moi pour des conseils techniques ou un mentorat académique.",
        "cont_name": "Nom Complet",
        "cont_email": "Votre E-mail",
        "cont_msg": "Parlez-moi de vos besoins académiques...",
        "cont_btn1": "Envoyer le Message",
        "cont_btn2": "Planifier une Session",
        "cont_wpp": "WhatsApp",

        "foot_desc": "Stratégies d'impact pour la science, l'innovation et les carrières mondiales.",
        "foot_nav": "Navigation",
        "foot_pol": "Politiques",
        "foot_term": "Conditions de Service",
        "foot_priv": "Confidentialité",
        "foot_soc": "Réseaux",
        "foot_copy": "© 2026 Jildimara Santana. Tous droits réservés.",
        "nav_faq": "FAQ",
        "hero_typing": "internationale|globale|d'impact|avec excellence",
        "faq_title_1": "Questions ",
        "faq_title_2": "Fréquentes",
        "faq_subtitle": "Trouvez des réponses concernant le mentorat, le conseil et les processus internationaux.",
        "faq1_q": "Comment fonctionne le Mentorat International ?",
        "faq1_a": "Le mentorat est individuel et personnalisé. Nous analysons votre CV, définissons la meilleure stratégie de candidature (bourses PFLA, post-doc ou doctorat), et révisons les lettres de motivation et la préparation aux entretiens.",
        "faq2_q": "Qui peut postuler à la bourse PFLA au Canada ?",
        "faq2_a": "Étudiants de licence, maîtrise et doctorat inscrits dans des universités brésiliennes ayant un accord ou un contact avec des chercheurs d'institutions canadiennes. La bourse couvre les frais de recherche.",
        "faq3_q": "Le conseil en Hydrogène Vert s'adresse-t-il aux entreprises ou aux chercheurs ?",
        "faq3_a": "Le conseil technique s'adresse à la fois aux entreprises cherchant à développer des projets de décarbonation et de transition énergétique, et aux centres de recherche ayant besoin d'une expertise en nanocatalyseurs.",
        "faq4_q": "Comment puis-je planifier une session stratégique ?",
        "faq4_a": "Vous pouvez cliquer sur les boutons de réservation pour choisir un créneau horaire disponible directement sur mon Calendly, ou envoyer un message via le formulaire de contact.",
        "modal_title": "Message Envoyé !",
        "modal_desc": "Merci de m'avoir contactée. Je vous répondrai bientôt pour planifier votre parcours international !",
        "modal_btn": "Fermer",
        "nav_projects": "Projets",
        "stats_xp": "Années de Recherche",
        "stats_students": "Mentorés",
        "stats_papers": "Articles & Projets",
        "stats_countries": "Pays d'Activité",
        "proj_title_1": "Recherche & ",
        "proj_title_2": "Projets",
        "proj_subtitle": "Projets scientifiques et publications d'impact international.",
        "proj_f_all": "Tout",
        "proj_f_h2": "H2 Vert & Catalyse",
        "proj_f_career": "Mentorat Académique",
        "proj_f_pub": "Publications",
        "proj1_title": "Programme H2Excellence",
        "proj1_desc": "Coordination du projet européen H2Excellence (Erasmus+) axé sur le développement de compétences d'excellence pour la transition énergétique.",
        "proj2_title": "Nanocatalyseurs Structurés",
        "proj2_desc": "Publication d'article sur la synthèse et l'application de nanocatalyseurs pour la catalyse hétérogène et la production propre d'H2.",
        "proj3_title": "Guide Ultime PFLA",
        "proj3_desc": "E-books et formations complètes pour que les chercheurs et les étudiants obtiennent l'approbation du prestigieux programme de bourses PFLA (Canada)."
    }
};

const langSelect = document.getElementById('lang-select');
const i18nElements = document.querySelectorAll('[data-i18n]');
const i18nPlaceholders = document.querySelectorAll('[data-i18n-placeholder]');

let typingInterval;
const startTypingAnimation = (language) => {
    clearInterval(typingInterval);
    const typingTextEl = document.getElementById('typing-text');
    if (!typingTextEl) return;
    
    const wordsString = translations[language]["hero_typing"] || "internacional|global";
    const words = wordsString.split('|');
    let wordIndex = 0;
    let charIndex = words[wordIndex].length;
    let isDeleting = true;
    let typingSpeed = 100;
    
    const type = () => {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typingTextEl.innerHTML = currentWord.substring(0, charIndex);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingTextEl.innerHTML = currentWord.substring(0, charIndex);
            charIndex++;
            typingSpeed = 150;
        }
        
        if (!isDeleting && charIndex > currentWord.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            charIndex = 0;
            typingSpeed = 500; // Pause before start
        }
        
        typingInterval = setTimeout(type, typingSpeed);
    };
    
    typingInterval = setTimeout(type, 1000);
};

const setLanguage = (language) => {
    i18nElements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key === 'hero_title_2') return; // Handled by typing animation
        if (translations[language] && translations[language][key]) {
            el.innerHTML = translations[language][key];
        }
    });

    i18nPlaceholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[language] && translations[language][key]) {
            el.setAttribute('placeholder', translations[language][key]);
        }
    });
    
    startTypingAnimation(language);
};

if (langSelect) {
    langSelect.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });
}

// Initial setup
setLanguage('pt');

/*=============== SCROLL REVEAL ANIMATION ===============*/
const revealElements = document.querySelectorAll('.section__title, .service__card, .timeline__item, .testimonial__card, .about__img-wrapper, .about__data');

const revealCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
};

const revealOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach((el) => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
	window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						  : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== FAQ ACCORDION ===============*/
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
    const faqHeader = item.querySelector('.faq__header');

    faqHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.faq-open');

        toggleItem(item);

        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    });
});

const toggleItem = (item) => {
    const faqContent = item.querySelector('.faq__content');

    if (item.classList.contains('faq-open')) {
        faqContent.removeAttribute('style');
        item.classList.remove('faq-open');
    } else {
        faqContent.style.height = faqContent.scrollHeight + 'px';
        faqContent.style.maxHeight = 'none';
        item.classList.add('faq-open');
    }
};

/*=============== CONTACT FORM SUBMISSION ===============*/
const contactForm = document.querySelector('.contact__form');
const contactModal = document.getElementById('contact-modal');
const modalClose = document.getElementById('modal-close');
const modalBtn = document.getElementById('modal-btn');
const formBtn = document.querySelector('.form__btn');
const formBtnText = formBtn.querySelector('span');
const formBtnIcon = formBtn.querySelector('i');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show loading state
        const originalText = formBtnText.innerHTML;
        const originalIconClass = formBtnIcon.className;
        
        formBtnText.innerHTML = "Enviando...";
        formBtnIcon.className = "ph ph-spinner-gap spinner";
        formBtn.style.pointerEvents = "none";
        formBtn.style.opacity = "0.8";
        formBtnIcon.style.animation = "spin 1s linear infinite";
        
        setTimeout(() => {
            // Reset button state
            formBtnText.innerHTML = originalText;
            formBtnIcon.className = originalIconClass;
            formBtnIcon.removeAttribute('style');
            formBtn.removeAttribute('style');
            
            // Show modal
            if (contactModal) contactModal.classList.add('active-modal');
            
            // Reset form
            contactForm.reset();
        }, 1500);
    });
}

// Modal closing logic
const closeModal = () => {
    if (contactModal) contactModal.classList.remove('active-modal');
};

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalBtn) modalBtn.addEventListener('click', closeModal);
if (contactModal) {
    contactModal.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            closeModal();
        }
    });
}

/*=============== DARK LIGHT THEME LOGIC ===============*/
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'

const selectedTheme = localStorage.getItem('selected-theme')

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'light' : 'dark'

if (selectedTheme === 'light') {
  document.body.classList.add(lightTheme)
  if (themeButton) {
    themeButton.classList.replace('ph-moon', 'ph-sun')
  }
}

if (themeButton) {
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(lightTheme)
        if (document.body.classList.contains(lightTheme)) {
            themeButton.classList.replace('ph-moon', 'ph-sun')
        } else {
            themeButton.classList.replace('ph-sun', 'ph-moon')
        }
        localStorage.setItem('selected-theme', getCurrentTheme())
    })
}

/*=============== ANIMATED STATS COUNTER LOGIC ===============*/
const statsNumbers = document.querySelectorAll('.stats__number');
const statsSection = document.getElementById('stats');

const countUp = (el) => {
    const target = +el.getAttribute('data-target');
    let count = 0;
    const speed = target / 40; // speed of counting up
    
    const updateCount = () => {
        if (count < target) {
            count += Math.ceil(speed);
            if (count > target) count = target;
            el.innerHTML = count;
            setTimeout(updateCount, 40);
        } else {
            el.innerHTML = target;
        }
    };
    updateCount();
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            statsNumbers.forEach((num) => countUp(num));
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

if (statsSection) {
    statsObserver.observe(statsSection);
}

/*=============== PROJECTS FILTER LOGIC ===============*/
const projectFilterItems = document.querySelectorAll('.projects__item');
const projectCards = document.querySelectorAll('.project__card');

projectFilterItems.forEach((filter) => {
    filter.addEventListener('click', () => {
        projectFilterItems.forEach((f) => f.classList.remove('active-project'));
        filter.classList.add('active-project');
        
        const filterValue = filter.getAttribute('data-filter');
        
        projectCards.forEach((card) => {
            if (filterValue === 'all') {
                card.classList.remove('hide-project');
                card.style.animation = 'fadeIn 0.5s ease-out';
            } else {
                if (card.classList.contains(filterValue.substring(1))) {
                    card.classList.remove('hide-project');
                    card.style.animation = 'fadeIn 0.5s ease-out';
                } else {
                    card.classList.add('hide-project');
                }
            }
        });
    });
});
