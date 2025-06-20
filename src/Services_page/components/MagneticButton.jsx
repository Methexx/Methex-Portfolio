import React, { useEffect, useRef, useState } from 'react';

const MagneticButton = () => {
  const buttonRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef();
  const lerpingData = useRef({
    x: { current: 0, target: 0 },
    y: { current: 0, target: 0 }
  });

  const lerp = (current, target, factor) => 
    current * (1 - factor) + target * factor;

  const calculateDistance = (x1, y1, x2, y2) => 
    Math.hypot(x1 - x2, y1 - y2);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const triggerArea = 200;
    const interpolationFactor = 0.8;

    const animate = () => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceFromMouseToCenter = calculateDistance(
        mousePosition.x,
        mousePosition.y,
        centerX,
        centerY
      );

      let targetHolder = { x: 0, y: 0 };

      if (distanceFromMouseToCenter < triggerArea) {
        setIsHovered(true);
        targetHolder.x = (mousePosition.x - centerX) * 0.2;
        targetHolder.y = (mousePosition.y - centerY) * 0.2;
      } else {
        setIsHovered(false);
      }

      lerpingData.current.x.target = targetHolder.x;
      lerpingData.current.y.target = targetHolder.y;

      for (const item in lerpingData.current) {
        lerpingData.current[item].current = lerp(
          lerpingData.current[item].current,
          lerpingData.current[item].target,
          interpolationFactor
        );
      }

      button.style.transform = `translate(${lerpingData.current.x.current}px, ${lerpingData.current.y.current}px)`;
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
        
        .magnetic-button {
          padding: 15px 30px;
          border-radius: 50px;
          border: 2px solid black;
          background-color: transparent;
          font-weight: 400;
          font-family: "Poppins", sans-serif;
          font-size: 24px;
          cursor: pointer;
          transition: all 0.2s;
          color: black;
        }
        
        .magnetic-button.focused {
          color: white;
          background-color: black;
          transition: all 0.2s;
        }
      `}</style>
      
      <button
        ref={buttonRef}
        className={`magnetic-button ${isHovered ? 'focused' : ''}`}
      >
        Hello World
      </button>
    </div>
  );
};

export default MagneticButton;