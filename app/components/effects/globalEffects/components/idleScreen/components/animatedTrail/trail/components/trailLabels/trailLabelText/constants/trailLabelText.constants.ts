import { TRAIL_LABEL_TEXT } from "../../../../constants";

export type TrailLabelTextKey = "city" | "distance" | "time";

export interface TrailLabelTextItem {
  key: TrailLabelTextKey;
  value: string;
  config: {
    position: readonly [number, number, number];
    fontSize: number;
  };
}

export const getTrailLabelTextItems = ({
  city,
  distance,
  time,
}: {
  city: string;
  distance: string;
  time: string;
}): TrailLabelTextItem[] => [
  {
    key: "city",
    value: city,
    config: TRAIL_LABEL_TEXT.city,
  },
  {
    key: "distance",
    value: distance,
    config: TRAIL_LABEL_TEXT.distance,
  },
  {
    key: "time",
    value: time,
    config: TRAIL_LABEL_TEXT.time,
  },
];
