import type { Metadata } from "next";
import Link from "next/link";

import { Section, SectionHeader } from "@/components/section";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre a OnlyWine",
  description:
    "Quem é a OnlyWine, o que o aplicativo faz e os dados da empresa responsável: razão social, CNPJ, endereço e canal de atendimento.",
  alternates: { canonical: "/sobre" },
};

/**
 * Página institucional.
 *
 * É a página que um revisor da Apple procura para confirmar que o domínio
 * onlywine.app pertence à organização inscrita no Developer Program. Por isso
 * os dados da empresa aparecem completos e em destaque, não só no rodapé.
 */
export default function Sobre() {
  const dataSheet = [
    { label: "Razão social", value: company.legalName },
    { label: "Nome fantasia", value: company.name },
    { label: "CNPJ", value: company.cnpj },
    {
      label: "Endereço",
      value: `${company.address.street}, ${company.address.district}, ${company.address.city} — ${company.address.state}, ${company.address.zip}, ${company.address.country}`,
    },
    { label: "Site oficial", value: "onlywine.app" },
    { label: "Atendimento ao cliente", value: company.email, mail: true },
    { label: "Aplicativo", value: "OnlyWine (app.onlywine)" },
  ];

  return (
    <>
      <section className="bg-blush">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="eyebrow">Sobre nós</p>
          <h1 className="mt-7 max-w-4xl text-[2.75rem] leading-[1.05] font-semibold tracking-tight text-balance text-deep sm:text-6xl">
            Vinho bom não devia exigir vocabulário difícil
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-pretty text-deep/75">
            A OnlyWine é uma empresa brasileira de tecnologia que desenvolve e
            opera o aplicativo OnlyWine — descoberta, conteúdo educativo e venda
            de vinhos com entrega em casa.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeader eyebrow="Nossa proposta" title="Por que existimos" />

          <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-pretty text-muted-foreground">
            <p>
              O mercado de vinho no Brasil cresceu muito, mas continuou falando
              uma língua que afasta quem está começando. Notas de degustação
              herméticas, classificações que ninguém explica e vendedores que
              respondem à pergunta errada. O resultado é previsível: as pessoas
              compram sempre o mesmo rótulo, ou desistem.
            </p>
            <p>
              A OnlyWine foi criada para reduzir essa distância. Reunimos num
              único aplicativo quatro coisas que costumam estar espalhadas — um
              catálogo com filtros, informação clara sobre cada rótulo,
              conteúdo educativo em vídeo e a compra com entrega. Nada disso
              exige assinatura: as videoaulas são gratuitas e a loja funciona para
              qualquer pessoa cadastrada.
            </p>
            <p>
              Nosso compromisso editorial é simples: se uma explicação só faz
              sentido para quem já entende de vinho, ela ainda não está pronta.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="blush">
        <SectionHeader
          eyebrow="O que fazemos"
          title="Um app, quatro frentes"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-rule sm:grid-cols-2">
          {[
            {
              title: "Catálogo explicado",
              text: "Tipo, uva, origem, avaliação e preço visíveis já na listagem, com filtros por país, estilo e faixa de preço.",
            },
            {
              title: "Loja com entrega",
              text: "Compra pelo app, endereços salvos, acompanhamento do pedido e conferência de idade na entrega.",
            },
            {
              title: "Educação gratuita",
              text: "Videoaulas liberadas para qualquer pessoa cadastrada, sem necessidade de assinatura.",
            },
            {
              title: "Clube OnlyWinner",
              text: "Assinatura opcional que reduz o preço dos vinhos do catálogo enquanto estiver ativa. Sem caixa mensal e sem fidelidade.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-blush p-8 sm:p-10">
              <h3 className="font-heading text-xl font-semibold text-deep">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Ficha da empresa — desenhada como um rótulo de vinho */}
      <Section id="dados-da-empresa">
        <SectionHeader
          eyebrow="Identificação"
          title="Dados da empresa"
          lead="Informações cadastrais da pessoa jurídica responsável pelo aplicativo OnlyWine e por este site."
        />

        <div className="mt-14 max-w-3xl rounded-2xl border-2 border-rule bg-card p-8 sm:p-12">
          <div className="rule-double" />
          <dl className="mt-8 space-y-6">
            {dataSheet.map((row) => (
              <div
                key={row.label}
                className="grid gap-1 border-b border-rule/60 pb-6 last:border-0 last:pb-0 sm:grid-cols-[11rem_1fr] sm:gap-6"
              >
                <dt className="font-sans text-[0.6875rem] font-bold tracking-[0.18em] text-primary uppercase">
                  {row.label}
                </dt>
                <dd className="leading-relaxed text-deep">
                  {row.mail ? (
                    <a
                      href={`mailto:${row.value}`}
                      className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
                    >
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Para exercer direitos previstos na LGPD, consulte a{" "}
          <Link
            href="/politica-de-privacidade"
            className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
          >
            política de privacidade
          </Link>
          . Para excluir sua conta e seus dados, use a página de{" "}
          <Link
            href="/excluir-conta"
            className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
          >
            exclusão de conta
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
