"use client";

import { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay,
  A11y,
  Keyboard,
} from "swiper/modules";

import type { Swiper as SwiperType } from "swiper";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectsCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [isPaused, setIsPaused] = useState(false);

  function openProject(project: Project) {
    swiperRef.current?.autoplay.stop();
    setSelectedProject(project);
  }

  function closeProject() {
    setSelectedProject(null);

    if (!isPaused) {
      swiperRef.current?.autoplay.start();
    }
  }

  function toggleAutoplay() {
    const swiper = swiperRef.current;

    if (!swiper) return;

    if (isPaused) {
      swiper.autoplay.start();
    } else {
      swiper.autoplay.stop();
    }

    setIsPaused(!isPaused);
  }

  return (
    <div className="relative">
      {/* CARROSSEL */}

      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y, Keyboard]}
        onSwiper={swiper => {
          swiperRef.current = swiper;

          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            swiper.autoplay.stop();
            setIsPaused(true);
          }
        }}
        spaceBetween={16}
        slidesPerView={1.15}
        speed={600}
        loop={projects.length >= 4}
        grabCursor
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="projects-carousel"
      >
        {projects.map(project => (
          <SwiperSlide key={project.id}>
            <ProjectCard
              project={project}
              onClick={() => openProject(project)}
              className="h-80 md:h-90"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* SETA ANTERIOR */}

      <button
        type="button"
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="Projeto anterior"
        className="
          absolute left-0 top-[calc(50%-24px)]
          z-20 hidden size-12
          -translate-x-1/2 -translate-y-1/2
          items-center justify-center
          rounded-full bg-primary
          text-secondary shadow-lg
          transition-colors
          hover:bg-secondary hover:text-primary
          lg:flex
        "
      >
        <ChevronLeft size={28} />
      </button>

      {/* PRÓXIMA SETA */}

      <button
        type="button"
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="Próximo projeto"
        className="
          absolute right-0 top-[calc(50%-24px)]
          z-20 hidden size-12
          translate-x-1/2 -translate-y-1/2
          items-center justify-center
          rounded-full bg-primary
          text-secondary shadow-lg
          transition-colors
          hover:bg-secondary hover:text-primary
          lg:flex
        "
      >
        <ChevronRight size={28} />
      </button>

      {/* CONTROLES MOBILE */}

      <div className="mt-2 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Projeto anterior"
          className="
            flex size-10 items-center justify-center
            rounded-full bg-primary text-secondary
            lg:hidden
          "
        >
          <ChevronLeft size={22} />
        </button>

        <button
          type="button"
          onClick={toggleAutoplay}
          aria-label={isPaused ? "Reproduzir carrossel" : "Pausar carrossel"}
          className="
            flex size-10 items-center justify-center
            rounded-full border border-secondary/15
            text-secondary transition-colors
            hover:bg-primary
          "
        >
          {isPaused ? <Play size={17} /> : <Pause size={17} />}
        </button>

        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Próximo projeto"
          className="
            flex size-10 items-center justify-center
            rounded-full bg-primary text-secondary
            lg:hidden
          "
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* MODAL */}

      <ProjectModal project={selectedProject} onClose={closeProject} />
    </div>
  );
}
