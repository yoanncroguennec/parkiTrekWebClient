export type TimelineDataItem = {
  year: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  image: string;
};

export const timelineData: TimelineDataItem[] = [
  {
    year: "2018",
    index: "01",
    title: "The beginning",
    subtitle: "Une idée devient une direction.",
    description:
      "Tout commence par une intuition. Une première vision, encore imparfaite, mais suffisamment forte pour donner naissance au projet.",
    category: "ORIGIN",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1400&auto=format&fit=crop",
  },
  {
    year: "2020",
    index: "02",
    title: "First steps",
    subtitle: "Construire avant de montrer.",
    description:
      "Les premières expérimentations donnent naissance à une identité plus forte. Le projet commence à prendre sa propre personnalité.",
    category: "BUILD",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1400&auto=format&fit=crop",
  },
  {
    year: "2022",
    index: "03",
    title: "Into the wild",
    subtitle: "Sortir du cadre.",
    description:
      "Le projet change d'échelle. De nouvelles expériences apparaissent et la recherche devient aussi importante que le résultat.",
    category: "EXPLORE",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1400&auto=format&fit=crop",
  },
  {
    year: "2024",
    index: "04",
    title: "New perspective",
    subtitle: "Changer le point de vue.",
    description:
      "Une nouvelle direction artistique est définie. L'expérience devient plus immersive, plus sensible et beaucoup plus ambitieuse.",
    category: "EVOLVE",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1400&auto=format&fit=crop",
  },
  {
    year: "2026",
    index: "05",
    title: "The journey",
    subtitle: "Ce n'est que le début.",
    description:
      "Le projet entre dans une nouvelle phase. Une aventure construite autour de l'expérience, du mouvement et de la transmission.",
    category: "NOW",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
  },
];
