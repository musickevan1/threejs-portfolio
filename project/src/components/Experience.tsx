import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import { EffectComposer, Noise, Vignette, ChromaticAberration } from '@react-three/postprocessing';
import Scene from './Scene';
import LoadingScreen from './LoadingScreen';

const Experience = () => {
  return (
    <>
      <LoadingScreen />
      <Canvas
        camera={{ position: [0, 2, 5], fov: 75 }}
        className="w-full h-screen bg-burgundy-950"
      >
        <Suspense fallback={null}>
          <Scene />
          <Environment preset="sunset" />
          <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
          />
          <EffectComposer>
            <Noise opacity={0.15} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
            <ChromaticAberration offset={[0.002, 0.002]} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </>
  );
};

export default Experience;