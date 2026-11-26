import { Suspense } from "react";
import Link from "next/link";

import { ArrowRight, Maximize2 } from "lucide-react";

import { projects } from "@/data/projects";

import type { ServiceDetail } from "@/types/service-detail";

import SectionHeading from "@/components/shared/SectionHeading";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ServiceProjectsGallery from "@/components/projects/ServiceProjectsGallery";

interface ServiceProjectsProps {
  service: ServiceDetail;
}

export default function ServiceProjects({ service }: ServiceProjectsProps) {
  const { slug, cta } = service;

  const filteredProjects = projects.filter(
    project => project.serviceSlug === slug
  );

  if (!filteredProjects.length) {
    return null;
  }

  // Limita a quantidade para manter a página compacta.

  const galleryProjects = filteredProjects.slice(0, 7);

  return (
    <section id="projetos-realizados" className="section-spacing bg-white">
      <div
        className="
          container-site flex flex-col
          gap-8 md:gap-10
        "
      >
        {/* TÍTULO */}

        <SectionHeading
          badge="Do projeto à realidade"
          title="Qualidade Que Você Pode Ver"
          description="
            Conheça alguns dos nossos trabalhos
            e inspire-se para transformar seu ambiente.
          "
        />

        {/* GALERIA FOTOGRÁFICA */}

        <Suspense
          fallback={
            <div
              aria-hidden="true"
              className="
                min-h-72 animate-pulse
                rounded-2xl bg-slate-100
              "
            />
          }
        >
          <ServiceProjectsGallery projects={galleryProjects} />
        </Suspense>

        {/* INDICAÇÃO DE AMPLIAÇÃO */}

        <p
          className="
            -mt-4 flex items-center
            justify-center gap-2
            text-xs text-slate-500
            md:text-sm
          "
        >
          <Maximize2 size={15} aria-hidden="true" />
          Clique nas fotografias para ampliar
        </p>

        {/* CHAMADA COMERCIAL */}

        <div
          className="
            flex flex-col items-center
            gap-4 text-center
          "
        >
          <h3
            className="
              font-title text-2xl
              font-extrabold text-secondary
              md:text-3xl
            "
          >
            Imagine Seu Ambiente Assim.
          </h3>

          <p className="max-w-xl text-slate-600">
            Seu próximo projeto começa com uma conversa. Solicite seu orçamento
            e descubra as possibilidades para transformar seu espaço.
          </p>

          <WhatsAppButton
            text="Quero Solicitar Meu Orçamento"
            message={
              `${cta.whatsappMessage}\n\n` +
              `Gostei das fotografias dos serviços ` +
              `realizados e gostaria de fazer um ` +
              `projeto semelhante.`
            }
            variant="primary"
            className="w-full sm:w-auto"
          />

          <Link
            href="/projetos"
            className="
              group flex items-center gap-2
              text-sm font-bold text-secondary
              hover:underline
            "
          >
            Conheça todos os nossos projetos
            <ArrowRight
              size={16}
              className="
                transition-transform
                group-hover:translate-x-1
              "
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
