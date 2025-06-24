import { useParams, useNavigate } from 'react-router-dom';
import ParticlesHome from '../../components/effects/ParticlesHome';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import projectData from '../../data/projectData';
import './ProjectDetails.css';

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
    navigate(-1);
  };

  // Helper function to render detailed sections
  const renderDetailedSection = (sectionKey, sectionData) => {
    if (!sectionData) return null;

    return (
      <div key={sectionKey} className="detailed-section">
        <h3 className="section-title">{sectionData.title}</h3>
        <div className="section-content">
          {sectionData.features && (
            <ul className="feature-list">
              {sectionData.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  {feature}
                </li>
              ))}
            </ul>
          )}
          {sectionData.items && (
            <ul className="tech-list">
              {sectionData.items.map((item, index) => (
                <li key={index} className="tech-item">
                  {item}
                </li>
              ))}
            </ul>
          )}
          {sectionData.structure && (
            <ul className="structure-list">
              {sectionData.structure.map((item, index) => (
                <li key={index} className="structure-item">
                  {item}
                </li>
              ))}
            </ul>
          )}
          {sectionData.description && (
            <p className="contribution-description">{sectionData.description}</p>
          )}
          {sectionData.responsibilities && (
            <ul className="responsibility-list">
              {sectionData.responsibilities.map((responsibility, index) => (
                <li key={index} className="responsibility-item">
                  {responsibility}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="project-detail-page">
      <ParticlesHome />
      <Navbar />
      
      <div className="detail-container">
        {/* Project Header */}
        <div className="project-header">
          <h1 className="project-title">{project.title}</h1>
          <p className="project-description">{project.description}</p>
        </div>

        {/* Main Hero Image */}
        <div className="hero-image-section">
          <div className="hero-image-container">
            <img 
              src={project.image || project.screenshots[0]} 
              alt={`${project.title} main image`} 
              className="hero-image"
            />
          </div>
        </div>

        {/* Project Overview */}
        <div className="details-section">
          <h3>Project Overview</h3>
          <p className="project-details">{project.details}</p>
          <div className="project-status">
            <span className="category-badge">{project.category}</span>
          </div>
        </div>

        {/* My Contribution Section - Only show if contributions exist and not null */}
        {project.contributions && project.contributions !== null && project.contributions !== "null" && (
          <div className="contribution-section">
            <h3>My Contribution</h3>
            {renderDetailedSection('contributions', project.contributions)}
          </div>
        )}

        {/* Basic Technologies Used */}
        <div className="tech-section">
          <h3>Core Technologies</h3>
          <div className="tech-tags">
            {project.technologies.map((tech, i) => (
              <span key={i} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        {/* Detailed Sections */}
        {project.detailedSections && (
          <div className="detailed-sections-container">
            <h2 className="detailed-sections-title">Detailed Information</h2>
            <div className="detailed-sections-grid">
              {Object.entries(project.detailedSections).map(([key, section]) =>
                renderDetailedSection(key, section)
              )}
            </div>
          </div>
        )}

        {/* Additional Screenshots Gallery - Bottom */}
        {project.screenshots && project.screenshots.length > 1 && (
          <div className="additional-screenshots-section">
            <h3>Additional Screenshots</h3>
            <div className="additional-screenshots-grid">
              {project.screenshots.slice(1).map((src, i) => (
                <div key={i} className="additional-screenshot-item">
                  <img src={src} alt={`${project.title} screenshot ${i + 2}`} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Back Button */}
        <div className="bottom-back-container">
          <button onClick={handleBack} className="text-back-button">
            Back to Previous
          </button>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;