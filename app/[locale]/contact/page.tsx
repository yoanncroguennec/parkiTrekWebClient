import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ContactClient from "./ContactClient";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "ContactPage",
  });

  return {
    title: t("metadata.title"),
    description: t("metadata.desc"),
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        fr: "/fr/contact",
        en: "/en/contact",
        "x-default": "/fr/contact",
      },
    },
  };
}

export default function ContactPage() {
  return <ContactClient />;
}
