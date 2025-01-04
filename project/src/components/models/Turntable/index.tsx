import { useState, useCallback } from 'react';
import { Vector3 } from 'three';
import { useThree } from '@react-three/fiber';
import Base from './Base';
import Platter from './Platter';
import Vinyl from './Vinyl';
import Tonearm from './Tonearm';
import useAudioStore from '../../../store/audioStore';

interface TurntableProps {
  position: Vector3 | [number, number, number];
}

const Turntable = ({ position }: TurntableProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { isMuted, toggleMute, playSound } = useAudioStore();
  const { camera } = useThree();

  const handlePlay = useCallback(() => {
    setIsPlaying(!isPlaying);
    if (!isPlaying && !isMuted) {
      playSound('vinyl-start');
    }
  }, [isPlaying, isMuted, playSound]);

  const handleFocus = useCallback(() => {
    camera.position.set(1, 2, 2);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <group 
      position={position} 
      onClick={handlePlay}
      onPointerEnter={handleFocus}
    >
      <Base />
      <Platter isPlaying={isPlaying} />
      <Vinyl isPlaying={isPlaying} />
      <Tonearm isPlaying={isPlaying} />
    </group>
  );
};

export default Turntable;