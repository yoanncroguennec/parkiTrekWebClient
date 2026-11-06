"use client";

import { forwardRef } from "react";

import { IdleHaloOverlay } from "./IdleHalo.Styles";

const IdleHalo = forwardRef<HTMLDivElement>(function IdleHalo(_, ref) {
  return <IdleHaloOverlay ref={ref} aria-hidden="true" />;
});

export default IdleHalo;
