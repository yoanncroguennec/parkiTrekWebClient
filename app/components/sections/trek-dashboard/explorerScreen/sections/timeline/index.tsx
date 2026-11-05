"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { TimelineContainer } from "./Timeline.Styles";

import { timelineData } from "./data";

import { Timeline, TimelineFooter, TimelineHeader } from "./components";

gsap.registerPlugin(ScrollTrigger);

export default function TimelineSection() {
  return (
    <TimelineContainer>
      <TimelineHeader />

      <Timeline timelineData={timelineData} />

      <TimelineFooter />
    </TimelineContainer>
  );
}
