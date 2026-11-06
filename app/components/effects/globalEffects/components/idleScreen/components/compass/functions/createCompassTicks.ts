import { round } from "../constants/compass.constants";

interface CreateCompassTicksProps {
  center: number;
  radius: number;
  tickCount: number;
  majorTickInterval: number;
  majorTickLength: number;
  minorTickLength: number;
}

export interface CompassTick {
  isMajor: boolean;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export default function createCompassTicks({
  center,
  radius,
  tickCount,
  majorTickInterval,
  majorTickLength,
  minorTickLength,
}: CreateCompassTicksProps): CompassTick[] {
  return Array.from({ length: tickCount }, (_, index) => {
    const angle = (index * 360) / tickCount;

    const radians = (angle * Math.PI) / 180;

    const isMajor = index % majorTickInterval === 0;

    const innerRadius = radius - (isMajor ? majorTickLength : minorTickLength);

    return {
      isMajor,

      x1: round(center + Math.cos(radians) * innerRadius),

      y1: round(center + Math.sin(radians) * innerRadius),

      x2: round(center + Math.cos(radians) * radius),

      y2: round(center + Math.sin(radians) * radius),
    };
  });
}
