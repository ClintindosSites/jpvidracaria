import Image from "next/image";
import Link from "next/link";

import {
  Ruler,
  ShieldCheck,
  Wrench,
  MessageCircle,
  ArrowRight,
  MapPin,
} from "lucide-react";

import WhatsAppButton from "@/components/shared/WhatsAppButton";

const differentials = [
  {
    icon: Ruler,
    title: "Projetos sob medida",
    description: "Soluções que se adaptam ao seu espaço.",
  },
  {
    icon: ShieldCheck,
    title: "Qualidade dos materiais",
    description: "Atenção à resistência e à funcionalidade.",
  },
  {
    icon: Wrench,
    title: "Cuidado no acabamento",
    description: "Atenção aos detalhes de cada projeto.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento personalizado",
    description: "Orientação para escolher a melhor solução.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className="
        relative overflow-hidden
        bg-primary section-spacing
      "
    >
      {/* DETALHES DECORATIVOS */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-40 -top-40 size-120
          rounded-full border-60
          border-secondary/5
        "
      />

      <div
        className="
          container-site relative grid
          items-center gap-12
          lg:grid-cols-2 lg:gap-16
        "
      >
        {/* IMAGEM */}

        <div className="relative pb-5 pr-5 md:pb-8 md:pr-8">
          <div
            aria-hidden="true"
            className="
              absolute inset-0
              translate-x-1 translate-y-1
              rounded-2xl bg-secondary
            "
          />

          <div
            className="
              relative aspect-4/5
              overflow-hidden rounded-2xl
              bg-secondary/10
              sm:aspect-5/4 lg:aspect-4/5
            "
          >
            <Image
              src="/images/sobre-jp.webp"
              alt="Instalação de vidro e esquadrias de alumínio em projeto residencial"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />

            <div
              aria-hidden="true"
              className="
                absolute inset-0
                bg-linear-to-t
                from-secondary/80
                via-transparent to-transparent
              "
            />

            <div className="absolute bottom-0 left-0 p-6">
              <span
                className="
                  font-title text-2xl
                  font-extrabold text-white
                "
              >
                JP Vidraçaria
              </span>

              <p className="mt-1 text-sm text-white/90">
                Vidros e esquadrias sob medida.
              </p>
            </div>
          </div>

          {/* CARD DE LOCALIZAÇÃO */}

          <div
            className="
              absolute bottom-0 right-0
              flex items-center gap-3
              rounded-xl bg-white
              px-5 py-4 shadow-xl
            "
          >
            <div
              className="
                flex size-12 shrink-0
                items-center justify-center
                rounded-lg bg-primary
                text-secondary
              "
            >
              <MapPin size={26} />
            </div>

            <div>
              <span className="text-xs text-slate-500">Atendimento em</span>

              <p className="font-bold text-secondary">Belo Horizonte - MG</p>
            </div>
          </div>
        </div>

        {/* CONTEÚDO */}

        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-0.5 w-10 bg-secondary" />

            <span
              className="
                text-xs font-bold uppercase
                tracking-widest text-secondary
                md:text-sm
              "
            >
              Conheça a JP Vidraçaria
            </span>
          </div>

          <h2
            id="about-title"
            className="
              section-title text-secondary
            "
          >
            Mais do que vidro, soluções que valorizam seu imóvel.
          </h2>

          <p
            className="
              text-base leading-relaxed
              text-secondary/85 md:text-lg
            "
          >
            A <strong>JP Vidraçaria</strong> é especializada em soluções em
            vidro e esquadrias de alumínio sob medida em Belo Horizonte,
            atendendo projetos residenciais e comerciais.
          </p>

          <p
            className="
              text-base leading-relaxed
              text-secondary/85 md:text-lg
            "
          >
            Seja para construir, reformar ou renovar um ambiente, trabalhamos
            para transformar suas ideias em soluções que combinam beleza,
            funcionalidade e qualidade de acabamento.
          </p>

          {/* DIFERENCIAIS */}

          <div
            className="
              grid w-full grid-cols-1
              gap-5 py-3 sm:grid-cols-2
            "
          >
            {differentials.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-3">
                <div
                  className="
                      flex size-12 shrink-0
                      items-center justify-center
                      rounded-xl bg-secondary
                      text-primary
                    "
                >
                  <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
                </div>

                <div>
                  <h3
                    className="
                        font-title text-sm
                        font-extrabold text-secondary
                        md:text-base
                      "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                        mt-1 text-sm leading-relaxed
                        text-secondary/80
                      "
                  >
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CHAMADAS PARA AÇÃO */}

          <div
            className="
              flex w-full flex-col gap-4
              border-t border-secondary/20
              pt-6 sm:flex-row sm:flex-wrap
              sm:items-center
            "
          >
            <WhatsAppButton
              variant="secondary"
              text="Converse com nossa equipe"
              message="Olá! Conheci a JP Vidraçaria pelo site e gostaria de conversar sobre meu projeto."
              className="w-full sm:w-auto"
            />

            <Link
              href="/sobre"
              className="
                inline-flex items-center
                justify-center gap-2
                py-3 font-bold text-secondary
                transition-opacity hover:opacity-70
              "
            >
              Saiba mais sobre nós
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
