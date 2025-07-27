# Comprehensive Project Journal: Portfolio Website

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture & System Design](#architecture--system-design)
3. [Component Analysis](#component-analysis)
4. [Data Flow & Connections](#data-flow--connections)
5. [Plugin Ecosystem](#plugin-ecosystem)
6. [Build Process](#build-process)
7. [Deployment & Configuration](#deployment--configuration)
8. [Development Workflow](#development-workflow)

---

## Project Overview

**Project Type**: Personal Portfolio Website  
**Technology Stack**: Jekyll (Ruby-based static site generator)  
**Theme**: Custom "journal-clone" theme  
**Hosting**: GitHub Pages  
**Domain**: https://rodgersmerokaosumo.github.io/portfolio  

### Purpose
A professional portfolio website for Rodgers Meroka Osumo showcasing:
- Personal brand as "Data Scientist & AI Strategist"
- Blog posts and technical articles
- Project portfolio
- Contact information and social links

---

## Architecture & System Design

### 1. Jekyll Static Site Generator
Jekyll processes markdown files and Liquid templates to generate static HTML. The build process:
```
Markdown + Liquid Templates + SCSS → Static HTML + CSS + Assets
```

### 2. Directory Structure
```
portfolio/
├── _config.yml                 # Main Jekyll configuration
├── Gemfile                     # Ruby dependencies
├── assets/                     # Custom stylesheets and images
│   ├── css/                   # SCSS source files
│   └── img/                   # Site images
├── _data/                     # YAML data files
├── _includes/                 # Template partials
├── _layouts/                  # Page templates
├── _posts/                    # Blog posts (markdown)
├── _site/                     # Generated static site
├── themes/journal-clone/      # Custom theme
└── [page].md                  # Individual pages
```

### 3. Custom Theme Architecture
The `journal-clone` theme is a local gem that provides:
- Layout templates (`_layouts/`)
- Include partials (`_includes/`)
- Theme specifications (`jekyll-theme-journal-clone.gemspec`)

---

## Component Analysis

### 1. Layout System

#### Default Layout (`themes/journal-clone/_layouts/default.html`)
**Purpose**: Base template for all pages  
**Key Features**:
- Fixed sidebar navigation with toggle functionality
- Responsive main content area
- JavaScript-powered sidebar collapse/expand

**Structure**:
```html
<!DOCTYPE html>
<html>
  <head>{% include head.html %}</head>
  <body>
    <aside class="sidebar">
      {% include header.html %}
      {% include footer.html %}
    </aside>
    <button class="sidebar-toggle">☰</button>
    <div class="main-content">{{ content }}</div>
    <script>/* sidebar toggle logic */</script>
  </body>
</html>
```

#### Home Layout (`themes/journal-clone/_layouts/home.html`)
**Purpose**: Homepage with post listings  
**Features**:
- Hero section with site title and tagline
- Paginated post summaries
- Navigation between page sets

#### Post Layout (`themes/journal-clone/_layouts/post.html`)
**Purpose**: Individual blog post pages  
**Features**:
- Article header with title and date
- Optional featured image support
- Disqus comments integration
- Full content display

### 2. Include Components

#### Header (`themes/journal-clone/_includes/header.html`)
**Purpose**: Sidebar navigation  
**Content**:
- Site title and tagline
- Navigation menu from `site.nav` configuration

#### Footer (`themes/journal-clone/_includes/footer.html`)
**Purpose**: Social links and copyright  
**Features**:
- Dynamic social media icons (Twitter, GitHub, LinkedIn)
- Auto-updating copyright year
- FontAwesome icon integration

#### Head (`themes/journal-clone/_includes/head.html`)
**Purpose**: HTML head metadata  
**Includes**:
- SEO meta tags
- Social media Open Graph tags
- Google Fonts (Lora, Montserrat)
- FontAwesome CSS
- Custom stylesheet linkage
- Google Analytics integration

### 3. Styling System

#### SCSS Architecture (`assets/css/`)
**Main Entry Point**: `main.scss`
**Import Structure**:
```scss
@import "variables";  // Color palette, typography, breakpoints
@import "base";       // Reset, base styles, typography
@import "components"; // Post cards, images, code blocks
@import "layout";     // Sidebar, main content, responsive
```

#### Design System
**Color Palette**:
- Primary: `#2a9d8f` (teal green)
- Secondary: `#264653` (dark blue-green)
- Accent: `#e9c46a` (golden yellow)
- Background: `#ffffff` / `#fafafa`

**Typography**:
- Body: "Lora" (serif) - readable, elegant
- Headings: "Montserrat" (sans-serif) - modern, clean

**Layout Approach**:
- Fixed sidebar (240px width)
- Responsive main content area
- Mobile-first CSS with breakpoints

---

## Data Flow & Connections

### 1. Configuration Flow
```
_config.yml → Jekyll Engine → Liquid Variables → Templates
```

**Key Configuration Sections**:
- **Site Identity**: title, tagline, description, locale
- **Navigation**: nav array for menu items
- **Author & Social**: personal information, social links
- **Plugins**: jekyll-feed, jekyll-sitemap, jekyll-seo-tag
- **Build Settings**: markdown processor, syntax highlighter

### 2. Content Processing Flow
```
Markdown Files → Front Matter Parsing → Liquid Template Processing → HTML Generation
```

**Content Types**:
- **Posts** (`_posts/`): Date-based blog content
- **Pages** (root `.md` files): Static pages (about, contact, projects)
- **Data** (`_data/`): YAML data for navigation

### 3. Asset Processing
```
SCSS Files → Sass Compilation → CSS Generation → Asset Pipeline
```

### 4. Plugin Integration Points

#### SEO Tag Plugin
- Auto-generates meta tags
- Integrates with Open Graph configuration
- Provides JSON-LD structured data

#### Feed Plugin
- Creates RSS/Atom feed at `/feed.xml`
- Pulls from site posts and configuration
- Custom title and description from `_config.yml`

#### Sitemap Plugin
- Auto-generates XML sitemap
- Includes all pages and posts
- Respects Jekyll's URL configuration

#### Pagination Plugin (v2)
- Creates paginated post listings
- Configured for 5 posts per page
- Custom URL structure: `/blog/page/:num/`

---

## Plugin Ecosystem

### Core Jekyll Plugins

1. **jekyll-feed** (0.17.0)
   - **Purpose**: RSS/Atom feed generation
   - **Configuration**: Custom feed path, title, description
   - **Output**: `/feed.xml`

2. **jekyll-sitemap** (1.4.0)
   - **Purpose**: XML sitemap for search engines
   - **Auto-discovery**: Finds all pages and posts
   - **Output**: `/sitemap.xml`

3. **jekyll-seo-tag** (2.8.0)
   - **Purpose**: SEO meta tag generation
   - **Features**: Open Graph, Twitter Cards, JSON-LD
   - **Integration**: Automatic via `{% seo %}` tag

4. **jekyll-paginate-v2** (3.0.0)
   - **Purpose**: Advanced pagination
   - **Features**: Collection-based pagination, custom URLs
   - **Configuration**: 5 posts per page, custom permalink structure

5. **jekyll-archives** (2.3.0)
   - **Purpose**: Date/category/tag archive pages
   - **Status**: Configured but not actively used

### Third-Party Integrations

1. **Disqus Comments**
   - **Configuration**: `disqus.shortname` in `_config.yml`
   - **Implementation**: Conditional loading in post layout
   - **Features**: Comment threading, moderation

2. **Google Analytics**
   - **Tracking ID**: `G-XSTELV0HPS`
   - **Implementation**: Global site tag (gtag.js)
   - **Privacy**: Respects user settings

3. **FontAwesome**
   - **Version**: 6.1.1 (CDN)
   - **Usage**: Social media icons, UI elements
   - **Classes**: `fab` (brands), `fas` (solid)

---

## Build Process

### 1. Development Build
```bash
bundle exec jekyll serve
```
**Process**:
1. Load configuration from `_config.yml`
2. Process SCSS files → CSS
3. Parse markdown files → HTML
4. Apply Liquid templating
5. Generate static site in `_site/`
6. Start local server with live reload

### 2. Production Build
```bash
bundle exec jekyll build
```
**Output**: Optimized static files in `_site/` directory

### 3. Asset Processing
- **SCSS Compilation**: `assets/css/main.scss` → `_site/assets/css/main.css`
- **Image Copying**: `assets/img/` → `_site/assets/img/`
- **Jekyll Processing**: Markdown → HTML with front matter

---

## Deployment & Configuration

### GitHub Pages Integration
- **Repository**: `rodgersmerokaosumo/portfolio`
- **Branch**: `main` (auto-deployment)
- **Custom Domain**: Configured for `rodgersmerokaosumo.github.io/portfolio`

### Environment Configuration
- **Base URL**: `/portfolio` (for GitHub Pages subdirectory)
- **Timezone**: `Africa/Nairobi`
- **Locale**: `en`

### DNS & SEO Setup
- **Canonical URL**: `https://rodgersmerokaosumo.github.io/portfolio`
- **Robots.txt**: Auto-generated
- **Sitemap**: Available at `/sitemap.xml`

---

## Development Workflow

### 1. Content Creation
**Blog Posts**:
1. Create file in `_posts/` with format: `YYYY-MM-DD-title.md`
2. Add front matter with layout, title, date, categories
3. Write content in Markdown
4. Jekyll automatically processes on build

**Pages**:
1. Create `.md` file in root or subdirectory
2. Set layout in front matter
3. Configure navigation in `_config.yml` if needed

### 2. Theme Customization
**CSS Changes**:
1. Edit SCSS files in `assets/css/`
2. Use existing variables from `_variables.scss`
3. Follow BEM-like naming conventions
4. Test responsive behavior

**Layout Modifications**:
1. Edit files in `themes/journal-clone/_layouts/`
2. Modify includes in `themes/journal-clone/_includes/`
3. Maintain Liquid template syntax

### 3. Testing & Quality Assurance
```bash
# Local development
bundle exec jekyll serve

# Production build test
bundle exec jekyll build

# Dependency updates
bundle update
```

### 4. Performance Considerations
- **Image Optimization**: Manual optimization needed
- **CSS**: Single compiled stylesheet
- **JavaScript**: Minimal inline scripts
- **External Resources**: CDN for fonts and FontAwesome

---

## Security & Best Practices

### 1. Content Security
- No user-generated content (static site)
- External integrations: Disqus (moderated), Google Analytics
- No database or server-side processing

### 2. Dependency Management
- **Gemfile.lock**: Locked dependency versions
- **Bundle**: Isolated Ruby environment
- **Regular Updates**: Manual `bundle update` process

### 3. Privacy Considerations
- Google Analytics: Standard privacy-compliant implementation
- Social Links: External links with proper targeting
- No tracking cookies beyond GA

---

## Maintenance & Monitoring

### 1. Regular Tasks
- Content updates via new markdown files
- Dependency updates (`bundle update`)
- Theme customizations as needed
- Performance monitoring via Google Analytics

### 2. Backup Strategy
- Git repository provides version control
- GitHub serves as remote backup
- Local development environment easily reproducible

### 3. Future Enhancements
- **Performance**: Image optimization, lazy loading
- **SEO**: Enhanced structured data, meta descriptions
- **Accessibility**: ARIA labels, keyboard navigation
- **Content**: Additional project showcases, technical blog posts

---

## Technical Debt & Known Issues

### Current Limitations
1. **Mobile Optimization**: Sidebar behavior could be improved
2. **Image Management**: Manual optimization required
3. **Search Functionality**: No built-in search feature
4. **Loading Performance**: Could benefit from resource optimization

### Recommended Improvements
1. Implement responsive image handling
2. Add search functionality (e.g., lunr.js)
3. Optimize asset loading (lazy loading, compression)
4. Enhanced accessibility features
5. Progressive Web App capabilities

---

## Recent Development Updates (July 27, 2025)

### Blog Hero Section Optimization
**Objective**: Create a compact, visually appealing blog homepage header
**Implementation**:
- Reduced hero height from 60vh to 40vh (250px minimum) for better content balance
- Switched from `object-fit: contain` to `object-fit: cover` to eliminate empty spaces
- Maintained consistent styling between image and gradient fallback modes
- Added hero image support with automatic fallback to gradient background

**Technical Details**:
```scss
.blog-hero {
  .hero-image {
    height: 40vh;
    min-height: 250px;
    img {
      object-fit: cover; // Fills width completely
    }
  }
  .hero-gradient {
    height: 40vh;
    min-height: 250px;
  }
}
```

### Homepage Content Architecture Redesign
**Problem**: Homepage had too much personal detail, reducing landing page effectiveness
**Solution**: Strategic content reorganization for better user experience

**Homepage Changes**:
1. **Concise Value Proposition**: 2-sentence professional summary
2. **Strategic CTAs**: "View My Work" (primary), "About Me", "Resume" 
3. **Featured Content Grid**: Three-section layout driving traffic to key areas
   - Latest Projects → Projects section
   - Recent Insights → Blog homepage  
   - Get In Touch → Contact page

**About Page Enhancement**:
1. **Complete Personal Narrative**: INTP-J personality, "red" decision-making style
2. **Professional Background**: MSc pursuit while working full-time
3. **Core Expertise**: ML/AI, Data Visualization, Statistical Analysis, Business Intelligence
4. **Personal Interests**: Hiking, superhero movies, human psychology exploration
5. **Professional Actions**: Resume download and contact options

### Technical Implementation Details

**New CSS Components**:
```scss
// Homepage-specific sections
.homepage-intro {
  padding: 4rem 0;
  background-color: lighten($color-bg, 2%);
  text-align: center;
}

.featured-content {
  .content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
  }
  
  .featured-section {
    padding: 2rem;
    border-radius: 8px;
    transition: all 0.2s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
  }
}
```

**Button System Enhancement**:
- **Primary Buttons**: Solid background for main actions
- **Secondary Buttons**: Outlined style for secondary actions  
- **Icon Support**: FontAwesome integration for download icons
- **Responsive Layout**: Stack vertically on mobile devices

### Resume Management System
**Organization**: Moved resume from root directory to `/assets/resume.pdf`
**Access Points**: Available from both homepage and about page
**Download Behavior**: Automatically downloads as "Ozeks_Resume.pdf"
**Integration**: Consistent button styling across pages

### Navigation System Fixes
**Issue**: Internal links failing due to missing `/portfolio/` prefix
**Resolution**: Updated all internal navigation links

**Fixed Links**:
- Homepage: `/projects` → `/portfolio/projects`
- Homepage: `/about` → `/portfolio/about`  
- Homepage: `/blog` → `/portfolio/blog`
- Homepage: `/contact` → `/portfolio/contact`
- Resume: `/assets/resume.pdf` → `/portfolio/assets/resume.pdf`

### Layout Architecture Updates

**Home Layout Simplification**:
```html
<!-- themes/journal-clone/_layouts/home.html -->
---
layout: default
---
{{ content }}
```

**Content Structure**:
1. **Hero Section**: Name and professional tagline
2. **Homepage Intro**: Value proposition with centered CTAs
3. **Featured Content**: Three-column responsive grid

**Responsive Behavior**:
- Desktop: Three-column grid layout
- Tablet: Single column with maintained spacing
- Mobile: Stacked layout with touch-friendly buttons

### User Experience Improvements

**Homepage Flow**:
1. **Immediate Value**: Clear professional positioning
2. **Action-Oriented**: Prominent "View My Work" button
3. **Information Architecture**: Easy access to About, Resume, Projects
4. **Content Discovery**: Featured sections guide exploration

**About Page Flow**:
1. **Personal Connection**: "Hello, I'm Ozeks" opening
2. **Professional Story**: INTP-J personality and approach
3. **Expertise Showcase**: Technical skills and experience
4. **Call to Action**: Resume download and contact options

### Development Workflow Enhancements

**Asset Organization**:
- Resume: `/assets/resume.pdf` (organized location)
- Images: `/assets/img/` (centralized image management)
- Styles: `/assets/css/` (modular SCSS architecture)

**Content Management**:
- Homepage: Strategic landing page content
- About: Comprehensive personal and professional narrative
- Blog: Hero-enhanced listing with pagination support

---

This comprehensive journal documents the complete architecture, component relationships, and operational aspects of the portfolio website, including the latest July 2025 homepage redesign and content optimization updates, providing a thorough understanding of how each part contributes to the overall system functionality.