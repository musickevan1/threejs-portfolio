import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGeometry = () => {
  const mainRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useFrame(({ clock, mouse }) => {
    if (mainRef.current) {
      mainRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
      mainRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
      // Follow mouse movement slightly
      mainRef.current.position.x = (mouse.x * 0.5);
      mainRef.current.position.y = (mouse.y * 0.5);
    }
    
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={mainRef}>
      {/* Main floating geometry */}
      <Float
        speed={1.5}
        rotationIntensity={0.5}
        floatIntensity={0.5}
      >
        <Icosahedron args={[2, 1]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#ffc107"
            metalness={0.8}
            roughness={0.2}
            wireframe
          />
        </Icosahedron>
      </Float>

      {/* Smaller floating elements */}
      {Array.from({ length: 5 }).map((_, i) => (
        <Float
          key={i}
          speed={1 + Math.random()}
          rotationIntensity={0.3}
          floatIntensity={0.5}
        >
          <Icosahedron
            args={[0.3, 0]}
            position={[
              (Math.random() - 0.5) * 5,
              (Math.random() - 0.5) * 5,
              (Math.random() - 0.5) * 5
            ]}
          >
            <meshStandardMaterial
              color="#ff6f00"
              metalness={0.7}
              roughness={0.3}
            />
          </Icosahedron>
        </Float>
      ))}

      {/* Particle system */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={1000}
            array={new Float32Array(3000).map(() => (Math.random() - 0.5) * 10)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#ffc107"
          transparent
          opacity={0.4}
          sizeAttenuation
        />
      </points>
    </group>
  );
};

export default FloatingGeometry;