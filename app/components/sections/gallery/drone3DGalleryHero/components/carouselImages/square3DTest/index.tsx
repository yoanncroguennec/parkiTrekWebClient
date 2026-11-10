export default function Squares3DTest() {
  return (
    <>
      <mesh position={[-40, 10, -40]}>
        <boxGeometry args={[8, 8, 8]} />
        <meshNormalMaterial />
      </mesh>

      <mesh position={[0, -5, -60]}>
        <boxGeometry args={[12, 12, 12]} />
        <meshNormalMaterial />
      </mesh>

      <mesh position={[40, 15, -80]}>
        <boxGeometry args={[10, 10, 10]} />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}
