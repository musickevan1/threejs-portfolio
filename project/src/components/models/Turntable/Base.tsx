import { Vector3 } from 'three';

interface BaseProps {
  position?: Vector3 | [number, number, number];
}

const Base = ({ position = [0, 0, 0] }: BaseProps) => {
  return (
    <group position={position}>
      {/* Main base */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[2, 0.2, 2]} />
        <meshStandardMaterial color="#2d1a1a" roughness={0.7} metalness={0.3} />
      </mesh>
      
      {/* Decorative trim */}
      <mesh position={[0, 0.15, 0]}>
        <boxGeometry args={[2.1, 0.05, 2.1]} />
        <meshStandardMaterial color="#ffc107" roughness={0.4} metalness={0.6} />
      </mesh>
      
      {/* Control panel */}
      <mesh position={[0.8, 0.2, 0.8]}>
        <boxGeometry args={[0.4, 0.05, 0.4]} />
        <meshStandardMaterial color="#3d2424" roughness={0.5} metalness={0.2} />
      </mesh>
    </group>
  );
};

export default Base;