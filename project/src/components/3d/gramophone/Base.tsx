import { useSpring, animated } from '@react-spring/three';

interface BaseProps {
  scale: number;
  isHovered: boolean;
}

const Base = ({ scale, isHovered }: BaseProps) => {
  const baseSpring = useSpring({
    scale: isHovered ? [scale * 1.02, scale * 1.02, scale * 1.02] : [scale, scale, scale],
    config: { tension: 300, friction: 30 },
  });

  return (
    <animated.group {...baseSpring}>
      {/* Main base */}
      <mesh position={[0, 0, 0]} receiveShadow castShadow>
        <boxGeometry args={[2.2, 0.15, 2.2]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.4} roughness={0.6} />
      </mesh>

      {/* Gold trim */}
      <mesh position={[0, -0.1, 0]} receiveShadow>
        <boxGeometry args={[2.3, 0.05, 2.3]} />
        <meshStandardMaterial color="#ffd700" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Control panel decorations */}
      {[[-0.8, 0.08, 0.8], [0.8, 0.08, 0.8]].map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]} castShadow>
          <cylinderGeometry args={[0.1, 0.1, 0.02, 16]} />
          <meshStandardMaterial color="#ffd700" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}
    </animated.group>
  );
};

export default Base;