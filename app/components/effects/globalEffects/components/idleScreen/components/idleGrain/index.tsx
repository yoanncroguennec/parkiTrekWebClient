"use client";

import { forwardRef } from "react";

import { IdleGrainOverlay } from "./IdleGrain.Styles";

const IdleGrain = forwardRef<HTMLDivElement>(function IdleGrain(_, ref) {
  return <IdleGrainOverlay ref={ref} aria-hidden="true" />;
});

export default IdleGrain;
