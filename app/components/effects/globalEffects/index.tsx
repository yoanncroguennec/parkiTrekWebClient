"use client";

import { Fragment } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
// EFFECTS
import { NeonCursor } from "./components";
import IdleScreenController from "./components/idleScreen/controllers/IdleScreen.ctrl";

export default function GlobalEffects() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Fragment>
      <IdleScreenController />
      {isDesktop && <NeonCursor />}
    </Fragment>
  );
}
