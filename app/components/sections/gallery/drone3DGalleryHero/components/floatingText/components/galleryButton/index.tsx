"use client";

import { useState } from "react";
import { Text } from "@react-three/drei";

import {
  GALLERY_BUTTON_COLOR,
  GALLERY_BUTTON_FONT_SIZE,
  GALLERY_BUTTON_LABEL,
  GALLERY_BUTTON_LETTER_SPACING,
} from "../../constants/galleryButton.constants";

type GalleryButtonProps = {
  positionY: number;
  onClick: () => void;
};

export default function GalleryButton({ positionY, onClick }: GalleryButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <group
      position={[0, positionY, 0]}
      onClick={onClick}
      onPointerEnter={() => {
        setIsHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerLeave={() => {
        setIsHovered(false);
        document.body.style.cursor = "default";
      }}
    >
      {isHovered && (
        <Text
          position={[0.04, -0.04, -0.01]}
          anchorX="left"
          anchorY="middle"
          fontSize={GALLERY_BUTTON_FONT_SIZE}
          color="#f30606"
          letterSpacing={GALLERY_BUTTON_LETTER_SPACING}
        >
          {GALLERY_BUTTON_LABEL}
        </Text>
      )}

      <Text
        anchorX="left"
        anchorY="middle"
        fontSize={GALLERY_BUTTON_FONT_SIZE}
        color={GALLERY_BUTTON_COLOR}
        letterSpacing={GALLERY_BUTTON_LETTER_SPACING}
      >
        {GALLERY_BUTTON_LABEL}
      </Text>
    </group>
  );
}
