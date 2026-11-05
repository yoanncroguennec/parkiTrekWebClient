// GOOD
"use client";

import { useMediaQuery, useTheme } from "@mui/material";
import Tilt from "react-parallax-tilt";
// DATAS

// ICONS
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
// STYLES
import {
  QuoteContainer,
  QuoteIconLeft,
  QuoteIconRight,
  QuoteLine,
} from "./QuoteDefault.Styles";
import { QuoteData } from "@/app/components/sections/trek-dashboard/explorerScreen/sections/dashboard/data/data.quoteLines";

interface QuoteDefaultProps {
  quote: QuoteData;
}

export default function QuoteDefault({ quote }: QuoteDefaultProps) {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      perspective={1000}
      scale={1.02}
      transitionSpeed={1500}
    >
      <QuoteContainer
        bgColor={`linear-gradient(
        rgba(0, 183, 255, 0.55),
        rgba(135, 235, 152, 0.55)
      )`}
        backgroundImage={quote.bgImg}
      >
        <QuoteIconLeft>
          <ImQuotesLeft size={isDesktop ? 32 : 28} />
        </QuoteIconLeft>

        {quote.lines.map((line, index) => (
          <QuoteLine key={`${line.text}-${index}`} lineColor={line.color}>
            {line.text}
          </QuoteLine>
        ))}

        <QuoteIconRight>
          <ImQuotesRight size={isDesktop ? 32 : 28} />
        </QuoteIconRight>
      </QuoteContainer>
    </Tilt>
  );
}
