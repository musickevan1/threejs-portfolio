import { useRef } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';

interface VinylDiscProps {
  isPlaying: boolean;
  rotation: number;
}

const VinylDisc = ({ isPlaying, rotation }: VinylDiscProps) => {
  const vinylRef = useRef<Mesh>(null);
  const playbackRotation = useRef(0);

  useFrame((_, delta) => {
    if (vinylRef.current) {
      if (isPlaying) {
        playbackRotation.current += delta * 0.5;
      }
      // Combine scroll rotation with playback rotation
      vinylRef.current.rotation.y = rotation + playbackRotation.current;
    }
  });

  return (
    <group position={[0, 0.03, 0]} ref={vinylRef}>
      {/* Main vinyl disc */}
      <mesh>
        <cylinderGeometry args={[0.75, 0.75, 0.02, 32]} />
        <meshStandardMaterial color="#111111" metalness={0.4} roughness={0.6} />
      </mesh>

      {/* Label */}
      <mesh position={[0, 0.011, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.021, 32]} />
        <meshStandardMaterial color="#ffd700" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Grooves */}
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {Array.from({ length: 20 }).map((_, i) => (
          <mesh key={i} position={[0, 0, 0.011]}>
            <ringGeometry args={[0.2 + (i * 0.025), 0.21 + (i * 0.025), 64]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
          </mesh>
        ))}
      </group>
    </group>
  );
};

export default VinylDisc;