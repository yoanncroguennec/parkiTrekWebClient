interface CompassCenterProps {
  center: number;
  radius: number;
  color: string;
}

export default function CompassCenter({
  center,
  radius,
  color,
}: CompassCenterProps) {
  return <circle cx={center} cy={center} r={radius} fill={color} />;
}
