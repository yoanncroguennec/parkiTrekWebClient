import { Box, IconButton, Select, styled } from "@mui/material";

/* ============================================================
   OVERLAY
============================================================ */

export const InfoOverlay = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ open, theme }) => ({
  position: "absolute",

  left: 0,
  right: 0,
  bottom: 0,

  zIndex: 40,

  height: 300,

  padding: "32px 40px",

  overflow: "hidden",

  borderRadius: "32px 32px 0 0",

  background: `
      radial-gradient(
        circle at top left,
        rgba(180,255,57,.12),
        transparent 35%
      ),
      radial-gradient(
        circle at bottom right,
        rgba(34,211,238,.08),
        transparent 45%
      ),
      rgba(15,15,15,.55)
    `,

  backdropFilter: "blur(50px)",

  WebkitBackdropFilter: "blur(18px)",

  borderTop: "1px solid rgba(255,255,255,.12)",

  boxShadow: "0 -30px 100px rgba(0,0,0,.35)",

  transform: open ? "translateY(0)" : "translateY(100%)",

  opacity: open ? 1 : 0,

  pointerEvents: open ? "auto" : "none",

  transition: "transform .7s cubic-bezier(.22,1,.36,1), " + "opacity .4s ease",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

/* ============================================================
   HEADER
============================================================ */

export const InfoOverlayHeader = styled(Box)({
  position: "absolute",

  top: 32,
  left: 40,
  right: 40,

  height: 44,

  display: "flex",

  justifyContent: "flex-end",
  alignItems: "flex-start",

  zIndex: 10,

  pointerEvents: "none",
});

/* ============================================================
   CLOSE
============================================================ */
export const InfoOverlayClose = styled(IconButton)({
  position: "absolute",

  top: 0,
  right: 0,

  width: 44,
  height: 44,

  color: "rgba(255,255,255,.7)",

  border: "1px solid rgba(255,255,255,.1)",

  background: "rgba(255,255,255,.05)",

  backdropFilter: "blur(12px)",

  WebkitBackdropFilter: "blur(12px)",

  pointerEvents: "auto",

  transition:
    "background .3s ease, " + "color .3s ease, " + "transform .4s cubic-bezier(.22,1,.36,1)",

  "&:hover": {
    color: "#fff",

    background: "rgba(255,255,255,.1)",

    transform: "rotate(90deg) scale(1.05)",
  },

  "& svg": {
    fontSize: 21,
  },
});

/* ============================================================
   BODY
============================================================ */

export const InfoOverlayBody = styled(Box)({
  display: "flex",

  flexDirection: "row",

  alignItems: "stretch",

  gap: 28,

  width: "100%",

  height: "100%",

  minWidth: 0,

  minHeight: 0,

  paddingRight: 50,
});

/* ============================================================
   LEFT
============================================================ */

export const InfoOverlayLeft = styled(Box)({
  display: "flex",

  flexDirection: "column",

  justifyContent: "center",

  gap: 24,

  width: 390,

  flexShrink: 0,

  paddingTop: 4,
});

/* ============================================================
   CONTROLS
============================================================ */

export const InfoOverlayControls = styled(Box)({
  display: "flex",

  alignItems: "center",

  gap: 10,

  flexWrap: "wrap",
});

/* ============================================================
   SPEED
============================================================ */

export const SpeedSelect = styled(Select)({
  minWidth: 80,

  height: 40,

  color: "#fff",

  borderRadius: "999px",

  backdropFilter: "blur(20px)",

  WebkitBackdropFilter: "blur(20px)",

  background: "rgba(255,255,255,.05)",

  ".MuiOutlinedInput-notchedOutline": {
    border: "1px solid rgba(255,255,255,.08)",
  },

  ".MuiSvgIcon-root": {
    color: "#fff",
  },

  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "1px solid rgba(180,255,57,.35)",
  },

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "1px solid rgba(180,255,57,.5)",
  },
});

/* ============================================================
   STATS
============================================================ */

export const StatsGrid = styled(Box)({
  display: "grid",

  gridTemplateColumns: "repeat(3, 1fr)",

  gap: 12,

  width: "100%",
});

/* ============================================================
   GLOW
============================================================ */

export const PulseGlow = styled(Box)({
  position: "absolute",

  right: 80,
  bottom: 90,

  width: 32,
  height: 32,

  borderRadius: "50%",

  background: "rgba(180,255,57,.35)",

  filter: "blur(12px)",

  pointerEvents: "none",
});
