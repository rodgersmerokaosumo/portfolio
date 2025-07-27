---
layout: default
title: "Contact"
permalink: /contact/
---

<section class="contact-intro">
  <div class="intro-content">
    <h2>Let's Connect</h2>
    <p class="intro-text">
      Whether you're looking to collaborate on a data science project, need consulting on analytics strategy, or just want to discuss the latest in AI and machine learning, I'd love to hear from you.
    </p>
    <p class="intro-text">
      Fill out the form below or reach out directly at <strong>osumorodgersmeroka@gmail.com</strong>
    </p>
  </div>
</section>

<section class="contact-form-section">
  <div class="container">
    <form class="contact-form" action="https://formspree.io/f/xkgzraab" method="POST" id="contact-form">
      <!-- Hidden fields for Formspree -->
      <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission">
      <input type="hidden" name="_replyto" value="">
      <input type="hidden" name="_next" value="thank-you">
      
      <div class="form-group">
        <label for="name">Full Name *</label>
        <input type="text" id="name" name="name" required minlength="2" maxlength="100">
        <span class="error-message" id="name-error"></span>
      </div>
      
      <div class="form-group">
        <label for="email">Email Address *</label>
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
        <textarea id="message" name="message" rows="6" required minlength="20" maxlength="2000" placeholder="Tell me about your project, question, or how I can help..."></textarea>
        <span class="error-message" id="message-error"></span>
        <small class="character-count">0 / 2000 characters</small>
      </div>
      
      <div class="form-group">
        <label for="company">Company/Organization (Optional)</label>
        <input type="text" id="company" name="company" maxlength="100">
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
          <strong>Thank you!</strong> Your message has been sent successfully. I'll get back to you soon.
        </div>
        <div class="error-message-box" id="error-message" style="display: none;">
          <i class="fas fa-exclamation-circle"></i>
          <strong>Oops!</strong> There was an error sending your message. Please try again or email me directly.
        </div>
      </div>
    </form>
  </div>
</section>

<section class="contact-social">
  <div class="container">
    <h3>Connect with me</h3>
    <div class="social-links">
      <a href="mailto:osumorodgersmeroka@gmail.com" class="social-link" aria-label="Email">
        <i class="fas fa-envelope"></i>
      </a>
      <a href="https://www.linkedin.com/in/rodgersmerokaosumo/" target="_blank" class="social-link" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://twitter.com/osumo_meroka" target="_blank" class="social-link" aria-label="Twitter">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://github.com/rodgersmerokaosumo" target="_blank" class="social-link" aria-label="GitHub">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoading = submitBtn.querySelector('.btn-loading');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');
  const messageTextarea = document.getElementById('message');
  const characterCount = document.querySelector('.character-count');
  
  // Character counter for message field
  messageTextarea.addEventListener('input', function() {
    const count = this.value.length;
    const maxLength = this.getAttribute('maxlength');
    characterCount.textContent = `${count} / ${maxLength} characters`;
    
    if (count > maxLength * 0.9) {
      characterCount.style.color = '#dc3545';
    } else {
      characterCount.style.color = '#888888';
    }
  });
  
  // Form validation functions
  function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + '-error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
  }
  
  function hideError(fieldId) {
    const errorElement = document.getElementById(fieldId + '-error');
    errorElement.classList.remove('show');
  }
  
  function validateField(field) {
    const value = field.value.trim();
    const fieldId = field.id;
    let isValid = true;
    
    hideError(fieldId);
    
    if (field.hasAttribute('required') && !value) {
      showError(fieldId, 'This field is required.');
      isValid = false;
    } else if (fieldId === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        showError(fieldId, 'Please enter a valid email address.');
        isValid = false;
      }
    } else if (field.hasAttribute('minlength') && value.length < parseInt(field.getAttribute('minlength'))) {
      showError(fieldId, `Minimum ${field.getAttribute('minlength')} characters required.`);
      isValid = false;
    }
    
    return isValid;
  }
  
  // Real-time validation
  const requiredFields = form.querySelectorAll('input[required], textarea[required]');
  requiredFields.forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) {
        validateField(field);
      }
    });
  });
  
  // Form submission
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Validate all fields
    let isFormValid = true;
    requiredFields.forEach(field => {
      if (!validateField(field)) {
        isFormValid = false;
        field.classList.add('error');
      } else {
        field.classList.remove('error');
      }
    });
    
    if (!isFormValid) {
      return;
    }
    
    // Show loading state
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline-flex';
    submitBtn.disabled = true;
    
    // Hide previous messages
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    
    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        successMessage.style.display = 'flex';
        form.reset();
        characterCount.textContent = '0 / 2000 characters';
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      errorMessage.style.display = 'flex';
    } finally {
      // Reset button state
      btnText.style.display = 'inline';
      btnLoading.style.display = 'none';
      submitBtn.disabled = false;
    }
  });
});
</script>
