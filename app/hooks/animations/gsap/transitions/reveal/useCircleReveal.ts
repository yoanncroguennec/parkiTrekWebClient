"use client";

import { RefObject, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Lenis from "lenis";

interface UseCircleRevealProps {
  rootRef: RefObject<HTMLDivElement | null>;
  circleRef: RefObject<HTMLDivElement | null>;
  textRef: RefObject<HTMLHeadingElement | null>;
  contentRef: RefObject<HTMLDivElement | null>;
  whiteRef: RefObject<HTMLDivElement | null>;

  onRevealStart?: () => void;
  onRevealComplete?: () => void;
}

export function useCircleReveal({
  rootRef,
  circleRef,
  textRef,
  contentRef,
  whiteRef,
  onRevealStart,
  onRevealComplete,
}: UseCircleRevealProps) {
  // --------------------------------
  // CALLBACK REFS
  // --------------------------------

  const callbackStartRef = useRef(onRevealStart);
  const callbackCompleteRef = useRef(onRevealComplete);

  // Mise à jour des callbacks après le render
  useLayoutEffect(() => {
    callbackStartRef.current = onRevealStart;
  }, [onRevealStart]);

  useLayoutEffect(() => {
    callbackCompleteRef.current = onRevealComplete;
  }, [onRevealComplete]);

  // --------------------------------
  // REVEAL
  // --------------------------------

  useLayoutEffect(() => {
    const root = rootRef.current;
    const circle = circleRef.current;
    const text = textRef.current;
    const content = contentRef.current;
    const white = whiteRef.current;

    if (!root || !circle || !text || !content || !white) {
      return;
    }

    const ctx = gsap.context(() => {
      // --------------------------------
      // LENIS
      // --------------------------------

      const lenis = new Lenis({
        autoRaf: true,
      });

      lenis.stop();

      // --------------------------------
      // CIRCLE SCALE
      // --------------------------------

      const diagonal = Math.sqrt(
        window.innerWidth ** 2 + window.innerHeight ** 2,
      );

      const size = 24;

      const scale = (diagonal * 1.25) / size;

      // --------------------------------
      // INITIAL STATE
      // --------------------------------

      gsap.set(circle, {
        width: size,
        height: size,
        scale: 1,
        xPercent: -50,
        yPercent: -50,
      });

      gsap.set(text, {
        xPercent: -50,
        yPercent: -50,
        opacity: 0,
        scale: 0.8,
        filter: "blur(0px)",
      });

      gsap.set(content, {
        opacity: 0,
        scale: 1.04,
        filter: "blur(12px)",
      });

      gsap.set(white, {
        opacity: 0,
      });

      // --------------------------------
      // TIMELINE
      // --------------------------------

      const tl = gsap.timeline({
        onComplete: () => {
          // Réactive le scroll
          lenis.start();

          // Fin complète du reveal
          callbackCompleteRef.current?.();
        },
      });

      // --------------------------------
      // 1 — DELAY INITIAL
      // --------------------------------

      tl.to(
        {},
        {
          duration: 0.6,
        },
      )

        // --------------------------------
        // 2 — APPARITION DU TEXTE
        // --------------------------------

        .to(text, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        })

        // --------------------------------
        // 3 — PREMIÈRE EXPANSION
        // --------------------------------

        .to(circle, {
          scale: scale * 0.08,
          duration: 1.1,
          ease: "power2.inOut",
        })

        // --------------------------------
        // 4 — EXPANSION PRINCIPALE
        // --------------------------------

        .to(circle, {
          scale,
          duration: 2.2,
          ease: "expo.inOut",
        })

        // --------------------------------
        // 5 — DISPARITION DU TEXTE
        // --------------------------------

        .to(
          text,
          {
            opacity: 0,
            scale: 0.7,
            filter: "blur(8px)",
            duration: 0.8,
            ease: "power3.inOut",
          },
          "-=1.5",
        )

        // --------------------------------
        // 6 — APPARITION DU CONTENU
        // --------------------------------

        .to(
          content,
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power3.out",

            // Le Hero commence ici
            onStart: () => {
              callbackStartRef.current?.();
            },
          },
          "-=0.8",
        )

        // --------------------------------
        // 7 — FLASH BLANC
        // --------------------------------

        .to(white, {
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        })

        // --------------------------------
        // 8 — SUPPRESSION DU REVEAL
        // --------------------------------

        .set(root, {
          display: "none",
        })

        // --------------------------------
        // 9 — DISPARITION DU FLASH
        // --------------------------------

        .to(white, {
          opacity: 0,
          duration: 0.7,
          ease: "power2.inOut",
        });

      // --------------------------------
      // CLEANUP
      // --------------------------------

      return () => {
        tl.kill();
        lenis.destroy();
      };
    }, root);

    return () => {
      ctx.revert();
    };
  }, [rootRef, circleRef, textRef, contentRef, whiteRef]);
}

