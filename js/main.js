// ============================================================
// i18n translations
// ============================================================
const translations = {
  pt: {
    nav_works: "Trabalhos",
    nav_experience: "Experiencia",
    nav_about: "Sobre",
    nav_contact: "Contato",
    nav_cv: "$ download --cv",
    hero_subtitle: "Software Engineer // Rio de Janeiro",
    hero_desc: "Arquiteto de Solucoes e Tech Lead com experiencia em desenho de arquitetura de software, modernizacao de sistemas legados e lideranca tecnica. Focado em solucoes de alta performance com Java, Cloud Computing e Big Data.",
    hero_cta1: "Ver Projetos",
    hero_status: "STATUS: DISPONIVEL",
    roles_title: "Competencias Principais",
    role1_desc: "Desenho de arquiteturas cloud-native robustas, escalaveis e seguras. Modernizacao de sistemas legados com foco em alta disponibilidade e performance.",
    role2_desc: "Lideranca de equipes de engenharia cross-funcionais com foco em mentoria, qualidade de codigo e entregas de alto impacto.",
    role3_desc: "Experiencia hands-on em desenvolvimento Full Stack (Java/Kotlin, React, Node.js) e mobile. Entusiasta de clean code, TDD e open-source.",
    projects_title: "Projetos",
    filter_all: "Todos",
    filter_systems: "Sistemas",
    proj1_desc: "Portfolio pessoal com tema terminal/cyberpunk. Site estatico com i18n PT/EN, LGPD consent modal e animacoes CSS.",
    proj2_desc: "Podcast sobre desenvolvimento de software, arquitetura e carreira em tech. Episodios, transcricoes e recursos para devs.",
    proj3_desc: "Blog tecnico sobre arquitetura de software, boas praticas e tendencias do mercado de desenvolvimento.",
    proj4_desc: "Gerenciador de tarefas com drag-and-drop, multiplos boards e persistencia local. Desenvolvido em React e TypeScript.",
    proj5_desc: "APIs RESTful com Quarkus, Spring Security, JWT, JPA/Hibernate e documentacao via Swagger/OpenAPI.",
    proj6_desc: "Gerador de QR Code para pagamentos via Pix. Suporte a chaves CPF, CNPJ, email, telefone e chave aleatoria.",
    exp_title: "Onde Trabalhei",
    exp1_desc: "Solucoes de alta performance com Java, Cloud Computing e Big Data (Databricks). Lideranca tecnica e desenho de arquitetura.",
    exp2_clients: "Clientes: Share Aero + NexMov",
    exp2_desc: "Desenvolvimento full-stack e mobile para clientes do setor aeronautico e de mobilidade urbana.",
    exp3_clients: "Clientes: Embraer + SESC-SP",
    exp3_desc: "Desenvolvimento frontend e mobile para grandes clientes como Embraer e SESC-SP.",
    exp4_clients: "Clientes: Descomplica + Rio Card",
    exp4_desc: "Desenvolvimento full-stack e mobile para plataformas de educacao e mobilidade urbana.",
    exp5_clients: "Cliente: ANS",
    exp5_desc: "Desenvolvimento full-stack para a Agencia Nacional de Saude Suplementar (ANS).",
    stack_title: "Tecnologias",
    tech_languages: "// Linguagens",
    tech_tools: "// Ferramentas & Dados",
    tech_arch: "// Arquitetura & Metodos",
    about_title: "Software com proposito",
    about_p1: "Arquiteto de Solucoes e Tech Lead com solida experiencia em desenho de arquitetura de software, modernizacao de sistemas legados e lideranca tecnica.",
    about_p2: "Atualmente focado em solucoes de alta performance utilizando Java, Cloud Computing e Big Data (Databricks). Background diversificado em desenvolvimento Full Stack (Java/Kotlin, React, Node.js) e mobile.",
    about_p3: "Entusiasta de tecnologias open-source, boas praticas de engenharia de software e metodologias ageis. Baseado no Rio de Janeiro, trabalho com parceiros globais.",
    stat_exp: "Experiencia",
    stat_proj: "Projetos",
    stat_loc: "Localizacao",
    about_cv: "$ download --curriculo",
    contact_title: "Vamos conversar sobre<br/>seu projeto?",
    contact_subtitle: "Entre em contato para uma consultoria gratuita e orcamento personalizado.",
    footer_copy: "\u00a9 2026 JAQUEPROJETOS // CONSTRUINDO_O_FUTURO_DIGITAL",
    mob_projects: "Projetos",
    mob_career: "Carreira",
    mob_about: "Sobre",
    mob_contact: "Contato",
    footer_privacy: "Política de Privacidade",
    priv_policy_link: "Ver política completa →",
    // Privacy modal
    priv_title: "Aviso de Privacidade & Cookies",
    priv_text1: 'Este site utiliza <strong>cookies e ferramentas de rastreamento</strong> (como analytics) para coletar metricas de navegacao \u2014 paginas visitadas, tempo de acesso e origem do trafego \u2014 com o objetivo de melhorar a experiencia do usuario.',
    priv_text2: 'Os dados de contato fornecidos sao usados exclusivamente para comunicacao profissional. Nenhuma informacao pessoal e compartilhada com terceiros sem consentimento previo, em conformidade com a <strong>LGPD (Lei n\u00ba 13.709/2018)</strong>.',
    priv_text3: 'Ao clicar em <em>Aceito</em>, voce consente com o uso de cookies de rastreamento. Ao recusar, apenas cookies essenciais serao mantidos. Sua escolha e salva e este aviso nao sera exibido novamente.',
    priv_accept: "Aceito",
    priv_decline: "Nao Aceito",
  },
  en: {
    nav_works: "Works",
    nav_experience: "Experience",
    nav_about: "About",
    nav_contact: "Contact",
    nav_cv: "$ download --resume",
    hero_subtitle: "Software Engineer // Rio de Janeiro",
    hero_desc: "Solution Architect and Tech Lead with experience in software architecture design, legacy system modernization, and technical leadership. Focused on high-performance solutions with Java, Cloud Computing, and Big Data.",
    hero_cta1: "View Projects",
    hero_status: "STATUS: AVAILABLE",
    roles_title: "Core Competencies",
    role1_desc: "Designing robust, scalable, and secure cloud-native architectures. Legacy system modernization focused on high availability and performance.",
    role2_desc: "Leading cross-functional engineering teams with a focus on mentorship, code quality, and high-impact deliveries.",
    role3_desc: "Hands-on experience in Full Stack development (Java/Kotlin, React, Node.js) and mobile. Enthusiast of clean code, TDD, and open-source.",
    projects_title: "Projects",
    filter_all: "All",
    filter_systems: "Systems",
    proj1_desc: "Personal portfolio with terminal/cyberpunk theme. Static site with PT/EN i18n, LGPD consent modal and CSS animations.",
    proj2_desc: "Podcast about software development, architecture and tech careers. Episodes, transcripts and resources for devs.",
    proj3_desc: "Tech blog about software architecture, best practices and development market trends.",
    proj4_desc: "Task manager with drag-and-drop, multiple boards and local persistence. Built with React and TypeScript.",
    proj5_desc: "RESTful APIs with Quarkus, Spring Security, JWT, JPA/Hibernate and documentation via Swagger/OpenAPI.",
    proj6_desc: "QR Code generator for Pix payments. Supports CPF, CNPJ, email, phone and random key types.",
    exp_title: "Where I've Worked",
    exp1_desc: "High-performance solutions with Java, Cloud Computing and Big Data (Databricks). Technical leadership and architecture design.",
    exp2_clients: "Clients: Share Aero + NexMov",
    exp2_desc: "Full-stack and mobile development for clients in the aeronautics and urban mobility sectors.",
    exp3_clients: "Clients: Embraer + SESC-SP",
    exp3_desc: "Frontend and mobile development for major clients like Embraer and SESC-SP.",
    exp4_clients: "Clients: Descomplica + Rio Card",
    exp4_desc: "Full-stack and mobile development for education and urban mobility platforms.",
    exp5_clients: "Client: ANS",
    exp5_desc: "Full-stack development for the National Supplementary Health Agency (ANS).",
    stack_title: "Technologies",
    tech_languages: "// Languages",
    tech_tools: "// Tools & Data",
    tech_arch: "// Architecture & Methods",
    about_title: "Software with purpose",
    about_p1: "Solution Architect and Tech Lead with solid experience in software architecture design, legacy system modernization, and technical leadership.",
    about_p2: "Currently focused on high-performance solutions using Java, Cloud Computing, and Big Data (Databricks). Diverse background in Full Stack development (Java/Kotlin, React, Node.js) and mobile.",
    about_p3: "Enthusiast of open-source technologies, software engineering best practices, and agile methodologies. Based in Rio de Janeiro, working with global partners.",
    stat_exp: "Experience",
    stat_proj: "Projects",
    stat_loc: "Location",
    about_cv: "$ download --resume",
    contact_title: "Let's talk about<br/>your project?",
    contact_subtitle: "Get in touch for a free consultation and personalized quote.",
    footer_copy: "\u00a9 2026 JAQUEPROJETOS // BUILDING_THE_DIGITAL_FUTURE",
    mob_projects: "Projects",
    mob_career: "Career",
    mob_about: "About",
    mob_contact: "Contact",
    footer_privacy: "Privacy Policy",
    priv_policy_link: "See full privacy policy →",
    // Privacy modal
    priv_title: "Privacy & Cookies Notice",
    priv_text1: 'This website uses <strong>cookies and tracking tools</strong> (such as analytics) to collect browsing metrics \u2014 pages visited, time on site and traffic sources \u2014 in order to improve user experience.',
    priv_text2: 'Contact information provided is used exclusively for professional communication. No personal data is shared with third parties without prior consent, in compliance with the <strong>LGPD (Brazilian General Data Protection Law No. 13.709/2018)</strong>.',
    priv_text3: 'By clicking <em>Accept</em>, you consent to the use of tracking cookies. If you decline, only essential cookies will be kept. Your choice is saved and this notice will not appear again.',
    priv_accept: "Accept",
    priv_decline: "Decline",
  }
};

