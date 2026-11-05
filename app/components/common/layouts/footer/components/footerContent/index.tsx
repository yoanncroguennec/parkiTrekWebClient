"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

import { Stack, Box } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticLink from "../magneticLink";
// ICONS
import {
  FiArrowUp,
  FiArrowUpRight,
  FiBookOpen,
  FiCompass,
  FiUsers,
} from "@/app/utils/constants/icons";

gsap.registerPlugin(ScrollTrigger);

export default function FooterContent() {
  const footerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const footer = footerRef.current;

    if (!footer) {
      return;
    }

    const ctx = gsap.context(() => {
      /*
       * =====================================================
       * CONTENT REVEAL
       * =====================================================
       */

      const revealElements = gsap.utils.toArray<HTMLElement>(".pt-footer__reveal");

      if (revealElements.length) {
        gsap.fromTo(
          revealElements,
          {
            y: 70,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            stagger: 0.07,
            ease: "power4.out",

            scrollTrigger: {
              trigger: footer,
              start: "top 80%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
            },
          }
        );
      }

      /*
       * =====================================================
       * MEGA TITLE
       * =====================================================
       */

      const title = footer.querySelector(".pt-footer__mega-title");

      const titleSpans = title?.querySelectorAll("span");

      if (title && titleSpans?.length) {
        gsap.fromTo(
          titleSpans,
          {
            yPercent: 120,
          },
          {
            yPercent: 0,
            duration: 1.35,
            stagger: 0.09,
            ease: "power4.out",

            scrollTrigger: {
              trigger: title,
              start: "top 85%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
            },
          }
        );
      }

      /* =================================================
     CONTENT REVEAL
  ================================================= */

      gsap.from(".pt-footer__reveal", {
        y: 70,
        opacity: 0,
        duration: 1.1,
        stagger: 0.07,
        ease: "power4.out",

        scrollTrigger: {
          trigger: footer,
          start: "top 82%",
        },
      });

      /*
       * =====================================================
       * REFRESH
       * =====================================================
       */

      ScrollTrigger.refresh();
    }, footer);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <Stack
      ref={footerRef}
      sx={{
        position: "relative",
        zIndex: 10,
        width: "100%",
        padding: "150px",
      }}
    >
      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <Stack
        component="section"
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Label vertical */}

          <Box
            sx={{
              position: "absolute",
              top: "10px",
              left: 0,
              writingMode: "vertical-rl",
              color: "#777782",
              fontSize: "8px",
              letterSpacing: "0.35em",
            }}
          >
            PLAN · ACTION · ESPOIR
          </Box>

          {/* =================================================
              MEGA TITLE
          ================================================= */}

          <Box
            component="h2"
            className="pt-footer__mega-title"
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: 0,
              overflow: "hidden",
              fontSize: "clamp(4rem, 8vw, 8.8rem)",
              lineHeight: 0.87,
              fontWeight: 500,
              letterSpacing: "-0.07em",
            }}
          >
            <span>Marcher.</span>

            <span>Sensibiliser.</span>

            <span
              style={{
                color: "#8066ff",
                textShadow: "0 0 45px rgba(128, 102, 255, 0.18)",
              }}
            >
              Faire avancer.
            </span>
          </Box>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <Box
            component="p"
            sx={{
              maxWidth: "430px",
              margin: "45px 0 30px",
              color: "#777782",
              fontSize: "16px",
              lineHeight: 1.7,
            }}
          >
            Un trek pour aller plus loin que les kilomètres.
            <br />
            Un projet pour faire avancer les regards sur Parkinson.
          </Box>

          {/* =================================================
              CTA
          ================================================= */}

          <Box
            component={Link}
            href="#trek"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: "18px",
              padding: "7px 7px 7px 24px",
              border: "1px solid rgba(20, 20, 30, 0.1)",
              borderRadius: "100px",
              color: "#17171d",
              textDecoration: "none",
              background: "rgba(255, 255, 255, 0.68)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
              transition: "box-shadow 0.4s ease",

              "&:hover": {
                boxShadow: "0 30px 80px rgba(128, 102, 255, 0.18)",
              },
            }}
          >
            <span>Découvrir l&apos;aventure</span>

            <Box
              sx={{
                display: "grid",
                placeItems: "center",
                width: "48px",
                height: "48px",
                color: "#fff",
                background: "#8066ff",
                borderRadius: "50%",
                transition: "transform 0.4s ease",
              }}
            >
              <FiArrowUpRight />
            </Box>
          </Box>
        </Stack>

        {/* =================================================
            DIVIDER
        ================================================= */}

        <Box
          sx={{
            width: "10px",
            height: "100%",
            margin: "130px 0 80px",
            background: "linear-gradient(90deg, transparent, #8066ff, transparent)",
            boxShadow: "0 0 25px rgba(128, 102, 255, 0.5)",
            borderRadius: "50px",
          }}
        />

        {/* =================================================
            LINKS
        ================================================= */}

        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1.5fr",
              gap: "45px",
            }}
          >
            {/* Explorer */}

            <Box
              className="pt-footer__reveal"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "7px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "18px",
                  color: "#777782",
                  fontSize: "9px",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                }}
              >
                <FiCompass />
                EXPLORER
              </Box>

              <MagneticLink href="/">Accueil</MagneticLink>

              <MagneticLink href="/trek">Le Trek</MagneticLink>

              <MagneticLink href="/parkinson">Parkinson</MagneticLink>

              <MagneticLink href="/histoire">Mon histoire</MagneticLink>

              <MagneticLink href="/galerie">Galerie</MagneticLink>

              <MagneticLink href="/partenaires">Partenaires</MagneticLink>
            </Box>

            {/* Ressources */}

            <Box
              className="pt-footer__reveal"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "7px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "18px",
                  color: "#777782",
                  fontSize: "9px",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                }}
              >
                <FiBookOpen />
                RESSOURCES
              </Box>

              <MagneticLink>Comprendre Parkinson</MagneticLink>

              <MagneticLink>Conseils</MagneticLink>

              <MagneticLink>Témoignages</MagneticLink>

              <MagneticLink>FAQ</MagneticLink>

              <MagneticLink>Blog</MagneticLink>

              <MagneticLink>Presse</MagneticLink>
            </Box>

            {/* Projet */}

            <Box
              className="pt-footer__reveal"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "7px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "18px",
                  color: "#777782",
                  fontSize: "9px",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                }}
              >
                <FiUsers />
                PROJET
              </Box>

              <MagneticLink>Nos valeurs</MagneticLink>

              <MagneticLink>Nos partenaires</MagneticLink>

              <MagneticLink>Faire un don</MagneticLink>

              <MagneticLink>Nous soutenir</MagneticLink>

              <MagneticLink>Nous contacter</MagneticLink>
            </Box>
          </Box>
        </Stack>
      </Stack>

      {/* =================================================
            QUOTE
        ================================================= */}

      <div
        className="pt-footer__reveal"
        style={{
          maxWidth: "700px",
          margin: "0 auto 130px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#8066ff",
            fontSize: "70px",
            lineHeight: "0.5",
          }}
        >
          “
        </div>

        <blockquote
          style={{
            margin: "20px 0",
            fontSize: "clamp(30px, 4vw, 55px)",
            lineHeight: "1.05",
            letterSpacing: "-0.05em",
          }}
        >
          Ce n&apos;est pas le chemin qui est difficile, c&apos;est l&apos;idée de rester immobile.
        </blockquote>

        <span
          style={{
            color: "z777782",
            fontSize: "9px",
            letterSpacing: "0.25em",
          }}
        >
          — YOANN
        </span>
      </div>

      {/* =================================================
                  BOTTOM
              ================================================= */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "25px 0",
          borderTop: "1px solid var(--line)",
          color: "#777782",
          fontSize: "9px",
          letterSpacing: "0.12em",
        }}
      >
        <span>© {new Date().getFullYear()} Parki Trek</span>

        <span>UN PROJET NÉ D&apos;UN RÊVE, PORTÉ PAR L&apos;ESPOIR.</span>

        <a href="#top" className="pt-footer__back" aria-label="Retour en haut">
          <FiArrowUp />
        </a>
      </Box>
    </Stack>
  );
}
