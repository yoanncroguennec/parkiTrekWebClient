// COMMON
import {
  WaveClip,
  // WaveSeparator
} from "@/app/components/common/shapes";
// COMPONENTs
import { TopBar, FooterMountain, FooterContent } from "./components";
// HOOKS
import { useFooterScroll } from "@/app/hooks";
// STYLES
import {
  FooterBackground,
  FooterRoot,
  FooterWhitePanel,
  FooterWaveDefinition,
} from "./Footer.styles";

interface FooterProps {
  showWave?: boolean;
}

export default function Footer({ showWave = true }: FooterProps) {
  const { footerRef, whitePanelRef } = useFooterScroll();

  return (
    <FooterRoot ref={footerRef}>
      {/* Définition de la forme de la vague */}
      {showWave && (
        <FooterWaveDefinition width="0" height="0" aria-hidden="true">
          <WaveClip />
        </FooterWaveDefinition>
      )}

      <FooterBackground showWave={showWave}>
        <TopBar />

        <FooterWhitePanel ref={whitePanelRef}>
          <FooterMountain />
          <FooterContent />
        </FooterWhitePanel>
      </FooterBackground>
    </FooterRoot>
  );
}
