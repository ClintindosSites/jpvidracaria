import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Construction } from "lucide-react";

import { services } from "@/data/services";
import { getServiceDetailBySlug } from "@/data/service-details";

import ServiceHero from "@/components/individualServices/ServiceHero";
import ServiceBenefitsBar from "@/components/individualServices/ServiceBenefitsBar";
import ServiceModels from "@/components/individualServices/ServiceModels";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ServiceBenefits from "@/components/individualServices/ServiceBenefits";
import ServiceMaterials from "@/components/individualServices/ServicesMaterials";
import ServiceCostBenefit from "@/components/individualServices/ServiceCostBeneftis";
import ServiceProjects from "@/components/individualServices/ServiceProjects";
import ServiceFAQ from "@/components/individualServices/ServicesFAQ";
import ServiceCTA from "@/components/individualServices/ServicesCTA";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// GERAÇÃO DAS PÁGINAS ESTÁTICAS

export function generateStaticParams() {
  return services.map(service => ({
    slug: service.slug,
  }));
}

// SEO DINÂMICO

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find(item => item.slug === slug);

  const detail = getServiceDetailBySlug(slug);

  if (!service) {
    return {
      title: "Serviço não encontrado",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = detail?.seo.title || service.seo.title;

  const description = detail?.seo.description || service.seo.description;

  return {
    title,
    description,

    alternates: {
      canonical: `/servicos/${slug}`,
    },

    robots: {
      index: false,
      follow: true,
    },

    openGraph: {
      title,
      description,
      type: "website",
      locale: "pt_BR",
      siteName: "JP Vidraçaria",

      images: [
        {
          url: detail?.hero.image || service.image,
          alt: detail?.hero.imageAlt || service.imageAlt,
        },
      ],
    },
  };
}

// PÁGINA DINÂMICA

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  const service = services.find(item => item.slug === slug);

  if (!service) {
    notFound();
  }

  const detail = getServiceDetailBySlug(slug);

  // SERVIÇOS AINDA EM DESENVOLVIMENTO

  if (!detail) {
    return (
      <section className="flex min-h-[65vh] items-center justify-center bg-secondary py-16">
        <div className="container-site flex flex-col items-center gap-6 text-center">
          <Construction size={64} className="text-primary" aria-hidden="true" />

          <h1 className="font-title text-3xl font-extrabold text-white md:text-5xl">
            {service.title}
          </h1>

          <span className="font-bold text-primary">
            Página em desenvolvimento
          </span>

          <p className="max-w-xl text-lg text-white/80">
            Estamos preparando todos os detalhes deste serviço. Enquanto isso,
            solicite seu orçamento diretamente com nossa equipe.
          </p>

          <WhatsAppButton
            text="Solicitar orçamento"
            message={`Olá! Gostaria de solicitar um orçamento para ${service.title}.`}
          />
        </div>
      </section>
    );
  }

  // LANDING PAGE DO SERVIÇO

  return (
    <>
      <ServiceHero service={detail} />

      <ServiceBenefitsBar />

      <ServiceModels service={detail} />

      <ServiceBenefits service={detail} />

      <ServiceMaterials service={detail} />

      <ServiceCostBenefit service={detail} />

      <ServiceProjects service={detail} />

      <ServiceFAQ service={detail} />

      <ServiceCTA service={detail} />

      {/* Próximas seções */}
    </>
  );
}
