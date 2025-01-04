import { useRef } from 'react';
import { Mesh, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import useAudioStore from '../../../store/audioStore';

interface PlatterProps {
  position?: Vector3 | [number, number, number];
  isPlaying?: boolean;
}

const Platter = ({ position = [0, 0.2, 0], isPlaying = false }: PlatterProps) => {
  const platterRef = useRef<Mesh>(null);
  
  useFrame((state, delta) => {
    if (platterRef.current && isPlaying) {
      platterRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group position={position}>
      {/* Main platter */}
      <mesh ref={platterRef}>
        <cylinderGeometry args={[0.8, 0.8, 0.1, 32]} />
        <meshStandardMaterial color="#3d2424" roughness={0.6} metalness={0.4} />
      </mesh>
      
      {/* Center spindle */}
      <mesh position={[0, 0.06, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.12, 16]} />
        <meshStandardMaterial color="#ffc107" roughness={0.3} metalness={0.7} />
      </mesh>
    </group>
  );
};

export default Platter;