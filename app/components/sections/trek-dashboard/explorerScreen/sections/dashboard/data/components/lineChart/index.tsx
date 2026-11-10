// GOOD
// UI
import { LineChart } from "@/app/components/ui";
// DATAS
import { lineChartData } from "./data/lineChart.data";
// STYLES
import { CardContainer, Header, LineChartWrapper, TextHeader } from "./LineChart.Styles";

export default function CardLineChart() {
  return (
    <CardContainer component="section">
      <Header>
        <TextHeader>
          <u>
            <strong>Progression :</strong>
          </u>
          <br />
          38% / 350 km
        </TextHeader>

        <TextHeader>
          <u>
            <strong>Total :</strong>
          </u>
          <br />
          1000 km
        </TextHeader>
      </Header>

      <LineChartWrapper>
        <LineChart
          data={lineChartData}
          yMax={450}
          yTickValues={[0, 50, 100, 150, 200, 250, 300, 350, 400, 450]}
          yUnit="km"
        />
      </LineChartWrapper>
    </CardContainer>
  );
}
