"use client";

import { MdMap, MdSatelliteAlt } from "react-icons/md";

import {
  ControlsContainer,
  ActiveBackground,
  ControlButton,
  type MapMode,
} from "./MapControls.Styles";

type Props = {
  mapMode: MapMode;
  onChange: (mode: MapMode) => void;
  mobile?: boolean;
};

export default function MapControls({
  mapMode,
  onChange,
  mobile = false,
}: Props) {
  return (
    <ControlsContainer mobile={mobile}>
      <ActiveBackground active={mapMode} />

      <ControlButton
        active={mapMode === "simple"}
        mobile={mobile}
        disableRipple
        onClick={() => onChange("simple")}
      >
        <MdMap />

        {!mobile && <span>Carte</span>}
      </ControlButton>

      <ControlButton
        active={mapMode === "satellite"}
        mobile={mobile}
        disableRipple
        onClick={() => onChange("satellite")}
      >
        <MdSatelliteAlt />

        {!mobile && <span>Réaliste</span>}
      </ControlButton>
    </ControlsContainer>
  );
}
