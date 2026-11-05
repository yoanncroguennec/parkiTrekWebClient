// GOOD
import { Box, Container, Stack, styled } from "@mui/material";

import type { MobilePosition } from "./index";

interface SplitStackProps {
  reverse?: boolean;
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch";
  mobilePosition?: MobilePosition;
}

interface SplitColumnProps {
  side: "left" | "right";
  mobilePosition?: MobilePosition;
  mobilePaddingVertical?: number | string;
  mobilePaddingHorizontal?: number | string;
}

interface SplitMobileOverlayProps {
  overlayColor?: string;
  overlayBorderRadius?: number | string;
}

export const SplitMobileOverlay = styled(Box, {
  shouldForwardProp: (prop) => prop !== "overlayColor" && prop !== "overlayBorderRadius",
})<SplitMobileOverlayProps>(
  ({ theme, overlayColor = "rgba(0,0,0,.55)", overlayBorderRadius = 0 }) => ({
    position: "absolute",
    inset: 0,

    width: "100%",
    height: "100%",

    backgroundColor: overlayColor,

    borderRadius: overlayBorderRadius,

    zIndex: 1,

    pointerEvents: "none",

    [theme.breakpoints.up("xl")]: {
      display: "none",
    },
  })
);

export const SplitContainer = styled(Container)(() => ({
  width: "100%",
}));

export const SplitStack = styled(Stack, {
  shouldForwardProp: (prop) =>
    prop !== "reverse" && prop !== "alignItems" && prop !== "mobilePosition",
})<SplitStackProps>(
  ({ theme, reverse = false, alignItems = "stretch", mobilePosition = "below" }) => ({
    position: "relative",

    width: "100%",

    alignItems,

    flexDirection: "column",

    gap: theme.spacing(6),

    /*
     * MOBILE
     */

    ...(mobilePosition === "background" && {
      minHeight: "100vh",
    }),

    ...(mobilePosition === "overlay" && {
      minHeight: "100vh",
    }),

    /*
     * DESKTOP
     */

    [theme.breakpoints.up("xl")]: {
      flexDirection: reverse ? "row-reverse" : "row",

      alignItems: "stretch",

      gap: theme.spacing(10),

      minHeight: "auto",
    },
  })
);

export const SplitColumn = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "side" &&
    prop !== "mobilePosition" &&
    prop !== "mobilePaddingVertical" &&
    prop !== "mobilePaddingHorizontal",
})<SplitColumnProps>(
  ({
    theme,
    side,
    mobilePosition = "below",
    mobilePaddingVertical = 0,
    mobilePaddingHorizontal = 0,
  }) => ({
    width: "100%",
    minWidth: 0,
    flex: "none",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    ...(mobilePosition === "above" && {
      order: side === "right" ? 1 : 2,
    }),

    ...(mobilePosition === "below" && {
      order: side === "left" ? 1 : 2,
    }),

    ...(mobilePosition === "background" &&
      side === "right" && {
        position: "absolute",
        inset: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }),

    ...(mobilePosition === "background" &&
      side === "left" && {
        position: "relative",
        zIndex: 2,
        width: "100%",

        paddingTop: mobilePaddingVertical,
        paddingBottom: mobilePaddingVertical,
        paddingLeft: mobilePaddingHorizontal,
        paddingRight: mobilePaddingHorizontal,

        boxSizing: "border-box",
      }),

    ...(mobilePosition === "overlay" &&
      side === "left" && {
        position: "relative",
        zIndex: 2,
      }),

    ...(mobilePosition === "overlay" &&
      side === "right" && {
        position: "absolute",
        inset: 0,
        zIndex: 1,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }),

    [theme.breakpoints.up("xl")]: {
      position: "relative",
      inset: "auto",
      zIndex: "auto",
      width: "auto",
      height: "auto",
      flex: "1 1 0",
      order: "initial",
      padding: 0,
      pointerEvents: "auto",
    },
  })
);
