import React, { useEffect, useRef } from 'react';

const MotionBackground = () => {
  const mainRef = useRef(null);
  const navRef = useRef(null);
  const lightRef = useRef(null);
  const buttonLightRef = useRef(null);

  useEffect(() => {
    const main = mainRef.current;
    const nav = navRef.current;
    const light = lightRef.current;
    const buttonLight = buttonLightRef.current;
    
    if (!main || !nav || !light || !buttonLight) return;

    const buttons = nav.querySelectorAll('.button');
    const svgs = nav.querySelectorAll('svg');
    const buttonLights = buttonLight.querySelectorAll('div');

    // Clone SVGs to button lights
    for (let i = 0; i < svgs.length && i < buttonLights.length; i++) {
      const svg = svgs[i].cloneNode(true);
      buttonLights[i].appendChild(svg);
    }

    // Create glare effects
    for (let i = 0; i < 4; i++) {
      const newButtonLight = buttonLight.cloneNode(true);
      newButtonLight.classList.add('glare');
      newButtonLight.style.filter = `blur(${Math.pow(i * 1.5, 2)}px)`;
      main.appendChild(newButtonLight);
    }

    const buttonLightsAll = main.querySelectorAll('.button-light');

    const calculateShadow = (clientX, clientY) => {
      const rect = nav.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;

      const angle = Math.atan2(deltaY, deltaX);
      const maxOffset = 3;

      const detectionRadius = rect.width * 2;
      const distance = Math.min(maxOffset, Math.sqrt(deltaX ** 2 + deltaY ** 2) / detectionRadius * maxOffset);
      const offsetX = Math.cos(angle) * distance;
      const offsetY = Math.sin(angle) * distance;

      return { x: -offsetX, y: -offsetY };
    };

    const calculateIntensity = (innerRadius, outerRadius, clientX, clientY) => {
      const rect = nav.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

      let intensity = 0;

      if (distance > innerRadius && distance <= outerRadius) {
        intensity = (distance - innerRadius) / (outerRadius - innerRadius);
      } else if (distance > outerRadius) {
        intensity = 1;
      } else if (distance <= innerRadius) {
        intensity = 0;
      }

      return intensity;
    };

    const calculateAngle = (element, cursorX, cursorY) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const angle = Math.atan2(cursorY - centerY, cursorX - centerX) * (180 / Math.PI);
      return (angle + 180) % 360;
    };

    const easeOutQuad = (t) => t * (2 - t);
    const easeOutQuint = (t) => 1 - Math.pow(1 - t, 5);
    const easeInQuad = (t) => t * t;

    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      
      light.style.transform = `translate(${x}px, ${y}px)`;

      const s = calculateShadow(x, y);
      const shadow = `
        ${s.x * 2.6}px ${s.y * 2.6}px 1.5px rgba(0, 0, 0, 0.081),
        ${s.x * 5.8}px ${s.y * 5.8}px 3.4px rgba(0, 0, 0, 0.12),
        ${s.x * 9.8}px ${s.y * 9.8}px 5.6px rgba(0, 0, 0, 0.15),
        ${s.x * 14.8}px ${s.y * 14.8}px 8.5px rgba(0, 0, 0, 0.174),
        ${s.x * 21.3}px ${s.y * 21.3}px 12.3px rgba(0, 0, 0, 0.195),
        ${s.x * 30.1}px ${s.y * 30.1}px 17.4px rgba(0, 0, 0, 0.216),
        ${s.x * 42.7}px ${s.y * 42.7}px 24.6px rgba(0, 0, 0, 0.24),
        ${s.x * 62.1}px ${s.y * 62.1}px 35.8px rgba(0, 0, 0, 0.27),
        ${s.x * 95.6}px ${s.y * 95.6}px 55.1px rgba(0, 0, 0, 0.309),
        ${s.x * 170}px ${s.y * 170}px 98px rgba(0, 0, 0, 0.39)
      `;
      nav.style.boxShadow = shadow;

      const lightRadius = 400;
      const opacity = easeInQuad(calculateIntensity(lightRadius / 3, lightRadius * 1.3, x, y));
      
      for (let i = 0; i < buttonLightsAll.length; i++) {
        buttonLightsAll[i].style.opacity = opacity;
      }

      buttons.forEach((item) => {
        const angle = calculateAngle(item, x, y);
        const scaleY = 10 - easeOutQuint(calculateIntensity(0, lightRadius * 1.4, x, y)) * 10;
        const buttonBg = item.querySelector('.button-bg');
        if (buttonBg) {
          buttonBg.style.transform = `rotateZ(${angle}deg) scaleY(${scaleY})`;
        }
      });
    };

    // Add button interaction handlers
    buttons.forEach((item) => {
      const handleMouseOver = () => item.classList.add('hover');
      const handleMouseOut = () => item.classList.remove('hover');
      const handleMouseDown = () => item.classList.add('press');
      const handleMouseUp = () => item.classList.remove('press');
      const handleTouchStart = () => item.classList.add('press');
      const handleTouchEnd = () => {
        setTimeout(() => item.classList.remove('press'), 300);
      };

      item.addEventListener('mouseover', handleMouseOver);
      item.addEventListener('mouseout', handleMouseOut);
      item.addEventListener('mousedown', handleMouseDown);
      item.addEventListener('mouseup', handleMouseUp);
      item.addEventListener('touchstart', handleTouchStart);
      item.addEventListener('touchend', handleTouchEnd);

      // Cleanup function will remove these listeners
      item._cleanup = () => {
        item.removeEventListener('mouseover', handleMouseOver);
        item.removeEventListener('mouseout', handleMouseOut);
        item.removeEventListener('mousedown', handleMouseDown);
        item.removeEventListener('mouseup', handleMouseUp);
        item.removeEventListener('touchstart', handleTouchStart);
        item.removeEventListener('touchend', handleTouchEnd);
      };
    });

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      buttons.forEach((item) => {
        if (item._cleanup) {
          item._cleanup();
        }
      });
      // Remove glare elements
      const glareElements = main.querySelectorAll('.glare');
      glareElements.forEach(el => el.remove());
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .motion-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .motion-background * {
          pointer-events: auto;
        }

        .nav {
          display: flex;
          gap: 4px;
          padding: 4px;
          border-radius: 1000px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.06);
          box-shadow:
            2.6px 2.6px 1.5px rgba(0, 0, 0, 0.027),
            5.8px 5.8px 3.4px rgba(0, 0, 0, 0.04),
            9.8px 9.8px 5.6px rgba(0, 0, 0, 0.05),
            14.8px 14.8px 8.5px rgba(0, 0, 0, 0.058),
            21.3px 21.3px 12.3px rgba(0, 0, 0, 0.065),
            30.1px 30.1px 17.4px rgba(0, 0, 0, 0.072),
            42.7px 42.7px 24.6px rgba(0, 0, 0, 0.08),
            62.1px 62.1px 35.8px rgba(0, 0, 0, 0.09),
            95.6px 95.6px 55.1px rgba(0, 0, 0, 0.103),
            170px 170px 98px rgba(0, 0, 0, 0.13);
        }

        .button {
          position: relative;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transform: translateZ(0);
          background: #242424;
          overflow: hidden;
          cursor: pointer;
        }

        .button-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.2s filter;
        }

        .frame {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(50, 50, 50, 0.5);
          backdrop-filter: blur(5px);
          box-shadow: 0 0 0 0 white, inset 0 0 0 2px rgba(0, 0, 0, 0.6), 
                      inset 0 0 16px rgba(160, 160, 160, 0.1), 
                      inset 0 0 0 0 rgba(0, 0, 0, 0.8);
          filter: brightness(1);
          transform: translate3d(0, 0, 0);
          transition: 0.2s;
        }

        .button.hover .frame {
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5), 
                      inset 0 0 0 2px rgba(0, 0, 0, 0.6), 
                      inset 0 0 16px rgba(160, 160, 160, 0.1), 
                      inset 0 0 0 0 rgba(0, 0, 0, 1);
          transition: 0.3s ease;
        }

        .button.press .frame {
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5), 
                      inset 0 0 0 2px rgba(0, 0, 0, 0.6), 
                      inset 0 0 16px rgba(160, 160, 160, 0.1), 
                      inset 4px 4px 4px 2px rgba(0, 0, 0, 1);
          filter: brightness(0.8);
        }

        .button svg {
          width: 24px;
          transform: scale(1);
          transition: 0.3s ease;
        }

        .button.press svg {
          transform: scale(0.91);
        }

        .button svg path {
          stroke: rgba(255, 255, 255, 0.75);
          stroke-width: 1.5px;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .light {
          position: absolute;
          top: -100%;
          left: -100%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at center, rgba(0, 0, 0, 0) 0px, 
                                      rgba(0, 0, 0, 0.15) 100px, 
                                      rgba(0, 0, 0, 1) 400px);
          pointer-events: none;
        }

        .button-light {
          position: absolute;
          display: flex;
          gap: 8px;
          filter: blur(0.5px);
          pointer-events: none;
          transform: translate3d(0, 0, 0);
          opacity: 0;
        }

        .button-light div {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 50%;
        }

        .button-light svg path {
          stroke: #00FF88;
          stroke-width: 1.5px;
        }

        @media screen and (max-width: 500px) {
          .frame {
            transition: 0.2s ease;
          }
          .button svg {
            transition: 0.2s ease;
          }
        }
      `}</style>
      
      <div className="motion-background" ref={mainRef}>
        <div className="nav" ref={navRef}>
          <div className="button">
            <img 
              className="button-bg" 
              src="https://cdn.prod.website-files.com/65cceef869e5a56037c32801/672080ee3e9942d6e0617400_Rectangle%201002.png" 
              alt=""
            />
            <div className="frame">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6H21M9 12H21M9 18H17" />
                <path d="M4.35355 6.35355C4.25979 6.44732 4.13261 6.5 4 6.5C3.86739 6.5 3.74021 6.44732 3.64645 6.35355C3.55268 6.25979 3.5 6.13261 3.5 6C3.5 5.86739 3.55268 5.74021 3.64645 5.64645C3.74021 5.55268 3.86739 5.5 4 5.5C4.13261 5.5 4.25979 5.55268 4.35355 5.64645C4.44732 5.74021 4.5 5.86739 4.5 6C4.5 6.13261 4.44732 6.25979 4.35355 6.35355Z" />
                <path d="M4.35355 12.3536C4.25979 12.4473 4.13261 12.5 4 12.5C3.86739 12.5 3.74021 12.4473 3.64645 12.3536C3.55268 12.2598 3.5 12.1326 3.5 12C3.5 11.8674 3.55268 11.7402 3.64645 11.6464C3.74021 11.5527 3.86739 11.5 4 11.5C4.13261 11.5 4.25979 11.5527 4.35355 11.6464C4.44732 11.7402 4.5 11.8674 4.5 12C4.5 12.1326 4.44732 12.2598 4.35355 12.3536Z" />
                <path d="M4.35355 18.3536C4.25979 18.4473 4.13261 18.5 4 18.5C3.86739 18.5 3.74021 18.4473 3.64645 18.3536C3.55268 18.2598 3.5 18.1326 3.5 18C3.5 17.8674 3.55268 17.7402 3.64645 17.6464C3.74021 17.5527 3.86739 17.5 4 17.5C4.13261 17.5 4.25979 17.5527 4.35355 17.6464C4.44732 17.7402 4.5 17.8674 4.5 18C4.5 18.1326 4.44732 18.2598 4.35355 18.3536Z" />
              </svg>
            </div>
          </div>
          <div className="button">
            <img 
              className="button-bg" 
              src="https://cdn.prod.website-files.com/65cceef869e5a56037c32801/672080ee3e9942d6e0617400_Rectangle%201002.png" 
              alt=""
            />
            <div className="frame">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.6252 13.5762H6.3752C5.38108 13.5762 4.5752 14.3821 4.5752 15.3762V17.6262C4.5752 18.6203 5.38108 19.4262 6.3752 19.4262H8.6252C9.61931 19.4262 10.4252 18.6203 10.4252 17.6262V15.3762C10.4252 14.3821 9.61931 13.5762 8.6252 13.5762Z" />
                <path d="M17.6252 13.5762H15.3752C14.3811 13.5762 13.5752 14.3821 13.5752 15.3762V17.6262C13.5752 18.6203 14.3811 19.4262 15.3752 19.4262H17.6252C18.6193 19.4262 19.4252 18.6203 19.4252 17.6262V15.3762C19.4252 14.3821 18.6193 13.5762 17.6252 13.5762Z" />
                <path d="M8.6252 4.57617H6.3752C5.38108 4.57617 4.5752 5.38206 4.5752 6.37617V8.62617C4.5752 9.62028 5.38108 10.4262 6.3752 10.4262H8.6252C9.61931 10.4262 10.4252 9.62028 10.4252 8.62617V6.37617C10.4252 5.38206 9.61931 4.57617 8.6252 4.57617Z" />
                <path d="M17.6252 4.57617H15.3752C14.3811 4.57617 13.5752 5.38206 13.5752 6.37617V8.62617C13.5752 9.62028 14.3811 10.4262 15.3752 10.4262H17.6252C18.6193 10.4262 19.4252 9.62028 19.4252 8.62617V6.37617C19.4252 5.38206 18.6193 4.57617 17.6252 4.57617Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="light" ref={lightRef}></div>
        <div className="button-light" ref={buttonLightRef}>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default MotionBackground;