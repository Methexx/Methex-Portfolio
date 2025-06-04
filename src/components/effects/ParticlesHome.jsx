import React, { useEffect, useRef } from 'react';

const ParticlesHome = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const c = canvas.getContext('2d');
    const numStars = 1900;
    let radius = '0.' + Math.floor(Math.random() * 9) + 1;
    let focalLength = canvas.width * 2;
    let centerX, centerY;
    let animate = true;

    const initializeStars = () => {
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
      
      starsRef.current = [];
      for (let i = 0; i < numStars; i++) {
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

    const moveStars = () => {
      for (let i = 0; i < numStars; i++) {
        const star = starsRef.current[i];
        
        // Normal z-movement
        star.z -= 7;
        
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
      
      for (let i = 0; i < numStars; i++) {
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

    const executeFrame = () => {
      if (animate) {
        animationRef.current = requestAnimationFrame(executeFrame);
      }
      moveStars();
      drawStars();
    };

    // Initialize canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    initializeStars();
    executeFrame();

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