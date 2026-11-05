"use client";

import { createRef, useMemo } from "react";
import { Box } from "@mui/material";
// HOOKS
import { useTimelineAnimation } from "@/app/hooks";
// ICONS
import { type IconType } from "@/app/utils/constants/icons";
// STYLES
import {
  TimelineContainer,
  Content,
  StepLocation,
  StepTitle,
  TimelineTrack,
  TimelineIcon,
  TimeLineItem,
  TimelineTitle,
} from "./Timeline.Styles";

export type TimelineStep = {
  title: string;
  location: string;
  icon: IconType;
  color: string;
};

type Props = {
  trekSteps: TimelineStep[];
};

export default function Timeline({ trekSteps }: Props) {
  const titleRef = useMemo(() => createRef<HTMLElement>(), []);

  const lineRef = useMemo(() => createRef<HTMLDivElement>(), []);

  const itemRefs = useMemo(() => trekSteps.map(() => createRef<HTMLDivElement>()), [trekSteps]);

  useTimelineAnimation({
    refs: {
      titleRef,
      lineRef,
      itemRefs,
    },
  });

  return (
    <TimelineContainer>
      <TimelineTitle ref={titleRef} component="h2">
        Parcours
      </TimelineTitle>

      <Content>
        <TimelineTrack ref={lineRef} />

        {trekSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <TimeLineItem key={step.title} ref={itemRefs[index]}>
              <TimelineIcon color={step.color}>
                <Icon size={20} color={step.color} />
              </TimelineIcon>

              <Box>
                <StepTitle component="h3">{step.title}</StepTitle>

                <StepLocation component="span">{step.location}</StepLocation>
              </Box>
            </TimeLineItem>
          );
        })}
      </Content>
    </TimelineContainer>
  );
}
