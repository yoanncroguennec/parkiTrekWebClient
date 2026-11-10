"use client";

import { useEffect, type RefObject } from "react";

import gsap from "gsap";
import SplitText from "gsap/SplitText";
import CustomEase from "gsap/CustomEase";

// ANIMATIONS
import { contactContent, contactPreloader, contactHero } from "./animations";

gsap.registerPlugin(SplitText, CustomEase);

interface UseContactAnimationProps {
  rootRef: RefObject<HTMLDivElement | null>;

  /* PRELOADER */
  preloaderOverlayRef: RefObject<HTMLDivElement | null>;

  preloaderBarRef: RefObject<HTMLDivElement | null>;

  /* HERO */
  introImagesRef: RefObject<(HTMLDivElement | null)[]>;

  /* CONTENT */
  contentRef: RefObject<HTMLDivElement | null>;

  /* HEADER */
  titleRef: RefObject<HTMLHeadingElement | null>;

  subtitleRef: RefObject<HTMLParagraphElement | null>;

  /* FORM */
  formItemsRef: RefObject<HTMLElement[]>;

  /* DIVIDER */
  dividerRef: RefObject<HTMLDivElement | null>;

  /* FOOTER */
  footerRef: RefObject<HTMLDivElement | null>;
}

export function useContactAnimation({
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
}: UseContactAnimationProps) {
  useEffect(() => {
    CustomEase.create("hop", "0.9, 0, 0.1, 1");

    CustomEase.create("glide", "0.8, 0, 0.2, 1");

    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline({
        delay: 0.8,
      });

      /* PRELOADER */
      if (preloaderOverlayRef.current && preloaderBarRef.current) {
        contactPreloader(masterTl, preloaderOverlayRef.current, preloaderBarRef.current);
      }

      /* HERO */
      /* HERO */
      const introImages = introImagesRef.current.filter(
        (element): element is HTMLDivElement => element !== null
      );

      contactHero(masterTl, introImages);

      /* CONTENT */
      if (
        contentRef.current &&
        titleRef.current &&
        subtitleRef.current &&
        dividerRef.current &&
        footerRef.current
      ) {
        contactContent(
          masterTl,
          contentRef.current,
          titleRef.current,
          subtitleRef.current,
          formItemsRef.current,
          dividerRef.current,
          footerRef.current
        );
      }
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, [
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
  ]);
}
