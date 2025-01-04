import { useSpring, animated } from '@react-spring/three';

interface HornProps {
  isPlaying: boolean;
}

const Horn = ({ isPlaying }: HornProps) => {
  const hornSpring = useSpring({
    rotation: isPlaying ? [0.1, 0, 0] : [0, 0, 0],
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.group position={[-0.8, 0.5, 0]} {...hornSpring}>
      {/* Horn neck */}
      <mesh castShadow>
        <cylinderGeometry args={[0.05, 0.08, 0.5, 16]} />
        <meshStandardMaterial color="#ffc107" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Horn bell */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <coneGeometry args={[0.4, 0.8, 32, 1, true]} />
        <meshStandardMaterial color="#ffc107" metalness={0.8} roughness={0.2} side={2} />
      </mesh>

      {/* Decorative rings */}
      {[0.2, 0.4, 0.6].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} castShadow>
          <torusGeometry args={[0.15 + (i * 0.08), 0.01, 16, 32]} />
          <meshStandardMaterial color="#3d2424" metalness={0.6} roughness={0.4} />
        </mesh>
      ))}
    </animated.group>
  );
};

export default Horn;