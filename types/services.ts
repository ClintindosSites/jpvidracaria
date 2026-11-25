export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  seo: {
    title: string;
    description: string;
  };
}
