import { company } from "@/data/company";

export function getWhatsAppLink(message: string = company.defaultMessage) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    message
  )}`;
}
