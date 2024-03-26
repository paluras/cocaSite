import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const RouteTransition = ({ children }) => {
  const ref = useRef(null);
  const {pathname} = useLocation()

  useEffect(() => {
    // Assuming you want a simple fade-in effect
    gsap.fromTo(ref.current, {
      autoAlpha: 0,
    }, {
      duration: 1,
      autoAlpha: 1,
      ease: 'power1.out',
    });
  }, [pathname]); // Empty dependency array ensures this runs once on mount

  return <div ref={ref}>{children}</div>;
};

export default RouteTransition