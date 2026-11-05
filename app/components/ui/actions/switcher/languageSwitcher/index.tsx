"use client";

import { useMediaQuery, useTheme } from "@mui/material";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { gsap } from "gsap";
import { useState, useRef, useLayoutEffect } from "react";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import {
  IconChevron,
  Root,
  Root_Dropdown,
  Stack_Dropdown,
  Stack_Trigger,
  Styles_CircleFlag,
  Typo_Label,
  Typo_Label_Dropdown,
} from "./LanguageSwitcher.Styles";

const languages = [
  {
    code: "fr",
    label: "Français",
    flag: "fr",
  },
  {
    code: "en",
    label: "English",
    flag: "gb",
  },
];

const languageLabels = {
  fr: {
    fr: "Français",
    en: "Anglais",
  },
  en: {
    fr: "French",
    en: "English",
  },
};

export default function LanguageSwitcher() {
  // RESPONSIVE
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === locale) ?? languages[0];

  useLayoutEffect(() => {
    if (!menuRef.current) return;

    if (open) {
      gsap.fromTo(
        menuRef.current,
        {
          opacity: 0,
          y: -20,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        menuRef.current.querySelectorAll(".lang-item"),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.07,
          ease: "power3.out",
        },
      );

      gsap.to(arrowRef.current, {
        rotate: 180,
        duration: 0.35,
        ease: "power3.out",
      });
    } else {
      gsap.to(arrowRef.current, {
        rotate: 0,
        duration: 0.35,
      });
    }
  }, [open]);

  const changeLanguage = (newLocale: string) => {
    router.replace(pathname, {
      locale: newLocale,
    });

    setOpen(false);
  };

  return (
    <Root>
      {/* TRIGGER */}
      <Stack_Trigger onClick={() => setOpen(!open)}>
        <Styles_CircleFlag countryCode={current.flag} height={24} />

        {isDesktop && <Typo_Label>{current.label}</Typo_Label>}

        <IconChevron ref={arrowRef}>
          {open ? (
            <IoChevronDown color="#FFF" size={35} />
          ) : (
            <IoChevronUp color="#FFF" size={35} />
          )}
        </IconChevron>
      </Stack_Trigger>

      {/* DROPDOWN */}
      {open && (
        <Root_Dropdown ref={menuRef}>
          {languages.map(({ code, flag }) => (
            <Stack_Dropdown
              className="lang-item"
              code={code}
              locale={locale}
              key={code}
              onClick={() => changeLanguage(code)}
            >
              <Styles_CircleFlag countryCode={flag} />
              {isDesktop && (
                <Typo_Label_Dropdown code={code} locale={locale}>
                  {languageLabels[locale as "fr" | "en"][code as "fr" | "en"]}
                </Typo_Label_Dropdown>
              )}
            </Stack_Dropdown>
          ))}
        </Root_Dropdown>
      )}
    </Root>
  );
}
