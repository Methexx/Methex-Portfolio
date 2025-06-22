import React from 'react';

const ProjectCard = ({ 
  title,
  description,
  technologies,
  image,
  imageAlt,
  onClick
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleImageError = (e) => {
    // If image fails to load, hide it and show placeholder
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'block';
  };

  return (
    <>
      <div className="project-card" onClick={handleClick}>
        <div className="top-light"></div>
        <div className="project-image">
          {image && (
            <img 
              src={image} 
              alt={imageAlt || title} 
              className="project-img"
              onError={handleImageError}
              loading="lazy"
            />
          )}
          <div className="project-placeholder" style={{ display: image ? 'none' : 'block' }}></div>
        </div>
        <div className="project-content">
          <h3 className="project-name">{title}</h3>
          <p className="project-description">{description}</p>
          <div className="tech-stack">
            {technologies?.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .top-light {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: -20px;
          width: 300px;
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
          transition: all 0.3s ease;
        }

        .project-card {
          position: relative;
          width: 100%;
          max-width: 300px;
          height: 5%;
          min-height: 400px;
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
          overflow: visible;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          transform-origin: center bottom;
        }

        /* Desktop hover effects */
        @media (hover: hover) and (pointer: fine) {
          .project-card:hover {
            transform: translateY(-12px) scale(1.02);
            box-shadow: inset 0 2px 2px 0 rgba(231, 196, 160, 0.6), 
                        inset 0 -2px 2px 0 rgba(0, 0, 0, 0.3),
                        0 8px 40px rgba(0, 0, 0, 0.4),
                        0 0 0 1px rgba(255, 255, 255, 0.2);
            border-color: rgba(255, 255, 255, 0.3);
          }

          .project-card:hover .top-light {
            box-shadow:
              0 0px 2px 2px #ffc78e,
              0 2px 4px 2px rgba(255, 148, 41, 0.6),
              0 4px 12px 2px rgba(233, 139, 45, 0.6),
              0 8px 20px 2px rgba(255, 158, 61, 0.7),
              0 16px 30px 16px rgba(255, 128, 0, 0.4);
          }

          .project-card:hover .project-img {
            transform: scale(1.05);
          }

          .project-card:hover .project-image::after {
            background: linear-gradient(45deg, transparent, rgba(255,255,255,0.2));
          }

          .project-card:hover .project-name {
            color: #ffc78e;
          }

          .project-card:hover .project-description {
            color: rgba(255, 255, 255, 0.9);
          }

          .project-card:hover .tech-tag {
            background: rgba(255, 199, 142, 0.2);
            color: rgba(255, 255, 255, 0.95);
            border-color: rgba(255, 199, 142, 0.3);
          }
        }

        .project-card:active {
          transform: translateY(-8px) scale(1.01);
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
          transition: all 0.3s ease;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: all 0.3s ease;
        }

        .project-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
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
          transition: all 0.3s ease;
        }

        .project-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s ease;
        }

        .project-name {
          font-size: 1.4rem;
          font-weight: 500;
          margin: 0 0 12px 0;
          color: #fff;
          line-height: 1.3;
          transition: all 0.3s ease;
        }

        .project-description {
          font-size: 1rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin: 0 0 20px 0;
          transition: all 0.3s ease;
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
          transition: all 0.3s ease;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .project-card {
            min-height: 400px;
            max-width: 100%;
            margin: 0 16px;
          }

          .top-light {
            width: 250px;
          }
        }

        @media (max-width: 480px) {
          .project-card {
            min-height: 380px;
            margin: 0 12px;
            padding: 20px;
          }

          .project-image {
            height: 150px;
          }

          .top-light {
            width: 200px;
          }

          .project-name {
            font-size: 1.2rem;
          }

          .project-description {
            font-size: 0.9rem;
          }

          .tech-tag {
            font-size: 0.8rem;
            padding: 0.3rem 0.6rem;
          }
        }
      `}</style>
    </>
  );
};

export default ProjectCard;