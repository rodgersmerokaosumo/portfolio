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

## Development History & Recent Work

### Journal-Inspired Theme Implementation (July 2025)
Successfully implemented a custom Journal-inspired theme with the following key achievements:

#### Design System
- **Color Palette**: Minimal scheme with deep blacks (#111111) for headings, medium grays (#555555) for body text, and subtle blue accents (#007acc)
- **Typography**: Inter for headings paired with Georgia for body text
- **Spacing Scale**: Consistent rem-based spacing from 0.25rem to 4rem

#### SCSS Architecture
Organized into modular files:
- `assets/css/_variables.scss` - Design tokens and configuration
- `assets/css/_base.scss` - Typography and fundamental styles  
- `assets/css/_layout.scss` - Grid system and page structure
- `assets/css/_components.scss` - UI components and interactive elements

#### Key Features Implemented
1. **Sidebar Navigation**: Fixed-position dark sidebar with smooth animations and mobile toggle
2. **Blog Hero Section**: Supports both hero images and gradient fallback
3. **Post Styling**: Comprehensive typography hierarchy and content styling
4. **Archive Layout**: Clean blog post listing with responsive design
5. **Image Support**: Featured images for blog posts via `featured_image` front matter

#### Layout Structure
- `_layouts/blog.html` - Blog homepage with hero section and post archive
- `_layouts/post.html` - Individual post layout with featured image support
- `themes/journal-clone/_layouts/` - Theme-specific layouts (fallback)

#### Styling Fixes Completed
- ✅ Fixed individual post styling with proper `.container` and `.post` CSS classes
- ✅ Added blog homepage hero section with image/gradient support
- ✅ Enhanced archive styling with professional spacing and typography
- ✅ Implemented responsive design with mobile-first approach

#### Image Implementation
- **Blog Hero**: Set via `hero_image: "/assets/img/blog-hero.jpg"` in blog index front matter
- **Post Images**: Set via `featured_image: "/assets/img/filename.jpg"` in post front matter
- **Responsive Images**: Automatic responsive scaling and proper aspect ratios

#### Technical Notes
- Site uses both root `_layouts/` (for overrides) and theme `themes/journal-clone/_layouts/`
- Hero section falls back to gradient when no image is specified
- All styling follows Journal theme aesthetic principles
- Mobile-responsive with collapsible sidebar at 768px breakpoint

## Journal Updates

### Blog Hero Section Refinements (July 2025)
- **Height Optimization**: Reduced blog hero section from 60vh to 40vh for better content balance
- **Image Display**: Uses `object-fit: cover` to fill width completely without empty spaces
- **No Cropping Issues**: Final implementation eliminates empty space while showing full-width coverage
- **Improved UX**: Hero section takes optimal screen space, allowing more room for blog post list
- **Consistent Sizing**: Both image and gradient fallback use same 40vh height with 250px minimum

### Homepage Content Architecture Redesign (July 2025)
- **Content Reorganization**: Moved detailed personal story from homepage to About page for better UX
- **Homepage Focus**: Created landing page with concise value proposition and clear navigation
- **Enhanced About Page**: Added comprehensive personal narrative with INTP-J personality, MSc details, and core expertise
- **Strategic CTAs**: Homepage features "View My Work", "About Me", and "Resume" buttons for optimal conversion

### Homepage Layout Components
- **Hero Section**: Name, tagline, and professional positioning
- **Homepage Intro**: Concise 2-sentence value proposition with centered layout
- **Featured Content Grid**: Three-column responsive layout with hover effects
  - Latest Projects → `/portfolio/projects`
  - Recent Insights → `/portfolio/blog`  
  - Get In Touch → `/portfolio/contact`

### About Page Enhancement
- **Complete Personal Story**: INTP-J data scientist, "red" personality style, MSc pursuit
- **Professional Background**: Theoretical depth + practical experience combination
- **Core Expertise**: ML/AI, Data Visualization, Statistical Analysis, Business Intelligence
- **Personal Interests**: Hiking, superhero movies, human psychology
- **Strategic Actions**: Download Resume + Get In Touch buttons

### Technical Implementation
- **New CSS Components**: `.homepage-intro`, `.featured-content`, `.content-grid`, `.featured-section`
- **Responsive Design**: Mobile-first grid that stacks on small screens
- **Hover Effects**: Elegant card lift animations and color transitions
- **Button Variants**: Primary (solid) and secondary (outlined) styles with proper spacing
- **Resume Management**: Moved to `/assets/resume.pdf` for better organization

### Navigation Fixes
- **URL Corrections**: Fixed all links to include `/portfolio/` prefix for proper routing
- **Link Verification**: All internal navigation now works correctly in local development
- **Error Resolution**: Eliminated 404 errors for projects, blog, about, contact, and resume links

### Sidebar Avatar Integration (July 2025)
- **Personal Branding**: Added circular avatar image to sidebar header for enhanced personal connection
- **Professional Styling**: 80px circular image with subtle border and hover effects
- **Visual Hierarchy**: Positioned above name and tagline for optimal user experience
- **Interactive Design**: Hover effects with color transition and scale animation
- **Asset Integration**: Uses existing `/assets/img/avatar.jpeg` with proper responsive handling

#### Avatar Technical Implementation
- **File Structure**: Added to `themes/journal-clone/_includes/header.html`
- **CSS Styling**: Implemented in `assets/css/_layout.scss` with `.sidebar-avatar` class
- **Responsive Design**: Maintains consistent 80px size across all devices
- **Accessibility**: Includes proper alt text and semantic markup
- **Performance**: Optimized with `object-fit: cover` for perfect circular display