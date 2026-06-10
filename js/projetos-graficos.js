'use strict';

const translations = {
  pt: {
    nav_cv: '$ download --cv',
    page_meta_title: 'Projetos Gráficos // LEONARDO JAQUES',
    back_home: '← Voltar ao Site',

    hero_label: '&gt; ARCHIVE.LOG // 2016 — 2017',
    hero_title: 'Projetos Gráficos',
    hero_subtitle: 'Portfólio de Design Gráfico // Era Pré-IA',
    hero_desc: 'Uma coleção de trabalhos de design gráfico, identidade visual e diagramação produzidos entre 2016 e 2017 — totalmente desenhados à mão e em softwares como Photoshop, Illustrator e CorelDRAW, sem o uso de ferramentas de inteligência artificial generativa. Um registro do processo criativo manual que antecedeu a era da IA.',
    hero_badge: '100% HUMAN-MADE // PRE-AI ERA',

    archive_title: 'Arquivo',
    section_label: '01 // ARQUIVO_GRAFICO',
    filter_all: 'Todos',
    filter_books: 'Livros & Editorial',
    filter_works: 'Identidade & Peças Gráficas',

    gp1_title: 'Capa de Livro — Katipunan',
    gp1_desc: 'Capa ilustrativa para obra sobre a Katipunan filipina, com bandeiras, símbolos patrióticos e tipografia desenhada à mão.',
    gp2_title: 'Guia de Estudo — Arnis Maharlika',
    gp2_desc: 'Capa de material didático para artes marciais filipinas (Arnis), com ilustração vetorial de águia, cobra e brasão solar.',
    gp3_title: 'Layout — Thema Cultural',
    gp3_desc: 'Página inicial para site institucional de produtora cultural, com identidade visual elegante sobre foto de teatro.',
    gp4_title: 'E-mail Marketing — Agência de Design',
    gp4_desc: 'Peça de e-mail marketing apresentando o portfólio de serviços de uma agência: web design, gráfica, sinalização e marketing.',
    gp5_title: 'Apresentação Institucional — Onideia',
    gp5_desc: 'Slides de apresentação institucional para agência de publicidade, com capa, sumário e estrutura visual da marca.',
    gp6_title: 'Banner Interno — Aniversariantes',
    gp6_desc: 'Banner comemorativo para mural interno de empresa, celebrando os aniversariantes do mês.',
    gp7_title: 'Storyboard — Vídeo Institucional',
    gp7_desc: 'Roteiro visual quadro a quadro para vídeo institucional, planejando cenas, falas e tempos de gravação.',
    gp8_title: 'Folder A4 — Sistema ADM-FGTS',
    gp8_desc: 'Material impresso de divulgação para sistema de gestão de FGTS, com arte de capa, miolo e contracapa.',
    gp9_title: 'Identidade Visual — Bengtsson & Bernardes Advogados',
    gp9_desc: 'Estudo de logotipo para escritório de advocacia, partindo de esboços manuais até a versão final em alto-relevo.',
    gp10_title: 'Logotipo — Cidade Grill',
    gp10_desc: 'Brasão para hamburgueria/churrascaria, combinando skyline urbano, estrelas e talheres em estilo crachá 3D.',
    gp11_title: 'Logotipo — Interativa Net',
    gp11_desc: 'Identidade visual para provedor de internet banda larga, com tipografia em gradiente verde/azul e formas circulares.',
    gp12_title: 'Currículo Online',
    gp12_desc: 'Site de currículo pessoal em página única, com seções de habilidades, experiência, projetos e contato.',

    back_cta: 'Ver Projetos Atuais',

    footer_copy: '© 2026 JAQUEPROJETOS // CONSTRUINDO_O_FUTURO_DIGITAL',
    footer_privacy: 'Política de Privacidade',
  },

  en: {
    nav_cv: '$ download --resume',
    page_meta_title: 'Graphic Projects // LEONARDO JAQUES',
    back_home: '← Back to Site',

    hero_label: '&gt; ARCHIVE.LOG // 2016 — 2017',
    hero_title: 'Graphic Projects',
    hero_subtitle: 'Graphic Design Portfolio // Pre-AI Era',
    hero_desc: 'A collection of graphic design, visual identity and layout work produced between 2016 and 2017 — entirely hand-crafted in tools like Photoshop, Illustrator and CorelDRAW, without the use of generative AI. A record of the manual creative process that came before the AI era.',
    hero_badge: '100% HUMAN-MADE // PRE-AI ERA',

    archive_title: 'Archive',
    section_label: '01 // GRAPHIC_ARCHIVE',
    filter_all: 'All',
    filter_books: 'Books & Editorial',
    filter_works: 'Identity & Graphic Pieces',

    gp1_title: 'Book Cover — Katipunan',
    gp1_desc: 'Illustrated book cover for a story about the Filipino Katipunan, featuring flags, patriotic symbols and hand-drawn typography.',
    gp2_title: 'Study Guide — Arnis Maharlika',
    gp2_desc: 'Cover for a study guide on Filipino martial arts (Arnis), featuring vector illustrations of an eagle, snake and sun emblem.',
    gp3_title: 'Layout — Thema Cultural',
    gp3_desc: 'Homepage layout for a cultural production company website, pairing an elegant visual identity with a theater photograph.',
    gp4_title: 'Email Marketing — Design Agency',
    gp4_desc: "Email marketing piece presenting an agency's service portfolio: web design, print, signage and marketing.",
    gp5_title: 'Company Presentation — Onideia',
    gp5_desc: 'Institutional presentation deck for an advertising agency, including cover, table of contents and brand visual structure.',
    gp6_title: 'Internal Banner — Birthdays',
    gp6_desc: "Celebratory banner for an internal company board, highlighting the month's birthdays.",
    gp7_title: 'Storyboard — Corporate Video',
    gp7_desc: 'Frame-by-frame visual script for a corporate video, planning scenes, dialogue and shot timing.',
    gp8_title: 'A4 Folder — ADM-FGTS System',
    gp8_desc: 'Printed brochure promoting a payroll fund (FGTS) management system, including cover, inner pages and back cover artwork.',
    gp9_title: 'Visual Identity — Bengtsson & Bernardes Advogados',
    gp9_desc: 'Logo design study for a law firm, from hand-drawn sketches to the final embossed version.',
    gp10_title: 'Logo — Cidade Grill',
    gp10_desc: 'Emblem for a grill restaurant, combining a city skyline, stars and crossed utensils in a 3D badge style.',
    gp11_title: 'Logo — Interativa Net',
    gp11_desc: 'Visual identity for a broadband internet provider, with green/blue gradient typography and circular shapes.',
    gp12_title: 'Online Resume',
    gp12_desc: 'Single-page personal resume website with sections for skills, experience, projects and contact.',

    back_cta: 'View Current Projects',

    footer_copy: '© 2026 JAQUEPROJETOS // BUILDING_THE_DIGITAL_FUTURE',
    footer_privacy: 'Privacy Policy',
  },
};

let currentLang = localStorage.getItem('preferredLanguage') || 'pt';

function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('preferredLanguage', lang);
  document.documentElement.lang = lang;

  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] === undefined) return;
    if (key === 'hero_label') {
      el.innerHTML = t[key];
    } else {
      el.textContent = t[key];
    }
  });

  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) toggleBtn.textContent = lang === 'pt' ? 'EN' : 'PT';

  const cvFile = lang === 'pt' ? 'Leonardo_Jaques_Curriculo.pdf' : 'Leonardo_Jaques_Resume.pdf';
  const cvBtn = document.getElementById('cvBtn');
  if (cvBtn) cvBtn.href = cvFile;

  document.title = t.page_meta_title;
}

document.getElementById('langToggle').addEventListener('click', () => {
  switchLanguage(currentLang === 'pt' ? 'en' : 'pt');
});

switchLanguage(currentLang);

// Fade-up observer (same as main.js)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.05 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Category filter
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
      card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
    });
  });
});
