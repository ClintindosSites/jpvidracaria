"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";

import type { Project } from "@/types/project";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (project && !dialog.open) {
      dialog.showModal();
    }

    if (!project && dialog.open) {
      dialog.close();
    }
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      aria-labelledby="project-modal-title"
      onClick={event => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      className="
        fixed inset-0 m-auto
        max-h-[90dvh] w-[94%]
        max-w-5xl overflow-y-auto
        rounded-2xl bg-white
        p-0 shadow-2xl
        backdrop:bg-secondary/90
        backdrop:backdrop-blur-sm
      "
    >
      {project && (
        <div className="relative">
          {/* FECHAR */}

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar projeto"
            className="
              absolute right-4 top-4 z-10
              flex size-11 items-center
              justify-center rounded-full
              bg-white text-secondary
              shadow-lg transition-colors
              hover:bg-primary
            "
          >
            <X size={24} />
          </button>

          {/* IMAGEM */}

          <div
            className="
              relative h-[45dvh]
              bg-secondary
              md:h-[60dvh]
            "
          >
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 1024px) 94vw, 1024px"
              className="object-contain"
            />
          </div>

          {/* CONTEÚDO */}

          <div
            className="
              flex flex-col gap-5 p-6
              md:flex-row md:items-center
              md:justify-between
            "
          >
            <div>
              <span
                className="
                  text-sm font-bold
                  uppercase text-slate-500
                "
              >
                {project.category}
              </span>

              <h2
                id="project-modal-title"
                className="
                  mt-2 font-title text-2xl
                  font-extrabold text-secondary
                "
              >
                {project.title}
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                Gostaria de uma solução semelhante para seu imóvel?
              </p>
            </div>

            <WhatsAppButton
              variant="secondary"
              text="Quero um projeto assim"
              message={`Olá! Vi o projeto de ${project.title} no site da JP Vidraçaria e gostaria de solicitar um orçamento semelhante.`}
              className="shrink-0"
            />
          </div>
        </div>
      )}
    </dialog>
  );
}
