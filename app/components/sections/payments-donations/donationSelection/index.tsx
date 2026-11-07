import PanelRight from "./panelRight";
import PanelLeft from "./panelLeft";
// STYLES
import { DonationSelectionContainer } from "./DonationSelection.Styles";

export default function DonationSelection() {
  return (
    <DonationSelectionContainer>
      <PanelLeft />

      <PanelRight />
    </DonationSelectionContainer>
  );
}
