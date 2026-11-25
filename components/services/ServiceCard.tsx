import Image from "next/image";
import Link from "next/link";

import {
  ShowerHead,
  Scan,
  DoorOpen,
  Grid2X2,
  Layers,
  ArrowRight,
  PanelsTopLeft,
  type LucideIcon,
} from "lucide-react";

import type { Service } from "@/types/services";

const icons: Record<string, LucideIcon> = {
  shower: ShowerHead,
  mirror: Scan,
  door: DoorOpen,
  window: Grid2X2,
  layers: Layers,
  pergola: PanelsTopLeft,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = icons[service.icon] || Layers;

  return (
    <article className="group h-full">
      <Link
        href={`/servicos/${service.slug}`}
        aria-label={`Conheça nosso serviço de ${service.title}`}
        className="
          flex h-full flex-col overflow-hidden
          rounded-2xl border border-secondary/10
          bg-white shadow-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:border-primary
          hover:shadow-xl
          focus-visible:outline-2
          focus-visible:outline-secondary
        "
      >
        {/* IMAGEM */}

        <div
          className="
            relative aspect-16/10
            overflow-hidden bg-surface
          "
        >
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="
              (max-width: 767px) 100vw,
              (max-width: 1023px) 50vw,
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
              bg-linear-to-t
              from-secondary/20 to-transparent
            "
          />
        </div>

        {/* CONTEÚDO */}

        <div className="relative flex flex-1 flex-col p-6">
          {/* ÍCONE */}

          <div
            className="
              -mt-14 mb-5 flex size-14
              items-center justify-center
              rounded-xl bg-primary
              text-secondary shadow-md
            "
          >
            <Icon size={28} strokeWidth={1.8} aria-hidden="true" />
          </div>

          <h3
            className="
              mb-3 font-title text-xl
              font-extrabold tracking-tight
              text-secondary md:text-2xl
            "
          >
            {service.title}
          </h3>

          <p
            className="
              mb-6 flex-1 text-sm
              leading-relaxed text-slate-600
              md:text-base
            "
          >
            {service.shortDescription}
          </p>

          {/* CTA */}

          <div
            className="
              flex items-center justify-between
              border-t border-secondary/10 pt-4
            "
          >
            <span className="font-bold text-secondary">Conheça o serviço</span>

            <span
              className="
                flex size-10 items-center
                justify-center rounded-full
                bg-primary text-secondary
                transition-colors duration-300
                group-hover:bg-secondary
                group-hover:text-primary
              "
            >
              <ArrowRight
                size={20}
                aria-hidden="true"
                className="
                  transition-transform
                  group-hover:translate-x-0.5
                "
              />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
