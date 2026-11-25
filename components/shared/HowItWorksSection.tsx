import {
  MessageCircle,
  Ruler,
  FileCheck,
  HardHat,
  ChevronRight,
} from "lucide-react";

import SectionHeading from "@/components/shared/SectionHeading";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Faça seu contato",
    description:
      "Envie uma mensagem pelo WhatsApp contando o que você precisa para seu imóvel.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Avaliamos seu projeto",
    description:
      "Entendemos suas necessidades e indicamos os modelos, materiais e acabamentos adequados.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Receba seu orçamento",
    description:
      "Receba uma proposta personalizada de acordo com as características do seu projeto.",
  },
  {
    number: "04",
    icon: HardHat,
    title: "Instalação profissional",
    description:
      "Após a aprovação, realizamos a instalação com atenção à qualidade e aos detalhes.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="
        relative overflow-hidden
        bg-[#FFF9E8] py-14 md:py-20
      "
    >
      {/* ELEMENTOS DECORATIVOS */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-24 -top-24 size-48
          rotate-45 bg-primary
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-24 -right-24 size-48
          rotate-45 bg-primary
        "
      />

      <div className="container-site relative z-10">
        {/* TÍTULO */}

        <SectionHeading
          badge="Como funciona"
          title="Veja Como é Simples Contratar a JP Vidraçaria"
          description="Do primeiro contato à instalação, conte com um atendimento personalizado para transformar seu projeto em realidade."
          className="mb-10 md:mb-14"
        />

        {/* ETAPAS */}

        <ol
          className="
            grid grid-cols-1 gap-5
            sm:grid-cols-2
            lg:grid-cols-4 lg:gap-6
          "
        >
          {steps.map(({ number, icon: Icon, title, description }, index) => (
            <li
              key={number}
              className="
                  group relative flex h-full
                  items-start gap-4
                  rounded-2xl border
                  border-secondary/5
                  bg-white p-5 shadow-sm
                  transition-all duration-300
                  hover:border-primary
                  hover:shadow-lg
                  lg:flex-col lg:items-center
                  lg:p-7 lg:text-center
                "
            >
              {/* NÚMERO DECORATIVO */}

              <span
                aria-hidden="true"
                className="
                    absolute right-4 top-3
                    font-title text-4xl
                    font-black text-secondary/5
                  "
              >
                {number}
              </span>

              {/* ÍCONE */}

              <div
                className="
                    relative flex size-14
                    shrink-0 items-center
                    justify-center rounded-xl
                    bg-primary text-secondary
                    transition-transform duration-300
                    group-hover:-translate-y-1
                    lg:mb-2 lg:size-20
                    lg:rounded-2xl
                  "
              >
                <Icon size={32} strokeWidth={1.8} aria-hidden="true" />
              </div>

              {/* CONTEÚDO */}

              <div className="relative flex flex-col gap-2">
                <h3
                  className="
                      font-title text-lg
                      font-extrabold text-secondary
                      lg:text-xl
                    "
                >
                  {index + 1}. {title}
                </h3>

                <p
                  className="
                      text-sm leading-relaxed
                      text-slate-600 md:text-base
                    "
                >
                  {description}
                </p>
              </div>

              {/* CONEXÃO ENTRE ETAPAS */}

              {index < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="
                      absolute -right-7 top-1/2
                      z-20 hidden size-8
                      -translate-y-1/2
                      items-center justify-center
                      rounded-full bg-primary
                      text-secondary
                      ring-4 ring-[#FFF9E8]
                      lg:flex
                    "
                >
                  <ChevronRight size={20} />
                </div>
              )}
            </li>
          ))}
        </ol>

        {/* CHAMADA PARA AÇÃO */}

        <div
          className="
            mt-10 flex flex-col
            items-center gap-4
            text-center
          "
        >
          <p className="font-medium text-secondary">
            Tudo começa com uma conversa. Conte-nos o que você precisa!
          </p>

          <WhatsAppButton
            variant="secondary"
            text="Solicitar meu orçamento"
            message="Olá! Gostaria de solicitar um orçamento com a JP Vidraçaria. Podemos conversar sobre meu projeto?"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
