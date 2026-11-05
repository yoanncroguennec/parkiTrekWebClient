// GOOD
"use client";

// UI
import { Donut } from "@/app/components/ui";

// DATAS
import { dataDonuts } from "./data";

// STYLES
import {
  CardContainer,
  Header,
  TextHeader,
  DonutWrapper,
  DonutInfo,
  DonutInfoTitle,
  DonutInfoDescription,
} from "./CinematicDonut.Styles";

export default function CinematicDonut() {
  return (
    <CardContainer component="section">
      <Header>
        <TextHeader component="span">Résumé</TextHeader>

        <TextHeader component="span">
          Octobre -
          <br />
          Décembre 2026
        </TextHeader>
      </Header>

      <DonutWrapper>
        <Donut
          data={dataDonuts}
          width="100%"
          height="100%"
          center={{
            value: 40,
            label: "Parkinson",
            description: "Sensibilisation à la maladie",
          }}
        />
      </DonutWrapper>

      <DonutInfo>
        <DonutInfoTitle component="h3">Parki Trek</DonutInfoTitle>

        <DonutInfoDescription component="p">
          Une aventure pour sensibiliser, informer et faire avancer les
          consciences.
        </DonutInfoDescription>
      </DonutInfo>
    </CardContainer>
  );
}
