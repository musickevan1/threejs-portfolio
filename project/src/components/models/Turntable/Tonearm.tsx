import { useRef } from 'react';
import { Group, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';

interface TonearmProps {
  position?: Vector3 | [number, number, number];
  isPlaying?: boolean;
}

const Tonearm = ({ position = [0.9, 0.3, 0], isPlaying = false }: TonearmProps) => {
  const tonearmRef = useRef<Group>(null);
  
  useFrame((state, delta) => {
    if (tonearmRef.current && !isPlaying) {
      // Return to rest position when not playing
      tonearmRef.current.rotation.y = -Math.PI / 4;
    }
  });

  return (
    <group position={position} ref={tonearmRef} rotation={[0, isPlaying ? 0 : -Math.PI / 4, 0]}>
      {/* Base */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.1, 16]} />
        <meshStandardMaterial color="#2d1a1a" roughness={0.6} metalness={0.4} />
      </mesh>
      
      {/* Arm */}
      <mesh position={[0.4, 0, 0]}>
        <boxGeometry args={[0.8, 0.05, 0.05]} />
        <meshStandardMaterial color="#ffc107" roughness={0.3} metalness={0.7} />
      </mesh>
      
      {/* Cartridge */}
      <mesh position={[0.8, -0.02, 0]}>
        <boxGeometry args={[0.1, 0.03, 0.08]} />
        <meshStandardMaterial color="#3d2424" roughness={0.5} metalness={0.5} />
      </mesh>
    </group>
  );
};

export default Tonearm;