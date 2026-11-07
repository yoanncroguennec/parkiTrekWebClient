// GOOD
"use client";

// import { useRouter } from "next/navigation";
// STYLES
// import {
//   CircleCTAContainer,
//   CircleCTAAction,
//   CircleCTABackground,
//   CircleCTAOutline,
//   CircleCTATitle,
//   CircleCTASubtitle,
//   CircleCTALabel,
// } from "./CircleCTA.Styles";

interface CircleCTAProps {
  title: string;
  subtitle: string;
  label?: string;
  href: string;

  x?: number;
  y?: number;
  radius?: number;
  strokeWidth?: number;
  backgroundType?: "gradient" | "video";
  videoSrc?: string;
}

export default function CircleCTA(
  {
    // title,
    // subtitle,
    // label,
    // href,
    // x = 500,
    // y = 300,
    // radius = 100,
    // strokeWidth = 5,
    // backgroundType = "gradient",
    // videoSrc,
  }: CircleCTAProps,
) {
  // const router = useRouter();

  return null;

  // return (
  //   <CircleCTAContainer
  //     viewBox="0 0 1000 1000"
  //     preserveAspectRatio="xMidYMid meet"
  //   >
  //     <defs>
  //       {backgroundType === "gradient" && (
  //         <linearGradient
  //           id="circleGradient"
  //           x1="0%"
  //           y1="0%"
  //           x2="100%"
  //           y2="100%"
  //         >
  //           <stop offset="0%" stopColor="#0575E6" />
  //           <stop offset="100%" stopColor="#00F260" />
  //         </linearGradient>
  //       )}

  //       {backgroundType === "video" && (
  //         <clipPath id="circleClip">
  //           <circle cx={x} cy={y} r={radius} />
  //         </clipPath>
  //       )}
  //     </defs>
  //     {backgroundType === "video" && videoSrc && (
  //       <foreignObject
  //         x={x - radius}
  //         y={y - radius}
  //         width={radius * 2}
  //         height={radius * 2}
  //         clipPath="url(#circleClip)"
  //       >
  //         <video
  //           autoPlay
  //           muted
  //           loop
  //           playsInline
  //           style={{
  //             width: "100%",
  //             height: "100%",
  //             objectFit: "cover",
  //           }}
  //         >
  //           <source src={videoSrc} type="video/mp4" />
  //         </video>
  //       </foreignObject>
  //     )}

  //     <CircleCTAAction onClick={() => router.push(href)}>
  //       <CircleCTABackground
  //         cx={x}
  //         cy={y}
  //         r={radius}
  //         fill={
  //           backgroundType === "gradient"
  //             ? "url(#circleGradient)"
  //             : "transparent"
  //         }
  //         className="support-circle"
  //       />

  //       <CircleCTAOutline
  //         cx={x}
  //         cy={y}
  //         r={radius + 2}
  //         fill="none"
  //         stroke="rgba(0,0,0,.7)"
  //         strokeWidth={strokeWidth}
  //         className="support-border"
  //       />

  //       <CircleCTATitle x={x} y={y - 20}>
  //         {title}
  //       </CircleCTATitle>

  //       <CircleCTASubtitle x={x} y={y + 30}>
  //         {subtitle}
  //       </CircleCTASubtitle>

  //       <CircleCTALabel x={x} y={y - 80}>
  //         {label}
  //       </CircleCTALabel>
  //     </CircleCTAAction>
  //   </CircleCTAContainer>
  // );
}
