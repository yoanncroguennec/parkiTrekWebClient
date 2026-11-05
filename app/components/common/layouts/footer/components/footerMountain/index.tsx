"use client";

// HOOKS
import { useTrekAnimation } from "@/app/hooks";
// DATA
import { mountainPathD, trekPoints } from "../../data/footer.data";

import { FooterMountainWrapper, FooterMountainSvg } from "./FooterMountain.Styles";

const BLUE = "#1677FF";
const WHITE = "#fff";

const pathProps = {
  d: mountainPathD,
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function FooterMountain() {
  const {
    mountainPathRef,
    blueTrailGlowRef,
    blueTrailRef,
    bluePointRef,
    blueHaloRef,
    bubbleRef,
    greenPointsRef,
    activePoint,
  } = useTrekAnimation();

  return (
    <FooterMountainWrapper>
      <FooterMountainSvg
        viewBox="0 0 1600 140"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Glow */}

        <defs>
          <filter id="blueGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Montagne */}

        <path d={`${mountainPathD} L1600 140 L0 140 Z`} fill={WHITE} />

        {/* Parcours */}

        <path
          ref={mountainPathRef}
          {...pathProps}
          stroke="rgba(40,40,40,0.16)"
          strokeWidth="2"
          strokeDasharray="4 6"
        />

        {/* Glow bleu */}

        <path
          ref={blueTrailGlowRef}
          {...pathProps}
          stroke={BLUE}
          strokeWidth="16"
          opacity="0.25"
          filter="url(#blueGlow)"
        />

        {/* Trait bleu */}

        <path ref={blueTrailRef} {...pathProps} stroke={BLUE} strokeWidth="7" />

        {/* Points verts */}

        {trekPoints.map((point, index) => (
          <circle
            key={point.title}
            ref={(element) => {
              greenPointsRef.current[index] = element;
            }}
            r="6"
            fill="#35C759"
            stroke={WHITE}
            strokeWidth="3"
          />
        ))}

        {/* Halo */}

        <circle ref={blueHaloRef} r="15" fill="none" stroke={BLUE} strokeWidth="2" opacity="0.35" />

        {/* Point actif */}

        <circle ref={bluePointRef} r="7" fill={BLUE} stroke={WHITE} strokeWidth="3" />

        {/* Bulle */}

        <g ref={bubbleRef} opacity="0">
          <rect width="220" height="90" rx="18" fill={WHITE} stroke="#e8e8e8" />

          <path d="M100 90 L110 105 L120 90 Z" fill={WHITE} />

          <text x="18" y="28" fontSize="13" fontWeight="700" fill="#111">
            {activePoint?.title}
          </text>

          <text x="18" y="50" fontSize="10" fill="#777">
            {activePoint?.description}
          </text>

          <text x="18" y="73" fontSize="15" fontWeight="700" fill={BLUE}>
            {activePoint?.value}
          </text>
        </g>
      </FooterMountainSvg>
    </FooterMountainWrapper>
  );
}
