"use client";

import { useEffect, useState } from "react";

export function useLocalTime(locale = "fr-FR") {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const time = new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(now);

  const date = new Intl.DateTimeFormat(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(now);

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return {
    time,
    date,
    timezone,
  };
}
