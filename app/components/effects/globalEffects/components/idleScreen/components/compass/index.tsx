"use client";

import {
  CompassAxes,
  CompassCenter,
  CompassCircle,
  CompassDirections,
  CompassNeedle,
  CompassTicks,
} from "./components";
import { CompassContainer } from "./Compass.Styles";

import { COMPASS_CONFIG } from "./constants/compass.constants";
import createCompassTicks from "./functions/createCompassTicks";

export default function Compass() {
  const {
    size,
    center,
    radius,
    tickCount,
    majorTickInterval,
    majorTickLength,
    minorTickLength,
    axisOffset,
    directions,
    needle,
    centerDotRadius,
    colors,
    typography,
  } = COMPASS_CONFIG;

  const ticks = createCompassTicks({
    center,
    radius,
    tickCount,
    majorTickInterval,
    majorTickLength,
    minorTickLength,
  });

  return (
    <CompassContainer>
      <svg viewBox={`0 0 ${size} ${size}`} width="100%" height="100%" aria-hidden="true">
        <CompassCircle center={center} radius={radius} color={colors.circle} />

        <CompassTicks ticks={ticks} color={colors.tick} />

        <CompassAxes center={center} size={size} offset={axisOffset} color={colors.axis} />

        <CompassDirections
          directions={directions}
          color={colors.direction}
          typography={typography}
        />

        <CompassNeedle needle={needle} colors={colors} />

        <CompassCenter center={center} radius={centerDotRadius} color={colors.center} />
      </svg>
    </CompassContainer>
  );
}
