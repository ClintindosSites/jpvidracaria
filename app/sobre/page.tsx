import type { Metadata } from "next";
import { Building2 } from "lucide-react";

import PageHero from "@/components/shared/PageHero";

import AboutCompany from "@/components/about/AboutCompany";
import AboutValues from "@/components/about/AboutValues";
import AboutDifferentials from "@/components/about/AboutDifferentials";
import AboutCTA from "@/components/about/AboutCTA";

import HowItWorksSection from "@/components/shared/HowItWorksSection";

import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Sobre Nós | Vidraçaria em Belo Horizonte",

  description:
    "Conheça a JP Vidraçaria, empresa de Belo Horizonte especializada em soluções sob medida em vidros, espelhos, box para banheiro e esquadrias de alumínio.",

  alternates: {
    canonical: "/sobre",
  },

  openGraph: {
    title: `Conheça a ${company.name}`,

    description:
      "Soluções personalizadas em vidro e alumínio para transformar ambientes residenciais e comerciais em Belo Horizonte.",

    type: "website",

    images: [
      {
        url: "/images/bg-sobre.webp",
        alt: "JP Vidraçaria em Belo Horizonte",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Conheça a JP Vidraçaria"
        description="Transformamos ambientes com soluções em vidro e alumínio sob medida, valorizando a qualidade, a funcionalidade e cada detalhe."
        icon={Building2}
        image="/images/bg-sobre.webp"
      />

      <AboutCompany />

      <AboutValues />

      <AboutDifferentials />

      <HowItWorksSection />

      <AboutCTA />
    </>
  );
}
