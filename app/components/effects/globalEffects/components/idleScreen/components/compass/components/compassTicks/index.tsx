import { CompassTick } from "../../functions/createCompassTicks";

interface CompassTicksProps {
  ticks: CompassTick[];
  color: string;
}

export default function CompassTicks({ ticks, color }: CompassTicksProps) {
  return (
    <>
      {ticks.map(({ isMajor, x1, y1, x2, y2 }, index) => (
        <line
          key={index}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={color}
          strokeWidth={isMajor ? 1.5 : 0.8}
        />
      ))}
    </>
  );
}
