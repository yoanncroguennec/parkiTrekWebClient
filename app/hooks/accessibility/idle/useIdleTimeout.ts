"use client";

import { useState } from "react";

export const DEFAULT_TIMEOUT = 5 * 60 * 1000; // 5 minutes

export function useIdleTimeout() {
  const [timeout, setTimeoutValue] = useState<number>(() => {
    if (typeof window === "undefined") {
      return DEFAULT_TIMEOUT;
    }

    const value = localStorage.getItem("idle-timeout");

    if (value === null) {
      return DEFAULT_TIMEOUT;
    }

    const parsed = Number(value);

    return Number.isNaN(parsed) ? DEFAULT_TIMEOUT : parsed;
  });

  const setTimeout = (value: number) => {
    localStorage.setItem("idle-timeout", value.toString());
    setTimeoutValue(value);
  };

  return {
    timeout,
    setTimeout,
    DEFAULT_TIMEOUT,
  };
}
