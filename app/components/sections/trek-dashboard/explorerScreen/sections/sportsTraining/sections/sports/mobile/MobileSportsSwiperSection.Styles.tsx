import { Box, styled } from "@mui/material";

// ==================================================
// CONTAINER
// ==================================================

export const SwipeContainer = styled(Box)({
  width: "100%",

  display: "flex",

  flexDirection: "column",

  alignItems: "center",

  position: "relative",

  padding: "10px 16px 25px",

  "& .swipe-stack": {
    position: "relative",

    width: "100%",

    maxWidth: "380px",

    height: "560px",
  },
});

// ==================================================
// CARD
// ==================================================

export const SwipeCard = styled(Box)({
  position: "absolute",

  inset: 0,

  width: "100%",

  height: "100%",

  touchAction: "none",

  userSelect: "none",

  // ==================================================
  // MUI CARD
  // ==================================================

  "& .MuiCard-root": {
    width: "100%",

    maxWidth: "none",

    height: "100%",

    display: "flex",

    flexDirection: "column",

    overflow: "hidden",
  },

  // ==================================================
  // ACTION AREA
  // ==================================================

  "& .MuiCardActionArea-root": {
    height: "100%",

    display: "flex",

    flexDirection: "column",
  },

  // ==================================================
  // CONTENT
  // ==================================================

  "& .MuiCardContent-root": {
    flex: 1,

    overflow: "auto",
  },

  // ==================================================
  // MAIN
  // ==================================================

  "&.card-main": {
    zIndex: 3,

    cursor: "grab",

    "&:active": {
      cursor: "grabbing",
    },
  },

  // ==================================================
  // SECOND
  // ==================================================

  "&.card-second": {
    zIndex: 2,

    transform: "translateY(10px) scale(0.96)",

    opacity: 0.85,

    pointerEvents: "none",
  },

  // ==================================================
  // THIRD
  // ==================================================

  "&.card-third": {
    zIndex: 1,

    transform: "translateY(20px) scale(0.92)",

    opacity: 0.55,

    pointerEvents: "none",
  },
});

// ==================================================
// ACTIONS
// ==================================================

export const SwipeActions = styled(Box)({
  display: "flex",

  alignItems: "center",

  justifyContent: "center",

  gap: "12px",

  minHeight: "48px",

  marginTop: "20px",
});

// ==================================================
// BUTTON
// ==================================================

export const SwipeButton = styled("button")({
  width: "48px",

  height: "48px",

  display: "flex",

  alignItems: "center",

  justifyContent: "center",

  padding: 0,

  border: "1px solid rgba(0, 0, 0, 0.12)",

  borderRadius: "50%",

  background: "#fff",

  color: "#222",

  fontSize: "24px",

  cursor: "pointer",

  transition: "transform 0.2s ease, background 0.2s ease, opacity 0.2s ease",

  "&:hover:not(:disabled)": {
    transform: "scale(1.08)",

    background: "#f5f5f5",
  },

  "&:active:not(:disabled)": {
    transform: "scale(0.94)",
  },

  "&:disabled": {
    opacity: 0.3,

    cursor: "not-allowed",
  },
});

// ==================================================
// COUNTER
// ==================================================

export const SwipeCounter = styled(Box)({
  marginTop: "18px",

  fontSize: "13px",

  fontWeight: 600,

  opacity: 0.55,
});
