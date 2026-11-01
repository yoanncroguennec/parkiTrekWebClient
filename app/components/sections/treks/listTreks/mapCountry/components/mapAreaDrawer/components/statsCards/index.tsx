// GOOD
"use client";

import { useRef } from "react";
// COMPONENTS
import AnimatedNumber from "./animatedNumber";
// HOOKS
import { useStatsCardsAnimation } from "../../hooks/useStatsCardsAnimation";
// DATAS + TYPES
import { createStatsCards, CreateStatsCardsProps } from "../../data/StatsCards.data";
// STYLES
import {
  IconContainer,
  StatsCardsContainer,
  StatCard,
  Label,
  Value,
  StatInfo,
} from "./StatsCards.Styles";

export default function StatsCards({ km, days, stages }: CreateStatsCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const cards = createStatsCards({
    km,
    days,
    stages,
  });

  useStatsCardsAnimation({
    containerRef,
  });

  return (
    <StatsCardsContainer ref={containerRef}>
      {cards.map(({ label, icon: Icon, color, value }) => (
        <StatCard key={label} className="stat-card">
          <IconContainer color={color}>
            <Icon />
          </IconContainer>

          <StatInfo>
            <Value color={color} component="span">
              <AnimatedNumber value={value} />
            </Value>

            <Label color={color} component="span">
              {label}
            </Label>
          </StatInfo>
        </StatCard>
      ))}
    </StatsCardsContainer>
  );
}
