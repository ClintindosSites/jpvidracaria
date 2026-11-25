import type { Metadata } from "next";
import Link from "next/link";

import { Construction, ArrowLeft } from "lucide-react";

import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Serviço em Desenvolvimento",
  description:
    "Estamos preparando esta página para apresentar nossas soluções em vidro e alumínio.",

  robots: {
    index: false,
    follow: true,
  },
};

export function generateStaticParams() {
  return services.map(service => ({
    slug: service.slug,
  }));
}

export default function ServicePage() {
  return (
    <section
      className="
        relative isolate flex min-h-[65vh]
        items-center justify-center
        overflow-hidden bg-secondary
        py-16 md:py-24
      "
    >
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
        <div
          className="
            flex size-24 items-center
            justify-center rounded-2xl
            border border-primary/30
            bg-primary/10 text-primary
          "
        >
          <Construction size={48} aria-hidden="true" />
        </div>

        <span
          className="
            text-xs font-bold uppercase
            tracking-widest text-primary
          "
        >
          Novidades em breve
        </span>

        <h1
          className="
            font-title text-3xl font-extrabold
            text-white md:text-5xl
          "
        >
          Página em <span className="text-primary">Desenvolvimento</span>
        </h1>

        <p
          className="
            max-w-xl text-base leading-relaxed
            text-white/80 md:text-lg
          "
        >
          Estamos preparando um conteúdo especial para apresentar todos os
          detalhes deste serviço. Enquanto isso, nossa equipe está à disposição
          para atender você e elaborar seu orçamento personalizado.
        </p>

        <div
          className="
            mt-4 flex w-full flex-col
            justify-center gap-4
            sm:w-auto sm:flex-row
          "
        >
          <WhatsAppButton text="Solicitar orçamento" />

          <Link
            href="/servicos"
            className="
              inline-flex items-center
              justify-center gap-2
              rounded-lg border-2
              border-white/30 px-6 py-3
              font-bold text-white
              transition-colors
              hover:border-primary
              hover:text-primary
            "
          >
            <ArrowLeft size={20} />
            Voltar aos serviços
          </Link>
        </div>
      </div>
    </section>
  );
}
