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
