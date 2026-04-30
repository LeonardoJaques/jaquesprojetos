'use strict';

const translations = {
  pt: {
    nav_cv: '$ download --cv',
    page_meta_title: 'Política de Privacidade // LEONARDO JAQUES',
    hero_label: '&gt; PRIVACY.LOG // LGPD v1.0',
    hero_title: 'Política de Privacidade',
    hero_subtitle: 'LGPD (Lei 13.709/2018) &amp; Marco Civil da Internet (Lei 12.965/2014)',
    hero_updated: 'Última atualização: Abril de 2026',
    back_home: '← Voltar ao Site',

    s1_label: '01 // DATA_CONTROLLER',
    s1_title: 'Controlador dos Dados',
    s1_body: '<p>O site <strong>jaquesprojetos.com.br</strong> é operado por:</p><ul><li><strong>Nome:</strong> Leonardo Jaques</li><li><strong>E-mail:</strong> <a href="mailto:jaques.projetos@outlook.com" class="text-primary hover:underline">jaques.projetos@outlook.com</a></li><li><strong>Localização:</strong> Rio de Janeiro, RJ — Brasil</li></ul><p>Para exercer seus direitos ou tirar dúvidas sobre o tratamento de dados, utilize o e-mail acima.</p>',

    s2_label: '02 // DATA_COLLECTED',
    s2_title: 'Dados Coletados',
    s2_body: '<p>Este site coleta as seguintes categorias de dados:</p><ul><li><strong>Dados de navegação (analytics):</strong> páginas visitadas, tempo de acesso, origem do tráfego e tipo de dispositivo. Coletados automaticamente via <em>Umami Analytics</em> mediante consentimento. O IP é anonimizado antes do armazenamento.</li><li><strong>Dados de contato voluntários:</strong> nome, e-mail e/ou telefone fornecidos diretamente pelo titular ao entrar em contato via e-mail (<code>jaques.projetos@outlook.com</code>) ou WhatsApp (<code>+55 21 97285-6520</code>).</li><li><strong>Preferências do usuário:</strong> idioma selecionado e escolha de cookies, armazenados localmente via cookie/localStorage no dispositivo do titular.</li></ul>',

    s3_label: '03 // LEGAL_BASIS',
    s3_title: 'Finalidade e Base Legal',
    s3_body: '<table class="privacy-table"><thead><tr><th>Dado</th><th>Finalidade</th><th>Base Legal (LGPD)</th></tr></thead><tbody><tr><td>Analytics de navegação</td><td>Melhoria da experiência e desempenho do site</td><td>Consentimento — Art. 7, I</td></tr><tr><td>Dados de contato</td><td>Comunicação profissional e prestação de serviços</td><td>Execução de contrato / Legítimo interesse — Art. 7, V e IX</td></tr><tr><td>Preferências (idioma, cookies)</td><td>Personalização da experiência do usuário</td><td>Legítimo interesse — Art. 7, IX</td></tr></tbody></table>',

    s4_label: '04 // RETENTION',
    s4_title: 'Retenção de Dados',
    s4_body: '<ul><li><strong>Dados de analytics:</strong> retidos por no máximo <strong>12 meses</strong> a partir da coleta, podendo ser excluídos antes mediante solicitação.</li><li><strong>Dados de contato:</strong> mantidos enquanto houver relação profissional ativa e por até <strong>24 meses</strong> após o último contato, salvo obrigação legal que exija prazo maior.</li><li><strong>Preferências de cookies:</strong> armazenadas no dispositivo do titular por <strong>365 dias</strong>, renovadas a cada nova escolha.</li></ul><p>Após os prazos acima, os dados são excluídos ou anonimizados de forma irreversível, conforme <strong>LGPD Art. 9, §1°</strong>.</p>',

    s5_label: '05 // YOUR_RIGHTS',
    s5_title: 'Seus Direitos como Titular',
    s5_body: '<p>Nos termos dos <strong>Arts. 17 a 22 da LGPD</strong> e do <strong>Art. 7, IX-X do Marco Civil da Internet</strong>, você tem direito a:</p><ul><li><strong>Acesso:</strong> confirmar a existência de tratamento e obter cópia dos seus dados.</li><li><strong>Correção:</strong> solicitar atualização de dados incompletos, inexatos ou desatualizados.</li><li><strong>Anonimização ou Exclusão:</strong> requerer a eliminação de dados desnecessários ou tratados em desconformidade com a lei.</li><li><strong>Portabilidade:</strong> receber seus dados em formato estruturado para uso por outro fornecedor.</li><li><strong>Revogação do consentimento:</strong> retirar o consentimento a qualquer momento, sem prejuízo dos tratamentos realizados anteriormente.</li><li><strong>Oposição:</strong> se opor ao tratamento realizado com base em legítimo interesse.</li><li><strong>Informação:</strong> conhecer as entidades públicas e privadas com as quais houve compartilhamento.</li></ul><p>Para exercer qualquer direito, envie e-mail para <a href="mailto:jaques.projetos@outlook.com" class="text-primary hover:underline">jaques.projetos@outlook.com</a>. O prazo de resposta é de até <strong>15 dias úteis</strong>.</p>',

    s6_label: '06 // DPO',
    s6_title: 'Encarregado de Dados (DPO)',
    s6_body: '<p>Nos termos do <strong>Art. 41 da LGPD</strong>, o Encarregado pelo tratamento de dados pessoais deste site é:</p><ul><li><strong>Nome:</strong> Leonardo Jaques</li><li><strong>E-mail:</strong> <a href="mailto:jaques.projetos@outlook.com" class="text-primary hover:underline">jaques.projetos@outlook.com</a></li></ul><p>O Encarregado é responsável por receber comunicações da ANPD, dos titulares e por adotar providências cabíveis.</p>',

    s7_label: '07 // COOKIES',
    s7_title: 'Cookies e Rastreamento',
    s7_body: '<p>Este site utiliza as seguintes categorias de cookies, conforme <strong>Art. 8 da LGPD</strong> e <strong>Art. 7, III do Marco Civil da Internet</strong>:</p><table class="privacy-table"><thead><tr><th>Tipo</th><th>Nome</th><th>Finalidade</th><th>Duração</th></tr></thead><tbody><tr><td>Essencial</td><td>privacyAccepted</td><td>Armazena sua escolha de consentimento</td><td>365 dias</td></tr><tr><td>Essencial</td><td>preferredLanguage</td><td>Salva o idioma selecionado</td><td>localStorage</td></tr><tr><td>Analytics (opt-in)</td><td>Umami Analytics</td><td>Métricas de acesso anonimizadas</td><td>Sessão</td></tr></tbody></table><p>Os cookies de analytics são carregados <strong>apenas após seu consentimento explícito</strong>. Cookies essenciais são necessários para o funcionamento básico do site e não requerem consentimento. Você pode revogar a qualquer momento limpando os cookies do navegador ou acessando a página principal para alterar sua escolha.</p>',

    s8_label: '08 // INTERNATIONAL',
    s8_title: 'Transferência Internacional de Dados',
    s8_body: '<p>Conforme <strong>Art. 33 da LGPD</strong>, informamos:</p><ul><li>Os dados de analytics são processados pelo <strong>Umami Analytics</strong>, hospedado em infraestrutura própria localizada no <strong>Brasil</strong>. Não há transferência internacional.</li><li>Os dados de contato são tratados exclusivamente dentro do território nacional.</li><li>Não há compartilhamento ou envio de dados pessoais a servidores em outros países.</li></ul>',

    s9_label: '09 // SECURITY',
    s9_title: 'Segurança dos Dados',
    s9_body: '<p>Adotamos medidas técnicas e organizacionais para proteger seus dados, conforme <strong>Art. 46 da LGPD</strong>:</p><ul><li><strong>HTTPS/TLS:</strong> todas as comunicações são criptografadas por certificado TLS válido.</li><li><strong>Acesso restrito:</strong> dados de contato acessados apenas pelo controlador (Leonardo Jaques).</li><li><strong>Anonimização de IP:</strong> o endereço IP é anonimizado antes do armazenamento pelo Umami Analytics.</li><li><strong>Sem armazenamento de senhas:</strong> este site não possui sistema de autenticação ou contas de usuário.</li></ul>',

    s10_label: '10 // SHARING',
    s10_title: 'Compartilhamento com Terceiros',
    s10_body: '<p>Nos termos do <strong>Art. 7, VII do Marco Civil da Internet</strong> e do <strong>Art. 7 da LGPD</strong>:</p><ul><li>Nenhum dado pessoal é <strong>vendido, alugado ou compartilhado</strong> com terceiros para fins comerciais.</li><li>Dados de contato não são transmitidos a terceiros sem consentimento prévio explícito.</li><li>O Umami Analytics é operado em servidor próprio do controlador — não é um serviço de terceiro com acesso aos dados.</li><li>Em caso de obrigação legal (ex: ordem judicial), dados poderão ser compartilhados com autoridades competentes.</li></ul>',

    s11_label: '11 // UPDATES',
    s11_title: 'Atualizações desta Política',
    s11_body: '<p>Esta política pode ser atualizada periodicamente para refletir mudanças no site, na legislação ou nas práticas de tratamento de dados. A versão mais recente estará sempre disponível em <strong>jaquesprojetos.com.br/politica-de-privacidade.html</strong>.</p><p>Em caso de alterações relevantes, o aviso de cookies no site será reexibido solicitando novo consentimento.</p><p class="text-on-surface-variant opacity-50 text-sm">Versão atual: 1.0 — Abril de 2026</p>',

    footer_copy: '© 2026 JAQUEPROJETOS // CONSTRUINDO_O_FUTURO_DIGITAL',
    footer_privacy: 'Política de Privacidade',
  },
  en: {
    nav_cv: '$ download --resume',
    page_meta_title: 'Privacy Policy // LEONARDO JAQUES',
    hero_label: '&gt; PRIVACY.LOG // LGPD v1.0',
    hero_title: 'Privacy Policy',
    hero_subtitle: 'LGPD (Brazilian Data Protection Law 13.709/2018) &amp; Internet Civil Framework (Law 12.965/2014)',
    hero_updated: 'Last updated: April 2026',
    back_home: '← Back to Site',

    s1_label: '01 // DATA_CONTROLLER',
    s1_title: 'Data Controller',
    s1_body: '<p>The website <strong>jaquesprojetos.com.br</strong> is operated by:</p><ul><li><strong>Name:</strong> Leonardo Jaques</li><li><strong>E-mail:</strong> <a href="mailto:jaques.projetos@outlook.com" class="text-primary hover:underline">jaques.projetos@outlook.com</a></li><li><strong>Location:</strong> Rio de Janeiro, RJ — Brazil</li></ul><p>To exercise your rights or ask questions about data processing, please use the e-mail above.</p>',

    s2_label: '02 // DATA_COLLECTED',
    s2_title: 'Data Collected',
    s2_body: '<p>This website collects the following categories of data:</p><ul><li><strong>Navigation data (analytics):</strong> pages visited, time on site, traffic source and device type. Collected automatically via <em>Umami Analytics</em> with your consent. IP addresses are anonymized before storage.</li><li><strong>Voluntary contact data:</strong> name, e-mail and/or phone number provided directly by you when reaching out via e-mail (<code>jaques.projetos@outlook.com</code>) or WhatsApp (<code>+55 21 97285-6520</code>).</li><li><strong>User preferences:</strong> selected language and cookie choice, stored locally via cookie/localStorage on your device.</li></ul>',

    s3_label: '03 // LEGAL_BASIS',
    s3_title: 'Purpose and Legal Basis',
    s3_body: '<table class="privacy-table"><thead><tr><th>Data</th><th>Purpose</th><th>Legal Basis (LGPD)</th></tr></thead><tbody><tr><td>Navigation analytics</td><td>Improving site experience and performance</td><td>Consent — Art. 7, I</td></tr><tr><td>Contact data</td><td>Professional communication and service delivery</td><td>Contract performance / Legitimate interest — Art. 7, V and IX</td></tr><tr><td>Preferences (language, cookies)</td><td>Personalizing user experience</td><td>Legitimate interest — Art. 7, IX</td></tr></tbody></table>',

    s4_label: '04 // RETENTION',
    s4_title: 'Data Retention',
    s4_body: '<ul><li><strong>Analytics data:</strong> retained for a maximum of <strong>12 months</strong> from collection, and may be deleted earlier upon request.</li><li><strong>Contact data:</strong> kept for the duration of the active professional relationship and for up to <strong>24 months</strong> after the last contact, unless a legal obligation requires a longer period.</li><li><strong>Cookie preferences:</strong> stored on your device for <strong>365 days</strong>, renewed with each new choice.</li></ul><p>After the periods above, data is deleted or irreversibly anonymized, in compliance with <strong>LGPD Art. 9, §1°</strong>.</p>',

    s5_label: '05 // YOUR_RIGHTS',
    s5_title: 'Your Rights as a Data Subject',
    s5_body: '<p>Under <strong>Arts. 17 to 22 of the LGPD</strong> and <strong>Art. 7, IX-X of the Internet Civil Framework</strong>, you have the right to:</p><ul><li><strong>Access:</strong> confirm whether your data is being processed and obtain a copy.</li><li><strong>Correction:</strong> request the update of incomplete, inaccurate or outdated data.</li><li><strong>Anonymization or Deletion:</strong> request the elimination of unnecessary data or data processed in non-compliance with the law.</li><li><strong>Portability:</strong> receive your data in a structured format for use by another provider.</li><li><strong>Withdrawal of consent:</strong> revoke consent at any time, without affecting prior processing.</li><li><strong>Objection:</strong> object to processing based on legitimate interest.</li><li><strong>Information:</strong> know which public and private entities have received your data.</li></ul><p>To exercise any right, send an e-mail to <a href="mailto:jaques.projetos@outlook.com" class="text-primary hover:underline">jaques.projetos@outlook.com</a>. Response time: up to <strong>15 business days</strong>.</p>',

    s6_label: '06 // DPO',
    s6_title: 'Data Protection Officer (DPO)',
    s6_body: '<p>Pursuant to <strong>Art. 41 of the LGPD</strong>, the Data Protection Officer for this website is:</p><ul><li><strong>Name:</strong> Leonardo Jaques</li><li><strong>E-mail:</strong> <a href="mailto:jaques.projetos@outlook.com" class="text-primary hover:underline">jaques.projetos@outlook.com</a></li></ul><p>The DPO is responsible for receiving communications from the ANPD, data subjects, and for taking appropriate measures.</p>',

    s7_label: '07 // COOKIES',
    s7_title: 'Cookies and Tracking',
    s7_body: '<p>This website uses the following cookie categories, pursuant to <strong>Art. 8 of the LGPD</strong> and <strong>Art. 7, III of the Internet Civil Framework</strong>:</p><table class="privacy-table"><thead><tr><th>Type</th><th>Name</th><th>Purpose</th><th>Duration</th></tr></thead><tbody><tr><td>Essential</td><td>privacyAccepted</td><td>Stores your consent choice</td><td>365 days</td></tr><tr><td>Essential</td><td>preferredLanguage</td><td>Saves the selected language</td><td>localStorage</td></tr><tr><td>Analytics (opt-in)</td><td>Umami Analytics</td><td>Anonymized access metrics</td><td>Session</td></tr></tbody></table><p>Analytics cookies are loaded <strong>only after your explicit consent</strong>. Essential cookies are required for the basic functioning of the site and do not require consent. You may revoke your choice at any time by clearing browser cookies or visiting the main page to update your preference.</p>',

    s8_label: '08 // INTERNATIONAL',
    s8_title: 'International Data Transfer',
    s8_body: '<p>As required by <strong>Art. 33 of the LGPD</strong>, we inform:</p><ul><li>Analytics data is processed by <strong>Umami Analytics</strong>, hosted on infrastructure located in <strong>Brazil</strong>. No international transfer takes place.</li><li>Contact data is processed exclusively within Brazil.</li><li>No personal data is shared with or sent to servers in other countries.</li></ul>',

    s9_label: '09 // SECURITY',
    s9_title: 'Data Security',
    s9_body: '<p>We adopt technical and organizational measures to protect your data, as required by <strong>Art. 46 of the LGPD</strong>:</p><ul><li><strong>HTTPS/TLS:</strong> all communications are encrypted with a valid TLS certificate.</li><li><strong>Restricted access:</strong> contact data is accessed solely by the controller (Leonardo Jaques).</li><li><strong>IP anonymization:</strong> IP addresses are anonymized before storage by Umami Analytics.</li><li><strong>No password storage:</strong> this site has no authentication system or user accounts.</li></ul>',

    s10_label: '10 // SHARING',
    s10_title: 'Third-Party Sharing',
    s10_body: '<p>Pursuant to <strong>Art. 7, VII of the Internet Civil Framework</strong> and <strong>Art. 7 of the LGPD</strong>:</p><ul><li>No personal data is <strong>sold, rented or shared</strong> with third parties for commercial purposes.</li><li>Contact data is not transmitted to third parties without prior explicit consent.</li><li>Umami Analytics is operated on the controller\'s own server — it is not a third-party service with access to the data.</li><li>In cases of legal obligation (e.g., court order), data may be shared with competent authorities.</li></ul>',

    s11_label: '11 // UPDATES',
    s11_title: 'Policy Updates',
    s11_body: '<p>This policy may be updated periodically to reflect changes to the website, applicable law, or data processing practices. The latest version will always be available at <strong>jaquesprojetos.com.br/politica-de-privacidade.html</strong>.</p><p>In the event of significant changes, the cookie notice will be displayed again requesting renewed consent.</p><p class="text-on-surface-variant opacity-50 text-sm">Current version: 1.0 — April 2026</p>',

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
