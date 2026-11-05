"use client";

import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

export default function LocalTime() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Paris",
        }).format(new Date())
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000 * 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <Typography component="time" variant="body2">
      {time}
    </Typography>
  );
}
