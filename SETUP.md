# 🚀 Portfolio Website - Quick Setup Guide

## What's Been Created

✅ **Modern React Portfolio** with:
- Home page with hero section and skills overview
- Projects showcase page (with example projects)
- About page with experience & education timeline
- Contact page with contact form
- Fully responsive design
- Dark/light color scheme
- Smooth animations and transitions

## 📦 Project Structure

```
portfolio/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navigation.jsx   # Top navigation bar
│   │   └── Footer.jsx       # Footer component
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── styles/              # CSS files
│   │   ├── global.css       # Global styles & variables
│   │   ├── home.css
│   │   ├── projects.css
│   │   ├── about.css
│   │   ├── contact.css
│   │   ├── navigation.css
│   │   └── footer.css
│   ├── App.jsx              # Main app component
│   └── main.jsx             # React entry point
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment
├── public/                  # Static assets
├── package.json             # Dependencies & scripts
├── vite.config.js           # Vite configuration
└── index.html               # HTML entry point
```

## 🎯 Getting Started

### 1. **Start Development Server**
```bash
npm run dev
```
Open http://localhost:5173 in your browser

### 2. **Customize Your Content**

Edit these files to add your information:

**Home Page** (`src/pages/Home.jsx`):
- Change "Hi, I'm Pao" to your name
- Update the subtitle and description
- Customize skills section

**Projects Page** (`src/pages/Projects.jsx`):
- Replace sample projects with your actual projects
- Add GitHub and live demo links
- Update project descriptions

**About Page** (`src/pages/About.jsx`):
- Update the "Who I Am" section
- Add your actual work experience
- Update education details

**Contact Page** (`src/pages/Contact.jsx`):
- Update email address
- Add phone number
- Update location

**Navigation** (`src/components/Navigation.jsx`):
- Update social media links (GitHub, LinkedIn, Twitter)
- Change the logo text if needed

### 3. **Customize Colors**

Edit `src/styles/global.css` to change the color scheme:

```css
:root {
  --primary-color: #667eea;      /* Main color */
  --secondary-color: #764ba2;    /* Secondary color */
  --dark-bg: #1a202c;            /* Dark background */
  --light-bg: #f7fafc;           /* Light background */
  --text-dark: #2d3748;          /* Dark text */
  --text-light: #718096;         /* Light text */
}
```

## 🚀 Deploy to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Create a new repository named: `yourusername.github.io`
3. (Replace `yourusername` with your actual GitHub username)

### Step 2: Connect and Push Code
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### Step 3: GitHub Pages Automatically Deploys!
- The GitHub Actions workflow will automatically build and deploy
- Your site will be live at: `https://yourusername.github.io`
- Give it a minute or two for the first deployment

### Optional: Custom Domain
To use a custom domain:
1. Create a `CNAME` file in the `public/` folder with your domain
2. Update your domain DNS settings to point to GitHub Pages

## 📝 Available Commands

```bash
npm run dev       # Start development server (with hot reload)
npm run build     # Build for production
npm run preview   # Preview the production build locally
npm run deploy    # Build and deploy to GitHub Pages (alternative method)
```

## 🎨 Customization Tips

- **Add more projects**: Just copy a project card and modify the data in `projects` array
- **Change fonts**: Edit the `font-family` in `global.css`
- **Add animations**: Use the existing CSS animations as templates
- **Add new pages**: Create a new file in `src/pages/` and add a route in `App.jsx`

## ✨ Features Included

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Fast performance with Vite
- ✅ Modern UI with gradients and animations
- ✅ React Router for navigation
- ✅ React Icons for professional icons
- ✅ Automatic GitHub Pages deployment
- ✅ SEO friendly
- ✅ Contact form (frontend only - connect to backend if needed)

## 🔗 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [GitHub Pages Docs](https://pages.github.com)
- [React Router](https://reactrouter.com)
- [React Icons](https://react-icons.github.io/react-icons)

## 💡 Next Steps

1. ✅ Update all personal information
2. ✅ Add your real projects and links
3. ✅ Test locally with `npm run dev`
4. ✅ Create GitHub repository
5. ✅ Push code and watch it deploy automatically!

---

**Questions?** Check the README.md or refer to the official documentation links above.

Happy coding! 🎉
