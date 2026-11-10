"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useRef } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

// COMPONENTS
import { Explore, GalleryButton, Title } from "./components";

// CONSTANTS
import {
  BASE_Y,
  DESKTOP_LAYOUT,
  FLOAT_AMPLITUDE,
  FLOAT_SPEED,
  GALLERY_ROUTE,
  MOBILE_LAYOUT,
  ROTATION_AMPLITUDE,
  ROTATION_SPEED,
} from "./constants/floatingText.constants";

export default function FloatingText() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const locale = useLocale();
  const router = useRouter();

  const group = useRef<Group>(null);

  const layout = isDesktop ? DESKTOP_LAYOUT : MOBILE_LAYOUT;

  useFrame(({ clock }) => {
    if (!group.current) return;

    const elapsedTime = clock.elapsedTime;

    group.current.position.y = BASE_Y + Math.sin(elapsedTime * FLOAT_SPEED) * FLOAT_AMPLITUDE;

    group.current.rotation.z = Math.sin(elapsedTime * ROTATION_SPEED) * ROTATION_AMPLITUDE;
  });

  const handleGalleryClick = () => {
    router.push(GALLERY_ROUTE(locale));
  };

  return (
    <>
      <group ref={group} position={layout.groupPosition}>
        <Title layout={layout} />

        <GalleryButton positionY={layout.buttonY} onClick={handleGalleryClick} />
      </group>

      <Explore layout={layout} />
    </>
  );
}
