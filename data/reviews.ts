import type { Review } from "@/types/review";

// Avaliações fictícias para testes de layout.
export const reviews: Review[] = [
  {
    id: 1,
    name: "Cliente exemplo 01",
    rating: 5,
    comment:
      "Gostei muito do atendimento e do resultado final. O box do banheiro ficou exatamente como eu queria, com um acabamento muito bonito. Recomendo!",
    source: "Google",
    service: "Box para banheiro",
  },
  {
    id: 2,
    name: "Cliente exemplo 02",
    rating: 5,
    comment:
      "Excelente trabalho! Fiz a instalação de portas e janelas de alumínio na minha casa. O acabamento ficou ótimo e o preço foi justo.",
    source: "Google",
    service: "Esquadrias de alumínio",
  },
  {
    id: 3,
    name: "Cliente exemplo 03",
    rating: 5,
    comment:
      "Contratei a instalação de um espelho sob medida para minha sala e adorei o resultado. Atendimento atencioso e muito cuidado durante a instalação.",
    source: "Google",
    service: "Espelhos sob medida",
  },
  {
    id: 4,
    name: "Cliente exemplo 04",
    rating: 5,
    comment:
      "O pergolado de vidro transformou nossa área gourmet. Ficou muito bonito e deixou o ambiente mais agradável. Fiquei muito satisfeito com o serviço.",
    source: "Google",
    service: "Pergolados de vidro",
  },
];

export const googleReviewsUrl = "";
