"use client";

import { Box } from "@mui/material";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";

// COMPONENTS
import { Spiral } from "./components";

export default function SpiralHero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Canvas
        dpr={[1, 2]}
        camera={{
          position: [0, 0, 40],
          fov: 22,
        }}
        gl={{
          antialias: true,
          alpha: true,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        style={{
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        {/* <BackgroundGlow /> */}

        <ambientLight intensity={0.18} />

        <directionalLight position={[-8, 5, -8]} intensity={1.2} />

        <Spiral />
      </Canvas>
    </Box>
  );
}
