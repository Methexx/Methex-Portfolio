import React from 'react';

const ProjectCard = ({ 
  title,
  description,
  technologies
}) => {
  return (
    <>
      <div className="project-card">
        <div className="top-light"></div> {/* 🔶 Orange glowing bar */}
        <div className="project-image">
          <div className="project-placeholder"></div>
        </div>
        <div className="project-content">
          <h3 className="project-name">{title}</h3>
          <p className="project-description">{description}</p>
          <div className="tech-stack">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
        </div>
      </div>
      </div>  

      <style jsx>{`
        .project-card {
          position: relative;
          width: 100%;
          max-width: 270px;
          height: 5%;
          min-height: 450px;
          border-radius: 16px;
          background: linear-gradient(180deg, rgba(41, 41, 41, 0.67) 0%, rgba(25, 25, 25, 0.8) 50%);
          backdrop-filter: blur(4px);
          box-shadow: inset 0 2px 2px 0 rgba(231, 196, 160, 0.53), 
                      inset 0 -2px 2px 0 rgba(0, 0, 0, 0.2),
                      0 4px 20px rgba(0, 0, 0, 0.3);
          color: #ccc;
          text-shadow: 1px 1px 3px rgba(51, 51, 51, 0.67);
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .top-light {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: -10px;
          width: 280px;
          height: 6px;
          border-radius: 10px;
          background: #fffef9;
          box-shadow:
            0 0px 1px 1px #ffc78e,
            0 1px 2px 1px rgba(255, 148, 41, 0.47),
            0 2px 6px 1px rgba(233, 139, 45, 0.47),
            0 4px 12px 0px rgba(255, 158, 61, 0.6),
            0 12px 20px 12px rgba(255, 128, 0, 0.27);
          z-index: 2;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: inset 0 2px 2px 0 rgba(231, 196, 160, 0.53), 
                      inset 0 -2px 2px 0 rgba(0, 0, 0, 0.2),
                      0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .project-image {
          width: 100%;
          height: 200px;
          background: #2a2a2a;
          border-radius: 12px;
          border: 1px solid #444;
          margin-bottom: 20px;
          overflow: hidden;
          position: relative;
        }

        .project-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .project-image::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1));
          pointer-events: none;
        }

        .project-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .project-name {
          font-size: 1.4rem;
          font-weight: 500;
          margin: 0 0 12px 0;
          color: #fff;
          line-height: 1.3;
        }

        .project-description {
          font-size: 1rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin: 0 0 20px 0;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 20px;
        }

        .tech-tag {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 400;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .project-card {
            min-height: 400px;
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .project-card {
            min-height: 380px;
          }

          .project-image {
            height: 150px;
          }
        }
      `}</style>
    </>
  );
};

export default ProjectCard;
