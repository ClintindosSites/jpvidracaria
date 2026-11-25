import { ExternalLink } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import SectionHeading from "@/components/shared/SectionHeading";
import ReviewsCarousel from "@/components/reviews/ReviewsCarousel";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

import { reviews, googleReviewsUrl } from "@/data/reviews";

export default function ReviewsSection() {
  if (reviews.length === 0) return null;

  return (
    <section id="avaliacoes" className="bg-white py-14 md:py-20">
      <div className="container-site">
        {/* TÍTULO */}

        <SectionHeading
          badge="Avaliações de clientes"
          title="A Satisfação de Quem Confia em Nosso Trabalho"
          description="Conheça a experiência de clientes que escolheram a JP Vidraçaria para transformar seus ambientes."
          className="mb-8 md:mb-12"
        />

        {/* CARROSSEL */}

        <ReviewsCarousel reviews={reviews} />

        {/* CHAMADAS PARA AÇÃO */}

        <div
          className="
            mt-6 flex flex-col items-center
            justify-center gap-4 sm:flex-row
          "
        >
          {googleReviewsUrl && (
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex w-full items-center
                justify-center gap-3
                rounded-lg border-2
                border-secondary/15 px-6 py-4
                font-bold text-secondary
                transition-colors
                hover:border-primary
                hover:bg-primary-light
                sm:w-auto
              "
            >
              <FcGoogle size={24} />
              Ver avaliações no Google
              <ExternalLink size={17} />
            </a>
          )}

          <WhatsAppButton
            variant="secondary"
            text="Solicitar meu orçamento"
            message="Olá! Gostaria de solicitar um orçamento para um projeto com a JP Vidraçaria."
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
