import { RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface UseTrailMotionProps {
  groupRef: RefObject<THREE.Group | null>;
}

export default function useTrailMotion({ groupRef }: UseTrailMotionProps) {
  useFrame(({ clock }) => {
    const g = groupRef.current;
    if (!g) return;

    g.rotation.z = Math.sin(clock.elapsedTime * 0.3) * 0.04;
  });
}
