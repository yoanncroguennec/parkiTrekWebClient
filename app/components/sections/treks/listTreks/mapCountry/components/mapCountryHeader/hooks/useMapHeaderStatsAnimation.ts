"use client";

import { RefObject } from "react";
import gsap from "@/app/utils/libs/gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  statsRef: RefObject<HTMLDivElement | null>;
  totalKm: number;
  progressKm: number;
};

export function useMapHeaderStatsAnimation({ statsRef, totalKm, progressKm }: Props) {
  useGSAP(
    () => {
      const q = gsap.utils.selector(statsRef);

      // =========================
      // TIMELINE D'ENTRÉE
      // =========================

      const tl = gsap.timeline();

      tl.from(q(".hero-stats"), {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      tl.from(
        q(".hero-km-container"),
        {
          scale: 0.5,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(2)",
        },
        "-=0.6"
      );

      // =========================
      // FLOTTEMENT
      // =========================

      const floatingTween = gsap.to(q(".hero-stats"), {
        y: -8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // =========================
      // COMPTEUR
      // =========================

      const counter = {
        value: 0,
      };

      gsap.to(counter, {
        value: totalKm,
        duration: 2,
        delay: 0.8,
        ease: "power2.out",

        onUpdate: () => {
          const km = statsRef.current?.querySelector<HTMLElement>(".hero-km");

          if (km) {
            km.textContent = Math.round(counter.value).toString();
          }
        },
      });

      // =========================
      // PROGRESS BAR
      // =========================

      gsap.fromTo(
        q(".hero-progress"),
        {
          width: "0%",
        },
        {
          width: `${progressKm}%`,
          duration: 2,
          delay: 1,
          ease: "power4.out",
        }
      );

      gsap.to(q(".hero-progress-shine"), {
        x: 250,
        duration: 1.4,
        ease: "none",
        repeat: -1,
        repeatDelay: 0.8,
      });

      return () => {
        tl.kill();
        floatingTween.kill();
      };
    },
    {
      scope: statsRef,
      dependencies: [totalKm, progressKm],
    }
  );
}
