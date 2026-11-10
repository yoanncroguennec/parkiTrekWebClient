export default function EffectOmbres() {
  return (
    <>
      <mesh position={[-18, 0, -0.3]} rotation={[0, 0.5, 0]}>
        <planeGeometry args={[16.9, 9.5]} />
        <meshBasicMaterial color="black" transparent opacity={0.2} />
      </mesh>

      <mesh position={[0, 0, -6]} rotation={[0, 0, 0]}>
        <planeGeometry args={[16.9, 9.5]} />
        <meshBasicMaterial color="black" transparent opacity={0.2} />
      </mesh>

      <mesh position={[18, 0, -0.3]} rotation={[0, -0.5, 0]}>
        <planeGeometry args={[16.9, 9.5]} />
        <meshBasicMaterial color="black" transparent opacity={0.2} />
      </mesh>
    </>
  );
}
