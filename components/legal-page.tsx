import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Casca compartilhada das páginas de texto legal.
 *
 * No site Nuxt esse markup estava triplicado entre política de privacidade,
 * termos de serviço e exclusão de conta. Agora é um componente só.
 */
export function LegalPage({
  title,
  updatedAt,
  lead,
  children,
}: {
  title: string;
  updatedAt?: string;
  lead?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <span aria-hidden="true">←</span> Voltar ao início
      </Link>

      <article className="mt-8">
        <header className="border-b border-rule pb-10">
          <h1 className="text-4xl leading-[1.1] font-semibold tracking-tight text-balance text-deep sm:text-5xl">
            {title}
          </h1>
          {updatedAt && (
            <p className="mt-5 font-sans text-[0.6875rem] font-bold tracking-[0.2em] text-muted-foreground uppercase">
              Última atualização: {updatedAt}
            </p>
          )}
          {lead && (
            <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
              {lead}
            </p>
          )}
        </header>

        <div className="mt-12 space-y-12">{children}</div>
      </article>
    </div>
  );
}

/** Seção numerada, no padrão de rótulo usado no resto do site. */
export function LegalSection({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <div className="flex items-baseline gap-4">
        <span className="font-heading text-2xl leading-none font-semibold text-primary/30">
          {String(number).padStart(2, "0")}
        </span>
        <h2 className="font-heading text-2xl leading-snug font-semibold text-deep">
          {title}
        </h2>
      </div>
      <div className="mt-4 space-y-4 leading-relaxed text-pretty text-muted-foreground [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:decoration-primary/30 [&_a]:underline-offset-4 [&_a:hover]:decoration-primary [&_li]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
