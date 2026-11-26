import { serviceBenefits } from "@/data/service-benefits";

export default function ServiceBenefitsBar() {
  return (
    <section
      aria-label="Diferenciais da JP Vidraçaria"
      className="
        relative isolate overflow-hidden
        bg-primary py-6 lg:py-8
      "
    >
      {/* DETALHES DECORATIVOS */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-16 -top-24 size-48
          rotate-45 bg-secondary/5
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-24 -right-16 size-48
          rotate-45 bg-secondary/5
        "
      />

      <div className="container-site relative z-10">
        <ul
          className="
            grid grid-cols-2
            gap-x-4 gap-y-6
            lg:grid-cols-4 lg:gap-0
          "
        >
          {serviceBenefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <li
                key={benefit.title}
                className={`
                  flex flex-col items-center
                  justify-center gap-2
                  text-center
                  lg:flex-row lg:gap-4
                  lg:px-5 lg:text-left
                  ${index !== 0 ? "lg:border-l lg:border-secondary/20" : ""}
                `}
              >
                {/* ÍCONE */}

                <div
                  className="
                    flex size-11 shrink-0
                    items-center justify-center
                    rounded-xl bg-secondary/10
                    text-secondary
                    lg:size-14
                  "
                >
                  <Icon size={28} strokeWidth={1.8} aria-hidden="true" />
                </div>

                {/* INFORMAÇÕES */}

                <div className="flex flex-col gap-1">
                  <p
                    className="
                      font-title text-sm
                      font-extrabold leading-tight
                      text-secondary lg:text-base
                    "
                  >
                    {benefit.title}
                  </p>

                  <p
                    className="
                      text-xs leading-snug
                      text-secondary/80
                      lg:text-sm
                    "
                  >
                    {benefit.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
