"use client";

import { useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Arrow,
  CardContent,
  CardDescription,
  CardFooter,
  CardSubtitle,
  CardTitle,
  HoverHint,
  HoverIcon,
  HoverText,
  ImageCategory,
  ImageNumber,
  ImageOverlay,
  ImageWrapper,
  TimelineCard,
  TimelineDot,
  TimelineDotWrapper,
  TimelineImage,
  TimelineItem,
  TimelineYear,
} from "./TimelineContent.Styles";

import { TimelineDataItem } from "../../../data";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  timelineData: TimelineDataItem[];
};

export default function TimelineContent({ timelineData }: Props) {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".timeline-item");

      console.log("Timeline items:", items);

      items.forEach((item, index) => {
        const card = item.querySelector<HTMLElement>(".timeline-card");

        const year = item.querySelector<HTMLElement>(".timeline-year");

        const image = item.querySelector<HTMLElement>(".timeline-image");

        const dot = item.querySelector<HTMLElement>(".timeline-dot");

        if (!card || !year || !image || !dot) return;

        const isLeft = index % 2 === 0;

        /* ==========================================
           INITIAL STATE
        ========================================== */

        gsap.set(item, {
          opacity: 0,
          y: 80,
        });

        /* ==========================================
           ITEM REVEAL
        ========================================== */

        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        /* ==========================================
           CARD ENTRANCE
        ========================================== */

        gsap.fromTo(
          card,
          {
            x: isLeft ? -80 : 80,
            rotate: isLeft ? -3 : 3,
          },
          {
            x: 0,
            rotate: 0,
            duration: 1.2,
            ease: "power4.out",

            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        /* ==========================================
           YEAR PARALLAX
        ========================================== */

        gsap.to(year, {
          yPercent: -25,
          ease: "none",

          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        /* ==========================================
           IMAGE PARALLAX
        ========================================== */

        gsap.fromTo(
          image,
          {
            scale: 1.18,
          },
          {
            scale: 1,
            ease: "none",

            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        /* ==========================================
           DOT ANIMATION
        ========================================== */

        ScrollTrigger.create({
          trigger: item,
          start: "top 60%",
          end: "bottom 40%",

          onEnter: () => {
            gsap.to(dot, {
              scale: 1.7,
              duration: 0.35,
              ease: "back.out(2)",
            });
          },

          onLeave: () => {
            gsap.to(dot, {
              scale: 1,
              duration: 0.25,
            });
          },

          onEnterBack: () => {
            gsap.to(dot, {
              scale: 1.7,
              duration: 0.35,
            });
          },

          onLeaveBack: () => {
            gsap.to(dot, {
              scale: 1,
              duration: 0.25,
            });
          },
        });
      });

      /* ==========================================
         REFRESH
      ========================================== */

      ScrollTrigger.refresh();
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef}>
      {timelineData.map((item, index) => {
        const isLeft = index % 2 === 0;

        const isOpen = activeCard === index;

        return (
          <TimelineItem key={item.year} left={isLeft} className="timeline-item">
            <TimelineYear className="timeline-year">{item.year}</TimelineYear>

            <TimelineDotWrapper>
              <TimelineDot className="timeline-dot" />
            </TimelineDotWrapper>

            <TimelineCard className="timeline-card" onMouseLeave={() => setActiveCard(null)}>
              <ImageWrapper onMouseEnter={() => setActiveCard(index)}>
                <TimelineImage
                  className="timeline-image"
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                />

                <ImageOverlay />

                <ImageNumber>{item.index}</ImageNumber>

                <ImageCategory>{item.category}</ImageCategory>

                <HoverHint>
                  <HoverText>EXPLORE</HoverText>

                  <HoverIcon>↗</HoverIcon>
                </HoverHint>
              </ImageWrapper>

              <CardContent open={isOpen}>
                <CardTitle>{item.title}</CardTitle>

                <CardSubtitle>{item.subtitle}</CardSubtitle>

                <CardDescription>{item.description}</CardDescription>

                <CardFooter>
                  <span>DISCOVER</span>

                  <Arrow className="timeline-arrow">↗</Arrow>
                </CardFooter>
              </CardContent>
            </TimelineCard>
          </TimelineItem>
        );
      })}
    </div>
  );
}
