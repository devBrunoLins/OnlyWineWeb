/**
 * Fonte única de verdade da identidade do site.
 *
 * ⚠️ OS CAMPOS MARCADOS COM `PENDENTE` PRECISAM SER PREENCHIDOS ANTES DO DEPLOY.
 *
 * A inscrição no Apple Developer Program foi recusada porque o site não
 * associava o domínio a uma pessoa jurídica. A razão social abaixo precisa
 * bater CARACTERE A CARACTERE com o registro D-U-N-S usado na inscrição —
 * é assim que o revisor confirma que onlywine.app pertence à organização.
 */

/** Marcador de conteúdo pendente. Facilita achar o que falta: `grep -rn PENDENTE`. */
const PENDENTE = (campo: string) => `[PREENCHER: ${campo}]`;

export const company = {
  /** Nome fantasia / marca. */
  name: "OnlyWine",
  /** Razão social exata do registro D-U-N-S. */
  legalName: PENDENTE("razão social conforme D-U-N-S"),
  cnpj: PENDENTE("CNPJ"),
  address: {
    street: PENDENTE("logradouro e número"),
    district: PENDENTE("bairro"),
    city: PENDENTE("cidade"),
    state: PENDENTE("UF"),
    zip: PENDENTE("CEP"),
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

/** `true` quando algum dado obrigatório ainda não foi preenchido. */
export const hasPendingCompanyData = JSON.stringify(company).includes("[PREENCHER:");

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
