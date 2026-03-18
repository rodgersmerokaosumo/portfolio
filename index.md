---
layout: home
title: "Home"
permalink: /
---

<section class="hero reveal">
  <p class="hero-eyebrow">Data Consulting & AI Strategy</p>
  <h1>Turning complex data<br>into clear decisions.</h1>
  <p class="hero-description">
    I help organizations collect, analyze, and act on their data — from survey design and geospatial validation to machine learning systems that drive real impact.
  </p>
  <div class="hero-actions">
    <a href="{{ '/projects/' | relative_url }}" class="button button-primary">View My Work</a>
    <a href="{{ '/services/' | relative_url }}" class="button button-secondary">Services</a>
  </div>
</section>

<section class="featured-cards-section reveal-children">
  <div class="section-inner">
    <div class="featured-cards">
      <a href="{{ '/projects/' | relative_url }}" class="featured-card reveal-child">
        <div class="featured-card-icon"><i class="fas fa-briefcase"></i></div>
        <h3>Latest Projects</h3>
        <p>Explore my recent work in AI strategy, geospatial analysis, and data engineering solutions.</p>
        <span class="featured-card-link">See All Projects <i class="fas fa-arrow-right"></i></span>
      </a>
      <a href="{{ '/blog/' | relative_url }}" class="featured-card reveal-child">
        <div class="featured-card-icon"><i class="fas fa-pen-fancy"></i></div>
        <h3>Recent Insights</h3>
        <p>Thoughts on data science, faith, technology, and the journey of continuous learning.</p>
        <span class="featured-card-link">Read the Blog <i class="fas fa-arrow-right"></i></span>
      </a>
      <a href="{{ '/contact/' | relative_url }}" class="featured-card reveal-child">
        <div class="featured-card-icon"><i class="fas fa-envelope"></i></div>
        <h3>Get In Touch</h3>
        <p>Let's discuss how data science and AI can solve your business challenges.</p>
        <span class="featured-card-link">Contact Me <i class="fas fa-arrow-right"></i></span>
      </a>
    </div>
  </div>
</section>

<section class="service-list-section reveal-children">
  <div class="section-inner">
    <div class="service-list">
      <div class="service-list-item reveal-child">
        <span class="service-number">01</span>
        <div class="service-list-content">
          <h3>Data Collection & Engineering</h3>
          <p>Survey design, ODK pipelines, ETL workflows, and data quality frameworks.</p>
        </div>
      </div>
      <div class="service-list-item reveal-child">
        <span class="service-number">02</span>
        <div class="service-list-content">
          <h3>Analytics & Business Intelligence</h3>
          <p>Dashboards, statistical analysis, and reporting systems that drive decisions.</p>
        </div>
      </div>
      <div class="service-list-item reveal-child">
        <span class="service-number">03</span>
        <div class="service-list-content">
          <h3>AI & Machine Learning Strategy</h3>
          <p>Feasibility assessment to production deployment — ML systems that solve real problems.</p>
        </div>
      </div>
      <div class="service-list-item reveal-child">
        <span class="service-number">04</span>
        <div class="service-list-content">
          <h3>Geospatial Intelligence</h3>
          <p>Spatial analysis, validation platforms, and location-based insights.</p>
        </div>
      </div>
    </div>
    <div class="service-list-footer reveal-child">
      <a href="{{ '/services/' | relative_url }}" class="button button-secondary">All Services <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
    </div>
  </div>
</section>

<section class="side-by-side-section">
  <div class="section-inner">
    <div class="side-by-side">
      <div class="side-by-side-block reveal-left">
        <h2>Latest Work</h2>
        <p>Recent projects in AI strategy, geospatial analysis, and data engineering.</p>
        {% for project in site.projects limit:3 %}
        <div class="side-item">
          <a href="{{ project.url | relative_url }}">
            <span class="side-item-title">{{ project.title }}</span>
            {% if project.key_metric %}<span class="side-item-metric">{{ project.key_metric }}</span>{% endif %}
          </a>
        </div>
        {% endfor %}
        <a href="{{ '/projects/' | relative_url }}" class="link-arrow">View All Work →</a>
      </div>
      <div class="side-by-side-block reveal-right">
        <h2>Recent Writing</h2>
        <p>Thoughts on data science, faith, and continuous learning.</p>
        {% for post in site.posts limit:3 %}
        <div class="side-item">
          <a href="{{ post.url | relative_url }}">
            <span class="side-item-title">{{ post.title | truncatewords: 8 }}</span>
            <span class="side-item-date">{{ post.date | date: "%b %Y" }}</span>
          </a>
        </div>
        {% endfor %}
        <a href="{{ '/blog/' | relative_url }}" class="link-arrow">Read the Blog →</a>
      </div>
    </div>
  </div>
</section>

<section class="cta-band reveal-scale">
  <div class="cta-inner">
    <h2>Have a data challenge?</h2>
    <p>Let's discuss how data and AI can drive your organization's next big decision.</p>
    <a href="{{ '/contact/' | relative_url }}" class="button button-primary">Get In Touch</a>
  </div>
</section>
