"use client";

import { ReactNode, useState } from "react";
//
import { UIContext } from "@/app/utils/contexts/ui/UIContext";

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
