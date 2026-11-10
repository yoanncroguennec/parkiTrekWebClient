"use client";

import { useMediaQuery, useTheme } from "@mui/material";

// COMPONENTS
import { AnimatedTrail, Compass, Content, Footer, Time, IdleHalo, IdleGrain } from "./components";

// HOOKS
import { useIdle, useIdleAnimation } from "./hooks";

// CONSTANTS
import { idleConfig } from "./constants";

// STYLES
import { IdleOverlay, IdleBackground } from "./IdleScreen.Styles";

// -----------------------------------------------------------------------------
// TYPES
// -----------------------------------------------------------------------------

interface IdleScreenProps {
  timeout?: number;
  initialVisible?: boolean;
}

// -----------------------------------------------------------------------------
// COMPONENT
// -----------------------------------------------------------------------------

export default function IdleScreen({
  timeout = idleConfig.timeout,
  initialVisible = false,
}: IdleScreenProps) {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const idle = useIdle(timeout);

  const { overlayRef, haloRef, grainRef } = useIdleAnimation(idle, initialVisible);

  return (
    <IdleOverlay ref={overlayRef}>
      <IdleBackground>
        {isDesktop && <AnimatedTrail />}

        <Time />

        {isDesktop && <Compass />}

        <IdleHalo ref={haloRef} />

        <Content />

        <Footer />

        <IdleGrain ref={grainRef} />
      </IdleBackground>
    </IdleOverlay>
  );
}
