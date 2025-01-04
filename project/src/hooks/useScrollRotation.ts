import { useState, useEffect } from 'react';

const useScrollRotation = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const rotationSpeed = 0.005;
      setRotation(scrollPosition * rotationSpeed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return rotation;
};

export default useScrollRotation;