import Link from "next/link";

import { PhoneFrame } from "@/components/phone-frame";
import { Section, SectionHeader } from "@/components/section";
import { StoreBadges } from "@/components/store-badges";
import { Typewriter } from "@/components/typewriter";
import PhoneMockupBasic from "@/components/ui/phone-mockups-1";
import { clubBenefits, faqs, features, steps } from "@/lib/content";
import { company } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-blush">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
          <div>
            <p className="eyebrow rise">Aplicativo de vinho · Brasil</p>

            {/* A palavra animada ocupa uma linha própria (`block`): sem isso o
                H1 muda de número de linhas conforme o texto digita e apaga, e
                todo o hero abaixo dele fica pulando. */}
            <h1 className="rise mt-7 text-[2.75rem] leading-[1.02] font-semibold tracking-tight text-balance text-deep sm:text-6xl lg:text-[4.25rem]">
              Encontre seu próximo{" "}
              <span className="block min-h-[1.05em]">
                <Typewriter />
              </span>
            </h1>

            <p
              className="rise mt-7 max-w-xl text-lg leading-relaxed text-pretty text-deep/75 sm:text-xl"
              style={{ animationDelay: "80ms" }}
            >
              O OnlyWine reúne curadoria, loja com entrega em casa e videoaulas
              gratuitas num app só. Porque tomar vinho nunca precisou — e nunca
              precisará — de um porquê.
            </p>

            <StoreBadges className="rise mt-9" style={{ animationDelay: "160ms" }} />
          </div>

          {/* `isolate` cria o contexto de empilhamento: sem ele o -z-10 dos
              círculos os joga para trás do fundo da seção e eles somem. */}
          <div className="rise relative isolate" style={{ animationDelay: "220ms" }}>
            {/* Círculos decorativos herdados da identidade anterior, agora contidos */}
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"
            />
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15"
            />
            <PhoneFrame
              src="/IntroScreen.png"
              alt="Tela de boas-vindas do aplicativo OnlyWine"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── O que é ────────────────────────────────────────────────────── */}
      <Section id="o-app">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeader
            eyebrow="O que é o OnlyWine"
            title={<>Vinho sem nariz empinado</>}
          />

          <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-pretty text-muted-foreground">
            <p className="text-xl leading-relaxed text-deep">
              A maior parte das pessoas não tem medo de vinho. Tem medo de
              escolher errado na frente dos outros — e de pagar caro por isso.
            </p>
            <p>
              O OnlyWine nasceu para resolver exatamente esse desconforto. Em vez
              de uma vitrine com centenas de rótulos e nenhuma orientação, o app
              parte do que <em>você</em> já gosta e explica cada indicação em
              português claro: por que aquele vinho combina com você, com o que
              serve, a que temperatura, quanto custa.
            </p>
            <p>
              Da descoberta até a garrafa na sua mesa, tudo acontece no mesmo
              lugar: recomendação com curadoria, compra com entrega em casa,
              favoritos que viram a sua adega pessoal e videoaulas gratuitas para
              quem quiser entender o que está bebendo. Sem assinatura obrigatória
              e sem vocabulário que ninguém usa fora de uma degustação.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Telas do app (carrossel) ───────────────────────────────────── */}
      <Section id="telas" tone="blush">
        <SectionHeader
          align="center"
          eyebrow="Veja por dentro"
          title="As telas do OnlyWine"
          lead="Da primeira recomendação ao pedido a caminho de casa."
        />

        <div className="mt-16">
          <PhoneMockupBasic />
        </div>
      </Section>

      {/* ── Funcionalidades ────────────────────────────────────────────── */}
      {/* Grade de texto, sem mockups: os screenshots são a vitrine da seção
          acima, e repeti-los aqui só alongava a página sem acrescentar nada. */}
      <Section>
        <SectionHeader
          eyebrow="Dentro do app"
          title="Tudo o que você faz no OnlyWine"
          lead="Cinco frentes que funcionam juntas — descobrir, entender, comprar, guardar e aprender."
        />

        <div className="mt-16 grid gap-x-14 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article key={feature.title} className="rule-double pt-7">
              <div className="flex items-baseline gap-3">
                <span className="font-heading text-3xl leading-none font-semibold text-primary/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="eyebrow">{feature.eyebrow}</p>
              </div>

              <h3 className="mt-4 font-heading text-2xl leading-snug font-semibold text-balance text-deep">
                {feature.title}
              </h3>

              <p className="mt-4 leading-relaxed text-pretty text-muted-foreground">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Clube OnlyWinner ───────────────────────────────────────────── */}
      <Section id="clube" tone="deep">
        <SectionHeader
          tone="dark"
          eyebrow="Assinatura opcional"
          title="OnlyWinner, para quem quer constância"
          lead="Se você não quer decidir toda vez, o clube decide por você — com curadoria explicada e sem prender ninguém."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-white/12 sm:grid-cols-2">
          {clubBenefits.map((benefit) => (
            <div key={benefit.title} className="bg-deep p-8 sm:p-10">
              <h3 className="font-heading text-xl font-semibold text-white">
                {benefit.title}
              </h3>
              <p className="mt-3 leading-relaxed text-deep-foreground/70">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-deep-foreground/55">
          A assinatura é cobrada pela loja de aplicativos e gerenciada por lá.
          Atenção: excluir sua conta OnlyWine não cancela a assinatura na loja —
          cancele primeiro em Ajustes → Assinaturas (iPhone) ou no Google Play
          (Android) para evitar novas cobranças.
        </p>
      </Section>

      {/* ── Aprenda ────────────────────────────────────────────────────── */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-20">
          <SectionHeader
            eyebrow="Conteúdo gratuito"
            title="Videoaulas que não cobram nada"
            lead="As aulas do OnlyWine ficam liberadas para qualquer pessoa cadastrada. Não é amostra grátis nem isca para assinatura: é o conteúdo completo, de graça."
          />
          <div className="lg:pb-2">
            <Link
              href="/aprenda"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-deep"
            >
              Ver o guia de vinhos
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Como ler um rótulo",
              text: "Uva, safra, região, teor alcoólico e classificação — o que cada informação realmente significa na hora de escolher.",
            },
            {
              title: "Servir do jeito certo",
              text: "Temperatura, taça e tempo de abertura mudam mais o sabor do que a maioria das pessoas imagina.",
            },
            {
              title: "Harmonizar sem regra decorada",
              text: "Por que peso, acidez e gordura explicam melhor uma combinação do que a velha regra do vinho tinto com carne.",
            },
          ].map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-rule bg-card p-8 transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(90,18,38,0.4)]"
            >
              <h3 className="font-heading text-xl leading-snug font-semibold text-deep">
                {card.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Como funciona ──────────────────────────────────────────────── */}
      <Section tone="blush">
        <SectionHeader
          eyebrow="Como funciona"
          title="Três passos, nenhuma cerimônia"
          align="center"
        />

        <ol className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className="rule-double pt-8">
              <span className="font-sans text-[0.6875rem] font-bold tracking-[0.22em] text-primary uppercase">
                Passo {index + 1}
              </span>
              <h3 className="mt-4 font-heading text-2xl leading-snug font-semibold text-deep">
                {step.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── FAQ resumido ───────────────────────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Dúvidas frequentes"
          title="As perguntas que mais chegam"
        />

        <dl className="mt-14 max-w-3xl">
          {faqs.slice(0, 4).map((faq) => (
            <div key={faq.question} className="border-t border-rule py-7">
              <dt className="font-heading text-xl leading-snug font-semibold text-deep">
                {faq.question}
              </dt>
              <dd className="mt-3 leading-relaxed text-pretty text-muted-foreground">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>

        <Link
          href="/perguntas-frequentes"
          className="mt-10 inline-flex items-center gap-2 font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
        >
          Ver todas as perguntas
          <span aria-hidden="true">→</span>
        </Link>
      </Section>

      {/* ── Contato ────────────────────────────────────────────────────── */}
      <Section tone="blush" className="!pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <SectionHeader
            eyebrow="Fale com a gente"
            title="Dúvida, sugestão ou suporte?"
            lead="Respondemos em dias úteis. Nenhuma pergunta sobre vinho é boba demais — é literalmente por isso que o app existe."
          />
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <a
              href={`mailto:${company.email}`}
              className="font-heading text-2xl font-semibold text-primary underline decoration-primary/30 underline-offset-8 transition-colors hover:decoration-primary sm:text-3xl"
            >
              {company.email}
            </a>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 rounded-full border border-deep/20 px-7 py-3.5 font-medium text-deep transition-colors hover:bg-deep hover:text-white"
            >
              Abrir formulário de contato
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