let currentLang = localStorage.getItem('preferredLanguage') || 'pt';

function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('preferredLanguage', lang);
  document.documentElement.lang = lang;

  const t = translations[lang];

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) {
      if (key === 'contact_title') {
        el.innerHTML = t[key];
      } else if (key === 'about_cv' || key === 'nav_cv') {
        // Keep the icon if present
        const icon = el.querySelector('.material-symbols-outlined');
        if (icon) {
          el.innerHTML = '';
          el.appendChild(icon);
          el.append(' ' + t[key]);
        } else {
          el.textContent = t[key];
        }
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Update privacy modal
  document.getElementById('privacy-title').textContent = t.priv_title;
  document.getElementById('privacy-text1').innerHTML = t.priv_text1;
  document.getElementById('privacy-text2').innerHTML = t.priv_text2;
  document.getElementById('privacy-text3').innerHTML = t.priv_text3;
  document.getElementById('btn-accept').textContent = t.priv_accept;
  document.getElementById('btn-decline').textContent = t.priv_decline;

  // Update toggle button text
  const toggleBtn = document.getElementById('langToggle');
  toggleBtn.textContent = lang === 'pt' ? 'EN' : 'PT';

  // Update CV file links
  const cvFile = lang === 'pt' ? 'Leonardo_Jaques_Curriculo.pdf' : 'Leonardo_Jaques_Resume.pdf';
  document.getElementById('cvBtn').href = cvFile;
  document.getElementById('cvBtnAbout').href = cvFile;
}

// ============================================================
// Cookie helpers
// ============================================================
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = name + '=' + value + ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
}

