"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";

// HELPERS
import { createSpiral } from "./helpers/createSpiral";

// HOOKS
import { useSpiralInteraction } from "./hooks/useSpiralInteraction";

// SHADERS
import { vertexShader, fragmentShader } from "./shaders/image.shaders";

// CONFIG
import { CONFIG } from "./constants/config";

const IMAGE_PATH = "/assets/imgs/treks/id/spiralHero/spiral";
const IMAGE_EXTENSION = ".jpg";

export default function Spiral() {
  const groupRef = useRef<THREE.Group>(null);

  const { gl } = useThree();

  const textures = useLoader(
    TextureLoader,
    Array.from(
      { length: CONFIG.totalImages },
      (_, index) => `${IMAGE_PATH}/img${index + 1}${IMAGE_EXTENSION}`,
    ),
  );

  const cameraPositionUniform = useMemo(
    () => ({
      value: new THREE.Vector3(),
    }),
    [],
  );

  useEffect(() => {
    const maxAnisotropy = gl.capabilities.getMaxAnisotropy();

    textures.forEach((texture) => {
      texture.minFilter = THREE.LinearMipmapLinearFilter;

      texture.anisotropy = maxAnisotropy;
      texture.needsUpdate = true;
    });
  }, [textures, gl]);

  const spiral = useMemo(
    () =>
      createSpiral({
        textures,
        cameraPositionUniform,
        vertexShader,
        fragmentShader,
      }),
    [textures, cameraPositionUniform],
  );

  useSpiralInteraction({
    groupRef,
    cameraPositionUniform,
  });

  useEffect(() => {
    return () => {
      spiral.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) {
          return;
        }

        object.geometry.dispose();

        if (Array.isArray(object.material)) {
          object.material.forEach((material) => material.dispose());
        } else {
          object.material.dispose();
        }
      });
    };
  }, [spiral]);

  return <primitive ref={groupRef} object={spiral} scale={[0.8, 0.8, 0.8]} />;
}
