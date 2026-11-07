// GOOD
"use client";

import { forwardRef, type ReactNode, useImperativeHandle, useRef } from "react";

// EFFECTS
import { Spotlight } from "@/app/components/effects";
// STYLES
import {
  MediaContainer,
  BackgroundVideo,
  Overlay,
} from "./VideoMediaBackground.Styles";

interface VideoMediaBackgroundProps {
  desktopVideo: string;
  mobileVideo: string;
  isDesktop: boolean;
  overlayBackground?: string;
  children?: ReactNode;
}

const VideoMediaBackground = forwardRef<
  HTMLDivElement,
  VideoMediaBackgroundProps
>(
  (
    { desktopVideo, mobileVideo, isDesktop, overlayBackground, children },
    forwardedRef,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(forwardedRef, () => containerRef.current!);

    return (
      <MediaContainer ref={containerRef}>
        <BackgroundVideo
          key={isDesktop ? "desktop" : "mobile"}
          autoPlay
          muted
          loop
          playsInline
          src={isDesktop ? desktopVideo : mobileVideo}
        />

        <Overlay overlayBackground={overlayBackground} />

        {isDesktop && <Spotlight containerRef={containerRef} />}

        {children}
      </MediaContainer>
    );
  },
);

VideoMediaBackground.displayName = "VideoMediaBackground";

export default VideoMediaBackground;
