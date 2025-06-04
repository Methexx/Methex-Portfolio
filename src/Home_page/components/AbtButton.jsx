import React from 'react';

const AbtButton = ({ 
  onClick, 
  text = "About Me", 
  disabled = false, 
  speed = 5, 
  className = '' 
}) => {
  const animationDuration = `${speed}s`;
  
  return (
    <>
      <button
        className={`abt-button ${disabled ? 'disabled' : ''} ${className}`}
        onClick={onClick}
        disabled={disabled}
        aria-label="Learn more about me"
      >
        <div
          className="button-text"
          style={{
            backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0.7) 40%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.7) 60%)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            animationDuration: animationDuration,
          }}
        >
          {text}
        </div>
      </button>

      <style jsx>{`
        .abt-button {
          position: relative;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.3);
          padding: 0.5rem 1.1rem;
          font-size: 1rem;
          font-weight: 500;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          letter-spacing: 0.5px;
          overflow: hidden;
        }

        .abt-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: left 1.9s;
        }

        .abt-button:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .abt-button:hover::before {
          left: 100%;
        }

        .abt-button:active {
          transform: translateY(0);
        }

        .abt-button:focus {
          outline: 2px solid rgba(255, 255, 255, 0.5);
          outline-offset: 2px;
        }

        .abt-button.disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        .abt-button.disabled:hover {
          background: transparent;
          border-color: rgba(255, 255, 255, 0.3);
          transform: none;
          box-shadow: none;
        }

        .button-text {
          position: relative;
          z-index: 1;
          animation: shine infinite linear;
        }

        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .abt-button {
            padding: 0.8rem 2rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .abt-button {
            padding: 0.7rem 1.5rem;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </>
  );
};

export default AbtButton;