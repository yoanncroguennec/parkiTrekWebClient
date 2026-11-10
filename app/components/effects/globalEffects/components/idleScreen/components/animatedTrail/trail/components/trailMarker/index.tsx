"use client";

import type { RefObject } from "react";
import * as THREE from "three";

interface Props {
  markerRef: RefObject<THREE.Mesh | null>;
  haloRef: RefObject<THREE.Mesh | null>;
}

export default function TrailMarker({ markerRef, haloRef }: Props) {
  return (
    <>
      <mesh ref={markerRef}>
        <sphereGeometry args={[0.14, 32, 32]} />

        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </mesh>

      <mesh ref={haloRef}>
        <sphereGeometry args={[0.28, 32, 32]} />

        <meshBasicMaterial color="#8BC34A" transparent opacity={0.25} toneMapped={false} />
      </mesh>
    </>
  );
}
