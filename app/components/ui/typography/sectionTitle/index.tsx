"use client";

import { PropsWithChildren } from "react";
// STYLES
import { StyledSectionTitle } from "./SectionTitle.Styles";

export default function SectionTitle({ children }: PropsWithChildren) {
  return <StyledSectionTitle variant="h6">{children}</StyledSectionTitle>;
}
