import Image from "next/image";

import {
  MapPin,
  CheckCircle2,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

import Link from "next/link";

import type { ServiceDetail } from "@/types/service-detail";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

interface ServiceHeroProps {
  service: ServiceDetail;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  const { hero, cta } = service;

  return (
    <section
      id="service-hero"
      className="
        relative isolate flex
        min-h-145 items-center
        overflow-hidden bg-secondary
        py-10 md:min-h-155 md:py-16
        lg:min-h-165
      "
    >
      {/* BACKGROUND */}

      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        preload
        quality={85}
        sizes="100vw"
        className="object-cover object-bottom"
      />

      {/* SOMBREADO */}

      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-secondary/85
          lg:bg-linear-to-r
          lg:from-secondary/95
          lg:via-secondary/80
          lg:to-secondary/15
        "
      />

      {/* DETALHES DECORATIVOS */}

      <div
        aria-hidden="true"
        className="
          absolute -left-24 -top-24
          size-64 rotate-45 bg-primary/10
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute -bottom-32 -right-32
          size-80 rotate-45 bg-primary/10
        "
      />

      {/* CONTEÚDO */}

      <div className="container-site relative z-10 w-full">
        <div
          className="
            flex max-w-3xl flex-col
            items-start gap-5
            md:gap-6
          "
        >
          {/* BREADCRUMB */}

          <nav
            aria-label="Caminho de navegação"
            className="
              flex flex-wrap items-center
              gap-2 text-xs text-white/70
              md:text-sm
            "
          >
            <Link href="/" className="transition-colors hover:text-primary">
              Início
            </Link>

            <ChevronRight size={14} aria-hidden="true" />

            <Link
              href="/servicos"
              className="transition-colors hover:text-primary"
            >
              Serviços
            </Link>

            <ChevronRight size={14} aria-hidden="true" />

            <span aria-current="page" className="text-primary">
              {hero.highlight}
            </span>
          </nav>

          {/* LOCALIZAÇÃO */}

          <div
            className="
              inline-flex items-center gap-2
              rounded-full border border-primary/30
              bg-primary/10 px-4 py-2
              text-xs font-semibold text-primary
              md:text-sm
            "
          >
            <MapPin size={17} className="shrink-0" aria-hidden="true" />

            {hero.badge}
          </div>

          {/* HEADLINE */}

          <h1
            className="
              font-title text-3xl
              font-extrabold leading-[1.15]
              tracking-tight text-white
              sm:text-4xl md:text-5xl
              lg:text-6xl
            "
          >
            {hero.title} <span className="text-primary">{hero.highlight}</span>
          </h1>

          {/* SUBHEADLINE */}

          <p
            className="
              max-w-2xl text-base
              leading-relaxed text-white/85
              md:text-lg lg:text-xl
            "
          >
            {hero.description}
          </p>

          {/* BENEFÍCIOS IMEDIATOS */}

          <ul className="flex flex-col gap-3">
            {hero.benefits.map(benefit => (
              <li
                key={benefit}
                className="
                  flex items-center gap-3
                  text-sm font-medium text-white
                  md:text-base
                "
              >
                <CheckCircle2
                  size={21}
                  className="shrink-0 text-primary"
                  aria-hidden="true"
                />

                {benefit}
              </li>
            ))}
          </ul>

          {/* CONVERSÃO */}

          <div
            className="
              mt-2 flex w-full flex-col
              items-start gap-3
              sm:w-auto
            "
          >
            <WhatsAppButton
              text={hero.cta}
              message={cta.whatsappMessage}
              variant="primary"
              className="
                min-h-14 w-full
                px-7 text-base
                sm:w-auto md:text-lg
              "
            />

            {/* REDUÇÃO DE OBJEÇÕES */}

            <div
              className="
                flex items-center gap-2
                text-xs text-white/75
                md:text-sm
              "
            >
              <MessageCircle
                size={16}
                className="shrink-0 text-primary"
                aria-hidden="true"
              />
              Atendimento direto pelo WhatsApp
            </div>
          </div>

          {/* LINHA DECORATIVA */}

          <div
            aria-hidden="true"
            className="mt-2 h-1 w-20 rounded-full bg-primary"
          />
        </div>
      </div>
    </section>
  );
}
