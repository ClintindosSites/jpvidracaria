import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface PageHeroProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  image?: string;
}

export default function PageHero({
  title,
  description,
  icon: Icon,
  image,
}: PageHeroProps) {
  return (
    <section
      className="
        relative isolate overflow-hidden
        bg-secondary py-12 md:py-20
      "
    >
      {/* BACKGROUND OPCIONAL */}

      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-secondary/80" />
        </>
      )}

      {/* DETALHES DECORATIVOS */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-24 -top-24 size-48
          rotate-45 bg-primary/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-24 -right-24 size-48
          rotate-45 bg-primary/10
        "
      />

      {/* CONTEÚDO */}

      <div
        className="
          container-site relative z-10
          flex flex-col items-center
          gap-4 text-center
        "
      >
        {Icon && (
          <div
            className="
              flex size-16 items-center
              justify-center rounded-2xl
              border border-primary/30
              bg-primary/10 text-primary
            "
          >
            <Icon size={32} aria-hidden="true" />
          </div>
        )}

        <h1
          className="
            font-title text-3xl font-extrabold
            text-white md:text-5xl
          "
        >
          {title}
        </h1>

        <div className="h-1 w-16 rounded-full bg-primary" />

        {description && (
          <p
            className="
              max-w-2xl text-base leading-relaxed
              text-white/80 md:text-lg
            "
          >
            {description}
          </p>
        )}

        {/* BREADCRUMB */}

        <nav
          aria-label="Breadcrumb"
          className="
            mt-2 flex flex-wrap items-center
            justify-center gap-2 text-sm
          "
        >
          <Link
            href="/"
            className="
              text-white/70 transition-colors
              hover:text-primary
            "
          >
            Início
          </Link>

          <ChevronRight
            size={16}
            className="text-white/40"
            aria-hidden="true"
          />

          <span aria-current="page" className="font-semibold text-primary">
            {title}
          </span>
        </nav>
      </div>
    </section>
  );
}
