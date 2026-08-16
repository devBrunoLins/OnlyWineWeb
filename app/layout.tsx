import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteUrl } from "@/lib/site";

import "./globals.css";

/** Display editorial: serifa de alto contraste, calorosa e levemente artesanal. */
const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

/** Corpo: grotesca humanista, com diacríticos portugueses bem desenhados. */
const karla = Karla({
  subsets: ["latin", "latin-ext"],
  variable: "--font-karla",
  display: "swap",
});

const description =
  "O OnlyWine é o app brasileiro para descobrir, aprender e comprar vinho sem " +
  "intimidação: curadoria por gosto, entrega em casa, videoaulas gratuitas e o " +
  "clube de assinatura OnlyWinner.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OnlyWine — descubra, aprenda e receba vinho em casa",
    template: "%s · OnlyWine",
  },
  description,
  applicationName: "OnlyWine",
  keywords: [
    "vinho",
    "app de vinho",
    "clube de vinho",
    "comprar vinho online",
    "curso de vinho",
    "OnlyWinner",
  ],
  authors: [{ name: "OnlyWine" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "OnlyWine",
    title: "OnlyWine — descubra, aprenda e receba vinho em casa",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "OnlyWine — descubra, aprenda e receba vinho em casa",
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${karla.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
