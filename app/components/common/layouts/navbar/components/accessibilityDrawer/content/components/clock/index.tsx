"use client";

import { Stack, useMediaQuery, useTheme } from "@mui/material";
// UI
import { SettingsCard } from "@/app/components/ui";
// HOOKS
import { useLocalTime } from "@/app/hooks";
// ICONS
import { IoSettingsOutline } from "@/app/utils/constants/icons";
// STYLES
import { Wrapper, Time, DateText, Title } from "./LocalClock.Styles";

export default function LocalClock() {
  const { time, date } = useLocalTime();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <SettingsCard>
      <Wrapper>
        <Stack
          sx={{
            alignItems: "center",
            flexDirection: "row",
            gap: 1.2,
            justifyContent: "center",
          }}
        >
          <IoSettingsOutline color="#22c55e" size={isDesktop ? 40 : 25} />
          <Title>Paramètres</Title>
        </Stack>

        <DateText>{date}</DateText>
        <Time>{time}</Time>
      </Wrapper>
    </SettingsCard>
  );
}
