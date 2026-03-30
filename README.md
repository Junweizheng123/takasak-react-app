# Takasak React App

This is a React conversion of the WordPress blog at https://takasak.wordpress.com

## 🎯 Features

- ✅ All 3 blog posts migrated from WordPress
- ✅ Clean, modern design
- ✅ Responsive layout (mobile-friendly)
- ✅ Client-side routing with React Router
- ✅ Post permalinks preserved
- ✅ About page
- ✅ SEO-friendly

## 📦 Installation

```bash
cd takasak-react-app
npm install
```

## 🚀 Development

Run the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🏗️ Build for Production

Create an optimized production build:

```bash
npm run build
```

The build folder will contain the production-ready static files.

## 📁 Project Structure

```
takasak-react-app/
├── public/
│   └── index.html
├── src/
│   ├── data/
│   │   └── posts.json          # All WordPress posts data
│   ├── pages/
│   │   ├── Home.js             # Homepage with post list
│   │   ├── Post.js             # Single post page
│   │   └── About.js            # About page
│   ├── App.js                  # Main app component
│   ├── App.css                 # Styles
│   ├── index.js                # Entry point
│   └── index.css
├── package.json
└── README.md
```

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)
1. Push to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

### Option 2: Vercel
1. Push to GitHub
2. Import to Vercel
3. Auto-detects React build settings

### Option 3: GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to package.json:
```json
"homepage": "https://yourusername.github.io/takasak-react-app",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then deploy:
```bash
npm run deploy
```

## 📝 Content Source

All content was extracted from WordPress.com via the public REST API:
- API endpoint: `https://public-api.wordpress.com/rest/v1.1/sites/takasak.wordpress.com/posts`
- Migrated: 3 posts
- Author: June Zheng

## 🔄 Adding New Posts

Edit `src/data/posts.json` and add a new post object:

```json
{
  "id": 999,
  "title": "Your New Post Title",
  "slug": "your-new-post-slug",
  "date": "2026-03-30T12:00:00+00:00",
  "author": {
    "name": "June Zheng",
    "firstName": "June",
    "lastName": "Zheng"
  },
  "content": "<p>Your HTML content here</p>",
  "excerpt": "Short preview text",
  "category": "Uncategorized"
}
```

## 📄 License

MIT

---

Built with ❤️ using React
