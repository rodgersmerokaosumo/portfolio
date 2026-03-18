/**
 * Email-to-Post: Publish blog posts and projects to your Jekyll site by sending an email.
 *
 * EMAIL FORMAT
 * ============
 * Subject:  [BLOG] Your Post Title   OR   [PROJECT] Your Project Title
 *
 * Body (optional metadata block above the --- separator):
 *
 *   tags: Spiritual Reflections, Personal Growth
 *   excerpt: A custom excerpt for the post
 *   client: Client Name              (projects only)
 *   ---
 *   Your markdown content starts here...
 *
 * If no --- separator is found, the entire body is treated as content
 * and tags/excerpt are auto-generated.
 *
 * IMAGES
 * ======
 * Attach a single image to the email and it will be uploaded as the
 * featured_image. If no image is attached, the post is created without one.
 *
 * SETUP — see scripts/SETUP_EMAIL_TO_POST.md in the repository.
 */

// ── Configuration ────────────────────────────────────────────────────────────

function getConfig() {
  const props = PropertiesService.getScriptProperties();
  return {
    GITHUB_TOKEN:    props.getProperty('GITHUB_TOKEN'),
    REPO_OWNER:      'rodgersmerokaosumo',
    REPO_NAME:       'portfolio',
    BRANCH:          'main',
    ALLOWED_EMAIL:   'rodgersmerokaosumo@gmail.com',
    PROCESSED_LABEL: 'Website-Published',
    BLOG_PREFIX:     '[BLOG]',
    PROJECT_PREFIX:  '[PROJECT]'
  };
}

// ── Main entry point (called by time-based trigger) ──────────────────────────

function processEmails() {
  const config = getConfig();

  if (!config.GITHUB_TOKEN) {
    Logger.log('ERROR: GITHUB_TOKEN not set. Run setGitHubToken() first.');
    return;
  }

  // Ensure label exists
  var label = GmailApp.getUserLabelByName(config.PROCESSED_LABEL);
  if (!label) {
    label = GmailApp.createLabel(config.PROCESSED_LABEL);
  }

  // Search for unprocessed emails
  var blogThreads    = GmailApp.search('subject:"' + config.BLOG_PREFIX + '" from:' + config.ALLOWED_EMAIL + ' -label:' + config.PROCESSED_LABEL);
  var projectThreads = GmailApp.search('subject:"' + config.PROJECT_PREFIX + '" from:' + config.ALLOWED_EMAIL + ' -label:' + config.PROCESSED_LABEL);

  blogThreads.forEach(function(thread) {
    var message = thread.getMessages()[0];
    if (!senderMatches(message, config.ALLOWED_EMAIL)) return;

    try {
      processBlogPost(message, config);
      thread.addLabel(label);
      thread.markRead();
      Logger.log('Published blog post: ' + message.getSubject());
    } catch (e) {
      Logger.log('ERROR processing blog "' + message.getSubject() + '": ' + e.message);
    }
  });

  projectThreads.forEach(function(thread) {
    var message = thread.getMessages()[0];
    if (!senderMatches(message, config.ALLOWED_EMAIL)) return;

    try {
      processProject(message, config);
      thread.addLabel(label);
      thread.markRead();
      Logger.log('Published project: ' + message.getSubject());
    } catch (e) {
      Logger.log('ERROR processing project "' + message.getSubject() + '": ' + e.message);
    }
  });
}

// ── Blog post processing ─────────────────────────────────────────────────────

function processBlogPost(message, config) {
  var subject = message.getSubject();
  var title   = subject.replace(/\[BLOG\]\s*/i, '').trim();
  var body    = message.getPlainBody();
  var date    = Utilities.formatDate(message.getDate(), 'Africa/Nairobi', 'yyyy-MM-dd');
  var slug    = slugify(title);

  var parsed  = parseEmailBody(body);
  var tags    = parsed.metadata.tags || [];
  var excerpt = parsed.metadata.excerpt || autoExcerpt(parsed.content);

  // Handle optional image attachment
  var featuredImage = '';
  var imageAttachment = findImageAttachment(message);

  if (imageAttachment) {
    var ext = getImageExtension(imageAttachment.getContentType());
    var imagePath = 'assets/img/blog/' + slug + '.' + ext;
    uploadToGitHub(config, imagePath, Utilities.base64Encode(imageAttachment.getBytes()), 'Add blog image: ' + title);
    featuredImage = '/' + imagePath;
  }

  // Build front matter
  var frontMatter = '---\n';
  frontMatter += 'layout: post\n';
  frontMatter += 'title: "' + escapeYaml(title) + '"\n';
  frontMatter += 'date: ' + date + '\n';

  if (tags.length > 0) {
    frontMatter += 'tags: [' + tags.map(function(t) { return '"' + t.trim() + '"'; }).join(', ') + ']\n';
  }
  if (featuredImage) {
    frontMatter += 'featured_image: "' + featuredImage + '"\n';
  }
  frontMatter += 'excerpt: "' + escapeYaml(excerpt) + '"\n';
  frontMatter += '---\n\n';

  var filePath    = '_posts/' + date + '-' + slug + '.md';
  var fileContent = frontMatter + parsed.content;

  uploadToGitHub(config, filePath, encodeContent(fileContent), 'Add blog post: ' + title);
}

