import { company } from "@/data/company";

export function getWhatsAppLink(
  message: string = company.defaultMessage
): string {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    message
  )}`;
}
