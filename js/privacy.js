'use strict';

const translations = {
  pt: {
    nav_cv: '$ download --cv',
    page_meta_title: 'Política de Privacidade // LEONARDO JAQUES',
    hero_label: '&gt; PRIVACY.LOG // LGPD v1.1',
    hero_title: 'Política de Privacidade',
    hero_subtitle: 'LGPD (Lei 13.709/2018) &amp; Marco Civil da Internet (Lei 12.965/2014)',
    hero_updated: 'Última atualização: Abril de 2026',
    back_home: '← Voltar ao Site',

    s1_label: '01 // QUEM_SOMOS',
    s1_title: 'Quem Somos',
    s1_body: '<p>O site <strong>jaquesprojetos.com.br</strong> é um portfólio pessoal operado por <strong>Leonardo Jaques</strong>, Arquiteto de Soluções e Tech Lead baseado no Rio de Janeiro, Brasil. Este documento descreve como coletamos, usamos e protegemos seus dados pessoais em conformidade com a <strong>LGPD (Lei nº 13.709/2018)</strong> e o <strong>Marco Civil da Internet (Lei nº 12.965/2014)</strong>.</p><ul><li><strong>Controlador dos Dados:</strong> Leonardo Jaques</li><li><strong>Encarregado (DPO):</strong> Leonardo Jaques</li><li><strong>Contato:</strong> <a href="mailto:jaques.projetos@outlook.com" class="text-primary hover:underline">jaques.projetos@outlook.com</a></li><li><strong>Localização:</strong> Rio de Janeiro, RJ — Brasil</li></ul><p>Este site é um portfólio estático — <strong>não há contas de usuário, cadastro, login, pagamentos ou formulários</strong>. O volume de dados tratados é mínimo e proporcional à natureza do site.</p>',

    s2_label: '02 // DADOS_E_FINALIDADES',
    s2_title: 'Dados Coletados e Finalidades',
    s2_body: '<p class="font-label text-primary text-xs uppercase tracking-widest mb-2">2.1 Analytics de Navegação</p><p>Mediante seu <strong>consentimento explícito</strong>, utilizamos o <strong>Umami Analytics</strong> (hospedado em servidor próprio no domínio <code>analytics.ldw.solutions</code>, localizado no Brasil) para coletar métricas anônimas: páginas visitadas, tempo de sessão, tipo de dispositivo e origem do tráfego. O Umami é <strong>cookieless por padrão</strong> — não instala cookies no seu dispositivo. O endereço IP é anonimizado antes de qualquer armazenamento.</p><p><strong>Base legal:</strong> Consentimento (LGPD, Art. 7º, I).</p><p class="font-label text-secondary text-xs uppercase tracking-widest mt-6 mb-2">2.2 Contato Voluntário</p><p>Quando você nos contata diretamente via e-mail (<code>jaques.projetos@outlook.com</code>) ou WhatsApp (<code>+55 21 97285-6520</code>), coletamos apenas os dados que você fornece voluntariamente: nome, e-mail e/ou telefone. Esses dados são usados exclusivamente para responder à sua mensagem e manter comunicação profissional. Nenhum dado de contato é armazenado em banco de dados — a comunicação ocorre por canais externos.</p><p><strong>Base legal:</strong> Legítimo interesse / execução de contrato (LGPD, Art. 7º, V e IX).</p><p class="font-label text-tertiary text-xs uppercase tracking-widest mt-6 mb-2">2.3 Preferências do Usuário</p><p>Para personalizar sua experiência, armazenamos localmente no seu dispositivo: (a) sua escolha de consentimento de cookies, via <strong>cookie</strong> <code>privacyAccepted</code>; (b) o idioma selecionado (PT/EN), via <strong>localStorage</strong>. Esses dados nunca são transmitidos a terceiros.</p><p><strong>Base legal:</strong> Legítimo interesse (LGPD, Art. 7º, IX).</p>',

    s3_label: '03 // COOKIES',
    s3_title: 'Cookies e Armazenamento Local',
    s3_body: '<p>Este site utiliza um único cookie e um item de localStorage, conforme <strong>Art. 8 da LGPD</strong> e <strong>Art. 7, III do Marco Civil da Internet</strong>. O Umami Analytics é <strong>cookieless</strong> — não instala cookies de rastreamento.</p><table class="privacy-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Finalidade</th><th>Duração</th><th>Categoria</th></tr></thead><tbody><tr><td><code>privacyAccepted</code></td><td>Cookie</td><td>Armazena sua escolha de consentimento (aceito/recusado)</td><td>365 dias</td><td>Essencial</td></tr><tr><td><code>preferredLanguage</code></td><td>localStorage</td><td>Salva o idioma selecionado (PT ou EN)</td><td>Persistente</td><td>Essencial</td></tr></tbody></table><p>O cookie <code>privacyAccepted</code> é definido com a flag <code>SameSite=Lax</code> e trafega apenas por HTTPS. Para revogar sua escolha, limpe os cookies do navegador ou acesse o site em uma janela privada.</p>',

    s4_label: '04 // TERCEIROS',
    s4_title: 'Terceiros que Recebem Dados',
    s4_body: '<p>Ao navegar neste site, seu navegador pode se conectar aos seguintes serviços externos, que podem receber seu <strong>endereço IP e user-agent</strong>:</p><table class="privacy-table"><thead><tr><th>Serviço</th><th>Dado transmitido</th><th>Finalidade</th><th>Base legal</th></tr></thead><tbody><tr><td><strong>Google LLC</strong> (Google Fonts CDN)</td><td>IP, user-agent</td><td>Carregar fontes tipográficas (<code>fonts.googleapis.com</code>)</td><td>Legítimo interesse — Art. 7º, IX</td></tr><tr><td><strong>GitHub, Inc.</strong> (avatars CDN)</td><td>IP, user-agent</td><td>Exibir foto de perfil na seção Sobre (<code>avatars.githubusercontent.com</code>)</td><td>Legítimo interesse — Art. 7º, IX</td></tr><tr><td><strong>Umami Analytics</strong> (<code>analytics.ldw.solutions</code>)</td><td>IP anonimizado, user-agent (com consentimento)</td><td>Métricas de navegação anônimas — servidor próprio no Brasil</td><td>Consentimento — Art. 7º, I</td></tr></tbody></table><p><strong>Não vendemos, alugamos ou compartilhamos</strong> dados pessoais com outros terceiros fora dos listados acima, conforme <strong>Art. 7, VII do Marco Civil da Internet</strong>.</p><p>Para as políticas de privacidade de Google e GitHub: <a href="https://policies.google.com/privacy" class="text-primary hover:underline" target="_blank" rel="noopener">Google Privacy Policy</a> · <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" class="text-primary hover:underline" target="_blank" rel="noopener">GitHub Privacy Statement</a>.</p>',

    s5_label: '05 // RETENCAO',
    s5_title: 'Retenção de Dados',
    s5_body: '<table class="privacy-table"><thead><tr><th>Dado</th><th>Prazo de Retenção</th></tr></thead><tbody><tr><td>Dados de analytics (Umami)</td><td>Até 12 meses; podem ser excluídos antes mediante solicitação</td></tr><tr><td>Dados de contato (e-mail / WhatsApp)</td><td>Enquanto houver relação profissional ativa; até 24 meses após o último contato</td></tr><tr><td>Cookie <code>privacyAccepted</code></td><td>365 dias, renovados a cada nova escolha</td></tr><tr><td>localStorage <code>preferredLanguage</code></td><td>Persistente no dispositivo do titular; removido ao limpar dados do navegador</td></tr></tbody></table><p>Após os prazos acima, os dados são excluídos ou anonimizados de forma irreversível, conforme <strong>LGPD Art. 9, §1°</strong>.</p>',

    s6_label: '06 // SEUS_DIREITOS',
    s6_title: 'Seus Direitos como Titular',
    s6_body: '<p>Nos termos do <strong>Art. 18 da LGPD</strong> e do <strong>Art. 7, IX-X do Marco Civil da Internet</strong>, você tem direito a:</p><ul><li><strong>Acesso —</strong> confirmar se tratamos seus dados e obter uma cópia.</li><li><strong>Correção —</strong> solicitar atualização de dados incompletos ou desatualizados.</li><li><strong>Anonimização ou Exclusão —</strong> requerer a eliminação de dados desnecessários ou tratados em desconformidade com a lei.</li><li><strong>Portabilidade —</strong> receber seus dados em formato estruturado.</li><li><strong>Revogação do consentimento —</strong> desativar o Umami Analytics a qualquer momento limpando o cookie <code>privacyAccepted</code> ou acessando o site novamente e escolhendo "Não Aceito".</li><li><strong>Oposição —</strong> se opor ao tratamento baseado em legítimo interesse.</li><li><strong>Informação —</strong> conhecer os terceiros com os quais dados foram compartilhados.</li></ul><p>Para exercer qualquer direito, envie e-mail para <a href="mailto:jaques.projetos@outlook.com" class="text-primary hover:underline">jaques.projetos@outlook.com</a>. Prazo de resposta: até <strong>15 dias úteis</strong>.</p>',

    s7_label: '07 // SEGURANCA',
    s7_title: 'Segurança dos Dados',
    s7_body: '<p>Adotamos medidas técnicas e organizacionais para proteger seus dados, conforme <strong>Art. 46 da LGPD</strong>:</p><ul><li><strong>HTTPS/TLS —</strong> todas as comunicações são criptografadas por certificado TLS válido.</li><li><strong>Cookie com <code>SameSite=Lax</code> —</strong> proteção contra CSRF em cookies de sessão.</li><li><strong>Anonimização de IP —</strong> o endereço IP é anonimizado pelo Umami antes de qualquer armazenamento.</li><li><strong>Sem contas de usuário —</strong> não há banco de dados de credenciais, eliminando riscos de vazamento de senha.</li><li><strong>Sem formulários no servidor —</strong> o contato ocorre por canais externos (e-mail, WhatsApp), fora do escopo do site.</li><li><strong>Site estático —</strong> ausência de backend próprio reduz significativamente a superfície de ataque.</li></ul>',

    s8_label: '08 // TRANSFERENCIA_INT',
    s8_title: 'Transferência Internacional de Dados',
    s8_body: '<p>Conforme <strong>Art. 33 da LGPD</strong>:</p><ul><li><strong>Umami Analytics</strong> está hospedado em servidor próprio no Brasil — sem transferência internacional.</li><li><strong>Google LLC</strong> (Google Fonts) possui servidores globais. A Google mantém certificações de adequação e cláusulas contratuais padrão reconhecidas internacionalmente. Apenas metadados de conexão (IP, user-agent) são transmitidos para servir arquivos de fonte.</li><li><strong>GitHub, Inc.</strong> possui servidores nos EUA. Da mesma forma, apenas metadados de conexão são transmitidos para servir a imagem de perfil.</li><li>Dados de contato (nome, e-mail, telefone) são tratados exclusivamente dentro do território nacional.</li></ul>',

    s9_label: '09 // ALTERACOES',
    s9_title: 'Alterações nesta Política',
    s9_body: '<p>Esta política pode ser atualizada periodicamente para refletir mudanças no site, na legislação ou nas práticas de tratamento de dados. A data no topo indica a versão mais recente.</p><p>Em caso de alterações relevantes, o aviso de cookies será reexibido solicitando novo consentimento. A versão mais recente estará sempre disponível em <strong>jaquesprojetos.com.br/politica-de-privacidade.html</strong>.</p><p class="text-on-surface-variant opacity-50 text-sm">Versão: 1.1 — Abril de 2026</p>',

    s10_label: '10 // CONTATO_DPO',
    s10_title: 'Contato e Encarregado (DPO)',
    s10_body: '<p>Nos termos do <strong>Art. 41 da LGPD</strong>, o Encarregado pelo tratamento de dados pessoais é responsável por receber comunicações da ANPD e dos titulares:</p><ul><li><strong>Nome:</strong> Leonardo Jaques</li><li><strong>E-mail:</strong> <a href="mailto:jaques.projetos@outlook.com" class="text-primary hover:underline">jaques.projetos@outlook.com</a></li><li><strong>Localização:</strong> Rio de Janeiro, RJ — Brasil</li></ul><p>Para dúvidas, exercício de direitos ou reclamações, envie e-mail para o endereço acima. Prazo de resposta: <strong>até 15 dias úteis</strong>. Reclamações também podem ser dirigidas à <strong>ANPD</strong> (Autoridade Nacional de Proteção de Dados) em <a href="https://www.gov.br/anpd" class="text-primary hover:underline" target="_blank" rel="noopener">gov.br/anpd</a>.</p>',

    footer_copy: '© 2026 JAQUEPROJETOS // CONSTRUINDO_O_FUTURO_DIGITAL',
    footer_privacy: 'Política de Privacidade',
  },

  en: {
    nav_cv: '$ download --resume',
    page_meta_title: 'Privacy Policy // LEONARDO JAQUES',
    hero_label: '&gt; PRIVACY.LOG // LGPD v1.1',
    hero_title: 'Privacy Policy',
    hero_subtitle: 'LGPD (Brazilian Data Protection Law 13.709/2018) &amp; Internet Civil Framework (Law 12.965/2014)',
    hero_updated: 'Last updated: April 2026',
    back_home: '← Back to Site',

    s1_label: '01 // WHO_WE_ARE',
    s1_title: 'Who We Are',
    s1_body: '<p>The website <strong>jaquesprojetos.com.br</strong> is a personal portfolio operated by <strong>Leonardo Jaques</strong>, Solution Architect and Tech Lead based in Rio de Janeiro, Brazil. This document describes how we collect, use and protect your personal data in compliance with the <strong>LGPD (Brazilian General Data Protection Law No. 13.709/2018)</strong> and the <strong>Internet Civil Framework (Law No. 12.965/2014)</strong>.</p><ul><li><strong>Data Controller:</strong> Leonardo Jaques</li><li><strong>Data Protection Officer (DPO):</strong> Leonardo Jaques</li><li><strong>Contact:</strong> <a href="mailto:jaques.projetos@outlook.com" class="text-primary hover:underline">jaques.projetos@outlook.com</a></li><li><strong>Location:</strong> Rio de Janeiro, RJ — Brazil</li></ul><p>This is a static portfolio website — <strong>there are no user accounts, sign-up, login, payments or contact forms</strong>. The amount of data processed is minimal and proportional to the nature of the site.</p>',

    s2_label: '02 // DATA_AND_PURPOSES',
    s2_title: 'Data Collected and Purposes',
    s2_body: '<p class="font-label text-primary text-xs uppercase tracking-widest mb-2">2.1 Navigation Analytics</p><p>With your <strong>explicit consent</strong>, we use <strong>Umami Analytics</strong> (hosted on our own server at <code>analytics.ldw.solutions</code>, located in Brazil) to collect anonymous metrics: pages visited, session duration, device type and traffic source. Umami is <strong>cookieless by default</strong> — it does not install cookies on your device. IP addresses are anonymized before any storage.</p><p><strong>Legal basis:</strong> Consent (LGPD, Art. 7, I).</p><p class="font-label text-secondary text-xs uppercase tracking-widest mt-6 mb-2">2.2 Voluntary Contact</p><p>When you contact us directly via e-mail (<code>jaques.projetos@outlook.com</code>) or WhatsApp (<code>+55 21 97285-6520</code>), we only collect the data you voluntarily provide: name, e-mail and/or phone. This data is used exclusively to reply to your message and maintain professional communication. No contact data is stored in a database — communication happens through external channels.</p><p><strong>Legal basis:</strong> Legitimate interest / contract performance (LGPD, Art. 7, V and IX).</p><p class="font-label text-tertiary text-xs uppercase tracking-widest mt-6 mb-2">2.3 User Preferences</p><p>To personalize your experience, we store locally on your device: (a) your cookie consent choice, via <strong>cookie</strong> <code>privacyAccepted</code>; (b) the selected language (PT/EN), via <strong>localStorage</strong>. This data is never transmitted to third parties.</p><p><strong>Legal basis:</strong> Legitimate interest (LGPD, Art. 7, IX).</p>',

    s3_label: '03 // COOKIES',
    s3_title: 'Cookies and Local Storage',
    s3_body: '<p>This website uses one cookie and one localStorage entry, as required by <strong>LGPD Art. 8</strong> and <strong>Internet Civil Framework Art. 7, III</strong>. Umami Analytics is <strong>cookieless</strong> — it does not install tracking cookies.</p><table class="privacy-table"><thead><tr><th>Name</th><th>Type</th><th>Purpose</th><th>Duration</th><th>Category</th></tr></thead><tbody><tr><td><code>privacyAccepted</code></td><td>Cookie</td><td>Stores your consent choice (accepted/declined)</td><td>365 days</td><td>Essential</td></tr><tr><td><code>preferredLanguage</code></td><td>localStorage</td><td>Saves the selected language (PT or EN)</td><td>Persistent</td><td>Essential</td></tr></tbody></table><p>The <code>privacyAccepted</code> cookie is set with the <code>SameSite=Lax</code> flag and is transmitted only over HTTPS. To revoke your choice, clear browser cookies or open the site in a private window.</p>',

    s4_label: '04 // THIRD_PARTIES',
    s4_title: 'Third Parties That Receive Data',
    s4_body: '<p>When browsing this website, your browser may connect to the following external services, which may receive your <strong>IP address and user-agent</strong>:</p><table class="privacy-table"><thead><tr><th>Service</th><th>Data transmitted</th><th>Purpose</th><th>Legal basis</th></tr></thead><tbody><tr><td><strong>Google LLC</strong> (Google Fonts CDN)</td><td>IP, user-agent</td><td>Load typefaces used on the site (<code>fonts.googleapis.com</code>)</td><td>Legitimate interest — Art. 7, IX</td></tr><tr><td><strong>GitHub, Inc.</strong> (avatars CDN)</td><td>IP, user-agent</td><td>Display profile photo in the About section (<code>avatars.githubusercontent.com</code>)</td><td>Legitimate interest — Art. 7, IX</td></tr><tr><td><strong>Umami Analytics</strong> (<code>analytics.ldw.solutions</code>)</td><td>Anonymized IP, user-agent (with consent)</td><td>Anonymous navigation metrics — own server in Brazil</td><td>Consent — Art. 7, I</td></tr></tbody></table><p>We do <strong>not sell, rent or share</strong> personal data with any other third parties, as required by <strong>Internet Civil Framework Art. 7, VII</strong>.</p><p>Privacy policies for Google and GitHub: <a href="https://policies.google.com/privacy" class="text-primary hover:underline" target="_blank" rel="noopener">Google Privacy Policy</a> · <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" class="text-primary hover:underline" target="_blank" rel="noopener">GitHub Privacy Statement</a>.</p>',

    s5_label: '05 // RETENTION',
    s5_title: 'Data Retention',
    s5_body: '<table class="privacy-table"><thead><tr><th>Data</th><th>Retention Period</th></tr></thead><tbody><tr><td>Analytics data (Umami)</td><td>Up to 12 months; can be deleted earlier upon request</td></tr><tr><td>Contact data (e-mail / WhatsApp)</td><td>While the professional relationship is active; up to 24 months after the last contact</td></tr><tr><td>Cookie <code>privacyAccepted</code></td><td>365 days, renewed with each new choice</td></tr><tr><td>localStorage <code>preferredLanguage</code></td><td>Persistent on the device; removed when browser data is cleared</td></tr></tbody></table><p>After the periods above, data is deleted or irreversibly anonymized, in compliance with <strong>LGPD Art. 9, §1°</strong>.</p>',

    s6_label: '06 // YOUR_RIGHTS',
    s6_title: 'Your Rights as a Data Subject',
    s6_body: '<p>Under <strong>Art. 18 of the LGPD</strong> and <strong>Art. 7, IX-X of the Internet Civil Framework</strong>, you have the right to:</p><ul><li><strong>Access —</strong> confirm whether your data is being processed and obtain a copy.</li><li><strong>Correction —</strong> request the update of incomplete or outdated data.</li><li><strong>Anonymization or Deletion —</strong> request the removal of unnecessary data or data processed in non-compliance with the law.</li><li><strong>Portability —</strong> receive your data in a structured format.</li><li><strong>Withdrawal of consent —</strong> disable Umami Analytics at any time by clearing the <code>privacyAccepted</code> cookie or visiting the site again and selecting "Decline".</li><li><strong>Objection —</strong> object to processing based on legitimate interest.</li><li><strong>Information —</strong> know which third parties have received your data.</li></ul><p>To exercise any right, send an e-mail to <a href="mailto:jaques.projetos@outlook.com" class="text-primary hover:underline">jaques.projetos@outlook.com</a>. Response time: up to <strong>15 business days</strong>.</p>',

    s7_label: '07 // SECURITY',
    s7_title: 'Data Security',
    s7_body: '<p>We adopt technical and organizational measures to protect your data, as required by <strong>LGPD Art. 46</strong>:</p><ul><li><strong>HTTPS/TLS —</strong> all communications are encrypted with a valid TLS certificate.</li><li><strong>Cookie with <code>SameSite=Lax</code> —</strong> CSRF protection for session cookies.</li><li><strong>IP anonymization —</strong> IP addresses are anonymized by Umami before any storage.</li><li><strong>No user accounts —</strong> no credential database, eliminating password breach risks.</li><li><strong>No server-side forms —</strong> contact happens through external channels (e-mail, WhatsApp), outside the site\'s scope.</li><li><strong>Static site —</strong> no custom backend significantly reduces the attack surface.</li></ul>',

    s8_label: '08 // INTERNATIONAL_TRANSFER',
    s8_title: 'International Data Transfer',
    s8_body: '<p>As required by <strong>LGPD Art. 33</strong>:</p><ul><li><strong>Umami Analytics</strong> is hosted on our own server in Brazil — no international transfer.</li><li><strong>Google LLC</strong> (Google Fonts) has global servers. Google maintains internationally recognized adequacy certifications and standard contractual clauses. Only connection metadata (IP, user-agent) is transmitted to serve font files.</li><li><strong>GitHub, Inc.</strong> has servers in the USA. Similarly, only connection metadata is transmitted to serve the profile image.</li><li>Contact data (name, e-mail, phone) is processed exclusively within Brazil.</li></ul>',

    s9_label: '09 // UPDATES',
    s9_title: 'Policy Updates',
    s9_body: '<p>This policy may be updated periodically to reflect changes to the website, applicable law, or data processing practices. The date at the top indicates the most recent version.</p><p>In case of significant changes, the cookie notice will be displayed again requesting renewed consent. The latest version will always be available at <strong>jaquesprojetos.com.br/politica-de-privacidade.html</strong>.</p><p class="text-on-surface-variant opacity-50 text-sm">Version: 1.1 — April 2026</p>',

    s10_label: '10 // CONTACT_DPO',
    s10_title: 'Contact and DPO',
    s10_body: '<p>Pursuant to <strong>LGPD Art. 41</strong>, the Data Protection Officer responsible for receiving communications from the ANPD and data subjects is:</p><ul><li><strong>Name:</strong> Leonardo Jaques</li><li><strong>E-mail:</strong> <a href="mailto:jaques.projetos@outlook.com" class="text-primary hover:underline">jaques.projetos@outlook.com</a></li><li><strong>Location:</strong> Rio de Janeiro, RJ — Brazil</li></ul><p>For questions, rights requests or complaints, send an e-mail to the address above. Response time: <strong>up to 15 business days</strong>. Complaints may also be directed to the <strong>ANPD</strong> (Brazilian National Data Protection Authority) at <a href="https://www.gov.br/anpd" class="text-primary hover:underline" target="_blank" rel="noopener">gov.br/anpd</a>.</p>',

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
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
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
