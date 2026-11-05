"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";

import { getTheme } from "@/app/utils/constants/styles/theme/theme";

import {
  setLocalStorage,
  STORAGE_KEYS,
} from "@/app/utils/constants/storage/localStorage";

type ThemeMode = "light" | "dark";

type ThemeContextType = {
  mode: ThemeMode;
  toggleTheme: () => void;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme: ThemeMode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({
  children,
  initialTheme,
}: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(initialTheme);

  useEffect(() => {
    setLocalStorage(STORAGE_KEYS.theme, mode);

    document.cookie = `theme=${mode}; path=/; max-age=31536000; samesite=lax`;
  }, [mode]);

  useEffect(() => {
    const handleReset = () => {
      setMode("light");
    };

    window.addEventListener("app-storage-reset", handleReset);

    return () => {
      window.removeEventListener("app-storage-reset", handleReset);
    };
  }, []);

  const toggleTheme = () => {
    setMode((previous) => (previous === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleTheme,
      }}
    >
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeMode() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeMode must be used inside ThemeProvider");
  }

  return context;
}
