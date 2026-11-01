// GOOD
import { Button, Stack, styled, type StackProps } from "@mui/material";

type PrimaryButtonRootProps = {
  active?: boolean;

  background?: string;
  backgroundHover?: string;
  backdropFilter?: string;
  border?: string;
  boxShadow?: string;
};

export const PrimaryButtonGroup = styled(Stack)<StackProps>(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: 12,
  justifyContent: "flex-end",

  [theme.breakpoints.up("md")]: {
    gap: 20,
  },
}));

export const PrimaryButtonRoot = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== "active" &&
    prop !== "background" &&
    prop !== "backgroundHover" &&
    prop !== "backdropFilter" &&
    prop !== "border" &&
    prop !== "boxShadow",
})<PrimaryButtonRootProps>(
  ({
    active,
    background,
    backgroundHover,
    backdropFilter,
    border,
    boxShadow,
    theme,
  }) => ({
    alignItems: "center",

    border: border ?? "none",

    borderRadius: 999,

    boxShadow,

    color: active ? "#fff" : "#000",

    cursor: "pointer",

    display: "flex",

    gap: 8,

    minHeight: 44,

    margin: "10px 0",

    padding: "10px 18px",

    textTransform: "none",

    fontSize: "14px",

    fontWeight: 900,

    lineHeight: 1.2,
    textAlign: "left",
    whiteSpace: "pre-line",

    background:
      background ??
      (active
        ? "linear-gradient(135deg, #06B6D4, #8B5CF6)"
        : "rgba(255, 255, 255, 0.8)"),

    ...(backdropFilter && {
      backdropFilter,
      WebkitBackdropFilter: backdropFilter,
    }),

    ...(backgroundHover && {
      "&:hover": {
        background: backgroundHover,
      },
    }),

    [theme.breakpoints.up("md")]: {
      gap: 10,

      minHeight: 52,

      padding: "13px 24px",

      fontSize: "16px",
    },
  }),
);
