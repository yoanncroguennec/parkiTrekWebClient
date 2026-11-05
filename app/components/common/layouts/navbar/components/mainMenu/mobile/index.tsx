// GOOD
"use client";

import { Dispatch, SetStateAction, useLayoutEffect } from "react";
// COMPONENTS
import { Content } from "./components";
// HOOKS
import { useMainMenuMobileAnimation } from "@/app/hooks";
// ICONS
import { RxCross2 } from "@/app/utils/constants/icons";
// STYLES
import { MainMenuContainer, Background, Shadow, CloseButton } from "./MainMenuMobile.Styles";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function MainMenuCellular({ open, setOpen }: Props) {
  // =====================================================
  // CLOSE COMPLETE
  // =====================================================
  function handleCloseComplete() {
    setOpen(false);
  }

  // =====================================================
  // ANIMATION HOOK
  // =====================================================

  const {
    rootRef,
    backgroundRef,
    shadowRef,
    closeRef,
    closeMenu,
    handleCloseEnter,
    handleCloseLeave,
    handleCloseDown,
  } = useMainMenuMobileAnimation({
    open,
    onCloseComplete: handleCloseComplete,
  });

  // =====================================================
  // CONTENT CLOSE FINISHED
  // =====================================================

  useLayoutEffect(() => {
    const handleContentFinished = () => {
      closeMenu();
    };

    window.addEventListener("main-menu-mobile-close", handleContentFinished);

    return () => {
      window.removeEventListener("main-menu-mobile-close", handleContentFinished);
    };
  }, [closeMenu]);

  // =====================================================
  // REQUEST CONTENT CLOSE
  // =====================================================

  function requestContentClose() {
    window.dispatchEvent(new CustomEvent("main-menu-mobile-start-content-close"));
  }

  if (!open) {
    return null;
  }

  return (
    <MainMenuContainer ref={rootRef}>
      <Background ref={backgroundRef} />

      <CloseButton
        ref={closeRef}
        onClick={requestContentClose}
        onMouseEnter={handleCloseEnter}
        onMouseLeave={handleCloseLeave}
        onMouseDown={handleCloseDown}
      >
        <RxCross2 color="rgba(255, 0, 0, 1)" size={40} />
      </CloseButton>

      <Shadow ref={shadowRef} />

      <Content />
    </MainMenuContainer>
  );
}
