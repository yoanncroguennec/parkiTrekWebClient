// GOOD
"use client";

// import { useTranslations } from "next-intl";
//
// import CircleCTA from "@/app/components/common/cta/circleCTA";

// Videos
const mediaDesktopVideo = "/assets/videos/Summiting the Matterhorn with an FPV Drone.mp4";

export default function MediaDesktop() {
  // const t = useTranslations("PaymentsDonationsPage.supportShowCase.circleCTA");

  return (
    <svg
      // Zone de dessin virtuelle du SVG
      viewBox="0 0 1000 1000"
      // Le SVG occupe toute la largeur et la hauteur de son conteneur
      width="100%"
      height="100%"
      // Remplit entièrement le conteneur tout en conservant les proportions
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/*
          Masque (clipPath) utilisé pour découper la vidéo
          selon une forme organique.
        */}
        <clipPath id="test">
          <path
            d="
              M500 0
              A500 500 0 1 1 600 800
              A250 250 0 1 0 500 500
              A250 250 0 1 1 200 0
            "
          />
        </clipPath>

        {/* Dégradé utilisé par le bouton CTA */}
        <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0575E6" />
          <stop offset="100%" stopColor="#00F260" />
        </linearGradient>
      </defs>

      {/*
        foreignObject permet d'intégrer du HTML
        (ici une vidéo) directement dans le SVG.
      */}
      <foreignObject x="0" y="0" width="1000" height="1000" clipPath="url(#test)">
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={mediaDesktopVideo} type="video/mp4" />
        </video>
      </foreignObject>

      {/* <CircleCTA
        title={t("title")}
        subtitle={t("subtitle")}
        label={t("label")}
        href="/support"
        radius={200}
        x={735}
        y={590}
      /> */}
    </svg>
  );
}
