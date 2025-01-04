import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import VinylModel from './VinylModel';
import useScrollRotation from '../../hooks/useScrollRotation';

const VinylPlayer = () => {
  const rotation = useScrollRotation();

  return (
    <div 
      className="h-[600px] md:h-[800px] w-full"
      role="region"
      aria-label="3D Vinyl Record Player Visualization"
    >
      <Canvas 
        camera={{ position: [0, 3, 3], fov: 50 }}
        dpr={[1, 2]}
        shadows
        aria-hidden="true" // 3D content is decorative
      >
        <Suspense fallback={null}>
          <VinylModel rotation={rotation} />
          <Environment preset="sunset" />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
          <spotLight
            position={[-10, 10, -10]}
            angle={0.3}
            penumbra={1}
            intensity={1}
            castShadow
          />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default VinylPlayer;