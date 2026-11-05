"use client";

import { RefObject, useEffect, useRef } from "react";

import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

import { CONFIG } from "../constants/config";

interface UseSpiralInteractionProps {
  groupRef: RefObject<THREE.Group | null>;
  cameraPositionUniform: {
    value: THREE.Vector3;
  };
}

export function useSpiralInteraction({
  groupRef,
  cameraPositionUniform,
}: UseSpiralInteractionProps) {
  const { camera } = useThree();

  const cameraRef = useRef<THREE.Camera | null>(null);

  const scrollY = useRef(0);
  const previousScrollY = useRef(0);

  const spinVelocity = useRef(0);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const smoothMouse = useRef({
    x: 0,
    y: 0,
  });

  /*
   * Store camera inside a ref
   */
  useEffect(() => {
    cameraRef.current = camera;

    return () => {
      cameraRef.current = null;
    };
  }, [camera]);

  /*
   * Scroll
   */
  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Mouse
   */
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth - 0.5) * 2;

      mouse.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  /*
   * Animation
   */
  useFrame((_, delta) => {
    const group = groupRef.current;
    const currentCamera = cameraRef.current;

    if (!group || !currentCamera) {
      return;
    }

    /*
     * Floating
     */
    const time = performance.now() * 0.00025;

    group.position.y = Math.sin(time) * 0.12;

    /*
     * Scroll progress
     */
    const progress = THREE.MathUtils.clamp(
      scrollY.current / (window.innerHeight * CONFIG.scrollMultiplier),
      0,
      1
    );

    /*
     * Camera
     */
    const targetCameraY = -(progress * CONFIG.revolutions * 2);

    currentCamera.position.y += (targetCameraY - currentCamera.position.y) * CONFIG.cameraSmoothing;

    cameraPositionUniform.value.copy(currentCamera.position);

    /*
     * Scroll velocity
     */
    const scrollDelta = scrollY.current - previousScrollY.current;

    previousScrollY.current = scrollY.current;

    spinVelocity.current *= CONFIG.rotationDecay;

    spinVelocity.current += scrollDelta * CONFIG.scrollRotationMultiplier;

    spinVelocity.current = THREE.MathUtils.clamp(spinVelocity.current, -0.25, 0.25);

    /*
     * Rotation
     */
    group.rotation.y += (CONFIG.baseRotationSpeed + spinVelocity.current) * delta * 60;

    /*
     * Mouse smoothing
     */
    smoothMouse.current.x += (mouse.current.x - smoothMouse.current.x) * 0.05;

    smoothMouse.current.y += (mouse.current.y - smoothMouse.current.y) * 0.05;

    /*
     * Parallax
     */
    group.rotation.x = smoothMouse.current.y * CONFIG.parallaxStrength;

    group.rotation.z = -smoothMouse.current.x * CONFIG.parallaxStrength * 0.3;
  });
}
