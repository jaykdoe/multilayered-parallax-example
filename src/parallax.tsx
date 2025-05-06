// Parallax.tsx
import React, { useEffect, useState } from 'react';

interface ParallaxProps {
  moveFactor: number;
  children?: React.ReactNode;
}

const Parallax: React.FC<ParallaxProps> = ({ moveFactor, children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.pageX;
      const mouseY = e.pageY;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const percentX = ((0 - (mouseX / windowWidth) * moveFactor) - (moveFactor / 2) + moveFactor) / 2;
      const percentY = ((0 - (mouseY / windowHeight) * moveFactor) - (moveFactor / 2) + moveFactor) / 2;

      setPosition({ x: percentX, y: percentY });
    };

    // Attach the event listener to the whole document
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [moveFactor]);

  return (
    <div
      style={{
        position: 'fixed', // Stays behind the content
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        marginLeft: "-10%",
        marginTop: "-6%",
        width: '120%',
        height: '120%',
        zIndex: -1, // Ensure it's behind everything
        transform: `translate(${position.x}%, ${position.y}%)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default Parallax;
