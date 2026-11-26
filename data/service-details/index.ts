import type { ServiceDetail } from "@/types/service-detail";

import { boxDetail } from "./box";

export const serviceDetails: ServiceDetail[] = [boxDetail];

export function getServiceDetailBySlug(
  slug: string
): ServiceDetail | undefined {
  return serviceDetails.find(service => service.slug === slug);
}
