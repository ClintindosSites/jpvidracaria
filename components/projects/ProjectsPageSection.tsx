import SectionHeading from "@/components/shared/SectionHeading";
import ProjectsGallery from "@/components/projects/ProjectsGallery";

export default function ProjectsPageSection() {
  return (
    <section id="galeria" className="bg-slate-50 py-12 md:py-20">
      <div className="container-site">
        <SectionHeading
          badge="Nosso portfólio"
          title="Qualidade em Cada Detalhe"
          description="Conheça nossos trabalhos em vidros e esquadrias de alumínio sob medida e encontre inspiração para transformar seu ambiente."
          className="mb-10"
        />

        <ProjectsGallery />
      </div>
    </section>
  );
}
