import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Service } from "@/types/services";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

interface ServiceDetailCardProps {
  service: Service;
}

export default function ServiceDetailCard({ service }: ServiceDetailCardProps) {
  return (
    <article
      className="
        group flex h-full flex-col
        overflow-hidden rounded-2xl
        border border-secondary/10
        bg-white shadow-sm
        transition-all duration-300
        hover:border-primary hover:shadow-xl
      "
    >
      {/* IMAGEM */}

      <Link
        href={`/servicos/${service.slug}`}
        aria-label={`Conheça nosso serviço de ${service.title}`}
        className="relative block aspect-16/10 overflow-hidden"
      >
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            33vw
          "
          className="
            object-cover transition-transform
            duration-500 group-hover:scale-105
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute inset-0
            bg-linear-to-t from-secondary/40
            to-transparent
          "
        />

        <span
          className="
            absolute bottom-4 left-4
            rounded-md bg-primary px-3 py-1.5
            text-xs font-bold text-secondary
          "
        >
          Sob medida
        </span>
      </Link>

      {/* CONTEÚDO */}

      <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
        <h2
          className="
            font-title text-xl font-extrabold
            text-secondary md:text-2xl
          "
        >
          <Link
            href={`/servicos/${service.slug}`}
            className="transition-colors hover:text-secondary/70"
          >
            {service.title}
          </Link>
        </h2>

        <p className="flex-1 text-sm leading-relaxed text-slate-600 md:text-base">
          {service.shortDescription}
        </p>

        {/* LINK PARA PÁGINA INDIVIDUAL */}

        <Link
          href={`/servicos/${service.slug}`}
          className="
            group/link inline-flex w-fit
            items-center gap-2
            font-bold text-secondary
          "
        >
          Conhecer serviço
          <ArrowRight
            size={19}
            className="
              transition-transform
              group-hover/link:translate-x-1
            "
            aria-hidden="true"
          />
        </Link>

        <div className="mt-1 border-t border-secondary/10 pt-4">
          <WhatsAppButton
            text="Solicitar orçamento"
            message={`Olá! Vim pelo site da JP Vidraçaria e gostaria de solicitar um orçamento para ${service.title}.`}
            className="w-full"
            showArrow={false}
          />
        </div>
      </div>
    </article>
  );
}
