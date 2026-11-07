// TEACHER YOUTUBE : Codegrid
// Desc : Checkout Page Design Using HTML, CSS & TweenMax
// URL : https://www.youtube.com/watch?v=iatHv98BqJw&list=PL8bX3D8aBEpkD5opCcetjXAJPCggJUfF5&index=73
// TEACHER YOUTUBE : Codegrid
// Desc : I Let Scroll Control an SVG Wheel and It Turned Into a Wild Circular Image Slider (GSAP)
// URL : https://www.youtube.com/watch?v=XXJUyycNrKs&list=PL8bX3D8aBEpnxsHw-B_592tg7C0v6n_ov&index=22

// FOR SPONSORING AND PARTENARIAT
// Teacher Youtube : "Codegrid"
// Desc : "Watch Text Come Alive With Scroll-Triggered Animation (ScrollTrigger)"
// Link Youtube : "https://www.youtube.com/watch?v=E6xWVltGjgU&list=PL8bX3D8aBEpnxsHw-B_592tg7C0v6n_ov&index=94"

"use client";

import { useState } from "react";

// LAYOUTS
import { ContainerApp } from "@/app/components/common/layouts";

// EFFECTS
import { CircleReveal } from "@/app/components/effects";

// SECTIONS
import {
  PaymentsDonationsHero,
  SupportShowcase,
  DonationSelection,
  ListSponsors,
} from "@/app/components/sections/payments-donations";

export default function PaymentsDonationsClient() {
  const [animationReady, setAnimationReady] = useState(false);

  const [, setRevealComplete] = useState(false);

  const sections = [
    <PaymentsDonationsHero key="hero" animationReady={animationReady} />,
    <SupportShowcase key="support" />,
    <DonationSelection key="donation" />,
    <ListSponsors key="sponsors" />,
  ];

  return (
    <CircleReveal
      onRevealStart={() => {
        setAnimationReady(true);
      }}
      onRevealComplete={() => {
        setRevealComplete(true);
      }}
    >
      <ContainerApp>{sections}</ContainerApp>
    </CircleReveal>
  );
}
