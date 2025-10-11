const translations = {
    pt: {
        "logo": "cat about.txt",
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
        "role": "Arquiteto de Software & Desenvolvedor Full Stack",
        "about-desc": "Arquiteto de software e desenvolvedor full stack apaixonado por tecnologia, com ampla experiência em criar soluções digitais escaláveis e robustas. Especializado em arquitetura de sistemas, microserviços e boas práticas de desenvolvimento. Cada projeto é desenvolvido com excelência técnica, atenção aos detalhes e foco em entregar valor real ao negócio.",
        "download-cv": "$ download --cv",
        "contact-title": "Vamos conversar sobre seu projeto?",
        "contact-text": "Entre em contato para uma consultoria gratuita e orçamento personalizado.",
        "footer": "© 2025 Jaqueprojetos. Desenvolvendo o futuro digital, um café por vez. ☕",
        "privacy-title": "Aviso de Privacidade",
        "privacy-text1": "Os dados de contato fornecidos neste site são utilizados exclusivamente para comunicação profissional e comercial. Informações de navegação podem ser coletadas para melhorar a experiência do usuário através de cookies e ferramentas de análise.",
        "privacy-text2": "Seus dados não serão compartilhados com terceiros sem consentimento prévio. Ao utilizar este site, você concorda com o uso responsável e ético das suas informações conforme a Lei Geral de Proteção de Dados (LGPD).",
        "accept": "Aceito",
        "decline": "Não Aceito"
    },
    en: {
        "logo": "cat about.txt",
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
        "role": "Software Architect & Full Stack Developer",
        "about-desc": "Software architect and full stack developer passionate about technology, with extensive experience creating scalable and robust digital solutions. Specialized in systems architecture, microservices and development best practices. Each project is developed with technical excellence, attention to detail and focus on delivering real business value.",
        "download-cv": "$ download --cv",
        "contact-title": "Let's talk about your project?",
        "contact-text": "Get in touch for a free consultation and personalized quote.",
        "footer": "© 2025 Jaqueprojetos. Building the digital future, one coffee at a time. ☕",
        "privacy-title": "Privacy Notice",
        "privacy-text1": "Contact information provided on this website is used exclusively for professional and commercial communication. Browsing information may be collected to improve user experience through cookies and analytics tools.",
        "privacy-text2": "Your data will not be shared with third parties without prior consent. By using this website, you agree to the responsible and ethical use of your information in accordance with the General Data Protection Law (LGPD).",
        "accept": "Accept",
        "decline": "Decline"
    }
};

function switchLanguage(lang) {
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.remove('active');
    });
    
    const selectedBtn = document.querySelector('[data-lang="' + lang + '"]');
    if (selectedBtn) {
        selectedBtn.classList.add('active');
    }
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    
    localStorage.setItem('preferredLanguage', lang);
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function acceptPrivacy() {
    setCookie('privacyAccepted', 'true', 365);
    const overlay = document.getElementById('privacyOverlay');
    if (overlay) {
        overlay.classList.remove('show');
    }
}

function declinePrivacy() {
    setCookie('privacyAccepted', 'false', 365);
    const overlay = document.getElementById('privacyOverlay');
    if (overlay) {
        overlay.classList.remove('show');
    }
    
    const currentLang = localStorage.getItem('preferredLanguage') || 'pt';
    const message = currentLang === 'pt'
        ? 'Você optou por não aceitar nossa política de privacidade. Algumas funcionalidades podem ser limitadas.'
        : 'You chose not to accept our privacy policy. Some features may be limited.';
    alert(message);
}

document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'pt';
    switchLanguage(savedLang);
    
    const btnPt = document.getElementById('lang-pt');
    const btnEn = document.getElementById('lang-en');
    
    if (btnPt) {
        btnPt.addEventListener('click', function() {
            switchLanguage('pt');
        });
    }
    
    if (btnEn) {
        btnEn.addEventListener('click', function() {
            switchLanguage('en');
        });
    }
    
    const btnAccept = document.getElementById('btn-accept');
    const btnDecline = document.getElementById('btn-decline');
    
    if (btnAccept) {
        btnAccept.addEventListener('click', acceptPrivacy);
    }
    
    if (btnDecline) {
        btnDecline.addEventListener('click', declinePrivacy);
    }
    
    const privacyAccepted = getCookie('privacyAccepted');
    if (!privacyAccepted) {
        const privacyOverlay = document.getElementById('privacyOverlay');
        if (privacyOverlay) {
            privacyOverlay.classList.add('show');
        }
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});