"use client";

import { PropsWithChildren } from "react";
// STYLES
import { StyledCard } from "./SettingsCard.Styles";

export default function SettingsCard({ children }: PropsWithChildren) {
  return <StyledCard>{children}</StyledCard>;
}
