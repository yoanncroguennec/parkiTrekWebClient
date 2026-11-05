import Box from "@mui/material/Box";

interface WaveSeparatorProps {
  id?: string;
  color?: string;
  height?: number | string;
  className?: string;
}

export default function WaveSeparator({
  id = "wave-separator",
  color = "#f9e8f4",
  height = 180,
  className,
}: WaveSeparatorProps) {
  return (
    <Box
      className={className}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height,
        zIndex: 10,
        pointerEvents: "none",
      }}
    >
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        aria-hidden="true"
      >
        <defs>
          <filter
            id={`${id}-glow`}
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur stdDeviation="12" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

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
          fill={color}
          filter={`url(#${id}-glow)`}
        />
      </svg>
    </Box>
  );
}
