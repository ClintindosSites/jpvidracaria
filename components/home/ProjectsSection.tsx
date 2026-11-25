import Link from "next/link";
import { ArrowRight } from "lucide-react";

import SectionHeading from "@/components/shared/SectionHeading";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ProjectsCarousel from "@/components/projects/ProjectsCarousel";

export default function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="relative overflow-hidden bg-white py-14 md:py-20"
    >
      <div className="container-site">
        {/* TÍTULO */}

        <SectionHeading
          badge="Nossos projetos"
          title="Confira Alguns Projetos Realizados"
          description="
            Conheça nossas soluções em vidro e alumínio
            e inspire-se para transformar seu imóvel.
          "
          className="mb-8 md:mb-10"
        />

        {/* CARROSSEL */}

        <ProjectsCarousel />

        {/* CHAMADAS PARA AÇÃO */}

        <div
          className="
            mt-8 flex flex-col items-center
            justify-center gap-3
            sm:flex-row
          "
        >
          <WhatsAppButton
            variant="secondary"
            text="Solicitar meu orçamento"
            message="Olá! Conheci os projetos da JP Vidraçaria pelo site e gostaria de solicitar um orçamento."
            className="w-full sm:w-auto"
          />

          <Link
            href="/projetos"
            className="
              inline-flex w-full items-center
              justify-center gap-3
              rounded-lg border-2 border-secondary
              px-6 py-3.5 font-bold text-secondary
              transition-colors
              hover:bg-secondary hover:text-white
              sm:w-auto
            "
          >
            Ver todos os projetos
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
