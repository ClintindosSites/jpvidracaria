import { services } from "@/data/services";

import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export default function ServicesSection() {
  return (
    <section id="servicos" className="section-spacing bg-white">
      <div className="container-site">
        {/* TÍTULO */}

        <SectionHeading
          badge="Nossos serviços"
          title="Soluções em Vidros e Esquadrias"
          description="
            Seja para construir, reformar ou renovar seu
            imóvel, encontre na JP Vidraçaria a solução
            sob medida ideal para seu projeto.
          "
          className="mb-12 md:mb-16"
        />

        {/* GRID DE SERVIÇOS */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map(service => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        {/* CHAMADA PARA AÇÃO */}

        <div
          className="
            mt-12 flex flex-col
            items-center gap-4
            text-center md:mt-16
          "
        >
          <p
            className="
              max-w-xl text-lg
              font-medium text-secondary
            "
          >
            Precisa de uma solução personalizada em vidro ou alumínio?
          </p>

          <WhatsAppButton
            variant="secondary"
            text="Solicitar meu orçamento"
            message="Olá! Conheci os serviços da JP Vidraçaria pelo site e gostaria de solicitar um orçamento personalizado."
            className="w-full sm:w-auto"
          />

          <span className="text-sm text-slate-500">
            Atendimento personalizado em Belo Horizonte.
          </span>
        </div>
      </div>
    </section>
  );
}
