// GOOD
"use client";

// Videos
const mediaCellularVideo = "/assets/videos/Summiting the Matterhorn with an FPV Drone.mp4";

export default function MediaCellular() {
  return (
    <svg
      // Zone de dessin virtuelle
      viewBox="0 0 1000 1000"
      // Le SVG occupe toute la largeur et la hauteur de son conteneur
      width="100%"
      height="100%"
      // Conserve les proportions en remplissant entièrement le conteneur
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Définition d'un masque (clipPath) utilisé pour découper la vidéo */}
        <clipPath id="test">
          <path
            d="
              M300 0
              C700 0 760 220 520 340
              C300 450 300 560 520 660
              C760 780 700 1000 300 1000
              L1000 1000
              L1000 0
              Z
            "
          />
        </clipPath>
      </defs>

      {/* 
        foreignObject permet d'intégrer du HTML (ici une balise <video>)
        directement dans un SVG.
      */}
      <foreignObject x="0" y="0" width="1000" height="1000" clipPath="url(#test)">
        <video
          autoPlay
          muted
          loop
          // Lecture native sur mobile (évite le plein écran automatique)
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={mediaCellularVideo} type="video/mp4" />
        </video>
      </foreignObject>
    </svg>
  );
}
