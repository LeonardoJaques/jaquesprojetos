/**
 * @fileoverview Main JavaScript file for the portfolio website.
 * Handles language switching, cookie management, privacy policy, header scroll and works filter.
 * @author Leonardo Jaques
 */

/**
 * Object containing all translations for the website.
 * @const {Object}
 */
const translations = {
    pt: {
        "role": "Solution Architect | Tech Lead | Engenheiro de Software",
        "hero-meta": "Rio de Janeiro · Disponível para projetos",
        "nav-works": "Trabalhos",
        "nav-about": "Sobre",
        "nav-contact": "Contato",
        "works-label": "TRABALHOS",
        "filter-all": "Todos",
        "filter-web": "Web",
        "filter-mobile": "Mobile",
        "filter-sistemas": "Sistemas",
        "employers-label": "ONDE TRABALHEI",
        "about-label": "SOBRE",
        "about-heading": "Software com propósito",
        "tech-label": "TECNOLOGIAS",
        "contact-label": "CONTATO",
        "tagline": "Transformo ideias em soluções digitais",
        "tagline-full": "Com um perfil multidisciplinar, uno habilidades técnicas e estratégicas para entregar produtos inovadores e com foco em resultados.",
        "hero-title": "Desenvolvimento de Software Profissional",
        "hero-text": "Criamos sites, aplicativos e sistemas personalizados para impulsionar seu negócio. Soluções modernas, rápidas e eficientes com o aroma do melhor código.",
        "learn-more": "$ Conhecer Mais",
        "service1-title": "Sites & E-commerce",
        "service1-desc": "Landing pages, sites institucionais e lojas virtuais responsivas e otimizadas.",
        "service2-title": "Aplicativos Mobile",
        "service2-desc": "Apps para iOS e Android com design moderno e funcionalidades intuitivas.",
        "service3-title": "Sistemas Web",
        "service3-desc": "Painéis administrativos, CRMs e sistemas personalizados para sua empresa.",
        "podcast-title": "Podcast",
        "podcast-intro": "Conversas sobre programação em dupla, desenvolvimento colaborativo e as melhores práticas de código.",
        "podcast-desc": "Explorando a arte da programação em pares, compartilhando experiências, técnicas e histórias do desenvolvimento colaborativo. Código melhor, junto.",
        "listen-now": "▶ Ouvir Agora",
        "blog-title": "Blog Técnico",
        "blog-intro": "Artigos sobre desenvolvimento, arquitetura de software e tecnologias emergentes.",
        "blog-name": "Convergência",
        "blog-desc": "Explorando a interseção entre tecnologia, desenvolvimento e inovação. Artigos aprofundados sobre arquitetura de software, boas práticas, ferramentas e tendências do mercado tech.",
        "visit-blog": "▶ Visitar Blog",
        "about-title": "Sobre Leonardo Jaques",
        "about-desc": "Arquiteto de Soluções e Tech Lead com sólida experiência em desenho de arquitetura de software, modernização de sistemas legados e liderança técnica. Atualmente focado em soluções de alta performance utilizando Java, Cloud Computing e Big Data (Databricks). Background diversificado em desenvolvimento Full Stack (Java/Kotlin, React, Node.js) e mobile. Entusiasta de tecnologias open-source, boas práticas de engenharia de software e metodologias ágeis.",
        "download-cv": "$ download --curriculo",
        "tech-lang": "Linguagens",
        "tech-tools": "Ferramentas & Dados",
        "tech-arch": "Arquitetura & Metodologias",
        "contact-title": "Vamos conversar sobre seu projeto?",
        "contact-text": "Entre em contato para uma consultoria gratuita e orçamento personalizado.",
        "footer": "© 2026 Jaqueprojetos. Desenvolvendo o futuro digital, um café por vez. ☕",
        "privacy-title": "Aviso de Privacidade & Cookies",
        "privacy-text1": "Este site utiliza cookies e ferramentas de rastreamento (como Google Analytics) para coletar métricas de navegação — páginas visitadas, tempo de acesso e origem do tráfego — com o objetivo de melhorar a experiência do usuário.",
        "privacy-text2": "Os dados de contato fornecidos são usados exclusivamente para comunicação profissional. Nenhuma informação pessoal é compartilhada com terceiros sem consentimento prévio, em conformidade com a LGPD (Lei nº 13.709/2018).",
        "privacy-text3": "Ao clicar em Aceito, você consente com o uso de cookies de rastreamento. Ao recusar, apenas cookies essenciais serão mantidos. Sua escolha é salva e este aviso não será exibido novamente.",
        "card-desc-portfolio": "Portfolio pessoal com tema terminal/cyberpunk. Site estático com i18n PT/EN, LGPD consent modal e animações CSS.",
        "card-desc-podcast": "Podcast sobre desenvolvimento de software, arquitetura e carreira em tech. Episódios, transcrições e recursos para devs.",
        "card-desc-blog": "Blog técnico sobre arquitetura de software, boas práticas e tendências do mercado de desenvolvimento.",
        "card-desc-kanban": "Gerenciador de tarefas com drag-and-drop, múltiplos boards e persistência local. Desenvolvido em React e TypeScript.",
        "card-desc-java": "APIs RESTful com Quarkus, Spring Security, JWT, JPA/Hibernate e documentação via Swagger/OpenAPI.",
        "card-desc-qrcode": "Gerador de QR Code para pagamentos via Pix. Suporte a chaves CPF, CNPJ, email, telefone e chave aleatória.",
        "accept": "Aceito",
        "decline": "Não Aceito"
    },
    en: {
        "role": "Solution Architect | Tech Lead | Software Engineer",
        "hero-meta": "Rio de Janeiro · Available for projects",
        "nav-works": "Works",
        "nav-about": "About",
        "nav-contact": "Contact",
        "works-label": "WORKS",
        "filter-all": "All",
        "filter-web": "Web",
        "filter-mobile": "Mobile",
        "filter-sistemas": "Systems",
        "employers-label": "WHERE I'VE WORKED",
        "about-label": "ABOUT",
        "about-heading": "Software with purpose",
        "tech-label": "TECHNOLOGIES",
        "contact-label": "CONTACT",
        "tagline": "I transform ideas into digital solutions",
        "tagline-full": "With a multidisciplinary profile, I combine technical and strategic skills to deliver innovative products focused on results.",
        "hero-title": "Professional Software Development",
        "hero-text": "We create custom websites, applications and systems to boost your business. Modern, fast and efficient solutions with the aroma of the best code.",
        "learn-more": "$ Learn More",
        "service1-title": "Websites & E-commerce",
        "service1-desc": "Landing pages, corporate websites and responsive, optimized online stores.",
        "service2-title": "Mobile Applications",
        "service2-desc": "iOS and Android apps with modern design and intuitive features.",
        "service3-title": "Web Systems",
        "service3-desc": "Administrative dashboards, CRMs and custom systems for your company.",
        "podcast-title": "Podcast",
        "podcast-intro": "Conversations about pair programming, collaborative development and code best practices.",
        "podcast-desc": "Exploring the art of pair programming, sharing experiences, techniques and stories from collaborative development. Better code, together.",
        "listen-now": "▶ Listen Now",
        "blog-title": "Tech Blog",
        "blog-intro": "Articles about development, software architecture and emerging technologies.",
        "blog-name": "Convergência",
        "blog-desc": "Exploring the intersection between technology, development and innovation. In-depth articles about software architecture, best practices, tools and tech market trends.",
        "visit-blog": "▶ Visit Blog",
        "about-title": "About Leonardo Jaques",
        "about-desc": "Solution Architect and Tech Lead with solid experience in software architecture design, legacy system modernization, and technical leadership. Currently focused on high-performance solutions using Java, Cloud Computing, and Big Data (Databricks). Diverse background in Full Stack development (Java/Kotlin, React, Node.js) and mobile. Enthusiast of open-source technologies, software engineering best practices, and agile methodologies.",
        "download-cv": "$ download --resume",
        "tech-lang": "Languages",
        "tech-tools": "Tools & Data",
        "tech-arch": "Architecture & Methodologies",
        "contact-title": "Let's talk about your project?",
        "contact-text": "Get in touch for a free consultation and personalized quote.",
        "footer": "© 2026 Jaqueprojetos. Building the digital future, one coffee at a time. ☕",
        "privacy-title": "Privacy & Cookies Notice",
        "privacy-text1": "This website uses cookies and tracking tools (such as Google Analytics) to collect browsing metrics — pages visited, time on site and traffic sources — in order to improve user experience.",
        "privacy-text2": "Contact information provided is used exclusively for professional communication. No personal data is shared with third parties without prior consent, in compliance with the LGPD (Brazilian General Data Protection Law No. 13.709/2018).",
        "privacy-text3": "By clicking Accept, you consent to the use of tracking cookies. If you decline, only essential cookies will be kept. Your choice is saved and this notice will not appear again.",
        "card-desc-portfolio": "Personal portfolio with terminal/cyberpunk theme. Static site with PT/EN i18n, LGPD consent modal and CSS animations.",
        "card-desc-podcast": "Podcast about software development, architecture and tech careers. Episodes, transcripts and resources for devs.",
        "card-desc-blog": "Tech blog about software architecture, best practices and development market trends.",
        "card-desc-kanban": "Task manager with drag-and-drop, multiple boards and local persistence. Built with React and TypeScript.",
        "card-desc-java": "RESTful APIs with Quarkus, Spring Security, JWT, JPA/Hibernate and documentation via Swagger/OpenAPI.",
        "card-desc-qrcode": "QR Code generator for Pix payments. Supports CPF, CNPJ, email, phone and random key types.",
        "accept": "Accept",
        "decline": "Decline"
    }
};

