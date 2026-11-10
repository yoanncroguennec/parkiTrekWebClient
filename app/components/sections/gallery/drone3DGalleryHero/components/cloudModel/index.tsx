"use client";

import Cloud from "./cloud";
// CONSTANTS
import { CLOUD_CONFIGS } from "./constants/cloudConfig.constants";

export default function CloudModel() {
  return (
    <>
      {CLOUD_CONFIGS.map((cloud) => (
        <Cloud
          key={cloud.position.join("-")}
          position={cloud.position}
          scale={cloud.scale}
          speed={cloud.speed}
        />
      ))}
    </>
  );
}
