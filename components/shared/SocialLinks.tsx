import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import { company } from "@/data/company";
import { getWhatsAppLink } from "@/types/whatsapp";

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className = "" }: SocialLinksProps) {
  const socials = [
    {
      name: "Instagram",
      href: company.instagram,
      icon: FaInstagram,
      hoverClass: "hover:bg-[#E1306C] hover:text-white",
      trackingClass: "instagram-track",
    },
    {
      name: "WhatsApp",
      href: getWhatsAppLink(company.defaultMessage),
      icon: FaWhatsapp,
      hoverClass: "hover:bg-[#128C4A] hover:text-white",
      trackingClass: "whatsapp-track",
    },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials
        .filter(social => social.href.trim())
        .map(social => {
          const Icon = social.icon;

          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${company.name} no ${social.name}`}
              title={social.name}
              className={`
                flex size-12 items-center justify-center
                rounded-xl border border-white/10
                bg-white/5 text-primary
                transition-all duration-300
                hover:-translate-y-1
                focus-visible:outline-2
                focus-visible:outline-primary
                ${social.hoverClass}
                ${social.trackingClass}
              `}
            >
              <Icon size={24} aria-hidden="true" />
            </a>
          );
        })}
    </div>
  );
}
