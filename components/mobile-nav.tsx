"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { legalNav, nav } from "@/lib/site";

/**
 * Menu mobile. Substitui o botão hamburguer do site anterior, que era markup
 * copiado de um template e não tinha handler nenhum — no celular não existia
 * navegação alguma.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-deep transition-colors hover:bg-blush"
      >
        <span className="relative block h-3.5 w-5">
          <span
            className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
              open ? "top-1.5 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute top-1.5 left-0 block h-px w-full bg-current transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
              open ? "top-1.5 -rotate-45" : "top-3"
            }`}
          />
        </span>
      </button>

      {open && (
        <div
          id="menu-mobile"
          className="fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto border-t border-rule bg-background px-5 pt-8 pb-12"
        >
          <nav aria-label="Principal (mobile)">
            <ul className="flex flex-col">
              {nav.map((item, index) => (
                <li key={item.href} className="border-b border-rule/60">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rise flex items-baseline gap-4 py-4 font-heading text-2xl text-deep"
                    style={{ animationDelay: `${index * 45}ms` }}
                  >
                    <span className="font-sans text-[0.6875rem] font-bold tracking-widest text-primary/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="mt-8 flex flex-col gap-3">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
