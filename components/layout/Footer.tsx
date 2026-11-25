import Image from "next/image";
import Link from "next/link";

import { MapPin, Phone, ChevronRight, ArrowUpRight } from "lucide-react";

import { company } from "@/data/company";
import { services } from "@/data/services";
import { navigationLinks } from "@/data/navigation";

import SocialLinks from "@/components/shared/SocialLinks";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const footerLinkClass = `
  group inline-flex items-center gap-2
  text-sm text-white/70
  transition-colors hover:text-primary
`;

export default function Footer() {
  return (
    <footer className="relative bg-secondary text-white">
      {/* LINHA SUPERIOR */}

      <div className="h-1 w-full bg-primary" />

      {/* CONTEÚDO PRINCIPAL */}

      <div className="container-site pt-12 md:pt-16">
        {/* CHAMADA COMERCIAL */}

        <div
          className="
            mb-12 flex flex-col items-start
            justify-between gap-6
            border-b border-white/10 pb-10
            md:flex-row md:items-center
          "
        >
          <div className="flex flex-col gap-2">
            <h2
              className="
                font-title text-2xl font-extrabold
                text-primary md:text-3xl
              "
            >
              Vamos transformar seu ambiente?
            </h2>

            <p className="text-sm text-white/70 md:text-base">
              Conte com a JP Vidraçaria para seu próximo projeto.
            </p>
          </div>

          <WhatsAppButton
            variant="primary"
            text="Solicitar orçamento"
            message="Olá! Vim pelo site da JP Vidraçaria e gostaria de solicitar um orçamento."
            className="w-full shrink-0 md:w-auto"
          />
        </div>

        {/* COLUNAS DO FOOTER */}

        <div
          className="
            grid grid-cols-1 gap-10
            sm:grid-cols-2
            lg:grid-cols-[1.3fr_0.8fr_1fr_1.1fr]
            lg:gap-8
          "
        >
          {/* COLUNA 1 - EMPRESA */}

          <div className="flex flex-col items-start gap-5">
            <Link href="/" aria-label="JP Vidraçaria - Início">
              <Image
                src="/images/logo.webp"
                alt="JP Vidraçaria"
                width={220}
                height={100}
                className="h-auto w-48 object-contain"
              />
            </Link>

            <p
              className="
                max-w-xs text-sm leading-relaxed
                text-white/70
              "
            >
              Soluções em vidro e alumínio sob medida para ambientes
              residenciais e comerciais. Transformamos espaços com qualidade,
              funcionalidade e sofisticação.
            </p>

            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold text-white">
                Acompanhe nossas redes sociais
              </span>

              <SocialLinks />
            </div>
          </div>

          {/* COLUNA 2 - NAVEGAÇÃO */}

          <div>
            <h3
              className="
                mb-5 font-title text-lg
                font-bold text-primary
              "
            >
              Navegação
            </h3>

            <nav aria-label="Navegação do rodapé">
              <ul className="flex flex-col gap-3">
                {navigationLinks.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className={footerLinkClass}>
                      <ChevronRight
                        size={14}
                        className="
                          shrink-0 text-primary
                          transition-transform
                          group-hover:translate-x-1
                        "
                      />

                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* COLUNA 3 - SERVIÇOS */}

          <div>
            <h3
              className="
                mb-5 font-title text-lg
                font-bold text-primary
              "
            >
              Nossos serviços
            </h3>

            <nav aria-label="Serviços da JP Vidraçaria">
              <ul className="flex flex-col gap-3">
                {services.map(service => (
                  <li key={service.slug}>
                    <Link
                      href={`/servicos/${service.slug}`}
                      className={footerLinkClass}
                    >
                      <ChevronRight
                        size={14}
                        className="
                          shrink-0 text-primary
                          transition-transform
                          group-hover:translate-x-1
                        "
                      />

                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* COLUNA 4 - CONTATO */}

          <div>
            <h3
              className="
                mb-5 font-title text-lg
                font-bold text-primary
              "
            >
              Fale conosco
            </h3>

            <address className="flex flex-col gap-5 not-italic">
              {/* LOCALIZAÇÃO */}

              <div className="flex items-start gap-3">
                <MapPin size={22} className="shrink-0 text-primary" />

                <div>
                  <p className="text-sm font-bold">Localização</p>

                  <p className="mt-1 text-sm text-white/70">
                    {company.city} - {company.state}
                  </p>
                </div>
              </div>

              {/* TELEFONE */}

              <a
                href={`tel:+${company.whatsapp}`}
                className="
                  group flex items-start gap-3
                "
              >
                <Phone size={21} className="shrink-0 text-primary" />

                <div>
                  <p className="text-sm font-bold">Telefone e WhatsApp</p>

                  <p
                    className="
                      mt-1 text-sm text-white/70
                      transition-colors
                      group-hover:text-primary
                    "
                  >
                    {company.phone}
                  </p>
                </div>
              </a>
            </address>

            <div className="mt-6">
              <WhatsAppButton
                variant="primary"
                text="Fale conosco"
                message="Olá! Gostaria de conhecer os serviços da JP Vidraçaria."
                className="w-full"
                showArrow={false}
              />
            </div>
          </div>
        </div>

        {/* SEO LOCAL */}

        <div
          className="
            mt-12 border-t border-white/10
            py-6 text-center
          "
        >
          <p
            className="
              mx-auto max-w-4xl text-xs
              leading-relaxed text-white/50
              md:text-sm
            "
          >
            JP Vidraçaria — Especialista em soluções sob medida em vidros,
            espelhos, box para banheiro, portas, janelas, esquadrias de alumínio
            e pergolados de vidro em Belo Horizonte, Minas Gerais.
          </p>
        </div>
      </div>

      {/* BARRA INFERIOR */}

      <div className="border-t border-white/10 bg-black/20">
        <div
          className="
            container-site flex flex-col
            items-center justify-between gap-4
            py-5 text-center text-xs text-white/60
            lg:flex-row lg:text-left
          "
        >
          <p>
            © {company.copyrightYear} {company.name}. Todos os direitos
            reservados.
          </p>
          <Link
            href="/politica-de-privacidade"
            className="transition-colors hover:text-primary"
          >
            Política de Privacidade
          </Link>

          <a
            href="https://clintindossites.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group inline-flex items-center
              justify-center gap-1.5
            "
          >
            Desenvolvido por
            <span className="font-bold text-primary">Clintin dos Sites</span>
            <ArrowUpRight
              size={14}
              className="
                text-primary transition-transform
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
