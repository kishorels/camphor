import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  useEffect(() => {
    if (isMobile) return;
    
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let followerX = 0;
    let followerY = 0;
    
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    const animate = () => {
      // Very smooth LERP (Linear Interpolation)
      // Small cursor follows almost instantly but with slight smoothing
      currentX += (mouseX - currentX) * 0.4;
      currentY += (mouseY - currentY) * 0.4;
      
      // Large follower has more inertia (slower)
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      
      if (cursor) {
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      
      if (follower) {
        follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      }
      
      requestAnimationFrame(animate);
    };
    
    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    
    const onMouseOver = (e) => {
      const target = e.target;
      if (target.closest('a, button, [data-cursor-hover], input, select, textarea')) {
        setIsHovering(true);
      }
    };
    
    const onMouseOut = (e) => {
      const target = e.target;
      if (target.closest('a, button, [data-cursor-hover], input, select, textarea')) {
        setIsHovering(false);
      }
    };
    
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    
    requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, [isMobile]);
  
  if (isMobile) return null;
  
  return (
    <div className="cursor-wrapper">
      <div 
        ref={cursorRef}
        className={`custom-cursor-dot ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
      />
      <div 
        ref={followerRef}
        className={`custom-cursor-follower ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
      />
    </div>
  );
}
