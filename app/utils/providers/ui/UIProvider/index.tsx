// providers/UIProvider.tsx
"use client";

import { UIContext } from "@/app/utils/contexts/ui/UIContext";
import { ReactNode, useState } from "react";

export default function UIProvider({ children }: { children: ReactNode }) {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  return (
    <UIContext.Provider
      value={{
        accessibilityOpen,
        setAccessibilityOpen,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}
