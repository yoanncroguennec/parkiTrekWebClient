import React from "react";

export default function INDEX_COPY() {
  return <div></div>;
}

// "use client";

// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import styled from "@emotion/styled";

// gsap.registerPlugin(ScrollTrigger);

// export default function VerticalAwardTimeline() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const progressRef = useRef<HTMLDivElement>(null);
//   const itemsRef = useRef<HTMLDivElement[]>([]);

//   useLayoutEffect(() => {
//     const section = sectionRef.current;
//     const progress = progressRef.current;

//     if (!section || !progress) return;

//     const ctx = gsap.context(() => {
//       /* -----------------------------------------------
//          INITIAL STATES
//       ------------------------------------------------ */

//       gsap.set(itemsRef.current, {
//         opacity: 0,
//         y: 100,
//       });

//       /* -----------------------------------------------
//          MAIN PROGRESS LINE
//       ------------------------------------------------ */

//       gsap.fromTo(
//         progress,
//         {
//           scaleY: 0,
//         },
//         {
//           scaleY: 1,
//           transformOrigin: "top center",
//           ease: "none",
//           scrollTrigger: {
//             trigger: section,
//             start: "top 70%",
//             end: "bottom 80%",
//             scrub: true,
//           },
//         },
//       );

//       /* -----------------------------------------------
//          CARDS REVEAL
//       ------------------------------------------------ */

//       itemsRef.current.forEach((item, index) => {
//         const card = item.querySelector(".timeline-card");
//         const year = item.querySelector(".timeline-year");
//         const image = item.querySelector(".timeline-image");
//         const dot = item.querySelector(".timeline-dot");

//         if (!card || !year || !image || !dot) return;

//         const isLeft = index % 2 === 0;

//         gsap.to(item, {
//           opacity: 1,
//           y: 0,
//           duration: 1.1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: item,
//             start: "top 78%",
//             toggleActions: "play none none reverse",
//           },
//         });

//         /* Card horizontal entrance */

//         gsap.fromTo(
//           card,
//           {
//             x: isLeft ? -80 : 80,
//             rotate: isLeft ? -3 : 3,
//           },
//           {
//             x: 0,
//             rotate: 0,
//             duration: 1.2,
//             ease: "power4.out",
//             scrollTrigger: {
//               trigger: item,
//               start: "top 82%",
//               toggleActions: "play none none reverse",
//             },
//           },
//         );

//         /* Year parallax */

//         gsap.to(year, {
//           yPercent: -25,
//           ease: "none",
//           scrollTrigger: {
//             trigger: item,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//         });

//         /* Image parallax */

//         gsap.fromTo(
//           image,
//           {
//             scale: 1.18,
//           },
//           {
//             scale: 1,
//             ease: "none",
//             scrollTrigger: {
//               trigger: item,
//               start: "top bottom",
//               end: "bottom top",
//               scrub: true,
//             },
//           },
//         );

//         /* Dot activation */

//         ScrollTrigger.create({
//           trigger: item,
//           start: "top 60%",
//           end: "bottom 40%",
//           onEnter: () => {
//             gsap.to(dot, {
//               scale: 1.7,
//               duration: 0.35,
//               ease: "back.out(2)",
//             });
//           },
//           onLeaveBack: () => {
//             gsap.to(dot, {
//               scale: 1,
//               duration: 0.25,
//             });
//           },
//         });
//       });

//       /* -----------------------------------------------
//          MOUSE PARALLAX
//       ------------------------------------------------ */

//       const cards = gsap.utils.toArray<HTMLElement>(".timeline-card");

//       cards.forEach((card) => {
//         const image = card.querySelector<HTMLElement>(".timeline-image");

//         if (!image) return;

//         const handleMove = (event: MouseEvent) => {
//           const rect = card.getBoundingClientRect();

//           const x = event.clientX - rect.left;
//           const y = event.clientY - rect.top;

//           const rotateX = (y / rect.height - 0.5) * -5;
//           const rotateY = (x / rect.width - 0.5) * 5;

//           gsap.to(card, {
//             rotateX,
//             rotateY,
//             duration: 0.5,
//             ease: "power2.out",
//           });

//           gsap.to(image, {
//             x: (x / rect.width - 0.5) * 20,
//             y: (y / rect.height - 0.5) * 20,
//             duration: 0.7,
//             ease: "power2.out",
//           });
//         };

//         const handleLeave = () => {
//           gsap.to(card, {
//             rotateX: 0,
//             rotateY: 0,
//             duration: 0.8,
//             ease: "elastic.out(1, 0.5)",
//           });

//           gsap.to(image, {
//             x: 0,
//             y: 0,
//             duration: 0.8,
//             ease: "power3.out",
//           });
//         };

//         card.addEventListener("mousemove", handleMove);
//         card.addEventListener("mouseleave", handleLeave);

//         return () => {
//           card.removeEventListener("mousemove", handleMove);
//           card.removeEventListener("mouseleave", handleLeave);
//         };
//       });

//       ScrollTrigger.refresh();
//     }, section);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <TimelineSection ref={sectionRef}>
//       {/* =================================================
//           HEADER
//       ================================================= */}

