"use client";

import { CircularProgress } from "@mui/material";
import { GeoJSON, MapContainer } from "react-leaflet";
// LEAFLET FUNCTIONS
import { createLeafletStyle, createOnEachFeature } from "./leaflet/functions";
// TYPES
import { MapContentProps } from "..";
// HOOKS
import { useGeoJson, useLayerAnimation, useScrollIntoView, useSelectedAreaStyle } from "./hooks";
// COMPONENTS
import FitBounds from "./components/fitBounds";
// STYLES
import { LeafletMapContainer, Overlay } from "./LeafletMap.Styles";
import EmptyState from "@/app/components/common/emptyState";

export default function LeafletMap({
  cards,
  rootRef,
  isExpanded,
  currentIndex,
  selectedArea,
  setSelectedArea,
  layersRef,
}: MapContentProps) {
  // console.log("Current index :", currentIndex);
  // console.log("Country :", cards[currentIndex].country);
  // ======================================================
  // LOAD GEOJSON
  // ======================================================
  const { geojson, loading } = useGeoJson(cards, currentIndex);
  // console.log("geojson", geojson);

  // ======================================================
  // HOOKS
  // ======================================================
  useLayerAnimation(geojson, layersRef);

  useSelectedAreaStyle(selectedArea, layersRef);

  // ======================================================
  // STYLE
  // =======================================================
  const style = createLeafletStyle(selectedArea);

  // ======================================================
  // EVENTS
  // ======================================================
  // Crée la fonction de gestion des événements de chaque Feature du GeoJSON.
  // Génère les événements (clic, survol, tooltip) pour chaque Feature.
  const onEachFeature = createOnEachFeature({
    country: cards[currentIndex].country,
    selectedArea,
    setSelectedArea,
    layersRef,
  });

  // ======================================================
  // SCROLL
  // ======================================================
  // Fait défiler automatiquement la page jusqu'au composant lorsqu'il est ouvert.
  useScrollIntoView(isExpanded, rootRef);

  // console.log("GeoJSON features affichées :", geojson?.features.length);

  return (
    <LeafletMapContainer>
      <MapContainer
        attributionControl={false} // Affiche les attributions Leaflet
        minZoom={5} // Zoom minimum => Dézoomer
        maxZoom={8} // Zoom maximum => Zoomer
        style={{
          background: "transparent",
          width: "100%",
          height: "100vh",
        }}
        center={[46.6, 2.2]} // Centre initial de la carte - Valeur par défaut uniquement
        doubleClickZoom={false} // Zoom au double-clic
        dragging={true} // Autorise le déplacement de la carte
        scrollWheelZoom={true} // Autorise le zoom avec la molette
        touchZoom={false} // Zoom tactile
        zoom={5} // Niveau de zoom initial
        zoomControl={false} // Affiche les boutons + / -
      >
        {geojson && (
          <>
            <FitBounds data={geojson} />

            <GeoJSON
              key={`${currentIndex}-${geojson.features.length}`}
              data={geojson}
              style={style}
              onEachFeature={onEachFeature}
            />
          </>
        )}
      </MapContainer>

      {loading && (
        <Overlay>
          <CircularProgress />
        </Overlay>
      )}

      {!loading && geojson?.features.length === 0 && (
        <EmptyState
          title="Les chemins se dessinent..."
          description="Cette destination sera bientôt prête à être explorée."
        />
      )}
    </LeafletMapContainer>
  );
}

// <pre
//   style={{
//     position: "absolute",
//     zIndex: 9999,
//     background: "white",
//   }}
// >
//   {JSON.stringify(
//     {
//       country: cards[currentIndex].country,
//       features: geojson.features.length,
//     },
//     null,
//     2
//   )}
// </pre>
