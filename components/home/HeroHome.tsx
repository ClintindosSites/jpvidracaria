import Image from "next/image";
import Link from "next/link";

import { MapPin, ArrowRight, ShieldCheck, Ruler, Wrench } from "lucide-react";

import WhatsAppButton from "@/components/shared/WhatsAppButton";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Qualidade e durabilidade",
  },
  {
    icon: Ruler,
    title: "Projetos sob medida",
  },
  {
    icon: Wrench,
    title: "Instalação profissional",
  },
  {
    icon: MapPin,
    title: "Atendimento em BH",
  },
];

export default function HeroHome() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-secondary"
    >
      {/* HERO PRINCIPAL */}

      <div className="relative isolate">
        {/* IMAGEM DE FUNDO */}

        <Image
          src="/images/heroHome.webp"
          alt="Residência moderna com portas de vidro e esquadrias de alumínio preto sob medida"
          fill
          preload
          sizes="100vw"
          quality={85}
          className="
            -z-30 object-cover
            object-[65%_center]
            lg:object-center
          "
        />

        {/* OVERLAY MOBILE */}

        <div
          aria-hidden="true"
          className="
            absolute inset-0 -z-20
            bg-linear-to-t
            from-secondary
            via-secondary/85
            to-secondary/10
            lg:hidden
          "
        />

        {/* OVERLAY DESKTOP */}

        <div
          aria-hidden="true"
          className="
            absolute inset-0 -z-20 hidden
            bg-linear-to-r
            from-secondary
            via-secondary/90
            to-transparent
            lg:block
          "
        />

        {/* DETALHE AMARELO DIAGONAL */}

        <div
          aria-hidden="true"
          className="
            absolute -z-10 hidden
            h-full w-3
            left-[57%] top-0
            -skew-x-20
            bg-primary
            opacity-80
            xl:block
          "
        />

        {/* CONTEÚDO */}

        <div
          className="
            container-site relative
            flex min-h-175 items-end
            pb-12 pt-64
            sm:min-h-175
            lg:min-h-150
            lg:items-center
            lg:py-24
            xl:min-h-165
          "
        >
          <div
            className="
              flex w-full max-w-2xl
              flex-col items-start gap-6
            "
          >
            {/* LOCALIZAÇÃO */}

            <span
              className="
                inline-flex items-center gap-2
                rounded-full border border-primary/60
                bg-secondary/40 px-4 py-2
                text-xs font-bold uppercase
                tracking-wider text-primary
                backdrop-blur-sm
                md:text-sm
              "
            >
              <MapPin size={17} />
              Vidraçaria em Belo Horizonte
            </span>

            {/* TÍTULO PRINCIPAL */}

            <h1
              id="hero-title"
              className="
                font-title text-4xl
                font-extrabold leading-[1.12]
                tracking-tight text-white
                sm:text-5xl
                lg:text-5xl
                xl:text-6xl
              "
            >
              Soluções em Vidro e Alumínio{" "}
              <span className="text-primary">Sob Medida</span>
            </h1>

            {/* COPY COMERCIAL */}

            <p
              className="
                max-w-xl text-base
                leading-relaxed text-white/90
                md:text-lg lg:text-xl
              "
            >
              Transforme seu imóvel com box, espelhos, portas, janelas e
              esquadrias de alumínio que unem beleza, funcionalidade e
              acabamento profissional.
            </p>

            {/* CHAMADAS PARA AÇÃO */}

            <div
              className="
                flex w-full flex-col gap-3
                sm:w-auto sm:flex-row
                sm:flex-wrap
              "
            >
              <WhatsAppButton
                text="Solicitar Orçamento"
                message="Olá! Vim pelo site da JP Vidraçaria e gostaria de solicitar um orçamento para meu projeto."
                variant="primary"
                className="w-full sm:w-auto"
              />

              <Link
                href="/servicos"
                className="
                  inline-flex items-center
                  justify-center gap-3
                  rounded-lg border border-primary
                  px-6 py-4 font-bold
                  text-white transition-colors
                  hover:bg-primary
                  hover:text-secondary
                "
              >
                Conheça nossos serviços
                <ArrowRight size={20} />
              </Link>
            </div>

            <p
              className="
                flex items-center gap-2
                text-sm text-white/80
              "
            >
              <span
                className="
                  size-2 shrink-0
                  rounded-full bg-primary
                "
              />
              Atendimento personalizado para seu projeto.
            </p>
          </div>
        </div>
      </div>

      {/* FAIXA DE BENEFÍCIOS */}

      <div className="bg-primary text-secondary">
        <div
          className="
            container-site grid
            grid-cols-2 gap-6
            py-6 md:grid-cols-4
            md:gap-4 md:py-7
          "
        >
          {benefits.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="
                flex flex-col items-center
                justify-center gap-3
                text-center
                md:flex-row md:text-left
                md:border-r
                md:border-secondary/20
                md:last:border-r-0
              "
            >
              <Icon
                size={32}
                strokeWidth={1.8}
                className="shrink-0"
                aria-hidden="true"
              />

              <span
                className="
                  max-w-40 text-sm
                  font-bold leading-tight
                  md:text-base
                "
              >
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
