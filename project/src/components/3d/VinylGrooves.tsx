import { useMemo } from 'react';
import { DoubleSide } from 'three';

const VinylGrooves = () => {
  const grooves = useMemo(() => 
    Array.from({ length: 15 }).map((_, i) => {
      const radius = 0.25 + (i * 0.03);
      return (
        <mesh key={i} position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[radius, radius + 0.01, 64]} />
          <meshStandardMaterial 
            color="#1a1a1a"
            metalness={0.4}
            roughness={0.6}
            side={DoubleSide}
          />
        </mesh>
      );
    }), 
  []);

  return <>{grooves}</>;
};

export default VinylGrooves;