/**
 * Switches the site language and updates the UI.
 * @param {string} lang - The language code ('pt' or 'en').
 */
const switchLanguage = (lang) => {
    document.querySelectorAll('.lang-option').forEach(opt => opt.classList.remove('active'));
    document.querySelectorAll('[data-privacy-lang]').forEach(opt => opt.classList.remove('active'));

    const selectedBtn = document.querySelector(`[data-lang="${lang}"]`);
    if (selectedBtn) selectedBtn.classList.add('active');
    const privacyBtn = document.querySelector(`[data-privacy-lang="${lang}"]`);
    if (privacyBtn) privacyBtn.classList.add('active');

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    localStorage.setItem('preferredLanguage', lang);

    // Update CV download link based on language
    const cvBtn = document.getElementById('btn-cv-download');
    if (cvBtn) {
        cvBtn.href = lang === 'pt' ? 'Leonardo_Jaques_Curriculo.pdf' : 'Leonardo_Jaques_Resume.pdf';
    }
};

/**
 * Sets a cookie.
 * @param {string} name - Cookie name.
 * @param {string} value - Cookie value.
 * @param {number} days - Number of days until expiration.
 */
const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

/**
 * Retrieves a cookie value by name.
 * @param {string} name - Cookie name.
 * @returns {string|null} The cookie value or null if not found.
 */
