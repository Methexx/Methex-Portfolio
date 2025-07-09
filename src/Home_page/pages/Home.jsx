import { useNavigate } from 'react-router-dom';
import ParticlesHome from '../../components/effects/ParticlesHome';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ProjectCard from '../components/ProjectCard';
import profileImage from '../components/dp.jpg';
import AbtButton from '../components/AbtButton';
import Spline from '@splinetool/react-spline';


// Project Images
import cinemaImage from '../../Assets/Home/abc-cinema.png';
import ecommerceImage from '../../Assets/Home/walkwise.png';
import greenieImage from '../../Assets/Home/greenie.jpg';

const Home = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "1",
      title: "ABC Cinema Movie Ticket Booking System",
      description: "A Java-based web app for booking movie tickets with an admin dashboard.",
      technologies: ["React", "Java", "MySQL", "Spring Boot"],
      image: cinemaImage,
      imageAlt: "ABC Cinema Movie Ticket Booking System screenshot"
    },
    {
      id: "3",
      title: "WalkWise – Community Location Discovery App",
      description: "WalkWise is a community-driven location discovery mobile app built with Flutter.",
      technologies: ["Flutter", "Supabase", "OpenStreetMap", "flutter_map", "Provider"],
      image: ecommerceImage,
      imageAlt: "E-Commerce Platform screenshot"
    },
    {
      id: "2",
      title: "Greenie Social Platform",
      description: "Greenie is a gamified platform that encourages through challenges, rewards, and social engagement.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      image: greenieImage,
      imageAlt: "Greenie Social Platform screenshot"
    }
  ];

  const handleProjectClick = (project) => {
    console.log('Project clicked:', project);
    // Navigate to project detail page using the project ID
    navigate(`/project/${project.id}`);
  };

  const handleAboutClick = () => {
    // Navigate to About page
    navigate('/about');
  };

  const handleViewAllClick = () => {
    // Navigate to Projects page
    navigate('/project');
  };

  return (
    <div className="home-container">
      <ParticlesHome />
      <Navbar />

      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-content">
          <div className="profile-image">
            <img 
              src={profileImage} 
              alt="Methum Pathirana - Fullstack Developer" 
              className="profile-img"
              loading="lazy"
            />
          </div>

          <h1 className="hero-title">
            Crafting Clean Code for<br />
            Complex Problems
          </h1>

          <p className="hero-description">
            I'm Methum Pathirana, seeking fullstack developer<br />
            internship opportunities from Sri Lanka.
          </p>

          <AbtButton onClick={handleAboutClick} />

        </div>
      </main>

      {/* Projects Section */}
      <section className="projects-section" aria-labelledby="projects-heading">
        <div className="projects-container">
          <h2 id="projects-heading" className="projects-title">Recent Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
                imageAlt={project.imageAlt}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
          
          {/* View All Button */}
          <div className="view-all-container">
            <button 
              className="view-all-button"
              onClick={handleViewAllClick}
              aria-label="View all projects"
            >
              View All 
              <span className="arrow">→</span>
            </button>
          </div>
           <Spline scene="https://prod.spline.design/VqpGnZ70d41cL6lg/scene.splinecode" />
        </div>

         
      </section>

      <Footer />

      <style jsx>{`
        .home-container {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;
          padding-top: 80px; /* Add padding to account for fixed navbar */
        }

        .hero-section {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: calc(100vh - 80px); /* Adjust for navbar height */
          padding: 2rem 1rem;
          margin-top: 0; /* Remove margin-top since we're using padding-top on container */
        }

        .hero-content {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .profile-image {
          margin: 0 auto 1.5rem auto;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .hero-title {
          font-size: clamp(2rem, 1vw, 4rem);
          font-weight: 500;
          color: white;
          line-height: 1.2;
          margin-bottom: 0rem;
          letter-spacing: -0.02em;
        }

        .hero-description {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-weight: 300;
          max-width: 600px;
        }

        .cta-button {
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 1rem 2.5rem;
          font-size: 1rem;
          font-weight: 500;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          letter-spacing: 0.5px;
        }

        .cta-button:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .cta-button:active {
          transform: translateY(0);
        }

        .cta-button:focus {
          outline: 2px solid rgba(255, 255, 255, 0.5);
          outline-offset: 2px;
        }

        .projects-section {
          position: relative;
          z-index: 10;
          padding: 4rem 1rem;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .projects-container {
          width: 100%;
          max-width: 1200px;
        }

        .projects-title {
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 300;
          color: white;
          text-align: center;
          margin-bottom: 4rem;
          letter-spacing: -0.02em;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          justify-items: center;
        }

        .view-all-container {
          display: flex;
          justify-content: flex-end;
          margin-top: -3.1rem;
        }

        .view-all-button {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          font-size: 1rem;
          font-weight: 400;
          cursor: pointer;
          transition: color 0.3s ease;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .view-all-button:hover {
          color: white;
        }

        .view-all-button:hover .arrow {
          transform: translateX(2px);
        }

        .view-all-button:focus {
          outline: 1px solid rgba(255, 255, 255, 0.3);
          outline-offset: 2px;
        }

        .arrow {
          transition: transform 0.3s ease;
          font-size: 0.9rem;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .home-container {
            padding-top: 70px; /* Slightly less padding on mobile */
          }

          .hero-section {
            min-height: calc(100vh - 70px);
            padding: 1rem;
          }

          .profile-image {
            width: 120px;
            height: 120px;
            margin-bottom: 1rem;
          }

          .hero-description br {
            display: none;
          }

          .projects-section {
            padding: 4rem 2rem; /* Increased side padding for mobile */
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem; /* Increased gap between cards */
            padding: 0;
            max-width: 100%;
          }

          .cta-button {
            padding: 0.8rem 2rem;
            font-size: 0.9rem;
          }

          .view-all-container {
            justify-content: center;
            margin-top: 1rem;
            padding: 0 1rem;
          }
        }

        @media (max-width: 480px) {
          .home-container {
            padding-top: 60px; /* Even less padding on small mobile */
          }

          .hero-section {
            min-height: calc(100vh - 60px);
          }

          .projects-section {
            padding: 3rem 1.5rem; /* Increased padding to prevent card cutoff */
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 3rem; /* Increased spacing between cards on small screens */
            padding: 0;
            width: 100%;
            max-width: 100%;
          }

          .projects-title {
            margin-bottom: 3rem;
          }

          .view-all-button {
            font-size: 0.9rem;
          }

          .view-all-container {
            padding: 0 1rem; /* Increased padding */
          }
        }
      `}</style>
    </div>
  );
};

export default Home;