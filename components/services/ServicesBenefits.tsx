import { Ruler, ShieldCheck, HardHat, MessagesSquare } from "lucide-react";

import SectionHeading from "@/components/shared/SectionHeading";

const benefits = [
  {
    title: "Projetos Sob Medida",
    description:
      "Soluções desenvolvidas de acordo com as medidas e características do seu ambiente.",
    icon: Ruler,
  },
  {
    title: "Qualidade e Segurança",
    description:
      "Atenção à escolha dos materiais e aos requisitos de cada instalação.",
    icon: ShieldCheck,
  },
  {
    title: "Instalação Profissional",
    description:
      "Cuidado na execução dos serviços, valorizando a precisão e o acabamento.",
    icon: HardHat,
  },
  {
    title: "Atendimento Personalizado",
    description:
      "Orientação para encontrar a solução mais adequada às suas necessidades.",
    icon: MessagesSquare,
  },
];

export default function ServicesBenefits() {
  return (
    <section className="bg-primary-light py-12 md:py-16">
      <div className="container-site">
        <SectionHeading
          badge="Nosso compromisso"
          title="Por Que Contratar Nossos Serviços?"
          description="Soluções que valorizam seu ambiente e atendem às necessidades do seu projeto."
          className="mb-10"
        />

        <div
          className="
            grid gap-4 sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {benefits.map(benefit => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="
                  flex items-start gap-4
                  rounded-xl border
                  border-secondary/10
                  bg-white p-5 shadow-sm
                  lg:flex-col lg:items-center
                  lg:p-6 lg:text-center
                "
              >
                <div
                  className="
                    flex size-14 shrink-0
                    items-center justify-center
                    rounded-xl bg-primary
                    text-secondary
                  "
                >
                  <Icon size={28} aria-hidden="true" />
                </div>

                <div>
                  <h3
                    className="
                      mb-2 font-title text-lg
                      font-bold text-secondary
                    "
                  >
                    {benefit.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600">
                    {benefit.description}
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
