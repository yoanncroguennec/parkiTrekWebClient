"use client";

import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { TimelineDataItem } from "../../data";

import {
  TimelineLine,
  TimelineProgress,
  TimelineWrapper,
} from "./Timeline.Styles";

import { TimelineContent } from "..";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  timelineData: TimelineDataItem[];
};

export default function Timeline({ timelineData }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const progress = progressRef.current;

    if (!wrapper || !progress) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        progress,
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          ease: "none",

          scrollTrigger: {
            trigger: wrapper,
            start: "top 70%",
            end: "bottom 80%",
            scrub: true,
          },
        },
      );
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <TimelineWrapper ref={wrapperRef}>
      <TimelineLine />

      <TimelineProgress ref={progressRef} />

      <TimelineContent timelineData={timelineData} />
    </TimelineWrapper>
  );
}
