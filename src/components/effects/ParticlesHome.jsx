import React, { useEffect, useRef } from 'react';

const ParticlesHome = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const starsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, isMoving: false });

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
          vx: 0,
          vy: 0,
          speed: Math.random() * 2 + 1
        };
        star.originalX = star.x;
        star.originalY = star.y;
        starsRef.current.push(star);
      }
    };

    const moveStars = () => {
      const mouse = mouseRef.current;
      
      for (let i = 0; i < numStars; i++) {
        const star = starsRef.current[i];
        
        // Normal z-movement
        star.z -= 7;
        
        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = star.originalX;
          star.y = star.originalY;
        }

        // Cursor interaction
        if (mouse.isMoving) {
          const dx = mouse.x - star.x;
          const dy = mouse.y - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150; // Interaction radius
          
          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            const angle = Math.atan2(dy, dx);
            
            // Repel stars away from cursor
            star.vx -= Math.cos(angle) * force * star.speed * 0.5;
            star.vy -= Math.sin(angle) * force * star.speed * 0.5;
            
            // Add some attraction to nearby stars for dynamic effect
            if (distance < 50) {
              star.vx += Math.cos(angle) * force * 0.2;
              star.vy += Math.sin(angle) * force * 0.2;
            }
          }
        }

        // Apply velocity with damping
        star.x += star.vx;
        star.y += star.vy;
        star.vx *= 0.95; // Damping
        star.vy *= 0.95;

        // Return to original position gradually
        const returnForce = 0.02;
        star.vx += (star.originalX - star.x) * returnForce;
        star.vy += (star.originalY - star.y) * returnForce;

        // Keep stars within bounds
        if (star.x < 0 || star.x > canvas.width) {
          star.x = star.originalX;
          star.vx = 0;
        }
        if (star.y < 0 || star.y > canvas.height) {
          star.y = star.originalY;
          star.vy = 0;
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

      // Draw cursor glow effect
      const mouse = mouseRef.current;
      if (mouse.isMoving) {
        const gradient = c.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 100);
        gradient.addColorStop(0, 'rgba(209, 255, 255, 0.1)');
        gradient.addColorStop(1, 'rgba(209, 255, 255, 0)');
        c.fillStyle = gradient;
        c.fillRect(0, 0, canvas.width, canvas.height);
      }

      c.fillStyle = `rgba(209, 255, 255, ${radius})`;
      
      for (let i = 0; i < numStars; i++) {
        const star = starsRef.current[i];
        
        pixelX = (star.x - centerX) * (focalLength / star.z);
        pixelX += centerX;
        pixelY = (star.y - centerY) * (focalLength / star.z);
        pixelY += centerY;
        pixelRadius = 0.3 * (focalLength / star.z);
        
        // Calculate distance from mouse for enhanced effects
        const mouse = mouseRef.current;
        const distanceFromMouse = Math.sqrt(
          Math.pow(pixelX - mouse.x, 2) + Math.pow(pixelY - mouse.y, 2)
        );
        
        // Enhanced brightness near cursor
        let starOpacity = parseFloat(star.o);
        if (mouse.isMoving && distanceFromMouse < 150) {
          const proximityFactor = 1 - (distanceFromMouse / 150);
          starOpacity = Math.min(1, starOpacity + proximityFactor * 0.5);
          pixelRadius *= (1 + proximityFactor * 0.5); // Larger size near cursor
        }
        
        c.fillStyle = `rgba(209, 255, 255, ${starOpacity})`;
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

    // Mouse event handlers
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isMoving: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.isMoving = false;
    };

    // Touch event handlers for mobile
    const handleTouchMove = (e) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      mouseRef.current = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
        isMoving: true
      };
    };

    const handleTouchEnd = () => {
      mouseRef.current.isMoving = false;
    };

    // Initialize canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    initializeStars();
    executeFrame();

    // Add event listeners
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd);

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
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
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
          cursor: none;
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