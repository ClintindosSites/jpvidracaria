interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`
        flex flex-col gap-4
        ${
          align === "center"
            ? "mx-auto items-center text-center"
            : "items-start text-left"
        }
        ${className}
      `}
    >
      {badge && (
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-0.5 w-8 bg-primary md:w-12" />

          <span
            className="
              text-xs font-bold uppercase
              tracking-widest text-secondary
              md:text-sm
            "
          >
            {badge}
          </span>

          {align === "center" && (
            <span aria-hidden="true" className="h-0.5 w-8 bg-primary md:w-12" />
          )}
        </div>
      )}

      <h2 className="section-title text-secondary">{title}</h2>

      {description && (
        <p className="section-subtitle max-w-3xl">{description}</p>
      )}
    </div>
  );
}
