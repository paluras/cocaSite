import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const RouteTransition = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    // Assuming you want a simple fade-in effect
    gsap.fromTo(ref.current, {
      autoAlpha: 0,
    }, {
      duration: 0.7,
      autoAlpha: 1,
      ease: 'none',
    });
  }, []); // Empty dependency array ensures this runs once on mount

  return <div ref={ref}>{children}</div>;
};

export default RouteTransition