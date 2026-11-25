import type { Metadata } from "next";
import Link from "next/link";
import { Construction } from "lucide-react";

import { services } from "@/data/services";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Serviço em Desenvolvimento",
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
    <section className="flex min-h-[65vh] items-center justify-center bg-secondary py-16">
      <div className="container-site flex flex-col items-center gap-6 text-center">
        <Construction size={64} className="text-primary" />

        <h1 className="font-title text-3xl font-extrabold text-white md:text-5xl">
          Página em <span className="text-primary">Desenvolvimento</span>
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-white/80">
          Estamos preparando esta página para apresentar todos os detalhes deste
          serviço. Enquanto isso, entre em contato com nossa equipe e solicite
          seu orçamento.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary whatsapp-track"
          >
            Solicitar orçamento
          </a>

          <Link
            href="/servicos"
            className="rounded-lg border-2 border-white/30 px-6 py-3 font-bold text-white transition-colors hover:border-primary"
          >
            Voltar aos serviços
          </Link>
        </div>
      </div>
    </section>
  );
}
