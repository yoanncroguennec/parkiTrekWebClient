"use client";

import { useRef } from "react";
// HOOKS
import { useCarousel3D, useCarouselMouse, useCarouselScroll } from "./hooks";
// STYLES
import {
  CarouselImage,
  BackgroundHalo,
  RightFogOverlay,
  CarouselContainer,
  CarouselCard,
  CarouselWheel,
} from "./CircularCarouselImages.Styles";

export interface Props {
  readonly images: readonly string[];
}

export interface RotationState {
  speed: number;
  currentRotation: number;
}

export default function CircularCarouselImages({ images }: Props) {
  // Refs
  const wheelRef = useRef<HTMLDivElement>(null);

  // Hooks
  const rotationState = useCarousel3D(wheelRef, images.length);
  useCarouselScroll(rotationState);
  useCarouselMouse(wheelRef);

  return (
    <CarouselContainer>
      {/* Brouillard droite */}
      <RightFogOverlay />

      {/* Halo lumineux */}
      <BackgroundHalo />

      <CarouselWheel ref={wheelRef}>
        {images.map((src, index) => (
          <CarouselCard key={index} className="circular-carousel-card">
            <CarouselImage src={src} alt={`Image ${index + 1}`} />
          </CarouselCard>
        ))}
      </CarouselWheel>
    </CarouselContainer>
  );
}
