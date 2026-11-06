import {
  PARTICLE_LIFE_DECAY,
  PARTICLE_SIZE_DECAY,
  PARTICLE_MIN_VISIBLE_SIZE,
} from "../../../../constants/particleSystem.constants";

import type { Particle } from "../types/particleSystem.types";

export default function updateParticle(particle: Particle): boolean {
  particle.x += particle.vx;
  particle.y += particle.vy;

  particle.life -= PARTICLE_LIFE_DECAY;
  particle.size *= PARTICLE_SIZE_DECAY;

  return particle.life > 0 && particle.size >= PARTICLE_MIN_VISIBLE_SIZE;
}
