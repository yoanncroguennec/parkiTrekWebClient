"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
// TYPES
import type { CloudProps } from "./types/cloudModel.types";
// CONSTANTS
import {
  CLOUD_FLOAT_AMPLITUDE,
  CLOUD_MODEL_PATH,
  CLOUD_ROTATION_SPEED,
} from "./constants/cloudModel.constants";

export default function Cloud({ position, scale, speed = 1 }: CloudProps) {
  const { scene } = useGLTF(CLOUD_MODEL_PATH);

  const cloudRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!cloudRef.current) return;

    cloudRef.current.position.y =
      position[1] + Math.sin(clock.elapsedTime * speed) * CLOUD_FLOAT_AMPLITUDE;

    cloudRef.current.rotation.y += CLOUD_ROTATION_SPEED;
  });

  return <primitive ref={cloudRef} object={scene.clone()} position={position} scale={scale} />;
}

useGLTF.preload(CLOUD_MODEL_PATH);
