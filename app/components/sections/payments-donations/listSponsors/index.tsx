"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// DATAS
import { marquees } from "./data";
// HOOKS
// ICONS
import { MdArrowForwardIos } from "react-icons/md";
// STYLES
import {
  ArrowContainer,
  Card,
  CardAmount,
  CardHeader,
  CardInfos,
  CardSubtitle,
  CardTitle,
  Category,
  LogoImage,
  Marquee,
  MarqueeContent,
  Root,
  Row,
  SponsorImage,
  Wrapper,
} from "./ListSponsors.Styles";
// import { useSponsorAnimations } from "@/app/hooks/animations/scroll/useScrollAnimations";

gsap.registerPlugin(ScrollTrigger);

export default function ListSponsors() {
  // Refs
  const rowsRef = useRef<HTMLDivElement[]>([]);
  const pausedRows = useRef<boolean[]>([]);
  const titlesRef = useRef<HTMLElement[]>([]);
  const infosRef = useRef<HTMLDivElement[]>([]);
  const arrowsRef = useRef<HTMLDivElement[]>([]);

  // Funcions
  function registerArrow(el: HTMLDivElement | null) {
    if (!el) return;

    if (!arrowsRef.current.includes(el)) {
      arrowsRef.current.push(el);
    }
  }

  // Hooks
  // useSponsorAnimations({ rowsRef, pausedRows, titlesRef, infosRef, arrowsRef });

  return (
    <Root>
      <Wrapper spacing={1}>
        {marquees.map((row, index) => (
          <Row key={index}>
            <Category variant="h4">{row.category}</Category>
            <Marquee>
              <MarqueeContent
                direction="row"
                ref={(el) => {
                  if (el) rowsRef.current[index] = el;
                }}
              >
                {[...row.data, ...row.data].map((item, i) => (
                  <Card
                    key={i}
                    onMouseEnter={() => (pausedRows.current[index] = true)}
                    onMouseLeave={() => (pausedRows.current[index] = false)}
                  >
                    <SponsorImage
                      src={item.img}
                      alt={item.text}
                      width={260}
                      height={180}
                    />

                    <CardHeader>
                      {item.logo && (
                        <LogoImage
                          src={item.logo}
                          alt={item.text}
                          width={30}
                          height={30}
                          className="sponsor-logo"
                        />
                      )}

                      <CardTitle
                        ref={(el) => {
                          if (el) titlesRef.current.push(el);
                        }}
                      >
                        {item.text}
                      </CardTitle>
                    </CardHeader>

                    <CardInfos
                      ref={(el) => {
                        if (el) infosRef.current.push(el);
                      }}
                    >
                      <CardAmount variant="h6">12 500 €</CardAmount>
                      <CardSubtitle variant="h6">Collectés</CardSubtitle>
                    </CardInfos>
                    <ArrowContainer ref={registerArrow}>
                      <MdArrowForwardIos color="#FFF" size={40} />
                    </ArrowContainer>
                  </Card>
                ))}
              </MarqueeContent>
            </Marquee>
          </Row>
        ))}
      </Wrapper>
    </Root>
  );
}
