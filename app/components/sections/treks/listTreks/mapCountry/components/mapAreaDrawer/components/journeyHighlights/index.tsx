// GOOD
"use client";

import { createRef, useMemo } from "react";
import { IconType } from "react-icons";

// HOOKS
import { useJourneyHighlightsAnimation } from "../../hooks/useJourneyHighlightsAnimation";

// STYLES
import {
  HighlightAccent,
  HighlightCard,
  HighlightContent,
  HighlightDescription,
  HighlightIcon,
  HighlightTitle,
  HighlightsList,
  JourneyHighlightsRoot,
  JourneyHighlightsTitle,
} from "./JourneyHighlights.Styles";

type TrekHighlight = {
  title: string;
  description: string;
  icon: IconType;
  color: string;
};

type Props = {
  trekHighlights: TrekHighlight[];
};

export default function JourneyHighlights({ trekHighlights }: Props) {
  const cardRefs = useMemo(
    () => trekHighlights.map(() => createRef<HTMLDivElement>()),
    [trekHighlights]
  );

  useJourneyHighlightsAnimation({
    refs: {
      cardRefs,
    },
  });

  return (
    <JourneyHighlightsRoot>
      <JourneyHighlightsTitle component="h2">Moments forts</JourneyHighlightsTitle>

      <HighlightsList>
        {trekHighlights.map((item, index) => {
          const Icon = item.icon;

          return (
            <HighlightCard key={item.title} ref={cardRefs[index]} highlightColor={item.color}>
              <HighlightAccent highlightColor={item.color} />

              <HighlightIcon highlightColor={item.color}>
                <Icon />
              </HighlightIcon>

              <HighlightContent>
                <HighlightTitle component="h3">{item.title}</HighlightTitle>

                <HighlightDescription component="p">{item.description}</HighlightDescription>
              </HighlightContent>
            </HighlightCard>
          );
        })}
      </HighlightsList>
    </JourneyHighlightsRoot>
  );
}
