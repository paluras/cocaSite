import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './style.css';

const MouseFollower = ({ targetRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const animationProps = useSpring({
    to: { left: position.x, top: position.y, opacity: isVisible ? 1 : 0 },
    from: { left: 0, top: 0, opacity: 0 },
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!targetRef.current) {
        return;
      }

      const rect = targetRef.current.getBoundingClientRect();
      const isOverElement =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      setIsVisible(isOverElement);

      if (isOverElement) {
        setPosition({ x: event.clientX, y: event.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [targetRef]); // Depend on targetRef to re-attach event listener if it changes

  return (
    <animated.div
      className="mouse-circle"
      style={animationProps}
    >Click{" >"} sunet</animated.div>
  );
};

export default MouseFollower;
