// COMPONENTS
import { HeaderContent, HeaderStats } from "./components";

type Props = {
  country: string;
  totalKm: number;
  progressKm: number;
};

export default function MapCountryHeader({ country, totalKm, progressKm }: Props) {
  return (
    <>
      <HeaderContent country={country} />

      <HeaderStats totalKm={totalKm} progressKm={progressKm} />
    </>
  );
}
