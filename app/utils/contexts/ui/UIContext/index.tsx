"use client";

import { createContext, useContext } from "react";

type UIContextType = {
  accessibilityOpen: boolean;
  setAccessibilityOpen: (open: boolean) => void;
};

export const UIContext = createContext<UIContextType | null>(null);

export function useUI() {
  const context = useContext(UIContext);

  if (!context) {
    throw new Error("useUI must be used inside UIProvider");
  }

  return context;
}
