import { MessagesSquare } from "lucide-react";

import { homeFAQs } from "@/data/faq";

import SectionHeading from "@/components/shared/SectionHeading";
import FAQAccordion from "../shared/FAQAcordion";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import FAQSchema from "@/components/seo/FAQSchema";
export default function FAQSection() {
  return (
    <section
      id="perguntas-frequentes"
      className="
        relative overflow-hidden
        bg-slate-50 py-14 md:py-20
      "
    >
      <FAQSchema items={homeFAQs} />
      <div
        className="
          container-site grid
          items-start gap-10
          lg:grid-cols-[0.8fr_1.2fr]
          lg:gap-16
        "
      >
        {/* COLUNA ESQUERDA */}

        <div className="flex flex-col gap-8">
          <SectionHeading
            badge="Perguntas frequentes"
            title="Tudo o Que Você Precisa Saber Antes de Contratar"
            description="Esclareça suas principais dúvidas sobre nossos serviços em vidro e alumínio sob medida em Belo Horizonte."
            align="left"
          />

          {/* CARD DE ATENDIMENTO */}

          <div
            className="
              relative overflow-hidden
              rounded-2xl bg-primary
              p-6 md:p-8
            "
          >
            {/* DETALHE DECORATIVO */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                -right-16 -top-16 size-48
                rounded-full border-30
                border-secondary/5
              "
            />

            <div
              className="
                relative flex flex-col
                items-start gap-4
              "
            >
              <div
                className="
                  flex size-14 items-center
                  justify-center rounded-xl
                  bg-secondary text-primary
                "
              >
                <MessagesSquare
                  size={30}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <h3
                className="
                  font-title text-2xl
                  font-extrabold text-secondary
                "
              >
                Ainda ficou com dúvidas?
              </h3>

              <p
                className="
                  leading-relaxed
                  text-secondary/85
                "
              >
                Converse com nossa equipe e descubra a melhor solução em vidro e
                alumínio para seu imóvel.
              </p>

              <WhatsAppButton
                variant="secondary"
                text="Fale com nossa equipe"
                message="Olá! Vim pelo site da JP Vidraçaria e gostaria de esclarecer algumas dúvidas sobre meu projeto."
                className="mt-2 w-full"
              />
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA */}

        <FAQAccordion items={homeFAQs} name="home-faq" />
      </div>
    </section>
  );
}
