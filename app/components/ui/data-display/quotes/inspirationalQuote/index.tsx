// STYLES
import { Quote, QuoteRow, QuoteText, QuoteTextSecond } from "./Quote.Styles";
import { useTranslations } from "next-intl";
import HeartAnimation from "@/app/components/common/animations/heart";

export default function InspirationalQuote() {
  const t = useTranslations("PaymentsDonationsPage.supportShowCase.hero.inspirationalQuote");

  return (
    <Quote>
      <QuoteText component="p">{t("quoteText")}</QuoteText>

      <QuoteRow>
        <HeartAnimation color="#F00" size={25} />

        <QuoteTextSecond component="p">{t("quoteTextSecond")}</QuoteTextSecond>
      </QuoteRow>
    </Quote>
  );
}
