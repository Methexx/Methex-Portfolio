   # MethexWeB Portfolio

MethexWeB is a personal portfolio built using **React (JSX)**, **Vite**, and **Tailwind CSS**. It features a clean, modern UI with a focus on dark mode by default, full-screen animated navigation, and per-page particle backgrounds for dynamic visual effects.
 
--- 
 
## 🚀 Features

- 🌙 **Dark Mode First** design with optional Light Mode
- 🎨 **Custom cards** for each theme (dark and light)
- 💫 **Unique particle backgrounds** per page
- 📱 **Mobile-friendly full-screen menu** with curved transition and animated toggle icon
- ⚡ **Built with Vite** for fast development

---

## 🧩 File Structure




```
methexweb/
├── public/
│   └── assets/                  # Static assets (images, logos)
├── src/
│
├── components/
│   ├── layout/
│   │   ├── Header.jsx           # Contains logo + menu icon + toggles
│   │   ├── Footer.jsx
│   │   └── ThemeToggle.jsx      # Light/dark mode toggle button
│   │
│   ├── ui/
│   │   ├── AnimatedMenuIcon.jsx  # Rotating / morphing hamburger icon
│   │   └── FullScreenMenu.jsx    # Fullscreen menu with curve + transitions
│   │
│   ├── cards/
│   │   ├── DarkCard.jsx          # Card design for dark mode
│   │   └── LightCard.jsx         # Card design for light mode
│   │
│   └── effects/
│       ├── ParticlesHome.jsx     # Particle background for home page
│       ├── ParticlesAbout.jsx    # Particle effect for about page
│       └── ParticlesProjects.jsx # Optional: another variation
│
├── context/
│   └── ThemeContext.jsx          # Stores and provides light/dark mode
│
├── hooks/
│   └── useTheme.js               # Optional custom hook for theme
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   └── Projects.jsx
│
├── styles/
│   └── theme.css                 # Custom styles (if any)
│
├── App.jsx
├── main.jsx
├── index.css                     # Tailwind entry point
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build




#🔧 Tech Stack

React

Vite

Tailwind CSS

Framer Motion (optional, for animations)

tsparticles (optional, for particle backgrounds)





