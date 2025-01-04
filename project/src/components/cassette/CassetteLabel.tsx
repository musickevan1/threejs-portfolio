import { useRef } from 'react';
import { Mesh } from 'three';
import { Text } from '@react-three/drei';
import { CassetteTheme } from '../../types';

interface CassetteLabelProps {
  theme: CassetteTheme;
  isPlaying: boolean;
}

const CassetteLabel = ({ theme, isPlaying }: CassetteLabelProps) => {
  const labelRef = useRef<Mesh>(null);

  return (
    <group position={[0, 0, 0.151]}>
      {/* Label background */}
      <mesh ref={labelRef} castShadow>
        <boxGeometry args={[2.8, 1.8, 0.01]} />
        <meshStandardMaterial 
          color={theme.label}
          roughness={0.2}
          metalness={0.8}
          envMapIntensity={1}
        />
      </mesh>

      {/* Label text */}
      <Text
        position={[0, 0, 0.01]}
        fontSize={0.2}
        color={theme.body}
        font="/fonts/VT323-Regular.ttf"
        anchorX="center"
        anchorY="middle"
      >
        {theme.text}
      </Text>

      {/* Decorative pattern based on theme */}
      <PatternOverlay pattern={theme.pattern} color={theme.accent} />
    </group>
  );
};

interface PatternOverlayProps {
  pattern: string;
  color: string;
}

const PatternOverlay = ({ pattern, color }: PatternOverlayProps) => {
  switch (pattern) {
    case 'waves':
      return (
        <group position={[0, -0.6, 0.01]}>
          {[...Array(3)].map((_, i) => (
            <mesh key={i} position={[0, i * 0.3, 0]}>
              <planeGeometry args={[2.6, 0.05]} />
              <meshStandardMaterial color={color} opacity={0.3} transparent />
            </mesh>
          ))}
        </group>
      );
    case 'grid':
      return (
        <group>
          {[...Array(16)].map((_, i) => (
            <mesh key={i} position={[(i % 4 - 1.5) * 0.6, Math.floor(i / 4 - 2) * 0.4, 0.01]}>
              <boxGeometry args={[0.05, 0.05, 0.01]} />
              <meshStandardMaterial color={color} opacity={0.3} transparent />
            </mesh>
          ))}
        </group>
      );
    // Add more patterns as needed
    default:
      return null;
  }
};

export default CassetteLabel;