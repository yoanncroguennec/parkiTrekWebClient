"use client";

import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Trail from "./trail";

export default function AnimatedTrail() {
  return (
    <Canvas
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
      gl={{ antialias: true, alpha: true }}
    >
      <PerspectiveCamera makeDefault position={[10, 3, 10]} fov={75} />

      <ambientLight intensity={2} />

      <Trail />

      <EffectComposer>
        <Bloom intensity={2} luminanceThreshold={0} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
}
