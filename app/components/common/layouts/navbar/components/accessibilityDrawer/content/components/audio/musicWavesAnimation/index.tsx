"use client";

// TYPES
import { MusicBar } from "./types/AudioScreen.types";
// STYLES
import { MusicContainer, MusicBar_Styles } from "./MusicWaves_Animation.Styles";

type Props = {
  bars_MusicWaves_Animation: MusicBar[];
};

export default function MusicWavesAnimation({ bars_MusicWaves_Animation }: Props) {
  return (
    <MusicContainer>
      {bars_MusicWaves_Animation.map((bar, index) => (
        <MusicBar_Styles key={index} delay={bar.delay} color={bar.color} />
      ))}
    </MusicContainer>
  );
}
