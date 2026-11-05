"use client";

import { Dispatch, SetStateAction, useRef } from "react";
// COMPONENTS
import { Content } from "./components";
// ICONS
import { RxCross2 } from "@/app/utils/constants/icons";
// HOOKS
import { useMenuAnimation, useAnimationCursor, useCloseButtonAnimation } from "@/app/hooks";
// STYLES
import {
  AnimationCursor,
  CloseButton,
  MainMenuDesktopContainer,
  MainMenuDesktopContent,
} from "./MainMenuDesktop.Styles";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function MainMenuDesktop({ open, setOpen }: Props) {
  // Refs
  const rootRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Animations
  useMenuAnimation(rootRef, open);
  useAnimationCursor(containerRef);
  useCloseButtonAnimation({ closeRef });

  return (
    <MainMenuDesktopContainer ref={rootRef}>
      <AnimationCursor ref={containerRef} />
      <MainMenuDesktopContent>
        <CloseButton
          ref={closeRef}
          type="button"
          aria-label="Fermer le menu"
          onClick={() => setOpen(false)}
        >
          <RxCross2 size={40} />
        </CloseButton>
        <Content />
      </MainMenuDesktopContent>
    </MainMenuDesktopContainer>
  );
}
