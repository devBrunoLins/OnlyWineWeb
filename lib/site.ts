/**
 * Fonte única de verdade da identidade do site.
 *
 * A inscrição no Apple Developer Program foi recusada porque o site não
 * associava o domínio a uma pessoa jurídica. A razão social abaixo precisa
 * bater CARACTERE A CARACTERE com o registro D-U-N-S usado na inscrição —
 * é assim que o revisor confirma que onlywine.app pertence à organização.
 *
 * Estes dados aparecem no rodapé de TODAS as páginas, em /sobre, em /contato e
 * como controlador na política de privacidade. Esvaziar qualquer campo aqui
 * desfaz o motivo pelo qual o site foi reconstruído — por isso o build avisa.
 */

export const company = {
  /** Nome fantasia / marca. */
  name: "OnlyWine",
  /** Razão social exata do registro D-U-N-S. */
  legalName: "Onlywine LTDA",
  /** Dígitos verificadores conferidos. */
  cnpj: "66.931.137/0001-78",
  address: {
    street: "Avenida Paulista, 326 — Conj. 88/89",
    district: "Bela Vista",
    city: "São Paulo",
    state: "SP",
    /** CEP de grande usuário do Edifício Maria José; confere na base dos Correios. */
    zip: "01310-902",
    country: "Brasil",
  },
  email: "contact@onlywine.app",
  foundedYear: 2026,
} as const;

/** Endereço em uma linha, para rodapé e blocos compactos. */
export const addressLine = [
  company.address.street,
  company.address.district,
  `${company.address.city} — ${company.address.state}`,
  company.address.zip,
  company.address.country,
].join(", ");

/**
 * Campos de identificação obrigatórios que estejam vazios ou com placeholder.
 *
 * Guarda contra regressão: hoje está tudo preenchido, e precisa continuar
 * assim. Um campo vazio some silenciosamente do rodapé; um placeholder aparece
 * como tal para quem estiver lendo a página.
 */
export const pendingCompanyFields = Object.entries({
  "razão social": company.legalName,
  CNPJ: company.cnpj,
  logradouro: company.address.street,
  bairro: company.address.district,
  cidade: company.address.city,
  UF: company.address.state,
  CEP: company.address.zip,
})
  .filter(([, value]) => !value.trim() || /PREENCHER|TODO|XXX/i.test(value))
  .map(([field]) => field);

export const hasPendingCompanyData = pendingCompanyFields.length > 0;

// Aviso em tempo de build: publicar sem identificação completa da organização
// reproduz exatamente o motivo da recusa da Apple.
if (typeof window === "undefined" && hasPendingCompanyData) {
  console.warn(
    `\n⚠️  OnlyWine — dados da empresa incompletos: ${pendingCompanyFields.join(", ")}.` +
      `\n    Preencha em lib/site.ts antes de publicar.\n`,
  );
}

export const siteUrl = "https://onlywine.app";

export const nav = [
  { href: "/#o-app", label: "O app" },
  { href: "/#clube", label: "Clube" },
  { href: "/aprenda", label: "Aprenda" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
] as const;

export const legalNav = [
  { href: "/politica-de-privacidade", label: "Política de privacidade" },
  { href: "/termos-de-servico", label: "Termos de serviço" },
  { href: "/excluir-conta", label: "Exclusão de conta" },
  { href: "/perguntas-frequentes", label: "Perguntas frequentes" },
] as const;

/**
 * Status nas lojas. O app ainda não foi publicado — por isso os selos são
 * informativos, não links. Links que não levam ao produto (a versão anterior
 * do site apontava para uma busca no apple.com) reforçam a leitura de
 * "site placeholder" para o revisor da Apple.
 */
export const stores = {
  appStore: { available: false, url: null as string | null },
  googlePlay: { available: false, url: null as string | null },
} as const;
