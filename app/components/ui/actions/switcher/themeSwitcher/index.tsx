"use client";

import IconButton from "@mui/material/IconButton";
// PROVIDERS
import { useThemeMode } from "@/app/utils/providers/styles/ThemeProvider";
// ICONS
import { CiCloudSun, FaMoon } from "@/app/utils/constants/icons";

export default function ThemeSwitcher() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <IconButton onClick={toggleTheme}>{mode === "dark" ? <CiCloudSun /> : <FaMoon />}</IconButton>
  );
}
