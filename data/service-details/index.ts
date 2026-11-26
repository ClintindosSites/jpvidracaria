import type { ServiceDetail } from "@/types/service-detail";

import { boxDetail } from "./box";
import { espelhosDetail } from "./espelhos";
import { portasDetail } from "./portas";
import { janelasDetail } from "./janelas";
import { esquadriasDetail } from "./esquadrias";
import { pergoladosDetail } from "./pergolados";

export const serviceDetails: ServiceDetail[] = [
  boxDetail,
  espelhosDetail,
  portasDetail,
  janelasDetail,
  esquadriasDetail,
  pergoladosDetail,
];

export function getServiceDetailBySlug(
  slug: string
): ServiceDetail | undefined {
  return serviceDetails.find(service => service.slug === slug);
}
