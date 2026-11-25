import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/types/whatsapp";

interface WhatsAppButtonProps {
  text?: string;
  message?: string;
  variant?: "primary" | "secondary";
  className?: string;
  showArrow?: boolean;
}

export default function WhatsAppButton({
  text = "Solicitar orçamento",
  message,
  variant = "primary",
  className = "",
  showArrow = true,
}: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-track="whatsapp_click"
      className={`btn-${variant} whatsapp-track ${className}`}
    >
      <FaWhatsapp className="size-6 shrink-0" />

      <span>{text}</span>

      {showArrow && <ArrowRight className="size-5 shrink-0" />}
    </a>
  );
}
