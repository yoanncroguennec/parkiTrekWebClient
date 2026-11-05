import { LegendDot, LegendItemContainer, LegendText } from "./LegendItem.Styles";

type Props = {
  color: string;
  text: string;
};

export function LegendItem({ color, text }: Props) {
  return (
    <LegendItemContainer>
      <LegendDot dotColor={color} />

      <LegendText>{text}</LegendText>
    </LegendItemContainer>
  );
}
