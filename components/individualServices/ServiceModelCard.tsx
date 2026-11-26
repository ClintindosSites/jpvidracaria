import Image from "next/image";

import { CheckCircle2 } from "lucide-react";

import type { ServiceModel } from "@/types/service-detail";

import WhatsAppButton from "@/components/shared/WhatsAppButton";

interface ServiceModelCardProps {
  model: ServiceModel;
  whatsappMessage: string;
}

export default function ServiceModelCard({
  model,
  whatsappMessage,
}: ServiceModelCardProps) {
  return (
    <article
      className="
        group flex h-full flex-col
        overflow-hidden rounded-2xl
        border border-slate-200
        bg-white shadow-sm
        transition-all duration-300
        hover:border-primary
        hover:shadow-lg
      "
    >
      {/* IMAGEM */}

      <div
        className="
          relative aspect-4/5
          overflow-hidden bg-slate-100
        "
      >
        <Image
          src={model.image}
          alt={model.imageAlt}
          fill
          sizes="
            (max-width: 639px) 80vw,
            (max-width: 1023px) 45vw,
            25vw
          "
          className="
            object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* SOMBREADO */}

        <div
          aria-hidden="true"
          className="
            absolute inset-0
            bg-linear-to-t
            from-secondary/40
            via-transparent
            to-transparent
          "
        />

        {/* BADGE */}

        <div
          className="
            absolute left-3 top-3
            flex items-center gap-1.5
            rounded-full bg-primary
            px-3 py-1.5
            text-xs font-bold text-secondary
          "
        >
          <CheckCircle2 size={14} aria-hidden="true" />
          Sob medida
        </div>
      </div>

      {/* CONTEÚDO */}

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3
          className="
            font-title text-xl
            font-extrabold text-secondary
          "
        >
          {model.title}
        </h3>

        <p
          className="
            flex-1 text-sm
            leading-relaxed text-slate-600
          "
        >
          {model.description}
        </p>

        {/* CONVERSÃO */}

        <WhatsAppButton
          text="Consultar valores"
          message={whatsappMessage}
          variant="primary"
          showArrow={false}
          className="mt-2 w-full justify-center text-sm"
        />
      </div>
    </article>
  );
}
