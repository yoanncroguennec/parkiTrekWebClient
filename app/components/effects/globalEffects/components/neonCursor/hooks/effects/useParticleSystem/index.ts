"use client";

import type { RefObject } from "react";
import { useEffect } from "react";
import gsap from "gsap";

import {
  PARTICLE_MAX_COUNT,
  PARTICLE_SPAWN_COUNT,
} from "../../../constants/particleSystem.constants";

import { createParticle, renderParticle, updateParticle } from "./functions";

import type { Particle } from "./types/particleSystem.types";

interface UseParticleSystemProps {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  maxParticles?: number;
}

export default function useParticleSystem({
  canvasRef,
  maxParticles = PARTICLE_MAX_COUNT,
}: UseParticleSystemProps) {
  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (event: MouseEvent) => {
      for (let index = 0; index < PARTICLE_SPAWN_COUNT; index++) {
        particles.push(createParticle(event.clientX, event.clientY));
      }

      if (particles.length > maxParticles) {
        particles.splice(0, particles.length - maxParticles);
      }
    };

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let index = particles.length - 1; index >= 0; index--) {
        const particle = particles[index];

        if (!particle) {
          continue;
        }

        if (!updateParticle(particle)) {
          particles.splice(index, 1);
          continue;
        }

        renderParticle(context, particle);
      }

      context.globalAlpha = 1;
    };

    resize();

    window.addEventListener("resize", resize);

    window.addEventListener("mousemove", handleMouseMove);

    gsap.ticker.add(render);

    return () => {
      gsap.ticker.remove(render);

      window.removeEventListener("resize", resize);

      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [canvasRef, maxParticles]);
}
