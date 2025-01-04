import { useRef } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';

interface PlatterProps {
  isPlaying: boolean;
}

const Platter = ({ isPlaying }: PlatterProps) => {
  const platterRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (platterRef.current && isPlaying) {
      platterRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Main platter */}
      <mesh position={[0, 0, 0]} ref={platterRef} castShadow>
        <cylinderGeometry args={[0.8, 0.8, 0.05, 32]} />
        <meshStandardMaterial color="#2a2a3a" metalness={0.4} roughness={0.6} />
      </mesh>

      {/* Platter rim */}
      <mesh position={[0, 0.025, 0]} castShadow>
        <torusGeometry args={[0.8, 0.04, 16, 32]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.4} roughness={0.6} />
      </mesh>
    </group>
  );
};

export default Platter;