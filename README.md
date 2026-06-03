# Pao Cant Dev - Portfolio Website

A modern, responsive portfolio website built with React and Vite, optimized for GitHub Pages deployment.

## 🎨 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive layout works on all devices
- **Fast Performance**: Built with Vite for ultra-fast development and build times
- **SEO Ready**: Semantic HTML and meta tags for better SEO
- **Easy Deployment**: Automated GitHub Actions workflow for one-click deployment
- **Multiple Sections**:
  - Home with hero section and skills overview
  - Projects showcase with GitHub and live links
  - About page with experience and education
  - Contact form with validation

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Visit `http://localhost:5173` to see your site.

## 📝 Customization

### Update Your Information

Edit the following files to personalize your portfolio:

- **Home Page**: `src/pages/Home.jsx` - Update intro and skills
- **Projects**: `src/pages/Projects.jsx` - Add your own projects
- **About**: `src/pages/About.jsx` - Update experience and education
- **Contact**: `src/pages/Contact.jsx` - Update contact information
- **Navigation**: `src/components/Navigation.jsx` - Update social links

### Colors & Styling

Customize the color scheme in `src/styles/global.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  /* ... more variables */
}
```

## 🔨 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Build and deploy to GitHub Pages

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized `dist` folder ready for deployment.

## 🚀 GitHub Pages Deployment

### Step 1: Update package.json

Update the `homepage` field in `package.json` with your GitHub Pages URL:
```json
"homepage": "https://yourusername.github.io"
```

### Step 2: Create GitHub Repository

1. Create a new repository on GitHub named `yourusername.github.io`
2. Initialize git in your project:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### Step 3: Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your site on every push to `main`
- Deploy to GitHub Pages
- Make your site live at `https://yourusername.github.io`

### Manual Deployment (Alternative)

If you want to deploy manually:

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains your static site, ready to be hosted.

3. Deploy using `gh-pages`:
```bash
npm run deploy
```

## 🎯 Next Steps

1. **Update your projects** - Replace the sample projects with your actual work
2. **Add your content** - Personalize all pages with your information
3. **Update social links** - Link to your GitHub, LinkedIn, and other profiles
4. **Configure GitHub Pages** - Follow the deployment steps above
5. **Custom domain** (optional) - Add a CNAME file if you have a custom domain

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📞 Support

For questions or issues, please open an issue on the GitHub repository.

---

**Happy coding!** 🎉
