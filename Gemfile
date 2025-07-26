# Gemfile ─ Portfolio site
# frozen_string_literal: true
source "https://rubygems.org"

# ── Core engine ──────────────────────────────────────────────────────────────
# Jekyll 4.3.x is the newest that works without the remote-theme plugin.
gem "jekyll", "~> 4.3.2"

# ── Theme packaged as a gem (faster & safer than remote_theme) ───────────────
gem "minimal-mistakes-jekyll", "~> 4.27"

# ── Standard plugins ─────────────────────────────────────────────────────────
gem "jekyll-seo-tag", "~> 2.8"   # SEO metadata
gem "jekyll-feed"                # /feed.xml
gem "jekyll-sitemap"             # /sitemap.xml

# ── Local‐dev helper (needed on Ruby 3.x) ────────────────────────────────────
group :development do
  gem "webrick", "~> 1.8"
end
