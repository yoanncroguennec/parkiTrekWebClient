interface CompassNeedleProps {
  needle: {
    north: string;
    south: string;
  };

  colors: {
    northNeedle: string;
    southNeedle: string;
  };
}

export default function CompassNeedle({ needle, colors }: CompassNeedleProps) {
  return (
    <>
      <polygon points={needle.north} fill={colors.northNeedle} />

      <polygon points={needle.south} fill={colors.southNeedle} />
    </>
  );
}
