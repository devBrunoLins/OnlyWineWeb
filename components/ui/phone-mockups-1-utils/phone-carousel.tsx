"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { PhonePlaceholder, PhoneShell } from "@/components/phone-shell";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Carrossel de mockups de celular.
 *
 * ⚠️ Implementação própria. O snippet do 21st.dev (`phone-mockups-1.tsx`)
 * apenas IMPORTA deste módulo — o arquivo com a lógica nunca foi fornecido.
 * O contrato público (`ImageItem`, `PhoneCarousel({ images })`) e o caminho
 * foram mantidos idênticos aos que o snippet espera, então substituir este
 * arquivo pelo original do 21st.dev não quebra nada.
 *
 * Os campos `label` e `available` são extensões aditivas do OnlyWine: permitem
 * mostrar um placeholder identificado enquanto o screenshot real não existe.
 */
export type ImageItem = {
  src: string;
  alt: string;
  label?: string;
  available?: boolean;
};

const AUTOPLAY_MS = 4200;

export function PhoneCarousel({
  images,
  className,
  autoPlay = true,
}: {
  images: ImageItem[];
  className?: string;
  autoPlay?: boolean;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = images.length;
  const regionRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (delta: number) => setActive((i) => (i + delta + total) % total),
    [total],
  );

  useEffect(() => {
    if (!autoPlay || paused || total < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [autoPlay, paused, total, go]);

  if (total === 0) return null;

  // Um único screenshot não é carrossel: vira mockup estático, sem controles.
  if (total === 1) {
    return (
      <div className={cn("relative mx-auto w-full max-w-[286px]", className)}>
        <Slide item={images[0]} priority />
      </div>
    );
  }

  /** Distância em passos até o slide ativo, pelo caminho mais curto. */
  const offsetOf = (index: number) => {
    const raw = index - active;
    const half = total / 2;
    if (raw > half) return raw - total;
    if (raw < -half) return raw + total;
    return raw;
  };

  return (
    <div
      ref={regionRef}
      role="region"
      aria-roledescription="carrossel"
      aria-label="Telas do aplicativo OnlyWine"
      tabIndex={0}
      className={cn("group/carousel relative outline-none", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          go(-1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          go(1);
        }
      }}
    >
      {/* A máscara faz os vizinhos desaparecerem nas bordas; sem ela o
          `overflow-hidden` os corta em quina viva. */}
      <div className="relative mx-auto w-full max-w-[540px] overflow-hidden px-6 py-4 [mask-image:linear-gradient(to_right,transparent,black_14%,black_86%,transparent)]">
        <div className="relative mx-auto aspect-[366/729] w-full max-w-[286px]">
          {images.map((item, index) => {
            const offset = offsetOf(index);
            const distance = Math.abs(offset);
            const isActive = offset === 0;

            // Além de dois passos o slide sai de cena: menos DOM ativo e
            // nenhuma imagem gigante desenhada fora da vista.
            if (distance > 2) return null;

            return (
              <div
                key={item.src}
                aria-hidden={!isActive}
                className="absolute inset-0 transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: `translateX(${offset * 56}%) scale(${1 - distance * 0.13})`,
                  opacity: distance > 1 ? 0 : distance === 1 ? 0.45 : 1,
                  filter: distance === 1 ? "blur(1.5px)" : "none",
                  zIndex: total - distance,
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <Slide item={item} priority={index === 0} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Controles */}
      <div className="mt-7 flex items-center justify-center gap-5">
        <Button
          variant="outline"
          size="icon"
          onClick={() => go(-1)}
          aria-label="Tela anterior"
          className="rounded-full"
        >
          <ChevronLeft />
        </Button>

        <div className="flex items-center gap-2.5" role="tablist">
          {images.map((item, index) => (
            <button
              key={item.src}
              role="tab"
              aria-selected={index === active}
              aria-label={item.label ?? item.alt}
              onClick={() => setActive(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === active
                  ? "w-7 bg-primary"
                  : "w-1.5 bg-primary/25 hover:bg-primary/50",
              )}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={() => go(1)}
          aria-label="Próxima tela"
          className="rounded-full"
        >
          <ChevronRight />
        </Button>
      </div>

      {/* Rótulo da tela ativa, também anunciado por leitores de tela */}
      <p aria-live="polite" className="mt-4 text-center text-sm text-muted-foreground">
        {images[active].label ?? images[active].alt}
      </p>
    </div>
  );
}

function Slide({ item, priority }: { item: ImageItem; priority?: boolean }) {
  const available = item.available ?? true;

  return (
    <PhoneShell>
      {available ? (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="286px"
          priority={priority}
          className="object-cover"
        />
      ) : (
        <PhonePlaceholder label={item.label ?? item.alt} src={item.src} />
      )}
    </PhoneShell>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
