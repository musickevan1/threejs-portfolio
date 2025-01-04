import { Canvas } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Environment, OrbitControls, ContactShadows } from '@react-three/drei';
import { getThemeForSection } from './styles/cassetteThemes';
import CassetteLabel from './CassetteLabel';

interface Cassette3DProps {
  isPlaying: boolean;
  currentSection: string;
}

const Cassette3D = ({ isPlaying, currentSection }: Cassette3DProps) => {
  const theme = getThemeForSection(currentSection);
  
  const { rotation } = useSpring({
    rotation: isPlaying ? [0, 0, 0] : [-0.2, 0, 0],
    config: { tension: 100, friction: 20 }
  });

  return (
    <Canvas 
      className="h-[400px]" 
      camera={{ position: [0, 0, 5], fov: 45 }}
      aria-hidden="true"
      role="presentation"
    >
      <color attach="background" args={['#1a0f0f']} />
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <animated.group rotation={rotation} scale={2}>
        {/* Main cassette body */}
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[3, 2, 0.3]} />
          <meshStandardMaterial 
            color={theme.body}
            roughness={0.3} 
            metalness={0.7}
            envMapIntensity={0.5}
          />
        </mesh>
        
        <CassetteLabel theme={theme} isPlaying={isPlaying} />
        
        {/* Spindles with tape */}
        {[[-0.5, 0, 0.16], [0.5, 0, 0.16]].map((pos, i) => (
          <group key={i} position={pos}>
            <mesh rotation={[0, 0, isPlaying ? Date.now() * 0.005 : 0]}>
              <cylinderGeometry args={[0.3, 0.3, 0.1, 32]} />
              <meshStandardMaterial color={theme.accent} roughness={0.3} metalness={0.7} />
            </mesh>
            <mesh rotation={[0, 0, isPlaying ? Date.now() * 0.005 : 0]}>
              <torusGeometry args={[0.25, 0.1, 16, 32]} />
              <meshStandardMaterial color={theme.body} roughness={0.4} metalness={0.6} />
            </mesh>
          </group>
        ))}
      </animated.group>

      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.4}
        scale={5}
        blur={2.4}
      />
      <OrbitControls 
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default Cassette3D;