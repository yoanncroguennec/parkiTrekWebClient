interface CompassCircleProps {
  center: number;
  radius: number;
  color: string;
}

export default function CompassCircle({ center, radius, color }: CompassCircleProps) {
  return <circle cx={center} cy={center} r={radius} fill="none" stroke={color} strokeWidth="2" />;
}
