"use client";

import { useEffect, useMemo, useRef } from "react";
import { useTexture } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";
// TYPES
import type { BackgroundProps } from "./types/background.types";
// CONSTANTS
import {
  BACKGROUND_ANIMATION,
  BACKGROUND_POSITION,
  BACKGROUND_SIZE,
  BACKGROUND_TEXTURE,
} from "./constants/background.constants";

export default function Background({ show }: BackgroundProps) {
  const texture = useTexture(BACKGROUND_TEXTURE);

  const map = useMemo(() => {
    const cloned = texture.clone();

    cloned.colorSpace = THREE.SRGBColorSpace;
    cloned.needsUpdate = true;

    return cloned;
  }, [texture]);

  const material = useRef<THREE.MeshBasicMaterial>(null);

  useEffect(() => {
    if (!material.current) return;

    const animation = show ? BACKGROUND_ANIMATION.visible : BACKGROUND_ANIMATION.hidden;

    gsap.to(material.current, {
      ...animation,
      ease: BACKGROUND_ANIMATION.ease,
    });
  }, [show]);

  return (
    <mesh position={BACKGROUND_POSITION}>
      <planeGeometry args={BACKGROUND_SIZE} />

      <meshBasicMaterial ref={material} map={map} transparent opacity={0} toneMapped={false} />
    </mesh>
  );
}
