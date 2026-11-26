import { ArrowLeftRight, MessagesSquare } from "lucide-react";

import type { ServiceDetail } from "@/types/service-detail";

import SectionHeading from "@/components/shared/SectionHeading";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ServiceModelCard from "./ServiceModelCard";

interface ServiceModelsProps {
  service: ServiceDetail;
}

export default function ServiceModels({ service }: ServiceModelsProps) {
  const { models, hero, cta } = service;

  if (!models.items.length) {
    return null;
  }

  return (
    <section id="modelos" className="section-spacing overflow-hidden bg-white">
      <div className="container-site flex flex-col gap-8 md:gap-12">
        {/* TÍTULO */}

        <SectionHeading
          badge="Encontre o modelo ideal"
          title={models.title}
          description={models.description}
        />

        {/* CARROSSEL DE MODELOS */}

        <ul
          aria-label="Modelos disponíveis"
          tabIndex={0}
          className="
            service-models-scroll
            grid auto-cols-[82%]
            grid-flow-col gap-4
            snap-x snap-mandatory
            overflow-x-auto
            overscroll-x-contain
            pb-5
            focus-visible:outline-2
            focus-visible:outline-secondary
            sm:auto-cols-[46%]
            md:gap-6
            lg:auto-cols-[calc((100%-4.5rem)/4)]
          "
        >
          {models.items.map(model => (
            <li key={model.title} className="min-w-0 snap-start">
              <ServiceModelCard
                model={model}
                whatsappMessage={
                  `${cta.whatsappMessage}\n\n` +
                  `Tenho interesse no modelo: ${model.title}. ` +
                  `Gostaria de consultar os valores.`
                }
              />
            </li>
          ))}
        </ul>

        {/* INDICAÇÃO DE SCROLL MOBILE */}

        <div
          className="
            -mt-5 flex items-center
            justify-center gap-2
            text-xs text-slate-500
            lg:hidden
          "
        >
          <ArrowLeftRight size={16} aria-hidden="true" />
          Deslize para conhecer todos os modelos
        </div>

        {/* CTA DE AUXÍLIO NA ESCOLHA */}

        <div
          className="
            relative isolate overflow-hidden
            rounded-2xl border border-primary/30
            bg-primary-light p-6
            md:p-8
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -bottom-20 -right-20
              size-52 rotate-45
              bg-primary/20
            "
          />

          <div
            className="
              relative z-10 flex flex-col
              items-center gap-5
              text-center
              lg:flex-row lg:justify-between
              lg:text-left
            "
          >
            <div
              className="
                flex flex-col items-center
                gap-4 sm:flex-row
              "
            >
              {/* ÍCONE */}

              <div
                className="
                  flex size-16 shrink-0
                  items-center justify-center
                  rounded-2xl bg-primary
                  text-secondary
                "
              >
                <MessagesSquare
                  size={32}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              {/* COPY */}

              <div className="flex flex-col gap-2">
                <h3
                  className="
                    font-title text-xl
                    font-extrabold text-secondary
                    md:text-2xl
                  "
                >
                  Não sabe qual modelo escolher?
                </h3>

                <p className="max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                  Nossa equipe ajuda você a encontrar a solução ideal para seu
                  ambiente, considerando suas necessidades e seu orçamento.
                </p>
              </div>
            </div>

            {/* BOTÃO */}

            <WhatsAppButton
              text="Falar com um especialista"
              message={
                `Olá! Vim pelo site da JP Vidraçaria. ` +
                `Tenho interesse em ${hero.highlight} ` +
                `e gostaria de ajuda para escolher o modelo ideal.`
              }
              variant="secondary"
              className="w-full shrink-0 sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
