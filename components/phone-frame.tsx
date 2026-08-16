import { existsSync } from "node:fs";
import path from "node:path";

import Image from "next/image";

/**
 * Moldura de celular para os screenshots do app.
 *
 * Server Component de propósito: verifica no build se o print existe em
 * /public. Enquanto os screenshots reais não forem capturados, renderiza um
 * placeholder identificado em vez de uma imagem quebrada — assim fica óbvio
 * o que ainda falta, sem derrubar a página.
 */
function publicFileExists(src: string) {
  return existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));
}

export function PhoneFrame({
  src,
  alt,
  label,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  label?: string;
  priority?: boolean;
  className?: string;
}) {
  const hasImage = publicFileExists(src);

  return (
    <div className={`relative mx-auto w-full max-w-[286px] ${className}`}>
      {/* Corpo do aparelho */}
      <div className="relative aspect-[366/729] rounded-[2.6rem] bg-deep p-[0.6rem] shadow-[0_28px_60px_-18px_rgba(90,18,38,0.45),0_2px_0_0_rgba(255,255,255,0.18)_inset]">
        <div className="relative h-full w-full overflow-hidden rounded-[2.05rem] bg-blush">
          {hasImage ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes="286px"
              priority={priority}
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
              <span className="font-sans text-[0.625rem] font-bold tracking-[0.2em] text-primary/60 uppercase">
                Screenshot pendente
              </span>
              <span className="font-heading text-lg leading-snug text-deep/70">
                {label ?? alt}
              </span>
              <code className="mt-1 rounded bg-white/70 px-2 py-1 font-mono text-[0.625rem] text-muted-foreground">
                public{src}
              </code>
            </div>
          )}
        </div>

        {/* Ilha/entalhe superior */}
        <div className="absolute top-[0.6rem] left-1/2 h-[1.55rem] w-[6.2rem] -translate-x-1/2 rounded-b-2xl bg-deep" />
      </div>
    </div>
  );
}
