export interface AudioSettings {
  isPlaying: boolean;
  volume: number;
}

export const DEFAULT_AUDIO_SETTINGS: AudioSettings = {
  isPlaying: true,
  volume: 0.5,
};

export function isValidAudioSettings(value: unknown): value is AudioSettings {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const settings = value as Partial<AudioSettings>;

  return (
    typeof settings.isPlaying === "boolean" &&
    typeof settings.volume === "number" &&
    settings.volume >= 0 &&
    settings.volume <= 1
  );
}
