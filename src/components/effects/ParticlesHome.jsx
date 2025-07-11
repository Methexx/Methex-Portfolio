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
    const numStars = 50000;
    let radius = '0.' + Math.floor(Math.random() * 9) + 1;
    let focalLength = canvas.width * 2;
    let centerX, centerY;
    let animate = true;
    
    // Detect if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    
    // Speed in pixels per second, normalized for screen size
    const getBaseSpeed = () => {
      const screenWidth = window.innerWidth;
      const normalizedSpeed = (screenWidth / 1920) * 50; // Reduced from 200 to 50 for slower movement
      return Math.max(normalizedSpeed, 25); // Reduced minimum from 100 to 25
    };

    const initializeStars = () => {
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
      
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
      // Cap deltaTime to prevent large jumps during scroll events
      const cappedDelta = Math.min(deltaTime, 33); // Cap at ~30fps worth of time
      const deltaSeconds = cappedDelta / 1000;
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
      
      // Only resize if dimensions actually changed (prevents unnecessary reinitialization)
      if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        focalLength = canvas.width * 2;
        initializeStars();
      }

      // Clear background
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
      if (!animate) return;
      
      animationRef.current = requestAnimationFrame(executeFrame);
      
      // Calculate delta time
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;
      
      // Skip first frame to avoid large delta, and cap maximum delta
      if (deltaTime > 0 && deltaTime < 100) { 
        moveStars(deltaTime);
      }
      
      drawStars();
    };

    // Initialize canvas size and context optimizations
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    initializeStars();
    
    // Start animation with initial timestamp
    lastTimeRef.current = performance.now();
    executeFrame(lastTimeRef.current);

    // Debounced resize handler to prevent excessive reinitialization
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        focalLength = canvas.width * 2;
        initializeStars();
      }, 100);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Cleanup function
    return () => {
      animate = false;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
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
          /* Improve GPU acceleration */
          will-change: transform;
          transform: translateZ(0);
        }

        .particles-canvas {
          width: 100%;
          height: 100%;
          display: block;
          /* GPU acceleration for canvas */
          transform: translateZ(0);
          will-change: transform;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .particles-container {
            image-rendering: auto;
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