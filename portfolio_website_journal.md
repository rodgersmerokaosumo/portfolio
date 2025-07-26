# Portfolio Website Build Journal

A running log of every significant action, fix, and decision taken while setting up the **Rodgers Meroka Osumo Portfolio & Blog** on GitHub Pages.

---

## 2025‑07‑26  Environment & Repo Setup

| Time | Action | Notes |
|------|--------|-------|
| 02:00 EAT | Installed Git, Ruby 3.3, Bundler 2.7.1 | Added `$HOME/.local/share/gem/ruby/3.3.0/bin` to `PATH`. |
| 02:15 EAT | Created public repo **`portfolio`** on GitHub | Chose project‑site model (`baseurl: /portfolio`). |
| 02:20 EAT | Cloned repo locally & scaffolded Jekyll | `bundle init` → added `jekyll` & `minimal‑mistakes‑jekyll` gems. |
| 02:35 EAT | Added `_config.yml`, `index.md`, first post | Local `bundle exec jekyll serve` rendered OK. |

---

## Step 1  Site Content Scaffold

- Created `about/`, `projects/`, `contact/` pages.
- Built primary navigation via `_data/navigation.yml`.
- Pushed initial scaffold commit `f5c4633`.

---

## GitHub Actions Deployment Pipeline

| Time | Commit | Outcome |
|------|--------|---------|
| 03:10 EAT | Added `.github/workflows/gh-pages.yml` (Ruby 3.3) | **Failed** – runner lacked `ruby3.3` shim. |
| 03:25 EAT | Patched workflow → Ruby 3.2, `bundler-cache: true` | **Passed** gems step. |
| 03:30 EAT | Added `jekyll-seo-tag`, `jekyll-feed`, `jekyll-sitemap` gems | **Failed** – lockfile frozen.
| 03:40 EAT | Regenerated `Gemfile.lock`, committed | **Passed** bundle install. |
| 03:50 EAT | Build **failed** – `configure_sass` NoMethodError from `jekyll-remote-theme`. |
| 04:05 EAT | Switched to **theme‑gem** workflow:<br>  • Removed `jekyll-remote-theme` plugin<br>  • Added `minimal-mistakes-jekyll` gem<br>  • Pinned Jekyll to `~> 4.3.2` | Build turned **green**, `gh-pages` branch published. |

---

## Current State

- **Live URL**: `https://rodgers-osumo.github.io/portfolio/`
- **Theme**: Minimal‑Mistakes v4.27 via gem.
- **CI**: GitHub Actions auto‑deploy on push → `gh-pages`.
- **TODO Next**
  1. Add favicon, social‑sharing OG image.
  2. Populate **Projects** page with case‑study cards.
  3. Integrate Google Analytics ID.
  4. Post‑launch polish (color tweak, custom CSS overrides).
  5. Re‑enable comments via giscus once Discussions is OK.

---

*Last updated: 2025‑07‑26 04:15 EAT*



