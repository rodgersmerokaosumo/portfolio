---
layout: default
title: "Contact"
permalink: /contact/
---

<section class="contact-header reveal">
  <div class="contact-header-inner">
    <p class="hero-eyebrow">Contact</p>
    <h1>Let's talk about your data.</h1>
    <p class="contact-lead">
      Whether you need help with a data project, want consulting on AI strategy, or just want to connect — I'd love to hear from you.
    </p>
  </div>
</section>

<section class="contact-body reveal">
  <div class="contact-body-inner">
    <div class="contact-form-col">
      <form class="contact-form" action="https://formspree.io/f/xkgzraab" method="POST" id="contact-form">
        <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission">

        <div class="form-group">
          <label for="name">Name *</label>
          <input type="text" id="name" name="name" required minlength="2" maxlength="100">
          <span class="error-message" id="name-error"></span>
        </div>

        <div class="form-group">
          <label for="email">Email *</label>
          <input type="email" id="email" name="email" required>
          <span class="error-message" id="email-error"></span>
        </div>

        <div class="form-group">
          <label for="subject">Subject *</label>
          <input type="text" id="subject" name="subject" required minlength="5" maxlength="200">
          <span class="error-message" id="subject-error"></span>
        </div>

        <div class="form-group">
          <label for="message">Message *</label>
          <textarea id="message" name="message" rows="6" required minlength="20" maxlength="2000" placeholder="Tell me about your project or how I can help..."></textarea>
          <span class="error-message" id="message-error"></span>
          <small class="character-count">0 / 2000</small>
        </div>

        <button type="submit" class="button button-primary" id="submit-btn">
          <span class="btn-text">Send Message</span>
          <span class="btn-loading" style="display: none;">
            <i class="fas fa-spinner fa-spin"></i> Sending...
          </span>
        </button>

        <div class="form-messages">
          <div class="success-message" id="success-message" style="display: none;">
            <i class="fas fa-check-circle"></i>
            <strong>Sent!</strong> I'll get back to you soon.
          </div>
          <div class="error-message-box" id="error-message" style="display: none;">
            <i class="fas fa-exclamation-circle"></i>
            <strong>Something went wrong.</strong> Please try again or email me directly.
          </div>
        </div>
      </form>
    </div>

    <div class="contact-info-col">
      <div class="contact-info-card">
        <h3>Direct</h3>
        <p>Prefer email? Reach me at:</p>
        <a href="mailto:{{ site.author.email }}" class="contact-email-link">{{ site.author.email }}</a>
      </div>

      <div class="contact-info-card">
        <h3>Connect</h3>
        <div class="contact-social-links">
          <a href="https://www.linkedin.com/in/rodgersmerokaosumo/" target="_blank" rel="noopener">
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/rodgersmerokaosumo" target="_blank" rel="noopener">
            <i class="fab fa-github"></i> GitHub
          </a>
          <a href="https://twitter.com/osumo_meroka" target="_blank" rel="noopener">
            <i class="fab fa-twitter"></i> Twitter
          </a>
        </div>
      </div>

      <div class="contact-info-card">
        <h3>Based in</h3>
        <p>Nairobi, Kenya<br>Available for remote work worldwide.</p>
      </div>
    </div>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contact-form');
  var submitBtn = document.getElementById('submit-btn');
  var btnText = submitBtn.querySelector('.btn-text');
  var btnLoading = submitBtn.querySelector('.btn-loading');
  var successMsg = document.getElementById('success-message');
  var errorMsg = document.getElementById('error-message');
  var messageField = document.getElementById('message');
  var charCount = document.querySelector('.character-count');

  messageField.addEventListener('input', function() {
    charCount.textContent = this.value.length + ' / 2000';
  });

  function showError(id, msg) {
    var el = document.getElementById(id + '-error');
    el.textContent = msg;
    el.classList.add('show');
  }

  function hideError(id) {
    document.getElementById(id + '-error').classList.remove('show');
  }

  function validate(field) {
    var val = field.value.trim();
    hideError(field.id);
    if (field.required && !val) { showError(field.id, 'Required.'); return false; }
    if (field.id === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { showError(field.id, 'Invalid email.'); return false; }
    if (field.minLength && val.length < field.minLength) { showError(field.id, 'Too short.'); return false; }
    return true;
  }

  form.querySelectorAll('[required]').forEach(function(f) {
    f.addEventListener('blur', function() { validate(f); });
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var valid = true;
    form.querySelectorAll('[required]').forEach(function(f) { if (!validate(f)) valid = false; });
    if (!valid) return;

    btnText.style.display = 'none';
    btnLoading.style.display = 'inline-flex';
    submitBtn.disabled = true;
    successMsg.style.display = 'none';
    errorMsg.style.display = 'none';

    fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } })
      .then(function(r) {
        if (r.ok) { successMsg.style.display = 'flex'; form.reset(); charCount.textContent = '0 / 2000'; }
        else { throw new Error(); }
      })
      .catch(function() { errorMsg.style.display = 'flex'; })
      .finally(function() { btnText.style.display = 'inline'; btnLoading.style.display = 'none'; submitBtn.disabled = false; });
  });
});
</script>
