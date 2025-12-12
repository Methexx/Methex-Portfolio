import React, { useEffect, useRef } from 'react';

const ParticlesHome = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const starsRef = useRef([]);
  const lastTimeRef = useRef(0);
  const isFirstFrameRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const c = canvas.getContext('2d');
    
    // Detect if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    
    const numStars = isMobile ? 8000 : 45000;
    let radius = '0.' + Math.floor(Math.random() * 9) + 1;
    let focalLength;
    let centerX, centerY;
    let animate = true;
    let isVisible = true;
    
    // Speed in pixels per second, normalized for screen size
    const getBaseSpeed = () => {
      const screenWidth = window.innerWidth;
      const normalizedSpeed = (screenWidth / 1920) * 100; // Reduced from 200 to 50 for slower movement
      return Math.max(normalizedSpeed, 25); // Reduced minimum from 100 to 25
    };

    const initializeStars = () => {
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
      
      starsRef.current = [];
      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const star = {
          x: x,
          y: y,
          z: Math.random() * canvas.width,
          o: '0.' + Math.floor(Math.random() * 99) + 1,
          originalX: x,
          originalY: y
        };
        starsRef.current.push(star);
      }
    };

    const moveStars = (deltaTime) => {
      // Use deltaTime directly for smooth motion even during scroll
      const deltaSeconds = deltaTime / 1000;
      const currentSpeed = getBaseSpeed();
      
      const stars = starsRef.current;
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        
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
      // Clear background
      c.fillStyle = "rgba(0,0,0,1)";
      c.fillRect(0, 0, canvas.width, canvas.height);
      
      const stars = starsRef.current;
      let pixelX, pixelY, pixelRadius;
      
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        
        const depthRatio = focalLength / star.z;
        
        pixelX = (star.x - centerX) * depthRatio + centerX;
        pixelY = (star.y - centerY) * depthRatio + centerY;
        pixelRadius = 0.15 * depthRatio;
        
        c.fillStyle = `rgba(209, 255, 255, ${star.o})`;
        c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
      }
    };

    const executeFrame = (currentTime) => {
      if (!animate || !isVisible) return;
      
      animationRef.current = requestAnimationFrame(executeFrame);
      
      // Skip first frame to initialize timing properly
      if (isFirstFrameRef.current) {
        isFirstFrameRef.current = false;
        lastTimeRef.current = currentTime;
        drawStars();
        return;
      }
      
      // Calculate delta time
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;
      
      // Only update if deltaTime is reasonable (prevents jumps on tab switch/scroll lag)
      if (deltaTime > 0 && deltaTime < 200) { 
        moveStars(deltaTime);
      }
      
      drawStars();
    };
    
    // Initialize canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Set focal length after canvas is properly sized
    focalLength = canvas.width * 2;
    
    // Set canvas rendering optimizations for sharp particles
    c.imageSmoothingEnabled = false;
    
    initializeStars();
    
    // Start animation
    isFirstFrameRef.current = true;
    animationRef.current = requestAnimationFrame(executeFrame);

    // Debounced resize handler to prevent excessive reinitialization
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;
        
        // Only resize if dimensions actually changed
        if (canvas.width !== newWidth || canvas.height !== newHeight) {
          canvas.width = newWidth;
          canvas.height = newHeight;
          focalLength = canvas.width * 2;
          initializeStars();
        }
      }, 150);
    };

    // Handle visibility changes to pause/resume animation
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        // Reset timing when tab becomes visible to prevent jumps
        isFirstFrameRef.current = true;
        animationRef.current = requestAnimationFrame(executeFrame);
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup function
    return () => {
      animate = false;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
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