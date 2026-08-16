import Image from "next/image";

import { PhonePlaceholder, PhoneShell } from "@/components/phone-shell";
import { publicFileExists } from "@/lib/public-assets";

/**
 * Moldura de celular com um screenshot estático.
 *
 * Server Component de propósito: verifica no build se o print existe em
 * /public. Enquanto os screenshots reais não forem capturados, renderiza um
 * placeholder identificado em vez de uma imagem quebrada — assim fica óbvio
 * o que ainda falta, sem derrubar a página.
 */
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
      <PhoneShell>
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
          <PhonePlaceholder label={label ?? alt} src={src} />
        )}
      </PhoneShell>
    </div>
  );
}
