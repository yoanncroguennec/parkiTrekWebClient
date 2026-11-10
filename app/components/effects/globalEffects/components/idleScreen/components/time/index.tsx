"use client";

import { useEffect, useRef, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { TIME_CONFIG, TIME_DATA } from "./constants/Time.constants";

import useTimeAnimation from "./hooks/useTimeAnimation";
// ICONS
import { GiRunningShoe, GrMapLocation } from "@/app/utils/constants/icons";
// STYLES
import { TimeCard, TimeContainer, TimeRow, TimeSeparator } from "./Time.Styles";

export default function Time() {
  const [time, setTime] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);

  const pulseRefs = useRef<HTMLDivElement[]>([]);

  useTimeAnimation({
    containerRef,
    pulseRefs,
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateClock();

    const interval = window.setInterval(updateClock, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const addPulseRef = (element: HTMLDivElement | null) => {
    if (element && !pulseRefs.current.includes(element)) {
      pulseRefs.current.push(element);
    }
  };

  return (
    <TimeContainer ref={containerRef}>
      <TimeCard>
        {/* Heure */}
        <div ref={addPulseRef}>
          <Typography
            sx={{
              color: TIME_CONFIG.colors.primary,
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            {time}
          </Typography>
        </div>

        <TimeSeparator />

        {/* Pas */}
        <TimeRow ref={addPulseRef}>
          <GiRunningShoe color={TIME_CONFIG.colors.primary} size={TIME_CONFIG.icons.size} />

          <Typography
            sx={{
              color: TIME_CONFIG.colors.primary,
              textAlign: "center",
            }}
          >
            {TIME_DATA.steps}
          </Typography>
        </TimeRow>

        <TimeSeparator />

        {/* Ville */}
        <div ref={addPulseRef}>
          <Typography
            sx={{
              color: TIME_CONFIG.colors.primary,
              textAlign: "center",
            }}
          >
            {TIME_DATA.location}
          </Typography>
        </div>

        {/* Coordonnées */}
        <TimeRow ref={addPulseRef}>
          <GrMapLocation color={TIME_CONFIG.colors.primary} size={TIME_CONFIG.icons.size} />

          <Stack>
            <Typography
              sx={{
                color: TIME_CONFIG.colors.primary,
                textAlign: "center",
              }}
            >
              {TIME_DATA.latitude}
            </Typography>

            <Typography
              sx={{
                color: TIME_CONFIG.colors.primary,
                textAlign: "center",
              }}
            >
              {TIME_DATA.longitude}
            </Typography>
          </Stack>
        </TimeRow>
      </TimeCard>
    </TimeContainer>
  );
}
