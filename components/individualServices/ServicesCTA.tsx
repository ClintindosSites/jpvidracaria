import Image from "next/image";

import { CheckCircle2, MessageCircle, Phone, Sparkles } from "lucide-react";

import { company } from "@/data/company";

import type { ServiceDetail } from "@/types/service-detail";

import WhatsAppButton from "@/components/shared/WhatsAppButton";

interface ServiceCTAProps {
  service: ServiceDetail;
}

const benefits = [
  "Soluções sob medida",
  "Instalação profissional",
  "Atendimento personalizado",
];

export default function ServiceCTA({ service }: ServiceCTAProps) {
  const { cta, hero } = service;

  return (
    <section
      id="solicitar-orcamento"
      className="
        relative isolate overflow-hidden
        bg-secondary py-16
        md:py-24 lg:py-28
      "
    >
      {/* IMAGEM DE BACKGROUND */}

      <Image
        src={cta.image || hero.image}
        alt=""
        fill
        sizes="100vw"
        quality={85}
        className="object-cover object-center"
      />

      {/* SOMBREADO */}

      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-secondary/80
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-linear-to-t
          from-secondary/80
          via-transparent
          to-secondary/20
        "
      />

      {/* ELEMENTOS DECORATIVOS */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-28 -top-28 size-80
          rotate-45 bg-primary/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-36 -right-36 size-96
          rotate-45 bg-primary/15
        "
      />

      {/* CONTEÚDO PRINCIPAL */}

      <div
        className="
          container-site relative z-10
          flex flex-col items-center
          gap-6 text-center md:gap-8
        "
      >
        {/* BADGE */}

        <div
          className="
            flex items-center gap-2
            rounded-full border border-primary/40
            bg-primary/10 px-4 py-2
            text-xs font-bold uppercase
            tracking-wider text-primary
          "
        >
          <Sparkles size={16} aria-hidden="true" />
          Transforme seu ambiente
        </div>

        {/* HEADLINE */}

        <h2
          className="
            max-w-4xl font-title
            text-3xl font-extrabold
            leading-tight text-white
            md:text-5xl lg:text-6xl
          "
        >
          {cta.title}

          {cta.highlight && (
            <span className="block text-primary">{cta.highlight}</span>
          )}
        </h2>

        {/* LINHA DECORATIVA */}

        <div className="h-1 w-20 rounded-full bg-primary" />

        {/* DESCRIÇÃO */}

        <p
          className="
            max-w-2xl text-base
            leading-relaxed text-white/85
            md:text-lg
          "
        >
          {cta.description}
        </p>

        {/* BENEFÍCIOS */}

        <ul
          className="
            flex flex-col items-center
            justify-center gap-3
            sm:flex-row sm:flex-wrap
            md:gap-6
          "
        >
          {benefits.map(benefit => (
            <li
              key={benefit}
              className="
                flex items-center gap-2
                text-sm font-medium text-white
              "
            >
              <CheckCircle2
                size={20}
                className="shrink-0 text-primary"
                aria-hidden="true"
              />

              {benefit}
            </li>
          ))}
        </ul>

        {/* CTA PRINCIPAL */}

        <div
          className="
            flex w-full flex-col
            items-center gap-4
            sm:w-auto
          "
        >
          <WhatsAppButton
            text={cta.buttonText}
            message={cta.whatsappMessage}
            variant="primary"
            className="
              min-h-15 w-full
              px-8 text-base
              sm:w-auto md:px-10
              md:text-lg
            "
          />

          <span
            className="
              flex items-center gap-2
              text-xs text-white/70
              md:text-sm
            "
          >
            <MessageCircle size={16} aria-hidden="true" />
            Atendimento direto pelo WhatsApp
          </span>
        </div>

        {/* CONTATO ALTERNATIVO */}

        <div
          className="
            flex flex-wrap items-center
            justify-center gap-2
            border-t border-white/15
            px-6 pt-6
          "
        >
          <Phone size={17} className="text-primary" aria-hidden="true" />

          <span className="text-sm text-white/70">Prefere ligar?</span>

          <a
            href={`tel:+${company.whatsapp}`}
            className="
              font-title text-base font-bold
              text-white transition-colors
              hover:text-primary
            "
          >
            {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
