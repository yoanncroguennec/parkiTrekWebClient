"use client";

import { useEffect, useRef } from "react";

import { useFrame, useThree } from "@react-three/fiber";

import gsap from "gsap";

import type { DroneCameraProps } from "./types/droneCamera.types";

import { CAMERA_DURATION, CAMERA_EASE } from "./constants/droneCamera.constants";

export default function DroneCamera({ onFinish }: DroneCameraProps) {
  const { camera } = useThree();

  const cameraRef = useRef(camera);

  const progress = useRef(0);

  useEffect(() => {
    cameraRef.current = camera;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    gsap.to(progress, {
      current: 1,
      duration: CAMERA_DURATION,
      ease: CAMERA_EASE,
      onComplete: () => {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";

        onFinish?.();
      },
    });

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [camera, onFinish]);

  useFrame(() => {
    const cam = cameraRef.current;

    const t = progress.current;

    const angle = Math.PI * (1 - t);
    const radius = 250 * (1 - t);

    cam.position.set(
      Math.cos(angle) * radius,
      60 * (1 - t) + Math.sin(t * Math.PI) * 15,
      Math.sin(angle) * radius + 40 * t
    );

    cam.lookAt(0, 0, 0);
  });

  return null;
}
