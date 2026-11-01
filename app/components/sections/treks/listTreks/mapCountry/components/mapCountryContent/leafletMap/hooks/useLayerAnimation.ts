"use client";

import { useEffect } from "react";
import gsap from "gsap";
import * as L from "leaflet";

import {
  defaultStyle,
  // selectedStyle,
  visitedStyle,
} from "../styles/LeafletMap.Styles";

import type { FeatureCollection } from "geojson";
import type { ParkiFeature } from "./useGeoJson";

export interface LayerWithFeature extends L.Path {
  parkiFeature?: ParkiFeature;
}

export function useLayerAnimation(
  geojson: FeatureCollection | null,
  layersRef: React.RefObject<LayerWithFeature[]>
) {
  useEffect(() => {
    if (!geojson) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      layersRef.current.forEach((layer, index) => {
        const element = layer.getElement();

        if (!element) {
          return;
        }

        // État initial
        layer.setStyle({
          fillOpacity: 0,
          opacity: 0,
        });

        gsap.set(element, {
          opacity: 0,
          scale: 0.85,
          transformOrigin: "center center",
          filter: "drop-shadow(0 0 0px rgba(34,197,94,0))",
        });

        // Animation apparition
        gsap.to(element, {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          delay: index * 0.05,
          ease: "back.out(1.8)",
        });

        // Glow
        gsap.fromTo(
          element,
          {
            filter: "drop-shadow(0 0 0px rgba(34,197,94,0))",
          },
          {
            filter: "drop-shadow(0 0 18px rgba(34,197,94,.35)",
            duration: 0.45,
            delay: index * 0.05,
            repeat: 1,
            yoyo: true,
            ease: "power2.out",
          }
        );

        // Animation du fill
        gsap.to(
          { p: 0 },
          {
            p: 1,
            duration: 0.9,
            delay: index * 0.05,
            ease: "power2.out",

            onUpdate() {
              const target = this.targets()[0] as {
                p: number;
              };

              const area = layer.parkiFeature?.properties?.parkiArea;

              const style = area?.visited ? visitedStyle : defaultStyle;

              layer.setStyle({
                ...style,
                fillOpacity: (style.fillOpacity ?? 1) * target.p,
                opacity: (style.opacity ?? 1) * target.p,
              });
            },
          }
        );
      });
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [geojson, layersRef]);
}
