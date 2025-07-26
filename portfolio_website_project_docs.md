# Portfolio Website for **Rodgers Meroka Osumo**

\*Elegant corporate portfolio & blog built with **Jekyll**, hosted on \****GitHub Pages***\
*Weekend solo sprint*\
*Version 0.1 — 2025‑07‑25*

---

## 1  Product Requirements Document (PRD)

### 1.1 Background & Purpose

Rodgers (a data scientist) needs an online presence that:

1. Showcases professional achievements/projects.
2. Hosts thought‑leadership blog posts.
3. Feels corporate, elegant, minimal.
4. Requires minimal manual ops (CI/CD, comments, analytics baked in).

### 1.2 Problem Statement

There is currently no single authoritative site that positions Rodgers as a senior‑level data & AI professional. Ad‑hoc LinkedIn posts and GitHub repos lack a cohesive, branded narrative.

### 1.3 Goals & Success Metrics

| Goal               | Metric                                                        | Target                |
| ------------------ | ------------------------------------------------------------- | --------------------- |
| Professional brand | Completed site published at `https://rodgers‑osumo.github.io` | 100 % by Sunday night |
| Engagement         | Avg 1+ comment/post within 30 days                            | ≥ 1                   |
| Ease of publishing | New blog post via web UI / GitHub Issue < 5 min               | ✅                     |
| SEO                | Lighthouse SEO score                                          | ≥ 90                  |
| Accessibility      | Lighthouse a11y score                                         | ≥ 90                  |
| Analytics          | GA events flowing                                             | ✅ by launch           |

### 1.4 Personas & Users

- **Primary**: Rodgers (site owner & author).
- **Secondary**: Hiring managers, collaborators, conference organizers, blog readers.

### 1.5 Functional Requirements

1. **Landing page** with hero banner, elevator pitch, CTA buttons (CV PDF, contact email).
2. **Projects section** (card grid → modal/details pages).
3. **Blog tab** listing posts chronologically; each post page > comments thread.
4. **Commenting** via GitHub‑based widget (giscus) — zero vendor lock‑in, no ads.
5. **Responsive design** (mobile‑first) using semantic HTML & CSS.
6. **Google Analytics v4** snippet & meta‑tags for SEO/social sharing.
7. **Internationalization**: architecture ready but only English initially.
8. **CI/CD**: GitHub Actions auto‑build & deploy on push.
9. **Easy authoring**: publish by either
   - (a) GitHub web‑editor commit (baseline), or
   - (b) Opening a GitHub *Issue* labelled `blog` → workflow converts into a Markdown post (stretch).

### 1.6 Non‑Functional Requirements

- **Performance**: ≤ 1 s First Contentful Paint on 4G.
- **Security**: Only static assets—no server runtime.
- **Accessibility**: WCAG 2.1 AA (contrast, alt‑text, keyboard nav).
- **Maintainability**: Clean theme overrides instead of forking whole theme.

### 1.7 Out of Scope

- Multi‑language content, dark mode, search, newsletter sign‑ups.

---

## 2  Project Plan (Weekend Sprint)

| Phase                         | Tasks                                                                                                                                            | Owner   | Start     | End       | Deliverable                |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- | --------- | --------- | -------------------------- |
| **0. Prep (Fri evening)**     | Install Ruby + Bundler, fork minimal Jekyll theme (“Minimal‑Mistakes” or similar), create empty repo `portfolio` with `gh-pages` branch enabled. | Rodgers | Fri 19:00 | Fri 21:00 | Local dev up & running     |
| **1. Scaffold (Sat AM)**      | Configure `_config.yml`, add GA ID, set site title/tagline, set baseurl, enable giscus script placeholder.                                       | Rodgers | Sat 09:00 | Sat 12:00 | Site builds locally        |
| **2. Theming (Sat PM)**       | Customize palette (corporate blues/greys), typography, navbar, favicon, 404 page.                                                                | Rodgers | Sat 13:00 | Sat 17:00 | Styled landing page        |
| **3. Content (Sun AM)**       | Draft About, Projects (3 sample cards), first Blog post.                                                                                         | Rodgers | Sun 09:00 | Sun 12:00 | Markdown content committed |
| **4. Comments & CI (Sun PM)** | Integrate giscus, create `jekyll.yml` GitHub Actions workflow, optional Issue‑to‑post action. Test Lighthouse & fix a11y/SEO warnings.           | Rodgers | Sun 13:00 | Sun 17:00 | Auto‑deploy to gh‑pages    |
| **Buffer & Launch**           | Final sanity checks, share link, create GA property.                                                                                             | Rodgers | Sun 17:00 | Sun 19:00 | Public launch tweet        |

