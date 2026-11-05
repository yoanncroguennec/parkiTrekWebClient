"use client";

import { Fragment } from "react";
import { IconButton } from "@mui/material";
// ANIMATIONS
// import MusicWaves_Animation from "@/app/components/common/animations/music/musicWaves";
// UI
import { SliderSelect, SectionTitle, SettingsCard } from "@/app/components/ui";
// DATAS
// import { bars_MusicWaves_Animation } from "@/app/utils/constants/data/layouts/floatingNavbar/dataFloatingNavbar";
// ICONS
import { FiPause, FiPlay } from "@/app/utils/constants/icons";
// STYLES
import { AudioHeader, AudioInfo, AudioTitle, AudioSubtitle } from "./AudioSection.Styles";

interface AudioSectionProps {
  isPlaying: boolean;
  volume: number;
  togglePlay: () => void;
  handleVolumeChange: (value: number) => void;
}

export default function AudioSection({
  isPlaying,
  volume,
  togglePlay,
  handleVolumeChange,
}: AudioSectionProps) {
  return (
    <Fragment>
      <SectionTitle>Audio</SectionTitle>

      <SettingsCard>
        <AudioHeader>
          <IconButton onClick={togglePlay}>
            {isPlaying ? <FiPause size={28} /> : <FiPlay size={28} />}
          </IconButton>

          <AudioInfo>
            <AudioTitle variant="h6">
              {isPlaying ? "Lecture en cours" : "Lecture en pause"}
            </AudioTitle>

            <AudioSubtitle variant="body2">Musique d&apos;ambiance</AudioSubtitle>
          </AudioInfo>
        </AudioHeader>

        <SliderSelect
          label="Volume"
          value={volume}
          min={0}
          max={1}
          step={0.01}
          formatValue={(v) => `${Math.round(v * 100)} %`}
          onChange={handleVolumeChange}
        />
        {/* {isPlaying && (
          <MusicWaves_Animation
            bars_MusicWaves_Animation={bars_MusicWaves_Animation}
          />
        )} */}
      </SettingsCard>
    </Fragment>
  );
}
