import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PaymentsDonationsClient from "./PaymentsDonationsClient";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "PaymentsDonationsPage",
  });

  return {
    title: t("metadata.title"),
    description: t("metadata.desc"),
    alternates: {
      canonical: `/${locale}/payments-donations`,
      languages: {
        fr: "/fr/payments-donations",
        en: "/en/payments-donations",
        "x-default": "/fr/payments-donations",
      },
    },
  };
}

export default function PaymentsDonationsPage() {
  return <PaymentsDonationsClient />;
}
