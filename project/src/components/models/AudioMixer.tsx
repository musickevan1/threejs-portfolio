import { Vector3 } from 'three';

interface AudioMixerProps {
  position: Vector3 | [number, number, number];
}

const AudioMixer = ({ position }: AudioMixerProps) => {
  return (
    <group position={position}>
      {/* Placeholder for audio mixer */}
      <mesh>
        <boxGeometry args={[3, 0.5, 2]} />
        <meshStandardMaterial color="#2d1a1a" />
      </mesh>
    </group>
  );
};

export default AudioMixer;