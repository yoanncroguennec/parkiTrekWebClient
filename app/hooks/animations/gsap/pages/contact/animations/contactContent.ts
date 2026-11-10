import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export function contactContent(
  tl: gsap.core.Timeline,
  content: HTMLDivElement,
  title: HTMLHeadingElement,
  subtitle: HTMLParagraphElement,
  formItems: HTMLElement[],
  divider: HTMLDivElement,
  footer: HTMLDivElement
) {
  /*
   * ==========================================
   * ÉTAT INITIAL
   * ==========================================
   */

  gsap.set(content, {
    autoAlpha: 0,
    y: 40,
  });

  gsap.set(subtitle, {
    autoAlpha: 0,
    y: 40,
  });

  gsap.set(formItems, {
    autoAlpha: 0,
    y: 40,
  });

  gsap.set(divider, {
    scaleX: 0,
    transformOrigin: "left center",
  });

  gsap.set(footer, {
    autoAlpha: 0,
    y: 40,
  });

  /*
   * ==========================================
   * SPLIT TEXT
   * ==========================================
   */

  const split = new SplitText(title, {
    type: "chars",
  });

  /*
   * ==========================================
   * CONTAINER
   * ==========================================
   */

  tl.to(
    content,
    {
      autoAlpha: 1,
      y: 0,
      duration: 1.8,
      ease: "power2.out",
    },
    "+=0.4"
  );

  /*
   * ==========================================
   * TITLE
   * ==========================================
   */

  tl.from(
    split.chars,
    {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.03,
      ease: "power3.out",
    },
    "<0.1"
  );

  /*
   * ==========================================
   * SUBTITLE
   * ==========================================
   */

  tl.to(
    subtitle,
    {
      autoAlpha: 1,
      y: 0,
      duration: 2.8,
      ease: "power2.out",
    },
    "+=0.4"
  );

  /*
   * ==========================================
   * FORMULAIRE
   * ==========================================
   */

  tl.to(
    formItems,
    {
      autoAlpha: 1,
      y: 0,
      duration: 2.8,
      ease: "power2.out",
      stagger: 0.08,
    },
    "+=0.4"
  );

  /*
   * ==========================================
   * DIVIDER
   * ==========================================
   */

  tl.to(
    divider,
    {
      scaleX: 1,
      duration: 1.2,
      ease: "power3.out",
    },
    "+=0.1"
  );

  /*
   * ==========================================
   * FOOTER
   * ==========================================
   */

  tl.to(
    footer,
    {
      autoAlpha: 1,
      y: 0,
      duration: 2.8,
      ease: "power2.out",
      stagger: 0.08,
    },
    "+=0.4"
  );
}
