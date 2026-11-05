export interface QuoteLine {
  text: string;
  color: string;
}

export interface QuoteData {
  bgImg: string | null;
  lines: QuoteLine[];
}

export const quoteLines: QuoteData[] = [
  {
    bgImg: "/assets/imgs/trek-dashboard/explorerScreen/bgMountain.png",

    lines: [
      {
        text: "Prendre soin de soi,",
        color: "#FFF",
      },
      {
        text: "c'est aussi écouter son corps",
        color: "#FFF",
      },
      {
        text: "et célébrer chaque petit progrès.",
        color: "#F29305",
      },
    ],
  },

  {
    bgImg: null,

    lines: [
      {
        text: "La montagne ne juge pas.",
        color: "#FFF",
      },
      {
        text: "Elle guérit.",
        color: "#F29305",
      },
    ],
  },
];
