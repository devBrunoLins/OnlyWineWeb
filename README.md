# OnlyWine — site institucional

Site público de [onlywine.app](https://onlywine.app). Next.js 16 (App Router),
TypeScript, Tailwind CSS v4 e shadcn/ui. Hospedado na Vercel (`only-wine-web`).

## Rodando localmente

```bash
npm install
npm run dev     # http://localhost:3001
npm run build   # build de produção
npm run lint
```

Copie `.env.example` para `.env.local` e preencha se for testar o formulário
de contato.

## ⚠️ Pendências antes de publicar

1. ~~Dados da empresa~~ — **preenchidos** em [`lib/site.ts`](lib/site.ts)
   (Onlywine LTDA, CNPJ 66.931.137/0001-78, Av. Paulista 326, 01310-902).
   Confirme apenas que a **razão social bate caractere a caractere** com o
   registro D-U-N-S da inscrição — a Receita registra em caixa alta
   (`ONLYWINE LTDA`), e o revisor da Apple compara literalmente.
   O build avisa se algum campo for esvaziado.
2. ~~Screenshots do app~~ — **em `public/app/`** (`InitPage`, `HomeScreen`,
   `FilterPage`, `DetailPage`, `Location`, `VideosPage`), 1170×2532.
   Novas telas: adicione o arquivo e registre em `features`
   ([`lib/content.ts`](lib/content.ts)); o carrossel do hero acompanha sozinho.
   Arquivo ausente vira placeholder identificado, nunca imagem quebrada.
3. ~~Videoaulas~~ — `/aprenda` lista as aulas reais lidas da aba Vídeos.
4. **`Location.PNG` expõe localização pessoal** — o print mostra
   "Estrada das Mulatas - Cotia" em *Usar minha localização*. É posição de GPS
   do aparelho, num site público e indexável. Substitua por um print com a
   localização desligada, ou remova a tela de `features`.
5. **Resend** (opcional) — o formulário de contato só é renderizado quando
   `RESEND_API_KEY` e `CONTACT_FROM` existem no ambiente. Sem elas, `/contato`
   mostra o e-mail de atendimento em destaque, sem formulário — nada aparece
   quebrado, e o critério de contato da Apple continua atendido.
   Para ligar: crie a chave em resend.com, verifique o domínio em
   Settings → Domains e adicione as duas variáveis na Vercel em
   Settings → Environment Variables. Um novo deploy é necessário: a checagem
   acontece no build.
   **O domínio do `CONTACT_FROM` precisa ser exatamente um dos verificados.**
   Hoje o verificado é `updates.onlywine.app` — enviar de `@onlywine.app`
   é rejeitado, porque o Resend trata apex e subdomínio como domínios
   distintos. Falhas de envio aparecem nos logs da Vercel com a causa do
   Resend (`[contato] falha ao enviar via Resend: ...`).
6. **Links das lojas** — quando o app for publicado, preencher `stores` em
   [`lib/site.ts`](lib/site.ts). Os selos viram links automaticamente.

## URLs que não podem mudar

Estão registradas nos consoles da App Store e do Google Play e em documentos
legais:

- `/politica-de-privacidade`
- `/termos-de-servico`
- `/excluir-conta`

A página de exclusão chama Cloud Functions do projeto Firebase `onlywine`
(região `southamerica-east1`), definidas em **outro repositório**
(`OnlyWine/functions/src/accountDeletion.ts`). As URLs estão em
[`lib/account-deletion.ts`](lib/account-deletion.ts) e são contrato com o
backend.

## Estrutura

```
app/                 rotas (App Router) + robots.ts, sitemap.ts, opengraph-image.tsx
  api/contato/       Route Handler do formulário (Resend)
components/          componentes de UI
  ui/                componentes do shadcn (destino registrado em components.json)
lib/site.ts          identidade da empresa, navegação, status nas lojas
lib/content.ts       copy editorial (funcionalidades, passos, clube, FAQ)
```

## Contexto histórico

Este site substitui uma versão em Nuxt 2 / Vue 2 (ambos em fim de vida) cuja
home tinha ~30 palavras visíveis. A inscrição da OnlyWine no Apple Developer
Program foi recusada por "falta de conteúdo substancial" e por não associar o
domínio a uma pessoa jurídica. A reconstrução ataca os dois pontos: o site
passou a ter ~5.300 palavras e publica a identidade legal da empresa em todas
as páginas.
