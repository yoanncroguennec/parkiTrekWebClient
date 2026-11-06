import { RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Label {
  progress: number;
}

interface UseLabelAnimationProps {
  labelRefs: RefObject<(THREE.Group | null)[]>;
  labels: Label[];
  progressRef: RefObject<number>;
}

export default function useLabelAnimation({
  labelRefs,
  labels,
  progressRef,
}: UseLabelAnimationProps) {
  useFrame(() => {
    labelRefs.current.forEach((labelGroup, index) => {
      if (!labelGroup) return;

      const target = progressRef.current >= labels[index].progress ? 1 : 0;

      labelGroup.scale.lerp(new THREE.Vector3(target, target, target), 0.08);
    });
  });
}
