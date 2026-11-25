import { services } from "@/data/services";

import SectionHeading from "@/components/shared/SectionHeading";
import ServiceDetailCard from "./ServiceDetailCard";

export default function ServicesPageSection() {
  return (
    <section id="nossos-servicos" className="bg-slate-50 py-12 md:py-20">
      <div className="container-site">
        <SectionHeading
          badge="Nossas soluções"
          title="Encontre a Solução Ideal Para Seu Ambiente"
          description="Oferecemos serviços de vidraçaria em Belo Horizonte, com soluções personalizadas para ambientes residenciais e comerciais."
          className="mb-10"
        />

        <div
          className="
            grid grid-cols-1 gap-6
            sm:grid-cols-2 lg:grid-cols-3
            lg:gap-8
          "
        >
          {services.map(service => (
            <ServiceDetailCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
