import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import GalleryClient from "./GalleryClient";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "GalleryPage",
  });

  return {
    title: t("metadata.title"),
    description: t("metadata.desc"),
    alternates: {
      canonical: `/${locale}/gallery`,
      languages: {
        fr: "/fr/gallery",
        en: "/en/gallery",
        "x-default": "/fr/gallery",
      },
    },
  };
}

export default function GalleryPage() {
  return <GalleryClient />;
}
