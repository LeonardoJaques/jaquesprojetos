# Jaques Projetos Digitais

Site portfólio profissional de Leonardo Jaques — Arquiteto de Software & Desenvolvedor Full Stack.

🌐 **[jaquesprojetos.com.br](https://jaquesprojetos.com.br)**

## 📁 Estrutura do Projeto

```
jaquesprojetos/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos (tema terminal/cyberpunk + dark/light)
├── js/
│   └── main.js             # i18n, tema, filtros, scroll
├── images/
│   ├── cristo-redentor.jpg/webp
│   ├── Pair-Programming-logo.png/webp
│   ├── convergencia-logo.png
│   ├── thumb-*.svg         # Thumbnails dos projetos
│   └── logo-*.svg          # Logos das empresas (employers section)
├── LeonardoJaques_25.pdf   # Currículo
├── favicon.svg
├── Readme.md
└── jenkinsfile             # Pipeline CI/CD
```

## 🎨 Características

- **Tema Dark/Light**: Toggle sun/moon no header, salvo em `localStorage`
- **Tailwind CSS**: CDN v3 com `darkMode: 'class'` configurado
- **Design Terminal/Cyberpunk**: CSS variables, grid patterns, scan-line animation
- **Multi-idioma**: PT / EN com `data-i18n` e `localStorage`
- **Responsivo**: Mobile-first, breakpoints 640px / 768px / 1024px
- **LGPD Compliant**: Modal de consentimento com cookie de 365 dias
- **Analytics**: Umami (`analytics.ldw.solutions`)
- **WebP com fallback**: `<picture>` elements para imagens

## 🚀 Tecnologias

- HTML5 / CSS3 / JavaScript ES6+
- Tailwind CSS (CDN Play v3)
- SVG customizados
- Fira Code + Inter (Google Fonts)

## 📋 Seções

1. **Hero** — Foto Cristo Redentor + apresentação
2. **Trabalhos** — Grid de projetos com filtros (Web / Mobile / Sistemas)
3. **Onde Trabalhei** — Empresas: Mutant→Vivo, Redspark→Embraer+SESC-SP, To-brasil→Descomplica+BRTRio
4. **Sobre** — Bio + Tecnologias agrupadas (Frontend, Backend, Infra, Dados, IA & LLMs)
5. **Contato** — E-mail + telefone +55
6. **Footer** — Redes sociais

## 🔧 Desenvolvimento Local

```bash
python -m http.server 8000
# ou
npx serve
```

Sem build, compile ou install necessário.

## 🌐 Deploy

Pipeline Jenkins automático em qualquer push para `main`:

```
Backup → Clone → Validate → Deploy → Verify → Reload Nginx
```

- Deploy em: `/var/www/jaquesprojetos.com.br/html/`
- Rollback automático em caso de falha
- Mantém últimos 5 backups

## 📱 Redes Sociais

- [LinkedIn](https://linkedin.com/in/leonardojaques-dev)
- [GitHub](https://github.com/LeonardoJaques)
- [Bluesky](https://bsky.app/profile/leonardojaques.bsky.social)
- [Twitter/X](https://x.com/Lajaques)

## 📄 Licença

© 2026 Jaques Projetos Digitais. Todos os direitos reservados.

---

**Desenvolvendo o futuro digital, um café por vez.** ☕
