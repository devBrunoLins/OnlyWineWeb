import type { Metadata } from "next";
import Link from "next/link";

import { Section, SectionHeader } from "@/components/section";

export const metadata: Metadata = {
  title: "Aprenda sobre vinho",
  description:
    "Guia gratuito da OnlyWine: como ler um rótulo, as principais uvas, temperatura de serviço, escolha da taça, harmonização e guarda — em português claro.",
  alternates: { canonical: "/aprenda" },
};

const grapes = [
  {
    name: "Cabernet Sauvignon",
    type: "Tinta",
    note: "Encorpada, tânica, com notas de frutas escuras e pimentão. Pede comida de sabor forte — carne vermelha, queijo curado.",
  },
  {
    name: "Merlot",
    type: "Tinta",
    note: "Mais macia e redonda que a Cabernet, com taninos discretos. Boa porta de entrada para quem acha tinto “áspero”.",
  },
  {
    name: "Malbec",
    type: "Tinta",
    note: "Símbolo da Argentina. Frutada, de cor intensa e textura aveludada. Combina com churrasco sem esforço nenhum.",
  },
  {
    name: "Pinot Noir",
    type: "Tinta",
    note: "Leve, elegante e delicada, com acidez alta. Funciona até com peixe mais gorduroso, o que quase nenhum tinto faz.",
  },
  {
    name: "Chardonnay",
    type: "Branca",
    note: "Camaleoa: fresca e cítrica quando feita em aço, cremosa e amanteigada quando passa por barrica de carvalho.",
  },
  {
    name: "Sauvignon Blanc",
    type: "Branca",
    note: "Muito aromática e ácida, com notas herbáceas e cítricas. Excelente com saladas, frutos do mar e queijo de cabra.",
  },
];

const temperatures = [
  { style: "Espumante", range: "6 – 8 °C", tip: "Gelado o suficiente para manter a perlage fina e a acidez viva." },
  { style: "Branco leve e rosé", range: "8 – 10 °C", tip: "Frio, mas não congelado: abaixo disso o aroma some." },
  { style: "Branco encorpado", range: "10 – 12 °C", tip: "Um pouco menos gelado deixa a textura cremosa aparecer." },
  { style: "Tinto leve", range: "12 – 14 °C", tip: "Pinot Noir e Gamay ganham muito com 20 minutos na geladeira." },
  { style: "Tinto encorpado", range: "15 – 18 °C", tip: "“Temperatura ambiente” foi definida na Europa, não no Brasil." },
];

