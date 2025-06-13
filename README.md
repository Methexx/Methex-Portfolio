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





import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedIndicator, setSelectedIndicator] = useState('/');

  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Blogs", href: "/blogs" },
    { title: "Services", href: "/services" }
  ];

  const handleBrandClick = () => {
    navigate('/');
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
    return () => {
      document.body.classList.remove('nav-open');
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="app-wrapper">
          <div className="nav-content">
            <div 
              className="nav-brand" 
              onClick={handleBrandClick}
              style={{ cursor: 'pointer' }}
            >
              Methex
            </div>
            <div className="nav-menu">
              <div 
                className={`hamburger-button ${isMenuOpen ? 'active' : ''}`}
                onClick={handleMenuToggle}>
                <div className={`burger ${isMenuOpen ? 'burger-active' : ''}`}></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Curving Side Menu */}
      {isMenuOpen && (
        <div className="curving-menu">
          {/* Fixed curved SVG path */}
          <svg viewBox="0 0 100 100" className="side-curve" preserveAspectRatio="none">
            <path d="M0 0 C40 0, 40 100, 0 100 L100 100 L100 0 Z" fill="#292929" />
          </svg>

          <div className="menu-body">
            <div className="menu-nav">
              <div 
                className="nav-items"
                onMouseLeave={() => setSelectedIndicator('/')}
              >
                {navItems.map((item, index) => (
                   <div
                    key={index}
                    className="nav-link"
                    onMouseEnter={() => setSelectedIndicator(item.href)}
                    onClick={() => handleMenuItemClick(item.href)}
                    style={{ '--delay': `${0.05 * index}s` }}
                   >
                      <div 
                        className={`link-indicator ${selectedIndicator === item.href ? 'indicator-active' : ''}`}
                      ></div>
                      <span>{item.title}</span>
                   </div>
                 ))}
               </div>
            </div>

            <div className="menu-footer">
              <a href="#" onClick={(e) => e.preventDefault()}>
                GitHub
              </a>
              <a href="#" onClick={(e) => e.preventDefault()}>
                LinkedIn
              </a>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Instagram
              </a>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Dribbble
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isMenuOpen && (
        <div className="nav-backdrop" onClick={() => setIsMenuOpen(false)}></div>
      )}

    </>
  )
};

export default Navbar;






.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.05);
  padding: 0.5rem 0;
  width: 100%;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
  letter-spacing: 0.2px;
  cursor: pointer;
}

.nav-menu {
  display: flex;
  align-items: center;
}

/* Hamburger Button Styles */
.hamburger-button {
  cursor: pointer;
  z-index: 102;
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.burger {
  width: 20px;
  height: 2px;
  background: #ffffff;
  position: relative;
  transition: all 0.3s ease;
}

.burger::before,
.burger::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 2px;
  background: #ffffff;
  transition: all 0.3s ease;
}

.burger::before {
  top: -6px;
}

.burger::after {
  top: 6px;
}

.burger-active {
  background: transparent;
}

.burger-active::before {
  transform: rotate(45deg);
  top: 0;
}

.burger-active::after {
  transform: rotate(-45deg);
  top: 0;
}

/* Side Menu Styles */
.curving-menu {
  height: 100vh;
  background: #292929;
  position: fixed;
  right: 0;
  top: 0;
  color: #ffffff;
  z-index: 101;
  width: 400px;
  transform: translateX(0);
  animation: menuSlideIn 0.8s cubic-bezier(0.76, 0, 0.24, 1) forwards;
}

@keyframes menuSlideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

.side-curve {
  position: absolute;
  left: -100px;
  top: 0;
  width: 100px;
  height: 100vh;
}

.menu-body {
  box-sizing: border-box;
  height: 100%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu-nav {
  display: flex;
  flex-direction: column;
  font-size: 56px;
  gap: 12px;
  margin-top: 80px;
}

.menu-header {
  color: rgb(153, 153, 153);
  border-bottom: 1px solid rgb(153, 153, 153);
  text-transform: uppercase;
  font-size: 11px;
  margin-bottom: 40px;
}

.menu-header p {
  margin: 0;
  padding-bottom: 10px;
}

.nav-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.nav-link {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 56px;
  font-weight: 300;
  color: #ffffff;
  text-decoration: none;
  padding: 8px 0;
  transform: translateX(80px);
  opacity: 0;
  animation: linkSlideIn 0.8s cubic-bezier(0.76, 0, 0.24, 1) forwards;
  animation-delay: var(--delay);
}

@keyframes linkSlideIn {
  from {
    transform: translateX(80px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.link-indicator {
  width: 10px;
  height: 10px;
  background: #ffffff;
  border-radius: 50%;
  position: absolute;
  left: -30px;
  transform: scale(0);
  transition: transform 0.3s ease;
}

.link-indicator.indicator-active {
  transform: scale(1);
}

.nav-link:hover {
  color: #64ffda;
  transition: color 0.3s ease;
}

/* Menu Footer Styles */
.menu-footer {
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 12px;
  gap: 40px;
  flex-wrap: wrap;
}

.menu-footer a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.menu-footer a:hover {
  color: #64ffda;
}

/* Backdrop */
.nav-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 100;
  animation: backdropFadeIn 0.3s ease forwards;
}

@keyframes backdropFadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}

/* Prevent body scroll when menu is open */
body.nav-open {
  overflow: hidden;
}

/* Responsive */
@media (max-width: 768px) {
  .curving-menu {
    width: 100vw;
  }
  
  .menu-body {
    padding: 60px 40px;
  }
  
  .menu-nav {
    font-size: 40px;
    margin-top: 40px;
  }
  
  .nav-link {
    font-size: 40px;
  }
  
  .menu-footer {
    gap: 20px;
    font-size: 11px;
  }
}

@media (max-width: 480px) {
  .nav-content {
    padding: 0 1rem;
  }
  
  .menu-body {
    padding: 40px 20px;
  }
  
  .menu-nav {
    font-size: 32px;
  }
  
  .nav-link {
    font-size: 32px;
  }
  
  .menu-footer {
    flex-direction:A column;
    gap: 15px;
    align-items: flex-start;
  }
}