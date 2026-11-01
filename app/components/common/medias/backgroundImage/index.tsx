"use client";

import { ReactNode, useRef } from "react";
// HOOKS
import { useBackgroundImageScroll } from "./hooks/useBackgroundImageScroll";
// STYLES
import {
  BackgroundImageStyles,
  ImageStyles,
  GlobalOverlayStyles,
  BottomGradientStyles,
  ContentStyles,
} from "./BackgroundImage.Styles";

interface BackgroundImageProps {
  src: string;
  alt?: string;
  priority?: boolean;
  children: ReactNode;
}

export default function BackgroundImage({
  src,
  alt = "",
  priority = false,
  children,
}: BackgroundImageProps) {
  // REFS
  const rootRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // GSAP
  useBackgroundImageScroll({
    rootRef,
    imageRef,
    overlayRef,
    gradientRef,
    contentRef,
  });

  return (
    <BackgroundImageStyles ref={rootRef}>
      {/* IMAGE */}
      <ImageStyles
        ref={imageRef}
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={100}
        sizes="100vw"
      />

      {/* OVERLAY */}
      <GlobalOverlayStyles ref={overlayRef} />

      {/* GRADIENT BAS */}
      <BottomGradientStyles ref={gradientRef} />

      {/* CONTENT */}
      <ContentStyles ref={contentRef} maxWidth="xl">
        {children}
      </ContentStyles>
    </BackgroundImageStyles>
  );
}
