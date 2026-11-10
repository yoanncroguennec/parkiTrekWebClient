// LAYOUTS
import { SplitLayout } from "@/app/components/common/layouts";
// COMPONENTS
import { DonationPresentation, DonationOptions } from "./components";
// STYLES
import { DonationSelectionContainer } from "./DonationSelection.Styles";

export default function DonationSelection() {
  return (
    <DonationSelectionContainer>
      <SplitLayout
        left={<DonationPresentation />}
        right={<DonationOptions />}
        mobilePosition="below"
      />
    </DonationSelectionContainer>
  );
}
