import ParticlesHome from '../components/effects/ParticlesHome';

const Home = () => {
  return (
    <div className="home-container">
      <ParticlesHome />
      
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">Methex</div>
        <div className="nav-menu">
          <span className="menu-icon">☰</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="hero-section">
        <div className="hero-content">
          {/* Profile Image */}
          <div className="profile-image">
            <img 
              src="/path-to-your-image.jpg" 
              alt="Profile" 
              className="profile-img"
            />
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            Crafting Clean Code for<br />
            Complex Problems
          </h1>

          {/* Description */}
          <p className="hero-description">
            I'm Methum Pathirana, Seeking Fullstack developer<br />
            internship from Sri Lanka.
          </p>

          {/* Call to Action Button */}
          <button className="cta-button">
            About ME
          </button>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="projects-section">
        <div className="projects-container">
          <h2 className="projects-title">Recent Projects</h2>
          
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder"></div>
              </div>
              <div className="project-content">
                <h3 className="project-name">ABC Cinema – Movie Ticket Booking System</h3>
                <p className="project-description">
                  A Java-based web app for booking movie tickets with an admin dashboard.
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">React</span>
                  <span className="tag">React</span>
                  <span className="tag">React</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder"></div>
              </div>
              <div className="project-content">
                <h3 className="project-name">ABC Cinema – Movie Ticket Booking System</h3>
                <p className="project-description">
                  A Java-based web app for booking movie tickets with an admin dashboard.
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">React</span>
                  <span className="tag">React</span>
                  <span className="tag">React</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">Copyright © 2025, Developed by Methum Pathirana</p>
        </div>
      </footer>

      <style jsx>{`
        .home-container {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 3rem;
          z-index: 100;
          backdrop-filter: blur(10px);
          background: rgba(0, 0, 0, 0.05);
        }

        .nav-brand {
          font-size: 1.5rem;
          font-weight: 500;
          color: white;
          letter-spacing: 0.5px;
        }

        .menu-icon {
          color: white;
          font-size: 1.2rem;
          cursor: pointer;
          padding: 0.5rem;
          transition: opacity 0.3s ease;
          font-weight: 300;
        }

        .menu-icon:hover {
          opacity: 0.7;
        }

        .hero-section {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 2rem;
          text-align: center;
          padding-top: 8rem;
          width: 100%;
        }

        .hero-content {
          max-width: 900px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }

        .profile-image {
          margin: 0 auto 3rem auto;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          display: block;
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .profile-image:hover .profile-img {
          transform: scale(1.05);
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 300;
          color: white;
          line-height: 1.2;
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
          text-align: center;
          width: 100%;
        }

        .hero-description {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 3rem;
          font-weight: 300;
          text-align: center;
          width: 100%;
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

        /* Projects Section */
        .projects-section {
          position: relative;
          z-index: 10;
          padding: 4rem 2rem;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .projects-container {
          max-width: 1200px;
          width: 100%;
        }

        .projects-title {
          font-size: 2.5rem;
          font-weight: 300;
          color: white;
          text-align: center;
          margin-bottom: 4rem;
          letter-spacing: -0.02em;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 2rem;
          justify-items: center;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 0;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          overflow: hidden;
          max-width: 500px;
          width: 100%;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .project-image {
          width: 100%;
          height: 200px;
          position: relative;
          overflow: hidden;
        }

        .project-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .project-content {
          padding: 2rem;
        }

        .project-name {
          font-size: 1.25rem;
          font-weight: 500;
          color: white;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .project-description {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 400;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Footer */
        .footer {
          position: relative;
          z-index: 10;
          padding: 2rem;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-text {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          font-weight: 300;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .navbar {
            padding: 1.5rem 2rem;
          }

          .hero-section {
            padding: 1rem;
            padding-top: 6rem;
          }

          .profile-image {
            width: 120px;
            height: 120px;
            margin-bottom: 2rem;
          }

          .hero-title {
            font-size: clamp(2rem, 8vw, 3rem);
            margin-bottom: 1.5rem;
          }

          .hero-description {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }

          .cta-button {
            padding: 0.875rem 2rem;
            font-size: 0.95rem;
          }

          .projects-section {
            padding: 3rem 1rem;
          }

          .projects-title {
            font-size: 2rem;
            margin-bottom: 3rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .project-card {
            max-width: 100%;
          }

          .project-content {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            padding: 1rem 1.5rem;
          }

          .nav-brand {
            font-size: 1.3rem;
          }

          .hero-section {
            padding-top: 5rem;
          }

          .hero-description br {
            display: none;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            min-width: 300px;
          }

          .project-image {
            height: 150px;
          }
        }

        /* Animation for entrance */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .profile-image,
        .hero-title,
        .hero-description,
        .cta-button {
          animation: fadeInUp 0.8s ease forwards;
        }

        .hero-title {
          animation-delay: 0.2s;
        }

        .hero-description {
          animation-delay: 0.4s;
        }

        .cta-button {
          animation-delay: 0.6s;
        }

        .projects-title {
          animation: fadeInUp 0.8s ease 0.8s forwards;
          opacity: 0;
        }

        .project-card {
          animation: fadeInUp 0.8s ease forwards;
          opacity: 0;
        }

        .project-card:nth-child(1) {
          animation-delay: 1s;
        }

        .project-card:nth-child(2) {
          animation-delay: 1.2s;
        }
      `}</style>
    </div>
  );
};

export default Home;