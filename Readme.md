# Jaques Projetos Digitais

Professional portfolio of Leonardo Jaques — Software Architect & Full Stack Developer.

🌐 **[jaquesprojetos.com.br](https://jaquesprojetos.com.br)**

## 📁 Project Structure

```
jaquesprojetos/
├── index.html              # Main page
├── css/
│   └── styles.css          # Styles (terminal/cyberpunk theme + dark/light)
├── js/
│   └── main.js             # i18n, theme toggle, filters, smooth scroll
├── images/
│   ├── cristo-redentor.jpg/webp
│   ├── Pair-Programming-logo.png/webp
│   ├── convergencia-logo.png
│   ├── thumb-*.svg         # Project thumbnails
│   └── logo-*.svg          # Company logos (employers section)
├── LeonardoJaques_25.pdf   # Resume/CV
├── favicon.svg
├── Readme.md
└── jenkinsfile             # CI/CD pipeline
```

## 🎨 Features

- **Dark/Light Theme**: Sun/moon toggle in header, persisted via `localStorage`
- **Tailwind CSS**: Play CDN v3 with `darkMode: 'class'`
- **Terminal/Cyberpunk Design**: CSS variables, grid patterns, scan-line animation
- **Multilingual**: PT / EN via `data-i18n` attributes and `localStorage`
- **Responsive**: Mobile-first, breakpoints at 640px / 768px / 1024px
- **LGPD Compliant**: Cookie consent modal with 365-day expiry
- **Analytics**: Umami (`analytics.ldw.solutions`)
- **WebP with fallback**: `<picture>` elements for all images

## 🚀 Tech Stack

- HTML5 / CSS3 / JavaScript ES6+
- Tailwind CSS (Play CDN v3)
- Custom SVG assets
- Fira Code + Inter (Google Fonts)

## 📋 Sections

1. **Hero** — Cristo Redentor photo + profile intro
2. **Works** — Project grid with filters (Web / Mobile / Systems)
3. **Where I've Worked** — Mutant→Vivo, Redspark→Embraer+SESC-SP, To-brasil→Descomplica+BRTRio
4. **About** — Bio + grouped technologies (Frontend, Backend, Infra, Data, AI & LLMs)
5. **Contact** — Email + phone +55
6. **Footer** — Social links

## 🔧 Local Development

```bash
python -m http.server 8000
# or
npx serve
```

No build, compile or install steps required.

## 🌐 Deployment

Automated Jenkins pipeline on every push to `main`:

```
Backup → Clone → Validate → Deploy → Verify → Reload Nginx
```

- Deploy target: `/var/www/jaquesprojetos.com.br/html/`
- Automatic rollback on failure
- Keeps last 5 timestamped backups

## 📱 Social

- [LinkedIn](https://linkedin.com/in/leonardojaques-dev)
- [GitHub](https://github.com/LeonardoJaques)
- [Bluesky](https://bsky.app/profile/leonardojaques.bsky.social)
- [Twitter/X](https://x.com/Lajaques)

## 📄 License

© 2026 Jaques Projetos Digitais. All rights reserved.

---

**Building the digital future, one coffee at a time.** ☕
