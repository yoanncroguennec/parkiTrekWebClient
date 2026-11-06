export default function NeonTrailDefs() {
  return (
    <defs>
      <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ff9cf8" />

        <stop offset="50%" stopColor="#ff33ff" />

        <stop offset="100%" stopColor="#ff9cf8" />
      </linearGradient>

      <filter id="neonGlow" x="-200%" y="-200%" width="400%" height="400%">
        <feGaussianBlur stdDeviation="6" result="blur" />

        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}
