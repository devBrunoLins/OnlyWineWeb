/**
 * Cliente das Cloud Functions de exclusão de conta.
 *
 * Chama as callables (onCall v2) do projeto Firebase `onlywine` pelo protocolo
 * HTTP: POST { data } → { result } | { error }. As funções vivem em
 * OnlyWine/functions/src/accountDeletion.ts, em OUTRO repositório.
 *
 * ⚠️ As URLs abaixo são contrato com o backend e com as lojas de aplicativos.
 * Não alterar sem coordenar com o repositório das functions.
 */
const FUNCTIONS_BASE_URL = "https://southamerica-east1-onlywine.cloudfunctions.net";

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const API_MESSAGES: Record<string, string> = {
  "api.emailRequired": "Informe seu e-mail.",
  "api.emailInvalid": "E-mail inválido.",
  "api.verificationCodeRequired": "Informe o código recebido por e-mail.",
  "api.verificationCodeSixDigits": "O código deve ter 6 dígitos.",
  "api.accountDeletionNonePending":
    "Nenhuma solicitação de exclusão pendente para este e-mail. Solicite um novo código.",
  "api.codeExpiredRequestNew": "Código expirado. Solicite um novo.",
  "api.tooManyWrongCodeAttempts":
    "Muitas tentativas incorretas. Solicite um novo código.",
  "api.codeIncorrect": "Código incorreto.",
  "api.userNotFound": "Não encontramos uma conta para este e-mail.",
  "api.emailResendWaitSeconds": "Aguarde {{seconds}} segundos para reenviar.",
  "api.networkRateLimitEmail":
    "Muitas solicitações a partir desta rede. Tente novamente mais tarde.",
  "api.emailCheckFailed": "Erro ao verificar o e-mail. Tente novamente.",
  "api.emailConfigIncomplete":
    "Serviço de e-mail indisponível no momento. Tente mais tarde.",
};

export const GENERIC_ERROR = "Algo deu errado. Tente novamente em instantes.";
const NETWORK_ERROR =
  "Falha de conexão. Verifique sua internet e tente novamente.";

type CallableError = {
  message?: string;
  status?: string;
  details?: Record<string, unknown>;
};

async function callFunction(name: string, data: unknown): Promise<unknown> {
  let response: Response;

  try {
    response = await fetch(`${FUNCTIONS_BASE_URL}/${name}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });
  } catch {
    throw new Error(NETWORK_ERROR);
  }

  const body = (await response.json().catch(() => null)) as
    | { result?: unknown; error?: CallableError }
    | null;

  if (!response.ok || body?.error) {
    const key = body?.error?.message ?? "";
    const template = API_MESSAGES[key];

    if (!template) throw new Error(GENERIC_ERROR);

    const details = body?.error?.details ?? {};
    const message = template.replace(/\{\{(\w+)\}\}/g, (_, token: string) => {
      const value = (details as Record<string, unknown>)[token];
      return typeof value === "string" || typeof value === "number"
        ? String(value)
        : "";
    });

    throw new Error(message);
  }

  return body?.result;
}

export function requestDeletionCode(email: string) {
  return callFunction("requestAccountDeletionCode", { email });
}

export function confirmDeletion(email: string, code: string) {
  return callFunction("confirmAccountDeletion", { email, code });
}
