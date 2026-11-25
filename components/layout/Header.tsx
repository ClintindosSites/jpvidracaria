"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

import { navigationLinks, serviceLinks } from "@/data/navigation";

import { company } from "@/data/company";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

interface HeaderContentProps {
  pathname: string;
}

export default function Header() {
  const pathname = usePathname();

  return <HeaderContent key={pathname} pathname={pathname} />;
}

function HeaderContent({ pathname }: HeaderContentProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fecha todos os menus
  function closeMenus() {
    setMobileMenuOpen(false);
    setDesktopServicesOpen(false);
    setMobileServicesOpen(false);
  }

  // Identifica a página ativa
  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  // Fecha os menus ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: PointerEvent) {
      const target = event.target;

      if (!(target instanceof Node)) return;

      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setDesktopServicesOpen(false);
      }

      if (headerRef.current && !headerRef.current.contains(target)) {
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  // Fecha os menus ao pressionar Escape
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setDesktopServicesOpen(false);
        setMobileServicesOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Fecha o menu mobile ao mudar para desktop
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");

    function handleResize(event: MediaQueryListEvent) {
      if (event.matches) {
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
      } else {
        setDesktopServicesOpen(false);
      }
    }

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="
        sticky top-0 z-50
        w-full bg-primary shadow-md
      "
    >
      <div
        className="
          container-site flex
          min-h-20 items-center
          justify-between gap-6
          py-3
        "
      >
        {/* LOGOTIPO */}

        <Link
          href="/"
          onClick={closeMenus}
          aria-label="JP Vidraçaria - Página inicial"
          className="relative block shrink-0"
        >
          <Image
            src="/images/logo.webp"
            alt={company.name}
            width={180}
            height={80}
            preload
            className="
              h-auto w-36
              object-contain
              sm:w-40 xl:w-44
            "
          />
        </Link>

        {/* NAVEGAÇÃO DESKTOP */}

        <nav
          aria-label="Menu principal"
          className="
            hidden items-center
            gap-6 xl:flex
          "
        >
          {navigationLinks.map(link => {
            const active = isActive(link.href);

            // Dropdown de serviços
            if (link.href === "/servicos") {
              return (
                <div key={link.href} ref={dropdownRef} className="relative">
                  <button
                    type="button"
                    aria-expanded={desktopServicesOpen}
                    aria-controls="desktop-services-menu"
                    onClick={() =>
                      setDesktopServicesOpen(previous => !previous)
                    }
                    className={`
                      flex cursor-pointer items-center
                      gap-1.5 py-3
                      text-sm font-bold
                      transition-colors
                      ${
                        active
                          ? "text-secondary"
                          : "text-secondary/80 hover:text-secondary"
                      }
                    `}
                  >
                    {link.label}

                    <ChevronDown
                      size={17}
                      aria-hidden="true"
                      className={`
                        transition-transform duration-300
                        ${desktopServicesOpen ? "rotate-180" : ""}
                      `}
                    />
                  </button>

                  {desktopServicesOpen && (
                    <div
                      id="desktop-services-menu"
                      className="
                        absolute left-0 top-full
                        w-72 overflow-hidden
                        rounded-xl border
                        border-secondary/10
                        border-t-4 border-t-secondary
                        bg-white p-2 shadow-xl
                      "
                    >
                      <Link
                        href="/servicos"
                        onClick={closeMenus}
                        aria-current={
                          pathname === "/servicos" ? "page" : undefined
                        }
                        className="
                          flex items-center
                          justify-between gap-3
                          rounded-lg bg-primary-light
                          px-4 py-3 text-sm
                          font-bold text-secondary
                          transition-colors
                          hover:bg-primary
                        "
                      >
                        Todos os serviços
                        <ChevronRight size={17} aria-hidden="true" />
                      </Link>

                      <div className="my-2 border-t border-slate-100" />

                      {serviceLinks.map(service => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={closeMenus}
                          aria-current={
                            pathname === service.href ? "page" : undefined
                          }
                          className={`
                            flex items-center
                            justify-between gap-3
                            rounded-lg px-4 py-3
                            text-sm font-medium
                            transition-colors
                            ${
                              isActive(service.href)
                                ? "bg-primary-light font-bold text-secondary"
                                : "text-slate-700 hover:bg-primary-light hover:text-secondary"
                            }
                          `}
                        >
                          {service.label}

                          <ChevronRight
                            size={16}
                            aria-hidden="true"
                            className="shrink-0"
                          />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // Links comuns
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenus}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`
                  group relative py-3
                  text-sm font-bold
                  whitespace-nowrap
                  transition-colors
                  ${
                    active
                      ? "text-secondary"
                      : "text-secondary/80 hover:text-secondary"
                  }
                `}
              >
                {link.label}

                <span
                  aria-hidden="true"
                  className={`
                    absolute bottom-1 left-0
                    h-0.5 rounded-full
                    bg-secondary
                    transition-all duration-300
                    ${active ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* WHATSAPP DESKTOP */}

        <div className="hidden shrink-0 xl:block">
          <WhatsAppButton
            text="Solicitar orçamento"
            variant="secondary"
            message={company.defaultMessage}
            showArrow={false}
          />
        </div>

        {/* BOTÃO MOBILE */}

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            setMobileMenuOpen(previous => !previous);

            setMobileServicesOpen(false);
          }}
          className="
            flex size-11 cursor-pointer
            items-center justify-center
            rounded-lg bg-secondary
            text-primary transition-colors
            hover:bg-secondary/90
            xl:hidden
          "
        >
          {mobileMenuOpen ? (
            <X size={26} aria-hidden="true" />
          ) : (
            <Menu size={26} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* NAVEGAÇÃO MOBILE */}

      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Menu mobile"
          className="
            absolute left-0 top-full
            max-h-[calc(100dvh-100px)]
            w-full overflow-y-auto
            overscroll-contain
            border-t border-secondary/10
            bg-primary shadow-xl
            xl:hidden
          "
        >
          <div
            className="
              container-site flex
              flex-col gap-2
              py-5
            "
          >
            {navigationLinks.map(link => {
              const active = isActive(link.href);

              // Dropdown mobile de serviços
              if (link.href === "/servicos") {
                return (
                  <div key={link.href}>
                    <button
                      type="button"
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services-menu"
                      onClick={() =>
                        setMobileServicesOpen(previous => !previous)
                      }
                      className={`
                        flex w-full cursor-pointer
                        items-center justify-between
                        rounded-lg px-4 py-3.5
                        text-left font-bold
                        transition-colors
                        ${
                          active || mobileServicesOpen
                            ? "bg-secondary text-white"
                            : "text-secondary hover:bg-secondary/10"
                        }
                      `}
                    >
                      {link.label}

                      <ChevronDown
                        size={20}
                        aria-hidden="true"
                        className={`
                          transition-transform duration-300
                          ${mobileServicesOpen ? "rotate-180" : ""}
                        `}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div
                        id="mobile-services-menu"
                        className="
                          mt-2 flex flex-col
                          gap-1 rounded-xl
                          bg-white/80 p-2
                        "
                      >
                        <Link
                          href="/servicos"
                          onClick={closeMenus}
                          aria-current={
                            pathname === "/servicos" ? "page" : undefined
                          }
                          className="
                            flex items-center
                            justify-between gap-3
                            rounded-lg bg-primary
                            px-4 py-3 text-sm
                            font-bold text-secondary
                          "
                        >
                          Todos os serviços
                          <ChevronRight size={17} aria-hidden="true" />
                        </Link>

                        {serviceLinks.map(service => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={closeMenus}
                            aria-current={
                              pathname === service.href ? "page" : undefined
                            }
                            className={`
                              flex items-center
                              justify-between gap-3
                              rounded-lg px-4 py-3
                              text-sm font-medium
                              transition-colors
                              ${
                                isActive(service.href)
                                  ? "bg-secondary text-white"
                                  : "text-secondary hover:bg-primary-light"
                              }
                            `}
                          >
                            {service.label}

                            <ChevronRight
                              size={16}
                              aria-hidden="true"
                              className="shrink-0"
                            />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Links comuns do menu mobile
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenus}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`
                    flex items-center
                    justify-between
                    rounded-lg px-4 py-3.5
                    font-bold transition-colors
                    ${
                      active
                        ? "bg-secondary text-white"
                        : "text-secondary hover:bg-secondary/10"
                    }
                  `}
                >
                  {link.label}

                  <ChevronRight size={18} aria-hidden="true" />
                </Link>
              );
            })}

            {/* WHATSAPP MOBILE */}

            <div className="mt-3 border-t border-secondary/20 pt-5">
              <WhatsAppButton
                text="Solicitar orçamento"
                variant="secondary"
                message={company.defaultMessage}
                className="w-full"
                showArrow={false}
              />

              <p
                className="
                  mt-3 text-center text-xs
                  font-medium text-secondary/70
                "
              >
                Atendimento em {company.location}
              </p>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
