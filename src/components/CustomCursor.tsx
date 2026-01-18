import { useEffect, useState, useCallback } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch devices (mobile/tablet)
  useEffect(() => {
    const checkTouchDevice = () => {
      const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isMobileWidth = window.innerWidth <= 1024; // iPad and below
      setIsTouchDevice(hasTouchScreen || isMobileWidth);
    };

    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY });
    });
    if (!isVisible) setIsVisible(true);
  }, [isVisible]);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], [data-cursor="spotlight"], .glass-card'
    );
    
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

  // Re-attach listeners when DOM changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], [data-cursor="spotlight"], .glass-card'
      );
      
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, [handleMouseEnter, handleMouseLeave]);

  // Don't render on touch devices
  if (!isVisible || isTouchDevice) return null;

  return (
    <>
      {/* Cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-100"
        style={{
          left: position.x - 6,
          top: position.y - 6,
          width: '12px',
          height: '12px',
          backgroundColor: 'hsl(240, 100%, 60%)',
          borderRadius: '50%',
          boxShadow: '0 0 10px hsla(240, 100%, 60%, 0.8), 0 0 20px hsla(240, 100%, 60%, 0.5)',
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
        }}
      />
      
      {/* Spotlight effect */}
      <div
        className="fixed pointer-events-none z-[9998] transition-opacity duration-300"
        style={{
          left: position.x - 200,
          top: position.y - 200,
          width: '400px',
          height: '400px',
          background: `radial-gradient(circle, hsla(240, 100%, 50%, ${isHovering ? 0.15 : 0.08}) 0%, transparent 70%)`,
          opacity: isHovering ? 1 : 0.6,
          mixBlendMode: 'screen',
        }}
      />
    </>
  );
};

export default CustomCursor;
