import { useState } from 'react';
import { useThree } from '@react-three/fiber';
import Base from './gramophone/Base';
import Platter from './gramophone/Platter';
import Tonearm from './gramophone/Tonearm';
import VinylDisc from './VinylDisc';

interface VinylModelProps {
  rotation: number;
}

const VinylModel = ({ rotation }: VinylModelProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { viewport } = useThree();
  const scale = Math.min(viewport.width * 0.15, 2.5);

  return (
    <group
      rotation={[-Math.PI / 8, 0, 0]} // Adjusted angle for better perspective
      position={[0, -0.5, 0]} // Lower position to center in view
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <Base scale={scale} isHovered={isHovered} />
      <group position={[0, 0.15, 0]}>
        <Platter isPlaying={isHovered} />
        <VinylDisc isPlaying={isHovered} rotation={rotation} />
        <Tonearm isPlaying={isHovered} />
      </group>
    </group>
  );
};

export default VinylModel;