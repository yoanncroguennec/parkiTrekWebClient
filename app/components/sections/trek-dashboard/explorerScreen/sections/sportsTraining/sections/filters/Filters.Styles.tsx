import { Stack, Typography, styled } from "@mui/material";

export const FiltersContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  minWidth: 0,
  boxSizing: "border-box",
  flexDirection: "column",
  alignItems: "stretch",
  gap: theme.spacing(2),

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing(3),
  },
}));

export const FiltersHeading = styled(Stack)(({ theme }) => ({
  minWidth: 0,
  alignItems: "center",
  textAlign: "center",
  gap: theme.spacing(0.5),

  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
    textAlign: "left",
    flexShrink: 0,
  },
}));

export const FilterDropdownContainer = styled(Stack)(() => ({
  alignItems: "center",
  width: "100%",
}));

export const FiltersEyebrow = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "11px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.12em",

  [theme.breakpoints.up("md")]: {
    fontSize: "14px",
  },
}));

export const FiltersTitle = styled(Typography)(({ theme }) => ({
  fontSize: "26px",
  fontWeight: 700,
  lineHeight: 1.1,
  letterSpacing: "1px",

  [theme.breakpoints.up("md")]: {
    fontSize: "34px",
    letterSpacing: "2px",
  },
}));

export const FilterButtons = styled(Stack)(({ theme }) => ({
  minWidth: 0,
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  paddingInline: theme.spacing(2),
}));

export const FilterHint = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
  flexShrink: 0,
}));

export const FilterHintText = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: 700,
  whiteSpace: "nowrap",
}));
