import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/data/services";
import SectionHeading from "@/components/shared/SectionHeading";

export default function ContactServices() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container-site">
        <SectionHeading
          badge="Nossas soluções"
          title="Como Podemos Ajudar Você?"
          description="Conheça nossas soluções em vidro e alumínio sob medida."
          className="mb-8"
        />

        <div
          className="
            grid grid-cols-1 gap-3
            sm:grid-cols-2 lg:grid-cols-3
          "
        >
          {services.map(service => (
            <Link
              key={service.slug}
              href={`/servicos/${service.slug}`}
              className="
                group flex items-center
                justify-between gap-4
                rounded-xl border
                border-secondary/10
                bg-slate-50 p-5
                transition-all duration-300
                hover:border-primary
                hover:bg-primary-light
              "
            >
              <span
                className="
                  font-title text-sm
                  font-bold text-secondary
                  md:text-base
                "
              >
                {service.title}
              </span>

              <ArrowUpRight
                size={20}
                className="
                  shrink-0 text-secondary
                  transition-transform
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
