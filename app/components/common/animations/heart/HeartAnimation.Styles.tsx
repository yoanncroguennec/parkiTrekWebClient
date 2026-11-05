"use client";

import { keyframes } from "@emotion/react";
import { Box, styled } from "@mui/material";

const heartBeat = keyframes`
  0% {
    transform: rotate(-45deg) scale(1);
  }

  14% {
    transform: rotate(-45deg) scale(1.18);
  }

  28% {
    transform: rotate(-45deg) scale(1);
  }

  42% {
    transform: rotate(-45deg) scale(1.18);
  }

  70% {
    transform: rotate(-45deg) scale(1);
  }

  100% {
    transform: rotate(-45deg) scale(1);
  }
`;

interface HeartProps {
  color: string;
  size: number;
}

export const Heart = styled(Box, {
  shouldForwardProp: (prop) => prop !== "color" && prop !== "size",
})<HeartProps>(({ color, size }) => ({
  position: "relative",

  width: size,
  height: size,

  backgroundColor: color,

  transform: "rotate(-45deg)",

  animation: `${heartBeat} .6s linear infinite`,

  boxShadow: `0 0 ${size * 1.7}px ${color}`,

  "&::before": {
    content: '""',
    position: "absolute",

    width: size,
    height: size,

    top: "-50%",
    left: 0,

    borderRadius: "50%",
    backgroundColor: color,

    boxShadow: `0 0 ${size * 1.7}px ${color}`,
  },

  "&::after": {
    content: '""',
    position: "absolute",

    width: size,
    height: size,

    top: 0,
    right: "-50%",

    borderRadius: "50%",
    backgroundColor: color,

    boxShadow: `0 0 ${size * 1.7}px ${color}`,
  },
}));
