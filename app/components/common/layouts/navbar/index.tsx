// GOOD
"use client";

import { Fragment, useRef, useState } from "react";
import Link from "next/link";
import { useMediaQuery, useTheme } from "@mui/material";
import { useLocale } from "next-intl";
// COMPONENTS
import {
  AccessibilityDrawer,
  MainMenuCellular,
  MainMenuDesktop,
} from "./components";
// CONFIGS
import { createNavbarActions } from "./config/navbarActions";
// HOOKS
import { useFadeInUpSequence } from "@/app/hooks";
// CONTEXTS
import { useUI } from "@/app/utils/contexts/ui/UIContext";
// STYLES
import { NavbarContainer, ImgLogo, Actions, Action } from "./Navbar.Styles";

const IMG_LOGO = "/globe.svg";

export default function Navbar() {
  const locale = useLocale();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [open, setOpen] = useState<boolean>(false);

  const { accessibilityOpen, setAccessibilityOpen } = useUI();

  // ---------------------------------------------------------------------------
  // REFS
  // ---------------------------------------------------------------------------
  const topNavbarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);

  const shopCartRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  // ---------------------------------------------------------------------------
  // NAVBAR ACTIONS
  // ---------------------------------------------------------------------------

  const navbarActions = createNavbarActions({
    locale,
    onAccessibilityOpen: () => setAccessibilityOpen(true),
    onMenuOpen: () => setOpen(true),
  });

  const actionRefs = {
    shop: shopCartRef,
    settings: settingsRef,
    menu: hamburgerRef,
  };

  // ---------------------------------------------------------------------------
  // ANIMATIONS
  // ---------------------------------------------------------------------------
  useFadeInUpSequence({
    refs: [topNavbarRef, logoRef, shopCartRef, settingsRef, hamburgerRef],
    delay: 2,
    stagger: 1,
  });

  // ---------------------------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------------------------

  return (
    <Fragment>
      <NavbarContainer component="nav" ref={topNavbarRef}>
        {/* ----------------------------------------------------------------- */}
        {/* LOGO */}
        {/* ----------------------------------------------------------------- */}

        <Link href="/" ref={logoRef}>
          <ImgLogo
            alt="Logo du site internet"
            height={400}
            src={IMG_LOGO}
            width={400}
          />
        </Link>

        {/* ----------------------------------------------------------------- */}
        {/* ACTIONS */}
        {/* ----------------------------------------------------------------- */}

        <Actions>
          {navbarActions.map(({ id, icon: Icon, href, onClick }) => {
            const ref = actionRefs[id as keyof typeof actionRefs];

            const content = (
              <Action ref={ref}>
                <Icon
                  color="#1ed11e"
                  data-magnetic
                  size={isDesktop ? 32 : 28}
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={onClick}
                />
              </Action>
            );

            if (href) {
              return (
                <Link href={href} key={id}>
                  {content}
                </Link>
              );
            }

            return <Fragment key={id}>{content}</Fragment>;
          })}

          <AccessibilityDrawer
            open={accessibilityOpen}
            onClose={() => setAccessibilityOpen(false)}
          />
        </Actions>
      </NavbarContainer>

      {/* ------------------------------------------------------------------- */}
      {/* MAIN MENU */}
      {/* ------------------------------------------------------------------- */}

      {isDesktop ? (
        <MainMenuDesktop open={open} setOpen={setOpen} />
      ) : (
        <MainMenuCellular open={open} setOpen={setOpen} />
      )}
    </Fragment>
  );
}
