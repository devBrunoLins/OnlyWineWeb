import Image from "next/image";

import { stores } from "@/lib/site";

/**
 * Selos das lojas.
 *
 * Enquanto o app não é publicado, são informativos e NÃO são links. A versão
 * anterior do site apontava o selo da App Store para uma busca no apple.com e
 * o do Google Play para a home da loja — links que não levam ao produto são
 * exatamente o tipo de sinal que faz um revisor classificar o site como
 * placeholder. Quando `stores.*.url` for preenchido, viram links de verdade.
 */
function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 shrink-0">
      <path
        fill="currentColor"
        d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.17zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
      />
    </svg>
  );
}

function Badge({
  mark,
  store,
  href,
}: {
  mark: React.ReactNode;
  store: string;
  href: string | null;
}) {
  const content = (
    <>
      {mark}
      <span className="flex flex-col items-start leading-none">
        <span className="mb-1 text-[0.625rem] font-semibold tracking-[0.16em] uppercase opacity-70">
          {href ? "Disponível na" : "Em breve na"}
        </span>
        <span className="font-heading text-[0.9375rem] font-semibold">
          {store}
        </span>
      </span>
    </>
  );

  const base =
    "inline-flex items-center gap-3 rounded-xl px-5 py-3 transition-colors";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${base} bg-deep text-white hover:bg-primary`}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={`${base} border border-deep/15 bg-white/60 text-deep/70`}
      aria-label={`${store}: em breve`}
    >
      {content}
    </div>
  );
}

export function StoreBadges({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={className} style={style}>
      <div className="flex flex-wrap gap-3">
        <Badge mark={<AppleMark />} store="App Store" href={stores.appStore.url} />
        <Badge
          mark={
            <Image
              src="/google-play.svg"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 shrink-0"
            />
          }
          store="Google Play"
          href={stores.googlePlay.url}
        />
      </div>
      {!stores.appStore.available && !stores.googlePlay.available && (
        <p className="mt-4 max-w-md text-sm text-muted-foreground">
          O OnlyWine está em preparação para publicação nas lojas.{" "}
          <a
            href="/contato"
            className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
          >
            Fale com a gente
          </a>{" "}
          para acompanhar o lançamento.
        </p>
      )}
    </div>
  );
}
