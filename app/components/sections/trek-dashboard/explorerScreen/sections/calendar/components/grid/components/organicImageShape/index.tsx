"use client";

import { Box } from "@mui/material";
import { useId } from "react";

interface OrganicImageShapeProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
}

export default function OrganicImageShape({
  src,
  alt = "",
  width = "210px",
  height = 760,
}: OrganicImageShapeProps) {
  const clipId = `trek-clip-${useId().replace(/:/g, "")}`;

  return (
    <Box
      sx={{
        position: "relative",
        width,
        height,
        minHeight: 480,
        overflow: "hidden",
      }}
    >
      <svg
        aria-hidden="true"
        width="0"
        height="0"
        style={{ position: "absolute" }}
      >
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d="M .12 0 C .49 0 .78 .13 .97 .36 C 1 .44 .99 .51 .94 .58 C .89 .65 .91 .71 .87 .78 C .83 .86 .72 .88 .66 .91 C .58 .95 .54 .94 .47 .97 C .36 1 .23 .99 .12 1 Z" />
          </clipPath>
        </defs>
      </svg>

      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: "100%",
          height: "100%",
          display: "block",
          objectFit: "cover",
          clipPath: `url(#${clipId})`,
          filter: "saturate(.82) contrast(1.04)",
        }}
      />
    </Box>
  );
}
