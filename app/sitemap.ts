import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

/** Não existia sitemap.xml no site anterior. */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/sobre", priority: 0.9 },
    { path: "/aprenda", priority: 0.9 },
    { path: "/contato", priority: 0.8 },
    { path: "/perguntas-frequentes", priority: 0.7 },
    { path: "/politica-de-privacidade", priority: 0.4 },
    { path: "/termos-de-servico", priority: 0.4 },
    { path: "/excluir-conta", priority: 0.4 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
