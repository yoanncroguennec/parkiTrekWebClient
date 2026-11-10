"use client";

import { forwardRef, useEffect, useRef } from "react";

import * as PIXI from "pixi.js";

type Props = {
  width?: number | string;
  height?: number | string;
  image1: string;
  image2: string;
  displacementMap: string;
  intensity?: number;
  speed?: number;
};

const LiquidImageTransition = forwardRef<HTMLDivElement, Props>(
  (
    { width = 800, height = 500, image1, image2, displacementMap, intensity = 120, speed = 0.15 },
    ref
  ) => {
    // =====================================================
    // REFS
    // =====================================================

    const containerRef = useRef<HTMLDivElement | null>(null);

    const appRef = useRef<PIXI.Application | null>(null);

    // =====================================================
    // PIXI
    // =====================================================

    useEffect(() => {
      let destroyed = false;

      const initPixi = async () => {
        if (!containerRef.current) {
          return;
        }

        // =================================================
        // DESTROY PREVIOUS APP
        // =================================================

        if (appRef.current) {
          appRef.current.destroy(true, {
            children: true,
          });

          appRef.current = null;
        }

        // =================================================
        // CREATE PIXI APP
        // =================================================

        const app = new PIXI.Application();

        await app.init({
          width: typeof width === "number" ? width : parseInt(width),

          height: typeof height === "number" ? height : parseInt(height),

          backgroundAlpha: 0,

          antialias: true,
        });

        if (destroyed) {
          app.destroy(true, {
            children: true,
          });

          return;
        }

        appRef.current = app;

        containerRef.current.appendChild(app.canvas);

        // =================================================
        // LOAD ASSETS
        // =================================================

        const [tex1, tex2, dispTex] = await Promise.all([
          PIXI.Assets.load(image1),

          PIXI.Assets.load(image2),

          PIXI.Assets.load(displacementMap),
        ]);

        if (destroyed) {
          return;
        }

        // =================================================
        // SPRITES
        // =================================================

        const sprite1 = new PIXI.Sprite(tex1);

        const sprite2 = new PIXI.Sprite(tex2);

        // =================================================
        // FIT COVER
        // =================================================

        const fitCover = (sprite: PIXI.Sprite) => {
          const sw = app.screen.width;

          const sh = app.screen.height;

          const iw = sprite.texture.width;

          const ih = sprite.texture.height;

          const scale = Math.max(sw / iw, sh / ih);

          sprite.width = iw * scale;

          sprite.height = ih * scale;

          sprite.x = (sw - sprite.width) / 2;

          sprite.y = (sh - sprite.height) / 2;
        };

        fitCover(sprite1);
        fitCover(sprite2);

        // =================================================
        // DISPLACEMENT
        // =================================================

        const displacementSprite = new PIXI.Sprite(dispTex);

        displacementSprite.texture.baseTexture.wrapMode = "repeat";

        const displacementFilter = new PIXI.DisplacementFilter(displacementSprite);

        displacementFilter.scale.set(0);

        // =================================================
        // INITIAL SPRITE STATE
        // =================================================

        sprite2.filters = [displacementFilter];

        sprite2.alpha = 0;

        // =================================================
        // ADD TO STAGE
        // =================================================

        app.stage.addChild(sprite1, sprite2, displacementSprite);

        // =================================================
        // TRANSITION STATE
        // =================================================

        let phase: "idle" | "entering" | "full" | "leaving" = "idle";

        let targetAlpha = 0;
        let currentAlpha = 0;

        let targetScale = 0;
        let currentScale = 0;

        // =================================================
        // TICKER
        // =================================================

        app.ticker.add(() => {
          currentAlpha += (targetAlpha - currentAlpha) * speed;

          currentScale += (targetScale - currentScale) * speed;

          sprite2.alpha = currentAlpha;

          displacementFilter.scale.set(currentScale);

          displacementSprite.x += 1;
          displacementSprite.y += 1;

          // =============================================
          // ENTERING → FULL
          // =============================================

          if (phase === "entering" && Math.abs(currentScale - targetScale) < 0.5) {
            phase = "full";

            targetScale = 0;
            targetAlpha = 1;
          }

          // =============================================
          // LEAVING → IDLE
          // =============================================

          if (phase === "leaving" && Math.abs(currentScale - targetScale) < 0.5) {
            phase = "idle";

            targetScale = 0;
            targetAlpha = 0;
          }
        });

        // =================================================
        // POINTER ENTER
        // =================================================

        const onEnter = () => {
          if (phase === "idle" || phase === "leaving") {
            phase = "entering";

            targetAlpha = 1;
            targetScale = intensity;
          }
        };

        // =================================================
        // POINTER LEAVE
        // =================================================

        const onLeave = () => {
          if (phase === "full" || phase === "entering") {
            phase = "leaving";

            targetAlpha = 0;
            targetScale = intensity;
          }
        };

        app.canvas.addEventListener("pointerenter", onEnter);

        app.canvas.addEventListener("pointerleave", onLeave);

        // =================================================
        // RESIZE
        // =================================================

        const handleResize = () => {
          fitCover(sprite1);
          fitCover(sprite2);
        };

        app.renderer.on("resize", handleResize);

        // =================================================
        // CLEANUP LOCAL
        // =================================================

        return () => {
          app.canvas.removeEventListener("pointerenter", onEnter);

          app.canvas.removeEventListener("pointerleave", onLeave);

          app.renderer.off("resize", handleResize);
        };
      };

      initPixi();

      // =================================================
      // CLEANUP
      // =================================================

      return () => {
        destroyed = true;

        if (appRef.current) {
          appRef.current.destroy(true, {
            children: true,
          });

          appRef.current = null;
        }
      };
    }, [image1, image2, displacementMap, intensity, speed, width, height]);

    // =====================================================
    // RENDER
    // =====================================================

    return (
      <div
        ref={(element) => {
          containerRef.current = element;

          if (typeof ref === "function") {
            ref(element);
          } else if (ref) {
            ref.current = element;
          }
        }}
        style={{
          borderRadius: 25,

          boxShadow: "rgba(255, 255, 255, 0.9) 0px 22px 70px 4px",

          height: typeof height === "number" ? `${height}px` : height,

          overflow: "hidden",

          position: "relative",

          width: typeof width === "number" ? `${width}px` : width,
        }}
      />
    );
  }
);

LiquidImageTransition.displayName = "LiquidImageTransition";

export default LiquidImageTransition;
