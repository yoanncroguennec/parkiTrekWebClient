import { IconButton, styled } from "@mui/material";

interface ArrowButtonContainerProps {
  isLeft: boolean;
}

export const ArrowButtonContainer = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "isLeft",
})<ArrowButtonContainerProps>(({ isLeft, theme }) => ({
  position: "absolute",

  ...(isLeft
    ? {
        left: "20px",
      }
    : {
        right: "20px",
      }),

  top: "60px",

  transform: "none",

  zIndex: 1000,

  width: "40px",
  height: "40px",

  bgcolor: "rgba(255,255,255,.85)",

  backdropFilter: "blur(20px)",

  border: "1px solid rgba(255,255,255,.4)",

  [theme.breakpoints.up("md")]: {
    ...(isLeft
      ? {
          left: "calc(50% - 40vw - 90px)",
        }
      : {
          right: "calc(50% - 40vw - 90px)",
        }),

    top: "50%",

    transform: "translateY(-50%)",

    width: "80px",
    height: "80px",
  },
}));
