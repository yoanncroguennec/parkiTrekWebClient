// GOOD
import { Stack, StackProps, styled } from "@mui/material";

interface ListTreksPageContainerProps {
  isExpanded: boolean;
}

export const ListTreksPageContainer = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "isExpanded",
})<ListTreksPageContainerProps & StackProps>(({ isExpanded, theme }) => ({
  alignItems: "center",
  background: "#F4FDF7",
  height: "100vh",
  justifyContent: "center",
  overflow: "hidden",
  overflowY: "auto",
  padding: isExpanded ? 0 : "50px 0 0",
  position: "relative",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    padding: isExpanded ? 0 : "150px 0 0",
  },
}));
