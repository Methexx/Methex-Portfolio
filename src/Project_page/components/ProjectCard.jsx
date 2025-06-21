import React from 'react';

const ProjectCard = ({ project, onClick }) => {
  const {
    title,
    description,
    technologies,
    image
  } = project;

  return (
    <div 
      className="project-card"
      onClick={() => onClick(project)}
    >
      <div className="project-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="placeholder-image">
            <div className="placeholder-content">
              <span className="placeholder-text">Project Image</span>
            </div>
          </div>
        )}
      </div>
      <div className="project-content">
        <div className="project-header-info">
          <h3 className="project-title">{title}</h3>
        </div>
        <p className="project-description">{description}</p>
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .project-card {
          width: 100%;
          max-width: 400px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          position: relative;
          user-select: none;
        }

        .project-card:hover {
          transform: translateY(-8px) scale(1.02);
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .project-card:active {
          transform: translateY(-4px) scale(1.01);
          transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-image {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 0;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .placeholder-image {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #262624 0%, #1f1f1d 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover .placeholder-image {
          background: linear-gradient(135deg, #2a2a28 0%, #232321 100%);
          transform: scale(1.1);
        }

        .placeholder-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
        }

        .project-card:hover .placeholder-content {
          color: rgba(255, 255, 255, 0.9);
          transform: scale(1.1);
        }

        .placeholder-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          opacity: 0.8;
        }

        .placeholder-text {
          font-size: 0.9rem;
          font-weight: 500;
          opacity: 0.9;
          letter-spacing: 0.5px;
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(2px);
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .overlay-content {
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(10px);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover .overlay-content {
          transform: translateY(0);
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tech-tag {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.2s ease;
        }

        .tech-tag:hover {
          background: rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 1);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
        }

        .project-content {
          padding: 1.5rem;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover .project-content {
          transform: translateY(-2px);
        }

        .project-header-info {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          gap: 1rem;
        }

        .project-title {
          font-size: 1.25rem;
          color: white;
          font-weight: 600;
          line-height: 1.3;
          flex: 1;
          margin: 0;
          transition: color 0.3s ease;
        }

        .project-card:hover .project-title {
          color: #f8fafc;
        }

        .project-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-size: 0.9rem;
          margin: 0;
          transition: color 0.3s ease;
        }

        .project-card:hover .project-description {
          color: rgba(255, 255, 255, 0.9);
        }

        /* Ripple effect */
        .project-card:active::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          animation: ripple 0.6s ease-out;
        }

        @keyframes ripple {
          to {
            width: 400px;
            height: 400px;
            opacity: 0;
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .project-header-info {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .project-content {
            padding: 1rem;
          }

          .project-card:hover {
            transform: translateY(-4px) scale(1.01);
          }
        }

        /* Focus styles for accessibility */
        .project-card:focus {
          outline: 2px solid rgba(255, 255, 255, 0.5);
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;