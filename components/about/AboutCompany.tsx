import Image from "next/image";
import { MapPin, CheckCircle2 } from "lucide-react";

import { company } from "@/data/company";
import SectionHeading from "@/components/shared/SectionHeading";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export default function AboutCompany() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div
        className="
          container-site grid items-center
          gap-10 lg:grid-cols-2 lg:gap-16
        "
      >
        {/* IMAGEM */}

        <div className="relative pb-6 pr-4">
          <div
            aria-hidden="true"
            className="
              absolute bottom-0 right-0
              h-[80%] w-[85%]
              rounded-2xl bg-primary
            "
          />

          <div
            className="
              relative aspect-4/5
              overflow-hidden rounded-2xl
              sm:aspect-square
            "
          >
            <Image
              src="/images/sobre-jp.webp"
              alt="Profissional realizando instalação de vidros"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* CARD SOBREPOSTO */}

          <div
            className="
              absolute bottom-0 right-0
              flex items-center gap-3
              rounded-xl bg-secondary
              p-4 text-white shadow-xl
              md:p-5
            "
          >
            <MapPin size={32} className="shrink-0 text-primary" />

            <div>
              <p className="text-xs text-white/70">Nossa região de atuação</p>

              <p className="font-title font-bold">{company.location}</p>
            </div>
          </div>
        </div>

        {/* CONTEÚDO */}

        <div className="flex flex-col gap-6">
          <SectionHeading
            badge="Quem somos"
            title="Mais do Que Vidros, Soluções Que Transformam Ambientes"
            align="left"
          />

          <div
            className="
              flex flex-col gap-4
              text-base leading-relaxed
              text-slate-600 md:text-lg
            "
          >
            <p>
              A <strong className="text-secondary">{company.name}</strong> atua
              em Belo Horizonte oferecendo soluções em vidros e esquadrias de
              alumínio sob medida para ambientes residenciais e comerciais.
            </p>

            <p>
              Trabalhamos com box para banheiro, espelhos, portas e janelas de
              vidro, esquadrias de alumínio e pergolados, buscando unir
              funcionalidade, segurança e sofisticação em cada projeto.
            </p>

            <p>
              Entendemos que cada ambiente possui suas próprias necessidades.
              Por isso, nosso atendimento é direcionado à escolha de soluções
              que valorizem o espaço e atendam às expectativas de nossos
              clientes.
            </p>
          </div>

          {/* DESTAQUES */}

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Soluções personalizadas",
              "Atenção aos acabamentos",
              "Atendimento em BH",
              "Compromisso com a qualidade",
            ].map(item => (
              <div
                key={item}
                className="
                  flex items-center gap-2
                  text-sm font-semibold
                  text-secondary
                "
              >
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-secondary"
                  aria-hidden="true"
                />

                {item}
              </div>
            ))}
          </div>

          <WhatsAppButton
            text="Converse com nossa equipe"
            message={company.defaultMessage}
            className="mt-2 w-full sm:w-fit"
          />
        </div>
      </div>
    </section>
  );
}
