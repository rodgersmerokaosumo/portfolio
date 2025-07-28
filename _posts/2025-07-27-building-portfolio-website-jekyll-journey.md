---
layout: post
title: "Building My Portfolio Website: A Jekyll Journey from Vision to Reality"
date: 2025-07-27
categories: [web-development, portfolio, jekyll]
tags: ["Project Journey"]
excerpt: "From choosing Jekyll to crafting a custom theme inspired by minimalist design principles, here's the story of building my portfolio website and the lessons learned along the way."
featured_image: "/assets/img/blog/portfolio.jpg"
---

Building a portfolio website as a data scientist might seem straightforward, but the journey from concept to completion taught me more about web development, design principles, and personal branding than I initially anticipated. Here's the story of how I built this site and what I learned along the way.

## The Quest for the Right Platform

When I decided to create a professional portfolio, I faced the classic developer dilemma: which platform to choose? WordPress felt too heavy for my needs, plain HTML seemed too limiting, and modern JavaScript frameworks felt like overkill for a static site.

Enter **Jekyll** – a static site generator that struck the perfect balance. As someone who appreciates clean code and minimal dependencies, Jekyll's philosophy resonated with me:

- **Markdown-based content** for easy writing and maintenance
- **Git-based workflow** that integrates with my development process
- **GitHub Pages hosting** for seamless deployment
- **Ruby ecosystem** with powerful theming capabilities

The decision felt right, but little did I know the rabbit hole I was about to dive into.

## The Theme Dilemma: Off-the-Shelf vs. Custom

Initially, I browsed through dozens of Jekyll themes, looking for something that would represent my professional brand. I found beautiful options, but each had limitations:

- Some were too blog-focused, lacking portfolio elements
- Others were visually stunning but overly complex
- Many required compromises on functionality or aesthetics

That's when I discovered the **Journal theme** – minimalist, elegant, and perfectly aligned with my vision. There was just one problem: it was a paid theme, and more importantly, I wanted something uniquely mine.

## The Custom Theme Adventure

Instead of purchasing an existing theme, I decided to create a custom one inspired by Journal's clean aesthetic. This decision transformed a simple website project into a comprehensive web development learning experience.

### Building the Foundation

I started with Jekyll's theme structure, creating a local gem called `jekyll-theme-journal-clone`. The architecture included:

```
themes/journal-clone/
├── _layouts/          # Page templates
├── _includes/         # Reusable components
├── _sass/            # Stylesheets
└── jekyll-theme-journal-clone.gemspec
```

### Design System Development

Creating a coherent design system was more complex than I anticipated. I established:

**Color Palette**: A minimal scheme with deep blacks (#111111) for headings, medium grays (#555555) for body text, and subtle blue accents (#007acc) for interactive elements.

**Typography**: Inter for headings (modern, clean) paired with Georgia for body text (readable, professional).

**Spacing Scale**: Consistent spacing using a rem-based scale from 0.25rem to 4rem for visual hierarchy.

### The SCSS Architecture

I organized the styles into four main files:

1. **`_variables.scss`** - Design tokens and configuration
2. **`_base.scss`** - Typography and fundamental styles  
3. **`_layout.scss`** - Grid system and page structure
4. **`_components.scss`** - UI components and interactive elements

This modular approach made the codebase maintainable and allowed for easy customization.

## Technical Challenges and Solutions

### Sidebar Navigation Design

Creating an elegant sidebar presented several challenges:

**Challenge**: Achieving the right balance of functionality and aesthetics while maintaining responsiveness.

**Solution**: A fixed-position sidebar with smooth animations and a toggle system for mobile devices. The key was using CSS custom properties for consistent spacing and transform animations for smooth interactions.

```scss
.sidebar {
  position: fixed;
  width: var(--sidebar-width);
  transform: translateX(-100%); // Hidden by default on mobile
  transition: transform 0.3s ease;
}
```

### Typography Hierarchy

**Challenge**: Creating a readable, scannable content hierarchy that works across devices.

**Solution**: A carefully crafted type scale with optimal line heights and spacing. I spent considerable time fine-tuning font sizes, margins, and line spacing to achieve the right reading rhythm.

### Content Organization

**Challenge**: Structuring content to showcase both technical projects and written content effectively.

**Solution**: A flexible layout system that adapts to different content types - from blog posts to project showcases - while maintaining visual consistency.

## Lessons Learned

### 1. Design Systems Are Worth the Investment

Creating a comprehensive design system upfront saved countless hours later. Having consistent spacing, colors, and typography rules made every subsequent design decision easier and more coherent.

### 2. Mobile-First is Non-Negotiable

Starting with mobile constraints forced better design decisions. The desktop experience became an enhancement rather than the primary focus, resulting in a more accessible site overall.

### 3. Performance Matters More Than Features

I resisted the urge to add unnecessary animations and complex interactions. The site's fast loading time and clean interface serve users better than flashy effects would.

### 4. Content Strategy Drives Design

The most beautiful website is useless without compelling content. I learned to design around my content needs rather than forcing content into predetermined layouts.

## The Technical Stack

The final implementation includes:

- **Jekyll 4.3.4** for static site generation
- **Custom SCSS** with a modular architecture
- **Responsive design** with CSS Grid and Flexbox
- **GitHub Pages** for hosting and CI/CD
- **Jekyll plugins** for SEO, feeds, and pagination

## Results and Reflections

The website successfully achieves its goals:

- **Professional presentation** of my work and expertise
- **Fast, accessible experience** across all devices
- **Easy content management** through Markdown
- **SEO optimization** with proper meta tags and structure

More importantly, building this site taught me valuable lessons about web development, design thinking, and the importance of user experience in professional branding.

## What's Next

This portfolio is a living project. Future enhancements include:

- Adding interactive project demonstrations
- Implementing a search feature for blog content
- Creating detailed case studies of data science projects
- Optimizing for Core Web Vitals and accessibility standards

## Final Thoughts

Building a custom portfolio website was more than a technical exercise – it was an exercise in understanding my professional identity and how to communicate it effectively. Every design decision, from color choices to typography, reflects the attention to detail and systematic thinking I bring to data science work.

For fellow developers considering a similar journey: embrace the learning process. Yes, using an existing theme would have been faster, but creating something uniquely yours provides insights into web development, design, and personal branding that extend far beyond the final product.

The code for this website is available on [GitHub](https://github.com/rodgersmerokaosumo/portfolio), and I welcome questions about the implementation or design decisions. After all, the best part of building in public is sharing the knowledge gained along the way.

---

*Want to discuss web development, Jekyll, or portfolio design? Connect with me on [LinkedIn](https://www.linkedin.com/in/rodgersmerokaosumo/) or [Twitter](https://twitter.com/osumo_meroka).*