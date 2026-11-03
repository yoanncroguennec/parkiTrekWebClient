"use client";

import { useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { photos } from "../data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function useHorizontalGallery() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;

      if (!section || !track) return;

      // CALCUL DE LA DISTANCE HORIZONTALE
      const getDistance = () => {
        return Math.max(
          0,
          track.scrollWidth - section.clientWidth
        );
      };

      // ANIMATION HORIZONTALE
      const horizontalTween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",

        scrollTrigger: {
          trigger: section,
          start: "top top",

          end: () => `+=${getDistance()}`,

          pin: true,
          pinSpacing: true,
          scrub: 1,

          anticipatePin: 1,
          invalidateOnRefresh: true,

          markers: process.env.NODE_ENV === "development",

          onUpdate: (self) => {
            const percentage = self.progress * 100;

            // Éviter les mises à jour React inutiles
            setProgress((previous) =>
              Math.round(previous) === Math.round(percentage)
                ? previous
                : percentage
            );

            const index = Math.min(
              photos.length - 1,
              Math.floor(self.progress * photos.length)
            );

            setActiveIndex((previous) =>
              previous === index ? previous : index
            );

            // Animation du dégradé
            gsap.set(section, {
              backgroundPosition: `${percentage}% 50%`,
            });
          },
        },
      });

      // ANIMATION DES CARTES
      const cards = track.querySelectorAll<HTMLElement>("article");

      cards.forEach((card) => {
        const cardAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            containerAnimation: horizontalTween,

            start: "left 100%",
            end: "right 0%",

            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        cardAnimation
          .fromTo(
            card,
            {
              opacity: 0.001,
              scale: 0.92,
              y: 35,
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.5,
              ease: "none",
            }
          )
          .to(card, {
            opacity: 0.001,
            scale: 0.92,
            y: -25,
            duration: 0.5,
            ease: "none",
          });
      });

      // ATTENDRE LE CHARGEMENT DES IMAGES
      const images = Array.from(
        track.querySelectorAll<HTMLImageElement>("img")
      );

      Promise.all(
        images.map((image) => image.decode().catch(() => undefined))
      ).then(() => {
        // Recalculer les dimensions après chargement
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      });

      // REACTUALISATION APRÈS REDIMENSIONNEMENT
      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      // Nettoyage
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    },
    {
      scope: sectionRef,
    }
  );

  return {
    sectionRef,
    trackRef,
    progress,
    activeIndex,
  };
}