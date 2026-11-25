import {
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

import { company } from "@/data/company";
import { getWhatsAppLink } from "@/lib/whatsapp";

import ContactCard from "./ContactCard";
import QuoteForm from "@/components/shared/QuoteForm";
import SectionHeading from "@/components/shared/SectionHeading";

export default function ContactSection() {
  return (
    <section id="contato" className="bg-slate-50 py-12 md:py-20">
      <div
        className="
          container-site grid items-start
          gap-10 lg:grid-cols-2 lg:gap-16
        "
      >
        {/* INFORMAÇÕES DE CONTATO */}

        <div className="flex flex-col gap-8">
          <SectionHeading
            badge="Fale conosco"
            title="Vamos Conversar Sobre Seu Projeto?"
            description="Precisa de um box para banheiro, espelho sob medida, portas de vidro ou esquadrias de alumínio? Nossa equipe está pronta para atender você."
            align="left"
          />

          {/* CANAIS DE ATENDIMENTO */}

          <div className="flex flex-col gap-4">
            <ContactCard
              title="Atendimento pelo WhatsApp"
              description={company.phone}
              icon={FaWhatsapp}
              href={getWhatsAppLink()}
              external
              className="whatsapp-track"
            />

            <ContactCard
              title="Telefone"
              description={company.phone}
              icon={FaPhoneAlt}
              href={`tel:+${company.whatsapp}`}
            />

            <ContactCard
              title="Região de atendimento"
              description={company.location}
              icon={FaMapMarkerAlt}
            />

            {company.instagram && (
              <ContactCard
                title="Instagram"
                description="Acompanhe nossos projetos e novidades"
                icon={FaInstagram}
                href={company.instagram}
                external
                className="instagram-track"
              />
            )}

            {company.email && (
              <ContactCard
                title="E-mail"
                description={company.email}
                icon={FaEnvelope}
                href={`mailto:${company.email}`}
              />
            )}
          </div>

          {/* INFORMAÇÃO COMPLEMENTAR */}

          <div
            className="
              rounded-xl border-l-4 border-primary
              bg-primary-light p-5
            "
          >
            <p className="font-bold text-secondary">
              Atendimento personalizado
            </p>

            <p
              className="
                mt-2 text-sm leading-relaxed
                text-slate-600
              "
            >
              Para agilizar seu orçamento, envie fotos do ambiente e, caso
              possua, as medidas aproximadas do local onde será realizada a
              instalação.
            </p>
          </div>
        </div>

        {/* FORMULÁRIO DE ORÇAMENTO */}

        <div
          id="orcamento"
          className="
            scroll-mt-28 rounded-2xl
            border border-secondary/10
            border-t-4 border-t-primary
            bg-white p-5 shadow-lg
            md:p-8 lg:p-10
          "
        >
          <div className="mb-7">
            <span
              className="
                mb-3 inline-block rounded-md
                bg-primary-light px-3 py-1.5
                text-xs font-bold uppercase
                tracking-wider text-secondary
              "
            >
              Orçamento personalizado
            </span>

            <h2
              className="
                font-title text-2xl font-extrabold
                text-secondary md:text-3xl
              "
            >
              Solicite Seu Orçamento
            </h2>

            <p className="mt-3 leading-relaxed text-slate-600">
              Preencha as informações abaixo e inicie seu atendimento
              diretamente pelo WhatsApp.
            </p>
          </div>

          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
