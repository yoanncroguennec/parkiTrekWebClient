import {
  HeroBenefitsContainer,
  HeroBenefitsBackground,
  HeroBenefitsContent,
  BenefitIcon,
  BenefitItem,
  BenefitText,
} from "./Benefits.Styles";
import { trainingBenefits } from "./data/trainingBenefits.data";

export default function Benefits() {
  return (
    <HeroBenefitsContainer>
      {/* BACKGROUND */}
      <HeroBenefitsBackground viewBox="0 0 1200 180" preserveAspectRatio="none">
        <path
          d="
            M 90 4
            C 55 4, 30 15, 17 43
            C 10 57, 5 69, 7 82
            C 9 96, 15 110, 18 126
            C 21 143, 24 158, 39 165
            C 52 171, 75 174, 105 174

            L 1095 174

            C 1125 174, 1148 171, 1161 165
            C 1176 158, 1179 143, 1182 126
            C 1185 110, 1191 96, 1193 82
            C 1195 69, 1190 57, 1183 43
            C 1170 15, 1145 4, 1110 4

            Z
          "
          fill="rgba(255, 255, 255, 0.7)"
          stroke="rgba(0,0,0,0.065)"
          strokeWidth="1"
        />
      </HeroBenefitsBackground>

      {/* CONTENT */}
      <HeroBenefitsContent>
        {trainingBenefits.map(({ id, icon: Icon, color, text }) => (
          <BenefitItem key={id}>
            <BenefitIcon iconColor={color}>
              <Icon size={24} />
            </BenefitIcon>

            <BenefitText textColor={color}>{text}</BenefitText>
          </BenefitItem>
        ))}
      </HeroBenefitsContent>
    </HeroBenefitsContainer>
  );
}
