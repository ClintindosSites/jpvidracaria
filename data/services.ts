import type { Service } from "@/types/services";

export const services: Service[] = [
  {
    slug: "box-para-banheiro-bh",
    title: "Box para Banheiro",
    shortDescription: "Mais conforto, segurança e elegância para seu banheiro.",
    description:
      "Transforme seu banheiro com box de vidro sob medida, desenvolvido para valorizar o ambiente, aproveitar melhor o espaço e proporcionar mais praticidade no dia a dia.",
    image: "/images/services/box-card.webp",
    imageAlt:
      "Box de vidro temperado com acabamento preto instalado em banheiro moderno",
    icon: "shower",
    seo: {
      title: "Box para Banheiro Sob Medida em BH",
      description:
        "Encontre o box para banheiro ideal para seu imóvel em Belo Horizonte. Soluções em vidro temperado sob medida. Solicite seu orçamento.",
    },
  },
  {
    slug: "espelhos-sob-medida-bh",
    title: "Espelhos Sob Medida",
    shortDescription:
      "Amplitude, sofisticação e personalidade para seus ambientes.",
    description:
      "Valorize a decoração do seu imóvel com espelhos personalizados para banheiros, salas, quartos e ambientes comerciais, desenvolvidos de acordo com seu projeto.",
    image: "/images/services/espelho-card.webp",
    imageAlt: "Espelho sob medida em ambiente residencial sofisticado",
    icon: "mirror",
    seo: {
      title: "Espelhos Sob Medida em BH",
      description:
        "Espelhos sob medida em Belo Horizonte para ambientes residenciais e comerciais. Transforme sua decoração com a JP Vidraçaria.",
    },
  },
  {
    slug: "portas-de-vidro-bh",
    title: "Portas de Vidro",
    shortDescription: "Modernidade, luminosidade e integração dos ambientes.",
    description:
      "Transforme seus espaços com portas de vidro sob medida que proporcionam integração, iluminação natural e um acabamento moderno para projetos residenciais e comerciais.",
    image: "/images/services/portas-card.webp",
    imageAlt: "Portas de correr em vidro com perfis de alumínio preto",
    icon: "door",
    seo: {
      title: "Portas de Vidro Sob Medida em BH",
      description:
        "Portas de vidro sob medida em Belo Horizonte. Soluções para residências e comércios. Solicite seu orçamento com a JP Vidraçaria.",
    },
  },
  {
    slug: "janelas-de-vidro-bh",
    title: "Janelas de Vidro",
    shortDescription:
      "Mais iluminação natural e funcionalidade para seu imóvel.",
    description:
      "Aproveite melhor a iluminação e a ventilação dos seus ambientes com janelas de vidro sob medida, planejadas para as necessidades do seu imóvel.",
    image: "/images/services/janelas-card.webp",
    imageAlt: "Janela de vidro de correr com esquadria de alumínio preto",
    icon: "window",
    seo: {
      title: "Janelas de Vidro Sob Medida em BH",
      description:
        "Janelas de vidro e alumínio sob medida em Belo Horizonte. Valorize seu imóvel com soluções modernas e funcionais.",
    },
  },
  {
    slug: "esquadrias-de-aluminio-bh",
    title: "Esquadrias de Alumínio",
    shortDescription:
      "Resistência, beleza e acabamento que valorizam seu projeto.",
    description:
      "Soluções em esquadrias de alumínio sob medida para projetos residenciais e comerciais, combinando funcionalidade, resistência e valorização arquitetônica.",
    image: "/images/services/esquadrias-card.webp",
    imageAlt:
      "Residência contemporânea com esquadrias de alumínio e grandes painéis de vidro",
    icon: "layers",
    seo: {
      title: "Esquadrias de Alumínio Sob Medida em BH",
      description:
        "Esquadrias de alumínio sob medida em Belo Horizonte para construções e reformas. Solicite um orçamento personalizado.",
    },
  },
  {
    slug: "pergolados-de-vidro-bh",
    title: "Pergolados de Vidro",
    shortDescription:
      "Proteção, elegância e iluminação natural para suas áreas externas.",
    description:
      "Transforme varandas, áreas gourmet e espaços de lazer com pergolados de vidro sob medida, que combinam proteção, luminosidade e sofisticação para valorizar seu imóvel.",
    image: "/images/services/pergolados.webp",
    imageAlt:
      "Pergolado com cobertura de vidro e estrutura de alumínio preto em área gourmet residencial",
    icon: "pergola",
    seo: {
      title: "Pergolados de Vidro Sob Medida em BH",
      description:
        "Pergolados de vidro sob medida em Belo Horizonte para varandas, áreas gourmet e espaços de lazer. Solicite seu orçamento com a JP Vidraçaria.",
    },
  },
];

export function getServiceBySlug(slug: string) {
  return services.find(service => service.slug === slug);
}
