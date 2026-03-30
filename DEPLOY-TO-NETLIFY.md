# 🚀 Deploy to Netlify - Step by Step

## ✅ Status: Git Repository Ready!

Your code is committed and ready to push to GitHub.

---

## Step 1: Create GitHub Repository

### Option A: Using GitHub Website (Easier)

1. **Go to GitHub:** https://github.com/new
2. **Repository name:** `takasak-react-app`
3. **Description:** "Personal blog converted from WordPress to React"
4. **Visibility:** Public (or Private if you prefer)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. **Click "Create repository"**

### Option B: Using GitHub CLI (If you have it)

```bash
gh auth login
cd /root/takasak-react-app
gh repo create takasak-react-app --public --source=. --push
```

---

## Step 2: Push Your Code to GitHub

After creating the repository on GitHub, you'll see a page with commands. Copy the commands under **"…or push an existing repository from the command line"**

They'll look like this (replace YOUR-USERNAME with your actual GitHub username):

```bash
cd /root/takasak-react-app
git remote add origin https://github.com/YOUR-USERNAME/takasak-react-app.git
git push -u origin main
```

**Or run these commands manually:**

```bash
cd /root/takasak-react-app

# Add your GitHub repo as remote (replace YOUR-USERNAME!)
git remote add origin https://github.com/YOUR-USERNAME/takasak-react-app.git

# Push to GitHub
git push -u origin main
```

You may be asked for your GitHub credentials. If you have 2FA enabled, you'll need a **Personal Access Token** instead of your password.

### Creating a Personal Access Token (if needed):
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name: "Netlify Deploy"
4. Check: `repo` (full control of private repositories)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)
7. Use this token as your password when pushing

---

## Step 3: Deploy to Netlify

### 3.1 Sign Up / Log In to Netlify

1. Go to: https://app.netlify.com/signup
2. **Sign up with GitHub** (recommended - makes deployment easier)
   - Or sign up with email

### 3.2 Import Your Project

1. Once logged in, click **"Add new site"** → **"Import an existing project"**

2. **Connect to Git provider:**
   - Click **"GitHub"**
   - Authorize Netlify to access your GitHub account
   - If asked, grant access to the `takasak-react-app` repository

3. **Select your repository:**
   - Find and click `takasak-react-app` from the list

4. **Configure build settings:**
   Netlify should auto-detect these settings:
   
   ```
   Branch to deploy:     main
   Build command:        npm run build
   Publish directory:    build
   ```
   
   If not auto-filled, enter them manually.

5. **Click "Deploy site"**

### 3.3 Wait for Deployment

- Netlify will install dependencies and build your site
- Takes about 2-3 minutes
- You'll see the build log in real-time

### 3.4 Your Site is Live! 🎉

Once deployment completes, Netlify gives you a URL like:
```
https://random-name-12345.netlify.app
```

**Your React blog is now live!**

---

## Step 4: Customize Your Netlify Site (Optional)

### Change the Site Name

1. In Netlify dashboard, go to **Site settings**
2. Click **"Change site name"**
3. Enter a custom name: `takasak-blog` or `june-zheng-blog`
4. Your URL becomes: `https://takasak-blog.netlify.app`

### Add a Custom Domain

1. In Netlify dashboard, go to **Domain settings**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `takasak.com`)
4. Follow instructions to update DNS records
5. Netlify provides free HTTPS/SSL automatically!

---

## 🔄 Future Updates

After initial deployment, updating your site is super easy:

1. **Make changes** to your code
2. **Commit and push to GitHub:**
   ```bash
   cd /root/takasak-react-app
   git add .
   git commit -m "Update blog post"
   git push
   ```
3. **Netlify auto-deploys** your changes in ~2 minutes!

---

## 📝 Quick Summary

```bash
# 1. Create repo on GitHub.com
# 2. Push your code:
cd /root/takasak-react-app
git remote add origin https://github.com/YOUR-USERNAME/takasak-react-app.git
git push -u origin main

# 3. Go to netlify.com, click "Import project"
# 4. Connect GitHub, select repo, deploy!
# 5. Done! 🎉
```

---

## 🆘 Troubleshooting

### "Build failed" on Netlify
- Check the build log
- Usually a dependency issue
- Try: Set Node version in `package.json`:
  ```json
  "engines": {
    "node": "18.x"
  }
  ```

### "404 on page refresh"
Create `public/_redirects` file:
```
/*    /index.html   200
```
Then commit and push.

### "Site not updating"
- Check if push succeeded: `git push`
- Check Netlify deploy log
- Try manual deploy: Netlify dashboard → Deploys → Trigger deploy

---

## ✅ Current Status

- ✅ Git repository initialized
- ✅ Code committed
- ⏳ **Next:** Create GitHub repo and push
- ⏳ **Then:** Deploy to Netlify

**You're ready for Step 1!** Create your GitHub repository now. 🚀
