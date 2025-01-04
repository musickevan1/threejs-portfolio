import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Vector3 } from 'three';

interface TurntableProps {
  position: Vector3 | [number, number, number];
}

const Turntable = ({ position }: TurntableProps) => {
  const turntableRef = useRef<THREE.Group>(null);
  const vinylRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (vinylRef.current) {
      vinylRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group position={position} ref={turntableRef}>
      {/* Base */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[2, 0.2, 2]} />
        <meshStandardMaterial color="#2d1a1a" />
      </mesh>
      
      {/* Platter */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.1, 32]} />
        <meshStandardMaterial color="#3d2424" />
      </mesh>
      
      {/* Vinyl */}
      <mesh position={[0, 0.25, 0]} ref={vinylRef}>
        <cylinderGeometry args={[0.7, 0.7, 0.05, 32]} />
        <meshStandardMaterial color="#111111" />
      </mesh>
      
      {/* Tonearm */}
      <mesh position={[0.9, 0.3, 0]} rotation={[0, -Math.PI / 4, 0]}>
        <boxGeometry args={[0.8, 0.05, 0.05]} />
        <meshStandardMaterial color="#ffc107" />
      </mesh>
    </group>
  );
};

export default Turntable;