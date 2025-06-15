import React from 'react';

const Filter = ({ categories, activeFilter, onFilterChange }) => {
  return (
    <div className="filter-section">
      <div className="filter-container">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${activeFilter === category ? 'active' : ''}`}
            onClick={() => onFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <style jsx>{`
        .filter-section {
          position: relative;
          z-index: 10;
          padding: 2rem 1rem;
          display: flex;
          justify-content: center;
        }

        .filter-container {
          display: flex;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 25px;
          padding: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .filter-container:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .filter-button {
          background: transparent;
          border: none;
          outline: none;
          box-shadow: none;
          color: rgba(255, 255, 255, 0.7);
          padding: 0.75rem 1.5rem;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 0.9rem;
          font-weight: 500;
          white-space: nowrap;
          position: relative;
          overflow: hidden;
          transform: translateZ(0);
        }

        .filter-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.6s ease;
        }

        .filter-button:hover::before {
          left: 100%;
        }

        .filter-button:hover {
          color: white;
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
        }

        .filter-button.active {
          background: rgba(255, 255, 255, 0.25);
          color: white;
          transform: translateY(-1px) scale(1.02);
          box-shadow: 0 6px 24px rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .filter-button.active::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: ripple 0.6s ease-out;
        }

        @keyframes ripple {
          to {
            width: 200px;
            height: 200px;
            opacity: 0;
          }
        }

        .filter-button:active {
          transform: translateY(0) scale(0.98);
          transition: transform 0.1s ease;
        }

        .filter-button:focus,
        .filter-button:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
        }

        /* Stagger animation for initial load */
        .filter-button {
          animation: slideIn 0.6s ease-out backwards;
        }

        .filter-button:nth-child(1) { animation-delay: 0.1s; }
        .filter-button:nth-child(2) { animation-delay: 0.2s; }
        .filter-button:nth-child(3) { animation-delay: 0.3s; }
        .filter-button:nth-child(4) { animation-delay: 0.4s; }
        .filter-button:nth-child(5) { animation-delay: 0.5s; }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 768px) {
          .filter-container {
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .filter-button {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }

          .filter-button:hover {
            transform: translateY(-1px) scale(1.02);
          }
        }

        @media (max-width: 480px) {
          .filter-section {
            padding: 1rem;
          }

          .filter-container:hover {
            transform: none;
          }
        }

        /* Smooth transitions for mobile touch */
        @media (hover: none) {
          .filter-button:hover {
            transform: none;
            background: rgba(255, 255, 255, 0.1);
          }
          
          .filter-button.active {
            transform: scale(1.02);
          }
        }
      `}</style>
    </div>
  );
};

export default Filter;