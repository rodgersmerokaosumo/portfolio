---
layout: home
title: "Home"
permalink: /
---

<section class="hero">
  <h1>{{ site.title }}</h1>
  <p class="tagline">{{ site.tagline }}</p>
  <p class="hero-description">
    I transform complex data into clear, actionable insights that drive strategic decisions. Currently pursuing an MSc in Data Science while delivering real-world solutions through machine learning, analytics, and data visualization.
  </p>
  <div class="hero-actions">
    <a href="{{ '/projects/' | relative_url }}" class="button button-primary">View My Work</a>
    <a href="{{ '/contact/' | relative_url }}" class="button button-secondary">Get In Touch</a>
  </div>
</section>

<section class="about-preview">
  <div class="section-inner">
    <div class="about-preview-grid">
      <div class="about-preview-content">
        <h2>About Me</h2>
        <p>
          I'm an INTP-J data scientist who thrives at the intersection of theoretical depth and practical application. With experience spanning machine learning, geospatial analysis, and business intelligence, I bring a unique blend of analytical rigor and creative problem-solving to every project.
        </p>
        <a href="{{ '/about/' | relative_url }}" class="button button-secondary">
          Learn More <i class="fas fa-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
      <div class="about-preview-image">
        <img src="{{ '/assets/img/avatar.jpeg' | relative_url }}" alt="{{ site.title }}">
      </div>
    </div>
  </div>
</section>

<section class="recent-posts-section">
  <div class="section-inner">
    <div class="section-header">
      <h2>Recent Insights</h2>
      <p>Thoughts on data science, technology, and continuous learning</p>
    </div>
    <div class="posts-preview-grid">
      {% for post in site.posts limit:3 %}
        <article class="post-preview-card">
          {% if post.featured_image %}
            <div class="preview-thumbnail">
              <img src="{{ post.featured_image | relative_url }}" alt="{{ post.title }}" loading="lazy">
            </div>
          {% endif %}
          <div class="preview-content">
            <time class="preview-date" datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: "%B %-d, %Y" }}</time>
            <h3 class="preview-title">
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h3>
            <p class="preview-excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
          </div>
        </article>
      {% endfor %}
    </div>
    <div class="section-footer">
      <a href="{{ '/blog/' | relative_url }}" class="button button-secondary">View All Posts</a>
    </div>
  </div>
</section>

<section class="featured-content">
  <div class="content-grid">
    <div class="featured-section">
      <div class="card-content">
        <div class="card-header">
          <h2>Latest Projects</h2>
        </div>
        <p>Explore my recent work in spatial analysis, machine learning, data analysis, and AI solutions.</p>
        <div class="card-footer">
          <a href="{{ '/projects/' | relative_url }}" class="read-more-btn">
            <span>See All Projects</span>
            <i class="fas fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="featured-section">
      <div class="card-content">
        <div class="card-header">
          <h2>Resume</h2>
        </div>
        <p>Download my resume for a detailed overview of my skills, experience, and qualifications.</p>
        <div class="card-footer">
          <a href="{{ '/assets/resume.pdf' | relative_url }}" class="read-more-btn" download="Ozeks_Resume.pdf">
            <span>Download Resume</span>
            <i class="fas fa-download" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="featured-section">
      <div class="card-content">
        <div class="card-header">
          <h2>Get In Touch</h2>
        </div>
        <p>Let's discuss how data science can solve your business challenges.</p>
        <div class="card-footer">
          <a href="{{ '/contact/' | relative_url }}" class="read-more-btn">
            <span>Contact Me</span>
            <i class="fas fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
