"use client";

import type { RefObject } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   TYPES
========================================================= */

interface Props {
  container: RefObject<HTMLDivElement | null>;

  cardsRef: RefObject<HTMLDivElement | null>[];

  iconsRef: RefObject<HTMLDivElement | null>[];

  titlesRef: RefObject<HTMLHeadingElement | null>[];

  valuesRef: RefObject<HTMLParagraphElement | null>[];
}

/* =========================================================
   HOOK
========================================================= */

export function useContent({ container, cardsRef, iconsRef, titlesRef, valuesRef }: Props) {
  useGSAP(
    () => {
      /* ===================================================
         ELEMENTS
      =================================================== */

      const cards = cardsRef
        .map((ref) => ref.current)
        .filter((element): element is HTMLDivElement => element !== null);

      /* ===================================================
         CARDS
      =================================================== */

      cards.forEach((card, index) => {
        const icon = iconsRef[index]?.current ?? null;

        const title = titlesRef[index]?.current ?? null;

        const value = valuesRef[index]?.current ?? null;

        /* ================================================
           HOVER
        ================================================ */

        const enter = () => {
          gsap.to(card, {
            y: -18,

            scale: 1.04,

            rotateY: 8,

            duration: 0.45,

            ease: "power2.out",

            overwrite: true,
          });
        };

        const leave = () => {
          gsap.to(card, {
            y: 0,

            scale: 1,

            rotateY: 0,

            duration: 0.45,

            ease: "power2.out",

            overwrite: true,
          });
        };

        card.addEventListener("mouseenter", enter);

        card.addEventListener("mouseleave", leave);

        /* ================================================
           REVEAL TIMELINE
        ================================================ */

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,

            start: "top 85%",

            once: true,
          },
        });

        /* -----------------------------------------------
           CARD
        ----------------------------------------------- */

        timeline.from(card, {
          y: 120,

          opacity: 0,

          rotateX: -30,

          scale: 0.9,

          duration: 1,

          ease: "power4.out",
        });

        /* -----------------------------------------------
           ICON
        ----------------------------------------------- */

        if (icon) {
          timeline.from(
            icon,
            {
              scale: 0,

              rotation: 180,

              ease: "elastic.out(1,.45)",
            },
            "-=0.7"
          );
        }

        /* -----------------------------------------------
           TITLE
        ----------------------------------------------- */

        if (title) {
          timeline.from(
            title,
            {
              y: 20,

              opacity: 0,

              duration: 0.5,

              ease: "power3.out",
            },
            "-=0.5"
          );
        }

        /* -----------------------------------------------
           VALUE
        ----------------------------------------------- */

        if (value) {
          timeline.from(
            value,
            {
              scale: 0.3,

              opacity: 0,

              duration: 0.6,

              ease: "back.out(2)",
            },
            "-=0.4"
          );
        }

        /* ================================================
           COUNTER
        ================================================ */

        if (value) {
          const target = Number(value.dataset.value ?? 0);

          const counter = {
            value: 0,
          };

          gsap.to(counter, {
            value: target,

            duration: 2,

            ease: "power2.out",

            scrollTrigger: {
              trigger: card,

              start: "top 80%",

              once: true,
            },

            onUpdate: () => {
              value.textContent = Math.floor(counter.value).toLocaleString("fr-FR");
            },
          });
        }

        /* ================================================
           CLEANUP HOVER
        ================================================ */

        return () => {
          card.removeEventListener("mouseenter", enter);

          card.removeEventListener("mouseleave", leave);
        };
      });

      /* ===================================================
         REFRESH
      =================================================== */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    },

    {
      scope: container,
      dependencies: [cardsRef, iconsRef, titlesRef, valuesRef],
    }
  );
}
