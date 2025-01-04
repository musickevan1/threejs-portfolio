import { useMemo } from 'react';
import { BinaryParticle } from './BinaryParticle';

export const BinaryRain = () => {
  const particles = useMemo(() => 
    Array.from({ length: 150 }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() * 30) - 15,
        (Math.random() - 0.5) * 5
      ] as [number, number, number],
      speed: 3 + Math.random() * 4,
      size: 0.4 + Math.random() * 0.3
    })), 
  []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 5, 5]} intensity={0.5} />
      {particles.map((particle, i) => (
        <BinaryParticle
          key={i}
          position={particle.position}
          speed={particle.speed}
          size={particle.size}
        />
      ))}
    </>
  );
};