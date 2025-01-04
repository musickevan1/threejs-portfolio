import { Canvas } from '@react-three/fiber';
import { Scroll, ScrollControls } from '@react-three/drei';
import ScrollContent from './ScrollContent';
import ScrollScene from './ScrollScene';

const ScrollContainer = () => {
  return (
    <div className="h-screen">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true }}
      >
        <color attach="background" args={['#1a0f0f']} />
        <fog attach="fog" args={['#1a0f0f', 10, 20]} />
        
        <ScrollControls pages={3.3} damping={0.3}>
          {/* 3D Scene */}
          <ScrollScene />
          
          {/* HTML Content */}
          <Scroll html>
            <ScrollContent />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default ScrollContainer;