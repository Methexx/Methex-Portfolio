import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedIndicator, setSelectedIndicator] = useState('/');

  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/project" },
    { title: "Blogs", href: "/blog" },
    { title: "Services", href: "/services" }
  ];

  const handleBrandClick = () => {
    navigate('/');
    if (isMenuOpen) {
      handleCloseMenu();
    }
  };

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      handleCloseMenu();
    } else {
      setIsMenuOpen(true);
      setIsClosing(false);
    }
  };

  const handleCloseMenu = () => {
    setIsClosing(true);
    // Wait for animation to complete before removing from DOM
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 800); // Match the animation duration
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    handleCloseMenu();
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen && !isClosing) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
    return () => {
      document.body.classList.remove('nav-open');
    };
  }, [isMenuOpen, isClosing]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        handleCloseMenu();
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
        <div className={`curving-menu ${isClosing ? 'menu-closing' : 'menu-opening'}`}>
          {/* Close Button */}
          <button className="close-button" onClick={handleCloseMenu}>
            <div className="close-icon"></div>
          </button>

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
                    className={`nav-link ${isClosing ? 'link-closing' : 'link-opening'}`}
                    onMouseEnter={() => setSelectedIndicator(item.href)}
                    onClick={() => handleMenuItemClick(item.href)}
                    style={{ 
                      '--delay': `${0.05 * index}s`,
                      '--close-delay': `${0.03 * (navItems.length - 1 - index)}s`
                    }}
                   >
                      <div 
                        className={`link-indicator ${selectedIndicator === item.href ? 'indicator-active' : ''}`}
                      ></div>
                      <span>{item.title}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isMenuOpen && (
        <div 
          className={`nav-backdrop ${isClosing ? 'backdrop-closing' : 'backdrop-opening'}`}
          onClick={handleCloseMenu}
        ></div>
      )}

    </>
  )
};

export default Navbar;