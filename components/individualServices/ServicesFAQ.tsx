import { MessagesSquare, CheckCircle2 } from "lucide-react";

import type { ServiceDetail } from "@/types/service-detail";

import SectionHeading from "@/components/shared/SectionHeading";
import FAQAccordion from "../shared/FAQAcordion";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import FAQSchema from "../seo/FAQSchema";

interface ServiceFAQProps {
  service: ServiceDetail;
}

export default function ServiceFAQ({ service }: ServiceFAQProps) {
  const { faq, cta } = service;

  if (!faq.length) {
    return null;
  }

  return (
    <section id="perguntas-frequentes" className="section-spacing bg-slate-50">
      <FAQSchema faqs={faq} />;
      <div
        className="
          container-site grid items-start
          gap-8 lg:grid-cols-[0.85fr_1.15fr]
          lg:gap-x-16 lg:gap-y-8
        "
      >
        {/* TÍTULO DA SEÇÃO */}

        <div className="lg:col-start-1 lg:row-start-1">
          <SectionHeading
            badge="Tire suas dúvidas"
            title="Tudo o Que Você Precisa Saber Antes de Contratar"
            description="
              Reunimos as principais dúvidas para ajudar
              você a tomar sua decisão com mais segurança.
            "
            align="left"
          />
        </div>

        {/* PERGUNTAS FREQUENTES */}

        <div
          className="
            lg:col-start-2
            lg:row-start-1
            lg:row-span-2
          "
        >
          <FAQAccordion items={faq} />
        </div>

        {/* CARD DE ATENDIMENTO */}

        <div
          className="
            relative isolate overflow-hidden
            rounded-2xl bg-primary p-6
            md:p-8 lg:col-start-1
            lg:row-start-2
          "
        >
          {/* ELEMENTO DECORATIVO */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -bottom-24 -right-24
              size-64 rotate-45
              bg-secondary/5
            "
          />

          {/* CONTEÚDO */}

          <div className="relative z-10 flex flex-col gap-4">
            {/* ÍCONE */}

            <div
              className="
                flex size-14 items-center
                justify-center rounded-xl
                bg-secondary text-primary
              "
            >
              <MessagesSquare size={30} strokeWidth={1.8} aria-hidden="true" />
            </div>

            {/* COPY */}

            <h3
              className="
                font-title text-2xl
                font-extrabold text-secondary
                md:text-3xl
              "
            >
              Ainda tem alguma dúvida?
            </h3>

            <p className="leading-relaxed text-secondary/80">
              Cada ambiente possui suas particularidades. Converse com nossa
              equipe e descubra a melhor solução para seu projeto.
            </p>

            {/* DIFERENCIAIS */}

            <ul className="flex flex-col gap-2">
              {[
                "Atendimento personalizado",
                "Orientação na escolha dos materiais",
                "Orçamento de acordo com seu projeto",
              ].map(item => (
                <li
                  key={item}
                  className="
                    flex items-center gap-2
                    text-sm font-semibold
                    text-secondary
                  "
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0"
                    aria-hidden="true"
                  />

                  {item}
                </li>
              ))}
            </ul>

            {/* CONVERSÃO */}

            <WhatsAppButton
              text="Falar com um especialista"
              message={
                `${cta.whatsappMessage}\n\n` +
                `Tenho algumas dúvidas e gostaria ` +
                `de receber uma orientação.`
              }
              variant="secondary"
              className="mt-2 w-full justify-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
