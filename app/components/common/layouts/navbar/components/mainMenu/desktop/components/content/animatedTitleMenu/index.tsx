// STYLES
import {
  AnimatedTitleContainer,
  AnimatedLetter,
  AnimatedLetterInner,
  AnimatedLetterText,
  AnimatedLetterTextHover,
} from "./AnimatedTitleMenu.Styles";

type Props = {
  title: string;
};

export default function AnimatedTitleMenu({ title }: Props) {
  return (
    <AnimatedTitleContainer>
      {title.split("").map((letter, index) => (
        <AnimatedLetter key={index}>
          <AnimatedLetterInner
            className="inner"
            sx={{
              transitionDelay: `${index * 0.03}s`,
            }}
          >
            <AnimatedLetterText>{letter}</AnimatedLetterText>

            <AnimatedLetterTextHover>{letter}</AnimatedLetterTextHover>
          </AnimatedLetterInner>
        </AnimatedLetter>
      ))}
    </AnimatedTitleContainer>
  );
}
