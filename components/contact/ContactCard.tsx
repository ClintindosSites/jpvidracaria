import { ArrowUpRight } from "lucide-react";
import type { IconType } from "react-icons";

interface ContactCardProps {
  title: string;
  description: string;
  icon: IconType;
  href?: string;
  external?: boolean;
  className?: string;
}

export default function ContactCard({
  title,
  description,
  icon: Icon,
  href,
  external = false,
  className = "",
}: ContactCardProps) {
  const styles = `
    group flex items-center gap-4
    rounded-xl border border-secondary/10
    bg-white p-4 shadow-sm md:p-5
    transition-all duration-300
    ${href ? "hover:border-primary hover:shadow-md" : ""}
    ${className}
  `;

  const content = (
    <>
      <div
        className="
          flex size-13 shrink-0
          items-center justify-center
          rounded-xl bg-primary
          text-secondary
          transition-transform
          group-hover:scale-105
        "
      >
        <Icon size={25} aria-hidden="true" />
      </div>

      <div className="min-w-0 flex-1">
        <h3
          className="
            font-title text-base
            font-bold text-secondary
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-1 wrap-break-word
            text-sm text-slate-600
          "
        >
          {description}
        </p>
      </div>

      {href && (
        <ArrowUpRight
          size={20}
          aria-hidden="true"
          className="
            shrink-0 text-secondary/50
            transition-all
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
            group-hover:text-secondary
          "
        />
      )}
    </>
  );

  if (!href) {
    return <div className={styles}>{content}</div>;
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={styles}
    >
      {content}
    </a>
  );
}
