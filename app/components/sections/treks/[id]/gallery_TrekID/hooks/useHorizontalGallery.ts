"use client";

import { useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { photos } from "../data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function useHorizontalGallery() {
  // Crée une référence vers la section HTML contenant la galerie.
  // HTMLElement correspond à un élément HTML classique.
  // null signifie que l'élément n'est pas encore disponible.
  const sectionRef = useRef<HTMLElement | null>(null);

  // Crée une référence vers le conteneur qui contient toutes les cartes.
  // HTMLDivElement correspond à un élément HTML <div>.
  // GSAP utilisera cette référence pour déplacer les cartes horizontalement.
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Stocke la progression du défilement horizontal, exprimée en pourcentage.
  // Au départ, la progression est de 0 %.
  // setProgress permet de modifier cette valeur.
  const [progress, setProgress] = useState<number>(0);

  // Stocke l'index de la carte actuellement considérée comme active.
  // Au départ, l'index est 0, donc la première carte.
  // setActiveIndex permet de mettre à jour cet index.
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // useGSAP permet d'exécuter du code GSAP dans un composant React.
  // Il facilite également le nettoyage des animations lorsque nécessaire.
  useGSAP(
    () => {
      // Récupère l'élément HTML correspondant à sectionRef.
      // section représente la section entière de la galerie.
      const section = sectionRef.current;

      // Récupère l'élément HTML correspondant à trackRef.
      // track représente la piste horizontale contenant les cartes.
      const track = trackRef.current;

      // Vérifie que les deux éléments HTML existent.
      // Si l'un des deux est absent, on arrête l'exécution
      // pour éviter une erreur JavaScript.
      if (!section || !track) return;

      // La fonction getDistance() créé : Calculant la distance totale que la piste doit parcourir horizontalement.
      const getDistance = () => {
        // track.scrollWidth : Représente la largeur totale du contenu, y compris la partie qui dépasse de son conteneur.
        // section.clientWidth : représente la largeur visible de la section.

        // On soustrait la largeur visible de la largeur totale
        // pour obtenir la distance nécessaire au défilement.

        // Math.max(0, ...) empêche d'obtenir une distance négative.
        return Math.max(0, track.scrollWidth - section.clientWidth);
      };

      // ANIMATION PRINCIPALE : DÉFILEMENT HORIZONTAL
      // gsap.to() anime un élément vers les valeurs indiquées.
      // Ici, GSAP déplace la piste horizontale vers la gauche.
      const horizontalTween = gsap.to(track, {
        // x : Déplacement horizontal.
        // Valeur négative : Déplace la piste vers la gauche.
        //
        // Function getDistance() : Calcule la distance à parcourir.
        // Le signe moins : Pour déplacer la piste vers la gauche.
        //
        // La fonction est réévaluée lorsque GSAP doit recalculer les valeurs de l'animation.
        x: () => -getDistance(),
        // ease: "none" : Désactive l'accélération et la décélération.
        // Le déplacement reste linéaire et suit directement
        // la progression du défilement grâce à scrub.
        ease: "none",

        // CONFIG DU COMPORTEMENT DE L'ANIMATION AU DÉFILEMENT
        scrollTrigger: {
          // Définit la section comme élément déclencheur.
          // "ScrollTrigger" : Surveille la position de cette section.
          trigger: section,
          // L'animation commence lorsque le haut de la section
          // atteint le haut de la fenêtre du navigateur.
          start: "top top",

          // Définit la longueur du défilement nécessaire pour terminer l'animation.
          // La distance : Correspond à la largeur à parcourir horizontalement par la piste.
          // "Le signe +="" : Signifie que la fin est définie relativement au point de départ.
          end: () => `+=${getDistance()}`,
          // Immobilise temporairement la section à l'écran pendant que la piste défile horizontalement.
          pin: true,

          pinSpacing: true,

          // Lie la progression de l'animation au défilement vertical.
          //
          // scrub: 1 signifie que GSAP met environ une seconde à rattraper la progression demandée par le scroll.
          // Cela rend le mouvement plus fluide.
          scrub: 1,

          anticipatePin: 1,

          // Demande à ScrollTrigger de recalculer les valeurs de l'animation lors d'un rafraîchissement.
          // Utile notamment lorsque les dimensions changent après un redimensionnement de la fenêtre.
          invalidateOnRefresh: true,
          // Affiche les repères visuels de ScrollTrigger uniquement en environnement de développement.
          // Les repères montrent notamment le début et la fin de la zone de défilement.
          markers: process.env.NODE_ENV === "development",

          // Fonction exécutée à chaque mise à jour de ScrollTrigger.
          // Elle reçoit self, l'objet contenant les informations sur la progression actuelle du défilement.
          onUpdate: (self) => {
            // Déplacement du dégradé en fonction de la progression du scroll de la galerie en pourcentage
            const percentage = self.progress * 100;

            // Éviter les mises à jour React inutiles
            setProgress((previous) =>
              Math.round(previous) === Math.round(percentage) ? previous : percentage
            );

            // Calcule l'index de la carte à considérer comme active.
            // "self.progress * photos.length" : Répartit la progression entre les différentes cartes.
            // "Math.floor" : Arrondit le résultat à l'entier inférieur.
            //
            // Exemple avec 4 cartes :
            // 0 %   -> index 0
            // 30 %  -> index 1
            // 60 %  -> index 2
            // 90 %  -> index 3
            const index = Math.min(photos.length - 1, Math.floor(self.progress * photos.length));

            setActiveIndex((previous) => (previous === index ? previous : index));

            // Animation du dégradé
            gsap.set(section, {
              // | Progression | Position horizontale | Effet |
              // |---:|---:|---|
              // | 0 % | `0% 50%` | Début du dégradé |
              // | 25 % | `25% 50%` | Transition des nuances |
              // | 50 % | `50% 50%` | Dégradé déplacé vers son centre |
              // | 75 % | `75% 50%` | Apparition des nuances suivantes |
              // | 100 % | `100% 50%` | Fin du mouvement du dégradé |
              backgroundPosition: `${percentage}% 50%`,
            });
          },
        },
      });

      // ANIMATION D'APPARITION ET DE DISPARITION DES CARTES
      const cards = track.querySelectorAll<HTMLElement>("article");

      cards.forEach((card) => {
        const cardAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            containerAnimation: horizontalTween,

            // La carte commence à apparaître depuis la droite.
            start: "left 100%",

            // La carte termine son animation lorsqu'elle sort à gauche.
            end: "right 0%",

            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        cardAnimation
          // 1. APPARITION
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
          // 2. DISPARITION
          .to(card, {
            opacity: 0.001,
            scale: 0.92,
            y: -25,
            duration: 0.5,
            ease: "none",
          });
      });

      // ATTENDRE LE CHARGEMENT DES IMAGES
      const images = Array.from(track.querySelectorAll<HTMLImageElement>("img"));

      Promise.all(images.map((image) => image.decode().catch(() => undefined))).then(() => {
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
    // Options de configuration de useGSAP.
    {
      // Limite le contexte GSAP à l'élément sectionRef.
      //
      // Les animations créées dans ce contexte sont associées à la section, ce qui facilite leur nettoyage.
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
