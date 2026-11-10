"use client";

import { useRef } from "react";

// UI
import { ContactPreloader, Overlay } from "@/app/components/ui";

// HOOKS
import { useContactAnimation } from "@/app/hooks";

// STYLES
import { ContactContainer, HeroContainer } from "./ContactClient.Styles";
import { ContentSection, ImagesSection } from "@/app/components/sections/contact";

export default function ContactClient() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  /* PRELOADER */
  const preloaderOverlayRef = useRef<HTMLDivElement | null>(null);

  const preloaderBarRef = useRef<HTMLDivElement | null>(null);

  /* HERO IMAGES */
  const introImagesRef = useRef<(HTMLDivElement | null)[]>([]);

  const registerIntroImage = (index: number, element: HTMLDivElement | null) => {
    introImagesRef.current[index] = element;
  };

  /* CONTENT */
  const contentRef = useRef<HTMLDivElement | null>(null);

  /* HEADER */
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  /* FORM */
  const formItemsRef = useRef<HTMLElement[]>([]);

  /* FOOTER */
  const dividerRef = useRef<HTMLDivElement | null>(null);

  /* FOOTER */
  const footerRef = useRef<HTMLDivElement | null>(null);

  useContactAnimation({
    rootRef,

    preloaderOverlayRef,
    preloaderBarRef,

    introImagesRef,

    contentRef,

    titleRef,
    subtitleRef,

    formItemsRef,

    dividerRef,
    footerRef,
  });

  return (
    <ContactContainer ref={rootRef}>
      <ContactPreloader overlayRef={preloaderOverlayRef} barRef={preloaderBarRef} />

      <HeroContainer>
        <ImagesSection registerIntroImage={registerIntroImage} />

        <Overlay />

        <ContentSection
          contentRef={contentRef}
          titleRef={titleRef}
          subtitleRef={subtitleRef}
          formItemsRef={formItemsRef}
          dividerRef={dividerRef}
          footerRef={footerRef}
        />
      </HeroContainer>
    </ContactContainer>
  );
}
