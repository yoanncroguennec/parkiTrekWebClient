import {
  Box,
  BoxProps,
  Stack,
  StackProps,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";
import { CircleFlag } from "react-circle-flags";

type Stack_Dropdown_Props = {
  code: string;
  locale: string;
};

type TypoLabelDropdownProps = {
  code: string;
  locale: string;
};

export const Root = styled(Stack)<StackProps>(() => ({
  position: "relative",
  width: "fit-content",
}));

export const Stack_Trigger = styled(Stack)<StackProps>(({ theme }) => ({
  alignItems: "center",
  animation: "glow 4s ease infinite",
  background: "rgba(255,255,255,.08)",
  backdropFilter: "blur(24px)",
  border: "1px solid rgba(255,255,255,.12)",
  borderRadius: "999px",
  boxShadow: "0 10px 40px rgba(0,0,0,.15)",
  cursor: "pointer",
  flexDirection: "row",
  gap: 5,
  overflow: "hidden",
  padding: "5px 15px",
  position: "relative",
  transition: "all .35s ease",
  "&:hover": {
    boxShadow: "0 20px 80px rgba(0,0,0,.25)",
    transform: "translateY(-4px)",
  },
  "@keyframes glow": {
    "0%": {
      filter: "brightness(1)",
    },
    "50%": {
      filter: "brightness(1.15)",
    },
    "100%": {
      filter: "brightness(1)",
    },
  },
  [theme.breakpoints.up("md")]: {},
}));

export const Styles_CircleFlag = styled(CircleFlag)(({ theme }) => ({
  flexShrink: 0,
  height: "30px",
  width: "30px",
  [theme.breakpoints.up("md")]: {
    height: "40px",
    width: "40px",
  },
}));

export const Typo_Label = styled(Typography)<TypographyProps>(() => ({
  // color: "#FFF",
  fontSize: "18px",
  fontWeight: "700",
  position: "relative",
  zIndex: 1,
}));

export const IconChevron = styled(Stack)<StackProps>(() => ({
  alignItems: "center",
  zIndex: 1,
}));

// DROPDOWN
export const Root_Dropdown = styled(Box)<BoxProps>(() => ({
  background: "rgba(20,20,20,.72)",
  backdropFilter: "blur(30px)",
  border: "1px solid rgba(255,255,255,.08)",
  borderRadius: "28px",
  boxShadow: `
                  0 30px 80px
                  rgba(0,0,0,.35)
                `,
  padding: "10px",
  position: "absolute",
  top: "calc(100% + 12px)",
  width: "100%",
  zIndex: 999,
}));

export const Stack_Dropdown = styled(Stack)<StackProps & Stack_Dropdown_Props>(
  ({ code, locale }) => ({
    alignItems: "center",
    background: locale === code ? "rgba(255,255,255,.08)" : "transparent",
    borderRadius: "20px",
    cursor: "pointer",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    padding: "15px",
    transition: "all .3s ease",
    "&:hover": {
      background: "rgba(255,255,255,.06)",
      transform: "translateX(8px)",
    },
  })
);

export const Typo_Label_Dropdown = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "code" && prop !== "locale",
})<TypographyProps & TypoLabelDropdownProps>(({ code, locale }) => ({
  color: "#FFF",
  fontWeight: locale === code ? 600 : 500,
}));
