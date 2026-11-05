"use client"

import { useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";

import { TrekPoint, trekPoints } from "../../../../components/common/layouts/footer/data/footer.data";

export default function useTrekAnimation() {
  // Refs
  const mountainPathRef = useRef<SVGPathElement | null>(null);
  const blueTrailGlowRef = useRef<SVGPathElement | null>(null);
  const blueTrailRef = useRef<SVGPathElement | null>(null);
  const bluePointRef = useRef<SVGCircleElement | null>(null);
  const blueHaloRef = useRef<SVGCircleElement | null>(null);
  const bubbleRef = useRef<SVGGElement | null>(null);
  const greenPointsRef = useRef<(SVGCircleElement | null)[]>([]);

  // States
  const [activePoint, setActivePoint] = useState<TrekPoint | null>(null);

  useLayoutEffect(() => {
    const path = mountainPathRef.current;
    const blueTrailGlow = blueTrailGlowRef.current;
    const blueTrail = blueTrailRef.current;
    const bluePoint = bluePointRef.current;
    const blueHalo = blueHaloRef.current;
    const bubble = bubbleRef.current;

    if (
      !path ||
      !blueTrailGlow ||
      !blueTrail ||
      !bluePoint ||
      !blueHalo ||
      !bubble
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      const totalLength = path.getTotalLength();

      /*
       * -----------------------------------------
       * INITIALISATION DES TRAITS
       * -----------------------------------------
       */

      blueTrail.style.strokeDasharray = String(totalLength);

      blueTrail.style.strokeDashoffset = String(totalLength);

      blueTrailGlow.style.strokeDasharray = String(totalLength);

      blueTrailGlow.style.strokeDashoffset = String(totalLength);

      /*
       * -----------------------------------------
       * POSITION DES POINTS VERTS
       * -----------------------------------------
       */

      trekPoints.forEach((point, index) => {
        const greenPoint = greenPointsRef.current[index];

        if (!greenPoint) {
          return;
        }

        const position = path.getPointAtLength(totalLength * point.progress);

        gsap.set(greenPoint, {
          attr: {
            cx: position.x,
            cy: position.y,
          },
        });
      });

      /*
       * -----------------------------------------
       * POSITION INITIALE DU POINT BLEU
       * -----------------------------------------
       */

      const initialPosition = path.getPointAtLength(0);

      gsap.set(bluePoint, {
        attr: {
          cx: initialPosition.x,
          cy: initialPosition.y,
        },
      });

      gsap.set(blueHalo, {
        attr: {
          cx: initialPosition.x,
          cy: initialPosition.y,
        },
      });

      gsap.set(bubble, {
        autoAlpha: 0,
      });

      /*
       * -----------------------------------------
       * ANIMATION DU HALO
       * -----------------------------------------
       */

      gsap.to(blueHalo, {
        attr: {
          r: 23,
        },
        opacity: 0,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /*
       * -----------------------------------------
       * TIMELINE PRINCIPALE
       * -----------------------------------------
       */

      const timeline = gsap.timeline({
        repeat: -1,

        onRepeat: () => {
          setActivePoint(null);

          blueTrail.style.strokeDashoffset = String(totalLength);

          blueTrailGlow.style.strokeDashoffset = String(totalLength);

          const start = path.getPointAtLength(0);

          gsap.set(bluePoint, {
            attr: {
              cx: start.x,
              cy: start.y,
            },
          });

          gsap.set(blueHalo, {
            attr: {
              cx: start.x,
              cy: start.y,
            },
          });
        },
      });

      let currentProgress = 0;

      /*
       * -----------------------------------------
       * PARCOURS DES ÉTAPES
       * -----------------------------------------
       */

      trekPoints.forEach((point) => {
        const targetProgress = point.progress;

        const distance =
          Math.abs(targetProgress - currentProgress) * totalLength;

        const duration = Math.max(2.5, distance / 130);

        const progressObject = {
          value: currentProgress,
        };

        /*
         * Déplacement
         */

        timeline.to(progressObject, {
          value: targetProgress,
          duration,
          ease: "none",

          onUpdate: () => {
            const progress = progressObject.value;

            const position = path.getPointAtLength(totalLength * progress);

            /*
             * Point bleu
             */

            gsap.set(bluePoint, {
              attr: {
                cx: position.x,
                cy: position.y,
              },
            });

            /*
             * Halo
             */

            gsap.set(blueHalo, {
              attr: {
                cx: position.x,
                cy: position.y,
              },
            });

            /*
             * Trait
             */

            const dashOffset = totalLength * (1 - progress);

            blueTrail.style.strokeDashoffset = String(dashOffset);

            blueTrailGlow.style.strokeDashoffset = String(dashOffset);
          },
        });

        currentProgress = targetProgress;

        /*
         * Arrivée
         */

        timeline.call(() => {
          setActivePoint(point);

          const position = path.getPointAtLength(totalLength * point.progress);

          gsap.set(bubble, {
            attr: {
              transform: `
                translate(
                  ${position.x - 110}
                  ${position.y - 115}
                )
              `,
            },
          });
        });

        /*
         * Apparition
         */

        timeline.to(bubble, {
          autoAlpha: 1,
          duration: 0.6,
          ease: "power3.out",
        });

        /*
         * Pause
         */

        timeline.to(
          {},
          {
            duration: 20,
          },
        );

        /*
         * Disparition
         */

        timeline.to(bubble, {
          autoAlpha: 0,
          duration: 0.7,
          ease: "power3.in",
        });
      });

      /*
       * -----------------------------------------
       * RETOUR AU DÉBUT
       * -----------------------------------------
       */

      const returnProgress = {
        value: currentProgress,
      };

      timeline.to(returnProgress, {
        value: 0,
        duration: 4,
        ease: "power2.inOut",

        onUpdate: () => {
          const progress = returnProgress.value;

          const position = path.getPointAtLength(totalLength * progress);

          gsap.set(bluePoint, {
            attr: {
              cx: position.x,
              cy: position.y,
            },
          });

          gsap.set(blueHalo, {
            attr: {
              cx: position.x,
              cy: position.y,
            },
          });

          const dashOffset = totalLength * (1 - progress);

          blueTrail.style.strokeDashoffset = String(dashOffset);

          blueTrailGlow.style.strokeDashoffset = String(dashOffset);
        },
      });

      /*
       * -----------------------------------------
       * RESET
       * -----------------------------------------
       */

      timeline.call(() => {
        setActivePoint(null);

        blueTrail.style.strokeDashoffset = String(totalLength);

        blueTrailGlow.style.strokeDashoffset = String(totalLength);
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return {
    mountainPathRef,
    blueTrailGlowRef,
    blueTrailRef,
    bluePointRef,
    blueHaloRef,
    bubbleRef,
    greenPointsRef,
    activePoint,
  };
}
