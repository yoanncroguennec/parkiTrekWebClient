"use client";

import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

import {
  QuoteCard,
  QuoteIconLeft,
  QuoteIconRight,
  QuoteText,
  QuoteAuthor,
  QuoteAuthorRole,
} from "./Quote.Styles";

interface Props {
  isDesktop: boolean;
}

export default function Quote({ isDesktop }: Props) {
  return (
    <QuoteCard>
      <QuoteIconLeft>
        <ImQuotesLeft color="#2fff13" size={isDesktop ? 32 : 24} />
      </QuoteIconLeft>

      {isDesktop ? (
        <QuoteText component="blockquote">
          Le sport ne guérit pas Parkinson,
          <br />
          mais aide à mieux vivre chaque jour,
          <br />
          à stimuler naturellement la dopamine
          <br />
          et à mieux gérer certains symptômes.
        </QuoteText>
      ) : (
        <QuoteText component="blockquote">
          Le sport ne guérit pas,
          <br />
          mais aide au quotidien,
          <br />
          stimule la dopamine
          <br />
          et aide à gérer les symptômes.
        </QuoteText>
      )}

      <QuoteAuthor>
        <QuoteAuthorRole component="p">— Yoann CROGUENNEC</QuoteAuthorRole>

        <QuoteAuthorRole component="p" italic>
          Fondateur de Parki Trek
        </QuoteAuthorRole>
      </QuoteAuthor>

      <QuoteIconRight>
        <ImQuotesRight color="#2fff13" size={isDesktop ? 32 : 24} />
      </QuoteIconRight>
    </QuoteCard>
  );
}
