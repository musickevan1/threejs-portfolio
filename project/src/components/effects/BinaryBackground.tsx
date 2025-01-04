import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { BinaryRain } from './BinaryRain';

export const BinaryBackground = () => {
  return (
    <Canvas 
      camera={{ position: [0, 0, 10], fov: 50 }}
      gl={{ alpha: false, antialias: false }}
      dpr={[1, 1.5]}
    >
      <color attach="background" args={['#001a00']} />
      <fog attach="fog" args={['#001a00', 5, 15]} />
      <Suspense fallback={null}>
        <BinaryRain />
      </Suspense>
    </Canvas>
  );
};