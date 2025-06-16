import { useParams, useNavigate } from 'react-router-dom';
import ParticlesHome from '../../components/effects/ParticlesHome';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import projectData from '../../data/projectData';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData.find(proj => proj.id === id);

  if (!project) {
    return (
      <div className="project-detail-page">
        <ParticlesHome />
        <Navbar />
        <div className="not-found">
          <h2>Project not found</h2>
          <button onClick={() => navigate(-1)} className="back-btn">
            Back to Previous
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBack = () => {
    navigate(-1); // Go back to previous page (home or projects)
  };

  return (
    <div className="project-detail-page">
      <ParticlesHome />
      <Navbar />
      
      <div className="detail-container">
        {/* Project Header */}
        <div className="project-header">
          <div className="project-status">
            <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
              {project.status}
            </span>
            <span className="category-badge">{project.category}</span>
          </div>
          <h1 className="project-title">{project.title}</h1>
          <p className="project-description">{project.description}</p>
        </div>

        {/* Screenshots Gallery */}
        <div className="screenshots-section">
          <h3>Screenshots</h3>
          <div className="screenshots-grid">
            {project.screenshots.map((src, i) => (
              <div key={i} className="screenshot-item">
                <img src={src} alt={`${project.title} Screenshot ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="details-section">
          <h3>Project Details</h3>
          <p className="project-details">{project.details}</p>
        </div>

        {/* Technologies Used */}
        <div className="tech-section">
          <h3>Technologies Used</h3>
          <div className="tech-tags">
            {project.technologies.map((tech, i) => (
              <span key={i} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="bottom-back-container">
          <button onClick={handleBack} className="bottom-back-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Back to Previous
          </button>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .project-detail-page {
          position: relative;
          min-height: 100vh;
          width: 100%;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: white;
          padding-top: 80px;
        }

        .detail-container {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem 4rem 1rem;
        }

        .project-header {
          margin-bottom: 3rem;
        }

        .project-status {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .status-badge {
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.8rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .status-badge.completed {
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .status-badge.in-progress {
          background: rgba(251, 191, 36, 0.2);
          color: #fbbf24;
          border: 1px solid rgba(251, 191, 36, 0.3);
        }

        .category-badge {
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.8rem;
          font-weight: 500;
          background: rgba(139, 92, 246, 0.2);
          color: #8b5cf6;
          border: 1px solid rgba(139, 92, 246, 0.3);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .project-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .project-description {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          max-width: 800px;
        }

        .screenshots-section,
        .details-section,
        .tech-section {
          margin-bottom: 3rem;
        }

        .screenshots-section h3,
        .details-section h3,
        .tech-section h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #e2e8f0;
        }

        .screenshots-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .screenshot-item {
          border-radius: 1rem;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s ease;
        }

        .screenshot-item:hover {
          transform: translateY(-4px);
        }

        .screenshot-item img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.3s ease;
        }

        .screenshot-item:hover img {
          transform: scale(1.05);
        }

        .project-details {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.8;
          max-width: 800px;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .tech-tag {
          padding: 0.75rem 1.5rem;
          background: rgba(59, 130, 246, 0.2);
          color: #60a5fa;
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 2rem;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background: rgba(59, 130, 246, 0.3);
          transform: translateY(-2px);
        }

        .bottom-back-container {
          display: flex;
          justify-content: center;
          margin-top: 4rem;
          margin-bottom: 2rem;
        }

        .bottom-back-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          font-weight: 500;
          backdrop-filter: blur(10px);
        }

        .bottom-back-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .bottom-back-button:active {
          transform: translateY(0);
        }

        .bottom-back-button:focus {
          outline: 2px solid rgba(255, 255, 255, 0.5);
          outline-offset: 2px;
        }

        .not-found {
          text-align: center;
          padding: 4rem 2rem;
          position: relative;
          z-index: 10;
        }

        .not-found h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
          color: #ef4444;
        }

        .back-btn {
          background: #3b82f6;
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 0.8rem;
          cursor: pointer;
          font-size: 1rem;
          transition: background 0.3s ease;
        }

        .back-btn:hover {
          background: #2563eb;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .project-detail-page {
            padding-top: 70px;
          }

          .detail-container {
            padding: 1rem 1rem 2rem 1rem;
          }

          .project-status {
            flex-direction: column;
            gap: 0.5rem;
          }

          .status-badge,
          .category-badge {
            align-self: flex-start;
          }

          .screenshots-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .tech-tags {
            gap: 0.5rem;
          }

          .tech-tag {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }

          .bottom-back-button {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .project-detail-page {
            padding-top: 60px;
          }

          .bottom-back-button {
            padding: 0.7rem 1.2rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetail;