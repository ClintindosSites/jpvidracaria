export interface ServiceModel {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceMaterial {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  features: string[];
}

export interface ServiceDetail {
  slug: string;

  hero: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
    image: string;
    imageAlt: string;
    benefits: string[];
    cta: string;
  };

  models: {
    title: string;
    description: string;
    items: ServiceModel[];
  };

  benefits: {
    title: string;
    description: string;
    items: ServiceBenefit[];
  };

  materials: {
    title: string;
    description: string;
    items: ServiceMaterial[];
  };

  costBenefit: {
    title: string;
    description: string;
    items: string[];
    image: string;
    imageAlt: string;
  };

  faq: {
    question: string;
    answer: string;
  }[];

  cta: {
    title: string;
    highlight?: string;
    description: string;
    image?: string;
    buttonText: string;
    whatsappMessage: string;
  };

  seo: {
    title: string;
    description: string;
  };
}
