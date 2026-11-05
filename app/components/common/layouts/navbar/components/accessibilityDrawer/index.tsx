import { Drawer, useMediaQuery, useTheme } from "@mui/material";
//
import AccessibilityDrawerContent from "./content";

interface AccessibilityDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function AccessibilityDrawer({ open, onClose }: AccessibilityDrawerProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            alignItems: "center",
            background: "rgba(255,255,255, 0.4)",
            backdropFilter: "blur(25px)",
            border: "1px solid rgba(255,255,255,.12)",
            borderBottomLeftRadius: "32px",
            borderBottomRightRadius: isDesktop ? 0 : "32px",
            borderTopLeftRadius: "32px",
            borderTopRightRadius: isDesktop ? "32px" : 0,
            bottom: isDesktop ? "15vh" : 0,
            boxShadow: "0 30px 80px rgba(0,0,0,.18)",
            display: "flex",
            justifyContent: "center",
            left: "auto",
            height: "auto",
            overflowX: "hidden",
            overflowY: "auto",
            right: isDesktop ? 24 : 0,
            scrollbarColor: "#008000 transparent",
            scrollbarWidth: "thin",
            top: isDesktop ? "15vh" : 0,
            width: isDesktop ? 430 : "80vw",
            "&::-webkit-scrollbar": {
              width: 2,
            },

            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: 999,
              background: "rgba(0,0,0,.18)",
            },

            "&::-webkit-scrollbar-thumb:hover": {
              background: "#16a34a",
            },
          },
        },
      }}
    >
      <AccessibilityDrawerContent />
    </Drawer>
  );
}
