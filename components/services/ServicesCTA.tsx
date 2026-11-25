import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { company } from "@/data/company";

export default function ServicesCTA() {
  return (
    <section
      className="
        relative isolate overflow-hidden
        bg-secondary py-14 md:py-20
      "
    >
      {/* BACKGROUND */}

      <Image
        src="/images/bg-orcamento.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-secondary/85
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
          absolute -bottom-24 -right-24
          size-64 rotate-45 bg-primary/10
        "
      />

      {/* CONTEÚDO */}

      <div
        className="
          container-site relative z-10
          flex flex-col items-center
          gap-6 text-center
        "
      >
        <span
          className="
            text-xs font-bold uppercase
            tracking-widest text-primary
          "
        >
          Vamos conversar?
        </span>

        <h2
          className="
            max-w-3xl font-title text-3xl
            font-extrabold text-white
            md:text-5xl
          "
        >
          Precisa de Uma{" "}
          <span className="text-primary">Solução Personalizada?</span>
        </h2>

        <p
          className="
            max-w-2xl text-base
            leading-relaxed text-white/80
            md:text-lg
          "
        >
          Conte com a JP Vidraçaria para desenvolver seu projeto em vidro ou
          alumínio sob medida. Converse com nossa equipe e descubra a solução
          ideal para seu ambiente.
        </p>

        <div
          className="
            flex flex-wrap justify-center
            gap-x-6 gap-y-3
          "
        >
          {[
            "Atendimento em Belo Horizonte",
            "Orçamento personalizado",
            "Soluções sob medida",
          ].map(item => (
            <div
              key={item}
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

              {item}
            </div>
          ))}
        </div>

        <div
          className="
            mt-2 flex w-full flex-col
            justify-center gap-4
            sm:w-auto sm:flex-row
          "
        >
          <WhatsAppButton
            text="Solicitar meu orçamento"
            message={company.defaultMessage}
            className="w-full sm:w-auto"
          />

          <Link
            href="/projetos"
            className="
              inline-flex items-center
              justify-center gap-2
              rounded-lg border-2 border-white/50
              px-6 py-3 font-bold text-white
              transition-colors
              hover:border-primary hover:text-primary
            "
          >
            Conhecer nossos projetos
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
