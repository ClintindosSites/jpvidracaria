import type { Metadata } from "next";
import { Layers } from "lucide-react";

import PageHero from "@/components/shared/PageHero";

import ServicesPageSection from "@/components/services/ServicesPageSection";
import ServicesBenefits from "@/components/services/ServicesBenefits";
import ServicesCTA from "@/components/services/ServicesCTA";

import HowItWorksSection from "@/components/shared/HowItWorksSection";

import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Serviços de Vidraçaria em Belo Horizonte",

  description:
    "Conheça os serviços da JP Vidraçaria em BH: box para banheiro, espelhos sob medida, portas e janelas de vidro, esquadrias de alumínio e pergolados. Solicite seu orçamento.",

  alternates: {
    canonical: "/servicos",
  },

  openGraph: {
    title: `Serviços de Vidraçaria em BH | ${company.name}`,

    description:
      "Soluções em vidros e esquadrias de alumínio sob medida para residências e empresas em Belo Horizonte.",

    type: "website",

    images: [
      {
        url: "/images/bg-servicos.webp",
        alt: "Serviços de vidraçaria e esquadrias de alumínio",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Nossos Serviços"
        description="Soluções em vidro e alumínio sob medida para transformar ambientes residenciais e comerciais em Belo Horizonte."
        icon={Layers}
        image="/images/bg-servicos.webp"
      />

      <ServicesPageSection />

      <ServicesBenefits />

      <HowItWorksSection />

      <ServicesCTA />
    </>
  );
}
