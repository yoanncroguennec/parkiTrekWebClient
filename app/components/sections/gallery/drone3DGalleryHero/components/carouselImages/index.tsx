"use client";

import { useEffect, useRef, useState } from "react";

import { useMediaQuery, useTheme } from "@mui/material";
import { useFrame } from "@react-three/fiber";
import { Edges, Html, useTexture } from "@react-three/drei";

import * as THREE from "three";

// HOOKS
import useHeroImageScroll from "./hooks/useHeroImageScroll";

// CONSTANTS
import {
  DEFAULT_ROTATION_SPEED,
  DESKTOP_PLANE_SIZE,
  DESKTOP_RADIUS,
  MOBILE_PLANE_SIZE,
  MOBILE_RADIUS,
  ROTATION_DAMPING,
  TEXTURE_ANISOTROPY,
} from "./constants/heroImage.constants";

import { CAROUSEL_IMAGES, CAROUSEL_IMAGES_DESKTOP } from "./constants/heroImage.images";
import { getCircularPosition, getCircularRotation } from "./utils";
import type { HeroImageLayout } from "./types/heroImage.types";

export default function CarouselImages() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const groupRef = useRef<THREE.Group>(null);

  const rotationSpeed = useRef(DEFAULT_ROTATION_SPEED);
  const targetSpeed = useRef(DEFAULT_ROTATION_SPEED);
  const meshRefs = useRef<THREE.Mesh[]>([]);

  useHeroImageScroll({ targetSpeed });

  const imagePaths: string[] = isDesktop ? [...CAROUSEL_IMAGES_DESKTOP] : [...CAROUSEL_IMAGES];

  const textures = useTexture(imagePaths);

  const layout: HeroImageLayout = isDesktop
    ? {
        radius: DESKTOP_RADIUS,
        planeSize: DESKTOP_PLANE_SIZE,
      }
    : {
        radius: MOBILE_RADIUS,
        planeSize: MOBILE_PLANE_SIZE,
      };

  useEffect(() => {
    return () => {
      document.body.style.cursor = "default";
    };
  }, []);

  useEffect(() => {
    textures.forEach((texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = TEXTURE_ANISOTROPY;
    });
  }, [textures]);

  useFrame((_, delta) => {
    rotationSpeed.current = THREE.MathUtils.damp(
      rotationSpeed.current,
      targetSpeed.current,
      ROTATION_DAMPING,
      delta
    );

    if (groupRef.current && hoveredIndex === null && selectedIndex === null) {
      groupRef.current.rotation.y += rotationSpeed.current * delta;
    }

    meshRefs.current.forEach((mesh, index) => {
      if (!mesh) return;

      const isSelected = isDesktop && selectedIndex === index;
      const isHovered = isDesktop && hoveredIndex === index;

      const targetScale = isSelected ? 2.2 : isHovered ? 1.15 : 1;

      const s = THREE.MathUtils.damp(mesh.scale.x, targetScale, 8, delta);

      mesh.scale.setScalar(s);
    });
  });

  return (
    <group ref={groupRef}>
      {textures.map((texture, index) => {
        const angle = (index / textures.length) * Math.PI * 2;

        const position = getCircularPosition(angle, layout.radius);

        if (selectedIndex === index) {
          position[2] += 6; // avance l'image
        }
        return (
          <mesh
            renderOrder={selectedIndex === index ? 100 : 0}
            key={index}
            ref={(el) => {
              if (el) meshRefs.current[index] = el;
            }}
            onClick={
              isDesktop
                ? (e) => {
                    e.stopPropagation();
                    setSelectedIndex((prev) => (prev === index ? null : index));
                  }
                : undefined
            }
            onPointerOver={
              isDesktop
                ? (e) => {
                    e.stopPropagation();
                    setHoveredIndex(index);
                    document.body.style.cursor = "pointer";
                  }
                : undefined
            }
            onPointerOut={
              isDesktop
                ? () => {
                    setHoveredIndex(null);
                    setSelectedIndex(null);
                    document.body.style.cursor = "default";
                  }
                : undefined
            }
            position={position}

            // position={getCircularPosition(angle, layout.radius)}

            rotation={getCircularRotation(angle)}
          >
            <planeGeometry args={layout.planeSize} />

            <meshBasicMaterial map={texture} toneMapped={false} />

            {isDesktop && selectedIndex === null && hoveredIndex === index && (
              <Html
                position={[0, layout.planeSize[1] / 2 + 0.25, 0]}
                center
                distanceFactor={10}
                style={{
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                <div
                  style={{
                    background: "rgba(0,0,0,0.05)",
                    color: "#000",
                    borderRadius: "25px",
                    fontSize: "110px",
                    fontWeight: 600,
                    padding: "120px",
                    whiteSpace: "nowrap",
                    boxShadow: "0 8px 24px rgba(0,0,0,.35)",
                  }}
                >
                  Cliquez pour agrandir
                </div>
              </Html>
            )}
            {isDesktop && selectedIndex === index && <Edges color="black" linewidth={5} />}
          </mesh>
        );
      })}
    </group>
  );
}
