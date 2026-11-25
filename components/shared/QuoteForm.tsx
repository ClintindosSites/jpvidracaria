"use client";

import { FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ShieldCheck } from "lucide-react";

import { company } from "@/data/company";
import { services } from "@/data/services";

const inputClassName = `
  w-full rounded-lg border border-slate-200
  bg-slate-50 px-4 py-3.5
  text-base text-secondary
  outline-none transition-all
  placeholder:text-slate-400
  focus:border-primary
  focus:ring-2 focus:ring-primary/20
`;

const labelClassName = `
  mb-2 block text-sm font-semibold text-secondary
`;

export default function QuoteForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") || "").trim();
    const location = String(formData.get("location") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !location || !service) return;

    const whatsappMessage = [
      "Olá! Vim pelo site da JP Vidraçaria e gostaria de solicitar um orçamento.",
      "",
      `*Nome:* ${name}`,
      `*Localização:* ${location}`,
      `*Serviço desejado:* ${service}`,
      `*Detalhes do projeto:* ${message || "Gostaria de conversar sobre o projeto."}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.location.href = whatsappUrl;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* NOME */}

      <div>
        <label htmlFor="quote-name" className={labelClassName}>
          Seu nome
        </label>

        <input
          id="quote-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Como podemos chamar você?"
          className={inputClassName}
          maxLength={100}
          required
        />
      </div>

      {/* LOCALIZAÇÃO */}

      <div>
        <label htmlFor="quote-location" className={labelClassName}>
          Bairro ou cidade
        </label>

        <input
          id="quote-location"
          name="location"
          type="text"
          placeholder="Onde será realizada a instalação?"
          className={inputClassName}
          maxLength={150}
          required
        />
      </div>

      {/* SERVIÇO */}

      <div>
        <label htmlFor="quote-service" className={labelClassName}>
          Qual serviço você procura?
        </label>

        <select
          id="quote-service"
          name="service"
          defaultValue=""
          className={inputClassName}
          required
        >
          <option value="" disabled>
            Selecione o serviço desejado
          </option>

          {services.map(service => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}

          <option value="Outros serviços">Outros serviços</option>
        </select>
      </div>

      {/* DETALHES DO PROJETO */}

      <div>
        <label htmlFor="quote-message" className={labelClassName}>
          Conte-nos sobre seu projeto
          <span className="ml-1 font-normal text-slate-400">(opcional)</span>
        </label>

        <textarea
          id="quote-message"
          name="message"
          rows={4}
          maxLength={1000}
          placeholder="Descreva o que você precisa, medidas aproximadas ou detalhes do ambiente..."
          className={`${inputClassName} resize-y`}
        />
      </div>

      {/* BOTÃO */}

      <button
        type="submit"
        className="
          whatsapp-track flex w-full cursor-pointer
          items-center justify-center gap-3
          rounded-lg bg-[#128C4A] px-5 py-4
          text-base font-bold text-white
          transition-colors hover:bg-[#10783F]
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-secondary
        "
      >
        <FaWhatsapp size={24} />
        Solicitar orçamento pelo WhatsApp
      </button>

      {/* INFORMAÇÃO DE PRIVACIDADE */}

      <p
        className="
          flex items-center justify-center
          gap-2 text-center text-xs
          leading-relaxed text-slate-500
        "
      >
        <ShieldCheck size={16} className="shrink-0" />
        Seus dados serão utilizados para seu atendimento.
      </p>
    </form>
  );
}
