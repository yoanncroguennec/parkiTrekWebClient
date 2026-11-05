export default function WaveClip() {
  return (
    <svg
      width="0"
      height="0"
      style={{
        position: "absolute",
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <defs>
        <clipPath id="footer-wave-clip" clipPathUnits="objectBoundingBox">
          <path
            d="
              M 0 0.095

              C 0.04 0.055,
                0.08 0.055,
                0.125 0.095

              C 0.17 0.135,
                0.21 0.135,
                0.25 0.095

              C 0.29 0.055,
                0.33 0.055,
                0.375 0.095

              C 0.42 0.135,
                0.46 0.135,
                0.50 0.095

              C 0.54 0.055,
                0.58 0.055,
                0.625 0.095

              C 0.67 0.135,
                0.71 0.135,
                0.75 0.095

              C 0.79 0.055,
                0.83 0.055,
                0.875 0.095

              C 0.92 0.135,
                0.96 0.135,
                1 0.095

              L 1 1
              L 0 1
              Z
            "
          />
        </clipPath>
      </defs>
    </svg>
  );
}