// import { RefObject, useLayoutEffect } from "react";
// import gsap from "gsap";
// import Lenis from "lenis";

// interface UseCircleRevealProps {
//   rootRef: RefObject<HTMLDivElement | null>;
//   circleRef: RefObject<HTMLDivElement | null>;
//   textRef: RefObject<HTMLHeadingElement | null>;
//   contentRef: RefObject<HTMLDivElement | null>;
//   whiteRef: RefObject<HTMLDivElement | null>;
//   onRevealComplete?: () => void;
// }

// export function useCircleReveal({
//   rootRef,
//   circleRef,
//   textRef,
//   contentRef,
//   whiteRef,
//   onRevealComplete,
// }: UseCircleRevealProps) {
//   useLayoutEffect(() => {
//     const root = rootRef.current;
//     const circle = circleRef.current;
//     const text = textRef.current;
//     const content = contentRef.current;
//     const white = whiteRef.current;

//     if (!root || !circle || !text || !content || !white) return;

//     const ctx = gsap.context(() => {
//       const lenis = new Lenis({
//         autoRaf: true,
//       });

//       lenis.stop();

//       const diagonal = Math.sqrt(
//         window.innerWidth ** 2 + window.innerHeight ** 2
//       );

//       const size = 24;
//       const scale = (diagonal * 1.25) / size;

//       // ─────────────────────────────
//       // ÉTATS INITIAUX
//       // ─────────────────────────────

//       gsap.set(circle, {
//         width: size,
//         height: size,
//         scale: 1,
//         xPercent: -50,
//         yPercent: -50,
//       });

//       gsap.set(text, {
//         xPercent: -50,
//         yPercent: -50,
//         opacity: 0,
//         scale: 0.8,
//         filter: "blur(0px)",
//       });

//       gsap.set(content, {
//         opacity: 0,
//         scale: 1.04,
//         filter: "blur(12px)",
//       });

//       gsap.set(white, {
//         opacity: 0,
//       });

//       // ─────────────────────────────
//       // TIMELINE
//       // ─────────────────────────────

//       const tl = gsap.timeline({
//         onComplete: () => {
//           lenis.start();
//           onRevealComplete?.();
//         },
//       });

//       // 1 — Noir total
//       tl.to({}, {
//         duration: 0.6,
//       })

//         // 2 — Apparition de "Soutenir"
//         .to(text, {
//           opacity: 1,
//           scale: 1,
//           duration: 0.5,
//           ease: "power2.out",
//         })

//         // 3 — Le cercle commence très doucement
//         .to(circle, {
//           scale: scale * 0.08,
//           duration: 1.1,
//           ease: "power2.inOut",
//         })

//         // 4 — Le cercle prend progressivement tout l'écran
//         .to(circle, {
//           scale,
//           duration: 2.2,
//           ease: "expo.inOut",
//         })

//         // 5 — "Soutenir" disparaît pendant l'expansion finale
//         .to(
//           text,
//           {
//             opacity: 0,
//             scale: 0.7,
//             filter: "blur(8px)",
//             duration: 0.8,
//             ease: "power3.inOut",
//           },
//           "-=1.5"
//         )

//         // 6 — Apparition du contenu
//         .to(
//           content,
//           {
//             opacity: 1,
//             scale: 1,
//             filter: "blur(0px)",
//             duration: 1.2,
//             ease: "power3.out",
//           },
//           "-=0.8"
//         )

//         // 7 — Flash blanc
//         .to(white, {
//           opacity: 1,
//           duration: 0.2,
//           ease: "power2.out",
//         })

//         // 8 — Suppression du reveal
//         .set(root, {
//           display: "none",
//         })

//         // 9 — Le blanc disparaît
//         .to(white, {
//           opacity: 0,
//           duration: 0.7,
//           ease: "power2.inOut",
//         })

//         // 10 — Activation du scroll
//         .call(() => {
//           lenis.start();
//         });

//       return () => {
//         lenis.destroy();
//         tl.kill();
//       };
//     }, root);

//     return () => {
//       ctx.revert();
//     };
//   }, [rootRef, circleRef, textRef, contentRef, whiteRef, onRevealComplete]);
// }
