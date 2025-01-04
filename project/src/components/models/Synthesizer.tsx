import { Vector3 } from 'three';

interface SynthesizerProps {
  position: Vector3 | [number, number, number];
}

const Synthesizer = ({ position }: SynthesizerProps) => {
  return (
    <group position={position}>
      {/* Placeholder for synthesizer */}
      <mesh>
        <boxGeometry args={[4, 1, 2]} />
        <meshStandardMaterial color="#3d2424" />
      </mesh>
    </group>
  );
};

export default Synthesizer;