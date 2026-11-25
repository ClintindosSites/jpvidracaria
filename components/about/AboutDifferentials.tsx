import { companyDifferentials } from "@/data/about";
import SectionHeading from "@/components/shared/SectionHeading";

export default function AboutDifferentials() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container-site">
        <SectionHeading
          badge="Nossos diferenciais"
          title="Por Que Escolher a JP Vidraçaria?"
          description="Cuidado em cada etapa, desde o primeiro atendimento até o acabamento do seu projeto."
          className="mb-10"
        />

        <div
          className="
            grid gap-4
            sm:grid-cols-2 lg:grid-cols-3
            md:gap-6
          "
        >
          {companyDifferentials.map(item => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="
                  group flex items-start gap-4
                  rounded-xl border
                  border-secondary/10
                  bg-slate-50 p-5
                  transition-all duration-300
                  hover:border-primary
                  hover:bg-primary-light
                  md:p-6
                "
              >
                <div
                  className="
                    flex size-12 shrink-0
                    items-center justify-center
                    rounded-lg bg-primary
                    text-secondary
                    transition-transform
                    group-hover:scale-105
                  "
                >
                  <Icon size={25} aria-hidden="true" />
                </div>

                <div>
                  <h3
                    className="
                      mb-2 font-title text-base
                      font-bold text-secondary
                      md:text-lg
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-sm leading-relaxed
                      text-slate-600
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
