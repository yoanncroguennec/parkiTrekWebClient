"use client";

import { MutableRefObject, RefObject } from "react";

import {
  StatsGrid,
  StatCard,
  StatIcon,
  StatContent,
  StatTitle,
  StatValue,
} from "./StatsSection.Styles";

import { trekStats } from "./data/TrekStats.data";

import { formatTrekDuration } from "./helpers/formatTrekDuration";

interface StatsSectionProps {
  statsRef: RefObject<HTMLDivElement | null>;

  statCardRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}

export default function StatsSection({
  statsRef,
  statCardRefs,
}: StatsSectionProps) {
  return (
    <div ref={statsRef}>
      <StatsGrid>
        {trekStats.map(
          ({ id, icon: IconType, title, value, background }, index) => {
            const isTrekDays = title === "Jours de trek";

            const trekDuration =
              isTrekDays && typeof value === "number"
                ? formatTrekDuration(value)
                : null;

            const formattedTitle = trekDuration?.title ?? title;

            return (
              <StatCard
                key={id}
                ref={(element) => {
                  statCardRefs.current[index] = element;
                }}
              >
                <StatIcon $background={background}>
                  <IconType />
                </StatIcon>

                <StatContent>
                  <StatTitle>{formattedTitle}</StatTitle>

                  {(!trekDuration || trekDuration.showValue) && (
                    <StatValue>{value}</StatValue>
                  )}
                </StatContent>
              </StatCard>
            );
          },
        )}
      </StatsGrid>
    </div>
  );
}
