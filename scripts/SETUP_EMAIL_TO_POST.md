# Email-to-Post Setup Guide

Publish blog posts and projects to your portfolio site by sending an email from your Gmail account.

## How It Works

1. You send an email from `osumorodgersmeroka@gmail.com`
2. Google Apps Script checks your inbox every 10 minutes
3. It picks up emails with `[BLOG]` or `[PROJECT]` in the subject
4. Creates the markdown file and commits it to GitHub via API
5. Your existing GitHub Actions workflow auto-deploys the site
6. The processed email gets labeled `Website-Published` so it's not reprocessed

## Step 1: Create a GitHub Personal Access Token

1. Go to **GitHub > Settings > Developer settings > Personal access tokens > Fine-grained tokens**
2. Click **Generate new token**
3. Set:
   - **Token name**: `email-to-post`
   - **Expiration**: 90 days (or longer)
   - **Repository access**: Select **Only select repositories** > choose `portfolio`
   - **Permissions > Repository permissions**:
     - **Contents**: Read and write
4. Click **Generate token** and **copy the token** (you won't see it again)

## Step 2: Set Up Google Apps Script

1. Go to [script.google.com](https://script.google.com) and click **New project**
2. Name it `Email to Post`
3. Delete the default code in `Code.gs`
4. Paste the entire contents of `scripts/email-to-post.gs` from this repo
5. Save the project (Ctrl+S)

## Step 3: Store Your GitHub Token

1. In the Apps Script editor, find the `setGitHubToken()` function
2. Replace `YOUR_TOKEN_HERE` with the token you copied in Step 1
3. Run `setGitHubToken()` (click the function name dropdown at top, select it, click Run)
4. Grant permissions when prompted (it needs Gmail and external URL access)
5. Check the Execution Log — it should say "GitHub token saved successfully"
6. **Important**: After running, change the token back to `YOUR_TOKEN_HERE` in the code so it's not visible in the script. The token is now stored securely in Script Properties.

## Step 4: Create the Trigger

1. Select the `setup()` function from the dropdown
2. Click **Run**
3. The script will now check your inbox every 10 minutes

## Step 5: Test It

1. Select `testSearch()` and click **Run** to see if it finds any matching emails
2. Send yourself a test email (see format below) and wait ~10 minutes
3. Check your GitHub repo for the new file
4. Check your Gmail for the `Website-Published` label on the processed email

---

## Email Format

### Blog Post

**Subject**: `[BLOG] Your Post Title Here`

**Body**:
```
tags: Spiritual Reflections, Personal Growth
excerpt: Optional custom excerpt
---
Your markdown content starts here.

## Subheading

Regular paragraphs, **bold**, *italic*, [links](https://example.com), etc.
All standard markdown works.
```

### Project

**Subject**: `[PROJECT] Your Project Title Here`

**Body**:
```
tags: Python, React, Docker
client: Client Company Name
excerpt: Optional custom excerpt
---
## Project Overview

Describe the project here using markdown...
```

### Rules

- The metadata block (tags, excerpt, client) above `---` is **optional**
- If you skip the `---` separator, the entire body becomes the post content
- Tags are comma-separated
- For projects, `tags` become the `tech_stack` in front matter
- Attach an image to the email for a `featured_image` — or don't, both work
- Only the **first image** attachment is used
- Only emails from `osumorodgersmeroka@gmail.com` are processed
- Emails are labeled `Website-Published` after processing so they aren't reprocessed

---

## Managing the Script

| Action | Function to run |
|--------|----------------|
| Start the trigger | `setup()` |
| Stop the trigger | `removeTrigger()` |
| Test without publishing | `testSearch()` |
| Update GitHub token | `setGitHubToken()` |

## Troubleshooting

- **Nothing happens**: Check Execution Log in Apps Script (Executions tab on the left)
- **Auth errors**: Re-run `setGitHubToken()` with a fresh token
- **Email not picked up**: Make sure the subject starts with exactly `[BLOG]` or `[PROJECT]`
- **Token expired**: GitHub fine-grained tokens expire — generate a new one and run `setGitHubToken()` again
- **Want to reprocess an email**: Remove the `Website-Published` label from it in Gmail
