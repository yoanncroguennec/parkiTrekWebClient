"use client";

import type { RefObject } from "react";
import * as THREE from "three";

interface Props {
  geometry: THREE.TubeGeometry;
  meshRef: RefObject<THREE.Mesh | null>;
  materialRef: RefObject<THREE.MeshStandardMaterial | null>;
}

export default function TrailMesh({ geometry, meshRef, materialRef }: Props) {
  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial
        ref={materialRef}
        color="#8BC34A"
        emissive="#8BC34A"
        emissiveIntensity={5}
        toneMapped={false}
      />
    </mesh>
  );
}