Milestones

1. **M1 Local build ok** (Sat 12 h).
2. **M2 Styled landing page** (Sat 17 h).
3. **M3 Blog + comments functional** (Sun 15 h).
4. **M4 Live on GitHub Pages** (Sun 19 h).

Risk / Mitigation

- Ruby env issues → use GitHub Codespaces template.
- New GA interface unfamiliar → allocate 30 min buffer.
- Issue‑to‑post YAML complicated → treat as stretch if time slips.

---

## 3  Implementation Plan

### 3.1 Architecture Diagram

```
Browser ──> GitHub Pages (static)
                      │
                      ├── giscus iframe → GitHub Discussions API
                      └── Google Analytics
```

### 3.2 Tech Stack

- **Jekyll 4.x** (Ruby static‑site generator) — GitHub Pages native.
- **Theme**: Minimal‑Mistakes (MIT) with custom palette.
- **Comments**: giscus (uses Discussions).
- **CI/CD**: GitHub Actions → peaceiris/actions‑gh‑pages\@v3.
- **Analytics**: GA4 (`G‑XXXXXXX`).
- **Optional authoring**: `peter‑evans/create‑or‑update‑file` action for Issue publishing.

### 3.3 Repository Layout

```
.
├── _config.yml
├── Gemfile
├── _posts/
│   └── 2025‑07‑25‑welcome.md
├── _projects/
│   └── polygon‑review‑tool.md
├── _layouts/
│   └── default.html
├── _includes/
│   └── giscus.html
├── assets/
│   ├── css/
│   └── img/
├── scripts/
│   └── issue_to_post.py  # (stretch)
└── .github/
    └── workflows/
        ├── jekyll.yml
        └── bump_version.yml (optional)
```

### 3.4 Key Config Snippets

\`\`\*\* (excerpt)\*\*

```yml
url: "https://rodgers‑osumo.github.io"
baseurl: ""  # hosting at root
lang: "en"
plugins:
  - jekyll-feed    # RSS
  - jekyll-sitemap # SEO
  - jekyll-seo-tag # meta tags
# Comment system include
comments:
  provider: giscus
  giscus:
    repo: "rodgers-osumo/portfolio"
    repo_id: "<id>"
    category: "Blog Comments"
```

\`\`

```yaml
name: Build & Deploy (Jekyll)

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-ruby@v1
        with:
          ruby-version: '3.2'
      - name: Install Gems
        run: |
          gem install bundler
          bundle install
      - name: Build site
        run: bundle exec jekyll build --future
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
```

**Version bump (optional)** — use `phips28/gh-action-bump-version` triggered on PR merge.

### 3.5 Comment Integration Steps

1. Enable GitHub Discussions on repo.
2. Go to `giscus.app`, configure repo & category, copy script.
3. Paste into `_includes/giscus.html`, include in `post.html` layout.
4. Test comment flow with personal GitHub account.

### 3.6 Accessibility & SEO Checklist

- Use semantic tags (`<header>`, `<nav>`, `<main>`, `<footer>`).
- Alt text on all decorative images.
- Contrast ≥ 4.5:1 (corporate blue #114488 on white).
- `aria-label` on nav links.
- `jekyll-seo-tag` auto‑adds meta‑title, description, OpenGraph, Twitter card.

### 3.7 How to Publish a Blog Post (Baseline)

1. In GitHub UI → `_posts/` → *Add file*.
2. Name file `YYYY-MM-DD-title.md`.
3. Paste front‑matter:
   ```
   ---
   layout: post
   title: "Why Geospatial Validation Matters"
   description: "Lessons from a 60k‑polygon project"
   ---
   ```
4. Write in Markdown → Commit → Action auto‑deploys.

*Stretch*: open Issue with template → workflow converts & commits.

### 3.8 Future Enhancements

- Dark‑mode toggle (CSS‑vars).
- Multilingual (`jekyll-multiple-languages`) when Japanese blog posts start.
- Search (Lunr.js) and tagging.
- RSS to email (Zapier) for subscribers.

---

**End of Document**

