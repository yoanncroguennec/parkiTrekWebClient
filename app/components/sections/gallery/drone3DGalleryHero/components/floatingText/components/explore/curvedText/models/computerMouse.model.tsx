"use client";

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type { Group, Vector3Tuple } from "three";

const computerMouse = "/assets/models/objects/computer/computerMouse.glb";

interface Props {
  position: Vector3Tuple;
  scale: number;
}

export default function ComputerMouseModel({ position, scale }: Props) {
  const { scene } = useGLTF(computerMouse);

  const group = useRef<Group>(null);

  const baseY = position[1];

  useFrame((state) => {
    if (!group.current) return;

    const t = state.clock.elapsedTime;

    group.current.position.y = baseY + Math.sin(t * 1.2) * 0.6;
  });

  return (
    <group ref={group} position={position}>
      <primitive object={scene} scale={scale} rotation={[Math.PI / 9, 0, 0]} />
    </group>
  );
}

useGLTF.preload(computerMouse);
