import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './style.css'; // Your CSS file from before

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // react-spring hook to animate the position
  const props = useSpring({ 
    to: { left: position.x, top: position.y }, 
    from: { left: 0, top: 0 },
    config: { mass: 1, tension: 280, friction: 60 } // Adjust the animation config as needed
  });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  // Attach the event listener
  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <animated.div
      className="mouse-circle"
      style={props} // Apply animated properties
    ></animated.div>
  );
};

export default MouseFollower;
