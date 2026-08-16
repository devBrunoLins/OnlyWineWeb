/**
 * Conteúdo editorial do site.
 *
 * Centralizado para facilitar revisão de copy sem mexer em JSX. Nenhuma
 * afirmação aqui promete número de usuários, prêmios ou parcerias — o app
 * ainda não foi lançado nas lojas, e conteúdo verificável importa mais para
 * a análise da Apple do que texto de marketing inflado.
 */

export type Feature = {
  /** Slot de screenshot. Substituir o placeholder por print real do app. */
  image: string;
  title: string;
  description: string;
  eyebrow: string;
};

/**
 * Cada item descreve o que aparece no screenshot correspondente. Nada aqui
 * afirma recurso que não esteja visível em tela — o site não pode prometer
 * mais do que o app entrega.
 */
export const features: Feature[] = [
  {
    eyebrow: "Catálogo",
    title: "Os vinhos explicados já na vitrine",
    description:
      "Cada rótulo aparece com tipo, uva, país de origem, avaliação e preço por " +
      "garrafa — sem precisar abrir para descobrir o básico. A busca aceita texto " +
      "ou voz, e o coração salva o vinho nos favoritos com um toque.",
    image: "/app/HomeScreen.PNG",
  },
  {
    eyebrow: "Busca e filtros",
    title: "Filtre por país, tipo e preço",
    description:
      "Itália, França, Espanha, Estados Unidos e outros países; espumante, tinto " +
      "ou branco; e uma faixa de preço que você define. Serve tanto para quem sabe " +
      "o que procura quanto para quem só tem um limite de gasto em mente.",
    image: "/app/FilterPage.PNG",
  },
  {
    eyebrow: "Ficha do vinho",
    title: "Cada rótulo explicado em português claro",
    description:
      "Origem, safra, preço médio, estilo, uva e com o que o vinho combina. " +
      "Sem jargão de sommelier e sem aquelas notas de degustação que citam frutas " +
      "que ninguém nunca provou.",
    image: "/app/DetailPage.PNG",
  },
  {
    eyebrow: "Entrega",
    title: "Seus endereços, prontos para o pedido",
    description:
      "Busque por CEP ou endereço, use a localização do celular ou escolha um " +
      "endereço já salvo. O carrinho e o acompanhamento do pedido ficam no mesmo " +
      "app — e a entrega de bebida alcoólica exige 18 anos comprovados.",
    image: "/app/Location.PNG",
  },
  {
    eyebrow: "Videoaulas",
    title: "Aulas curtas, e de graça",
    description:
      "Uma série de aulas de dois a três minutos, gravadas em vídeo e liberadas " +
      "para qualquer pessoa cadastrada — não é preciso assinar nada. Dá para " +
      "avaliar e comentar cada aula dentro do app.",
    image: "/app/VideosPage.PNG",
  },
];

export const steps = [
  {
    title: "Baixe e crie sua conta",
    description:
      "Leva menos de um minuto. Depois é só informar o endereço de entrega — por " +
      "CEP, por busca ou pela localização do celular.",
  },
  {
    title: "Explore e entenda",
    description:
      "Filtre por país, tipo e preço, leia a ficha de cada rótulo e assista às " +
      "videoaulas quando quiser entender o que está bebendo.",
  },
  {
    title: "Receba em casa",
    description:
      "Finalize a compra pelo app e acompanhe a entrega. Se preferir constância, " +
      "o clube OnlyWinner cuida disso todo mês para você.",
  },
];

export const clubBenefits = [
  {
    title: "Seleção mensal explicada",
    description:
      "Uma curadoria pensada para o seu perfil, com material explicando por que " +
      "cada rótulo foi escolhido.",
  },
  {
    title: "Condições de assinante",
    description:
      "Preços e vantagens exclusivas na loja do app para quem mantém a assinatura ativa.",
  },
  {
    title: "Conteúdo em primeira mão",
    description:
      "Acesso antecipado a novas videoaulas e materiais produzidos pela equipe OnlyWine.",
  },
  {
    title: "Cancelamento sem burocracia",
    description:
      "A assinatura é gerenciada pela própria loja de aplicativos. Você cancela quando " +
      "quiser, direto no seu aparelho, sem precisar falar com ninguém.",
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "O que é o OnlyWine?",
    answer:
      "É um aplicativo brasileiro que reúne quatro coisas em um só lugar: descoberta " +
      "de vinhos com catálogo explicado e filtros, uma loja com entrega em casa, " +
      "videoaulas gratuitas sobre vinho e o clube de assinatura OnlyWinner.",
  },
  {
    question: "O app já está disponível para baixar?",
    answer:
      "Ainda não. O OnlyWine está em fase final de preparação para publicação na App " +
      "Store e no Google Play. Enquanto isso, você pode falar com a gente pela página " +
      "de contato para acompanhar o lançamento.",
  },
  {
    question: "Preciso pagar para usar o app?",
    answer:
      "Não. Criar conta, explorar o catálogo, receber recomendações e assistir às " +
      "videoaulas é gratuito. Você paga apenas pelos vinhos que comprar e, se quiser, " +
      "pela assinatura do clube OnlyWinner.",
  },
  {
    question: "As videoaulas são mesmo gratuitas?",
    answer:
      "São. As videoaulas ficam liberadas para qualquer pessoa com conta no app, sem " +
      "necessidade de assinatura. Elas não são um teste nem uma amostra: é o conteúdo " +
      "completo, disponível de graça.",
  },
  {
    question: "O que é o clube OnlyWinner?",
    answer:
      "É a assinatura do OnlyWine. Ela dá acesso a uma seleção mensal com curadoria, " +
      "condições exclusivas na loja e conteúdo em primeira mão. É opcional — o app " +
      "funciona normalmente sem ela.",
  },
  {
    question: "Como cancelo a assinatura?",
    answer:
      "A cobrança é feita pela loja de aplicativos, então o cancelamento também é feito " +
      "lá: em Ajustes → Assinaturas, no iPhone, ou em Assinaturas no Google Play, no " +
      "Android. Importante: excluir sua conta OnlyWine não cancela a assinatura na loja. " +
      "Cancele primeiro, para evitar novas cobranças.",
  },
  {
    question: "Existe idade mínima para usar o OnlyWine?",
    answer:
      "Sim. O app se destina exclusivamente a maiores de 18 anos, conforme a legislação " +
      "brasileira sobre bebidas alcoólicas. A idade é confirmada no cadastro e o " +
      "documento é conferido no momento da entrega.",
  },
  {
    question: "Como faço para excluir minha conta e meus dados?",
    answer:
      "Pela página de exclusão de conta aqui no site. Você informa o e-mail da conta, " +
      "recebe um código de 6 dígitos e confirma. A exclusão é imediata, permanente e " +
      "remove perfil, endereços, carrinho, favoritos, pedidos e credenciais de acesso.",
  },
  {
    question: "Como vocês tratam meus dados pessoais?",
    answer:
      "Seguindo a LGPD (Lei nº 13.709/2018). A política de privacidade descreve quais " +
      "dados são coletados, para quê, com quem são compartilhados e quais são os seus " +
      "direitos — incluindo acesso, correção e exclusão.",
  },
  {
    question: "Como falo com o suporte?",
    answer:
      "Pelo formulário da página de contato ou diretamente por e-mail, em " +
      "contact@onlywine.app. Respondemos em dias úteis.",
  },
];
