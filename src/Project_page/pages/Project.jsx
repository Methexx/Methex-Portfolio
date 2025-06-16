import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ParticlesHome from '../../components/effects/ParticlesHome';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Filter from '../components/Filter';
import ProjectCard from '../components/ProjectCard';
import projectData from '../../data/projectData'; // Import the centralized project data

const Project = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web', 'Mobile', 'UI Designs'];

  // Use the imported project data instead of duplicating it
  const projects = projectData;

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Fixed: Add navigation to project detail page
  const handleProjectClick = (project) => {
    console.log('Project clicked:', project);
    navigate(`/project/${project.id}`); // Navigate to project detail page
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="project-container">
      <ParticlesHome />
      <Navbar />
      
      {/* Header Section */}
      <header className="project-header">
        <div className="header-content">
          <h1 className="page-title">My Projects</h1>
          <p className="page-description">
            A collection of projects showcasing my skills in full-stack development,
            <br />from web applications to interactive experiences.
          </p>
        </div>
      </header>

      {/* Filter Component */}
      <Filter 
        categories={categories}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      {/* Projects Grid Section */}
      <main className="projects-main">
        <div className="projects-container">
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={handleProjectClick}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .project-container {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;
          padding-top: 80px;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        }

        .project-header {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 35vh;
          padding: 2rem 1rem 1rem 1rem;
        }

        .header-content {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
        }

        .page-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 500;
          color: white;
          line-height: 1.2;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .page-description {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          font-weight: 300;
          max-width: 600px;
        }

        .projects-main {
          position: relative;
          z-index: 10;
          padding: 1rem 1rem 4rem 1rem;
        }

        .projects-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          justify-items: center;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .project-container {
            padding-top: 70px;
          }

          .project-header {
            min-height: 25vh;
            padding: 1rem;
          }

          .header-content {
            padding-top: 3rem;
          }

          .page-description br {
            display: none;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .projects-main {
            padding: 1rem 1rem 2rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .project-container {
            padding-top: 60px;
          }

          .projects-grid {
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Project;