import Link from "next/link";

import { ArrowRight, Ruler, CheckCircle2 } from "lucide-react";

import WhatsAppButton from "@/components/shared/WhatsAppButton";

export default function ProjectsCTA() {
  return (
    <section
      className="
        relative isolate overflow-hidden
        bg-primary py-12 md:py-16
      "
    >
      {/* ELEMENTOS DECORATIVOS */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-24 -top-24 size-64
          rotate-45 bg-secondary/5
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-24 -right-24 size-64
          rotate-45 bg-secondary/5
        "
      />

      <div
        className="
          container-site relative z-10
          flex flex-col items-center
          gap-6 text-center
        "
      >
        <div
          className="
            flex size-16 items-center
            justify-center rounded-2xl
            bg-secondary text-primary
          "
        >
          <Ruler size={30} aria-hidden="true" />
        </div>

        <h2
          className="
            max-w-3xl font-title
            text-3xl font-extrabold
            text-secondary md:text-4xl
          "
        >
          Seu Projeto Pode Ser o Próximo!
        </h2>

        <p
          className="
            max-w-2xl text-base
            leading-relaxed text-secondary/80
            md:text-lg
          "
        >
          Gostou de algum dos nossos trabalhos? Conte com a JP Vidraçaria para
          desenvolver uma solução personalizada que valorize seu ambiente.
        </p>

        {/* DIFERENCIAIS */}

        <div
          className="
            flex flex-wrap justify-center
            gap-x-6 gap-y-3
          "
        >
          {[
            "Projetos sob medida",
            "Atendimento personalizado",
            "Instalação profissional",
          ].map(item => (
            <div
              key={item}
              className="
                flex items-center gap-2
                text-sm font-semibold
                text-secondary
              "
            >
              <CheckCircle2 size={19} className="shrink-0" aria-hidden="true" />

              {item}
            </div>
          ))}
        </div>

        {/* BOTÕES */}

        <div
          className="
            mt-2 flex w-full flex-col
            justify-center gap-3
            sm:w-auto sm:flex-row
          "
        >
          <WhatsAppButton
            variant="secondary"
            text="Solicitar meu orçamento"
            message="Olá! Estava visualizando os projetos da JP Vidraçaria e gostaria de solicitar um orçamento."
            className="w-full sm:w-auto"
          />

          <Link
            href="/servicos"
            className="
              inline-flex items-center
              justify-center gap-2
              rounded-lg border-2
              border-secondary px-6 py-3
              font-bold text-secondary
              transition-colors
              hover:bg-secondary hover:text-white
            "
          >
            Conhecer serviços
            <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
