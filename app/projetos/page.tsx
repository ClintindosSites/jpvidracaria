import type { Metadata } from "next";
import { Images } from "lucide-react";

import PageHero from "@/components/shared/PageHero";
import ProjectsPageSection from "@/components/projects/ProjectsPageSection";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Projetos de Vidraçaria em Belo Horizonte",

  description:
    "Conheça os projetos da JP Vidraçaria em Belo Horizonte. Box para banheiro, espelhos sob medida, portas de vidro, janelas, esquadrias de alumínio e pergolados.",

  alternates: {
    canonical: "/projetos",
  },

  openGraph: {
    title: `Nossos Projetos | ${company.name}`,

    description:
      "Conheça nosso portfólio de soluções em vidros e esquadrias de alumínio sob medida em Belo Horizonte.",

    type: "website",

    images: [
      {
        url: "/images/bg-projetos.webp",
        width: 1200,
        height: 630,
        alt: "Projetos de vidraçaria e esquadrias de alumínio",
      },
    ],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Nossos Projetos"
        description="Conheça nossos trabalhos e descubra como o vidro e o alumínio podem transformar seu ambiente."
        icon={Images}
        image="/images/bg-projetos.webp"
      />

      <ProjectsPageSection />

      <ProjectsCTA />
    </>
  );
}
