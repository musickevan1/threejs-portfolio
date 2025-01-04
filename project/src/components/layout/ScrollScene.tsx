import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import FloatingGeometry from '../3d/FloatingGeometry';
import * as THREE from 'three';

const ScrollScene = () => {
  const scroll = useScroll();
  const sceneRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (sceneRef.current) {
      // Transform scene based on scroll
      const scrollOffset = scroll.offset;
      sceneRef.current.rotation.y = scrollOffset * Math.PI * 2;
      sceneRef.current.position.z = scrollOffset * -10;
      
      // Scale effect
      const scale = 1 + Math.sin(scrollOffset * Math.PI) * 0.2;
      sceneRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={sceneRef}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <spotLight 
        position={[-10, 10, -10]} 
        angle={0.15} 
        penumbra={1} 
        intensity={0.5} 
        castShadow 
      />
      
      <FloatingGeometry />
    </group>
  );
};

export default ScrollScene;