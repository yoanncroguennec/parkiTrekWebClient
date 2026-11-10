"use client";

import { useRef } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

// DATA
import { marquees } from "./data";

// HOOKS
import { useSponsorAnimations } from "@/app/hooks";

// ICONS
import { MdArrowForwardIos } from "@/app/utils/constants/icons";

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
  ListSponsorsContainer,
  Row,
  SponsorImage,
  Wrapper,
} from "./ListSponsors.Styles";
import { AnimatedBackground, MagneticPopTitle } from "@/app/components/common/animations";

export default function ListSponsors() {
  // ==========================================
  // RESPONSIVE
  // ==========================================

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // ==========================================
  // REFERENCES
  // ==========================================

  // Références des lignes de sponsors
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  // État de pause individuel de chaque ligne
  const pausedRows = useRef<boolean[]>([]);

  // Références des titres
  const titlesRef = useRef<(HTMLElement | null)[]>([]);

  // Références des informations
  const infosRef = useRef<(HTMLDivElement | null)[]>([]);

  // Références des flèches
  const arrowsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Références des logos
  const logosRef = useRef<(HTMLImageElement | null)[]>([]);

  // ==========================================
  // REF INDEXES
  // Calcul de l'index global de chaque carte
  // ==========================================

  const rowOffsets = marquees.map((_, rowIndex) =>
    marquees.slice(0, rowIndex).reduce((total, row) => total + row.data.length * 2, 0)
  );

  // ==========================================
  // GSAP ANIMATIONS
  // ==========================================

  useSponsorAnimations({
    rowsRef,
    pausedRows,
    titlesRef,
    infosRef,
    arrowsRef,
    logosRef,
  });

  return (
    <ListSponsorsContainer>
      <AnimatedBackground>
        <MagneticPopTitle
          text="Sponsors"
          fontSize="96px !important"
          scrollStart="top 85%"
          scrollEnd="top 35%"
        />

        <Wrapper spacing={1}>
          {marquees.map((row, rowIndex) => (
            <Row key={rowIndex}>
              {/* CATÉGORIE */}
              <Category variant="h4">{row.category}</Category>

              {/* MARQUEE */}
              <Marquee>
                <MarqueeContent
                  direction="row"
                  ref={(element) => {
                    rowsRef.current[rowIndex] = element;
                  }}
                >
                  {[...row.data, ...row.data].map((item, itemIndex) => {
                    // Index global de la carte
                    const refIndex = (rowOffsets[rowIndex] ?? 0) + itemIndex;

                    return (
                      <Card
                        key={`${rowIndex}-${itemIndex}`}
                        onMouseEnter={() => {
                          pausedRows.current[rowIndex] = true;
                        }}
                        onMouseLeave={() => {
                          pausedRows.current[rowIndex] = false;
                        }}
                      >
                        {/* IMAGE DU SPONSOR */}
                        <SponsorImage src={item.img} alt={item.text} width={260} height={180} />

                        {/* HEADER */}
                        <CardHeader>
                          {item.logo && (
                            <LogoImage
                              ref={(element) => {
                                logosRef.current[refIndex] = element;
                              }}
                              src={item.logo}
                              alt={item.text}
                              width={30}
                              height={30}
                              className="sponsor-logo"
                            />
                          )}

                          {/* TITRE */}
                          <CardTitle
                            ref={(element) => {
                              titlesRef.current[refIndex] = element;
                            }}
                          >
                            {item.text}
                          </CardTitle>
                        </CardHeader>

                        {/* INFORMATIONS */}
                        <CardInfos
                          ref={(element) => {
                            infosRef.current[refIndex] = element;
                          }}
                        >
                          <CardAmount variant="h6">12 500 €</CardAmount>

                          <CardSubtitle variant="h6">Collectés</CardSubtitle>
                        </CardInfos>

                        {/* ARROW */}
                        <ArrowContainer
                          component="div"
                          ref={(element) => {
                            arrowsRef.current[refIndex] = element as HTMLDivElement | null;
                          }}
                        >
                          <MdArrowForwardIos color="#FFF" size={isDesktop ? 24 : 20} />
                        </ArrowContainer>
                      </Card>
                    );
                  })}
                </MarqueeContent>
              </Marquee>
            </Row>
          ))}
        </Wrapper>
      </AnimatedBackground>
    </ListSponsorsContainer>
  );
}
