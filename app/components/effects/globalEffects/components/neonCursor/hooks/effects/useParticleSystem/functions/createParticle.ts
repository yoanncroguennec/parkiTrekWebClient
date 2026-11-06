import {
  PARTICLE_INITIAL_LIFE,
  PARTICLE_MAX_SIZE,
  PARTICLE_MIN_SIZE,
  PARTICLE_VELOCITY,
} from "../../../../constants/particleSystem.constants";

import type { Particle } from "../types/particleSystem.types";

export default function createParticle(x: number, y: number): Particle {
  return {
    x,
    y,
    vx: (Math.random() - 0.5) * PARTICLE_VELOCITY,
    vy: (Math.random() - 0.5) * PARTICLE_VELOCITY,
    life: PARTICLE_INITIAL_LIFE,
    size:
      Math.random() * (PARTICLE_MAX_SIZE - PARTICLE_MIN_SIZE) +
      PARTICLE_MIN_SIZE,
  };
}