function getCookie(name) {
  const v = document.cookie.match('(^|;)\\s*' + name + '=([^;]*)');
  return v ? v[2] : null;
}

// ============================================================
// Analytics (Umami) — loaded only after user consent
// ============================================================
function loadAnalytics() {
  if (!document.getElementById('umami-script')) {
    const s = document.createElement('script');
    s.id = 'umami-script';
    s.defer = true;
    s.src = 'https://analytics.ldw.solutions/script.js';
    s.dataset.websiteId = '1028df64-9269-43a3-aab4-182a5f1d4355';
    document.head.appendChild(s);
  }
}

// ============================================================
// Privacy / Cookie consent
// ============================================================
document.getElementById('btn-accept').addEventListener('click', () => {
  setCookie('privacyAccepted', 'true', 365);
  document.getElementById('privacyOverlay').classList.remove('show');
  loadAnalytics();
});

document.getElementById('btn-decline').addEventListener('click', () => {
  setCookie('privacyAccepted', 'false', 365);
  document.getElementById('privacyOverlay').classList.remove('show');
});

// Privacy modal language toggle
document.querySelectorAll('[data-privacy-lang]').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.privacyLang;
    document.querySelectorAll('[data-privacy-lang]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    switchLanguage(lang);
  });
});

// Show privacy modal if not yet accepted
const privacyChoice = getCookie('privacyAccepted');
if (!privacyChoice) {
  document.getElementById('privacyOverlay').classList.add('show');
} else if (privacyChoice === 'true') {
  loadAnalytics();
}

// ============================================================
// Language toggle (navbar)
// ============================================================
document.getElementById('langToggle').addEventListener('click', () => {
  const newLang = currentLang === 'pt' ? 'en' : 'pt';
  switchLanguage(newLang);
});

// Apply saved language on load
switchLanguage(currentLang);

// ============================================================
// Scroll animations
// ============================================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ============================================================
// Project filter
// ============================================================
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('bg-primary/10', 'text-primary', 'border', 'border-primary/30');
      b.classList.add('text-on-surface-variant');
    });
    btn.classList.add('bg-primary/10', 'text-primary', 'border', 'border-primary/30');
    btn.classList.remove('text-on-surface-variant');

    const filter = btn.dataset.filter;
    document.querySelectorAll('[data-category]').forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
