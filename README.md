# Mihir Pal Singh Portfolio

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Deployment to GitHub Pages

This portfolio is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Quick Deploy Steps:

1. **Create a new repository on GitHub**
   - Go to [github.com](https://github.com)
   - Create a new public repository named `mihir-portfolio`

2. **Push your code to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   git remote add origin https://github.com/YOUR_USERNAME/mihir-portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository → Settings → Pages
   - Under "Build and deployment", select **GitHub Actions**
   - Save settings

4. **Your site will be live at:**
   ```
   https://YOUR_USERNAME.github.io/mihir-portfolio/
   ```

### Manual Deployment (Optional)

```bash
npm run deploy
```

## 🛠️ Tech Stack

- **React 19** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible Components
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/      # Page sections (Hero, About, Projects, etc.)
│   ├── ui/            # Reusable UI components
│   └── Navigation.tsx
├── data/
│   └── portfolioData.ts  # Portfolio content configuration
├── hooks/
├── lib/
└── App.tsx
```

## 🏃‍♂️ Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Updating Portfolio Content

Edit [`src/data/portfolioData.ts`](src/data/portfolioData.ts) to customize:

- Personal information
- About section
- Experience
- Education
- Skills
- Projects
- Contact details

---

Built with ❤️ by Mihir Pal Singh
