import { useParams, useNavigate } from 'react-router-dom';
import ParticlesHome from '../../components/effects/ParticlesHome';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import projectData from '../../data/projectData';
import './ProjectDetails.css'; // Assuming you have a CSS file for styling

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
          <h1 className="project-title">{project.title}</h1>
          <p className="project-description">{project.description}</p>
        </div>

        {/* Screenshots Gallery */}
        <div className="screenshots-section">
          <div className="screenshots-grid">
            {project.screenshots.map((src, i) => (
              <div key={i} className="screenshot-item">
                <img src={src} alt={`${project.title} `} />
              </div>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="details-section">
          <h3>Project Details</h3>
          <p className="project-details">{project.details} </p>
            <div className="project-status">
            <span className="category-badge">{project.category}</span>
          </div>
         
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
        {/* Project Links */}
        

        {/* Bottom Back Button */}
        <div className="bottom-back-container">
          <button onClick={handleBack} className="bottom-back-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            
          </button>
        </div>
      </div>

      <Footer />

    </div>
      );
    };

export default ProjectDetail;