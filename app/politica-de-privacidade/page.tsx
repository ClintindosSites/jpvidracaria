import type { Metadata } from "next";

import { ShieldCheck, CalendarDays, Mail, Phone, MapPin } from "lucide-react";

import PageHero from "@/components/shared/PageHero";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

import { company } from "@/data/company";

import { privacySections, privacyUpdatedAt } from "@/data/privacy";

export const metadata: Metadata = {
  title: "Política de Privacidade",

  description:
    "Conheça a Política de Privacidade da JP Vidraçaria e saiba como tratamos seus dados pessoais, cookies e informações de atendimento.",

  alternates: {
    canonical: "/politica-de-privacidade",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Política de Privacidade"
        description="Transparência, segurança e respeito aos seus dados pessoais."
        icon={ShieldCheck}
      />

      <section className="bg-slate-50 py-10 md:py-16">
        <div
          className="
            container-site grid items-start
            gap-8 lg:grid-cols-[280px_1fr]
            lg:gap-12
          "
        >
          {/* MENU LATERAL */}

          <aside className="lg:sticky lg:top-28">
            <nav
              aria-label="Índice da política de privacidade"
              className="
                rounded-2xl border
                border-secondary/10
                bg-white p-5 shadow-sm
              "
            >
              <h2
                className="
                  mb-4 border-b border-secondary/10
                  pb-4 font-title text-lg
                  font-bold text-secondary
                "
              >
                Nesta página
              </h2>

              <ul className="flex flex-col gap-1">
                {privacySections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="
                        group flex items-start gap-3
                        rounded-lg px-3 py-2.5
                        text-sm text-slate-600
                        transition-colors
                        hover:bg-primary-light
                        hover:text-secondary
                      "
                    >
                      <span
                        className="
                          shrink-0 font-bold
                          text-secondary/50
                          group-hover:text-secondary
                        "
                      >
                        {String(index + 1).padStart(2, "0")}.
                      </span>

                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* CONTEÚDO PRINCIPAL */}

          <article
            className="
              min-w-0 rounded-2xl border
              border-secondary/10 bg-white
              p-5 shadow-sm md:p-10
            "
          >
            {/* DATA DE ATUALIZAÇÃO */}

            <div
              className="
                mb-8 flex items-center gap-2
                rounded-lg bg-primary-light
                px-4 py-3 text-sm
                text-secondary
              "
            >
              <CalendarDays size={18} className="shrink-0" />

              <span>
                <strong>Última atualização:</strong> {privacyUpdatedAt}
              </span>
            </div>

            {/* SEÇÕES DA POLÍTICA */}

            <div className="flex flex-col gap-8">
              {privacySections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="
                    scroll-mt-32 border-b
                    border-secondary/10 pb-8
                    last:border-b-0 last:pb-0
                  "
                >
                  <h2
                    className="
                      mb-4 flex items-start gap-3
                      font-title text-xl font-bold
                      text-secondary md:text-2xl
                    "
                  >
                    <span className="shrink-0">{index + 1}.</span>

                    {section.title}
                  </h2>

                  <div
                    className="
                      flex flex-col gap-4
                      text-base leading-relaxed
                      text-slate-600
                    "
                  >
                    {section.paragraphs.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}

                    {section.items && (
                      <ul className="flex flex-col gap-3">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span
                              aria-hidden="true"
                              className="
                                mt-2.5 size-2 shrink-0
                                rounded-full bg-primary
                              "
                            />

                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.closing && <p>{section.closing}</p>}
                  </div>
                </section>
              ))}
            </div>

            {/* CARD DE CONTATO */}

            <div
              className="
                mt-8 rounded-2xl
                bg-secondary p-6
                text-white md:p-8
              "
            >
              <div className="mb-5 flex items-center gap-3">
                <ShieldCheck size={30} className="shrink-0 text-primary" />

                <h3
                  className="
                    font-title text-xl
                    font-bold text-primary
                  "
                >
                  {company.name}
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="shrink-0 text-primary" />

                  <span>{company.location}</span>
                </div>

                <a
                  href={`tel:+${company.whatsapp}`}
                  className="
                    flex items-center gap-3
                    hover:text-primary
                  "
                >
                  <Phone size={20} className="shrink-0 text-primary" />

                  {company.phone}
                </a>

                {company.email && (
                  <a
                    href={`mailto:${company.email}`}
                    className="
                      flex items-center gap-3
                      break-all hover:text-primary
                    "
                  >
                    <Mail size={20} className="shrink-0 text-primary" />

                    {company.email}
                  </a>
                )}

                <WhatsAppButton
                  variant="primary"
                  text="Entrar em contato"
                  message="Olá! Gostaria de esclarecer uma dúvida relacionada à Política de Privacidade da JP Vidraçaria."
                  className="mt-3 w-full sm:w-fit"
                />
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