//       <TimelineHeader>
//         <HeaderEyebrow>
//           <span />
//           OUR JOURNEY
//         </HeaderEyebrow>

//         <HeaderTitle>
//           A story
//           <br />
//           in <em>motion.</em>
//         </HeaderTitle>

//         <HeaderDescription>
//           Une succession de moments, de décisions et d&apos;expériences qui ont
//           façonné notre trajectoire.
//         </HeaderDescription>
//       </TimelineHeader>

//       {/* =================================================
//           TIMELINE
//       ================================================= */}

//       <TimelineWrapper>
//         {/* Base line */}

//         <TimelineLine />

//         {/* Animated progress */}

//         <TimelineProgress ref={progressRef} />

//         {timelineData.map((item, index) => {
//           const isLeft = index % 2 === 0;

//           return (
//             <TimelineItem
//               key={item.year}
//               ref={(element) => {
//                 if (element) {
//                   itemsRef.current[index] = element;
//                 }
//               }}
//               $left={isLeft}
//             >
//               {/* YEAR */}

//               <TimelineYear className="timeline-year">{item.year}</TimelineYear>

//               {/* DOT */}

//               <TimelineDotWrapper>
//                 <TimelineDot className="timeline-dot" />
//               </TimelineDotWrapper>

//               {/* CARD */}

//               <TimelineCard className="timeline-card">
//                 <ImageWrapper>
//                   <TimelineImage
//                     className="timeline-image"
//                     src={item.image}
//                     alt={item.title}
//                   />

//                   <ImageOverlay />

//                   <ImageNumber>{item.index}</ImageNumber>

//                   <ImageCategory>{item.category}</ImageCategory>
//                 </ImageWrapper>

//                 <CardContent>
//                   <CardTitle>{item.title}</CardTitle>

//                   <CardSubtitle>{item.subtitle}</CardSubtitle>

//                   <CardDescription>{item.description}</CardDescription>

//                   <CardFooter>
//                     <span>DISCOVER</span>

//                     <Arrow>↗</Arrow>
//                   </CardFooter>
//                 </CardContent>
//               </TimelineCard>
//             </TimelineItem>
//           );
//         })}
//       </TimelineWrapper>

//       {/* =================================================
//           FOOTER
//       ================================================= */}

//       <TimelineFooter>
//         <FooterLine />

//         <FooterText>
//           THE STORY
//           <br />
//           CONTINUES
//         </FooterText>

//         <FooterArrow>↓</FooterArrow>
//       </TimelineFooter>
//     </TimelineSection>
//   );
// }

// /* =========================================================
//    STYLES
// ========================================================= */

// const TimelineSection = styled.section`
//   position: relative;
//   overflow: hidden;

//   min-height: 100vh;

//   padding: 180px 7vw 160px;

//   background: #0b0b0b;
//   color: #f5f3ee;

//   perspective: 1200px;
// `;

// const TimelineHeader = styled.div`
//   max-width: 900px;

//   margin: 0 auto 220px;

//   position: relative;
//   z-index: 2;
// `;

// const HeaderEyebrow = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 14px;

//   margin-bottom: 35px;

//   font-size: 11px;
//   font-weight: 700;
//   letter-spacing: 0.25em;

//   color: #888;

//   span {
//     width: 35px;
//     height: 1px;

//     background: #888;
//   }
// `;

// const HeaderTitle = styled.h2`
//   margin: 0;

//   font-size: clamp(70px, 11vw, 180px);
//   line-height: 0.82;
//   letter-spacing: -0.075em;
//   font-weight: 500;

//   em {
//     font-family: Georgia, serif;
//     font-weight: 400;
//   }
// `;

// const HeaderDescription = styled.p`
//   max-width: 430px;

//   margin: 55px 0 0 auto;

//   font-size: 15px;
//   line-height: 1.7;

//   color: #898989;
// `;

// const TimelineWrapper = styled.div`
//   position: relative;

//   width: 100%;
// `;

// const TimelineLine = styled.div`
//   position: absolute;

//   top: 0;
//   bottom: 0;
//   left: 50%;

//   width: 1px;

//   background: rgba(255, 255, 255, 0.12);

//   transform: translateX(-50%);
// `;

// const TimelineProgress = styled.div`
//   position: absolute;

//   top: 0;
//   left: 50%;

//   width: 2px;
//   height: 100%;

//   background: #f5f3ee;

//   transform: translateX(-50%) scaleY(0);

//   transform-origin: top center;

//   box-shadow:
//     0 0 12px rgba(255, 255, 255, 0.5),
//     0 0 30px rgba(255, 255, 255, 0.15);
// `;

// const TimelineItem = styled.div<{ $left: boolean }>`
//   position: relative;

//   min-height: 720px;

//   display: flex;
//   align-items: center;

//   ${({ $left }) =>
//     $left
//       ? `
//         justify-content: flex-start;
//         padding-right: calc(50% + 100px);
//       `
//       : `
//         justify-content: flex-end;
//         padding-left: calc(50% + 100px);
//       `}

//   &:not(:last-child) {
//     margin-bottom: 100px;
//   }

