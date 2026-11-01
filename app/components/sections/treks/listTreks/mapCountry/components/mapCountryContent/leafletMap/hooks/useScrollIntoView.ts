"use client";

import { RefObject, useEffect } from "react";

export function useScrollIntoView(isExpanded: boolean, rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    rootRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [isExpanded, rootRef]);
}