// ── Project processing ───────────────────────────────────────────────────────

function processProject(message, config) {
  var subject = message.getSubject();
  var title   = subject.replace(/\[PROJECT\]\s*/i, '').trim();
  var body    = message.getPlainBody();
  var date    = Utilities.formatDate(message.getDate(), 'Africa/Nairobi', 'yyyy-MM-dd');
  var slug    = slugify(title);

  var parsed    = parseEmailBody(body);
  var techStack = parsed.metadata.tags || [];
  var client    = parsed.metadata.client || '';
  var excerpt   = parsed.metadata.excerpt || autoExcerpt(parsed.content);

  // Handle optional image attachment
  var featuredImage = '';
  var imageAttachment = findImageAttachment(message);

  if (imageAttachment) {
    var ext = getImageExtension(imageAttachment.getContentType());
    var imagePath = 'assets/img/projects/' + slug + '.' + ext;
    uploadToGitHub(config, imagePath, Utilities.base64Encode(imageAttachment.getBytes()), 'Add project image: ' + title);
    featuredImage = '/' + imagePath;
  }

  // Build front matter
  var frontMatter = '---\n';
  frontMatter += 'title: "' + escapeYaml(title) + '"\n';
  frontMatter += 'date: ' + date + '\n';

  if (techStack.length > 0) {
    frontMatter += 'tech_stack:\n';
    techStack.forEach(function(t) {
      frontMatter += '  - "' + t.trim() + '"\n';
    });
  }
  if (client) {
    frontMatter += 'client: "' + escapeYaml(client) + '"\n';
  }
  if (featuredImage) {
    frontMatter += 'featured_image: "' + featuredImage + '"\n';
  }
  frontMatter += 'excerpt: "' + escapeYaml(excerpt) + '"\n';
  frontMatter += 'comments: true\n';
  frontMatter += '---\n\n';

  var filePath    = '_projects/' + date + '-' + slug + '.md';
  var fileContent = frontMatter + parsed.content;

  uploadToGitHub(config, filePath, encodeContent(fileContent), 'Add project: ' + title);
}

// ── Email parsing ────────────────────────────────────────────────────────────

function parseEmailBody(body) {
  var metadata = {};
  var content  = body;

  // Look for metadata block before first ---
  var separatorIndex = body.indexOf('\n---');
  if (separatorIndex < 0) separatorIndex = body.indexOf('\r\n---');

  if (separatorIndex > 0) {
    var metaSection = body.substring(0, separatorIndex).trim();
    content = body.substring(body.indexOf('---', separatorIndex) + 3).trim();

    // Only treat as metadata if lines look like key: value pairs
    var lines = metaSection.split(/\r?\n/);
    var isMetadata = lines.every(function(line) {
      return line.trim() === '' || line.indexOf(':') > 0;
    });

    if (isMetadata) {
      lines.forEach(function(line) {
        var colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
          var key   = line.substring(0, colonIndex).trim().toLowerCase();
          var value = line.substring(colonIndex + 1).trim();

          if (key === 'tags' || key === 'tech_stack') {
            metadata[key] = value.split(',').map(function(t) { return t.trim(); }).filter(function(t) { return t; });
          } else {
            metadata[key] = value;
          }
        }
      });
    } else {
      // Not metadata — treat entire body as content
      content = body;
    }
  }

  return { metadata: metadata, content: content };
}

// ── GitHub API ───────────────────────────────────────────────────────────────

function uploadToGitHub(config, path, contentBase64, commitMessage) {
  var url = 'https://api.github.com/repos/' + config.REPO_OWNER + '/' + config.REPO_NAME + '/contents/' + path;

  // Check if file already exists (to get SHA for updates)
  var sha = null;
  try {
    var existing = UrlFetchApp.fetch(url, {
      headers: {
        'Authorization': 'token ' + config.GITHUB_TOKEN,
        'Accept': 'application/vnd.github.v3+json'
      },
      muteHttpExceptions: true
    });
    if (existing.getResponseCode() === 200) {
      sha = JSON.parse(existing.getContentText()).sha;
    }
  } catch (e) {
    // File doesn't exist — that's fine
  }

  var payload = {
    message: commitMessage,
    content: contentBase64,
    branch:  config.BRANCH
  };
  if (sha) payload.sha = sha;

  var response = UrlFetchApp.fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': 'token ' + config.GITHUB_TOKEN,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    payload: JSON.stringify(payload)
  });

  var code = response.getResponseCode();
  if (code !== 200 && code !== 201) {
    throw new Error('GitHub API returned ' + code + ': ' + response.getContentText());
  }

  return JSON.parse(response.getContentText());
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function senderMatches(message, allowedEmail) {
  var from = message.getFrom();
  return from.indexOf(allowedEmail) !== -1;
}

