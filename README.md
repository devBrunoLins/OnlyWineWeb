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
2. **Screenshots do app** — cinco arquivos em `public/app/`:
   `descoberta.png`, `ficha-do-vinho.png`, `carrinho.png`, `favoritos.png`,
   `videoaulas.png`. Proporção 366×729. Enquanto não existirem, o `PhoneFrame`
   mostra um placeholder identificado em vez de imagem quebrada, e o carrossel
   do hero fica em modo estático. Ao adicionar os arquivos, o carrossel passa a
   girar sozinho — não é preciso mexer em código.
3. **Videoaulas** — trocar os temas genéricos de `/aprenda` pelos títulos reais
   das aulas gravadas (busque por `TODO(conteúdo)`).
4. **Resend** — verificar o domínio `onlywine.app` e configurar `RESEND_API_KEY`
   e `CONTACT_FROM` na Vercel.
5. **Links das lojas** — quando o app for publicado, preencher `stores` em
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
