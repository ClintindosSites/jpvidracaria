import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Portas de correr em vidro",
    category: "Portas",
    image: "/images/projects/porta-01.webp",
    imageAlt: "Portas de correr em vidro com estrutura de alumínio preto",
    featured: true,
    serviceSlug: "box-para-banheiro-bh",
  },
  {
    id: 2,
    title: "Box de vidro sob medida",
    category: "Box",
    image: "/images/projects/box-01.webp",
    imageAlt: "Box de vidro temperado com acabamento preto",
    serviceSlug: "box-para-banheiro-bh",
  },
  {
    id: 3,
    title: "Espelho decorativo sob medida",
    category: "Espelhos",
    image: "/images/projects/espelho-01.webp",
    imageAlt: "Espelho sob medida instalado em banheiro",
    serviceSlug: "box-para-banheiro-bh",
  },
  {
    id: 4,
    title: "Pergolado com cobertura de vidro",
    category: "Pergolados",
    image: "/images/projects/pergolado-01.webp",
    imageAlt: "Pergolado de alumínio com cobertura de vidro",
    serviceSlug: "box-para-banheiro-bh",
  },
  {
    id: 5,
    title: "Janelas de alumínio e vidro",
    category: "Janelas",
    image: "/images/projects/janela-01.webp",
    imageAlt: "Janela de correr com estrutura de alumínio",
    serviceSlug: "box-para-banheiro-bh",
  },
  {
    id: 6,
    title: "Esquadrias de alumínio sob medida",
    category: "Esquadrias",
    image: "/images/projects/esquadria-01.webp",
    imageAlt: "Esquadrias de alumínio em residência",
    serviceSlug: "box-para-banheiro-bh",
  },
];

export const projectCategories = [
  "Todos",
  ...new Set(projects.map(project => project.category)),
];
