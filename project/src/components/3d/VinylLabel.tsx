import { DoubleSide } from 'three';

const VinylLabel = () => {
  return (
    <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[0.2, 32]} />
      <meshStandardMaterial 
        color="#ffd700" 
        metalness={0.5} 
        roughness={0.5}
        side={DoubleSide}
      />
    </mesh>
  );
};

export default VinylLabel;