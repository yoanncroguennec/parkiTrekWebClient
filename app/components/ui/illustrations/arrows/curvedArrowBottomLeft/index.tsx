"use client";

export default function CurvedArrowBottomLeft() {
  return (
    <svg viewBox="0 0 120 120" width="120" height="120">
      <path
        d="
          M100 20
          C100 65 75 95 25 100
          M25 100 L38 87
          M25 100 L40 101
        "
        fill="none"
        stroke="#000"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