const getCookie = (name) => {
    const nameEQ = name + "=";
    for (let c of document.cookie.split(';')) {
        c = c.trim();
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
};

/** Handles privacy policy acceptance. */
const acceptPrivacy = () => {
    setCookie('privacyAccepted', 'true', 365);
    document.getElementById('privacyOverlay')?.classList.remove('show');
};

/** Handles privacy policy decline. */
const declinePrivacy = () => {
    setCookie('privacyAccepted', 'false', 365);
    document.getElementById('privacyOverlay')?.classList.remove('show');
    const lang = localStorage.getItem('preferredLanguage') || 'pt';
    alert(lang === 'pt'
        ? 'Você optou por não aceitar nossa política de privacidade. Algumas funcionalidades podem ser limitadas.'
        : 'You chose not to accept our privacy policy. Some features may be limited.');
};

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {

    // --- Language ---
    const savedLang = localStorage.getItem('preferredLanguage') || 'pt';
    switchLanguage(savedLang);
    document.getElementById('lang-pt')?.addEventListener('click', () => switchLanguage('pt'));
    document.getElementById('lang-en')?.addEventListener('click', () => switchLanguage('en'));

    // --- Privacy ---
    document.getElementById('btn-accept')?.addEventListener('click', acceptPrivacy);
    document.getElementById('btn-decline')?.addEventListener('click', declinePrivacy);

    // Privacy modal language toggle
    document.querySelectorAll('[data-privacy-lang]').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.privacyLang;
            document.querySelectorAll('[data-privacy-lang]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            switchLanguage(lang);
        });
    });

    if (!getCookie('privacyAccepted')) {
        document.getElementById('privacyOverlay')?.classList.add('show');
    }

    // --- Header scroll behavior ---
    const header = document.getElementById('siteHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    }, { passive: true });

    // --- Works filter ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workCards = document.querySelectorAll('.work-card');
    const worksCount = document.getElementById('worksCount');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            let visible = 0;
            workCards.forEach(card => {
                if (category === 'todos' || card.dataset.category === category) {
                    card.classList.remove('hidden');
                    visible++;
                } else {
                    card.classList.add('hidden');
                }
            });

            if (worksCount) {
                worksCount.textContent = `${visible} projeto${visible !== 1 ? 's' : ''}`;
            }
        });
    });

    // --- Hamburger menu ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger?.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    navLinks?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // --- Scroll animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

    // --- Theme toggle ---
    const toggleTheme = () => {
        const isLight = document.documentElement.classList.toggle('light');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    };
    document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);

    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
