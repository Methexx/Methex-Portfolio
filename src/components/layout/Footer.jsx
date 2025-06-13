import { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="footer-content">
          <p className="footer-text">Copyright © 2025, Developed by Methum Pathirana</p>
          
          {/* Scroll to Top Button */}
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="scroll-to-top"
              aria-label="Scroll to top"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="hand-icon"
              >
                <path 
                  d="M7 14L12 9L17 14" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        .footer {
          position: relative;
          z-index: 10;
          padding: 2rem 0;
          border-top: 0px solid rgba(255, 255, 255, 0.05);
          text-align: center;
        }

        .footer-content {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer-text {
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.9rem;
          font-weight: 300;
          user-select: none;
        }

        .scroll-to-top {
          position: absolute;
          right: 0;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          color: rgba(255, 255, 255, 0.7);
        }

        .scroll-to-top:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
        }

        .scroll-to-top:active {
          transform: translateY(0);
        }

        .hand-icon {
          transition: transform 0.3s ease;
        }

        .scroll-to-top:hover .hand-icon {
          transform: translateY(-2px);
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .scroll-to-top {
            width: 44px;
            height: 44px;
            right: 1rem;
          }
          
          .footer-content {
            padding: 0 4rem 0 0;
          }
        }

        @media (max-width: 480px) {
          .scroll-to-top {
            width: 40px;
            height: 40px;
            right: 0.5rem;
          }
          
          .footer-content {
            padding: 0 3rem 0 0;
          }
          
          .footer-text {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;