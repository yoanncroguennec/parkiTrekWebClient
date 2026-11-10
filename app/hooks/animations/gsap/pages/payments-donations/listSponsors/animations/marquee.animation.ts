import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// MARQUEE ANIMATION
// Animation continue d'une ligne de sponsors
// ==========================================

export function createMarqueeAnimation(
  row: HTMLDivElement,
  isPaused: () => boolean,
  direction: 1 | -1
) {
  // Vérifier la disponibilité de l'élément
  if (!row) {
    return () => {};
  }

  // Largeur d'une série de sponsors
  const width = row.scrollWidth / 2;

  if (width <= 0) {
    return () => {};
  }

  // ==========================================
  // SPEED
  // ==========================================

  const speed = {
    current: 1,
  };

  const targetSpeed = {
    current: 1,
  };

  // ==========================================
  // INITIAL POSITION
  // ==========================================

  let x = direction === -1 ? 0 : -width;

  // ==========================================
  // MARQUEE TICKER
  // Défilement horizontal continu
  // ==========================================

  const ticker = () => {
    // Suspendre uniquement la ligne survolée
    if (isPaused()) return;

    x += direction * speed.current;

    // Boucle vers la position initiale
    if (direction === -1 && x <= -width) {
      x = 0;
    }

    if (direction === 1 && x >= 0) {
      x = -width;
    }

    gsap.set(row, { x });
  };

  gsap.ticker.add(ticker);

  // ==========================================
  // SCROLL SPEED
  // Accélération selon la vitesse de défilement
  // ==========================================

  const scrollTrigger = ScrollTrigger.create({
    start: 0,
    end: "max",

    onUpdate(self) {
      targetSpeed.current = 1 + Math.abs(self.getVelocity()) / 2500;
    },
  });

  // ==========================================
  // SPEED TRANSITION
  // Retour progressif à la vitesse normale
  // ==========================================

  const speedTicker = () => {
    speed.current += (targetSpeed.current - speed.current) * 0.08;

    targetSpeed.current += (1 - targetSpeed.current) * 0.03;
  };

  gsap.ticker.add(speedTicker);

  // ==========================================
  // CLEANUP
  // ==========================================

  return () => {
    gsap.ticker.remove(ticker);
    gsap.ticker.remove(speedTicker);

    scrollTrigger.kill();

    gsap.set(row, {
      clearProps: "x",
    });
  };
}
