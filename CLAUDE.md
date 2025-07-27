# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-powered portfolio website for Rodgers Meroka Osumo, hosted on GitHub Pages. The site uses a custom theme called "jekyll-theme-journal-clone" located in `themes/journal-clone/`.

## Development Commands

### Local Development
```bash
# Install dependencies
bundle install

# Serve the site locally with live reload
bundle exec jekyll serve

# Build the site
bundle exec jekyll build

# Clean generated files
bundle exec jekyll clean
```

### Site Configuration
- Main config: `_config.yml`
- Custom theme located in: `themes/journal-clone/`
- Site URL: https://rodgersmerokaosumo.github.io/portfolio
- Built files output to: `_site/`

## Architecture

### Theme Structure
The site uses a custom Jekyll theme with these key components:
- **Layouts**: `themes/journal-clone/_layouts/` - page templates (default, home, page, post, blog)
- **Includes**: `themes/journal-clone/_includes/` - reusable components (header, footer, nav, head)
- **Custom styles**: `assets/css/` - SCSS files that extend the theme

### Content Structure
- **Posts**: `_posts/` - blog posts in markdown
- **Pages**: Root-level `.md` files (about, contact, projects, blog index)
- **Navigation**: Configured in `_config.yml` nav section
- **Data**: `_data/navigation.yml` for additional nav configuration

### Key Features
- RSS feed via jekyll-feed plugin
- SEO optimization with jekyll-seo-tag
- Disqus comments integration
- Google Analytics tracking
- Responsive design with custom SCSS

### Asset Management
- Images: `assets/img/`
- Styles: `assets/css/` (SCSS compiled to CSS)
- Generated CSS and assets: `_site/assets/`

## Important Files
- `_config.yml` - Main Jekyll configuration
- `Gemfile` - Ruby dependencies
- `themes/journal-clone/jekyll-theme-journal-clone.gemspec` - Custom theme specification