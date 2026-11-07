import PanelRight from "./panelRight";
import PanelLeft from "./panelLeft";
// STYLES
import { Root } from "./DonationSelection.Styles";

export default function DonationSelection() {
  return (
    <Root>
      <PanelLeft />

      <PanelRight />
    </Root>
  );
}
