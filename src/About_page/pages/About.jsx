import { useNavigate } from 'react-router-dom';
import ParticlesHome from '../../components/effects/ParticlesHome';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="about-container">
      <ParticlesHome />
      <Navbar />
      
      <main className="about-section">
        <div className="about-content">
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
              <div className="section-header">
                <h3 className="section-title">Experience</h3>
                <div className="section-line"></div>
              </div>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">Open Source Projects</h4>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">UI Designer</h4>
                    <p className="timeline-detail">Fiverr - Freelance</p>
                    <p className="timeline-period">(2020- now)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="section">
              <div className="section-header">
                <h3 className="section-title">Education</h3>
                <div className="section-line"></div>
              </div>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">NSBM Green University (Plymouth UK)</h4>
                    <p className="timeline-detail">BSc Honor's in Software Engineering | Bachelor's degree</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">SITC University</h4>
                    <p className="timeline-detail">Human Resources Management Diploma</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Volunteering Section */}
            <div className="section">
              <div className="section-header">
                <h3 className="section-title">Volunteering</h3>
                <div className="section-line"></div>
              </div>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">Designer</h4>
                    <p className="timeline-detail">IEEE Student Branch - NSBM Green University</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">Event Coordinator</h4>
                    <p className="timeline-detail">Compuvate Society - NSBM Green University</p>
                  </div>
                </div>  
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">Volunteering Member</h4>
                    <p className="timeline-detail">Foss Community - NSBM Green University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;