"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
// COMPONENTS
import { Background, CarouselImages, CloudModel, DroneCamera, FloatingText } from "./components";
// CONSTANTS
import {
  AMBIENT_LIGHT_INTENSITY,
  DIRECTIONAL_LIGHT_INTENSITY,
  DIRECTIONAL_LIGHT_POSITION,
  HERO_CAMERA,
} from "./constants/camera.constants";
// STYLES
import { CanvasContainer } from "./Drone3DGalleryHeroSection.Styles";

export default function Drone3DGalleryHeroSection() {
  const [showBackground, setShowBackground] = useState<boolean>(false);

  return (
    <CanvasContainer>
      <Canvas camera={HERO_CAMERA} shadows>
        {/* GLOBAL LIGHTING */}
        <ambientLight intensity={AMBIENT_LIGHT_INTENSITY} />
        <directionalLight
          castShadow
          intensity={DIRECTIONAL_LIGHT_INTENSITY}
          position={DIRECTIONAL_LIGHT_POSITION}
        />

        {/* BG COLOR */}
        {/* <color attach="background" args={["#F00"]} /> */}

        {/* SCENE */}
        <CloudModel />
        <FloatingText />
        <CarouselImages />
        <Background show={showBackground} />

        {/* CAMERA ANIMATION */}
        <DroneCamera onFinish={() => setShowBackground(true)} />
      </Canvas>
    </CanvasContainer>
  );
}
