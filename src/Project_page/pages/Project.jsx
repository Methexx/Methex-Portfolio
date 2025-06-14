import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ParticlesHome from '../../components/effects/ParticlesHome';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Filter from '../components/Filter';
import ProjectCard from '../components/ProjectCard';

const Project = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web', 'Mobile', 'UI Designs'];

  const projects = [
    {
      id: 1,
      title: "ABC Cinema Movie Ticket Booking System",
      description: "A comprehensive Java-based web application for booking movie tickets ",
      technologies: ["React", "Java", "MySQL", "Spring Boot"],
      status: "Completed",
      category: "Web",
      image: "https://avatars.githubusercontent.com/u/157824523?v=4"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, user authentication, and order tracking.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      status: "In Progress",
      category: "Web",
      image: "https://avatars.githubusercontent.com/u/157824523?v=4"
    },
    {
      id: 3,
      title: "Greenie Social Platform",
      description: "Greenie is a gamified platform that encourages environmental consciousness through challenges, rewards, and social engagement.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      status: "Completed",
      category: "Web",
      image: "https://avatars.githubusercontent.com/u/157824523?v=4"
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "A secure mobile banking application with biometric authentication, transaction history, and real-time notifications.",
      technologies: ["React Native", "Firebase", "Node.js"],
      status: "Completed",
      category: "Mobile",
      image: "https://avatars.githubusercontent.com/u/157824523?v=4"
    },
    {
      id: 5,
      title: "Portfolio Website Design",
      description: "A modern, responsive portfolio website design with smooth animations and interactive elements.",
      technologies: ["Figma", "Adobe XD", "Principle"],
      status: "Completed",
      category: "UI Designs",
      image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Portfolio+Design"
    },
    {
      id: 6,
      title: "Task Management Mobile App",
      description: "A productivity mobile app for task management with calendar integration and team collaboration features.",
      technologies: ["Flutter", "Firebase", "Dart"],
      status: "In Progress",
      category: "Mobile",
      image: "https://via.placeholder.com/400x250/ef4444/ffffff?text=Task+Manager"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (project) => {
    console.log('Project clicked:', project);
    // Add your project click logic here (e.g., navigate to project details)
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

          .back-button {
            position: relative;
            align-self: flex-start;
            margin-bottom: 1rem;
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