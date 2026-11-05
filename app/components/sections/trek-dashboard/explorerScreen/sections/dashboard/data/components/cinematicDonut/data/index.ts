export type DonutItem = {
  id: string;
  label: string;
  value: number;
  description: string;
};

export const dataDonuts: DonutItem[] = [
  {
    id: "Parkinson",
    label: "Parkinson",
    value: 42,
    description: "Sensibilisation à la maladie",
  },
  {
    id: "Prévention",
    label: "Prévention",
    value: 28,
    description: "Prévention et activité physique",
  },
  {
    id: "Sport",
    label: "Sport",
    value: 18,
    description: "Activité physique adaptée",
  },
  {
    id: "Autres",
    label: "Autres",
    value: 12,
    description: "Autres actions",
  },
];
