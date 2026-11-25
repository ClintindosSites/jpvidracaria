import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaWhatsapp } from "react-icons/fa";

import type { Review } from "@/types/review";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const initials = review.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(name => name.charAt(0))
    .join("")
    .toUpperCase();

  return (
    <article
      className="
        relative flex h-full flex-col gap-5
        rounded-2xl border border-secondary/10
        bg-white p-6 shadow-sm
        transition-colors hover:border-primary
      "
    >
      {/* ESTRELAS E ASPAS */}

      <div className="flex items-center justify-between">
        <div
          role="img"
          aria-label={`${review.rating} de 5 estrelas`}
          className="flex items-center gap-1"
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={20}
              aria-hidden="true"
              className={
                index < review.rating
                  ? "fill-primary text-primary"
                  : "fill-slate-200 text-slate-200"
              }
            />
          ))}
        </div>

        <Quote
          size={36}
          strokeWidth={1.5}
          className="text-secondary/10"
          aria-hidden="true"
        />
      </div>

      {/* DEPOIMENTO */}

      <blockquote
        className="
          flex-1 text-base leading-relaxed
          text-slate-600
        "
      >
        <p>&ldquo;{review.comment}&rdquo;</p>
      </blockquote>

      {/* SERVIÇO CONTRATADO */}

      {review.service && (
        <span
          className="
            w-fit rounded-md bg-primary-light
            px-3 py-1.5 text-xs font-semibold
            text-secondary
          "
        >
          {review.service}
        </span>
      )}

      {/* IDENTIFICAÇÃO DO CLIENTE */}

      <div
        className="
          flex items-center gap-3
          border-t border-secondary/10 pt-5
        "
      >
        <div
          className="
            relative flex size-12 shrink-0
            items-center justify-center
            overflow-hidden rounded-full
            bg-primary font-bold text-secondary
          "
        >
          {review.avatar ? (
            <Image
              src={review.avatar}
              alt=""
              fill
              sizes="48px"
              className="object-cover"
            />
          ) : (
            initials
          )}
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-bold text-secondary">{review.name}</p>

          <span className="text-xs text-slate-500">
            Avaliação pelo {review.source}
          </span>
        </div>

        {review.source === "Google" ? (
          <FcGoogle size={26} aria-hidden="true" className="shrink-0" />
        ) : (
          <FaWhatsapp
            size={26}
            aria-hidden="true"
            className="shrink-0 text-green-600"
          />
        )}
      </div>
    </article>
  );
}
