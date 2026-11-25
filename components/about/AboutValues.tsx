import { companyValues } from "@/data/about";
import SectionHeading from "@/components/shared/SectionHeading";

export default function AboutValues() {
  return (
    <section className="bg-primary-light py-12 md:py-20">
      <div className="container-site">
        <SectionHeading
          badge="Nossa essência"
          title="O Que Nos Move"
          description="Princípios que orientam nosso atendimento e a realização de cada projeto."
          className="mb-10"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {companyValues.map(value => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="
                  group relative isolate
                  overflow-hidden rounded-2xl
                  border border-secondary/10
                  bg-white p-6 shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg md:p-8
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute -right-10 -top-10
                    size-28 rotate-45
                    bg-primary/15
                  "
                />

                <div
                  className="
                    relative mb-5 flex size-16
                    items-center justify-center
                    rounded-xl bg-primary
                    text-secondary
                  "
                >
                  <Icon size={30} aria-hidden="true" />
                </div>

                <h3
                  className="
                    mb-3 font-title text-xl
                    font-extrabold text-secondary
                  "
                >
                  {value.title}
                </h3>

                <p
                  className="
                    text-sm leading-relaxed
                    text-slate-600 md:text-base
                  "
                >
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
