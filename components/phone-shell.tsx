import type { ReactNode } from "react";

/**
 * Moldura de celular, puramente visual.
 *
 * Sem `node:fs` e sem estado: serve tanto em Server Component quanto dentro de
 * um Client Component (o carrossel do hero). O `PhoneFrame` acrescenta a
 * verificação de screenshot faltante; o carrossel acrescenta a animação.
 */
export function PhoneShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[366/729] rounded-[2.6rem] bg-deep p-[0.6rem] shadow-[0_28px_60px_-18px_rgba(90,18,38,0.45),0_2px_0_0_rgba(255,255,255,0.18)_inset] ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2.05rem] bg-blush">
        {children}
      </div>

      {/* Ilha/entalhe superior */}
      <div className="absolute top-[0.6rem] left-1/2 h-[1.55rem] w-[6.2rem] -translate-x-1/2 rounded-b-2xl bg-deep" />
    </div>
  );
}

/** Placeholder usado enquanto o screenshot real não foi capturado. */
export function PhonePlaceholder({
  label,
  src,
}: {
  label: string;
  src: string;
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
      <span className="font-sans text-[0.625rem] font-bold tracking-[0.2em] text-primary/60 uppercase">
        Screenshot pendente
      </span>
      <span className="font-heading text-lg leading-snug text-deep/70">
        {label}
      </span>
      <code className="mt-1 rounded bg-white/70 px-2 py-1 font-mono text-[0.625rem] text-muted-foreground">
        public{src}
      </code>
    </div>
  );
}
