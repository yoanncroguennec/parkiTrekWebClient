"use client";

import { Heart } from "./HeartAnimation.Styles";

interface Props {
  color?: string;
  size?: number;
}

export default function HeartAnimation({ color = "#F20044", size = 35 }: Props) {
  return <Heart color={color} size={size} />;
}
