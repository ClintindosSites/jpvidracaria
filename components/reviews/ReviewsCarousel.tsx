"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, A11y, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import type { Review } from "@/types/review";
import ReviewCard from "./ReviewCard";

interface ReviewsCarouselProps {
  reviews: Review[];
}

export default function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  return (
    <Swiper
      modules={[Pagination, Navigation, A11y, Keyboard]}
      slidesPerView={1}
      spaceBetween={20}
      speed={500}
      grabCursor
      watchOverflow
      navigation
      keyboard={{
        enabled: true,
        onlyInViewport: true,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      a11y={{
        prevSlideMessage: "Avaliação anterior",
        nextSlideMessage: "Próxima avaliação",
        paginationBulletMessage: "Ir para a avaliação {{index}}",
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
      className="reviews-carousel"
    >
      {reviews.map(review => (
        <SwiperSlide key={review.id} className="h-auto!">
          <ReviewCard review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
