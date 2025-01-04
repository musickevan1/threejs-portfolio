import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import * as THREE from 'three';

const InitialLoadAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            if (containerRef.current) {
              containerRef.current.style.display = 'none';
            }
          }
        });
      }
    });

    tl.fromTo('.load-title', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 bg-matrix-950 flex items-center justify-center"
    >
      <div className="relative w-full h-full">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          
          <AnimatedGeometry />
        </Canvas>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="load-title text-4xl font-display font-bold text-matrix-500 opacity-0">
            Welcome
          </h1>
        </div>
      </div>
    </div>
  );
};

const AnimatedGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (!meshRef.current) return;

    gsap.fromTo(
      meshRef.current.rotation,
      { y: -Math.PI },
      { 
        y: 0,
        duration: 2,
        ease: 'power3.out'
      }
    );

    gsap.fromTo(
      meshRef.current.position,
      { z: -10 },
      {
        z: 0,
        duration: 2,
        ease: 'power3.out'
      }
    );
  }, []);

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial 
        color="#008F11"
        wireframe
        transparent
        opacity={0.5}
      />
    </mesh>
  );
};

export default InitialLoadAnimation;