function findImageAttachment(message) {
  var attachments = message.getAttachments();
  for (var i = 0; i < attachments.length; i++) {
    if (attachments[i].getContentType().indexOf('image/') === 0) {
      return attachments[i];
    }
  }
  return null;
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function escapeYaml(text) {
  return text.replace(/"/g, '\\"').replace(/\n/g, ' ');
}

function autoExcerpt(content) {
  // Take first 160 chars of content, clean up
  return content
    .replace(/^#+\s.*/gm, '')   // strip markdown headings
    .replace(/[*_`]/g, '')      // strip markdown formatting
    .replace(/\n+/g, ' ')       // collapse newlines
    .trim()
    .substring(0, 160)
    .trim();
}

function encodeContent(text) {
  return Utilities.base64Encode(Utilities.newBlob(text, 'text/plain', 'file.md').getBytes());
}

function getImageExtension(contentType) {
  var map = {
    'image/jpeg': 'jpg',
    'image/png':  'png',
    'image/gif':  'gif',
    'image/webp': 'webp'
  };
  return map[contentType] || 'jpg';
}

// ── Setup & management functions (run manually) ──────────────────────────────

/**
 * Run this ONCE to store your GitHub Personal Access Token.
 * Replace YOUR_TOKEN_HERE with your actual token.
 */
function setGitHubToken() {
  PropertiesService.getScriptProperties().setProperty('GITHUB_TOKEN', 'YOUR_TOKEN_HERE');
  Logger.log('GitHub token saved successfully.');
}

/**
 * Run this ONCE to create the 10-minute trigger.
 */
function setup() {
  // Remove any existing triggers for this function
  ScriptApp.getProjectTriggers().forEach(function(trigger) {
    if (trigger.getHandlerFunction() === 'processEmails') {
      ScriptApp.deleteTrigger(trigger);
    }
  });

  // Create new trigger — checks every 10 minutes
  ScriptApp.newTrigger('processEmails')
    .timeBased()
    .everyMinutes(10)
    .create();

  Logger.log('Trigger created. Emails will be checked every 10 minutes.');
}

/**
 * Run this to test with a dry run — logs what it would do without publishing.
 */
function testSearch() {
  var config = getConfig();
  var blogThreads = GmailApp.search('subject:"' + config.BLOG_PREFIX + '" from:' + config.ALLOWED_EMAIL + ' -label:' + config.PROCESSED_LABEL, 0, 5);
  var projectThreads = GmailApp.search('subject:"' + config.PROJECT_PREFIX + '" from:' + config.ALLOWED_EMAIL + ' -label:' + config.PROCESSED_LABEL, 0, 5);

  Logger.log('Found ' + blogThreads.length + ' unprocessed blog emails');
  blogThreads.forEach(function(t) { Logger.log('  BLOG: ' + t.getMessages()[0].getSubject()); });

  Logger.log('Found ' + projectThreads.length + ' unprocessed project emails');
  projectThreads.forEach(function(t) { Logger.log('  PROJECT: ' + t.getMessages()[0].getSubject()); });
}

/**
 * Remove the automated trigger.
 */
function removeTrigger() {
  ScriptApp.getProjectTriggers().forEach(function(trigger) {
    if (trigger.getHandlerFunction() === 'processEmails') {
      ScriptApp.deleteTrigger(trigger);
      Logger.log('Trigger removed.');
    }
  });
}

/**
 * Debug function — run this to diagnose search issues.
 */
function debug() {
  var config = getConfig();

  // Test 1: Broad search — any email with BLOG in subject
  var test1 = GmailApp.search('subject:BLOG', 0, 5);
  Logger.log('TEST 1 - subject:BLOG (broad): ' + test1.length + ' found');
  test1.forEach(function(t) {
    var m = t.getMessages()[0];
    Logger.log('  Subject: ' + m.getSubject());
    Logger.log('  From: ' + m.getFrom());
  });

  // Test 2: Quoted bracket search
  var test2 = GmailApp.search('subject:"[BLOG]"', 0, 5);
  Logger.log('TEST 2 - subject:"[BLOG]" (quoted): ' + test2.length + ' found');

  // Test 3: Full query with from filter
  var test3 = GmailApp.search('subject:"[BLOG]" from:' + config.ALLOWED_EMAIL + ' -label:' + config.PROCESSED_LABEL, 0, 5);
  Logger.log('TEST 3 - full query: ' + test3.length + ' found');

  // Test 4: Token check
  var token = PropertiesService.getScriptProperties().getProperty('GITHUB_TOKEN');
  Logger.log('TEST 4 - GitHub token set: ' + (token ? 'YES (' + token.substring(0, 10) + '...)' : 'NO'));
}
