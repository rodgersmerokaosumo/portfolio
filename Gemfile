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
gem "jekyll-paginate"
gem "jekyll-archives"            # archive pages
gem "jekyll-redirect-from"       # redirects for old URLs
gem "jekyll-optional-front-matter" # for optional front matter in posts
gem "jekyll-include-cache"       # cache includes for performance

# ── Optional plugins ────────────────────────────────────────────────────────
# Uncomment if you want to use these features.
# gem "jekyll-gist"              # Gist support
# gem "jekyll-coffeescript"      # CoffeeScript support
# gem "jekyll-sass-converter"    # Sass support (if not using SCSS)

# ── Development tools ───────────────────────────────────────────────────────
group :development do
  gem "rubocop", "~> 1.0"         # Code linting
  gem "pry", "~> 0.14"            # Debugging
  gem "jekyll-watch", "~> 2.2"    # Live reloading
  gem "jekyll-remote-theme", "~> 0.4" # For remote
  gem "webrick", "~> 1.8"
end
