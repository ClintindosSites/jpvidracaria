"use client";

import { useState } from "react";

import { projects, projectCategories } from "@/data/projects";

import type { Project } from "@/types/project";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

interface ProjectsGalleryProps {
  limit?: number;
  showFilters?: boolean;
}

export default function ProjectsGallery({
  limit,
  showFilters = true,
}: ProjectsGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter(project => project.category === activeCategory);

  const visibleProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  const useFeaturedLayout =
    activeCategory === "Todos" &&
    visibleProjects.length >= 5 &&
    visibleProjects[0]?.featured;

  return (
    <>
      {/* FILTROS */}

      {showFilters && (
        <div
          className="
            mb-10 flex flex-wrap
            justify-center gap-2
          "
        >
          {projectCategories.map(category => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`
                rounded-full border
                px-5 py-2.5
                text-sm font-bold
                transition-colors
                ${
                  activeCategory === category
                    ? "border-primary bg-primary text-secondary"
                    : "border-secondary/15 bg-white text-secondary hover:border-primary hover:bg-primary-light"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* GALERIA */}

      <div
        className={`
          grid grid-cols-1 gap-4
          sm:grid-cols-2
          ${
            useFeaturedLayout
              ? "lg:grid-cols-4 lg:auto-rows-65"
              : "lg:grid-cols-3"
          }
        `}
      >
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
            className={
              useFeaturedLayout && index === 0
                ? "sm:col-span-2 lg:row-span-2"
                : ""
            }
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
