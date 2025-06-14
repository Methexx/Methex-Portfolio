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
        }

        .filter-button {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          padding: 0.75rem 1.5rem;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          font-weight: 500;
          white-space: nowrap;
        }

        .filter-button:hover {
          color: white;
          background: rgba(255, 255, 255, 0.1);
        }

        .filter-button.active {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .filter-container {
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .filter-button {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .filter-section {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Filter;