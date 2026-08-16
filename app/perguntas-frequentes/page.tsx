import type { Metadata } from "next";
import Link from "next/link";

import { faqs } from "@/lib/content";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description:
    "Dúvidas sobre o aplicativo OnlyWine: disponibilidade nas lojas, preços, videoaulas gratuitas, clube OnlyWinner, cancelamento, idade mínima, dados pessoais e suporte.",
  alternates: { canonical: "/perguntas-frequentes" },
};

/**
 * FAQ.
 *
 * Usa <details>/<summary> nativos de propósito: o acordeão funciona sem
 * JavaScript e todas as respostas ficam no HTML servido — tanto para crawlers
 * quanto para o revisor da Apple. Um acordeão em JS esconderia o conteúdo de
 * quem extrai o texto da página.
 */
export default function PerguntasFrequentes() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-blush">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="eyebrow">Ajuda</p>
          <h1 className="mt-7 max-w-3xl text-[2.75rem] leading-[1.05] font-semibold tracking-tight text-balance text-deep sm:text-6xl">
            Perguntas frequentes
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-pretty text-deep/75">
            O que mais chega até nós sobre o app, a loja, o clube e seus dados.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="border-t border-rule">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group border-b border-rule">
              <summary className="flex cursor-pointer list-none items-start gap-5 py-6 [&::-webkit-details-marker]:hidden">
                <span className="mt-1 font-sans text-[0.6875rem] font-bold tracking-[0.18em] text-primary/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="flex-1 font-heading text-xl leading-snug font-semibold text-deep transition-colors group-hover:text-primary">
                  {faq.question}
                </h2>
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-2xl leading-none text-primary transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-7 pl-11 leading-relaxed text-pretty text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-blush p-8 sm:p-10">
          <h2 className="font-heading text-2xl font-semibold text-deep">
            Não achou sua resposta?
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Escreva para{" "}
            <a
              href={`mailto:${company.email}`}
              className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
            >
              {company.email}
            </a>{" "}
            ou use o formulário de contato. Respondemos em dias úteis.
          </p>
          <Link
            href="/contato"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-deep"
          >
            Ir para o contato
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </>
  );
}
