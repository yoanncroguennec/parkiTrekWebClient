"use client";

// DATAS
import { heroStats } from "@/app/utils/constants/data/treks/[id]";
import { Area } from "@/app/utils/constants/data/treks/map/data";
// STYLES
import {
  StatsGrid,
  StatCardGrid,
  StatCard,
  StatHalo,
  StatIcon,
  StatValueWrapper,
  StatValue,
  StatUnit,
  StatTitle,
} from "./HeroStats.Styles";
import { isNumeric } from "@/app/utils/helpers/isNumeric";

type Props = {
  selectedArea: Area;
};

export default function HeroStats({ selectedArea }: Props) {
  const stats = heroStats(selectedArea);

  return (
    <StatsGrid container spacing={4}>
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <StatCardGrid key={`${stat.title}-${index}`}>
            <StatCard>
              {/* HALO */}
              <StatHalo haloColor={stat.color} />

              {/* TITLE */}
              <StatTitle component="h2">{stat.title}</StatTitle>
              {/* VALUE + ICON */}
              <StatValueWrapper>
                <StatIcon color={stat.color}>
                  <Icon />
                </StatIcon>

                <StatValue component="span" isNumeric={isNumeric(stat.value)}>
                  {stat.value}

                  {stat.unit && (
                    <StatUnit component="span" color={stat.color}>
                      {stat.unit}
                    </StatUnit>
                  )}
                </StatValue>
              </StatValueWrapper>
            </StatCard>
          </StatCardGrid>
        );
      })}
    </StatsGrid>
  );
}
