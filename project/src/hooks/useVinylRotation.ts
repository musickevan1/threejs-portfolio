import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

interface UseVinylRotationProps {
  isPlaying: boolean;
  baseRotation: number;
}

const useVinylRotation = ({ isPlaying, baseRotation }: UseVinylRotationProps) => {
  const vinylRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (vinylRef.current) {
      if (isPlaying) {
        vinylRef.current.rotation.y += delta * 0.5;
      } else {
        vinylRef.current.rotation.y = baseRotation;
      }
    }
  });

  return vinylRef;
};

export default useVinylRotation;