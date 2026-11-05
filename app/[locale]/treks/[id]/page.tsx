import { Stack } from "@mui/material";
// LAYOUTS
import {
  ContainerApp,
  // NavTopScreen,
  // ResourceNotFound,
} from "@/app/components/common/layouts";
// EFFECTS
import { WhiteFlash } from "@/app/components/effects";
// FEEDBACK
import { ResourceNotFound } from "@/app/components/common/feedback";
// DATAS
import { cards } from "@/app/utils/constants/data/treks/map/data";
import { getSectionsTrekID } from "./data/section.data";

type Props = {
  params: Promise<{
    locale: string;
    id: string;
  }>;
  searchParams: Promise<{
    area?: string;
  }>;
};

export default async function TrekID({ params, searchParams }: Props) {
  const { id } = await params;
  const { area } = await searchParams;

  const trek = cards.find((card) => card.id === Number(id));

  const selectedArea = trek?.areas.find((item) => item.code === area);

  if (!trek || !selectedArea) {
    return <ResourceNotFound message={!trek ? "Trek introuvable" : "Zone introuvable"} />;
  }

  const sectionsTrekID = getSectionsTrekID(selectedArea);

  return (
    <>
      <WhiteFlash />

      <ContainerApp>
        {/* <NavTopScreen /> */}

        {sectionsTrekID.map(({ id, component: Component }) => (
          <Stack key={id} id={id}>
            <Component />
          </Stack>
        ))}
      </ContainerApp>
    </>
  );
}
