# 📓 Portfolio Website Build Journal

**Rodgers Meroka Osumo** — Repo: `rodgersmerokaosumo/portfolio`  
Live site: https://rodgersmerokaosumo.github.io/portfolio/

---

## ✅ Completed to Date

### Phase 0 – Prep (Fri evening)
- Installed Git, Ruby 3.3 & Bundler → configured user‐gem bin dir in `$PATH`.  
- Created GitHub repo `portfolio` (project-site model with `baseurl: /portfolio`). :contentReference[oaicite:5]{index=5}

### Phase 1 – Scaffold (Sat AM)
- Initialized Jekyll + Minimal-Mistakes gem.  
- Drafted `_config.yml`, root `index.md` splash page.  
- Stubbed core pages: `/about/`, `/projects/`, `/contact/`.  
- Wired up `_data/navigation.yml` for About · Projects · Blog · Contact.  
- Added placeholder avatar and sample blog archive page. :contentReference[oaicite:6]{index=6}

### Phase “2” – CI/CD & Content (Sun AM – PM)
- Built GitHub Actions workflow to deploy to `gh-pages` branch.  
- Resolved build failures (Ruby version, frozen lockfile, remote‐theme swap).  
- Switched to theme gem `minimal-mistakes-jekyll`, pinned Jekyll to `~> 4.3.2`.  
- Added blog pagination (`layout: posts`) and sample `_posts/2025-07-26-hello-world.md`.  
- Verified successful build + auto‐deploy → stub pages & blog live. :contentReference[oaicite:7]{index=7}

---

## ▶️ Next Step (Phase 2 – Theming)

According to our PRD’s Weekend Sprint plan, the **next** major phase is **Theming (Sat PM)**:  
> *Customize palette (corporate blues/greys), typography, navbar, favicon, 404 page.* :contentReference[oaicite:8]{index=8}

### Key deliverables in this step
1. **Brand colors & fonts**  
   - Override Minimal-Mistakes SCSS variables (in `assets/css/custom.scss`).  
2. **Favicon & OpenGraph image**  
   - Add `favicon.png` & `og-image.png` under `assets/img/` and reference them in the head include.  
3. **Navbar styling**  
   - Tweak padding, link colors, hover states to match brand palette.  
4. **Custom 404 page**  
   - Create `404.html` with your layout and styling.  

---

*Let me know which theming item you’d like to tackle first, and I’ll walk you through the exact file changes and commands!*  
::contentReference[oaicite:4]{index=4}
