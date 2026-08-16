import {
  type ImageItem,
  PhoneCarousel,
} from "@/components/ui/phone-mockups-1-utils/phone-carousel";
import { features } from "@/lib/content";
import { publicFileExists } from "@/lib/public-assets";

/**
 * Carrossel de telas do app usado no hero.
 *
 * Server Component: resolve aqui quais screenshots realmente existem em
 * /public e repassa o resultado ao carrossel (que é Client Component e não
 * pode tocar no sistema de arquivos).
 *
 * As telas saem de `lib/content.ts`, a mesma fonte das linhas de
 * funcionalidades — evita duas listas de screenshots divergindo com o tempo.
 */
const screens: ImageItem[] = [
  {
    src: "/app/IntroScreen.png",
    alt: "Tela de boas-vindas do aplicativo OnlyWine",
    label: "Boas-vindas",
  },
  ...features.map((feature) => ({
    src: feature.image,
    alt: `OnlyWine — ${feature.title}`,
    label: feature.eyebrow,
  })),
];

export default function PhoneMockupBasic() {
  const images = screens.map((screen) => ({
    ...screen,
    available: publicFileExists(screen.src),
  }));

  // Enquanto só a tela de boas-vindas existir, mostramos apenas ela: um
  // carrossel de um print real e cinco placeholders passaria a impressão
  // errada justamente no ponto mais visível da página.
  const real = images.filter((image) => image.available);
  const useOnlyReal = real.length > 0 && real.length < 3;

  return <PhoneCarousel images={useOnlyReal ? real : images} />;
}
