interface CompassAxesProps {
  center: number;
  size: number;
  offset: number;
  color: string;
}

export default function CompassAxes({ center, size, offset, color }: CompassAxesProps) {
  return (
    <>
      <line x1={center} y1={offset} x2={center} y2={size - offset} stroke={color} />

      <line x1={offset} y1={center} x2={size - offset} y2={center} stroke={color} />
    </>
  );
}
