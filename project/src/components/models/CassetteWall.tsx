import { Vector3 } from 'three';

interface CassetteWallProps {
  position: Vector3 | [number, number, number];
}

const CassetteWall = ({ position }: CassetteWallProps) => {
  return (
    <group position={position}>
      {/* Placeholder for cassette wall */}
      <mesh>
        <boxGeometry args={[3, 4, 0.5]} />
        <meshStandardMaterial color="#2d1a1a" />
      </mesh>
    </group>
  );
};

export default CassetteWall;