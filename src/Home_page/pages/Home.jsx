import ParticlesHome from '../../components/effects/ParticlesHome';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ProjectCard from '../components/projectcard';
import profileImage from '../components/dp.jpg';
import AbtButton from '../components/AbtButton';

const Home = () => {
  const projects = [
    {
      id: 1,
      title: "ABC Cinema – Movie Ticket Booking System",
      description: "A Java-based web app for booking movie tickets with an admin dashboard.",
      technologies: ["React", "Java", "MySQL", "Spring Boot"]
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and inventory management.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"]
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and inventory management.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"]
    }
  ];



  const handleAboutClick = () => {
    // Add navigation logic here
    console.log('Navigate to About section');
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
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .home-container {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;
        }

        .hero-section {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 2rem 1rem;
          margin-top: 40px; /* Reduced from 200px for better spacing */
        }

        .hero-content {
          width: 100%;
          max-width: 1200px; /* Added max-width for better control */
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
          font-size: clamp(2rem, 1vw, 4rem); /* Improved minimum size */
          font-weight: 500;
          color: white;
          line-height: 1.2;
          margin-bottom: 0rem;
          letter-spacing: -0.02em;
        }

        .hero-description {
          font-size: clamp(1rem, 2.5vw, 1.2rem); /* Made responsive */
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-weight: 300;
          max-width: 600px; /* Added for better readability */
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
          max-width: 1200px; /* Added max-width for consistency */
        }

        .projects-title {
          font-size: clamp(2rem, 4vw, 2.5rem); /* Made responsive */
          font-weight: 300;
          color: white;
          text-align: center;
          margin-bottom: 4rem;
          letter-spacing: -0.02em;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); /* Reduced min-width for mobile */
          gap: 2rem;
          justify-items: center;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .hero-section {
            margin-top: 80px;
            padding: 1rem;
          }

          .profile-image {
            width: 120px;
            height: 120px;
            margin-bottom: 1rem;
          }

          .hero-description br {
            display: none; /* Remove line breaks on mobile */
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .cta-button {
            padding: 0.8rem 2rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .hero-section {
            margin-top: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;