import Image from "next/image";
import { Expand } from "lucide-react";

import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  className?: string;
}

export default function ProjectCard({
  project,
  onClick,
  className = "",
}: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Ampliar imagem: ${project.title}`}
      className={`
        group relative block h-full w-full
        min-h-64 overflow-hidden rounded-2xl
        bg-secondary text-left
        focus-visible:outline-2
        focus-visible:outline-primary
        ${className}
      `}
    >
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        sizes={
          project.featured
            ? "(max-width: 1023px) 100vw, 50vw"
            : "(max-width: 767px) 100vw, 33vw"
        }
        className="
          object-cover transition-transform
          duration-500 group-hover:scale-105
        "
      />

      {/* OVERLAY */}

      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-linear-to-t
          from-secondary/85
          via-secondary/10
          to-transparent
        "
      />

      {/* ÍCONE DE AMPLIAÇÃO */}

      <div
        className="
          absolute right-4 top-4
          flex size-11 items-center
          justify-center rounded-full
          bg-white/90 text-secondary
          backdrop-blur-sm
          transition-colors
          group-hover:bg-primary
        "
      >
        <Expand size={20} />
      </div>

      {/* INFORMAÇÕES */}

      <div className="absolute inset-x-0 bottom-0 p-5">
        <span
          className="
            inline-block rounded-md
            bg-primary px-3 py-1.5
            text-xs font-bold uppercase
            tracking-wide text-secondary
          "
        >
          {project.category}
        </span>

        <h3
          className="
            mt-3 font-title text-lg
            font-bold text-white
            md:text-xl
          "
        >
          {project.title}
        </h3>
      </div>
    </button>
  );
}
