import Image from "next/image";

import { Wallet, CheckCircle2, MessageCircle } from "lucide-react";

import type { ServiceDetail } from "@/types/service-detail";

import WhatsAppButton from "@/components/shared/WhatsAppButton";

interface ServiceCostBenefitProps {
  service: ServiceDetail;
}

export default function ServiceCostBenefit({
  service,
}: ServiceCostBenefitProps) {
  const { costBenefit, cta } = service;

  return (
    <section
      id="custo-beneficio"
      className="
        section-spacing relative isolate
        overflow-hidden bg-secondary
      "
    >
      {/* ELEMENTOS DECORATIVOS */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-40 -top-40 size-96
          rotate-45 bg-primary/5
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-40 -right-40 size-96
          rotate-45 bg-primary/10
        "
      />

      <div
        className="
          container-site relative z-10
          grid items-center gap-10
          lg:grid-cols-2 lg:gap-20
        "
      >
        {/* IMAGEM */}

        <div
          className="
            relative order-2
            lg:order-1
          "
        >
          {/* DETALHE AMARELO ATRÁS DA IMAGEM */}

          <div
            aria-hidden="true"
            className="
              absolute -bottom-3 -right-3
              h-3/4 w-3/4 rounded-2xl
              bg-primary md:-bottom-5
              md:-right-5
            "
          />

          <div
            className="
              relative aspect-4/3
              overflow-hidden rounded-2xl
              bg-slate-800
              lg:aspect-4/5
            "
          >
            <Image
              src={costBenefit.image}
              alt={costBenefit.imageAlt}
              fill
              sizes="
                (max-width: 1023px) 100vw,
                50vw
              "
              className="object-cover"
            />

            {/* SOMBREADO */}

            <div
              aria-hidden="true"
              className="
                absolute inset-0
                bg-linear-to-t
                from-secondary/80
                via-transparent
                to-transparent
              "
            />

            {/* CARD SOBRE A IMAGEM */}

            <div
              className="
                absolute bottom-4 left-4 right-4
                flex items-center gap-3
                rounded-xl bg-primary p-4
                text-secondary
                md:bottom-6 md:left-6
                md:right-auto md:p-5
              "
            >
              <Wallet
                size={36}
                strokeWidth={1.8}
                className="shrink-0"
                aria-hidden="true"
              />

              <div>
                <p className="font-title font-extrabold md:text-lg">
                  Invista com inteligência
                </p>

                <p className="text-xs md:text-sm">
                  Qualidade que faz a diferença
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTEÚDO COMERCIAL */}

        <div
          className="
            order-1 flex flex-col
            items-start gap-5
            md:gap-6 lg:order-2
          "
        >
          {/* BADGE */}

          <span
            className="
              inline-flex items-center gap-2
              rounded-full border border-primary/30
              bg-primary/10 px-4 py-2
              text-xs font-bold uppercase
              tracking-wide text-primary
            "
          >
            <Wallet size={16} aria-hidden="true" />
            Qualidade que vale o investimento
          </span>

          {/* TÍTULO */}

          <h2
            className="
              font-title text-3xl
              font-extrabold leading-tight
              tracking-tight text-white
              md:text-4xl lg:text-5xl
            "
          >
            {costBenefit.title}
          </h2>

          {/* LINHA DECORATIVA */}

          <div
            aria-hidden="true"
            className="h-1 w-20 rounded-full bg-primary"
          />

          {/* COPY COMERCIAL */}

          <p
            className="
              text-base leading-relaxed
              text-white/80 md:text-lg
            "
          >
            {costBenefit.description}
          </p>

          {/* ARGUMENTOS DE VENDA */}

          <ul className="flex w-full flex-col gap-3">
            {costBenefit.items.map(item => (
              <li
                key={item}
                className="
                  flex items-center gap-3
                  rounded-lg border border-white/10
                  bg-white/5 px-4 py-3
                  text-sm font-medium text-white
                  transition-colors
                  hover:border-primary/40
                  md:text-base
                "
              >
                <CheckCircle2
                  size={21}
                  className="shrink-0 text-primary"
                  aria-hidden="true"
                />

                {item}
              </li>
            ))}
          </ul>

          {/* CONVERSÃO */}

          <div
            className="
              mt-2 flex w-full flex-col
              items-start gap-3 sm:w-auto
            "
          >
            <WhatsAppButton
              text="Consultar Valores"
              message={
                `${cta.whatsappMessage}\n\n` +
                `Gostaria de conhecer os valores e as opções ` +
                `com melhor custo-benefício para meu projeto.`
              }
              variant="primary"
              className="
                min-h-14 w-full px-8
                text-base sm:w-auto
                md:text-lg
              "
            />

            <p
              className="
                flex items-center gap-2
                text-xs text-white/70
                md:text-sm
              "
            >
              <MessageCircle
                size={16}
                className="shrink-0 text-primary"
                aria-hidden="true"
              />
              Orçamento de acordo com seu projeto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
