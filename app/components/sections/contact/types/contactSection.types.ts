"use client";

import type { RefObject } from "react";

export type ContactRefs = {
  contentRef: RefObject<HTMLDivElement | null>;
  titleRef: RefObject<HTMLHeadingElement | null>;
  subtitleRef: RefObject<HTMLParagraphElement | null>;
  formItemsRef: RefObject<HTMLElement[]>;
  dividerRef: RefObject<HTMLDivElement | null>;
  footerRef: RefObject<HTMLDivElement | null>;
};

export type RegisterIntroImage = (index: number, element: HTMLDivElement | null) => void;
