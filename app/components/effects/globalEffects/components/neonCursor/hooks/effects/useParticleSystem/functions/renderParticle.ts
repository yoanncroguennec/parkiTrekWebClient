import {
  PARTICLE_COLOR,
  PARTICLE_SHADOW_BLUR,
} from "../../../../constants/particleSystem.constants";

import type { Particle } from "../types/particleSystem.types";

export default function renderParticle(
  context: CanvasRenderingContext2D,
  particle: Particle,
) {
  context.beginPath();

  context.globalAlpha = particle.life;
  context.fillStyle = PARTICLE_COLOR;
  context.shadowColor = PARTICLE_COLOR;
  context.shadowBlur = PARTICLE_SHADOW_BLUR;

  context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

  context.fill();
}
