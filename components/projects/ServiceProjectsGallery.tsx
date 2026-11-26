"use client";

import { useState } from "react";
import Image from "next/image";

import { Maximize2 } from "lucide-react";

import type { Project } from "@/types/project";

import ProjectModal from "./ProjectModal";

interface ServiceProjectsGalleryProps {
  projects: Project[];
}

export default function ServiceProjectsGallery({
  projects,
}: ServiceProjectsGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div
        className="
          grid auto-rows-35
          grid-cols-2 gap-2
          sm:auto-rows-45 sm:gap-3
          lg:auto-rows-52.5
          lg:grid-cols-4 lg:gap-4
        "
      >
        {projects.map((project, index) => {
          const isFeatured = projects.length >= 3 && index % 7 === 0;

          const isWide = projects.length >= 3 && index % 7 === 1;

          return (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelectedProject(project)}
              aria-label={`Ampliar fotografia: ${project.title}`}
              className={`
                group relative min-w-0
                cursor-zoom-in overflow-hidden
                rounded-xl bg-slate-100
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-secondary

                ${
                  isFeatured
                    ? "col-span-2 row-span-2"
                    : isWide
                      ? "lg:col-span-2"
                      : ""
                }
              `}
            >
              {/* FOTOGRAFIA */}

              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes={
                  isFeatured
                    ? "(max-width: 1023px) 100vw, 50vw"
                    : isWide
                      ? "50vw"
                      : "(max-width: 1023px) 50vw, 25vw"
                }
                className="
                  object-cover
                  transition-transform duration-500
                  group-hover:scale-105
                  motion-reduce:transition-none
                "
              />

              {/* SOMBREADO NO HOVER */}

              <div
                aria-hidden="true"
                className="
                  absolute inset-0
                  bg-secondary/0
                  transition-colors duration-300
                  group-hover:bg-secondary/30
                  group-focus-visible:bg-secondary/30
                "
              />

              {/* ÍCONE DE AMPLIAÇÃO */}

              <div
                aria-hidden="true"
                className="
                  absolute bottom-3 right-3
                  flex size-9 items-center
                  justify-center rounded-lg
                  bg-secondary/70 text-white
                  transition-colors
                  group-hover:bg-primary
                  group-hover:text-secondary
                  md:size-11
                "
              >
                <Maximize2 size={18} />
              </div>
            </button>
          );
        })}
      </div>

      {/* MODAL DE VISUALIZAÇÃO */}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
