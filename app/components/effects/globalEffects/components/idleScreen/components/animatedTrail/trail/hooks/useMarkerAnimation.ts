import { RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface UseMarkerAnimationProps {
  groupRef: RefObject<THREE.Group | null>;
  markerRef: RefObject<THREE.Mesh | null>;
  haloRef: RefObject<THREE.Mesh | null>;
  materialRef: RefObject<THREE.MeshStandardMaterial | null>;
  progressRef: RefObject<number>;
  curve: THREE.CatmullRomCurve3;
}

export default function useMarkerAnimation({
  groupRef,
  markerRef,
  haloRef,
  materialRef,
  progressRef,
  curve,
}: UseMarkerAnimationProps) {
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.3) * 0.04;
    }

    if (materialRef.current) {
      materialRef.current.emissiveIntensity =
        4 + Math.sin(clock.elapsedTime * 3) * 1.5;
    }

    if (markerRef.current) {
      progressRef.current += 0.0008;

      if (progressRef.current > 1) {
        progressRef.current = 0;
      }

      markerRef.current.position.copy(curve.getPoint(progressRef.current));
    }

    if (haloRef.current && markerRef.current) {
      haloRef.current.position.copy(markerRef.current.position);

      const scale = 1 + Math.sin(clock.elapsedTime * 8) * 0.2;

      haloRef.current.scale.setScalar(scale);
    }
  });
}