//   @media (max-width: 900px) {
//     min-height: auto;

//     display: block;

//     padding: 150px 0 100px !important;

//     &:not(:last-child) {
//       margin-bottom: 0;
//     }
//   }
// `;

// const TimelineYear = styled.div`
//   position: absolute;

//   top: 50%;

//   left: 50%;

//   transform: translate(-50%, -50%);

//   z-index: 0;

//   font-size: clamp(100px, 15vw, 240px);
//   line-height: 1;

//   letter-spacing: -0.08em;

//   font-weight: 700;

//   color: rgba(255, 255, 255, 0.035);

//   white-space: nowrap;

//   pointer-events: none;

//   @media (max-width: 900px) {
//     top: 70px;
//     left: 0;

//     transform: none;

//     font-size: 110px;
//   }
// `;

// const TimelineDotWrapper = styled.div`
//   position: absolute;

//   top: 50%;
//   left: 50%;

//   width: 16px;
//   height: 16px;

//   transform: translate(-50%, -50%);

//   z-index: 5;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   @media (max-width: 900px) {
//     top: 80px;
//     left: 8px;
//   }
// `;

// const TimelineDot = styled.div`
//   width: 8px;
//   height: 8px;

//   border-radius: 50%;

//   background: #f5f3ee;

//   box-shadow:
//     0 0 0 5px #0b0b0b,
//     0 0 0 6px rgba(255, 255, 255, 0.2);
// `;

// const TimelineCard = styled.article`
//   position: relative;

//   width: min(100%, 570px);

//   background: #141414;

//   border: 1px solid rgba(255, 255, 255, 0.09);

//   transform-style: preserve-3d;

//   transition:
//     border-color 0.4s ease,
//     background 0.4s ease;

//   overflow: hidden;

//   cursor: pointer;

//   &:hover {
//     border-color: rgba(255, 255, 255, 0.3);

//     background: #181818;
//   }

//   @media (max-width: 900px) {
//     width: 100%;
//   }
// `;

// const ImageWrapper = styled.div`
//   position: relative;

//   width: 100%;
//   height: 350px;

//   overflow: hidden;

//   @media (max-width: 600px) {
//     height: 280px;
//   }
// `;

// const TimelineImage = styled.img`
//   position: absolute;

//   inset: -10%;

//   width: 120%;
//   height: 120%;

//   object-fit: cover;

//   filter: grayscale(100%);

//   transition:
//     filter 0.7s ease,
//     transform 0.7s ease;

//   ${TimelineCard}:hover & {
//     filter: grayscale(0%);
//   }
// `;

// const ImageOverlay = styled.div`
//   position: absolute;

//   inset: 0;

//   background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.75));
// `;

// const ImageNumber = styled.span`
//   position: absolute;

//   top: 25px;
//   left: 25px;

//   font-size: 11px;
//   letter-spacing: 0.15em;

//   color: white;
// `;

// const ImageCategory = styled.span`
//   position: absolute;

//   right: 25px;
//   bottom: 25px;

//   font-size: 10px;
//   letter-spacing: 0.2em;

//   color: white;
// `;

// const CardContent = styled.div`
//   padding: 40px 42px 35px;

//   @media (max-width: 600px) {
//     padding: 30px;
//   }
// `;

// const CardTitle = styled.h3`
//   margin: 0;

//   font-size: clamp(35px, 4vw, 52px);
//   line-height: 0.95;

//   font-weight: 500;
//   letter-spacing: -0.055em;
// `;

// const CardSubtitle = styled.p`
//   margin: 18px 0 25px;

//   font-family: Georgia, serif;
//   font-style: italic;

//   font-size: 18px;

//   color: #aaa;
// `;

// const CardDescription = styled.p`
//   max-width: 450px;

//   margin: 0;

//   font-size: 14px;
//   line-height: 1.7;

//   color: #777;
// `;

// const CardFooter = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   margin-top: 35px;
//   padding-top: 20px;

//   border-top: 1px solid rgba(255, 255, 255, 0.1);

//   font-size: 10px;
//   letter-spacing: 0.2em;

//   color: #999;
// `;

// const Arrow = styled.span`
//   font-size: 24px;
//   line-height: 1;

//   color: #f5f3ee;

//   transition: transform 0.4s ease;

//   ${TimelineCard}:hover & {
//     transform: translate(5px, -5px);
//   }
// `;

// const TimelineFooter = styled.div`
//   max-width: 900px;

//   margin: 200px auto 0;

//   display: flex;
//   align-items: flex-end;
//   justify-content: space-between;
// `;

// const FooterLine = styled.div`
//   position: absolute;

//   left: 0;
//   right: 0;

//   height: 1px;

//   background: rgba(255, 255, 255, 0.1);
// `;

// const FooterText = styled.div`
//   padding-top: 80px;

//   font-size: clamp(40px, 6vw, 80px);
//   line-height: 0.85;

//   letter-spacing: -0.06em;

//   color: #f5f3ee;
// `;

// const FooterArrow = styled.div`
//   font-size: 40px;

//   padding-bottom: 10px;

//   color: #777;
// `;
