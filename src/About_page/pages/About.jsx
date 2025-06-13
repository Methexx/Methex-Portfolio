import { useNavigate } from 'react-router-dom';
import ParticlesHome from '../../components/effects/ParticlesHome';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const About = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="about-container">
      <ParticlesHome />
      <Navbar />
      
      <main className="about-main">
        <div className="about-content">
          <div className="about-card">
            <h1 className="about-title">About Me</h1>
            
            <div className="about-description">
              <p>
                Hi, I'm Methum Pathirana, a 3rd-year undergraduate student at NSBM Green 
                University, specializing in front-end development and mobile application 
                development. I'm currently seeking a full-stack internship where I can 
                contribute my skills and grow through real-world experience.
              </p>
            </div>

            <div className="about-sections">
              {/* Experience Section */}
              <div className="section">
                <h3 className="section-title">Experience</h3>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>Some Open Source Projects</h4>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>UI Designer</h4>
                      <p className="timeline-detail">Part - Freelance</p>
                      <p className="timeline-period">2022 - 2024</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="section">
                <h3 className="section-title">Education</h3>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>NSBM Green University (Plymouth UK)</h4>
                      <p className="timeline-detail">Bsc Honor in Software Engineering | Bachelor's degree</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>SITC University</h4>
                      <p className="timeline-detail">Human Resources Management Diploma</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Volunteering Section */}
              <div className="section">
                <h3 className="section-title">Volunteering</h3>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>Design Team Member</h4>
                      <p className="timeline-detail">IEEE Student Branch - NSBM Green University</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>Event Coordinator</h4>
                      <p className="timeline-detail">Computer Society - NSBM Green University</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>Volunteering Member</h4>
                      <p className="timeline-detail">Rotaract Community - NSBM Green University</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .about-container {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;
          padding-top: 80px;
        }

        .about-main {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: calc(100vh - 160px);
          padding: 2rem 1rem;
        }

        .about-content {
          width: 100%;
          max-width: 600px;
          display: flex;
          justify-content: center;
        }

        .about-card {
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 3rem 2.5rem;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          width: 100%;
          max-width: 500px;
        }

        .about-title {
          font-size: 2.5rem;
          font-weight: 300;
          color: white;
          text-align: center;
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
        }

        .about-description {
          margin-bottom: 3rem;
        }

        .about-description p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-size: 0.95rem;
          text-align: justify;
          margin: 0;
        }

        .about-sections {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .section {
          display: flex;
          flex-direction: column;
        }

        .section-title {
          font-size: 1.1rem;
          font-weight: 400;
          color: white;
          margin-bottom: 1.5rem;
          letter-spacing: 0.5px;
        }

        .timeline {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: relative;
          padding-left: 1.5rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 8px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, 
            rgba(255, 255, 255, 0.3) 0%, 
            rgba(255, 255, 255, 0.1) 50%, 
            rgba(255, 255, 255, 0.3) 100%);
        }

        .timeline-item {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .timeline-dot {
          position: absolute;
          left: -1.5rem;
          top: 0.5rem;
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.2);
          z-index: 1;
        }

        .timeline-content h4 {
          color: white;
          font-size: 0.95rem;
          font-weight: 500;
          margin: 0 0 0.3rem 0;
          line-height: 1.3;
        }

        .timeline-detail {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
          margin: 0.2rem 0;
          line-height: 1.3;
        }

        .timeline-period {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.8rem;
          margin: 0.2rem 0 0 0;
          font-style: italic;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .about-container {
            padding-top: 70px;
          }

          .about-main {
            min-height: calc(100vh - 140px);
            padding: 1rem;
          }

          .about-card {
            padding: 2rem 1.5rem;
            border-radius: 15px;
          }

          .about-title {
            font-size: 2rem;
            margin-bottom: 1.5rem;
          }

          .about-description {
            margin-bottom: 2rem;
          }

          .about-sections {
            gap: 2rem;
          }

          .section-title {
            font-size: 1rem;
            margin-bottom: 1rem;
          }

          .timeline {
            gap: 1.2rem;
            padding-left: 1.2rem;
          }

          .timeline-dot {
            left: -1.2rem;
            width: 6px;
            height: 6px;
          }

          .timeline-content h4 {
            font-size: 0.9rem;
          }

          .timeline-detail {
            font-size: 0.8rem;
          }

          .timeline-period {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .about-container {
            padding-top: 60px;
          }

          .about-card {
            padding: 1.5rem 1rem;
          }

          .about-title {
            font-size: 1.8rem;
          }

          .about-description p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;