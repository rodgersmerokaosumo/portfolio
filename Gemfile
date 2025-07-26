# Gemfile ─ portfolio website
# frozen_string_literal: true
source "https://rubygems.org"

# ── Core engine ─────────────────────────────────────────────────────────────
# Pin < 4.4 because jekyll-remote-theme isn’t compatible with 4.3+;
# since we’re dropping that plugin, 4.3.x is perfectly fine.
gem "jekyll", "~> 4.3.2"

# ── Theme packaged as a gem (no remote-theme plugin needed) ────────────────
gem "minimal-mistakes-jekyll", "~> 4.27"

# ── Standard plugins ───────────────────────────────────────────────────────
gem "jekyll-seo-tag",  "~> 2.8"   # SEO metadata
gem "jekyll-feed"                 # /feed.xml for RSS/Atom
gem "jekyll-sitemap"              # /sitemap.xml for search engines

# ── Optional: smoother local `jekyll serve` on Ruby 3.x ────────────────────
group :development do
  gem "webrick", "~> 1.8"
end
