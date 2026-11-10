// CONFIGURATIONS
import "@/configs/leaflet.setup";
// NEXT.JS TYPES
import type { Metadata } from "next";
// INTERNATIONALIZATION (NEXT-INTL)
import { getMessages, getLocale } from "next-intl/server";
// FONTS CONSTANTS
import { canela, dahlia, neon } from "@/app/utils/constants/styles/fonts";
import { cookies } from "next/headers";
import { GlobalProviders } from "../utils/providers";
// UI
import { GlobalFeedback } from "../components/ui";
// EFFECTS
import { GlobalEffects } from "../components/effects";
// STYLES
import "@/app/utils/constants/styles/globals.css";

export const metadata: Metadata = {
  title: "Parki Trek",
  description: "Description",
};

export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
  const messages = await getMessages();
  const locale = await getLocale();

  // ---------------------------------------------------------------------------
  // Theme côté serveur
  // ---------------------------------------------------------------------------
  const cookieStore = await cookies();

  const themeCookie = cookieStore.get("theme")?.value;

  const initialTheme = themeCookie === "dark" ? "dark" : "light";

  return (
    <html lang={locale} className={`${dahlia.variable} ${canela.variable} ${neon.variable}`}>
      <body cz-shortcut-listen="true">
        {/* AUDIO SOUND BG + LANGUAGES */}
        <GlobalProviders locale={locale} messages={messages} initialTheme={initialTheme}>
          {/* IDLE + CUSTOM CURSOR */}
          <GlobalEffects />
          {/* NOTIFICATIONS */}
          <GlobalFeedback />
          {children}
        </GlobalProviders>
      </body>
    </html>
  );
}
