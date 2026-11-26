import { Layers, CheckCircle2 } from "lucide-react";

import type { ServiceDetail } from "@/types/service-detail";

import SectionHeading from "@/components/shared/SectionHeading";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ServiceMaterialCard from "./ServicesMaterialCard";

interface ServiceMaterialsProps {
  service: ServiceDetail;
}

export default function ServiceMaterials({ service }: ServiceMaterialsProps) {
  const { materials, cta } = service;

  if (!materials.items.length) {
    return null;
  }

  return (
    <section id="materiais" className="section-spacing bg-white">
      <div
        className="
          container-site flex flex-col
          gap-8 md:gap-12
        "
      >
        {/* TÍTULO DA SEÇÃO */}

        <SectionHeading
          badge="Qualidade em cada detalhe"
          title={materials.title}
          description={materials.description}
        />

        {/* MATERIAIS E ACABAMENTOS */}

        <div
          className="
            grid grid-cols-1 gap-4
            lg:grid-cols-2 lg:gap-6
          "
        >
          {materials.items.map(material => (
            <ServiceMaterialCard key={material.title} material={material} />
          ))}
        </div>

        {/* CTA COMERCIAL */}

        <div
          className="
            relative isolate overflow-hidden
            rounded-2xl bg-secondary
            p-6 md:p-10
          "
        >
          {/* ELEMENTOS DECORATIVOS */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -right-24 -top-24 size-64
              rotate-45 bg-primary/10
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -bottom-24 -left-24 size-64
              rotate-45 bg-primary/5
            "
          />

          {/* CONTEÚDO */}

          <div
            className="
              relative z-10 flex flex-col
              items-center gap-6
              text-center lg:flex-row
              lg:justify-between lg:text-left
            "
          >
            <div
              className="
                flex flex-col items-center
                gap-5 sm:flex-row
              "
            >
              {/* ÍCONE */}

              <div
                className="
                  flex size-16 shrink-0
                  items-center justify-center
                  rounded-2xl bg-primary
                  text-secondary md:size-20
                "
              >
                <Layers size={36} strokeWidth={1.8} aria-hidden="true" />
              </div>

              {/* COPY */}

              <div className="flex flex-col gap-3">
                <h3
                  className="
                    font-title text-2xl
                    font-extrabold text-white
                    md:text-3xl
                  "
                >
                  Seu Projeto,{" "}
                  <span className="text-primary">Suas Escolhas.</span>
                </h3>

                <p
                  className="
                    max-w-2xl text-sm
                    leading-relaxed text-white/80
                    md:text-base
                  "
                >
                  Conte com nossa orientação para escolher os materiais e
                  acabamentos que combinam com seu ambiente, suas necessidades e
                  seu orçamento.
                </p>

                <div
                  className="
                    flex flex-wrap justify-center
                    gap-x-5 gap-y-2
                    text-sm text-white/90
                    lg:justify-start
                  "
                >
                  <span className="flex items-center gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-primary"
                      aria-hidden="true"
                    />
                    Atendimento personalizado
                  </span>

                  <span className="flex items-center gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-primary"
                      aria-hidden="true"
                    />
                    Orientação na escolha
                  </span>
                </div>
              </div>
            </div>

            {/* CONVERSÃO */}

            <WhatsAppButton
              text="Quero Personalizar Meu Projeto"
              message={
                `${cta.whatsappMessage}\n\n` +
                `Gostaria de conhecer as opções de ` +
                `materiais e acabamentos disponíveis.`
              }
              variant="primary"
              className="w-full shrink-0 sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
