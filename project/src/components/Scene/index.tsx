import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Turntable from '../models/Turntable';
import CassetteWall from '../models/CassetteWall';
import Synthesizer from '../models/Synthesizer';
import AudioMixer from '../models/AudioMixer';

const Scene = () => {
  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Turntable position={[0, 0, 0]} />
      <CassetteWall position={[5, 0, 0]} />
      <Synthesizer position={[-5, 0, 0]} />
      <AudioMixer position={[0, 0, -5]} />
    </group>
  );
};

export default Scene;