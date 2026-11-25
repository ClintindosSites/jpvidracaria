import Image from "next/image";
import { CheckCircle2, Phone, ArrowUpRight } from "lucide-react";

import { company } from "@/data/company";
import QuoteForm from "@/components/shared/QuoteForm";

const benefits = [
  "Atendimento personalizado",
  "Projetos desenvolvidos sob medida",
  "Orçamento diretamente pelo WhatsApp",
  "Atendimento em Belo Horizonte",
];

export default function QuoteSection() {
  return (
    <section
      id="orcamento"
      aria-labelledby="quote-title"
      className="
        relative isolate overflow-hidden
        bg-secondary py-14 md:py-20 lg:py-24
      "
    >
      {/* IMAGEM DE BACKGROUND */}

      <Image
        src="/images/bg-orcamento.webp"
        alt=""
        fill
        sizes="100vw"
        quality={85}
        className="object-cover object-center"
      />

      {/* SOMBREADO RESPONSIVO */}

      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-secondary/75
          lg:bg-linear-to-r
          lg:from-secondary/95
          lg:via-secondary/80
          lg:to-secondary/30
        "
      />

      {/* DETALHES DECORATIVOS */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-20 -top-20 size-40
          rotate-45 bg-primary
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-20 -right-20 size-40
          rotate-45 bg-primary
        "
      />

      {/* CONTEÚDO PRINCIPAL */}

      <div
        className="
          container-site relative z-10 grid
          items-center gap-10
          lg:grid-cols-2 lg:gap-20
        "
      >
        {/* CONTEÚDO COMERCIAL */}

        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-0.5 w-10 bg-primary" />

            <span
              className="
                text-sm font-bold uppercase
                tracking-widest text-primary
              "
            >
              Solicite seu orçamento
            </span>
          </div>

          <h2
            id="quote-title"
            className="
              font-title text-4xl font-extrabold
              leading-tight text-white
              md:text-5xl lg:text-6xl
            "
          >
            Seu próximo projeto{" "}
            <span className="text-primary">começa aqui!</span>
          </h2>

          <p
            className="
              max-w-xl text-base leading-relaxed
              text-white/85 md:text-lg
            "
          >
            Transforme seu imóvel com soluções em vidro e alumínio desenvolvidas
            especialmente para seu ambiente. Conte com a JP Vidraçaria para
            tirar seu projeto do papel.
          </p>

          {/* BENEFÍCIOS */}

          <ul className="flex flex-col gap-4 py-2">
            {benefits.map(benefit => (
              <li
                key={benefit}
                className="
                  flex items-center gap-3
                  font-semibold text-white
                "
              >
                <CheckCircle2
                  size={24}
                  className="shrink-0 text-primary"
                  aria-hidden="true"
                />

                {benefit}
              </li>
            ))}
          </ul>

          {/* CONTATO DIRETO */}

          <div
            className="
              w-full border-t
              border-white/20 pt-6
            "
          >
            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                "Olá! Vim pelo site da JP Vidraçaria e gostaria de solicitar um orçamento."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                whatsapp-track group inline-flex
                items-center gap-4 text-white
              "
            >
              <div
                className="
                  flex size-14 shrink-0
                  items-center justify-center
                  rounded-xl bg-primary text-secondary
                  transition-transform
                  group-hover:scale-105
                "
              >
                <Phone size={26} />
              </div>

              <div>
                <p className="text-sm text-white/80">
                  Prefere conversar diretamente?
                </p>

                <span
                  className="
                    font-title text-xl font-extrabold
                    md:text-2xl
                  "
                >
                  {company.phone}
                </span>
              </div>

              <ArrowUpRight
                size={22}
                className="
                  shrink-0 text-primary
                  transition-transform
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>
        </div>

        {/* FORMULÁRIO */}

        <div
          className="
            relative overflow-hidden
            rounded-2xl border-t-4 border-primary
            bg-white p-5 shadow-2xl
            md:p-8 lg:p-10
          "
        >
          <div className="mb-7">
            <h3
              className="
                font-title text-2xl font-extrabold
                text-secondary md:text-3xl
              "
            >
              Conte-nos sobre seu projeto
            </h3>

            <p className="mt-2 text-slate-600">
              Preencha os dados abaixo e converse diretamente com nossa equipe
              pelo WhatsApp.
            </p>
          </div>

          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
