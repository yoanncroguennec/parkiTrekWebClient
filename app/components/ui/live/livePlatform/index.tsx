"use client";

import { useRef } from "react";
// HOOKS
import { useLivePlatformAnimation } from "@/app/hooks";
// STYLES
import { PlatformName } from "./LivePlatform.Styles";

export default function LivePlatform() {
  const platformNameRef = useRef<HTMLSpanElement>(null);

  useLivePlatformAnimation(platformNameRef);

  return (
    <PlatformName ref={platformNameRef} component="span" variant="body2">
      Facebook
    </PlatformName>
  );
}
