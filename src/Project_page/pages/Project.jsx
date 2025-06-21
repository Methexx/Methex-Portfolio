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
  const [currentPage, setCurrentPage] = useState(1);
  
  const PROJECTS_PER_PAGE = 6; // 2 rows × 3 columns
  const categories = ['All', 'Web', 'Mobile', 'UI Designs'];

  // Use the imported project data instead of duplicating it
  const projects = projectData;

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  
  // Ensure currentPage is within valid range
  const validCurrentPage = Math.min(Math.max(1, currentPage), totalPages || 1);
  
  const startIndex = (validCurrentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  console.log('Pagination Debug:', {
    activeFilter,
    currentPage,
    validCurrentPage,
    totalProjects: filteredProjects.length,
    totalPages,
    startIndex,
    endIndex,
    currentProjectsCount: currentProjects.length,
    currentProjectIds: currentProjects.map(p => p.id)
  });

  // Fixed: Add navigation to project detail page
  const handleProjectClick = (project) => {
    console.log('Project clicked:', project);
    navigate(`/project/${project.id}`); // Navigate to project detail page
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handlePageChange = (pageNumber) => {
    console.log('Page change requested:', pageNumber);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      // Scroll to top of projects section
      setTimeout(() => {
        document.querySelector('.projects-main')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
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
          {/* Projects Count Info */}
          <div className="projects-info">
            <p className="projects-count">
              Showing {currentProjects.length} of {filteredProjects.length} projects
              {activeFilter !== 'All' && ` in ${activeFilter}`}
            </p>
          </div>

          <div className="projects-grid" key={`page-${validCurrentPage}-filter-${activeFilter}`}>
            {currentProjects.map((project, index) => (
              <ProjectCard
                key={`${project.id}-${validCurrentPage}-${index}`}
                project={project}
                onClick={handleProjectClick}
              />
            ))}
          </div>

          {/* Pagination Component */}
          {totalPages > 1 && (
            <div className="pagination">
              <div className="pagination-numbers">
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <button
                      key={pageNumber}
                      className={`pagination-number ${validCurrentPage === pageNumber ? 'active' : ''}`}
                      onClick={() => handlePageChange(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
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

        .projects-info {
          margin-bottom: 2rem;
          text-align: center;
        }

        .projects-count {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          font-weight: 300;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          justify-items: center;
          margin-bottom: 3rem;
        }

        /* Pagination Styles */
        .pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-top: 3rem;
          flex-wrap: wrap;
        }

        .pagination-numbers {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .pagination-number {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          outline: none;
        }

        .pagination-number:hover {
          background: rgba(255, 107, 53, 0.2);
          border-color: rgba(255, 107, 53, 0.4);
          transform: translateY(-2px);
        }

        .pagination-number:focus {
          outline: none;
          box-shadow: none;
        }

        .pagination-number.active {
          background: linear-gradient(135deg, #ff6b35, #f7931e);
          border-color: #ff6b35;
          color: white;
          box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
        }

        .pagination-number.active:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
        }

        .pagination-number.active:focus {
          outline: none;
          box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
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

          .pagination {
            gap: 0.5rem;
          }

          .pagination-number {
            width: 35px;
            height: 35px;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .project-container {
            padding-top: 60px;
          }

          .projects-grid {
            gap: 1rem;
          }

          .pagination-numbers {
            gap: 0.3rem;
          }

          .pagination-number {
            width: 32px;
            height: 32px;
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Project;