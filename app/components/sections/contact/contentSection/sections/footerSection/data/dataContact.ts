interface FooterContent {
  title: string;
  isSocial?: boolean;
  items: {
    label: string;
    href: string;
  }[];
}

export const footerContent: FooterContent[] = [
  {
    title: "Mes coordonnées",
    items: [
      {
        label: "07 65 82 70 83",
        href: "tel:+33765827083",
      },
      {
        label: "yoann.croguennec.pro@gmail.com",
        href: "mailto:yoann.croguennec.pro@gmail.com",
      },
      {
        label: "Saint-Brieuc, 22000, France",
        href: "#",
      },
    ],
  },
  {
    title: "Mes réseaux sociaux",
    isSocial: true,
    items: [
      {
        label: "YOUTUBE",
        href: "#",
      },
      {
        label: "INSTAGRAM",
        href: "#",
      },
      {
        label: "TIKTOK",
        href: "#",
      },
      {
        label: "FACEBOOK",
        href: "#",
      },
    ],
  },
];
