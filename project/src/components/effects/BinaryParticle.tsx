import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

interface BinaryParticleProps {
  position: [number, number, number];
  speed: number;
  size: number;
}

export const BinaryParticle = ({ position, speed, size }: BinaryParticleProps) => {
  const ref = useRef<Group>(null);
  const value = Math.random() > 0.5 ? '1' : '0';
  
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.position.y -= speed * delta;
      
      if (ref.current.position.y < -15) {
        ref.current.position.y = 15;
        ref.current.position.x = (Math.random() - 0.5) * 20;
        ref.current.position.z = (Math.random() - 0.5) * 5;
      }
    }
  });

  return (
    <group ref={ref} position={position}>
      <mesh>
        <planeGeometry args={[size, size]} />
        <meshBasicMaterial
          color="#008F11"
          transparent
          opacity={0.6}
        >
          <canvasTexture
            attach="map"
            image={(() => {
              const canvas = document.createElement('canvas');
              canvas.width = 32;
              canvas.height = 32;
              const ctx = canvas.getContext('2d');
              if (ctx) {
                ctx.fillStyle = '#00CF11';
                ctx.font = '24px monospace';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(value, 16, 16);
              }
              return canvas;
            })()}
          />
        </meshBasicMaterial>
      </mesh>
    </group>
  );
};