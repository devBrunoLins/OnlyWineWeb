import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { isContactFormConfigured } from "@/lib/contact";
import { addressLine, company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a equipe OnlyWine: e-mail de atendimento e dados da empresa para dúvidas sobre o app, pedidos, assinatura, privacidade e parcerias.",
  alternates: { canonical: "/contato" },
};

/**
 * Página de contato.
 *
 * Os canais e os dados da empresa ficam no HTML servido, acima do formulário:
 * mesmo que o JavaScript falhe ou que a rota de envio esteja indisponível,
 * quem chega aqui consegue entrar em contato. A Apple exige explicitamente
 * que clientes consigam pedir assistência.
 */
export default function Contato() {
  const formReady = isContactFormConfigured();

  return (
    <>
      <section className="bg-blush">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="eyebrow">Atendimento</p>
          <h1 className="mt-7 max-w-3xl text-[2.75rem] leading-[1.05] font-semibold tracking-tight text-balance text-deep sm:text-6xl">
            Fale com a gente
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-pretty text-deep/75">
            Dúvidas sobre o app, pedidos, assinatura, privacidade ou parcerias.
            Respondemos em dias úteis.
          </p>

          <a
            href={`mailto:${company.email}`}
            className="mt-9 inline-block font-heading text-3xl font-semibold text-primary underline decoration-primary/30 underline-offset-8 transition-colors hover:decoration-primary sm:text-4xl"
          >
            {company.email}
          </a>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {formReady ? <ContactForm /> : <EmailFallback />}

        <aside className="space-y-10">
          <section>
            <h2 className="eyebrow">Empresa responsável</h2>
            <dl className="mt-6 space-y-4 text-[0.9375rem] leading-relaxed">
              <div>
                <dt className="text-muted-foreground">Razão social</dt>
                <dd className="text-deep">{company.legalName}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">CNPJ</dt>
                <dd className="text-deep">{company.cnpj}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Endereço</dt>
                <dd className="text-deep">{addressLine}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">E-mail</dt>
                <dd>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section className="rounded-2xl bg-blush p-7">
            <h2 className="font-heading text-lg font-semibold text-deep">
              Antes de escrever
            </h2>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
              Algumas dúvidas já têm resposta pronta e resolvem mais rápido:
            </p>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
              {[
                { href: "/perguntas-frequentes", label: "Perguntas frequentes" },
                { href: "/excluir-conta", label: "Excluir minha conta" },
                {
                  href: "/politica-de-privacidade",
                  label: "Como tratamos seus dados",
                },
                { href: "/termos-de-servico", label: "Termos de serviço" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary underline decoration-primary/25 underline-offset-4 hover:decoration-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </>
  );
}

/**
 * Renderizado quando o Resend ainda não foi configurado.
 *
 * Mostrar um formulário que falha no envio é pior do que não ter formulário:
 * a pessoa preenche tudo para descobrir no fim que não funciona. Aqui o canal
 * é o e-mail, apresentado como escolha e não como plano B.
 */
function EmailFallback() {
  return (
    <div className="rounded-2xl border border-rule bg-card p-7 sm:p-10">
      <h2 className="font-heading text-2xl font-semibold text-deep">
        Escreva para a gente
      </h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        Nosso atendimento é por e-mail. Conte o que você precisa — dúvida sobre o
        app, um pedido, a assinatura OnlyWinner, privacidade ou parceria — e
        respondemos em dias úteis.
      </p>

      <a
        href={`mailto:${company.email}`}
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-deep"
      >
        Escrever para {company.email}
        <span aria-hidden="true">→</span>
      </a>

      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
        Se o seu aparelho não abrir o aplicativo de e-mail automaticamente, copie
        o endereço acima e escreva do jeito que preferir.
      </p>
    </div>
  );
}
