import { useRef } from 'react';
import { Group } from 'three';
import { useSpring, animated } from '@react-spring/three';

interface TonearmProps {
  isPlaying: boolean;
}

const Tonearm = ({ isPlaying }: TonearmProps) => {
  const tonearmRef = useRef<Group>(null);
  
  const { rotation } = useSpring({
    rotation: isPlaying ? [0, -Math.PI / 6, 0] : [0, -Math.PI / 3, 0],
    config: { tension: 100, friction: 20 }
  });

  return (
    <animated.group 
      position={[0.9, 0.15, 0]} 
      rotation={rotation}
      ref={tonearmRef}
    >
      {/* Base mount */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.1, 16]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.5} roughness={0.5} />
      </mesh>

      {/* Main arm */}
      <mesh position={[-0.4, 0.1, 0]} rotation={[0, 0, -Math.PI / 12]}>
        <cylinderGeometry args={[0.02, 0.02, 0.8]} rotation={[0, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.5} roughness={0.5} />
      </mesh>

      {/* Cartridge */}
      <mesh position={[-0.8, 0.08, 0]} rotation={[0, 0, Math.PI / 12]}>
        <coneGeometry args={[0.03, 0.08, 8]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.5} roughness={0.5} />
      </mesh>
    </animated.group>
  );
};

export default Tonearm;