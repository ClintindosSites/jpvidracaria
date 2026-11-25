import type { Metadata } from "next";
import { MessagesSquare } from "lucide-react";

import PageHero from "@/components/shared/PageHero";
import ContactSection from "@/components/contact/ContactSection";
import ContactServices from "@/components/contact/ContactServices";

import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contato e Orçamento de Vidraçaria em BH",

  description:
    "Entre em contato com a JP Vidraçaria em Belo Horizonte e solicite seu orçamento de box para banheiro, espelhos, vidros e esquadrias de alumínio sob medida.",

  alternates: {
    canonical: "/contato",
  },

  openGraph: {
    title: `Contato e Orçamento | ${company.name}`,

    description:
      "Solicite seu orçamento personalizado de vidros e esquadrias de alumínio em Belo Horizonte.",

    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Entre em Contato"
        description="Estamos prontos para ajudar você a transformar seu ambiente com soluções em vidro e alumínio sob medida."
        icon={MessagesSquare}
        image="/images/bg-orcamento.webp"
      />

      <ContactSection />

      <ContactServices />
    </>
  );
}
