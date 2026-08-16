import Link from "next/link";

import { legalNav, nav } from "@/lib/site";

/**
 * Página 404 de verdade.
 *
 * No site anterior, qualquer URL desconhecida caía no `200.html` gerado pelo
 * Nuxt: um shell vazio com um spinner "Loading...". Se o revisor da Apple
 * chutou um endereço como /support ou /about, foi isso que ele encontrou.
 */
export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-28 sm:px-8 sm:py-36">
      <p className="eyebrow">Erro 404</p>

      <h1 className="mt-7 text-[2.75rem] leading-[1.05] font-semibold tracking-tight text-balance text-deep sm:text-5xl">
        Essa garrafa não está na adega
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
        A página que você procurou não existe ou mudou de endereço. Abaixo estão
        os caminhos que funcionam.
      </p>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-sans text-[0.6875rem] font-bold tracking-[0.22em] text-primary uppercase">
            Navegar
          </h2>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-deep underline decoration-rule underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-[0.6875rem] font-bold tracking-[0.22em] text-primary uppercase">
            Ajuda e termos
          </h2>
          <ul className="mt-5 space-y-3">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-deep underline decoration-rule underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link
        href="/"
        className="mt-14 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-deep"
      >
        Voltar ao início
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
