// GOOD
"use client";

import { ReactNode } from "react";

// STYLES
import { SplitContainer, SplitStack, SplitColumn, SplitMobileOverlay } from "./SplitLayout.Styles";

export type MobilePosition = "above" | "below" | "background" | "overlay";

export interface SplitColumnContentProps {
  display?: "block" | "flex";

  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";

  justifyContent?:
    "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";

  alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
}

interface SplitLayoutProps {
  left: ReactNode;
  right: ReactNode;

  reverse?: boolean;

  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;

  alignItems?: "flex-start" | "center" | "flex-end" | "stretch";

  mobilePosition?: MobilePosition;

  mobileOverlay?: boolean;
  mobileOverlayColor?: string;
  mobileOverlayPaddingVertical?: number | string;
  mobileOverlayPaddingHorizontal?: number | string;
  mobileOverlayBorderRadius?: number | string;

  leftColumnProps?: SplitColumnContentProps;
  rightColumnProps?: SplitColumnContentProps;
}

export default function SplitLayout({
  left,
  right,
  reverse = false,
  maxWidth = "xl",
  alignItems = "stretch",
  mobilePosition = "below",

  mobileOverlay = false,
  mobileOverlayColor = "rgba(0,0,0,.55)",
  mobileOverlayPaddingVertical = 0,
  mobileOverlayPaddingHorizontal = 0,
  mobileOverlayBorderRadius = 0,

  leftColumnProps,
  rightColumnProps,
}: SplitLayoutProps) {
  const showMobileOverlay = mobilePosition === "background" && mobileOverlay;

  return (
    <SplitContainer maxWidth={maxWidth}>
      <SplitStack reverse={reverse} alignItems={alignItems} mobilePosition={mobilePosition}>
        {showMobileOverlay && (
          <SplitMobileOverlay
            overlayColor={mobileOverlayColor}
            overlayBorderRadius={mobileOverlayBorderRadius}
          />
        )}

        <SplitColumn
          side="left"
          mobilePosition={mobilePosition}
          mobilePaddingVertical={mobileOverlayPaddingVertical}
          mobilePaddingHorizontal={mobileOverlayPaddingHorizontal}
          sx={leftColumnProps}
        >
          {left}
        </SplitColumn>

        <SplitColumn side="right" mobilePosition={mobilePosition} sx={rightColumnProps}>
          {right}
        </SplitColumn>
      </SplitStack>
    </SplitContainer>
  );
}
