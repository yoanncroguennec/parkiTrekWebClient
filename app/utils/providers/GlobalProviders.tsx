"use client";

import { ReactNode } from "react";

import { NextIntlClientProvider } from "next-intl";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

// PROVIDERS
import ThemeProvider from "./styles/ThemeProvider";
import { AudioProvider } from "./audios/AudioProvider";
import UIProvider from "./ui/UIProvider";

type ThemeMode = "light" | "dark";

interface GlobalProvidersProps {
  children: ReactNode;
  locale: string;
  messages: Record<string, unknown>;
  initialTheme: ThemeMode;
}

export default function GlobalProviders({
  children,
  locale,
  messages,
  initialTheme,
}: GlobalProvidersProps) {
  return (
    <AppRouterCacheProvider>
      <AudioProvider>
        <UIProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider initialTheme={initialTheme}>{children}</ThemeProvider>
          </NextIntlClientProvider>
        </UIProvider>
      </AudioProvider>
    </AppRouterCacheProvider>
  );
}
