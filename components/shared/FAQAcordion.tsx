import { Plus, Minus } from "lucide-react";
import type { FAQ } from "@/types/faq";

interface FAQAccordionProps {
  items: FAQ[];
  name?: string;
}

export default function FAQAccordion({
  items,
  name = "faq",
}: FAQAccordionProps) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <details
          key={item.question}
          name={name}
          open={index === 0}
          className="
            group overflow-hidden rounded-xl
            border border-secondary/10
            bg-white shadow-sm
            transition-colors
            hover:border-primary
            open:border-primary
          "
        >
          <summary
            className="
              flex cursor-pointer list-none
              items-center justify-between
              gap-4 p-5
              font-title text-base font-bold
              text-secondary md:p-6
              [&::-webkit-details-marker]:hidden
              focus-visible:outline-2
              focus-visible:outline-secondary
            "
          >
            <span>{item.question}</span>

            <span
              aria-hidden="true"
              className="
                flex size-9 shrink-0
                items-center justify-center
                rounded-lg bg-slate-100
                text-secondary
                transition-colors
                group-open:bg-primary
              "
            >
              <Plus size={20} className="group-open:hidden" />

              <Minus size={20} className="hidden group-open:block" />
            </span>
          </summary>

          <div className="px-5 pb-5 md:px-6 md:pb-6">
            <div className="mb-4 h-px bg-secondary/10" />

            <p
              className="
                text-sm leading-relaxed
                text-slate-600 md:text-base
              "
            >
              {item.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
