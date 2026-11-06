"use client";

import { useIdleTimeout } from "@/app/hooks";
// HOOKS
import IdleScreen from "../index";

export default function IdleScreenController() {
  const { timeout } = useIdleTimeout();

  return <IdleScreen timeout={timeout} initialVisible={false} />;
}
