// GOOD
"use client";

import { useRef, useState } from "react";
// HOOKS
import { useProgressRingAnimation } from "@/app/hooks";
// STYLES
import {
  ProgressLabel,
  ProgressRingContainer,
  ProgressValue,
  Ring,
  RingContent,
} from "./ProgressRing.Styles";

type Props = {
  value: number;
};

export default function ProgressRing({ value }: Props) {
  const ringRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState<number>(0);

  useProgressRingAnimation({
    ringRef,
    value,
    onProgressChange: setProgress,
  });

  return (
    <ProgressRingContainer>
      <Ring progress={progress} ref={ringRef}>
        <RingContent>
          <ProgressValue component="span">{progress}%</ProgressValue>

          <ProgressLabel component="label">réalisé</ProgressLabel>
        </RingContent>
      </Ring>
    </ProgressRingContainer>
  );
}
