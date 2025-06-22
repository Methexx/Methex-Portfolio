import React, { useEffect, useRef } from 'react';

const ParticlesHome = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const starsRef = useRef([]);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const c = canvas.getContext('2d');
    const numStars = 1900;
    let radius = '0.' + Math.floor(Math.random() * 9) + 1;
    let focalLength = canvas.width * 2;
    let centerX, centerY;
    let animate = true;
    
    // Detect if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    
    // Speed in pixels per second, normalized for screen size
    const getBaseSpeed = () => {
      const screenWidth = window.innerWidth;
      const normalizedSpeed = (screenWidth / 1920) * 200; // Increased from 150 to 200
      return Math.max(normalizedSpeed, 100); // Increased minimum from 80 to 100
    };

    const initializeStars = () => {
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
      
      // Adjust number of stars for mobile performance
      const adjustedNumStars = isMobile ? Math.floor(numStars * 0.6) : numStars;
      
      starsRef.current = [];
      for (let i = 0; i < adjustedNumStars; i++) {
        const star = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * canvas.width,
          o: '0.' + Math.floor(Math.random() * 99) + 1,
          originalX: Math.random() * canvas.width,
          originalY: Math.random() * canvas.height,
          speed: Math.random() * 2 + 1
        };
        star.originalX = star.x;
        star.originalY = star.y;
        starsRef.current.push(star);
      }
    };

    const moveStars = (deltaTime) => {
      // Convert deltaTime from milliseconds to seconds
      const deltaSeconds = deltaTime / 1000;
      const currentSpeed = getBaseSpeed();
      
      for (let i = 0; i < starsRef.current.length; i++) {
        const star = starsRef.current[i];
        
        // Use delta time and screen-normalized speed for consistent movement
        star.z -= currentSpeed * deltaSeconds;
        
        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = star.originalX;
          star.y = star.originalY;
        }
      }
    };

    const drawStars = () => {
      let pixelX, pixelY, pixelRadius;
      
      // Resize to the screen
      if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        focalLength = canvas.width * 2;
        initializeStars();
      }

      // Always clear and fill background with pure black
      c.fillStyle = "rgba(0,0,0,1)";
      c.fillRect(0, 0, canvas.width, canvas.height);

      c.fillStyle = `rgba(209, 255, 255, ${radius})`;
      
      for (let i = 0; i < starsRef.current.length; i++) {
        const star = starsRef.current[i];
        
        pixelX = (star.x - centerX) * (focalLength / star.z);
        pixelX += centerX;
        pixelY = (star.y - centerY) * (focalLength / star.z);
        pixelY += centerY;
        pixelRadius = 0.3 * (focalLength / star.z);
        
        c.fillStyle = `rgba(209, 255, 255, ${star.o})`;
        c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
      }
    };

    const executeFrame = (currentTime) => {
      if (animate) {
        animationRef.current = requestAnimationFrame(executeFrame);
      }
      
      // Calculate delta time
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;
      
      // Skip first frame to avoid large delta
      if (deltaTime < 100) { // Only update if delta is reasonable (less than 100ms)
        moveStars(deltaTime);
      }
      
      drawStars();
    };

    // Initialize canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    initializeStars();
    
    // Start animation with initial timestamp
    lastTimeRef.current = performance.now();
    executeFrame(lastTimeRef.current);

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      focalLength = canvas.width * 2;
      initializeStars();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      animate = false;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .particles-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000000 url(https://i.imgur.com/r838U7u.jpg) center no-repeat;
          background-size: cover;
          image-rendering: pixelated;
          font-family: sans-serif;
          overflow: hidden;
          z-index: 0;
        }

        .particles-canvas {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .particles-container {
            image-rendering: auto; /* Better rendering on mobile */
          }
        }
      `}</style>

      <div className="particles-container">
        <canvas 
          ref={canvasRef}
          className="particles-canvas"
        />
      </div>
    </>
  );
};

export default ParticlesHome;