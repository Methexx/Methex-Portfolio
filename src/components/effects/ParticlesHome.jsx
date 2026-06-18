import React, { useEffect, useRef } from 'react';

const ParticlesHome = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const starsRef = useRef([]);
  const lastTimeRef = useRef(0);
  const isFirstFrameRef = useRef(true);
  const lastScrollTimeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const c = canvas.getContext('2d');
    if (!c) return;
    
    // Detect if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    const opacityLevels = [0.2, 0.35, 0.5, 0.65, 0.8, 0.95];
    const opacityPalette = opacityLevels.map((opacity) => `rgba(209, 255, 255, ${opacity})`);
    let focalLength;
    let centerX, centerY;
    let animate = true;
    let isVisible = true;
    let lastRenderTime = 0;
    
    // Speed in pixels per second, normalized for screen size
    const getBaseSpeed = () => {
      const screenWidth = window.innerWidth;
      const normalizedSpeed = (screenWidth / 1920) * 100; // Reduced from 200 to 50 for slower movement
      return Math.max(normalizedSpeed, 25); // Reduced minimum from 100 to 25
    };

    const getStarCount = () => {
      const viewportArea = window.innerWidth * window.innerHeight;
      const density = isMobile ? 0.0018 : 0.0028;
      const minStars = isMobile ? 900 : 2400;
      const maxStars = isMobile ? 1700 : 5200;
      return Math.max(minStars, Math.min(maxStars, Math.floor(viewportArea * density)));
    };

    let numStars = getStarCount();

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
          color: opacityPalette[Math.floor(Math.random() * opacityPalette.length)],
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
        
        c.fillStyle = star.color;
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
      
      // Update with capped deltaTime to prevent jumps on lag but keep moving
      // Cap at 200ms to avoid huge jumps on tab switch, but use actual deltaTime
      // so speed remains constant even if framerate drops during scrolling
      const effectiveDelta = Math.min(deltaTime, 200); 
      const isScrolling = currentTime - lastScrollTimeRef.current < 120;
      const frameInterval = isScrolling ? 33 : 16;

      if (currentTime - lastRenderTime < frameInterval) {
        return;
      }

      lastRenderTime = currentTime;

      if (effectiveDelta > 0) {
        moveStars(effectiveDelta);
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
        const updatedStarCount = getStarCount();
        
        // On mobile, scrolling often changes innerHeight slightly (URL bar). 
        // Only re-initialize if width changes or height changes significantly.
        const widthChanged = canvas.width !== newWidth;
        const heightChangedSignificantly = Math.abs(canvas.height - newHeight) > 100;
        
        if (widthChanged || heightChangedSignificantly) {
          numStars = updatedStarCount;
          canvas.width = newWidth;
          canvas.height = newHeight;
          focalLength = canvas.width * 2;
          initializeStars();
        }
      }, 150);
    };

    const handleScroll = () => {
      lastScrollTimeRef.current = performance.now();
    };

    // Handle visibility changes to pause/resume animation
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        // Reset timing when tab becomes visible to prevent jumps
        isFirstFrameRef.current = true;
        lastRenderTime = 0;
        animationRef.current = requestAnimationFrame(executeFrame);
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup function
    return () => {
      animate = false;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
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
          z-index: -1;
          pointer-events: none;
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
