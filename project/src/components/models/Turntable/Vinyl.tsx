import { useRef } from 'react';
import { Mesh, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';

interface VinylProps {
  position?: Vector3 | [number, number, number];
  isPlaying?: boolean;
}

const Vinyl = ({ position = [0, 0.25, 0], isPlaying = false }: VinylProps) => {
  const vinylRef = useRef<Mesh>(null);
  
  useFrame((state, delta) => {
    if (vinylRef.current && isPlaying) {
      vinylRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group position={position} ref={vinylRef}>
      {/* Main vinyl disc */}
      <mesh>
        <cylinderGeometry args={[0.7, 0.7, 0.02, 32]} />
        <meshStandardMaterial color="#111111" roughness={0.4} metalness={0.3} />
      </mesh>
      
      {/* Label */}
      <mesh position={[0, 0.011, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.021, 32]} />
        <meshStandardMaterial color="#ffd700" roughness={0.5} metalness={0.2} />
      </mesh>
      
      {/* Grooves */}
      {[...Array(10)].map((_, i) => (
        <mesh key={i} position={[0, 0.011, 0]}>
          <ringGeometry 
            args={[
              0.25 + (i * 0.05), 
              0.26 + (i * 0.05), 
              64
            ]} 
          />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
      ))}
    </group>
  );
};

export default Vinyl;