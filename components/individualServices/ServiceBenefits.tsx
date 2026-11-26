import {
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Ruler,
  Palette,
  Wallet,
  Sun,
  Wind,
  VolumeX,
  Droplets,
  House,
  Gem,
  Layers,
  CheckCircle2,
  Thermometer,
  Lock,
  type LucideIcon,
} from "lucide-react";

import type { ServiceDetail } from "@/types/service-detail";

import SectionHeading from "@/components/shared/SectionHeading";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

interface ServiceBenefitsProps {
  service: ServiceDetail;
}

const benefitIcons: Record<string, LucideIcon> = {
  "trending-up": TrendingUp,
  sparkles: Sparkles,
  "shield-check": ShieldCheck,
  ruler: Ruler,
  palette: Palette,
  wallet: Wallet,
  sun: Sun,
  wind: Wind,
  "volume-x": VolumeX,
  droplets: Droplets,
  house: House,
  gem: Gem,
  layers: Layers,
  thermometer: Thermometer,
  lock: Lock,
  "check-circle": CheckCircle2,
};

export default function ServiceBenefits({ service }: ServiceBenefitsProps) {
  const { benefits, cta } = service;

  if (!benefits.items.length) {
    return null;
  }

  return (
    <section
      id="beneficios"
      className="
        section-spacing relative isolate
        overflow-hidden bg-primary-light
      "
    >
      {/* DETALHES DECORATIVOS */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-32 -top-32 size-80
          rotate-45 bg-primary/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-32 -right-32 size-80
          rotate-45 bg-primary/10
        "
      />

      <div
        className="
          container-site relative z-10
          flex flex-col gap-8 md:gap-12
        "
      >
        {/* TÍTULO DA SEÇÃO */}

        <SectionHeading
          badge="Por que vale a pena investir?"
          title={benefits.title}
          description={benefits.description}
        />

        {/* BENEFÍCIOS */}

        <ul
          className="
            grid grid-cols-1 gap-3
            sm:grid-cols-2 sm:gap-5
            lg:grid-cols-3 lg:gap-6
          "
        >
          {benefits.items.map(benefit => {
            const Icon = benefitIcons[benefit.icon] || CheckCircle2;

            return (
              <li
                key={benefit.title}
                className="
                  group relative flex
                  items-start gap-4
                  overflow-hidden rounded-2xl
                  border border-primary/20
                  bg-white p-4 shadow-sm
                  transition-all duration-300
                  hover:border-primary hover:shadow-md
                  md:flex-col md:gap-5 md:p-7
                "
              >
                {/* ÍCONE */}

                <div
                  className="
                    flex size-12 shrink-0
                    items-center justify-center
                    rounded-xl bg-primary
                    text-secondary
                    transition-transform duration-300
                    group-hover:scale-105
                    md:size-16
                  "
                >
                  <Icon size={28} strokeWidth={1.8} aria-hidden="true" />
                </div>

                {/* CONTEÚDO */}

                <div className="flex flex-col gap-2">
                  <h3
                    className="
                      font-title text-base
                      font-extrabold leading-tight
                      text-secondary md:text-xl
                    "
                  >
                    {benefit.title}
                  </h3>

                  <p
                    className="
                      text-sm leading-relaxed
                      text-slate-600 md:text-base
                    "
                  >
                    {benefit.description}
                  </p>
                </div>

                {/* DETALHE DECORATIVO */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute
                    -bottom-8 -right-8 size-20
                    rotate-45 bg-primary/10
                    transition-colors duration-300
                    group-hover:bg-primary/25
                  "
                />
              </li>
            );
          })}
        </ul>

        {/* CHAMADA PARA CONVERSÃO */}

        <div
          className="
            flex flex-col items-center
            gap-3 text-center
          "
        >
          <WhatsAppButton
            text="Quero Transformar Meu Ambiente"
            message={cta.whatsappMessage}
            variant="secondary"
            className="w-full sm:w-auto"
          />

          <p className="text-sm text-slate-600">
            Solicite um orçamento personalizado para seu projeto.
          </p>
        </div>
      </div>
    </section>
  );
}
