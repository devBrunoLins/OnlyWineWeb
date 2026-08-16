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

export const features: Feature[] = [
  {
    eyebrow: "Descoberta",
    title: "Curadoria que parte do seu gosto",
    description:
      "Você responde o que costuma beber, o quanto quer gastar e para que ocasião. " +
      "A partir daí o OnlyWine sugere rótulos que fazem sentido para o seu paladar — " +
      "e explica o porquê de cada indicação, em vez de só mostrar uma vitrine.",
    image: "/app/descoberta.png",
  },
  {
    eyebrow: "Ficha do vinho",
    title: "Cada rótulo explicado em português claro",
    description:
      "Uva, região, corpo, acidez, temperatura de serviço e com o que combina. " +
      "Sem jargão de sommelier e sem aquelas notas de degustação que citam frutas " +
      "que ninguém nunca provou.",
    image: "/app/ficha-do-vinho.png",
  },
  {
    eyebrow: "Compra e entrega",
    title: "Do carrinho até a sua porta",
    description:
      "Monte o carrinho, salve seus endereços e acompanhe o pedido pelo app. " +
      "A entrega é conferida na porta com apresentação de documento: bebida " +
      "alcoólica só é entregue para maiores de 18 anos.",
    image: "/app/carrinho.png",
  },
  {
    eyebrow: "Sua adega",
    title: "Favoritos e histórico que viram memória",
    description:
      "Marque o que gostou, registre o que achou e volte a encontrar aquele vinho " +
      "de um jantar específico. Com o tempo, seus favoritos afinam as recomendações.",
    image: "/app/favoritos.png",
  },
  {
    eyebrow: "Videoaulas",
    title: "Aprender sobre vinho, de graça",
    description:
      "O app traz videoaulas gratuitas, liberadas para qualquer pessoa cadastrada — " +
      "não é preciso assinar nada para assistir. É o jeito mais rápido de sair do " +
      "\"eu não entendo nada de vinho\".",
    image: "/app/videoaulas.png",
  },
];

export const steps = [
  {
    title: "Baixe e conte seu gosto",
    description:
      "Criar a conta leva menos de um minuto. Algumas perguntas rápidas sobre o que " +
      "você já bebeu e do que gostou bastam para o app começar a te entender.",
  },
  {
    title: "Descubra com curadoria",
    description:
      "Receba indicações explicadas, compare rótulos lado a lado e assista às " +
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
      "de vinhos com curadoria baseada no seu gosto, uma loja com entrega em casa, " +
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
