import Image from "next/image";

import { CheckCircle2, Layers } from "lucide-react";

import type { ServiceMaterial } from "@/types/service-detail";

interface ServiceMaterialCardProps {
  material: ServiceMaterial;
}

export default function ServiceMaterialCard({
  material,
}: ServiceMaterialCardProps) {
  return (
    <article
      className="
        group grid h-full
        grid-cols-[35%_1fr]
        overflow-hidden rounded-2xl
        border border-slate-200
        bg-white shadow-sm
        transition-all duration-300
        hover:border-primary hover:shadow-md
        sm:grid-cols-[40%_1fr]
      "
    >
      {/* IMAGEM DO MATERIAL */}

      <div
        className="
          relative min-h-48
          overflow-hidden bg-slate-100
          md:min-h-64
        "
      >
        {material.image ? (
          <Image
            src={material.image}
            alt={material.imageAlt || material.title}
            fill
            sizes="
              (max-width: 767px) 35vw,
              (max-width: 1023px) 40vw,
              20vw
            "
            className="
              object-cover
              transition-transform duration-500
              group-hover:scale-105
            "
          />
        ) : (
          <div
            className="
              flex h-full items-center
              justify-center bg-primary-light
              text-secondary
            "
          >
            <Layers size={48} strokeWidth={1.5} aria-hidden="true" />
          </div>
        )}

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            bg-linear-to-t from-secondary/20
            to-transparent
          "
        />
      </div>

      {/* INFORMAÇÕES */}

      <div
        className="
          flex flex-col justify-center
          gap-3 p-4 md:gap-4 md:p-6
        "
      >
        <h3
          className="
            font-title text-base
            font-extrabold leading-tight
            text-secondary md:text-xl
          "
        >
          {material.title}
        </h3>

        <p
          className="
            text-xs leading-relaxed
            text-slate-600 md:text-sm
          "
        >
          {material.description}
        </p>

        {/* SEPARADOR */}

        <div className="h-0.5 w-10 rounded-full bg-primary" />

        {/* VANTAGENS */}

        <ul className="flex flex-col gap-2">
          {material.features.map(feature => (
            <li
              key={feature}
              className="
                flex items-start gap-2
                text-xs font-medium
                leading-snug text-secondary
                md:text-sm
              "
            >
              <CheckCircle2
                size={16}
                className="mt-0.5 shrink-0 text-yellow-600"
                aria-hidden="true"
              />

              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
