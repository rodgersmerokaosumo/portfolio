# Portfolio Website Journal

**Last updated:** 2025-07-26

---

## 📋 PRD Overview

We’re building an elegant, corporate-feel portfolio site on GitHub Pages using Jekyll.  
Key PRD requirements:

- **Home, Blog, Projects, About, Contact** pages  
- **Blog** should allow public comments  
- **Non-tech CMS** for writing posts (no direct commits)  
- **Google Analytics** & core meta tags for SEO  
- **Build & Deploy** via GitHub Actions  
- **Automatic version bumping** on deploy  
- **English only** to start (internationalization later)  
- **Accessible** per basic WCAG guidelines  
- **Weekend timeline**, single-developer project  

---

## ✅ Completed So Far

1. **Scope & PRD drafted**  
   - Outlined requirements, site map, and tech stack  
2. **Project configuration**  
   - Updated `Gemfile` and `_config.yml`  
   - Switched to local `jekyll-theme-journal-clone` theme  
3. **Manual theme scaffold** in `themes/journal-clone/`  
   - `_layouts/`: `default.html`, `home.html`, `post.html`, `page.html`  
   - `_includes/`: `head.html`, `header.html`, `footer.html`  
   - Gemspec & Ruby entrypoint under `lib/`  
4. **Site-level SCSS** under `assets/css/`  
   - `main.scss` with front-matter and imports  
   - Partials: `_variables.scss`, `_base.scss`, `_layout.scss`, `_components.scss`  
5. **Page wiring**  
   - Home (`index.md`), Blog (`blog/index.md`), Projects, About, Contact pages all use correct layouts  
6. **Styling basics**  
   - Color palette, typography, container width, header/nav styling  
   - Verified Jekyll compiles `assets/css/main.scss` → `main.css`  
7. **Header tweaks**  
   - Reduced name font-size, aligned nav to bottom  
   - Decided to postpone hero image for now  
8. **GitHub Actions CI/CD**  
   - Automated build & deploy to GitHub Pages  

---

## ⏳ Remaining (per PRD)

- **Comments integration** (e.g. Disqus, Staticman)  
- **CMS setup** for non-technical post editing (e.g. Netlify CMS or Forestry)  
- **Analytics**: insert Google Analytics snippet in `head.html`  
- **SEO meta tags**: add OpenGraph, Twitter Cards, description tags  
- **Automatic version bumping** on releases  
- **Accessibility audit** & fixes (ARIA, color contrast, keyboard nav)  
- **Responsive/mobile styling** & mobile nav toggle  
- **Content polish**: final typography tweaks, spacing, imagery  
- **Projects page design**: card layouts, project details  
- **Contact form**: static-form service or serverless function  
- **Internationalization scaffolding** (future expansion)  
- **Performance optimizations**: CSS/JS minification, image lazy-load  

---

> **Next**: pick one remaining item—e.g. comments integration or analytics snippet—and we’ll tackle it step by step.
