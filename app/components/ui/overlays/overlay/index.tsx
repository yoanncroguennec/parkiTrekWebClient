// STYLES
import { OverlayStyles } from "./Overlay.Styles";

type OverlayProps = {
  zIndex?: number;
  opacityFrom?: number;
  opacityTo?: number;
};

export default function Overlay({ opacityFrom = 0.25, opacityTo = 0.4, zIndex = 1 }: OverlayProps) {
  return <OverlayStyles opacityFrom={opacityFrom} opacityTo={opacityTo} zIndex={zIndex} />;
}
