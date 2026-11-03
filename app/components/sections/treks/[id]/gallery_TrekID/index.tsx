"use client";

import { Stack } from "@mui/material";
// HOOKS
import useHorizontalGallery from "./hooks/useHorizontalGallery.ts";
// COMPONENTS
import { Content, Footer, Header } from "./components";

export default function Gallery_TrekID_Section() {
  const {
    sectionRef,
    trackRef,
    progress,
    activeIndex,
  } = useHorizontalGallery();

  return (
    // "sectionRef" (Référence) & "<section>" (Élément HTML) : Déplace horizontalement toutes les cartes."
    <Stack
      component="section"
      ref={sectionRef}
      sx={{
        position: "relative",
        justifyContent: "center",
        height: "100vh",
        overflow: "hidden",

        // Dégradé cinématique Parki Trek.
        background: `
          linear-gradient(
            125deg,
            #0B1510 0%,
            #17271D 30%,
            #31583C 60%,
            #72C889 100%
          )
        `,

        // Agrandit le dégradé pour créer un mouvement visible.
        backgroundSize: "300% 300%",

        // Position initiale du dégradé.
        backgroundPosition: "0% 50%",
      }}
    >
      <Header
        activeIndex={activeIndex}
        progress={progress}
        sectionRef={sectionRef}
      />

      <Content trackRef={trackRef} />

      <Footer
        progress={progress}
      />
    </Stack>
  );
}