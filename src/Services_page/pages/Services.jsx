import React from 'react';
import Spline from '@splinetool/react-spline';
import ParticlesHome from '../../components/effects/ParticlesHome';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import BlurText from '../components/BlurText';


const Services = () => {
  const services = [
    {
      title: "Website Design",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
    },
    {
      title: "Website Development",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
    },
    {
      title: "Mobile App Design", 
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
    },
    {
      title: "Mobile App Development",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
    },
    {
      title: "Ui Designs",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
    },
    {
      title: "Digital Marketing",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
    }
  ];

  const handleContactClick = () => {
    // Add your contact logic here - could navigate to contact page, open modal, etc.
    // For example: navigate('/contact') or window.location.href = '#contact'
    console.log('Contact button clicked');
  };

  return (
    <div className="service-container min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <Navbar />
      <ParticlesHome />
      
      {/* Hero Section with Spline */}
      <div className="hero-section relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Left Content with BlurText */}
          
          <div className="hero-content flex-1 max-w-md">
            <h1 className="text-5xl font-bold mb-6 leading-tight text-white">
              Services that I Provide
            </h1>
            <BlurText
              text="Have some ideas? or just want to say hello? Feel free to Contact me 😃"
              className="text-lg text-gray-300 leading-relaxed mb-4"
              delay={80}
              animateBy="words"
              direction="top"
              as="p"
              stepDuration={0.3}
            />
            <BlurText
              text="I am always open to discussing new projects, creative ideas or opportunities to be part of your visions."
              className="text-lg text-gray-300 leading-relaxed mb-8"
              delay={70}
              animateBy="words"
              direction="top"
              as="p"
              stepDuration={0.3}
            />
            
            {/* Contact Me Button */}
            <button 
              onClick={handleContactClick}
              className="contact-btn group relative overflow-hidden px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Me
                <svg 
                  className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
          
          {/* Right Spline Container */}
          <div className="spline-container flex-1 flex justify-center items-center ml-12">
            <div className="w-90 h-[450px] rounded-lg overflow-hidden">
              <Spline scene="https://prod.spline.design/oPGAgGsJguzEKLbH/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section with Sliding Cards */}
      <div className="services-section relative z-10 py-20 overflow-hidden">
        <div className="services-slider">
          <div className="services-track">
            {/* Duplicate the services array for seamless loop */}
            {[...services, ...services].map((service, index) => (
              <div 
                key={index}
                className="service-card group"
                style={{
                  minWidth: '320px',
                  height: '200px',
                  margin: '0 20px',
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  borderRadius: '12px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-4">
                  <div className="w-8 h-1 bg-blue-500 rounded-full group-hover:w-12 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />

      <style jsx>{`
        .service-container {
          position: relative;
        }

        .services-section {
          position: relative;
        }

        .services-slider {
          width: 100%;
          overflow: hidden;
        }

        .services-track {
          display: flex;
          animation: slide 30s linear infinite;
          will-change: transform;
        }

        .services-track:hover {
          animation-play-state: paused;
        }

        .service-card {
          position: relative;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(59, 130, 246, 0.5);
        }

        /* Contact Button Styles */
        .contact-btn {
          background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
          border: 1px solid rgba(59, 130, 246, 0.3);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2);
          position: relative;
        }

        .contact-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #1e40af 0%, #059669 100%);
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .contact-btn:hover::before {
          opacity: 1;
        }

        .contact-btn:hover {
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
          border-color: rgba(59, 130, 246, 0.6);
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-section .container {
            flex-direction: column;
            text-align: center;
          }
          
          .spline-container {
            margin-left: 0;
            margin-top: 3rem;
          }
          
          .spline-container > div {
            height: 380px;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .spline-container > div {
            width: 280px;
            height: 320px;
          }
          
          .service-card {
            min-width: 280px !important;
            margin: 0 15px !important;
          }

          .contact-btn {
            padding: 12px 24px;
            font-size: 14px;
          }
        }

        /* Gradient borders for cards */
        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.5), rgba(16, 185, 129, 0.5));
          border-radius: 12px;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover::before {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default Services;