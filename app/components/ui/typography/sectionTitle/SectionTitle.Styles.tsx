import { Typography, TypographyProps, styled } from "@mui/material";

export const StyledSectionTitle = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    position: "relative",

    fontSize: "1.3rem",
    fontWeight: 800,
    letterSpacing: "-0.03em",

    "&::after": {
      content: '""',
      display: "block",
      width: 42,
      height: 4,
      marginTop: theme.spacing(1),

      borderRadius: 999,

      background: "linear-gradient(90deg, #16a34a, #22c55e)",
    },
  }),
);