export default function Aprenda() {
  return (
    <>
      <section className="bg-blush">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="eyebrow">Conteúdo gratuito</p>
          <h1 className="mt-7 max-w-4xl text-[2.75rem] leading-[1.05] font-semibold tracking-tight text-balance text-deep sm:text-6xl">
            Guia de vinho para quem não quer decorar nada
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-pretty text-deep/75">
            Tudo o que está aqui é aberto: sem cadastro, sem paywall, sem
            assinatura. No aplicativo OnlyWine, o mesmo conteúdo continua em
            videoaulas — também gratuitas.
          </p>
        </div>
      </section>

      {/* ── Rótulo ─────────────────────────────────────────────────────── */}
      <Section id="rotulo">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeader eyebrow="Capítulo 01" title="Como ler um rótulo" />
          <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-pretty text-muted-foreground">
            <p>
              Um rótulo de vinho parece cheio de informação decorativa, mas quase
              tudo ali tem função prática. Vale conhecer cinco campos.
            </p>
            <p>
              <strong className="text-deep">A uva</strong> é o que mais influencia
              o sabor. Vinhos do Novo Mundo (Chile, Argentina, Brasil, Estados
              Unidos, Austrália) costumam estampar a uva no rótulo. Vinhos
              europeus muitas vezes não fazem isso: trazem a região, e a uva fica
              subentendida — um Chianti é feito de Sangiovese, um Rioja é
              majoritariamente Tempranillo.
            </p>
            <p>
              <strong className="text-deep">A região</strong> diz mais do que o
              país. Clima frio tende a produzir vinhos com mais acidez e menos
              álcool; clima quente, o contrário. Por isso um Cabernet chileno e um
              Cabernet francês, feitos da mesma uva, podem parecer bebidas
              diferentes.
            </p>
            <p>
              <strong className="text-deep">A safra</strong> é o ano da colheita.
              Para a maior parte dos vinhos vendidos no Brasil, quanto mais recente
              melhor: eles foram feitos para serem bebidos jovens, não guardados.
            </p>
            <p>
              <strong className="text-deep">O teor alcoólico</strong> é uma pista
              de corpo. Abaixo de 12,5% costuma indicar um vinho mais leve; acima
              de 14%, algo mais encorpado e quente na boca.
            </p>
            <p>
              <strong className="text-deep">A classificação</strong> (DOC, DO, IG,
              AOC, DOCG) indica que o produtor seguiu as regras da denominação de
              origem. É um selo de procedência e método — não uma nota de
              qualidade.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Uvas ───────────────────────────────────────────────────────── */}
      <Section tone="blush" id="uvas">
        <SectionHeader
          eyebrow="Capítulo 02"
          title="Seis uvas que resolvem a maior parte das escolhas"
          lead="Existem milhares de castas no mundo. Estas seis cobrem boa parte do que você encontra numa prateleira brasileira — e entender o perfil delas já elimina quase todo o chute."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {grapes.map((grape) => (
            <article key={grape.name} className="bg-blush p-8">
              <p className="font-sans text-[0.6875rem] font-bold tracking-[0.2em] text-primary uppercase">
                {grape.type}
              </p>
              <h3 className="mt-3 font-heading text-xl leading-snug font-semibold text-deep">
                {grape.name}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {grape.note}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Temperatura ────────────────────────────────────────────────── */}
      <Section id="temperatura">
        <SectionHeader
          eyebrow="Capítulo 03"
          title="Temperatura muda mais do que o preço"
          lead="Servir um vinho na temperatura errada estraga um rótulo bom. Servir na certa melhora um rótulo simples. É o ajuste mais barato que existe."
        />

        <div className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-rule">
                <th className="py-4 pr-6 font-sans text-[0.6875rem] font-bold tracking-[0.18em] text-primary uppercase">
                  Estilo
                </th>
                <th className="py-4 pr-6 font-sans text-[0.6875rem] font-bold tracking-[0.18em] text-primary uppercase">
                  Temperatura
                </th>
                <th className="py-4 font-sans text-[0.6875rem] font-bold tracking-[0.18em] text-primary uppercase">
                  Por quê
                </th>
              </tr>
            </thead>
            <tbody>
              {temperatures.map((row) => (
                <tr key={row.style} className="border-b border-rule/60">
                  <td className="py-5 pr-6 font-heading text-lg font-semibold text-deep">
                    {row.style}
                  </td>
                  <td className="py-5 pr-6 whitespace-nowrap text-deep">
                    {row.range}
                  </td>
                  <td className="py-5 leading-relaxed text-muted-foreground">
                    {row.tip}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground">
          Uma regra prática que funciona no Brasil: quase todo tinto vendido aqui
          está quente demais quando você abre. Vinte minutos na geladeira antes de
          servir resolvem — e não, isso não é heresia.
        </p>
      </Section>

      {/* ── Harmonização ───────────────────────────────────────────────── */}
      <Section tone="blush" id="harmonizacao">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeader
            eyebrow="Capítulo 04"
            title="Harmonizar sem regra decorada"
          />
          <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-pretty text-muted-foreground">
            <p>
              “Tinto com carne, branco com peixe” acerta às vezes e erra bastante.
              A regra existe porque é fácil de lembrar, não porque é precisa. Três
              princípios explicam melhor o que acontece na boca.
            </p>
            <p>
              <strong className="text-deep">Peso combina com peso.</strong> Um
              prato leve é atropelado por um vinho encorpado, e um prato pesado
              faz um vinho delicado desaparecer. Antes de pensar na cor, pense na
              intensidade dos dois lados.
            </p>
            <p>
              <strong className="text-deep">Acidez corta gordura.</strong> Vinhos
              ácidos limpam o paladar depois de algo gorduroso. É por isso que
              espumante com fritura funciona tão bem — e por que um branco ácido
              acompanha feijoada melhor do que muita gente imagina.
            </p>
            <p>
              <strong className="text-deep">Tanino precisa de proteína.</strong> O
              tanino é aquela sensação de secura no tinto. Ele se liga à gordura e
              à proteína da carne e suaviza. Sozinho, com um prato leve, ele fica
              agressivo.
            </p>
            <p>
              Com esses três princípios, você deduz a combinação em vez de
              decorá-la — e acerta em pratos que nenhuma tabela de harmonização
              cobriria.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Videoaulas no app ──────────────────────────────────────────── */}
      <Section tone="deep">
        <SectionHeader
          tone="dark"
          eyebrow="No aplicativo"
          title="As videoaulas continuam a conversa"
          lead="No app OnlyWine este conteúdo vira aula em vídeo, com degustação demonstrada na prática. Tudo liberado para qualquer pessoa cadastrada — assinar o clube OnlyWinner não é necessário."
        />

        {/*
          TODO(conteúdo): substituir pela lista real de videoaulas gravadas —
          títulos e duração. Enquanto isso, descrevemos apenas os temas, que são
          verificáveis. Não inventar nomes de aulas que não existem.
        */}
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Degustação passo a passo",
            "Uvas e regiões na prática",
            "Serviço: taça, temperatura e decantação",
            "Montando sua primeira adega",
          ].map((topic, index) => (
            <li key={topic} className="bg-deep p-8">
              <span className="font-heading text-3xl font-semibold text-gold/40">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-heading text-lg leading-snug font-semibold text-white">
                {topic}
              </h3>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-deep-foreground/55">
          O aplicativo está em preparação para publicação nas lojas.{" "}
          <Link
            href="/contato"
            className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >
            Fale com a gente
          </Link>{" "}
          para acompanhar o lançamento.
        </p>
      </Section>

      <Section>
        <div className="rounded-2xl border border-rule bg-card p-8 sm:p-12">
          <p className="eyebrow">Aviso</p>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
            Este material tem finalidade informativa e cultural. O consumo de
            bebidas alcoólicas é proibido para menores de 18 anos e não é
            recomendado para gestantes ou pessoas com condições de saúde que o
            contraindiquem. Se for beber, não dirija.{" "}
            <strong className="text-deep">Beba com moderação.</strong>
          </p>
        </div>
      </Section>
    </>
  );
}
